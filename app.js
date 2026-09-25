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

// 1. Program Modules / Equipment Suites (Matching Google Drive ACADEMIA)
const MODULES_DATA = [
  {
    id: "mod-barbell",
    num: "Suite 01",
    title: "Barbell Exercises",
    subtitle: "EXERCÍCIOS COM BARRAS • Free Weights",
    desc: "10 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Calves, Chest, Legs, Trapezius, and Triceps stored in Google Drive.",
    badge: "10 Folders",
    badgeType: "disponible",
    lessonsCount: 10,
    duration: "Google Drive",
    progress: 100,
    cover: "./assets/gifs/barbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR"
  },
  {
    id: "mod-dumbbell",
    num: "Suite 02",
    title: "Dumbbell Exercises",
    subtitle: "EXERCÍCIOS COM HALTERES • Unilateral Form",
    desc: "10 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Calves, Chest, Legs, Trapezius, and Triceps stored in Google Drive.",
    badge: "10 Folders",
    badgeType: "disponible",
    lessonsCount: 10,
    duration: "Google Drive",
    progress: 80,
    cover: "./assets/gifs/dumbbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv"
  },
  {
    id: "mod-machine",
    num: "Suite 03",
    title: "Machine, Hack & Bench Exercises",
    subtitle: "EXERCÍCIOS NA MAQUINA - HACK - BANCO • Isolation",
    desc: "10 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Calves, Chest, Legs, Trapezius, and Triceps stored in Google Drive.",
    badge: "10 Folders",
    badgeType: "disponible",
    lessonsCount: 10,
    duration: "Google Drive",
    progress: 60,
    cover: "./assets/gifs/machine-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI"
  },
  {
    id: "mod-cable",
    num: "Suite 04",
    title: "Cable & Pulley Exercises",
    subtitle: "EXERCÍCIOS NO CABO OU POLIA • Continuous Tension",
    desc: "9 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Chest, Legs, Trapezius, and Triceps stored in Google Drive.",
    badge: "9 Folders",
    badgeType: "disponible",
    lessonsCount: 9,
    duration: "Google Drive",
    progress: 40,
    cover: "./assets/gifs/cable-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1"
  },
  {
    id: "mod-kettlebell",
    num: "Suite 05",
    title: "Kettlebell Exercises",
    subtitle: "KETTLEBELL • Explosive Hip Hinges & Power",
    desc: "10 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Calves, Chest, Legs, Trapezius, and Triceps stored in Google Drive.",
    badge: "10 Folders",
    badgeType: "disponible",
    lessonsCount: 10,
    duration: "Google Drive",
    progress: 20,
    cover: "./assets/gifs/kettlebell-swing.gif",
    fallbackCover: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1OeDXqZIkmWgmUuwUxL6qIzfc_0auxQPa"
  },
  {
    id: "mod-superband",
    num: "Suite 06",
    title: "Superband Exercises",
    subtitle: "SUPERBAND • Elastic Resistance & Mobility",
    desc: "8 muscle-group folders: Abs & Core, Forearms, Biceps, Back, Shoulders, Chest, Legs, and Triceps stored in Google Drive.",
    badge: "8 Folders",
    badgeType: "disponible",
    lessonsCount: 8,
    duration: "Google Drive",
    progress: 10,
    cover: "./assets/gifs/superband-activation.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1DZkIlOfRugbT62yKl1T-uCVTifhsTTXb"
  }
];

