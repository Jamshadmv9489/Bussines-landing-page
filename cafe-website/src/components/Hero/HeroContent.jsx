import { motion } from "framer-motion"; // Import animation library
import HeroButtons from "./HeroButtons"; // Import buttons component

function HeroContent() {
  return (
    // Main content container (above background)
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 text-white">

      {/* Animated heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }} // Start hidden and slightly down
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 0.8 }} // Animation timing
        className="text-3xl sm:text-4xl md:text-6xl font-bold"
      >
        Brew Haven ☕
      </motion.h1>

      {/* Animated subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }} // Start hidden
        animate={{ opacity: 1, y: 0 }} // Fade in
        transition={{ delay: 0.3, duration: 0.8 }} // Slight delay after heading
        className="mt-4 text-base sm:text-lg md:text-xl text-white/80"
      >
        Fresh Coffee. Cozy Vibes.
      </motion.p>

      {/* Call-to-action buttons */}
      <HeroButtons />

    </div>
  )
}

export default HeroContent;