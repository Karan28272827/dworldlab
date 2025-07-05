import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "-50px 0px -50px 0px"
  });

  return { ref, isInView };
};

// Animation variants for different effects
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}; 