import type { BlogPost } from "@/types/blog";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const blogPosts = import.meta.glob<{ frontmatter: Omit<BlogPost, "slug"> }>(
  "/content/blog/*.mdx",
  { eager: true },
);

const posts: BlogPost[] = Object.entries(blogPosts).map(([path, mod]) => {
  const slug = path.split("/").pop()?.replace(".mdx", "") || "";

  return {
    slug,
    ...mod.frontmatter,
  };
});

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const navigate = useNavigate();

  return (
    <PageLayout footerVariant="minimal">
      <section className="relative pt-24 pb-16 border-b border-foreground/[0.06]">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Breadcrumbs
                items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
              />
            </motion.div>
            <motion.p
              className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] mb-3 font-medium"
              variants={fadeInUp}
            >
              The Byte Array
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground tracking-tight leading-[1.1] mb-4"
              variants={fadeInUp}
            >
              Blog
            </motion.h1>
            <motion.p
              className="text-foreground/60 text-lg"
              variants={fadeInUp}
            >
              Updates, tutorials, and insights from our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                animate="visible"
                initial="hidden"
                transition={{ delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <Card
                  isPressable
                  className="h-full dark:bg-zinc-900/50 bg-zinc-50/50 dark:hover:bg-zinc-800/50 hover:bg-zinc-100 transition-colors"
                  onPress={() => navigate(`/blog/${post.slug}`)}
                >
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={siteConfig.team.founder.name}
                        size="sm"
                        src={siteConfig.team.founder.avatar}
                      />
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-foreground/50">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <h2 className="text-xl font-bold mb-2 dark:text-zinc-100 text-zinc-900">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-foreground/60 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
