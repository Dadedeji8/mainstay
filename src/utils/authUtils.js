/**
 * Utility functions for handling authentication tokens
 */

/**
 * Checks if a JWT token is expired
 * @param {string} token - The JWT token to check
 * @returns {boolean} - Returns true if token is expired or invalid, false if valid
 */
export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        // Split the token into its parts
        const parts = token.split('.');
        if (parts.length !== 3) return true; // Invalid JWT format

        // Decode the payload (second part of the token)
        const payload = JSON.parse(atob(parts[1]));

        // Check if the token has expired
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
        return payload.exp < currentTime;
    } catch (error) {
        console.error('Error checking token expiration:', error);
        return true; // If there's an error, consider the token invalid
    }
};

/**
 * Validates the stored token and clears it if invalid
 * @returns {boolean} - Returns true if token is valid, false otherwise
 */
export const validateStoredToken = () => {
    const token = localStorage.getItem('token');
    const isExpired = isTokenExpired(token);

    if (isExpired) {
        // Clear auth data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    }

    return !isExpired;
};

/**
 * Clears all authentication data from localStorage
 */
export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
};
