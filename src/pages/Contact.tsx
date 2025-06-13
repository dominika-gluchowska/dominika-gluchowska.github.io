import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
export const Contact = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <div className="w-full min-h-screen bg-slate-50">
      <section className="w-full bg-gradient-to-b from-blue-500 to-purple-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.contact}</h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl mb-8">{t.getInTouch}</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {t.contactInfo}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MailIcon className="text-purple-600" />
                    <p className="text-gray-600">hello@example.com</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="text-purple-600" />
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPinIcon className="text-purple-600" />
                    <p className="text-gray-600">
                      123 Animation Street, Design City
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {t.sendMessage}
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">{t.name}</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder={t.yourName} />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder={t.yourEmail} />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      {t.message}
                    </label>
                    <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32" placeholder={t.yourMessage}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    {t.send}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>;
};