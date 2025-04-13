/**
 * Admin Login Validator
 * VTU Consortium Digital Library
 */

// Predefined admin credentials (in a real application, these would be securely stored and verified server-side)
const CREDENTIALS = {
    admin: {
        username: 'admin@vtu.ac.in',
        password: 'VTU@dmin2023!'
    },
    librarian: {
        username: 'librarian@vtu.ac.in',
        password: 'Lib@VTU2023'
    },
    committee: {
        username: 'committee@vtu.ac.in',
        password: 'Comm!ttee@2023'
    },
    principal: {
        username: 'principal@vtu.ac.in',
        password: 'Pr!nc!pal@VTU'
    }
};

// Function to validate login credentials
function validateLogin(userType, username, password) {
    // Get user type from URL parameter or default to 'admin'
    userType = userType || 'admin';
    
    if (!CREDENTIALS[userType]) {
        return {
            success: false,
            message: 'Invalid user type'
        };
    }
    
    const validCredentials = CREDENTIALS[userType];
    
    if (username === validCredentials.username && password === validCredentials.password) {
        return {
            success: true,
            message: `${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful`,
            redirectUrl: `dashboard-${userType}.html`
        };
    } else {
        return {
            success: false,
            message: 'Invalid username or password'
        };
    }
}

// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Get user type from URL if available
            const urlParams = new URLSearchParams(window.location.search);
            let userType = urlParams.get('type');
            
            // Map URL parameter to credential key
            if (userType === 'student') {
                // Student credentials would be handled differently - redirect to student login
                alert('Student login is handled through the student portal system.');
                return;
            } else if (userType === 'librarian') {
                userType = 'librarian';
            } else if (userType === 'committee') {
                userType = 'committee';
            } else if (userType === 'principal') {
                userType = 'principal';
            } else if (userType === 'admin') {
                userType = 'admin';
            } else {
                // Default to admin if type not specified or unknown
                userType = 'admin';
            }
            
            // Validate credentials
            const result = validateLogin(userType, email, password);
            
            if (result.success) {
                // Show success message and redirect
                alert(result.message);
                
                // Store login status in session storage
                sessionStorage.setItem('userLoggedIn', 'true');
                sessionStorage.setItem('userType', userType);
                sessionStorage.setItem('username', email);
                
                // In a real application, you would use a more secure method like JWT tokens
                
                // Redirect to appropriate dashboard
                setTimeout(function() {
                    window.location.href = 'admin-dashboard.html';
                }, 1000);
            } else {
                // Show error message
                alert(result.message);
            }
        });
    }
}); 