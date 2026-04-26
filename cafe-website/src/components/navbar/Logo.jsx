import { useEffect } from "react"; // React hook for side effects
import { motion, useAnimation } from "framer-motion"; // Animation utilities
import { Coffee } from "lucide-react"; // Coffee icon

function Logo() {
    const controls = useAnimation(); // Controls for text animation
    const text = "Brew Haven"; // Logo text
    const letters = text.split(""); // Split text into individual characters

    // Animation for each letter
    const letterVariants = {
        hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
        visible: { opacity: 1, y: 0 }, // Fade in and move up
    };

    const LETTER_DELAY = 0.08; // Delay between each letter animation
    const ICON_CYCLE = 6; // Total animation cycle time (seconds)

    useEffect(() => {
        let isMounted = true; // Track component mount status

        const loop = async () => {
            const textAnimationTime = letters.length * LETTER_DELAY * 1000; // Total text animation time
            const totalCycleTime = ICON_CYCLE * 1000; // Total cycle time in ms

            // Loop animation continuously
            while (isMounted) {
                await controls.start("hidden"); // Reset animation
                await controls.start("visible"); // Play animation

                // Calculate remaining time to sync with icon animation
                const remainingTime = totalCycleTime - textAnimationTime;

                await new Promise((res) =>
                    setTimeout(res, remainingTime)
                );
            }
        };

        loop(); // Start animation loop

        return () => {
            isMounted = false; // Cleanup on unmount
        };
    }, [controls, letters.length]);

    return (
        <div className="flex items-center gap-2 cursor-pointer">

            {/* Animated Coffee Icon */}
            <motion.div
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }} // Subtle rotation + scale
                transition={{
                    duration: 1,
                    repeat: Infinity, // Loop forever
                    repeatDelay: 5, // Wait between loops
                }}
                whileHover={{ scale: 1.1 }} // Slight zoom on hover
            >
                <Coffee className="w-9 h-9 text-yellow-400" />
            </motion.div>

            {/* Animated Logo Text */}
            <motion.h1
                aria-label={text} // Accessibility label
                role="heading"
                initial="hidden" // Initial animation state
                animate={controls} // Controlled animation
                className="flex items-center text-2xl md:text-3xl font-semibold tracking-wide text-[#f5e6d3]"
            >
                {/* Render each letter with animation */}
                {letters.map((char, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariants} // Apply letter animation
                        transition={{ delay: i * LETTER_DELAY }} // Stagger effect
                    >
                        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

export default Logo;