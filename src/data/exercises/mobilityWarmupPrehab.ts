import type { ExerciseInfo } from '../types';

export const mobilityWarmupPrehabExercises: { [key: string]: ExerciseInfo } = {
  "Arch Holds": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Core & Posterior Chain Activation",
    attachments: [],
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Hamstrings (isometric)"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Promotes spinal extension endurance." }
      ]
    },
    techniquePoints: [
      "Lie face down on the floor with your arms extended overhead (like Superman).",
      "Simultaneously lift your arms, chest, and legs off the floor by squeezing your glutes and lower back.",
      "Keep your neck in a neutral position by looking at the floor in front of you.",
      "Hold the position for the prescribed time, focusing on maintaining tension throughout the posterior chain."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=TkrTjU-qf6U",
    substitutions: ["Superman", "Reverse Plank", "Glute Bridge"]
  },
  "Band wall slides": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder & Scapular Health",
    attachments: ["Resistance Band (Mini)"],
    muscles: {
      strength: ["Serratus Anterior", "Lower Trapezius", "External Rotators"],
      stability: ["Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Improves shoulder flexion and external rotation while activating key stabilizers." }
      ]
    },
    techniquePoints: [
      "Place a mini-band around your wrists.",
      "Stand facing a wall with your forearms pressed against it, elbows bent at 90 degrees.",
      "Create outward tension on the band.",
      "Slowly slide your forearms up the wall as high as you can without losing contact or shrugging your shoulders.",
      "Focus on keeping your lower ribs down and core engaged to avoid arching your back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LIi-akh1zZc",
    substitutions: ["Wall Slide (bodyweight)", "Foam Roller Wall Slide"]
  },
  "Burpees": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Full Body Conditioning",
    attachments: [],
    muscles: {
      strength: ["Quadriceps", "Glutes", "Pectorals", "Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires quick flexion to bring feet towards hands." },
        { muscle: "Ankle", level: "Moderate", description: "Requires dorsiflexion for the squat portion." }
      ]
    },
    techniquePoints: [
      "Start standing, then drop into a squat position with your hands on the floor.",
      "Kick your feet back to a push-up position and perform one push-up.",
      "Immediately return your feet to the squat position.",
      "Jump up explosively from the squat position.",
      "It's a full-body metabolic conditioning exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dZgVxmf6jkA",
    substitutions: ["Squat Thrusts", "Jumping Jacks", "Kettlebell Swings"]
  },
  "Cat/Cow": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Spinal Mobility",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Core"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Excellent for mobilizing the entire spine through flexion and extension." }
      ]
    },
    techniquePoints: [
      "Start on all fours, with hands under shoulders and knees under hips.",
      "Inhale as you drop your belly towards the mat, lift your chin and chest, and look up (Cow Pose).",
      "Exhale as you draw your belly to your spine and round your back toward the ceiling (Cat Pose).",
      "Coordinate the movement with your breath for a fluid, controlled motion."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=KCvPQNLZMGs",
    substitutions: ["Standing Spinal Rolls", "Foam Rolling (Thoracic Spine)"]
  },
  "Crawling": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Full Body Coordination & Stability",
    attachments: [],
    muscles: {
      strength: ["Deltoids", "Triceps", "Pectorals", "Core", "Quadriceps"],
      stability: ["Entire Core", "Shoulder Girdle", "Hip Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires sustained wrist extension." },
        { muscle: "Hip", level: "Moderate", description: "Requires coordinated hip flexion and extension." }
      ]
    },
    techniquePoints: [
      "Start on all fours with your knees hovering just an inch off the ground (Bear Crawl position).",
      "Keep your back flat and core engaged, as if balancing a glass of water on it.",
      "Move forward by taking a small step with your right hand and left foot simultaneously.",
      "Alternate sides, moving in a controlled, contralateral pattern.",
      "Can be done forward, backward, or laterally."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=U3Y58Kyw7Xw",
    substitutions: ["Plank", "Birddog"]
  },
  "Cuban press": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder & Scapular Health",
    attachments: ["Light Dumbbells or Plates"],
    muscles: {
      strength: ["External Rotators", "Deltoids", "Trapezius"],
      stability: ["Rotator Cuff", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Combines upright row, external rotation, and overhead press motions." }
      ]
    },
    techniquePoints: [
      "Start standing with light dumbbells, palms facing back.",
      "Perform an upright row until the weights are at chest level, leading with the elbows.",
      "Externally rotate your shoulders, bringing your forearms up to a 90-degree angle (like a goalpost).",
      "Press the dumbbells overhead.",
      "Reverse the motion with control: lower to 90 degrees, internally rotate, and lower to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=19Q1-2ExnE0",
    substitutions: ["Band Pull-Apart", "Side-lying external rotations", "Face Pull"]
  },
  "Eccentric flexion wrist curls": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Grip & Forearm Health",
    attachments: ["Light Dumbbell"],
    muscles: {
      strength: ["Forearm Flexors"],
      stability: [],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "Focuses on controlled wrist flexion and extension." }
      ]
    },
    techniquePoints: [
      "Sit and rest your forearm on your thigh, with your palm facing up and hand hanging off the knee.",
      "Hold a light dumbbell.",
      "Use your other hand to help lift the weight up into full wrist flexion (concentric phase).",
      "Release the assisting hand and slowly lower the weight through the full range of motion (eccentric phase).",
      "The focus is on the slow, controlled negative."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ZBY4hOC8UbQ",
    substitutions: ["Wrist Curls", "Rice bucket exercises"]
  },
  "Eccentric leg extensions": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Knee Prehab",
    attachments: ["Leg Extension Machine"],
    muscles: {
      strength: ["Quadriceps (eccentric focus)"],
      stability: [],
      mobility: [
        { muscle: "Knee", level: "Low", description: "Strengthens tendons and muscles around the knee joint through controlled extension." }
      ]
    },
    techniquePoints: [
      "Set a light weight on the leg extension machine.",
      "Use both legs to lift the weight to the top position (concentric phase).",
      "Remove one leg and use only the working leg to slowly lower the weight back down (eccentric phase).",
      "The lowering phase should be slow and controlled (3-5 seconds).",
      "This is excellent for building tendon strength and addressing knee pain."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fcvfk7TVyVg",
    substitutions: ["Terminal Knee Extensions (TKEs)", "Reverse Sled Drag"]
  },
  "Foam Roll": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Myofascial Release",
    attachments: ["Foam Roller"],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Varies", level: "Moderate", description: "Aims to reduce muscle tightness and improve tissue quality across various muscle groups." }
      ]
    },
    techniquePoints: [
      "Use a foam roller to apply pressure to specific muscle groups.",
      "Slowly roll back and forth over the muscle belly, avoiding joints and bones.",
      "When you find a tender spot (trigger point), pause and hold the pressure for 20-30 seconds until the tension releases.",
      "Common areas include quads, hamstrings, lats, and the thoracic spine."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4p4m3F3s1_g",
    substitutions: ["Lacrosse Ball Massage", "Massage Gun", "Dynamic Stretching"]
  },
  "Hollow holds": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Core Stability",
    attachments: [],
    muscles: {
      strength: ["Rectus Abdominis", "Transverse Abdominis", "Obliques"],
      stability: ["Entire Core"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back and press your lower back firmly into the floor (posterior pelvic tilt).",
      "Lift your legs and shoulder blades a few inches off the ground.",
      "Keep your arms extended overhead or at your sides for an easier variation.",
      "Your body should form a shallow 'banana' shape.",
      "The key is to maintain lower back contact with the floor at all times."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=01iEknlpnVY",
    substitutions: ["Dead Bug", "Plank", "Arch Holds"]
  },
  "Internal and external rotation exercises": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder & Scapular Health",
    attachments: ["Resistance Band or Light Dumbbells"],
    muscles: {
      strength: ["Infraspinatus", "Teres Minor (External Rotators)", "Subscapularis (Internal Rotator)"],
      stability: ["Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Directly trains the rotational capacity of the shoulder joint." }
      ]
    },
    techniquePoints: [
      "Keep your elbow pinned to your side at a 90-degree angle.",
      "For external rotation, rotate your forearm outward against resistance.",
      "For internal rotation, rotate your forearm inward against resistance.",
      "Use very light weight or band tension; the focus is on strengthening small stabilizer muscles, not moving heavy loads."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=mJC_HOQOVPs",
    substitutions: ["Side-lying external rotations", "Cuban press"]
  },
  "Inverted hang": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Spinal Decompression & Grip",
    attachments: ["Pull-up Bar or Rings"],
    muscles: {
      strength: ["Forearm Flexors (Grip)"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Uses gravity to decompress the spinal column." }
      ]
    },
    techniquePoints: [
      "Hang from a bar or rings.",
      "Tuck your knees to your chest and continue to roll your body backward until you are upside down.",
      "Keep your arms straight and shoulders engaged (active hang).",
      "This is a foundational skill for exercises like Skin the Cat and levers."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=N6_s0p5zb2s",
    substitutions: ["Dead Hang", "Skin the Cat"]
  },
  "Jumping jacks": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Cardio & Full Body Warm-up",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Involves shoulder abduction and adduction." },
        { muscle: "Hip", level: "Low", description: "Involves hip abduction and adduction." }
      ]
    },
    techniquePoints: [
      "Start standing with feet together and hands at your sides.",
      "Simultaneously jump your feet out to the sides while raising your arms overhead.",
      "Jump back to the starting position.",
      "Maintain a light, rhythmic pace to elevate heart rate and warm up the joints."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GOhV5lwc17U",
    substitutions: ["Jumping Rope", "Light Jogging", "Burpees"]
  },
  "Jumping rope": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Cardio & Coordination",
    attachments: ["Jump Rope"],
    muscles: {
      strength: ["Calves"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "Low", description: "Promotes ankle stiffness and elasticity." },
        { muscle: "Wrist", level: "Low", description: "Requires small, coordinated wrist circles." }
      ]
    },
    techniquePoints: [
      "Keep your torso upright and your jumps low to the ground.",
      "The bounce should come from the balls of your feet, not from bending your knees deeply.",
      "Rotate the rope using your wrists, not your entire arms.",
      "Excellent for cardiovascular warm-up, coordination, and footwork."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=u3zgHI8QnqE",
    substitutions: ["Jumping Jacks", "Phantom Rope Jumps"]
  },
  "Kick": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Dynamic Stretching",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Improves dynamic hamstring flexibility." },
        { muscle: "Hip Flexors", level: "Moderate", description: "Improves dynamic hip flexor flexibility." }
      ]
    },
    techniquePoints: [
      "Can refer to various dynamic kicks (e.g., front kicks, side kicks).",
      "For a hamstring stretch (front kick): Keep your leg straight and swing it up as high as possible while maintaining an upright torso.",
      "The movement should be controlled and rhythmic, not ballistic.",
      "Alternate legs with each step."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WV_OH8cuJFw",
    substitutions: ["Walking High Kicks", "Leg Swings"]
  },
  "Light cardio on machine on your choice of machine": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "General Warm-up",
    attachments: ["Cardio Machine"],
    muscles: {
      strength: [],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "Choose any cardio machine (treadmill, bike, rower, elliptical).",
      "Perform at a low, conversational intensity for 5-10 minutes.",
      "The goal is to increase heart rate, core body temperature, and blood flow to the muscles.",
      "This prepares the body for more intense activity."
    ],
    youtubeLink: "",
    substitutions: ["Light Jogging", "Jumping Rope", "Jumping Jacks"]
  },
  "Light jogging": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "General Warm-up",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "Perform a jog at a slow, easy pace.",
      "Focus on light foot strikes and a relaxed posture.",
      "The goal is to elevate the heart rate and warm up the lower body joints.",
      "Duration is typically 5-10 minutes as part of a general warm-up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yWSQG3U0oJY",
    substitutions: ["Jumping Rope", "Jumping Jacks", "Stationary Bike"]
  },
  "LYTPs": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder & Scapular Health",
    attachments: ["Light Dumbbells or Bodyweight"],
    muscles: {
      strength: ["Lower Trapezius", "Mid Trapezius", "Rear Deltoids"],
      stability: ["Scapular Stabilizers", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Moves the shoulder through multiple planes of motion to activate key postural muscles." }
      ]
    },
    techniquePoints: [
      "Lie face down on an incline bench or stand hinged at the hips.",
      "L: With thumbs up, lift your arms out to the side with elbows at 90 degrees.",
      "Y: With thumbs up, lift your arms overhead into a 'Y' shape.",
      "T: With thumbs down, lift your arms straight out to the sides into a 'T' shape.",
      "P (Scapular Retraction): Pull your shoulder blades together.",
      "Focus on initiating each movement by squeezing the muscles in your mid and upper back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VyBJQQz3eok",
    substitutions: ["Band Pull-Apart", "Face Pull"]
  },
  "Median Nerve Glide": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Nerve Mobilization",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Median Nerve", level: "Low", description: "Designed to improve the gliding of the median nerve, which can help with wrist and hand issues." }
      ]
    },
    techniquePoints: [
      "Extend one arm to the side, parallel to the floor, palm facing up.",
      "Extend your wrist, pointing your fingers towards the floor.",
      "Gently tilt your head away from the extended arm until you feel a light stretch.",
      "To floss, gently nod your head towards and away from your shoulder.",
      "This should be a gentle, pain-free movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=af3SC5rdyWk",
    substitutions: ["Radial Nerve Glide", "Ulnar Nerve Glide"]
  },
  "Pike stretch": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Stretching (Posterior Chain)",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "A deep static stretch for the entire hamstring complex." },
        { muscle: "Lower Back", level: "Moderate", description: "Also stretches the erector spinae and calves." }
      ]
    },
    techniquePoints: [
      "Sit on the floor with your legs straight out in front of you.",
      "Keeping your back as straight as possible, hinge forward from your hips.",
      "Reach towards your toes. It is more important to keep the back straight than to touch the toes.",
      "Hold the stretch for 30-60 seconds, breathing deeply.",
      "To increase the stretch, actively try to tilt your pelvis forward."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iAadl59n3Eo",
    substitutions: ["Standing Toe Touch", "Downward Dog"]
  },
  "Radial Nerve Glide": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Nerve Mobilization",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Radial Nerve", level: "Low", description: "Improves the mobility of the radial nerve." }
      ]
    },
    techniquePoints: [
      "Stand and depress your shoulder.",
      "Internally rotate your arm so your palm faces backward, and flex your wrist.",
      "Gently tilt your head away from the arm until a light stretch is felt.",
      "Perform gentle, oscillating movements with your head or wrist.",
      "This movement should always be gentle and stay out of pain or intense tingling."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vL7yF9TXCCo",
    substitutions: ["Median Nerve Glide", "Ulnar Nerve Glide"]
  },
  "Reverse Plank": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Core & Posterior Chain Activation",
    attachments: [],
    muscles: {
      strength: ["Glutes", "Hamstrings", "Erector Spinae"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder extension and opens up the chest." }
      ]
    },
    techniquePoints: [
      "Sit on the floor with legs straight out and hands on the floor behind you, fingers pointing towards your feet.",
      "Press into your hands and heels to lift your hips off the floor.",
      "Form a straight line from your head to your heels, squeezing your glutes and keeping your core tight.",
      "Avoid letting your hips sag. Hold the position for time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ZNAxdJ6Bt00",
    substitutions: ["Glute Bridge", "Arch Holds"]
  },
  "Rice bucket exercises": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Grip & Forearm Health",
    attachments: ["Bucket", "Rice"],
    muscles: {
      strength: ["All muscles of the hand and forearm"],
      stability: [],
      mobility: [
        { muscle: "Wrist/Fingers", level: "Low", description: "Strengthens the hands and forearms through a full range of motion against accommodating resistance." }
      ]
    },
    techniquePoints: [
      "Fill a bucket with uncooked rice.",
      "Perform various hand and wrist movements inside the bucket.",
      "Examples: opening and closing your hand, wrist flexion/extension, ulnar/radial deviation, and rotating your forearm.",
      "The rice provides unique resistance that strengthens often-neglected muscles."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iVum3vWlh4Q",
    substitutions: ["Wrist Roller", "Hand Gripper", "Dumbbell Wrist Curls"]
  },
  "Scapular depressions": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Scapular Control",
    attachments: ["Pull-up Bar or Dip Station"],
    muscles: {
      strength: ["Lower Trapezius", "Lats"],
      stability: ["Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "From a dead hang or a support position on dip bars, let your shoulders shrug up towards your ears (elevation).",
      "Actively pull your shoulder blades down and away from your ears (depression).",
      "The arms should remain straight; the movement comes entirely from the scapula.",
      "This teaches activation of the lats and lower traps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=BU3eHNtyNCc",
    substitutions: ["Scapular Pull-ups", "Scapular Dips"]
  },
  "Scapular elevations": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Scapular Control",
    attachments: ["Barbell, Dumbbells, or Bodyweight"],
    muscles: {
      strength: ["Upper Trapezius", "Levator Scapulae"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "This is the primary motion of a shrug.",
      "Keeping your arms straight, lift your shoulder blades straight up towards your ears.",
      "Hold the peak contraction briefly.",
      "Lower with control. The goal is to isolate the movement to the scapula without bending the arms."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ue7AM7sL6w0",
    substitutions: ["Barbell Shrug", "Dumbbell Shrug"]
  },
  "Scapular protractions": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Scapular Control",
    attachments: [],
    muscles: {
      strength: ["Serratus Anterior", "Pectoralis Minor"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "In a push-up or all-fours position, keep your arms straight.",
      "Round your upper back and push your shoulder blades apart, as if reaching towards the ceiling.",
      "This is the opposite of a scapular retraction.",
      "This motion strengthens the serratus anterior, a key muscle for shoulder health and punching power."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-EuOnJb0gPY",
    substitutions: ["Plank Push-ups"]
  },
  "Scapular retractions": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Scapular Control",
    attachments: ["Cable Machine, Band, or Bodyweight"],
    muscles: {
      strength: ["Rhomboids", "Mid Trapezius"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "This is the motion of squeezing your shoulder blades together.",
      "Can be done in a rowing position (seated row with straight arms) or in a push-up position (letting the chest sink).",
      "The arms should remain straight; the movement is isolated to the scapula.",
      "This is a fundamental movement for all pulling exercises."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=SHy6qB4UYgM",
    substitutions: ["Band Pull-Apart", "Face Pull"]
  },
  "Shoulder Circles": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder Mobility",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Takes the shoulder joint through its full range of motion in a controlled manner." }
      ]
    },
    techniquePoints: [
      "Stand with arms at your sides.",
      "Slowly make large circles with your shoulders, first forward and then backward.",
      "Can also be done with straight arms, making large circles in both directions.",
      "Focus on smooth, controlled movement to warm up the rotator cuff and shoulder joint."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8J-FG3F8hQM",
    substitutions: ["Arm Swings", "Band Dislocates"]
  },
  "Side Planks": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Core Stability",
    attachments: [],
    muscles: {
      strength: ["Obliques", "Gluteus Medius"],
      stability: ["Entire Core", "Shoulder Girdle"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your side, propped up on your forearm with your elbow directly under your shoulder.",
      "Stack your feet or place one in front of the other.",
      "Lift your hips off the floor, creating a straight line from your head to your feet.",
      "Do not let your hips sag or rotate. Hold for time."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0Rl5ZQwmS-o",
    substitutions: ["Copenhagen Hip Adduction", "Pallof Press"]
  },
  "Side-lying external rotations": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Shoulder & Scapular Health",
    attachments: ["Light Dumbbell"],
    muscles: {
      strength: ["Infraspinatus", "Teres Minor (External Rotators)"],
      stability: ["Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Low", description: "Isolates and strengthens the external rotators of the rotator cuff." }
      ]
    },
    techniquePoints: [
      "Lie on your side with a very light dumbbell in your top hand.",
      "Pin your top elbow to your side, bent at 90 degrees.",
      "Keeping your elbow fixed, rotate your forearm upward towards the ceiling.",
      "The movement should be slow and controlled, focusing on the muscles in the back of your shoulder.",
      "Avoid lifting your elbow off your body."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=PWWn3z8Ft5s",
    substitutions: ["Band External Rotation", "Cuban press"]
  },
  "Spiderman stretch": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Hip & Thoracic Mobility",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip Flexors", level: "High", description: "Provides a deep stretch for the hip flexors of the back leg." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "The rotation component improves upper back mobility." },
        { muscle: "Adductors", level: "Moderate", description: "Stretches the adductors of the front leg." }
      ]
    },
    techniquePoints: [
      "Start in a push-up position.",
      "Step your right foot to the outside of your right hand.",
      "Sink your hips down towards the floor to feel a stretch.",
      "For added mobility, rotate your torso and reach your right arm towards the ceiling, following your hand with your eyes.",
      "Return to the start and repeat on the other side."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=il1AhduOqfA",
    substitutions: ["World's Greatest Stretch", "Deep Lunge Hold"]
  },
  "Squat thrusts": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Full Body Conditioning",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip", level: "Moderate", description: "Requires rapid hip flexion." }
      ]
    },
    techniquePoints: [
      "This is essentially a burpee without the push-up and the jump.",
      "Start standing, drop your hands to the floor.",
      "Kick your feet back to a plank position.",
      "Immediately jump your feet back towards your hands.",
      "Return to a standing position. Focus on speed and continuous movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=F4511oTkNls",
    substitutions: ["Burpees", "Mountain Climbers"]
  },
  "Standing split": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Stretching (Posterior Chain)",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Gluteus Medius (of standing leg)"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Provides a deep stretch for the hamstrings of both the standing and lifted leg." }
      ]
    },
    techniquePoints: [
      "From a standing forward bend, place your hands on the floor.",
      "Shift your weight onto one foot and lift the other leg straight up behind you.",
      "Try to lift the leg as high as possible while keeping your hips square to the ground.",
      "Fold your torso closer to your standing leg to deepen the hamstring stretch.",
      "Hold for balance and stretch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2vhbecQLQ9I",
    substitutions: ["Pike stretch", "Single Leg RDL (for dynamic stretch)"]
  },
  "Straddle stretch": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Stretching (Hips & Adductors)",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Adductors", level: "High", description: "A deep stretch for the inner thigh muscles." },
        { muscle: "Hamstrings", level: "Moderate", description: "Also stretches the hamstrings." }
      ]
    },
    techniquePoints: [
      "Sit on the floor and open your legs into a wide 'V' shape.",
      "Keeping your back straight, hinge forward from your hips.",
      "Walk your hands forward as far as you can, aiming to bring your chest towards the floor.",
      "Keep your knees and toes pointing towards the ceiling.",
      "Hold the stretch, breathing deeply."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kqikd_2E9bA",
    substitutions: ["Frog Stretch", "Butterfly Stretch"]
  },
  "Support Hold Work": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Foundation & Stability",
    attachments: ["Dip Bars or Rings"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Deltoids"],
      stability: ["Scapular Stabilizers", "Core", "Shoulder Girdle"],
      mobility: []
    },
    techniquePoints: [
      "Press up to the top of a dip position on parallel bars or rings.",
      "Keep your arms locked out and your shoulders pushed down and away from your ears (scapular depression).",
      "On rings, also focus on turning your hands out to face forward (RTO - Rings Turned Out) for greater stability.",
      "Hold the position for time, maintaining a tight core and upright posture."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7eYPZR8Z07o",
    substitutions: ["Plank", "Top of Dip Hold"]
  },
  "Toe-Touch to Squat": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Full Body Mobility",
    attachments: [],
    muscles: {
      strength: [],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Excellent for improving ankle dorsiflexion." },
        { muscle: "Hip", level: "High", description: "Improves deep hip flexion." },
        { muscle: "Hamstrings", level: "Moderate", description: "Provides a dynamic stretch for the hamstrings." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Promotes thoracic extension in the bottom of the squat." }
      ]
    },
    techniquePoints: [
      "Stand with feet shoulder-width apart.",
      "Hinge at the hips and reach down to grab your toes, keeping legs as straight as possible.",
      "While holding your toes, pull yourself down into a deep squat.",
      "At the bottom, lift your chest and try to straighten your back.",
      "Extend your legs to return to the toe-touch position, then stand up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9T0qNhpnK5c",
    substitutions: ["Deep Squat Hold", "Spiderman Stretch"]
  },
  "Turkish get-ups": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Full Body Stability & Coordination",
    attachments: ["Kettlebell or Dumbbell"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Glutes", "Quadriceps"],
      stability: ["Entire Core", "Shoulder Girdle", "Hip Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires excellent stability through a large range of motion." },
        { muscle: "Hip", level: "High", description: "Requires hip mobility for the lunge and leg sweep portions." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Requires T-spine rotation and extension." }
      ]
    },
    techniquePoints: [
      "A complex, multi-step movement from lying on the floor to standing, all while keeping a weight held overhead.",
      "Break the movement down into individual steps: press, roll to elbow, post to hand, sweep leg, lunge, stand.",
      "Keep your eyes on the weight at all times.",
      "The arm holding the weight should remain locked and stable throughout."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0bWRPC49-KI",
    substitutions: ["Windmill", "Overhead Lunge"]
  },
  "Ulnar Nerve Glide": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Nerve Mobilization",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Ulnar Nerve", level: "Low", description: "Aims to improve the gliding of the ulnar nerve, often associated with 'funny bone' tingling." }
      ]
    },
    techniquePoints: [
      "Make an 'OK' sign with your thumb and index finger.",
      "Turn your hand upside down so your palm faces you.",
      "Bring the 'OK' sign up to your eye like you're wearing glasses, leading with your pinky.",
      "Gently tilt your head away to feel a mild stretch.",
      "Perform slowly and gently, avoiding any sharp pain or intense tingling."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=_RqaQErKMpE",
    substitutions: ["Median Nerve Glide", "Radial Nerve Glide"]
  },
  "Wrist Circles": {
    image: "",
    category: "Mobility, Warm-up & Prehab",
    subcategory: "Wrist Mobility",
    attachments: [],
    muscles: {
      strength: [],
      stability: [],
      mobility: [
        { muscle: "Wrist", level: "Low", description: "Warms up the wrist joint through its full circular range of motion." }
      ]
    },
    techniquePoints: [
      "Clasp your hands together with fingers interlaced.",
      "Slowly roll your wrists in a circular or figure-eight pattern.",
      "Perform the movement in both directions.",
      "Focus on a smooth, continuous motion to lubricate the joint."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=wRSk1_C6yOM",
    substitutions: ["Wrist Flexion/Extension Stretches"]
  }
};