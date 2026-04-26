import emailjs from "emailjs-com"; // EmailJS library for sending emails

// Function to send email using EmailJS
export const sendEmail = (formData) => {
    return emailjs.send(
        import.meta.env.VITE_SERVICE_ID, // EmailJS service ID (from env)
        import.meta.env.VITE_TEMPLATE_ID, // Email template ID
        formData, // Form data (name, email, message)
        import.meta.env.VITE_PUBLIC_KEY // Public API key
    );
};