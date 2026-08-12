import type { ExerciseInfo } from '../types';

export const bandsAndAccessoriesExercises: Record<string, ExerciseInfo> = {
  "Ab Wheel": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Core (Anti-Extension)",
    attachments: ["Ab Wheel"],
    muscles: {
      strength: ["Rectus Abdominis", "Lats", "Obliques"],
      stability: ["Entire Core", "Serratus Anterior", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion under load to achieve a proper extended position." }
      ]
    },
    techniquePoints: [
      "Kneel on the floor, holding the ab wheel directly under your shoulders.",
      "Brace your core as if you're about to be punched, and slightly tuck your pelvis to keep your lower back safe.",
      "Roll forward slowly, keeping your arms straight and allowing your torso to lower towards the floor.",
      "Extend as far as you can without letting your lower back sag or arch.",
      "Use your abs and lats to forcefully pull the wheel back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=QWpHMjZ9wDo",
    substitutions: ["Swiss Ball Rollout", "Barbell Rollout", "Long-Lever Plank"]
  },
  "Ab Wheel Rollout": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Core (Anti-Extension)",
    attachments: ["Ab Wheel"],
    muscles: {
      strength: ["Rectus Abdominis", "Lats", "Obliques"],
      stability: ["Entire Core", "Serratus Anterior", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion under load to achieve a proper extended position." }
      ]
    },
    techniquePoints: [
      "Kneel on the floor, holding the ab wheel directly under your shoulders.",
      "Engage your core and glutes, keeping a neutral or slightly rounded lower back.",
      "Slowly roll the wheel forward, maintaining straight arms and a rigid torso.",
      "Go as far as your strength allows without losing form or arching your back.",
      "Use your core and lats to pull yourself back to the starting position with control."
    ],
    youtubeLink: "https://youtu.be/1G0y8D5rFDc?t=308",
    substitutions: ["Swiss Ball Rollout", "Barbell Rollout", "TRX Rollout"]
  },
  "Ankle Weight Glute Kickback": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Ankle Weights"],
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core", "Gluteus Medius (of standing leg)"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires good hip extension range of motion to achieve a full contraction." }
      ]
    },
    techniquePoints: [
      "Secure ankle weights to both ankles. Stand and hold onto a stable surface for balance.",
      "Keeping your core tight and back straight, extend one leg straight behind you.",
      "Focus on squeezing the glute of the working leg to lift the weight. Avoid using momentum.",
      "Raise the leg as high as possible without arching your lower back.",
      "Lower the leg slowly and with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=UKP3NlUCSHI",
    substitutions: ["Cable Glute Kickback", "Band Kickback", "Bodyweight Donkey Kickback"]
  },
  "Ankle Weight Hip Abduction": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Ankle Weights"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus"],
      stability: ["Core", "Obliques"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip abduction." }
      ]
    },
    techniquePoints: [
      "Secure ankle weights. Stand upright, holding onto a support for balance.",
      "Keeping your leg straight, lift it out to the side.",
      "Focus the movement on the side of your hip (gluteus medius), avoiding leaning your torso.",
      "Lift as high as you can with good form, then lower slowly.",
      "Can also be performed lying on your side for greater stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qVd4XeGq_nY",
    substitutions: ["Cable Hip Abduction", "Band Lateral Walk", "Side-Lying Hip Abduction"]
  },
  "Band Bicep Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Arm Isolation (Biceps)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Biceps Brachii", "Brachialis"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires elbow flexion and supination." }
      ]
    },
    techniquePoints: [
      "Stand on the middle of a resistance band with one or both feet.",
      "Hold the handles or ends of the band with an underhand grip (palms facing up).",
      "Keep your elbows pinned to your sides.",
      "Curl the band up towards your shoulders, squeezing your biceps at the top.",
      "Lower the band slowly, resisting the tension on the way down."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3g-1J2KkX_8",
    substitutions: ["Dumbbell Curl", "Cable Curl", "TRX Bicep Curl"]
  },
  "Band Chest Press": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Push",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires basic horizontal adduction and shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Anchor a resistance band behind you at chest height, or loop it around your upper back.",
      "Grab the band with both hands and step forward into a staggered stance to create tension.",
      "Press the band forward until your arms are fully extended.",
      "Focus on squeezing your chest muscles at the peak of the movement.",
      "Return to the start with control, resisting the band's pull."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vNSZmlz7kFA",
    substitutions: ["Band Push-Up", "Cable Crossover", "Dumbbell Bench Press"]
  },
  "Band Floor Press": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Push",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Limited shoulder extension due to the floor, making it joint-friendly." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Loop a resistance band across your upper back, holding the ends under your hands.",
      "Start with your upper arms on the floor and elbows bent.",
      "Press your hands up towards the ceiling until your arms are fully extended.",
      "The floor limits the range of motion, emphasizing the triceps and lockout strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=70GynT-L3s0",
    substitutions: ["Barbell Floor Press", "Dumbbell Floor Press", "Close-Grip Push-Up"]
  },
  "Band Front Raise": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Shoulder Isolation",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Anterior Deltoids"],
      stability: ["Core", "Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Stand on the middle of a band with one or both feet.",
      "Hold the band with an overhand grip, arms straight down in front of you.",
      "Keeping your arms straight, raise the band in front of you up to shoulder height.",
      "Avoid using momentum or leaning back. The movement should be controlled.",
      "Lower slowly to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bcVKR_IPz4U",
    substitutions: ["Dumbbell Front Raise", "Plate Front Raise", "Cable Front Raise"]
  },
  "Band Glute Bridge": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Activation",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Gluteus Maximus", "Gluteus Medius"],
      stability: ["Core", "Hamstrings"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip extension and abduction." }
      ]
    },
    techniquePoints: [
      "Place a mini-band just above your knees.",
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Press your knees outward against the band to create tension.",
      "Drive through your heels to lift your hips toward the ceiling, squeezing your glutes.",
      "Maintain outward pressure on the band throughout the entire movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GdSolgmyW68",
    substitutions: ["Bodyweight Glute Bridge", "Knee Band Hip Thrust", "Band Lateral Walk"]
  },
  "Band Good Morning": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Hip Hinge & Posterior Chain",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires significant hamstring flexibility to hinge deeply with a flat back." },
        { muscle: "Hip", level: "Moderate", description: "Requires good hip hinge mechanics." }
      ]
    },
    techniquePoints: [
      "Stand on the middle of a heavy resistance band with feet hip-width apart.",
      "Loop the other end of the band around the back of your neck, holding it in place.",
      "Keeping your back straight and knees slightly bent, hinge at your hips.",
      "Lower your torso until it's nearly parallel to the floor, feeling a stretch in your hamstrings.",
      "Drive your hips forward powerfully to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=f23vXjoG2e8",
    substitutions: ["Barbell Good Morning", "Romanian Deadlift", "Kettlebell Swing"]
  },
  "Band Hamstring Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Leg Isolation (Hamstrings)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Hamstrings"],
      stability: ["Core (if standing or lying)"],
      mobility: [
        { muscle: "Knee", level: "Low", description: "Requires knee flexion." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a low, sturdy point.",
      "Loop the other end around your ankle. Lie on your stomach facing away from the anchor.",
      "Start with your leg straight and the band under tension.",
      "Curl your heel towards your glute, squeezing your hamstring.",
      "Return to the start slowly and with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=82NyUACPK3M",
    substitutions: ["Lying Leg Curl", "Swiss Ball Leg Curl", "Sliding Leg Curl"]
  },
  "Band Kickback": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires hip extension range of motion." }
      ]
    },
    techniquePoints: [
      "Start on all fours with a mini-band looped around the arches of both feet.",
      "Keeping your core engaged and back flat, extend one leg straight back.",
      "Drive the heel towards the ceiling, focusing on a powerful glute contraction.",
      "Avoid arching your lower back by keeping your abs braced.",
      "Lower the leg with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5rqwHhRipmw",
    substitutions: ["Cable Glute Kickback", "Ankle Weight Glute Kickback", "Donkey Kickback"]
  },
  "Band Lat Pullover": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Pull",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Lats", "Serratus Anterior", "Pectorals"],
      stability: ["Core", "Triceps"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to achieve a full stretch on the lats." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a high point (e.g., top of a door).",
      "Stand facing the anchor, grab the band, and hinge at the hips with a flat back.",
      "With arms nearly straight, pull the band down in a wide arc towards your hips.",
      "Focus on engaging your lats to initiate and perform the movement.",
      "Return slowly to the starting position, feeling a stretch in your lats."
    ],
    youtubeLink: "https://youtu.be/SgMEzFJlT9g",
    substitutions: ["Cable Lat Pullover", "Dumbbell Pullover", "Straight-Bar Lat Prayer"]
  },
  "Band Lateral Walk": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Activation",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus", "Tensor Fasciae Latae (TFL)"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip abduction." }
      ]
    },
    techniquePoints: [
      "Place a mini-band around your ankles or just above your knees.",
      "Assume a slight squat or athletic stance with your feet shoulder-width apart.",
      "Take a controlled step sideways, keeping continuous tension on the band.",
      "Follow with the other foot, but do not let your feet touch.",
      "Keep your toes pointed forward and avoid leaning your torso or waddling."
    ],
    youtubeLink: "https://youtu.be/u8xxroQrqjU",
    substitutions: ["Machine Hip Abduction", "Cable Hip Abduction", "Side-Lying Hip Abduction"]
  },
  "Banded Abduction (Seated)": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Activation",
    attachments: ["Resistance Band (Mini)", "Bench"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus", "Tensor Fasciae Latae (TFL)"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires basic hip abduction while seated upright." }
      ]
    },
    techniquePoints: [
      "Sit tall on a bench with a mini-band looped just above your knees and feet flat on the floor.",
      "Brace your core and maintain a neutral spine while gripping the bench lightly for support.",
      "Drive your knees outward against the band until you feel the glutes contract.",
      "Pause briefly, then return under control without letting the band snap your knees together.",
      "Keep tension on the band throughout the entire set by not allowing the knees to touch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=MA6HslRZ6b8",
    substitutions: ["Machine Hip Abduction", "Standing Band Hip Abduction", "Side-Lying Hip Abduction"]
  },
  "Band Overhead Press": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Push (Vertical)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff", "Upper Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and external rotation for a safe overhead position." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Good T-spine extension is needed to press overhead without compensating with the lower back." }
      ]
    },
    techniquePoints: [
      "Stand on the middle of a resistance band with both feet shoulder-width apart.",
      "Hold the ends of the band at shoulder height with palms facing forward.",
      "Press the band straight overhead until your arms are fully extended and biceps are near your ears.",
      "Keep your core tight and glutes squeezed to prevent arching your back.",
      "Lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=90JgT5p2zE0",
    substitutions: ["Dumbbell Shoulder Press", "Barbell Overhead Press", "Machine Shoulder Press"]
  },
  "Band Pull-Apart": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Pull (Scapular)",
    attachments: ["Resistance Band (Light)"],
    muscles: {
      strength: ["Rear Deltoids", "Rhomboids", "Trapezius (Mid and Lower)"],
      stability: ["Scapular Stabilizers", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires horizontal abduction." }
      ]
    },
    techniquePoints: [
      "Hold a light resistance band with both hands, arms straight out in front at shoulder height.",
      "Keep your arms straight and initiate the movement by squeezing your shoulder blades together.",
      "Pull the band apart until it touches your chest.",
      "Focus on retracting your scapula, not just pulling with your arms.",
      "Return to the start with control. Excellent for posture and shoulder prehab."
    ],
    youtubeLink: "https://youtu.be/bN_lGBqZURw",
    substitutions: ["Reverse Pec Deck", "Face Pull", "Bent Over Reverse Dumbbell Flye"]
  },
  "Band Pullover": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Pull",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Lats", "Serratus Anterior", "Pectorals", "Triceps (Long Head)"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to get a deep stretch on the lats." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a low point or stand on it.",
      "Lie on your back and hold the band with both hands, arms extended over your chest.",
      "Keeping a slight bend in your elbows, lower the band in an arc behind your head.",
      "Lower as far as you can while maintaining a stable core and feeling a stretch in your lats.",
      "Use your lats to pull the band back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=87JnP8dFbS14",
    substitutions: ["Dumbbell Pullover", "Cable Lat Pullover", "Straight-Bar Lat Prayer"]
  },
  "Band Push-Up": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Push",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension to remain flat on the floor." }
      ]
    },
    techniquePoints: [
      "Loop a resistance band across your upper back and hold the ends under your hands.",
      "Assume a standard push-up position.",
      "Perform a full range of motion push-up, lowering your chest towards the floor.",
      "The band provides accommodating resistance, increasing tension as you press up.",
      "This overloads the top portion of the movement and improves lockout strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    substitutions: ["Weighted Push-Up", "Band Chest Press", "Close-Grip Bench Press"]
  },
  "Band Squat": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Lower Body Compound",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Good dorsiflexion is needed for depth." },
        { muscle: "Hips", level: "Moderate", description: "Good hip flexion and external rotation are needed." }
      ]
    },
    techniquePoints: [
      "Stand on a resistance band with feet shoulder-width apart.",
      "Loop the other end of the band over your shoulders and traps, similar to a barbell back squat.",
      "Keeping your chest up and back straight, descend into a squat.",
      "Go as deep as your mobility allows while maintaining good form.",
      "The band adds accommodating resistance, making the top of the squat more challenging."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=MJQHqSJ6xFo",
    substitutions: ["Goblet Squat", "Bodyweight Squat", "Kettlebell Squat"]
  },
  "Band Tricep Extension": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Arm Isolation (Triceps)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Triceps (especially Long Head)"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion to get the arm in the overhead position." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a high point.",
      "Face away from the anchor, grab the band, and bring it overhead.",
      "Keep your upper arms stationary and next to your ears.",
      "Extend your elbows until your arms are straight, flexing the triceps.",
      "Slowly return to the starting position, feeling a stretch in the triceps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-rFYprhq6PQ",
    substitutions: ["Overhead Cable Triceps Extension (Rope)", "Dumbbell Skull Crusher"]
  },
  "Band Tricep Press Down": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Arm Isolation (Triceps)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires elbow extension." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a high point.",
      "Face the anchor and grab the band with both hands, using an overhand grip.",
      "Keep your elbows pinned to your sides throughout the movement.",
      "Press the band down until your arms are fully extended.",
      "At the bottom, you can separate the ends of the band to increase tricep contraction.",
      "Control the band as it returns to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xW8L2POShSA",
    substitutions: ["Triceps Pressdown (Rope)", "Triceps Pressdown (Bar)", "Dip"]
  },
  "Banded Copenhagen Plank": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Core (Lateral & Adductors)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Adductors", "Obliques"],
      stability: ["Entire Core", "Gluteus Medius (of bottom leg)", "Shoulder Girdle"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip adduction strength and endurance." }
      ]
    },
    techniquePoints: [
      "Anchor a band to a low, sturdy point.",
      "Lie in a side plank position on your forearm, further away from the anchor.",
      "Hook your top foot into the band.",
      "Lift your hips off the floor, keeping your body in a straight line.",
      "Your top leg will be supported by the band, forcing your adductors to work intensely.",
      "Hold for the prescribed time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5slLPSpQP0g",
    substitutions: ["Copenhagen Hip Adduction (with bench)", "Side Plank"]
  },
  "Eccentric Accentuated Band Pulldown": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Pull",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "" }
      ]
    },
    techniquePoints: [
      "Anchor a band overhead. Perform this exercise unilaterally (one arm at a time).",
      "Use both hands to pull the band down to your chest (the concentric phase).",
      "Release one hand and use only the working arm to slowly control the band back to the top (the eccentric phase).",
      "The eccentric phase should be significantly slower (e.g., 3-5 seconds).",
      "This allows you to overload the negative portion of the rep."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dcCgxDBMtAA",
    substitutions: ["Eccentric-Accentuated Pull-Up", "Lat Pulldown (with heavy negative)"]
  },
  "Hand Gripper": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Grip & Forearm Training",
    attachments: ["Hand Gripper"],
    muscles: {
      strength: ["Forearm Flexors", "Hand Muscles"],
      stability: [],
      mobility: [
        { muscle: "Finger/Wrist", level: "Low", description: "Requires flexion of finger joints." }
      ]
    },
    techniquePoints: [
      "Select a gripper with appropriate resistance.",
      "Place the gripper in your hand with one handle against your palm and the other against your fingers.",
      "Squeeze the handles together until they touch.",
      "Focus on a powerful crushing motion.",
      "Release slowly to also work the eccentric portion. Can be used for holds, negatives, and max reps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6l1FyKL_dmg",
    substitutions: ["Plate Pinch", "Farmer's Walks", "Wrist Roller"]
  },
  "Head Harness Neck Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Neck Harness", "Weight Plate or Band"],
    muscles: {
      strength: ["Neck Flexors (Sternocleidomastoid)"],
      stability: [],
      mobility: [
        { muscle: "Cervical Spine", level: "Low", description: "Requires controlled neck flexion." }
      ]
    },
    techniquePoints: [
      "Wear the neck harness and attach a light weight or band to the front chain.",
      "Lie on your back on a bench with your head off the end.",
      "Start with your head tilted back, looking towards the ceiling.",
      "Slowly curl your head forward, bringing your chin towards your chest.",
      "Control the movement back to the start. Use very light weight and perfect form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=e0PyIvz7--U",
    substitutions: ["Plate-Loaded Neck Curl", "Manual Resistance Neck Flexion"]
  },
  "Head Harness Neck Extension": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Neck Harness", "Weight Plate or Band"],
    muscles: {
      strength: ["Neck Extensors (Splenius, Upper Trapezius)"],
      stability: [],
      mobility: [
        { muscle: "Cervical Spine", level: "Low", description: "Requires controlled neck extension." }
      ]
    },
    techniquePoints: [
      "Wear the neck harness and attach a light weight or band to the back chain.",
      "Sit on a bench and hinge forward at your hips, keeping your back straight.",
      "Start with your chin tucked towards your chest.",
      "Slowly extend your neck, looking up and forward until your head is aligned with your spine.",
      "Control the movement back to the start. Prioritize safety and form over weight."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5srjn2UjzDY",
    substitutions: ["Plate-Loaded Neck Extension", "Manual Resistance Neck Extension"]
  },
  "Isometric Yoga Ball Wall Neck Hold": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Yoga Ball or Stability Ball"],
    muscles: {
      strength: ["All Neck Muscles (Isometric)"],
      stability: ["Cervical Spine Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Place a yoga or Swiss ball between the side of your head and a wall.",
      "Lean into the ball to create gentle, constant pressure.",
      "Hold this isometric contraction for a set amount of time (e.g., 20-30 seconds).",
      "Repeat on all four sides: right, left, front (forehead), and back.",
      "This is a safe way to build foundational neck stability."
    ],
    youtubeLink: "https://youtu.be/pds731yXRnY?si=01fQSGru2VrRVR-2",
    substitutions: ["Neck Bridge (Bodyweight)", "Manual Resistance Neck Isometrics"]
  },
  "Landmine Front Squat": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Lower Body Compound",
    attachments: ["Barbell", "Landmine Attachment"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Upper Pectorals (Isometric)"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "The arc of the bar is more forgiving on ankle mobility than a barbell squat." },
        { muscle: "Hips", level: "Moderate", description: "Allows for a deep squat with an upright torso." }
      ]
    },
    techniquePoints: [
      "Place one end of a barbell into a landmine attachment.",
      "Cup the other end (the sleeve) with both hands at chest level.",
      "Stand with feet shoulder-width apart and perform a squat.",
      "The fixed arc of the barbell encourages an upright torso and puts less stress on the lower back.",
      "Drive through your heels to return to the standing position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6xDVURCFkDw",
    substitutions: ["Goblet Squat", "Barbell Front Squat", "Belt Squat"]
  },
  "Neck Bridge": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: [],
    muscles: {
      strength: ["All Neck Muscles"],
      stability: ["Entire Spine", "Core", "Glutes"],
      mobility: [
        { muscle: "Cervical Spine", level: "High", description: "Extreme mobility and strength required. High risk if done improperly." },
        { muscle: "Thoracic Spine", level: "High", description: "Requires significant thoracic extension." }
      ]
    },
    techniquePoints: [
      "WARNING: This is a high-risk, advanced exercise for wrestlers and grapplers.",
      "Lie on your back and bridge up, supporting your weight on your feet and the crown of your head.",
      "Start with most of the weight supported by your hands and feet.",
      "Gradually increase the pressure on your head over many weeks and months.",
      "Progress very slowly and with extreme caution. Discontinue if any pain occurs."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3aeMAvPgIsg",
    substitutions: ["Head Harness Neck Extension", "Isometric Yoga Ball Wall Neck Hold"]
  },
  "Neck Flexion/Extension": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Resistance Band or Hand"],
    muscles: {
      strength: ["Neck Flexors", "Neck Extensors"],
      stability: [],
      mobility: [
        { muscle: "Cervical Spine", level: "Low", description: "Involves basic neck range of motion." }
      ]
    },
    techniquePoints: [
      "Can be done with a neck harness, a band, or manually resisting with your hands.",
      "For extension: Look down, then raise your head up and back against resistance.",
      "For flexion: Look up, then bring your chin to your chest against resistance.",
      "Use light resistance and slow, controlled movements. Do not jerk the neck."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=raOTKclSkx8",
    substitutions: ["Plate-Loaded Neck Curl/Extension", "Isometric Yoga Ball Wall Neck Hold"]
  },
  "Neutral Grip Band Pull Down": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Pull",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "" }
      ]
    },
    techniquePoints: [
      "Anchor a band overhead.",
      "Grip the band with a neutral grip (palms facing each other).",
      "Sit or kneel, keeping your chest up.",
      "Pull the band down, driving your elbows towards your sides.",
      "Squeeze your back muscles at the bottom of the movement.",
      "Control the band as it returns to the top."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8vYeULPF5zc",
    substitutions: ["Neutral Grip Lat Pulldown", "Neutral Grip Pull-Up"]
  },
  "Plate Hip Abduction": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Weight Plate"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip abduction." }
      ]
    },
    techniquePoints: [
      "Lie on your side with your legs stacked and slightly bent.",
      "Place a weight plate on your top thigh and hold it in place with your hand.",
      "Keeping your feet together, lift your top knee as high as you can without rocking your torso (clamshell style).",
      "Alternatively, keep legs straight and lift the entire top leg.",
      "Focus on squeezing the side of your glute and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Kk-DmG2kVOM",
    substitutions: ["Machine Hip Abduction", "Cable Hip Abduction", "Band Lateral Walk"]
  },
  "Plate Pinch": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Grip & Forearm Training",
    attachments: ["Weight Plate"],
    muscles: {
      strength: ["Thumb Adductors", "Hand Muscles (Pinch Grip)"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "Toma dos discos del mismo tamaño y colócalos juntos, con los lados lisos hacia afuera.",
      "Sujeta los discos con los dedos de un lado y el pulgar del otro.",
      "Levanta los discos del suelo y mantén la posición el mayor tiempo posible.",
      "Este ejercicio trabaja la fuerza de pinza del pulgar y la mano.",
      "Comienza con discos ligeros (por ejemplo, 2.5 o 5 kg)."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=p3ayrY0PK78",
    substitutions: ["Hex Dumbbell Holds", "Hand Gripper"]
  },
  "Plate-Loaded Neck Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Weight Plate"],
    muscles: {
      strength: ["Neck Flexors (Sternocleidomastoid)"],
      stability: [],
      mobility: [
        { muscle: "Cervical Spine", level: "Low", description: "Requires controlled neck flexion." }
      ]
    },
    techniquePoints: [
      "Lie on your back on a flat bench with your head and neck hanging off the end.",
      "Place a small weight plate (or use a towel for padding) on your forehead and hold it.",
      "Slowly lower your head back as far as is comfortable.",
      "Curl your head up, bringing your chin towards your chest.",
      "Use extremely light weight and prioritize slow, controlled movements."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=o78kjeBJUBQ",
    substitutions: ["Head Harness Neck Curl", "Manual Resistance Neck Flexion"]
  },
  "Plate-Loaded Neck Extension": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Neck Training",
    attachments: ["Weight Plate"],
    muscles: {
      strength: ["Neck Extensors (Splenius, Upper Trapezius)"],
      stability: [],
      mobility: [
        { muscle: "Cervical Spine", level: "Low", description: "Requires controlled neck extension." }
      ]
    },
    techniquePoints: [
      "Lie face down on a flat bench with your head and neck off the end.",
      "Place a small weight plate on the back of your head and hold it in place.",
      "Start with your head lowered, looking at the floor.",
      "Slowly raise your head up until it is in line with your body.",
      "Control the descent back to the starting position. Safety and form are paramount."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=hYqVUHC-GhE",
    substitutions: ["Head Harness Neck Extension", "Manual Resistance Neck Extension"]
  },
  "Single Arm Band Shoulder Press": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Upper Body Push (Vertical)",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
      stability: ["Core", "Obliques", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and stability." }
      ]
    },
    techniquePoints: [
      "Stand on a band with one foot and hold the band in the hand on the same side.",
      "Bring the band up to shoulder height in a neutral or front-racked position.",
      "Brace your core tightly to prevent lateral flexion (leaning).",
      "Press the band straight overhead until your arm is fully extended.",
      "Lower with control. The unilateral nature heavily challenges core stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=rtqZLw8IeyU",
    substitutions: ["Dumbbell Single-Arm Shoulder Press", "Kettlebell Press"]
  },
  "Single-Leg Banded Deadlift": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Hip Hinge & Posterior Chain",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Ankle and Foot Stabilizers"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires significant single-leg hamstring flexibility and balance." },
        { muscle: "Hip", level: "Moderate", description: "Requires excellent control of hip hinge mechanics on one leg." }
      ]
    },
    techniquePoints: [
      "Stand on a band with one foot. Hold the band in the hand opposite to the standing foot (contralateral).",
      "Keeping your back straight and standing knee slightly bent, perform a single-leg RDL.",
      "Hinge at your hip, extending your non-standing leg behind you for balance.",
      "Lower until you feel a deep stretch in your hamstring, then return to the start by driving your hip forward."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iS7atZhcRnw",
    substitutions: ["Dumbbell Single-Leg RDL", "Kettlebell Single-Leg RDL"]
  },
  "Stability Ball Sliding Leg Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Leg Isolation (Hamstrings)",
    attachments: ["Stability Ball"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back with your heels on top of a stability ball.",
      "Lift your hips off the floor to form a straight line from shoulders to heels.",
      "Engage your hamstrings to pull the ball in towards your glutes.",
      "Keep your hips elevated throughout the movement.",
      "Slowly extend your legs back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WNB90xXLEOg",
    substitutions: ["Lying Leg Curl", "Nordic Ham Curl", "Sliding Leg Curl (with sliders)"]
  },
  "Standing Band Glute Kickback": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core", "Gluteus Medius (of standing leg)"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires good hip extension." }
      ]
    },
    techniquePoints: [
      "Loop a mini-band around your ankles.",
      "Stand and hold onto a stable surface for balance.",
      "Keeping a slight bend in your standing leg, extend the working leg straight behind you.",
      "Focus on squeezing the glute to lift the leg against the band's resistance.",
      "Avoid arching your back; the movement should be isolated to the hip."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=pdP0uJXvc44",
    substitutions: ["Cable Glute Kickback", "Ankle Weight Glute Kickback"]
  },
  "Standing Band Hip Abduction": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Glute Isolation",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Minimus"],
      stability: ["Core", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Hip", level: "Low", description: "Requires hip abduction." }
      ]
    },
    techniquePoints: [
      "Loop a mini-band around your ankles.",
      "Stand tall, holding onto a support if needed.",
      "Brace your core and lift one leg directly out to the side.",
      "Keep your torso upright and avoid leaning to the side.",
      "Focus on the contraction in your outer hip/glute.",
      "Lower the leg with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=v-tN9LG547I",
    substitutions: ["Cable Hip Abduction", "Side-Lying Hip Abduction", "Machine Hip Abduction"]
  },
  "Swiss Ball Crunch": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Core (Flexion)",
    attachments: ["Stability Ball"],
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Lower Back", "Glutes", "Hamstrings"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Allows for a greater range of motion (extension) than a floor crunch." }
      ]
    },
    techniquePoints: [
      "Sit on a Swiss ball and walk your feet forward until your lower back is supported by the ball.",
      "Place your hands behind your head or across your chest.",
      "Lower your upper back to feel a stretch in your abs.",
      "Curl your torso up by contracting your abs, lifting your shoulder blades off the ball.",
      "Avoid pulling on your neck."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=NGRKFMKhF8s",
    substitutions: ["Cable Crunch", "Machine Crunch", "Weighted Crunch"]
  },
  "Swiss Ball Leg Curl": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Leg Isolation (Hamstrings)",
    attachments: ["Stability Ball"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back with your legs straight and heels resting on a Swiss ball.",
      "Lift your hips to create a straight line from your shoulders to your heels.",
      "Engage your hamstrings to curl the ball towards you by bending your knees.",
      "Squeeze your glutes and hamstrings at the peak of the curl.",
      "Slowly extend your legs back out, keeping your hips elevated the entire time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WNB90xXLEOg",
    substitutions: ["Lying Leg Curl", "Nordic Ham Curl", "Sliding Leg Curl"]
  },
  "Swiss Ball Rollout": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Core (Anti-Extension)",
    attachments: ["Stability Ball"],
    muscles: {
      strength: ["Rectus Abdominis", "Lats", "Obliques"],
      stability: ["Entire Core", "Serratus Anterior", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion to achieve a proper extended position." }
      ]
    },
    techniquePoints: [
      "Kneel in front of a Swiss ball and place your forearms on top of it.",
      "Brace your core and keep your back flat.",
      "Slowly roll the ball forward by extending your arms, allowing your body to straighten out.",
      "Go as far as you can without your hips sagging.",
      "Use your abs and lats to pull the ball back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=DA2QGI0NPWU",
    substitutions: ["Ab Wheel Rollout", "Barbell Rollout", "Long-Lever Plank"]
  },
  "Wrist Roller": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Grip & Forearm Training",
    attachments: ["Wrist Roller", "Weight Plate"],
    muscles: {
      strength: ["Forearm Flexors", "Forearm Extensors"],
      stability: ["Anterior Deltoids (Isometric)"],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "Involves repetitive wrist flexion and extension." }
      ]
    },
    techniquePoints: [
      "Hold the wrist roller with both hands, arms extended straight out in front of you.",
      "The weight should be hanging down on the string.",
      "To work extensors (top of forearm), roll the handle away from you, wrapping the string up.",
      "To work flexors (bottom of forearm), roll the handle towards you.",
      "Control the descent slowly; do not just let the weight drop."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9WQa6RUPKqs",
    substitutions: ["Dumbbell Wrist Curls (Flexion & Extension)", "Rice Bucket Exercises"]
  },
  "Alternating Kneeling Crunches - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789222745-81b6986a58dda46e5f493eba9229a2d29c00e8443f8d6540cbe6b7396ef1b05d-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Kneeling Crunches - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051605/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5d46633b2ae8cc8a69846b59dbe95ca6fb0369a00279a4326e97c73581e577a4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Anterior Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000238267-37e1bdc6264a9fce6998fb9ec7d37365ecec228d13086d6888ce05b7cdeac89e-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Anterior Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482412229.sd.mp4?s=68fcf87a4dc7fdb321dceeaf3ab3d14f744d86ee&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Advanced Tuck Front Lever Pull-Ups (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/2020015141-17b3e3e153383e2a0f6695ab33bc52e3a431fc64c87253e5a84ba708ce35bd60-d_1080x608?&r=pad&region=us",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Advanced Tuck Front Lever Pull-Ups (Resistance Band)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905451/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4c51a7f2108d486c330443c357186a45e664b9be71bff5f6e0cc0a54a6e0959d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Chin Up (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/799342905-b444890aeef57d8815af32dc033a723add9102c11b554a307700f65e883c4198-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Chin Up (Resistance Band)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/348646457.sd.mp4?s=7e17dba369f919c7b0f612858f64bed1ccc18348&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Dips - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778111-735040d45debf59f898d3fbdae98d8b613fa9faa9b31c93a0f4d7a4546c0dcb1-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Dips - Resistance Band"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470731.sd.mp4?s=a24ffe7722e246183c98a69e412db7279ba75d69&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Front Lever Hold - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778279-98df3a04d152f31f5b59437dafbfe2d16865449746df8ce16ee4e0f760f64526-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Front Lever Hold - Resistance Band"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470773.sd.mp4?s=724d397e9225a8185980bf6536492ca8b27201f8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Front Lever Pull Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778307-7b9cb4cad91d4397c51a6fd60dfc43246ca7d36800ae230f35a2383132311a6c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Front Lever Pull Ups - Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470794.sd.mp4?s=5e9bee0fbe353b8d023d44ee7d0146e7378c3c3d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Front Lever Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778356-e553aa4025b10005077c19d8b9ba04b2764b8c549a83ff514f04100b5a890459-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Front Lever Raises - Resistance Band"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470814.sd.mp4?s=9c480dd1ce7a0a96ae0e7373af5be54c453c9153&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Full Planche Hold - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778533-7a7d505cfd581cf9eba705282dbc4bd5a37e46fe9c970cb5d423198659c4863f-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Full Planche Hold - Resistance Band"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470826.sd.mp4?s=ebb4542b570f2212cd0a056b7c336652c48045b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Full Planche Push Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093780048-8b9a8028ad92a17f525f6698d7d01e1a5a4e594cd005049573e3a39c2e116e26-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Full Planche Push Ups - Resistance Band"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group, Anterior Deltoid and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470845.sd.mp4?s=a3179349edb51a20a7cede0aa03004b9083bbc2c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Hefesto Curls - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778420-9d3bc23c16568b6515ad3d3ab67821154e5254a86ba07ec92affe1934f0bce65-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Hefesto Curls - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Assisted Hefesto Curls - Resistance Band.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471068.sd.mp4?s=6bfb309fed5ba4a740215290d23529959364b93f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Hefesto - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778435-4b926ff4bbd8ca46734df726a34c23f0e92e91e8759a4ded85121d1fe10835bf-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Hefesto - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Assisted Hefesto - Resistance Band.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470857.sd.mp4?s=c850a3dc03ab71ac49a2c6b91e4893ea43446ff6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted High Pull Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778752-3f6478a31f2a46eac9ed59e654816195c70c4a144c487c6fb26e41008337699c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted High Pull Ups - Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471079.sd.mp4?s=ccc7e6e564dae28da9ea09770fae00230e9189c4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Ice Cream Makers (Resistance Bands)": {
    image: "https://i.vimeocdn.com/video/2020015370-24fc2b0067d89608d3fcfa6d5a90f069f3720298a8e7ab1a3456e9bd151ac7de-d_1080x608?&r=pad&region=us",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Ice Cream Makers (Resistance Bands)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Assisted Ice Cream Makers (Resistance Bands).", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group, Posterior Deltoid, Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905636/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=794932b8a2e2e07dff7f5cd54c0aaf190dab1de54600735fe95efd415deb7243",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Impossible Dip": {
    image: "https://i.vimeocdn.com/video/1143389649-9a2aaf2584d94770d5e5f89978a517361e60eafb3e6753c07651c3d0daa8ed82-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Impossible Dip"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/553420233.sd.mp4?s=f11f49689824744e4f0863a53682eb01b3693c4b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Impossible Dips - Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189349-9662476ef694b2cc1cda5c5ac6c591744774fd58a19faa63cc82c37bf404bb35-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Impossible Dips - Resistance Band"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878704.sd.mp4?s=d4dd6296dd5d4aebabd6c96b82c7dce1e5b33bbf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted L-Sit Pull Ups": {
    image: "https://i.vimeocdn.com/video/1341706688-bfd65463223b30902261472f334d0fdd548a749dc650576cd69aa829dc79ce66-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted L-Sit Pull Ups"}]
    },
    techniquePoints: ["Raise legs to 90 degrees parallel to the floor in a strict L-sit hold before initiating the pull.", "Keep core and hip flexors locked as you pull your chest to the bar without swinging or dropping your legs.", "Lower back down smoothly while holding the L-sit position throughout the set."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045418.sd.mp4?s=b8067c0a0f56a0b8a3b5a8be28f570ca4d2b954d&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Muscle Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778237-da4b0be07cc93434fa6407a3f5e645efd123f0c51263b1b2794c283d0f1a975f-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Triceps Brachii Group", "Deltoid Group", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Muscle Ups - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Assisted Muscle Ups - Resistance Band.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Triceps Brachii Group, Deltoid Group, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470883.sd.mp4?s=f570cdccd284dd5e913e6ea89ab75a330387115a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Negative Hefesto - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778670-fdf4a478a6e77f5cb9e085d6bdd49a0e7a2cbabb0f8b4b4039b89cd8534bf490-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Negative Hefesto - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Assisted Negative Hefesto - Resistance Band.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471135.sd.mp4?s=df618c421befa0aad6755685bc27ba82c29ae56f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted One Arm Pull Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778656-a9862c90bf310538c9aadaad0fbbacde8d5e7c1b5ed4b81d5a4653f4f5caf285-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted One Arm Pull Ups - Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471147.sd.mp4?s=f4a7bb61059bb10225d5a1bdf372f66174f89c45&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Planche Leans - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778311-368b4a16ea281758b61a54c1fc641ee99bf69fb80dcf99565a815770d3a257c7-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Planche Leans - Resistance Band"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470929.sd.mp4?s=ed1518414b620ceb2392062e8493a30deadc756b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Pull Up (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/799343129-abaa1edec0767134a05f5e5b95968dce80e155a4cea95b2ae00d40e38701f670-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Pull Up (Resistance Band)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/348646676.sd.mp4?s=662f14a41fc53147d6bab141b197077954eff09d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Pull Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093806256-46b5ce7cedef55f03bbae26baeec91d674b708648abfc65385741026c8f77507-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Pull Ups - Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470946.sd.mp4?s=71951f3922fce6ebac7e9ad7524199aafbbf0bba&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Single Leg Front Lever Negatives (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/2028834556-8f7eb1462af5175b6b73111c2e1eba96bd5655cb962878aced58cddd7156fab9-d_1080x608?&r=pad&region=us",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Single Leg Front Lever Negatives (Resistance Band)"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1095111727/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ab97e56cebb4a191058d3f7f5100152ed2d4c3487e760deed36ff7001d3b4a7e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Straight Bar Dips - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778469-3164d3eb311d1de52b09052b84415589e9f1888ea5c151ba819ed74ebba80c48-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Straight Bar Dips - Resistance Band"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470964.sd.mp4?s=806c0203d0f81f387fe62f34e8bc49c7bd43f97f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Upside Down Front Lever Hold (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/2020015503-198f776a18dee70b864cde8062badf7a1e6d88d5745edb8762a55e21a6e1b161-d_1080x608?&r=pad&region=us",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Upside Down Front Lever Hold (Resistance Band)"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905774/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4192eb620db0ee553f66a8939683c34e179f9cbd61a5e39c7902c9ec9aad5bc0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Band Cross Hammer Curls": {
    image: "https://i.vimeocdn.com/video/1341706867-cab1f1773cc5a9e2dcbffd117a4167496e92326d82735b7d85f645e4a6e19d35-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Band Cross Hammer Curls"}]
    },
    techniquePoints: ["Hold dumbbells with a neutral grip (palms facing each other) at your sides.", "Curl weight upward while keeping elbows pinned close to your torso.", "Squeeze brachialis and forearm at top, then lower slowly to full arm lockout."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045368.sd.mp4?s=eb88d1bb78e81a8f2e85e88f59385b372deb0285&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Band Knee Push Ups": {
    image: "https://i.vimeocdn.com/video/1341706387-7d4a49c37f5dd2b345e3d2b793ff4d68a7e7bfd51d7643f68e9d4e44bb9ab23a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Band Knee Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045384.sd.mp4?s=a54ac4297b8398e611a5ddf50f8449e4289d97f6&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Band Military Press": {
    image: "https://i.vimeocdn.com/video/1341706570-299db5a3c7301d143c378308944d9c81d67c4529f649f6e104ba5921d30a0c9c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Band Military Press"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045403.sd.mp4?s=c7c1f5be81b54fc1d7124e97e8f7f7da4de97b46&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "BENT ARM LAT PULL DOWN": {
    image: "https://i.vimeocdn.com/video/1732879616-98aeea6432a9c82b83d4765d578baa73f2a0f010186dc182e75cc5531de08c45-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal BENT ARM LAT PULL DOWN"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting BENT ARM LAT PULL DOWN.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709355/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=05a678478653513d3640706698cb9296426dfa38f47202f13dcb9d65de9b2dda",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bicep Curls - Resistance Band": {
    image: "https://i.vimeocdn.com/video/816168242-2409204cd61b2ac559a5d59aa503ac8a1132f7d0dcbc84181abebb7a8486c709-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bicep Curls - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/361649935.sd.mp4?s=36bbb273228e9f75f351f658232f3fa0f2bf1930&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778470-47d0daf3739bd31e88c27ff1510f72e488306b025ea0dbd80759eebae47292bf-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470988.sd.mp4?s=5247648b3640d64b7e09e6c0a30395e5a07f26f7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deadlift - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779460-51c7e81e12643644e7d918e55923341a355d06c344b52480d6a740ffb279c4b1-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deadlift - Resistance Band"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/528471001/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5097c4e8d49d6452907d467811325edf45b71c4a2ce9c3d3259d4ad5c8d464c4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deadlift + Row - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778689-5fbd11ed425df0923dd06f1a33f817ca11417f14af23f3e423416039c5d3a181-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Quadriceps Femoris", "Latissimus Dorsi & Teres Major", "Erector Spinae", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deadlift + Row - Resistance Band"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Biceps Brachii, Quadriceps Femoris, Latissimus Dorsi & Teres Major, Erector Spinae, Hamstring Group.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471030.sd.mp4?s=542600f367d429d249989c28667c288479128cf3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Decline Push Up (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/1275404516-929e418930229a92ef21c3c88981a7ca16f6a3f0d2826ab1d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Decline Push Up (Resistance Band)"}]
    },
    techniquePoints: ["Elevate your feet on a bench or platform, placing hands slightly wider than shoulder-width on the floor.", "Maintain a rigid plank from head to heels, engaging core and glutes to protect your lower back.", "Lower your upper chest toward the floor and press up explosively through your anterior deltoids and upper pecs."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/633060503.sd.mp4?s=bbf000b6bbe68b91e9be5485037d566187699175&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips (With Resistance Bands)": {
    image: "https://i.vimeocdn.com/video/751988551-1f2980d40458d7d9a219025fc59b73bae91eeee48dc77bf5d521d170b651aa9d-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips (With Resistance Bands)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/173755315.sd.mp4?s=71232fb5838fc9fcda3ccb86872ada8c4bed2b3d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Negative Push Up (Resistance Band)": {
    image: "https://i.vimeocdn.com/video/1275404852-360045340be0e210b43c96817fed138a78b223f0615b1d42a_1080x608",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Negative Push Up (Resistance Band)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/633060898.sd.mp4?s=aabebc347441d6ff5fc429c151c9336dba442002&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Face Pulls - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000138774-671fca1ef9201d24508198803cc52677fcadef215bc5ee37ff3acc1fde47660a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Face Pulls - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Face Pulls - Resistance Band.", "Execute concentric phase with intent, driving force through your Deltoid Group, Posterior Deltoid, Trapezius & Rhomboids.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482358419.sd.mp4?s=c77bb2b529947cbaf7e67c4acc3a9fc6a70e04c7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Frontal Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/816168339-c2ea25d9ff6e9694acd069eb72d3c00b26918f4e3e0fa232f15caaffad3e3884-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Frontal Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/361650024.sd.mp4?s=5ef4f9da909f4dcf40807f1ac41a10e4ae15a8d0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Front Lever Pull Ups With Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189278-3590822d37d209dceeb167b33b158c1faf5a20d386b55e7c25ecb8b5efc3e01c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Front Lever Pull Ups With Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Erector Spinae.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878676.sd.mp4?s=26559ca21afb1a00dd8d96d606b69c5980fe4956&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Lean Raises - with Resistance Band - on Parallettes": {
    image: "https://i.vimeocdn.com/video/616542742-613191a6831715526efce0f5b7c2b623da214c7c55bda3be0e680e20551cb444-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Lean Raises - with Resistance Band - on Parallettes"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/202492193.sd.mp4?s=5029648d2ec7964ddecccde1f4187e5ee1523678&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Push Ups With Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189271-a3ef8a1a92a2ea54a61102b29d038d186486ecb2103bed82c1c7615358dbb6c8-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Push Ups With Resistance Band"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Anterior Deltoid, Triceps Brachii Group and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878682.sd.mp4?s=a7ee70fdc85145997564a9bd9569b4d09349e94b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hefesto With Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189309-73c7d6728ef8d7513c4ab22f7608f59df1194f0d2241126910b32d9d4ce24d2d-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hefesto With Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hefesto With Resistance Band.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878691.sd.mp4?s=a53453d4bf095d05711df77a7c0e26569d633741&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Diamond Push Up - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1368388338-a691745570c6aec445ce4ad91dd2653f8589a0d1ab63dc386701504f36a1314d-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Diamond Push Up - Resistance Band"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/675270875/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=ef941ad7d84bf186bb77843a7c0c8b024b32d24fb5ce89754c3cf6bb9bbd742e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Push Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1368388277-9f182bf3902673a2a0ac1d195369b9c898a05a1977b42b7438c7e2598bc865f4-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Push Ups - Resistance Band"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/675270823/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=7f012c5bf19ceaae55c17fb0c9dd8496f5d9ac4f695f626100a2adf577f5ad1b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Tricep Extensions - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1368388377-a57029eb7aab52281ee1fa0bd910ba91c0cbf2ce63943f39793f264bbab5995a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Tricep Extensions - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/675270927/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=216607be1d14e1c0aea6994282e2bfb4c472cd4140c229de2a7d718fd2bd31dc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Kneeling Crunch - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789223039-41c7f73707ccaa29206f4e98232dfe1f3cb027803cbcc16de178e21c1670318c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Kneeling Crunch - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051784/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e447dda6ec7f66f2031dab10b599e8bf4ae676284313917b1cd8ab32bf46b806",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Tricep Extensions - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1368388521-89369aa6ec7151cc76e001efbd1f35fc91f8b2670f92673d75282f5a0f71e63c-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Tricep Extensions - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/675270973/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=9680e6c26d313022417606d2713e35ccc6c141567496e0c50f5a0d00a5a06008",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Bicep Curl - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778664-49b26115d4756bb55ac67398d57cd25b89efe32211197bb63f893b3a15219067-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Bicep Curl - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528470979.sd.mp4?s=6776d17e05dfb72fad164e7a3899d42dcc9ec624&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Raise - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779551-9b3cfeba0af6f8d4ff07d8f2b7a178738aab6f87a979986ec7d5172d40679e2f-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Raise - Resistance Band"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471099.sd.mp4?s=4b4824755c0bd75fa8b9e0daa54c503c267acc0d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779551-9b3cfeba0af6f8d4ff07d8f2b7a178738aab6f87a979986ec7d5172d40679e2f-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Raises - Resistance Band"}]
    },
    techniquePoints: ["Stand upright with dumbbells at sides, elbows slightly soft (10-15 degree bend).", "Raise arms out to sides until hands reach shoulder height, leading with elbows.", "Control lowering phase over 2 seconds to keep continuous tension on lateral deltoids."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/528471099/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bb9829430a4fa669d486454a26fa54cb1c7e8a4f0fd16a0224ecec01043e0ce4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Band Rows": {
    image: "https://i.vimeocdn.com/video/793797714-c3277fad2e5cec782122f4bc95539b7639d56897a72cbe9ea439d44ba007e4cd-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Band Rows"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/344344826.sd.mp4?s=be0108aecc04059ab7561b72215744568fbef745&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying knee Raise Crunches - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789984564-4e9eafc3856efd1b9b8ae5229cfca2ac8f03d3c9b7a5b0f83fda3a598f030368-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying knee Raise Crunches - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907052049/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=98640ddc53ced8f8da4c767534685c2bec80df8f26b5f3da93001773728908c0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying knee Raises Hold On - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789983294-0746099648509309481c2edfdda22fe0699dd79e43c05da521c6f7cfa8272a8a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying knee Raises Hold On - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907052143/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2117405016aa167df61daf9580ffdf7ff54f94cb3c3726a49284ca3911cc50df",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778637-767e1136a2d06416750e26b73885881a5d8d30124f1d6a21f78e4ec182f35503-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471116.sd.mp4?s=c6683bccdb4f94999a807f00673eea9221bd6ea9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Muscle Ups With Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189370-29cce7d090efb4f383635738dc4d0c707259952b6b70f4abf958f36d34959ac3-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Pectoralis Major", "Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Muscle Ups With Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Muscle Ups With Resistance Band.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Pectoralis Major, Triceps Brachii Group, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878721.sd.mp4?s=7a61d9d3389cb417bcc15e875a20b6e4313f8936&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Assisted Pull Up (With Resistance Bands)": {
    image: "https://i.vimeocdn.com/video/752041683-c3d898c827150cd6ce5c2788e33d362e3c072cfba1be02d96c717bc61db4bd8a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Assisted Pull Up (With Resistance Bands)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/173760874.sd.mp4?s=56088e7296689d2270f05146dfe82efdb23f16a3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Bicep Curl - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1095564076-a3263713bf0959407463b456e12866fe4a8b0356b67efa0e8de72ef6609bff53-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Bicep Curl - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii, Forearm Group.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/529416323.sd.mp4?s=018ad7fdc499b7f18ea91ac049399c8c726a14ba&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Pull Up With Resistance Band": {
    image: "https://i.vimeocdn.com/video/848189386-c21f777545ddfe102f0ec8602b045e3828fbfd091ba17f2f112680ba85d9deb4-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Pull Up With Resistance Band"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/385878731.sd.mp4?s=18845253d445629a4a414c847e6cdaf4ee9e395f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Squat - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778822-ff0ccd91850627ef9128b03a020bb65c9811ac32c29294909d0e8e36dab58708-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Squat - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471164.sd.mp4?s=0fa2053210b1f77c4a19b76af672e10426038f0c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Overhead Tricep Extension - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778646-8d47c5dcebf2445b4701ef4b58b6393f21b2a7e41833b5e2bf5dcf042ce0991a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Overhead Tricep Extension - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471184.sd.mp4?s=57a96e820b2971e70261ff20ac6a109c0cc530e2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Knees to Elbow - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1342550182-435057fec19e4a2a2496aac6d25b50d457e70c2ae4d7fb520eed5d7380964d30-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Knees to Elbow - Resistance Band"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663429262.sd.mp4?s=6b47e5f19386fda1c2e5233e65eda602e080f416&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pronated Band Curls": {
    image: "https://i.vimeocdn.com/video/1341709117-c0991dde7d6154d26227506c8d85efd9cadb935b377179bb2e5e3b9b60872758-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pronated Band Curls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pronated Band Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045453.sd.mp4?s=76cd7164f6ba57241793c95d02fde6cb4929f591&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pronated Band Frontal Raise": {
    image: "https://i.vimeocdn.com/video/1621272135-b6c7b0cd5db4b644f03e501a598246508143e2450e6c0f2ce9d5662c6cc2d6c9-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pronated Band Frontal Raise"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/803182579/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8fae5a1fd5990c6584754a6ac88624c2301c286e0c49768f3a9da1456b5f2fde",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779553-c285d8e4b68ca4828b7a93e1849fc1cf778eb8fc00758d414a84a6f39c952b7e-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups - Resistance Band"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/528471210/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6da902c51e8014577611e6da59e3c07fc95ea4715f4c0558c4ab49afac76e3bb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups (With Resistance Bands)": {
    image: "https://i.vimeocdn.com/video/1093779553-c285d8e4b68ca4828b7a93e1849fc1cf778eb8fc00758d414a84a6f39c952b7e-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups (With Resistance Bands)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/528471210/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6da902c51e8014577611e6da59e3c07fc95ea4715f4c0558c4ab49afac76e3bb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rear Delt Fly (Single Arm)- Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779710-f2d1ae3d3bd3705b790eaeacbac4dad895640c3609bc386ec2a08cea3faba429-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rear Delt Fly (Single Arm)- Resistance Band"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471251.sd.mp4?s=08a59dea48ccf42dbe360a1d1b6ebb35b1ce26df&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Band Fly's": {
    image: "https://i.vimeocdn.com/video/1275404589-55fc7e873974b2a18093711cd64d18e522d9be31d46dcd5b3_1080x608",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Band Fly's"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Resistance Band Fly's.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/633061005.sd.mp4?s=84526d9b6181f439a94c4caac02befb3be5f9f65&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Band Hammer Curls": {
    image: "https://i.vimeocdn.com/video/1621272459-a97557a932c9bd79522ae1db42f935593a480a058ff3c9a30876e4a0c5f4704b-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Band Hammer Curls"}]
    },
    techniquePoints: ["Hold dumbbells with a neutral grip (palms facing each other) at your sides.", "Curl weight upward while keeping elbows pinned close to your torso.", "Squeeze brachialis and forearm at top, then lower slowly to full arm lockout."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/803182597/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=968932e0c8b3e17899983f25c6190c0c9478afb2b567e1894b7e94b96dcf4087",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Band Spreads": {
    image: "https://i.vimeocdn.com/video/1621278300-0e5cc2dea9ce771a89d5f1682ddfaf520ee2084648f9e17fe7319e4a96e6cf6d-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Band Spreads"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Resistance Band Spreads.", "Execute concentric phase with intent, driving force through your Deltoid Group, Trapezius & Rhomboids, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/803182615/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=530a7041159613b28d18286d47b1c5b5b97163d7f16e14c8281fb3a2359f210a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Band Twists": {
    image: "https://i.vimeocdn.com/video/1342550160-7ea47e4c7c88bcea73b77876d75ba2dd2a7ee6c0f30b3ce2f57314eeafd99565-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Band Twists"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Resistance Band Twists.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663429215.sd.mp4?s=07bf71a852708682090c789fc61ea67b6f139f79&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Dips": {
    image: "https://i.vimeocdn.com/video/1093779148-8f7cf3085058b5cc6b7e0fa075cb59b0f9bb24dd97fdac11ffd24a795556b8c5-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471275.sd.mp4?s=777d8c1586084f1f459dae00e807f4c5598a664e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Straight Bar Dips": {
    image: "https://i.vimeocdn.com/video/1093779860-c21937aa2c2dc327e0110d7dac8c3f43647ea0d92e6bcc9b807725e7dae2a5aa-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Straight Bar Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471294.sd.mp4?s=65d3a22df3f6160c070e8aa8736a19fda782e85b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Resistance Tricep Extensions": {
    image: "https://i.vimeocdn.com/video/1341706691-c519bc42a07326abac54ca23e0d9cba61629cc7d323f83e5f902e9fb16147d17-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Resistance Tricep Extensions"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045485.sd.mp4?s=e7a9b287819aba9360b3c360d52b429d88f45848&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Lunges - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779927-4701c7aaae48da9304bd72256e247dfa523a0f68b2e0a3fe026926c9cf7276df-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Lunges - Resistance Band"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471318.sd.mp4?s=34017be07b76de53e324faf04e8aa87e0fe0420b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rows with Resistance Bands": {
    image: "https://i.vimeocdn.com/video/846141744-5886b7053c9c40afe747dfe292038498923f664deaa98c2c86a482b350bc6a62-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rows with Resistance Bands"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Biceps Brachii, Posterior Deltoid.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/384402776.sd.mp4?s=63f742299473beb7464690c96318e093831b0138&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Russian Twists - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1342550168-09b2268eba06755a3de220d36ba6bbb29e59e03913ce72f68532a13cf22460b0-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Russian Twists - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Russian Twists - Resistance Band.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663429186.sd.mp4?s=0b816aeec98079fbe071c9ab2eec09736e4d0447&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Bent Leg Calf Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779759-3edaf142aa379e8d92498a28737172500f0344c9a4de332646ed3539913b119a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Bent Leg Calf Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471335.sd.mp4?s=b6cf464d24911c6154998e65ea39ecf981bf1bfe&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Calf Raises - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093778994-bfca62d4ddb53e023e3ef3ac363146d3afd171f69f17f797d11d8e95a8d823dd-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Calf Raises - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471353.sd.mp4?s=5593f6d4935b0d44126e5921bf3138cbc70b9dda&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated In and Outs - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789980998-38283e63a81067a8a88729a7a796339134d7be9032fe90ec0c5855a72b791a9e-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated In and Outs - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated In and Outs - Resistance Band.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907052224/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7b5f820abedbe673db32992689926205ae157f4e5b7ce1206316b64f0f1e60bd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated In And Outs - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779311-34644bad2f0c46548ee88d940123371eea28e1cf5abb339fa882d282d6156df4-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated In And Outs - Resistance Band"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated In And Outs - Resistance Band.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471384.sd.mp4?s=576f9a3dccdeebed203c3e3da96d7c955951fac2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder Press - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000138359-c5aad9e00a0c8293178156f26b0b43cd01831d1c2362be4e1bc8109348ba758b-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder Press - Resistance Band"}]
    },
    techniquePoints: ["Stand or sit upright with feet shoulder-width apart and core braced tightly.", "Unrack or hold weight at collarbone level with elbows stacked directly under your wrists.", "Press weight vertically overhead, pushing head slightly forward at lockout to lock bar directly over shoulders."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482358342.sd.mp4?s=516d3b791445d1dc7d5c551cbd11758eb3ec9080&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Kneeling Crunches - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1789989379-7c59158061c3c3c5abf71d7a1d209f6485d318ee9343bcc0e5016ab5bdf12eb6-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Kneeling Crunches - Resistance Band "}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907052289/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4008beef5d02665507e62a788c41fcbbea5f0769a9451da44799f42230d3c821",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Bent Over Rows - Resistance Band": {
    image: "https://i.vimeocdn.com/video/816170287-7e273a1e2ba969996cbbf1b17b81fca19ebd892b0fbcc88dace069d3ead9b8d4-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Bent Over Rows - Resistance Band"}]
    },
    techniquePoints: ["Support one knee and hand on bench (or hinge standing) with working arm hanging extended.", "Pull dumbbell toward hip crease, leading with your elbow rather than your wrist.", "Contract lats and rhomboids hard at peak position before stretching down to starting extension."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/361651509.sd.mp4?s=69e44043f96c56c372413e41ebe680ccb9d7be34&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "SINGLE ARM PULL DOWN": {
    image: "https://i.vimeocdn.com/video/1732879849-3ca8657a9c4c10e42e3ed8f0f2616c3c01cfaf173b832d848693a98d3a9e5515-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal SINGLE ARM PULL DOWN "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting SINGLE ARM PULL DOWN.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709520/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=964c4a85520c3ce4822284038155da2335bbdd269acd5fef2223cb62f53fe6ee",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Rear Delt Fly's - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000138427-0def2c28435f3b012e53e164b6264a4750607c29ff01c0c315ce3cb6c91073ce-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Rear Delt Fly's - Resistance Band"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482358276.sd.mp4?s=04f181ec72c2af9638e31cb95917920593bc257c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Tricep Kick Backs - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000138198-7072b246b9eb7870b10d0a1dc2400fe3cd9513c19adfa292d7abc6570e170361-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Tricep Kick Backs - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482358215.sd.mp4?s=48bbd2754217557669e2b93e3c09cf44f2ecf14b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Romanian Deadlift - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779100-ae764d5e72503ced82a540f91888404e03560ed604b519d0843a2e9fbae4cb86-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Romanian Deadlift - Resistance Band"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471401.sd.mp4?s=9be10f2767cb1dc50b372ad1c6d90505ecbc41e6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squats - Resistance Band": {
    image: "https://i.vimeocdn.com/video/816170369-0563bff5de3348505f9332da914a864a961ffc14c1d88141de8b055b9f34584a-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squats - Resistance Band"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/361651542.sd.mp4?s=71ee9ab75af9013578ff0b18fa5c80d0cc58d225&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Band Cross Raises": {
    image: "https://i.vimeocdn.com/video/1341712202-374dd99a52630736a1a46c87dcc27c9b2ab3a28df66a3c5b5d46a1a0b16ed095-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Band Cross Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045503.sd.mp4?s=19400f099623a7fdeabe040ab316bd25f6829992&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Side Crunches - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1342550588-0d46aaf5a891c0f17455ede9dbdc663be08fb8ba3fed61c334b2fe5c07afd3fc-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Side Crunches - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663429148.sd.mp4?s=ca0a03302f33b5aa5738d967e2ab4b4ffc34a904&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Supinated Tricep Extension - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1368388781-2661371da13d7b984ab6d7be1e644a6c765e0ef6ba1671e28a0eb394ffaa0bff-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Supinated Tricep Extension - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/675271073/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=9d963d530792afab27041bd47817edfe8fbfcfda39b0fdcb94831c5aae357640",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Frontal Raise - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1000138298-8a4e35399b3c94be259f0abeca0251a950f257597d8f56ca770ab5285f10aac0-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Frontal Raise - Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/482358194.sd.mp4?s=501979d3853559d4166a16179c29cd82eea49e65&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Frontal Raise- Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779533-08a4254d236263c6b44f1c3df82badf92bb44c9a5480d1e2a2f3d1f98db73987-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Frontal Raise- Resistance Band"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471416.sd.mp4?s=6323fcfca60b9041233ae80249b25783f9d5297d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Lat Pull Down": {
    image: "https://i.vimeocdn.com/video/1341706844-2272a5a9762f7012f11afc642a01734328aa3da0ebc13c2f14d7a22a4f6f7a28-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Lat Pull Down"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Lat Pull Down.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/663045522.sd.mp4?s=aeb8f235872c6eb818c6365ca18348f32599df6e&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Band Frontal Raise": {
    image: "https://i.vimeocdn.com/video/1621271904-0cedf3630ef9b2453f4077f77e0365432180c65260f99923213c5d9bdd9d8b2b-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Band Frontal Raise"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/803182636/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8c71f28a179b729a60ca9e9466e6aae4bc6d734e412145394d5aad2eb474ad89",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Extension Single Arm - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779113-24403ce4cfc2a84c8ab8fd56db0fdfc314d9e58170c1a10fa8dbfcaff5d033ca-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Extension Single Arm - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Latissimus Dorsi & Teres Major, Obliques.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471466.sd.mp4?s=f59ba01d76a8782624581dcbec5bcc1ac5a969fe&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Kickbacks - Resistance Band": {
    image: "https://i.vimeocdn.com/video/1093779468-e1d2749b56000ab7639a2dea7ac84869af8f911db4a9aa0da237ec31eb7e40a8-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Kickbacks - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/528471515.sd.mp4?s=1e7fa4902afc5dc985fac6c2feff839a9c121329&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Kick Backs Single Arm - Resistance Band": {
    image: "https://i.vimeocdn.com/video/816170440-4346a61a22957c33ca78b64f1555ee737379aad1f61543c739eb5ea5d0ed6956-d_1920x1080",
    subcategory: "Resistance Band",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Kick Backs Single Arm - Resistance Band"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Posterior Deltoid.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Bands & Accessories",
    youtubeLink: "https://player.vimeo.com/external/361651573.sd.mp4?s=eba3f78e96df43792300b1d00431d85eb04d70cb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
};
