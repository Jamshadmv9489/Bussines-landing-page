import { motion } from "framer-motion"; // Import animation library

function HamburgerButton({ isOpen, setIsOpen }) {
    return (
        // Button for toggling mobile menu
        <button
            aria-label="Toggle menu" // Accessibility label
            aria-expanded={isOpen} // Indicates menu state
            onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                setIsOpen((prev) => !prev); // Toggle menu state
            }}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
            {/* Top line */}
            <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} // Rotate to form X
                className="w-6 h-[2px] bg-white"
            />

            {/* Middle line */}
            <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }} // Hide when open
                className="w-6 h-[2px] bg-white"
            />

            {/* Bottom line */}
            <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }} // Rotate to form X
                className="w-6 h-[2px] bg-white"
            />
        </button>
    )
}

export default HamburgerButton;