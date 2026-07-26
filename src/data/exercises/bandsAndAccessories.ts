import type { ExerciseInfo } from '../types';

export const bandsAndAccessoriesExercises: { [key: string]: ExerciseInfo } = {
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
  "Sled Pull": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Full Body Conditioning",
    attachments: ["Sled", "Straps or Rope"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Posterior Deltoids", "Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "" }
      ]
    },
    techniquePoints: [
      "Attach straps or a long rope to a sled.",
      "Can be performed walking backward (targeting quads) or forward (targeting posterior chain).",
      "Can also be done with rows: plant your feet and pull the sled towards you hand over hand or with rowing motions.",
      "Stay low and maintain an engaged core to transfer force efficiently."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=76vrRRCA3w8",
    substitutions: ["Seated Cable Row (for rowing variation)", "Reverse Sled Drag"]
  },
  "Sled Push": {
    image: "",
    category: "Bands & Accessories",
    subcategory: "Full Body Conditioning",
    attachments: ["Sled"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves", "Pectorals", "Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "Moderate", description: "Requires good dorsiflexion to maintain a deep forward lean." },
        { muscle: "Hip", level: "Moderate", description: "Requires hip flexion for powerful leg drive." }
      ]
    },
    techniquePoints: [
      "Load a sled with the desired weight.",
      "Grip the handles with arms extended (low handles for more leg drive) or bent (high handles).",
      "Lean your body forward at a ~45-degree angle, keeping a straight line from head to heels.",
      "Drive the sled forward by taking powerful, deliberate steps.",
      "Focus on pushing through the balls of your feet."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oao5W39JrAg",
    substitutions: ["Car Push", "High-Rep Leg Press"]
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
  }
};