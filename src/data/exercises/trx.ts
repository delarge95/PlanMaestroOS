import type { ExerciseInfo } from '../types';

export const trxExercises: { [key: string]: ExerciseInfo } = {
  "TRX Abducted Lunge": {
    image: "",
    category: "TRX",
    subcategory: "Lunge Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Gluteus Medius", "Quadriceps", "Glutes"],
      stability: ["Core", "Ankle Stabilizers", "Hip Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires significant hip abduction and adductor flexibility." }
      ]
    },
    techniquePoints: [
      "Set straps to mid-calf length. Place one foot in both foot cradles and face away from the anchor.",
      "Hop forward to create tension. Perform a lunge on the standing leg.",
      "As you descend, allow the suspended leg to abduct (move out to the side).",
      "Drive through the standing leg to return to the start, bringing the suspended leg back to center.",
      "This variation intensely challenges the gluteus medius and hip stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=d5-APzXB6Lw",
    substitutions: ["TRX Crossing Balance Lunge (Curtsy)", "Banded Lateral Walk"]
  },
  "TRX Atomic Pushup": {
    image: "",
    category: "TRX",
    subcategory: "Push Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Anterior Deltoids", "Rectus Abdominis", "Hip Flexors"],
      stability: ["Core", "Shoulders", "Rotator Cuff"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion for the knee tuck portion." }
      ]
    },
    techniquePoints: [
      "Start in a push-up position with your feet in the foot cradles.",
      "Perform one full push-up, maintaining a rigid plank throughout.",
      "After completing the push-up, immediately perform a TRX Knee Tuck by drawing both knees towards your chest.",
      "Extend your legs back to the plank position. This completes one repetition.",
      "Keep your core engaged to prevent your lower back from sagging."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9CFvDT5t-gc",
    substitutions: ["TRX Push-Up", "TRX Knee Tuck", "Burpee"]
  },
  "TRX Bicep Clutch": {
    image: "",
    category: "TRX",
    subcategory: "Curl Bicep",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Face the anchor point, holding handles with palms up, arms extended.",
      "Lean back into a plank position.",
      "Pull your body up by performing a bicep curl, but aim to bring the handles to your chest instead of your forehead.",
      "Keep your elbows stationary at your sides throughout the movement.",
      "This variation mimics a standard standing curl."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bI6x74g7b6c",
    substitutions: ["TRX Bicep Curl", "Dumbbell Curl"]
  },
  "TRX Bicep Curl": {
    image: "",
    category: "TRX",
    subcategory: "Curl Bicep",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Biceps", "Brachialis"],
      stability: ["Core", "Lats", "Shoulders"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Face the anchor point, leaning back with an underhand grip on the handles.",
      "Keep your body in a straight plank and your elbows high and stationary.",
      "Pull your body up by curling the handles towards your forehead/temples.",
      "Do not let your hips sag or your elbows drop. The movement should only come from the elbows.",
      "Lower yourself back with control until your arms are fully extended."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=r1TrmnOySKA",
    substitutions: ["Dumbbell Curl", "Cable Curl", "TRX Bicep Clutch"]
  },
  "TRX Body Saw": {
    image: "",
    category: "TRX",
    subcategory: "Core Anti-Extension",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rectus Abdominis", "Transverse Abdominis"],
      stability: ["Entire Core", "Shoulders", "Lats"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires controlled shoulder flexion and extension to create the 'sawing' motion." }
      ]
    },
    techniquePoints: [
      "Start in a low plank position on your forearms with your feet in the foot cradles.",
      "Maintain a rigid plank with a neutral spine.",
      "Initiate the movement from your shoulders, pushing your body backward as far as you can control.",
      "Use your core and lats to pull your body forward past the starting point.",
      "The goal is to challenge your core's ability to prevent lumbar extension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a_z8-K-X2A4&t=120s",
    substitutions: ["Ab Wheel Rollout", "Long-Lever Plank", "TRX Rollout"]
  },
  "TRX Burpee": {
    image: "",
    category: "TRX",
    subcategory: "Full Body Metabolic",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Quadriceps", "Glutes", "Core"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires hip flexion for the jump and squat components." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor. Perform a squat.",
      "From the bottom of the squat, place your hands on the ground and hop your feet back into a plank.",
      "Perform a push-up.",
      "Hop your feet back in towards your hands, then explode up into a jump.",
      "This is a full-body conditioning exercise that can be modified by removing the push-up or jump."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qZQVWrsU5C8",
    substitutions: ["Burpee", "Squat Thrusts"]
  },
  "TRX Calf Raises": {
    image: "",
    category: "TRX",
    subcategory: "Calf Isolation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Gastrocnemius", "Soleus"],
      stability: ["Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires full range of motion from dorsiflexion to plantarflexion." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor, holding the handles for balance.",
      "Lean forward slightly to place more weight on your feet.",
      "Perform a calf raise by pressing up onto the balls of your feet as high as possible.",
      "Lower your heels down with control. For more range of motion, stand on a step or plate.",
      "Progress to a single-leg variation for increased difficulty."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=n329UubIsVo",
    substitutions: ["Standing Calf Raise", "DB Standing Calf Raise"]
  },
  "TRX Chest Fly": {
    image: "",
    category: "TRX",
    subcategory: "Chest Isolation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals"],
      stability: ["Core", "Shoulders", "Rotator Cuff", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires controlled shoulder horizontal adduction and abduction." }
      ]
    },
    techniquePoints: [
      "Set the straps to a long length. Face away from the anchor in a standing plank position.",
      "With a slight bend in your elbows, open your arms out to the side in a wide arc (fly motion).",
      "Lower your body until you feel a stretch in your chest.",
      "Squeeze your pecs to bring your hands back together to the starting position.",
      "The instability makes this a very challenging exercise for shoulder and core stabilizers."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=A0ptzi0tfM4",
    substitutions: ["Dumbbell Flye", "Cable Crossover", "Pec Deck"]
  },
  "TRX Chest Press": {
    image: "",
    category: "TRX",
    subcategory: "Push Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior", "Rotator Cuff"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist stability under an unstable load." }
      ]
    },
    techniquePoints: [
      "Set straps to mid-length. Face away from anchor, holding handles with an overhand grip.",
      "Walk feet back until your body is at the desired angle (more horizontal is harder).",
      "Maintain a rigid plank. Lower your chest between the handles, keeping elbows at a 45-75 degree angle.",
      "Press back to the starting position, squeezing your chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=i_45-JMoXg4",
    substitutions: ["Push-Up", "Dumbbell Bench Press"]
  },
  "TRX Clock Press / Archer Press": {
    image: "",
    category: "TRX",
    subcategory: "Push Horizontal Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals", "Triceps", "Anterior Deltoids"],
      stability: ["Core", "Obliques", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires stability through a wide range of motion." }
      ]
    },
    techniquePoints: [
      "Start in a TRX Push-Up position.",
      "As you lower down, keep one arm bent (the pressing arm) while the other arm extends straight out to the side (the 'archer' or 'fly' arm).",
      "Press up primarily with the bent arm, while the straight arm provides stability.",
      "This is an advanced variation that overloads one side of the chest at a time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=f4LTONEJ01I",
    substitutions: ["Archer Push-Up", "Single-Arm Dumbbell Bench Press"]
  },
  "TRX Close Grip Press": {
    image: "",
    category: "TRX",
    subcategory: "Push Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist stability." }
      ]
    },
    techniquePoints: [
      "Perform a TRX Chest Press, but keep the handles and your hands close together.",
      "Keep your elbows tucked in close to your body as you lower and press.",
      "This variation places a greater emphasis on the triceps.",
      "Maintain a strong plank throughout the movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kVjw9waQ8D8",
    substitutions: ["Diamond Push-Up", "Close-Grip Bench Press"]
  },
  "TRX Crossing Balance Lunge (Curtsy)": {
    image: "",
    category: "TRX",
    subcategory: "Lunge Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Glutes (especially Medius)", "Quadriceps", "Adductors"],
      stability: ["Core", "Hip Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires hip adduction and external rotation." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor, holding the handles for balance.",
      "Perform a reverse lunge, but step your back leg across and behind your front leg (like a curtsy).",
      "Lower your hips until your front thigh is parallel to the floor.",
      "This movement pattern heavily targets the gluteus medius of the front leg.",
      "Use the straps for balance and to maintain an upright torso."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yRt7fTtUnAM",
    substitutions: ["Curtsy Lunge", "TRX Abducted Lunge"]
  },
  "TRX Dip": {
    image: "",
    category: "TRX",
    subcategory: "Dip",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Triceps", "Pectorals (Lower)", "Anterior Deltoids"],
      stability: ["Shoulders", "Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension and stability due to the unstable nature of the straps." }
      ]
    },
    techniquePoints: [
      "Set the straps to a short length.",
      "Face away from the anchor point and suspend yourself between the straps with arms extended.",
      "Keep your chest up and shoulders pulled down and back.",
      "Lower your body by bending your elbows until they are at about 90 degrees.",
      "Press through your palms to return to the starting position. This is a very advanced and unstable movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=FOfvrqOHjXE",
    substitutions: ["Bench Dip", "Parallel Bar Dips", "Ring Dips"]
  },
  "TRX Face Pulls": {
    image: "",
    category: "TRX",
    subcategory: "Upper Back & Shoulder Health",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rear Delts", "Rotator Cuff (External Rotators)", "Trapezius (Mid and Lower)"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Promotes and requires good shoulder external rotation." }
      ]
    },
    techniquePoints: [
      "Face the anchor point, leaning back with a neutral or overhand grip.",
      "Pull the handles towards your face, keeping your elbows high and wide.",
      "At the end of the pull, externally rotate your shoulders as if doing a bicep flex pose.",
      "This is a crucial exercise for posture, shoulder health, and strengthening the upper back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Jbyoxer58j4",
    substitutions: ["Rope Face Pull", "Band Pull-Apart"]
  },
  "TRX Glute Bridge / Hip Press": {
    image: "",
    category: "TRX",
    subcategory: "Hip Hinge Posterior Chain",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires hip extension." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your heels in the foot cradles, knees bent.",
      "Drive your heels down into the handles and lift your hips off the floor.",
      "Squeeze your glutes hard at the top to form a straight line from knees to shoulders.",
      "Lower your hips back down with control.",
      "The unstable nature of the straps increases hamstring and stabilizer activation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=cN4ExWjTP2Q",
    substitutions: ["Glute Bridge", "Hip Thrust", "Swiss Ball Leg Curl"]
  },
  "TRX Hammer Curl": {
    image: "",
    category: "TRX",
    subcategory: "Curl Bicep",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Brachialis", "Brachioradialis", "Biceps"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Face the anchor, leaning back with a neutral grip (palms facing each other).",
      "Keep your elbows high and stationary.",
      "Pull your body up by curling the handles towards your temples.",
      "This variation emphasizes the brachialis and brachioradialis muscles.",
      "Lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=BsFfU_UzoLE",
    substitutions: ["Hammer Curl", "Cable Rope Hammer Curl"]
  },
  "TRX Hamstring Curl": {
    image: "",
    category: "TRX",
    subcategory: "Leg Curl",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires maintaining hip extension throughout the movement." }
      ]
    },
    techniquePoints: [
      "Lie on your back and place your heels in the foot cradles.",
      "Lift your hips off the ground to form a straight line from shoulders to heels (a bridge).",
      "Maintain the bridge as you pull your heels towards your glutes by bending your knees.",
      "Extend your legs back to the starting position with control, not letting your hips drop.",
      "This exercise combines a hip bridge with a leg curl."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RkEHyudfkyM",
    substitutions: ["Swiss Ball Leg Curl", "Lying Leg Curl Machine", "Sliding Leg Curl"]
  },
  "TRX Hamstring Runner": {
    image: "",
    category: "TRX",
    subcategory: "Leg Curl",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Core"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires dynamic, alternating hip and knee flexion." }
      ]
    },
    techniquePoints: [
      "Start in a TRX Glute Bridge position with hips elevated.",
      "Maintain the bridge while alternately pulling one heel in towards your glutes, then the other.",
      "The motion mimics a running stride while under tension.",
      "Keep your core tight and hips high throughout."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2WvbCRIvyfY",
    substitutions: ["TRX Hamstring Curl", "Alternating Sliding Leg Curl"]
  },
  "TRX High Row": {
    image: "",
    category: "TRX",
    subcategory: "Row Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rear Delts", "Rhomboids", "Trapezius (Mid)"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder horizontal abduction." }
      ]
    },
    techniquePoints: [
      "Face the anchor, lean back in a plank position.",
      "Perform a row, but pull with your elbows high and wide, bringing the handles towards your armpits.",
      "This elbow position shifts the focus from the lats to the upper back muscles.",
      "Squeeze your shoulder blades together at the top of the movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Bkz08jHYEwY",
    substitutions: ["Face Pull", "Bent Over Reverse Dumbbell Flye", "TRX Face Pulls"]
  },
  "TRX I-Y-T-W Flys": {
    image: "",
    category: "TRX",
    subcategory: "Upper Back & Shoulder Health",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Trapezius (Lower, Mid)", "Rear Delts", "Rotator Cuff"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Moves the shoulder through multiple planes of motion." }
      ]
    },
    techniquePoints: [
      "Face the anchor and lean back at a slight angle.",
      "Keeping arms straight, pull your body up by raising your arms into an 'I' shape (straight overhead).",
      "Lower and repeat for a 'Y' shape, then a 'T' shape (reverse flye), then a 'W' shape (scapular retraction).",
      "This is a prehab/strength complex for the entire upper back and shoulder girdle."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=frHifdCxH6k",
    substitutions: ["LYTPs (Dumbbell)", "Band Pull-Apart"]
  },
  "TRX Inverted Row": {
    image: "",
    category: "TRX",
    subcategory: "Row Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Upper Back"],
      stability: ["Core", "Glutes", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Position yourself directly under the anchor point so your body is nearly horizontal.",
      "Maintain a rigid plank from head to heels.",
      "Pull your chest up to the handles, squeezing your shoulder blades.",
      "This is the most challenging row variation, closely mimicking a barbell row's demand on core stability.",
      "Lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iT_oaf3k0Xw",
    substitutions: ["Barbell Row", "Pendlay Row", "Inverted Row (on bar)"]
  },
  "TRX Jack Knife": {
    image: "",
    category: "TRX",
    subcategory: "Core Flexion",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Obliques"],
      stability: ["Shoulders", "Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Requires flexibility to achieve the pike position with straight legs." },
        { muscle: "Shoulder", level: "Moderate", description: "Requires stable shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Keeping your legs as straight as possible, lift your hips high towards the ceiling into a pike or 'jack knife' position.",
      "Your body should form an inverted 'V' shape.",
      "Slowly lower your hips back down to the starting plank position with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a_z8-K-X2A4&t=240s",
    substitutions: ["TRX Pike", "Hanging Leg Raise", "Ab Wheel Rollout"]
  },
  "TRX Knee Tuck": {
    image: "",
    category: "TRX",
    subcategory: "Core Flexion",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Hip Flexors"],
      stability: ["Shoulders", "Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion to bring knees to chest." }
      ]
    },
    techniquePoints: [
      "Start in a high plank (push-up) position with your feet in the foot cradles.",
      "Keep your arms straight and shoulders stable over your wrists.",
      "Engage your core to pull both knees in towards your chest, crunching your abs.",
      "Extend your legs back to the starting plank position with control, not letting your lower back sag."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=e2K3z6t9c-o",
    substitutions: ["Hanging Knee Raise", "Reverse Crunch", "TRX Oblique Crunch"]
  },
  "TRX L-Sit": {
    image: "",
    category: "TRX",
    subcategory: "Core Compression",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Core (Rectus Abdominis)", "Hip Flexors", "Quadriceps", "Triceps"],
      stability: ["Triceps", "Lats", "Serratus Anterior", "Scapular Depressors"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires significant hamstring flexibility to keep legs straight and parallel to the floor." }
      ]
    },
    techniquePoints: [
      "Set the straps to a low position.",
      "Sit on the floor between the handles.",
      "Press down on the handles to lift your hips and legs off the floor.",
      "Keep your legs straight out in front of you, parallel to the ground.",
      "Hold the position, keeping your shoulders depressed (pushed down) and chest proud."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=h6G-c5mYt-I",
    substitutions: ["L-Sit (on floor or parallettes)", "Hanging L-Sit", "Tuck L-Sit"]
  },
  "TRX Lunge": {
    image: "",
    category: "TRX",
    subcategory: "Lunge Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius (of stance leg)", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Hip Flexors", level: "High", description: "Provides a deep stretch for the hip flexor of the suspended leg." }
      ]
    },
    techniquePoints: [
      "Face away from the anchor and place one foot into the foot cradle(s).",
      "Hop forward into a lunge stance. This is a TRX Rear Foot Elevated Split Squat (RFESS).",
      "Lower your hips until your front thigh is parallel to the floor, keeping your chest up.",
      "The instability of the suspended back leg intensely challenges the stability of your front leg.",
      "Drive through your front heel to return to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=COtOiAgKEpk",
    substitutions: ["DB Bulgarian Split Squat", "Walking Lunge", "Reverse Lunge"]
  },
  "TRX Low Row": {
    image: "",
    category: "TRX",
    subcategory: "Row Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core", "Glutes", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension." }
      ]
    },
    techniquePoints: [
      "Face the anchor, lean back in a plank position.",
      "Perform a row, keeping your elbows tucked in close to your sides.",
      "Pull the handles towards your lower ribs.",
      "This elbow path emphasizes the latissimus dorsi.",
      "Squeeze your lats and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=nXfYNAwB_Lo",
    substitutions: ["TRX Row", "Single-Arm Dumbbell Row", "Seated Cable Row (close grip)"]
  },
  "TRX Mountain Climbers": {
    image: "",
    category: "TRX",
    subcategory: "Core Metabolic",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Core", "Hip Flexors", "Shoulders"],
      stability: ["Core (Anti-Rotation)", "Shoulders", "Serratus Anterior"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires dynamic hip flexion." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Maintain a stable plank while alternately driving one knee towards your chest.",
      "Move at a controlled pace to focus on stability, or increase speed for a cardiovascular challenge.",
      "Focus on preventing your hips from sagging, hiking up, or rotating."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=InIKovtYzCQ",
    substitutions: ["Standard Mountain Climbers", "Bear Crawl"]
  },
  "TRX Oblique Crunch": {
    image: "",
    category: "TRX",
    subcategory: "Core Flexion & Rotation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Obliques", "Rectus Abdominis", "Hip Flexors"],
      stability: ["Shoulders", "Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires hip flexion and slight rotation." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Perform a knee tuck, but draw both knees towards one elbow (e.g., to the right).",
      "Extend back to the plank position.",
      "Draw both knees towards the other elbow (to the left).",
      "This adds a rotational component that heavily targets the obliques."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=m-hQi-j1e4Q",
    substitutions: ["Hanging Oblique Knee Raise", "Russian Twist"]
  },
  "TRX Overhead Squat": {
    image: "",
    category: "TRX",
    subcategory: "Squat Bilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Deltoids", "Upper Back"],
      stability: ["Entire Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Ankles", level: "High", description: "The straps assist, but good dorsiflexion is still needed for depth." },
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion." },
        { muscle: "Thoracic Spine", level: "High", description: "Excellent T-spine extension is needed to keep the chest up and arms overhead." },
        { muscle: "Shoulder", level: "High", description: "Requires stable, full shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Face the anchor, holding the handles with arms extended overhead, creating tension.",
      "Perform a squat, keeping your arms straight and overhead throughout the movement.",
      "The straps provide assistance with balance and help cue an upright torso.",
      "This is an excellent tool for developing the mobility required for a barbell overhead squat."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4KDLX3CFW38",
    substitutions: ["Overhead Squat (Barbell)", "Goblet Squat", "Wall Slide"]
  },
  "TRX Pendulum": {
    image: "",
    category: "TRX",
    subcategory: "Core Rotation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Obliques", "Rectus Abdominis"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Movement is primarily rotational." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Keep your knees bent or legs straight.",
      "Swing both legs from side to side like a pendulum, controlling the movement with your obliques.",
      "Keep your upper body and shoulders as still as possible.",
      "Avoid using momentum; the work should come from your core."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a_z8-K-X2A4&t=180s",
    substitutions: ["Hanging Windshield Wipers", "Russian Twist"]
  },
  "TRX Pike": {
    image: "",
    category: "TRX",
    subcategory: "Core Compression",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Shoulders", "Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires significant hamstring flexibility to lift the hips with straight legs." },
        { muscle: "Shoulder", level: "Moderate", description: "Requires stable shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Keeping your legs straight, hinge at the hips and lift them as high as possible.",
      "Your body should form an inverted 'V'.",
      "Focus on compressing your abs to lift your hips.",
      "Lower back down to the plank position with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a_z8-K-X2A4&t=60s",
    substitutions: ["TRX Jack Knife", "Hanging Leg Raise", "V-Up"]
  },
  "TRX Pike Push-Up": {
    image: "",
    category: "TRX",
    subcategory: "Push Vertical",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder flexion and stability." }
      ]
    },
    techniquePoints: [
      "Start in a plank position with feet in the foot cradles.",
      "Pike your hips up high, creating an inverted 'V' shape.",
      "From this pike position, perform a push-up by lowering the top of your head towards the floor.",
      "Press back up to the starting pike position.",
      "This exercise is a progression towards a handstand push-up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9wTkprgmKQc",
    substitutions: ["Pike Push-Up", "Decline Push-Up", "DB Seated Shoulder Press"]
  },
  "TRX Pistol Squat": {
    image: "",
    category: "TRX",
    subcategory: "Squat Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Hip Stabilizers", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires excellent ankle dorsiflexion, though straps assist." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion." }
      ]
    },
    techniquePoints: [
      "Stand on one leg facing the anchor point, holding the handles with light tension.",
      "Extend your non-working leg out in front of you.",
      "Lower yourself into a deep, single-leg squat, using the straps for balance and assistance.",
      "Go as deep as possible while keeping your heel on the ground.",
      "Drive through your heel to stand back up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=_l9MEstzm0g",
    substitutions: ["Pistol Squat (to box)", "Single-Leg Leg Press"]
  },
  "TRX Plank": {
    image: "",
    category: "TRX",
    subcategory: "Core Anti-Extension",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: [],
      stability: ["Entire Core", "Shoulders", "Glutes", "Quadriceps"],
      mobility: [
        { muscle: "Ankle", level: "Low", description: "Requires basic stability." }
      ]
    },
    techniquePoints: [
      "Place your feet in the foot cradles and assume a high plank (on hands) or low plank (on forearms) position.",
      "Maintain a perfectly straight line from head to heels.",
      "Actively engage your core, glutes, and quads to prevent your hips from sagging.",
      "The instability of the straps makes this significantly more challenging than a standard plank."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a_z8-K-X2A4",
    substitutions: ["Plank", "TRX Body Saw"]
  },
  "TRX Plank Press": {
    image: "",
    category: "TRX",
    subcategory: "Core Anti-Extension",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Core", "Shoulders", "Lats"],
      stability: ["Entire Core", "Shoulders"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires controlled shoulder flexion and extension." }
      ]
    },
    techniquePoints: [
      "Start in a standing position facing away from the anchor, holding the handles at chest height with arms extended.",
      "Lean forward into a plank position.",
      "While holding the plank, press the handles forward and then pull them back, moving your body slightly.",
      "This is an advanced variation of the plank that challenges shoulder and core stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=mzZgOAeY5Js",
    substitutions: ["TRX Body Saw", "Ab Wheel Rollout"]
  },
  "TRX Power Pull": {
    image: "",
    category: "TRX",
    subcategory: "Row Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Biceps", "Obliques", "Upper Back"],
      stability: ["Core", "Shoulder", "Glutes"],
      mobility: [
        { muscle: "Thoracic Spine", level: "Moderate", description: "Involves controlled rotation of the upper back." }
      ]
    },
    techniquePoints: [
      "Use a single handle. Start in a row position.",
      "Pull yourself up with one arm while rotating your torso open towards that side.",
      "At the top, your chest should be open to the side.",
      "On the way down, reach your free hand across your body towards the anchor point to increase the stretch and rotational load."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=FUTpOejIEzE",
    substitutions: ["Single-Arm Cable Row", "Kroc Row", "Meadows Row"]
  },
  "TRX Pull-Up": {
    image: "",
    category: "TRX",
    subcategory: "Pull Vertical",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder range of motion in the pulling plane." }
      ]
    },
    techniquePoints: [
      "Set straps to a medium length and sit or stand directly under the anchor point.",
      "Perform a combined row and pull-up motion, pulling your body vertically while using your feet for assistance as needed.",
      "This is an assisted pull-up variation that helps build the strength for a full pull-up.",
      "Focus on driving your elbows down and back to engage the lats."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fAQwN4t-2JI",
    substitutions: ["Assisted Pull-Up Machine", "Banded Pull-Up", "Inverted Row"]
  },
  "TRX Push-Up": {
    image: "",
    category: "TRX",
    subcategory: "Push Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior", "Rotator Cuff"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist stability under an unstable load." }
      ]
    },
    techniquePoints: [
      "Set the straps to mid-length. Start in a plank position with hands in the handles.",
      "Maintain a straight line from head to heels, engaging your core and glutes.",
      "Lower your chest between the handles, keeping your elbows at about a 45-degree angle.",
      "Press back to the starting position. Increase difficulty by walking your feet further back (more horizontal body angle)."
    ],
    youtubeLink: "https://youtu.be/GpJtJ-_5w58",
    substitutions: ["Push-Up", "Dumbbell Bench Press", "Ring Push-Up"]
  },
  "TRX Reverse Grip (Pronated) Bicep Curl": {
    image: "",
    category: "TRX",
    subcategory: "Curl Bicep",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Brachioradialis", "Brachialis"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Elbow", level: "Low", description: "Requires full elbow flexion." }
      ]
    },
    techniquePoints: [
      "Face the anchor, leaning back with an overhand (pronated) grip.",
      "Keep elbows high and stationary.",
      "Pull your body up by curling the handles towards your head.",
      "This variation heavily targets the forearms (brachioradialis) and brachialis muscle.",
      "Lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EOtm5dKasvM",
    substitutions: ["Reverse Grip Curl", "Hammer Curl"]
  },
  "TRX Rollout": {
    image: "",
    category: "TRX",
    subcategory: "Core Anti-Extension",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Rectus Abdominis", "Lats"],
      stability: ["Entire Core", "Shoulders"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder flexion to roll out." }
      ]
    },
    techniquePoints: [
      "Kneel facing away from the anchor point, holding the handles in front of you.",
      "Keeping your arms straight, slowly extend your arms forward and overhead, allowing your body to roll out.",
      "Go as far as you can while maintaining a flat back and engaged core.",
      "Use your core and lats to pull your arms back to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-3Q3n9MbHgs",
    substitutions: ["Ab Wheel Rollout", "TRX Body Saw"]
  },
  "TRX Row": {
    image: "",
    category: "TRX",
    subcategory: "Row Horizontal",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Trapezius", "Biceps", "Rear Delts"],
      stability: ["Core", "Glutes", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension and scapular retraction." }
      ]
    },
    techniquePoints: [
      "Face the anchor point, holding the handles and leaning back with your body in a straight plank.",
      "Pull your chest up to the handles, squeezing your shoulder blades together.",
      "The more horizontal your body (feet closer to the anchor), the harder the exercise.",
      "Keep your body rigid and avoid sagging your hips.",
      "Lower yourself with control."
    ],
    youtubeLink: "https://youtu.be/i6t5_g3_a1g",
    substitutions: ["Inverted Row", "Seated Cable Row", "Dumbbell Row"]
  },
  "TRX Shoulder Press": {
    image: "",
    category: "TRX",
    subcategory: "Push Vertical",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires stable shoulder flexion." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor point, holding the handles overhead with arms extended.",
      "Lean forward into a plank position.",
      "Lower your body by bending your elbows, bringing your hands down and back beside your head.",
      "Press back up to the starting position, driving through the handles.",
      "This is a challenging overhead pressing variation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=XMMbgWX6gZc",
    substitutions: ["Pike Push-Up", "DB Seated Shoulder Press"]
  },
  "TRX Side Bends (Hip Drop)": {
    image: "",
    category: "TRX",
    subcategory: "Core Rotation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Obliques"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires lateral hip movement." }
      ]
    },
    techniquePoints: [
      "Start in a side plank position on your forearm, with both feet in the foot cradles.",
      "Maintain a straight line with your body.",
      "Slowly lower your bottom hip towards the floor.",
      "Use your obliques to pull your hip back up to the starting position.",
      "This is a very intense isolation exercise for the obliques."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=u8aAEuY0t-w",
    substitutions: ["Side Plank", "Cable Wood Chopper"]
  },
  "TRX Side Lunge": {
    image: "",
    category: "TRX",
    subcategory: "Lunge Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Adductors", "Glutes", "Quadriceps"],
      stability: ["Core", "Hip Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires excellent adductor flexibility and hip mobility." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor, holding the handles for balance.",
      "Take a large step out to one side, keeping the other leg straight.",
      "Sit your hips back and down into a deep side lunge.",
      "Drive off the bent leg to return to the center.",
      "The straps provide support, allowing for a deeper and more controlled range of motion."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=KTLATeJT8RM",
    substitutions: ["Cossack Squat", "Side Lunge"]
  },
  "TRX Side Plank": {
    image: "",
    category: "TRX",
    subcategory: "Core Anti-Lateral Flexion",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: [],
      stability: ["Obliques", "Gluteus Medius", "Core", "Shoulders"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires stability." }
      ]
    },
    techniquePoints: [
      "Lie on your side and place both feet into the foot cradles.",
      "Prop yourself up on your forearm, directly under your shoulder.",
      "Lift your hips to form a straight line from head to heels.",
      "The unstable base intensely challenges the obliques and hip stabilizers.",
      "Hold for time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=S5k8f3fGz3E",
    substitutions: ["Side Plank", "TRX Side Bends (Hip Drop)"]
  },
  "TRX Single Arm Row": {
    image: "",
    category: "TRX",
    subcategory: "Row Unilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Lats", "Biceps", "Upper Back"],
      stability: ["Core (Anti-Rotation)", "Obliques", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Requires shoulder extension." }
      ]
    },
    techniquePoints: [
      "Use a single handle and lean back into a plank position.",
      "Perform a row with one arm, keeping your shoulders square and hips level.",
      "Fight the powerful rotational force with your core.",
      "This is an advanced anti-rotation core exercise as much as it is a back exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iSw1jfHgULc",
    substitutions: ["TRX Power Pull", "Single-Arm Cable Row"]
  },
  "TRX Sprinter Start": {
    image: "",
    category: "TRX",
    subcategory: "Full Body Metabolic",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Glutes", "Quadriceps", "Core"],
      stability: ["Core", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires dynamic hip flexion and extension." }
      ]
    },
    techniquePoints: [
      "Face away from the anchor, holding handles at chest height.",
      "Lean forward and step one leg far back into a deep lunge, mimicking a sprinter's starting position.",
      "Explosively drive your back knee forward and up, while pressing on the handles.",
      "Return to the deep lunge position with control.",
      "This is a powerful, explosive exercise for single-leg power and core stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4fTmRw4iyKg",
    substitutions: ["Reverse Lunge with Knee Drive", "Box Jumps"]
  },
  "TRX Squat": {
    image: "",
    category: "TRX",
    subcategory: "Squat Bilateral",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "The straps can assist in achieving greater ankle dorsiflexion." },
        { muscle: "Hips", level: "Moderate", description: "Allows for exploration of deep hip flexion." }
      ]
    },
    techniquePoints: [
      "Stand facing the anchor, holding the handles with light tension.",
      "Sit your hips back and down into a squat, keeping your chest up.",
      "Use the straps for balance and to help maintain an upright torso.",
      "Drive through your heels to return to the start.",
      "This is an excellent tool for teaching and perfecting squat mechanics."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=DTXphTGYd0g",
    substitutions: ["Bodyweight Squat", "Goblet Squat"]
  },
  "TRX Squat Jump": {
    image: "",
    category: "TRX",
    subcategory: "Squat Plyometric",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Calves"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Requires mobility for both the squat and the landing." }
      ]
    },
    techniquePoints: [
      "Perform a TRX Squat.",
      "From the bottom of the squat, explode upwards into a jump.",
      "Use the straps to help control your landing.",
      "Land softly, absorbing the impact by immediately descending into the next squat.",
      "This adds a plyometric component to the squat."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=JgLl-ZHyrRM",
    substitutions: ["Box Jump", "Bodyweight Squat Jump"]
  },
  "TRX Torso Rotation": {
    image: "",
    category: "TRX",
    subcategory: "Core Rotation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Obliques", "Core"],
      stability: ["Shoulders", "Hips"],
      mobility: [
        { muscle: "Thoracic Spine", level: "High", description: "The primary goal is to generate and control rotation through the T-spine." }
      ]
    },
    techniquePoints: [
      "Stand sideways to the anchor point, holding the handles with both hands.",
      "Extend your arms and lean away from the anchor to create tension.",
      "Keeping your arms straight, rotate your torso away from the anchor point.",
      "Control the return to the start, resisting the pull of the straps.",
      "The movement should originate from your core, not your arms."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ECQIb20v3N8",
    substitutions: ["Pallof Press", "Cable Wood Chopper"]
  },
  "TRX Triceps Extension": {
    image: "",
    category: "TRX",
    subcategory: "Tricep Isolation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Serratus Anterior", "Lats", "Shoulders"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder flexion to hold the overhead position." }
      ]
    },
    techniquePoints: [
      "Face away from the anchor point, holding the handles with an overhand grip.",
      "Lean forward into a plank position with your arms extended overhead.",
      "Keeping your body straight and upper arms stationary, hinge at the elbows to lower your head towards your hands.",
      "Press through the handles by extending your elbows to return to the start.",
      "The more horizontal your body, the harder the exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oV-y3Qe_a0w",
    substitutions: ["Overhead Cable Triceps Extension", "DB Skull Crusher", "Band Tricep Extension"]
  },
  "TRX Triceps Extension (Skull Crusher)": {
    image: "",
    category: "TRX",
    subcategory: "Tricep Isolation",
    attachments: ["TRX Suspension Trainer"],
    muscles: {
      strength: ["Triceps"],
      stability: ["Core", "Shoulders"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Less shoulder flexion required than the overhead version." }
      ]
    },
    techniquePoints: [
      "Face away from the anchor and lean forward into a plank.",
      "Position the handles in front of your forehead with elbows bent.",
      "Keep your upper arms relatively stationary.",
      "Press the handles forward and down by extending your elbows until your arms are straight.",
      "This variation mimics the motion of a skull crusher."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RWQYQarfDzk",
    substitutions: ["TRX Triceps Extension", "EZ-Bar Skull Crusher"]
  }
};