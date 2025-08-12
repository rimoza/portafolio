# Ridwan Mohamed - Personal Portfolio Website

A modern, elegant portfolio website built with Next.js 14, React, and TypeScript. Features a sleek dark theme with glassmorphism effects, smooth animations, and a fully responsive design.

## 🌟 Live Demo

Visit the live portfolio at: [Your Portfolio URL]

## 🎨 Design Features

### Visual Design
- **Modern Dark Theme**: Sophisticated black and gray color palette with gradient accents
- **Glassmorphism Effects**: Subtle backdrop blur and transparency for depth
- **Smooth Animations**: Hover effects, transitions, and micro-interactions throughout
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### User Experience
- **Go to Top Button**: Smooth scroll-to-top functionality with animated button
- **Scroll Progress Bar**: Visual indicator of page scroll progress
- **Interactive Elements**: Engaging hover states and transform effects
- **Optimized Performance**: Fast loading times with Next.js optimization

## 📁 Project Structure

```
portafolio/
├── app/                    # Next.js 14 app directory
│   ├── page.tsx           # Home page with hero, about, skills, projects sections
│   ├── about/             # Detailed about page
│   ├── projects/          # Projects listing and detail pages
│   │   └── [slug]/        # Dynamic project detail pages
│   └── layout.tsx         # Root layout with global components
├── components/            # Reusable React components
│   ├── hero-section.tsx  # Hero section with social links
│   ├── contact-section.tsx # Contact section with GitHub, LinkedIn, Email
│   ├── skills-section.tsx # Skills showcase with progress bars
│   ├── project-card.tsx  # Project card component
│   ├── go-to-top.tsx     # Scroll to top button
│   └── ...               # Other components
├── public/               # Static assets
│   └── images/          # Project images and media
└── styles/              # Global styles and CSS modules
```

## ✨ Key Features

### Homepage Sections
- **Hero Section**: Clean typography with status indicator, CTAs, and social links
- **About Section**: Professional summary with statistics and downloadable resume
- **Skills Section**: Interactive skill cards organized by category with proficiency bars
- **Projects Section**: Featured projects with modern card design and hover effects
- **Contact Section**: Multiple contact options with elegant card layout
- **Footer**: Comprehensive footer with quick links and social media

### Project Details Page
- **Dark Theme Design**: Consistent with main site aesthetic
- **Project Overview**: Problem/solution presentation
- **Key Features**: Organized feature list with visual indicators
- **Tech Stack**: Technology badges and descriptions
- **Results & Challenges**: Color-coded sections for easy reading

## 🚀 Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - Detailed professional background
- **Projects** (`/projects`) - Portfolio showcase
- **Project Details** (`/projects/[slug]`) - Individual project pages

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

### Styling & Effects
- **Glassmorphism** - Modern glass-like effects
- **CSS Gradients** - Dynamic color transitions
- **Framer Motion** - Animation library (if applicable)
- **Custom Animations** - Keyframe and transition effects

### Performance & SEO
- **Vercel Analytics** - Performance monitoring
- **Speed Insights** - Loading time optimization
- **Image Optimization** - Next.js Image component
- **Static Generation** - Pre-rendered pages for speed

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.9+ (for Corepack support)
- Yarn 3.6.1 (managed by Corepack)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rimoza/portfolio.git
   cd portfolio
   ```

2. **Enable Corepack (for Yarn 3)**
   ```bash
   corepack enable
   corepack prepare yarn@3.6.1 --activate
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Add any required environment variables
   NEXT_PUBLIC_SITE_URL=your_site_url
   ```

5. **Run the development server**
   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🚀 Building for Production

### Build the project
```bash
yarn build
```

### Run production server locally
```bash
yarn start
```

### Deploy to Vercel
```bash
vercel --prod
```

## 🎨 Customization Guide

### Updating Content
1. **Personal Information**: Edit components in `/components/` directory
2. **Projects**: Update project data in `/app/projects/[slug]/page.tsx`
3. **Skills**: Modify skills array in `/components/skills-section.tsx`
4. **Contact Links**: Update URLs in `/components/contact-section.tsx` and `/components/hero-section.tsx`

### Styling Customization
- **Colors**: Modify Tailwind classes throughout components
- **Animations**: Adjust transition durations and effects
- **Layout**: Update grid and flex properties in components

### Adding New Sections
1. Create new component in `/components/`
2. Import and add to `/app/page.tsx`
3. Apply consistent styling patterns

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contact Information

- **Email**: ridwan.maxamed1@gmail.com
- **LinkedIn**: [linkedin.com/in/rimoza](https://www.linkedin.com/in/rimoza)
- **GitHub**: [github.com/rimoza](https://github.com/rimoza)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js and React
- Designed with modern UI/UX principles
- Inspired by contemporary portfolio designs

---

**Note**: This portfolio represents my professional work and skills. Feel free to explore the code and get inspired for your own projects!