import { type Post } from 'contentlayer/generated'

export type BlogPost = Post

export interface BlogMetadata {
  title: string
  description: string
  slug: string
  date: string
  tags?: string[]
  published: boolean
} 