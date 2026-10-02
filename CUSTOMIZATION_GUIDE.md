# 🎨 Customization Guide

Complete guide to personalizing your portfolio website.

## 📝 Step 1: Update Personal Information

### Edit `js/data.js`

This is the **most important file** - all your content is here!

#### About Section
```javascript
about: {
    intro: "Your introduction paragraph here...",
    details: [
        "First paragraph about your background...",
        "Second paragraph about your experience...",
        "Third paragraph about your interests..."
    ]
}
```

#### Skills Section
```javascript
skills: [
    {
        category: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript", "React.js", ...]
    },
    // Add or remove categories as needed
]
```

#### Projects Section
```javascript
projects: [
    {
        title: "Your Project Name",
        description: "Brief description of what it does...",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/yourusername/project",
        demo: "https://your-demo-link.com",
        emoji: "🚀" // Or remove this if using images
    }
]
```

**Pro Tips:**
- Keep descriptions under 150 characters
- List 3-6 main technologies per project
- Use real GitHub links or create repos first
- For demo links, use deployed versions (GitHub Pages, Netlify, etc.)

#### Timeline (Experience & Education)
```javascript
timeline: [
    {
        date: "2022 - Present",
        title: "Your Position/Degree",
        subtitle: "Company/Institution Name",
        description: "What you did/learned here..."
    }
]
```

#### Contact Information
```javascript
contact: {
    email: "gakuru.elijah@example.com",
    location: "Kigali, Rwanda",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
}
```

---

## 🔗 Step 2: Update Links in HTML

### Edit `index.html`

Search and replace these placeholders:

#### Social Links (Appears in Hero & Footer)
```html
<!-- Find and replace ALL instances: -->
<a href="https://github.com/yourusername" ...>
<!-- Replace with your actual GitHub username -->

<a href="https://linkedin.com/in/yourusername" ...>
<!-- Replace with your actual LinkedIn username -->

<a href="mailto:your.email@example.com" ...>
<!-- Replace with your actual email -->
```

**Quick Find & Replace:**
- `yourusername` → your actual GitHub/LinkedIn username
- `your.email@example.com` → your actual email

#### Meta Tags for SEO
```html
<meta property="og:url" content="https://yourdomain.com">
<!-- Update after deployment -->

<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">
<!-- Update after adding your og-image -->
```

---

## 📧 Step 3: Set Up Contact Form

