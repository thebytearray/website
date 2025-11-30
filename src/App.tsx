import { Routes, Route } from "react-router-dom";

import IndexPage from "@/pages/index";
import Hy2ngPrivacyPage from "@/pages/hy2ng-privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/hy2ng-privacy" element={<Hy2ngPrivacyPage />} />
    </Routes>
  );
}

export default App;
