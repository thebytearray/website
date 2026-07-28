import type { BlogPost } from "@/types/blog";

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChevronLeftIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MDXContent } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";

const blogPosts = import.meta.glob("/content/blog/*.mdx", {
  eager: true,
}) as Record<
  string,
  { frontmatter: Omit<BlogPost, "slug">; default: React.ComponentType<any> }
>;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const postEntry = Object.entries(blogPosts).find(([path]) => {
    return path.split("/").pop()?.replace(".mdx", "") === slug;
  });

  if (!postEntry) {
    return (
      <PageLayout footerVariant="minimal">
        <section className="relative pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
              <p className="text-foreground/60 mb-6">
                The blog post you are looking for does not exist.
              </p>
              <button
                className="px-6 py-2  bg-foreground text-background text-sm font-medium"
                onClick={() => navigate("/blog")}
                type="button"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  const [, mod] = postEntry;
  const post: BlogPost = {
    slug: slug!,
    ...mod.frontmatter,
  };
  const Content = mod.default;

  return (
    <PageLayout footerVariant="minimal">
      <section className="relative pt-16 pb-12 border-b border-foreground/[0.06]">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground tracking-tight leading-[1.1] mt-6 mb-4"
              variants={fadeInUp}
            >
              {post.title}
            </motion.h1>

            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <img
                alt={siteConfig.team.founder.name}
                className="w-10 h-10 "
                src={siteConfig.team.founder.avatar}
              />
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <p className="text-sm text-foreground/50">{formatDate(post.date)}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <MDXContent content={Content} />
            </motion.div>

            <motion.div className="mt-8 border-t border-foreground/[0.06]" variants={fadeInUp} />

            <motion.div className="mt-6" variants={fadeInUp}>
              <button
                className="inline-flex items-center gap-2 px-4 py-2  border border-foreground/[0.12] text-foreground/55 text-sm hover:border-foreground/25 transition-colors"
                onClick={() => navigate("/blog")}
                type="button"
              >
                <ChevronLeftIcon size={14} />
                Back to Blog
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