// 2. Muscle Group Folder Catalog (Each item represents ONE Google Drive folder)
const CLASSES_DATA = [
  // =========================================================================
  // 1. BARBELL EXERCISES (EXERCÍCIOS COM BARRAS)
  // =========================================================================
  {
    id: "barbell-abs",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Google Drive ABDOMINAIS folder with all barbell abdominal and core exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-abs.gif",
    cover: "./assets/gifs/barbell-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1SI_ayEMrz0bj7YF93CrMiFj53TlhEUZz",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "barbell-forearms",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Forearms",
    folderName: "ANTEBRAÇO",
    desc: "Access the Google Drive ANTEBRAÇO folder with all barbell forearm and wrist curl exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-forearms.gif",
    cover: "./assets/gifs/barbell-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1vgd6RlYzWfbZ-TBSDAwASmj44OQ1HX9X",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANTEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • ANTEBRAÇO"
  },
  {
    id: "barbell-biceps",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Google Drive BICEPS folder with all barbell bicep curl exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-biceps.gif",
    cover: "./assets/gifs/barbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/14GA-mZOBUnQBgAIQHnObBtxvAas69-ox",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "barbell-back",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Google Drive COSTAS folder with all barbell back, lat, and row exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-back.gif",
    cover: "./assets/gifs/barbell-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/10TUTr4CZiX_cGM9P8FEZFbNbeKz_-h2u",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "barbell-shoulders",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Shoulders",
    folderName: "OMBROS",
    desc: "Access the Google Drive OMBROS folder with all barbell shoulder and overhead press exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-shoulders.gif",
    cover: "./assets/gifs/barbell-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1igjbOBmiCHPAKFSPQaQ472AcO2SQ1l8E",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBROS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • OMBROS"
  },
  {
    id: "barbell-calves",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Calves",
    folderName: "PANTURRILHAS",
    desc: "Access the Google Drive PANTURRILHAS folder with all barbell calf raise exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Calves",
    muscleKey: "calves",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-calves.gif",
    cover: "./assets/gifs/barbell-calves.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1kf2knt5UdbacZkSYgdsOajclct_yUC3S",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Calves (PANTURRILHAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • PANTURRILHAS"
  },
  {
    id: "barbell-chest",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Google Drive PEITO folder with all barbell bench press and chest exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-chest.gif",
    cover: "./assets/gifs/barbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1ie1657dqObvFoOQgLsSZYhIN3n-tRiTs",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "barbell-legs",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Google Drive PERNA folder with all barbell squat and leg exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-legs.gif",
    cover: "./assets/gifs/barbell-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1aRfvp5LIreWX2oNDkbTDxuCS3TJ4NuoO",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "barbell-trapezius",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Trapezius",
    folderName: "TRAPÉZIO",
    desc: "Access the Google Drive TRAPÉZIO folder with all barbell shrug and trapezius exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Trapezius",
    muscleKey: "traps",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-trapezius.gif",
    cover: "./assets/gifs/barbell-trapezius.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/11VOPY9lLDNELpEQtRrjTgo-1i3ioPLTV",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Trapezius (TRAPÉZIO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • TRAPÉZIO"
  },
  {
    id: "barbell-triceps",
    moduleId: "mod-barbell",
    moduleName: "Barbell Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Google Drive TRICEPS folder with all barbell triceps extension exercise GIFs.",
    category: "Barbell Exercises",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/barbell-triceps.gif",
    cover: "./assets/gifs/barbell-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1l5aobDyets-AzycrBsChp0FXM5QrpCaN",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Barbell Exercises (EXERCÍCIOS COM BARRAS)."
    ],
    materials: "Google Drive Folder • TRICEPS"
  },

  // =========================================================================
  // 2. DUMBBELL EXERCISES (EXERCÍCIOS COM HALTERES)
  // =========================================================================
  {
    id: "dumbbell-abs",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Google Drive ABDOMINAIS folder with all dumbbell abdominal and core exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-abs.gif",
    cover: "./assets/gifs/dumbbell-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1qJXtIsUr0DyQ-O3QbDILaUsvOG7Cmg25",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "dumbbell-forearms",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Forearms",
    folderName: "ANTEBRAÇO",
    desc: "Access the Google Drive ANTEBRAÇO folder with all dumbbell forearm and wrist curl exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-forearms.gif",
    cover: "./assets/gifs/dumbbell-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1wFg81t-86LoeRacWTjfXsjvWAc5zuRtO",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANTEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • ANTEBRAÇO"
  },
  {
    id: "dumbbell-biceps",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Google Drive BICEPS folder with all dumbbell bicep curl exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-biceps.gif",
    cover: "./assets/gifs/dumbbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/11SUHN4MnK_ReSy9qzEFBO_8ebp5jppE5",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "dumbbell-back",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Google Drive COSTAS folder with all dumbbell row and back exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-back.gif",
    cover: "./assets/gifs/dumbbell-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1a-gkPwAHQFkZKeGpJZ6CnTsYUbcNkAZD",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "dumbbell-shoulders",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Shoulders",
    folderName: "OMBRO",
    desc: "Access the Google Drive OMBRO folder with all dumbbell lateral raise and press exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-shoulders.gif",
    cover: "./assets/gifs/dumbbell-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1LF2ZNUtX9kQZT4adSw0RV-dyY9h31pDm",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBRO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • OMBRO"
  },
  {
    id: "dumbbell-calves",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Calves",
    folderName: "PANTURRILHAS",
    desc: "Access the Google Drive PANTURRILHAS folder with all dumbbell calf raise exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Calves",
    muscleKey: "calves",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-calves.gif",
    cover: "./assets/gifs/dumbbell-calves.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1MPJ46GJ2rQXrMwj4BFgQ0LuzkKEmww-q",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Calves (PANTURRILHAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • PANTURRILHAS"
  },
  {
    id: "dumbbell-chest",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Google Drive PEITO folder with all dumbbell bench press and fly exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-chest.gif",
    cover: "./assets/gifs/dumbbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/17Ou7WfUruNH2A2jJafy0CG95krtVKXDV",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "dumbbell-legs",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Google Drive PERNA folder with all dumbbell split squat, lunge, and leg GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-legs.gif",
    cover: "./assets/gifs/dumbbell-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1DbTdVTEhpH_IwgJ4w-WaH9PoyL8W5jyW",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "dumbbell-trapezius",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Trapezius",
    folderName: "TRAPÉZIO",
    desc: "Access the Google Drive TRAPÉZIO folder with all dumbbell shrug and trapezius exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Trapezius",
    muscleKey: "traps",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-trapezius.gif",
    cover: "./assets/gifs/dumbbell-trapezius.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1K-mFls29RfQEQ-6oGvmGMSarV5CFFes3",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Trapezius (TRAPÉZIO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • TRAPÉZIO"
  },
  {
    id: "dumbbell-triceps",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Google Drive TRICEPS folder with all dumbbell triceps extension exercise GIFs.",
    category: "Dumbbell Exercises",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/dumbbell-triceps.gif",
    cover: "./assets/gifs/dumbbell-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IiluTeV-ylu4EdZUMq-SE1TaMtbBNdj9",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Dumbbell Exercises (EXERCÍCIOS COM HALTERES)."
    ],
    materials: "Google Drive Folder • TRICEPS"
  },

  // =========================================================================
  // 3. MACHINE, HACK & BENCH EXERCISES (EXERCÍCIOS NA MAQUINA - HACK - BANCO)
  // =========================================================================
  {
    id: "machine-abs",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Machine ABDOMINAIS folder with all abdominal crunch & machine exercise GIFs in Google Drive.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-abs.gif",
    cover: "./assets/gifs/machine-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1pocAC1dhAPykj7N0q5D4UvxncWD7eQiJ",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "machine-forearms",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Forearms",
    folderName: "ANTEBRAÇO",
    desc: "Access the Machine ANTEBRAÇO folder with all machine and supported bench forearm exercise GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-forearms.gif",
    cover: "./assets/gifs/machine-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1nuhLcHeGVwjfnbQN7NSWhi1UKoH1E94h",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANTEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • ANTEBRAÇO"
  },
  {
    id: "machine-biceps",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Machine BICEPS folder with all machine preacher curl and lever arm exercise GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-biceps.gif",
    cover: "./assets/gifs/machine-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1pxGZ474eXXS7VoiucLy3n9hAUC9LVzcn",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "machine-back",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Machine COSTAS folder with all lat pulldown and machine row exercise GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-back.gif",
    cover: "./assets/gifs/machine-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/13mIZBpr1moKYEo3lS8JqTPHNP5yx7JfB",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "machine-shoulders",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Shoulders",
    folderName: "OMBRO",
    desc: "Access the Machine OMBRO folder with all shoulder press and reverse pec deck rear delt GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-shoulders.gif",
    cover: "./assets/gifs/machine-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1UxjJAXDXkxy8UOz6MekXFNHHYKOQMkAR",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBRO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • OMBRO"
  },
  {
    id: "machine-calves",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Calves",
    folderName: "PANTURRILHA",
    desc: "Access the Machine PANTURRILHA folder with all seated and standing calf machine GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Calves",
    muscleKey: "calves",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-calves.gif",
    cover: "./assets/gifs/machine-calves.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/136MqRFO5aDxZzPsgqnyZYcNrq-VzpK03",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Calves (PANTURRILHA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • PANTURRILHA"
  },
  {
    id: "machine-chest",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Machine PEITO folder with all chest press and pec deck fly exercise GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-chest.gif",
    cover: "./assets/gifs/machine-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1qVAyTN0dcY0licaLs-AqRtXUr79-hGai",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "machine-legs",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Machine PERNA folder with all 45° leg press, hack squat, and leg extension GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-legs.gif",
    cover: "./assets/gifs/machine-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1q6dc9hNnF-mBnXyRSwfFFToE1_p9kKPb",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "machine-trapezius",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Trapezius",
    folderName: "TRAPÉZIO",
    desc: "Access the Machine TRAPÉZIO folder with all machine shrug and trapezius exercise GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Trapezius",
    muscleKey: "traps",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-trapezius.gif",
    cover: "./assets/gifs/machine-trapezius.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1mm7zjSxg8wNnkUutUaGGI7vUBJqshCG_",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Trapezius (TRAPÉZIO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • TRAPÉZIO"
  },
  {
    id: "machine-triceps",
    moduleId: "mod-machine",
    moduleName: "Machine & Bench Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Machine TRICEPS folder with all machine dip and seated tricep extension GIFs.",
    category: "Machine Exercises",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/machine-triceps.gif",
    cover: "./assets/gifs/machine-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1xeYCvjNpGbsaYhDXdrOm9TKld81gdPPw",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Machine, Hack & Bench (EXERCÍCIOS NA MAQUINA - HACK - BANCO)."
    ],
    materials: "Google Drive Folder • TRICEPS"
  },

  // =========================================================================
  // 4. CABLE & PULLEY EXERCISES (EXERCÍCIOS NO CABO OU POLIA)
  // =========================================================================
  {
    id: "cable-abs",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Cable ABDOMINAIS folder with all cable kneeling crunch and rotation GIFs in Google Drive.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-abs.gif",
    cover: "./assets/gifs/cable-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1AGatUPZSlwUxK8P_YizcAyPv-yCpaA_A",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "cable-forearms",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Forearms",
    folderName: "ANDEBRAÇO",
    desc: "Access the Cable ANDEBRAÇO folder with all cable wrist curl and grip exercise GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-forearms.gif",
    cover: "./assets/gifs/cable-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1u1nxMI6kYTZbyOpEN1M1CC0uos1rBSFO",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANDEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • ANDEBRAÇO"
  },
  {
    id: "cable-biceps",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Cable BICEPS folder with all low pulley, high cable, and rope curl GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-biceps.gif",
    cover: "./assets/gifs/cable-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1LaDYHLt7VK7GO9LgA0GGdG35mOkzzAUI",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "cable-back",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Cable COSTAS folder with all straight-arm pulldown and cable row GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-back.gif",
    cover: "./assets/gifs/cable-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/14b-2V01GmwlJdtS6L5LSQRWe1o-uls_s",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "cable-shoulders",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Shoulders",
    folderName: "OMBRO",
    desc: "Access the Cable OMBRO folder with all cable lateral raise and face pull GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-shoulders.gif",
    cover: "./assets/gifs/cable-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1wtS5i6y0kn7ooGQ6os_iU_bC9DjMlYjQ",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBRO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • OMBRO"
  },
  {
    id: "cable-chest",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Cable PEITO folder with all high, mid, and low cable fly & crossover GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-chest.gif",
    cover: "./assets/gifs/cable-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1H_kAyq6-sZtMc0A3e3l9jrCgnOt21QRg",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "cable-legs",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Cable PERNA folder with all cable pull-through, kickback, and leg GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-legs.gif",
    cover: "./assets/gifs/cable-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1-Rf8K384CVoquq6Eqrs_G7p2pk3q9_r0",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "cable-trapezius",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Trapezius",
    folderName: "TRAPÉZIO",
    desc: "Access the Cable TRAPÉZIO folder with all cable shrug and upright row exercise GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Trapezius",
    muscleKey: "traps",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-trapezius.gif",
    cover: "./assets/gifs/cable-trapezius.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/10Cr2U5egO0KJ6zT54lJWQ_hUxVUV3s00",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Trapezius (TRAPÉZIO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • TRAPÉZIO"
  },
  {
    id: "cable-triceps",
    moduleId: "mod-cable",
    moduleName: "Cable & Pulley Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Cable TRICEPS folder with all rope and straight-bar pushdown exercise GIFs.",
    category: "Cable Exercises",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/cable-triceps.gif",
    cover: "./assets/gifs/cable-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1MxICI9GVBq96YdMuI0-CIcG9P0d6y1CN",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Cable & Pulley Exercises (EXERCÍCIOS NO CABO OU POLIA)."
    ],
    materials: "Google Drive Folder • TRICEPS"
  },

  // =========================================================================
  // 5. KETTLEBELL EXERCISES (KETTLEBELL)
  // =========================================================================
  {
    id: "kettlebell-abs",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Kettlebell ABDOMINAIS folder with all kettlebell core and windmill exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-swing.gif",
    cover: "./assets/gifs/kettlebell-swing.gif",
    fallbackCover: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1hEHvB6JwiDSo6tq9S7Y2vjntoDaw2N6L",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "kettlebell-forearms",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Forearms",
    folderName: "ANTEBRAÇO",
    desc: "Access the Kettlebell ANTEBRAÇO folder with all kettlebell grip and bottom-up exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-forearms.gif",
    cover: "./assets/gifs/kettlebell-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/16W4fU7YJoSToRJMRxsEZO1XGDdHRfh8i",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANTEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • ANTEBRAÇO"
  },
  {
    id: "kettlebell-biceps",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Kettlebell BICEPS folder with all kettlebell bicep and horn curl exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-biceps.gif",
    cover: "./assets/gifs/kettlebell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1qbTIMQjVvEj09WZ-FpeP4CyImPgAp87R",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "kettlebell-back",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Kettlebell COSTAS folder with all kettlebell row and posterior chain exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-back.gif",
    cover: "./assets/gifs/kettlebell-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1mPsTbq5YI7cDlj6JjwFrNu2f6GX7cjGD",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "kettlebell-shoulders",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Shoulders",
    folderName: "OMBRO",
    desc: "Access the Kettlebell OMBRO folder with all kettlebell overhead press and halo exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-shoulders.gif",
    cover: "./assets/gifs/kettlebell-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1_BrkA-t0hJCYASTAmT_V4jQvGNVPX2VH",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBRO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • OMBRO"
  },
  {
    id: "kettlebell-calves",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Calves",
    folderName: "PANTURRILHA",
    desc: "Access the Kettlebell PANTURRILHA folder with all loaded kettlebell calf raise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Calves",
    muscleKey: "calves",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-calves.gif",
    cover: "./assets/gifs/kettlebell-calves.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/15SxV08E4pB0Uv-v-2OIR8STneNOX56Vm",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Calves (PANTURRILHA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • PANTURRILHA"
  },
  {
    id: "kettlebell-chest",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Kettlebell PEITO folder with all kettlebell floor press and pushup exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-chest.gif",
    cover: "./assets/gifs/kettlebell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1yPQBHdk-4DfOyujiFLR20ZXFXxoLeAJL",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "kettlebell-legs",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Kettlebell PERNA folder with all goblet squat, lunge, and swing exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-legs.gif",
    cover: "./assets/gifs/kettlebell-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1NXfvmW6k7Ol2lDsdt0YE7o0U-DawNyAa",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "kettlebell-trapezius",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Trapezius",
    folderName: "TRAPÉZIO",
    desc: "Access the Kettlebell TRAPÉZIO folder with all kettlebell high pull and shrug exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Trapezius",
    muscleKey: "traps",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-trapezius.gif",
    cover: "./assets/gifs/kettlebell-trapezius.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1yK7-glCf3C49Lp4EGsNix5EhFbX-hea4",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Trapezius (TRAPÉZIO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • TRAPÉZIO"
  },
  {
    id: "kettlebell-triceps",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Kettlebell TRICEPS folder with all kettlebell overhead extension and dip exercise GIFs.",
    category: "Kettlebell Exercises",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/kettlebell-triceps.gif",
    cover: "./assets/gifs/kettlebell-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1V8I163fYDVDc60UCpBsFgVssVnWlfFGS",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Kettlebell (KETTLEBELL)."
    ],
    materials: "Google Drive Folder • TRICEPS"
  },

  // =========================================================================
  // 6. SUPERBAND EXERCISES (SUPERBAND)
  // =========================================================================
  {
    id: "superband-abs",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Abs & Core",
    folderName: "ABDOMINAIS",
    desc: "Access the Superband ABDOMINAIS folder with all banded core and crunch exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-activation.gif",
    cover: "./assets/gifs/superband-activation.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1pXe6WoUPZ4Ay9kI-DeWOZFp3Ue33bvQg",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Abs & Core (ABDOMINAIS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • ABDOMINAIS"
  },
  {
    id: "superband-forearms",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Forearms",
    folderName: "ANTEBRAÇO",
    desc: "Access the Superband ANTEBRAÇO folder with all elastic wrist curl and grip resistance exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-forearms.gif",
    cover: "./assets/gifs/superband-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EE8ueXL6gg-eRnhjoWanubhmQIGl54__",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Forearms (ANTEBRAÇO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • ANTEBRAÇO"
  },
  {
    id: "superband-biceps",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Biceps",
    folderName: "BICEPS",
    desc: "Access the Superband BICEPS folder with all standing banded curl and arm exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-biceps.gif",
    cover: "./assets/gifs/superband-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/15UQi_4AHQ6z12ZSUYh_DH1GWZKKPRAKL",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Biceps (BICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • BICEPS"
  },
  {
    id: "superband-back",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Back",
    folderName: "COSTAS",
    desc: "Access the Superband COSTAS folder with all band pull-apart and row exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-back.gif",
    cover: "./assets/gifs/superband-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1MiOb2Zhsj7sVL9GFW_522f3IYlSjGWPe",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Back (COSTAS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • COSTAS"
  },
  {
    id: "superband-shoulders",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Shoulders",
    folderName: "OMBRO",
    desc: "Access the Superband OMBRO folder with all banded face pull and lateral raise exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-shoulders.gif",
    cover: "./assets/gifs/superband-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1eIB7NiBjWivOHqSCbAXfcvjfRY1wbv1T",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Shoulders (OMBRO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • OMBRO"
  },
  {
    id: "superband-chest",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Chest",
    folderName: "PEITO",
    desc: "Access the Superband PEITO folder with all banded pushup and chest fly exercise GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-chest.gif",
    cover: "./assets/gifs/superband-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EcnBu8T9thqpm8X3y-_taGDyM9vvWxQL",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Chest (PEITO).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • PEITO"
  },
  {
    id: "superband-legs",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Legs",
    folderName: "PERNA",
    desc: "Access the Superband PERNA folder with all banded monster walk, squat, and glute bridge GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-legs.gif",
    cover: "./assets/gifs/superband-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/15WxEj6Xna1nn_8gS_tCT_OxFKThu-MuU",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Legs (PERNA).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • PERNA"
  },
  {
    id: "superband-triceps",
    moduleId: "mod-superband",
    moduleName: "Superband Exercises",
    title: "Triceps",
    folderName: "TRICEPS",
    desc: "Access the Superband TRICEPS folder with all banded pushdown and overhead extension GIFs.",
    category: "Superband Exercises",
    categoryKey: "superband",
    equipment: "Superband",
    equipmentKey: "superband",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "Drive Folder",
    difficulty: "All Levels",
    badge: "Drive Folder",
    videoSrc: "./assets/gifs/superband-triceps.gif",
    cover: "./assets/gifs/superband-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1lpGo6yJJdNJ5tz6yYa97HLsVDLrbYF68",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Targeted Muscle Group: Triceps (TRICEPS).",
      "Direct Drive access: View, stream, and download all exercise GIFs.",
      "Equipment Category: Superband (SUPERBAND)."
    ],
    materials: "Google Drive Folder • TRICEPS"
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
   SECURE FRONTEND AUTHENTICATION (SALTED SHA-256)
   Password is NEVER stored in plaintext in the codebase
   ========================================================================== */
function sha256(ascii) {
  function rightRotate(value, amount) { return (value >>> amount) | (value << (32 - amount)); }
  const mathPow = Math.pow, maxWord = mathPow(2, 32), lengthProperty = 'length';
  let i, j, result = '', words = [], asciiBitLength = ascii[lengthProperty] * 8, hash = [], k = [], primeCounter = 0, isComposite = {};
  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) isComposite[i] = candidate;
      hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }
  hash = hash.slice(0, 8);
  ascii += '\x80';
  while ((ascii[lengthProperty] % 64) - 56) ascii += '\x00';
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    words[i >> 2] |= j << (((3 - i) % 4) * 8);
  }
  words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
  words[words[lengthProperty]] = asciiBitLength;
  for (j = 0; j < words[lengthProperty];) {
    const w = words.slice(j, (j += 16)), oldHash = hash;
    hash = hash.slice(0, 8);
    for (i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2];
      const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
      const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
      w[i] = i < 16 ? w[i] : (w[i - 16] + s0 + w[i - 7] + s1) | 0;
      const s1h = rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const t2 = (s1h + maj) | 0;
      const s0h = rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const t1 = (hash[7] + s0h + ch + k[i] + w[i]) | 0;
      hash = [(t1 + t2) | 0].concat(hash);
      hash[4] = (hash[4] + t1) | 0;
    }
    for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
  }
  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (j * 8)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }
  return result;
}

const AUTH_SALT = "WorkoutGifs_Vault_Secure_Salt_2026";
const AUTH_HASH = "979c56487313b0a7401461a460dc683e6b0dfa0b720c0c8d5324ae3766983006";

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
    // 1. Load user from storage
    const savedUser = sessionStorage.getItem('workout_gifs_user') || localStorage.getItem('workout_gifs_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        // Clear any previous demo credentials
        if (parsed && parsed.email && !parsed.email.includes('vip.student@') && !parsed.email.includes('pro.coach@')) {
          this.user = parsed;
        } else {
          this.user = null;
          localStorage.removeItem('workout_gifs_user');
          sessionStorage.removeItem('workout_gifs_user');
        }
      } catch (e) {
        this.user = null;
      }
    }
    
    // 2. Load completed lessons
    const savedCompleted = localStorage.getItem('workout_gifs_completed');
    if (savedCompleted) {
      try {
        this.completedLessons = new Set(JSON.parse(savedCompleted));
      } catch (e) {}
    } else {
      this.completedLessons = new Set(['barbell-chest']);
    }
    
    // 3. Load My List
    const savedList = localStorage.getItem('workout_gifs_my_list');
    if (savedList) {
      try {
        this.myList = new Set(JSON.parse(savedList));
      } catch (e) {}
    } else {
      this.myList = new Set(['barbell-abs', 'dumbbell-biceps']);
    }
    
    // 4. Load Personal Notes
    const savedNotes = localStorage.getItem('workout_gifs_notes');
    if (savedNotes) {
      try {
        this.userNotes = JSON.parse(savedNotes);
      } catch (e) {}
    }
  },
  
  save(rememberMe = true) {
    if (this.user) {
      if (rememberMe) {
        localStorage.setItem('workout_gifs_user', JSON.stringify(this.user));
        sessionStorage.removeItem('workout_gifs_user');
      } else {
        sessionStorage.setItem('workout_gifs_user', JSON.stringify(this.user));
        localStorage.removeItem('workout_gifs_user');
      }
    } else {
      localStorage.removeItem('workout_gifs_user');
      sessionStorage.removeItem('workout_gifs_user');
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
  const forgotPassLink = document.getElementById('ff-forgot-pass-link');
  const toastContainer = document.getElementById('ff-toast-container');
  
  // Ensure login fields start completely empty
  if (loginEmailInput) loginEmailInput.value = '';
  if (loginPasswordInput) loginPasswordInput.value = '';
  
  // Session check
  if (AppState.user) {
    showMainApp();
  } else {
    showLoginScreen();
  }
  
  // Show Login Screen
  function showLoginScreen() {
    if (loginEmailInput) loginEmailInput.value = '';
    if (loginPasswordInput) loginPasswordInput.value = '';
    if (loginAlert) {
      loginAlert.classList.add('ff-hidden');
      loginAlert.textContent = '';
    }
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

  // Forgot password link
  if (forgotPassLink) {
    forgotPassLink.addEventListener('click', (e) => {
      e.preventDefault();
      alert('If you forgot your password or need assistance accessing Workout GIFs, please contact support via the Help Center or email support@workoutgifs.com.');
    });
  }
  
  // Handle Login Form Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginEmailInput.value.trim();
      const password = loginPasswordInput.value.trim();
      const rememberCheckbox = document.getElementById('ff-remember-me');
      const rememberMe = rememberCheckbox ? rememberCheckbox.checked : true;
      
      // Validation: Email and password required
      if (!email || !password) {
        loginAlert.classList.remove('ff-hidden');
        loginAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please enter both your email address and password to continue.';
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        loginAlert.classList.remove('ff-hidden');
        loginAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a valid email address.';
        return;
      }
      
      // Secure Salted Hash Password Verification (Password is NEVER stored in plaintext in the frontend)
      const enteredHash = sha256(password + AUTH_SALT);
      if (enteredHash !== AUTH_HASH) {
        loginAlert.classList.remove('ff-hidden');
        loginAlert.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> <strong>Incorrect password.</strong> Please verify your credentials and try again.';
        loginPasswordInput.value = '';
        loginPasswordInput.focus();
        return;
      }
      
      // Password correct! Format display name from email
      loginAlert.classList.add('ff-hidden');
      const rawName = email.split('@')[0].replace(/[._-]/g, ' ');
      const formattedName = rawName.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ') || 'VIP Athlete';

      performLogin(email, formattedName, rememberMe);
    });
  }
  
  // Login Execution
  function performLogin(email, name, rememberMe = true) {
    AppState.user = {
      email: email,
      name: name || 'VIP Athlete',
      plan: 'Lifetime Pro Membership',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    AppState.save(rememberMe);
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
    
    // Update active nav indicators across Desktop and Drawer
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
  
  // Drawer Training Module Direct Filter Links
  document.querySelectorAll('[data-drawer-filter]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = item.getAttribute('data-drawer-filter');
      const drawer = document.getElementById('ff-mobile-drawer');
      if (drawer) drawer.classList.remove('ff-open');
      
      navigateTo('inicio');
      setTimeout(() => {
        const targetRow = document.getElementById(`row-${filter}`);
        if (targetRow) {
          targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    });
  });
  
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
  const profileDropdown = document.getElementById('ff-profile-dropdown');
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('ff-open');
      if (profileDropdown) profileDropdown.classList.toggle('ff-open');
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
      if (profileDropdown) profileDropdown.classList.remove('ff-open');
    });
  }
  
  // Close dropdowns on outside click
  document.addEventListener('click', () => {
    if (profileMenu) profileMenu.classList.remove('ff-open');
    if (profileDropdown) profileDropdown.classList.remove('ff-open');
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
    // 1. Barbell Exercises
    const trackBarbell = document.getElementById('ff-track-barbell');
    if (trackBarbell) {
      const barbellClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'barbell');
      trackBarbell.innerHTML = barbellClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 2. Dumbbell Exercises
    const trackDumbbell = document.getElementById('ff-track-dumbbell');
    if (trackDumbbell) {
      const dumbbellClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'dumbbell');
      trackDumbbell.innerHTML = dumbbellClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 3. Machine Exercises
    const trackMachine = document.getElementById('ff-track-machine');
    if (trackMachine) {
      const machineClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'machine');
      trackMachine.innerHTML = machineClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 4. Cable Exercises
    const trackCable = document.getElementById('ff-track-cable');
    if (trackCable) {
      const cableClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'cable');
      trackCable.innerHTML = cableClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 5. Kettlebell Exercises
    const trackKettlebell = document.getElementById('ff-track-kettlebell');
    if (trackKettlebell) {
      const kettlebellClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'kettlebell');
      trackKettlebell.innerHTML = kettlebellClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 6. Superband Exercises
    const trackSuperband = document.getElementById('ff-track-superband');
    if (trackSuperband) {
      const superbandClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'superband');
      trackSuperband.innerHTML = superbandClasses.map(c => createCardHtml(c)).join('');
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
      <div class="ff-card" data-lesson-id="${item.id}" data-drive-url="${item.driveUrl}">
        <div class="ff-card-media">
          <img class="ff-card-img" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src='${item.fallbackCover}';">
          <div class="ff-card-overlay-gradient"></div>
          
          <div class="ff-card-top-tags">
            <span class="ff-badge-status ff-badge-disponible">${item.equipment}</span>
            <span class="ff-badge-duration"><i class="fa-solid fa-folder"></i> Drive Folder</span>
          </div>
          
          <div class="ff-card-play-hover" title="Open Google Drive Folder">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </div>
        </div>
        
        <div class="ff-card-body">
          <span class="ff-card-category">${item.category}</span>
          <h4 class="ff-card-title">${item.title}</h4>
          <p class="ff-card-desc">${item.desc}</p>
          
          ${showProgress && progressVal > 0 ? `
            <div class="ff-card-progress-bar">
              <div class="ff-card-progress-fill" style="width: ${progressVal}%"></div>
            </div>
          ` : ''}
          
          <div class="ff-card-footer">
            <button class="ff-card-cta-btn ff-card-preview-btn" type="button" title="Preview sample GIF and details">
              <i class="fa-solid fa-play"></i> <span>Preview GIF</span>
            </button>
            <div class="ff-card-footer-actions">
              <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" class="ff-card-drive-btn" title="Open folder in Google Drive">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> <span>Drive ↗</span>
              </a>
              <button class="ff-card-fav-btn ${isSaved ? 'ff-saved' : ''}" data-fav-id="${item.id}" title="${isSaved ? 'Remove from My List' : 'Save to My List'}">
                <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
              </button>
            </div>
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
        filtered = filtered.filter(c => 
          c.categoryKey === category || 
          c.equipmentKey === category || 
          c.muscleKey === category
        );
      }
    }
    
    if (query) {
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.desc.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        (c.equipment && c.equipment.toLowerCase().includes(query)) ||
        (c.muscleGroup && c.muscleGroup.toLowerCase().includes(query)) ||
        (c.folderName && c.folderName.toLowerCase().includes(query))
      );
    }
    
    grid.innerHTML = filtered.length > 0 
      ? filtered.map(c => createCardHtml(c, true)).join('')
      : `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--ff-text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; margin-bottom: 14px; opacity: 0.4;"></i>
          <h3>No matching folders found</h3>
          <p style="font-size: 13px; margin-top: 6px;">Try another keyword or select a different category.</p>
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
    // Card clicks
    document.querySelectorAll('.ff-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.ff-card-fav-btn')) return;
        
        const lessonId = card.getAttribute('data-lesson-id');
        const driveUrl = card.getAttribute('data-drive-url');
        
        // If clicking the preview button, open the modal
        if (e.target.closest('.ff-card-preview-btn')) {
          e.stopPropagation();
          if (lessonId) openPlayerModal(lessonId);
          return;
        }
        
        // If clicking the Drive button directly, let it open normally
        if (e.target.closest('.ff-card-drive-btn')) {
          return;
        }
        
        // Clicking the card body redirects/opens the corresponding Google Drive folder
        if (driveUrl) {
          window.open(driveUrl, '_blank');
        } else if (lessonId) {
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
  const modalGif = document.getElementById('ff-modal-gif');
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
  const modalBtnDrive = document.getElementById('ff-modal-btn-drive');
  const modalBtnCopyDrive = document.getElementById('ff-modal-btn-copy-drive');
  const modalBtnDownloadGif = document.getElementById('ff-modal-btn-download-gif');
  
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
    
    // Media setup (GIF vs Video)
    if (lesson.cover && (lesson.cover.endsWith('.gif') || lesson.cover.endsWith('.webp') || lesson.cover.endsWith('.png'))) {
      if (modalGif) {
        modalGif.src = lesson.cover;
        modalGif.style.display = 'block';
      }
      if (modalVideo) {
        modalVideo.style.display = 'none';
        modalVideo.pause();
      }
    } else if (modalVideo) {
      if (modalGif) modalGif.style.display = 'none';
      modalVideo.style.display = 'block';
      modalVideo.src = lesson.videoSrc;
      modalVideo.poster = lesson.cover;
      modalVideo.play().catch(() => {});
    }
    
    // Google Drive Links & Download
    if (modalBtnDrive) {
      modalBtnDrive.href = lesson.driveUrl;
    }
    if (modalBtnDownloadGif) {
      modalBtnDownloadGif.href = lesson.cover;
      modalBtnDownloadGif.setAttribute('download', `${lesson.id}.gif`);
    }
    if (modalBtnCopyDrive) {
      modalBtnCopyDrive.onclick = () => {
        navigator.clipboard.writeText(lesson.driveUrl);
        showToast('Google Drive link copied to clipboard!', 'fa-solid fa-copy');
      };
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
        <div class="ff-notif-item" onclick="openPlayerModal('${next.id}')" style="display: flex; gap: 12px; align-items: center; padding: 10px; cursor: pointer;">
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
