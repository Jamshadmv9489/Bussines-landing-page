import { useState, useEffect, useRef } from "react";
import { Coffee } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../constants/navLinks";
import { container, item } from "../animations/navbarAnimations";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const MotionCoffee = motion(Coffee);
    const text = "Brew Haven";

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <nav className="bg-[#3b2f2f] text-white fixed w-full top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <MotionCoffee
                            className="w-10 h-10 text-yellow-400"
                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                        />

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            className="flex items-center text-2xl md:text-3xl font-semibold tracking-wide text-[#f5e6d3]"
                        >
                            {text.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="relative group text-sm md:text-base font-semibold text-white/90 hover:text-yellow-400 transition"
                            >
                                {link.name}
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20order%20from%20Brew%20Haven"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition"
                        >
                            Order on WhatsApp
                        </a>
                    </div>

                    {/* ✅ MOBILE WRAPPER (IMPORTANT FIX) */}
                    <div ref={menuRef} className="md:hidden">

                        {/* Mobile Button */}
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen((prev) => !prev);
                            }}
                            className="w-10 h-10 flex flex-col justify-center items-center gap-1"
                        >
                            <motion.span
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                                className="w-6 h-[2px] bg-white"
                            />
                            <motion.span
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="w-6 h-[2px] bg-white"
                            />
                            <motion.span
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                                className="w-6 h-[2px] bg-white"
                            />
                        </button>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    key="mobile-menu"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="absolute left-0 top-16 w-full bg-[#4b3832]/95 backdrop-blur-md px-6 py-6 space-y-6"
                                >
                                    {navLinks.map((link) => (
                                        <motion.a
                                            key={link.id}
                                            href={`#${link.id}`}
                                            variants={item}
                                            whileHover={{ x: 8, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setIsOpen(false)}
                                            className="flex justify-between text-lg font-semibold text-white/90 hover:text-yellow-400"
                                        >
                                            {link.name}
                                            <span className="text-yellow-400">→</span>
                                        </motion.a>
                                    ))}

                                    <motion.hr className="border-white/20" />

                                    <motion.a
                                        href="https://wa.me/8078979489?text=Hi%20I%20want%20to%20order%20from%20Brew%20Haven"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="block text-center bg-yellow-500 text-black py-3 rounded-full font-semibold"
                                    >
                                        Order on WhatsApp
                                    </motion.a>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
        </nav>
    );
}