// Function to validate contact form inputs
export const validateContact = (form) => {
    const errors = {}; // Object to store validation errors

    // Trim input values to remove extra spaces
    const name = form.name?.trim();
    const email = form.email?.trim();
    const message = form.message?.trim();

    // Name validation
    if (!name) {
        errors.name = "Name is required"; // Empty name
    } else if (name.length < 2) {
        errors.name = "Name is too short"; // Too short
    } else if (name.length > 50) {
        errors.name = "Name is too long"; // Too long
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email) {
        errors.email = "Email is required"; // Empty email
    } else if (!emailRegex.test(email)) {
        errors.email = "Enter a valid email"; // Invalid format
    }

    // Message validation
    if (!message) {
        errors.message = "Message is required"; // Empty message
    } else if (message.length < 10) {
        errors.message = "Message should be at least 10 characters"; // Too short
    } else if (message.length > 1000) {
        errors.message = "Message is too long"; // Too long
    }

    // Return errors if any, otherwise return null
    return Object.keys(errors).length ? errors : null;
};