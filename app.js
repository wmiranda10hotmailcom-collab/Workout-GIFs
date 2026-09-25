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

// 1. Program Modules / Equipment Suites
const MODULES_DATA = [
  {
    id: "mod-barbell",
    num: "Suite 01",
    title: "Barbell Exercises (Exercícios com Barras)",
    subtitle: "Heavy compounds & biomechanics with free weights",
    desc: "Complete barbell demonstration library: Abs, Forearms, Biceps, Chest, Back, Shoulders, Legs, and Triceps. Direct access to the Drive folder.",
    badge: "Drive Connected",
    badgeType: "disponible",
    lessonsCount: 8,
    duration: "150+ GIFs",
    progress: 100,
    cover: "./assets/gifs/barbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR"
  },
  {
    id: "mod-dumbbell",
    num: "Suite 02",
    title: "Dumbbell Exercises (Exercícios com Halteres)",
    subtitle: "Symmetry, hypertrophy & unilateral motion",
    desc: "Target each side independently to eliminate strength imbalances. Features Biceps, Shoulders, Chest, Back, Triceps, Legs, Forearms, and Abs.",
    badge: "Drive Connected",
    badgeType: "disponible",
    lessonsCount: 8,
    duration: "180+ GIFs",
    progress: 75,
    cover: "./assets/gifs/dumbbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv"
  },
  {
    id: "mod-machine",
    num: "Suite 03",
    title: "Machine, Hack & Bench (Máquina, Hack, Banco)",
    subtitle: "Fixed trajectories, pure isolation & safety",
    desc: "Push sets beyond failure safely. Features 45° Leg Press, Hack Squats, Lat Pulldowns, Seated Chest Press, Rear Pec Deck, and Ab Machines.",
    badge: "Drive Connected",
    badgeType: "disponible",
    lessonsCount: 5,
    duration: "140+ GIFs",
    progress: 50,
    cover: "./assets/gifs/machine-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI"
  },
  {
    id: "mod-cable",
    num: "Suite 04",
    title: "Cable & Pulley Exercises (Cabo ou Polia)",
    subtitle: "Continuous tension & peak muscle contraction",
    desc: "Zero dead spots in the strength curve. Complete collection of Triceps Pushdowns, Bicep Curls, High-to-Low Flyes, Face Pulls, and Cable Crunches.",
    badge: "Drive Connected",
    badgeType: "disponible",
    lessonsCount: 6,
    duration: "120+ GIFs",
    progress: 40,
    cover: "./assets/gifs/cable-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1"
  },
  {
    id: "mod-functional",
    num: "Suite 05",
    title: "Functional & Bodyweight Training (Funcional)",
    subtitle: "Athletic conditioning, core strength & mobility",
    desc: "Comprehensive 28-category athletic suite: Abs, Cardio, Agility, Bodyweight Calisthenics, Mobility, Battle Rope, and TRX Suspension.",
    badge: "28 Subcategories",
    badgeType: "nuevo",
    lessonsCount: 7,
    duration: "300+ GIFs",
    progress: 20,
    cover: "./assets/gifs/functional-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh"
  },
  {
    id: "mod-kettlebell",
    num: "Suite 06",
    title: "Kettlebell & Superband (Kettlebell e Elásticos)",
    subtitle: "Explosive hip hinges, power & joint activation",
    desc: "Dynamic ballistic conditioning and elastic resistance: Kettlebell Swings, Turkish Get-Ups, Windmills, Band Monster Walks, and Pull-Aparts.",
    badge: "Drive Connected",
    badgeType: "disponible",
    lessonsCount: 2,
    duration: "80+ GIFs",
    progress: 10,
    cover: "./assets/gifs/kettlebell-swing.gif",
    fallbackCover: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1OeDXqZIkmWgmUuwUxL6qIzfc_0auxQPa"
  }
];

