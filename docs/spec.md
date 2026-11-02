# Ashikur Rahaman Portfolio — Functional Specification & Engineering Spec (`spec.md`)

> **Project:** `ashik-builds` (`AshikDevX`)  
> **Status:** Active Engineering Document  
> **Audience:** Ashikur Rahaman (Developer/Maintainer), Collaborators, AI Assistants  
> **Purpose:** Detailed functional specifications, data schemas, architecture rules, and an open innovation backlog for adding new features and experiments.  

---

## 1. System Architecture & Tech Stack

```
                                  [ User Request ]
                                         │
                                         ▼
                            [ Vercel Global Edge CDN ]
                          (vercel.json SPA rewrite rules)
                                         │
                                         ▼
                         [ Vite + React 19 Client SPA ]
                       (RootLayout + React Router v7)
                                         │
            ┌────────────────────────────┼────────────────────────────┐
            ▼                            ▼                            ▼
     [ Page Views ]             [ Shared UI Primitives ]       [ Data Models ]
    • Home                      • Section / SectionTitle       • ProjectsData.json
    • About                     • Card / Card2                 • ReviewsData.json
    • Projects                  • MyBadge / ButtonMix          • PricingServiceData.json
    • Contact                   • Navbar / Footer              • MarqueData.json
    • Error / Loading           • ScrollToTop                  • portfolioData.json
```

