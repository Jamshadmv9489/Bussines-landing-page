// Animation for the container (controls children timing)
export const containerVariants = {
    hidden: {}, // No animation needed for hidden state
    show: {
        transition: {
            staggerChildren: 0.8, // Delay between each child animation
            delayChildren: 0.1, // Initial delay before children start animating
        },
    },
};

// Animation for individual menu cards
export const cardVariants = {
    hidden: {
        opacity: 0, // Start invisible
        y: 60, // Move slightly down
        scale: 0.92 // Slightly smaller
    },
    show: {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        scale: 1, // Return to normal size
        transition: {
            duration: 0.3, // Quick animation
            ease: [0.25, 0.8, 0.25, 1], // Smooth easing curve
        },
    },
};