// 2. Video Lessons / Exercise GIF Demos
const CLASSES_DATA = [
  // --- ROW 1: BARBELL EXERCISES ---
  {
    id: "barbell-abs",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Abs & Core: Barbell Twists & Rollouts",
    desc: "Seated barbell twists, standing rotations, and kneeling barbell rollouts for rotational core stability.",
    category: "Barbell • Abs & Core",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "15+ GIFs",
    difficulty: "All Levels",
    badge: "Barbell Core",
    videoSrc: "./assets/gifs/barbell-abs.gif",
    cover: "./assets/gifs/barbell-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Keep pelvis neutral and rotate exclusively through thoracic spine.",
      "Engage the transverse abdominis and brace before initiating movement.",
      "Control the eccentric return speed with zero momentum."
    ],
    materials: "Barbell_Core_Index.pdf (Google Drive Connected)"
  },
  {
    id: "barbell-forearms",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Forearms: Behind-the-Back Wrist Curls",
    desc: "Behind-the-back wrist curls, finger curls, and reverse curls for crushing grip strength and forearm mass.",
    category: "Barbell • Forearms & Grip",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "12+ GIFs",
    difficulty: "All Levels",
    badge: "Forearms",
    videoSrc: "./assets/gifs/barbell-forearms.gif",
    cover: "./assets/gifs/barbell-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Allow bar to roll down to fingertips for maximum wrist flexor stretch.",
      "Squeeze wrists hard at the peak for full contraction.",
      "Keep elbows locked in extension to isolate the forearms."
    ],
    materials: "Forearm_Hypertrophy_Protocol.pdf"
  },
  {
    id: "barbell-biceps",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Biceps: Standing Curls & 21s Protocol",
    desc: "Strict barbell curls, EZ-bar curls, drag curls, and 21s protocol for maximum bicep peak and brachialis recruitment.",
    category: "Barbell • Biceps",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "18+ GIFs",
    difficulty: "Intermediate",
    badge: "Biceps",
    videoSrc: "./assets/gifs/barbell-biceps.gif",
    cover: "./assets/gifs/barbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Pin elbows to ribcage and eliminate torso swing.",
      "Supinate forcefully against the bar during the concentric phase.",
      "Control the eccentric lowering phase for 2 to 3 seconds."
    ],
    materials: "Bicep_Peak_Mastery.pdf"
  },
  {
    id: "barbell-chest",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Chest: Flat Bench & Incline Press",
    desc: "Classic flat barbell bench press, 30° incline press, and banded bench presses for maximum pectoral hypertrophy.",
    category: "Barbell • Chest & Pecs",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "20+ GIFs",
    difficulty: "All Levels",
    badge: "Chest",
    videoSrc: "./assets/gifs/barbell-chest.gif",
    cover: "./assets/gifs/barbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Retract and depress scapulae to create a stable pressing shelf.",
      "Follow a curved J-bar path from sternum to upper chest lockout.",
      "Keep feet planted firmly for leg drive and spinal stability."
    ],
    materials: "Bench_Press_Biomechanics.pdf"
  },
  {
    id: "barbell-back",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Back: Bent-Over Rows & Deadlifts",
    desc: "Bent-over barbell rows, Pendlay rows, deficit deadlifts, and Yates rows to build a thick, dense back and wide lats.",
    category: "Barbell • Back & Lats",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "22+ GIFs",
    difficulty: "Advanced",
    badge: "Back",
    videoSrc: "./assets/gifs/barbell-back.gif",
    cover: "./assets/gifs/barbell-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Hinge hips backward with neutral spine and engaged hamstrings.",
      "Pull elbows toward your pockets to maximize latissimus dorsi recruitment.",
      "Pause for a fraction of a second at peak contraction."
    ],
    materials: "Back_Thickness_Blueprint.pdf"
  },
  {
    id: "barbell-shoulders",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Shoulders: Military Press & Front Raises",
    desc: "Strict standing overhead press, push press, and barbell front raises to develop broad 3D anterior and medial deltoids.",
    category: "Barbell • Shoulders",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "16+ GIFs",
    difficulty: "Intermediate",
    badge: "Delts",
    videoSrc: "./assets/gifs/barbell-shoulders.gif",
    cover: "./assets/gifs/barbell-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Squeeze glutes and core to prevent lumbar hyperextension.",
      "Press the bar directly overhead with head moving slightly through window.",
      "Keep forearms vertically stacked directly under the bar."
    ],
    materials: "Shoulder_Press_Safety_Rules.pdf"
  },
  {
    id: "barbell-legs",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Legs: Back Squats & Romanian Deadlifts",
    desc: "High-bar and low-bar back squats, front squats, and Romanian deadlifts (RDL) for quad tear drops and posterior chain power.",
    category: "Barbell • Lower Body",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "24+ GIFs",
    difficulty: "All Levels",
    badge: "Quads & Glutes",
    videoSrc: "./assets/gifs/barbell-legs.gif",
    cover: "./assets/gifs/barbell-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Maintain tripod foot pressure and track knees over toes.",
      "Descend smoothly to parallel or below while keeping thoracic extension.",
      "Push through midfoot and drive hips upward simultaneously."
    ],
    materials: "Squat_Mastery_Checklist.pdf"
  },
  {
    id: "barbell-triceps",
    moduleId: "mod-barbell",
    moduleName: "Barbell Suite",
    title: "Triceps: Skull Crushers & Close-Grip Bench",
    desc: "Lying EZ-bar skull crushers, close-grip bench press, and overhead barbell extensions for complete triceps horseshoe development.",
    category: "Barbell • Triceps",
    categoryKey: "barbell",
    equipment: "Barbell",
    equipmentKey: "barbell",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "14+ GIFs",
    difficulty: "Intermediate",
    badge: "Triceps",
    videoSrc: "./assets/gifs/barbell-triceps.gif",
    cover: "./assets/gifs/barbell-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1N4Ef5g2rBSQ1LgO9qwwcODWh0hG3-0WR",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Keep elbows slightly angled backward rather than purely vertical to protect joints.",
      "Lower bar smoothly to hairline or top of bench for deep long head stretch.",
      "Lock out triceps with control at the peak."
    ],
    materials: "Triceps_Horseshoe_Guide.pdf"
  },

  // --- ROW 2: DUMBBELL EXERCISES ---
  {
    id: "dumbbell-biceps",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Biceps: Incline & Hammer Curls",
    desc: "Incline dumbbell curls, standing hammer curls, concentration curls, and Zottman curls for full biceps and brachioradialis.",
    category: "Dumbbells • Biceps",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "20+ GIFs",
    difficulty: "All Levels",
    badge: "Biceps",
    videoSrc: "./assets/gifs/dumbbell-biceps.gif",
    cover: "./assets/gifs/dumbbell-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Perform curls on a 60° incline bench to place long head in extreme stretch.",
      "Supinate pinkies aggressively outward at the peak.",
      "Neutral grip hammer curls heavily stimulate the brachialis muscle."
    ],
    materials: "Dumbbell_Arm_Hypertrophy.pdf"
  },
  {
    id: "dumbbell-shoulders",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Shoulders: Lateral Raises & Arnold Press",
    desc: "Side lateral raises with controlled eccentrics, Arnold press, rear delt flyes, and dumbbell shrugs.",
    category: "Dumbbells • Shoulders",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "22+ GIFs",
    difficulty: "All Levels",
    badge: "Delts",
    videoSrc: "./assets/gifs/dumbbell-shoulders.gif",
    cover: "./assets/gifs/dumbbell-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Lead lateral raises with elbows and slight forward torso lean (scapular plane).",
      "Do not shrug traps during the raise; keep shoulders depressed.",
      "Control the descent for 3 seconds to trigger maximum mechanical tension."
    ],
    materials: "3D_Deltoids_Protocol.pdf"
  },
  {
    id: "dumbbell-chest",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Chest: Flat Press & Incline Flyes",
    desc: "Flat dumbbell bench press, incline presses at 30°, deep dumbbell push-ups, and flat dumbbell flyes.",
    category: "Dumbbells • Chest",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "18+ GIFs",
    difficulty: "All Levels",
    badge: "Chest",
    videoSrc: "./assets/gifs/dumbbell-chest.gif",
    cover: "./assets/gifs/dumbbell-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Dumbbells allow greater range of motion and stretch than barbells.",
      "Angle dumbbells slightly in a 45° arrow shape to spare rotator cuffs.",
      "Drive hands toward each other at top without clanking dumbbells."
    ],
    materials: "Chest_Isolation_Blueprint.pdf"
  },
  {
    id: "dumbbell-back",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Back: Single-Arm Rows & Pullovers",
    desc: "Supported single-arm dumbbell rows, chest-supported incline rows, and dumbbell pullovers for serratus and lat flare.",
    category: "Dumbbells • Back & Lats",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "16+ GIFs",
    difficulty: "All Levels",
    badge: "Lats",
    videoSrc: "./assets/gifs/dumbbell-back.gif",
    cover: "./assets/gifs/dumbbell-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Pull the dumbbell toward your hip crease rather than straight up to the chest.",
      "Allow full protraction of the scapula at bottom for extreme stretch.",
      "Do not twist torso; keep chest parallel to the floor."
    ],
    materials: "Unilateral_Back_Guide.pdf"
  },
  {
    id: "dumbbell-triceps",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Triceps: Overhead Extensions & Dips",
    desc: "Two-handed overhead dumbbell triceps extension, kickbacks, and bench dips with feet elevated.",
    category: "Dumbbells • Triceps",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "14+ GIFs",
    difficulty: "All Levels",
    badge: "Triceps",
    videoSrc: "./assets/gifs/dumbbell-triceps.gif",
    cover: "./assets/gifs/dumbbell-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.7 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Overhead positioning targets the triceps long head in its most lengthened position.",
      "Keep upper arms pointing up and flare elbows only slightly.",
      "Full extension at top without hyperextending elbows."
    ],
    materials: "Triceps_Extension_Cues.pdf"
  },
  {
    id: "dumbbell-legs",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Legs: Bulgarian Split Squats & Lunges",
    desc: "Bulgarian split squats with foot elevated, walking dumbbell lunges, and heavy goblet squats.",
    category: "Dumbbells • Lower Body",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "20+ GIFs",
    difficulty: "Intermediate",
    badge: "Quads & Glutes",
    videoSrc: "./assets/gifs/dumbbell-legs.gif",
    cover: "./assets/gifs/dumbbell-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Lean forward slightly at the torso to load glutes and reduce lumbar strain.",
      "Keep 80% of weight on the front working leg.",
      "Descend until front thigh is at least parallel to the floor."
    ],
    materials: "Unilateral_Leg_Hypertrophy.pdf"
  },
  {
    id: "dumbbell-forearms",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Forearms: Wrist Curls & Grip Holds",
    desc: "Palms-up wrist curls, palms-down reverse wrist curls, and farmer's walks for forearms.",
    category: "Dumbbells • Forearms",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Forearms",
    muscleKey: "arms",
    duration: "10+ GIFs",
    difficulty: "All Levels",
    badge: "Forearms",
    videoSrc: "./assets/gifs/dumbbell-forearms.gif",
    cover: "./assets/gifs/dumbbell-forearms.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.7 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Rest forearms on thighs or a flat bench for isolation.",
      "Flex wrists upward with high reps and brief pauses.",
      "Alternate between pronated and supinated grips."
    ],
    materials: "Grip_Strength_Guide.pdf"
  },
  {
    id: "dumbbell-abs",
    moduleId: "mod-dumbbell",
    moduleName: "Dumbbell Suite",
    title: "Abs & Core: Russian Twists & Side Bends",
    desc: "Weighted dumbbell Russian twists, dumbbell side bends, and dumbbell plank pull-throughs.",
    category: "Dumbbells • Core & Waist",
    categoryKey: "dumbbell",
    equipment: "Dumbbell",
    equipmentKey: "dumbbell",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "14+ GIFs",
    difficulty: "All Levels",
    badge: "Core",
    videoSrc: "./assets/gifs/dumbbell-abs.gif",
    cover: "./assets/gifs/dumbbell-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1drMGikDTMQA3c9r2g_HII0QGmHySlBkv",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Rotate through shoulders, not just moving arms side to side.",
      "Maintain a 45° angle with torso off the ground in V-sit.",
      "Keep core actively braced throughout every rotation."
    ],
    materials: "Oblique_Conditioning_Plan.pdf"
  },

  // --- ROW 3: MACHINE, HACK & BENCH EXERCISES ---
  {
    id: "machine-legs",
    moduleId: "mod-machine",
    moduleName: "Machine Suite",
    title: "Legs: 45° Leg Press & Hack Squats",
    desc: "45° heavy leg press, plate-loaded hack squats, lying hamstring curls, and 45° hyperextensions.",
    category: "Machines • Lower Body",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Legs",
    muscleKey: "legs",
    duration: "24+ GIFs",
    difficulty: "All Levels",
    badge: "Legs",
    videoSrc: "./assets/gifs/machine-legs.gif",
    cover: "./assets/gifs/machine-legs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Do not let lower back or hips lift off the seat during deep leg presses.",
      "Place feet lower on platform to emphasize quads, higher for glutes/hams.",
      "Never lock out knees aggressively under heavy machine loads."
    ],
    materials: "Leg_Press_Setup_Blueprint.pdf"
  },
  {
    id: "machine-chest",
    moduleId: "mod-machine",
    moduleName: "Machine Suite",
    title: "Chest: Machine Press & Pec Deck",
    desc: "Seated chest press machine, Pec Deck machine flyes, and converge-incline lever press for peak pectoral contractions.",
    category: "Machines • Chest",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "18+ GIFs",
    difficulty: "All Levels",
    badge: "Chest",
    videoSrc: "./assets/gifs/machine-chest.gif",
    cover: "./assets/gifs/machine-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Adjust seat height so handles align directly with the mid-to-lower sternum.",
      "Keep chest puffed and shoulder blades pressed firmly against the pad.",
      "Squeeze pectorals together for a full 1-second pause at maximum contraction."
    ],
    materials: "Machine_Chest_Isolation.pdf"
  },
  {
    id: "machine-back",
    moduleId: "mod-machine",
    moduleName: "Machine Suite",
    title: "Back: Lat Pulldowns & Seated Rows",
    desc: "Wide-grip lat pulldowns, neutral close-grip seated machine rows, and archer pull-ups.",
    category: "Machines • Back & Lats",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "20+ GIFs",
    difficulty: "All Levels",
    badge: "Lats",
    videoSrc: "./assets/gifs/machine-back.gif",
    cover: "./assets/gifs/machine-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Depress and tuck shoulder blades before pulling the bar down.",
      "Drive elbows down and slightly back toward your ribcage.",
      "Avoid excessive backward leaning during pulldowns."
    ],
    materials: "Lat_Pulldown_Technique.pdf"
  },
  {
    id: "machine-shoulders",
    moduleId: "mod-machine",
    moduleName: "Machine Suite",
    title: "Shoulders: Overhead Press & Rear Pec Deck",
    desc: "Plate-loaded shoulder press machine, reverse pec deck rear delt flyes, and decline diamond pike push-ups.",
    category: "Machines • Shoulders",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "16+ GIFs",
    difficulty: "All Levels",
    badge: "Delts",
    videoSrc: "./assets/gifs/machine-shoulders.gif",
    cover: "./assets/gifs/machine-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "On reverse pec deck, adjust seat so arms are parallel to the floor.",
      "Lead movement with rear elbows without squeezing shoulder blades excessively.",
      "Eliminate momentum for surgical rear deltoid isolation."
    ],
    materials: "Rear_Delt_Specialization.pdf"
  },
  {
    id: "machine-abs",
    moduleId: "mod-machine",
    moduleName: "Machine Suite",
    title: "Abs & Core: 45° Twisting Crunch & Ab Machine",
    desc: "45-degree bicycle twisting crunches, seated abdominal crunch machines, and Roman chair knee raises.",
    category: "Machines • Core",
    categoryKey: "machine",
    equipment: "Machine",
    equipmentKey: "machine",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "15+ GIFs",
    difficulty: "All Levels",
    badge: "Core",
    videoSrc: "./assets/gifs/machine-abs.gif",
    cover: "./assets/gifs/machine-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1EU0LGux7L0rgCH1F2vp7prZcE1VjPSxI",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Curl your ribcage down toward your pelvis rather than just bending at hips.",
      "Exhale completely during contraction to hollow out the abdominal wall.",
      "Keep neck relaxed and let the core muscles do 100% of the work."
    ],
    materials: "Ab_Machine_Form_Cues.pdf"
  },

  // --- ROW 4: CABLE & PULLEY EXERCISES ---
  {
    id: "cable-triceps",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Triceps: Rope & Straight-Bar Pushdowns",
    desc: "Cable alternate triceps extensions, rope pushdowns with peak flare, straight-bar pushdowns, and overhead extensions.",
    category: "Cables • Triceps",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Triceps",
    muscleKey: "arms",
    duration: "18+ GIFs",
    difficulty: "All Levels",
    badge: "Triceps",
    videoSrc: "./assets/gifs/cable-triceps.gif",
    cover: "./assets/gifs/cable-triceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Keep upper arms pinned immovably against your torso.",
      "Spread the rope handles outward at the bottom of the movement.",
      "Allow full elbow flexion at the top for complete triceps stretch."
    ],
    materials: "Cable_Triceps_Execution.pdf"
  },
  {
    id: "cable-biceps",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Biceps: Low Pulley & SZ-Bar Curls",
    desc: "Low pulley cable curls with SZ-bar, rope hammer curls, and high cable Hercules curls for continuous tension.",
    category: "Cables • Biceps",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Biceps",
    muscleKey: "arms",
    duration: "16+ GIFs",
    difficulty: "All Levels",
    badge: "Biceps",
    videoSrc: "./assets/gifs/cable-biceps.gif",
    cover: "./assets/gifs/cable-biceps.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Cables provide non-stop resistance even at the top of the curl.",
      "Step back slightly from pulley to maintain tension in start position.",
      "Do not lean backward or use hips to jerk weight up."
    ],
    materials: "Cable_Curl_Variations.pdf"
  },
  {
    id: "cable-chest",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Chest: High-to-Low Flyes & Crossovers",
    desc: "High-to-low cable crossovers, mid-chest cable flyes, and low-to-high upper chest cable flyes.",
    category: "Cables • Chest",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Chest",
    muscleKey: "chest",
    duration: "20+ GIFs",
    difficulty: "Intermediate",
    badge: "Chest",
    videoSrc: "./assets/gifs/cable-chest.gif",
    cover: "./assets/gifs/cable-chest.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Maintain a slight bend at the elbows like hugging a wide barrel.",
      "Bring hands together along the line of lower pec fibers.",
      "Cross hands slightly at peak for extreme adduction tension."
    ],
    materials: "Cable_Fly_Angles_Chart.pdf"
  },
  {
    id: "cable-back",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Back: Straight-Arm Pulldowns & Face Pulls",
    desc: "Cable 45-degree reverse flyes, straight-arm lat pulldowns, and face pulls to train the rear delts and mid traps.",
    category: "Cables • Back",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Back",
    muscleKey: "back",
    duration: "18+ GIFs",
    difficulty: "All Levels",
    badge: "Lats",
    videoSrc: "./assets/gifs/cable-back.gif",
    cover: "./assets/gifs/cable-back.gif",
    fallbackCover: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Straight-arm pulldowns isolate lats without biceps taking over.",
      "Face pulls externally rotate shoulders for health and posture.",
      "Pull rope directly toward eye level with thumbs facing backward."
    ],
    materials: "Face_Pull_Posture_Guide.pdf"
  },
  {
    id: "cable-shoulders",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Shoulders: Cable Lateral & Forward Raises",
    desc: "Single-arm cable lateral raises behind the back, forward cable raises, and cable Y-raises for round shoulders.",
    category: "Cables • Shoulders",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Shoulders",
    muscleKey: "shoulders",
    duration: "16+ GIFs",
    difficulty: "All Levels",
    badge: "Delts",
    videoSrc: "./assets/gifs/cable-shoulders.gif",
    cover: "./assets/gifs/cable-shoulders.gif",
    fallbackCover: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Set pulley at hand height when arm is down for best resistance curve.",
      "Raise arm in scapular plane 30° in front of the body.",
      "Smooth tempo without leaning away violently."
    ],
    materials: "Cable_Lateral_Raise_Setup.pdf"
  },
  {
    id: "cable-abs",
    moduleId: "mod-cable",
    moduleName: "Cable Suite",
    title: "Abs & Core: Decline Crunches & Woodchoppers",
    desc: "Cable decline crunches, kneeling rope crunches, and rotational cable woodchoppers.",
    category: "Cables • Core",
    categoryKey: "cable",
    equipment: "Cable",
    equipmentKey: "cable",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "15+ GIFs",
    difficulty: "Intermediate",
    badge: "Core",
    videoSrc: "./assets/gifs/cable-abs.gif",
    cover: "./assets/gifs/cable-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1IkO1BBYztPHVlBlQQQ8kiD5Zovc2vKz1",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "On kneeling cable crunches, fix hips in place and curl spine down.",
      "Do not sit back onto your heels during contraction.",
      "Exhale hard as elbows drive toward your knees."
    ],
    materials: "Kneeling_Crunch_Guide.pdf"
  },

  // --- ROW 5: FUNCTIONAL & BODYWEIGHT TRAINING ---
  {
    id: "functional-abs",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Abs & Core: 3/4 Sit-ups & Hollow Body",
    desc: "3/4 sit-ups, dynamic plank variations, mountain climbers, and hollow body holds for deep core stability.",
    category: "Functional • Core Conditioning",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Abs & Core",
    muscleKey: "abs",
    duration: "30+ GIFs",
    difficulty: "All Levels",
    badge: "Core",
    videoSrc: "./assets/gifs/functional-abs.gif",
    cover: "./assets/gifs/functional-abs.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1s_uYON4pcMbZoTn9au5EbR2mtajaQ_Wx",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Press lower back flush against the mat before flexing upward.",
      "Engage the deep transverse abdominis on every repetition.",
      "Control the eccentric descent; do not drop flat onto the ground."
    ],
    materials: "Functional_Core_Index.pdf (Google Drive Connected)"
  },
  {
    id: "functional-cardio",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Cardio & HIIT: High Knees & Jump Squats",
    desc: "High-knee squats, high-speed shuttle runs, jumping jacks, and sprint intervals for conditioning.",
    category: "Functional • Cardio & HIIT",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Cardio",
    muscleKey: "cardio",
    duration: "25+ GIFs",
    difficulty: "All Levels",
    badge: "HIIT",
    videoSrc: "./assets/gifs/functional-cardio.gif",
    cover: "./assets/gifs/functional-cardio.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Land softly on balls of feet with knees absorbing impact.",
      "Maintain rhythmic breathing patterns during high intensity intervals.",
      "Keep athletic posture and upright chest during sprints and high knees."
    ],
    materials: "HIIT_Protocol_Matrix.pdf"
  },
  {
    id: "functional-agility",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Agility: Step Drills & Footwork",
    desc: "Alternate forward step arm swings, agility ladder quick-feet routines, and multi-directional bounds.",
    category: "Functional • Agility & Speed",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Agility",
    muscleKey: "agility",
    duration: "20+ GIFs",
    difficulty: "Intermediate",
    badge: "Agility",
    videoSrc: "./assets/gifs/functional-agility.gif",
    cover: "./assets/gifs/functional-agility.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "4.8 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Stay light on forefoot and keep center of gravity low.",
      "Coordinate arm drive symmetrically with foot cadence.",
      "Train decelerations before accelerations for joint safety."
    ],
    materials: "Footwork_Agility_Patterns.pdf"
  },
  {
    id: "functional-bodyweight",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Bodyweight: Burpees & Calisthenics",
    desc: "Burpee alternate arm-leg raises, strict push-ups, explosive plyo push-ups, and pull-ups.",
    category: "Functional • Calisthenics",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Full Body",
    muscleKey: "bodyweight",
    duration: "28+ GIFs",
    difficulty: "All Levels",
    badge: "Calisthenics",
    videoSrc: "./assets/gifs/functional-bodyweight.gif",
    cover: "./assets/gifs/functional-bodyweight.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Maintain a straight hollow-body line from head to heels.",
      "Full chest-to-deck range of motion on push-ups and burpees.",
      "Explosive push through palms with active shoulder blade control."
    ],
    materials: "Calisthenics_Progression_Tree.pdf"
  },
  {
    id: "functional-mobility",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Mobility: Joint Openers & Knee Circles",
    desc: "Circle knee stretches, deep squat holds, 90/90 hip flow, and thoracic spine rotational mobility.",
    category: "Functional • Mobility & Recovery",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Mobility",
    muscleKey: "mobility",
    duration: "25+ GIFs",
    difficulty: "All Levels",
    badge: "Mobility",
    videoSrc: "./assets/gifs/functional-mobility.gif",
    cover: "./assets/gifs/functional-mobility.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Breathe slowly and deeply into areas of tension.",
      "Perform active mobility rather than passive, limp stretches.",
      "Expand joint capsule freedom before heavy lifting sessions."
    ],
    materials: "Joint_Mobility_Daily_Flow.pdf"
  },
  {
    id: "functional-battle-rope",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "Battle Rope: Alternate Arms Jump Squat",
    desc: "Battling ropes alternate arms jump squats, power slams, double waves, and rotational whips.",
    category: "Functional • Battle Rope",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Full Body",
    muscleKey: "power",
    duration: "15+ GIFs",
    difficulty: "Intermediate",
    badge: "Battle Rope",
    videoSrc: "./assets/gifs/functional-battle-rope.gif",
    cover: "./assets/gifs/functional-battle-rope.gif",
    fallbackCover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Keep athletic base with knees bent and chest up.",
      "Generate power from hips and core, channeling it down through arms.",
      "Slam ropes all the way to anchor point without slack."
    ],
    materials: "Battle_Rope_Conditioning.pdf"
  },
  {
    id: "functional-trx",
    moduleId: "mod-functional",
    moduleName: "Functional Suite",
    title: "TRX & Suspension: Fallouts & Rows",
    desc: "Suspended abdominal fallouts, inverted TRX rows, suspension push-ups, and TRX pikes.",
    category: "Functional • Suspension Training",
    categoryKey: "functional",
    equipment: "Functional",
    equipmentKey: "functional",
    muscleGroup: "Core & Stability",
    muscleKey: "trx",
    duration: "20+ GIFs",
    difficulty: "Intermediate",
    badge: "TRX",
    videoSrc: "./assets/gifs/functional-trx.gif",
    cover: "./assets/gifs/functional-trx.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1sh4r1PWRDlkTQ2cIoMAP_yVNeUh19xNh",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Adjust body angle relative to floor to instantly scale resistance.",
      "Keep straps taut with zero slack at any point in the movement.",
      "Maintain active core bracing so hips do not sag or pike."
    ],
    materials: "TRX_Suspension_Mastery.pdf"
  },

  // --- ROW 6: KETTLEBELL & SUPERBAND ---
  {
    id: "kettlebell-swings",
    moduleId: "mod-kettlebell",
    moduleName: "Kettlebell Suite",
    title: "Kettlebell: Advanced Windmills & Swings",
    desc: "Kettlebell advanced windmills, Russian hip hinge swings, Turkish get-ups, and clean & press.",
    category: "Kettlebell • Power",
    categoryKey: "kettlebell",
    equipment: "Kettlebell",
    equipmentKey: "kettlebell",
    muscleGroup: "Full Body",
    muscleKey: "kettlebell",
    duration: "20+ GIFs",
    difficulty: "Intermediate",
    badge: "Kettlebell",
    videoSrc: "./assets/gifs/kettlebell-swing.gif",
    cover: "./assets/gifs/kettlebell-swing.gif",
    fallbackCover: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1OeDXqZIkmWgmUuwUxL6qIzfc_0auxQPa",
    rating: "5.0 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "The swing is a pure hip hinge, not a squat with arms lifting.",
      "Snap hips forward explosively at lockout with glutes squeezed.",
      "Keep eyes focused on the bell during overhead windmills."
    ],
    materials: "Kettlebell_Power_Biomechanics.pdf"
  },
  {
    id: "superband-activation",
    moduleId: "mod-kettlebell",
    moduleName: "Superband Suite",
    title: "Superband: Banded Bicycle Crunches & Mobility",
    desc: "Band bicycle crunches, monster walks, band pull-aparts, and banded deadlifts for muscle activation.",
    category: "Superband • Elastic Resistance",
    categoryKey: "kettlebell",
    equipment: "Superband",
    equipmentKey: "kettlebell",
    muscleGroup: "Activation",
    muscleKey: "superband",
    duration: "18+ GIFs",
    difficulty: "All Levels",
    badge: "Superband",
    videoSrc: "./assets/gifs/superband-activation.gif",
    cover: "./assets/gifs/superband-activation.gif",
    fallbackCover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    driveUrl: "https://drive.google.com/drive/folders/1DZkIlOfRugbT62yKl1T-uCVTifhsTTXb",
    rating: "4.9 ★★★★★",
    progress: 0,
    keyTakeaways: [
      "Maintain continuous tension in band without allowing it to go slack.",
      "Use lighter bands for high-rep motor recruitment warmups.",
      "Control the eccentric return against elastic resistance."
    ],
    materials: "Elastic_Band_Activation_Protocols.pdf"
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
    
    // 5. Functional & Bodyweight Exercises
    const trackFunctional = document.getElementById('ff-track-functional');
    if (trackFunctional) {
      const functionalClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'functional');
      trackFunctional.innerHTML = functionalClasses.map(c => createCardHtml(c)).join('');
    }
    
    // 6. Kettlebell & Superband
    const trackKettlebell = document.getElementById('ff-track-kettlebell');
    if (trackKettlebell) {
      const kettlebellClasses = CLASSES_DATA.filter(c => c.equipmentKey === 'kettlebell');
      trackKettlebell.innerHTML = kettlebellClasses.map(c => createCardHtml(c)).join('');
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
          <div class="ff-card-overlay-gradient"></div>
          
          <div class="ff-card-top-tags">
            <span class="ff-badge-status ff-badge-disponible">${item.badge || item.equipment || 'GIF'}</span>
            <span class="ff-badge-duration"><i class="fa-solid fa-folder"></i> Drive</span>
          </div>
          
          <div class="ff-card-play-hover">
            <i class="fa-solid fa-play"></i>
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
            <span class="ff-card-cta-btn"><i class="fa-solid fa-play"></i> Preview GIF</span>
            <a href="${item.driveUrl}" target="_blank" rel="noopener noreferrer" class="ff-card-drive-btn" title="Open Google Drive folder" onclick="event.stopPropagation();">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Drive ↗
            </a>
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
        (c.muscleGroup && c.muscleGroup.toLowerCase().includes(query))
      );
    }
    
    grid.innerHTML = filtered.length > 0 
      ? filtered.map(c => createCardHtml(c, true)).join('')
      : `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--ff-text-muted);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; margin-bottom: 14px; opacity: 0.4;"></i>
          <h3>No matching exercise GIFs found</h3>
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
