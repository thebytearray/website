import type { BlogPost } from "@/types/blog";

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

  return { slug, ...mod.frontmatter };
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
      <section className="relative pb-12 border-b border-foreground/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                animate="visible"
                initial="hidden"
                transition={{ delay: index * 0.1 }}
                variants={fadeInUp}
              >
                <button
                  className="flex flex-col h-full w-full text-left  border border-foreground/[0.06] bg-foreground/[0.02] p-5 transition-opacity hover:opacity-80"
                  type="button"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      alt={siteConfig.team.founder.name}
                      className="w-8 h-8 "
                      src={siteConfig.team.founder.avatar}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {post.author}
                      </p>
                      <p className="text-xs text-foreground/50">
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-foreground/55 text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
