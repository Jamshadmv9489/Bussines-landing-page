// Footer component for the website
export default function Footer() {
    return (
        // Footer section with dark background and padding
        <footer className="bg-black text-white py-6">

            {/* Centered container with max width */}
            <div className="max-w-6xl mx-auto text-center">

                {/* Dynamic year using JavaScript Date */}
                <p>
                    © {new Date().getFullYear()} Coffee Shop. All rights reserved.
                </p>

            </div>
        </footer>
    );
}