1. **Go to [Formspree.io](https://formspree.io/)**
2. **Sign up for free** (100 submissions/month)
3. **Create a new form**
4. **Copy your form endpoint** (looks like `https://formspree.io/f/xyzabc123`)
5. **Update in `index.html`:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual endpoint

---

## 🎨 Step 4: Customize Colors & Design

### Edit `css/theme.css`

#### Change Color Scheme
```css
:root {
    /* Primary brand color */
    --primary: #3B82F6;        /* Blue - change this! */
    --accent: #06B6D4;         /* Cyan - change this! */
    
    /* Light theme */
    --bg-primary: #FFFFFF;     /* Main background */
    --text-primary: #0F172A;   /* Main text color */
}
```

**Popular Color Schemes:**

**Professional Blue (Current)**
```css
--primary: #3B82F6;
--accent: #06B6D4;
```

**Creative Purple**
```css
--primary: #8B5CF6;
--accent: #EC4899;
```

**Tech Green**
```css
--primary: #10B981;
--accent: #14B8A6;
```

**Bold Orange**
```css
--primary: #F59E0B;
--accent: #EF4444;
```

#### Font Changes

In `index.html`, replace Google Fonts link:
```html
<!-- Current: Inter font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Alternative: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update in `css/style.css`:
```css
body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

---

## 🖼️ Step 5: Add Your Images

### Profile Photo (Optional)

1. **Add image** to `assets/images/profile.jpg`
2. **Update Hero section** in `index.html`:
   ```html
   <!-- Add after hero-content div -->
   <div class="hero-image">
       <img src="assets/images/profile.jpg" alt="Gakuru Elijah">
   </div>
   ```
3. **Style it** in `css/style.css`:
   ```css
   .hero-image {
       margin-top: 3rem;
   }
   .hero-image img {
       width: 250px;
       height: 250px;
       border-radius: 50%;
       border: 4px solid var(--primary);
   }
   ```

### Project Images

Replace emoji with images in `js/data.js`:

**Change this:**
```javascript
emoji: "🛍️"
```

**To this:**
```javascript
image: "assets/images/project1.png"
```

**Then update `populateProjects()` function:**
```javascript
// Find this line:
<span style="font-size: 4rem;">${project.emoji}</span>

// Replace with:
<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
```

### Social Media Preview (OG Image)

1. **Create** 1200x630px image with your name
2. **Save as** `assets/images/og-image.jpg`
3. **Update** meta tags in `index.html`
4. **Tools:** [Canva](https://canva.com/), Figma, or Photoshop

---

## ✂️ Step 6: Add/Remove Sections

### Remove a Section

Simply delete the entire `<section>` block from `index.html`:

```html
<!-- Delete this entire block to remove Skills section -->
<section class="skills section" id="skills">
    ...
</section>
```

Don't forget to remove from navigation:
```html
<li><a href="#skills" class="nav-link">Skills</a></li>
```

### Add a New Section

Copy an existing section and modify:

```html
<section class="certifications section" id="certifications">
    <div class="container">
        <h2 class="section-title animate-on-scroll">Certifications</h2>
        <div id="certificationsContent"></div>
    </div>
</section>
```

Add to navigation:
```html
<li><a href="#certifications" class="nav-link">Certifications</a></li>
```

---

## 🎯 Step 7: Advanced Customization

### Add a Typing Effect

Uncomment this section in `js/main.js`:
```javascript
// Uncomment these lines:
document.addEventListener('DOMContentLoaded', () => {
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        const originalText = heroTagline.textContent;
        typeWriter(heroTagline, originalText, 50);
    }
});
```

### Add Scroll-to-Top Button

Uncomment this section in `js/main.js`:
```javascript
// Find and uncomment the scroll-to-top button code
```

### Change Animation Speed

Edit `css/style.css`:
```css
.animate-on-scroll {
    transition: opacity 0.6s ease, transform 0.6s ease;
    /* Change 0.6s to 0.3s for faster, 1s for slower */
}
```

### Custom Gradient Backgrounds

Add to specific sections in `css/style.css`:
```css
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

---

## 📱 Step 8: Test Your Changes

### Local Testing

**Option 1: Python Server**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 2: PowerShell Script**
```bash
.\start-server.ps1
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Testing Checklist

- [ ] All links work correctly
- [ ] Contact form submits successfully
- [ ] Dark/light mode toggle works
- [ ] Mobile menu opens and closes
- [ ] All sections animate on scroll
- [ ] Test on mobile device (Chrome DevTools → Device Mode)
- [ ] Test in different browsers
- [ ] Run Lighthouse audit (target 90+)

---

## 🐛 Common Issues & Fixes

### Issue: Contact form doesn't work
**Fix:** Make sure you replaced `YOUR_FORM_ID` with your Formspree endpoint

### Issue: Images don't show
**Fix:** Check file paths and names (case-sensitive!)

### Issue: Colors don't change
**Fix:** Clear browser cache (Ctrl+Shift+R) or use incognito mode

### Issue: Mobile menu stays open
**Fix:** Check JavaScript console for errors

### Issue: Animations don't work
**Fix:** Ensure all three JS files are loaded in correct order

---

## 💡 Pro Tips

1. **Keep it simple** - Don't add too many colors or fonts
2. **Mobile first** - Test on mobile devices frequently
3. **Performance** - Compress images (use TinyPNG)
4. **Content** - Quality over quantity in projects
5. **Consistency** - Use same tone throughout
6. **Updates** - Keep projects and skills current
7. **Real links** - Always use working GitHub/demo links
8. **Proofread** - Check spelling and grammar

---

## 🎓 Learning Resources

Want to customize further?

- **HTML/CSS:** [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript:** [JavaScript.info](https://javascript.info/)
- **Design:** [Dribbble](https://dribbble.com/search/portfolio) for inspiration
- **Colors:** [Coolors.co](https://coolors.co/) for palettes
- **Icons:** [Feather Icons](https://feathericons.com/)

---

## 🆘 Need Help?

If you're stuck:

1. Check browser console for errors (F12)
2. Review this guide again
3. Check README.md for basic setup
4. Google the specific error message
5. Ask on [Stack Overflow](https://stackoverflow.com/)

---

**Happy customizing! 🎉**

Remember: Your portfolio represents you - make it unique!
