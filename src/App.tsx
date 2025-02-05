import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import routes from "tempo-routes";
import BasicPage from "./pages/BasicPage";
import ProPage from "./pages/ProPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/basic" element={<BasicPage />} />
          <Route path="/pro" element={<ProPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
