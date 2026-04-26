import { Toaster } from "react-hot-toast"; // Toast notification container

import About from "./components/about/About"; // About section
import Contact from "./components/contact/Contact"; // Contact section
import Footer from "./components/footer/Footer"; // Footer component
import Hero from "./components/Hero/Hero"; // Hero section
import Menu from "./components/menu/Menu"; // Menu section
import Navbar from "./components/navbar/Navbar"; // Navigation bar

function App() {
  return (
    <>
      {/* Global toast notifications */}
      <Toaster
        position="top-center" // Position of toasts
        toastOptions={{
          duration: 3000, // Display time
          style: {
            background: "#3b2f2f", // Background color
            color: "#fff", // Text color
            textAlign: "center", // Center text
            borderRadius: "10px", // Rounded corners
            padding: "12px 16px", // Spacing
          },
        }}
      />

      {/* Main layout components */}
      <Navbar /> {/* Top navigation */}
      <Hero /> {/* Hero section */}
      <Menu /> {/* Menu section */}
      <About /> {/* About section */}
      <Contact /> {/* Contact section */}
      <Footer /> {/* Footer */}
    </>
  );
}

export default App;