// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Add transition for smooth header movement
header.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';

// ============================================
// BOOKING FORM VALIDATION & HANDLING
// ============================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            address: document.getElementById('address').value.trim(),
            serviceType: document.getElementById('serviceType').value
        };

        // Validation
        if (!validateBookingForm(formData)) {
            return;
        }

        // Show success message
        showNotification('Booking submitted successfully! We will contact you soon.', 'success');

        // Reset form
        bookingForm.reset();

        // In a real application, you would send this data to a server
        console.log('Booking Data:', formData);
    });
}

// Booking form validation function
function validateBookingForm(data) {
    // Name validation
    if (data.name.length < 2) {
        showNotification('Please enter a valid name (at least 2 characters).', 'error');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone) || data.phone.length < 10) {
        showNotification('Please enter a valid phone number.', 'error');
        return false;
    }

    // Date validation
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Please select a future date for pickup.', 'error');
        return false;
    }

    // Time validation
    if (!data.time) {
        showNotification('Please select a pickup time.', 'error');
        return false;
    }

    // Address validation
    if (data.address.length < 10) {
        showNotification('Please enter a complete address.', 'error');
        return false;
    }

    // Service type validation
    if (!data.serviceType) {
        showNotification('Please select a service type.', 'error');
        return false;
    }

    return true;
}

// ============================================
// CONTACT FORM VALIDATION & HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            phone: document.getElementById('contactPhone').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validation
        if (!validateContactForm(formData)) {
            return;
        }

        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

        // In a real application, you would send this data to a server
        console.log('Contact Data:', formData);
    });
}

// Contact form validation function
function validateContactForm(data) {
    // Name validation
    if (data.name.length < 2) {
        showNotification('Please enter a valid name (at least 2 characters).', 'error');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }

    // Phone validation (optional field)
    if (data.phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone) || data.phone.length < 10) {
            showNotification('Please enter a valid phone number or leave it empty.', 'error');
            return false;
        }
    }

    // Message validation
    if (data.message.length < 10) {
        showNotification('Please enter a message with at least 10 characters.', 'error');
        return false;
    }

    return true;
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .notification-icon {
            font-size: 1.25rem;
            font-weight: bold;
        }
        .notification-message {
            font-size: 0.95rem;
        }
    `;
    document.head.appendChild(style);

    // Add to document
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 5000);
}

// ============================================
// FORM INPUT REAL-TIME VALIDATION
// ============================================
// Add visual feedback for form inputs
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ef4444';
        } else if (this.type === 'email' && this.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#10b981';
            }
        } else if (this.value) {
            this.style.borderColor = '#10b981';
        }
    });

    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(239, 68, 68)' && this.value) {
            this.style.borderColor = '';
        }
    });
});

// ============================================
// SET MINIMUM DATE FOR DATE PICKER
// ============================================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ============================================
// SCROLL REVEAL ANIMATION (Simple)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.feature-card, .service-card, .step, .pricing-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ============================================
// VIDEO BUTTON FUNCTIONALITY (Placeholder)
// ============================================
const videoButton = document.querySelector('.btn-video');
if (videoButton) {
    videoButton.addEventListener('click', function() {
        // In a real application, this would open a video modal
        showNotification('Video feature coming soon!', 'success');
    });
}

