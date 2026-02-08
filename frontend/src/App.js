import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PsychologyHome } from './pages/PsychologyHome';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { Toaster } from './components/ui/sonner';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PsychologyHome />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/aviso-legal" element={<DisclaimerPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
