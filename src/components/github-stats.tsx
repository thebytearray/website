'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  totalStars: number;
  totalContributors: number;
}

interface GitHubRepo {
  stargazers_count: number;
  contributors_url: string;
}

interface GitHubContributor {
  id: number;
}

export default function GithubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 0,
    totalContributors: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/thebytearray/repos');
        const repos: GitHubRepo[] = await response.json();

        let totalStars = 0;
        const contributorSet = new Set<number>();

        for (const repo of repos) {
          totalStars += repo.stargazers_count;

          const contributorsResponse = await fetch(repo.contributors_url);
          const contributors: GitHubContributor[] = await contributorsResponse.json();

          contributors.forEach(contributor => {
            contributorSet.add(contributor.id);
          });
        }

        setStats({
          totalStars,
          totalContributors: contributorSet.size,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="text-center">
        <span className="text-2xl font-bold">{stats.totalStars}</span>
        <span className="text-sm text-muted-foreground">Stars</span>
      </div>
      <div className="text-center">
        <span className="text-2xl font-bold">{stats.totalContributors}</span>
        <span className="text-sm text-muted-foreground">Contributors</span>
      </div>
    </div>
  );
} 