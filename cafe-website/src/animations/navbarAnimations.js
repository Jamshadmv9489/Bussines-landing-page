export const container = {
  hidden: { opacity: 0, y: -20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

export const item = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};