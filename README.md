# React Portfolio Starter

This is a modern, responsive, and data-driven portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

1.  **Install dependencies**
    ```bash
    npm install --legacy-peer-deps
    ```

2.  **Start development server**
    ```bash
    npm run dev
    ```

## 📁 Project Structure

- `src/data/`: JSON files controlling all content (Hero, About, Projects, etc.).
- `src/components/`: Modular UI components.
- `src/pages/`: Main page layouts.
- `src/hooks/`: Custom hooks like `useTheme`.

## 🎨 Customization

### Content
Edit the JSON files in `src/data/` to update your portfolio content without touching the code.

### Theme
Tailwind configuration in `tailwind.config.js`. You can change the `primary` color to match your brand.

## 📦 Deployment

### Netlify
1.  Connect your GitHub repository to Netlify.
2.  Set Build Command: `npm run build`
3.  Set Publish Directory: `dist`
4.  (Optional) For the contact form to work, ensure the `<form>` in `Contact.jsx` has `data-netlify="true"`.

### Vercel
1.  Import your repository on Vercel.
2.  Framework Preset: Vite
3.  Deploy.

## 🛠 Tech Stack

- **React 18/19**
- **Vite**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **React Helmet Async** (SEO)
