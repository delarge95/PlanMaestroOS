import type { ExerciseInfo } from '../types';

export const weightedCalisthenicsExercises: { [key: string]: ExerciseInfo } = {
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
  }
};