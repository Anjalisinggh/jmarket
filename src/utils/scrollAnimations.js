'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in from bottom animation - Professional smooth animation
export const useFadeInUp = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

// Fade in animation
export const useFadeIn = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

// Scale in animation
export const useScaleIn = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return ref;
};

// Slide in from left - Professional smooth slide
export const useSlideInLeft = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

// Slide in from right - Professional smooth slide
export const useSlideInRight = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 80,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

// Stagger animation for multiple elements - Professional staggered effect
export const useStaggerFadeIn = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (!children.length) return;

    const animation = gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        delay,
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

// Subtle card reveal animation - More elegant and professional
export const useCardReveal = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

// Stagger card reveal - Elegant sequential card animation
export const useStaggerCardReveal = (delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (!children.length) return;

    const animation = gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        stagger: {
          amount: 0.4,
          from: 'start',
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars && trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return ref;
};

