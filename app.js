/**
 * ==========================================================================
 * WORKOUT GIFS • NETFLIX-STYLE STREAMING MEMBERSHIP PLATFORM
 * ==========================================================================
 * PROJECT CUSTOMIZATION VARIABLES (CUSTOM VARIABLES):
 * 
 * NICHE: [NICHE] -> High-Performance Fitness, Biomechanics & Exercise Streaming
 * TARGET AUDIENCE AGE: [AUDIENCE_AGE] -> 20 to 50 years old (Trainers, Coaches, Athletes)
 * TARGET AUDIENCE GENDER: [AUDIENCE_GENDER] -> Unisex (Female & Male Training Modules)
 * MEMBERSHIP AREA NAME: [MEMBERSHIP_NAME] -> Workout GIFs • Exercise Streaming Platform
 * VISUAL STYLE: [VISUAL_STYLE] -> Netflix Dark Cinema Premium
 * PRIMARY COLOR: [PRIMARY_COLOR] -> #E50914 (Crimson Netflix Red)
 * SECONDARY COLOR: [SECONDARY_COLOR] -> #FF5A1F (Athletic Neon Orange)
 * ==========================================================================
 */

// Editable Configuration Object
const MEMBERSHIP_CONFIG = {
  niche: "High-Performance Fitness, Biomechanics & Exercise Streaming",
  targetAudienceAge: "20 to 50 years old (Personal Trainers, Coaches, Athletes)",
  targetAudienceGender: "Unisex (Female & Male Modules)",
  membershipName: "Workout GIFs",
  membershipBadge: "VIP Membership Area",
  visualStyle: "Netflix Dark Cinema Premium",
  primaryColor: "#E50914",
  secondaryColor: "#FF5A1F",
  loginInstruction: "Enter the email address and password used at the time of purchase."
};

/* ==========================================================================
   IN-MEMORY DATABASE (100% FRONT-END IN ENGLISH)
   ========================================================================== */

// 1. Program Modules
const MODULES_DATA = [
  {
    id: "mod-1",
    num: "Module 01",
    title: "Biomechanics Foundations & Motor Patterns",
    subtitle: "The science behind every compound lift",
    desc: "Learn anatomical axes, moment arms, and correct joint alignment to maximize muscle hypertrophy while completely eliminating injury risks for your clients.",
    badge: "Available",
    badgeType: "disponible",
    lessonsCount: 12,
    duration: "3h 40m",
    progress: 100,
    cover: "./assets/carousel-1.webp",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-2",
    num: "Module 02",
    title: "Upper Body Hypertrophy: Chest, Back & Arms",
    subtitle: "Pinpoint technique for compound pushes & pulls",
    desc: "Master the barbell bench press, lat pulldowns, pull-ups, and advanced cable/dumbbell variations with our comprehensive video & GIF demonstration library.",
    badge: "Available",
    badgeType: "disponible",
    lessonsCount: 18,
    duration: "5h 15m",
    progress: 65,
    cover: "./assets/carousel-2.webp",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-3",
    num: "Module 03",
    title: "Lower Body Mastery & Glute Dominance",
    subtitle: "Deep squats, hip hinges, and glute thrusts",
    desc: "Optimize muscle recruitment across quads, hamstrings, and glutes. Biomechanical adjustments tailored to femur length and ankle dorsiflexion mobility.",
    badge: "Available",
    badgeType: "disponible",
    lessonsCount: 16,
    duration: "4h 50m",
    progress: 40,
    cover: "./assets/carousel-3.webp",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-4",
    num: "Module 04",
    title: "Functional Training, HIIT & Calisthenics",
    subtitle: "Power, coordination, and high caloric expenditure",
    desc: "High-density metabolic circuits designed for home workouts, outdoor sessions, or functional boxes utilizing bodyweight and kettlebells.",
    badge: "Available",
    badgeType: "disponible",
    lessonsCount: 14,
    duration: "3h 25m",
    progress: 15,
    cover: "./assets/carousel-4.webp",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-5",
    num: "Module 05",
    title: "Load Periodization & Injury Prevention",
    subtitle: "How to program week-over-week progression",
    desc: "Managing volume landmarks, RPE, RIR (reps in reserve), strategic deloads, and preventing central nervous system fatigue in athletes and beginners.",
    badge: "New",
    badgeType: "nuevo",
    lessonsCount: 10,
    duration: "2h 45m",
    progress: 0,
    cover: "./assets/carousel-5.webp",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-6",
    num: "Module 06",
    title: "Anabolic Nutrition & Body Recomposition",
    subtitle: "Macronutrient splits, surplus & fat loss protocols",
    desc: "Practical nutrition strategies to sync calorie intake with heavy training days, accelerate protein synthesis, and optimize recovery speed.",
    badge: "New",
    badgeType: "nuevo",
    lessonsCount: 11,
    duration: "3h 10m",
    progress: 0,
    cover: "./assets/bonus-3-recipes.png",
    fallbackCover: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-7",
    num: "Module 07",
    title: "Online Coaching Business & Client Acquisition",
    subtitle: "How to package and sell high-ticket training plans",
    desc: "The complete workflow to deliver workout routines and GIF demonstrations via WhatsApp, structure consultations, and charge premium rates.",
    badge: "New",
    badgeType: "nuevo",
    lessonsCount: 8,
    duration: "2h 15m",
    progress: 0,
    cover: "./assets/offer-mockup.png",
    fallbackCover: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mod-8",
    num: "Module 08",
    title: "Exclusive MasterClasses with Pro Athletes",
    subtitle: "Stage secrets and elite bodybuilding preparations",
    desc: "Live breakdown recordings with elite conditioning coaches analyzing real client plateau breakthroughs and contest preparations.",
    badge: "Coming Soon",
    badgeType: "proximamente",
    lessonsCount: 6,
    duration: "1h 50m",
    progress: 0,
    cover: "./assets/action-demo.gif",
    fallbackCover: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80"
  }
];

