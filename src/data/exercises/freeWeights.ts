import type { ExerciseInfo } from '../types';

export const freeWeightsExercises: { [key: string]: ExerciseInfo } = {
  "Incline DB Y-Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Shoulders (Lateral & Rear Delts)",
    attachments: ["Dumbbells", "Incline Bench"],
    muscles: {
      strength: ["Lateral Deltoids", "Lower Trapezius", "Rear Deltoids"],
      stability: ["Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Siéntate boca abajo en un banco inclinado a 30° apoyando el pecho.",
      "Eleva las mancuernas hacia los lados y arriba formando una 'Y' con el torso.",
      "Pausa de 1 segundo en la cima manteniendo tensión constante."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0j3e070E3gY",
    substitutions: ["Cable Y-Raise", "Standing DB Lateral Raise"]
  },
  "3\" Block Pull": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates", "Blocks"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae", "Lats", "Trapezius"],
      stability: ["Core", "Entire Posterior Chain"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires slightly more hip mobility than a higher block pull, but less than a deadlift from the floor." }
      ]
    },
    techniquePoints: [
      "Set up a barbell on blocks or plates so it is elevated 3 inches off the floor (roughly mid-shin).",
      "Perform a deadlift from this elevated position, maintaining a tight back and neutral spine.",
      "This variation shortens the range of motion, focusing on building strength from below the knee to lockout.",
      "Drive your hips through powerfully to finish the lift."
    ],
    youtubeLink: "https://youtu.be/qOH1ZqkW-hw",
    substitutions: ["5\" Block Pull", "Rack Pull (Below Knee)", "Deficit Deadlift"]
  },
  "45° Incline Barbell Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal Incline",
    attachments: ["Barbell", "Weight Plates", "Incline Bench"],
    muscles: {
      strength: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Scapular Stabilizers", "Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder external rotation and scapular retraction to maintain a safe pressing path." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Good T-spine extension allows for a stable base and better chest activation." }
      ]
    },
    techniquePoints: [
      "Set a bench to a 30-45 degree incline.",
      "Retract and depress your shoulder blades, creating a stable shelf.",
      "Lower the bar to your upper chest, keeping elbows tucked at a 45-75 degree angle.",
      "Press the bar up and slightly back over your clavicle.",
      "Keep your glutes on the bench and feet planted on the floor."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jPLdzuHckI8",
    substitutions: ["Dumbbell Incline Press", "Smith Machine Incline Press", "Low-to-High Cable Crossover"]
  },
  "5\" Block Pull": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates", "Blocks"],
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Lats", "Trapezius"],
      stability: ["Core", "Entire Posterior Chain"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Reduced hip mobility requirement compared to a conventional deadlift, focusing on lockout strength." }
      ]
    },
    techniquePoints: [
      "Set a barbell on blocks so it's 5 inches off the ground (just below the knee).",
      "Set up like a conventional deadlift with a flat back and engaged lats.",
      "Focus on driving the hips forward and squeezing the glutes powerfully to lock out.",
      "This variation is designed to overload the top portion of the deadlift."
    ],
    youtubeLink: "https://youtu.be/qOH1ZqkW-hw",
    substitutions: ["3\" Block Pull", "Rack Pull (Below Knee)", "Sumo Block Pull"]
  },
  "Anderson Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Variation",
    attachments: ["Barbell", "Weight Plates", "Power Rack"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires the mobility to get under the bar in a deep squat position with a neutral spine." },
        { muscle: "Ankles", level: "High", description: "Good dorsiflexion is crucial to maintain an upright torso from a dead stop." }
      ]
    },
    techniquePoints: [
      "Set the safety pins in a power rack at the bottom position of your squat.",
      "Start each rep from a dead stop, with the barbell resting on the pins.",
      "Get under the bar, create full-body tension, and drive up explosively.",
      "This variation builds concentric strength and power out of the hole by removing the stretch reflex."
    ],
    youtubeLink: "https://youtu.be/sdeQjm7avi8?t=91",
    substitutions: ["Pin Squat", "Pause Squat", "Box Squat"]
  },
  "Arm-Out Single-Arm DB Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Variation",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Rear Delts", "Rhomboids", "Mid Trapezius"],
      stability: ["Core", "Erector Spinae", "Obliques"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires horizontal abduction and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Support yourself on a bench with one knee and one hand.",
      "Perform a single-arm dumbbell row, but allow your elbow to flare out to about 45-90 degrees.",
      "Pull the dumbbell up and back in an arc, focusing on squeezing the shoulder blade.",
      "This variation targets more of the upper back and rear delts compared to a traditional lat-focused row."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EjMAo1XH82c",
    substitutions: ["Meadows Row", "Helms Row", "Face Pull"]
  },
  "Back Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Bilateral",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Hamstrings", "Adductors"],
      stability: ["Core", "Erector Spinae", "Upper Back"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Sufficient dorsiflexion is needed to keep heels down and allow knees to travel forward." },
        { muscle: "Hips", level: "Moderate", description: "Requires good flexion, external rotation, and adductor flexibility to reach depth." },
        { muscle: "Thoracic Spine", level: "Low", description: "Needs adequate extension to maintain an upright chest and stable shelf for the bar." }
      ]
    },
    techniquePoints: [
      "Place the bar on your upper back/traps (high-bar) or rear delts (low-bar), not your neck.",
      "Maintain an upright chest and keep your back straight by bracing your core.",
      "Initiate the movement by breaking at the hips and knees simultaneously.",
      "Descend until your hips are at or below your knees (break parallel).",
      "Keep your knees in line with your feet; don't let them cave inward.",
      "Drive up through your midfoot to return to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bEv6CCg2BC8&t",
    substitutions: ["Hack Squat", "Smith Machine Squat", "Leg Press", "Goblet Squat"]
  },
  "Barbell 45° Hyperextension": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Hyperextension Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion range of motion to get a stretch at the bottom." }
      ]
    },
    techniquePoints: [
      "Position yourself in a 45-degree hyperextension bench with the pad just below your hips.",
      "Hold a barbell securely against your upper back or across your chest.",
      "Hinge at the hips, keeping your back straight, to lower your torso.",
      "Extend your hips and squeeze your glutes to return to a straight line.",
      "For glute focus, slightly round your upper back; for erector focus, keep it straight."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=J46aPqFl0WE",
    substitutions: ["Dumbbell 45° Hyperextension", "Good Morning", "Reverse Hyper"]
  },
  "Barbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Lats", "Rotator Cuff", "Core", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good external rotation and scapular retraction to get into a safe, powerful position." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Good T-spine extension allows for a better arch, protecting the shoulders and shortening the range of motion." }
      ]
    },
    techniquePoints: [
      "Lie on the bench with feet flat on the floor, driving them down.",
      "Create a slight arch in your lower back while keeping glutes on the bench.",
      "Retract and depress your shoulder blades, squeezing them together.",
      "Lower the bar to your mid/lower chest, keeping elbows tucked at a 45-75 degree angle.",
      "Press the bar up and slightly back towards your face."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vcBig73ojpE",
    substitutions: ["Dumbbell Bench Press", "Machine Chest Press", "Smith Machine Bench Press"]
  },
  "Barbell Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Biceps Brachii", "Brachialis"],
      stability: ["Core", "Anterior Deltoids"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." },
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist supination strength and flexibility to hold the bar." }
      ]
    },
    techniquePoints: [
      "Grip a barbell with an underhand, shoulder-width grip.",
      "Stand tall with your elbows pinned to your sides and core engaged.",
      "Curl the bar up towards your shoulders, keeping your torso still and avoiding momentum.",
      "Squeeze your biceps at the top of the movement.",
      "Lower the bar slowly and with full control to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=i1YgFZB6alI&t",
    substitutions: ["Dumbbell Curl", "Cable Curl", "EZ Bar Curl"]
  },
  "Barbell Floor Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The limited range of motion reduces stress on the shoulder joint." }
      ]
    },
    techniquePoints: [
      "Lie on the floor with your knees bent and feet flat.",
      "Grip the barbell slightly wider than shoulder-width.",
      "Lower the bar until your triceps make full contact with the floor.",
      "Pause briefly, then press the bar explosively back to the start.",
      "This variation emphasizes triceps and lockout strength due to the partial range of motion."
    ],
    youtubeLink: "https://youtu.be/7qFp5khuoFA?t=239",
    substitutions: ["Dumbbell Floor Press", "Close-Grip Bench Press", "Pin Press"]
  },
  "Barbell Lunge": {
    image: "",
    category: "Free Weights",
    subcategory: "Lunge Unilateral",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Gluteus Medius", "Erector Spinae"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Requires dynamic hip flexibility, especially in the trailing leg." },
        { muscle: "Ankles", level: "Moderate", description: "Requires good dorsiflexion on the front leg." }
      ]
    },
    techniquePoints: [
      "Place a barbell on your back as you would for a squat.",
      "Step forward into a lunge, lowering your hips until both knees are bent at approximately 90 degrees.",
      "Keep your torso upright and core braced to maintain balance.",
      "Push off your front foot to return to the start, or walk forward into the next lunge.",
      "Ensure your front knee tracks over your foot and does not collapse inward."
    ],
    substitutions: ["Dumbbell Lunge", "DB Bulgarian Split Squat", "Smith Machine Lunge"]
  },
  "Barbell Overhead Press (OHP) / Military Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Erector Spinae", "Glutes", "Upper Back"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion and external rotation to press overhead safely." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Requires T-spine extension to clear the chin and maintain a stable overhead position." }
      ]
    },
    techniquePoints: [
      "Start with the barbell in a front rack position, grip slightly wider than shoulders.",
      "Keep core and glutes squeezed tight to create a stable base and prevent arching.",
      "Press the bar straight overhead, moving your head back slightly to clear the bar path.",
      "Finish with the bar directly over your mid-foot, arms locked, and head pushed through."
    ],
    youtubeLink: "https://youtu.be/_RlRDWO2jfg?t=121",
    substitutions: ["Seated DB Shoulder Press", "Push Press", "Machine Shoulder Press"]
  },
  "Barbell RDL": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "The primary goal is to stretch the hamstrings under load, requiring good flexibility." }
      ]
    },
    techniquePoints: [
      "Stand holding a barbell with a shoulder-width grip, starting from the top position.",
      "Keeping your back straight and a slight bend in your knees (soft knees), hinge at your hips.",
      "Lower the bar by pushing your hips back as far as possible, keeping the bar close to your shins.",
      "Descend until you feel a deep stretch in your hamstrings, typically to mid-shin level.",
      "Return to the start by driving your hips forward and squeezing your glutes."
    ],
    youtubeLink: "https://youtu.be/_oyxCn2iSjU?t=95",
    substitutions: ["DB RDL", "Good Morning", "Stiff-Leg Deadlift"]
  },
  "Barbell Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Erector Spinae", "Biceps"],
      stability: ["Core", "Hamstrings", "Glutes"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Requires hamstring flexibility to maintain a hinged position with a flat back." },
        { muscle: "Hips", level: "Moderate", description: "Requires good hip hinge mechanics." }
      ]
    },
    techniquePoints: [
      "Stand with feet shoulder-width apart, and grip a barbell with an overhand grip.",
      "Hinge at your hips, keeping your back straight, until your torso is nearly parallel to the floor.",
      "Pull the barbell towards your lower chest / upper abdomen.",
      "Focus on driving your elbows back and squeezing your shoulder blades together.",
      "Lower the bar under control, maintaining the hip hinge. Avoid rounding your lower back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2hbnw_wJ5-0",
    substitutions: ["Pendlay Row", "Single-Arm Dumbbell Row", "T-Bar Row"]
  },
  "Barbell Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Trapezius (Upper)"],
      stability: ["Forearms (Grip)", "Core"],
      mobility: [
        { muscle: "Scapula", level: "Low", description: "Requires basic scapular elevation." }
      ]
    },
    techniquePoints: [
      "Hold a heavy barbell in front of your thighs with an overhand grip.",
      "Stand tall with your chest up and shoulders back.",
      "Elevate your shoulders straight up towards your ears as high as possible.",
      "Do not roll your shoulders forward or backward. The movement is purely vertical.",
      "Squeeze at the top of the contraction for a moment, then lower slowly."
    ],
    substitutions: ["Dumbbell Shrug", "Trap Bar Shrug", "Machine Shrug"]
  },
  "Barbell Skull Crusher": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Barbell", "Flat Bench"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Shoulder", "Core"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Lie on a flat bench holding a barbell or EZ-bar with a close, overhand grip.",
      "Extend your arms over your chest, angled slightly back towards your head.",
      "Keeping your upper arms stationary, hinge only at the elbows to lower the bar towards your forehead.",
      "Extend your elbows to press the weight back up in an arc, squeezing your triceps.",
      "Avoid letting your elbows flare out to the sides."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=popGXI-qs98",
    substitutions: ["DB Skull Crusher", "Cable Skull Crusher", "Overhead Tricep Extension"]
  },
  "Bent Over Reverse Dumbbell Flye": {
    image: "",
    category: "Free Weights",
    subcategory: "Rear Delt Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Rear Delts", "Rhomboids", "Trapezius (Mid)"],
      stability: ["Erector Spinae", "Core", "Hamstrings"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Requires good hamstring flexibility to maintain a flat back in the hinged position." }
      ]
    },
    techniquePoints: [
      "Hold a pair of light dumbbells and hinge at the hips, keeping your back flat.",
      "Let your arms hang down with a slight bend in the elbows, palms facing each other.",
      "Raise your arms out to the side in a wide arc, squeezing your shoulder blades together.",
      "Focus on initiating the movement with your rear delts, not your lower back.",
      "Lower the dumbbells with control."
    ],
    youtubeLink: "https://youtu.be/qfc70k40318?t=311",
    substitutions: ["Reverse Pec Deck", "Reverse Cable Flye", "Face Pull"]
  },
  "Bottom-Half DB Flye": {
    image: "",
    category: "Free Weights",
    subcategory: "Chest Isolation",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Pectorals"],
      stability: ["Anterior Deltoids", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Focuses on the stretched portion of the flye, requiring good shoulder adduction mobility." }
      ]
    },
    techniquePoints: [
      "Lie on a flat bench with dumbbells pressed over your chest.",
      "Perform a dumbbell flye, but only execute the bottom half of the range of motion.",
      "Lower the dumbbells until you feel a deep stretch in your pecs.",
      "Raise them back up only to the halfway point, maintaining constant tension.",
      "This emphasizes the stretched position of the pectoral muscles."
    ],
    youtubeLink: "https://www.youtube.com/shorts/aCkk4znj9ow",
    substitutions: ["Bottom-Half Pec Deck", "Low-to-High Cable Crossover"]
  },
  "California Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Barbell", "Flat Bench"],
    muscles: {
      strength: ["Triceps", "Anterior Deltoids", "Pectorals"],
      stability: ["Shoulder", "Core"],
      mobility: [
        { muscle: "Elbow", level: "Moderate", description: "A hybrid movement requiring both elbow flexion and shoulder movement." }
      ]
    },
    techniquePoints: [
      "A hybrid between a Close-Grip Bench Press and a Skull Crusher.",
      "Lie on a bench holding a barbell with a close grip.",
      "Lower the bar towards your upper chest/neck, allowing your elbows to hinge forward.",
      "As you press up, extend the elbows and press the bar in an arc, similar to a skull crusher finish."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fCUeeaWBBSs",
    substitutions: ["JM Press", "Close-Grip Bench Press", "DB Skull Crusher"]
  },
  "Chest-Supported Dumbbell Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Rear Delts", "Biceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires basic shoulder extension and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Set an adjustable bench to a 30-45 degree incline.",
      "Lie face down on the bench with a dumbbell in each hand, arms extended.",
      "Pull the dumbbells up towards your chest, squeezing your shoulder blades together.",
      "The chest support removes lower back strain and prevents momentum, isolating the back muscles.",
      "Lower the weights with full control."
    ],
    youtubeLink: "https://youtu.be/bsx8PIGIuaI",
    substitutions: ["Chest-Supported T-Bar Row", "Pendlay Row", "Machine Row"]
  },
  "Close-Grip Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Lats", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good scapular stability and control." },
        { muscle: "Wrist", level: "Moderate", description: "A narrow grip can be stressful on the wrists." }
      ]
    },
    techniquePoints: [
      "Lie on a bench and grip the barbell with your hands inside shoulder-width (but not too narrow).",
      "Unrack the bar and lower it to your lower chest, keeping your elbows tucked close to your body.",
      "Press the bar back up, focusing on extending your elbows to engage the triceps.",
      "Avoid letting your elbows flare out."
    ],
    youtubeLink: "https://youtu.be/xGfUcV11x5g",
    substitutions: ["Close-Grip Dumbbell Bench Press", "Dip", "Machine Dip"]
  },
  "Close-Grip Dumbbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Triceps", "Pectorals"],
      stability: ["Rotator Cuff", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good scapular stability and independent control of each arm." }
      ]
    },
    techniquePoints: [
      "Lie on a flat bench holding dumbbells with a neutral grip (palms facing each other).",
      "Press the weights up over your chest, keeping them close together.",
      "Lower the dumbbells by your sides, keeping your elbows tucked close to your body.",
      "Press back to the starting position, focusing on the triceps contraction."
    ],
    substitutions: ["Close-Grip Bench Press", "Dip"]
  },
  "Close-Grip Incline Barbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal Incline",
    attachments: ["Barbell", "Weight Plates", "Incline Bench"],
    muscles: {
      strength: ["Triceps", "Upper Pectorals", "Anterior Deltoids"],
      stability: ["Scapular Stabilizers", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good scapular control and stability." }
      ]
    },
    techniquePoints: [
      "Set a bench to a 30-45 degree incline.",
      "Grip the barbell with your hands inside shoulder-width.",
      "Lower the bar to your upper chest, keeping elbows tucked in.",
      "Press the bar up, focusing on triceps extension.",
      "This variation targets the triceps and upper chest."
    ],
    youtubeLink: "https://youtu.be/0P4Ep0SBW5Q",
    substitutions: ["Incline Dumbbell Press (Neutral Grip)", "Landmine Press"]
  },
  "Concentration Bicep Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Core"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Sit on a bench and lean forward, bracing your working arm's triceps against your inner thigh.",
      "Let the dumbbell hang straight down.",
      "Curl the dumbbell up towards your chest, focusing on an intense peak contraction and supination (twisting the wrist).",
      "The bracing prevents any momentum and isolates the bicep.",
      "Lower with full control."
    ],
    youtubeLink: "https://youtu.be/kr4Ltm9EE",
    substitutions: ["Spider Curl", "DB Preacher Curl", "Concentration Cable Curl"]
  },
  "Constant-Tension Barbell Hip Thrust": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates", "Flat Bench", "Barbell Pad"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires hip extension." }
      ]
    },
    techniquePoints: [
      "Perform a standard Barbell Hip Thrust.",
      "Do not let the barbell touch the floor between reps.",
      "Reverse the movement just before the weights touch the ground to maintain continuous tension on the glutes.",
      "Focus on a powerful squeeze at the top and a controlled descent."
    ],
    youtubeLink: "https://www.youtube.com/shorts/lCsgN7zmqL0",
    substitutions: ["Pause Hip Thrust", "Banded Hip Thrust", "Glute Bridge"]
  },
  "DB Alternating Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion and supination." }
      ]
    },
    techniquePoints: [
      "Stand or sit holding dumbbells with a neutral or supinated grip.",
      "Curl one dumbbell up while keeping the other arm stationary.",
      "Lower the first dumbbell with control, and then curl the second one.",
      "Alternating arms allows for greater focus on each bicep and can help prevent using momentum."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1B1Ilnq33jA",
    substitutions: ["Dumbbell Curl", "Cable Single-Arm Curl", "Hammer Curl"]
  },
  "DB Bulgarian Split Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Unilateral",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Adductors"],
      mobility: [
        { muscle: "Hip Flexors", level: "High", description: "Provides a deep stretch for the hip flexor of the rear leg." },
        { muscle: "Ankle", level: "Moderate", description: "Requires good dorsiflexion in the front ankle to maintain balance and depth." }
      ]
    },
    techniquePoints: [
      "Stand a few feet in front of a bench, holding dumbbells at your sides.",
      "Place the top of your rear foot on the bench.",
      "Lower your hips straight down until your front thigh is parallel to the floor or lower.",
      "Keep your torso upright to target quads, or lean slightly forward to target glutes more.",
      "Drive through your front midfoot to return to the start."
    ],
    youtubeLink: "https://youtu.be/htDXu61MPio",
    substitutions: ["Dumbbell Lunge", "Single-Leg Leg Press", "Pistol Squat"]
  },
  "DB Cheat Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Trapezius (Upper)"],
      stability: ["Core", "Forearms (Grip)"],
      mobility: [
        { muscle: "Scapula", level: "Low", description: "Requires scapular elevation." }
      ]
    },
    techniquePoints: [
      "Hold very heavy dumbbells at your sides.",
      "Use a slight, controlled 'cheat' with your knees and hips to initiate the upward movement.",
      "This allows you to overload the traps with more weight than you could lift strictly.",
      "Focus on a powerful shrug at the top and a controlled negative."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=cJRVVxmytaM",
    substitutions: ["Barbell Shrug", "Kroc Row", "Power Shrug"]
  },
  "DB Concentration Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Core"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Sit on a bench, lean forward, and brace your arm against your inner thigh.",
      "Let the dumbbell hang down.",
      "Curl the dumbbell up, focusing on a strong mind-muscle connection and peak contraction.",
      "The bracing eliminates momentum, perfectly isolating the bicep.",
      "Perform smooth, controlled reps."
    ],
    substitutions: ["Concentration Cable Curl", "DB Preacher Curl", "Spider Curl"]
  },
  "DB French Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Triceps (especially Long Head)"],
      stability: ["Core", "Shoulder"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to get the arms overhead." },
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Can be done seated or standing, with one or two dumbbells.",
      "Hold the dumbbell(s) overhead with arms fully extended.",
      "Keeping your upper arms stationary and close to your head, lower the weight behind your head by hinging at the elbows.",
      "Extend the elbows to press the weight back to the starting position."
    ],
    substitutions: ["Overhead Cable Triceps Extension (Rope)", "DB Skull Crusher"]
  },
  "DB Incline Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Biceps (especially Long Head)"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "The incline position puts the shoulder in extension, creating a unique stretch on the bicep." }
      ]
    },
    techniquePoints: [
      "Set a bench to a 45-60 degree incline.",
      "Sit back and let your arms hang straight down, getting a stretch on the biceps.",
      "Keeping your upper arms stationary, curl the dumbbells up.",
      "Focus on supination (twisting the wrist) as you curl.",
      "Lower with control to maintain the stretch."
    ],
    youtubeLink: "https://youtu.be/3FAvFJ0Vtag",
    substitutions: ["Bayesian Cable Curl", "Behind The Back Cable Curl"]
  },
  "DB Lat Pullover": {
    image: "",
    category: "Free Weights",
    subcategory: "Pullover",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Lats", "Serratus Anterior", "Pectorals", "Triceps"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to achieve a deep stretch without arching the back excessively." }
      ]
    },
    techniquePoints: [
      "Lie across a bench with only your upper back supported, feet firmly on the floor.",
      "Hold one dumbbell with both hands over your chest.",
      "Keeping a slight bend in your elbows, lower the weight in an arc behind your head.",
      "Feel a deep stretch in your lats and chest.",
      "Pull the weight back over your chest using your lats, not just your arms."
    ],
    youtubeLink: "https://youtu.be/Jlw-Vtypr-Y",
    substitutions: ["Cable Lat Pullover", "Machine Pullover"]
  },
  "DB Preacher Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell", "Preacher Bench"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: [],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Sit at a preacher curl bench, resting the back of your upper arm on the pad.",
      "Hold a dumbbell with an underhand grip.",
      "Curl the weight up towards your shoulder, focusing on the peak contraction.",
      "The bench prevents any body English, ensuring strict isolation of the bicep.",
      "Lower the dumbbell all the way down to get a full stretch."
    ],
    substitutions: ["EZ-Bar Preacher Curl", "Machine Preacher Curl", "DB Scott Curl"]
  },
  "DB Prone Trap Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Upper Back Isolation",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Trapezius (Lower and Mid)", "Rear Delts"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Scapula", level: "Moderate", description: "Requires good scapular control, including retraction and depression." }
      ]
    },
    techniquePoints: [
      "Lie face down on a low incline bench holding light dumbbells.",
      "Let the arms hang straight down.",
      "Raise the dumbbells up and out in a 'Y' or 'T' shape, with thumbs pointing up.",
      "Focus on squeezing your shoulder blades together and down, activating the lower/mid traps.",
      "This is a corrective exercise, so use light weight and focus on perfect form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iTQHueywNG4",
    substitutions: ["Band Pull-Apart", "Face Pull"]
  },
  "DB RDL": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "The primary goal is to stretch the hamstrings under load." }
      ]
    },
    techniquePoints: [
      "Stand holding dumbbells in front of your thighs.",
      "Keeping your back straight and a slight bend in your knees, hinge at your hips.",
      "Lower the weights by pushing your hips back, keeping the dumbbells close to your legs.",
      "Descend until you feel a deep stretch in your hamstrings.",
      "Return to the start by driving your hips forward and squeezing your glutes."
    ],
    substitutions: ["Barbell RDL", "Good Morning", "Unilateral Dumbbell RDL"]
  },
  "DB Reverse Lunge": {
    image: "",
    category: "Free Weights",
    subcategory: "Lunge Unilateral",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Glutes", "Quadriceps"],
      stability: ["Core", "Gluteus Medius"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Requires good hip extension in the front leg." }
      ]
    },
    techniquePoints: [
      "Stand tall holding dumbbells at your sides.",
      "Step backward with one leg, lowering your hips until both knees are bent at 90 degrees.",
      "Keep your torso upright and your front shin relatively vertical.",
      "Push off your back foot and drive through the front heel to return to the start.",
      "The reverse lunge is often easier on the knees than a forward lunge."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9RNKFnd8Hbk",
    substitutions: ["Dumbbell Lunge", "DB Bulgarian Split Squat", "Barbell Lunge"]
  },
  "DB Scott Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: [],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Named after Larry Scott, this is a variation of the preacher curl.",
      "Use an incline bench, facing it and draping your arm over the top.",
      "The angled support isolates the bicep, similar to a preacher bench.",
      "Curl the dumbbell up with strict form, then lower for a full stretch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=H6JaunHXLok",
    substitutions: ["DB Preacher Curl", "Concentration Bicep Curl", "Spider Curl"]
  },
  "DB Seated Shoulder Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Dumbbell", "Upright Bench"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Upper Back", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder flexion and external rotation." }
      ]
    },
    techniquePoints: [
      "Sit on a bench with back support, holding dumbbells at shoulder height, palms facing forward.",
      "Keep your back pressed against the bench and core tight.",
      "Press the dumbbells overhead until your arms are fully extended.",
      "Lower the dumbbells with control back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Fu2LHVgt8U8",
    substitutions: ["Seated Barbell Overhead Press", "Machine Shoulder Press", "Arnold Press"]
  },
  "DB Single-Arm Shoulder Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core (especially Obliques)", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder flexion and external rotation." }
      ]
    },
    techniquePoints: [
      "Can be done seated or standing.",
      "Hold one dumbbell at shoulder height.",
      "Brace your core tightly to resist leaning to the side.",
      "Press the dumbbell straight overhead.",
      "The unilateral load provides a significant challenge to core stability."
    ],
    youtubeLink: "https://www.youtube.com/shorts/KLSYjgShghk",
    substitutions: ["Landmine Press", "DB Seated Shoulder Press"]
  },
  "DB Skull Crusher": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Shoulder", "Core"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Lie on a flat bench holding dumbbells with a neutral grip (palms facing each other).",
      "Extend your arms over your chest.",
      "Keeping your upper arms stationary, hinge at the elbows to lower the dumbbells towards the sides of your head.",
      "Extend your elbows to press the weight back up, squeezing your triceps."
    ],
    youtubeLink: "https://youtu.be/popGXI-qs98?t=336",
    substitutions: ["EZ-Bar Skull Crusher", "Overhead Cable Triceps Extension", "Cable Skull Crusher"]
  },
  "DB Standing Calf Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Calf Isolation",
    attachments: ["Dumbbell", "Step or Block"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires full range of motion from dorsiflexion (stretch) to plantarflexion (contraction)." }
      ]
    },
    techniquePoints: [
      "Stand on the edge of a step or block with the balls of your feet, heels hanging off.",
      "Hold dumbbells at your sides for resistance.",
      "Lower your heels as far as possible to get a deep stretch.",
      "Press up onto your toes as high as possible, squeezing your calves.",
      "Pause at the top and bottom of each rep."
    ],
    substitutions: ["Machine Standing Calf Raise", "Leg Press Calf Press", "Single-Leg DB Calf Raise"]
  },
  "DB Step-Up": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Unilateral",
    attachments: ["Dumbbell", "Box or Bench"],
    muscles: {
      strength: ["Glutes", "Quadriceps"],
      stability: ["Core", "Gluteus Medius"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion to step onto the surface." }
      ]
    },
    techniquePoints: [
      "Stand facing a bench or box while holding dumbbells.",
      "Place one foot firmly on the surface.",
      "Drive through the heel of your front foot to step up, bringing your other foot to meet it.",
      "Minimize pushing off with the back leg; let the front leg do all the work.",
      "Step down with control. Alternate legs or complete all reps on one side."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=NcBM4Pl0ZU8",
    substitutions: ["DB Bulgarian Split Squat", "Dumbbell Lunge", "Single-Leg Leg Press"]
  },
  "DB Sumo Stiff Leg Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Hamstrings", "Adductors", "Glutes", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires excellent hamstring and adductor flexibility." },
        { muscle: "Hips", level: "High", description: "Requires good hip external rotation for the sumo stance." }
      ]
    },
    techniquePoints: [
      "Take a wide (sumo) stance with toes pointed out.",
      "Hold one or two dumbbells in the center.",
      "Keeping your legs relatively straight ('stiff' but not locked), hinge at the hips and lower the weight.",
      "The sumo stance and stiff leg combination provides a unique stretch on the adductors and hamstrings."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=d-ZPV7JN89U",
    substitutions: ["Stiff Leg Sumo Deadlift (Barbell)", "Romanian Deadlift (RDL)"]
  },
  "DB Triceps Kickback": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Erector Spinae", "Shoulder"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires holding the shoulder in slight extension." }
      ]
    },
    techniquePoints: [
      "Hinge at the hips with a flat back, supporting your torso with one hand on a bench if needed.",
      "Hold a dumbbell with your upper arm parallel to the floor.",
      "Keeping your upper arm stationary, extend your elbow to 'kick back' the dumbbell until your arm is straight.",
      "Squeeze your tricep hard at the top of the movement.",
      "Lower the weight with control. Avoid using momentum."
    ],
    substitutions: ["Cable Triceps Kickback", "Overhead Tricep Extension", "Bench Dip"]
  },
  "DB Walking Lunge": {
    image: "",
    category: "Free Weights",
    subcategory: "Lunge Unilateral",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Adductors", "Gluteus Medius"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Requires dynamic hip flexibility." },
        { muscle: "Ankles", level: "Moderate", description: "Requires balance and ankle stability." }
      ]
    },
    techniquePoints: [
      "Hold dumbbells at your sides.",
      "Step forward into a lunge, lowering your hips until both knees are bent at a 90-degree angle.",
      "Push off your back foot and step forward with it into the next lunge, moving across the floor.",
      "Keep your torso upright and core engaged throughout the movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
    substitutions: ["Barbell Lunge", "DB Reverse Lunge", "DB Step-Up"]
  },
  "DB Wrist Curl (Extension)": {
    image: "",
    category: "Free Weights",
    subcategory: "Forearm Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Forearm Extensors"],
      stability: [],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "Requires wrist extension." }
      ]
    },
    techniquePoints: [
      "Sit and rest your forearm on your thigh or a bench, with your palm facing down.",
      "Hold a light dumbbell and allow your wrist to flex downward.",
      "Extend your wrist upward, lifting the dumbbell as high as possible.",
      "Focus on isolating the movement to the wrist joint."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kqjHELzVjxQ",
    substitutions: ["Reverse Grip Curl", "Wrist Roller"]
  },
  "DB Wrist Curl (Flexion)": {
    image: "",
    category: "Free Weights",
    subcategory: "Forearm Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Forearm Flexors"],
      stability: [],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "Requires wrist flexion." }
      ]
    },
    techniquePoints: [
      "Sit and rest your forearm on your thigh or a bench, with your palm facing up.",
      "Hold a dumbbell and allow your wrist to extend downward, getting a stretch.",
      "Flex your wrist upward, curling the dumbbell as high as possible.",
      "For a greater range of motion, allow the dumbbell to roll down to your fingertips at the bottom."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VGkF2NTtao0",
    substitutions: ["Wrist Roller", "Plate Pinch"]
  },
  "Decline Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal Decline",
    attachments: ["Barbell", "Weight Plates", "Decline Bench"],
    muscles: {
      strength: ["Lower Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "The decline angle is generally considered safer for the shoulder joint than flat or incline presses." }
      ]
    },
    techniquePoints: [
      "Lie on a decline bench, securing your feet under the pads.",
      "Grip the barbell slightly wider than shoulder-width.",
      "Lower the bar to your lower chest/sternum.",
      "Press the bar up and slightly forward.",
      "This variation targets the sternocostal head (lower portion) of the pectoral muscles."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iVh4B5bJ5OI",
    substitutions: ["Dip", "High-to-Low Cable Crossover", "Flat Dumbbell Press"]
  },
  "Dumbbell Raise Complex": {
    image: "",
    category: "Free Weights",
    subcategory: "Shoulder Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Rear Deltoids"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Involves movement in multiple planes (flexion, abduction, horizontal abduction)." }
      ]
    },
    techniquePoints: [
      "A sequence of shoulder raises performed back-to-back.",
      "A common complex is: perform one Lateral Raise, one Front Raise, and one Bent-Over Reverse Flye.",
      "This constitutes one repetition. Use light weight and focus on strict form.",
      "Excellent for hitting all three heads of the deltoid for a metabolic pump."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dm7jBQR3Jzg",
    substitutions: ["Upright Row", "Face Pull"]
  },
  "Eccentric-Accentuated Dumbbell Lateral Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Shoulder Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Core", "Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Focuses on controlled abduction." }
      ]
    },
    techniquePoints: [
      "Use a slightly heavier dumbbell than you would for a strict lateral raise.",
      "Use a controlled 'cheat' or body momentum to get the weight up to the top position.",
      "From the top, fight gravity and lower the dumbbell as slowly as possible (3-5 second negative).",
      "This method overloads the eccentric portion of the lift to stimulate hypertrophy."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=39r-PTpJLGI",
    substitutions: ["Dumbbell Lateral Raise", "Machine Lateral Raise"]
  },
  "Hack Squat Good Morning": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires excellent hamstring flexibility." },
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder mobility to hold the bar behind the back." }
      ]
    },
    techniquePoints: [
      "Hold a barbell behind your back at arm's length (similar to a behind-the-back shrug).",
      "Keeping a slight bend in your knees, perform a good morning by hinging at the hips.",
      "Lower your torso until it's nearly parallel to the floor, maintaining a flat back.",
      "The bar position creates a unique challenge for balance and posterior chain engagement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=FSS7VoDtZGM",
    substitutions: ["Good Morning", "Romanian Deadlift (RDL)"]
  },
  "Humble Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Rear Delts", "Rhomboids", "Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires significant flexibility to maintain a deeply hinged position." }
      ]
    },
    techniquePoints: [
      "Take a wide grip on a barbell and hinge at the hips so your torso is parallel to the floor.",
      "Pull the barbell towards your upper chest/neck, driving your elbows high and wide.",
      "This is a variation of the barbell row that heavily emphasizes the rear delts and upper back.",
      "Keep the movement strict and avoid using momentum."
    ],
    youtubeLink: "https://youtu.be/didU4ZwAkPI?t=142",
    substitutions: ["Helms Row", "Face Pull", "Bent Over Reverse Dumbbell Flye"]
  },
  "Inverse DB Zottman Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis", "Forearm Extensors", "Biceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires controlled pronation and supination under load." }
      ]
    },
    techniquePoints: [
      "This is the reverse of a standard Zottman Curl.",
      "Start by curling the dumbbells up with a pronated (overhand) grip - a Reverse Curl.",
      "At the top, rotate your wrists to a supinated (underhand) grip.",
      "Lower the dumbbells with the supinated grip.",
      "This emphasizes the forearms on the way up and the biceps on the way down."
    ],
    youtubeLink: "https://youtu.be/oU0Lb2dD_js",
    substitutions: ["Zottman Curl", "Hammer Curl", "Reverse Grip Curl"]
  },
  "Kroc Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Lats", "Upper Back", "Trapezius", "Forearms (Grip)"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "A high-volume, momentum-driven movement." }
      ]
    },
    techniquePoints: [
      "A specific style of single-arm dumbbell row using very heavy weight for high reps (15-30+).",
      "Use a controlled amount of body English and momentum to lift the weight.",
      "Focus on getting a full stretch at the bottom and a powerful contraction at the top.",
      "This is a brutal builder for back thickness, grip strength, and mental toughness."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3rB5euZ9lu0",
    substitutions: ["Single-Arm Dumbbell Row", "Meadows Row", "Barbell Row"]
  },
  "Larsen Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires excellent stability without leg drive." }
      ]
    },
    techniquePoints: [
      "Perform a barbell bench press, but with your legs straight out in front of you, either on the bench or in the air.",
      "This completely removes leg drive from the movement.",
      "It forces the upper body to do all the work and requires immense core stability.",
      "Use a lighter weight than your standard bench press."
    ],
    youtubeLink: "https://youtu.be/RQjPWrMMDqQ",
    substitutions: ["Flat-Back Bench Press", "Guillotine Press"]
  },
  "Meadows Incline DB Lateral Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Shoulder Isolation",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Isolates shoulder abduction." }
      ]
    },
    techniquePoints: [
      "Lie with your chest against a high-incline bench.",
      "Perform a single-arm lateral raise.",
      "The chest support prevents cheating and changes the angle of resistance, providing a unique stimulus.",
      "Focus on leading with the elbow and getting a strong contraction."
    ],
    substitutions: ["Lean-Away Lateral Raise", "Dumbbell Lateral Raise", "Cable Lateral Raise"]
  },
  "Neck Banded RDL": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires good hamstring flexibility for the hinge." }
      ]
    },
    techniquePoints: [
      "Place a resistance band around your neck and step on the other end with both feet.",
      "Perform a Romanian Deadlift (RDL) motion by hinging at the hips.",
      "The band provides accommodating resistance, increasing tension as you stand up.",
      "This is a great variation for teaching the hip hinge pattern."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-3-U8J8CRkc",
    substitutions: ["Good Morning", "Cable Pull-Through", "Kettlebell Swings"]
  },
  "One-Arm Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Rear Delts"],
      stability: ["Core", "Erector Spinae", "Obliques"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Place one knee and one hand on a flat bench for support.",
      "Keep your back flat and parallel to the floor.",
      "Pull a dumbbell up towards your hip, keeping your elbow close to your body.",
      "Squeeze your back muscles at the top and lower the weight with control.",
      "Avoid twisting your torso."
    ],
    youtubeLink: "https://youtu.be/djKXLt7kv7Q?t=115",
    substitutions: ["Barbell Row", "Cable Single-Arm Row", "Machine Row"]
  },
  "Overhead Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Barbell", "Weight Plates", "Dumbbell"],
    muscles: {
      strength: ["Trapezius (Upper and Mid)", "Serratus Anterior"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires the ability to maintain a stable, locked-out overhead position." }
      ]
    },
    techniquePoints: [
      "Hold a barbell or dumbbells locked out overhead with a wide grip.",
      "Without bending your elbows, elevate your shoulder blades as high as possible (shrug).",
      "Then, depress your shoulder blades as low as possible.",
      "This is an excellent exercise for scapular stability and overhead strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kbCGydlpnOs",
    substitutions: ["Scapular Pull-ups", "Wall Slide"]
  },
  "Pause Bridge": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Weight Plate", "Dumbbell"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires hip extension." }
      ]
    },
    techniquePoints: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Place a weight across your hips if desired.",
      "Drive your hips up towards the ceiling.",
      "Hold the top position for a specified count (e.g., 2-5 seconds), squeezing your glutes as hard as possible.",
      "Lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=b2-a3CFFlto",
    substitutions: ["Pause Hip Thrust", "Banded Glute Bridge", "Frog Pump"]
  },
  "Pause Dumbbell Hip Thrust": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires hip extension." }
      ]
    },
    techniquePoints: [
      "Perform a hip thrust with your upper back on a bench and a dumbbell across your hips.",
      "At the top of the movement, pause and hold the contraction for a specified count (e.g., 2-3 seconds).",
      "Squeeze your glutes as hard as possible during the pause.",
      "This increases time under tension and improves mind-muscle connection."
    ],
    youtubeLink: "https://www.youtube.com/shorts/YAUPwzGROts",
    substitutions: ["Pause Hip Thrust (Barbell)", "Pause Bridge", "Banded Hip Thrust"]
  },
  "Pin Good Morning": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates", "Power Rack"],
    muscles: {
      strength: ["Erector Spinae", "Hamstrings", "Glutes"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires flexibility to get into position under the bar." }
      ]
    },
    techniquePoints: [
      "Set the safety pins in a power rack at the bottom position of your good morning.",
      "Get under the bar, create tension, and lift the bar off the pins by extending your hips.",
      "This variation builds concentric strength from the bottom of the hinge, similar to an Anderson Squat."
    ],
    youtubeLink: "https://youtu.be/QV6UESLVbho",
    substitutions: ["Good Morning", "Reverse Hyper", "Anderson Squat"]
  },
  "Pin Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Variation",
    attachments: ["Barbell", "Weight Plates", "Power Rack"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires the ability to get under the bar in a deep, tight position." },
        { muscle: "Ankles", level: "High", description: "Good dorsiflexion is crucial." }
      ]
    },
    techniquePoints: [
      "Essentially the same as an Anderson Squat.",
      "Set the safety pins in a power rack at the bottom of your squat.",
      "Start each rep from a dead stop on the pins.",
      "This removes the stretch reflex and builds raw concentric strength from the most difficult position."
    ],
    youtubeLink: "https://youtu.be/fxitGcBp5DI",
    substitutions: ["Anderson Squat", "Pause Squat", "Box Squat"]
  },
  "Pinch Grip Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Forearm Isolation",
    attachments: ["Weight Plate"],
    muscles: {
      strength: ["Forearm Flexors", "Thumb Adductors (Pinch Grip)"],
      stability: [],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires elbow flexion." }
      ]
    },
    techniquePoints: [
      "Hold a weight plate by pinching it with your thumb and fingers.",
      "Perform a bicep curl motion.",
      "The primary challenge is maintaining the pinch grip, which intensely works the thumb and forearm muscles.",
      "Use a light plate and focus on not dropping it."
    ],
    youtubeLink: "https://youtu.be/PJi2kKn0tbs",
    substitutions: ["Plate Pinch Hold", "Farmer's Walks"]
  },
  "Reverse Grip EZ-Bar Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["EZ Bar", "Weight Plates"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis", "Forearm Extensors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "The EZ bar reduces strain compared to a straight bar in the pronated position." }
      ]
    },
    techniquePoints: [
      "Grip an EZ-bar with an overhand (pronated) grip.",
      "Keeping your elbows pinned to your sides, curl the bar up.",
      "This 'Reverse Curl' variation heavily targets the brachialis (underneath the bicep) and brachioradialis (top of the forearm).",
      "Lower the bar with full control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kPXvDlFNb3s",
    substitutions: ["Reverse-Grip DB Curl", "Hammer Curl", "Cable Rope Hammer Curl"]
  },
  "Reverse-Grip DB Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis"],
      stability: ["Core"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist stability in a pronated position." }
      ]
    },
    techniquePoints: [
      "Hold dumbbells with a pronated (overhand) grip.",
      "Keeping elbows pinned, curl the weights up.",
      "Focus on keeping your wrists straight or slightly flexed; do not let them extend.",
      "This is excellent for building the muscles on the top of the forearm."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=etJJujHLuXA",
    substitutions: ["Reverse Grip EZ-Bar Curl", "Hammer Curl"]
  },
  "Single Arm Dumbbell Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Rear Delts"],
      stability: ["Core", "Erector Spinae", "Obliques"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Place one knee and one hand on a flat bench for support.",
      "Keep your back flat and parallel to the floor.",
      "Pull a dumbbell up towards your hip, keeping your elbow close to your body.",
      "Squeeze your back muscles at the top and lower the weight with control.",
      "Avoid twisting your torso."
    ],
    substitutions: ["Barbell Row", "Cable Single-Arm Row", "Kroc Row"]
  },
  "Single-Leg DB Calf Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Calf Isolation",
    attachments: ["Dumbbell", "Step or Block"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Core", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires full range of motion from dorsiflexion to plantarflexion." }
      ]
    },
    techniquePoints: [
      "Stand on one foot on the edge of a step, holding a dumbbell in the same-side hand for resistance.",
      "Use your other hand for balance.",
      "Lower your heel for a deep stretch, then press up onto your toes as high as possible.",
      "Working one leg at a time allows for greater focus and can correct imbalances."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uhLjADhUxFM",
    substitutions: ["DB Standing Calf Raise", "Single-Leg Press Calf Press"]
  },
  "Snatch grip barbell shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Trapezius (Upper and Mid)", "Rhomboids"],
      stability: ["Core", "Forearms (Grip)"],
      mobility: [
        { muscle: "Scapula", level: "Moderate", description: "The wide grip allows for a greater range of scapular motion." }
      ]
    },
    techniquePoints: [
      "Hold a barbell with a very wide (snatch) grip.",
      "Perform a shrug, elevating your shoulders towards your ears.",
      "The wide grip changes the line of pull, engaging more of the mid-traps and rhomboids along with the upper traps.",
      "Focus on a powerful squeeze at the top."
    ],
    youtubeLink: "https://youtu.be/9B-5irFdB3c?t=6m28s",
    substitutions: ["Barbell Shrug", "Incline Shrug", "Face Pull"]
  },
  "Spider Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell", "EZ Bar", "Incline Bench"],
    muscles: {
      strength: ["Biceps (especially Short Head)"],
      stability: [],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Lie face down on an incline bench with your chest supported.",
      "Let your arms hang straight down.",
      "Curl the dumbbells or EZ-bar up, keeping your upper arms vertical.",
      "This position provides a strong peak contraction at the top of the movement."
    ],
    youtubeLink: "https://youtu.be/ebyOmAZUqzo?t=11m38s",
    substitutions: ["DB Preacher Curl", "Concentration Bicep Curl"]
  },
  "Stiff Leg Sumo Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Adductors", "Glutes", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires excellent hamstring and adductor flexibility." }
      ]
    },
    techniquePoints: [
      "Take a wide (sumo) stance and grip a barbell in the center.",
      "Keeping your legs relatively straight ('stiff'), hinge at the hips to lower the bar.",
      "Focus on pushing your hips back and feeling a deep stretch in the inner hamstrings and adductors.",
      "This is an advanced variation; use light weight to master the form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4ozqwlA7S8Y",
    substitutions: ["DB Sumo Stiff Leg Deadlift", "Romanian Deadlift (RDL)"]
  },
  "T-Bar Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["T-Bar Row Machine or Landmine Setup"],
    muscles: {
      strength: ["Trapezius (Upper and Mid)"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Scapula", level: "Low", description: "Requires scapular elevation." }
      ]
    },
    techniquePoints: [
      "Stand over a T-bar or landmine setup.",
      "Hinge slightly at the hips with a flat back.",
      "Perform a shrug by elevating your shoulders.",
      "The slight forward lean can help engage the mid-traps more effectively than a standard vertical shrug."
    ],
    youtubeLink: "https://youtu.be/C6sYjDFuq9I?t=132",
    substitutions: ["Barbell Shrug", "Incline Shrug"]
  },
  "Trap Bar Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Trap Bar", "Weight Plates"],
    muscles: {
      strength: ["Trapezius (Upper)"],
      stability: ["Core", "Forearms (Grip)"],
      mobility: [
        { muscle: "Scapula", level: "Low", description: "Requires scapular elevation." }
      ]
    },
    techniquePoints: [
      "Stand inside a loaded trap bar and lift it to a standing position.",
      "With arms straight, elevate your shoulders straight up towards your ears.",
      "The neutral grip is often more comfortable and allows you to handle very heavy weight.",
      "Squeeze at the top and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dAg1Kaevqj0",
    substitutions: ["Dumbbell Shrug", "Barbell Shrug"]
  }
  ,
  "Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae", "Lats", "Trapezius"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion and extension control." },
        { muscle: "Hamstrings", level: "Moderate", description: "Sufficient posterior chain flexibility to maintain a neutral spine." }
      ]
    },
    techniquePoints: [
      "Set up with mid-foot under the bar, shins close but not touching.",
      "Grip the bar just outside your legs and set your back neutral with lats tight.",
      "Push the floor away, driving through your mid-foot and keeping the bar close to your body.",
      "Lock out by extending hips and knees simultaneously; avoid over-leaning back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1ZXobu7JvvE",
    substitutions: ["Romanian Deadlift (RDL)", "Sumo Deadlift", "Trap Bar Deadlift"]
  },
  "Front Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Bilateral",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Ankles", level: "High", description: "Good dorsiflexion is needed to keep an upright torso." },
        { muscle: "Wrists/Shoulders", level: "Moderate", description: "Front rack position requires wrist/shoulder flexibility." }
      ]
    },
    techniquePoints: [
      "Rack the bar on your front delts (clean grip o brazos cruzados).",
      "Keep elbows high to maintain the shelf; brace and descend between the hips.",
      "Knees track over toes; drive up maintaining an upright torso."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2MEw1NlJZ8k",
    substitutions: ["High-Bar Back Squat", "Goblet Squat"]
  },
  "Goblet Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Bilateral",
    attachments: ["Dumbbell", "Kettlebell"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Helps reinforce squat depth and posture." }
      ]
    },
    techniquePoints: [
      "Sujeta una mancuerna o kettlebell al pecho (posición goblet).",
      "Desciende manteniendo el torso erguido y los codos dentro de las rodillas.",
      "Empuja el suelo y eleva caderas y pecho al mismo tiempo."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6xwC4V9VqFk",
    substitutions: ["Bodyweight Squat", "Front Squat"]
  },
  "Good Morning": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requiere buena flexibilidad para un hinge profundo sin redondear la espalda." }
      ]
    },
    techniquePoints: [
      "Con la barra en la espalda, realiza un hip hinge manteniendo la espalda neutra.",
      "Empuja las caderas hacia atrás hasta sentir un gran estiramiento en isquios.",
      "Vuelve extendiendo caderas y manteniendo el core firme."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vfW0h_kI9jM",
    substitutions: ["Barbell RDL", "Pin Good Morning", "Cable Pull-Through"]
  },
  "Hip Thrust": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates", "Flat Bench", "Barbell Pad"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Apoya la parte alta de la espalda en un banco y la barra sobre las caderas.",
      "Sube caderas hasta alinear rodillas, caderas y hombros; pausa y aprieta glúteos.",
      "Desciende controlado manteniendo la pelvis neutra."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
    substitutions: ["Pause Hip Thrust", "Constant-Tension Barbell Hip Thrust", "Glute Bridge"]
  },
  "T-Bar Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["T-Bar Row Machine or Landmine Setup"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Rear Delts", "Biceps"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Colócate sobre la máquina o landmine con el pecho soportado o torso inclinado.",
      "Tira del asa hacia la parte baja del pecho/abdomen, apretando escápulas.",
      "Controla la bajada manteniendo la columna neutra."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=QB2gLQZ5fJ8",
    substitutions: ["Barbell Row", "Chest-Supported Dumbbell Row"]
  },
  "Trap Bar Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Trap Bar", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Hamstrings", "Erector Spinae"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Párate dentro de la trap bar con pies a la anchura de caderas.",
      "Agarra las asas, crea tensión, y empuja el suelo manteniendo la espalda neutra.",
      "Bloquea con extensión simultánea de cadera y rodilla."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=F4bqzYQhRrE",
    substitutions: ["Deadlift", "Sumo Deadlift"]
  },
  "Sumo Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Adductors", "Glutes", "Hamstrings", "Erector Spinae"],
      stability: ["Core", "Upper Back"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requiere rotación externa de cadera y buena apertura para la postura sumo." }
      ]
    },
    techniquePoints: [
      "Toma una postura amplia con puntas hacia afuera y agarre estrecho dentro de las piernas.",
      "Empuja el suelo abriendo las rodillas y mantén la espalda neutra.",
      "Caderas y rodillas se extienden al unísono hasta bloquear."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GYIiZJmV3TE",
    substitutions: ["Deadlift", "Trap Bar Deadlift"]
  },
  "Stiff-Leg Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Gran estiramiento bajo carga a lo largo del ROM." }
      ]
    },
    techniquePoints: [
      "Desde la posición de pie, realiza un hinge con rodillas casi extendidas (suaves, no bloqueadas).",
      "Desciende la barra cerca de las piernas hasta sentir gran estiramiento.",
      "Sube extendiendo caderas y manteniendo espalda neutra."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1uDiW5--rAE",
    substitutions: ["Barbell RDL", "DB Sumo Stiff Leg Deadlift"]
  },
  "Dumbbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Rotator Cuff", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Acostado en banco plano, empuja las mancuernas hacia arriba con trayectoria controlada.",
      "Baja con codos a ~45-75° y escápulas retraídas/deprimidas.",
      "Evita rebotar; controla la fase excéntrica."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VmB1G1K7v94",
    substitutions: ["Barbell Bench Press", "Machine Chest Press"]
  },
  "Dumbbell Incline Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal Incline",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Rotator Cuff", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Con banco a 30-45°, presiona mancuernas sobre línea del pecho superior.",
      "Mantén escápulas estables y controla la bajada simétrica.",
      "Evita chocar mancuernas arriba; busca línea vertical estable."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
    substitutions: ["45° Incline Barbell Press", "Low-to-High Cable Crossover"]
  },
  "Dumbbell Flye": {
    image: "",
    category: "Free Weights",
    subcategory: "Chest Isolation",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Pectorals"],
      stability: ["Anterior Deltoids", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Gran arco de abducción horizontal bajo control." }
      ]
    },
    techniquePoints: [
      "Con ligera flexión de codos, abre en arco hasta un estiramiento cómodo.",
      "Evita sobre-extender; prioriza control y tensión continua.",
      "Cierra en arco apretando pectorales."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eozdVDA78K0",
    substitutions: ["Bottom-Half DB Flye", "Cable Flye"]
  },
  "Dumbbell Floor Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Acostado en el suelo, baja hasta tocar suavemente tríceps y presiona de nuevo.",
      "Rango parcial que reduce estrés de hombro y enfatiza bloqueo.",
      "Mantén muñecas neutras y trayectoria estable."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4443SxB8gTE",
    substitutions: ["Barbell Floor Press", "Close-Grip Bench Press"]
  },
  "EZ Bar Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["EZ Bar", "Weight Plates"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Sujeta la barra EZ en agarre supino cómodo y flexiona codos sin balanceo.",
      "Contrae fuerte en la cima y desciende controlado.",
      "Evita extender la espalda para ayudar el movimiento."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kwG2ipFRgfo",
    substitutions: ["Dumbbell Curl", "Reverse Grip EZ-Bar Curl"]
  },
  "EZ Bar Pronated Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["EZ Bar", "Weight Plates"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis", "Forearm Extensors"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Con agarre prono en barra EZ, realiza curl resistiendo extensión de muñeca.",
      "Mantén codos pegados y muñeca neutra o levemente flexionada.",
      "Desciende lento para mayor estímulo en antebrazo."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2r0Ck2a1PDM",
    substitutions: ["Reverse-Grip DB Curl", "Reverse Grip EZ-Bar Curl"]
  },
  "EZ-Bar Preacher Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["EZ Bar", "Preacher Bench"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "Con el brazo apoyado en el banco Scott, realiza curl estricto con barra EZ.",
      "Extiende por completo (sin hiperextender) para estiramiento y sube contrayendo.",
      "Evita despegar el brazo del soporte."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Z8L_oqn2j1g",
    substitutions: ["DB Preacher Curl", "Spider Curl"]
  },
  "EZ-Bar Skull Crusher": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["EZ Bar", "Flat Bench"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Shoulder", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Con barra EZ, baja detrás de la cabeza o hacia la frente manteniendo brazos fijos.",
      "Extiende codos apretando tríceps; controla el arco del movimiento.",
      "Evita abrir en exceso los codos."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=d_KZxkY_0cM",
    substitutions: ["Barbell Skull Crusher", "DB Skull Crusher"]
  },
  "Push Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical (Dynamic)",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requiere extensión y estabilidad en alto rango de flexión." }
      ]
    },
    techniquePoints: [
      "Con la barra en rack frontal, realiza un pequeño dip y drive con las piernas.",
      "Transfiere potencia a la barra y termina bloqueando sobre la cabeza.",
      "Mantén el core firme para evitar hiperextensión lumbar."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iaBVSJm78ko",
    substitutions: ["Barbell Overhead Press (OHP) / Military Press", "Landmine Press"]
  },
  "Reverse-Grip Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Upper Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Usa agarre supino en banco plano, baja a la parte alta del pecho.",
      "Mantén codos algo pegados y trayectoria estable.",
      "Suele enfatizar porción clavicular del pectoral."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GP9U_lQH3W8",
    substitutions: ["Close-Grip Bench Press", "45° Incline Barbell Press"]
  },
  "Seated Barbell Overhead Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Barbell", "Weight Plates", "Upright Bench"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Sentado con respaldo, presiona la barra verticalmente manteniendo columna neutra.",
      "Evita arquear en exceso; aprieta glúteos y abdomen.",
      "Bloquea arriba con cabeza entre brazos."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1FWDde2IEPg",
    substitutions: ["DB Seated Shoulder Press", "Barbell Overhead Press (OHP) / Military Press"]
  },
  "Kettlebell Swings": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain (Dynamic)",
    attachments: ["Kettlebell"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Hinge de cadera potente para impulsar la pesa rusa hasta ~pecho (estilo ruso).",
      "Brazos como ganchos, el impulso nace de caderas; evita sentadilla profunda.",
      "Mantén columna neutra y ritmo explosivo/controlado."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=YSx5FRCB_2U",
    substitutions: ["Neck Banded RDL", "Cable Pull-Through"]
  },
  "Farmer's Walks": {
    image: "",
    category: "Free Weights",
    subcategory: "Carry & Grip",
    attachments: ["Dumbbell", "Trap Bar", "Farmer Handles"],
    muscles: {
      strength: ["Forearms (Grip)", "Trapezius", "Glutes", "Quadriceps"],
      stability: ["Core", "Erector Spinae", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Sujeta cargas pesadas a ambos lados, postura alta y core firme.",
      "Camina con pasos cortos y controlados sin balanceo excesivo.",
      "Respira con control manteniendo caja torácica apilada sobre pelvis."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RAqf6Kp4B8g",
    substitutions: ["Trap Bar Deadlift (Hold)", "Plate Pinch Hold"]
  },
  "Unilateral Dumbbell RDL": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Unilateral",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Ankle Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "En apoyo unipodal, realiza hinge manteniendo cadera cuadrada y espalda neutra.",
      "Alcanza atrás con la pierna libre para equilibrar, baja la mancuerna cerca de la tibia.",
      "Vuelve extendiendo cadera sin perder balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6b7xVw6r7lE",
    substitutions: ["DB RDL", "Single-Leg Hip Thrust"]
  },
  "Incline Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Trapezius (Mid/Upper)", "Rhomboids"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Boca abajo en banco inclinado, eleva y deprime escápulas con mancuernas colgando.",
      "Evita flexionar codos; movimiento aislado de escápula.",
      "Pausa arriba para máxima contracción."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=c3O0b7wnf6M",
    substitutions: ["Snatch grip barbell shrug", "T-Bar Shrug"]
  },
  "Standing Arnold Dumbbell Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Deltoids"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Inicia con palmas hacia ti al nivel del pecho; rota y presiona por encima de la cabeza.",
      "Mantén core activo para evitar extensión lumbar.",
      "Controla la rotación inversa al bajar."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vj2w851ZHRM",
    substitutions: ["DB Seated Shoulder Press", "Barbell Overhead Press (OHP) / Military Press"]
  },
  "Romanian Deadlift (RDL)": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Objetivo principal: estirar isquios bajo carga con control." }
      ]
    },
    techniquePoints: [
      "Desde de pie, hinge con rodillas suaves y barra pegada al cuerpo.",
      "Desciende a media espinilla o cuando pierdas neutralidad; sube extendiendo cadera.",
      "Mantén dorsales activos para fijar la barra."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2SHsk9AzdjA",
    substitutions: ["Barbell RDL", "Stiff-Leg Deadlift"]
  },
  "Dumbbell High Step-Up": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Unilateral",
    attachments: ["Dumbbell", "Box or Bench"],
    muscles: {
      strength: ["Glutes", "Quadriceps"],
      stability: ["Core", "Gluteus Medius"],
      mobility: []
    },
    techniquePoints: [
      "Usa una caja alta (por encima de rodilla). Apoya todo el pie y eleva el cuerpo sin impulso.",
      "Evita empujar con la pierna de atrás; controla la bajada.",
      "Mantén rodilla alineada con el pie."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RVxYy3-9j0g",
    substitutions: ["DB Step-Up", "Deep Step-ups"]
  },
  "Dumbbell Lunge": {
    image: "",
    category: "Free Weights",
    subcategory: "Lunge Unilateral",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius"],
      mobility: []
    },
    techniquePoints: [
      "Sujeta mancuernas a los lados, da un paso al frente y desciende a 90°/90°.",
      "Empuja con el pie delantero para volver; mantén torso erguido.",
      "Alterna piernas o realiza todas las repeticiones de un lado."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
    substitutions: ["DB Reverse Lunge", "DB Walking Lunge", "Barbell Lunge"]
  }
  ,
  "Cuffed Behind-The-Back Lateral Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Lateral Raise Isolation",
    attachments: ["Cuff Bands"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Rotator Cuff", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Con brazalete (cuff) atado detrás del cuerpo, realiza elevaciones laterales.",
      "Mantén ligera flexión de codos y trayectoria en arco controlado.",
      "Evita impulso y eleva hasta ~altura del hombro."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=AC3qtAWyQ5I",
    substitutions: ["Dumbbell Lateral Raise", "Lean-Away Lateral Raise"]
  },
  "Dumbbell 45° Hyperextension": {
    image: "",
    category: "Free Weights",
    subcategory: "Back Extension",
    attachments: ["Dumbbell", "45° Hyperextension Bench"],
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Sostén una mancuerna al pecho y extiende la columna desde un banco 45°.",
      "Evita hiperextender; busca línea neutra al final.",
      "Controla la bajada manteniendo tensión."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=H3jWVJx2b7E",
    substitutions: ["Barbell 45° Hyperextension", "Back Extension"]
  },
  "Dumbbell Bent Over Rear Delt Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Rear Delt Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids"],
      stability: ["Scapular Stabilizers", "Core"],
      mobility: []
    },
    techniquePoints: [
      "En bisagra de cadera, abre los brazos con mancuernas para aislar deltoide posterior.",
      "Mantén espalda neutra y codos ligeramente flexionados.",
      "Pausa arriba y baja controlado."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=nxW8bS2Ho1s",
    substitutions: ["Bent Over Reverse Dumbbell Flye", "Face Pull"]
  },
  "Dumbbell Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Con mancuernas a los lados, flexiona codos sin balancear el torso.",
      "Supina ligeramente al subir para mayor activación del bíceps.",
      "Desciende lento y controlado."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
    substitutions: ["DB Alternating Curl", "Concentration Bicep Curl"]
  },
  "Dumbbell Lat Pullover": {
    image: "",
    category: "Free Weights",
    subcategory: "Lat Isolation",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Lats", "Pectorals"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Acostado transversal o longitudinal al banco, lleva la mancuerna detrás de la cabeza.",
      "Mantén codos casi extendidos y regresa contrayendo dorsales/pectoral.",
      "Evita arquear en exceso la zona lumbar."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2-LAMcpzODU",
    substitutions: ["DB Lat Pullover", "Cable Pullover"]
  },
  "Dumbbell Lateral Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Lateral Raise Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Rotator Cuff", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Eleva mancuernas a los lados con ligera flexión de codos y sin impulso.",
      "Detente a la altura del hombro; pausa y baja controlado.",
      "Inclina levemente el torso si necesitas rango inicial."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
    substitutions: ["Eccentric-Accentuated Dumbbell Lateral Raise", "Lean-Away Lateral Raise"]
  },
  "Dumbbell Shrug": {
    image: "",
    category: "Free Weights",
    subcategory: "Trap Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Trapezius (Upper)"],
      stability: ["Forearms (Grip)", "Core"],
      mobility: []
    },
    techniquePoints: [
      "Con mancuernas a los lados, eleva hombros verticalmente.",
      "Evita rodar los hombros; busca patrón puro de elevación.",
      "Pausa arriba y baja controlado."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=o-vonQZxLrM",
    substitutions: ["Barbell Shrug", "Incline Shrug"]
  },
  "Flat-Back Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Press banca con espalda plana (sin arco marcado), pies firmes.",
      "Baja a la línea media del pecho con codos a ~45-75°.",
      "Presiona de vuelta con path estable."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
    substitutions: ["Larsen Press", "Barbell Bench Press"]
  },
  "Flat-Back Dumbbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Versión con mancuernas manteniendo espalda plana (sin arco).",
      "Controla la bajada y evita choque de mancuernas arriba.",
      "Trayectoria estable sobre el pecho."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VmB1G1K7v94",
    substitutions: ["Dumbbell Bench Press", "Larsen Press"]
  },
  "Floor Skull Crusher": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Isolation",
    attachments: ["Barbell", "EZ Bar", "Dumbbell"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Shoulder", "Core"],
      mobility: []
    },
    techniquePoints: [
      "En el suelo, baja la carga hacia la frente/atrás de la cabeza y extiende codos.",
      "Rango limitado del suelo reduce estrés de hombro.",
      "Controla el movimiento de codo sin abrir de más."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=b9XBY9_z2JY",
    substitutions: ["Barbell Skull Crusher", "EZ-Bar Skull Crusher", "DB Skull Crusher"]
  },
  "Hammer Curl": {
    image: "",
    category: "Free Weights",
    subcategory: "Curl Bicep",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis", "Biceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Con agarre neutro (palmas mirando) flexiona codos sin balanceo.",
      "Aprieta en la cima; baja lento manteniendo neutralidad de muñeca.",
      "Evita compensar con espalda."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zC3nLlEvin4",
    substitutions: ["DB Alternating Curl", "Inverse DB Zottman Curl"]
  },
  "Helms Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Barbell", "Incline Bench"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Mid Trapezius", "Rear Delts"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Apoya el pecho en banco inclinado y rema con barra desde posición estricta.",
      "Tira hacia el abdomen bajo manteniendo escápulas estables.",
      "Evita impulso; controla la excéntrica."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1YQ8Gm0UFeA",
    substitutions: ["Chest-Supported Dumbbell Row", "Pendlay Row"]
  },
  "Incline Chest-Supported DB Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal",
    attachments: ["Dumbbell", "Incline Bench"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Rear Delts"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Boca abajo en banco inclinado, rema mancuernas hacia el costado/abdomen.",
      "Mantén cuello neutro y escápulas retraídas.",
      "Evita halar con impulso."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=TFCGL4dQMxw",
    substitutions: ["Chest-Supported Dumbbell Row", "Single Arm Dumbbell Row"]
  },
  "JM Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Tricep Compound",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Triceps", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Desde banco plano, baja la barra hacia la parte alta del pecho con codos hacia adelante y extiende.",
      "Movimiento híbrido entre press y skull crusher para tríceps pesado.",
      "Controla el recorrido y evita desestabilizar hombros."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0AUGkch3tzc",
    substitutions: ["Close-Grip Bench Press", "EZ-Bar Skull Crusher"]
  },
  "Lean-Away Lateral Raise": {
    image: "",
    category: "Free Weights",
    subcategory: "Lateral Raise Isolation",
    attachments: ["Dumbbell"],
    muscles: {
      strength: ["Lateral Deltoids"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Sujétate de un soporte y inclina el cuerpo alejándote para iniciar con mayor tensión.",
      "Eleva el brazo externo en arco hasta el nivel del hombro.",
      "Evita impulso excesivo."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=411eA3c3_x8",
    substitutions: ["Dumbbell Lateral Raise", "Cuffed Behind-The-Back Lateral Raise"]
  },
  "Meadows Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal (Landmine)",
    attachments: ["Barbell (Landmine)", "Weight Plates", "Landmine Handle (optional)"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Mid Trapezius", "Rear Delts"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "En landmine, sujeta el extremo de la barra con una mano y rema hacia la cadera.",
      "Mantén torso estable y codo pegado al cuerpo.",
      "Controla la bajada con escápula protractando levemente."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6swIESmGxZc",
    substitutions: ["One-Arm Row", "Arm-Out Single-Arm DB Row"]
  },
  "Overhead Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Overhead",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Shoulder", "Upper Back"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Elevada demanda de movilidad de hombro y estabilidad escapular." },
        { muscle: "Ankles", level: "High", description: "Buena dorsiflexión para mantener torso erguido en sentadilla profunda." }
      ]
    },
    techniquePoints: [
      "Con la barra por encima de la cabeza en agarre ancho, desciende en sentadilla profunda.",
      "Activa core y aprieta la barra hacia arriba para estabilidad.",
      "Mantén rodillas alineadas con pies y talones firmes."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9Y6N0LQ3H4E",
    substitutions: ["Front Squat", "Snatch-Grip Deadlift"]
  },
  "Pause Barbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal (Paused)",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Baja la barra al pecho, pausa 1-2 s con control y presiona de nuevo.",
      "Elimina reflejo de estiramiento y refuerza salida desde el pecho.",
      "Mantén path vertical estable."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=G6e-3uBQGDE",
    substitutions: ["Pin Press", "Barbell Bench Press"]
  },
  "Pause Dumbbell Bench Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal (Paused)",
    attachments: ["Dumbbell", "Flat Bench"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Pausa 1-2 s con mancuernas sobre el pecho antes de presionar.",
      "Control estricto de escápulas y trayectoria.",
      "Evita desestabilizar al iniciar desde pausa."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=tF3bQauy3VQ",
    substitutions: ["Dumbbell Bench Press", "Pin Press"]
  },
  "Pause High-Bar Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Bilateral (Paused)",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Desciende en sentadilla high-bar, pausa 1-3 s en el fondo y sube.",
      "Mantén torso erguido y tensión en core/hombros.",
      "Evita colapsar en la cadera al salir de la pausa."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uJb9ilNfW_0",
    substitutions: ["Pin Squat", "Front Squat"]
  },
  "Pause Hip Thrust": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain (Paused)",
    attachments: ["Barbell", "Weight Plates", "Flat Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Pausa 1-2 s en la cima del hip thrust antes de bajar.",
      "Mantén pelvis neutra y caja torácica apilada.",
      "Prioriza contracción máxima de glúteos."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LM8XHLYJoYs",
    substitutions: ["Pause Dumbbell Hip Thrust", "Hip Thrust"]
  },
  "Pause Sumo Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation (Paused)",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Adductors", "Glutes", "Hamstrings"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Pausa 1 s al despegar del suelo o por debajo de la rodilla y luego completa.",
      "Mantén rodillas afuera y dorsales activos.",
      "Refuerza posiciones específicas del despegue."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5oKMCJSmC9Y",
    substitutions: ["Sumo Deadlift", "3\" Block Pull"]
  },
  "Pendlay Deficit Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal (From Floor)",
    attachments: ["Barbell", "Weight Plates", "Plates/Blocks for Deficit"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Mid Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Desde bisagra pronunciada con barra en el suelo (y déficit), rema explosivo a abdomen.",
      "Reinicia cada repetición desde el suelo para máxima potencia.",
      "Mantén espalda neutra en todo momento."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0ySxT2lFg0o",
    substitutions: ["Pendlay Row", "Barbell Row"]
  },
  "Pendlay Row": {
    image: "",
    category: "Free Weights",
    subcategory: "Row Horizontal (From Floor)",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Mid Trapezius"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Barra en el suelo en cada repetición; rema explosivo hasta el abdomen bajo.",
      "Tronco paralelo al suelo, espalda neutra y dorsales activos.",
      "Controla la bajada y resetea."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8Oq2x2v7cOU",
    substitutions: ["Barbell Row", "Helms Row"]
  },
  "Pin Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Horizontal (Partial)",
    attachments: ["Barbell", "Weight Plates", "Power Rack"],
    muscles: {
      strength: ["Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Configura pines a altura deseada y presiona desde parada muerta.",
      "Enfoca puntos débiles del press con rango parcial.",
      "Evita rebotar en pines; inicia desde estático."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0SohZP2mweo",
    substitutions: ["Pause Barbell Bench Press", "Board Press"]
  },
  "Seated DB Shoulder Press": {
    image: "",
    category: "Free Weights",
    subcategory: "Press Vertical",
    attachments: ["Dumbbell", "Upright Bench"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff"],
      mobility: []
    },
    techniquePoints: [
      "Sentado con respaldo, presiona mancuernas por encima de la cabeza.",
      "Mantén columna neutra y evita arqueo lumbar.",
      "Baja controlado hasta debajo de orejas."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=B-aVuyhvLHU",
    substitutions: ["DB Seated Shoulder Press", "Standing Arnold Dumbbell Press"]
  },
  "Snatch-Grip Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Upper Back"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Agarre ancho demanda movilidad y estabilidad en cintura escapular." }
      ]
    },
    techniquePoints: [
      "Con agarre ancho (snatch), despega la barra del suelo manteniendo dorsales activos.",
      "Barra pegada al cuerpo y path vertical estable.",
      "Bloquea con caderas y rodillas al unísono."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EoKhG-5F33g",
    substitutions: ["Romanian Deadlift (RDL)", "Deadlift"]
  },
  "Snatch-Grip Romanian Deadlift": {
    image: "",
    category: "Free Weights",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Upper Back"],
      stability: ["Core", "Lats"],
      mobility: []
    },
    techniquePoints: [
      "RDL con agarre ancho; enfatiza dorsales altos y cadena posterior.",
      "Mantén barra pegada y espalda neutra.",
      "Controla la excéntrica a media espinilla."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7_lm2e1U1Cw",
    substitutions: ["Romanian Deadlift (RDL)", "Stiff-Leg Deadlift"]
  },
  "Sumo Block Pull": {
    image: "",
    category: "Free Weights",
    subcategory: "Deadlift Variation",
    attachments: ["Barbell", "Weight Plates", "Blocks"],
    muscles: {
      strength: ["Adductors", "Glutes", "Hamstrings"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Deadlift sumo desde bloques para reducir ROM y sobrecargar bloqueo.",
      "Empuja el suelo abriendo rodillas; espalda neutra.",
      "Cierra con extensión de cadera/rodilla."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=rvA7oIYtSFE",
    substitutions: ["5\" Block Pull", "Sumo Deadlift"]
  },
  "Sumo Box Squat": {
    image: "",
    category: "Free Weights",
    subcategory: "Squat Variation",
    attachments: ["Barbell", "Weight Plates", "Box"],
    muscles: {
      strength: ["Adductors", "Glutes", "Quadriceps"],
      stability: ["Core", "Upper Back"],
      mobility: []
    },
    techniquePoints: [
      "Sentadilla sumo hacia caja; siéntate atrás con control y sube potente.",
      "Mantén rodillas afuera y espalda neutra.",
      "Evita rebotar; pausa breve si se desea."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8g2bsvs5oRw",
    substitutions: ["Anderson Squat", "Front Squat"]
  },
  "Weighted Frog Pump": {
    image: "",
    category: "Free Weights",
    subcategory: "Glute Bridge / Frog Pump",
    attachments: ["Dumbbell", "Weight Plate", "Mat"],
    muscles: {
      strength: ["Glutes"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "En posición frog (plantas juntas, rodillas abiertas), eleva caderas con carga en la pelvis.",
      "Pausa arriba apretando glúteos; baja controlado.",
      "Mantén pelvis neutra y evita hiperextender."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dui_tlG3pZ8",
    substitutions: ["Pause Bridge", "Hip Thrust"]
  }
};