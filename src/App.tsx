import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import SystemsAnalysisPage from './pages/SystemsAnalysisPage';
import ResourcesPage from './pages/ResourcesPage';
import EmergencyPage from './pages/EmergencyPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/systems-analysis" element={<SystemsAnalysisPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;