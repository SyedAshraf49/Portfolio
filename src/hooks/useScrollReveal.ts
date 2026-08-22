import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  threshold?: number;
  duration?: number;
  delay?: number;
  distance?: number;
  ease?: string;
  stagger?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.2,
    duration = 0.8,
    delay = 0,
    distance = 60,
    ease = 'power3.out',
    stagger = 0,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if it's a container with children to stagger
    const targets = stagger > 0 ? element.children : element;

    const animation = gsap.from(targets, {
      y: distance,
      opacity: 0,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [threshold, duration, delay, distance, ease, stagger]);

  return elementRef;
};

export const useScrollRevealMultiple = (selector: string, options: ScrollRevealOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.2,
    duration = 0.8,
    delay = 0,
    distance = 60,
    ease = 'power3.out',
    stagger = 0.15,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const animations = Array.from(elements).map((element, index) => {
      return gsap.from(element, {
        y: distance,
        opacity: 0,
        duration,
        delay: delay + index * stagger,
        ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      animations.forEach((animation) => animation.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, threshold, duration, delay, distance, ease, stagger]);

  return containerRef;
};