// 2. Video Lessons / Classes
const CLASSES_DATA = [
  {
    id: "class-1",
    moduleId: "mod-1",
    moduleName: "Module 01",
    title: "Barbell Back Squat vs. Hack Squat: Biomechanics Breakdown",
    desc: "Detailed comparison of knee vs. hip moment arms to maximize quad hypertrophy without putting excessive shear load on the lumbar spine.",
    category: "Legs & Glutes",
    categoryKey: "piernas",
    duration: "14:20 min",
    difficulty: "Intermediate",
    badge: "4K HD",
    videoSrc: "./assets/web-gif-1.mp4",
    cover: "./assets/carousel-1.webp",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    rating: "4.9 ★★★★★",
    progress: 75,
    keyTakeaways: [
      "The Hack squat shifts the torque predominantly onto the patellofemoral joint.",
      "Greater ankle dorsiflexion leads to deeper knee flexion and vastus lateralis activation.",
      "Safe depth cues: keeping a neutral spine and full eccentric tempo control."
    ],
    materials: "Squat_Biomechanics_CheatSheet.pdf (2.4 MB)"
  },
  {
    id: "class-2",
    moduleId: "mod-2",
    moduleName: "Module 02",
    title: "Seated Dumbbell Overhead Press: Scapular Plane & ROM",
    desc: "Discover why setting the bench at 75° and pressing along the scapular plane isolates the anterior deltoid while completely preventing shoulder impingement.",
    category: "Shoulders & Arms",
    categoryKey: "hombros",
    duration: "11:45 min",
    difficulty: "All Levels",
    badge: "Popular",
    videoSrc: "./assets/web-gif-2.mp4",
    cover: "./assets/carousel-2.webp",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    rating: "5.0 ★★★★★",
    progress: 30,
    keyTakeaways: [
      "Avoid flaring elbows in a pure frontal plane to protect the rotator cuff.",
      "Do not violently lock out elbows at the top; maintain constant tension.",
      "Keep forearms perpendicular to the floor throughout the entire movement."
    ],
    materials: "Scapular_Plane_Guide.pdf (1.8 MB)"
  },
  {
    id: "class-3",
    moduleId: "mod-3",
    moduleName: "Module 03",
    title: "Barbell Hip Thrust: Peak Gluteus Maximus Activation",
    desc: "Pelvic positioning, posterior pelvic tilt at lockout, and foot placement to prevent hamstring strains and lower back hyperextension.",
    category: "Legs & Glutes",
    categoryKey: "piernas",
    duration: "16:10 min",
    difficulty: "Advanced",
    badge: "Top 1",
    videoSrc: "./assets/web-gif-3.mp4",
    cover: "./assets/carousel-3.webp",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    rating: "4.9 ★★★★★",
    progress: 85,
    keyTakeaways: [
      "Peak glute contraction occurs in full hip extension with posterior pelvic tilt.",
      "Keep your chin tucked and gaze forward to protect the spine.",
      "Foot stance should match shoulder width with a slight 15° outward flare."
    ],
    materials: "Glute_Biomechanics_Blueprint.pdf (3.1 MB)"
  },
  {
    id: "class-4",
    moduleId: "mod-2",
    moduleName: "Module 02",
    title: "Lat Pulldown vs. Pull-Ups: Latissimus Dorsi Recruitment",
    desc: "Comparison of neutral, pronated, and supinated grips. Learn how to actively depress and retract the scapulae prior to initiating the pull.",
    category: "Chest & Back",
    categoryKey: "espalda",
    duration: "13:30 min",
    difficulty: "Intermediate",
    badge: "Recommended",
    videoSrc: "./assets/web-gif-4.mp4",
    cover: "./assets/carousel-4.webp",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    rating: "4.8 ★../../★★★",
    progress: 0,
    keyTakeaways: [
      "The lats have superior mechanical leverage when pulling with elbows driving toward the hips.",
      "Using lifting straps reduces grip fatigue and dramatically enhances mind-muscle connection."
    ],
    materials: "Pulldown_Scapular_Cues.pdf (2.0 MB)"
  },
  {
    id: "class-5",
    moduleId: "mod-2",
    moduleName: "Module 02",
    title: "Flat Barbell Bench Press: Scapular Retraction & 'J-Curve' Bar Path",
    desc: "Demystifying the powerlifting arch vs. unsafe arching. Strict execution cues for pure pectoral stimulation without anterior shoulder pain.",
    category: "Chest & Back",
    categoryKey: "pecho",
    duration: "18:05 min",
    difficulty: "All Levels",
    badge: "4K HD",
    videoSrc: "./assets/web-gif-5.mp4",
    cover: "./assets/carousel-5.webp",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "The bar should never travel in a straight vertical line; use an efficient curved path toward the lower sternum.",
      "Leg drive locks your upper back into the bench, providing an unshakeable base of support."
    ],
    materials: "Bench_Press_Master_Checklist.pdf (1.5 MB)"
  },
  {
    id: "class-6",
    moduleId: "mod-4",
    moduleName: "Module 04",
    title: "Kettlebell Swing & Snatch: Explosive Hip Extension",
    desc: "Dynamic hip hinge pattern. How to transfer force directly from glutes and hamstrings without lifting with your arms or hyperextending your lower back.",
    category: "Functional & HIIT",
    categoryKey: "funcional",
    duration: "10:50 min",
    difficulty: "Intermediate",
    badge: "New",
    videoSrc: "./assets/web-gif-6.mp4",
    cover: "./assets/action-demo.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "The kettlebell swing is an explosive hip hinge, never a squat-and-front-raise.",
      "Brace core and lock out glutes firmly at the top of every repetition."
    ],
    materials: "Kettlebell_Pro_Manual.pdf (2.2 MB)"
  },
  {
    id: "class-7",
    moduleId: "mod-3",
    moduleName: "Module 03",
    title: "Dumbbell Romanian Deadlift (RDL): Deep Hamstring Stretch",
    desc: "Clear distinction between conventional, Romanian, and stiff-leg deadlifts. Focus on loaded stretch, hip hinge depth, and RPE pacing.",
    category: "Legs & Glutes",
    categoryKey: "piernas",
    duration: "15:20 min",
    difficulty: "Intermediate",
    badge: "Favorite",
    videoSrc: "./assets/web-gif-1.mp4",
    cover: "./assets/carousel-2.webp",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "The bottom range of motion is determined by your hamstring flexibility, not the floor.",
      "Keep dumbbells grazing your thighs and shins at all times to minimize shear force."
    ],
    materials: "RDL_Hamstring_Tension_Sheet.pdf (1.9 MB)"
  },
  {
    id: "class-8",
    moduleId: "mod-1",
    moduleName: "Module 01",
    title: "7-Minute Joint Mobility & Pre-Workout Warm-Up Protocol",
    desc: "Express routine to lubricate shoulder, hip, and ankle articular capsules prior to heavy resistance training.",
    category: "Mobility & Health",
    categoryKey: "movilidad",
    duration: "08:15 min",
    difficulty: "Beginner",
    badge: "Essential",
    videoSrc: "./assets/web-gif-3.mp4",
    cover: "./assets/carousel-4.webp",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    rating: "5.0 ★★★★★",
    progress: 100,
    keyTakeaways: [
      "Dynamic warm-ups elevate core temperature and promote synovial fluid flow.",
      "Avoid long static passive stretching immediately prior to heavy compound sets."
    ],
    materials: "7Min_Warmup_CheatSheet.pdf (1.2 MB)"
  },
  {
    id: "class-9",
    moduleId: "mod-5",
    moduleName: "Module 05",
    title: "How to Calibrate RPE & RIR for Intermediate Trainees",
    desc: "Learn how to accurately gauge reps in reserve to train with authentic hypertrophy intensity without frying the central nervous system.",
    category: "Coaching & Strength",
    categoryKey: "coaching",
    duration: "12:10 min",
    difficulty: "Advanced",
    badge: "New",
    videoSrc: "./assets/web-gif-5.mp4",
    cover: "./assets/carousel-1.webp",
    fallbackCover: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Most beginners confuse standard metabolic lactic burn with true muscular failure.",
      "The sweet spot for maximum sustainable hypertrophy lies between RIR 1 and RIR 3."
    ],
    materials: "RPE_Borg_Scale_Table.pdf (1.1 MB)"
  }
];

