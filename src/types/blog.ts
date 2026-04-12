export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: React.ComponentType;
}
