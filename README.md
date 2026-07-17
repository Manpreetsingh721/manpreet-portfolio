# Manpreet Singh — Portfolio Website

A premium black-and-white editorial portfolio for Manpreet Singh, Digital Marketing & SEO professional based in Maharashtra, India.

---

## 📁 File Structure

```
manpreet-portfolio/
├── index.html          ← Main portfolio page (all sections)
├── css/
│   └── style.css       ← All styles (edit here for design changes)
├── js/
│   └── main.js         ← Navigation, animations, form validation
├── images/
│   └── manpreet-singh.jpg  ← Your profile photo
└── README.md           ← This file
```

---

## 🚀 Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click **New Repository**
3. Name it: `manpreetsingh721.github.io` (replaces the current one) **OR** any name like `portfolio`
4. Set visibility to **Public**
5. Click **Create Repository**

### Step 2 — Upload Files
**Option A — GitHub Website (easiest):**
1. Open your new repo on GitHub
2. Click **Add file → Upload files**
3. Drag and drop ALL files and folders from this project
4. Click **Commit changes**

**Option B — Git (recommended for updates):**
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/manpreetsingh721/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait 1–2 minutes, then visit:
   `https://manpreetsingh721.github.io/` (if repo named `manpreetsingh721.github.io`)
   OR
   `https://manpreetsingh721.github.io/REPO-NAME/` (if other name)

---

## ✏️ How to Edit Content

### Change Personal Info
Open `index.html` and search for:
- `your.email@example.com` → Replace with your real email
- `your-linkedin` → Replace with your LinkedIn profile URL
- `your-instagram` → Replace with your Instagram handle

### Add Project Links
Search for `<!-- Replace href below with live link when available -->` in `index.html`
Replace `href="#"` with your actual project URL.

### Add Case Study Results
In the case study section, find the `result-placeholder` divs and add your actual data as you collect it.

### Update the Contact Form
For a fully working form (no backend needed):
1. Sign up at [Formspree.io](https://formspree.io) (free)
2. Create a form and get your Form ID
3. In `index.html`, find the `<form>` tag and change:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
   ```
4. Remove the `enctype="text/plain"` attribute

---

## 🎨 Design Customization

All design tokens are in `css/style.css` under the `:root` section:
```css
:root {
  --black: #0a0a0a;
  --white: #ffffff;
  /* All colors, spacing, and font settings here */
}
```

---

## 📱 Browser Support
- Chrome, Firefox, Safari, Edge (all modern versions)
- Mobile responsive: iOS Safari, Android Chrome

---

## 📋 SEO Checklist Before Launch
- [ ] Replace `canonical` URL with your actual live URL
- [ ] Replace `og:url` and `og:image` with actual values
- [ ] Add your real email, LinkedIn, and Instagram links
- [ ] Update the `Person` schema with your actual social profiles
- [ ] Create and upload a `favicon.ico`
- [ ] Add `robots.txt` if needed

---

© 2026 Manpreet Singh
