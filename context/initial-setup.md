# 🩺 Maternal-Fetal Specialist Website — Technical Requirements & Project Setup

## 1. 📌 Project Overview

This project consists of a **mobile-first responsive website** for a maternal-fetal specialist (OB/GYN), focused on:

* Patient acquisition (conversion-driven UX)
* Professional online presence
* Integration with WhatsApp and Instagram
* High performance and SEO optimization

---

## 2. 🧱 Tech Stack

### Frontend

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* Deployment: Vercel

### Backend (Phase 1)

* None (static + external services)

### Backend (Phase 2 - optional)

* FastAPI (Python)
* PostgreSQL

### Integrations

* WhatsApp (click-to-chat link)
* Instagram (external link or embed)
* Google Maps (iframe embed)
* Analytics (Google Analytics or Plausible)

---

## 3. 📂 Project Structure

```
project-root/
│
├── app/                        # Next.js app router
│   ├── layout.tsx
│   ├── page.tsx               # Landing page
│   ├── globals.css
│
├── components/                # Reusable UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── WhatsAppButton.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│
├── public/                    # Static assets
│   ├── images/
│   │   ├── logo.png
│   │   ├── doctor-profile.jpg
│   │   ├── hero-image.jpg
│   │   ├── clinic.jpg
│   │
│   ├── icons/
│   │   ├── whatsapp.svg
│   │   ├── instagram.svg
│
├── styles/
│   └── tailwind.css
│
├── lib/                       # Utilities (optional)
│   ├── constants.ts
│
├── .env.local                 # Environment variables
├── next.config.js
├── package.json
├── tsconfig.json
│
├── docker/
│   ├── Dockerfile
│   ├── docker-compose.yml
│
└── README.md
```

---

## 4. 🖼️ Assets Folder (Important)

All branding and media assets should be placed inside:

```
/public/images/
```

### Required assets:

* Logo (PNG or SVG)
* Doctor profile photo (high quality)
* Clinic photo (optional but recommended)
* Hero image (mother/baby or ultrasound)
* Icons (WhatsApp, Instagram)

---

## 5. 🧩 Core Pages & Sections

### Landing Page (`/`)

* Hero section (CTA: WhatsApp)
* About the doctor
* Services
* Trust indicators (certifications, experience)
* Contact section
* Map embed

---

## 6. 🔗 WhatsApp Integration

Use direct link format:

```
https://wa.me/<phone_number>?text=<encoded_message>
```

Example:

```
https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20agendar%20una%20consulta
```

---

## 7. 🐳 Docker Setup (Local Development)

### 📄 Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
```

---

### 📄 docker-compose.yml

```
version: "3.9"

services:
  web:
    container_name: gyn-website
    build:
      context: ..
      dockerfile: docker/Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ..:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

---

## 8. 🚀 Running Locally with Docker

From `/docker` folder:

```
docker-compose up --build
```

Then open:

```
http://localhost:3000
```

---

## 9. ⚙️ Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=521XXXXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/xxxxx
```

---

## 10. 🎯 Performance & SEO Requirements

* Lighthouse score > 90
* Mobile-first design
* Image optimization (Next.js Image component)
* Meta tags (title, description)
* Open Graph (for sharing)

---

## 11. 🔒 Legal & Compliance (Mexico)

* Privacy notice page (required)
* No misleading medical claims
* Display professional license (cédula)

---

## 12. 📈 Future Enhancements

* Blog (SEO strategy)
* Appointment booking system
* Admin panel
* AI/ML risk assessment tools
* Chat assistant

---

## 13. ✅ MVP Checklist

* [ ] Landing page complete
* [ ] WhatsApp button working
* [ ] Mobile responsive
* [ ] Images optimized
* [ ] Deployed to Vercel
* [ ] Domain connected

---

## 14. 🧭 Development Phases

### Phase 1

* Static landing page
* WhatsApp integration

### Phase 2

* Backend (FastAPI)
* Database

### Phase 3

* Advanced features (ML, automation)

---

## 15. 📌 Notes

* Keep UX extremely simple
* Optimize for conversion, not complexity
* Prioritize speed over features

---

This document serves as the baseline for development and can evolve as the project scales.
