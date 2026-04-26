import HeroBackground from "./HeroBackground"; // Background visuals (image/video/overlay)
import HeroContent from "./HeroContent"; // Foreground text and CTA content

export default function Hero() {
  return (
    // Hero section covering full screen height
    <section id="home" className="relative min-h-screen w-full overflow-hidden">

      <HeroBackground /> {/* Background layer */}
      <HeroContent /> {/* Main content layer */}

    </section>
  );
}