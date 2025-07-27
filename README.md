# Priyanka Sridhar - Portfolio Website

A modern, responsive portfolio website showcasing Priyanka Sridhar's professional experience as a Product Manager and Project Management professional.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Professional Sections**: About, Experience, Projects, Skills, and Contact
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with optimized assets

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal background and education details
3. **Experience**: Professional timeline with achievements
4. **Projects**: Featured projects with descriptions and tags
5. **Skills**: Technical skills and certifications
6. **Contact**: Contact information and form

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

- Gradient backgrounds and text effects
- Smooth animations and transitions
- Card-based layouts
- Timeline design for experience section
- Hover effects and micro-interactions
- Professional color scheme

## 📂 File Structure

```
priyanka-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # API configuration (not in version control)
├── .gitignore          # Git ignore file
├── .github/workflows/  # GitHub Actions workflows
│   └── deploy.yml      # Deployment workflow
└── README.md           # Project documentation
```

## 🔐 Environment Variables Setup

This project uses EmailJS for the contact form functionality. To secure the API keys:

### For Local Development:
1. Create a `config.js` file in the root directory
2. Add your EmailJS credentials:
```javascript
window.EMAILJS_CONFIG = {
    USER_ID: 'your_emailjs_user_id',
    SERVICE_ID: 'your_emailjs_service_id',
    TEMPLATE_ID: 'your_emailjs_template_id'
};
```

### For Production (GitHub Pages):
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following repository secrets:
   - `EMAILJS_USER_ID`: Your EmailJS User ID
   - `EMAILJS_SERVICE_ID`: Your EmailJS Service ID
   - `EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID

The GitHub Actions workflow will automatically replace the config file with these environment variables during deployment.

## 🚀 Getting Started

1. Clone or download the project files
2. Set up environment variables (see above)
3. Open `index.html` in a web browser
4. The website will load with all functionality

## 📧 Contact Information

- **Email**: priyanka.sridhar@email.com
- **Location**: Boston, Massachusetts
- **LinkedIn**: linkedin.com/in/priyanka-sridhar

## 🎯 Key Highlights

- **Education**: Master's in Project Management from Northeastern University (GPA: 3.9)
- **Current Role**: Product Manager at Rockland Trust
- **Experience**: 15% transaction volume increase, 20% delivery speed improvement
- **Certifications**: CSM, CIFC, BCG Strategy Consulting Simulation

## 🔧 Customization

To customize the portfolio for your own use:

1. Update personal information in `index.html`
2. Modify colors in `styles.css` (search for color values)
3. Add or remove sections as needed
4. Update contact information and social links

## 📄 License

This project is created for Priyanka Sridhar's personal portfolio. Feel free to use as a template for your own portfolio.

---

**Created with ❤️ for Priyanka Sridhar**