### Technical Specs:
- **Core Engine:** React 19 (`react` & `react-dom` `^19.1.0`)
- **Bundler:** Vite 7 with ES Module output (`"type": "module"`)
- **Routing:** React Router v7 (`react-router` `^7.6.3`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` `^4.1.11`) + DaisyUI (`^5.0.54`)
- **Icons:** `lucide-react` (`^0.542.0`) + `react-icons` (`^5.5.0`)
- **Path Resolution:** `@` maps directly to `<root>/src` via `vite.config.js`

---

## 2. Directory Structure & File Conventions

```
ashik-builds/
├── docs/
│   ├── scope.md                     # Client-facing scope, feature locks & deliverables
│   ├── spec.md                      # This technical functional spec & developer manual
│   └── PORTFOLIO_AUDIT_AND_GUIDE.md # Strategic guide on asset presentation
├── public/
│   ├── AshikurRahamanResume.pdf     # Downloadable resume
│   └── assets/images/               # Project screenshots, avatars & graphics
├── src/
│   ├── components/
│   │   ├── layout/                  # Navbar.jsx, Footer.jsx, NavSideLogo.jsx
│   │   ├── ui/                      # Primitive cards, badges, buttons, wrappers
│   │   └── icons/                   # Vector icon helpers (IconLibrary.jsx)
│   ├── data/                        # JSON Data Models (Single Source of Truth)
│   │   ├── ProjectsData.json        # Main projects catalog
│   │   ├── ReviewsData.json         # Client reviews & video testimonials
│   │   ├── PricingServiceData.json  # Services & pricing packages
│   │   ├── MarqueData.json          # Ticker badges
│   │   └── portfolioData.json       # General biography & skills list
│   ├── pages/
│   │   ├── frontend/Home/sections/  # Modular homepage blocks
│   │   ├── contact/ContactPage.jsx  # Contact view
│   │   ├── Error.jsx                # Global 404 / error boundary
│   │   └── Loading.jsx              # Reusable loading state
│   ├── Routers/
│   │   ├── mainRoutes.jsx           # App routing table
│   │   └── PrivateRoute.jsx         # Auth-guarded route shell
│   ├── main.jsx                     # Application root render
│   └── index.css                    # Global Tailwind imports
├── vercel.json                      # Rewrites all requests to /index.html
└── vite.config.js                   # Node URL-safe alias configuration
```

---

## 3. Unified JSON Data Schemas

To keep the portfolio 100% data-driven, use the exact schemas below. Updating content requires zero changes to React components.

### 3.1 Projects Schema (`src/data/ProjectsData.json`)

```json
[
  {
    "id": 1,
    "title": "AuctionG",
    "category": "Full-Stack",
    "indicatorColor": "pink-500",
    "description": "Online auction platform with live bidding, secure Stripe payments, and seller verification.",
    "image": "/assets/images/1.jpg",
    "features": [
      { "iconKey": "star-pink", "text": "Real-time bidding system with WebSocket support." },
      { "iconKey": "star-pink", "text": "Secure payment integration using Stripe API." }
    ],
    "badges": [
      { "iconKey": "react", "text": "ReactJS" },
      { "iconKey": "node", "text": "NodeJS" },
      { "iconKey": "mongodb", "text": "MongoDB" },
      { "iconKey": "tailwind", "text": "TailwindCSS" }
    ],
    "live": "https://auctiong-live-url.com",
    "github": {
      "frontend": "https://github.com/aashikur/auctiong-frontend",
      "backend": "https://github.com/aashikur/auctiong-backend"
    },
    "figma": "https://figma.com/file/your-prototype-link",
    "video": "https://youtube.com/watch?v=your-demo-or-review"
  }
]
```

### 3.2 Client Reviews Schema (`src/data/ReviewsData.json`)

```json
[
  {
    "id": "rev-1",
    "name": "Katherine Johnson",
    "title": "Event Coordinator, The Big Retreat Festival",
    "avatar": "/assets/images/1.jpg",
    "reviewText": "Ashik delivered an exceptional scheduling tool for our festival. The interface was smooth and user-focused.",
    "rating": 5,
    "isVerified": true,
    "highlight": false,
    "type": "text",
    "videoUrl": null
  },
  {
    "id": "rev-2",
    "name": "Michael Reynolds",
    "title": "Marketing Manager, NES Power Systems",
    "avatar": "/assets/images/2.jpg",
    "reviewText": "High-performing landing page that balanced technical depth with user-friendly design. Watch my video feedback.",
    "rating": 5,
    "isVerified": true,
    "highlight": true,
    "type": "video",
    "videoUrl": "https://www.youtube.com/watch?v=exampleVideoId"
  }
]
```

---

## 4. Engineering Rules & Code Quality Standards

1. **Strict Case-Sensitivity on Imports:**
   - Always match git file paths character-for-character (e.g. `import mainRoutes from "./Routers/mainRoutes"`). Linux Vercel builds fail if casing differs.
2. **ES Module Safety in `vite.config.js`:**
   - Never reference Node's `__dirname`. Use standard `fileURLToPath(new URL('./src', import.meta.url))`.
3. **Client-Side Environment Variables:**
   - Use `import.meta.env.DEV` or `import.meta.env.VITE_*`. Never call Node's `process.env.*` in client components.
4. **Vercel SPA Rewrites (`vercel.json`):**
   - Ensure `vercel.json` is always present in root with `rewrites: [{ "source": "/(.*)", "destination": "/index.html" }]`.
5. **Image Performance:**
   - Store all project thumbnails in `public/assets/images/`.
   - Prefer modern WebP or optimized JPG/PNG images under 250KB each.

---

## 5. Innovation Backlog & Idea Sandbox

Use this section to brainstorm, design, and drop new ideas into the portfolio without disrupting the core experience.

### 💡 Idea 1: Interactive Project Filter Bar
- **Goal:** Allow visitors on the homepage or `/projects` to filter by tag.
- **Implementation:**
  - Create category state: `const [activeCategory, setActiveCategory] = useState("All")`.
  - Filter `ProjectsData`:
    ```javascript
    const filtered = activeCategory === "All" 
      ? projectsData 
      : projectsData.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());
    ```
  - Available pills: `All`, `Full-Stack`, `Frontend`, `UI/UX & Figma`, `WordPress`.

### 💡 Idea 2: Interactive Video Review Modal (Facade Pattern)
- **Goal:** Click "Watch Review" on any project or review card to open an instant modal with the YouTube/Loom video.
- **Why it matters:** Zero impact on page load speed; high engagement for visitors.
- **Component Blueprint:**
  ```jsx
  const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden bg-black border border-zinc-700">
          <button onClick={onClose} className="absolute top-3 right-3 text-white bg-zinc-800 p-2 rounded-full">✕</button>
          <iframe src={videoUrl} className="w-full h-full" allowFullScreen />
        </div>
      </div>
    );
  };
  ```

### 💡 Idea 3: Interactive Cal.com / Calendly Embed
- **Goal:** Let high-intent clients book a 15-minute discovery call directly on `/contact`.
- **Implementation:** Add an iframe or lightweight button popup using Cal.com's embed script.

### 💡 Idea 4: Interactive Code Sandbox / Terminal Preview
- **Goal:** In the Hero section (`coder.js`), allow visitors to type commands like `help`, `skills`, `contact`, `hire` to receive interactive responses.

---

## 6. How to Add New Content in 2 Minutes

### Adding a New Project:
1. Copy your screenshot to `public/assets/images/my-project.jpg`.
2. Open `src/data/ProjectsData.json`.
3. Paste a new JSON block with `title`, `description`, `badges`, `live`, `github`, and `figma`.
4. Save and run `npm run build` or push directly to GitHub.

### Adding a New Testimonial:
1. Open `src/data/ReviewsData.json`.
2. Add a new object with `name`, `title`, `avatar`, `reviewText`, and optional `videoUrl`.
3. Save. The review automatically appears in the `Reviews` section.