// 3. Exclusive Bonuses
const BONUSES_DATA = [
  {
    id: "bonus-1",
    tag: "Exclusive Bonus 01",
    title: "Master Manual of Hypertrophy & Biomechanics",
    desc: "A 120+ page illustrated guide detailing muscle anatomy and force vectors for every key lift. Master the science behind every coaching cue and elevate your authority.",
    priceReal: "$47.00 USD",
    priceOffer: "FREE",
    image: "./assets/bonus-1-muscle.png",
    fallbackImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    fileName: "Master_Hypertrophy_Manual_WorkoutGIFs.pdf",
    badge: "Elite E-Book"
  },
  {
    id: "bonus-2",
    tag: "Exclusive Bonus 02",
    title: "Quick Form Correction & Mistake Fix Guide",
    desc: "Straight-to-the-point pocket checklist covering the 50 most common gym mistakes and the exact verbal cues to correct your clients in under 10 seconds.",
    priceReal: "$37.00 USD",
    priceOffer: "FREE",
    image: "./assets/bonus-2-form.png",
    fallbackImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    fileName: "Quick_Form_Correction_Guide.pdf",
    badge: "Pocket Checklist"
  },
  {
    id: "bonus-3",
    tag: "Exclusive Bonus 03",
    title: "150 High-Performance & Anabolic Fitness Recipes",
    desc: "A ready-to-use collection to share with your clients: high-protein breakfasts, lunches, dinners, and snacks with complete calorie and macro breakdowns.",
    priceReal: "$49.00 USD",
    priceOffer: "FREE",
    image: "./assets/bonus-3-recipes.png",
    fallbackImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    fileName: "150_Fitness_Recipes_WorkoutGIFs.pdf",
    badge: "Pro Cookbook"
  },
  {
    id: "bonus-4",
    tag: "Exclusive Bonus 04",
    title: "Automated Periodization & Loading Spreadsheet",
    desc: "Done-for-you Excel and Google Sheets template formulated to calculate weekly tonnage, load progression, fatigue scores, and visual client progress charts.",
    priceReal: "$67.00 USD",
    priceOffer: "FREE",
    image: "./assets/bonus-4-spreadsheet.webp",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    fileName: "Automated_Periodization_Spreadsheet_V3.xlsx",
    badge: "Excel / Sheets Sheet"
  },
  {
    id: "bonus-5",
    tag: "Exclusive Bonus 05",
    title: "MasterClass: Scaling Online Coaching to $3,000/mo",
    desc: "Learn the exact client acquisition system and WhatsApp GIF delivery method that lets you sign high-ticket coaching clients without spending hours programming.",
    priceReal: "$97.00 USD",
    priceOffer: "FREE",
    image: "./assets/offer-mockup.png",
    fallbackImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    fileName: "MasterClass_Online_Coaching_Business.mp4",
    badge: "Video MasterClass"
  }
];

// 4. Downloadable Resources
const RESOURCES_DATA = [
  {
    id: "res-1",
    title: "Initial Postural & Mobility Assessment Form",
    desc: "Clinical evaluation template in PDF to test dorsiflexion, thoracic extension, and hip mobility in new clients.",
    type: "PDF",
    icon: "fa-solid fa-file-pdf",
    size: "3.4 MB",
    downloads: 1420
  },
  {
    id: "res-2",
    title: "TDEE, BMR & Caloric Expenditure Calculator",
    desc: "Smart spreadsheet programmed with Harris-Benedict and Cunningham equations for precise macro adjustments.",
    type: "Excel",
    icon: "fa-solid fa-file-excel",
    size: "1.8 MB",
    downloads: 2150
  },
  {
    id: "res-3",
    title: "Execution Checklist: 25 Fundamental Lifts",
    desc: "Step-by-step observational protocol with visual checkpoint cues to assess your clients' technical form.",
    type: "Checklist",
    icon: "fa-solid fa-list-check",
    size: "2.1 MB",
    downloads: 3890
  },
  {
    id: "res-4",
    title: "Online Fitness Coaching Client Service Agreement",
    desc: "Legal contract template crafted for personal trainers and coaches with liability waivers and payment terms.",
    type: "Word",
    icon: "fa-solid fa-file-lines",
    size: "850 KB",
    downloads: 980
  },
  {
    id: "res-5",
    title: "Evidence-Based Sports Supplementation Guide",
    desc: "Scientific grading (Class A, B, C) on creatine monohydrate, caffeine, whey isolate, and beta-alanine.",
    type: "PDF",
    icon: "fa-solid fa-file-pdf",
    size: "4.2 MB",
    downloads: 1840
  },
  {
    id: "res-6",
    title: "Weekly Workout Schedule Template in Fillable PDF",
    desc: "Sleek and clean layout to organize weekly split routines with direct links to high-resolution exercise GIFs.",
    type: "Template",
    icon: "fa-solid fa-layer-group",
    size: "1.5 MB",
    downloads: 2750
  }
];

// 5. Community Discussions
let COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: "Coach Mateo Rivas",
    role: "Certified VIP Coach",
    avatar: "MR",
    time: "2 hours ago",
    content: "Workout GIFs family! I just sent the Bulgarian split squat and hip thrust GIF library via WhatsApp to 8 of my online clients. The feedback was insane: two clients finally corrected their shin angle and felt their glutes burning without lower back discomfort. This platform saves hours of explanations!",
    likes: 24,
    likedByUser: false,
    comments: [
      { author: "Valeria Gomez", text: "Totally agree Mateo, my clients love receiving the high-res GIF right in the chat." },
      { author: "Carlos Mendez", text: "It's the ultimate resource to provide high-ticket service without burnout." }
    ]
  },
  {
    id: "post-2",
    author: "Dr. Sofia Alarcon",
    role: "Sports Physiotherapist",
    avatar: "SA",
    time: "5 hours ago",
    content: "Outstanding breakdown in Module 01 regarding the scapular plane in the dumbbell overhead press. Clients with subacromial impingement benefit tremendously from angling elbows 30 degrees forward. Highly recommend reviewing that class before adding heavy loads.",
    likes: 42,
    likedByUser: false,
    comments: [
      { author: "Diego Salcedo", text: "Incredible tip Dr. Sofia, applied it today during shoulders and felt zero impingement." }
    ]
  },
  {
    id: "post-3",
    author: "Esteban Morales",
    role: "VIP Member • Pro Athlete",
    avatar: "EM",
    time: "Yesterday at 7:40 PM",
    content: "Sharing my monthly milestone: added 18 lbs to my deadlift while keeping a rock-solid neutral spine thanks to the 'leg drive' cue and lat engagement lesson. Let's get it!",
    likes: 19,
    likedByUser: false,
    comments: []
  }
];

