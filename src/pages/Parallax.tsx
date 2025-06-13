import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ChevronDownIcon } from 'lucide-react';
export const Parallax = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        transform: `translate3d(0, ${scrollY * 0.5}px, 0)`
      }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-white text-center" style={{
        transform: `translate3d(0, ${scrollY * 0.2}px, 0)`
      }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t.discoverMagic}
          </h1>
          <p className="text-xl md:text-2xl mb-12">{t.scrollToExplore}</p>
          <ChevronDownIcon size={48} className="mx-auto animate-bounce opacity-75" />
        </div>
      </section>
      {/* First Parallax Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        transform: `translate3d(0, ${(scrollY - window.innerHeight) * 0.3}px, 0)`
      }} />
        <div className="absolute inset-0 bg-purple-900/70" />
        <div className="relative max-w-4xl mx-auto px-4 text-white" style={{
        transform: `translate3d(${(scrollY - window.innerHeight) * -0.2}px, 0, 0)`
      }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.parallaxSection1}
          </h2>
          <p className="text-xl md:text-2xl">{t.parallaxDesc1}</p>
        </div>
      </section>
      {/* Second Parallax Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        transform: `translate3d(0, ${(scrollY - window.innerHeight * 2) * 0.3}px, 0)`
      }} />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="relative max-w-4xl mx-auto px-4 text-white" style={{
        transform: `translate3d(${(scrollY - window.innerHeight * 2) * 0.2}px, 0, 0)`
      }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.parallaxSection2}
          </h2>
          <p className="text-xl md:text-2xl">{t.parallaxDesc2}</p>
        </div>
      </section>
      {/* Third Parallax Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        transform: `translate3d(0, ${(scrollY - window.innerHeight * 3) * 0.3}px, 0)`
      }} />
        <div className="absolute inset-0 bg-green-900/70" />
        <div className="relative max-w-4xl mx-auto px-4 text-white" style={{
        transform: `translate3d(${(scrollY - window.innerHeight * 3) * -0.2}px, 0, 0)`
      }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t.parallaxSection3}
          </h2>
          <p className="text-xl md:text-2xl">{t.parallaxDesc3}</p>
        </div>
      </section>
    </div>;
};