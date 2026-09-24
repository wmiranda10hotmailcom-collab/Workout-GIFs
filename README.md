# 🎬 Workout GIFs • Netflix-Style Streaming Membership Area

A complete, high-end **Netflix-style Membership Area** built exclusively with semantic **HTML5, modern CSS3, and Vanilla JavaScript** (zero dependencies, no React, no backend, no databases required). Designed specifically to be visually cinematic, 100% responsive, and **ready to deploy directly to Vercel**, or **copy and paste into Elementor (WordPress)**.

---

## ⚡ 1. Deploy to Vercel

This project is 100% pre-configured with `vercel.json` for instant deployment:

1. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Import the GitHub repository: **`https://github.com/wmiranda10hotmailcom-collab/Workout-GIFs.git`**
3. Framework Preset: Leave as **Other** (Root Directory: `./`).
4. Click **Deploy**.
5. Your streaming platform will be live instantly with global edge CDN caching and automatic HTTPS!

---

## 📌 2. Project Customization Variables (Custom Variables)

At the very top of `index.html`, in the `:root` block of `styles.css`, and in `app.js`, you will find master configuration variables to effortlessly adapt this platform to **any niche**:

```javascript
// ==========================================================================
// PROJECT CUSTOMIZATION VARIABLES:
// ==========================================================================
const MEMBERSHIP_CONFIG = {
  niche: "High-Performance Fitness, Biomechanics & Exercise Streaming",
  targetAudienceAge: "20 to 50 years old (Personal Trainers, Coaches, Athletes)",
  targetAudienceGender: "Unisex (Female & Male Training Modules)",
  membershipName: "Workout GIFs",
  membershipBadge: "VIP Membership Area",
  visualStyle: "Netflix Dark Cinema Premium",
  primaryColor: "#E50914",      // Crimson Netflix Red
  secondaryColor: "#FF5A1F",    // Athletic Neon Orange
  loginInstruction: "Enter the email address and password used at the time of purchase."
};
```

In CSS (`styles.css`):
```css
:root {
  --ff-primary: #E50914;               /* Primary Brand / Accent Color */
  --ff-secondary: #FF5A1F;             /* Secondary Accent Color */
  --ff-accent-gold: #ffb703;           /* Gold Accent for Bonuses & Ratings */
  --ff-accent-cyan: #00e5ff;           /* Neon Cyan Accent */
  --ff-bg-root: #0a0b0f;               /* Dark Cinema Background */
  --ff-bg-card: #181c28;               /* Elevated Card Background */
}
```

---

## 🚀 3. How to Copy and Paste into Elementor (WordPress)

We have created an all-in-one template file: **`elementor-membership-template.html`**.

### Step-by-Step Instructions:

1. **Create a new page** in WordPress (e.g., *Workout GIFs VIP*).
2. In the Elementor page settings (gear icon in the bottom-left corner), set the Page Layout to:
   - **Elementor Canvas** (for a full-bleed, immersive streaming screen without WordPress theme headers or footers), or
   - **Elementor Full Width**.
3. Add a **1-Column Section** set to **Full Width** with padding and margins set to `0`.
4. Drag and drop the **"HTML"** widget (or shortcode widget) into the column.
5. Open **`elementor-membership-template.html`**, select and copy all content (`Ctrl + A`, `Ctrl + C`), and paste it inside the HTML widget.
6. Click **Publish / Update**.
7. That's it! Your entire streaming platform—including simulated login, horizontal carousels, modal lesson player, and instant downloads—is live and functional without any third-party plugins.

> **Style Isolation:** All CSS is scoped within the `.ff-app-root` container selector, ensuring zero conflicts with your WordPress theme fonts or layouts.

---

## 🌟 4. Included Structure & Features

### A) Cinematic Login Screen
- **Notice:** *"Enter the email address and password used at the time of purchase."*
- **Front-End Simulated Authentication:** Any email and password unlocks the platform.
- **Fast 1-Click Demo Buttons:** *"⚡ Fast Login as VIP Student"* and *"🏋️ Fast Login as Pro Coach"*.
- **Persistence:** Preserves login state in `localStorage` (`workout_gifs_user`) across page reloads.
- **Sign Out Button:** Available in the top navbar, mobile drawer, and profile page.

