# Café Museum Website

A modern, artistic website for Café Museum - an industrial-style coffee shop located on the 5th floor of U Mall PP in Phnom Penh, Cambodia. This website showcases the café's unique atmosphere, menu, and cultural events in a minimalist black and white design.

## 🎨 Project Overview

Café Museum is more than just a coffee shop - it's a cultural hub where industrial design meets artistic soul. The website reflects this philosophy with:

- **Industrial Aesthetic**: Exposed steel beam design elements, monochromatic color scheme
- **Artistic Soul**: Piano performances, art exhibitions, and creative workshops
- **Modern UX**: Responsive design with smooth animations and interactive elements

## 🛠️ Tech Stack

### Framework & Libraries

- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4.1.9** - Utility-first CSS framework

### UI Components

- **shadcn/ui** - High-quality UI component library
- **Radix UI** - Headless UI components for accessibility
- **Lucide React** - Beautiful & consistent icon library

### Fonts & Styling

- **Times New Roman** - Classic serif typography for elegant appearance
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Conflict-free Tailwind classes

### Additional Features

- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Date-fns** - Date manipulation
- **Recharts** - Data visualization
- **Embla Carousel** - Touch-friendly carousels
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cafe-museum
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install --legacy-peer-deps
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
cafe-museum/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── components.json       # shadcn/ui configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎯 Key Features

### 🏠 Homepage Sections

1. **Hero Section**

   - Full-screen background with overlay
   - Bold typography with café branding
   - Call-to-action button

2. **Signature Drinks Showcase**

   - Horizontal scrollable gallery
   - Hover effects and animations
   - Grayscale aesthetic

3. **About Section**

   - Two-column layout with text and imagery
   - Brand story and philosophy

4. **Menu Grid**

   - Three-column responsive layout
   - Coffee, Non-Coffee, and Hand Drip categories
   - Contrasting black and white card designs

5. **Events & Culture**

   - Piano nights, art gatherings, and workshops
   - Icon-based feature presentation

6. **Instagram Feed**

   - Social media integration mockup
   - Grid layout with hover effects

7. **Visit Us**
   - Location, hours, and contact information
   - Map integration placeholder

### 🎨 Design Principles

- **Monochromatic Color Scheme**: Black, white, and grayscale
- **Industrial Typography**: Bold, uppercase headings with wide letter-spacing
- **Minimalist Layout**: Clean spacing and geometric arrangements
- **Interactive Elements**: Hover effects and smooth transitions

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Build
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Adding New UI Components

```bash
npx shadcn-ui@latest add [component-name]
```

### Modifying Theme

- Edit `app/globals.css` for global styles
- Use Tailwind classes for component-specific styling
- Customize shadcn/ui components in `components/ui/`

### Typography

The project uses Times New Roman serif font for an elegant, classic appearance that complements the café's artistic identity, configured in `app/layout.tsx` and `app/globals.css`

### Images & Assets

- **Real Photos**: All placeholder images have been replaced with actual café photos
- **Logo Integration**: Café Museum logo prominently displayed in the hero section
- **Image Optimization**: Configured for static export compatibility

## 🔧 Configuration

### Next.js Config

- ESLint and TypeScript errors ignored during builds for development
- Image optimization disabled for static export compatibility

### Tailwind CSS

- New York style shadcn/ui theme
- CSS variables enabled for theming
- Neutral base color palette

## 📦 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Deploy with default settings

### Static Export

```bash
pnpm build
# Files will be in the `out` directory
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for Café Museum. All rights reserved.

## 📞 Contact

**Café Museum**

- Location: U Mall PP, 5th Floor, Phnom Penh, Cambodia
- Phone: +855 12 345 678
- Email: hello@cafemuseum.com
- Instagram: @CafeMuseum

---

_"The key to creativity: wonder in the everyday"_ - Café Museum
