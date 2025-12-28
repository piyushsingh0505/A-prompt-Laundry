# Beory Laundry Service Website

A modern, responsive laundry service website built with HTML5, CSS3, and JavaScript (ES6+). This is a frontend-only application featuring a clean, professional design based on the provided UI mockup.

## 📁 Project Structure

```
frontend/
├── index.html      # Main HTML file with all sections
├── style.css       # All styling and responsive design
├── script.js       # JavaScript for interactivity and validation
└── README.md       # Project documentation
```

## 🎨 Design Features

- **Color Scheme**: Blue (#2563eb) and Yellow (#fbbf24) matching the design mockup
- **Typography**: Modern, clean font stack using system fonts
- **Layout**: Fully responsive using CSS Grid and Flexbox
- **Animations**: Smooth scrolling, hover effects, and scroll reveal animations

## 📱 Sections Included

1. **Header/Navigation**
   - Logo with yellow icon
   - Responsive navigation menu
   - Online Booking button
   - Mobile hamburger menu

2. **Hero Section**
   - Welcome tag
   - "Where Freshness Meets Care" heading
   - Call-to-action buttons (Pickup Now, Discover More)
   - Decorative sparkle elements

3. **Feature Cards**
   - Unmatched Quality
   - Timely Service
   - Customer Satisfaction

4. **About Us Section**
   - Image collage placeholder
   - Video play button
   - Feature list with checkmarks

5. **Client Logos Section**
   - Trusted partners display

6. **Booking/Schedule Section**
   - Booking form with validation
   - All required fields (Name, Email, Phone, Date, Time, Address, Service Type)

7. **Services Section**
   - Wash & Fold
   - Dry Cleaning
   - Ironing
   - Express Service

8. **How It Works**
   - Step-by-step process visualization

9. **Pricing Section**
   - Three pricing tiers (Basic, Standard, Premium)
   - Feature lists for each plan

10. **Contact Section**
    - Contact form with validation
    - Contact information display
    - Google Maps iframe (placeholder)

11. **Footer**
    - Social media links
    - Quick links
    - Contact information
    - Copyright notice

## 🚀 Getting Started

1. **Open the website**
   - Simply open `index.html` in any modern web browser
   - No build process or installation required

2. **Local Development**
   - You can use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
   - Then visit `http://localhost:8000`

## ✨ Features

### Interactive Elements
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Form validation with real-time feedback
- Success/error notifications
- Scroll animations for sections
- Hover effects on cards and buttons

### Form Validation
- **Booking Form**: Validates name, email, phone, date, time, address, and service type
- **Contact Form**: Validates name, email, phone (optional), and message
- Real-time visual feedback on input fields
- Error messages for invalid inputs

### Responsive Design
- **Desktop**: Full-width layout with multi-column grids
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single column layout with hamburger menu

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-blue: #2563eb;
    --yellow: #fbbf24;
    /* ... other colors */
}
```

### Adding Real Images
Replace the placeholder divs with actual `<img>` tags:
```html
<!-- Instead of .hero-img-placeholder -->
<img src="path/to/image.jpg" alt="Description">
```

### Connecting to Backend
To connect the forms to a backend API, modify the form submission handlers in `script.js`:
```javascript
// Replace console.log with actual API call
fetch('/api/booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and form validation
- **Font Awesome**: Icons (loaded via CDN)

## 📋 Form Fields

### Booking Form
- Name (required, min 2 characters)
- Email (required, valid email format)
- Phone (required, min 10 characters)
- Date (required, must be future date)
- Time (required)
- Address (required, min 10 characters)
- Service Type (required, dropdown selection)

### Contact Form
- Name (required, min 2 characters)
- Email (required, valid email format)
- Phone (optional, must be valid if provided)
- Message (required, min 10 characters)

## 🎨 Design Notes

- The design closely follows the provided mockup with blue and yellow color scheme
- Clean, modern aesthetic with rounded corners and subtle shadows
- Professional typography hierarchy
- Consistent spacing and padding throughout
- Accessible color contrasts
- Mobile-first responsive approach

## 📞 Support

For questions or issues, please refer to the code comments or create an issue in the repository.

---

**Built with ❤️ for Beory Laundry Service**

