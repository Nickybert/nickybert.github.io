# Nicholas Anakwue - Academic Portfolio Website

A modern, responsive academic portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 GitHub Pages Hosting Instructions

Follow these steps to host this website on GitHub Pages for free:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the **+** icon in the top right corner and select **"New repository"**
3. Name your repository: `nicholasanakwue` (or any name you prefer)
4. Make it **Public**
5. Click **"Create repository"**

### Step 2: Upload Your Code

#### Option A: Using Git Command Line

```bash
# Navigate to your project folder
cd /path/to/your/website

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/nicholasanakwue.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. On your repository page, click **"uploading an existing file"**
2. Drag and drop all your website files (or use the file picker)
3. Click **"Commit changes"**

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (tab at the top)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select **"main"** and folder **"/ (root)"**
6. Click **"Save"**

### Step 4: Enable GitHub Actions for Automatic Deployment

1. In your repository, click **"Actions"** tab
2. Click **"set up a workflow yourself"** or use the following workflow:

Create a file at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Commit this file to your repository

### Step 5: Wait for Deployment

1. Go to the **"Actions"** tab to see your deployment running
2. Wait for the workflow to complete (usually 1-2 minutes)
3. Once complete, your site will be live at:
   - `https://YOUR_USERNAME.github.io/nicholasanakwue`

### Step 6: Add a Custom Domain (Optional)

If you own a domain (like nicholasanakwue.com):

1. In your repository, go to **Settings > Pages**
2. Under **"Custom domain"**, enter your domain name
3. Click **"Save"**
4. Update your DNS settings with your domain provider:
   - Create an **A record** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or create a **CNAME record** pointing to `YOUR_USERNAME.github.io`

## 📝 Editing Your Website

### Easy Configuration

All editable content is in `src/config.ts`:

```typescript
// Change your hero image
export const HERO_IMAGE = "/images/hero_portrait.jpg";

// Update personal info
export const PERSONAL_INFO = {
  name: "Nicholas Anakwue",
  title: "PhD Candidate in Political Science",
  institution: "Queen Mary University of London",
  email: "n.c.anakwue@qmul.ac.uk",
};

// Update social links
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nicholas-anakwue/",
  twitter: "https://x.com/dikeanakwue",
  github: "https://github.com/Nickybert",
  orcid: "https://orcid.org/0000-0002-3053-7541",
};
```

### Changing Images

1. Add your new image to the `public/images/` folder
2. Update the path in `src/config.ts`
3. Commit and push - GitHub Actions will automatically rebuild and deploy

### Updating Content

Each section has its own file in `src/sections/`:
- `Hero.tsx` - Homepage with name and photo
- `About.tsx` - Bio and research interests
- `Quote.tsx` - John Rawls quote
- `Research.tsx` - CV link, work in progress, teaching
- `Publications.tsx` - Journal articles
- `Books.tsx` - Book chapters and reviews
- `Conferences.tsx` - Conferences and workshops
- `Engagements.tsx` - Public engagements, awards, talks
- `Contact.tsx` - Contact information

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── public/
│   └── images/          # All images go here
├── src/
│   ├── config.ts        # Easy configuration file
│   ├── sections/        # Website sections
│   ├── App.tsx          # Main app component
│   └── index.css        # Global styles
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## 🎨 Design Features

- Clean, professional academic design
- Responsive for mobile, tablet, and desktop
- Smooth scroll animations
- Coral-red accent color (#D93A3A)
- Monochrome photography style
- Minimal whitespace, content-focused layout

## 📄 License

This project is open source and available for personal use.

---

**Need help?** Contact me at n.c.anakwue@qmul.ac.uk
