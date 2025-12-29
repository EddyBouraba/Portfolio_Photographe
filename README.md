# 📸 Photographer Portfolio

A modern and elegant portfolio website for photographers, built with React and JavaScript. Features an interactive gallery with category filters, optimized image loading, and a contact form with validation.

## ✨ Features

### 🎨 Design & UI
- Modern and clean design with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Professional color palette with elegant gradients
- Refined typography for optimal readability
- Subtle and professional CSS animations

### 🖼️ Image Gallery
- Category filter system (Portraits, Weddings, Nature, Events)
- Lazy loading for optimal performance
- Lightbox for full-screen viewing with keyboard navigation
- Responsive grid layout
- Interactive hover effects

### 📱 Sections
- Hero section with attractive call-to-action
- Interactive gallery with dynamic filtering
- About section with statistics and services
- Contact form with real-time validation
- Complete footer with contact information

### ⚡ Performance
- Image optimization with thumbnails and high-resolution versions
- Intersection Observer for lazy loading
- Automatic code splitting with Vite
- Optimized bundle for fast loading

### ♿ Accessibility
- Full keyboard navigation
- ARIA labels on interactive elements
- WCAG-compliant color contrast
- Reduced motion support

## 🚀 Technologies

- **React 18** - UI library
- **Vite** - Fast and modern build tool
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with animations and transitions
- **Intersection Observer API** - For lazy loading
- **Unsplash** - High-quality demo images

## 📦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/photographer-portfolio.git
cd photographer-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Create production build
npm run preview      # Preview production build

# Code quality
npm run lint         # Check code with ESLint
```

## 📁 Project Structure

```
photographer-portfolio/
├── public/
│   └── images/
│       └── gallery/          # Gallery images
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Gallery.jsx
│   │   ├── GalleryItem.jsx
│   │   ├── Lightbox.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/                 # Static data
│   │   └── galleryData.js
│   ├── hooks/                # Custom React hooks
│   │   └── useLazyLoad.js
│   ├── App.jsx              # Main component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js          # Vite configuration
```

## 🎨 Customization

### Change Colors
Main colors are defined in CSS files. To change the theme:

```css
/* Main color - Hero.css, Gallery.css, etc. */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Add Images
1. Place your images in `public/images/gallery/`
2. Update `src/data/galleryData.js` to add your images:

```javascript
{
  id: 17,
  category: 'portrait',
  title: 'Your title',
  image: '/images/gallery/your-image.jpg',
  thumbnail: '/images/gallery/your-image-thumb.jpg',
}
```

### Update Contact Information
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx` to update:
- Email
- Phone
- Location
- Social media links

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Deploy the contents of the 'dist' folder
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create your branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [React](https://react.dev/) - JavaScript library
- [Vite](https://vitejs.dev/) - Build tool
- [Unsplash](https://unsplash.com/) - High-quality demo images

---

**Note**: This is a professional portfolio template designed to showcase photography work in an elegant and performant way.

Built with ❤️ for photographers
