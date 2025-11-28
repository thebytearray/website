import Link from 'next/link'
import { format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getRecentPosts, getPostStats } from '@/lib/blog'

export function BlogSection() {
  const recentPosts = getRecentPosts(3)

  if (recentPosts.length === 0) {
    return null
  }

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Latest from our Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover insights, tutorials, and updates from our team. Stay informed about the latest 
            developments in open-source software and privacy-focused technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {recentPosts.map((post) => {
            const stats = getPostStats(post.body.raw)
            return (
              <Card key={post.slug} className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{stats.readingTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    <Link href={post.url} className="hover:underline">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <CardDescription className="text-base mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.description}
                  </CardDescription>
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={post.url} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mt-auto">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group px-8 py-6 text-base">
            <Link href="/blog">
              View all posts
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 