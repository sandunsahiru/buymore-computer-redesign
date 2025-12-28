# GitHub Repository Setup Guide

## ✅ Git Repository Already Initialized!

Your project has been initialized as a git repository and all files have been committed.

---

## 📝 Step-by-Step Guide to Create GitHub Repository

### Option 1: Using GitHub Website (Recommended for beginners)

#### 1. Create Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**

#### 2. Repository Settings

Fill in the following:
- **Repository name:** `buymore-computer-redesign` (or your preferred name)
- **Description:** `Modern responsive website for Buymore Computer - Built with Next.js 15, TypeScript, and Tailwind CSS`
- **Visibility:**
  - ✅ **Public** (if you want it visible to everyone)
  - ⚪ **Private** (if you want to keep it private)
- **DO NOT** initialize with:
  - ❌ README (we already have files)
  - ❌ .gitignore (already exists)
  - ❌ License (can add later)

#### 3. Click "Create repository"

---

### Option 2: Using GitHub CLI (For advanced users)

If you have GitHub CLI installed:

```bash
cd /d/Projects/buymore-computer-redesign
gh repo create buymore-computer-redesign --public --source=. --remote=origin --push
```

---

## 🚀 Push Your Code to GitHub

After creating the repository on GitHub, you'll see a page with commands. Use these:

### If the repository is brand new:

```bash
cd /d/Projects/buymore-computer-redesign

# Add GitHub as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/buymore-computer-redesign.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push code to GitHub
git push -u origin main
```

### Example with actual username:

If your GitHub username is `buymorecomputer`:

```bash
git remote add origin https://github.com/buymorecomputer/buymore-computer-redesign.git
git branch -M main
git push -u origin main
```

---

## 🔑 Authentication

When you run `git push`, you'll be asked to authenticate:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Buymore Computer Website"
4. Select scopes: ✅ **repo** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When pushing, use the token as your password

### Option 2: GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Add your local repository
4. Push to GitHub with one click

---

## ✅ Verify Upload

After pushing, visit:
```
https://github.com/YOUR-USERNAME/buymore-computer-redesign
```

You should see all your files!

---

## 📦 What's Included in the Repository

```
buymore-computer-redesign/
├── app/                    # Next.js app directory
├── components/             # React components
├── public/                 # Static files
├── CHANGELOG.md           # Version history
├── DESIGN-NOTES.md        # Design philosophy
├── PRODUCTS-VS-SERVICES.md # Strategy document
├── RESPONSIVE-FIXES.md    # Responsive design documentation
├── README.md              # Project documentation
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

---

## 🎯 Next Steps After Pushing

### 1. Add Repository Description

On GitHub repository page:
- Click ⚙️ (Settings gear) next to "About"
- Add description: `Modern responsive website for Buymore Computer`
- Add topics: `nextjs`, `typescript`, `tailwindcss`, `responsive-design`, `react`
- Add website: `https://buymorecomputer.lk`

### 2. Enable GitHub Pages (Optional)

If you want to deploy the site:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main → /root
4. Click Save

Note: Next.js apps need to be built first. Consider using Vercel for easier deployment.

### 3. Add Collaborators (Optional)

Settings → Collaborators → Add people

---

## 🌐 Deploy to Vercel (Recommended)

Vercel is made by the creators of Next.js:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your `buymore-computer-redesign` repository
5. Click "Deploy"
6. Your site will be live at: `buymore-computer-redesign.vercel.app`

**Automatic deployments:** Every time you push to GitHub, Vercel will automatically deploy!

---

## 📝 Common Git Commands for Future Updates

### Making Changes

```bash
# Check status
git status

# Add changed files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

### Creating a Branch

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Push branch to GitHub
git push -u origin feature/new-feature
```

### Pulling Latest Changes

```bash
git pull
```

---

## 🆘 Troubleshooting

### Error: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/buymore-computer-redesign.git
```

### Error: "Permission denied"

You need to authenticate. Use a Personal Access Token or GitHub Desktop.

### Error: "Updates were rejected"

```bash
git pull --rebase origin main
git push
```

---

## 📧 Need Help?

- GitHub Docs: https://docs.github.com
- Git Basics: https://git-scm.com/book/en/v2
- Next.js Deployment: https://nextjs.org/docs/deployment

---

**Your repository is ready to be pushed to GitHub!** 🎉

Follow the steps above to create your GitHub repository and push your code.
