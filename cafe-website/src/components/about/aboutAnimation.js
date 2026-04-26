// Animation for the image (slides in from left)
export const imageVariant = {
    hidden: { opacity: 0, x: -60 }, // Start invisible and shifted left
    show: {
        opacity: 1, // Fade in
        x: 0, // Move to original position
        transition: { duration: 0.7, ease: "easeOut" }, // Smooth animation
    },
};

// Animation for the content (slides in from right)
export const contentVariant = {
    hidden: { opacity: 0, x: 60 }, // Start invisible and shifted right
    show: {
        opacity: 1, // Fade in
        x: 0, // Move to original position
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay: 0.1 // Slight delay after image animation
        },
    },
};