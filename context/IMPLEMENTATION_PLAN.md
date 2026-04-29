# 🩺 Materno-Fetal Website — Detailed Implementation Plan

**Status**: Ready to Start | **Timeline**: 1-2 weeks | **Scope**: MVP Only

---

## 📋 PROJECT DETAILS (CONFIRMED)

### Doctor Information
- **Name**: Dra. Adriana Lizette Martínez Nuño
- **Title**: Ginecóloga y Obstetra - Especialista Materno Fetal
- **Location**: Consultorio Andrés Terán, C. Andrés Terán 1125, Chapultepec Country, 44260 Guadalajara, Jal.
- **Instagram**: https://www.instagram.com/dradriana_ginefetalgdl/
- **WhatsApp Direct Link**: http://wa.link/to2gu3

### Brand Colors (CONFIRMED)
- **Primary Background**: #ff99d8 (soft pink)
- **Titles/Headings**: #9440dd (purple)
- **Text**: #333333 (dark gray)
- **Light BG**: #f5f5f5 (off-white)
- **White**: #ffffff (cards, overlays)

### Available Assets
- ✅ logo.jpeg
- ✅ logo2.jpeg
- ✅ logo3.jpeg
- ✅ profile-picture.jpeg
- ✅ consultorio.jpeg (HERO IMAGE)
- ❌ Icons (will create/use Tailwind/Heroicons)

---

## 🎯 FEATURE DECISIONS (CONFIRMED)

| Feature | Decision | Notes |
|---------|----------|-------|
| Services | 3 core services (modular) | Easy to add/remove later |
| About Section | Mock data for now | Real data can be added later |
| Testimonials | Skip for MVP | Too complex to auto-fetch from Google |
| Appointment System | WhatsApp only | `http://wa.link/to2gu3` |
| Contact Form | No inline form | CTA buttons to WhatsApp |
| Dark Mode | Skip | Not MVP priority |
| Reference Site | vidafetal.com | Layout/UX inspiration |

---

## 🏗️ IMPROVED PROJECT STRUCTURE

```
materno-fetal/
├── app/
│   ├── layout.tsx               # Root layout + metadata
│   ├── page.tsx                 # Landing page
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky header
│   │   ├── Footer.tsx          # Footer with links
│   │   └── HeaderNav.tsx       # Mobile nav (if needed)
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   ├── common/                 # Reusable UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── WhatsAppCTA.tsx
│   └── WhatsAppButton.tsx      # Floating button
│
├── config/                     # Centralized data
│   ├── colors.ts              # Brand colors
│   ├── contact.ts             # Contact info
│   ├── services.ts            # Services data
│   └── about.ts               # About section data
│
├── hooks/                      # Custom hooks
│   └── useScrollSpy.ts        # Navigation highlighting
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
├── types/
│   └── index.ts               # TypeScript types
│
├── public/
│   ├── images/
│   │   ├── logo.jpeg
│   │   ├── logo2.jpeg
│   │   ├── logo3.jpeg
│   │   ├── profile-picture.jpeg
│   │   └── consultorio.jpeg
│   └── icons/
│
├── styles/
│   ├── tailwind.css
│   └── globals.css
│
└── [config files]
```

---

## 📅 PHASED IMPLEMENTATION BREAKDOWN

### **PHASE 1: Foundation & Setup** (Days 1-2)
**Goal**: Project structure, configs, and styling system ready

- [ ] Update `package.json` with dependencies
  - Next.js, React, TypeScript
  - Tailwind CSS, PostCSS
  - Optional: Heroicons for icons
