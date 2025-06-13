import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
export const Navbar = () => {
  const location = useLocation();
  const {
    language,
    setLanguage
  } = useLanguage();
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-600';
  };
  const isActiveLanguage = (lang: string) => {
    return language === lang ? 'text-blue-500 font-bold' : 'text-gray-600';
  };
  return <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
          Magic Patterns
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className={`${isActive('/')} hover:text-blue-500 transition-colors font-medium`}>
            {translations[language].home}
          </Link>
          <Link to="/about" className={`${isActive('/about')} hover:text-blue-500 transition-colors font-medium`}>
            {translations[language].about}
          </Link>
          <Link to="/parallax" className={`${isActive('/parallax')} hover:text-blue-500 transition-colors font-medium`}>
            {translations[language].parallax}
          </Link>
          <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-500 transition-colors font-medium`}>
            {translations[language].contact}
          </Link>
          <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-200">
            <button onClick={() => setLanguage('en')} className={`${isActiveLanguage('en')} hover:text-blue-500 transition-colors px-2 py-1`}>
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLanguage('pl')} className={`${isActiveLanguage('pl')} hover:text-blue-500 transition-colors px-2 py-1`}>
              PL
            </button>
          </div>
        </div>
      </div>
    </nav>;
};