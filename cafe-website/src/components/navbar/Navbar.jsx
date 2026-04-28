import { useState, useRef, useEffect } from "react"; // React hooks

import Logo from "./Logo"; // Logo component
import DesktopMenu from "./DesktopMenu"; // Desktop navigation
import MobileMenu from "./MobileMenu"; // Mobile navigation
import HamburgerButton from "./HamburgerButton"; // Toggle button for mobile menu

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Track mobile menu state
    const menuRef = useRef(null); // Reference to menu container

    useEffect(() => {
        // Handle outside click and ESC key
        const handleEvent = (e) => {
            if (e.type === "keydown" && e.key === "Escape") {
                setIsOpen(false); // Close menu on ESC
            }

            if (e.type === "mousedown") {
                // Close menu if clicked outside
                if (menuRef.current && !menuRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            }
        };

        // Add event listeners
        document.addEventListener("mousedown", handleEvent);
        window.addEventListener("keydown", handleEvent);

        return () => {
            // Cleanup listeners on unmount
            document.removeEventListener("mousedown", handleEvent);
            window.removeEventListener("keydown", handleEvent);
        };
    }, []);

    return (
        // Fixed navbar at top
        <nav className="bg-[#3b2f2f] text-white fixed w-full top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    <Logo /> {/* Brand logo */}

                    <DesktopMenu /> {/* Desktop navigation links */}

                    {/* WhatsApp button (desktop only) */}
                    <div className="hidden md:block">
                        <a
                            href="#"
                            rel="noopener noreferrer" // Security
                            className="flex items-center gap-2 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition"
                        >
                            Order on WhatsApp
                        </a>
                    </div>

                    {/* Mobile menu section */}
                    <div ref={menuRef} className="md:hidden">
                        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Toggle button */}
                        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} /> {/* Dropdown menu */}
                    </div>

                </div>
            </div>
        </nav>
    );
}