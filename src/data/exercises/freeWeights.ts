import type { ExerciseInfo } from '../types';

export const freeWeightsExercises: Record<string, ExerciseInfo> = {
  "Block Pull": {
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
  },
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
  },
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
  },
  "Alternate Leg Twist - Dumbbell": {
    image: "https://i.vimeocdn.com/video/754882354-dde1f2107fd4585e2d549a7a3f13bc22827b064a946e17e9b2cd2c24b2d69c9b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternate Leg Twist - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Alternate Leg Twist - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178385267.sd.mp4?s=f0810393d1fbeb83e587454cdfbf1e2aaafc833f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Leg Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396185-dc08b22870964d5a50b7fbe914c0efc8821fa4e57bbe5eb863654755bb3700a2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Leg Raises - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733572/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=184211a9e00653e0d909df1207b7cd214128828ef498f57ffa16df9e24f76593",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Anterior Raises Alternating - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753641563-495ca4f32a915c99b74deaacb658b5adaec2c7c163642d7bd8fab58d2322e8b5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Anterior Raises Alternating - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342394.sd.mp4?s=828e87bf0fb8ebdc7e134f51f22973b2d3030c8e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Anterior Raises - Barbell": {
    image: "https://i.vimeocdn.com/video/753641476-cc64ea05c5e7fdeebe401d3e109c5227b88831897ef95efec62e673a0c3a04ab-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Anterior Raises - Barbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/185543845.sd.mp4?s=4df96fc94d82f93447be31cf9d27ed4466a3a98c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Anterior Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1343840162-3b4ae1fea81ca002543466b0acf131790f623bf5ec7114d6614d5f765cb34fc6-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Anterior Raises - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/663948448.sd.mp4?s=fca2ac5d2b18aa3f7bba46869bb65a2c65ae6465&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Anterior Raises Inclined Bench - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753641618-06b2375a7634b109a5b0c8cbba65802603dbab1a5c0cf65d97e49c92d4c6bacf-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Anterior Raises Inclined Bench - Dumbbell"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342405.sd.mp4?s=7ffbba7876815b74f3aa46afa8a3f9d753290ba0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back And Forth Lunges - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698406790-a7aab29156d4fd19ae7a03faa5cb35572fbc4ba4745497500a37ce06592d034e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back And Forth Lunges - Dumbbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845740492/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=31cfb5ecb428ca341111b55b6a7a3a1f7779492a9b01c5a646d015648fc5249c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "BACK EXTENSION ROWS": {
    image: "https://i.vimeocdn.com/video/1732879677-d04552c0fe8e2cea1ecd3ef5c2cc17a138ce11b38076c2eff884d8c2c915c15a-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal BACK EXTENSION ROWS"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Deltoid Group, Posterior Deltoid, Erector Spinae.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709331/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=16812829d262e35620e175d97360e32653022273ee4e4df645b851eb6df77ac0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Barbell Curls - Shoulder Width": {
    image: "https://i.vimeocdn.com/video/753642763-82641e69921b4a84d0213b5ac49e5518ec15a86affacacda24b850cb93e4688c-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Barbell Curls - Shoulder Width"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175434187.sd.mp4?s=1be745096f3f8a5ce9def2f06df3be98ac51afd2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Barbell Curls - Shoulder Width - Reverse Grip": {
    image: "https://i.vimeocdn.com/video/753642825-ec015584893dbf4f2db0b7d92a458cc2de02e29a573988806c420d036de110b4-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Barbell Curls - Shoulder Width - Reverse Grip"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175434152.sd.mp4?s=9808c23b4997bb5acfbc26859eb6e24aeaaf9a10&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind Back Rows - Barbell": {
    image: "https://i.vimeocdn.com/video/753647191-9927648be186729a14cf3066ae2a37bb0792168ed17504516731894d7f32ed87-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind Back Rows - Barbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178385850.sd.mp4?s=965f04ef530a89910619c41f9ae982ccac9c9f6c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind Back Shrugs - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1798847756-40a40d740968892a8407f885183f0e62ebae7fbeb6d0d1736ecc4a1c71349d5c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind Back Shrugs - Dumbbell"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913175823/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=44dae7c03d40448585e7bc600dede788b605741cf41988b1d7a5a3c58392215a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press Alternating - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753654302-eb816a9b71779b6bc1c96bd2834c92bf90668dfd98c13617cc229ac3d3832b02-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press Alternating - Dumbbell"}]
    },
    techniquePoints: ["Lie flat on the bench with dumbbells stacked directly over your chest and wrist joint.", "Lower weights down and slightly outward until you feel a deep stretch across your chest.", "Press upward in a slight arc, bringing dumbbells together over your chest without clacking."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175230218.sd.mp4?s=fd904d587d6a5ac9c61965e3c83949b38453e1ed&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press - Barbell": {
    image: "https://i.vimeocdn.com/video/753653938-402ff93d71e247d2014ba192b19ecdb975331c39364340e5ba5caee47caf9588-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press - Barbell"}]
    },
    techniquePoints: ["Lie on bench with 5 points of contact (head, shoulders, glutes, left foot, right foot) and arch upper back.", "Lower bar with elbows angled 45-70 degrees relative to torso until touching sternum.", "Press explosively back up over your shoulder joints, driving through your Pectoralis Major, Triceps Brachii Group, Deltoid Group."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175434747.sd.mp4?s=e5e152b3c698a5018d7270b1a6580479cb2fdee7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press Close Grip - Barbell": {
    image: "https://i.vimeocdn.com/video/754833291-9cd109ecf84c6e5e2c98496ebdcd3f592ff44700b9a1a2585f658c56dec9d32e-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press Close Grip - Barbell"}]
    },
    techniquePoints: ["Lie on bench with 5 points of contact (head, shoulders, glutes, left foot, right foot) and arch upper back.", "Lower bar with elbows angled 45-70 degrees relative to torso until touching sternum.", "Press explosively back up over your shoulder joints, driving through your Pectoralis Major, Triceps Brachii Group."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175434793.sd.mp4?s=06795b9eda5162f3cfcdeddd2ad07270dbd13cfa&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press Close Neutral Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756123597-404307fa8612def81440017605e82cf65d32fd34a322ca573cfddd764c285953-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press Close Neutral Grip - Dumbbell"}]
    },
    techniquePoints: ["Lie flat on the bench with dumbbells stacked directly over your chest and wrist joint.", "Lower weights down and slightly outward until you feel a deep stretch across your chest.", "Press upward in a slight arc, bringing dumbbells together over your chest without clacking."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314543841.sd.mp4?s=5a65b8c284b2cc3d2cf728fb1f758b4894584af2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753654016-19c8c7dc9284913a8a3baf2187309007e7a59a2142183b26253f7a08c7108a7b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press - Dumbbell"}]
    },
    techniquePoints: ["Lie flat on the bench with dumbbells stacked directly over your chest and wrist joint.", "Lower weights down and slightly outward until you feel a deep stretch across your chest.", "Press upward in a slight arc, bringing dumbbells together over your chest without clacking."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175434806.sd.mp4?s=1bc3f4f1d1ba7004ebd0564e95e6af5d4cc202de&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press Incline Neutral Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756122990-b648845521f66a7e0f9ddb9417cd3b7f67ac4b1a77cec60f1136d20901282ab4-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press Incline Neutral Grip - Dumbbell"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314543950.sd.mp4?s=fed047562f63e1f9f7235c1d426d34c98f3fd311&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Press Neutral Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756123147-57c090ffa689dea42754b6f8178104d84dfb464fa3da828a1c893464b8be6b5a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Press Neutral Grip - Dumbbell"}]
    },
    techniquePoints: ["Lie flat on the bench with dumbbells stacked directly over your chest and wrist joint.", "Lower weights down and slightly outward until you feel a deep stretch across your chest.", "Press upward in a slight arc, bringing dumbbells together over your chest without clacking."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544065.sd.mp4?s=5ff2fbbf51f05748ba8268501cedcce21d05558e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Dumbbell Shrugs": {
    image: "https://i.vimeocdn.com/video/1798847748-7ced9bf2c3ae760728444ca7f3daae841cb421813ba7e9e7d5eca8bc0d7f7ffa-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Dumbbell Shrugs"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913175781/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=41a9d4c5cb78d65e17f47c8137c71666e3a8b132051166c755eee219293f339b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Row Deadlift - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1798871598-c32fa7b86cb4ebad8df84eb8b77e76b8dd8d531092d82b46eebeaa1ce8134b18-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Row Deadlift - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913175867/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8d65daa8846f90849167724dfdacfc50e8338456fa92fe7f7e664cdbda20cdb5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Rows - Barbell": {
    image: "https://i.vimeocdn.com/video/753655131-a5135b8973bf166d0eb0831f82f681f90537b2cde2e9f865e45200e2851d92b4-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Rows - Barbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/184093162.sd.mp4?s=a268e3eafffd96f6876668e01a2e358c2a2c3f59&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Rows Supinated Grip - Barbell": {
    image: "https://i.vimeocdn.com/video/756123278-294840414faa0b4d85b35a832aa72cf9740dc7f20ae6b26c1fd3bb10cbeaf27f-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Rows Supinated Grip - Barbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544202.sd.mp4?s=6d0110564461695e8443ca772c38470e062b65e1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "BICEP CURL 21's": {
    image: "https://i.vimeocdn.com/video/887681841-e2a6a550035e0357a2bcad8ee20eaf021a52e7779ad8f4a83013554e267977d5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal BICEP CURL 21's"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/414560192.sd.mp4?s=3b4413150059e8f6be9f3d40d72a4cbd8983f357&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bicep Curl + Hammer Curl": {
    image: "https://i.vimeocdn.com/video/1698396275-3ddcb698d647786b5f98ee66cae137361e700a91df2d3a7264e201d02f21ab80-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bicep Curl + Hammer Curl"}]
    },
    techniquePoints: ["Hold dumbbells with a neutral grip (palms facing each other) at your sides.", "Curl weight upward while keeping elbows pinned close to your torso.", "Squeeze brachialis and forearm at top, then lower slowly to full arm lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733602/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1b655d71c831ed09ad4657341b601599fe42ca234363351d4d32c64deb808e59",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Boat Hold - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1714316376-27717a41b8d41997a06c908b5851bef1bccb4493cdb3e3ff4c5b25c0706f1a8b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Boat Hold - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Boat Hold - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Anterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/857235920/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a0ea5dcabea8199eb837232593c1ff64dbde2141f7ca85aee59240bd913be04d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bulgarian Goblet Split Squats - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753655222-ed6c3781e088b515d34c1e2802c7340cd746bec996539b8c3803dcd187ff58a6-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bulgarian Goblet Split Squats - Dumbbell"}]
    },
    techniquePoints: ["Hold dumbbell or kettlebell vertically against upper chest.", "Sit hips down between ankles, pushing knees outward in line with toes.", "Press up through heels/midfoot to stand up straight."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178687375.sd.mp4?s=46a55337810e57d0e3c049e73f22b25dc437e57c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bulgarian Split Squats - Barbell": {
    image: "https://i.vimeocdn.com/video/753655288-a1a2ba785bfb30c14c80d5ccab96c9b2f04b663cac7fd9ab5c6fa75f1f0877a8-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bulgarian Split Squats - Barbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178686098.sd.mp4?s=08cdcd491f52cbe9415ad91b85add6211e6eb138&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bulgarian Split Squats - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753656063-7a410e6c337ba26313500d0bbdadbca32412953e5b61b9d67aa430ce214a79c8-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bulgarian Split Squats - Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178686174.sd.mp4?s=4879ad365d047adc294aae435c35275858d0c4ec&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises - Barbell": {
    image: "https://i.vimeocdn.com/video/753656137-b3953859af395658dc38c31de30253d438f14675ffa0f8fdcbf3e9e73f2ee88b-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises - Barbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178687381.sd.mp4?s=c9521da2fc58949b8091234218149405023bcaa2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753656212-8a62646ac524b3e04f02de99b34b120731226cb0f796e8daf18d0cf9cc278abb-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178687767.sd.mp4?s=2cd528cf5b09c0badc908710c480b26ff6f7e440&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chair Crunches - Dumbbell": {
    image: "https://i.vimeocdn.com/video/754881499-e24a4f58d22ea32de803986bd9ed7a3e171b7503c720ca394f005782694197c5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chair Crunches - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178386414.sd.mp4?s=ec31755a6b727f948f8ce82b9a732d3deb3d3e10&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chair Sit Ups - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1701243792-989992c72d7065810ffc7e6ce1eddd1d4f41b813ec7ec7bf83bd39b271d8d61b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chair Sit Ups - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847799812/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7fcb991abf27d9addc922836223f7326b63d793cbc442cd86e79e4a902767402",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Clean & Press - Barbell": {
    image: "https://i.vimeocdn.com/video/753657077-dcda55ad03d55b8a31852d114b70ed632c9cc4b17187d341963aa1abf2236996-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Quadriceps Femoris", "Forearm Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Clean & Press - Barbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Clean & Press - Barbell.", "Execute concentric phase with intent, driving force through your Deltoid Group, Quadriceps Femoris, Forearm Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178386430.sd.mp4?s=4386f59e47a5f2c47aff0d51d0f63b83726502df&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Close Calf Raises Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698406818-e5d1c65c6b716e57577a0602f609777d8c0ea8a83e8a4ca5bb7e3c184928c450-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Close Calf Raises Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845740515/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=462f0f66debf29f84399f26fe7ec646c99075afff43d826b9fd8c43e66f35829",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crab Walks Dumbbell": {
    image: "https://i.vimeocdn.com/video/1696537622-3249f7560f53c51301b3eae5214ee1a795fa418bbe01a51bc1050061efccb9e6-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crab Walks Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414831/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1a4776f7c5932d7e493cb18b023d689fec0a0a7c63b10555dc3a8754b7419aa8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curl and Press Dumbbell": {
    image: "https://i.vimeocdn.com/video/1639135297-c3e7729cd719813d13820a1a180b2662c9e219e1bf05714215c96d0b349f111f-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Deltoid Group", "Triceps Brachii Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curl and Press Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Curl and Press Dumbbell.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Deltoid Group, Triceps Brachii Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/811024795/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=51ad3b7faeb3cdafb54992c939db49b6a29b268a850f4773e599152854be3308",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curls Close Reverse Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753657909-2ad5fbb7e053fab2685ff75a7ea31af5f46d6cd47f3d7e87e05aadacd8e9ef3b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curls Close Reverse Grip - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Curls Close Reverse Grip - Dumbbell.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175706067.sd.mp4?s=c890386ab38ca124ef0535b29e221abdabf8695f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curls - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1788970415-7b53920e15bee147b2dda9fbedb29a6705064b42803410764ebaed14c7fa6331-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curls - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Curls - Dumbbell.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906917859/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e06b633c6d59892885154744750d3facf0d1cd970db4eec2dcc4c84ed8ad8224",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curls Wide Reverse Grip - Barbell": {
    image: "https://i.vimeocdn.com/video/753657202-c9d71c2a3c57305fbe9af601b9ba5f8129ba2421b538acacac72c8e1c08171e9-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curls Wide Reverse Grip - Barbell"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175433536.sd.mp4?s=2053f287be62a43d14d1e192dce448d168d2d262&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curtsy Lunges - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1440725332-44829830d41076bafe0e7a25233b4dadd74a085e5e789a9c14a5548af1de4697-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curtsy Lunges - Dumbbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/714817992/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=874b905f06f4c2f078671dcee878f05f19ea2b23b5864846676f660d4942cbde",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "DB Lateral Raises": {
    image: "https://i.vimeocdn.com/video/847694603-1139ef531bbce875d9d13b84df8777c2c2cceb7265c9ff5ccb91110e384e8f79-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal DB Lateral Raises"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539193.sd.mp4?s=714c897bd50e6739f9d1f5dcc09e2fc22db07757&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deadlift - Barbell": {
    image: "https://i.vimeocdn.com/video/754830380-86e16ae1394f5ea1ce0de567bf5a8553a52626a4ab65a0885bf38e2dca1fe919-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Hamstring Group", "Erector Spinae", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deadlift - Barbell"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/184093164.sd.mp4?s=926c68eef5388d22d03e558d3fcebf2f701e1f7a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deadlift - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1696537416-091514af13b1b476d39b574dc67c514eaa65e1ca58867b6e0607d7d0022f9415-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deadlift - Dumbbell"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414840/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d8b31593a347e18f7473e185c8558f94e561c188625f7f5f2edf9f68e20d7e7b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dead Lift Stiff Legged - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753657812-c717f546fdc9879911a8ae4c544b47e01c33056f8dd393db22678956c988a38d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dead Lift Stiff Legged - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dead Lift Stiff Legged - Dumbbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178687966.sd.mp4?s=d504e7f22807d991dcba479651bde8daa57391dd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Bent Over Rows": {
    image: "https://i.vimeocdn.com/video/1698396230-abf86c75b85ee02616f27838442e966c6d353070c6ec8d5390121122a1aa4bb7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Bent Over Rows"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733591/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=410096b54189d6eae7c62d22a9c99ae3d764157abc74049966c08d5861ffd31c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Curls Alternating": {
    image: "https://i.vimeocdn.com/video/753658099-f8b57b9be51efbe1c724ba6843748c4ad3a77b825d88d39c103e67fa7cfd7ad1-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Curls Alternating"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Curls Alternating.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175439350.sd.mp4?s=a38c59b11c11bc43e6dc7a73e26ce8d490d7cef3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Curls - Close Grip": {
    image: "https://i.vimeocdn.com/video/753657869-88d041d5efdbd8fc6f97fec9ec77194d80aa183806e853940693f2e2eaecf709-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Curls - Close Grip"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Curls - Close Grip.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175706046.sd.mp4?s=2ab9e842568fdd68f2856c4373ea47bce7bddcf7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Curls Negative": {
    image: "https://i.vimeocdn.com/video/754832031-c50a2b240b9cac13a5f03c3316da295e349c995cf22fb24a0ffd12c69f20cb71-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Curls Negative"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Curls Negative.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175439366.sd.mp4?s=19b89f64da842de541d023230e2a90b61fc4ba15&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Curls Seated": {
    image: "https://i.vimeocdn.com/video/753658431-1bcea7da80a2873679f74dde6e9c34be5bf2c73af81f96840df91c9376f3a947-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Curls Seated"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Curls Seated.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175439374.sd.mp4?s=172297ea77c2bb2f7ed905e9a4991ac487c4ceb7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Curls Seated Alternating": {
    image: "https://i.vimeocdn.com/video/753658395-aecb3df8fbb9cf4380f4c62701748de3ad38feba54406225ec342deac261e904-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Curls Seated Alternating"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Curls Seated Alternating.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175439383.sd.mp4?s=81b34f20135ba055b5816cb83e4603d935bf88a5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Flies - Straight Arm": {
    image: "https://i.vimeocdn.com/video/753855762-c8a9ad5e6f991e250797c34f988ddd536e84936f722550fcb09c2c4bdfb4628d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Flies - Straight Arm"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Flies - Straight Arm.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175435515.sd.mp4?s=f0949c4950f1e8d6a15788293baa96d02fde0b3c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Fly's": {
    image: "https://i.vimeocdn.com/video/753653812-d0c13cfa5f2764b8c6d6f1ad4abaa71135e415b3527df56f42fa6faf6cc21723-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Fly's"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Fly's.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175435506.sd.mp4?s=106f458b5370dc9058d694eea6f655191586fec6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Hex Press": {
    image: "https://i.vimeocdn.com/video/1013946956-f093347a4e2e8ed35b38a60829532a291ab3f7b78b7f1d582b51494dcfb80717-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Hex Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Hex Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/490174501.sd.mp4?s=361af895145d55ebd18c67516950dd670efd4e67&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Hold - Straight Arm": {
    image: "https://i.vimeocdn.com/video/753861071-5ca1e51aeefedf24d3786132f80fb4ff1b0f86d8e5c91caa26ed6be5a9d416e4-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Hold - Straight Arm"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Hold - Straight Arm.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175436555.sd.mp4?s=4b2dbc212fa1483efe9549bdf25104bc02fed546&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Press - Alternating Incline": {
    image: "https://i.vimeocdn.com/video/754833275-880f02f1160b46cdab74d7d436e635d83c758b414867488b798c73d286f70c0e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Press - Alternating Incline"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Press - Alternating Incline.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175436577.sd.mp4?s=215d376bac4fa5f6f4b8010c7c3c89430138109e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Press - Incline Close Grip": {
    image: "https://i.vimeocdn.com/video/754833778-df46650c4863239fb1f87829cbaa78714145d62a6749b51593142eaed1796c02-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Press - Incline Close Grip"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Press - Incline Close Grip.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178375643.sd.mp4?s=f3eb2aff27d8a80d62f8f4d2e9d3d93f983b5968&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Press - Incline Neutral Grip": {
    image: "https://i.vimeocdn.com/video/754832854-84007e61e7c9d8aad4c66354e1d106ddc4ddbe12eb5fd10d673527be829d568a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Press - Incline Neutral Grip"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Press - Incline Neutral Grip.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175436591.sd.mp4?s=a0b727fa52535744063d134b7474d48bef02c47b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Press - Neutral Grip": {
    image: "https://i.vimeocdn.com/video/754832743-b534f9d1a5996a5bea6de08131c1e39724391dcbd526c85c9e0d07c7444cb0d8-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Press - Neutral Grip"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Press - Neutral Grip.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175438039.sd.mp4?s=76e09626fcce8f071a1daf5c37d605f1cf3eea33&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Pumps - Straight Arm": {
    image: "https://i.vimeocdn.com/video/754885913-0491a11a7a67268802ed18f401d36b045dd1518de6c4405386db61eaba4a40bd-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Pumps - Straight Arm"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Pumps - Straight Arm.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175438048.sd.mp4?s=1345a18cbed3f4042821eac73ded7731febc3970&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Rear Delt Flies + Ski's": {
    image: "https://i.vimeocdn.com/video/1054116724-fec1b918aa05c661d06553a6f80cfb1b87707e9d578fd21f736830a9d485944d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Rear Delt Flies + Ski's"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/509252398.sd.mp4?s=2384587f1cf081f445eae654a05bed036c2d3a59&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Shoulder Press (Neutral Grip)": {
    image: "https://i.vimeocdn.com/video/1205765987-c7bd8e1c025099687f91cea5343ff57427c68322fc003b3b82a8c3a7b1bc8fe7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Shoulder Press (Neutral Grip)"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/582592308.sd.mp4?s=ce7369b608cee04a0041b5a6dd07ff2ffdb9745e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Shrugs": {
    image: "https://i.vimeocdn.com/video/1698406846-f37e38ab17695b7ecb866fffbae01c67a380803086488f63295d4a4fe204a484-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Shrugs"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845740551/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2dc268a270e4640e02e0d2d3e1895c8d36943eb1d6aa93661788649e3625ccc0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Ski's": {
    image: "https://i.vimeocdn.com/video/1798873436-fdfc8e94047bc4a97a1dd711e71a0dcb702ef1af688aa985b626d0237cab1ccb-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Triceps Brachii Group", "Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Ski's"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Ski's.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Triceps Brachii Group, Deltoid Group, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913176088/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=34cb64530a33038ec01c880fdfec0f53ba28acc00dd3f6e6487aeeb231b0b6d0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Squats + Lunge": {
    image: "https://i.vimeocdn.com/video/1701243736-883cf7da972fa1636ab002ffa649d2396b5da34db7a4fed221e25c73e5aa8066-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Squats + Lunge"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group, Hamstring Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847799800/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f2d814e6ceb7feef6ade6cd3d358946c7c1bc751eecf3ff34f56335439015c8b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Standing Front Crunch": {
    image: "https://i.vimeocdn.com/video/754830401-d13b04be9d6ebde3312ef77fbac3d89d63b87ea671891a22bad34548082ac5fa-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Standing Front Crunch"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/185543843.sd.mp4?s=de8818762006d7f5ab355c6bccf33d5ee95cd9da&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dumbbell Swings": {
    image: "https://i.vimeocdn.com/video/1702196837-f938200a25ccc135ab4f960bde6ead030fb274672b92ffad0c59d45505637b4b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Deltoid Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dumbbell Swings"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dumbbell Swings.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Deltoid Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/848510454/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3b7b61105dc8d1c59ebd1870d8bb23e288ec1c1acd9c92e8d8418c763b178d93",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Side Squats - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1156110856-05babcb71db20218410e6089ce56c25da00930f43df10014c74e9277cb07454f-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Side Squats - Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/559373166.sd.mp4?s=d8b8425b78327b9b79b5187035c1c6f3f73fe8be&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Farmer Walks - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753863427-b28ce573487a92b73f5c741404ca8666ebb5e60ee9b2927311fc5534e930762c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Farmer Walks - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Farmer Walks - Dumbbell.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group, Trapezius & Rhomboids.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178678133.sd.mp4?s=9ac5d7dfd1e887fe618a92e4f50e0299aac83627&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Floor Dumbbell Press": {
    image: "https://i.vimeocdn.com/video/847694981-5b9519f84e71c58fdc1522a5ef59bc5ad68230f46962fbd33192084b7ff7514c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Floor Dumbbell Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Floor Dumbbell Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539470.sd.mp4?s=46ea57c4c61461baab30cfbc684221dea6501368&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "FOREARM DB TWISTS": {
    image: "https://i.vimeocdn.com/video/887683188-8afd70408892e8a5dadc1c7e20dae368e1e49776b4d86f400e074bdf49b130be-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Forearm Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal FOREARM DB TWISTS"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting FOREARM DB TWISTS.", "Execute concentric phase with intent, driving force through your Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/414561052.sd.mp4?s=d954a3943b71de63c9befb170ca1b2c539bf4ce2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Frontal Crunch - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753865777-b1e2268f2eb3f1dc36f5443f2b8b2d00e13e747d42162174dae244e64a212976-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Frontal Crunch - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178678596.sd.mp4?s=7990802083e44567562033654500f3c43c04ff52&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Frontal + Lateral Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396302-41f008075c6f92f607beba8d84fc8cea92d8ccd82ff55c5598b11cad73cea94c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Frontal + Lateral Raises - Dumbbell"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733657/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3e3f742c8a1f214d6c01f175f83d5137f27d92aa7d5bc7591546eddec79544f0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Frontal Raises - Barbell": {
    image: "https://i.vimeocdn.com/video/754880924-a22bbc81244fa3688712cc31b7e7c642aa4abea0a45ee383e551df5ce2d85bbf-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Frontal Raises - Barbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178678603.sd.mp4?s=e05ae36e7eebf3803743a285b59ab63bcf2e8535&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Front Shrugs - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753863520-d53bc4ad2237e7dc3255b7126ced8a60cd6e465c896d8bcc8b9029bfe5b59066-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Front Shrugs - Dumbbell"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178678151.sd.mp4?s=1d6038b2a9cafcb669877f2cb86964bc59006e4f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Glute Bridge Dumbbell": {
    image: "https://i.vimeocdn.com/video/1696537520-6f5b7ee453bd0aa9077d756acb573f56f1ed9cbbbec0c4d3800eb062ca3b74f5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Glute Bridge Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Glute Bridge Dumbbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414893/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5f1287ce9a2c79d45352a7cff335b0d5881fc9418db5c252ecc4df91f4c5dbc3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Goblet Squat - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1788970698-de34c806bce80bdf6de17e66f84d84f4afcdea51fd6f06f61924372130d02dc3-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Goblet Squat - Dumbbell"}]
    },
    techniquePoints: ["Hold dumbbell or kettlebell vertically against upper chest.", "Sit hips down between ankles, pushing knees outward in line with toes.", "Press up through heels/midfoot to stand up straight."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918043/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d6b0253a819053c103f9e8ebfd95d0555e851099a177a416eec77c311e62a14c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Lateral to Frontal Raises": {
    image: "https://i.vimeocdn.com/video/1787597471-fc6658e69498c392b1e9141632d86599e77373a02ae4e4879a14de6773b832a8-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Lateral to Frontal Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906025253/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a49f8803ed15267dbaecdb9e24ed61c775acf9fbf3553afa50ec00f14934992e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hammer Curls - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1788970760-0b698ae649e774e1fb28376106a7366c8d13340e9492cfac968bc385fc297cad-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hammer Curls - Dumbbell"}]
    },
    techniquePoints: ["Hold dumbbells with a neutral grip (palms facing each other) at your sides.", "Curl weight upward while keeping elbows pinned close to your torso.", "Squeeze brachialis and forearm at top, then lower slowly to full arm lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918059/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=249c59f109f8024e890ec8178d453433b84bf5533c7e07a607115f803cfb3102",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hammer Curls to Military Press - Dumbbell": {
    image: "https://i.vimeocdn.com/video/790284391-982ec4437cbd453e8be04269b9eb75036799679dd3ac95b21716a24c41cfbd81-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hammer Curls to Military Press - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/341620863.sd.mp4?s=99c28eef9d85ddeabd77d86244877b0b8fe6a7a8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Bench Press - Barbell": {
    image: "https://i.vimeocdn.com/video/753866504-90e229bd33330d8d95eb7e4241dd15eea70bde9fdf76132c10adb3ff65a96f9a-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Bench Press - Barbell"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175435471.sd.mp4?s=f8e85187c99d8f3ae6f19376a1e209e77a4e961e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Bench Press Close Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756123619-d8821a631426d8007ba4b08502e8fd55f581832e3a6b0808818d1af5d26cb94b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Bench Press Close Grip - Dumbbell"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544456.sd.mp4?s=b6c78a9c707ed2b126a11b8554fa6773fc777755&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Bench Press - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756123540-b9c35fbede38330a491b47629b3c81f948e20f8bf4df5179a961b13353f37607-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Bench Press - Dumbbell"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544379.sd.mp4?s=c32f1c46074fdc778d1144d6c3216b4b7f8b30b6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline DB Rows": {
    image: "https://i.vimeocdn.com/video/847694904-3dd420ae4020e6f9485b8bd59e68d3b601ab7c2642621a00772d7e8f0dd74eb7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline DB Rows"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539412.sd.mp4?s=78b688ef5d06f559ad7fecf1e3cc54ead3b4c424&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline DB Ski's": {
    image: "https://i.vimeocdn.com/video/975929464-f22199e38631444f992e75d6568fe825fb72b6a3e8d3feba80676f3f02b0d5dc-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline DB Ski's"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Incline DB Ski's.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/468666752.sd.mp4?s=a6428c5647a56ef0949b5d038fff8b21aff3e400&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Dumbbell Curls": {
    image: "https://i.vimeocdn.com/video/847694854-9f9d1ceb1fbcbf663a4a2626904a567cc702559f4ec16f81cda89ba96e11f1b1-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Dumbbell Curls"}]
    },
    techniquePoints: ["Lie back on incline bench (45-60 degrees) with arms hanging straight down behind your torso.", "Curl dumbbells up without swinging shoulders forward, feeling intense stretch in long head of bicep.", "Squeeze hard at peak contraction, then lower under 2-3 second control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539386.sd.mp4?s=0696afb9bcc53af55f6cc398e3dd324b91c1a3ed&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Dumbbell Fly's": {
    image: "https://i.vimeocdn.com/video/753863475-4a69ce9c5fd115fb93fc233cbf0b18a9f4590c7343f1d9b03289ffdc6578ed42-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Dumbbell Fly's"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Incline Dumbbell Fly's.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175706091.sd.mp4?s=c47e3e212930470d599f6cdf30a00c60ab1bf544&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Dumbbell Hex Press": {
    image: "https://i.vimeocdn.com/video/1013947512-2e9c8dccc78244aacfa728d052100d00ef8edb3c9acda31523331978b451fdb0-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Dumbbell Hex Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Incline Dumbbell Hex Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/490174652.sd.mp4?s=9bb52623f5588585a167002082b4895223a0f0ce&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inside Shrugs - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753867404-ffd3c53352048ac456538ea5b7e54fb9b5fbcd674349e0b909fe6085cdde4084-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inside Shrugs - Dumbbell"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178678948.sd.mp4?s=11ec106e1346219e9197ca854bb0ed3984a79296&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Isolated db Press": {
    image: "https://i.vimeocdn.com/video/847694894-c13e6245c03b74c5c1a82a167cf8b757f43fa252ec0b0a3c4f0f6258929c8bdb-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Isolated db Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Isolated db Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539361.sd.mp4?s=b8212a13c9994f74968b2ef5e0d8fb32d8adc6aa&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Isolated Incline db Press": {
    image: "https://i.vimeocdn.com/video/847694832-16709b942d36e3f5ca227a63208138715a00d10338404fcb97a55f7d49394c33-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Isolated Incline db Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Isolated Incline db Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539344.sd.mp4?s=b3be89ce5b0b6fd8ec99a47d41befb2cd4e60cc6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Isometric Bicep Curls - Dumbbell": {
    image: "https://i.vimeocdn.com/video/790284528-15c85bb85fe26e9b4d909d5582663a263732fb76ce0e5bae4a0b6e750e3ac3fa-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Isometric Bicep Curls - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/341620947.sd.mp4?s=ef69230f8881b252e9e4cefdbabef75bd98dcf40&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jack Knife - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1714325362-ab0535c099fd48c9d669e13e2863dbb6e73d366b7ec54681c039a04be0289a5c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jack Knife - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jack Knife - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/857235954/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0c702518d965cbb9e0415d8a178eefb6600f98dcc28cff9d46f147090036094e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jack Knife Single Leg - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753867503-52c970f96c090df33967b48626bdd855b46e0a0c032511d48fd58bfaf999f27d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jack Knife Single Leg - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jack Knife Single Leg - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178679913.sd.mp4?s=46f4a34962ffab3c576399261781b802185530f7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats Dumbbells": {
    image: "https://i.vimeocdn.com/video/1696537466-50ae36cb7688bb57606c9840f04cac4bfc06a83174e473074c9488e8290ddf57-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats Dumbbells"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414912/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=650d596f9eb0588d275c3653da9df12233ac83cd34d02fb35c0ae3e63c981abf",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats - Dumbbells": {
    image: "https://i.vimeocdn.com/video/1696974657-2fbac5901721d97cd2640d68d6d8d05fae2ec2c1dd589be02566e46552d71bb5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats - Dumbbells "}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414912/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=650d596f9eb0588d275c3653da9df12233ac83cd34d02fb35c0ae3e63c981abf",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Raises Bent Arm - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753870316-89780874aabe3978fbda9b18fbe10d34f8787e3f6bb646f371b65a19e7d71240-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Raises Bent Arm - Dumbbell"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178680386.sd.mp4?s=a21f59a8cbca0ec8649336b6a6d4f7ecd5fbc656&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1701243822-db9a40cb69dfebc05e1b802dabf11d2aa28147aad3ad8a791a65f5cdbfb84333-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Raises - Dumbbell"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847799841/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8f55cc27450a477955e7483749102a309936928287811d2586333f32e51eae2b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Cross Sit Ups Crunches - Weighted": {
    image: "https://i.vimeocdn.com/video/1789222969-9aa03a6b61981623fc2918faafc89f15c672fc649b403f59125b6af6fc747fb2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Cross Sit Ups Crunches - Weighted"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051730/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=621483ebda926265392343072e36f0f1e77bc1fe53af60e3e669a0c978578c24",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying DB Leg Raises": {
    image: "https://i.vimeocdn.com/video/1043227526-41c52f62fd11e49e630634456a6bab15d724fc5b9cd08355f20efdd0ebf08a33-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying DB Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/504151444.sd.mp4?s=1b1fa1032d8664672b1746d6926759da5a520fc7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Single Arm Cross Over Tricep Extension - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753874042-786909dee62a1335123f9aeced35a04deec8249043cd06ef220c371d6df85f47-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Single Arm Cross Over Tricep Extension - Dumbbell"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/184082890.sd.mp4?s=b9aca642e8fa23fc0b77343cb0bd15cbcdc0fdcf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Single Arm Tricep Extension - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753874714-f8b79ac7e8ff89d86d9ed4a6b66bcd53a5bed64c63533ff530ba2e354c0741a8-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Single Arm Tricep Extension - Dumbbell"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/184082891.sd.mp4?s=51748c467a30a1f54d0e63a6ef1367efa29fbae6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Sit Up Crunches - Weighted": {
    image: "https://i.vimeocdn.com/video/1789990775-16fec828eac1869df8b4ad6498316eefbc22e84a0b5e5ea47a447c4f98fe0767-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Sit Up Crunches - Weighted"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907052442/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d58d3f992857653f85189bb532c102165da59cc36235b5c35ed62da16e4f707f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Straight Arm Flies - with Dumbells": {
    image: "https://i.vimeocdn.com/video/616542391-5ce79d84d1aa86e634adae31a0a7a06dfe8808e3d96a08c226da66080f689b49-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Straight Arm Flies - with Dumbells"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Laying Straight Arm Flies - with Dumbells.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/202492622.sd.mp4?s=64498fa1556a56430114b073689d087548cd7279&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Twisting Sit Ups Crunches - Weighted": {
    image: "https://i.vimeocdn.com/video/1789992987-9f9c920ede82c6161d37aadcff80db425d4c7708b0dc4e4c695997e19032555c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Twisting Sit Ups Crunches - Weighted "}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051673/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b635e70417c6777b9ccd31dffac48de76ffc61b0f44f7464ec5386741102a12e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunges - Barbell": {
    image: "https://i.vimeocdn.com/video/756123752-ec511ed2f2116d900823cba3710ac6a6524165969ad9081afa039299bfa07696-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunges - Barbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544517.sd.mp4?s=8b58a603462d28982679ba33e32930f5fbf4e843&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunges - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1699760916-d1de9ecaefc6bfca1b843d18ce443e0d0f08cd0a8725b564463f45f7dc73af52-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunges - Dumbbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733670/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=18c5a846371a058f1d570e087c02e403306b5e39d86dd646823372b95cbb3779",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Military Press - Barbell": {
    image: "https://i.vimeocdn.com/video/1732879831-5b9e5ce7064f08b1478dca3c6085a8aa5fb8f755c93da1d5b82b538889493420-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Military Press - Barbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709548/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3aa9af026a923241bf952a99587e7aec6425ee7e2c5d6cf454afdae0a44af359",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Military Press Sitting - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753875095-ba8a6a5726072a9dbd5f9b5d91632f13b81302ea093a6617eb509a19f59c4758-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Military Press Sitting - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178680755.sd.mp4?s=8e6e9e309e1654047054f816a505f887401f643b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Military Press Standing - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753875153-fab6d74bc921898cd21ec96b5b96b95c5a61f338dfb3036cefdf596b7f152fe0-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Military Press Standing - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342496.sd.mp4?s=b42dc861a1d8c509824d6d6d0b2ea45ce88de2f3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Preacher Curls": {
    image: "https://i.vimeocdn.com/video/1341706897-7de683646445d8f1b224b57f0cbc23924df6e2b343dee1b2e9434d4d2288f45a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Preacher Curls"}]
    },
    techniquePoints: ["Position triceps flat against preacher bench pad with armpits resting on top edge.", "Curl bar or dumbbell up toward shoulders, maintaining tricep contact on pad throughout.", "Lower weight slowly until elbows are almost fully extended to maximize lower bicep stretch."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/663045434.sd.mp4?s=d2de6672d959dbff5f59700410036d99fd891c65&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Carries - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1205765712-ab1decf9b754d9eeeb4a499e23a4a30890dac6b881a4eba888da40e4a691c2f7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Carries - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/582592342.sd.mp4?s=60a9549ca19d1f97ac204b0bd7b08910b1944aba&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Extension - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753883903-093046ad3fe7d051868dc0f02ce3199f681a7a07a67f9b506e6d640644634ab5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Extension - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175249960.sd.mp4?s=5511e7858a5f7a0ad34dd3fb6ec8a81c103d6847&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Extension Single Arm - Dumbbell": {
    image: "https://i.vimeocdn.com/video/754830877-6124fe908cf95579772ba10269bbfa578a76d5111d7fc8ad24471ad2903a15cf-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Extension Single Arm - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/184082892.sd.mp4?s=9dc30ebe4a84e1b8a1ef50d3def269905618604d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "OVERHEAD FARMER WALKS": {
    image: "https://i.vimeocdn.com/video/1734818527-6b6c1235ea25f8805beaeca60cf21b9edf5f596859a726ab2f7153b65f473064-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal OVERHEAD FARMER WALKS"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/872041067/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2e3e525be2d0ddf0c1ba2cfe09e5172e30232efab09c74b1987d5954039a20ef",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Lunge - Barbell": {
    image: "https://i.vimeocdn.com/video/753883984-ecad912f8b004226bf30fde9fd00057669600fd14a0d53542b697b2c1e9e3c47-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Lunge - Barbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178688853.sd.mp4?s=2cd7d07c09669f7c27dad27436f6982ff0dccc1e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Lying Leg Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1468794559-f28c5f82f3f0eec800c2a067be538340793b20682d08d6a6789c24e29e18d07e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Lying Leg Raises - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/729804334/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e19ac907f3942755f9992fcb1233d5b1cc9dbb06be791b8203d7146be89ee7ec",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Tricep Extension - Barbell": {
    image: "https://i.vimeocdn.com/video/753884069-e1e704cc2e92c2a161f1eaa6b9e99cde73f8796a98070ade23be8f90670b960f-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Tricep Extension - Barbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178385001.sd.mp4?s=e0a22ee422aeb7521e60529dd20587923ed12d34&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Tricep Extension - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1788970977-06a431851d5f26eeddd56794b4a498f21d031b7d15bb11f287c8588634ab560e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Tricep Extension - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918184/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bb90e0f6a7ee28d993c1a5e80c2cc6c53cf7bf677028bbae5cb1b5600e211a3a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Parallel Rows - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753884139-4f6b5894539cebffa9c0e71876a0e9d136a260ec5ff3c1f67f741553201fd1ba-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Parallel Rows - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178681199.sd.mp4?s=095c6c2aa879b272b0c7135894d43bf0078e50e0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pendlay Rows - Barbell": {
    image: "https://i.vimeocdn.com/video/753885084-0fa875824f02194c0958296d94ca4fef4fae90ae7f1cce3176e74330cce156b4-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pendlay Rows - Barbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178381812.sd.mp4?s=69d935ffcee558f798e99504b6c04883679d4508&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pendlay Rows - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753885137-80c1791200dea2ba5a08967ac7ec933fdb38b3196b1ed43a6fd4a91ecc64ff24-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pendlay Rows - Dumbbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178382259.sd.mp4?s=dd3b898b9b95d8536f525d63425cab9184d2bb16&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Planche Press - Dumbbell": {
    image: "https://i.vimeocdn.com/video/754886287-fd2c5252cac746efc181ef52ba7eb8720bc8a80536afb382521419f0d1b52e54-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Planche Press - Dumbbell"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178381836.sd.mp4?s=079c32c20604556ff08946b9b0722eb0770d934a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plate Raises": {
    image: "https://i.vimeocdn.com/video/847694724-d02bce923a0b591f50cc1e263a08fac02efb1dab99d1cf2cd3917578037929c4-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plate Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539286.sd.mp4?s=759c2787297f709199a230c7cdc01bf94cc771de&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plate Twists": {
    image: "https://i.vimeocdn.com/video/847694721-3444b2f35fc3d1554db520980a2113ace4a2eb6c1134e0f061b1eed40eccebef-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plate Twists"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Plate Twists.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/385539262.sd.mp4?s=345df299e71961456122f6375c5c8425a8719061&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pronated Curls": {
    image: "https://i.vimeocdn.com/video/753657909-2ad5fbb7e053fab2685ff75a7ea31af5f46d6cd47f3d7e87e05aadacd8e9ef3b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pronated Curls "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pronated Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/175706067.sd.mp4?s=c890386ab38ca124ef0535b29e221abdabf8695f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pronated Curls 21s": {
    image: "https://i.vimeocdn.com/video/1411135559-261cbfb665d4303a58b59ea3bccb9d511bf4f4d41eedd9ee097b5c37840bd1b2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pronated Curls 21s"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pronated Curls 21s.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/697770830/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=e25ae48ad0b78f81bf82f635cde7af4d4f15b1b96dfb06c4e0051746b6857917",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pronated Curls (Back Against the Wall)": {
    image: "https://i.vimeocdn.com/video/1411135558-70f1d9476dfd86bd1c7ceef10a25ccc919b2609047fe77bfb6808abb14a63500-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pronated Curls (Back Against the Wall)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pronated Curls (Back Against the Wall).", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/697770820/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=a464c6bc127d8070cdeee6794c227118b3131e58037aa4f5a41dc916ef857afc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "PSEUDO BENCH PRESS": {
    image: "https://i.vimeocdn.com/video/1732879844-d6966ccaa0b68d36959a11ab6efd5bb6f3cc33a02bebb34a0c9d5a0185a24b53-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal PSEUDO BENCH PRESS"}]
    },
    techniquePoints: ["Lie on bench with 5 points of contact (head, shoulders, glutes, left foot, right foot) and arch upper back.", "Lower bar with elbows angled 45-70 degrees relative to torso until touching sternum.", "Press explosively back up over your shoulder joints, driving through your Deltoid Group, Pectoralis Major, Anterior Deltoid."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709433/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=434ef99d6ac14ee37f4aa93c34240a85ae514e3655c9cd67517f9499202c1950",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push up Deadlift (Dumbbell)": {
    image: "https://i.vimeocdn.com/video/1701243787-9f7e9a6ed8866d79ba4bfc8c407523dbb09aeea5ab63f07c3295bb297a6a8b8a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push up Deadlift (Dumbbell)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Trapezius & Rhomboids, Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847799809/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a764d0a73bd5bccfeb87515c7eece148e2f84d8ef4a2e9976779854b98906cbc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rear Delt Fly - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1787595490-636d5f718fe70217e4dffaca513b5062200922a0eae88c2577a8be4a5e7f88a2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rear Delt Fly - Dumbbell"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906023266/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7f8c54917eff2dd28ee5dac2f4d56297f150b78a7ec4a110356dbc86a9e55864",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rear Delt Fly - Inclined Bench": {
    image: "https://i.vimeocdn.com/video/753885258-c9b90d7215afa981256a3080d052f69d4e2ac592f496e29bcbccf7b567cc1663-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rear Delt Fly - Inclined Bench"}]
    },
    techniquePoints: ["Set bench to 30-45 degrees, plant feet firmly on the floor, and pull shoulder blades together and down.", "Unrack the weight and lower it under control to your upper chest near the clavicles.", "Press the weight up and slightly backward over your shoulders, squeezing upper pecs at the top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178681558.sd.mp4?s=a9fc2ead54a519d6c2d344908b077d4aa790d0b5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Renegade Rows - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1798860722-9ac530accde6b85aa155c6590df2bb430a1e9431ddeab8a10f612b0bc8ea92f2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Pectoralis Major", "Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Renegade Rows - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913175991/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=55cda6692134ac1f5a5566909a82d68e98065ad74cefb36519a0b47f4a608419",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Flies - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396412-85577ec5276ee91990bf82f32fa7e6bf7602e2a1562f37b487866b13027815d1-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Flies - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Flies - Dumbbell.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733684/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a0be01d7c4e090e23728656b9c3d7a7abb1c7834ec56f1d1b839d67fe0d8de7e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "REVERSE LEG EXTENSIONS + DUMBBELL": {
    image: "https://i.vimeocdn.com/video/1732879971-d9f27597498c89ae3b12b4d1b06fbe141949c15cb8f00c1fcddea8550210c551-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Gluteal Region", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal REVERSE LEG EXTENSIONS + DUMBBELL"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Trapezius & Rhomboids, Quadriceps Femoris, Gluteal Region, Erector Spinae.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709466/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=00924d4c940be438ab51222cd1620f7d90480962f4d2c0e24bb9926847f6f5d4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Lunge - Barbell": {
    image: "https://i.vimeocdn.com/video/753886622-8f3c2a655e0a7e4723dd1496ec6533c5240dd9a61aad1df9bbd980228b8840e2-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Lunge - Barbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178689155.sd.mp4?s=46c5262cccbb3a419a75c8bf398877cc8723d8d2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Romanian Dead Lift - Barbell": {
    image: "https://i.vimeocdn.com/video/753886690-46c0fd266b8fe3025bd9f626cd258d1dbda502bd122d5ca73b4a76fda87dfa75-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Romanian Dead Lift - Barbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Romanian Dead Lift - Barbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178689157.sd.mp4?s=d06294c8ba551a33d5109b0dd5df150fe75aacb6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rotating Kickbacks - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753886760-27c9a32da7c662a271bca0f3fe1dee7bd3e8d2dd87af3bc1b442ccf8f9b7476d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rotating Kickbacks - Dumbbell"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342562.sd.mp4?s=fc2bf70326cff449b21cfe2a4b2275b918add16b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rotating Kick Backs - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753886760-27c9a32da7c662a271bca0f3fe1dee7bd3e8d2dd87af3bc1b442ccf8f9b7476d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rotating Kick Backs - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Rotating Kick Backs - Dumbbell.", "Execute concentric phase with intent, driving force through your Triceps Brachii Group, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342562.sd.mp4?s=fc2bf70326cff449b21cfe2a4b2275b918add16b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rows Single Arm - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753886840-1c1faffe1901a37561270e9a6bd57ed5ab8e9f97d66ae34b5ad2e310c72d5477-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rows Single Arm - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342490.sd.mp4?s=f37657f8a878af69667d21a098721cec68b270a0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Russian Twist - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1714314618-3bacd7afc3aa8aa3385818c8ae207d0edc190d647c0fdd1fc5f8d4124fab96a9-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Russian Twist - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Russian Twist - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/857236001/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2493a354ad388b6a1c30577c8701830c8a747df0cf34007cfae316f58fd999c9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Alternating Knee Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1468794717-825d8cc4620e9efb34bfa3dcdff1081f483ac3bce89d3ea0ca5892ef89cbcfb1-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Alternating Knee Raises - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/729804406/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a24987ba42c183ea5053920e33015a2216051f9577164090bd8abebb1d92b905",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Arnold Press": {
    image: "https://i.vimeocdn.com/video/1787605279-d841639daba2d375225dfff6293f5d26e47b46747588fc9405c91c3892c055e0-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Arnold Press"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906031009/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8a1be4dd9de186d5a784043ab45c011bb064da30a1e89685a9a554ed9a89d3a0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated In and Out - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1468796932-7bbf8e4e30f5e9482cb7ff87211a221dd0112291878b7955ed9e428fb0c5dde0-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated In and Out - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated In and Out - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/729805529/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=44d10e4d9da5a399e9149a04cd69bdf9eb08a45ffc490e1994238b0372e9cdcc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder Press - Behind Head - Barbell": {
    image: "https://i.vimeocdn.com/video/753887859-7e662c59083c9af84718a781e861fe9d0fa199596405bb1531c15f524eef1b58-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder Press - Behind Head - Barbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178682181.sd.mp4?s=b58c805693e366c914d97ccfd85f160f9ce9c0a1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder Shrugs - Barbell": {
    image: "https://i.vimeocdn.com/video/753887927-3e9da76c7619cec31082ddd965d5729bce3d515f8977f5b8e358464aa2df0cd0-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder Shrugs - Barbell"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178682189.sd.mp4?s=9bb5c0e96d9d671dc34e7f1a2dbf67f0af308dbb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder Shrugs - Behind the Back Barbell": {
    image: "https://i.vimeocdn.com/video/753887976-4d84241bd87df3aee6ff82d9478fc8202346928de1025315b28bf3f902b76665-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder Shrugs - Behind the Back Barbell"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178682567.sd.mp4?s=95ad75dd61ddf88803ff6988023ae7a4488b04fc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Boat Hold - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1714277507-17466de99fe5509310c7f221e22ce825f11bd02ded95513232d1b1e12d1d874c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Boat Hold - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Side Boat Hold - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/857236024/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=729fb24f942306d202dbe2d92c1d8452ed4e3b527774ccebce1deb3b54531720",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Hold - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1468794767-7bda9c64100851b3a15fbf4a5d9bb7701d821db1a155e8f826be459179e77bc4-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Hold - Dumbbell"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/729804373/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4b38846054d3f6d1ad7b574d69a7752b093de48c7cc6d62528e1dd737db03db4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Bent Over Curls": {
    image: "https://i.vimeocdn.com/video/1411135571-fa4d6606795f10959bf71fecbe2d856c1ac2906a4d429cc28b23252fc3e6b637-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Bent Over Curls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Arm Bent Over Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/697770854/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=6e47f6f5fd7d8aa55adaf166e983c3316b77fddfdab4460557919f52b25d155d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Bent Over Rear Delt Flys - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1398911729-a4119d01d956fb2d6f965019818d83db425a1922958d5ecc21ff2b43af226a55-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Bent Over Rear Delt Flys - Dumbbell"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/690952218/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=6a471dec5678f9f939657a37a1978126faaa4ca32c7a172d2ae235297c7be611",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Chair Sit Ups - Dumbbell": {
    image: "https://i.vimeocdn.com/video/756124031-8cdab5ab02c2ab0f6f3e5f00cefd217e31e626a900f48961e11298c12ae06a37-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Chair Sit Ups - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544731.sd.mp4?s=b153b47830fd589e112a533a08f920529c40ebbc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Dumbbell Swings": {
    image: "https://i.vimeocdn.com/video/1156110899-f3de115385f60d57f1b20eb838c0a316c65331a6633a8d1e91ac0d0bff1707c7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Dumbbell Swings"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Arm Dumbbell Swings.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group, Quadriceps Femoris.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/559373197.sd.mp4?s=569819ba90d559fa57d821793e07edd497b74d5f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Tricep Kick Back": {
    image: "https://i.vimeocdn.com/video/1787618759-c4de6a697ecedc77cad9ebb8d700782e0cf69355c9301481c02f2714cfcb1136-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Tricep Kick Back"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906038444/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bf59c47796aa5f365aee1b8605072d9a7feb909c5a22dc205d4310e2c4e3fb5c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Twisting Bent Over Row DB": {
    image: "https://i.vimeocdn.com/video/1799088808-29ff62f47608f200feb8bab4ed881aa8c2b0496d2ab259b0fed418a081c9fa23-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Twisting Bent Over Row DB"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913176127/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0e61042d94e89792fcbf40d86175b050f63b574c6afc98449af457cf4d323f7c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Upright Row - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1398912088-fe92dccd2d5e60888ecec6aff54fd0a29bcb254206afea0a6bda486407129e8c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Upright Row - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/690952299/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=091a19dd22b2015526f91ea62f2412c2ec21f99a1a212d9a79b2efe2bd738019",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Romanian Deadlift - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396400-01530ebf8603cbd77d8ecda7c0757d207f69c38eaa3f03af321dc7d6387e75fe-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Romanian Deadlift - Dumbbell"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733702/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6e6bead9d43fb603e3ffa9230f482392ecf25419b5605cc1e310b37665f15d57",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sit Ups - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396388-38bfb3e35b02b4d05bbe570aaeb714e0cb3922d6b0c7430b8351cf7229fcd685-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sit Ups - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733711/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=df30b81c745e3796d39df0e832119f57a3a7aa373cbfb12bbab5c0ec237d72bb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crusher - Barbell": {
    image: "https://i.vimeocdn.com/video/753904740-9a6af4fdcdcce619539fb3ed318335bdb3588083c6c173cb8991f9fe21b4c31c-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crusher - Barbell"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178382788.sd.mp4?s=2577c2900a803718769001a2c6e2e45feeceb77f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crusher Neutral Grip - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1787612046-ff56123c84110854a4e193cfb44d18c625dcba18a815ce9e86dfbdd1235e9c36-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crusher Neutral Grip - Dumbbell"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906035970/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=587b66469cf852096808267467fe196459eefcef0acacea17025a88f4a439c45",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Spreads - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753904893-710dd2876b4bc6b47045425395c6d6561b92abfe81086a7accf72f7b3abe9e05-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Spreads - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Spreads - Dumbbell.", "Execute concentric phase with intent, driving force through your Deltoid Group, Anterior Deltoid, Trapezius & Rhomboids.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178677283.sd.mp4?s=b879cc366a1ab263e9b216ef93623883e0df7130&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat + Calf Raise Dumbbell": {
    image: "https://i.vimeocdn.com/video/1696537370-bb54993c1a3516e98c3ee64f755fba11a41277a6986158116318b619a008d1f5-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat + Calf Raise Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Calf Group, Gluteal Region and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414804/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4ee8319e911d4145f2ce1282d1f426ccf88ba3288ad2405557493fe769c5f9f4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Lunge Dumbbells": {
    image: "https://i.vimeocdn.com/video/1701662767-944e67574a9fc5ce53492355e199bcb3ebbf08e70fa8d81b802458de6f50d58e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Lunge Dumbbells"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group, Calf Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847811790/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7dca960c425d4b8f0a671b8cf7ca34403b142d0e95fa78fd97a2aa2c72d3f516",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Open & Close - Dumbbell": {
    image: "https://i.vimeocdn.com/video/943590922-f0f43abe2a90b292ab5102574b0f0a0dc25d3b7f87a9492e2db342d10afa14f9-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Open & Close - Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/449781768.sd.mp4?s=3ba01960392a7bc114ac083b132db1eb4e393123&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squats - Barbell": {
    image: "https://i.vimeocdn.com/video/753904939-edd0b92a7a02a4b4c1c6194e69848c55dfb024023a0e3b506a28e029c0e1f8da-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squats - Barbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178685653.sd.mp4?s=84fef63d27dd25d4452b3b5e67377dc122b33206&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squats - Dumbbell": {
    image: "https://i.vimeocdn.com/video/754885094-4293b2adbfa7d686e6cf974d69270342d72b8f4e9e6ae1cab679ba79f12aae18-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squats - Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178689582.sd.mp4?s=28802a8161a47359fdaf36dc13342a3cc0d48bb9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Staggered Romanian Deadlifts": {
    image: "https://i.vimeocdn.com/video/1702197232-6f46d3a4272b0b9e5bdaa308920e940f59329c52a35e70590631f258b02cde43-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Staggered Romanian Deadlifts"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/848510757/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bf122eebc2f649daa0673bffa218a07c5c53039360013a312b016ea563dcbaf2",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Close and Wide Shoulder Press - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1343840184-9aea6820c7bd5a6b33bd47a1b4fb4ff6452f7d939af08f3b958aefb3e07054ff-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Close and Wide Shoulder Press - Dumbbell"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/663948457.sd.mp4?s=2990e33b48e13b8acc345d1d83fd94018d647457&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Side Crunch - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753905839-a95fa2cce2677536f32a8b7df8a76d33873d7b7b462b4ab1cb472c2bcb091e21-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Side Crunch - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178682928.sd.mp4?s=0908607f255032a8a4fc3d5e532c7317a69b0810&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Step Ups - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753905908-f2b10f79377d68f132cdcc3ccf35ad0a8bc7fab376c786711cdeb06534634aa0-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Step Ups - Dumbbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342597.sd.mp4?s=eac887db966d7c26299c90a660a5b94c51ef7eff&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "STRAIGHT ARM FRONTAL RAISES + HOLD Barbell": {
    image: "https://i.vimeocdn.com/video/1732879885-b890aa2487cfd08b0b995782ff105e60946fe1093d8175e5216dc75a8758fb23-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal STRAIGHT ARM FRONTAL RAISES + HOLD Barbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709566/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=67897e1c43d288cfdc09c83d7b66a49238f709899946cafa12e3ff8aa65ea8c4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Hold (Variation 2) - with Dumbbells": {
    image: "https://i.vimeocdn.com/video/1214102602-5f77c835262cdd38c0b42bd9a01ee8c438d7028dd2236a2e41e4302a386eb7ad-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Hold (Variation 2) - with Dumbbells"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Hold (Variation 2) - with Dumbbells.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group, Anterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/586833165.sd.mp4?s=d7ca428c16b4976a8a50f16411d98506c9e662ae&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Hold - with Dumbbells": {
    image: "https://i.vimeocdn.com/video/1214103116-2c568a87d2a4e7578bffea3e7d9f4ce5af25532bb9099c72c5439c2d90ad3af2-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Hold - with Dumbbells"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Hold - with Dumbbells.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group, Anterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/586833310.sd.mp4?s=1faff5c99e2408c13dd7331cb98ec72135b9ee78&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1214103032-0b745088e8dbdb62917505cd1567e8fe32f8bb77f88922cfcd35dc155853402c-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Raises - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/586833450.sd.mp4?s=96e17c1a6d2bfc0dddd8d8c11c19aa017b2421c2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Dead Lift - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753905979-c40af4528547e532649e0dbdc5ae41f18fe6a95915d74c0b24c86d934f8eec3e-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Dead Lift - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Sumo Dead Lift - Dumbbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178690057.sd.mp4?s=679f14fdfd4eba2800b49cae6124fc241a0e9373&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Squats - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1106503513-2acb81590b7c33d485474d2c9396f2bcf38a3ddfd0a44efc54a27edd965ccf5f-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Squats - Dumbbell"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/534557492.sd.mp4?s=9a1c3dc6fbb890392ec054a64f0031bb1320e149&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Bicep Curls": {
    image: "https://i.vimeocdn.com/video/981486071-128edaf3b540f615f2874e95dbc59bc8524fe9a879bec0b67c4b945f90d17a07-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Bicep Curls"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/471778538.sd.mp4?s=936063e19b4a045a0bb5cffa6c3d1e3f9d98d0fe&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Curls (Back Against the Wall)": {
    image: "https://i.vimeocdn.com/video/1411138151-2707df7c51aef63c9f4dc383092bdf152dd24bc6aefa3d94938c56a6cd44c10d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Curls (Back Against the Wall)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Supinated Curls (Back Against the Wall).", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/697770872/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=2c7ae85b0964d6625a45ae8af5d70c83e4e2f0968b1bb74fcd8403b6bd642743",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated to Pronated Curls": {
    image: "https://i.vimeocdn.com/video/1787621286-058a9416ca201ce59f1c7707e9564038613a06e68b3bd726d534d40025bd62f7-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated to Pronated Curls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Supinated to Pronated Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906042476/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=82eb2cc292f94f5e1c4c0139281d11901ca4f028f2cffbfc9451b9e91c5fd7b5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Twisting Dumbell Press": {
    image: "https://i.vimeocdn.com/video/1422791353-8eea792514179e08412079fcbe2d2ed40dba8d33e61177ae7847375e765546ba-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Twisting Dumbell Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Supinated Twisting Dumbell Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/704601830/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=d9b31e0f999717af70322163ff24cbfeeec192888834e9a5e782c3dcfa9193ac",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Lunges Dumbbells": {
    image: "https://i.vimeocdn.com/video/1696537415-6286a74661a54f423b079c4f6d502946ecad148f55dbca9ffad8f92eab895c13-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Lunges Dumbbells"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844414858/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=46aabe35b83f47ed75e0d18f810b7268bdbd48876e3a4b518fd7329e3d5c2a43",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tap Lateral Raises - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1732879946-626d3c6bcdb70eabb21c70e1f347a03ac034a5d40c140dffdc037651295a3e7b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tap Lateral Raises - Dumbbell"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709374/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b0d2c5c54a297f2b04d6cb0be6288700d7be49e8b00bb7131c6f7ef4be3a031d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Thrusters - Barbell": {
    image: "https://i.vimeocdn.com/video/753906035-5183745dbf1a2fa15e664758760c43cbc9ff01fb8812dcac75d780cb065676c3-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Deltoid Group", "Gluteal Region", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Thrusters - Barbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Thrusters - Barbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Deltoid Group, Gluteal Region, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178682938.sd.mp4?s=784f1a1e303a4c67905e7e300b79cb8e19034cb0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Thrusters - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698396428-ee8689a14f5b956ec1aa93c2eb2a3b6667aa84911958a32f03dd68f60e033643-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Deltoid Group", "Gluteal Region", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Thrusters - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Thrusters - Dumbbell.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Deltoid Group, Gluteal Region, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733722/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f1e185f89e5d2827473a05b799f09d6ccdb2013e3bc1f49d9a71eed8099815fa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toe Touches - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1135518181-c3157c6f260999422f2f5b04620cad2e98ab592fc590652dc92cccbec7dfaacd-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toe Touches - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toe Touches - Dumbbell.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/548462431.sd.mp4?s=0b726f374cfda7ef5c4c9bc8d853701bcb40a4fd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Kick Backs - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1701243839-d4fcb19745cf505a0a6b79a75b250ffce90fe68021e5aacf5b8e1c13e6d9963d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Kick Backs - Dumbbell"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847799846/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f5beae104d8cfc4513864783cf895195ab48eb7b05620bda99ac4f287771e3bd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Twisting Dumbbell Press": {
    image: "https://i.vimeocdn.com/video/1422791454-181526e0c222efb2be82afd58a649207f02aaeab2d92195222aba9c56c107ffb-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Twisting Dumbbell Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Twisting Dumbbell Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/704601884/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=bc0bc2c1112e4407819b7dfbc658307c2d405ab225ecf3042ee5ceb0f9434619",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Twisting Hammer Curls - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1787593005-be7bfed5913830351bc57fb884f8b48ec3de115d285c2e8dff3628b289bc3e0a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Twisting Hammer Curls - Dumbbell"}]
    },
    techniquePoints: ["Hold dumbbells with a neutral grip (palms facing each other) at your sides.", "Curl weight upward while keeping elbows pinned close to your torso.", "Squeeze brachialis and forearm at top, then lower slowly to full arm lockout."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/905845868/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2c87b6c3ad004a24b7f56c5a1d0424931620334940d4934ca3480431f6904be8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Twisting Sit Up - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1714326463-f2b51181795ae8b0523079701ac71a443b85e7a6f1d4b3f3d43f8870b208bf50-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Twisting Sit Up - Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/857236041/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f10deb36e57f6b67196a8b180d308dbc7ea5f74d9867b1ffd1332db9470bf64b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upright Rows - Barbell": {
    image: "https://i.vimeocdn.com/video/753907093-7d679afb10408529975e7fee67b0fb0763573d27c4e94cebc80bdeb5469425f4-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upright Rows - Barbell"}]
    },
    techniquePoints: ["Hinge at hips to a 45-degree angle (or parallel to floor for Pendlay), keeping spine neutral and knees slightly bent.", "Grip bar slightly wider than shoulder-width and pull bar to your lower ribcage/belly button.", "Squeeze shoulder blades together at top contraction, then lower under full control without rounding lower back."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178684149.sd.mp4?s=d0f1ba2cb94c2d047734f90ee21bf7a60aed1972&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upright Rows - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753907150-5ff698650a59cc0bc7fd8d37bbe41bd630cc8f71c125608d8c08e2c3f8d4a72d-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upright Rows - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/178684184.sd.mp4?s=31f2513e77836e5c32c1aa50f9721cff7ff5effb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upright Rows to Forward Extension - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753907203-8a2eee3fdf1af2785d94c03b161aa37a31cd0c8b57e896ef829689b6ca07d4da-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upright Rows to Forward Extension - Dumbbell"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/182342605.sd.mp4?s=9360023c6353bb704cbb4fc6ae90cb14210d573d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Walking Lunges - Barbell": {
    image: "https://i.vimeocdn.com/video/756124135-099b24b121e87487407d2dd18bc77a459ca1665cddec9359c93d1efc577f90e1-d_1920x1080",
    subcategory: "Barbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Walking Lunges - Barbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/314544789.sd.mp4?s=ac094f587e41aa3aea40781a3e3380d66b4c3d38&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Walking Lunges - Dumbbell": {
    image: "https://i.vimeocdn.com/video/753907262-dd2b65da9b567d077b1ca30c13bc2b2533d6c11ff71a546b36356a6cf9898230-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Walking Lunges - Dumbbell"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/185543839.sd.mp4?s=63d1dcb305a11291b3f68c9e975ee1160af6928c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Assisted Dumbbell Curls": {
    image: "https://i.vimeocdn.com/video/1593281827-6b0b8f239e8385fa7772c529eeccdf853a09875c9ed5d10b271f65d252f75e40-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Assisted Dumbbell Curls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Wall Assisted Dumbbell Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/791667096/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6e9b861d96e39d5bc060bbec8de8cc783d4a98f02c08fba7d48faaf03c60f277",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Calf Raises Dumbbell": {
    image: "https://i.vimeocdn.com/video/1698406832-db2a232989b0344ac0ab7348fdea92a1304cfe2bf2f09403a58dc65dfc161065-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Calf Raises Dumbbell"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845740524/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e1a2fdfcf158cf1931134e1a6445cfcab41fa50f6e41426f0e20455e3919af74",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wrist Curls (Pronated Grip) - Dumbbell": {
    image: "https://i.vimeocdn.com/video/1787319747-a651afef5b6da507cf8c994b925a6047fac1dcb097ab09da0deab90810c6db0a-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Forearm Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wrist Curls (Pronated Grip) - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Wrist Curls (Pronated Grip) - Dumbbell.", "Execute concentric phase with intent, driving force through your Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/905840388/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d55bfbb2006cf1dab674bda6130b25b4260497e9ccc86e0b9a476d9b5629bee9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wrist Curls (Supinated Grip) - Dumbbell": {
    image: "https://i.vimeocdn.com/video/790284540-0cee1fce3c059da5437139a5b82b75b5ab22714beca464c3197e4ce7883a336b-d_1920x1080",
    subcategory: "Dumbbell",
    muscles: {
      strength: ["Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Forearm Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wrist Curls (Supinated Grip) - Dumbbell"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Wrist Curls (Supinated Grip) - Dumbbell.", "Execute concentric phase with intent, driving force through your Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://player.vimeo.com/external/341620989.sd.mp4?s=6132f820e5a2404b871771fc05aadcd2e88d650c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Barbell Incline Press": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["Pecho"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Barbell Incline Press.", "Execute concentric phase with intent, driving force through your Pecho.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Barbell%20Incline%20Press",
    substitutions: ["Smith Machine Incline Press", "DB Incline Press"]
  },
  "Incline DB Y-Raise": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["Deltoides lateral"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Incline%20DB%20Y-Raise",
    substitutions: ["Cable Y-Raise", "Machine Lateral Raise"]
  },
  "Kelso Shrug": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Espalda media"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Kelso%20Shrug",
    substitutions: ["Seated Cable Kelso Shrug", "Incline DB Kelso Shrug"]
  },
  "Dragon Flag": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Abdominales"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Dragon%20Flag",
    substitutions: ["Bent-Knee Dragon Flag", "Lying Leg Raise"]
  },
  "Squat (Your Choice)": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Cu\u00e1driceps"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Cu\u00e1driceps and locking glutes at top."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Squat%20%28Your%20Choice%29",
    substitutions: ["Barbell Back Squat", "Barbell Front Squat", "Pendulum Squat", "Hack Squat", "Belt Squat", "Smith Machine Squat"]
  },
  "Chest-Supported T-Bar Row": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Espalda media"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Espalda media.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Chest-Supported%20T-Bar%20Row",
    substitutions: ["Chest-Supported Machine Row", "Chest-Supported DB Row"]
  },
  "Modified Zottman Curl": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["B\u00edceps"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Modified Zottman Curl.", "Execute concentric phase with intent, driving force through your B\u00edceps.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Modified%20Zottman%20Curl",
    substitutions: ["DB Hammer Curl", "Preacher Hammer Curl"]
  },
  "DB Wrist Curl / DB Wrist Extension": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["Antebrazos"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Antebrazos.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+DB%20Wrist%20Curl%20DB%20Wrist%20Extension",
    substitutions: ["Cable Wrist Curl", "Cable Wrist Extension"]
  },
  "Alternating DB Curl": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["B\u00edceps"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your B\u00edceps.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Alternating%20DB%20Curl",
    substitutions: ["Barbell Curl", "EZ-Bar Curl"]
  },
  "Dead Hang (optional)": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Antebrazos"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Dead Hang (optional).", "Execute concentric phase with intent, driving force through your Antebrazos.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Dead%20Hang%20%28optional%29",
    substitutions: ["Dumbbell Press", "Barbell Row"]
  },
  "EZ-Bar Cable Curl": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["B\u00edceps"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your B\u00edceps.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+EZ-Bar%20Cable%20Curl",
    substitutions: ["EZ-Bar Curl", "DB Curl"]
  },
  "45° Incline DB Press": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "Dumbbell / Barbell",
    muscles: {
      strength: ["Pecho superior"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 45\u00b0 Incline DB Press.", "Execute concentric phase with intent, driving force through your Pecho superior.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+45%20Incline%20DB%20Press",
    substitutions: ["45\u00b0 Incline Barbell Press", "45\u00b0 Incline Machine Press"]
  },
  "Walking Lunge": {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    subcategory: "General Strength",
    muscles: {
      strength: ["Cu\u00e1driceps"],
      stability: ["Scapular & Thoracic Muscles", "Core"],
      mobility: [{"muscle": "General", "level": "Low", "description": "Standard ROM for lifting"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Free Weights",
    youtubeLink: "https://www.youtube.com/results?search_query=Jeff+Nippard+Walking%20Lunge",
    substitutions: ["Smith Machine Static Lunge", "DB Static Lunge"]
  },
};
