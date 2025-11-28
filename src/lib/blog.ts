import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import readingTime from 'reading-time'

export function getAllPosts(): Post[] {
  return allPosts
    .filter((post: Post) => post.published)
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post: Post) => post.slug === slug)
}

export function getPostsByTag(tag: string): Post[] {
  return allPosts
    .filter((post: Post) => post.published && post.tags?.includes(tag))
    .sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  allPosts.forEach((post: Post) => {
    post.tags?.forEach((tag: string) => tags.add(tag))
  })
  return Array.from(tags)
}

export function getPostStats(content: string) {
  // Ensure content is a string
  const contentString = typeof content === 'string' ? content : String(content || '')
  
  const stats = readingTime(contentString)
  const wordCount = contentString.split(/\s+/).filter(word => word.length > 0).length
  
  return {
    wordCount,
    readingTime: stats.text,
    readingTimeMinutes: Math.ceil(stats.minutes)
  }
}

export function getRecentPosts(count: number = 3): Post[] {
  return getAllPosts().slice(0, count)
} 