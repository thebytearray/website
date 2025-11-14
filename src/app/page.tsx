import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubRepos } from "@/components/GithubRepos";
import { TeamMember } from "@/components/TeamMember";

import { BlogSection } from "@/components/blog-section";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
    description:
      "Welcome to The Byte Array Ltd - A UK-based opensource software development company specializing in privacy-focused open-source solutions and innovative technologies.",
    alternates: {
      canonical: "https://thebytearray.org",
    },
    openGraph: {
      title: "The Byte Array Ltd - Home",
      description:
        "Welcome to The Byte Array Ltd - A UK-based opensource software development company specializing in privacy-focused open-source solutions and innovative technologies.",
      url: "https://thebytearray.org",
    },
  };
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] -z-10" />
        <div className="container mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-6 animate-fade-in">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-2 text-sm">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Open Source
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors flex items-center gap-2 text-sm">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Privacy First
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight lg:leading-[1.1] animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              The Byte Array
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-muted-foreground animate-fade-in-up delay-100 leading-relaxed">
              Building privacy-focused open-source solutions for a better digital life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors text-xl">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  Open Source
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  Transparency & Collaboration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  All our code is open source and available under the Apache
                  License 2.0. We believe in the power of community-driven
                  development.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors text-xl">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  Privacy First
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  User Data Protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize user privacy in everything we build. Your data
                  belongs to you, and we&apos;re committed to protecting it.
                </p>
              </CardContent>
            </Card>
            <Card className="contribute-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors text-xl">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  Community
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  Together We Build
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Join our growing community of developers, contributors, and
                  users who share our vision for better software.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <Card className="contribute-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl md:text-4xl">About Us</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Our mission and vision
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Byte Array Ltd is a UK-based software development company
                  specializing in privacy-focused, open-source software
                  solutions. Founded by Tamim Hossain, our company leverages
                  extensive expertise in mobile, web, and systems programming to
                  deliver innovative technologies that respect user privacy
                  while solving real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a private limited company, we maintain our commitment to
                  open-source development, creating transparent, secure, and
                  accessible software solutions. Our open-source approach
                  ensures transparency while empowering developers and users to
                  understand, modify, and improve the technologies they use.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="font-medium">100% Open Source</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="font-medium">Privacy Focused</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <svg
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="font-medium">Community Driven</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our open-source projects and contributions to the
              developer community.
            </p>
          </div>
          <GithubRepos />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the passionate individuals behind The Byte Array Ltd,
              dedicated to building privacy-focused software solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <TeamMember
                name="Tamim Hossain"
                role="Founder & Lead Developer"
                github="codewithtamim"
                description="Building privacy-focused software and innovative solutions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              124 City Road, London, EC1V 2NX, United Kingdom
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Byte Array Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
