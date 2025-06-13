import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
export const About = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <div className="w-full min-h-screen bg-slate-50">
      <section className="w-full bg-gradient-to-b from-blue-500 to-purple-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.aboutUs}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl mb-8">{t.learnMore}</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t.ourStory}
              </h2>
              <p className="text-gray-600 mb-6">{t.storyDesc1}</p>
              <p className="text-gray-600 mb-6">{t.storyDesc2}</p>
              <p className="text-gray-600">{t.storyDesc3}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>;
};