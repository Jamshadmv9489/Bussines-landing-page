// Background component for Hero section
function HeroBackground() {
    return (
        <>
            {/* Background video */}
            <video
                autoPlay // Play automatically
                loop // Repeat continuously
                muted // No sound
                playsInline // Prevent full screen on mobile
                preload="metadata" // Load basic video data only
                poster="/images/coffee-poster.jpg" // Fallback image while loading
                className="absolute w-full h-full object-cover" // Cover full section
            >
                <source src="/videos/coffee.mp4" type="video/mp4" /> {/* Video source */}
            </video>

            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
        </>
    )
}

export default HeroBackground;