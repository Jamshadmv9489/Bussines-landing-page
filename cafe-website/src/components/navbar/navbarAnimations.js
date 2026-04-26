// Animation for mobile menu container
export const container = {
  hidden: {
    opacity: 0, // Start invisible
    y: -20, // Slightly above
    scale: 0.98 // Slightly smaller
  },
  visible: {
    opacity: 1, // Fade in
    y: 0, // Move to normal position
    scale: 1, // Full size
    transition: {
      duration: 0.35, // Animation speed
      ease: "easeOut", // Smooth easing
      staggerChildren: 0.08, // Animate children one by one
      when: "beforeChildren", // Parent animates before children
    },
  },
  exit: {
    opacity: 0, // Fade out
    y: -20, // Move up slightly
    scale: 0.98, // Shrink a bit
    transition: { duration: 0.25, ease: "easeInOut" }, // Exit animation
  },
};

// Animation for each menu item
export const item = {
  hidden: {
    opacity: 0, // Start invisible
    x: -15 // Slightly shifted left
  },
  visible: {
    opacity: 1, // Fade in
    x: 0, // Move to position
    transition: { duration: 0.3, ease: "easeOut" }, // Smooth animation
  },
  exit: {
    opacity: 0, // Fade out
    x: -10, // Move slightly left
    transition: { duration: 0.2, ease: "easeIn" }, // Quick exit
  },
};