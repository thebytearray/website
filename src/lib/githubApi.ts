const CACHE_KEY = "github_repos_cache";
const CACHE_TTL_MS = 60 * 60 * 1000;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

function getCachedRepos(): unknown[] | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);

    if (!cached) return null;

    const { data, timestamp }: CacheEntry<unknown[]> = JSON.parse(cached);

    if (Date.now() - timestamp > CACHE_TTL_MS) return null;

    return data;
  } catch {
    return null;
  }
}

function setCachedRepos(data: unknown[]): void {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch {
    // Storage full or unavailable - continue without cache
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch with exponential backoff retry for transient failures.
 */
async function fetchWithRetry(url: string, maxRetries = 3): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(10000), // 10s timeout
      });

      // Handle rate limiting - don't retry, return error
      if (response.status === 403) {
        const rateLimitRemaining = response.headers.get(
          "x-ratelimit-remaining",
        );

        if (rateLimitRemaining === "0") {
          throw new Error(
            "GitHub API rate limit exceeded. Please try again later.",
          );
        }
      }

      if (response.status === 429) {
        const retryAfter = response.headers.get("retry-after");
        const waitMs = retryAfter ? parseInt(retryAfter, 10) * 1000 : 60000;

        if (attempt < maxRetries) {
          await sleep(waitMs);
          continue;
        }
        throw new Error(
          "GitHub API rate limit exceeded. Please try again later.",
        );
      }

      return response;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      if (attempt < maxRetries) {
        const backoffMs = Math.min(1000 * 2 ** attempt, 8000);

        await sleep(backoffMs);
      } else {
        throw lastError;
      }
    }
  }

  throw lastError ?? new Error("Failed to fetch");
}

export async function fetchGitHubRepos(
  url: string,
): Promise<{ repos: unknown[]; fromCache: boolean }> {
  const cached = getCachedRepos();

  if (cached) {
    return { repos: cached, fromCache: true };
  }

  const response = await fetchWithRetry(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.statusText}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid API response");
  }

  setCachedRepos(data);

  return { repos: data, fromCache: false };
}
