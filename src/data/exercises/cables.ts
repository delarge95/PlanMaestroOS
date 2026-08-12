import type { ExerciseInfo } from '../types';

export const cablesExercises: Record<string, ExerciseInfo> = {
  "1-Arm 45° Cable Rear Delt Flye": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius (Mid)"],
      stability: ["Core", "Obliques"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires horizontal abduction." }]
    },
    techniquePoints: [
      "Set a pulley to shoulder height.",
      "Stand facing the machine and grab the handle with the opposite hand.",
      "Pull the cable across your body in a wide arc, keeping your arm straight.",
      "Focus on squeezing your rear delt and shoulder blade.",
      "Pause for 1-2 seconds at the peak contraction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uCV40OQMGpM",
    substitutions: ["Rope Face Pull", "Reverse Pec Deck"]
  },
  "Bayesian Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Estiramiento)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Requires shoulder extension to get the bicep in a stretched position." }]
    },
    techniquePoints: [
      "Set a cable handle to a low position.",
      "Face away from the cable machine and grab the handle.",
      "Take a step forward so your arm is pulled back behind your torso.",
      "Keeping your upper arm stationary, curl the weight forward.",
      "This position places the bicep in a deep stretch at the start of the movement.",
      "Perform one arm at a time for maximum focus."
    ],
    youtubeLink: "https://youtu.be/eUYY19p4IRY?t=962",
    substitutions: ["Incline Dumbbell Curl", "Seated Super-Bayesian High Cable Curl"]
  },
  "Behind The Back Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Estiramiento)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps (Long Head)"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Maximizes bicep stretch through shoulder extension." }]
    },
    techniquePoints: [
      "Stand with a low pulley behind you.",
      "Grab the handle and step forward to create tension.",
      "With your arm behind your body, perform a bicep curl.",
      "This position puts the long head of the bicep under a significant stretch.",
      "Focus on the stretch and contraction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Df0GjCkUh90",
    substitutions: ["Incline Dumbbell Curl"]
  },
  "Behind The Back Cable Curl (Reverse 21's)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Intensidad)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps (long head)", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Puts the shoulder into extension, providing a unique stretch to the long head of the bicep." }]
    },
    techniquePoints: [
      "Set up for a 'Behind The Back Cable Curl'.",
      "Perform 7 reps in the bottom half of the range of motion (emphasizing stretch).",
      "Perform 7 reps in the top half of the range of motion (emphasizing peak contraction).",
      "Finish with 7 full range of motion reps.",
      "This intensity technique creates a massive pump and metabolic stress."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=unQKwAs4SVc",
    substitutions: ["Incline Dumbbell Curl (Reverse 21's)"]
  },
  "Bottom-Half Seated Cable Flye": {
    image: "",
    category: "Cables",
    subcategory: "Apertura Pectoral (Estiramiento)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Focuses on the stretched portion of the pectoral flye." }]
    },
    techniquePoints: [
      "Sit on a bench between two low pulleys.",
      "Perform a cable flye, but only execute the bottom half of the range of motion.",
      "Focus on feeling a deep stretch in your pecs at the start of the movement.",
      "Raise the handles only to the halfway point to maintain constant tension.",
      "This emphasizes the stretched position of the pectoral muscles."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=P6u6LUCCbG8",
    substitutions: ["Bottom-Half DB Flye", "Low-to-High Cable Crossover"]
  },
  "Cable 1-Arm Face Pull": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior y Manguito Rotador",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Rear Deltoids", "Rotator Cuff (External Rotators)", "Trapezius (Mid)"],
      stability: ["Core (Anti-Rotation)"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Promotes scapular retraction." }]
    },
    techniquePoints: [
      "Set the pulley high and grab the handle with one hand.",
      "Step back, pulling the handle toward your ear.",
      "Focus on retracting the shoulder blade and externally rotating the arm.",
      "This unilateral movement is excellent for correcting imbalances."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=r3b944bM6To",
    substitutions: ["Rope Face Pull", "Cable Unilateral Face Pull"]
  },
  "Cable Chest Press": {
    image: "",
    category: "Cables",
    subcategory: "Press Horizontal",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Glutes"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder horizontal adduction." }]
    },
    techniquePoints: [
      "Set the pulleys to chest height.",
      "Stand in a staggered stance for stability.",
      "Press the handles forward until your arms are fully extended.",
      "Focus on squeezing the pecs together, mimicking a flye at the end of the press.",
      "Control the handles back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=_VM-RHaZ7M0",
    substitutions: ["Dumbbell Bench Press", "Machine Chest Press"]
  },
  "Cable Crossover Ladder": {
    image: "",
    category: "Cables",
    subcategory: "Apertura Pectoral (Multifocal)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals (all heads)"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Works the chest through multiple angles of adduction." }]
    },
    techniquePoints: [
      "Perform one set of cable crossovers from a low position (upper chest), one from a mid position (middle chest), and one from a high position (lower chest).",
      "The 'ladder' ensures complete development of the pectoral muscles.",
      "Focus on squeezing your pecs to bring the handles together."
    ],
    youtubeLink: "https://youtu.be/ST4NftL6lAQ",
    substitutions: ["Pec Deck", "Dumbbell Flye (with angle changes)"]
  },
  "Cable Crunch": {
    image: "",
    category: "Cables",
    subcategory: "Flexión Espinal",
    attachments: ["Rope"],
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Obliques"],
      mobility: [{ muscle: "Spine", level: "Low", description: "Requires controlled spinal flexion." }]
    },
    techniquePoints: [
      "Attach a rope to a high pulley.",
      "Kneel facing the machine, holding the rope handles on either side of your head.",
      "Keeping your hips stationary, crunch your torso down towards the floor by contracting your abs.",
      "Focus on flexing your spine, not just pulling with your arms.",
      "Return slowly to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=HD7fH653SUw",
    substitutions: ["Machine Crunch", "Decline Weighted Crunch", "Bodyweight Crunch"]
  },
  "Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ "muscle": "Elbow", "level": "Low", "description": "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Attach a straight bar or EZ-bar attachment to a low cable pulley.",
      "Stand facing the machine and grip the bar with an underhand grip.",
      "Keeping your elbows at your sides, curl the bar up towards your shoulders.",
      "The cable provides constant tension throughout the entire range of motion.",
      "Squeeze at the top and lower with control."
    ],
    youtubeLink: "https://youtu.be/rBFn11V32mM",
    substitutions: ["Barbell Curl", "Dumbbell Curl"]
  },
  "Cable Donkey Kick": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Glúteo",
    attachments: ["Strap"],
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core"],
      mobility: [{ muscle: "Hip", level: "Low", description: "Requires hip extension." }]
    },
    techniquePoints: [
      "Attach an ankle strap to a low pulley.",
      "Get on all fours facing away from the machine.",
      "Keeping your knee bent, kick your leg straight back and up.",
      "Focus on driving your heel towards the ceiling and squeezing your glute.",
      "Keep your back flat and avoid excessive arching."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=U5V4wGVYcbg",
    substitutions: ["Cable 45-Degree Kickback", "Glute Push Down"]
  },
  "Cable EZ Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps",
    attachments: ["EZ Bar"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Attach an EZ-bar to a low pulley.",
      "Grip the bar with an underhand grip on the angled sections.",
      "Keeping your elbows at your sides, curl the bar up towards your shoulders.",
      "The EZ-bar grip is often easier on the wrists than a straight bar.",
      "Lower the bar slowly and with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zG2xJ0Q5QtI",
    substitutions: ["EZ Bar Curl", "Straight-Bar Cable Curl"]
  },
  "Cable Flye": {
    image: "",
    category: "Cables",
    subcategory: "Apertura Pectoral",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals"],
      stability: ["Core", "Anterior Deltoids"],
      mobility: [{ "muscle": "Shoulder", "level": "Low", "description": "Requires basic horizontal adduction." }]
    },
    techniquePoints: [
      "Set two cable pulleys to chest height.",
      "Stand in the middle and grab a handle in each hand.",
      "Take a step forward into a staggered stance.",
      "With a slight bend in your elbows, bring your hands together in a wide arc in front of your chest.",
      "Focus on squeezing your pecs to move the weight.",
      "Return to the start slowly, feeling a stretch in your chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kZJZWtfNpVI",
    substitutions: ["Pec Deck", "Dumbbell Flye"]
  },
  "Cable Hip Abduction": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Glúteo Medio",
    attachments: ["Strap"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus"],
      stability: ["Core", "Stance Leg Glutes"],
      mobility: [{ muscle: "Hip", level: "Low", description: "Requires hip abduction." }]
    },
    techniquePoints: [
      "Attach an ankle strap to a low pulley.",
      "Stand sideways to the machine and attach the strap to your outside leg.",
      "Hold onto the machine for balance.",
      "Lift your leg out to the side against the resistance, focusing on using your glutes.",
      "Control the movement on the way back, avoiding swinging."
    ],
    youtubeLink: "https://youtu.be/aEM9A-90VLI",
    substitutions: ["Machine Hip Abduction", "Standing Band Hip Abduction"]
  },
  "Cable Hip Adduction": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Aductor",
    attachments: ["Strap"],
    muscles: {
      strength: ["Adductors"],
      stability: ["Core", "Stance Leg Glutes"],
      mobility: [{ muscle: "Hip", level: "Low", description: "Requires hip adduction." }]
    },
    techniquePoints: [
      "Attach an ankle strap to a low pulley.",
      "Stand sideways to the machine and attach the strap to your inside leg (leg furthest from the machine).",
      "Hold onto the machine for balance.",
      "Pull your leg across the front of your body, squeezing your inner thigh.",
      "Control the movement on the way back."
    ],
    youtubeLink: "https://youtu.be/YgV05-6_3l8",
    substitutions: ["Machine Hip Adduction", "Copenhagen Hip Adduction"]
  },
  "Cable Lat Pullover": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Dorsal",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Lats", "Serratus Anterior"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion." }]
    },
    techniquePoints: [
      "Attach a straight bar to a high pulley.",
      "Stand facing the machine and hinge at the hips, keeping your back straight.",
      "Keeping your arms mostly straight (slight elbow bend), pull the bar down in a wide arc until it reaches your thighs.",
      "Focus on using your lats to initiate the movement.",
      "Control the weight as it returns to the start."
    ],
    youtubeLink: "https://youtu.be/Vf7wf6bZODQ",
    substitutions: ["Dumbbell Lat Pullover", "Machine Pullover"]
  },
  "Lat Pull-Over": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Dorsal",
    attachments: ["Straight Bar", "Rope"],
    muscles: {
      strength: ["Lats", "Teres Major", "Serratus Anterior"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Necesita flexión completa de hombro para estirar los dorsales." }]
    },
    techniquePoints: [
      "Ajusta una polea alta con cuerda o barra recta y adopta una ligera inclinación de cadera.",
      "Mantén los brazos casi rectos y baja el implemento describiendo un arco amplio hasta las caderas.",
      "Evita arquear la parte baja de la espalda; mantén el core firme durante todo el recorrido.",
      "Detente brevemente al final para contraer dorsales y regresa de forma controlada al inicio."
    ],
    youtubeLink: "https://youtu.be/Vf7wf6bZODQ",
    substitutions: ["Cable Lat Pullover", "Dumbbell Lat Pullover", "Band Lat Pullover"]
  },
  "Cable Paused Shrug-In": {
    image: "",
    category: "Cables",
    subcategory: "Trapecios Medios y Romboides",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Trapezius (Mid)", "Rhomboids", "Rear Deltoids"],
      stability: ["Core"],
      mobility: [{ muscle: "Scapula", level: "Low", description: "Requires scapular retraction and slight depression." }]
    },
    techniquePoints: [
      "Set two cable handles at a low position.",
      "Stand in the middle, grab the handles with opposite hands (crossover).",
      "Hinge slightly at the hips with a flat back.",
      "Pull the handles up and back by shrugging and squeezing your shoulder blades together.",
      "Pause at the top for 2-3 seconds, focusing on the peak contraction in your mid-back.",
      "Return to the start with control."
    ],
    youtubeLink: "https://youtu.be/C6sYjDFuq9I?t=354",
    substitutions: ["Face Pull", "Incline Shrug"]
  },
  "Cable Pull-Through": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Glúteo (Cadena Posterior)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Hip", level: "Moderate", description: "Requires a good hip hinge." }]
    },
    techniquePoints: [
      "Attach a rope to a low pulley.",
      "Stand facing away from the machine, straddling the cable.",
      "Hinge at the hips, keeping your back straight, and reach through your legs to grab the rope.",
      "Drive your hips forward to stand up straight, squeezing your glutes hard at the top.",
      "Avoid squatting; maintain a minimal bend in the knees."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=NV8oPOpLsQU",
    substitutions: ["Glute Ham Raise", "Barbell RDL", "Hip Thrust"]
  },
  "Cable Reverse Flye": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires horizontal abduction." }]
    },
    techniquePoints: [
      "Set two pulleys at shoulder height.",
      "Grab the left handle with your right hand and the right handle with your left hand (crossed cables).",
      "Step back and pull the handles apart in a wide arc, squeezing your shoulder blades together.",
      "Maintain a slight bend in your elbows and keep the movement smooth."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uCV40OQMGpM",
    substitutions: ["Bent Over Reverse Dumbbell Flye", "Reverse Pec Deck"]
  },
  "Cable Rope Hammer Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Agarre Neutro)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Brachialis", "Brachioradialis", "Biceps"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Attach a rope handle to a low cable pulley.",
      "Grip the rope with a neutral (hammer) grip.",
      "Keeping your elbows at your sides, curl the rope up.",
      "You can slightly spread the rope handles apart at the peak contraction for maximum tension."
    ],
    youtubeLink: "https://youtu.be/NFz_K1ue_eI",
    substitutions: ["Hammer Curl", "DB Hammer Curl"]
  },
  "Cable Rope Kickback": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps",
    attachments: ["Rope"],
    muscles: {
      strength: ["Triceps (Lateral Head)"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires holding shoulder in extension." }]
    },
    techniquePoints: [
      "Set a pulley to a low position.",
      "Hinge at the hips with a flat back, and pull the rope so your upper arm is parallel to the floor.",
      "Keeping your upper arm stationary, extend your elbow until your arm is straight.",
      "The rope allows for a slight spread at the end, maximizing peak contraction."
    ],
    youtubeLink: "https://youtu.be/94DXwlcX8Po?t=327",
    substitutions: ["DB Triceps Kickback", "Band Tricep Kickback"]
  },
  "Cable Rope Upright Row": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Deltoides/Trapecios",
    attachments: ["Rope"],
    muscles: {
      strength: ["Lateral Deltoids", "Trapezius"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Requires shoulder abduction; the rope makes the internal rotation less aggressive." }]
    },
    techniquePoints: [
      "Attach a rope handle to a low cable pulley.",
      "Grip the rope with an overhand grip.",
      "Pull the rope up towards your chin/upper chest, leading with your elbows.",
      "Keep your elbows higher than your wrists throughout the movement to target the side delts.",
      "The rope allows for a more natural wrist position than a straight bar."
    ],
    youtubeLink: "https://youtu.be/nwkLwMRHMQo?t=230",
    substitutions: ["Dumbbell Upright Row", "Barbell Upright Row"]
  },
  "Cable Shoulder Press": {
    image: "",
    category: "Cables",
    subcategory: "Press Vertical",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder flexion." }]
    },
    techniquePoints: [
      "Sit on a bench between two low pulleys.",
      "Grab the handles and bring them to shoulder height.",
      "Press the handles overhead in a converging path.",
      "The cables provide constant tension throughout the movement and require more stabilization.",
      "Control the descent and keep your core tight to prevent your back from arching."
    ],
    youtubeLink: "https://youtu.be/pUErN9-yq_4",
    substitutions: ["Machine Shoulder Press", "Seated DB Shoulder Press"]
  },
  "Cable Single-Arm Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Unilateral)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Attach a handle to a low pulley.",
      "Stand facing the machine and grab the handle.",
      "Keep your elbow fixed at your side and curl the handle.",
      "The unilateral nature allows for maximum focus and corrects imbalances."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Wo7Yqkakh4o",
    substitutions: ["Concentration Bicep Curl", "DB Preacher Curl"]
  },
  "Cable Single-Arm Row": {
    image: "",
    category: "Cables",
    subcategory: "Remo Horizontal (Unilateral)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps"],
      stability: ["Core (Anti-Rotation)", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder extension." }]
    },
    techniquePoints: [
      "Sit at a seated row station and grab a D-handle.",
      "Pull the handle towards your hip, keeping your elbow close to your body.",
      "Resist the urge to rotate your torso; keep your shoulders square.",
      "The unilateral load provides a strong anti-rotation challenge for your core."
    ],
    youtubeLink: "https://youtu.be/p1yQnTddZlQ",
    substitutions: ["Single-Arm Dumbbell Row", "Chest-Supported Dumbbell Row"]
  },
  "Cable Skull Crusher": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Shoulders", "Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Arms must be held vertically or slightly angled back." }]
    },
    techniquePoints: [
      "Attach a bar to a high pulley and stand facing it.",
      "Hold the bar overhead, maintaining locked shoulders and a straight back.",
      "Lower the bar towards your head by bending only at the elbows.",
      "Feel the stretch on the long head of the tricep in the bottom position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=popGXI-qs98",
    substitutions: ["EZ-Bar Skull Crusher", "Overhead Cable Triceps Extension"]
  },
  "Cable Triceps Kickback": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Pico de Contracción)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires holding shoulder in extension." }]
    },
    techniquePoints: [
      "Set a pulley to a low position.",
      "Hinge at the hips with a flat back, and pull the handle so your upper arm is parallel to the floor.",
      "Keeping your upper arm stationary, extend your elbow until your arm is straight.",
      "Squeeze your tricep at the end of the movement for maximum tension."
    ],
    youtubeLink: "https://youtu.be/94DXwlcX8Po?t=327",
    substitutions: ["DB Triceps Kickback", "Cable Rope Kickback"]
  },
  "Cable Unilateral Face Pull": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior y Manguito Rotador",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Rear Deltoids", "Rotator Cuff (External Rotators)", "Trapezius (Mid)"],
      stability: ["Core (Anti-Rotation)"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Promotes scapular retraction and external rotation." }]
    },
    techniquePoints: [
      "Use a D-handle or single rope handle on a high pulley.",
      "Stand facing the cable and pull the handle toward your face/ear.",
      "Focus on squeezing the shoulder blade back and rotating the hand back (external rotation).",
      "Excellent for addressing strength imbalances between shoulders."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=r3b944bM6To",
    substitutions: ["Cable 1-Arm Face Pull", "Single-Arm Dumbbell Row (Arm-Out)"]
  },
  "Cable Wood Chopper": {
    image: "",
    category: "Cables",
    subcategory: "Anti-Rotación (Rotacional Dinámico)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Obliques", "Rectus Abdominis", "Serratus Anterior"],
      stability: ["Core", "Glutes"],
      mobility: [{ muscle: "Thoracic Spine", level: "Moderate", description: "Involves controlled torso rotation." }]
    },
    techniquePoints: [
      "Set a pulley to a high position and stand sideways to it.",
      "Grab the handle with both hands and pull it down and across your body in a diagonal 'chopping' motion.",
      "Pivot on your back foot as you rotate your torso, but keep your arms straight.",
      "Control the movement on the way back."
    ],
    youtubeLink: "https://youtu.be/pSMo_nL-_mI",
    substitutions: ["Pallof Press", "Russian Twist"]
  },
  "Concentration Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Pico de Contracción)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Sit on a bench next to a low pulley, similar to a DB concentration curl.",
      "Brace your arm against your inner thigh and curl the handle up.",
      "The cable provides constant tension which is different from a dumbbell, maximizing the pump.",
      "Focus on a strong peak contraction and controlled negative."
    ],
    youtubeLink: "https://youtu.be/FbWfA_s0XL8?t=379",
    substitutions: ["DB Concentration Curl", "DB Preacher Curl"]
  },
  "Constant-Tension Cable Kneeling Pullover": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Dorsal (Tensión Constante)",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Lats", "Serratus Anterior"],
      stability: ["Core", "Glutes"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion." }]
    },
    techniquePoints: [
      "Kneel facing the machine, holding a bar attached to a high pulley.",
      "Keeping your arms straight, pull the bar down to your thighs.",
      "Do not let the weight stack touch down at the top of the movement.",
      "Maintain constant tension on the lats throughout the entire set."
    ],
    youtubeLink: "https://youtu.be/Vf7wf6bZODQ",
    substitutions: ["Machine Pullover", "Dumbbell Pullover"]
  },
  "Constant-Tension Cable Standing Hip Abduction": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Glúteo Medio (Tensión Constante)",
    attachments: ["Strap"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus"],
      stability: ["Core", "Gluteus Maximus"],
      mobility: [{ muscle: "Hip", level: "Low", description: "Requires hip abduction." }]
    },
    techniquePoints: [
      "Attach an ankle strap to a low pulley and stand sideways.",
      "Ensure the weight stack is lifted slightly at the start (no slack).",
      "Perform the hip abduction, moving the leg out to the side.",
      "Control the weight back without letting the stack settle fully, maintaining tension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bGlm-qTnfTI",
    substitutions: ["Cable Hip Abduction", "Machine Hip Abduction"]
  },
  "Cross-Body Lat Pull-Around": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Dorsal (Estiramiento)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Lats (Lower and Outer fibers)"],
      stability: ["Core (Anti-Rotation)"],
      mobility: [{ muscle: "Thoracic Spine", level: "Moderate", description: "Requires torso rotation to maximize the stretch." }]
    },
    techniquePoints: [
      "Set a pulley low, stand sideways, and grab the handle with the opposite hand.",
      "Pull the handle across your body, stretching the lat deeply at the start.",
      "Finish the pull with the hand near the opposite hip.",
      "This unilateral movement targets the lats' full stretch and extension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=nezMK3HqvcQ",
    substitutions: ["Single-Arm Lat Pulldown", "Unilateral Cable Row"]
  },
  "Dual-Handle Elbows-Out Cable Row": {
    image: "",
    category: "Cables",
    subcategory: "Remo Horizontal (Parte Alta)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius (Mid)"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder horizontal abduction." }]
    },
    techniquePoints: [
      "Sit at a seated cable row station using two separate D-handles.",
      "Flare your elbows out high (45-60 degrees) and wide.",
      "Pull the handles back, focusing on squeezing your shoulder blades together.",
      "This targets the upper back and rear delts, minimizing lat involvement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=pgE9vsv3o28",
    substitutions: ["Helms Row", "Face Pull"]
  },
  "Dual-Cable Triceps Press": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Divergente)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Lats"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires stable shoulder position." }]
    },
    techniquePoints: [
      "Set two pulleys high, stand in the middle, and grab a D-handle in each hand.",
      "Press the handles down and slightly inwards, keeping the elbows pinned close to the body.",
      "The converging path maximizes the contraction of all three heads of the tricep."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RKkxRKnCWFE",
    substitutions: ["Triceps Diverging Pressdown", "V-Bar Press Down"]
  },
  "High-Cable Lateral Raise": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Deltoides Lateral",
    attachments: ["Single Handle", "Strap"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder abduction." }]
    },
    techniquePoints: [
      "Set a pulley to a low position.",
      "Stand sideways to the machine and grab the handle with your outside hand (arm crossing in front of body).",
      "Raise your arm out to the side until it's parallel to the floor.",
      "The cable provides tension from the very beginning of the movement, unlike dumbbells."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Ha2AHDEAvBU",
    substitutions: ["Dumbbell Lateral Raise", "Lean-Away Lateral Raise"]
  },
  "High-to-Low Face Pull": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior y Trapecio (Descendente)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Rear Deltoids", "Trapezius (Lower)"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Promotes scapular depression and retraction." }]
    },
    techniquePoints: [
      "Set the pulley high and grab the rope.",
      "Pull the rope diagonally down toward your face/chest.",
      "This angle emphasizes the lower traps and rear delts, which are crucial for scapular stability.",
      "Finish with a strong external rotation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=r3b944bM6To",
    substitutions: ["Rope Face Pull", "Cable 1-Arm Face Pull"]
  },
  "Low-to-High Cable Crossover": {
    image: "",
    category: "Cables",
    subcategory: "Apertura Pectoral (Superior)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals (Upper Head)", "Anterior Deltoids"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder flexion and adduction." }]
    },
    techniquePoints: [
      "Set the pulleys at the lowest position on a cable crossover station.",
      "Grab the handles and step forward.",
      "With a slight bend in your elbows, bring your hands up and together in an arc in front of your upper chest.",
      "Focus on the upward movement to target the clavicular (upper) head of the pecs."
    ],
    youtubeLink: "https://youtu.be/-EIhKMDSjBY?t=171",
    substitutions: ["Incline Dumbbell Press", "Bottom-Half Seated Cable Flye"]
  },
  "Moto Cable Row": {
    image: "",
    category: "Cables",
    subcategory: "Remo Horizontal (Unilateral y Bilateral)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires controlled scapular movement." }]
    },
    techniquePoints: [
      "Often performed as a superset or set modification (e.g., unilateral leading to bilateral).",
      "Perform a single-arm cable row focusing on strict form.",
      "The 'Moto Row' may refer to a specific tempo or sequence, maximizing time under tension on the lats.",
      "Ensure full scapular protraction and retraction."
    ],
    youtubeLink: "https://youtu.be/NDmJNX9JrLs?t=7m55s",
    substitutions: ["Cable Single-Arm Row", "Seated Cable Row"]
  },
  "Multi-Height Cable Crossover": {
    image: "",
    category: "Cables",
    subcategory: "Apertura Pectoral (Multifocal)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals (all heads)"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Works the chest through multiple angles." }]
    },
    techniquePoints: [
      "This involves setting up the pulleys at multiple heights (low, mid, high) or performing flyes at three distinct angles in a single set.",
      "Focus on hitting different pectoral fibers in each mini-set.",
      "Maintain strict form and a steady tempo to maximize metabolic stress."
    ],
    youtubeLink: "https://youtu.be/ST4NftL6lAQ",
    substitutions: ["Cable Crossover Ladder", "Pec Deck"]
  },
  "Neutral-Grip Seated Cable Row": {
    image: "",
    category: "Cables",
    subcategory: "Remo Horizontal (Agarre Neutro)",
    attachments: ["V-Bar", "Neutral Grip"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Biceps"],
      stability: ["Core", "Erector Spinae"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder extension and scapular retraction." }]
    },
    techniquePoints: [
      "Attach a neutral grip handle (like a V-bar) to a seated row machine.",
      "Sit with a straight back, chest up, and shoulders down.",
      "Pull the handle towards your torso, driving your elbows back.",
      "Squeeze your shoulder blades together at the peak of the contraction.",
      "The neutral grip is often more wrist and shoulder friendly."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GZbfZ033f74",
    substitutions: ["Helms Row", "Machine Row"]
  },
  "Overhead Cable Triceps Extension (Bar)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [{ muscle: "Shoulder", level: "High", description: "Requires good shoulder flexion to get the arms overhead." }]
    },
    techniquePoints: [
      "Attach a bar to a low pulley and face away from the machine.",
      "Grip the bar and extend your arms overhead.",
      "Keeping your upper arms stationary next to your head, hinge at the elbows to lower the bar behind you.",
      "Feel a stretch in your triceps at the bottom, which targets the long head."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qIW3z-ydg-M",
    substitutions: ["Overhead Cable Triceps Extension (Rope)", "DB Skull Crusher"]
  },
  "Overhead Cable Triceps Extension (Rope)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [{ muscle: "Shoulder", level: "High", description: "Requires good shoulder flexion." }]
    },
    techniquePoints: [
      "Attach a rope to a low pulley and face away from the machine.",
      "Extend your arms overhead, holding the rope handles.",
      "Keeping your upper arms still, lower the rope behind your head.",
      "At the top of the movement, spread the ropes apart for a stronger peak contraction."
    ],
    youtubeLink: "https://youtu.be/qIW3z-ydg-M",
    substitutions: ["DB Skull Crusher", "Overhead Cable Triceps Extension (Bar)"]
  },
  "Overhead Cable Triceps Extension": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Straight Bar", "Rope"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [{ muscle: "Shoulder", level: "High", description: "Requires good shoulder flexion to get the arms overhead." }]
    },
    techniquePoints: [
      "Attach a bar or rope to a low pulley and face away from the machine.",
      "Grip the attachment and extend your arms overhead.",
      "Keeping your upper arms stationary next to your head, hinge at the elbows to lower the attachment behind you.",
      "Feel a stretch in your triceps at the bottom, which targets the long head.",
      "Return to starting position by extending your elbows."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qIW3z-ydg-M",
    substitutions: ["Overhead Cable Triceps Extension (Bar)", "Overhead Cable Triceps Extension (Rope)", "DB Skull Crusher"]
  },
  "Pallof Press": {
    image: "",
    category: "Cables",
    subcategory: "Anti-Rotación (Isométrico)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Obliques", "Transverse Abdominis"],
      stability: ["Entire Core", "Glutes"],
      mobility: [{ muscle: "Thoracic Spine", level: "Low", description: "Focuses on preventing rotation." }]
    },
    techniquePoints: [
      "Set a pulley to chest height and stand sideways to it.",
      "Grab the handle with both hands and pull it to the center of your chest.",
      "Step away from the machine to create tension.",
      "Press your hands straight out in front of you, resisting the cable's pull to rotate your torso.",
      "The goal is isometric stability, not movement."
    ],
    youtubeLink: "https://youtu.be/gS-d_aKyD4U",
    substitutions: ["Cable Wood Chopper", "Side Plank"]
  },
  "Press-Around": {
    image: "",
    category: "Cables",
    subcategory: "Press Horizontal (Convergente)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Pectorals (Inner Head)", "Anterior Deltoids"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires horizontal adduction across the midline." }]
    },
    techniquePoints: [
      "Set the pulley high and grab the handle with the opposite hand.",
      "Press the handle down and across your body towards the opposite hip.",
      "This cross-body motion maximizes activation of the inner pectoral fibers.",
      "Focus on a strong squeeze at the end range of motion."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=FXw1HDVOOh8",
    substitutions: ["Cable Crossover", "Close-Grip Dumbbell Bench Press"]
  },
  "Reverse-Grip Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Antebrazo/Bíceps",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Brachioradialis", "Biceps", "Forearms"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires elbow flexion with pronated grip." }]
    },
    techniquePoints: [
      "Attach a straight bar or EZ-bar to a low pulley.",
      "Grip the bar with an overhand (pronated/reverse) grip.",
      "Keep your elbows fixed at your sides and curl the bar up.",
      "This variation heavily targets the brachioradialis and forearm flexors."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LgoNq38QXIM",
    substitutions: ["Reverse Grip EZ-Bar Curl", "Hammer Curl"]
  },
  "Rope Elbow Extension": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "High", description: "Requires high degree of shoulder flexion (same as Overhead Extension)." }]
    },
    techniquePoints: [
      "Same setup and execution as Overhead Cable Triceps Extension (Rope).",
      "Focus on maintaining the upper arm vertical and stretching the tricep deep in the bottom phase."
    ],
    youtubeLink: "https://youtu.be/qIW3z-ydg-M",
    substitutions: ["Overhead Cable Triceps Extension (Rope)", "DB Skull Crusher"]
  },
  "Rope Face Pull": {
    image: "",
    category: "Cables",
    subcategory: "Deltoides Posterior y Manguito Rotador",
    attachments: ["Rope"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius", "Rotator Cuff"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Promotes shoulder external rotation." }]
    },
    techniquePoints: [
      "Set a pulley to chest or head height and attach a rope.",
      "Grab the rope with an overhand grip and step back to create tension.",
      "Pull the rope towards your face, driving your hands apart and elbows high.",
      "Focus on externally rotating your shoulders at the end of the movement.",
      "Crucial for shoulder health and posture."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qfc70k40318",
    substitutions: ["Bent Over Reverse Dumbbell Flye", "Band Pull-Apart"]
  },
  "Rope Overhead Elbow Extension": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Estiramiento)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Triceps (Long Head)"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [{ muscle: "Shoulder", level: "High", description: "Requires good shoulder flexion." }]
    },
    techniquePoints: [
      "Same setup and execution as Overhead Cable Triceps Extension (Rope).",
      "Ensure the movement is isolated to the elbow joint; avoid moving the upper arm."
    ],
    youtubeLink: "https://youtu.be/qIW3z-ydg-M",
    substitutions: ["Overhead Cable Triceps Extension (Rope)", "DB Skull Crusher"]
  },
  "Seated Super-Bayesian High Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps (Pico de Contracción)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Maximizes peak contraction range." }]
    },
    techniquePoints: [
      "Sit on the floor or a low seat between two high pulleys.",
      "Grab the handles and perform a curl with your arms out to the side.",
      "This angle and setup provide strong resistance near the end of the concentric phase, emphasizing the peak contraction."
    ],
    youtubeLink: "https://youtu.be/eUYY19p4IRY?t=962",
    substitutions: ["Bayesian Cable Curl", "Concentration Cable Curl"]
  },
  "Single-Arm Triceps Pressdown": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Unilateral)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core (Anti-Rotation)"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires stable shoulder position." }]
    },
    techniquePoints: [
      "Attach a D-handle to a high pulley.",
      "Stand facing the machine, keeping the working elbow pinned to your side.",
      "Press the handle down until the arm is fully extended.",
      "Focus on resisting torso rotation and isolating the triceps.",
      "Excellent for correcting size or strength imbalances."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=FxK2mF0iPXs",
    substitutions: ["DB Triceps Kickback", "Triceps Pressdown (Bar)"]
  },
  "Straight-Bar Cable Curl": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Bíceps",
    attachments: ["Straight Bar"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }]
    },
    techniquePoints: [
      "Attach a straight bar to a low pulley.",
      "Maintain a strict, upright posture with elbows pinned to the sides.",
      "Curl the bar up, focusing on a strong contraction.",
      "The cable provides tension where free weights typically slacken."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0TtZgAuC8Vw",
    substitutions: ["Barbell Curl", "Cable EZ Curl"]
  },
  "Straight-Bar Lat Prayer": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Dorsal (Movimiento Dinámico)",
    attachments: ["Straight Bar"],
    muscles: {
      strength: ["Lats", "Serratus Anterior"],
      stability: ["Core", "Hip Flexors"],
      mobility: [{ muscle: "Thoracic Spine", level: "High", description: "Requires controlled forward and backward lean for optimal contraction." }]
    },
    techniquePoints: [
      "Kneel in front of a high pulley with a straight bar.",
      "Start leaning slightly forward to stretch the lats.",
      "Pull the bar down, crunching the torso slightly as you finish the movement to achieve peak lat contraction.",
      "This technique ensures tension throughout the entire range of the lat."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=C8m-NHaVgsY",
    substitutions: ["Cable Lat Pullover", "Machine Pullover"]
  },
  "Triceps Diverging Pressdown (Long Rope or 2 Ropes)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps (Divergente)",
    attachments: ["Rope", "Single Handle"],
    muscles: {
      strength: ["Triceps (Lateral and Medial Head)"],
      stability: ["Core", "Lats"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow extension." }]
    },
    techniquePoints: [
      "Use two separate ropes or a very long rope handle.",
      "As you press down, drive the ropes outward, allowing them to diverge past your hips.",
      "This diverging path creates a massive peak contraction and targets the outer tricep heads."
    ],
    youtubeLink: "https://www.youtube.com/shorts/F5drjN9rks4",
    substitutions: ["Dual-Cable Triceps Press", "V-Bar Press Down"]
  },
  "Triceps Pressdown (Bar)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps",
    attachments: ["Straight Bar", "EZ Bar"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Lats"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires shoulder to be held in a stable position." }]
    },
    techniquePoints: [
      "Attach a straight bar or angled bar to a high pulley.",
      "Grip the bar with an overhand grip, hands about shoulder-width apart.",
      "Keeping your elbows pinned to your sides, press the bar down until your arms are fully extended.",
      "Squeeze your triceps hard at the bottom."
    ],
    youtubeLink: "https://youtu.be/94DXwlcX8Po?t=106",
    substitutions: ["Triceps Pressdown (Rope)", "Weighted Dip"]
  },
  "Triceps Pressdown (Rope)": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps",
    attachments: ["Rope"],
    muscles: {
      strength: ["Triceps (Lateral Head)"],
      stability: ["Core", "Lats"],
      mobility: [{ muscle: "Shoulder", level: "Low", description: "Requires stable shoulder position." }]
    },
    techniquePoints: [
      "Attach a rope to a high pulley.",
      "Grip the rope with a neutral grip.",
      "Press down, and at the bottom of the movement, spread the rope handles apart to maximize triceps contraction.",
      "Keep your elbows pinned to your sides throughout the movement."
    ],
    youtubeLink: "https://youtu.be/94DXwlcX8Po?t=106",
    substitutions: ["Triceps Pressdown (Bar)", "DB Triceps Kickback"]
  },
  "Unilateral Cable Row": {
    image: "",
    category: "Cables",
    subcategory: "Remo Horizontal (Unilateral y Estiramiento)",
    attachments: ["Single Handle"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius"],
      stability: ["Core (Anti-Rotation)"],
      mobility: [{ muscle: "Thoracic Spine", level: "Moderate", description: "Requires unilateral extension and slight rotation." }]
    },
    techniquePoints: [
      "Set a pulley low, sit facing it, and pull the cable using the handle on the *opposite* side (contralateral).",
      "Allow the torso to rotate slightly forward at the stretch position.",
      "Pull back, driving the elbow past the body, and squeeze the shoulder blade.",
      "The angle maximizes the stretch on the lat muscle."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zQmx3gjZtCM",
    substitutions: ["Cross-Body Lat Pull-Around", "Single-Arm Dumbbell Row"]
  },
  "V-Bar Lat Pulldown": {
    image: "",
    category: "Cables",
    subcategory: "Jalón Vertical (Agarre Neutro)",
    attachments: ["V-Bar", "Neutral Grip"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core"],
      mobility: [{ muscle: "Shoulder", level: "Moderate", description: "Requires shoulder flexion and adduction." }]
    },
    techniquePoints: [
      "Attach a V-bar (close neutral grip handle) to the lat pulldown machine.",
      "Grip the handle and sit down, securing your knees under the pads.",
      "Lean back slightly and pull the handle down to your upper chest.",
      "Focus on driving your elbows down and back, squeezing your lats.",
      "The neutral grip often provides a greater range of motion and comfort."
    ],
    youtubeLink: "https://youtu.be/33Tr_6s-cWc",
    substitutions: ["Neutral Grip Pull-Up", "Neutral-Grip Seated Cable Row"]
  },
  "V-Bar Press Down": {
    image: "",
    category: "Cables",
    subcategory: "Aislamiento Tríceps",
    attachments: ["V-Bar"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Lats"],
      mobility: [{ muscle: "Elbow", level: "Low", description: "Requires full elbow extension." }]
    },
    techniquePoints: [
      "Attach a V-bar handle to a high pulley.",
      "Grip the V-bar and press down, keeping the elbows pinned to the sides.",
      "The V-bar allows for a slight inward press at the bottom, maximizing the contraction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ek-UELpEsLI",
    substitutions: ["Dual-Cable Triceps Press", "Triceps Pressdown (Bar)"]
  },
  "Close-Grip Lat Pulldown": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Cable Attachment",
    muscles: {
      strength: ["Dorsales"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Adjust thigh pad tightly to secure lower body in seat.", "Grip bar overhand or neutral, lean back slightly (10-15 degrees), and pull bar down to upper chest.", "Drive elbows toward hip pockets, squeeze lats at bottom, and control return to full overhead stretch."],
    category: "Cables",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Close-Grip%20Lat%20Pulldown",
    substitutions: ["Close-Grip Pull-Up", "1-Arm Cable Pulldown"]
  },
  "Neutral-Grip Lat Pulldown": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Cable Attachment",
    muscles: {
      strength: ["Dorsales"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Adjust thigh pad tightly to secure lower body in seat.", "Grip bar overhand or neutral, lean back slightly (10-15 degrees), and pull bar down to upper chest.", "Drive elbows toward hip pockets, squeeze lats at bottom, and control return to full overhead stretch."],
    category: "Cables",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Neutral-Grip%20Lat%20Pulldown",
    substitutions: ["Neutral-Grip Pull-Up", "Dual-Handle Lat Pulldown"]
  },
  "Dual-Handle Lat Pulldown": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Cable Attachment",
    muscles: {
      strength: ["Dorsales"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Adjust thigh pad tightly to secure lower body in seat.", "Grip bar overhand or neutral, lean back slightly (10-15 degrees), and pull bar down to upper chest.", "Drive elbows toward hip pockets, squeeze lats at bottom, and control return to full overhead stretch."],
    category: "Cables",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Dual-Handle%20Lat%20Pulldown",
    substitutions: ["Wide-Grip Lat Pulldown", "Wide-Grip Pull-Up"]
  },
};
