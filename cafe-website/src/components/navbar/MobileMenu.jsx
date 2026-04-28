import { AnimatePresence, motion } from "framer-motion"; // Animation utilities
import { navLinks } from "../../constants/navLinks"; // Navigation links data
import { container, item } from "../navbar/navbarAnimations"; // Animation variants

function MobileMenu({ isOpen, setIsOpen }) {
    return (
        // Animate mount/unmount of menu
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-menu"
                    variants={container} // Container animation (stagger children)
                    initial="hidden" // Initial hidden state
                    animate="visible" // Animate when open
                    exit="exit" // Animate when closing
                    className="absolute left-0 top-16 w-full bg-[#4b3832]/95 backdrop-blur-md px-6 py-6 space-y-6"
                >
                    {/* Navigation links */}
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.id} // Unique key
                            href={`#${link.id}`} // Anchor link
                            variants={item} // Item animation
                            whileHover={{ x: 8, scale: 1.05 }} // Slide right on hover
                            whileTap={{ scale: 0.95 }} // Shrink on tap
                            onClick={() => setIsOpen(false)} // Close menu on click
                            className="flex justify-between text-lg font-semibold text-white/90 hover:text-yellow-400"
                        >
                            {link.name}
                            <span className="text-yellow-400">→</span> {/* Arrow icon */}
                        </motion.a>
                    ))}

                    {/* Divider */}
                    <motion.hr className="border-white/20" />

                    {/* WhatsApp CTA */}
                    <motion.a
                        href="#"
                        rel="noopener noreferrer" // Security
                        onClick={() => setIsOpen(false)} // Close menu
                        className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold transition hover:bg-yellow-400 hover:scale-105 active:scale-95 active:bg-yellow-600"
                    >
                        Order on WhatsApp
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu;