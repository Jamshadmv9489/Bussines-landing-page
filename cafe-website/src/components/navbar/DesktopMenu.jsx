import { navLinks } from "../../constants/navLinks"; // Import navigation links data

function DesktopMenu() {
    return (
        // Desktop navigation (hidden on small screens)
        <div className="hidden md:flex items-center gap-8">

            {/* Loop through nav links */}
            {navLinks.map((link) => (
                <a
                    key={link.id} // Unique key for each link
                    href={`#${link.id}`} // Anchor link to section
                    className="relative group text-sm md:text-base font-semibold text-white/90 hover:text-yellow-400 transition"
                >
                    {link.name} {/* Link text */}

                    {/* Animated underline on hover */}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
                </a>
            ))}
        </div>
    )
}

export default DesktopMenu;