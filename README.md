# Gakuru Elijah - Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Features a clean design with dark/light mode toggle, smooth animations, and optimized performance.

![Portfolio Preview](assets/images/preview.png)

## ✨ Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Smooth Animations** - Intersection Observer API for scroll animations
- **Fast Performance** - Optimized for 90+ Lighthouse scores
- **SEO Optimized** - Proper meta tags, Open Graph, and semantic HTML
- **Accessible** - WCAG compliant with keyboard navigation support
- **Working Contact Form** - Integration with Formspree
- **Easy Customization** - All content in one data file

## 🚀 Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Or simply download the ZIP file and extract it.

### 2. Customize Your Content

Edit the `js/data.js` file to add your personal information:

```javascript
const portfolioData = {
    about: { ... },      // Your bio and story
    skills: [ ... ],     // Your tech stack
    projects: [ ... ],   // Your projects
    timeline: [ ... ],   // Education & experience
    contact: { ... }     // Contact information
};
```

### 3. Update Links

Replace placeholder links in `index.html`:

- GitHub profile URLs
- LinkedIn profile URLs
- Email addresses
- Social media links

### 4. Set Up Contact Form

1. Go to [Formspree.io](https://formspree.io/) and create a free account
2. Create a new form and get your form endpoint
3. In `index.html`, find the contact form and replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   with your actual Formspree endpoint

### 5. Add Your Images (Optional)

Place your images in the `assets/images/` folder:

- `profile.jpg` - Your profile photo
- `og-image.jpg` - Open Graph image (1200x630px recommended)
- Project screenshots (if you want to replace emojis)

Then update the `index.html` Open Graph tags with your actual domain.

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   └── theme.css          # Theme variables (colors)
├── js/
│   ├── main.js            # Core functionality
│   ├── theme.js           # Dark/light mode toggle
│   └── data.js            # ⭐ YOUR CONTENT GOES HERE
├── assets/
│   └── images/            # Your images
├── README.md              # This file
└── .gitignore            # Git ignore file
```

## 🎨 Customization Guide

### Change Colors

Edit `css/theme.css` to modify the color scheme:

```css
:root {
    --primary: #3B82F6;      /* Primary blue */
    --accent: #06B6D4;       /* Accent cyan */
    --bg-primary: #FFFFFF;   /* Background color */
    /* ... more colors */
}
```

### Modify Sections

All sections are in `index.html`. You can:
- Reorder sections by moving the `<section>` blocks
- Remove sections you don't need
- Add new sections using the same structure

### Add Project Images

Replace the emoji placeholders in `js/data.js`:

```javascript
projects: [
    {
        title: "My Project",
        // Remove emoji and add image in HTML
        image: "assets/images/project1.png"
    }
]
```

Then modify the `populateProjects()` function in `data.js` to use images instead of emojis.

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to Settings → Pages
4. Select `main` branch and save
5. Your site will be live at `https://yourusername.github.io/portfolio/`

### Netlify (Free)

1. Create an account at [Netlify](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a custom URL
4. Optional: Connect to GitHub for continuous deployment

### Vercel (Free)

1. Create an account at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic deployments on every push

## 📊 Performance Optimization

The site is optimized for performance:

- ✅ No external dependencies (except Google Fonts)
- ✅ Minified and optimized code structure
- ✅ Lazy loading support for images
- ✅ Efficient CSS animations
- ✅ Semantic HTML for better SEO
- ✅ Mobile-first responsive design

### Tips for Better Lighthouse Scores:

1. **Optimize images**: Use WebP format and compress images
2. **Add meta description**: Update in `index.html`
3. **Use HTTPS**: Deployment platforms provide this automatically
4. **Enable caching**: Configure on your hosting platform

## 🔧 Troubleshooting

### Contact Form Not Working

- Ensure you've replaced `YOUR_FORM_ID` in the form action
- Check your Formspree dashboard for submissions
- Verify your email is confirmed in Formspree

### Theme Toggle Not Working

- Check browser console for JavaScript errors
- Ensure all three JS files are loaded correctly
- Clear browser cache and reload

### Animations Not Smooth

- Check if `prefers-reduced-motion` is enabled in OS settings
- Try a different browser
- Disable browser extensions that might interfere

### Mobile Menu Not Closing

- Ensure JavaScript is enabled
- Check for console errors
- Verify `main.js` is loaded

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Fonts** - Inter font family
- **Formspree** - Contact form handling
- **Intersection Observer API** - Scroll animations

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio! If you do, I'd appreciate a mention or link back to the original.

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add new feature'`)
5. Push (`git push origin feature/improvement`)
6. Create a Pull Request

## 💬 Support

If you need help setting up your portfolio:

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/portfolio/issues)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ by Gakuru Elijah**

If this helped you, consider giving it a ⭐!
