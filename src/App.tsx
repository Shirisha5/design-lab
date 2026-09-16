import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DesignLab from "./components/DesignLab";
import ProjectPage from "./components/ProjectPage";
import LabHeader from "./components/LabHeader";
import LabFooter from "./components/LabFooter";
import Preloader from "./components/Preloader";

function AppLayout() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="portfolio-app-wrapper">
        <div className="full-width-header-wrap">
          <div className="header-inner-container">
            <LabHeader />
          </div>
        </div>

        <main className="portfolio-main-content">
          <Routes>
            <Route path="/" element={<DesignLab isLoaded={!loading} />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>

        <div className="full-width-footer-wrap">
          <div className="footer-inner-container">
            <LabFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
