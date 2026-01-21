# Fatima Castro Architecture Portfolio

A modern, minimalist portfolio website for Fatima Castro, a Master of Architecture candidate at Rice University. Built with Next.js, React, and Tailwind CSS.

## 🏗️ Project Overview

This is a professional architecture portfolio website featuring a clean, minimalist design that showcases architectural projects with smooth animations and interactive elements.

### Key Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Navigation**: Full-screen overlay menu with smooth animations
- **Custom Cursor**: Enhanced user experience with custom cursor interactions
- **Project Gallery**: Detailed project pages with image galleries
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Performance Optimized**: Built with Next.js 16 for optimal loading speeds

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── images/            # Image gallery pages
│   ├── projects/          # Project listing and detail pages
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── architecture-website.tsx
│   ├── custom-cursor.tsx  # Custom cursor component
│   ├── navigation.tsx     # Main navigation component
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions and data
│   ├── data.ts           # Project data and types
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── configuration files
```

## 🎨 Design Philosophy

The website follows a minimalist architectural design philosophy with:

- **Clean Typography**: Using Geist font family for modern readability
- **Monochromatic Color Scheme**: Primarily zinc/gray tones with high contrast
- **Geometric Layout**: Grid-based layouts with clean lines
- **Subtle Animations**: Smooth transitions that enhance rather than distract
- **Professional Imagery**: High-quality architectural photography

## 📱 Pages

### Homepage (`/`)
- Hero section with large typography
- Background architectural imagery
- Call-to-action buttons to Projects and About sections

### Projects (`/projects`)
- Grid listing of all architectural projects
- Hover effects and smooth transitions
- Project categorization (Residential, Commercial, Cultural, etc.)

### Project Details (`/projects/[slug]`)
- Individual project showcase pages
- Image galleries with navigation
- Project specifications and descriptions

### About (`/about`)
- Personal information about Fatima Castro
- Educational background and experience
- Professional philosophy

### Contact (`/contact`)
- Contact information and form
- Professional inquiries

### Images (`/images`)
- Portfolio image gallery
- High-resolution architectural photography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (preferred package manager)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎯 Key Components

### Navigation Component (`components/navigation.tsx`)
- Fixed header with brand identity
- Full-screen overlay menu with animations
- Responsive design with mobile considerations
- Mix-blend-mode for overlay effects

### Custom Cursor (`components/custom-cursor.tsx`)
- Interactive cursor that responds to hover states
- Enhances the user experience on desktop devices

### Project Data (`lib/data.ts`)
- TypeScript interfaces for project structure
- Sample project data with Unsplash imagery
- Helper functions for data retrieval

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:

- **Color Palette**: Zinc-based grays for modern minimalism
- **Typography**: Geist font family for clean readability
- **Animations**: Smooth transitions using Tailwind and Framer Motion
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles

## 📊 Performance

- **Next.js 16**: Latest framework features for optimal performance
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic route-based code splitting
- **Analytics**: Vercel Analytics for performance monitoring

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui component configuration

## 👤 About the Owner

**Fatima Castro**
- M.Arch Candidate at Rice University
- B.Envd from Texas A&M University
- Based in Houston, TX
- Architecture portfolio showcasing residential, commercial, and cultural projects

## 📄 License

This project is created as a portfolio website for Fatima Castro. All architectural project content and imagery are placeholder materials.

## 🤝 Contributing

This is a personal portfolio website. For any questions or professional inquiries, please use the contact form on the website.