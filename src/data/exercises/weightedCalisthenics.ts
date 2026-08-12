import type { ExerciseInfo } from '../types';

export const weightedCalisthenicsExercises: Record<string, ExerciseInfo> = {
  "Decline Weighted Crunch": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Abdominal (Flexión Espinal)",
    attachments: ["Decline Bench", "Weight Plate", "Dumbbell"],
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Obliques"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Requires controlled spinal flexion under load." }
      ]
    },
    techniquePoints: [
      "Secure your legs on a decline bench.",
      "Hold a weight plate or dumbbell against your chest or behind your head.",
      "Exhale and curl your torso up, focusing on flexing your spine and bringing your ribcage towards your pelvis.",
      "Avoid pulling with your neck; the movement should be driven by your abs.",
      "Lower yourself back down with control, maintaining tension throughout."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PpNEbXM3QsE",
    substitutions: ["Machine Crunch", "Cable Crunch", "Weighted Crunch (floor)"]
  },
  "Weighted Bridge": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Extensión de Cadera",
    attachments: ["Weight Plate", "Dumbbell", "Barbell"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Focuses on hip extension strength, not a large range of motion." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your knees bent and feet flat on the floor, hip-width apart.",
      "Place a weight (plate, dumbbell, or barbell) across your hips. Hold it in place with your hands.",
      "Engage your core and drive through your heels to lift your hips towards the ceiling.",
      "At the top, form a straight line from your shoulders to your knees and squeeze your glutes hard.",
      "Lower your hips back down with control, stopping just before they touch the floor to maintain tension."
    ],
    youtubeLink: "https://youtube.com/shorts/n9cQ6sZDR-c",
    substitutions: ["Barbell Hip Thrust", "Weighted Hip Thrust", "Glute Bridge Machine"]
  },
  "Weighted Chin-Up": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Pull Vertical",
    attachments: ["Dip Belt", "Weighted Vest", "Dumbbell"],
    muscles: {
      strength: ["Biceps", "Lats", "Rhomboids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion for a complete range of motion from a dead hang." },
        { muscle: "Wrist", level: "Low", description: "Supinated grip is generally comfortable for most." }
      ]
    },
    techniquePoints: [
      "Attach weight using a dip belt, weighted vest, or by holding a dumbbell securely between your feet.",
      "Grip the bar with an underhand (supinated), shoulder-width grip.",
      "Start from a full dead hang.",
      "Pull yourself up until your chin clears the bar, focusing on driving your elbows down.",
      "Control the eccentric (lowering phase) all the way back to a dead hang."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=j1ZlwI0xnkA",
    substitutions: ["Weighted Pull-Up", "Supinated Lat Pulldown"]
  },
  "Weighted decline sit-ups": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Abdominal (Flexión de Cadera y Espinal)",
    attachments: ["Decline Bench", "Weight Plate", "Dumbbell"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors (Iliopsoas)"],
      stability: ["Obliques"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Involves a larger range of hip flexion compared to a crunch." },
        { muscle: "Spine", level: "Moderate", description: "Requires both spinal flexion and extension through a larger range." }
      ]
    },
    techniquePoints: [
      "Secure your legs on a decline bench and lie back completely.",
      "Hold a weight plate or dumbbell on your chest.",
      "Raise your entire torso off the bench until you are in an upright seated position.",
      "Keep your back straight at the top of the movement.",
      "Slowly and with control, lower your torso back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=l0U-bkATuVE",
    substitutions: ["Decline Weighted Crunch", "Hanging Leg Raise", "Cable Crunch"]
  },
  "Weighted Dip": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Press Vertical",
    attachments: ["Dip Belt", "Weighted Vest", "Parallel Bars"],
    muscles: {
      strength: ["Triceps", "Lower Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers", "Lats"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension and internal rotation to reach full depth safely under load." }
      ]
    },
    techniquePoints: [
      "Securely attach weight using a dip belt or weighted vest.",
      "Support yourself on parallel bars with arms extended.",
      "Lower your body by bending your elbows until your shoulders are below your elbows, or as deep as your mobility allows.",
      "Keep your scapula depressed (shoulders down, away from ears).",
      "Press back up to the starting position, fully extending your arms."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yN6Q1UI_xkE",
    substitutions: ["Close-Grip Bench Press", "Machine Dip", "Decline Bench Press"]
  },
  "Weighted Muscle Up": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Transición Pull-Push",
    attachments: ["Dip Belt", "Weighted Vest", "Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires excellent mobility and strength to transition from a deep pull to a deep push under load." },
        { muscle: "Wrist", level: "High", description: "Requires significant wrist mobility and strength, especially for a false grip on rings." }
      ]
    },
    techniquePoints: [
      "Perform a muscle up while wearing a weighted vest or a dip belt with added weight.",
      "This is an extremely advanced movement requiring a high level of base strength.",
      "Focus on an explosive pull to generate enough height to get over the bar/rings.",
      "Maintain a tight core and strict form throughout the transition and the final dip to avoid injury."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RzUUlLUpwjA",
    substitutions: ["Weighted Pull-Up + Weighted Dip (superset)"]
  },
  "Weighted Pistol Squat": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Sentadilla Unilateral",
    attachments: ["Dumbbell", "Kettlebell", "Weight Plate"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Adductors", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires extreme ankle dorsiflexion on the supporting leg to keep the heel down." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion on the supporting leg and hip flexor strength on the extended leg." }
      ]
    },
    techniquePoints: [
      "Hold a weight (dumbbell, kettlebell) at chest level in a goblet position.",
      "Balance on one leg and extend the other straight out in front of you.",
      "Lower yourself down into a full squat on the supporting leg, keeping the extended leg off the floor.",
      "The weight can act as a counterbalance, aiding stability.",
      "Drive through the heel of your supporting foot to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dpPz2b4FiTM", // NOTE: Link shows a different weighted variation.
    substitutions: ["DB Bulgarian Split Squat", "Single-Leg Leg Press", "Hack Squat"]
  },
  "Weighted Pull-Up": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Pull Vertical",
    attachments: ["Dip Belt", "Weighted Vest", "Dumbbell"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Rear Deltoids"],
      stability: ["Core", "Forearms (Grip)", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion for a complete range of motion from a dead hang." }
      ]
    },
    techniquePoints: [
      "Securely attach weight using a dip belt, weighted vest, or by holding a dumbbell between your feet.",
      "Grip the bar with an overhand (pronated) grip, slightly wider than your shoulders.",
      "Start from a dead hang with arms fully extended.",
      "Pull yourself up until your chin clears the bar, driving your elbows down and back.",
      "Lower yourself with full control back to the dead hang position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Hdc7Mw6BIEE",
    substitutions: ["Weighted Chin-Up", "Lat Pulldown"]
  },
  "Weighted Push-Up": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Press Horizontal",
    attachments: ["Weight Plate", "Weighted Vest", "Chains", "Bands"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior", "Erector Spinae", "Glutes"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension to support the increased load without pain." },
        { muscle: "Shoulder", level: "Moderate", description: "Requires controlled horizontal adduction and abduction." }
      ]
    },
    techniquePoints: [
      "Have a partner place a weight plate securely on your upper back, or wear a weighted vest.",
      "Assume a standard push-up position with your hands shoulder-width apart.",
      "Maintain a straight line from your head to your heels, bracing your core and glutes.",
      "Lower your chest towards the floor with control, keeping your elbows at a 45-60 degree angle from your body.",
      "Press up explosively back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=34g4pQ_1_vA",
    substitutions: ["Barbell Bench Press", "Dumbbell Bench Press", "Weighted Dip"]
  },
  "Weighted Squat": {
    image: "",
    category: "Weighted Calisthenics",
    subcategory: "Sentadilla Bilateral",
    attachments: ["Weighted Vest", "Kettlebell", "Dumbbell"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion to achieve parallel or below." },
        { muscle: "Ankle", level: "High", description: "Requires significant ankle dorsiflexion to maintain an upright torso and keep heels down." }
      ]
    },
    techniquePoints: [
      "This typically refers to a Goblet Squat (holding a KB/DB) or wearing a weighted vest.",
      "Hold the weight securely at your chest or wear the vest.",
      "Initiate the squat by sending your hips back and down, keeping your chest up.",
      "Descend to at least parallel, keeping your heels on the ground.",
      "Drive through your feet to return to a standing position, squeezing your glutes at the top."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6xDVURCFkDw", // NOTE: Link is for Goblet Squat, a common form of weighted calisthenic squat.
    substitutions: ["Barbell Back Squat", "Leg Press", "Hack Squat"]
  },
  "90 Degree Hold + Push Ups - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1716863461-08b107c53490888efe60dadf6953b440bc319a9c58598e5535751bccd323c152-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Pectoralis Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 Degree Hold + Push Ups - Weight Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Triceps Brachii Group, Deltoid Group, Pectoralis Major, Erector Spinae and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859144177/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d9e8606722a3747280cf62868ab3d86527626743781a812b231950f08ae018b4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 Degree Raises - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1716874968-874d290075446368d8e950791d32ab04fa62717b1e1a14a8e635240ca638f646-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 Degree Raises - Weight Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859144281/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=72400eb0b66251158e55165e868073384cbc519e1cef42bd1de19297b3985e80",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 Degree Toe Taps - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1716865384-1e676df4bedfbce8a10050d391380638af6661ab0a5f33448771c0ba7f08ac5c-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 Degree Toe Taps - Weight Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90 Degree Toe Taps - Weight Vest.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859144346/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=144aa54c1801f92f215ca84fe1bc7a77380ffe1b0faa4bab6e6bed425e42731d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753085894-c7135586f1cbcbff9ddbd49c4b4da9a41b9b04944ead134eef3117268b33ed73-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Take a wide overhand grip and pull your chest toward one hand while extending the other arm straight along the bar.", "Keep your core tight and avoid kicking your legs for momentum.", "Alternate sides or complete reps on one side before lowering to a full hang."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182156105.sd.mp4?s=af5e92f9347fa7809dc64f7fe14a65ea6ca8a742&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754829417-15ee7f868076ebd2c50bcc2b0b44f2ffdd2ba5967c08fac98f338c59b36ab1f1-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Assume a wide push-up stance, lowering your chest toward the working arm while keeping the opposite arm straight.", "Brace your core and glutes to prevent pelvic rotation or hip sagging as you shift laterally.", "Press forcefully through the active palm to return to the starting center position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767550.sd.mp4?s=aa3b7d651105fba0ccf1a26a5621f9ddfb5b9f66&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Around The World - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753103283-6b76e718124feab6aa529a668b1a8ff7a2b2a30a7d34288c655b8158d84b7538-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Around The World - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Around The World - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Forearm Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088131.sd.mp4?s=b21dc9aeeec04f7bd36ef525245855d4d3ff4e96&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted One Arm Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1244301822-c4ce042fe6f6bd00108cffe2ef3595c720dafbee0df977d8711a17ff158f60ba-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted One Arm Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607619789.sd.mp4?s=2d18bf5ae04a034378c00e3dd0425bd508de47e6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Pistol Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753103347-9aa5faa2795ef4fb6113d4232e925e76382d78837d24736df7de4fc30f42bbb0-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Pistol Squats - Weighted Vest"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182157251.sd.mp4?s=166e5adf3b18c1bd504acbb483281638c925e1db&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Tuck Planch Push Ups - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1716864112-67877369964f0153d3642383cfd1a8c62a85cb12e6d4302a9970848f79d546ba-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Tuck Planch Push Ups - Weight Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group, Anterior Deltoid and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859144396/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=679d479f9858696eba8f281401ca2027ada45217a81e54e085ab8b190962e38d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Ups (Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753086355-e76b1a9d97c1a6746e3cbcf86faccf7fcad8b92d978bf78f0bfd52a794fbda16-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Ups (Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182165707.sd.mp4?s=d85c5ae25258a2d1ce7f1d7be84acca0ef1da285&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753086286-192af4a3168326d102ce78d0b861006e2af94c7cd1ecff4c2bdb1a4d5e819bb8-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Ups - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182165689.sd.mp4?s=a391479f1ed0fdb1267a73df0630525be03e69fa&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Ups (Wide Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753086426-5889accfbbf68335c437813f1ce541447c4058025d2bd17a3a55578c31dc5209-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Ups (Wide Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182165712.sd.mp4?s=89b549bc0ed0833530c29d3beb863238d9ed20f6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Ups (Wide+Shoulder+Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753086719-8c6d3fdd514b0288b76a2277d6f5cd2410ea86134c4747bf8b3e7e81e8699b95-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Ups (Wide+Shoulder+Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166118.sd.mp4?s=5d38fcc6023d1073ea6aa2fba65473b72800fb0e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Up (Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756101005-aa81d0aaf8be3c1eb458aaff0b69bda095c07f0eac5a28348883492c63f86610-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Up (Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314526584.sd.mp4?s=df743e0a28ddb1f72888e61d920e956e9ed10889&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Ups (Archer) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753087053-e0aa60696352ddb09f697877cfaa9ae9f5ff65205aef1fdb8d93c9d2736f10c2-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Ups (Archer) - Weighted Vest"}]
    },
    techniquePoints: ["Take a wide overhand grip and pull your chest toward one hand while extending the other arm straight along the bar.", "Keep your core tight and avoid kicking your legs for momentum.", "Alternate sides or complete reps on one side before lowering to a full hang."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166130.sd.mp4?s=1e6e3b5c980b775079952175955bb14e4d6db991&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753087013-d0835e436f1612a3dc358e1f73be55e0cfe670f76d6fd6d23a427a0ece3e461a-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166125.sd.mp4?s=67c78a2808f19917e5a35ed9e10f52ca22369447&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Ups (Wide+Shoulder+Closed Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753087100-773de74b153c118fd1332502a83907a20ebb5110c5cf79207522fda197d56be6-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Ups (Wide+Shoulder+Closed Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166334.sd.mp4?s=b0a4dd83b8b139afc2eecaff5217374716c99b20&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Curls (Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754875135-f6b3bdd51ce415fbad1f551c9fd3f6765437bdcef4a222152fea474e74a85655-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Curls (Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Curls (Close Grip) - Weighted Vest.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166672.sd.mp4?s=5bc49410ba8d0fa7b96f95312468bde7d342914f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Curls - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1716863883-684d8130a93557ce2e21f59c8dbe260cd1df72a9efe534ab0fe3db8c0c69e5d3-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Curls - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Curls - Weighted Vest.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859144454/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f3aaee1ab51dd383af32f2a5123649438bc1d72dcd923cbca684063582a17f02",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind the Back Chin Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780753865-a13f375db0c22ad4102df38561b6cb8c76e777dd0f9382019341f139ff8ec9e1-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind the Back Chin Ups - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456520.sd.mp4?s=703d8a67b822f68f0250902b203445b0befdb290&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Rows - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709969942-f231e6a62ec2faef9ef385afd20ba7001df25f332f8e96c7c97a7a3fea308b51-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Rows - Weight Vest"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Erector Spinae, Biceps Brachii.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134219/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=eebee668f4caa3396c35abc9a242c16692f249ddf3cc2ab8d1c7cf2b591297d6",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Boat Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753104093-683c0b3757026b5f6de98f2642cc0c5d91ae739e35054a68efc26ad5e74c935b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Boat Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Boat Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767668.sd.mp4?s=56f991d21a5b0b2c5e71d75614512d331fcb4708&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Jumps - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753104358-76c56485d513bd44c73f8b37db6a20bca17c3f6f360d44ec17a76886979ccc7e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Jumps - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Box Jumps - Weighted Vest.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088337.sd.mp4?s=cb93010d38e124c685e5e8a87a44e54d587adae3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Pistol Squat - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756101528-dabb19fdf8c7ee15fe89361fc8fe01f8a22429f5fd0b43f05452432f6f4badce-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Pistol Squat - Weighted Vest"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314527062.sd.mp4?s=11d80f9b2f155fa3396125b82f6e4420c6637a7e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Step Up - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753105620-383a86bbbc9e531ec2cb444a77cd423b33522c0f9b1504669956de704410724e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Step Up - Weighted Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166616.sd.mp4?s=b4ec9da6920d8ba360abaa48b3c2375193979e6e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bulgarian Split Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753107925-df9f43101953959f2a3705429bcaa28941974a1fb55151ce0bd7adf0bc50b491-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bulgarian Split Squats - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182156101.sd.mp4?s=92dbf96ae7242715cdc38e8b9483edd55caaf858&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Burpees - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/799342762-919140fb84fd5581a780714b7cfde1c6b3519eab490590e815508992be17d70e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Burpees - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Burpees - Weighted Vest.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/348646424.sd.mp4?s=611e873e7ce896668fbe3e05ffdaaff96b622c59&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises (Against the Wall) - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365975693-e883f468034ffc84726cfe458955f55dfed5c9cec76d8bfe3c0aaaa8230fc5d8-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises (Against the Wall) - Weight Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993233/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=87d8180297536fc7d5d35aa09f5ab70d8a1024329ec932e8171e138206679221",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises + Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753108593-77a98ac984774c0ea5fab9ea8f2737add1479c5120962e316402ff7f6d8c1e45-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises + Hold - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088444.sd.mp4?s=40c4d693cf6b94a72b735976806570e04e56bd92&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises (Single Leg) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753107862-6f50234be584337017bd19d8f6205c922502fea80e67dd41cc481a6ce12c334e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises (Single Leg) - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166898.sd.mp4?s=c5c1762137f71364a39a0ac1dc1ada725174d450&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Up Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780751844-76b1ec0a9295d1425dec2812aed6daf10fe4e1e48c78a7d3c80aeacbee9311a9-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Up Hold - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456476.sd.mp4?s=8347de3185952d0b3ce0c4ed7929d7f5151eebcb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753108669-45a3c2631275016db56a020697c016ca308679c83858ec5c4641bfcf18f02fe4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182167240.sd.mp4?s=52d872d29518692f58bed94262856f6edcc08125&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups (Wide Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753109407-70b1c2e3cb9b18b641ab1687bfebfde205a3332ac877597113e573aa8ff8aca9-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups (Wide Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182167665.sd.mp4?s=10ae7b365a1da90e35b3ee64c86c661eca69b9c5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups (Wide+Shoulder+Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753109602-8050719f95f0b38943792c8bdcb769438374f75ec43541d84a972c6375b0cf9c-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups (Wide+Shoulder+Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182167670.sd.mp4?s=033becf0062b544ca1a757ab59e7751af2fc56ff&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Clapping Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1244270558-29a8a1037c66e5292a06727a5d6ce65fb60351de34c9e079794b32b30e998c54-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Clapping Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607591804.sd.mp4?s=62dc328aab5c7b26dcc8f5264912bb31d5d991b6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Close Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753110213-56053f397145336a1c672a6d407fb9c76c48d608d4be50a4ca29f9dff926f8ef-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Close Squats - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168013.sd.mp4?s=779dbc28caae9b216f8a299566a62e7d00e2145d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Close Tricep Extensions - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753112838-a1b79a0dedeeca4921e4bf4374a8ac23a9e0be9d3f0566a5db86f8d649558af9-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Close Tricep Extensions - Weighted Vest"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767676.sd.mp4?s=678dcd1da1e32ef734aef32362bb7adbe2bc9e50&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Commando Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754834029-b8ee64f7e1200632cea4c39546d1adef92734961bb8c02175c3354f2bd9ee14e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Commando Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168822.sd.mp4?s=71bf70e3c0da5d1ae2bc81faebccace92a851d4f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Corner Raises - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754875105-1e1ca57e7878fc6ab2f60885c7fb59ef0507d7124379856085eb63ac0983cdc0-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Corner Raises - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767693.sd.mp4?s=63b02fb52fd497f77f49c626d4ce7b164e8b33e9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crab Walks - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753113644-7f550f23927bcbc3a043def1e04d54934c6aa1eec54138c9a383e5c57f051317-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crab Walks - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168019.sd.mp4?s=8861b41c80e7583b2468e74f08703e2fb8bd8b45&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deadlift - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709969999-ba0968bcad64608a24f4490d6b2720ee99d5b292a08ee2491fe3c3a7e793c0b2-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deadlift - Weight Vest "}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134232/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9e190e3401fbe43d9b1bb54f49114a09b83970d3c5bd15013001f3e599005bc3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Decline Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1716864553-1a01b419252a2e10dabd2d678c56d97bc0cdb336b72fdb6701c7364ca0f96338-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Decline Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Elevate your feet on a bench or platform, placing hands slightly wider than shoulder-width on the floor.", "Maintain a rigid plank from head to heels, engaging core and glutes to protect your lower back.", "Lower your upper chest toward the floor and press up explosively through your anterior deltoids and upper pecs."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/859145031/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e71f735b238e250bc4104144d711adf875d4898fc9f4d56a2a3120e33b8ceceb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deep Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1244271117-c561effdbe2ab25bdaab96167c4665b2e4520d051c7c04faf55d1a9ba3c8b967-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deep Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607591639.sd.mp4?s=6de1f2bb27a44a3625fa452c88abacbdf42af6dc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Knee Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753113726-16c0410fb9fcbc7645fd60589ee8bc3e0ae2bc0fd3f99919d0db13a5269d7b94-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Knee Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767553.sd.mp4?s=73ee53725a87a56a4ba7c7624c2d31909bd6e7f0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Pike Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753113961-30bc99c7daba69b86eb84dbef26691823950e850c45846949714fb1e5833c4b6-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Pike Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Diamond Pike Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767590.sd.mp4?s=15d48e5bf72fbe8e9f2d9e178975969a144255d1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778531-cf5db329e41df3dc269c736ac478bf1e88d0697e1dec59e6876c1e7f1cc8426b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push ups - Resistance Band"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/528471051.sd.mp4?s=55e9efe382b8bfd86f7b70a1f00724b842cffda0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753114231-e404ffef989b46e6bc7cff3837d613efc3f96cf575a5386edef8dab4593ffdcb-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767552.sd.mp4?s=533799d6ee95e4d3e5c61197d9e99562c2216e30&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond to Regular Push Up Across - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753115145-80b0a87531a2eadde110602652067d66910144afeaacedf2fbe143d20f8d143f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond to Regular Push Up Across - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088909.sd.mp4?s=b86b4677d906a4218d4d826d2fa9b3d7d594aadc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond to Regular Push Up - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753115093-001e5cb9d3604483b5ff88628bcd0144699176d81dcf52b407b380061c16e721-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond to Regular Push Up - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088806.sd.mp4?s=12bc2bb7b1736abbf2ae174b3f4d079d55845ff5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips to L-Sit - Weighted Belt": {
    image: "https://i.vimeocdn.com/video/753115480-fb3864ba791379959e3217d1f1cb37538da12c5f51051af0d5e24f8618eddd7f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips to L-Sit - Weighted Belt"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767682.sd.mp4?s=f0b8eecc53e1e5793c192602877b074152d02f8b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/811001890-e4952fc97b24a925639990367c28b984ef7dc301afc0d5615e09614a2c61ca1c-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767710.sd.mp4?s=5d766e3629be99ed67b8d2116355284b46f81199&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754878001-e9b6a2a75b79ea554f2968f643110c199ff1209635621a573cfd11408ded73a4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Diamond Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767551.sd.mp4?s=6a5d2ca7171ff6d9e67bd6d241b086e65630ee9f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Pike Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756103005-d9d8da464fc4e995681073360dbf5a58605534f53bf78c356f8c74ce85a2b1d3-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Pike Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Diamond Pike Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314528213.sd.mp4?s=2363d8a6a19caabb02a60cd51d2562f82d4f18a1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Pike Push Up - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753123180-0be36b82538b16cddcd2aa63a3d755d7264557500ebaa1b4c76e6d2755d6dcba-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Pike Push Up - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767549.sd.mp4?s=2d5ba365c9cb3b13b5b9fe8bc3a3da75808741f0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753123261-638c7bef3958f219f9463b3441359fb29169eabdd2b3f0ed943def6e7775e422-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767581.sd.mp4?s=e4601e18d3a46e361dca10cb6b0eec6b389ad53e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753123801-19a108e089b6e0c0110538f86ec7abf61952f76e13cc21faed634ffec9aa091f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Pike Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767606.sd.mp4?s=e39c99118b66322e527ed32a25f7fa04d1c30eaa&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Push Up  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753123871-d3c526a60228a46dc757b7d38b4058eca38fb04ac5c80ba92a1d2f1de861cf81-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Push Up  - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767559.sd.mp4?s=e664c93750aef509a904ee41666700d64babf408&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Shoulder Taps - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709969981-d8d26a9fa0fda891e33a65ba09649bc22f002d64b75429c1f8e6bed66b99f788-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Shoulder Taps - Weight Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Pike Shoulder Taps - Weight Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134244/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a22ceb4e18461ad13b962f1c72239d94c633c63759e68166d5bda5217166cf64",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Side Squat - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365980311-e1f3ad38d48ff115a5d72b5da3e53965c726c26be8910c930ed81b038fda76d7-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Side Squat - Weight Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673994996/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=ba4679e4c3b0d982798160e05509f2a5e27a41f57445913578e84294f32be413",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Tricep Extensions - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753124574-b52eb50f45d5b5cc3d7c9154bc8d682c7e488c39bb0610c99699418caf037811-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Tricep Extensions - Weighted Vest"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767582.sd.mp4?s=ecf1b8c2b9c4c2d99628196d8e5d49d7103f5861&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Dips Across - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753125108-0c9a05cf6bd56d8b74cde5ab217ed48eeb77ce8cfc0d7ecec3f4450c18cd61e8-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Dips Across - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767669.sd.mp4?s=b164645a3f156c8f397aaf55739accd11216f1c1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Dips - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753125049-c35e9c415703578ae22233d6be10e0d660889d84e15bbd9c5e8df4db4ee893ce-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Dips - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767670.sd.mp4?s=247406e8213ef3b0eb576baf352b7be17779431e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Burpees - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709969998-36ceded98643f8cfd060cda4a88f8d93810d87334d85726a10c8d2b157afbebe-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Burpees - Weight Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Half Burpees - Weight Vest.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134257/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9505ba631ee9a794760fef7631fd93a0e2c87f626e6b22abe3c6878bb331d50d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand 90 Degree Push Up (Parallettes)  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756108426-39d2bfa97701c9c008d72b2c9d6c60911538ad361004976d83aeacccd17ce55d-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand 90 Degree Push Up (Parallettes)  - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314532417.sd.mp4?s=b63bf1ab5bd86caade3730c3ae75fe3f43b0b2e4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Hold (Parallettes) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753125405-60e36a9d001d732453373178312231ce74fa26c0f67ab4586d20503a42dc1487-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Hold (Parallettes) - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Hold (Parallettes) - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767561.sd.mp4?s=26ad60e5275a4e21ec34a576691357adbe90e38b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Kick Ups (Parallettes) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753125514-7081a415da130b1be8b7414cb472d5c24ea53b9023b678cddca95f15ceacc146-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Kick Ups (Parallettes) - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Kick Ups (Parallettes) - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767554.sd.mp4?s=910452eae9fe560a5260b56fce20069576eead9e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Up Negative - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756109229-5476d644a282ddf5ba6d3febfd4eedabf061533434cb200ca85192485aabd3ba-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Up Negative - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314533022.sd.mp4?s=4ed540e1efcc4abf45f8e9b382adc16359ce8cac&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756109471-44b5a3dd233ec4fdccb6b559deace4f509f5dfb5d44f0990f4dec45214ec2bd1-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups  - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314533226.sd.mp4?s=2b54997a01c86887b2fe6cd068ddbad4d9258e9f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/799342980-2693a4a558e3f9df1f4bf9ce2737508e1bb94451f4a5ca9177aa67c9404fb1cf-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/348646535.sd.mp4?s=4da4760358a4d94b962ae9af69bc92617d36cdc4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Shoulder Taps - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753128204-f4f23eecd4735f05fb8b1c29b4035a93865f12befc772f4925b86919341f0419-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Shoulder Taps - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Shoulder Taps - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767601.sd.mp4?s=7b37db0148d4b551b79139464b17faf2030eb853&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Bar Crunches - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753128434-c632cfb64924cbc068e6af3b07f55d1ed90057c00f3281eb4cd676966b347c42-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Bar Crunches - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767689.sd.mp4?s=837c7db9f68b09e19dc98eb31164ef29b4b087a4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Corner Raises - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753113296-55c3173a64a436ddf24641e934c4810d8335c0feafc89c1b26f5bbcfdd280e54-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Corner Raises - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767680.sd.mp4?s=567f14c5d9611b306ece673efe4e7c39bf38e353&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Knee Raises - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753128584-1e61d6e20c30e817b35481ed60a8abdf3b57079e432b6078a5a3504bd8b45e14-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Knee Raises - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767679.sd.mp4?s=b19bc3f09096b22483f1fff9a2d7ea5b8b1f2a79&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Leg Raises  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753129128-1005484217bb114e55666ec68ed278f7af475547b3ccf9bdd59868f84f32078b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Leg Raises  - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767672.sd.mp4?s=17f72ea00d914ff41a47df12048fe04d8dc7fd02&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging L-Sit - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753128787-e1ae8254bc437aacc6f0919b6faf1453709ff3690de6cf1acc639385587bc871-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging L-Sit - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767673.sd.mp4?s=d30fa3a139fa72f83fc1e3ad24413f6ccf2d0e47&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Switching Knee Raises - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753129341-6e729c2cd55e8010e96f87bf92c680d0a160f5afec5612fbaf9bf1acf07dd921-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Switching Knee Raises - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767702.sd.mp4?s=4e65ebecbb65ec8b50d8b8f8246dba1ac85d023b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Head Bangers Chin Up Grip - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753129297-2cecee24edf6c11ffe680a7fee847a77502257c2e510c82ad8e6b23590e2367b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Head Bangers Chin Up Grip - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188088985.sd.mp4?s=f61cd0b6c102334a3a031a91c1eb9c6573bd8d86&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Head Bangers Pull Up Grip  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753129599-c6bc3a0863b301595c1c46477d9401d83b5d39d6c1ba44bc6d71552dd620e4d4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Head Bangers Pull Up Grip  - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089100.sd.mp4?s=6d3bc5bfbc6adeaad018f5a0a34ef6b88ab55a04&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Raises  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753129650-4ffafd6f34da44052184d7a164d1ae4a046e382b7c22cc299e5773ec630a93f7-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Raises  - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767677.sd.mp4?s=b3d2857c744c518b61b9a9c9eb47f528cfc0cdf3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inclined Diamond Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753130449-96a4f7d7e0ec4d6194d6be245d6a0e9c1d3f3864e6974fb63989fc38f830b306-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inclined Diamond Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767564.sd.mp4?s=f9a08958cb4141c1b053443531b1982348bc392b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inclined Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753131001-4a88a9ae13e0a0dd0c6f6ffa524b11420cb857fea3495b487110d430e0e724a4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inclined Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767598.sd.mp4?s=af67d99cc77efb664bf3c50886cf9ffdfbcf98a0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "In & Outs - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753130491-e177a50b8605c10b8e7a64c2ec46e329f583a1fa8f9d97ced4b9a9d4605dcb26-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal In & Outs - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting In & Outs - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767583.sd.mp4?s=73253be8c952946f2dd41df765a979cadd718739&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inverted Row Chin Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753131224-dca7dbc2a9b5388bfb7cef5f28afbd9582abb704f2a05ebe50c83278bfd80516-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inverted Row Chin Ups - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089157.sd.mp4?s=f597f8ceebfdfeeb598282c24dc1ee3188b72f13&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inverted Row Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753131311-96bfbd3acd01b87bb0d6ca233e6866eb70489000cae99ae939dc6c42fc401fbf-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inverted Row Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089302.sd.mp4?s=bc6b0ae99313646c767dbf83ef13e3021ddd5941&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Chin Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753133544-9c749b48b53ad032e2212470770c8e6be7376b91bd2d32169568d7c3692f654d-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Chin Ups - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089387.sd.mp4?s=b769afefee663891d6332cdc883bcdaef4302f16&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753133612-d9a2771d0d761abc5ec631f77bc678f86b7e94bb16017c3fcc63ff1171fb3166-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089226.sd.mp4?s=c27e6c4533da4f02388742d8329870c8983d7367&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780751647-9361caa505b04529c90cb6ed280322e5ebec6ed5f45be5dbdec1c3674630c933-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456368.sd.mp4?s=18b88f876caf816e6c679e73aea246270ffc1f5d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Kickbacks - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365975714-36146ff1c1cd017c553723b05173d80792b65f502c0fce6e40b356ae451a9116-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Kickbacks - Weight Vest"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Quadriceps Femoris, Gluteal Region.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993257/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=950d641f9cb42ae021b6f99d145aa5cfbaf27991285be79b7145c266410b6ec4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753133674-b4b369103f406558ab3bdbd071c2ead0243d839ce0177dade9641c8a7dd94866-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767566.sd.mp4?s=482a5259deaa013f1576edfeab13d1056701c489&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Raises On Dip Bars - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753134540-a75e9639bd7af7408f28d609ebd7e655cf95b7dded26caa4944f214d2e8f7811-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Raises On Dip Bars - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767686.sd.mp4?s=79dab423f0c32e02132ac1bd5ba816dac9ba1f5b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Plank Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1711811192-69d49c6f23ec304b2460075da3009b21d884ba93bdaddd469880978a42948ca8-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Plank Hold - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134267/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=eb1b93958ad52c7d083cc7edbdf8f97c645fa65b859ebb0a4c6e429c25e83fe8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Plank to High Plank - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753134588-546ca2e7c73f82b0d1993322dabb30de48afa314650e2f99c1ca1641ba2e0148-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Rectus Abdominis", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Plank to High Plank - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767707.sd.mp4?s=f077c7c0b503675cfda0cd0632184093dc96d857&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780751839-1437ac9db23862e2982900fd208e8e3906f27a282b39b12a1c5717a960ed44e9-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Hold - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456577.sd.mp4?s=5de0dd16228dedfb81eb9477766206a34949e209&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit On Dip Bars - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753134068-8a7f9c69a838881355dcbacfd5821cd4143f85750c6f73398a5412a23f3e806a-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit On Dip Bars - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767603.sd.mp4?s=e01ed7d1eb431a0f0673a6a72ac5f5f5ec348652&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780752015-d70b669747a90e30de35f24729202900b0445c7cb02d032e59a62d2dc30d14f0-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Raise legs to 90 degrees parallel to the floor in a strict L-sit hold before initiating the pull.", "Keep core and hip flexors locked as you pull your chest to the bar without swinging or dropping your legs.", "Lower back down smoothly while holding the L-sit position throughout the set."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456613.sd.mp4?s=fd4ed94e0b6ca33a2d9b40478540c21580c0cfc2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunges (Back & Forth) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753134950-76cb02e09985b51019c3025dff7099902583db5144cd7447953bb0dc3b90bc08-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunges (Back & Forth) - Weighted Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168357.sd.mp4?s=a64b3407e3421a807356032246557df96adbe476&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunges - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754829664-fbd7f6f04bd70c79ca680b21a3e36a383b5117a7c8c083f38e6348365dcb6eca-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunges - Weighted Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089486.sd.mp4?s=0f4defa17881fa899715956f9e1af1205fb8c9b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Mountain Climbers - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753135015-85b442ad58e45b1c2323a7149b309b84099180f3886512956eebc046de96a0ac-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Mountain Climbers - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Mountain Climbers - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767586.sd.mp4?s=bbb76d33fe2141707ccff21d0a81f1fd0aaa842f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753135053-2038e414b51a51c87b39d11faecdbe073275602f1c20143c6f06bdef6524b791-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767570.sd.mp4?s=8a2a02fb46fcef4e0129493de836ebf6a598eb81&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1709970072-ad6c188f4f1a3885de41c6479e0128259f5a8ba21f4b018f33d8e87ecda7e5eb-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134262/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e99d26d2eb3116d7082f63f13321695b8c4288aef0b9df4386ddf97e63845051",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Walks - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/780751725-f4a7a9694b093d5a1defb073cf2add20a48dd6fe8e4729007eb0efad1eb62219-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Walks - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Walks - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334456453.sd.mp4?s=6547b019379d0ac349764d949fc9e9d6872b68ef&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pistol Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753135454-f7e7072aa74e7b77f7ae576b5d80db9677e163f93d3f998a4552855fc88ad15a-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pistol Squats - Weighted Vest"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168640.sd.mp4?s=5cb5e762cba635edc6d0dc62a125e67ccf4ce201&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Knees to Elbow - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753138436-79267c573f2c2e91704dd456f60b9b3bbf127dbdfb8c16c133a56b24ecf11d4b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Knees to Elbow - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767569.sd.mp4?s=5f4b956aef27229399bab2673138f6115ac7a2a9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Open & Close - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753138907-3e358f1825fda732dd61b7e4cc86f8cdcafc96763547711c130849145fc143fa-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Open & Close - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767574.sd.mp4?s=c352892adc5ab7406d7a59c2aac2a0c3fc0312a6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Side to Side - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753138968-a1ff873b44570a974629bc986501133b0dfcb6b7f95ace59fd566bfcbcd3e459-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Side to Side - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767597.sd.mp4?s=d8ea7f6736c469af67e2604f4b83eb77436a9800&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Up & Down - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139394-1af7f823f79e7d14129b44c99187ad2b149a1d9b7d9626f7ad1a247045ea4f9b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Up & Down - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767576.sd.mp4?s=647c7b15c3007c94261dafab4cd205727df55bc8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pseudo Push Ups  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139440-63a3f6da6d773f388fe45e0db5410f1360766732dab6290e6868f2f58652187e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pseudo Push Ups  - Weighted Vest"}]
    },
    techniquePoints: ["Turn hands outward or backward and lean your shoulders forward past your wrists.", "Maintain a hollow body position with maximum scapular protraction and posterior pelvic tilt.", "Lower your chest while maintaining the forward lean, then press up to full arm lockout."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186020230.sd.mp4?s=8e93f9ef7be29e15357c7aabbe90a25bf25328ef&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139491-2e353562d62e901f97fcc820bad4e33e6e0602b5b11084a3a7fcf6446fc0d479-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up Hold - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/212782073.sd.mp4?s=af7894bcdc7d0fb02e14c11988183cd0a91f5ea5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139837-008dee0c9ccb22878289fdb6166132d038631ec184b87025cc49c53afcb37acc-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168653.sd.mp4?s=fc4e6b1324f5e720506e4e0d61b79c41fde0fd45&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Jump+Negative Wide Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139880-416e42c13b8066468c01595aa6c2d717856731fd3f5eaf9ca706a347b8d710ed-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Jump+Negative Wide Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169130.sd.mp4?s=21c52f26f1cd4eb379e504519af4d72b2cdabd64&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753139779-efbd816e4daca38246283cc33236034436e2080c603c867050720d74c2231914-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups - Weighted Vest"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182168782.sd.mp4?s=da837b615e6bb08242c139191513e5f61bf54105&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Wide Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753140340-8341b2cccb3e6518a007960ab0a7404a6cacfaacf000da288c4aa9b278c91c53-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Wide Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169192.sd.mp4?s=d0226c52b0177cbdae81bd2ac3894870673a5c2b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Wide+Shoulder+Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753140399-6a94d73c7196d288d0b34feda2a8d6738d9ae35d22c28334ebc6e896f2dcab3e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Wide+Shoulder+Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169198.sd.mp4?s=c55e96815f2ee91400e5b37942753717fba7d562&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Up + Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1244301573-5249ea8c6ffcf49a13b9ed6bea977c60948990652cc559fd19ced7d80ca651d5-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Up + Hold - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607619664.sd.mp4?s=f7cf068ec4f69ca951a58278aeb8a33f2ee6e280&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups In A Circle - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753140483-42a29d81852e9f4a207dbb684c677d5517598643ea06a366f977fbd8b776d465-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups In A Circle - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186020225.sd.mp4?s=9dadfc4d0c6952fdf179708c7bee4915c9498dd0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups Side to Side - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754829847-59c26f42816026d22785872814972a63538aa09f8f1ecfe18131ebcbb00e2691-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups Side to Side - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186019129.sd.mp4?s=90ea4520555c113f3b28b62d7ea7ba5b41d6a66a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1966723702-a1578f5b445f7306f09d748cb25ee31ae0a5d988e0ca7b561dd5ba3e18deecb9-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507573/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=67230067539adcf4680479bc2e0005060fcfd45479759a464c32d29d44b6efaa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Lunge - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365975812-a8d7b01a78a1591ea79080c27d84e5903aa9f48303374d973b80e11554fc0edc-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Lunge - Weight Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993309/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=eb014e63014fd985191de86b780141663bcd6db96d61d6244551c2140336183c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Russian Twists - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753140791-5a2e116b4c13fab30d6aad92efe1e23eff3135d6e97123feb8dfbdbe955bccfe-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Russian Twists - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Russian Twists - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767691.sd.mp4?s=398098a612b5dacd969f355089665753303e2b35&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Scapula Shrugs - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753610484-564062485a55af488b9904af58a27e41f70324b5dfd8dbd35b770afc10000ec0-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Scapula Shrugs - Weighted Vest"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089612.sd.mp4?s=ae2c333dc2ee194671027daff13d26b3e3a9c149&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated In And Outs - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753610740-102067d16a0051ef7cc6b9f6a9169971f3ed5a2ed73208d71d050d21c0a45b91-d_320x180?r=pad",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated In And Outs - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated In And Outs - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767681.sd.mp4?s=20ae43505fa89ad61ce1e56f6fbfc33ea83c0c1e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Leg Flutters - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753611111-1f6080f141764ed91da3a5727bf134fda5bb764ccc7bf972d5ae17844fd1bb3f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Leg Flutters - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated Leg Flutters - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767711.sd.mp4?s=bacf58fe04e49ba928a3ff974300c291993fc997&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder to Shoulder - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754886632-272c4e808492e1af93c61401bf7aa9598df927be7ea04285a2d7f9eb96295d8b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Obliques", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder to Shoulder - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Shoulder to Shoulder - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group, Obliques, Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188089819.sd.mp4?s=53a69e898eae4c06da110bd1d07cd17232f4947b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Boat Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753611247-bc7992743783105cd189b9cd63d0b4c4e8d827d35b25e8d142d0970c8a91df1c-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Boat Hold - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Side Boat Hold - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767706.sd.mp4?s=b3ff541a5457d9a967e465eb431e02792e098dc7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Lunge - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753613598-0b0c95e63805cfae5ce31bb86a91d17dcc0db755c98c9146900a2437f599a7df-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Lunge - Weighted Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169536.sd.mp4?s=ae52f60565af5712da1507d017d1c4e576a42d63&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Reach Through - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753613117-b41c12b51086de60d58abc74b3efe2ec791c87d2f6a4f096afde1f3b8f32bc19-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Reach Through - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767596.sd.mp4?s=53e9cbec4f9bd0c43f1fb2d16f65af12cb2a739b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Up & Down - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753613187-f79cb1af4c72044ded4f9c2e1e25df5f7c847d374fe700782f7fbb800a9b9a1d-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Up & Down - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186017113.sd.mp4?s=de3e675a6306bbd14ace5994d5467a58f371a5ff&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753612970-8bcc3bbe00c106fcdb2e94ceae31a68d5787e305d1247251d8d7e45e1606dc24-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186017043.sd.mp4?s=99686df08808fc2f4349598ff94a623721f836f6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Jump Squats - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709970068-78b5bc801a6d36f87d18f31b9a9e17a959e8c5aef2ebc2322bcf8d499ecb4e9e-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Jump Squats - Weight Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134281/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5b533716f0376dc512abbdb6d0b094a939e495aaef271232850431746599bca3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Bar Curls - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753103750-285bceb0cf8edd4489d4008b6c3eba8e3ae7e00cf7b73f4e4265721b99d1914c-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Bar Curls - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Arm Bar Curls - Weighted Vest.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182166348.sd.mp4?s=30f8ed456ed318762b248d80fecf5c5691bc092a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Romanian Deadlift - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365975982-8ecb3da3e00af85647a57cac5d9a87107dc38fc7527caa3bf2f971405b55625d-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Erector Spinae", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Romanian Deadlift - Weight Vest"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993357/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=e9a638529c05c5ec310675567b1ef0bc1f81571c089c1e81d0490a22f2690fb1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers (Close Grip) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753613980-4c106ab529522bb66b88f3d7bd95248c9cb76c400df33bb06c31f27d75b1c8f2-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers (Close Grip) - Weighted Vest"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767684.sd.mp4?s=ebbf6709f93c93584da01ad48a340bb23f4cc46d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754830059-59c745d1fa73f5433ccda522da6bcc4bb112ed05f8ad4141859b211f96019cbf-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers - Weighted Vest"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767703.sd.mp4?s=e5dc0434cea891feae53a3d2de403c090a7f0c7f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Slow Dips - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753614185-514e2dfe96aed96b29b7881255bac633769ca5d782d8d49334e588a363236ff4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Slow Dips - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767697.sd.mp4?s=be4bd0db1f488f2931d4e06c014ab2f90bf7dd7f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Spiderman Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753614521-c10cab5e43eb25e60b98ddec4198df2e5de79830737200ad79f99f253ebc5368-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Spiderman Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Rectus Abdominis, Obliques, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186017041.sd.mp4?s=bccc5ec7474ae6fb1596f4d99830a48e095137b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Lunge - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365976042-dea36f45c30598c451b647bd06848afc3fd9f4898420eb7c2a96950d6a822176-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Lunge - Weight Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group, Calf Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993380/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=0e5540b924d4f9e70b55e618b071a94444b9841ea07d1a263e01b62d4545aedd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753616520-8bfdaba854f6c250a7f7714a010be762ead6622a1004575da9dc95b970481c84-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169546.sd.mp4?s=9c9a4c066f20419f573b39bf5911f9fb04d3b85f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Walk (On Dip Bars) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753617784-330761523bde02bf662ed23aa7ef6576029bce5c52c61f42503b3eeb012d1252-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Walk (On Dip Bars) - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/223324793.sd.mp4?s=c9b0164d928396fc0be22a5d6ad03af3038e4b08&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Bar Dip - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753617142-cfe65f88f0385b09821f1ffff7e4c34892468e6c7f86bf7bdceebb667ac29f4b-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Bar Dip - Weighted Vest"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767692.sd.mp4?s=07aca720e34c5eed10119eddc8f34d2f5a29a293&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Squats Back & Forth - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753618353-052a77c34bcf46b6f88c077976c3ee110e839c3e5e6a89f03585a53642d72403-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Squats Back & Forth - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169819.sd.mp4?s=05f51ceca5a046276883693ee6bcb3052658fa7a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Squats - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753617841-3345d619bf079dcdede749d96e53307089a6814e19ea715dce2c4e57801b11b5-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Squats - Weighted Vest"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188210855.sd.mp4?s=6add130dc5433a02db70bc096ea2df32be09d456&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Lunges - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1709970051-a3e8b5aa9163fd0abfad655d8f788e762158e3d1f4fb3d70a48305179f57246a-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Lunges - Weight Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134294/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8f256055464fb794f6243a006f4bb0602a3a96f51aec717a449c674ca449fc55",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Mountain Climbers - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/1709970065-ee1bcab9d3635512447b94ce5af8a7714576f18790662343c0f3d98fafbcc176-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Mountain Climbers - Weighted Vest"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854134302/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3915d5e88d05a060ea56398d00af1339472f2ede3cd8c60db4c22189c5988bc3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tibialis Anterior Raises - Weight Vest": {
    image: "https://i.vimeocdn.com/video/1365976086-8472efc7a38992e42c9695946aa36d734141122e0713f7cd96989fea3fde831f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tibialis Anterior Raises - Weight Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/673993406/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=d7112bf0d32e13dbab8c917411f4c7b8dd1eae9b98b0155c2c49346776f6ca37",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tip Toe Wall Sit - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753618895-5045079ebb05b92595206b937bf8aa3e682a89aa823c2c84cf9bde2dc7d71538-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tip Toe Wall Sit - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188090021.sd.mp4?s=bd233dbac4efc21471cf5b09e489c15f6d4a7133&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toes to Bar  - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753619005-b26a2ce8dda3f9fae576d393f9a5c3a69ec9fffa408766042bbfb4bbf63edc34-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toes to Bar  - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toes to Bar  - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188090094.sd.mp4?s=3dc20b6fccecd5ce7d9ba33c610ef7cd8f9bed12&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Extension Knees to Elbow - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620207-424897f2ec8e842232683a03803d48f06b6c242822f8ef5bbd1124449a685017-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Triceps Brachii Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Extension Knees to Elbow - Weighted Vest"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Rectus Abdominis, Triceps Brachii Group, Obliques.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767579.sd.mp4?s=4d3350864cf171216632f769444b2946a93836b4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Extensions - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753619981-4da1af47d7b32ed657f7a9a6280e9f813a4779f41b58595296cdc1d11ac9b2b4-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Extensions - Weighted Vest"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186017039.sd.mp4?s=f03e12b5b79d3d1cbdcaca1456f827878a1412a1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620044-756392fe2e82511a078d78ec7e848abe766e1257d965b6d1b9753c18ecdb85b1-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit - Weighted Vest"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767688.sd.mp4?s=57fb71034a086e227bef4854451d26463f3809ab&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold (Parallettes) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/756116615-92bf8ca03f8d04a1bf2ce9ac85cb3edf1cfd92f1233aeddffd566eb2697f02d0-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold (Parallettes) - Weighted Vest"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314538873.sd.mp4?s=cc30c12bea1f905d3ae7f60e2c60a9219ccb4c4a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Pumps (Parallettes) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620100-923195380ebfeda6976261d6a933b22bc5be8eb1295cd2f6bbd50e2c0284e8d2-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Pumps (Parallettes) - Weighted Vest"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767704.sd.mp4?s=2d7c2174800f18f759ed47e13413c929005e1c02&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Push Ups (Parallettes) - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620782-a9ee25a706ec3d014d6f99d28880d15e4e02354d75fb42e036fe8b6a1f075c80-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Push Ups (Parallettes) - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group, Pectoralis Major, Anterior Deltoid and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/187767694.sd.mp4?s=f8b25846b33145589726c57db9617f6b39c086be&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Deadlift - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620863-5097deed6f1ec96da58a3872b213fa23cb0ae4f10d029f8f495a509bd2faaa2f-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Deadlift - Weighted Vest"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188090310.sd.mp4?s=5ca94c6c69a35368fca747de2e6bd1af7cdd2ad6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Walking Lunges - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753620948-f977373a77c26eec6fb35e642723c51d70e0bc0b38de2ff2a3250d7788d406e2-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Walking Lunges - Weighted Vest"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/182169825.sd.mp4?s=4f0d67b2bda622c64c37b671ffff65c11b46076c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Plank Hold - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753621525-621ac4ed2cb2ea51c59b78d431d0498e937df11586c96112413abf70f93b119d-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Plank Hold - Weighted Vest"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186015601.sd.mp4?s=a2b3aa7868d7bf45ff56bbea8f6eac9098436121&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Walks - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753621577-4119aa3402cfe24d524422f354c28c1e8fa6c4280294ea4148e23ab4c8a23946-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Walks - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Wall Walks - Weighted Vest.", "Execute concentric phase with intent, driving force through your Deltoid Group, Anterior Deltoid, Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186015600.sd.mp4?s=b69a4e51cd0c7612c8a830b24edd5ea5db8921db&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Push Ups - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/753621699-fdb249f0439a6b5d047892b45a606fb0cc5ed62758abcfcf6c59c39d29184a5a-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Push Ups - Weighted Vest"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/186015597.sd.mp4?s=9f58b65fc0da15355cf37a6822cd196428670267&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Windshield Wipers - Weighted Vest": {
    image: "https://i.vimeocdn.com/video/754830186-6c04c998b96fb724bc99b2c71c2e67579043fedb104ec8613ebda3d7aaf86e18-d_1920x1080",
    subcategory: "Weighted Vest / Plates",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Windshield Wipers - Weighted Vest"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Windshield Wipers - Weighted Vest.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Weighted Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/188090681.sd.mp4?s=5da3feb7abb7c300c793d00b2aa3785672dc63bf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
};
