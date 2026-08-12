import type { ExerciseInfo } from '../types';

export const sledAndStrongmanExercises: Record<string, ExerciseInfo> = {
  "Farmer's Walks": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Transporte Cargado",
    attachments: ["Farmer's Walk Handles", "Dumbbells", "Kettlebells"],
    muscles: {
      strength: ["Forearms (Grip)", "Trapezius", "Core", "Glutes"],
      stability: ["Entire body", "Shoulders", "Lats"],
      mobility: [
        { muscle: "Ankles", level: "Low", description: "Requires basic walking mechanics under load." }
      ]
    },
    techniquePoints: [
      "Pick up heavy dumbbells, kettlebells, or farmer's walk handles with a neutral grip.",
      "Walk for a set distance or time, keeping an upright, 'proud' posture.",
      "Brace your core and keep your shoulders pulled back and down.",
      "Take short, quick steps to maintain momentum and balance."
    ],
    youtubeLink: "",
    substitutions: ["Yoke Walk", "Sandbag and Barrel Lifts/Carries"]
  },
  "Sled Pull": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Tracción de Trineo",
    attachments: ["Sled", "Rope"],
    muscles: {
      strength: ["Lats", "Biceps", "Forearms (Grip)", "Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires a stable, hinged position." }
      ]
    },
    techniquePoints: [
      "Use a long rope to pull a sled towards you, hand over hand.",
      "Can be done seated (isolating upper body) or standing in a hinged position (engaging posterior chain).",
      "This is a great upper body and posterior chain conditioner and grip builder."
    ],
    youtubeLink: "",
    substitutions: ["Seated Cable Row", "Rope Climb"]
  },
  "Sled Push": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Empuje de Trineo",
    attachments: ["Sled"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves", "Core"],
      stability: ["Shoulders", "Chest"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Requires good dorsiflexion for a forward lean." }
      ]
    },
    techniquePoints: [
      "Load a sled and push it for a set distance.",
      "Keep your arms straight or bent, and maintain a strong forward lean.",
      "Drive with your legs, taking powerful steps.",
      "An excellent conditioning tool that's low-impact and concentric-focused."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PnMeRNVts9s",
    substitutions: ["Prowler Push", "Forward Drag"]
  },
  "Alligator/Crocodile Crawl": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Locomoción Cargada",
    attachments: ["Sled", "Harness"],
    muscles: {
      strength: ["Core", "Lats", "Shoulders", "Chest"],
      stability: ["Entire Body"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Requires repetitive hip flexion to drag the body and sled forward." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Involves rotational stability and movement." }
      ]
    },
    techniquePoints: [
      "Attach a harness to a sled and get into a low crawl or plank position.",
      "Crawl forward, moving opposite arm and leg together.",
      "Keep your hips low and your core tight to prevent swaying.",
      "This is a brutal full-body conditioning movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=o1q9OW-uwB0",
    substitutions: ["Bear Crawl", "Sled Drag (forward)"]
  },
  "Atlas Stones": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Levantamiento de Objetos",
    attachments: [],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae", "Lats", "Biceps"],
      stability: ["Core", "Entire Posterior Chain"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion to 'lap' the stone and powerful hip extension to lift it." },
        { muscle: "Thoracic Spine", level: "High", description: "Requires significant rounding and then extension under heavy load." }
      ]
    },
    techniquePoints: [
      "Start with a wide stance, straddling the stone.",
      "Bend at the hips and knees, wrapping your arms around the stone.",
      "Lift the stone to your lap by powerfully extending your hips.",
      "Re-grip the stone higher, hug it tight to your chest, and stand up.",
      "Finish by extending your hips explosively to load the stone onto a platform."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EILt1inCGeg",
    substitutions: ["Sandbag Lifts", "Heavy Zercher Squat"]
  },
  "Axle Bar Lifts": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Levantamiento de Barra Gruesa",
    attachments: ["Axle Bar"],
    muscles: {
      strength: ["Forearms (Grip)", "Lats", "Shoulders", "Legs (depending on the lift)"],
      stability: ["Core"],
      mobility: [
        { muscle: "Wrists", level: "Moderate", description: "The thick bar challenges wrist stability and requires a strong grip." },
        { muscle: "Shoulders", level: "Moderate", description: "A clean and press with an axle requires good shoulder mobility for the rack position." }
      ]
    },
    techniquePoints: [
      "Can be used for any barbell lift (deadlift, clean, press).",
      "The thick diameter (typically 2 inches) makes gripping extremely difficult.",
      "For cleans, a mixed grip is often used to get it off the floor before transitioning to a 'continental' clean.",
      "Builds immense grip strength and raw power."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WwXeCOe1aNk",
    substitutions: ["Barbell Lifts with Fat Gripz", "Plate Pinch"]
  },
  "Burpee to Sled Push": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Acondicionamiento Metabólico",
    attachments: ["Sled"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Chest", "Core", "Shoulders"],
      stability: ["Entire Body"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires hip flexion for the burpee and extension for the sled push." },
        { muscle: "Ankles", level: "Moderate", description: "Needs good dorsiflexion for the driving phase of the push." }
      ]
    },
    techniquePoints: [
      "Stand behind the sled.",
      "Perform a full burpee (chest to ground).",
      "As you stand up, immediately grab the sled handles and drive it forward for a set distance.",
      "This combines a full-body explosive movement with a concentric-heavy push for maximum conditioning."
    ],
    youtubeLink: "",
    substitutions: ["Burpees", "Sled Push"]
  },
  "Forward Drag": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Arrastre de Trineo",
    attachments: ["Sled", "Harness"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires powerful hip extension with a forward lean." },
        { muscle: "Ankles", level: "Moderate", description: "Good ankle dorsiflexion is needed for a strong forward drive." }
      ]
    },
    techniquePoints: [
      "Attach a harness to the sled and face away from it.",
      "Lean forward, keeping your arms straight.",
      "Drive with your legs, taking powerful steps to drag the sled behind you.",
      "Focus on a strong forward lean and powerful leg drive."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eOakNqRwNms",
    substitutions: ["Sled Push", "Reverse Drag"]
  },
  "High-Grip Sled Push": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Empuje de Trineo",
    attachments: ["Sled"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves", "Core"],
      stability: ["Shoulders", "Chest"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Requires good dorsiflexion for a forward lean." }
      ]
    },
    techniquePoints: [
      "Grip the sled handles high, with arms nearly straight.",
      "Maintain a strong forward lean, keeping your back flat.",
      "Drive the sled forward with powerful, piston-like leg action.",
      "The high grip emphasizes more of a horizontal push and speed."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PnMeRNVts9s",
    substitutions: ["Sled Push", "Low-Grip Sled Push"]
  },
  "Lateral Drag": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Arrastre de Trineo (Lateral)",
    attachments: ["Sled", "Harness"],
    muscles: {
      strength: ["Adductors", "Abductors (Gluteus Medius)", "Obliques"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires movement in the frontal plane (abduction and adduction)." }
      ]
    },
    techniquePoints: [
      "Attach a strap or harness to the sled.",
      "Stand sideways to the sled and hold the strap with both hands.",
      "Shuffle laterally, crossing one foot over the other, to drag the sled.",
      "Keep your torso braced and upright.",
      "This is excellent for building hip and core stability in the frontal plane."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jDy-pdUOcZs",
    substitutions: ["Band Lateral Walk", "Cable Hip Adduction/Abduction"]
  },
  "Log Press": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Press Vertical",
    attachments: ["Log"],
    muscles: {
      strength: ["Shoulders", "Triceps", "Upper Chest", "Lats"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulders", level: "High", description: "Requires excellent external rotation and thoracic extension for the rack position." },
        { muscle: "Wrists", level: "Moderate", description: "Must accommodate the neutral grip of the log." }
      ]
    },
    techniquePoints: [
      "Clean the log to your chest/shoulders, resting it on your upper abs and chest.",
      "Take a deep breath and brace your core.",
      "Dip down with your legs and explosively drive up, using leg drive to propel the log overhead.",
      "Lock out your arms and stabilize the log overhead before lowering."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=OrrPuoEZSHs",
    substitutions: ["Axle Bar Lifts (Clean and Press)", "Barbell Push Press"]
  },
  "Low-Grip Sled Push": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Empuje de Trineo",
    attachments: ["Sled"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves", "Core"],
      stability: ["Shoulders"],
      mobility: [
        { muscle: "Ankles", level: "High", description: "Requires significant dorsiflexion to maintain a very low body angle." },
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion for each step." }
      ]
    },
    techniquePoints: [
      "Grip the sled handles low, near the base.",
      "Get your body angle as low and horizontal as possible.",
      "This position maximizes the load on the quadriceps.",
      "Focus on taking short, powerful steps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oao5W39JrAg",
    substitutions: ["Sled Push", "High-Grip Sled Push"]
  },
  "Reverse Drag": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Arrastre de Trineo (Reverso)",
    attachments: ["Sled", "Harness", "Straps"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Requires repetitive dorsiflexion while walking backwards." }
      ]
    },
    techniquePoints: [
      "Attach straps to a sled and face it.",
      "Walk backward, pulling the sled with you.",
      "Stay low and use your legs to drive the movement, 'reaching' back with each step.",
      "This is a fantastic, low-impact way to build quadriceps strength and size."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=NaQt6IYoAgw",
    substitutions: ["Forward Drag", "Sled Push"]
  },
  "Rotational Drags": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Arrastre de Trineo (Rotacional)",
    attachments: ["Sled", "Straps"],
    muscles: {
      strength: ["Obliques", "Core", "Lats", "Hips"],
      stability: ["Entire Core"],
      mobility: [
        { muscle: "Thoracic Spine", level: "High", description: "Requires controlled rotation of the upper body against a stable lower body." }
      ]
    },
    techniquePoints: [
      "Attach a long strap to the sled.",
      "Stand sideways and pull the strap across your body, rotating through your torso.",
      "This can be done in a 'chopping' (high-to-low) or 'lifting' (low-to-high) motion.",
      "Excellent for building rotational power and core strength."
    ],
    youtubeLink: "",
    substitutions: ["Cable Wood Chopper", "Landmine Twists"]
  },
  "Sandbag and Barrel Lifts/Carries": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Transporte Cargado (Objetos Incómodos)",
    attachments: ["Sandbag", "Barrel"],
    muscles: {
      strength: ["Entire Body", "Grip", "Core"],
      stability: ["Entire Body"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires mobility to get under and lift the awkward object." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Needs to be stable under an unstable load." }
      ]
    },
    techniquePoints: [
      "Lift the object by hugging it, shouldering it, or carrying it in front.",
      "The unstable and awkward nature of the object provides a unique stability challenge.",
      "Brace your core and back throughout the lift and carry.",
      "Walk for a set distance or time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PNUY-zxRRbI",
    substitutions: ["Farmer's Walks", "Yoke Walk"]
  },
  "Sandbag Toss Over Bar": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Lanzamiento de Potencia",
    attachments: ["Sandbag"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae", "Trapezius"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires explosive triple extension (ankles, knees, hips)." }
      ]
    },
    techniquePoints: [
      "Stand facing a high bar or yoke with a sandbag between your feet.",
      "Hinge down and grab the sandbag.",
      "Explosively extend your hips, knees, and ankles, pulling the bag upward.",
      "Throw the bag up and over the bar.",
      "This movement builds explosive posterior chain power."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0JkKCK3lkVM",
    substitutions: ["Kettlebell Swings", "Power Clean"]
  },
  "Sled Drag": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Arrastre de Trineo",
    attachments: ["Sled", "Harness", "Straps"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Quadriceps", "Lats"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankles", level: "Low", description: "Basic walking mechanics are sufficient." }
      ]
    },
    techniquePoints: [
      "Can be done facing away (Forward Drag) or facing the sled (Reverse Drag).",
      "Attach a harness or straps and pull the sled.",
      "This is a concentric-only movement, making it great for recovery and building work capacity without muscle soreness."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=76vrRRCA3w8",
    substitutions: ["Sled Push", "Farmer's Walks"]
  },
  "Sled Fighting": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Acondicionamiento Metabólico",
    attachments: ["Sled", "Straps"],
    muscles: {
      strength: ["Lats", "Core", "Hips", "Legs"],
      stability: ["Entire Body"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Involves rapid changes in direction and body position." }
      ]
    },
    techniquePoints: [
      "A dynamic drill where you rapidly pull, push, and change direction with the sled.",
      "Often involves pulling the sled toward you, then quickly turning to push it back.",
      "Simulates the chaotic energy demands of combat sports.",
      "Excellent for building full-body power and conditioning."
    ],
    youtubeLink: "",
    substitutions: ["Battle Ropes", "Burpee to Sled Push"]
  },
  "Tire Flip": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Levantamiento de Objetos",
    attachments: ["Tire"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Erector Spinae", "Chest", "Shoulders"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion to get under the tire and explosive extension to lift it." },
        { muscle: "Ankles", level: "Moderate", description: "Needs to be stable during the powerful drive." }
      ]
    },
    techniquePoints: [
      "Get low, with your chest against the tire and hands underneath.",
      "Drive forward and up with your legs at a 45-degree angle.",
      "As the tire comes up, pop your knee under it and transition your hands to a pushing position.",
      "Finish by pushing the tire over.",
      "This is a full-body explosive power movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=aEL9f81F8Do",
    substitutions: ["Atlas Stones", "Power Clean"]
  },
  "Yoke Walk": {
    image: "",
    category: "Sled & Strongman",
    subcategory: "Transporte Cargado",
    attachments: ["Yoke"],
    muscles: {
      strength: ["Entire Body", "Core", "Trapezius", "Quadriceps", "Glutes"],
      stability: ["Entire Body", "Spinal Erectors"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Requires ankle stability under immense compressive load." }
      ]
    },
    techniquePoints: [
      "Set the yoke crossbar across your upper back/traps.",
      "Squat the yoke up to lift it off the pins.",
      "Take small, fast, choppy steps to move forward.",
      "Keep your head and chest up, and brace your core as hard as possible.",
      "This is one of the ultimate tests of total body strength and stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zRsFkNPxaMM",
    substitutions: ["Heavy Barbell Walk", "Farmer's Walks"]
  },
};
