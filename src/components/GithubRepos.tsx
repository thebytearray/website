'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Eye, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  topics: string[];
  default_branch: string;
}

const DESCRIPTION_LIMIT = 100;
const ITEMS_PER_PAGE = 3;

export function GithubRepos() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [displayedRepos, setDisplayedRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/TheByteArray/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Sort repos by stars and forks
        const sortedRepos = data.sort((a: Repository, b: Repository) => {
          const aScore = a.stargazers_count + a.forks_count;
          const bScore = b.stargazers_count + b.forks_count;
          return bScore - aScore;
        });
        setRepos(sortedRepos);
        setDisplayedRepos(sortedRepos.slice(0, ITEMS_PER_PAGE));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = 0;
    const endIndex = nextPage * ITEMS_PER_PAGE;
    setDisplayedRepos(repos.slice(startIndex, endIndex));
    setCurrentPage(nextPage);
  };

  const showLess = () => {
    setDisplayedRepos(repos.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
  };

  const toggleDescription = (repoKey: string) => {
    setExpandedDescriptions(prev => {
      const newState = { ...prev };
      newState[repoKey] = !prev[repoKey];
      return newState;
    });
  };

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse mt-2" />
            </CardHeader>
            <CardContent>
              <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedRepos.map((repo) => {
          const repoKey = repo.html_url;
          const isLong = (repo.description?.length || 0) > DESCRIPTION_LIMIT;
          const expanded = expandedDescriptions[repoKey];
          return (
            <Card key={repo.html_url} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <a 
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    {repo.name}
                  </a>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                  {repo.language && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {repo.language}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div>
                  <p className={`text-sm dark:text-white text-gray-600 ${isLong && !expanded ? 'line-clamp-2' : ''} ${isLong ? 'mb-3' : ''}`}>
                    {repo.description || 'No description available'}
                  </p>
                  {isLong && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 -mt-2 mb-3"
                      onClick={() => toggleDescription(repoKey)}
                    >
                      {expanded ? (
                        <>
                          See less <ChevronUp className="h-3 w-3 ml-1" />
                        </>
                      ) : (
                        <>
                          See more <ChevronDown className="h-3 w-3 ml-1" />
                        </>
                      )}
                    </Button>
                  )}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span 
                          key={topic}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex gap-4 pt-2 border-t text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {repo.watchers_count}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center gap-4">
        {displayedRepos.length < repos.length && (
          <Button
            variant="outline"
            onClick={loadMore}
            className="mt-4"
          >
            See More Projects
          </Button>
        )}
        {displayedRepos.length > ITEMS_PER_PAGE && (
          <Button
            variant="outline"
            onClick={showLess}
            className="mt-4"
          >
            See Less Projects
          </Button>
        )}
      </div>
    </div>
  );
} 