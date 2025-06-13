import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Parallax } from './pages/Parallax';
import { LanguageProvider } from './contexts/LanguageContext';
export function App() {
  return <LanguageProvider>
      <BrowserRouter>
        <div className="w-full min-h-screen bg-slate-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/parallax" element={<Parallax />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>;
}