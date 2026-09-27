import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { PhylumDetailPage } from './pages/PhylumDetailPage';
import { SpecimenDetailPage } from './pages/SpecimenDetailPage';
import { ExplorePage } from './pages/ExplorePage';
import { ClassificationTreePage } from './pages/ClassificationTreePage';
import { FieldGuidePage } from './pages/FieldGuidePage';
import { RevisionPage } from './pages/RevisionPage';
import { QuizPage } from './pages/QuizPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#2C2824] font-serif selection:bg-[#385E38] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phyla/:phylumId" element={<PhylumDetailPage />} />
            <Route path="/specimens/:specimenId" element={<SpecimenDetailPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/tree" element={<ClassificationTreePage />} />
            <Route path="/field-guide" element={<FieldGuidePage />} />
            <Route path="/revision" element={<RevisionPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
