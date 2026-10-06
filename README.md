# JMarkets

A responsive landing page for **JMarkets**, a Japanese-language online trading platform for financial markets (FX and CFDs). It's built with Next.js and animated with GSAP.

## Overview

The page takes new traders from "what is this?" to "open an account":

- **Hero & banner**: headline offer and call-to-action
- **Why choose us**: the platform's key strengths
- **App download**: mobile trading app promo
- **Execution**: trade execution quality and speed
- **Account opening**: step-by-step sign-up flow
- **Market info**: economic calendar, market news, analysis and a glossary of beginner terms (pips, spread, margin, stop-out)
- **Support, News & FAQ**: help channels, announcements and common questions
- **Risk disclaimer**: required trading risk notice

## Features

- Scroll-triggered animations with **GSAP**
- Fully responsive layout using **react-responsive** breakpoints
- Utility-first styling with **Tailwind CSS v4**
- Icons from **lucide-react**

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS 4 |
| Animation | GSAP |
| Icons | lucide-react |

## Project Structure

```
src/
├── app/                  # Root layout, global styles, entry page
├── pages/Home.jsx        # Assembles all home sections
├── components/
│   ├── layout/           # Navbar, Footer
│   └── homeSection/      # Hero, WhyChoose, MarketInfo, FAQ, …
└── utils/scrollAnimations.js
```

## Getting Started

```bash
git clone https://github.com/Anjalisinggh/jmarket.git
cd jmarket
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Author

**Anjali Singh**: [GitHub](https://github.com/Anjalisinggh) · [Portfolio](https://anjali.monster) · [LinkedIn](https://www.linkedin.com/in/anjali-singh-82bb42302)
