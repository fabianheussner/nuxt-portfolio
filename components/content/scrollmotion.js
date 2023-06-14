export const motionFadeEnter = {
  initial: {
    // y: 80,
    scale: 0.98,
    opacity: 0,
  },
  enter: {
    // y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 800,
      // delay: 200,
      type: 'spring',
      stiffness: 200,
      damping: 50,
      mass: 0.5,
    },
  },
};
export const motionFadeUp = {
  initial: {
    y: 80,
    scale: 0.98,
    opacity: 0,
  },
  visibleOnce: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 800,
      // delay: 200,
      type: 'spring',
      stiffness: 200,
      damping: 50,
      mass: 0.5,
    },
  },
};
export const motionFadeIn = {
  initial: {
    opacity: 0,
  },
  visibleOnce: {
    opacity: 1,
    transition: {
      duration: 800,
      type: 'spring',
      stiffness: 200,
      damping: 50,
      mass: 0.5,
    },
  },
};
  