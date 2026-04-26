import { motion } from "framer-motion"; // Import motion for animations
import { imageVariant } from "./aboutAnimation"; // Import image animation variant

export default function AboutImage() {
    return (
        // Animated container for the image
        <motion.div
            variants={imageVariant} // Apply animation variants
            initial="hidden" // Initial hidden state
            whileInView="show" // Animate when in viewport
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
            className="overflow-hidden rounded-2xl shadow-lg" // Styling for container
        >
            {/* Image with hover animation */}
            <motion.img
                src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg" // Image source
                alt="Coffee" // Accessibility text
                className="w-full h-full object-cover" // Responsive styling
                whileHover={{ scale: 1.05 }} // Slight zoom on hover
                transition={{ duration: 0.4 }} // Smooth hover animation
                loading="lazy" // Lazy load for performance
            />
        </motion.div>
    );
}