import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "@/pages/index";
import NotFoundPage from "@/pages/not-found";

const Hy2ngPrivacyPage = lazy(() => import("@/pages/hy2ng-privacy"));
const ConvertitPrivacyPage = lazy(() => import("@/pages/convertit-privacy"));

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
        <Route path="/" element={<IndexPage />} />
        <Route path="/hy2ng-privacy" element={<Hy2ngPrivacyPage />} />
        <Route path="/convertit-privacy" element={<ConvertitPrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