// 6. Frequently Asked Questions (FAQ)
const FAQ_DATA = [
  {
    q: "How do I access the platform and how long do I have access?",
    a: "You have 100% lifetime, unlimited access. You can log in 24 hours a day, 7 days a week, from any desktop computer, tablet, or smartphone. Your login credentials are the email and password you used at checkout."
  },
  {
    q: "How can I send the exercise GIFs to my clients via WhatsApp?",
    a: "It's super easy! Inside the exercise library, you can preview or save any high-resolution GIF directly to your phone or forward it immediately via WhatsApp, Telegram, iMessage, or Instagram in just 2 taps."
  },
  {
    q: "Do I get access to future updates and newly released modules?",
    a: "Yes! As a lifetime member, all new classes, specialized masterclasses, expanded exercise GIFs, and downloadable templates will be added automatically to your account with zero additional fees."
  },
  {
    q: "Can I use these materials commercially with my private clients?",
    a: "Absolutely. Your purchase includes a full commercial license allowing you to share the form GIFs, mistake checklists, and periodization spreadsheets with your own students worry-free."
  },
  {
    q: "What should I do if I have questions about an exercise technique?",
    a: "You can post your question directly in the 'Student Q&A' tab underneath any lesson, or start a discussion in the VIP Community feed. Our coaching team and community will assist you quickly."
  },
  {
    q: "How do I download the bonuses and PDF/Excel resources?",
    a: "Navigate to the 'Bonuses' or 'Resources' tabs in the top navigation bar. Simply click the download button on any asset, and it will be saved straight to your device."
  }
];

/* ==========================================================================
   APPLICATION STATE (LOCALSTORAGE & FRONT-END)
   ========================================================================== */
const AppState = {
  user: null,
  activeSection: 'inicio',
  activeLessonId: 'class-1',
  completedLessons: new Set(),
  myList: new Set(),
  userNotes: {},
  
  init() {
    // 1. Load user from localStorage
    const savedUser = localStorage.getItem('workout_gifs_user') || localStorage.getItem('fitflix_user');
    if (savedUser) {
      try {
        this.user = JSON.parse(savedUser);
      } catch (e) {
        this.user = null;
      }
    }
    
    // 2. Load completed lessons
    const savedCompleted = localStorage.getItem('workout_gifs_completed') || localStorage.getItem('fitflix_completed');
    if (savedCompleted) {
      try {
        this.completedLessons = new Set(JSON.parse(savedCompleted));
      } catch (e) {}
    } else {
      this.completedLessons = new Set(['class-8']); // Default demo item
    }
    
    // 3. Load My List
    const savedList = localStorage.getItem('workout_gifs_my_list') || localStorage.getItem('fitflix_my_list');
    if (savedList) {
      try {
        this.myList = new Set(JSON.parse(savedList));
      } catch (e) {}
    } else {
      this.myList = new Set(['class-1', 'class-3']); // Default demo items
    }
    
    // 4. Load Personal Notes
    const savedNotes = localStorage.getItem('workout_gifs_notes') || localStorage.getItem('fitflix_notes');
    if (savedNotes) {
      try {
        this.userNotes = JSON.parse(savedNotes);
      } catch (e) {}
    }
  },
  
  save() {
    if (this.user) {
      localStorage.setItem('workout_gifs_user', JSON.stringify(this.user));
    } else {
      localStorage.removeItem('workout_gifs_user');
      localStorage.removeItem('fitflix_user');
    }
    localStorage.setItem('workout_gifs_completed', JSON.stringify([...this.completedLessons]));
    localStorage.setItem('workout_gifs_my_list', JSON.stringify([...this.myList]));
    localStorage.setItem('workout_gifs_notes', JSON.stringify(this.userNotes));
  }
};

