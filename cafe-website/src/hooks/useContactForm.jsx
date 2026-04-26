import { useState } from "react"; // React state hook
import { sendEmail } from "../services/emailService"; // Service to send email
import { validateContact } from "../utils/validateContact"; // Validation function
import toast from "react-hot-toast"; // Toast notifications

// Custom hook for handling contact form logic
export const useContactForm = () => {
    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [errors, setErrors] = useState({}); // Validation errors

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        const validationErrors = validateContact(form); // Validate form

        if (validationErrors) {
            setErrors(validationErrors); // Set errors
            toast.error(Object.values(validationErrors)[0]); // Show first error
            return;
        }

        setErrors({}); // Clear errors

        try {
            setLoading(true); // Start loading
            await sendEmail(form); // Send email
            toast.success("Message sent successfully!"); // Success message
            setForm({ name: "", email: "", message: "" }); // Reset form
        } catch {
            toast.error("Failed to send message"); // Error message
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Return values to use in component
    return { form, setForm, loading, handleSubmit, errors, setErrors };
};