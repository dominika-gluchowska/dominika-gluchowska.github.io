import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { CodeIcon, LayoutIcon, BrainIcon, TrendingUpIcon, ZapIcon, HeartIcon } from 'lucide-react';
export const ScrollAnimationDemo = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-500 to-purple-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.scrollAnimation}
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl mb-8">{t.watchElements}</p>
          </AnimatedSection>
          <AnimatedSection animation="zoom-in" delay={500}>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all">
              {t.getStarted}
            </button>
          </AnimatedSection>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              {t.animatedFeatures}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="pop-up" delay={100}>
              <FeatureCard icon={<LayoutIcon size={32} />} title={t.responsiveDesign} description={t.responsiveDesc} />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={300}>
              <FeatureCard icon={<CodeIcon size={32} />} title={t.simpleIntegration} description={t.simpleDesc} />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={500}>
              <FeatureCard icon={<BrainIcon size={32} />} title={t.smartDetection} description={t.smartDesc} />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={200}>
              <FeatureCard icon={<TrendingUpIcon size={32} />} title={t.performance} description={t.performanceDesc} />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={400}>
              <FeatureCard icon={<ZapIcon size={32} />} title={t.customEffects} description={t.customDesc} />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={600}>
              <FeatureCard icon={<HeartIcon size={32} />} title={t.userFriendly} description={t.userDesc} />
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Text Animation Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              {t.textAnimations}
            </h2>
          </AnimatedSection>
          <div className="space-y-12">
            <AnimatedSection animation="slide-right" delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {t.slideRight}
                </h3>
                <p className="text-gray-700">{t.slideRightDesc}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  {t.slideLeft}
                </h3>
                <p className="text-gray-700">{t.slideLeftDesc}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  {t.fadeUp}
                </h3>
                <p className="text-gray-700">{t.fadeUpDesc}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  {t.zoomIn}
                </h3>
                <p className="text-gray-700">{t.zoomInDesc}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Vector Animation Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              {t.vectorAnimations}
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="pop-up" delay={200}>
              <VectorCard title={t.abstractShape} color="#4F46E5" />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={400}>
              <VectorCard title={t.wavePattern} color="#7C3AED" />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={600}>
              <VectorCard title={t.geometricDesign} color="#0EA5E9" />
            </AnimatedSection>
            <AnimatedSection animation="pop-up" delay={800}>
              <VectorCard title={t.curvedLines} color="#10B981" />
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.readyToAdd}
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl mb-10">{t.bringWebsite}</p>
          </AnimatedSection>
          <AnimatedSection animation="zoom-in" delay={500}>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all">
              {t.getStartedNow}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>;
};
const FeatureCard = ({
  icon,
  title,
  description
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const VectorCard = ({
  title,
  color
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-6 flex justify-center">
        <svg width="200" height="120" viewBox="0 0 200 120">
          {/* Abstract vector shape */}
          <rect x="20" y="20" width="40" height="40" rx="8" fill={color} className="vector-element" />
          <circle cx="120" cy="40" r="25" fill={color} opacity="0.7" className="vector-element" />
          <path d="M60 80 Q100 20 140 80" stroke={color} strokeWidth="4" fill="none" className="vector-element" />
          <path d="M40 100 L80 60 L120 100" stroke={color} strokeWidth="3" fill="none" className="vector-element" />
          <circle cx="160" cy="80" r="15" fill={color} opacity="0.5" className="vector-element" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800">{title}</h3>
    </div>;
};