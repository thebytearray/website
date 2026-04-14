import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "@/pages/index";
import NotFoundPage from "@/pages/not-found";

const Hy2ngPrivacyPage = lazy(() => import("@/pages/hy2ng-privacy"));
const ConvertitPrivacyPage = lazy(() => import("@/pages/convertit-privacy"));
const OpenLoaderPrivacyPage = lazy(() => import("@/pages/openloader-privacy"));
const BlogIndexPage = lazy(() => import("@/pages/blog/index"));
const BlogPostPage = lazy(() => import("@/pages/blog/[slug]"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="w-8 h-8 border-2 border-foreground/20 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Hy2ngPrivacyPage />} path="/hy2ng-privacy" />
        <Route element={<ConvertitPrivacyPage />} path="/convertit-privacy" />
        <Route element={<OpenLoaderPrivacyPage />} path="/openloader-privacy" />
        <Route element={<BlogIndexPage />} path="/blog" />
        <Route element={<BlogPostPage />} path="/blog/:slug" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  );
}

export default App;