/* ==========================================================================
   DOM INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  
  // Key DOM Elements
  const loginScreen = document.getElementById('ff-login-screen');
  const mainApp = document.getElementById('ff-main-app');
  const loginForm = document.getElementById('ff-login-form');
  const loginAlert = document.getElementById('ff-login-alert');
  const loginEmailInput = document.getElementById('ff-login-email');
  const loginPasswordInput = document.getElementById('ff-login-password');
  const togglePasswordBtn = document.getElementById('ff-toggle-password');
  const fastLoginAlumno = document.getElementById('ff-fast-login-alumno');
  const fastLoginCoach = document.getElementById('ff-fast-login-coach');
  const toastContainer = document.getElementById('ff-toast-container');
  
  // Session check
  if (AppState.user) {
    showMainApp();
  } else {
    showLoginScreen();
  }
  
  // Show Login Screen
  function showLoginScreen() {
    loginScreen.classList.remove('ff-hidden');
    loginScreen.style.opacity = '1';
    loginScreen.style.visibility = 'visible';
    mainApp.classList.add('ff-hidden');
  }
  
  // Show Main Platform
  function showMainApp() {
    loginScreen.style.opacity = '0';
    loginScreen.style.visibility = 'hidden';
    setTimeout(() => {
      loginScreen.classList.add('ff-hidden');
      mainApp.classList.remove('ff-hidden');
      updateUserUI();
      renderAllSections();
    }, 300);
  }
  
  // Update user info across UI
  function updateUserUI() {
    const userEmail = AppState.user ? AppState.user.email : 'member@example.com';
    const userName = AppState.user ? AppState.user.name : 'VIP Athlete';
    const userInitials = userName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'VIP';
    
    // Header & dropdown bindings
    document.querySelectorAll('.ff-profile-email-bind').forEach(el => el.textContent = userEmail);
    document.querySelectorAll('.ff-profile-name-bind').forEach(el => el.textContent = userName);
    document.querySelectorAll('.ff-profile-avatar-bind').forEach(el => el.textContent = userInitials);
    
    // Profile stats
    const totalClasses = CLASSES_DATA.length;
    const completedCount = AppState.completedLessons.size;
    const progressPercent = Math.round((completedCount / totalClasses) * 100);
    
    const progressEl = document.getElementById('ff-profile-progress-percent');
    if (progressEl) progressEl.textContent = `${progressPercent}%`;
    
    const completedEl = document.getElementById('ff-profile-completed-count');
    if (completedEl) completedEl.textContent = `${completedCount} / ${totalClasses}`;
  }
  
  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const type = loginPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPasswordInput.setAttribute('type', type);
      const icon = togglePasswordBtn.querySelector('i');
      if (icon) {
        icon.className = type === 'password' ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
      }
    });
  }
  
  // Fast Demo Login (Student)
  if (fastLoginAlumno) {
    fastLoginAlumno.addEventListener('click', () => {
      loginEmailInput.value = 'vip.student@workoutgifs.com';
      loginPasswordInput.value = 'password123';
      performLogin('vip.student@workoutgifs.com', 'VIP Student');
    });
  }
  
  // Fast Demo Login (Coach)
  if (fastLoginCoach) {
    fastLoginCoach.addEventListener('click', () => {
      loginEmailInput.value = 'pro.coach@workoutgifs.com';
      loginPasswordInput.value = 'coach2026';
      performLogin('pro.coach@workoutgifs.com', 'Pro Master Coach');
    });
  }
  
  // Handle Login Form Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginEmailInput.value.trim();
      const password = loginPasswordInput.value.trim();
      
      // Elegant front-end validation
      if (!email || !password) {
        loginAlert.classList.remove('ff-hidden');
        loginAlert.textContent = '⚠️ Please enter your email address and password to continue.';
        return;
      }
      
      loginAlert.classList.add('ff-hidden');
      performLogin(email, email.split('@')[0].replace('.', ' ').toUpperCase());
    });
  }
  
  // Login Execution
  function performLogin(email, name) {
    AppState.user = {
      email: email,
      name: name || 'VIP Athlete',
      plan: 'Lifetime Pro Membership',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    AppState.save();
    showToast(`Welcome back, ${AppState.user.name}!`, 'fa-solid fa-circle-check');
    showMainApp();
  }
  
  // Logout Actions
  document.querySelectorAll('.ff-action-logout').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('Are you sure you want to sign out of Workout GIFs?')) {
        AppState.user = null;
        AppState.save();
        showToast('You have successfully signed out.', 'fa-solid fa-right-from-bracket');
        showLoginScreen();
      }
    });
  });
  
  // ==========================================================================
  // NAVIGATION BETWEEN VIEWS / SECTIONS
  // ==========================================================================
  window.navigateTo = function(sectionId) {
    AppState.activeSection = sectionId;
    
    // Hide all views
    document.querySelectorAll('.ff-section-view').forEach(view => {
      view.classList.remove('ff-view-active');
    });
    
    // Show target view
    const targetView = document.getElementById(`ff-view-${sectionId}`);
    if (targetView) {
      targetView.classList.add('ff-view-active');
    }
    
    // Update active nav indicators
    document.querySelectorAll('.ff-nav-item').forEach(item => {
      if (item.getAttribute('data-target') === sectionId) {
        item.classList.add('ff-active');
      } else {
        item.classList.remove('ff-active');
      }
    });
    
    document.querySelectorAll('.ff-drawer-item').forEach(item => {
      if (item.getAttribute('data-target') === sectionId) {
        item.classList.add('ff-active');
      } else {
        item.classList.remove('ff-active');
      }
    });
    
    // Close mobile drawer if open
    const drawer = document.getElementById('ff-mobile-drawer');
    if (drawer) drawer.classList.remove('ff-open');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Menu link click events
  document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      if (target) {
        navigateTo(target);
      }
    });
  });
  
  // Scroll Navbar effect
  const navbar = document.getElementById('ff-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('ff-nav-scrolled');
    } else {
      navbar.classList.remove('ff-nav-scrolled');
    }
  });
  
  // Profile Dropdown
  const profileMenu = document.getElementById('ff-profile-menu');
  const profileBtn = document.getElementById('ff-profile-btn');
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('ff-open');
      const notifMenu = document.getElementById('ff-notif-dropdown');
      if (notifMenu) notifMenu.classList.remove('ff-open');
    });
  }
  
  // Notifications Dropdown
  const notifBtn = document.getElementById('ff-notif-btn');
  const notifDropdown = document.getElementById('ff-notif-dropdown');
  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('ff-open');
      if (profileMenu) profileMenu.classList.remove('ff-open');
    });
  }
  
  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    if (profileMenu) profileMenu.classList.remove('ff-open');
    if (notifDropdown) notifDropdown.classList.remove('ff-open');
  });
  
  // Mobile Drawer
  const hamburger = document.getElementById('ff-hamburger');
  const mobileDrawer = document.getElementById('ff-mobile-drawer');
  const drawerClose = document.getElementById('ff-drawer-close');
  const drawerBackdrop = document.getElementById('ff-drawer-backdrop');
  
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => mobileDrawer.classList.add('ff-open'));
  }
  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => mobileDrawer.classList.remove('ff-open'));
  }
  if (drawerBackdrop && mobileDrawer) {
    drawerBackdrop.addEventListener('click', () => mobileDrawer.classList.remove('ff-open'));
  }
  
  // Navbar Search Bar
  const searchBtn = document.getElementById('ff-search-btn');
  const searchBox = document.getElementById('ff-search-box');
  const searchInput = document.getElementById('ff-search-input');
  if (searchBtn && searchBox && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchBox.classList.toggle('ff-search-open');
      if (searchBox.classList.contains('ff-search-open')) {
        searchInput.focus();
      }
    });
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length > 1) {
        navigateTo('clases');
        const filterInput = document.getElementById('ff-class-search-input');
        if (filterInput) {
          filterInput.value = query;
          filterClasses(query, 'todos');
        }
      }
    });
  }
  
  // ==========================================================================
  // RENDER CONTENT ACROSS PLATFORM
  // ==========================================================================
  function renderAllSections() {
    renderHomeCarousels();
    renderModulesGrid();
    renderClassesGrid();
    renderBonusesGrid();
    renderResourcesGrid();
    renderCommunityFeed();
    renderFaqAccordion();
    renderProfileSavedList();
  }
  
  // RENDER: Home Rows (Carousels)
  function renderHomeCarousels() {
    // 1. Continue Learning
    const trackSeguir = document.getElementById('ff-track-seguir-viendo');
    if (trackSeguir) {
      const inProgressClasses = CLASSES_DATA.filter(c => c.progress > 0);
      trackSeguir.innerHTML = inProgressClasses.map(c => createCardHtml(c, true)).join('');
    }
    
    // 2. Start Here (Foundations)
    const trackEmpieza = document.getElementById('ff-track-empieza-aqui');
    if (trackEmpieza) {
      const basicClasses = CLASSES_DATA.filter(c => c.moduleId === 'mod-1' || c.difficulty === 'Beginner');
      trackEmpieza.innerHTML = basicClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 3. Recommended For You
    const trackRecomendados = document.getElementById('ff-track-recomendados');
    if (trackRecomendados) {
      trackRecomendados.innerHTML = CLASSES_DATA.slice(0, 6).map(c => createCardHtml(c)).join('');
    }
    
    // 4. Top 5 Most Watched (Netflix Numbers)
    const trackTop10 = document.getElementById('ff-track-top10');
    if (trackTop10) {
      trackTop10.innerHTML = CLASSES_DATA.slice(0, 5).map((c, idx) => `
        <div class="ff-card-top10">
          <span class="ff-top10-number">${idx + 1}</span>
          ${createCardHtml(c)}
        </div>
      `).join('');
    }
    
    // 5. New Releases & Premieres
    const trackNuevos = document.getElementById('ff-track-nuevos');
    if (trackNuevos) {
      const newClasses = CLASSES_DATA.filter(c => c.badge === 'New' || c.badge === '4K HD');
      trackNuevos.innerHTML = newClasses.map(c => createCardHtml(c)).join('');
    }
    
    setupCarouselArrows();
    attachCardEvents();
  }
  
  // HTML Card Generator
  function createCardHtml(item, showProgress = false) {
    const isCompleted = AppState.completedLessons.has(item.id);
    const isSaved = AppState.myList.has(item.id);
    const progressVal = item.progress || (isCompleted ? 100 : 0);
    
    return `
      <div class="ff-card" data-lesson-id="${item.id}">
        <div class="ff-card-media">
          <img class="ff-card-img" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src='${item.fallbackCover}';">
          <video class="ff-card-video-preview" src="${item.videoSrc}" loop muted playsinline preload="none"></video>
          <div class="ff-card-overlay-gradient"></div>
          
          <div class="ff-card-top-tags">
            <span class="ff-badge-status ff-badge-disponible">${isCompleted ? '✓ Completed' : item.badge || 'Available'}</span>
            <span class="ff-badge-duration"><i class="fa-regular fa-clock"></i> ${item.duration}</span>
          </div>
          
          <div class="ff-card-play-hover">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
        
        <div class="ff-card-body">
          <span class="ff-card-category">${item.category}</span>
          <h4 class="ff-card-title">${item.title}</h4>
          <p class="ff-card-desc">${item.desc}</p>
          
          ${showProgress || progressVal > 0 ? `
            <div class="ff-card-progress-bar">
              <div class="ff-card-progress-fill" style="width: ${progressVal}%"></div>
            </div>
          ` : ''}
          
          <div class="ff-card-footer">
            <span class="ff-card-cta-btn"><i class="fa-solid fa-play"></i> Watch class</span>
            <button class="ff-card-fav-btn ${isSaved ? 'ff-saved' : ''}" data-fav-id="${item.id}" title="${isSaved ? 'Remove from My List' : 'Save to My List'}">
              <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  // Carousel Navigation Arrows
  function setupCarouselArrows() {
    document.querySelectorAll('.ff-carousel-wrapper').forEach(wrapper => {
      const track = wrapper.querySelector('.ff-carousel-track');
      const prevBtn = wrapper.querySelector('.ff-carousel-prev');
      const nextBtn = wrapper.querySelector('.ff-carousel-next');
      
      if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
          track.scrollBy({ left: -320, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
          track.scrollBy({ left: 320, behavior: 'smooth' });
        });
      }
    });
  }
  
  // RENDER: Modules Grid
  function renderModulesGrid() {
    const grid = document.getElementById('ff-modules-grid');
    if (!grid) return;
    
    grid.innerHTML = MODULES_DATA.map(mod => `
      <div class="ff-module-card" data-module-id="${mod.id}">
        <div class="ff-module-cover">
          <img src="${mod.cover}" alt="${mod.title}" onerror="this.onerror=null;this.src='${mod.fallbackCover}';">
          <div class="ff-module-badge-top">
            <span class="ff-badge-status ff-badge-${mod.badgeType}">${mod.badge}</span>
          </div>
          <span class="ff-module-count-pill">${mod.lessonsCount} Classes • ${mod.duration}</span>
        </div>
        
        <div class="ff-module-body">
          <span class="ff-module-number">${mod.num}</span>
          <h3 class="ff-module-title">${mod.title}</h3>
          <p class="ff-module-desc">${mod.desc}</p>
          
          <div class="ff-card-progress-bar">
            <div class="ff-card-progress-fill" style="width: ${mod.progress}%"></div>
          </div>
          
          <div class="ff-module-footer">
            <span style="font-size: 12px; color: var(--ff-text-muted);">${mod.progress}% completed</span>
            <button class="ff-module-btn" data-filter-module="${mod.id}">
              <span>Explore</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    // Module explore button
    grid.querySelectorAll('[data-filter-module]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modId = btn.getAttribute('data-filter-module');
        navigateTo('clases');
        filterClasses('', modId);
      });
    });
  }
  
  // RENDER: Classes Grid with Filters & Search
  function renderClassesGrid() {
    const grid = document.getElementById('ff-classes-grid');
    const chips = document.querySelectorAll('.ff-chip[data-category]');
    const searchInput = document.getElementById('ff-class-search-input');
    
    if (!grid) return;
    
    function updateGrid(items) {
      if (items.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--ff-text-muted);">
            <i class="fa-solid fa-magnifying-glass" style="font-size: 48px; margin-bottom: 16px; opacity: 0.4;"></i>
            <h3>No classes found matching your criteria</h3>
            <p style="font-size: 14px; margin-top: 6px;">Try selecting another category or clearing your search query.</p>
          </div>
        `;
        return;
      }
      grid.innerHTML = items.map(c => createCardHtml(c, true)).join('');
      attachCardEvents();
    }
    
    // Initial display
    updateGrid(CLASSES_DATA);
    
    // Category chips click
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('ff-active'));
        chip.classList.add('ff-active');
        const cat = chip.getAttribute('data-category');
        const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
        filterClasses(q, cat);
      });
    });
    
    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        const activeChip = document.querySelector('.ff-chip.ff-active');
        const cat = activeChip ? activeChip.getAttribute('data-category') : 'todos';
        filterClasses(q, cat);
      });
    }
  }
  
  // Filter Classes Handler
  window.filterClasses = function(query = '', category = 'todos') {
    const grid = document.getElementById('ff-classes-grid');
    if (!grid) return;
    
    let filtered = CLASSES_DATA;
    
    if (category && category !== 'todos') {
      if (category.startsWith('mod-')) {
        filtered = filtered.filter(c => c.moduleId === category);
      } else {
        filtered = filtered.filter(c => c.categoryKey === category);
      }
    }
    
    if (query) {
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.desc.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
      );
    }
    
    grid.innerHTML = filtered.length > 0 
      ? filtered.map(c => createCardHtml(c, true)).join('')
      : `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--ff-text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; margin-bottom: 14px; opacity: 0.4;"></i>
          <h3>No matching results</h3>
          <p style="font-size: 13px; margin-top: 6px;">Try another keyword or reset the category filter.</p>
        </div>
      `;
    attachCardEvents();
  };
  
  // RENDER: Bonuses Grid
  function renderBonusesGrid() {
    const grid = document.getElementById('ff-bonuses-grid');
    if (!grid) return;
    
    grid.innerHTML = BONUSES_DATA.map(bonus => `
      <div class="ff-bonus-card">
        <div class="ff-bonus-img-wrap">
          <img src="${bonus.image}" alt="${bonus.title}" onerror="this.onerror=null;this.src='${bonus.fallbackImage}';">
        </div>
        
        <span class="ff-bonus-tag"><i class="fa-solid fa-gift"></i> ${bonus.tag}</span>
        <h3 class="ff-bonus-title">${bonus.title}</h3>
        <p class="ff-bonus-desc">${bonus.desc}</p>
        
        <div class="ff-bonus-pricing">
          <span style="font-size: 12px; color: var(--ff-text-muted);">Real value:</span>
          <span class="ff-bonus-val-strike">${bonus.priceReal}</span>
          <span class="ff-bonus-val-free">${bonus.priceOffer}</span>
        </div>
        
        <button class="ff-btn-bonus" onclick="downloadBonus('${bonus.title}', '${bonus.fileName}')">
          <i class="fa-solid fa-download"></i>
          <span>Access Free Bonus</span>
        </button>
      </div>
    `).join('');
  }
  
  // RENDER: Downloadable Resources
  function renderResourcesGrid() {
    const grid = document.getElementById('ff-resources-grid');
    if (!grid) return;
    
    grid.innerHTML = RESOURCES_DATA.map(res => `
      <div class="ff-resource-card">
        <div class="ff-resource-head">
          <div class="ff-resource-icon ${res.type === 'Excel' ? 'ff-excel' : res.type === 'Checklist' ? 'ff-checklist' : ''}">
            <i class="${res.icon}"></i>
          </div>
          <div>
            <h4 class="ff-resource-title">${res.title}</h4>
            <span style="font-size: 11px; font-weight: 700; color: var(--ff-primary); text-transform: uppercase;">${res.type} • ${res.size}</span>
          </div>
        </div>
        
        <p class="ff-resource-desc">${res.desc}</p>
        
        <div class="ff-resource-meta">
          <span><i class="fa-solid fa-download"></i> ${res.downloads} downloads</span>
          <button class="ff-btn-download" onclick="downloadResource('${res.title}')">
            <i class="fa-solid fa-arrow-down-to-line"></i>
            <span>Download</span>
          </button>
        </div>
      </div>
    `).join('');
  }
  
  // RENDER: VIP Community Feed
  function renderCommunityFeed() {
    const feed = document.getElementById('ff-community-posts-list');
    if (!feed) return;
    
    feed.innerHTML = COMMUNITY_POSTS.map(post => `
      <div class="ff-post-card" data-post-id="${post.id}">
        <div class="ff-post-author-row">
          <div class="ff-post-author-info">
            <div class="ff-author-avatar">${post.avatar}</div>
            <div>
              <div class="ff-author-name">
                <span>${post.author}</span>
                <span class="ff-author-badge">${post.role}</span>
              </div>
              <span class="ff-post-time">${post.time}</span>
            </div>
          </div>
          <button style="color: var(--ff-text-dim);"><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </div>
        
        <div class="ff-post-body">${post.content}</div>
        
        <div class="ff-post-actions-bar">
          <div class="ff-post-action-btn ${post.likedByUser ? 'ff-liked' : ''}" onclick="toggleLikePost('${post.id}')">
            <i class="${post.likedByUser ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            <span>${post.likes} Likes</span>
          </div>
          
          <div class="ff-post-action-btn">
            <i class="fa-regular fa-comment"></i>
            <span>${post.comments.length} Comments</span>
          </div>
          
          <div class="ff-post-action-btn" onclick="showToast('Post link copied to clipboard', 'fa-solid fa-share-nodes')">
            <i class="fa-solid fa-share-nodes"></i>
            <span>Share</span>
          </div>
        </div>
        
        ${post.comments.length > 0 ? `
          <div style="background: rgba(0,0,0,0.25); border-radius: var(--ff-radius-sm); padding: 12px; display: flex; flex-direction: column; gap: 8px;">
            ${post.comments.map(c => `
              <div style="font-size: 13px;">
                <strong style="color: #fff;">${c.author}:</strong>
                <span style="color: var(--ff-text-muted);"> ${c.text}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('');
  }
  
  // Publish Community Post
  const publishBtn = document.getElementById('ff-btn-publish-post');
  const postInput = document.getElementById('ff-post-textarea');
  if (publishBtn && postInput) {
    publishBtn.addEventListener('click', () => {
      const text = postInput.value.trim();
      if (!text) {
        showToast('Please write something before publishing.', 'fa-solid fa-circle-exclamation');
        return;
      }
      
      const newPost = {
        id: 'post-' + Date.now(),
        author: AppState.user ? AppState.user.name : 'VIP Athlete',
        role: 'VIP Member',
        avatar: (AppState.user ? AppState.user.name.substring(0, 2) : 'VP').toUpperCase(),
        time: 'Just now',
        content: text,
        likes: 1,
        likedByUser: true,
        comments: []
      };
      
      COMMUNITY_POSTS.unshift(newPost);
      postInput.value = '';
      renderCommunityFeed();
      showToast('Post shared with the community!', 'fa-solid fa-paper-plane');
    });
  }
  
  // Toggle Community Post Like
  window.toggleLikePost = function(postId) {
    const post = COMMUNITY_POSTS.find(p => p.id === postId);
    if (!post) return;
    
    post.likedByUser = !post.likedByUser;
    post.likes += post.likedByUser ? 1 : -1;
    renderCommunityFeed();
  };
  
  // RENDER: FAQ Accordion
  function renderFaqAccordion() {
    const container = document.getElementById('ff-faq-list');
    if (!container) return;
    
    container.innerHTML = FAQ_DATA.map((faq, idx) => `
      <div class="ff-faq-item ${idx === 0 ? 'ff-open' : ''}">
        <div class="ff-faq-question" onclick="this.parentElement.classList.toggle('ff-open')">
          <span>${faq.q}</span>
          <i class="fa-solid fa-chevron-down ff-faq-arrow"></i>
        </div>
        <div class="ff-faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  }
  
  // RENDER: Profile Saved List (My List)
  function renderProfileSavedList() {
    const container = document.getElementById('ff-profile-saved-grid');
    if (!container) return;
    
    const savedClasses = CLASSES_DATA.filter(c => AppState.myList.has(c.id));
    if (savedClasses.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--ff-text-muted); background: var(--ff-bg-card); border-radius: var(--ff-radius-md);">
          <i class="fa-regular fa-bookmark" style="font-size: 32px; margin-bottom: 12px; opacity: 0.5;"></i>
          <h4>You have no saved classes yet</h4>
          <p style="font-size: 13px; margin-top: 4px;">Click the bookmark icon on any lesson to keep it easily accessible here.</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = savedClasses.map(c => createCardHtml(c)).join('');
    attachCardEvents();
  }
  
  // ==========================================================================
  // CARD EVENTS & LESSON PLAYER MODAL
  // ==========================================================================
  function attachCardEvents() {
    // Open lesson modal
    document.querySelectorAll('.ff-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.ff-card-fav-btn')) return;
        const lessonId = card.getAttribute('data-lesson-id');
        if (lessonId) {
          openPlayerModal(lessonId);
        }
      });
    });
    
    // Toggle Bookmark Button
    document.querySelectorAll('.ff-card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const favId = btn.getAttribute('data-fav-id');
        if (!favId) return;
        
        if (AppState.myList.has(favId)) {
          AppState.myList.delete(favId);
          showToast('Removed from My List.', 'fa-regular fa-bookmark');
        } else {
          AppState.myList.add(favId);
          showToast('✓ Saved to My List.', 'fa-solid fa-bookmark');
        }
        AppState.save();
        renderHomeCarousels();
        renderClassesGrid();
        renderProfileSavedList();
      });
    });
  }
  
  // LESSON PLAYER MODAL
  const playerModal = document.getElementById('ff-player-modal');
  const playerCloseBtn = document.getElementById('ff-player-close');
  const modalVideo = document.getElementById('ff-modal-video');
  const modalTitle = document.getElementById('ff-modal-title');
  const modalCategory = document.getElementById('ff-modal-category');
  const modalRating = document.getElementById('ff-modal-rating');
  const modalDuration = document.getElementById('ff-modal-duration');
  const modalDesc = document.getElementById('ff-modal-desc');
  const modalKeypoints = document.getElementById('ff-modal-keypoints');
  const modalMaterials = document.getElementById('ff-modal-materials');
  const modalNextList = document.getElementById('ff-modal-next-lessons');
  const modalNotesTextarea = document.getElementById('ff-modal-notes-textarea');
  const modalBtnComplete = document.getElementById('ff-modal-btn-complete');
  const modalBtnFav = document.getElementById('ff-modal-btn-fav');
  
  window.openPlayerModal = function(lessonId) {
    const lesson = CLASSES_DATA.find(c => c.id === lessonId);
    if (!lesson || !playerModal) return;
    
    AppState.activeLessonId = lesson.id;
    
    // Populate modal metadata
    if (modalTitle) modalTitle.textContent = lesson.title;
    if (modalCategory) modalCategory.textContent = `${lesson.moduleName} • ${lesson.category}`;
    if (modalRating) modalRating.textContent = lesson.rating;
    if (modalDuration) modalDuration.textContent = lesson.duration;
    if (modalDesc) modalDesc.textContent = lesson.desc;
    
    // Video setup
    if (modalVideo) {
      modalVideo.src = lesson.videoSrc;
      modalVideo.poster = lesson.cover;
      modalVideo.play().catch(() => {});
    }
    
    // Key Takeaways
    if (modalKeypoints) {
      modalKeypoints.innerHTML = lesson.keyTakeaways.map(p => `
        <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;">
          <i class="fa-solid fa-circle-check" style="color: var(--ff-primary); margin-top: 4px;"></i>
          <span>${p}</span>
        </li>
      `).join('');
    }
    
    // Materials
    if (modalMaterials) {
      modalMaterials.textContent = lesson.materials;
    }
    
    // Next Lessons
    if (modalNextList) {
      const otherLessons = CLASSES_DATA.filter(c => c.id !== lesson.id).slice(0, 4);
      modalNextList.innerHTML = otherLessons.map(next => `
        <div class="ff-notif-item" onclick="openPlayerModal('${next.id}')" style="display: flex; gap: 12px; align-items: center; padding: 10px;">
          <img src="${next.cover}" style="width: 70px; aspect-ratio: 16/9; object-fit: cover; border-radius: var(--ff-radius-sm);" alt="">
          <div style="flex: 1;">
            <div style="font-weight: 700; color: #fff; font-size: 13px;">${next.title}</div>
            <div style="font-size: 11px; color: var(--ff-text-muted);">${next.duration} • ${next.category}</div>
          </div>
          <i class="fa-solid fa-play" style="color: var(--ff-primary); font-size: 14px;"></i>
        </div>
      `).join('');
    }
    
    // User Personal Notes
    if (modalNotesTextarea) {
      modalNotesTextarea.value = AppState.userNotes[lesson.id] || '';
    }
    
    // Completion state
    updateModalCompleteButton(lesson.id);
    
    // Saved state
    updateModalFavButton(lesson.id);
    
    // Show Modal
    playerModal.classList.add('ff-modal-open');
    document.body.style.overflow = 'hidden';
  };
  
  function updateModalCompleteButton(lessonId) {
    if (!modalBtnComplete) return;
    const isCompleted = AppState.completedLessons.has(lessonId);
    if (isCompleted) {
      modalBtnComplete.classList.add('ff-is-completed');
      modalBtnComplete.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span>Completed ✓</span>';
    } else {
      modalBtnComplete.classList.remove('ff-is-completed');
      modalBtnComplete.innerHTML = '<i class="fa-regular fa-circle-check"></i> <span>Mark as Completed</span>';
    }
  }
  
  function updateModalFavButton(lessonId) {
    if (!modalBtnFav) return;
    const isSaved = AppState.myList.has(lessonId);
    modalBtnFav.innerHTML = isSaved 
      ? '<i class="fa-solid fa-bookmark" style="color: var(--ff-primary);"></i> <span>In My List</span>'
      : '<i class="fa-regular fa-bookmark"></i> <span>Save</span>';
  }
  
  // Complete Button inside Modal
  if (modalBtnComplete) {
    modalBtnComplete.addEventListener('click', () => {
      const lessonId = AppState.activeLessonId;
      if (AppState.completedLessons.has(lessonId)) {
        AppState.completedLessons.delete(lessonId);
        showToast('Class marked as pending.', 'fa-regular fa-circle');
      } else {
        AppState.completedLessons.add(lessonId);
        showToast('🎉 Class completed! Progress updated.', 'fa-solid fa-award');
      }
      AppState.save();
      updateModalCompleteButton(lessonId);
      updateUserUI();
      renderHomeCarousels();
      renderClassesGrid();
    });
  }
  
  // Save to My List inside Modal
  if (modalBtnFav) {
    modalBtnFav.addEventListener('click', () => {
      const lessonId = AppState.activeLessonId;
      if (AppState.myList.has(lessonId)) {
        AppState.myList.delete(lessonId);
        showToast('Removed from My List.', 'fa-regular fa-bookmark');
      } else {
        AppState.myList.add(lessonId);
        showToast('✓ Saved to My List.', 'fa-solid fa-bookmark');
      }
      AppState.save();
      updateModalFavButton(lessonId);
      renderHomeCarousels();
      renderProfileSavedList();
    });
  }
  
  // Auto-save notes on typing
  if (modalNotesTextarea) {
    modalNotesTextarea.addEventListener('input', (e) => {
      AppState.userNotes[AppState.activeLessonId] = e.target.value;
      AppState.save();
    });
  }
  
  // Close Modal Handler
  function closePlayerModal() {
    if (!playerModal) return;
    playerModal.classList.remove('ff-modal-open');
    document.body.style.overflow = '';
    if (modalVideo) {
      modalVideo.pause();
    }
  }
  
  if (playerCloseBtn) playerCloseBtn.addEventListener('click', closePlayerModal);
  if (playerModal) {
    playerModal.addEventListener('click', (e) => {
      if (e.target === playerModal) closePlayerModal();
    });
  }
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlayerModal();
  });
  
  // Modal Internal Tabs
  document.querySelectorAll('.ff-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');
      document.querySelectorAll('.ff-tab-btn').forEach(b => b.classList.remove('ff-tab-active'));
      document.querySelectorAll('.ff-tab-pane').forEach(p => p.classList.remove('ff-pane-active'));
      
      btn.classList.add('ff-tab-active');
      const pane = document.getElementById(`ff-tab-${tabTarget}`);
      if (pane) pane.classList.add('ff-pane-active');
    });
  });
  
  // ==========================================================================
  // SIMULATED DOWNLOADS & TOAST FEEDBACK
  // ==========================================================================
  window.downloadBonus = function(title, fileName) {
    showToast(`Starting download: ${title}`, 'fa-solid fa-cloud-arrow-down');
    setTimeout(() => {
      showToast(`Successfully downloaded ${fileName}!`, 'fa-solid fa-circle-check');
    }, 1500);
  };
  
  window.downloadResource = function(title) {
    showToast(`Downloading: ${title}...`, 'fa-solid fa-file-arrow-down');
    setTimeout(() => {
      showToast(`File ready in your downloads folder.`, 'fa-solid fa-circle-check');
    }, 1400);
  };
  
  // Floating Toasts System
  window.showToast = function(message, iconClass = 'fa-solid fa-info-circle') {
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = 'ff-toast';
    toast.innerHTML = `
      <i class="${iconClass}" style="color: var(--ff-primary); font-size: 16px;"></i>
      <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };
});
