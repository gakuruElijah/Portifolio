# 🚀 Deployment Guide

Quick guide to deploying your portfolio website for free.

## Option 1: GitHub Pages (Recommended)

**Pros:** Free, custom domain support, automatic HTTPS, easy updates via Git

**Steps:**

1. **Create a GitHub account** (if you don't have one)
   - Visit [github.com](https://github.com/)

2. **Create a new repository**
   - Name it: `portfolio` (or `yourusername.github.io` for custom URL)
   - Make it public
   - Don't initialize with README (you already have one)

3. **Upload your code**
   
   **Via Command Line:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
   
   **Via GitHub Desktop (Easier):**
   - Download [GitHub Desktop](https://desktop.github.com/)
   - Add your portfolio folder
   - Commit and push

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Select `main` branch
   - Click Save
   - Wait 2-3 minutes

5. **Your site is live!**
   - URL: `https://yourusername.github.io/portfolio/`
   - Or `https://yourusername.github.io/` if repo name is `yourusername.github.io`

6. **Add custom domain (Optional)**
   - Buy domain from Namecheap, Google Domains, etc.
   - Add CNAME file with your domain
   - Configure DNS settings
   - [Full guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Option 2: Netlify

**Pros:** Instant deployment, continuous deployment, form handling, super easy

**Steps:**

1. **Create account** at [netlify.com](https://www.netlify.com/)

2. **Deploy via drag-and-drop:**
   - Click "Add new site" → "Deploy manually"
   - Drag your entire portfolio folder
   - Wait 30 seconds
   - Done! You get a random URL like `random-name-123.netlify.app`

3. **Or deploy via GitHub (Better):**
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub repository
   - Deploy settings: leave everything default
   - Click "Deploy site"
   - Automatic deployments on every Git push!

4. **Change site name:**
   - Site settings → Change site name
   - New URL: `yourname.netlify.app`

5. **Add custom domain (Optional):**
   - Domain settings → Add custom domain
   - Follow DNS configuration steps

---

## Option 3: Vercel

**Pros:** Fast, great for developers, automatic deployments, free SSL

**Steps:**

1. **Create account** at [vercel.com](https://vercel.com/)

2. **Import GitHub repo:**
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Select "Other"
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to main = automatic deployment
   - Preview deployments for branches

4. **Custom domain:**
   - Project settings → Domains
   - Add your domain
   - Configure DNS

---

## Option 4: Cloudflare Pages

**Pros:** Global CDN, very fast, unlimited bandwidth

**Steps:**

1. **Create account** at [pages.cloudflare.com](https://pages.cloudflare.com/)

2. **Connect Git:**
   - Connect GitHub account
   - Select your repository
   - Build settings: leave default
   - Deploy

3. **Benefits:**
   - Super fast global CDN
   - Free SSL
   - Unlimited bandwidth

---

## Comparison Table

| Feature | GitHub Pages | Netlify | Vercel | Cloudflare |
|---------|-------------|---------|--------|------------|
| **Free Tier** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Time** | ~2 min | ~30 sec | ~30 sec | ~30 sec |
| **Ease of Use** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Best For** | Simple sites | All-around | Developers | Speed focus |

---

## After Deployment Checklist

✅ **Update meta tags** in `index.html`:
   - Change `og:url` to your actual URL
   - Change `og:image` to your actual image URL

✅ **Set up Formspree** for contact form:
   - Create form at [formspree.io](https://formspree.io/)
   - Update form action in `index.html`

✅ **Test on mobile devices:**
   - Check responsive design
   - Test all links and buttons
   - Verify form submission

✅ **Run Lighthouse audit:**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ scores

✅ **Submit to Google:**
   - [Google Search Console](https://search.google.com/search-console)
   - Submit your sitemap
   - Request indexing

✅ **Share your portfolio:**
   - Add to LinkedIn profile
   - Update GitHub bio
   - Share on social media
   - Add to email signature

---

## Continuous Updates

After deployment, updating is easy:

```bash
# Make changes to your code
git add .
git commit -m "Update project details"
git push
# Changes automatically deploy in 1-2 minutes!
```

---

## Troubleshooting

### Site not loading?
- Wait 5 minutes after first deployment
- Check deployment status in platform dashboard
- Verify repository is public (GitHub Pages)

### Images not showing?
- Check image paths are correct
- Ensure images are in `assets/images/` folder
- Check file names match exactly (case-sensitive)

### Contact form not working?
- Replace `YOUR_FORM_ID` in form action
- Verify Formspree account is confirmed
- Check browser console for errors

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Verify DNS settings are correct
- Check CNAME file exists (GitHub Pages)

---

## Need Help?

- 📚 [GitHub Pages Docs](https://docs.github.com/en/pages)
- 📚 [Netlify Docs](https://docs.netlify.com/)
- 📚 [Vercel Docs](https://vercel.com/docs)

**Good luck with your deployment! 🎉**
