# Between Days

A simple, reliable app designed for people who live alone. Between Days helps friends and family monitor each other's well-being through daily check-ins.

## Features

- **Daily Check-Ins**: Simply open the app each day to confirm you're safe
- **Automatic Alerts**: Emergency contact notified after 3 consecutive missed check-ins
- **Privacy First**: Your data stays private with no unnecessary tracking
- **Simple & Reliable**: Clean, distraction-free interface
- **Works Offline**: Check-ins recorded offline and synced later

## Tech Stack

- Next.js 16.1.1
- React 19.2.3
- TypeScript
- Tailwind CSS 4
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
betweendays/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navigation.tsx   # Navigation bar
│       ├── Hero.tsx         # Hero section
│       ├── Features.tsx     # Features section
│       ├── Contact.tsx      # Contact section
│       ├── Footer.tsx       # Footer
│       └── ScrollAnimation.tsx  # Scroll animations
├── public/                  # Static assets
└── package.json
```

## Customization

### Colors

The website uses a calming blue color scheme:
- Primary: `#4A7BA7` (Blue)
- Secondary: `#6B9AC4` (Light Blue)
- Background: `#F5F1E8` (Warm Beige)
- Border: `#E5DCC8` (Light Brown)

### Adding Screenshots

Replace the placeholder in `Hero.tsx` by:
1. Adding your app screenshot to `/public/screenshots/`
2. Updating the Image component in `src/components/Hero.tsx`

## License

All rights reserved © 2026 Between Days

---

Made with care by [AVDev](https://andris811.github.io/avdev/)
# betweendays_web
