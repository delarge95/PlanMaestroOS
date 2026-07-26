import type { ExerciseInfo } from '../types';

export const machinesExercises: { [key: string]: ExerciseInfo } = {
  "45° Incline Machine Press": {
    image: "",
    category: "Machines",
    subcategory: "Press Inclinado",
    attachments: ["Handles"],
    muscles: {
      strength: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The machine provides a fixed path, reducing mobility requirements compared to free weights." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so the handles align with your upper chest.",
      "Plant your feet firmly and keep your back flat against the pad.",
      "Press the handles forward and upward, focusing on squeezing your upper chest at the peak.",
      "Control the negative, returning slowly until you feel a stretch in your chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xUm0BiZCWlQ", // NOTE: Link is for a general machine press, applies to incline.
    substitutions: ["45° Incline Barbell Press", "45° Incline DB Press", "Incline Smith Machine Press"]
  },
  "Assisted Chin-Up": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical",
    attachments: ["Handles", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and extension for a full range of motion." },
        { muscle: "Wrist", level: "Low", description: "Supinated grip is generally comfortable." }
      ]
    },
    techniquePoints: [
      "Set the assistance weight; a heavier weight provides more help.",
      "Grip the handles with an underhand (supinated), shoulder-width grip.",
      "Start from a full hang with arms extended.",
      "Pull your chest towards the handles, focusing on driving your elbows down and back.",
      "Lower yourself with control until your arms are fully extended again."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5srjn2UjzDY",
    substitutions: ["Assisted Pull-Up", "Supinated Lat Pulldown", "Band Assisted Chin-Up"]
  },
  "Assisted Pull-Up": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical",
    attachments: ["Handles", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Rear Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and extension for a full range of motion." }
      ]
    },
    techniquePoints: [
      "Set the assistance weight on the machine; more weight equals more assistance.",
      "Grip the handles with an overhand (pronated) grip, slightly wider than shoulder-width.",
      "Begin from a dead hang with your scapula elevated.",
      "Initiate the pull by depressing your shoulder blades, then drive your elbows down to pull your chest to the bar.",
      "Lower yourself with full control back to the starting dead hang position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5srjn2UjzDY",
    substitutions: ["Assisted Chin-Up", "Lat Pulldown", "Band Assisted Pull-Up"]
  },
  "Belt Squat": {
    image: "",
    category: "Machines",
    subcategory: "Sentadilla (Carga en Cadera)",
    attachments: ["Belt", "Platform"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "High", description: "Allows for deep hip flexion without spinal loading, requiring good hip mobility to utilize full depth." },
        { muscle: "Ankle", level: "High", description: "Requires significant dorsiflexion to keep heels down and maintain an upright torso at depth." }
      ]
    },
    techniquePoints: [
      "Secure the belt comfortably around your hips.",
      "Stand on the platform with your feet in your preferred squat stance.",
      "Release the safety catch and squat down, keeping your torso upright.",
      "Focus on driving through your feet to stand back up, fully extending your hips.",
      "The primary benefit is loading the lower body heavily with zero axial (spinal) load."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=618", // General link, shows a belt squat variation.
    substitutions: ["Hack Squat", "Leg Press", "Barbell Back Squat"]
  },
  "Calf Raise Machine": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Pantorrilla",
    attachments: ["Shoulder Pads", "Foot Block"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires full range of motion from dorsiflexion (stretch) to plantar flexion (contraction)." }
      ]
    },
    techniquePoints: [
      "Position your shoulders under the pads of the standing calf raise machine.",
      "Place the balls of your feet on the edge of the platform, allowing your heels to hang off.",
      "Keeping your legs straight (but not locked), lower your heels as far as possible to feel a deep stretch.",
      "Drive up by pressing through the balls of your feet, raising your heels as high as possible.",
      "Squeeze your calves at the peak before slowly returning to the stretched position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7AVIgDN72c0",
    substitutions: ["Leg Press Calf Press", "Smith Machine Calf Raise", "Single-Leg DB Calf Raise"]
  },
  "Chest-Supported Machine Row": {
    image: "",
    category: "Machines",
    subcategory: "Remo Horizontal",
    attachments: ["Chest Pad", "Handles"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Biceps", "Rear Deltoids"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The chest pad stabilizes the torso, requiring minimal mobility." },
        { muscle: "Scapula", level: "Moderate", description: "Good scapular protraction and retraction is key for a full range of motion." }
      ]
    },
    techniquePoints: [
      "Adjust the seat and chest pad so you can comfortably reach the handles with arms extended.",
      "Sit with your chest firmly against the pad.",
      "Initiate the movement by retracting your shoulder blades (pulling them together).",
      "Follow through by pulling the handles towards your torso, driving your elbows back.",
      "Squeeze your back muscles at the peak, then slowly extend your arms back to the start."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=956",
    substitutions: ["Chest-Supported Dumbbell Row", "T-Bar Row", "Machine Row"]
  },
  "Donkey Calf Raise": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Pantorrilla",
    attachments: ["Lower Back Pad", "Foot Block"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires a full range of ankle motion for a deep stretch and full contraction." },
        { muscle: "Hamstrings", level: "Moderate", description: "The hip hinge position requires some hamstring flexibility." }
      ]
    },
    techniquePoints: [
      "Position yourself on the machine with the pad resting on your lower back/hips.",
      "Place the balls of your feet on the platform edge, heels hanging off.",
      "Hinge at the hips, keeping your back flat.",
      "Lower your heels for a deep stretch, then press up through the balls of your feet as high as possible.",
      "The bent-over position provides a unique stretch on the gastrocnemius."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=r30EoMPSNns",
    substitutions: ["Standing Calf Raise", "Leg Press Calf Press"]
  },
  "Hack Squat": {
    image: "",
    category: "Machines",
    subcategory: "Leg Press / Guided Squat",
    attachments: ["Shoulder Pads", "Back Pad", "Foot Platform"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: [],
      mobility: [
        { muscle: "Knee", level: "High", description: "Requires deep knee flexion to achieve full range of motion." },
        { muscle: "Ankle", level: "Moderate", description: "Requires good dorsiflexion to keep heels down, especially with a lower foot placement." }
      ]
    },
    techniquePoints: [
      "Position yourself in the machine with your shoulders and back firmly against the pads.",
      "Place your feet shoulder-width apart on the platform; a lower placement targets quads more, higher targets glutes more.",
      "Lower the weight by bending your knees, keeping your back flat against the pad.",
      "Descend until your thighs are at least parallel to the platform, aiming for deep flexion.",
      "Press through your entire foot to return to the starting position without locking your knees."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=618",
    substitutions: ["Leg Press", "Smith Machine Squat", "Barbell Back Squat"]
  },
  "Half-Kneeling 1-Arm Lat Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical Unilateral",
    attachments: ["Handle"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core", "Glutes", "Obliques"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion for the starting stretch." },
        { muscle: "Hip", level: "Moderate", description: "Requires hip mobility to maintain the half-kneeling position with stability." }
      ]
    },
    techniquePoints: [
      "Attach a single handle to a high pulley.",
      "Assume a half-kneeling position with the knee of the non-working side down.",
      "Grip the handle with the working arm and fully extend it overhead.",
      "Engage your core and glutes to stabilize your torso.",
      "Pull the handle down and in towards your chest, driving your elbow towards your hip.",
      "Control the handle back to the fully stretched starting position."
    ],
    youtubeLink: "https://youtu.be/tQ2LSSP_0GQ?t=437",
    substitutions: ["Single-Arm Lat Pulldown (Seated)", "Isolateral Pulldown"]
  },
  "Isolateral Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical Unilateral",
    attachments: ["Handles", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Rear Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and extension for a full range of motion." }
      ]
    },
    techniquePoints: [
      "Use a machine with independent handles for each arm.",
      "Adjust the knee pad to secure your position.",
      "Grip both handles and sit down, starting with arms fully extended.",
      "You can pull both arms simultaneously or alternate them.",
      "Focus on driving the elbows down and back, squeezing the lats on each side independently.",
      "Control the ascent back to a full stretch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Sfr5wSZfjrk",
    substitutions: ["Half-Kneeling 1-Arm Lat Pulldown", "Dual-Handle Lat Pulldown"]
  },
  "Lat Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical",
    attachments: ["Bar", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Rear Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to reach the starting position and full scapular movement." }
      ]
    },
    techniquePoints: [
      "Adjust the knee pad to lock your legs in place.",
      "Grip the bar with an overhand grip, wider than your shoulders.",
      "Lean back slightly, keeping your chest up and spine neutral.",
      "Initiate the pull by depressing your shoulder blades, then pull the bar down to your upper chest.",
      "Squeeze your back muscles at the bottom, then allow the bar to return up with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
    substitutions: ["Pull-Up", "Assisted Pull-Up", "Wide-Grip Machine Pulldown"]
  },
  "Lean-Back Lat Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical (Variación)",
    attachments: ["Bar", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Mid-Back", "Rhomboids", "Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder mobility." },
        { muscle: "Hip", level: "Low", description: "Requires ability to hold a leaned-back torso position." }
      ]
    },
    techniquePoints: [
      "Set up as you would for a standard lat pulldown.",
      "Lean your torso back to approximately a 30-45 degree angle.",
      "Maintain this torso angle throughout the entire set.",
      "Pull the bar towards the point where your chest and abs meet (sternum).",
      "This variation shifts the focus more towards the mid-back and lower lats."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uhGxko5VbG4",
    substitutions: ["Lean-Back Machine Pulldown", "Chest-Supported T-Bar Row"]
  },
  "Lean-Back Machine Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical (Variación)",
    attachments: ["Handles", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Mid-Back", "Rhomboids", "Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder mobility." }
      ]
    },
    techniquePoints: [
      "Use any pulldown machine (cable or plate-loaded).",
      "Lean your torso back to a consistent 30-45 degree angle.",
      "Pull the handles towards your sternum, focusing on a strong back contraction.",
      "Maintain the lean throughout the set to keep the targeted stimulus.",
      "Control the weight on the way back up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ch9msD0IlEw",
    substitutions: ["Lean-Back Lat Pulldown", "Chest-Supported Row"]
  },
  "Leg Extension": {
    image: "",
    category: "Machines",
    subcategory: "Knee Extension (Isolation)",
    attachments: ["Ankle Pad", "Back Pad"],
    muscles: {
      strength: ["Quadriceps"],
      stability: [],
      mobility: [
        { muscle: "Knee", level: "Low", description: "The machine guides the knee through flexion and extension." }
      ]
    },
    techniquePoints: [
      "Adjust the machine so your knees align with the machine's pivot point.",
      "Ensure your back is flat against the pad and the ankle pad is just above your feet.",
      "Extend your legs to lift the weight until your legs are straight, but not locked.",
      "Squeeze your quadriceps hard at the top of the movement for a peak contraction.",
      "Lower the weight slowly and with full control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ljO4jkwv8wQ",
    substitutions: ["Sissy Squat", "Reverse Nordic"]
  },
  "Leg Press": {
    image: "",
    category: "Machines",
    subcategory: "Leg Press / Guided Squat",
    attachments: ["Foot Platform", "Back Pad"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires good hip flexion to achieve depth without the lower back rounding (butt wink)." },
        { muscle: "Ankle", level: "Low", description: "Less demanding than a squat, but some dorsiflexion is still needed." }
      ]
    },
    techniquePoints: [
      "Sit in the machine with your back and head flat against the support pad.",
      "Place your feet on the platform; width and height can be adjusted to target different muscles.",
      "Press the platform away until your legs are extended but not locked.",
      "Lower the platform with control until your knees form at least a 90-degree angle.",
      "Ensure your lower back and hips remain in contact with the seat at all times."
    ],
    youtubeLink: "https://youtu.be/didU4ZwAkPI?t=241",
    substitutions: ["Back Squat", "Hack Squat", "Belt Squat"]
  },
  "Leg Press Calf Press": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Pantorrilla",
    attachments: ["Foot Platform"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: [],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires full range of motion from dorsiflexion to plantar flexion for maximum effectiveness." }
      ]
    },
    techniquePoints: [
      "Sit in a leg press machine and place the balls of your feet on the lower edge of the platform.",
      "Extend your legs, maintaining a slight bend in the knees to protect them.",
      "Allow your heels to drop as far as comfortable to stretch the calves (dorsiflexion).",
      "Press the weight by extending your ankles, pushing through the balls of your feet (plantar flexion).",
      "Pause and squeeze your calves at the top before slowly lowering for the next rep."
    ],
    youtubeLink: "https://youtu.be/-qsRtp_PbVM?t=311", // General calf raise video, concept applies
    substitutions: ["Standing Calf Raise", "Seated Calf Raise", "Smith Machine Calf Raise"]
  },
  "Lying Leg Curl": {
    image: "",
    category: "Machines",
    subcategory: "Knee Flexion (Isolation)",
    attachments: ["Ankle Pad"],
    muscles: {
      strength: ["Hamstrings"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Knee", level: "Low", description: "The machine isolates and guides knee flexion." }
      ]
    },
    techniquePoints: [
      "Lie face down on the machine, positioning your knees just off the edge of the bench.",
      "Place the back of your ankles securely under the roller pad.",
      "Keep your hips pressed firmly into the bench throughout the movement.",
      "Curl your legs up towards your glutes by contracting your hamstrings.",
      "Squeeze at the top, then lower the weight slowly and with full control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=e_48W0vlU58",
    substitutions: ["Seated Leg Curl", "Nordic Ham Curl", "Glute Ham Raise"]
  },
  "Machine Chest Press": {
    image: "",
    category: "Machines",
    subcategory: "Press Horizontal",
    attachments: ["Handles", "Back Pad"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The machine's fixed path minimizes mobility needs, making it good for beginners or for isolation." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so the handles align with the middle of your chest.",
      "Keep your back flat against the pad and your feet firmly on the floor.",
      "Press the handles forward until your arms are extended but not locked.",
      "Focus on squeezing your chest muscles at the peak of the contraction.",
      "Return slowly to the starting position, allowing a full stretch across the pecs."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xUm0BiZCWlQ",
    substitutions: ["Barbell Bench Press", "Dumbbell Bench Press", "Push-Up"]
  },
  "Machine Cheat Shrug": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Trapecio",
    attachments: ["Handles"],
    muscles: {
      strength: ["Upper Trapezius"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Simple elevation movement." }
      ]
    },
    techniquePoints: [
      "Use a shrug machine or a Smith machine.",
      "Load a weight heavier than you could lift strictly.",
      "Use a slight, controlled push from your legs (a small knee bend) to initiate the upward movement.",
      "Focus on aggressively shrugging your shoulders up towards your ears.",
      "Hold the peak contraction, then control the negative phase as much as possible."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=XmcV0TFacgA",
    substitutions: ["Barbell Shrug (with cheat)", "Dumbbell Cheat Shrug"]
  },
  "Machine Crunch": {
    image: "",
    category: "Machines",
    subcategory: "Abdominal (Flexión Espinal)",
    attachments: ["Pads/Handles"],
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: [],
      mobility: [
        { muscle: "Spine", level: "Low", description: "The machine guides thoracic and lumbar spinal flexion." }
      ]
    },
    techniquePoints: [
      "Sit in the machine and adjust it to fit your torso length.",
      "Secure your legs or place your arms on the pads as designed.",
      "Exhale and contract your abs to curl your torso forward, focusing on bringing your rib cage toward your pelvis.",
      "Avoid pulling with your arms or neck; the movement should originate from your abs.",
      "Return slowly to the starting position, inhaling as you extend."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=275", // General weighted crunch video
    substitutions: ["Cable Crunch", "Decline Weighted Crunch"]
  },
  "Machine Dip": {
    image: "",
    category: "Machines",
    subcategory: "Press Vertical (Tricep Focus)",
    attachments: ["Handles", "Seat"],
    muscles: {
      strength: ["Triceps", "Lower Pectorals", "Anterior Deltoids"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The fixed path is less demanding on shoulder mobility than free dips, but still requires some extension." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so your shoulders are relaxed and not hunched when gripping the handles.",
      "Grip the handles and keep your torso upright to maximize tricep engagement.",
      "Press down until your arms are fully extended but not locked.",
      "Allow the handles to rise slowly, feeling a stretch in your triceps, before pressing down again.",
      "Leaning forward slightly will incorporate more chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yN6Q1UI_xkE", // NOTE: Link is for weighted bodyweight dips, machine version is very similar.
    substitutions: ["Bench Dip", "Weighted Dip", "Close-Grip Bench Press"]
  },
  "Machine Glute Kickdown": {
    image: "",
    category: "Machines",
    subcategory: "Extensión de Cadera (Aislamiento)",
    attachments: ["Foot Plate/Pad"],
    muscles: {
      strength: ["Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Isolates hip extension, requiring minimal mobility." }
      ]
    },
    techniquePoints: [
      "Position yourself on the machine, typically standing and leaning forward.",
      "Place one foot against the pad or platform.",
      "Contract your glute to press your leg backward and upward, extending at the hip.",
      "Focus on a powerful squeeze at the peak contraction, avoiding arching your lower back.",
      "Return the weight with control to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fDoIUkh5Myk",
    substitutions: ["Cable Glute Kickback", "Ankle Weight Glute Kickback", "Donkey Kickback"]
  },
  "Machine High Row": {
    image: "",
    category: "Machines",
    subcategory: "Remo Horizontal (Espalda Alta)",
    attachments: ["Handles", "Chest Pad"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Guided path focuses on horizontal abduction." }
      ]
    },
    techniquePoints: [
      "Use a machine where the pull path is high, around shoulder level.",
      "Sit with your chest against the pad and grip the handles.",
      "Pull back and flare your elbows out to the sides.",
      "Focus on squeezing your shoulder blades together to target the upper back and rear delts.",
      "Control the movement back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=w6dxL2fmXRo",
    substitutions: ["Face Pull", "Reverse Pec Deck", "Bent Over Reverse Dumbbell Flye"]
  },
  "Machine Hip Abduction": {
    image: "",
    category: "Machines",
    subcategory: "Abducción de Cadera (Aislamiento)",
    attachments: ["Pads"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus", "Tensor Fasciae Latae (TFL)"],
      stability: [],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Isolates hip abduction in a seated, stable position." }
      ]
    },
    techniquePoints: [
      "Sit in the machine with your outer thighs against the pads.",
      "Set the starting range of motion to a comfortable position.",
      "Press your legs outward against the resistance, focusing on using your outer glute muscles.",
      "Hold the peak contraction for a moment.",
      "Control the movement as you bring your legs back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GmRSV_n2E_0",
    substitutions: ["Band Lateral Walk", "Cable Hip Abduction", "Side-Lying Hip Abduction"]
  },
  "Machine Hip Adduction": {
    image: "",
    category: "Machines",
    subcategory: "Aducción de Cadera (Aislamiento)",
    attachments: ["Pads"],
    muscles: {
      strength: ["Adductors"],
      stability: [],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Isolates hip adduction in a seated, stable position." }
      ]
    },
    techniquePoints: [
      "Sit in the machine with your inner thighs against the pads.",
      "Set the machine to allow a comfortable stretch at the start.",
      "Squeeze your legs together against the resistance by contracting your inner thigh muscles.",
      "Hold the contraction at the end point.",
      "Return to the starting position with control."
    ],
    youtubeLink: "https://youtu.be/KJ6oPBpWmEI?t=4m44s", // General link, shows adduction
    substitutions: ["Copenhagen Hip Adduction", "Cable Hip Adduction"]
  },
  "Machine Lateral Raise": {
    image: "",
    category: "Machines",
    subcategory: "Abducción de Hombro (Aislamiento)",
    attachments: ["Pads"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The machine isolates shoulder abduction with a fixed path, requiring minimal mobility." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so the machine's pivot point aligns with your shoulder joint.",
      "Place your outer arms against the pads.",
      "Raise your arms out to the sides in a controlled motion, leading with the elbows.",
      "Focus on keeping your traps relaxed and not shrugging.",
      "Pause at the top, then lower slowly."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0FUpcwj_1z4",
    substitutions: ["Dumbbell Lateral Raise", "Cable Lateral Raise", "Band Lateral Raise"]
  },
  "Machine Preacher Curl": {
    image: "",
    category: "Machines",
    subcategory: "Flexión de Codo (Aislamiento)",
    attachments: ["Handles", "Arm Pad"],
    muscles: {
      strength: ["Biceps"],
      stability: [],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "The machine fully isolates the elbow flexion movement." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so that your armpits are snug against the top of the pad.",
      "Ensure your elbows align with the machine's pivot point.",
      "Rest the back of your upper arms flat on the pad.",
      "Grip the handle and curl the weight up, squeezing your biceps at the top.",
      "Lower the weight slowly until your arms are almost fully extended, maintaining tension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=F33L5PuiCH8",
    substitutions: ["DB Preacher Curl", "EZ-Bar Preacher Curl", "Spider Curl"]
  },
  "Machine Pullover": {
    image: "",
    category: "Machines",
    subcategory: "Pullover",
    attachments: ["Elbow Pads", "Handles"],
    muscles: {
      strength: ["Lats", "Pectorals", "Serratus Anterior"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion for the starting stretch." }
      ]
    },
    techniquePoints: [
      "Sit in the machine and adjust the seat so the pivot point aligns with your shoulders.",
      "Place your elbows against the pads and lightly grip the handles.",
      "Press down with your elbows, pulling the pad in an arc towards your lap.",
      "Focus on contracting your lats to move the weight.",
      "Return slowly to the start, feeling a stretch through your lats and chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ZOwR81rgk-8",
    substitutions: ["Dumbbell Pullover", "Cable Pullover", "Straight-Arm Pulldown"]
  },
  "Machine Row": {
    image: "",
    category: "Machines",
    subcategory: "Remo Horizontal",
    attachments: ["Handles", "Chest Pad"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Biceps"],
      stability: [],
      mobility: [
        { muscle: "Scapula", level: "Moderate", description: "Full range requires good scapular protraction and retraction." }
      ]
    },
    techniquePoints: [
      "Sit on the machine, typically with a chest pad for support.",
      "Grip the handles with your desired grip (neutral, wide, narrow).",
      "Initiate the pull by retracting your shoulder blades.",
      "Drive your elbows back and pull the handles towards your torso.",
      "Squeeze your back muscles hard at the end of the rep.",
      "Control the weight as you extend your arms."
    ],
    youtubeLink: "https://youtube.com/shorts/DHA7QGDa2qg",
    substitutions: ["Chest-Supported Machine Row", "Seated Cable Row", "T-Bar Row"]
  },
  "Machine Shoulder Press": {
    image: "",
    category: "Machines",
    subcategory: "Press Vertical",
    attachments: ["Handles", "Back Pad"],
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The fixed path of motion reduces mobility requirements compared to free weights." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so the handles start at or slightly above shoulder height.",
      "Keep your back straight and firm against the pad.",
      "Press the handles directly overhead until your arms are fully extended but not locked.",
      "Avoid shrugging your traps; focus on using your deltoids to drive the movement.",
      "Lower the weight with control back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=flr4ohSl0j8",
    substitutions: ["Dumbbell Shoulder Press", "Barbell Overhead Press", "Single Arm Band Shoulder Press"]
  },
  "Machine Shrug": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Trapecio",
    attachments: ["Handles"],
    muscles: {
      strength: ["Upper Trapezius"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Isolates the simple movement of scapular elevation." }
      ]
    },
    techniquePoints: [
      "Stand or sit in the designated shrug machine, gripping the handles.",
      "Let your shoulders hang in a relaxed, stretched position.",
      "Elevate your shoulders straight up towards your ears as high as possible.",
      "Avoid rolling your shoulders forward or backward; the motion is purely vertical.",
      "Hold the peak contraction for a moment before lowering slowly for a full stretch."
    ],
    youtubeLink: "https://youtu.be/C6sYjDFuq9I?t=132",
    substitutions: ["Dumbbell Shrug", "Barbell Shrug", "Trap Bar Shrug"]
  },
  "Machine Squat": {
    image: "",
    category: "Machines",
    subcategory: "Leg Press / Guided Squat",
    attachments: ["Pads", "Platform"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires hip flexion for depth." },
        { muscle: "Ankle", level: "Moderate", description: "Requires dorsiflexion to maintain foot position." }
      ]
    },
    techniquePoints: [
      "Position yourself in the machine, which could be a V-Squat, pendulum squat, or similar.",
      "Place your feet firmly on the platform.",
      "Squat down by bending at the hips and knees, keeping your back supported by the pad.",
      "Achieve desired depth while maintaining good form.",
      "Drive through your feet to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0tn5K9NlCfo",
    substitutions: ["Hack Squat", "Leg Press", "Smith Machine Squat"]
  },
  "Pec Deck": {
    image: "",
    category: "Machines",
    subcategory: "Aducción Horizontal (Aislamiento)",
    attachments: ["Handles/Pads"],
    muscles: {
      strength: ["Pectorals"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder horizontal adduction and the ability to tolerate a stretch at the start." }
      ]
    },
    techniquePoints: [
      "Adjust the seat so the handles or pads are at mid-chest level.",
      "Sit with your back firmly against the pad to isolate the chest.",
      "Bring the handles together in front of you, focusing on squeezing your pecs to initiate the movement.",
      "Hold the peak contraction when the handles meet.",
      "Return to the starting position with control, feeling a stretch across your chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-EIhKMDSjBY",
    substitutions: ["Dumbbell Flye", "Cable Crossover", "Band Chest Fly"]
  },
  "Reverse Hyper": {
    image: "",
    category: "Machines",
    subcategory: "Extensión de Cadera",
    attachments: ["Pad", "Strap/Handles"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Focuses on hip extension strength, not a large mobility range." }
      ]
    },
    techniquePoints: [
      "Lie prone on the reverse hyper machine with your hips at the edge of the pad.",
      "Secure your feet in the strap or behind the roller.",
      "Hold onto the handles for stability.",
      "Initiate the movement by squeezing your glutes and hamstrings to lift your legs up until they are in line with your torso.",
      "Avoid excessive lumbar hyperextension; the movement should be driven by the hips.",
      "Lower your legs with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3d9_W--eUcI",
    substitutions: ["Glute Ham Raise", "Barbell 45° Hyperextension", "Reverse Hyperextension (on bench)"]
  },
  "Reverse Pec Deck": {
    image: "",
    category: "Machines",
    subcategory: "Abducción Horizontal (Aislamiento)",
    attachments: ["Handles"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Mid-Trapezius"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Movement path is guided by the machine." }
      ]
    },
    techniquePoints: [
      "Sit facing the machine, with your chest against the pad.",
      "Adjust the seat so the handles are at shoulder height.",
      "Grip the handles with a neutral or pronated grip.",
      "Keeping your arms nearly straight, pull the handles back and out in a wide arc.",
      "Focus on squeezing your shoulder blades together at the peak of the movement.",
      "Return with control to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6JqWoP25lR0",
    substitutions: ["Face Pull", "Bent Over Reverse Dumbbell Flye", "Band Pull-Apart"]
  },
  "Seated Calf Raise": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Pantorrilla",
    attachments: ["Knee Pad", "Foot Block"],
    muscles: {
      strength: ["Soleus"],
      stability: [],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires full ankle range of motion (dorsiflexion and plantar flexion) to be effective." }
      ]
    },
    techniquePoints: [
      "Sit on the machine and place the balls of your feet on the platform, heels off.",
      "Position the pad securely on top of your lower thighs, just above the knees.",
      "Release the safety catch and lower your heels for a deep stretch.",
      "Press up by extending your ankles, lifting your heels as high as possible.",
      "Squeeze the soleus muscle (the deeper calf muscle) at the top, then lower slowly."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-qsRtp_PbVM",
    substitutions: ["Standing Calf Raise", "Leg Press Calf Press"]
  },
  "Seated Leg Curl": {
    image: "",
    category: "Machines",
    subcategory: "Knee Flexion (Isolation)",
    attachments: ["Ankle Pad", "Thigh Pad"],
    muscles: {
      strength: ["Hamstrings"],
      stability: [],
      mobility: [
        { muscle: "Knee", level: "Low", description: "The machine fully isolates the knee flexion movement." }
      ]
    },
    techniquePoints: [
      "Adjust the machine so the thigh pad is secure and the ankle pad rests on your lower ankles.",
      "Ensure your knees align with the machine's pivot point.",
      "Flex your knees to pull the ankle pad down and back as far as possible.",
      "Squeeze your hamstrings at the point of peak contraction.",
      "Return to the starting position slowly and with control, feeling the stretch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2CMmuH4qJh0",
    substitutions: ["Lying Leg Curl", "Nordic Ham Curl", "Sliding Leg Curl"]
  },
  "Smith Machine Bench Press": {
    image: "",
    category: "Machines",
    subcategory: "Press Horizontal",
    attachments: ["Bar", "Safety Catches", "Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The fixed vertical path can be stressful if not perfectly aligned with an individual's natural movement pattern. Caution is advised." }
      ]
    },
    techniquePoints: [
      "Position a flat bench centered under the Smith machine bar.",
      "Lie down and align your mid-chest under the bar.",
      "Grip the bar slightly wider than shoulder-width.",
      "Unrack the bar by twisting it, then lower it with control to your chest.",
      "Press the bar straight back up to the starting position without locking out the elbows.",
      "The machine removes the need for stabilization."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vcBig73ojpE", // NOTE: Link is for barbell version, but principles apply.
    substitutions: ["Barbell Bench Press", "Machine Chest Press", "Dumbbell Bench Press"]
  },
  "Smith Machine Deficit Row": {
    image: "",
    category: "Machines",
    subcategory: "Remo Horizontal",
    attachments: ["Bar", "Platform/Block"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Erector Spinae"],
      stability: ["Core", "Glutes", "Hamstrings"],
      mobility: [
        { muscle: "Hip", level: "High", description: "Requires significant hip hinge mobility to maintain a flat back." },
        { muscle: "Hamstrings", level: "High", description: "The deficit position places a large stretch on the hamstrings." }
      ]
    },
    techniquePoints: [
      "Stand on a low platform or block to create a deficit.",
      "Set the Smith machine bar to its lowest point.",
      "Hinge at the hips with a flat back to grip the bar.",
      "Pull the bar explosively towards your lower chest/upper stomach.",
      "Lower the bar back to the starting dead-stop position for each rep.",
      "This variation increases the range of motion and starting strength."
    ],
    youtubeLink: "https://youtube.com/shorts/P26fnt8G1DA",
    substitutions: ["Pendlay Row", "Barbell Row from floor", "Deficit Deadlift"]
  },
  "Smith Machine Good Morning": {
    image: "",
    category: "Machines",
    subcategory: "Hip Hinge",
    attachments: ["Bar", "Safety Catches"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "This is a primary hamstring flexibility and strengthening exercise." }
      ]
    },
    techniquePoints: [
      "Set the Smith machine bar on your upper back as you would for a squat.",
      "Stand with a slight bend in your knees.",
      "Initiate the movement by pushing your hips back, hinging at the waist.",
      "Keep your back perfectly straight and lower your torso until it's parallel to the floor or you feel a deep hamstring stretch.",
      "Squeeze your glutes and hamstrings to return to the upright position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=f23vXjoG2e8", // NOTE: Link is for barbell version.
    substitutions: ["Barbell Good Morning", "Romanian Deadlift (RDL)"]
  },
  "Smith Machine JM Press": {
    image: "",
    category: "Machines",
    subcategory: "Press Híbrido (Tricep Focus)",
    attachments: ["Bar", "Bench"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Hybrid movement path is guided by the machine." },
        { muscle: "Elbow", level: "Moderate", description: "Requires controlled elbow flexion and extension." }
      ]
    },
    techniquePoints: [
      "Lie on a bench under the Smith machine bar.",
      "Take a close grip, about shoulder-width apart.",
      "Lower the bar in a path somewhere between a skull crusher and a close-grip press, towards your upper chest/neck area.",
      "Your elbows will travel forward and down.",
      "Press the bar back up, focusing on extending at the elbow to engage the triceps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=nEF0bv2FW94", // NOTE: Link is for close-grip bench, JM press is a specific variation.
    substitutions: ["Close-Grip Bench Press", "Skull Crusher", "California Press"]
  },
  "Smith Machine Reverse Lunge": {
    image: "",
    category: "Machines",
    subcategory: "Lunge Unilateral",
    attachments: ["Bar"],
    muscles: {
      strength: ["Glutes", "Quadriceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Stretches the hip flexor of the leg stepping back." }
      ]
    },
    techniquePoints: [
      "Set the Smith machine bar on your upper back.",
      "Stand with both feet under the bar.",
      "Take a large step backward with one leg, lowering your hips until both knees are bent at approximately 90 degrees.",
      "Keep your front foot flat on the floor and drive through it to return to the starting position.",
      "The Smith machine provides stability, allowing focus on the working leg."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9RNKFnd8Hbk", // NOTE: Link is for dumbbell version.
    substitutions: ["Dumbbell Reverse Lunge", "Barbell Reverse Lunge"]
  },
  "Smith Machine Row": {
    image: "",
    category: "Machines",
    subcategory: "Remo Horizontal",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Biceps"],
      stability: ["Erector Spinae", "Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires good hip hinge mobility to maintain a flat back position." }
      ]
    },
    techniquePoints: [
      "Set the bar on the Smith machine to about knee height.",
      "Stand with feet shoulder-width apart and hinge at the hips, maintaining a flat back.",
      "Grip the bar with an overhand grip, slightly wider than your shoulders.",
      "Pull the bar up to your lower chest/upper abdomen, squeezing your shoulder blades.",
      "Lower the bar with control. The fixed path removes the need to balance the bar."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7PhvyukQ4Sw",
    substitutions: ["Barbell Row", "Pendlay Row", "T-Bar Row"]
  },
  "Smith Machine Squat": {
    image: "",
    category: "Machines",
    subcategory: "Sentadilla Guiada",
    attachments: ["Bar"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Mobility is required for depth, but the fixed path changes mechanics from a free squat." },
        { muscle: "Ankle", level: "Moderate", description: "Foot placement variations can alter ankle mobility demands." }
      ]
    },
    techniquePoints: [
      "Set the bar on the Smith machine to shoulder height.",
      "Position yourself under the bar. Foot placement can be directly under or slightly forward.",
      "Unrack the weight by twisting the bar.",
      "Squat down by bending your knees and hips, keeping your torso as upright as possible.",
      "Go to parallel or below, then drive back up to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bEv6CCg2BC8", // NOTE: Link is for barbell version.
    substitutions: ["Barbell Back Squat", "Hack Squat", "Leg Press"]
  },
  "Smith Machine Static Lunge": {
    image: "",
    category: "Machines",
    subcategory: "Lunge Unilateral",
    attachments: ["Bar"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: [],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Stretches the hip flexor of the back leg." }
      ]
    },
    techniquePoints: [
      "Set the bar on your shoulders in a Smith machine.",
      "Step one foot forward and one foot back into a fixed lunge stance.",
      "Keeping your torso upright, lower your body straight down by bending both knees.",
      "Descend until your front thigh is parallel to the floor and your back knee nearly touches the ground.",
      "Press back up to the starting position without moving your feet from their spots."
    ],
    youtubeLink: "https://youtu.be/-MRNjTr6xrE?t=715", // General lunge concept
    substitutions: ["Dumbbell Lunge", "DB Bulgarian Split Squat"]
  },
  "Smith Machine Sumo Squat": {
    image: "",
    category: "Machines",
    subcategory: "Sentadilla Guiada",
    attachments: ["Bar"],
    muscles: {
      strength: ["Adductors", "Glutes", "Quadriceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "High", description: "The wide stance of a sumo squat demands significant hip and adductor mobility." }
      ]
    },
    techniquePoints: [
      "Position the Smith machine bar on your upper back.",
      "Take a wide stance with your toes pointed slightly outward.",
      "Squat down by pushing your hips back and bending your knees.",
      "Keep your torso as upright as possible and drive your knees out over your feet.",
      "Drive through your feet to return to the starting position, squeezing your glutes at the top."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Q-xmQxEMplQ",
    substitutions: ["Sumo Deadlift", "Goblet Squat (wide stance)", "Barbell Sumo Squat"]
  },
  "Standing Calf Raise": {
    image: "",
    category: "Machines",
    subcategory: "Aislamiento de Pantorrilla",
    attachments: ["Shoulder Pads", "Foot Block"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires full ankle range of motion for an effective stretch and contraction." }
      ]
    },
    techniquePoints: [
      "Use a standing calf raise machine or a Smith machine with a block.",
      "Place the balls of your feet on the edge of the platform, heels off.",
      "With straight legs, lower your heels for a deep stretch.",
      "Press up by extending your ankles, raising your heels as high as possible.",
      "Hold the peak contraction before slowly lowering again."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=YMmgqO8Jo-k",
    substitutions: ["Seated Calf Raise", "Leg Press Calf Press"]
  },
  "Super-ROM Leg Press": {
    image: "",
    category: "Machines",
    subcategory: "Leg Press / Guided Squat",
    attachments: ["Foot Platform"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "High", description: "Requires excellent hip flexion to achieve a 'super' range of motion without the lower back lifting off the pad." },
        { muscle: "Knee", level: "High", description: "Requires deep knee flexion." }
      ]
    },
    techniquePoints: [
      "Use a leg press that allows for a very deep range of motion (e.g., vertical leg press).",
      "Focus on lowering the weight as far as possible while keeping your hips and back firmly planted in the seat.",
      "The goal is to maximize the stretch on the glutes and quads at the bottom.",
      "Control the eccentric phase slowly.",
      "Press back to the start, stopping just short of full knee lockout."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=q6JKeVRfBhM",
    substitutions: ["Deep Hack Squat", "ATG Split Squat"]
  },
  "Super-Stretch Reverse Pec Deck": {
    image: "",
    category: "Machines",
    subcategory: "Abducción Horizontal (Aislamiento)",
    attachments: ["Handles"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids"],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "This variation specifically challenges shoulder horizontal abduction and scapular protraction." }
      ]
    },
    techniquePoints: [
      "Sit sideways on the reverse pec deck machine.",
      "Grip the handle of the far side with your working arm.",
      "Allow your arm to be pulled across your body to get a deep pre-stretch on the rear delt.",
      "Perform the reverse flye motion, pulling your arm back and out.",
      "This unilateral, cross-body setup maximizes the stretch and tension on the rear deltoid."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=P6-N-VGCVxk",
    substitutions: ["Unilateral Cable Reverse Flye", "Bent-Over Single-Arm Dumbbell Raise"]
  },
  "Supinated pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical",
    attachments: ["Bar", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Biceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and extension." }
      ]
    },
    techniquePoints: [
      "Grip the pulldown bar with an underhand (supinated), shoulder-width grip.",
      "Secure your knees under the pad.",
      "Keeping your chest up, pull the bar down to your upper chest.",
      "Focus on driving your elbows down and back, squeezing your lats and biceps.",
      "Return the bar to the top with control for a full stretch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=apzFTbsm7HU",
    substitutions: ["Chin-Up", "Assisted Chin-Up", "Neutral Grip Pulldown"]
  },
  "Unilateral Lying Leg Curl": {
    image: "",
    category: "Machines",
    subcategory: "Knee Flexion (Isolation)",
    attachments: ["Ankle Pad"],
    muscles: {
      strength: ["Hamstrings"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Knee", level: "Low", description: "Isolates knee flexion." }
      ]
    },
    techniquePoints: [
      "Lie face down on a lying leg curl machine.",
      "Position one ankle under the roller pad.",
      "Keep your hips pressed firmly into the bench.",
      "Curl your leg up, contracting the hamstring of the working leg.",
      "Squeeze at the top and lower with control.",
      "Complete all reps for one side before switching to the other."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oiioaD43zSs",
    substitutions: ["Unilateral Seated Leg Curl", "Single-Leg Stability Ball Curl"]
  },
  "Unilateral Seat Leg Curl": {
    image: "",
    category: "Machines",
    subcategory: "Knee Flexion (Isolation)",
    attachments: ["Ankle Pad", "Thigh Pad"],
    muscles: {
      strength: ["Hamstrings"],
      stability: [],
      mobility: [
        { muscle: "Knee", level: "Low", description: "Isolates knee flexion." }
      ]
    },
    techniquePoints: [
      "Sit in a seated leg curl machine and position one leg.",
      "Ensure the thigh pad is secure and the ankle pad is correctly placed.",
      "Curl your leg down and back, focusing on a strong hamstring contraction.",
      "Return slowly to the starting position.",
      "Working one leg at a time can help correct strength imbalances."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Qsc45sDpvbM",
    substitutions: ["Unilateral Lying Leg Curl", "Single-Leg Stability Ball Curl"]
  },
  "Wide-Grip Machine Pulldown": {
    image: "",
    category: "Machines",
    subcategory: "Pull Vertical",
    attachments: ["Bar", "Knee Pad"],
    muscles: {
      strength: ["Lats", "Teres Major"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder mobility to safely use a wide grip." }
      ]
    },
    techniquePoints: [
      "Grip the bar with an overhand grip significantly wider than your shoulders.",
      "Secure your legs under the pad.",
      "Lean back slightly and pull the bar down to your upper chest.",
      "Focus on driving your elbows down and out to the sides to maximize lat activation.",
      "Control the bar back to the top for a full stretch in the lats."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uAcQQ9jp2zk",
    substitutions: ["Wide-Grip Pull-Up", "Lat Pulldown (standard grip)"]
  },
  "Roman Chair Leg Raise": {
    image: "",
    category: "Machines",
    subcategory: "Core & Abdominals",
    attachments: ["Roman Chair"],
    muscles: {
      strength: ["Lower Abdominals", "Hip Flexors"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [{ muscle: "Hip", level: "Moderate", description: "Requires full hip flexion to raise legs to parallel." }]
    },
    techniquePoints: [
      "Adjust the Roman Chair to align your hip crease with the top of the chair edge.",
      "Secure your legs under the leg pads.",
      "Cross your arms over your chest or behind your head.",
      "Keeping your legs straight or knees slightly bent, raise your legs until they're parallel to the floor.",
      "Focus on using your abs to initiate the movement, not momentum.",
      "Lower your legs with control to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=d9j-vgbFReg",
    substitutions: ["Hanging Leg Raise", "Captain's Chair Leg Raise", "Ab Wheel Rollout"]
  }
};