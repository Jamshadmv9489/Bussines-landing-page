import AboutImage from "./AboutImage"; // Component for displaying the about section image
import AboutContent from "./AboutContent"; // Component for displaying text/content

export default function About() {
    return (
        // Main About section with padding and white background
        <section id="about" className="py-20 bg-white">

            {/* Container with max width, centered, and responsive grid layout */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <AboutImage /> {/* Left side image */}
                <AboutContent /> {/* Right side content */}

            </div>
        </section>
    );
}