import type { ExerciseInfo } from '../types';

export const olympicAndPowerExercises: { [key: string]: ExerciseInfo } = {
  "Block Clean": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Clean Variation",
    attachments: ["Barbell", "Weight Plates", "Blocks"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Trapezius", "Deltoids"],
      stability: ["Core", "Erector Spinae", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Hip", level: "High", description: "Requires explosive hip extension from a specific height." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Necessary for maintaining an upright posture in the catch." },
        { muscle: "Wrist", level: "High", description: "Good wrist flexibility is crucial for a comfortable and safe front rack position." }
      ]
    },
    techniquePoints: [
      "Set the barbell on blocks, typically at knee height or slightly above/below.",
      "Initiate the lift by driving explosively through the legs and extending the hips, not by pulling with the arms.",
      "As the bar becomes weightless, quickly pull yourself under it, rotating your elbows to receive it in a front squat position.",
      "The goal is to work on the second pull and the transition under the bar."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=T4EAdzwVEg4",
    substitutions: ["Hang Clean", "Power Clean", "Clean Pull"]
  },
  "Block Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates", "Blocks"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Deltoids", "Trapezius", "Upper Back"],
      stability: ["Core", "Erector Spinae", "Entire Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires exceptional shoulder mobility and stability for the overhead catch." },
        { muscle: "Hip", level: "High", description: "Requires explosive hip extension and deep flexion for the catch." },
        { muscle: "Thoracic Spine", level: "High", description: "Critical for maintaining an upright and stable torso in the overhead squat." }
      ]
    },
    techniquePoints: [
      "Set the barbell on blocks with a wide snatch grip.",
      "Focus on an explosive drive from the legs and hips to elevate the bar.",
      "Keep the bar close to your body throughout the pull.",
      "Aggressively pull yourself under the bar into a deep overhead squat to receive the weight.",
      "This variation helps improve speed, power, and technique from specific points in the lift."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=hWLOXxFDz9o",
    substitutions: ["Hang Snatch", "Power Snatch", "Snatch Balance"]
  },
  "Clean & Jerk": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Full Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Quadriceps", "Hamstrings", "Deltoids", "Triceps", "Trapezius"],
      stability: ["Core", "Erector Spinae", "Shoulder Girdle"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Full ankle dorsiflexion is needed for the deep squat in the clean." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion for the clean and explosive extension for both parts." },
        { muscle: "Shoulder", level: "High", description: "Full shoulder flexion and external rotation are crucial for the jerk." },
        { muscle: "Wrist", level: "High", description: "High flexibility needed for the front rack position." }
      ]
    },
    techniquePoints: [
      "A two-part lift: the clean brings the bar from the floor to the shoulders; the jerk takes it from shoulders to overhead.",
      "The clean involves a powerful hip and leg drive to pull the bar up, followed by a quick drop into a front squat to catch it.",
      "For the jerk, dip straight down and drive explosively up with the legs to elevate the bar.",
      "As the bar moves upward, drop under it (splitting or squatting) and catch it with locked arms overhead."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bNCXgyosXlc",
    substitutions: ["Power Clean", "Push Press", "Thruster"]
  },
  "Clean Pull": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Pull Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Trapezius", "Erector Spinae"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Focuses entirely on the explosive hip extension of the pull." }
      ]
    },
    techniquePoints: [
      "This is the first part of the clean, without the catch.",
      "Set up as you would for a clean, with a hook grip.",
      "Execute the pull explosively, focusing on triple extension (ankles, knees, hips) and a powerful shrug.",
      "Keep arms long and relaxed until the final shrug. Do not pull with the arms early.",
      "This is a strength-building accessory used to overload the pulling muscles."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xx8WkFrST2Y",
    substitutions: ["Snatch Pull", "Deadlift", "Trap Bar Deadlift"]
  },
  "Drop Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Deltoids", "Upper Back"],
      stability: ["Core", "Entire Shoulder Girdle", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires extreme mobility and stability to drop under the bar." },
        { muscle: "Ankle", level: "High", description: "Necessary for achieving a deep and stable overhead squat position." }
      ]
    },
    techniquePoints: [
      "Start with the barbell on your back as in a back squat, but with a wide snatch grip.",
      "Without any dip or drive, rapidly drop your body down into a full overhead squat.",
      "At the same time, press the bar up into a locked-out overhead position.",
      "The goal is to improve speed under the bar, confidence, and overhead stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=DCJLYWGEdzo",
    substitutions: ["Snatch Balance", "Overhead Squat"]
  },
  "Hang Clean": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Clean Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Trapezius", "Deltoids"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Emphasizes explosive hip extension from a standing start." },
        { muscle: "Wrist", level: "High", description: "Requires good wrist flexibility for the front rack catch." }
      ]
    },
    techniquePoints: [
      "Start with the barbell held at the 'hang' position (typically just above the knees).",
      "Initiate by explosively extending your hips and knees.",
      "Shrug powerfully and pull yourself under the bar, catching it in a front squat position.",
      "This variation focuses on the second pull and is great for developing power."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=TjTEOme9fvw",
    substitutions: ["Power Clean", "Block Clean", "Clean Pull"]
  },
  "Hang Clean from the Knee": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Clean Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Trapezius", "Quadriceps"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Specifically targets the transition and power from the knee position." },
        { muscle: "Wrist", level: "High", description: "Requires good wrist flexibility." }
      ]
    },
    techniquePoints: [
      "Begin by deadlifting the bar, then lowering it under control to just below the kneecaps.",
      "Your shoulders should be over the bar and back flat.",
      "Drive with the legs to bring the bar past the knees, then extend the hips explosively.",
      "Finish by pulling under the bar to receive it in a front squat.",
      "This helps teach how to navigate the knees and set up a powerful second pull."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eJpl0FqYKeM",
    substitutions: ["Hang Clean", "Block Clean"]
  },
  "Hang Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Deltoids", "Trapezius", "Upper Back"],
      stability: ["Core", "Entire Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility and stability for the overhead catch." },
        { muscle: "Hip", level: "High", description: "Emphasizes explosive extension from a standing position." }
      ]
    },
    techniquePoints: [
      "Start with the barbell held at the 'hang' position with a wide snatch grip.",
      "Explosively extend your hips, knees, and ankles.",
      "Use the momentum to pull the bar overhead, keeping it close to your body.",
      "Drop into an overhead squat to receive the bar with locked arms.",
      "This variation helps develop power and speed for the second pull of the snatch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oTlSsPZaewg",
    substitutions: ["Power Snatch", "Block Snatch", "Snatch Balance"]
  },
  "Jerk": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Overhead Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Quadriceps", "Glutes"],
      stability: ["Core", "Erector Spinae", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Full shoulder flexion and external rotation are required for a stable overhead position." },
        { muscle: "Thoracic Spine", level: "High", description: "Good T-spine extension is crucial for maintaining posture." }
      ]
    },
    techniquePoints: [
      "The second part of the Clean & Jerk, starting from a front rack position.",
      "Perform a 'dip and drive': dip straight down by bending the knees, then drive explosively up with the legs.",
      "As the bar moves upward, drop under it, splitting or squatting your legs.",
      "Catch the bar with locked arms overhead and a stable core.",
      "Recover by bringing your feet back together to a standing position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0ieS7C6Rdyk",
    substitutions: ["Push Jerk (or Power Jerk)", "Split Jerk", "Push Press"]
  },
  "Muscle Clean": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Clean Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Trapezius", "Deltoids", "Biceps", "Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist flexibility for the turnover." }
      ]
    },
    techniquePoints: [
      "A technique drill that emphasizes the 'third pull' or turnover of the bar.",
      "Perform a clean pull, but keep your legs straight after extension.",
      "Actively use your arms to pull the bar up and rotate your elbows around into the rack position.",
      "There is no re-bending of the knees to catch the bar. It is 'muscled' into place.",
      "Use lighter weights to drill the proper bar path and arm action."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vO5JVdcY1jg",
    substitutions: ["Muscle Snatch", "Upright Row"]
  },
  "Muscle Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Deltoids", "Trapezius", "Upper Back", "Glutes", "Hamstrings"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires excellent mobility to turnover the bar into the overhead position without bending the knees." }
      ]
    },
    techniquePoints: [
      "A drill to strengthen the turnover of the snatch.",
      "Perform a snatch pull with a wide grip, but keep the legs straight after full extension.",
      "Use arm and shoulder strength to pull the bar overhead into a locked-out position.",
      "There is no re-bending of the knees or dropping under the bar.",
      "Promotes a high and close bar path."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vO5JVdcY1jg",
    substitutions: ["Muscle Clean", "Snatch High Pull"]
  },
  "Overhead Squat": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Squat Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Deltoids", "Upper Back", "Triceps"],
      stability: ["Core", "Entire Shoulder Girdle", "Erector Spinae", "Lats"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires excellent dorsiflexion to keep an upright torso." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion." },
        { muscle: "Shoulder", level: "High", description: "Requires elite-level shoulder flexion, external rotation, and stability." },
        { muscle: "Thoracic Spine", level: "High", description: "Crucial for maintaining an upright posture and preventing the bar from falling forward." }
      ]
    },
    techniquePoints: [
      "Hold a barbell overhead with a wide snatch grip and locked-out arms.",
      "Actively push up on the bar and pull it apart to engage your upper back and shoulders.",
      "Descend into a full squat while keeping the bar stable and directly over your mid-foot.",
      "Maintain an upright torso and keep your heels on the ground.",
      "This is a diagnostic tool for mobility as much as it is a strength exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RD_vUnqwqqI",
    substitutions: ["Snatch Balance", "Front Squat", "Goblet Squat (for posture)"]
  },
  "Power Clean": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Clean Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Trapezius", "Quadriceps", "Deltoids"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires explosive hip extension." },
        { muscle: "Wrist", level: "High", description: "Good wrist flexibility is still necessary for the catch." }
      ]
    },
    techniquePoints: [
      "A variation of the clean where the bar is caught in a partial squat (thighs above parallel).",
      "Focuses on generating maximum explosive power, as you must pull the bar higher than in a full clean.",
      "The pull from the floor should be powerful and followed by an aggressive hip extension and shrug.",
      "Quickly rotate elbows and receive the bar on the shoulders."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=E2z5zK5V-MM",
    substitutions: ["Hang Power Clean", "Clean Pull", "Kettlebell Swing"]
  },
  "Power Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Trapezius", "Deltoids", "Upper Back"],
      stability: ["Core", "Erector Spinae", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires extreme shoulder mobility and stability." },
        { muscle: "Hip", level: "Moderate", description: "Focuses on maximizing explosive hip extension." }
      ]
    },
    techniquePoints: [
      "A variation of the snatch where the bar is caught in a partial overhead squat (thighs above parallel).",
      "Requires a wide grip and an extremely explosive hip and leg drive.",
      "The bar must be pulled higher than in a full snatch to allow for the high catch.",
      "Catch the bar with locked arms and a stable core."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Ca4L1PKAvKU",
    substitutions: ["Hang Power Snatch", "Snatch High Pull", "Muscle Snatch"]
  },
  "Push Jerk (or Power Jerk)": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Overhead Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Quadriceps", "Glutes"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires good shoulder flexion and stability." }
      ]
    },
    techniquePoints: [
      "Similar to a push press, but you re-bend the knees to drop under the bar.",
      "Start with a dip and explosive drive from the legs.",
      "As the bar leaves the shoulders, drop into a shallow squat to catch the bar overhead with locked arms.",
      "Stand up from the shallow squat to complete the lift.",
      "This allows you to lift heavier weight than a strict press or push press."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Om7vLD6x8W0",
    substitutions: ["Split Jerk", "Push Press", "Thruster"]
  },
  "Snatch": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Full Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Deltoids", "Trapezius", "Upper Back"],
      stability: ["Core", "Erector Spinae", "Entire Shoulder Girdle"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Full ankle dorsiflexion is critical for the deep overhead squat." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion and powerful extension." },
        { muscle: "Shoulder", level: "High", description: "Extreme shoulder mobility and stability are non-negotiable." },
        { muscle: "Thoracic Spine", level: "High", description: "Crucial for maintaining an upright, stable torso in the catch." }
      ]
    },
    techniquePoints: [
      "The bar moves from the floor to overhead in a single, fluid motion.",
      "Use a wide snatch grip and initiate the pull with the legs, keeping the back flat.",
      "Explode through the hips (second pull) to propel the bar upward.",
      "Aggressively pull yourself under the bar and receive it in a full overhead squat with locked arms.",
      "Stand up from the squat to complete the lift."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VMaBfcRprAU",
    substitutions: ["Power Snatch", "Overhead Squat", "Snatch Pull"]
  },
  "Snatch Balance": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Snatch Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Deltoids", "Upper Back"],
      stability: ["Core", "Entire Shoulder Girdle", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Improves stability and confidence in the overhead catch position." },
        { muscle: "Ankle", level: "High", description: "Required for a solid overhead squat base." }
      ]
    },
    techniquePoints: [
      "Start with the bar on your back with a snatch grip.",
      "Perform a shallow dip and drive with the legs (less than a jerk).",
      "As the bar becomes weightless, aggressively drop under it into a full overhead squat.",
      "The focus is on the speed of the drop and the stability of the catch.",
      "It bridges the gap between the Drop Snatch and the full Snatch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=XuFaD1sAVGI",
    substitutions: ["Drop Snatch", "Overhead Squat"]
  },
  "Snatch Pull": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Pull Variation",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps", "Trapezius", "Upper Back", "Deltoids"],
      stability: ["Core", "Lats"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Focuses entirely on the explosive hip extension of the snatch pull." }
      ]
    },
    techniquePoints: [
      "This is the pulling portion of the snatch, without the catch.",
      "Use a wide snatch grip and execute an explosive pull from the floor.",
      "Focus on full triple extension and a powerful, high shrug, keeping the bar close.",
      "Allow the elbows to bend and rise high and outside at the peak of the pull.",
      "Used to build strength, power, and reinforce proper pulling mechanics for the snatch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=G1QygZ3Kd3w",
    substitutions: ["Clean Pull", "Deadlift", "Snatch-Grip Deadlift"]
  },
  "Split Jerk": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Overhead Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Deltoids", "Triceps"],
      stability: ["Core", "Shoulder Girdle", "Gluteus Medius"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Requires flexibility for the split position." },
        { muscle: "Shoulder", level: "High", description: "Requires excellent overhead stability and mobility." }
      ]
    },
    techniquePoints: [
      "The most common style of jerk in competition.",
      "From the front rack, perform a dip and drive.",
      "As you drive the bar up, simultaneously split your legs into a lunge-like position (one foot forward, one back).",
      "The split allows you to drop lower under the bar, providing a stable base.",
      "Recover by stepping the front foot back first, then the back foot forward."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PsiO8lZTU2I",
    substitutions: ["Push Jerk (or Power Jerk)", "Squat Jerk", "Push Press"]
  },
  "Squat Jerk": {
    image: "",
    category: "Olympic & Power",
    subcategory: "Overhead Lift",
    attachments: ["Barbell", "Weight Plates"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Deltoids", "Triceps", "Upper Back"],
      stability: ["Core", "Entire Shoulder Girdle"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires elite-level ankle dorsiflexion." },
        { muscle: "Hip", level: "High", description: "Requires deep, stable hip flexion." },
        { muscle: "Shoulder", level: "High", description: "Requires immense overhead mobility and stability." },
        { muscle: "Thoracic Spine", level: "High", description: "Critical for maintaining an upright torso." }
      ]
    },
    techniquePoints: [
      "The most mobility-demanding style of jerk.",
      "From the front rack, perform a dip and drive.",
      "Instead of splitting the legs, drop directly down into a full overhead squat to receive the bar.",
      "Catch the bar at the bottom of the squat with locked arms.",
      "Stand up from the overhead squat to complete the lift."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iFc4l24llpw",
    substitutions: ["Split Jerk", "Snatch Balance", "Overhead Squat"]
  }
};