- [ ] Configure `tailwind.config.ts`
  - Register custom colors (#ff99d8, #9440dd)
  - Set up font sizes, spacing
- [ ] Create configuration files:
  - `config/colors.ts` - color constants
  - `config/contact.ts` - doctor info, WhatsApp link, email
  - `config/services.ts` - 3 services data (title, description, icon)
  - `config/about.ts` - mock credentials, experience, equipment
- [ ] Create TypeScript types in `types/index.ts`
- [ ] Set up utility functions in `lib/utils.ts`
- [ ] Initialize `app/globals.css` with Tailwind directives

### **PHASE 2: Core Components** (Days 3-4)
**Goal**: Reusable components and layout structure

- [ ] Create layout components:
  - `components/layout/Navbar.tsx` (sticky, responsive, CTA button)
  - `components/layout/Footer.tsx` (links, social, contact info)
- [ ] Create UI primitives:
  - `components/common/Button.tsx` (primary, secondary variants)
  - `components/common/Card.tsx` (service cards, feature cards)
  - `components/common/WhatsAppCTA.tsx` (reusable CTA component)
- [ ] Create floating WhatsApp button:
  - `components/WhatsAppButton.tsx` (fixed position, mobile-friendly)
- [ ] Set up `app/layout.tsx` with:
  - Metadata (title, description, OG tags)
  - Navbar + Footer wrapper
  - Global styles

### **PHASE 3: Page Sections** (Days 4-5)
**Goal**: All landing page sections complete

- [ ] `components/sections/HeroSection.tsx`
  - Hero image (consultorio.jpeg)
  - Headline + subheadline
  - CTA button to WhatsApp
  - Responsive image handling (Next.js Image)

- [ ] `components/sections/AboutSection.tsx`
  - Doctor profile picture
  - Name + title
  - Mock credentials, experience years, specialties
  - Equipment/technology highlights

- [ ] `components/sections/ServicesSection.tsx`
  - 3 service cards:
    1. Detailed visualization (3D/4D/5D ultrasound)
    2. Early detection for timely treatment
    3. Clarity and precision (Doppler ultrasound)
  - Each card: icon, title, description
  - Data-driven from `config/services.ts`

- [ ] `components/sections/ContactSection.tsx`
  - Clinic location + map iframe (Google Maps embed)
  - Contact information
  - CTA buttons to WhatsApp + email
  - Google Maps embed or address display

### **PHASE 4: Integration & Polish** (Days 5-6)
**Goal**: Landing page complete, optimized, and tested

- [ ] Assemble `app/page.tsx`:
  - Import all sections
  - Arrange in order: Hero → About → Services → Contact
  - Add spacing + layout classes

- [ ] Image optimization:
  - Use Next.js `<Image>` component
  - Add alt text and lazy loading
  - Test image loading performance

- [ ] SEO & Metadata:
  - Update `app/layout.tsx` with OpenGraph tags
  - Add meta description
  - Favicon setup
  - Structured data (optional, but good for local SEO)

- [ ] Responsive testing:
  - Mobile (iPhone 12, SE)
  - Tablet (iPad)
  - Desktop (1920px, 1440px)
  - Test WhatsApp button positioning

- [ ] Lighthouse audit:
  - Performance > 90
  - Accessibility > 90
  - Best Practices > 90
  - SEO > 90

### **PHASE 5: Deployment & Launch** (Day 7)
**Goal**: Live and accessible

- [ ] Set up Vercel deployment
- [ ] Configure environment variables (if needed)
- [ ] Domain setup (DNS pointing)
- [ ] Final production testing
- [ ] Monitor Lighthouse scores

---

## 🎨 DESIGN SYSTEM

### Colors (Tailwind Config)
```typescript
// Extracted to config/colors.ts
export const colors = {
  primary: '#ff99d8',      // Background/Accents
  secondary: '#9440dd',    // Titles/Headings
  text: '#333333',         // Body text
  lightBg: '#f5f5f5',      // Section backgrounds
  white: '#ffffff',        // Cards
}
```

### Typography
- **Headings**: 9440dd, bold, responsive sizes
- **Body**: 333333, regular, readable line-height
- **Accents**: ff99d8 for CTAs and highlights

### Spacing
- Use Tailwind's default scale
- Consistent gutters (16px, 24px, 32px)
- Mobile-first approach

---

## 📱 RESPONSIVE BREAKPOINTS

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

All components mobile-first design.

---

## ✅ MVP CHECKLIST

- [ ] Project dependencies installed
- [ ] Tailwind CSS configured
- [ ] All config files created
- [ ] All components built
- [ ] All sections assembled
- [ ] Hero image integrated
- [ ] WhatsApp links working
- [ ] Mobile responsive
- [ ] Lighthouse > 90 all metrics
- [ ] Deployed to Vercel
- [ ] Domain connected
- [ ] Final testing complete

---

## 🚀 FUTURE ENHANCEMENTS (Post-MVP)

1. **Blog Section**: Posts about maternal health, pregnancy tips
2. **Appointment Booking**: Integration with calendar system (Calendly, Acuity)
3. **Testimonials Section**: Real patient reviews (with consent)
4. **Newsletter Signup**: Email list building
5. **Admin Panel**: CMS for content updates
6. **Advanced SEO**: Schema markup, structured data
7. **Backend API**: FastAPI + PostgreSQL (if needed)
8. **Analytics**: Google Analytics, Plausible
9. **Chat Assistant**: AI-powered FAQ chatbot
10. **Multi-language**: Spanish + English support

---

## 📝 NOTES FOR NEXT SESSION

- All configurations are data-driven and modular
- Easy to swap logos, colors, or services
- Mock data can be replaced with real data anytime
- Component structure allows easy feature additions
- Follow TypeScript for type safety throughout
- Use Tailwind utilities over custom CSS
- Test on real mobile devices (not just browser dev tools)

---

**Ready to begin PHASE 1 when ready!**