### B) Home (Streaming Homepage)
- **Cinematic Hero Banner:** Featured masterclass title, biomechanics synopsis, *#1 Trending* badge, *99% Match* score, *4K Ultra HD* tag, and quick-action buttons (*"Play Now"*, *"More Info"*, *"+ My List"*).
- **Horizontal Carousels with Smooth Arrows:**
  1. *Continue Learning:* Real progress bars (75%, 30%, 85%) and remaining times.
  2. *Start Here • Platform Foundations & Onboarding.*
  3. *Top 5 Most Watched Classes This Week:* Featuring large stylized Netflix-style ranking numbers.
  4. *Recommended For You.*
  5. *New Releases & Exclusive Premieres.*
- **Streaming Hover Effects:** Smooth zoom with card elevation, auto-playing video/GIF preview, and bookmark toggle.

### C) Modules (Curriculum Catalog)
- 8 structured training modules with high-definition covers, status badges (`Available`, `New`, `Coming Soon`), class count, total duration, and completion progress bars.

### D) Classes (Video Library & Real-Time Filter)
- Interactive category filter chips: *All Exercises, Legs & Glutes, Chest, Back, Shoulders & Arms, Functional & HIIT, Mobility*.
- Real-time search filter by movement name or technique keyword.

### E) Cinematic Lesson Player Modal
Clicking any class or card opens an immersive modal player featuring:
- High-definition video player with native responsive controls.
- Interactive **"✓ Mark as Completed"** button that updates the user's progress bar in real time.
- **"My List"** bookmarking with `localStorage` persistence.
- **4 Interactive Tabs:**
  1. *Key Takeaways & Form Cues:* Anatomical breakdown and technical cheat sheet download.
  2. *Next Lessons:* Interactive playlist to switch lessons without leaving the modal.
  3. *My Personal Notes:* Private notepad with real-time auto-saving to your browser.
  4. *Student Q&A:* Common student questions answered by coaches plus a form to submit new questions.

### F) 4 Exclusive High-Value Bonuses
- Luxury gold-accented cards:
  - **Bonus 1:** Master Manual of Hypertrophy & Biomechanics (120-page illustrated e-book).
  - **Bonus 2:** Quick Form Correction & Mistake Fix Guide (Pocket checklist).
  - **Bonus 3:** 150 High-Performance & Anabolic Fitness Recipes (Cookbook with macros).
  - **Bonus 4:** Automated Periodization & Loading Spreadsheet (Excel / Google Sheets).
  - **Bonus 5:** MasterClass: Scaling Online Coaching to $3,000/mo.
- Strikethrough pricing (`$47.00 USD` -> `FREE`) and simulated downloads with toast alerts.

### G) Downloadable Resources
- Clinical postural evaluation forms, energy expenditure calculators, lift checklists, and client agreement templates.

### H) VIP Private Community
- Interactive discussion feed where members can publish updates in real time.
- Working like counters, member comments, and community leaderboard.

### I) Support & Help Center
- Expandable accordion with 6 frequently asked questions.
- Priority direct links for **WhatsApp Support** and **Email Support**.
- 3-minute video onboarding walkthrough.

### J) Profile & Gamified Stats
- Member summary and active email display.
- Statistics widgets: overall progress %, completed classes count, total training hours, and day streak 🔥.
- Saved bookmark collection (*"My Saved Classes"*).

---

## 📁 5. Project Files

```text
├── index.html                           # Main HTML structure for Workout GIFs
├── styles.css                           # Scoped, responsive dark cinema stylesheet
├── app.js                               # Complete vanilla JavaScript logic in English
├── elementor-membership-template.html   # Single all-in-one file ready for Elementor
├── build-elementor.js                   # Node.js compiler to generate Elementor bundle
├── vercel.json                          # Vercel deployment configuration
├── .gitignore                           # Git ignore rules
├── serve.js                             # Local HTTP testing server (customizable port)
├── assets/                              # Workout GIFs, videos, covers, and bonus graphics
└── README.md                            # Complete documentation in English
```

---

## 🧪 6. How to Run Locally

You can launch the local server on port **8080** (or any port you choose):

```bash
node serve.js 8080
```

Then open your browser at:
- Standard version: `http://localhost:8080`
- Elementor template: `http://localhost:8080/elementor-membership-template.html`
