import React, { useEffect, useState, useRef } from 'react';
type AnimationType = 'fade-up' | 'fade-down' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'pop-up';
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
}
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
      rootMargin: '0px 0px -100px 0px'
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    const baseClasses = 'transition-all duration-700';
    const delayClass = delay ? `delay-[${delay}ms]` : '';
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${delayClass} transform translate-y-0 opacity-100`;
      case 'fade-down':
        return `${baseClasses} ${delayClass} transform translate-y-0 opacity-100`;
      case 'slide-left':
        return `${baseClasses} ${delayClass} transform translate-x-0 opacity-100`;
      case 'slide-right':
        return `${baseClasses} ${delayClass} transform translate-x-0 opacity-100`;
      case 'zoom-in':
        return `${baseClasses} ${delayClass} transform scale-100 opacity-100`;
      case 'pop-up':
        return `${baseClasses} ${delayClass} transform scale-100 opacity-100`;
      case 'fade-in':
      default:
        return `${baseClasses} ${delayClass} opacity-100`;
    }
  };
  const getInitialClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'transform translate-y-16 opacity-0';
      case 'fade-down':
        return 'transform -translate-y-16 opacity-0';
      case 'slide-left':
        return 'transform translate-x-16 opacity-0';
      case 'slide-right':
        return 'transform -translate-x-16 opacity-0';
      case 'zoom-in':
        return 'transform scale-90 opacity-0';
      case 'pop-up':
        return 'transform scale-50 opacity-0';
      case 'fade-in':
      default:
        return 'opacity-0';
    }
  };
  return <div ref={sectionRef} className={isVisible ? getAnimationClass() : getInitialClass()} style={{
    transitionDelay: delay ? `${delay}ms` : '0ms',
    willChange: 'transform, opacity'
  }}>
      {children}
    </div>;
};