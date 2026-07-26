import type { ExerciseInfo } from '../types';

export const calisthenicsExercises: { [key: string]: ExerciseInfo } = {
  "45° Hyperextension": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion to achieve a full stretch at the bottom." }
      ]
    },
    techniquePoints: [
      "Position yourself on a 45-degree hyperextension bench with the pad supporting your upper thighs/hips.",
      "Cross your arms over your chest or place them behind your head.",
      "Keeping your back straight, hinge at the hips to lower your torso.",
      "Raise your torso by squeezing your glutes and hamstrings until your body forms a straight line.",
      "Avoid over-arching (hyperextending) your lower back at the top."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lQ2e8JDb_BQ",
    substitutions: ["Glute Bridge", "Reverse Hyper", "Good Morning", "Cable Pull-Through"]
  },
  "90-degree RTO Leaned-Forward Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Rotator Cuff", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant mobility to accommodate both the deep dip position and the forward lean simultaneously." },
        { muscle: "Shoulder External Rotation", level: "High", description: "Necessary to maintain the Rings-Turned-Out position under load." }
      ]
    },
    techniquePoints: [
      "Establish a forward lean from the top support position on rings.",
      "Maintain a straight body line throughout the movement.",
      "Keep the rings turned out to 90 degrees (RTO).",
      "Press out of the bottom of the dip while preserving the forward lean angle.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lE4imLdyyDY",
    substitutions: ["RTO Dips", "Pseudo Planche Pushups"]
  },
  "Ab Vacuum": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Breathing)",
    muscles: {
      strength: ["Transverse Abdominis"],
      stability: ["Diaphragm"],
      mobility: []
    },
    techniquePoints: [
      "Can be performed standing, seated, quadruped (on all fours), or lying down.",
      "Exhale all the air from your lungs completely.",
      "Expand your chest and pull your navel in towards your spine as far as possible, creating a hollow.",
      "Hold this vacuum for a set duration without breathing.",
      "Release and breathe normally before the next repetition."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=loaBqxLNgRM",
    substitutions: ["Hollow Body Hold", "Plank"]
  },
  "Advanced Tuck Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rear Delts", "Core"],
      stability: ["Biceps", "Glutes", "Erector Spinae"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension flexibility to hold the horizontal position." }
      ]
    },
    techniquePoints: [
      "From a Tuck Back Lever, extend your hips to create a flat back.",
      "Form a 90-degree angle between your torso and thighs.",
      "Keep arms completely straight and scapulae depressed.",
      "Hips and shoulders should remain aligned and parallel to the ground."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-hdW6N3sEXA",
    substitutions: ["Tuck Back Lever", "Straddle Back Lever"]
  },
  "Advanced Tuck Front Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Front)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Core"],
      stability: ["Scapular Retractors", "Rear Delts", "Glutes"],
      mobility: []
    },
    techniquePoints: [
      "From a Tuck Front Lever, extend your hips to create a flat back.",
      "Form a 90-degree angle at the hips, keeping knees bent.",
      "Keep torso parallel to the ground with arms straight.",
      "Maintain strong scapular retraction and depression throughout the hold."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=wwRLZ0n07P4",
    substitutions: ["Tuck Front Lever", "Straddle Front Lever"]
  },
  "Advanced Tuck Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Serratus Anterior", "Biceps", "Core"],
      stability: ["Glutes", "Erector Spinae"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "Excellent wrist extension flexibility under load is required to support the body's weight with a forward lean." }
      ]
    },
    techniquePoints: [
      "From a Tuck Planche, extend your hips to flatten your back.",
      "Create a 90-degree angle at the hips while keeping knees bent.",
      "Shoulders and hips should form a straight, horizontal line.",
      "Keep arms locked straight with scapulae protracted and depressed."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=M65xGWsyPNY",
    substitutions: ["Tuck Planche", "Straddle Planche"]
  },
  "Archer Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Unilateral Focus)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Obliques", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder adduction and stability." }
      ]
    },
    techniquePoints: [
      "Start in a wide push-up position.",
      "Shift your weight to one side, lowering your chest towards that hand while keeping the other arm straight.",
      "The movement resembles an archer drawing a bow.",
      "Press up forcefully from the working side to return to the center.",
      "Alternate sides with each rep. This is a great progression towards the one-arm Push-Up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ZLWko5aP1FM",
    substitutions: ["Push-Up", "One-Arm Pushup Eccentrics"]
  },
  "Archer Ring Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Unilateral Focus)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Posterior Deltoids"],
      stability: ["Core", "Obliques", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Perform an asymmetrical pull: one arm bends to pull the ring towards the armpit while the other arm remains straight.",
      "Initiate with scapular retraction and maintain a rigid, straight body line.",
      "The straight arm's posterior deltoid and scapular muscles act as primary stabilizers.",
      "Avoid allowing the body to sag or rotate by engaging the core and obliques."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=XC9WR1LFq2U",
    substitutions: ["Wide Ring Rows", "Straddle One-Arm Rows"]
  },
  "Archer-arm-in Ring Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Unilateral Focus)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Posterior Deltoids"],
      stability: ["Core", "Obliques"],
      mobility: []
    },
    techniquePoints: [
      "Similar to Archer Ring Rows but the straight arm is kept closer to the body.",
      "This variation modifies the stability challenge and muscle engagement pattern.",
      "Maintain a straight body line and prevent rotation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jkRYOiQq51s",
    substitutions: ["Archer Ring Rows", "One-arm ring rows"]
  },
  "Asian squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Mobility (Lower Body)",
    muscles: {
      strength: ["Glutes", "Quadriceps", "Hamstrings"],
      stability: ["Core", "Spinal Erectors"],
      mobility: [
        { muscle: "Ankles", level: "High", description: "Requires full ankle dorsiflexion to keep heels on the ground." },
        { muscle: "Hips", level: "High", description: "Requires deep hip flexion to sit comfortably in the bottom position." },
        { muscle: "Knees", level: "High", description: "Requires full knee flexion." }
      ]
    },
    techniquePoints: [
      "A deep, resting squat position used for restoring and maintaining lower body joint health.",
      "Lower into a full squat with heels flat on the floor and an upright torso.",
      "The primary goal is to hold this position comfortably.",
      "Can hold a light weight as a counterbalance to improve depth and form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=a6Na67zUMZk",
    substitutions: ["Goblet Squat (Pause)", "Toe-Touch to Squat"]
  },
  "Assisted Floor Dip": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip",
    muscles: {
      strength: ["Triceps", "Anterior Deltoids", "Pectorals"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires shoulder extension, though less than a full dip." }
      ]
    },
    techniquePoints: [
      "Sit on the floor with knees bent and feet flat.",
      "Place hands on the floor behind you, fingers pointing towards your hips.",
      "Lift your glutes off the floor.",
      "Lower your body by bending your elbows, keeping them pointed backward.",
      "Push through your hands to return to the start. The feet on the floor provide assistance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Ncrhgk23XbU",
    substitutions: ["Bench Dip", "Knee Push Up"]
  },
  "Back Extension": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Hyperextension Bench"],
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion to get a stretch at the bottom." }
      ]
    },
    techniquePoints: [
      "Use a hyperextension bench (either 45-degree or horizontal).",
      "Position the pad just below your hips to allow for a full hinge.",
      "Keeping your spine neutral, lower your torso until you feel a stretch in your hamstrings.",
      "Raise your torso by squeezing your glutes and hamstrings until your body is in a straight line.",
      "Avoid rounding your lower back at the bottom or over-arching at the top."
    ],
    youtubeLink: "https://www.youtube.com/shorts/P489_62b8JU",
    substitutions: ["Good Morning", "Romanian Deadlift", "Glute Bridge"]
  },
  "Back Lever Pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rhomboids", "Posterior Deltoids"],
      stability: ["Core", "Biceps", "Triceps"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension and control through a difficult range of motion." }
      ]
    },
    techniquePoints: [
      "Hold a stable back lever position (tuck, straddle, or full).",
      "From the horizontal hold, pull your body upward towards the bar or rings while maintaining the lever shape.",
      "This is an extremely advanced movement that combines a static hold with a dynamic pull.",
      "Movement can increase risk of shoulder impingement if not performed with excellent form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Tg-Sl5ZK0nk",
    substitutions: ["Back Lever", "Archer Ring Rows"]
  },
  "Back Lever Pullout": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Posterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension mobility to achieve the starting position." }
      ]
    },
    techniquePoints: [
      "Initiate from a stable, straight-body back lever position.",
      "Keeping the arms perfectly straight, pull the hands forcefully toward the hips.",
      "Maintain a rigid, straight body line as your feet rise toward the vertical, inverted hang position.",
      "Progress from a neutral grip to a supinated (palms forward) grip for increased conditioning."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6yRCgRnyvws",
    substitutions: ["Full Back Lever", "German Hang Pullout"]
  },
  "Bench Dip": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip",
    attachments: ["Bench"],
    muscles: {
      strength: ["Triceps", "Anterior Deltoids", "Pectorals"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension and internal rotation, which can be stressful for the joint." }
      ]
    },
    techniquePoints: [
      "Sit on the edge of a bench and place your hands on the edge, next to your hips.",
      "Walk your feet out, lifting your glutes off the bench. Straighten legs for more difficulty, bend them for less.",
      "Keep your back close to the bench as you lower your body by bending your elbows.",
      "Descend until your elbows are at about a 90-degree angle.",
      "Press through your palms to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ihCoUhp5XrM",
    substitutions: ["Close-Grip Pushup", "Assisted Floor Dip"]
  },
  "Bent-Arm Pull-up to Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Pectorals", "Triceps"],
      stability: ["Core", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high shoulder extension mobility for the transition to back lever." }
      ]
    },
    techniquePoints: [
      "Perform a pull-up, transitioning into a muscle-up by rowing your elbows back.",
      "Once in the transition phase, lean your torso forward over the bar/rings.",
      "Slowly and with full control, extend your arms eccentrically.",
      "Continue the motion until you arrive in a stable back lever position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=b4Bylyc9nDg",
    substitutions: ["Back Lever Pullouts", "Handstand Lower to Back Lever"]
  },
  "Bent-arm straddle or pike press to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Significant hip and hamstring flexibility is required for the compressed straddle or pike positions." },
        { muscle: "Wrist", level: "Moderate", description: "Good wrist extension is needed to support the body." }
      ]
    },
    techniquePoints: [
      "Begin with hands planted and arms slightly bent (not exceeding 90 degrees at the elbow).",
      "Shift weight fully onto the hands until the feet lift off the ground.",
      "Focus on bringing the hips directly over the shoulders before initiating the main press.",
      "Press up through the arms while simultaneously opening and straightening the hips to finish in a handstand."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kR1Q-NlwnYc",
    substitutions: ["Wall Handstand Pushup", "Pike Push-Up"]
  },
  "Bent-arm straight-body press to handstand (BA SB Press) / hollowback press handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    attachments: ["Parallettes", "Rings"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Good shoulder extension is necessary to allow for the significant forward lean." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Hollowback variation requires good T-spine flexibility." }
      ]
    },
    techniquePoints: [
      "Begin in a support position on parallettes or rings.",
      "Lean forward to control the descent of the shoulders as the feet rise behind the body.",
      "Push strongly through the hands when the head reaches hand-height.",
      "Bring the hips directly over the shoulders to complete the press into a handstand.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=onBm90jw_38",
    substitutions: ["Chest Roll, Straight-Body Press to Handstand"]
  },
  "Bicycle Crunch": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Rotational)",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Core", "Transverse Abdominis"],
      mobility: [
        { muscle: "Thoracic Spine", level: "Low", description: "Requires basic rotational mobility." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your hands behind your head and knees bent.",
      "Bring one knee towards your chest while simultaneously twisting your torso to bring the opposite elbow to meet it.",
      "Extend the other leg straight out, keeping it off the floor.",
      "Alternate sides in a fluid, pedaling motion.",
      "Focus on the crunch and twist, not just moving your limbs quickly."
    ],
    youtubeLink: "https://youtu.be/2RrGnjxSsiA?t=371",
    substitutions: ["Russian Twist", "Cable Wood Chopper"]
  },
  "Birddog": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Anti-Rotation)",
    muscles: {
      strength: ["Glutes", "Deltoids"],
      stability: ["Core", "Erector Spinae", "Transverse Abdominis", "Obliques"],
      mobility: []
    },
    techniquePoints: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Engage your core to create a flat, stable back.",
      "Simultaneously extend one arm forward and the opposite leg backward.",
      "Move slowly and with control, focusing on keeping your torso and hips perfectly still.",
      "Avoid arching your lower back or rotating your hips. Imagine balancing a glass of water on your lower back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jrK_rA4ATeg",
    substitutions: ["Plank", "Dead Bug"]
  },
  "Bodyweight Crunch": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Core", "Transverse Abdominis"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Requires basic spinal flexion." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your knees bent and feet flat on the floor.",
      "Place your hands behind your head or across your chest.",
      "Curl your upper body towards your knees by flexing your spine, lifting your shoulder blades off the floor.",
      "Keep your lower back pressed into the floor.",
      "Squeeze your abs at the top and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=NGRKFMKhF8s",
    substitutions: ["Cable Crunch", "Reverse Crunch"]
  },
  "Bodyweight Hip Thrust": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Sit on the floor with your upper back against a bench.",
      "Place your feet flat on the floor, hip-width apart, with knees bent.",
      "Drive through your heels to lift your hips until your body forms a straight line from shoulders to knees.",
      "Ensure your shins are vertical at the top of the movement.",
      "Squeeze your glutes powerfully at the top and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RR0oZhhUVWo",
    substitutions: ["Glute Bridge", "Weighted Hip Thrust"]
  },
  "Bodyweight Round-Back 45° Hyperextension": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Hyperextension Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion." }
      ]
    },
    techniquePoints: [
      "Use a 45-degree hyperextension bench.",
      "Intentionally round your upper back (thoracic spine) throughout the movement.",
      "Hinge at the hips, lowering your torso.",
      "Initiate the upward movement by powerfully squeezing your glutes.",
      "The rounded back helps to inhibit the erector spinae and isolate the glutes."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0HnN8Pp4ZVs",
    substitutions: ["Glute Bridge", "Cable Pull-Through"]
  },
  "Bodyweight Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Squat",
    muscles: {
      strength: ["Quadriceps", "Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Good dorsiflexion is needed to squat deep while keeping heels on the floor." },
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion to allow the torso to stay upright at the bottom of the squat." }
      ]
    },
    techniquePoints: [
      "Stand with feet shoulder-width apart, toes pointing slightly out.",
      "Keep your chest up and back straight.",
      "Initiate by hinging at your hips and then bending your knees, as if sitting in a chair.",
      "Lower until your hips are at or below knee level while maintaining a neutral spine.",
      "Drive through your entire foot, especially the heels, to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bEv6CCg2BC8&t",
    substitutions: ["Goblet Squat", "Chair Squat"]
  },
  "Box pistol": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pistol Squat Progression",
    attachments: ["Box", "Bench"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires extreme ankle dorsiflexion." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion." }
      ]
    },
    techniquePoints: [
      "A progression for the full Pistol Squat using a box or bench to limit the range of motion.",
      "Stand on one leg in front of the box.",
      "Lower yourself with control until you are lightly seated on the box.",
      "Drive through your heel to stand back up without using momentum or the other foot.",
      "Gradually lower the height of the box to increase difficulty."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2qSwsTYEWuM&t=45s",
    substitutions: ["Assisted Pistol Squat", "Deep Step-ups"]
  },
  "Braced Lunge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lunge",
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Obliques", "Erector Spinae"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Stretches the hip flexor of the back leg." }
      ]
    },
    techniquePoints: [
      "Perform a standard lunge (forward or reverse).",
      "The key focus is maintaining an intensely braced, rigid core throughout the entire movement.",
      "The torso should remain perfectly upright and stable, with no leaning or twisting.",
      "This variation turns the lunge into a significant core stability exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=209OfN4ztW_g",
    substitutions: ["Lunge", "DB Bulgarian Split Squat"]
  },
  "Butterfly mount": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Deltoids", "Core"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires dynamic shoulder mobility for the swinging and mounting motion." }
      ]
    },
    techniquePoints: [
      "An advanced, dynamic mounting technique on gymnastic rings.",
      "Involves a kipping or swinging motion to generate momentum.",
      "Requires precise timing and body control to transition from a swing into a support position above the rings."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=10WqO6I2CBs",
    substitutions: ["Muscle-Up", "Kipping Pull-ups"]
  },
  "Captain's Chair Leg Raise": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    attachments: ["Captain's Chair"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Core", "Obliques"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Flexibility is needed for the straight-leg version." }
      ]
    },
    techniquePoints: [
      "Support your body on a captain's chair, with your back against the pad and forearms on the supports.",
      "Let your legs hang straight down.",
      "Raise your knees towards your chest without using momentum.",
      "Focus on curling your pelvis upward at the top to fully engage the lower abs.",
      "Lower your legs with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ghwdoXHeiIk",
    substitutions: ["Hanging Leg Raise", "Reverse Crunch"]
  },
  "Chair handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    attachments: ["Chair"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires sufficient wrist extension." }
      ]
    },
    techniquePoints: [
      "A unilateral pressing variation using a chair for uneven hand placement.",
      "Develops significant asymmetrical strength and motor control.",
      "Requires strong core and scapular stabilization to prevent rotation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=oOpAHhXyC7E",
    substitutions: ["One-Arm Pushup Eccentrics", "Archer Push-Up"]
  },
  "Chair Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Squat",
    attachments: ["Chair", "Box"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Ankles", level: "Moderate", description: "Good dorsiflexion is needed." },
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion." }
      ]
    },
    techniquePoints: [
      "A fundamental exercise to learn the proper squat pattern.",
      "Stand in front of a chair or box.",
      "Hinge at the hips and lower yourself with control until you are lightly seated.",

      "Keep your chest up and maintain a neutral spine.",
      "Drive through your heels to stand back up without using momentum."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LrNhnsWPtgQ",
    substitutions: ["Bodyweight Squat", "Goblet Squat"]
  },
  "Chest roll, straight-body press to handstand (CR SB Press)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    muscles: {
      strength: ["Deltoids", "Triceps", "Back Extensors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Thoracic Spine", level: "High", description: "Requires exceptional thoracic and lumbar spine extension, similar to a back bridge." },
        { muscle: "Lumbar Spine", level: "High", description: "Requires exceptional thoracic and lumbar spine extension, similar to a back bridge." }
      ]
    },
    techniquePoints: [
      "Start in a prone (face down) position with hands placed by the hips.",
      "Initiate the movement by arching the spine to roll backward.",
      "Use the hands to push the torso upwards as the body rolls over.",
      "Continue the press forcefully into a full handstand.",
      "Progress by aiming to reduce the initial arch and perform the press with a straighter body."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Ii8xSf6okGg",
    substitutions: ["Bent-arm straight-body press to handstand"]
  },
  "Chin-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Biceps", "Lats", "Rhomboids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion to start from a dead hang." }
      ]
    },
    techniquePoints: [
      "Grip the bar with an underhand (supinated), shoulder-width grip.",
      "Start from a dead hang with arms fully extended.",
      "Pull your chest to the bar, focusing on driving your elbows down.",
      "This variation places more emphasis on the biceps compared to a Pull-Up.",
      "Lower yourself under control."
    ],
    youtubeLink: "https://youtu.be/-d2Uui6MtRk",
    substitutions: ["Pull-Up", "Supinated Lat Pulldown"]
  },
  "Clapping pushup (behind back)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Plyometric)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension and internal rotation to bring the hands together behind the back." }
      ]
    },
    techniquePoints: [
      "Perform a standard push-up but press off the ground explosively.",
      "Generate enough airtime to quickly bring your hands behind your lower back to clap.",
      "Immediately return your hands to the floor to catch yourself.",
      "This is an advanced plyometric exercise requiring significant power and coordination."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eA16CvJzsOU",
    substitutions: ["Clapping pushup (triple clap)", "Push-Up"]
  },
  "Clapping pushup (triple clap)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Plyometric)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires shoulder extension and internal rotation." }
      ]
    },
    techniquePoints: [
      "An elite plyometric push-up requiring maximum explosive power.",
      "Push off the ground with enough force to perform three claps in sequence: in front of the chest, behind the back, and in front again before landing."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=HIXrRv12EFI",
    substitutions: ["Clapping pushup (behind back)", "Push-Up"]
  },
  "Close-Grip Pushup": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension." }
      ]
    },
    techniquePoints: [
      "Place hands closer than shoulder-width apart.",
      "Keep elbows tucked close to your body throughout the movement.",
      "Maintain a straight line from head to heels.",
      "This variation places more emphasis on the triceps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=hb3vyfp8cm8",
    substitutions: ["Diamond Push-Up", "Bench Dip"]
  },
  "Compression Work": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexibility)",
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: [],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "A baseline of hamstring flexibility is required to perform the exercise effectively." }
      ]
    },
    techniquePoints: [
      "Crucial supplementary work for skills like press handstands and V-sits.",
      "Sit on the ground with legs straight out in front.",
      "Place hands next to your knees, lean forward slightly, and press through your hands to lift your feet off the ground.",
      "Focus on actively pulling your knees toward your face to maximize compression."
    ],
    youtubeLink: "https://www.youtube.com/shorts/_GU6k03lO1U",
    substitutions: ["L-Sit", "V-ups"]
  },
  "Copenhagen Hip Adduction": {
    image: "",
    category: "Calisthenics",
    subcategory: "Adductors",
    attachments: ["Bench"],
    muscles: {
      strength: ["Adductors", "Obliques"],
      stability: ["Entire Core"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Requires hip adduction strength rather than flexibility." }
      ]
    },
    techniquePoints: [
      "Lie on your side and place your top leg on a bench.",
      "Support your upper body with your forearm on the floor.",
      "Lift your hips off the floor, forming a straight line with your body.",
      "Squeeze your top leg's inner thigh to maintain the position.",
      "Can be performed isometrically (hold) or dynamically (lower and raise hips)."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5slLPSpQP0g",
    substitutions: ["Cable Hip Adduction", "Machine Hip Adduction"]
  },
  "Decline Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    attachments: ["Bench", "Box"],
    muscles: {
      strength: ["Upper Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder stability and control in a decline angle." }
      ]
    },
    techniquePoints: [
      "Place your feet on an elevated surface like a bench or box.",
      "Position your hands on the floor, slightly wider than shoulder-width.",
      "Maintain a straight line from your head to your heels.",
      "Lower your chest towards the floor, keeping your elbows at a 45-degree angle.",
      "This variation emphasizes the upper chest and shoulders."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=SKPab2YC8BE",
    substitutions: ["45° Incline Barbell Press", "Pike Push-Up"]
  },
  "Deep Step-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lunge & Single Leg",
    attachments: ["Box", "Bench"],
    muscles: {
      strength: ["Glutes", "Quadriceps", "Hamstrings"],
      stability: ["Core", "Gluteus Medius"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires sufficient hip flexion to place the foot on the object." }
      ]
    },
    techniquePoints: [
      "Use an object that is at least knee-height.",
      "Place one foot on the object and transfer all your weight to that foot.",
      "Stand up on that foot without pushing off or using momentum from your other leg.",
      "Slowly descend in a controlled manner, focusing on the eccentric phase.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bVRLKMEKOmo",
    substitutions: ["Pistol Squat", "DB Bulgarian Split Squat"]
  },
  "Deficit Curtsy Lunge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lunge & Single Leg",
    attachments: ["Platform"],
    muscles: {
      strength: ["Gluteus Medius", "Gluteus Maximus", "Quadriceps"],
      stability: ["Core", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires mobility for the cross-body lunge pattern." }
      ]
    },
    techniquePoints: [
      "Stand on an elevated platform or step.",
      "Step one leg back and across your body, as if doing a curtsy.",
      "The deficit allows the back knee to travel lower, increasing the range of motion and stretch on the glutes.",
      "Keep your front knee aligned with your foot and maintain an upright torso."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VMuH_CzzNO4",
    substitutions: ["Curtsy Lunge", "Side Lunge"]
  },
  "Deficit Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    attachments: ["Plates", "Dumbbells", "Push-up Handles"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Increased range of motion requires more shoulder mobility and provides a deeper stretch." }
      ]
    },
    techniquePoints: [
      "Place your hands on elevated surfaces like plates, dumbbells, or push-up handles.",
      "Perform a push-up, lowering your chest below the level of your hands.",
      "This increased range of motion provides a deeper stretch and stimulus for the chest.",
      "Keep your body in a straight line from head to heels."
    ],
    youtubeLink: "https://youtu.be/gDoTTdAhsDg",
    substitutions: ["Dumbbell Bench Press", "Dumbbell Flye"]
  },
  "Diamond Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension and tolerance for a narrow hand position." }
      ]
    },
    techniquePoints: [
      "Place your hands on the floor close together, forming a diamond shape with your thumbs and index fingers.",
      "Keep your body in a straight line from head to heels.",
      "Lower your chest towards your hands, keeping your elbows tucked close to your body.",
      "Press up forcefully, focusing on extending the elbows to engage the triceps.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=J0DnG1_S92I",
    substitutions: ["Close-Grip Bench Press", "Dip", "Close-Grip Pushup"]
  },
  "Dip": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip",
    attachments: ["Parallel Bars", "Rings"],
    muscles: {
      strength: ["Triceps", "Pectorals (Lower)", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers", "Lats"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires sufficient shoulder extension to reach full depth without pain." },
        { muscle: "Wrist", level: "Low", description: "Needs enough extension to comfortably support bodyweight." }
      ]
    },
    techniquePoints: [
      "Grip parallel bars and support your bodyweight with locked arms.",
      "Keep torso relatively upright for triceps focus, lean forward for chest focus.",
      "Lower your body until your shoulders are slightly below your elbows (approx. 90-degree elbow bend).",
      "Press back up to the starting position, fully extending your arms.",
      "Avoid flaring your elbows out too much."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yN6Q1UI_xkE&",
    substitutions: ["Machine Dip", "Close-Grip Bench Press"]
  },
  "Dip to bent-arm straddle or pike press to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Parallettes", "Rings"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Deltoids"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires significant hip and hamstring flexibility for the compressed straddle or pike position." }
      ]
    },
    techniquePoints: [
      "A complex movement linking a dip directly into a press to handstand.",
      "Requires exceptional endurance and control to transition smoothly between the two patterns.",
      "The core and shoulder stabilizers are crucial for controlling the dynamic transition."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=70oEH_CeRow",
    substitutions: ["Bent-arm straddle or pike press to handstand", "Dip"]
  },
  "Donkey Kickback": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Isolation",
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Start on all fours, with hands under shoulders and knees under hips.",
      "Keeping your knee bent at 90 degrees, lift one leg until your thigh is parallel to the floor.",
      "Focus on squeezing your glute to drive the movement, not arching your lower back.",
      "Keep your hips square and parallel to the floor throughout."
    ],
    youtubeLink: "https://www.youtube.com/shorts/XRmrRiIdR2o",
    substitutions: ["Glute Bridge", "Cable Glute Kickback"]
  },
  "Dragon flags": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Anti-Extension)",
    attachments: ["Bench", "Pole"],
    muscles: {
      strength: ["Rectus Abdominis", "Lats"],
      stability: ["Entire Core", "Obliques", "Serratus Anterior"],
      mobility: []
    },
    techniquePoints: [
      "Lie on a bench and grip it firmly behind your head.",
      "Raise your entire body into a vertical position, supported by your upper back/shoulders.",
      "Keeping your body in a perfectly straight line, slowly lower it towards the bench.",
      "Control the descent using your core and lats, stopping just before your body touches the bench.",
      "Avoid piking at the hips or arching the lower back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xyqRkeIzc5Y",
    substitutions: ["Ab Wheel Rollout", "Long-Lever Plank"]
  },
  "Eccentric-Accentuated Inverted Row": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Posterior Deltoids", "Biceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Perform a standard inverted row, pulling your chest to the bar.",
      "Focus on the lowering (eccentric) phase of the movement.",
      "Lower your body as slowly as possible, aiming for a 3-5 second descent.",
      "This technique increases time under tension and can build strength for more difficult variations."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WHZ2r91gMiM",
    substitutions: ["Inverted Row", "Lat Pulldown (Slow Eccentric)"]
  },
  "Eccentric-Accentuated Preacher Curl": {
    image: "",
    category: "Calisthenics",
    subcategory: "Bicep Isolation",
    attachments: ["Preacher Bench", "Dumbbell"],
    muscles: {
      strength: ["Biceps"],
      stability: ["Anterior Deltoids"],
      mobility: []
    },
    techniquePoints: [
      "Use a weight that is slightly too heavy to curl with one arm.",
      "Use your non-working arm to help lift the weight to the top position (concentric phase).",
      "Remove the assisting hand and slowly lower the weight with only the working arm (eccentric phase).",
      "Aim for a 3-5 second descent to overload the bicep."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=s3myFH0kx7M",
    substitutions: ["DB Preacher Curl", "Bayesian Cable Curl"]
  },
  "Elevator": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires exceptional mobility for the transition from inverted hang to press." }
      ]
    },
    techniquePoints: [
      "Also known as the Inverted Muscle-up, this is an elite skill.",
      "Involves pulling from an inverted hang to a shoulder stand position.",
      "From the shoulder stand, press powerfully up into a handstand.",
      "Requires a precise sequence of scapular protraction and elevation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=OeuJFzk5III",
    substitutions: ["Felge backward to handstand (Felge Backward SB to HS)"]
  },
  "Felge backward to handstand (Felge Backward SB to HS)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Biceps", "Deltoids", "Triceps", "Lats"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility for the rotation and press." }
      ]
    },
    techniquePoints: [
      "Combines a backward rotation (Felge) with a press to handstand.",
      "Requires converting dynamic momentum into a controlled static hold.",
      "A strong bicep pull is needed to achieve the shoulder stand transition point.",
      "From the shoulder stand, press out into a handstand."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zOvs3JQpjas",
    substitutions: ["Inverted muscle-up"]
  },
  "Felge backward, straight-body to support": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Deltoids", "Pectorals"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires a high degree of mobility to safely pass through the bottom of the rotation." }
      ]
    },
    techniquePoints: [
      "A dynamic, full-body backward rotation on the rings.",
      "The core must remain tight to maintain a rigid, straight-body line.",
      "Involves bending the arms to allow the legs to rotate the body back above the rings.",
      "Finish by pinning the rings to the hips and pushing into a stable support position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lrWgOVndQEg",
    substitutions: ["One-arm-straight muscle-up"]
  },
  "Felge forward to cross (straight-arm, bent body)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Lats", "Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Demands high shoulder and wrist mobility for the false grip rotation and catch." }
      ]
    },
    techniquePoints: [
      "A dynamic forward roll that transitions directly into an Iron Cross.",
      "Maintain a pike position during the roll.",
      "Allow hands to slip into a false grip and pull the body forward between the rings.",
      "As hips rise, pull hands apart into the cross position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=hKVZKIM58cU",
    substitutions: ["Iron cross"]
  },
  "Felge forward to handstand (straight-arm, straight-body)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Lats", "Pectorals"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Essential for navigating the movement safely, especially through the transition near the cross position." }
      ]
    },
    techniquePoints: [
      "An elite skill combining a forward rotation with a straight-arm press to handstand.",
      "The body moves from a wide-arm front lever position, through a cross, and into a handstand.",
      "Requires absolute core control to maintain a rigid body line."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=23IKGnbplVE",
    substitutions: ["Felge forward to straddle planche (straight-arm, bent-body)"]
  },
  "Felge forward to straddle planche (straight-arm, bent-body)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "High mobility needed for the roll and transition." },
        { muscle: "Hips", level: "High", description: "High mobility needed to achieve the straddle position." }
      ]
    },
    techniquePoints: [
      "Redirects rotational momentum from a forward roll into a straddle planche.",
      "The movement passes through a near-cross position.",
      "Requires a powerful lean forward to press into the straddle planche."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=4QCKG9r_ZiE",
    substitutions: ["Felge forward to cross (straight-arm, bent body)"]
  },
  "Felge forward piked body to cross": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Lats", "Deltoids", "Core"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high shoulder and wrist mobility." }
      ]
    },
    techniquePoints: [
      "Similar to the 'Felge forward to cross' but with a piked body throughout.",
      "The piked position alters the center of mass and the mechanics of the transition.",
      "Requires immense core strength to maintain the pike during the rotation and catch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zn-exWrvtCk",
    substitutions: ["Felge forward to cross (straight-arm, bent body)"]
  },
  "Feet Elevated Glute Bridge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Bench", "Box"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back and place your heels on an elevated surface.",
      "The increased elevation increases the range of motion and places more emphasis on the hamstrings.",
      "Drive through your heels to lift your hips until your body forms a straight line.",
      "Squeeze your glutes at the top and lower with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=MDLbqStIxPM",
    substitutions: ["Glute Bridge", "Sliding Leg Curl"]
  },
  "Flags": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Lateral)",
    attachments: ["Pole"],
    muscles: {
      strength: ["Obliques", "Lats", "Deltoids"],
      stability: ["Entire Lateral Chain", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "A premier display of lateral chain strength.",
      "The bottom arm acts as a 'push' or brace arm.",
      "The top arm acts as a 'pull' arm.",
      "Requires immense lateral core strength (obliques) to hold the body horizontally.",
      "Progressions include tuck, straddle, and full flag."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ltBzeofggEM",
    substitutions: ["Side Planks (Weighted)", "Pallof Press"]
  },
  "Freestanding headstand pushup": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup",
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Entire Core", "Shoulder Stabilizers", "Wrist Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full 180-degree shoulder flexion." },
        { muscle: "Wrist", level: "High", description: "Requires excellent wrist extension under high load." }
      ]
    },
    techniquePoints: [
      "Integrates elite vertical pressing strength with profound balance.",
      "Initiate from a stable freestanding handstand.",
      "Maintain a perfectly straight body throughout the descent, resisting any arching.",
      "Lightly brush the head on the ground without resting any weight.",
      "Press forcefully back up to a stable, locked-out handstand."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uZWjFe4fufA",
    substitutions: ["Wall headstand pushups (Wall HeSPU)"]
  },
  "Frog Stand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    muscles: {
      strength: ["Anterior Deltoids", "Triceps"],
      stability: ["Core", "Wrist Flexors/Extensors"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "Good wrist extension is required to place hands flat on the floor." }
      ]
    },
    techniquePoints: [
      "A foundational balancing exercise and gateway to the planche.",
      "Begin in a squat, place hands on the floor and lean forward.",
      "Bent-arm version: rest knees on the outside of your elbows, creating a 'shelf'.",
      "Straight-arm version: lean forward with locked arms, holding knees in position via core strength (better for planche carryover)."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=KSD6mWsbWhk",
    substitutions: ["Tuck Planche", "Crow Pose (Yoga)"]
  },
  "Front Lever Pull to Inverted Hang": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Front)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Rhomboids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a good range of shoulder extension." }
      ]
    },
    techniquePoints: [
      "Begin from a stable Full Front Lever position.",
      "Pull with straight arms, driving the hands toward the hips.",
      "Continue the pull until the body becomes vertical in an inverted hang position.",
      "Maintain full body tension and straight arms throughout the entire movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kosfEXymCZk",
    substitutions: ["Full Front Lever", "Hang to Inverted Hang"]
  },
  "Front lever muscle-up to straddle planche (FL MU Str PL)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Pectorals", "Deltoids"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Required for the transition phase." },
        { muscle: "Hips", level: "High", description: "Required to achieve the straddle planche position." }
      ]
    },
    techniquePoints: [
      "A combination skill transitioning between two high-level holds.",
      "Begin in a front lever, then initiate a muscle-up.",
      "From the transition, push the hips up through the dip into a straddle planche.",
      "Requires immense integrated strength and unwavering core tension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RUFVRIcwB5k",
    substitutions: ["Felge backward, straight-body to support"]
  },
  "Full Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Rear Delts", "Core"],
      stability: ["Biceps", "Glutes", "Erector Spinae", "Quadriceps"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant shoulder extension flexibility." }
      ]
    },
    techniquePoints: [
      "Body is held perfectly horizontal and parallel to the floor, from shoulders to feet.",
      "Legs are held together, arms locked straight.",
      "Scapulae should be depressed and neutral.",
      "Actively squeeze the glutes and core to prevent the hips from sagging."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1yQJ9vA-Uhw",
    substitutions: ["Straddle Back Lever", "Half Layout/ One-Leg-Out Back Lever"]
  },
  "Full Front Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Front)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Core"],
      stability: ["Scapular Retractors", "Glutes", "Rear Delts"],
      mobility: []
    },
    techniquePoints: [
      "Body is held perfectly horizontal, parallel to the ground, with legs together and straight.",
      "Scapulae must be depressed and retracted with maximal effort.",
      "Arms must be completely straight.",
      "Imagine pulling the bar down to your hips."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1Comh-e4MaI",
    substitutions: ["Straddle Front Lever"]
  },
  "Full Front Lever Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Posterior Deltoids", "Biceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Perform a rowing motion while holding a full front lever.",
      "The range of motion is naturally reduced.",
      "Pull the bar or rings towards your hips.",
      "Avoid hollowing the chest to increase range of motion; focus on pure pulling strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kTKhcCkAVZ4",
    substitutions: ["Straddle Front Lever Rows"]
  },
  "Full Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Serratus Anterior", "Biceps", "Pectorals", "Core"],
      stability: ["Glutes", "Lower Back", "Quadriceps", "Lats"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "Elite-level wrist extension flexibility under maximal compressive load is required." }
      ]
    },
    techniquePoints: [
      "Body is held perfectly horizontal and parallel to the floor in a straight line, with legs together.",
      "Arms are locked straight, elbows pointing back.",
      "Scapulae are fully protracted and depressed.",
      "Requires an extreme forward lean to balance the center of mass."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eAEcbamtT80",
    substitutions: ["Straddle Planche"]
  },
  "German Hang": {
    image: "",
    category: "Calisthenics",
    subcategory: "Mobility (Shoulder)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: [],
      stability: ["Biceps", "Anterior Deltoids"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "A deep stretch that requires significant shoulder extension flexibility." }
      ]
    },
    techniquePoints: [
      "A mobility and conditioning exercise for the shoulders and biceps.",
      "Grasp a bar or rings, bring legs through your arms, and relax into maximal shoulder extension.",
      "Keep biceps actively contracted to protect the elbow joint.",
      "This is the bottom position of the 'Skin the Cat' movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vRM_jpfcLP4",
    substitutions: ["Skin the Cat"]
  },
  "German Hang Pullout": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Biceps", "Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires extreme shoulder extension mobility." }
      ]
    },
    techniquePoints: [
      "Begin from a deep German hang position.",
      "Maintain straight arms throughout the entire movement.",
      "Initiate the pull by forcefully contracting the lats and pecs to raise the body upward toward an inverted hang."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=p7EXzit4P2c",
    substitutions: ["Back Lever Pullout"]
  },
  "Glute Bridge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core", "Erector Spinae"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Drive through your heels to lift your hips until your body forms a straight line from shoulders to knees.",
      "Squeeze your glutes powerfully at the top.",
      "Avoid over-extending your lower back.",
      "Lower your hips with control."
    ],
    youtubeLink: "https://www.youtube.com/shorts/brn-QNicwWo",
    substitutions: ["Bodyweight Hip Thrust", "Cable Pull-Through"]
  },
  "Glute Ham Raise": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["GHD Machine"],
    muscles: {
      strength: ["Hamstrings", "Glutes", "Erector Spinae"],
      stability: ["Core", "Gastrocnemius (Calves)"],
      mobility: [
        { muscle: "Hip Flexors", level: "Low", description: "Flexibility helps maintain a straight body line." }
      ]
    },
    techniquePoints: [
      "Position yourself on a GHD machine with ankles secured.",
      "Start with your torso perpendicular to the floor, knees on the pad.",
      "Lower your upper body towards the floor by extending your knees, keeping a straight line from head to knees.",
      "Use your hamstrings and glutes to pull yourself back to the starting position.",
      "Maintain a braced core to avoid arching your lower back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1nCizWCUkdE",
    substitutions: ["Nordic Ham Curl", "Swiss Ball Leg Curl"]
  },
  "Glute Push Down": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Isolation",
    attachments: ["Assisted Pull-Up Machine"],
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Use the knee pad of an assisted pull-up/dip machine.",
      "Stand on the platform with one foot and place the other foot on the movable pad.",
      "Push down with your glute, performing a single-leg extension movement against the machine's resistance.",
      "Control the upward return of the pad."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ONQa7DSeL5Y",
    substitutions: ["Cable Glute Kickback", "Donkey Kickback"]
  },
  "Half Layout/ One-Leg-Out Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Posterior Deltoids", "Triceps (Long Head)", "Pectorals"],
      stability: ["Core", "Glutes", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high shoulder extension mobility." }
      ]
    },
    techniquePoints: [
      "Maintain a horizontal body line from shoulders to hips.",
      "Half Layout: Bend knees to 90 degrees.",
      "One-Leg-Out: Extend one leg fully while keeping the other tucked.",
      "Keep arms straight and scapulae depressed and neutral."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uTNzgCJt8LQ",
    substitutions: ["Straddle Back Lever", "Full Back Lever"]
  },
  "Half Layout/ One-Leg-Out Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Core", "Glutes", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "Extreme extension demands on the wrist joints." }
      ]
    },
    techniquePoints: [
      "An intermediate progression between Straddle and Full Planche.",
      "Maintain a straight, horizontal line from shoulders to hips.",
      "Half Layout: Knees bent to 90 degrees.",
      "One-Leg-Out: One leg straight, one tucked.",
      "Keep arms locked and scapulae protracted and depressed."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Na3Z1yqZxLw",
    substitutions: ["Straddle Planche", "Full Planche"]
  },
  "Handstand ➔ elbow lever ➔ handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires flexibility to support both handstand and elbow lever positions." }
      ]
    },
    techniquePoints: [
      "Also known as a 90-degree pushup.",
      "Combines a handstand, elbow lever, and press in a continuous motion.",
      "Balance is controlled by opening and closing the angle of the elbows.",
      "Requires significant multi-planar pressing strength and control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vjKMi4yl5XM",
    substitutions: ["Handstand Push-Up", "Pseudo Planche Pushups"]
  },
  "Handstand Lower to Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Pectorals", "Lats", "Biceps"],
      stability: ["Entire Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires both high flexion (handstand) and high extension (back lever)." }
      ]
    },
    techniquePoints: [
      "An elite eccentric transition skill on rings.",
      "Begin in a stable handstand.",
      "Initiate descent by rotating rings outward.",
      "Control the body's rotation through the horizontal plane and continue until reaching a full back lever.",
      "Absorbs intense forces on the shoulders and elbows."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=dJ0DzpxjZRs",
    substitutions: ["Bent-Arm Pull-up to Back Lever"]
  },
  "Handstand Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Trapezius", "Serratus Anterior"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full 180-degree shoulder flexion to hold a straight handstand." },
        { muscle: "Wrist", level: "High", description: "Requires excellent wrist extension to support full bodyweight." }
      ]
    },
    techniquePoints: [
      "Can be done against a wall or freestanding.",
      "Lower your body by bending your elbows until your head touches the ground.",
      "Keep your body in a straight line; do not arch your back.",
      "Press back up to the starting handstand position.",
      "Using parallettes allows for a greater range of motion."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Fw-oArT2Ik4",
    substitutions: ["Pike Push-Up", "Barbell Overhead Press"]
  },
  "Hang to Front Lever Row": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Posterior Deltoids", "Biceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "A dynamic bent-arm pull.",
      "Begin from a dead hang.",
      "Simultaneously initiate a pull-up while moving the body into a full front lever row position.",
      "The movement concludes with bent arms and your hands near your hips.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kplP75nBuT4",
    substitutions: ["Full Front Lever Rows"]
  },
  "Hanging Leg Raise": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    attachments: ["Bar"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Core", "Forearms (Grip)", "Lats"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Flexibility is needed to raise straight legs high." }
      ]
    },
    techniquePoints: [
      "Hang from a Pull-Up bar with an overhand grip.",
      "Keeping your legs straight, use your abs to raise your legs until they are parallel to the floor (L-Sit position) or higher.",
      "Avoid swinging; the movement should be controlled.",
      "Lower your legs slowly back to the starting position.",
      "A bent-knee variation (hanging knee raise) is a good starting point."
    ],
    youtubeLink: "https://youtu.be/2RrGnjxSsiA?t=247",
    substitutions: ["Captain's Chair Leg Raise", "L-Sit"]
  },
  "Hip Flexor Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Mobility (Lower Body)",
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hip Flexors", level: "High", description: "The primary purpose is to stretch the hip flexor of the back leg." }
      ]
    },
    techniquePoints: [
      "A variation of a split squat or lunge that emphasizes the stretch on the back leg's hip flexor.",
      "Get into a deep lunge position and focus on pushing the hips forward.",
      "Can be held as a static stretch or performed dynamically."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GKu8llyGZwA",
    substitutions: ["Spiderman Stretch", "Lunge"]
  },
  "Incline Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    attachments: ["Bench", "Box", "Wall"],
    muscles: {
      strength: ["Lower Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension." }
      ]
    },
    techniquePoints: [
      "A regression of the standard push-up.",
      "Place hands on an elevated surface like a bench or box. The higher the surface, the easier the exercise.",
      "Maintain a straight line from head to heels.",
      "Lower your chest to the surface, keeping elbows at a 45-degree angle.",
      "This variation emphasizes the lower part of the chest."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=yAbg3_pJKvw",
    substitutions: ["Push-Up", "Decline Bench Press"]
  },
  "Inverted cross": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Hold",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Pectorals", "Lats", "Trapezius"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires extreme shoulder mobility and stability." }
      ]
    },
    techniquePoints: [
      "An elite-level static hold on rings.",
      "The body is held in an inverted position (upside down) with the arms extended out to the sides, similar to an Iron Cross.",
      "Requires a combination of pushing and pulling strength in an inverted orientation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=zt_RSvRl6AA",
    substitutions: ["Iron cross", "Handstand"]
  },
  "Inverted muscle-up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility for the transition from pull to press." }
      ]
    },
    techniquePoints: [
      "Also known as 'Elevator'. An elite skill involving pulling from an inverted hang to a shoulder stand, then pressing to a handstand.",
      "Demands peak strength from both pulling and pushing muscle groups."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0qyRqSbfCNM",
    substitutions: ["Felge backward to handstand (Felge Backward SB to HS)"]
  },
  "Inverted pull-up variations": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rhomboids"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Typically refers to the 'Hang to Inverted Hang' or 'Front Lever Pull to Inverted Hang'.",
      "Involves pulling from a hang (or front lever) with straight arms until the body is vertical and inverted.",
      "Requires significant straight-arm pulling strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=5W8F6MzZ8Rk",
    substitutions: ["Front Lever Pull to Inverted Hang"]
  },
  "Iron cross": {
    image: "",
    category: "Calisthenics",
    subcategory: "Straight-Arm Hold",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Lats", "Anterior Deltoids"],
      stability: ["Rotator Cuff", "Biceps", "Scapular Depressors"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good chest and shoulder flexibility." }
      ]
    },
    techniquePoints: [
      "An iconic gymnastics static hold representing peak straight-arm adduction strength.",
      "Start from a support hold and slowly lower with arms straight out to the sides.",
      "Maintain fully depressed scapulae; shoulder elevation indicates failure.",
      "The final position is held with straight arms at a 90-degree angle to the body."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=tHf5BsHuFQM",
    substitutions: ["Band-Assisted Crosses", "Iron cross pulls"]
  },
  "Iron cross pulls": {
    image: "",
    category: "Calisthenics",
    subcategory: "Straight-Arm Pull",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Lats", "Anterior Deltoids"],
      stability: ["Rotator Cuff", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexibility." }
      ]
    },
    techniquePoints: [
      "A dynamic movement starting from an Iron Cross hold.",
      "With arms remaining straight, concentrically pull and/or push the hands down to the sides.",
      "Continue the movement until you return to a stable support hold position.",
      "Requires significantly more concentric strength than the isometric hold."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=CANukti0GNk",
    substitutions: ["Iron cross", "Band-Assisted Cross Pullouts"]
  },
  "Jumping Pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up Progression",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "A progression for developing pull-up strength.",
      "Set up a bar low enough that you can reach it from the ground with bent knees.",
      "Jump to assist your arms in pulling your chin over the bar.",
      "Focus on the eccentric (lowering) phase, lowering yourself as slowly as possible."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LTJ4CqDFeYw",
    substitutions: ["Eccentric-Accentuated Pull-Up", "Assisted Pull-Up"]
  },
  "Kipping pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Dynamic)",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps", "Core"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder mobility for a safe and effective kip." }
      ]
    },
    techniquePoints: [
      "Utilizes a horizontal 'arch-hollow' rocking motion to generate momentum.",
      "The momentum is transferred vertically to make the pull-up easier or faster.",
      "Common in CrossFit and for achieving higher repetitions, but different from a strict pull-up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=BeeaFCKRLwI",
    substitutions: ["Pull-Up", "Butterfly Pull-up"]
  },
  "Knee Band Glute Bridge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Resistance Band"],
    muscles: {
      strength: ["Gluteus Maximus", "Gluteus Medius"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Perform a standard glute bridge with a resistance band looped around your thighs, just above the knees.",
      "Actively press your knees outward against the band throughout the entire movement.",
      "This adds a hip abduction component, increasing the activation of the gluteus medius."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8vjlDDuiKQw",
    substitutions: ["Side-Lying Clam", "Band Lateral Walk"]
  },
  "Knee Band Hip Thrust": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Resistance Band", "Bench"],
    muscles: {
      strength: ["Gluteus Maximus", "Gluteus Medius"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Perform a hip thrust (bodyweight or weighted) with a resistance band around your thighs.",
      "Maintain outward pressure on the band as you lift and lower your hips.",
      "This technique enhances glute activation, particularly the gluteus medius."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=OOMj-poTNpk",
    substitutions: ["Knee Band Glute Bridge", "Machine Hip Abduction"]
  },
  "Knee Pike Push Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup Progression",
    muscles: {
      strength: ["Anterior Deltoids", "Triceps"],
      stability: ["Core", "Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A regression of the standard Pike Push-Up.",
      "Get into a pike position but with your knees on the floor.",
      "Keep your hips high and lower your head towards the floor.",
      "This reduces the load, allowing you to build foundational shoulder strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bA4xN8hD1l8",
    substitutions: ["Pike Push-Up", "Incline Push-Up"]
  },
  "Knee Push Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up Progression",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "A common regression for the standard push-up.",
      "Perform a push-up with your knees on the floor instead of your toes.",
      "Maintain a straight line from your head to your knees; do not pike your hips.",
      "Lower your chest to the floor and press back up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jWxvty2KROs",
    substitutions: ["Incline Push-Up", "Push-Up"]
  },
  "Knee-Banded Barbell Hip Thrust": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Barbell", "Bench", "Resistance Band"],
    muscles: {
      strength: ["Gluteus Maximus", "Gluteus Medius", "Hamstrings"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Combines a weighted barbell hip thrust with a resistance band around the thighs.",
      "The barbell provides the primary load for hip extension.",
      "The band adds resistance for hip abduction, increasing overall glute activation.",
      "Maintain outward pressure on the band throughout the lift."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=sUCXj-peeVE",
    substitutions: ["Barbell Hip Thrust", "Machine Hip Abduction"]
  },
  "L-Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Parallel Bars", "Rings"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids", "Rectus Abdominis", "Hip Flexors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder extension." },
        { muscle: "Hamstrings", level: "High", description: "Requires high flexibility to maintain the L-sit with straight legs." }
      ]
    },
    techniquePoints: [
      "Perform a standard dip while simultaneously holding an L-sit.",
      "Maintain the L-sit position with legs at 90 degrees or higher throughout each rep.",
      "Avoid letting the legs drop during the upward pushing phase.",
      "This is an advanced compound movement for both pushing and core strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1SoQt_InBuw",
    substitutions: ["Dip", "L-Sit"]
  },
  "L-Pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Rectus Abdominis", "Hip Flexors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "High flexibility is needed to hold the L-sit." }
      ]
    },
    techniquePoints: [
      "Perform a standard pull-up while holding an L-sit.",
      "This increases the demand on the core and changes the leverage of the pull.",
      "Keep legs straight and parallel to the floor throughout the entire pull-up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=l-4IpNoJZRw",
    substitutions: ["Pull-Up", "L-Sit"]
  },
  "L-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes", "Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Quadriceps", "Triceps"],
      stability: ["Anterior Deltoids", "Pectorals", "Scapular Depressors"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Significant hamstring flexibility is required to hold the legs parallel to the floor with straight knees." }
      ]
    },
    techniquePoints: [
      "Push through your hands to lift your body, extending both legs out straight and parallel to the floor.",
      "Keep shoulders fully depressed (pushed down, away from ears).",
      "Focus on active compression: pulling knees toward the chest without bending the legs.",
      "Squeeze quads to keep legs straight."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=BbAkWxDZKIM",
    substitutions: ["Tuck L-Sit", "Hanging Leg Raise"]
  },
  "L-sit clapping pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Plyometric)",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps", "Core", "Hip Flexors"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Required for the L-sit position." }
      ]
    },
    techniquePoints: [
      "An advanced plyometric pull-up.",
      "Perform an explosive pull-up while holding an L-sit.",
      "Generate enough power to release the bar, clap, and re-grip.",
      "The L-sit removes the ability to use leg momentum, making it a pure upper body and core power exercise."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1DrXrXg57o4",
    substitutions: ["Non-kipping clapping pull-ups"]
  },
  "Long-Lever Plank": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Anti-Extension)",
    muscles: {
      strength: [],
      stability: ["Rectus Abdominis", "Transverse Abdominis", "Obliques", "Serratus Anterior"],
      mobility: []
    },
    techniquePoints: [
      "An advanced plank variation.",
      "From a standard forearm plank, walk your elbows further forward.",
      "This increases the lever arm, placing a much greater demand on the anterior core to resist spinal extension.",
      "Maintain a straight body line and prevent the hips from sagging."
    ],
    youtubeLink: "https://youtu.be/1G0y8D5rFDc?t=227",
    substitutions: ["Plank", "Ab Wheel Rollout"]
  },
  "Lunge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lunge & Single Leg",
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core", "Gluteus Medius", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Stretches the hip flexor of the back leg." }
      ]
    },
    techniquePoints: [
      "Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.",
      "Ensure your front knee is directly above your ankle.",
      "Your back knee should hover just above the ground.",
      "Push off your front foot to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=heTvt_7IhA8",
    substitutions: ["Bodyweight Squat", "Reverse Lunge"]
  },
  "Lunge to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires 180 degrees of overhead shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A dynamic entry into a handstand.",
      "Hinge at the hip while lunging, maintaining a straight line from hands to the heel of the non-lunging foot.",
      "Kick with the rear leg to generate upward momentum.",
      "As hips stack over shoulders, bring legs together into a tight, straight-body position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=HkKOOOG4UDg",
    substitutions: ["Wall Handstand"]
  },
  "Maltese": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Hold",
    attachments: ["Rings", "Parallettes"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Lats"],
      stability: ["Entire Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires extreme flexibility and mobility to achieve the wide arm placement under load." }
      ]
    },
    techniquePoints: [
      "An elite, borderline push/pull static hold.",
      "Similar to a planche, but with arms held wide, nearly perpendicular to the body.",
      "Requires maximal full-body tension to prevent the body from collapsing under the immense leverage."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=D-ydYNRsqh8",
    substitutions: ["Rings Straddle Planche", "Wall Maltese Pushups"]
  },
  "Manna": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Triceps", "Posterior Deltoids", "Scapular Retractors", "Core"],
      stability: ["Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires elite shoulder extension flexibility." },
        { muscle: "Hamstrings", level: "High", description: "Requires elite hamstring flexibility." }
      ]
    },
    techniquePoints: [
      "The pinnacle of the V-sit progression.",
      "Requires an extraordinary combination of shoulder extension flexibility, pressing strength, and maximal core compression.",
      "Focus on pushing hips toward the ceiling and pulling knees toward the face."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=rX4zPm95dAY",
    substitutions: ["V-sits"]
  },
  "Modified Candlestick": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Spine", level: "Moderate", description: "Requires controlled spinal flexion and extension." }
      ]
    },
    techniquePoints: [
      "Lie on your back and perform a reverse crunch, lifting hips high.",
      "From the top, control the descent by 'rolling' your spine down one vertebra at a time.",
      "Focuses on a slow, controlled eccentric movement of the abs."
    ],
    youtubeLink: "https://www.youtube.com/shorts/187msedmtHo",
    substitutions: ["Reverse Crunch", "Ab Wheel Rollout"]
  },
  "Muscle-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires excellent mobility to transition from pulling to pushing." },
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist strength and flexibility for the false grip and transition." }
      ]
    },
    techniquePoints: [
      "A complex movement combining a pull-up and a dip.",
      "Perform an explosive pull-up, aiming to get your chest to the bar.",
      "At the peak of the pull, transition your wrists and shoulders over the bar.",
      "Finish by pressing up into the top position of a dip.",
      "A false grip is often necessary for the transition."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=KGGWP695Zx4",
    substitutions: ["Pull-Up", "Dip", "Muscle-Up Negatives"]
  },
  "Muscle-Up Negatives": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires shoulder mobility for the transition." }
      ]
    },
    techniquePoints: [
      "Start from the top support position above the bar or rings.",
      "Slowly lower yourself through the dip portion.",
      "At the bottom of the dip, focus on controlling the transition as you lower into a hanging position.",
      "Builds strength and control in the most difficult part of the movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=jZNcW_DCkd4",
    substitutions: ["Eccentric-Accentuated Pull-Up", "Dip"]
  },
  "Neutral Grip Inverted Row": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row",
    attachments: ["Rings", "Parallel Bars"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Brachialis"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Perform an inverted row with a neutral grip (palms facing each other).",
      "This grip is often more comfortable for the shoulder and elbow joints.",
      "Keep your body in a straight line and pull your chest to your hands."
    ],
    youtubeLink: "https://www.youtube.com/shorts/iUpItTT1iEY",
    substitutions: ["Inverted Row", "TRX Row"]
  },
  "Neutral Grip Pull-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up",
    attachments: ["Parallel Handles", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Brachialis", "Teres Major"],
      stability: ["Core", "Forearms (Grip)", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion from a dead hang with palms facing in." }
      ]
    },
    techniquePoints: [
      "Grip parallel handles so your palms face each other and hang from a dead stop.",
      "Set your shoulders by depressing and retracting the scapula before you pull.",
      "Drive elbows down toward your ribs while keeping the torso tall and core braced.",
      "Pause briefly at the top before lowering under control back to a full hang."
    ],
    youtubeLink: "https://www.youtube.com/shorts/E9vvwfxSZFc?feature=share",
    substitutions: ["Pull-Up", "Chin-Up", "Neutral Grip Lat Pulldown"]
  },
  "Eccentric-Accentuated Neutral-Grip Pull-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up",
    attachments: ["Parallel Handles", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Brachialis", "Rear Delts"],
      stability: ["Core", "Forearms (Grip)", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Demands controlled shoulder flexion through the entire negative." }
      ]
    },
    techniquePoints: [
      "Use a neutral grip and an elevated platform or partner to help reach the top position if needed.",
      "Pull yourself up powerfully, then emphasize a 3-5 second negative lowering phase.",
      "Keep the ribs down and core tight so the torso stays stable during the descent.",
      "Aim to finish each rep in a dead hang before repeating or stepping back up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Yi1UzoN8YpY&pp=ygUqZWNjZW50cmljIGFjY2VudHVhdGVkIG5ldXRyYWwgZ3JpcCBwdWxsIHVw",
    substitutions: ["Neutral Grip Pull-Up", "Assisted Pull-Up", "Eccentric-Accentuated Pull-Up"]
  },
  "Non-kipping clapping pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Plyometric)",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps", "Back Musculature"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "An explosive pull-up performed from a dead hang without any kip.",
      "Requires pulling with enough power to release the bar, clap, and re-grip.",
      "A true test of raw vertical pulling power."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ECukWH_cXzM",
    substitutions: ["Weighted Pull-Up", "Kipping pull-ups"]
  },
  "Nordic Ham Curl": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Partner", "GHD Machine"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core", "Erector Spinae"],
      mobility: [
        { muscle: "Hip Flexors", level: "Low", description: "Flexibility helps maintain a straight body line." }
      ]
    },
    techniquePoints: [
      "Secure your ankles under a sturdy object or have a partner hold them.",
      "Kneel on a padded surface.",
      "Keeping your body in a straight line from your knees to your head, slowly lower your torso towards the floor.",
      "Control the descent for as long as possible using only your hamstrings.",
      "Catch yourself with your hands and lightly push off to assist the return."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=683",
    substitutions: ["Glute Ham Raise", "Lying Leg Curl"]
  },
  "One-Arm Straddle Elbow Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Elbow)",
    muscles: {
      strength: ["Core", "Obliques", "Deltoids"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "A wide straddle lowers the center of mass and makes balancing easier." }
      ]
    },
    techniquePoints: [
      "A unilateral progression of the elbow lever.",
      "The core, especially the obliques, must work intensely to counteract rotational torque.",
      "The elbow of the support arm is placed on the stomach.",
      "Open your legs wide to help with balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8fPa9sSL53g",
    substitutions: ["Two-Arm Elbow Lever"]
  },
  "One-Arm, Straight-Body Elbow Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Elbow)",
    muscles: {
      strength: ["Core", "Obliques", "Deltoids"],
      stability: ["Shoulder Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "The culmination of the elbow lever progression.",
      "Bringing the legs together from the straddle position narrows the base of support and lengthens the lever.",
      "Requires maximum activation of the entire core to resist the significant torque.",
      "The body may need to roll slightly onto the planted arm to center the mass over the elbow."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=YvSaWAAF2DY",
    substitutions: ["One-Arm Straddle Elbow Lever"]
  },
  "One-arm chin-ups (OAC)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Unilateral)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Brachialis", "Forearm/Grip"],
      stability: ["Core", "Obliques", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "The apex of unilateral vertical pulling strength.",
      "Requires a weighted pull-up of +50% bodyweight as a recommended prerequisite.",
      "Focus on actively controlling the body's natural tendency to rotate.",
      "Primary training methods include one-arm eccentrics (negatives) and pulley-assisted reps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=HZ67gjyQt0E",
    substitutions: ["Weighted Chin-Up", "Archer Pull-ups"]
  },
  "One-arm dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Unilateral)",
    attachments: ["Parallel Bars"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Obliques"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility to control the descent and ascent on a single arm." }
      ]
    },
    techniquePoints: [
      "An elite unilateral vertical pressing movement.",
      "Requires immense core and oblique strength to stabilize the torso.",
      "Can be trained using a wall for assistance, progressively reducing reliance on the assisting hand."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2opTkIJJGqQ",
    substitutions: ["Weighted Dip", "Archer Push-Up"]
  },
  "One-arm handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Entire Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires complete 180-degree shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A pinnacle of hand-balancing proficiency.",
      "Mastery of a two-arm handstand is a prerequisite.",
      "Begin from a stable straddle handstand and slowly shift weight over the supporting arm.",
      "Lock the supporting shoulder in an active 'earmuff' position.",
      "Focus on maintaining square hips and resisting rotation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=hACy-j7XLb4",
    substitutions: ["Wall Handstand", "Fingertip-assisted one-arm drills"]
  },
  "One-arm pull-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Unilateral)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Brachialis", "Forearm/Grip"],
      stability: ["Core", "Obliques", "Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Similar to the one-arm chin-up but with a pronated (overhand) grip.",
      "This variation places less emphasis on the biceps and more on the lats and brachialis.",
      "Requires extreme pulling strength and core stability to control rotation."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=MyFzJsxgniM",
    substitutions: ["Weighted Pull-Up", "Archer Pull-ups"]
  },
  "One-arm pushup eccentrics": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Unilateral)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Obliques"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Good wrist extension is needed." }
      ]
    },
    techniquePoints: [
      "A key progression for the one-arm push-up.",
      "Start at the top of a one-arm push-up and lower your body under control for 3-5 seconds.",
      "The core must work intensely to prevent torso rotation.",
      "Use your non-working arm to assist in pushing back to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=nhigbxF4Vu4",
    substitutions: ["Archer Push-Up", "Hands-Elevated One-Arm Pushup"]
  },
  "One-arm ring rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Unilateral)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Posterior Deltoids", "Rhomboids"],
      stability: ["Entire Core", "Obliques"],
      mobility: []
    },
    techniquePoints: [
      "An advanced unilateral row.",
      "The entire core must work to resist rotation and maintain a rigid plank-like body.",
      "Initiate the pull by retracting the scapula and keeping the elbow close to the body.",
      "Progress from a straddle stance to feet together to increase difficulty."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=cN_Jbp8WF_Y",
    substitutions: ["Archer Ring Rows"]
  },
  "One-arm straddle pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Unilateral)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Obliques"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "A wide straddle provides a more stable base." }
      ]
    },
    techniquePoints: [
      "A full one-arm push-up performed with a wide straddle stance for stability.",
      "The wide stance reduces the anti-rotational demand on the core.",
      "Keep the working elbow at about a 45-degree angle to the body.",
      "Maintain intense core tightness to prevent hips from twisting or dropping."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=j-pBK5mJuw4",
    substitutions: ["One-arm pushup eccentrics", "Straight-body one-arm pushups"]
  },
  "One-arm-straight muscle-up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Deltoids", "Pectorals", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility to navigate the transition from a deep, single-arm pull to a dip." }
      ]
    },
    techniquePoints: [
      "An advanced exercise combining pulling and pushing asymmetrically.",
      "Can emphasize the straight arm (to train for Iron Cross) or the bending arm (for one-arm chin-up).",
      "Requires exceptional unilateral strength and control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ZK2IyGJKrgs",
    substitutions: ["Iron cross", "One-arm chin-ups (OAC)"]
  },
  "One-Leg Bent L-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes", "Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Quadriceps"],
      stability: ["Triceps", "Anterior Deltotoids", "Pectorals"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Requires flexibility in the extended leg." }
      ]
    },
    techniquePoints: [
      "A progression from the Tuck L-Sit towards the full L-Sit.",
      "Extend one leg out straight while keeping the other knee tucked to the chest.",
      "Maintain fully depressed shoulders (pushed down).",
      "Keep the extended leg straight by contracting the quadriceps."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=o-flgdLKJRg",
    substitutions: ["Tuck L-Sit", "L-Sit"]
  },
  "Parallel bar dip eccentrics": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip Progression",
    attachments: ["Parallel Bars"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Sufficient extension is needed to safely reach the deep bottom position." }
      ]
    },
    techniquePoints: [
      "A foundational exercise for building dip strength.",
      "Start at the top of the dip (jump or step up if needed).",
      "Lower the body under full control over 3-5 seconds.",
      "Focus on a uniform descent, building strength and connective tissue integrity."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=o-flgdLKJRg",
    substitutions: ["Bench Dip", "Assisted Dip Machine"]
  },
  "Parallel bar dip, straight-body press to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Parallel Bars"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Pectorals"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder extension for the forward lean." }
      ]
    },
    techniquePoints: [
      "An advanced movement pressing the entire body length from the bottom of a dip into a handstand.",
      "Start from the bottom of a dip, then lean forward to elevate the straight body.",
      "Maintain a rigid body line as you pass through a semi-elbow lever position.",
      "Press forcefully to bring hips over shoulders and finish in a handstand."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ziT2IJmniMM",
    substitutions: ["Dip to bent-arm straddle or pike press to handstand"]
  },
  "Parallel squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Squat",
    muscles: {
      strength: ["Glutes", "Hamstrings", "Quadriceps"],
      stability: ["Core", "Spinal Erectors"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Mobility needed to reach parallel without the lower back rounding." },
        { muscle: "Ankles", level: "Moderate", description: "Mobility needed to reach parallel without the lower back rounding." }
      ]
    },
    techniquePoints: [
      "A foundational leg strength exercise.",
      "Initiate the movement by sitting back, as if into a chair.",
      "Descend until the thighs are parallel to the floor.",
      "Keep the back straight and chest up.",
      "Drive through the heels to return to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bEv6CCg2BC8",
    substitutions: ["Bodyweight Squat", "Goblet Squat"]
  },
  "Pike Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup Progression",
    muscles: {
      strength: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder flexion and stability in an overhead position." },
        { muscle: "Hamstrings", level: "Moderate", description: "Flexibility needed to hold the pike position comfortably." }
      ]
    },
    techniquePoints: [
      "Start in a downward dog position, with hips high, forming an inverted 'V'.",
      "Lower your head towards the floor by bending your elbows.",
      "Keep your elbows tucked in, not flared out wide.",
      "Press back up to the starting position.",
      "This is a key progression towards a handstand push-up."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=CGOz91JfEHA",
    substitutions: ["Handstand Push-Up", "Barbell Overhead Press"]
  },
  "Pistol Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pistol Squat Progression",
    muscles: {
      strength: ["Quadriceps", "Glutes", "Hamstrings"],
      stability: ["Core", "Gluteus Medius", "Adductors", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires extreme ankle dorsiflexion to keep the heel down." },
        { muscle: "Hip", level: "High", description: "Requires deep hip flexion on one side and hip flexor strength on the other." },
        { muscle: "Hamstrings", level: "High", description: "Flexibility needed for the non-working leg held straight out." }
      ]
    },
    techniquePoints: [
      "An advanced unilateral squat requiring significant strength, balance, and mobility.",
      "Stand on one leg, extending the other leg straight out in front.",
      "Lower into a full squat on your standing leg, going as deep as possible.",
      "Drive through your heel to return to the start without the other foot touching the ground."
    ],
    youtubeLink: "https://www.youtube.com/shorts/2qSwsTYEWuM",
    substitutions: ["Box pistol", "DB Bulgarian Split Squat"]
  },
  "Plank": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Isometric)",
    muscles: {
      strength: [],
      stability: ["Rectus Abdominis", "Transverse Abdominis", "Obliques", "Erector Spinae", "Glutes"],
      mobility: []
    },
    techniquePoints: [
      "Support your body on your forearms and toes.",
      "Keep your body in a perfectly straight line from head to heels.",
      "Engage your core by bracing and squeeze your glutes to prevent hips from sagging.",
      "Don't let your head drop or your upper back round."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    substitutions: ["Long-Lever Plank", "Hollow holds"]
  },
  "Prisoner Back Extension": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Hyperextension Bench"],
    muscles: {
      strength: ["Erector Spinae", "Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion." }
      ]
    },
    techniquePoints: [
      "Perform a back extension with your hands placed behind your head.",
      "This position increases the lever arm of the torso, making the exercise more difficult than with arms crossed.",
      "Focus on a controlled movement, hinging at the hips."
    ],
    youtubeLink: "https://youtu.be/qVek72z3F1U?t=683",
    substitutions: ["Back Extension", "Good Morning"]
  },
  "Pseudo Planche Pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Core", "Glutes", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "The forward lean places significant stress and extension demands on the wrists." }
      ]
    },
    techniquePoints: [
      "A key exercise for building planche strength.",
      "From a push-up position, lean your body as far forward as possible.",
      "Maintain a straight or slightly hollow body throughout the pushup.",
      "Lower until shoulders are at least as low as elbows, then press back up, maintaining the lean."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=odcPqBOlJhI",
    substitutions: ["Tuck Planche", "Band-Assisted Planche"]
  },
  "Pull-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Rhomboids", "Rear Delts"],
      stability: ["Core", "Forearms (Grip)"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires full shoulder flexion for a complete range of motion from a dead hang." },
        { muscle: "Thoracic Spine", level: "Low", description: "Good T-spine extension helps in achieving a better contraction." }
      ]
    },
    techniquePoints: [
      "Grip the bar with an overhand (pronated) grip, slightly wider than shoulder-width.",
      "Start from a dead hang with arms fully extended.",
      "Initiate the pull by depressing and retracting your scapula.",
      "Pull your chest to the bar, imagining driving your elbows down to your pockets.",
      "Lower yourself with control back to a full dead hang."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    substitutions: ["Chin-Up", "Lat Pulldown"]
  },
  "Pulley-assisted OAC": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Unilateral)",
    attachments: ["Bar", "Pulley System"],
    muscles: {
      strength: ["Lats", "Biceps", "Brachialis"],
      stability: ["Core", "Obliques"],
      mobility: []
    },
    techniquePoints: [
      "A primary training method for the One-Arm Chin-up (OAC).",
      "A pulley system is used to remove a measurable amount of weight, making the concentric pull possible.",
      "Allows for progressive overload by gradually reducing the assistance weight.",
      "Focus on controlling rotation and pulling with strict form."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=XQPGYFB0Imc",
    substitutions: ["One-arm chin-ups (OAC) (Eccentrics)", "Archer Pull-ups"]
  },
  "Push-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Core", "Serratus Anterior"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Requires good wrist extension to support bodyweight comfortably." }
      ]
    },
    techniquePoints: [
      "Place hands slightly wider than shoulder-width on the floor.",
      "Maintain a straight line from your head to your heels, engaging your core and glutes.",
      "Lower your body until your chest nearly touches the floor.",
      "Keep your elbows at about a 45-degree angle from your torso, not flared out.",
      "Press up forcefully to return to the starting position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    substitutions: ["Barbell Bench Press", "Dip", "Incline Push-Up"]
  },
  "Reverse Crunch": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    muscles: {
      strength: ["Rectus Abdominis (Lower)", "Obliques"],
      stability: ["Core"],
      mobility: [
        { muscle: "Spine", level: "Low", description: "Requires basic spinal flexion." }
      ]
    },
    techniquePoints: [
      "Lie on your back with your knees bent at 90 degrees and feet off the floor.",
      "Engage your lower abs to curl your hips off the floor towards your chest.",
      "Focus on lifting the hips, not just swinging the legs.",
      "Lower your hips with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=gAyTBB4lm3I",
    substitutions: ["Hanging Leg Raise", "Bodyweight Crunch"]
  },
  "Reverse Lunge": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lunge & Single Leg",
    muscles: {
      strength: ["Glutes", "Quadriceps", "Hamstrings"],
      stability: ["Core", "Gluteus Medius"],
      mobility: [
        { muscle: "Hip Flexors", level: "Moderate", description: "Stretches the hip flexor of the back leg." }
      ]
    },
    techniquePoints: [
      "Step backward with one foot, lowering your hips until both knees are at 90-degree angles.",
      "Keep your front knee aligned with your ankle.",
      "Push through your front heel to return to the start.",
      "This variation can be easier on the knees and places more emphasis on the glutes."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9RNKFnd8Hbk",
    substitutions: ["Lunge", "DB Bulgarian Split Squat"]
  },
  "Reverse Nordic": {
    image: "",
    category: "Calisthenics",
    subcategory: "Quadriceps",
    muscles: {
      strength: ["Quadriceps (especially Rectus Femoris)"],
      stability: ["Core", "Glutes"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires excellent ankle plantar flexion." }
      ]
    },
    techniquePoints: [
      "Kneel on the floor with your torso upright.",
      "Slowly lean back, keeping a straight line from your knees to your head.",
      "Control the movement using only your quadriceps.",
      "Go back as far as you can with control, then return to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3kzAV20d_dE",
    substitutions: ["Sissy Squat", "Leg Extension"]
  },
  "Rings Advanced Tuck Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids", "Serratus Anterior", "Biceps"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "An advanced planche progression on an unstable surface.",
      "From a rings tuck planche, straighten the back until it is flat and parallel to the ground.",
      "Maintain a 45-degree RTO position for control.",
      "Increases the lever arm and demand on shoulder strength and stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=gsb0Eg1u0BY",
    substitutions: ["Rings Tuck Planche"]
  },
  "Rings BA SB Press / hollowback press": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Pectorals"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Good shoulder extension is required for the forward lean." }
      ]
    },
    techniquePoints: [
      "An advanced press to handstand on rings, requiring immense stabilization strength.",
      "The 'hollowback' variation involves arching the back slightly, changing the mechanics.",
      "The instability of the rings makes this exponentially harder than the parallel bar version."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qoa9aSJNzTI",
    substitutions: ["Parallel bar dip, straight-body press to handstand"]
  },
  "Rings bent-arm, straight-body press to handstand (R BA SB Press) / hollowback press": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Pectorals"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Good shoulder extension required." }
      ]
    },
    techniquePoints: [
      "A press from a horizontal, straight-body position to a handstand on rings.",
      "Requires immense control to manage the unstable rings.",
      "The 'hollowback' press involves a slight arch, which alters muscle engagement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=qoa9aSJNzTI",
    substitutions: ["Bent-arm straight-body press to handstand (BA SB Press) / hollowback press handstand"]
  },
  "Rings Dip SB to HS": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Pectorals"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Good shoulder extension needed for the forward lean." }
      ]
    },
    techniquePoints: [
      "An elite combination movement: a dip straight into a press to handstand on rings.",
      "Begin from the bottom of a dip, lean forward, and press to elevate the straight body.",
      "Pass through a shoulder stand as a key transition point.",
      "Press to a full handstand, turning rings out for stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lHkgczF1MDg",
    substitutions: ["Rings bent-arm, straight-body press to handstand (R BA SB Press) / hollowback press"]
  },
  "Rings dip eccentrics": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Girdle", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Sufficient shoulder extension is needed." }
      ]
    },
    techniquePoints: [
      "The eccentric (lowering) phase of a dip, performed on rings.",
      "The instability requires intense stabilization from the shoulder girdle.",
      "Begin from a stable support hold and lower over a controlled 3-5 second count.",
      "Keep the rings 'glued' to the sides of the body to maintain control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=juBEAtwsXu8",
    substitutions: ["Parallel bar dip eccentrics"]
  },
  "Rings dip, straight-body press to handstand (R Dip SB to HS)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Pectorals"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Good shoulder extension required." }
      ]
    },
    techniquePoints: [
      "An elite combination skill demonstrating mastery of dipping and pressing on rings.",
      "Start at the bottom of a dip, lean forward, and press the straight body up.",
      "Transition through a shoulder stand and finish in a handstand with rings turned out."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lHkgczF1MDg",
    substitutions: ["Rings bent-arm, straight-body press to handstand (R BA SB Press) / hollowback press"]
  },
  "Rings Frog Stand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Flexibility needed to place knees on the outside of the elbows." }
      ]
    },
    techniquePoints: [
      "A bent-arm balance hold on rings.",
      "Rest the inside of the knees on the outside of the elbows to create a 'shelf'.",
      "Primarily a balance-focused exercise due to the shelf support."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fAg1ZlngaMo",
    substitutions: ["Frog Stand"]
  },
  "Rings Full Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Entire Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "The pinnacle of straight-arm pushing strength on an unstable surface.",
      "Requires maintaining a perfect horizontal line from shoulders to feet with locked arms.",
      "Demands maximal full-body tension and stabilization.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6ymxdPA1axo",
    substitutions: ["Rings Half Layout/ One-Leg-Out Planche"]
  },
  "Rings Half Layout/ One-Leg-Out Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "An intermediate progression between straddle and full planche on rings.",
      "Maintain a perfectly straight and level line through the torso and hips.",
      "Variations: half layout (knees bent 90 degrees) or one-leg-out (one leg straight, one tucked)."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fQLbU-1N5bA",
    substitutions: ["Rings Straddle Planche"]
  },
  "Rings L-sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Quadriceps"],
      stability: ["Triceps", "Deltoids", "Pectorals", "Scapular Depressors"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Significant flexibility needed to hold straight legs." }
      ]
    },
    techniquePoints: [
      "Perform an L-sit on rings.",
      "The instability of the rings requires greater shoulder and core stabilization.",
      "Keep shoulders depressed and arms locked."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=lwcHmXvw-T4",
    substitutions: ["L-Sit"]
  },
  "Rings Pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Rotator Cuff", "Scapular Stabilizers", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Free rotation of rings allows for a natural hand position." }
      ]
    },
    techniquePoints: [
      "A push-up performed on rings.",
      "The instability dramatically increases the demand on stabilizer muscles.",
      "Keep the rings close to the body for control.",
      "Can be made harder by turning the rings out (RTO) at the top."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7FRwuB1l7U",
    substitutions: ["Push-Up"]
  },
  "Rings SA SB to HS": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Entire Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires strong and controlled shoulder extension-to-flexion range." }
      ]
    },
    techniquePoints: [
      "An abbreviation for Rings Straight-Arm, Straight-Body from Planche to Handstand.",
      "One of the ultimate displays of straight-arm strength, combining two elite holds with an unstable transition."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8im8MrblHcI",
    substitutions: ["Rings SA Str PL to HS"]
  },
  "Rings SA Str PL to HS": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Hips", level: "High", description: "High hip flexibility for the straddle position." }
      ]
    },
    techniquePoints: [
      "Abbreviation for Rings Straight-Arm Straddle Planche to Handstand.",
      "An elite transition skill requiring immense strength to control on an unstable apparatus."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=q8L16dZQyCM",
    substitutions: ["Straight-arm straddle planche to handstand"]
  },
  "Rings shoulder stand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Core"],
      stability: ["Shoulder Stabilizers", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a functional range of shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A foundational skill for stability and body awareness on rings.",
      "Initiate from an L-sit, using hip drive and arm bend to lift the hips.",
      "Press legs against the straps for balance initially.",
      "Aggressively use wrists to make micro-adjustments for balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=mCjtBrYFIZA",
    substitutions: ["Shoulder stand on parallel bars"]
  },
  "Rings Straight-Arm Frog Stand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Flexibility needed to hold the frog position." }
      ]
    },
    techniquePoints: [
      "A straight-arm version of the frog stand on rings.",
      "Removes the 'shelf' of the bent-arm version, transforming it from a balance skill to a strength skill.",
      "Requires significant shoulder strength and stabilization."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=9U2RH4k-EJg",
    substitutions: ["Rings Frog Stand"]
  },
  "Rings Straight-Arm, Straight-Body from Planche to Handstand (Rings SA SB to HS)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Entire Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a strong and controlled shoulder extension-to-flexion range." }
      ]
    },
    techniquePoints: [
      "One of the ultimate displays of straight-arm strength in calisthenics.",
      "Combines a full planche and a handstand with a dynamic, unstable transition on rings."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=8im8MrblHcI",
    substitutions: ["Rings straight-arm straddle planche to handstand (Rings SA Str PL to HS)"]
  },
  "Rings straight-arm straddle planche to handstand (Rings SA Str PL to HS)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Hips", level: "High", description: "High hip flexibility for the straddle position." }
      ]
    },
    techniquePoints: [
      "An elite transition skill requiring immense strength to control on an unstable apparatus.",
      "The mechanics are the same as the floor version but with the added challenge of stabilizing the rings."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=q8L16dZQyCM",
    substitutions: ["Straight-arm straddle planche to handstand"]
  },
  "Rings strap handstand (R Strap HS)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Scapular Muscles"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full 180 degrees of shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A transitional skill to a full rings handstand.",
      "Press up from a shoulder stand, using the straps against the arms for balance.",
      "Incrementally 'walk' hands up the straps to move to a full handstand.",
      "Maintain a straight body line."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=J-CC3TYTVjM",
    substitutions: ["Rings shoulder stand"]
  },
  "Rings strap handstand pushup (with elbows in)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Anterior Deltoids"],
      stability: ["Core", "Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A supported handstand push-up variation that reduces the balance component.",
      "The elbows-in position places a primary emphasis on the triceps.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Pl1lDBUyKqY",
    substitutions: ["Wall headstand pushups (Wall HeSPU)"]
  },
  "Rings support": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Triceps", "Pectorals", "Anterior Deltoids"],
      stability: ["Rotator Cuff", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Needed for the Rings-Turned-Out (RTO) position." }
      ]
    },
    techniquePoints: [
      "A foundational isometric hold on rings.",
      "Lock arms straight and actively depress the shoulder girdle (push shoulders down).",
      "Keep rings close to the body for stability.",
      "Progress by externally rotating shoulders to turn palms forward (RTO)."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=7eYPZR8Z07o",
    substitutions: ["Support Hold on Parallel Bars"]
  },
  "Rings Tuck Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids"],
      stability: ["Entire Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "The foundational planche progression on an unstable surface.",
      "Turn rings out to 45 degrees for better control.",
      "Keep arms locked straight and hips at or above shoulder height.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=K8V6MvmNWdw",
    substitutions: ["Tuck Planche"]
  },
  "Rings Two-Arm Elbow Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Elbow)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Pectorals", "Core"],
      stability: ["Rotator Cuff", "Forearm Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "Progresses the elbow lever to an unstable surface.",
      "Dramatically increases the neuromuscular demand and activation of stabilizer muscles.",
      "Requires fine motor adjustments to maintain balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=MJrFdfNmIEU",
    substitutions: ["Two-Arm Elbow Lever"]
  },
  "Rings wall maltese pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Advanced)",
    attachments: ["Rings", "Wall"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids"],
      stability: ["Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high flexibility and mobility for the wide arm position." }
      ]
    },
    techniquePoints: [
      "An assisted, dynamic Maltese movement on rings.",
      "Creates extreme stress due to the combination of wide arms and instability.",
      "Move hands out to a 30-45 degree angle from the armpit and perform a push-up with wall support."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kpOpHoywVKU",
    substitutions: ["Rings wall pseudo planche pushups (R Wall PPP)"]
  },
  "Rings wall pseudo planche pushups (R Wall PPP)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Rings", "Wall"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "An assisted PPPU on an unstable surface.",
      "The rings add a significant stability challenge not present in the floor version.",
      "Keep rings turned out and maintain a straight body."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=uJ8BSKqNL2Q",
    substitutions: ["Wall pseudo planche pushups (Wall PPP)"]
  },
  "Rings wide handstand pushup": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Pectorals", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A handstand push-up variation on rings that shifts emphasis to the chest and deltoids.",
      "Use a grip wider than shoulder-width.",
      "Allow elbows to flare out to the sides during the movement.",
      "Pause at the top in a proper RTO handstand to demonstrate control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=HKmHRM7PaLo",
    substitutions: ["Handstand Push-Up"]
  },
  "Rings-Turned-Out L-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Biceps", "Pectorals"],
      stability: ["Triceps", "Anterior Deltoids", "Scapular Retractors"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Significant hamstring flexibility is required." }
      ]
    },
    techniquePoints: [
      "Perform a standard L-Sit on rings.",
      "Actively rotate your palms to face forward (RTO position).",
      "This significantly increases the difficulty and conditions the biceps tendon and elbow joint.",
      "Maintain full scapular depression."
    ],
    youtubeLink: "https://youtube.com/shorts/W0reXNxjqDE?si=NiCa1m8unf2SBRAk",
    substitutions: ["L-Sit"]
  },
  "Roman Chair Crunch": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    attachments: ["GHD Machine", "Roman Chair"],
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Core"],
      mobility: [
        { muscle: "Spine", level: "Moderate", description: "Allows for a greater range of spinal flexion and extension." }
      ]
    },
    techniquePoints: [
      "Also known as a GHD Sit-up.",
      "Hook your feet into the machine and let your torso hang down.",
      "Perform a sit-up, flexing your spine to bring your torso up.",
      "Offers a larger range of motion than a floor crunch."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=ghwdoXHeiIk",
    substitutions: ["Decline Weighted Crunch", "V Sit-Up"]
  },
  "Rope Climb Front Lever Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Advanced)",
    attachments: ["Rope"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Biceps", "Forearm/Grip"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Front lever rows performed on a rope instead of a bar or rings.",
      "The inward hand position and nature of the rope add a significant challenge to grip strength and stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=cVW8okXzjPw",
    substitutions: ["Full Front Lever Rows"]
  },
  "Round-Back 45° Hyperextension": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Hyperextension Bench"],
    muscles: {
      strength: ["Glutes", "Hamstrings"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "Requires good hip flexion." }
      ]
    },
    techniquePoints: [
      "A hyperextension variation designed to isolate the glutes.",
      "Intentionally round the upper back to inhibit the spinal erectors.",
      "Focus on driving the movement purely with a powerful glute contraction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0HnN8Pp4ZVs",
    substitutions: ["Glute Bridge", "Cable Pull-Through"]
  },
  "RTO 40-degree-lean Pseudo Planche Pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Rings"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps", "Biceps"],
      stability: ["Rotator Cuff", "Scapular Muscles", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "High mobility and external rotation required." },
        { muscle: "Wrist", level: "High", description: "High wrist mobility required." }
      ]
    },
    techniquePoints: [
      "An advanced PPPU combining a 40-degree forward lean with a Rings-Turned-Out position.",
      "Places immense stress on the shoulders and requires elite-level strength and stability.",
      "Pause at the top and bottom to build strength at the ends of the range of motion."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=C-SML6xnVkI",
    substitutions: ["RTO Pushups (Rings-Turned-Out Pushups)"]
  },
  "RTO 45 degrees past parallel Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps", "Biceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required to maintain the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced dip variation focusing on external rotation.",
      "Maintain the rings turned out to 45 degrees throughout the entire dip.",
      "Actively fight to keep the rings from turning in, especially at the bottom.",
      "Conditions the biceps tendons and inner elbow for higher-level skills."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["Rings Dip"]
  },
  "RTO 75 degrees past parallel Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps", "Biceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required to maintain the RTO position." }
      ]
    },
    techniquePoints: [
      "A more advanced version of the RTO dip with a greater degree of external rotation.",
      "Maintain a 75-degree turn-out throughout the movement.",
      "Places even greater stress and conditioning demands on the elbow and shoulder joints."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 45 degrees past parallel Dips"]
  },
  "RTO 90 + 30 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced dip variation combining a 90-degree RTO position with a forward lean.",
      "The numbers likely refer to degrees of turn-out and lean.",
      "Transforms the dip into a hybrid vertical and horizontal press."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["90-degree RTO Leaned-Forward Dips"]
  },
  "RTO 90 + 50 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "A progression of the RTO Leaned-Forward Dip with a greater degree of forward lean.",
      "Increases the horizontal pressing component and stress on the chest and shoulders."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 90 + 30 Dips"]
  },
  "RTO 90 + 65 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "A further progression of the RTO Leaned-Forward Dip with an even greater forward lean.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 90 + 50 Dips"]
  },
  "RTO 90 + 75 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced progression of the RTO Leaned-Forward Dip.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 90 + 65 Dips"]
  },
  "RTO 90 + 82 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced progression of the RTO Leaned-Forward Dip.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 90 + 75 Dips"]
  },
  "RTO 90 + 86 Dips": {
    image: "",
    category: "Calisthenics",
    subcategory: "Dip (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "Required for the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced progression of the RTO Leaned-Forward Dip.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=fESFVozfgOM",
    substitutions: ["RTO 90 + 82 Dips"]
  },
  "RTO Archer Pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps", "Biceps"],
      stability: ["Core", "Obliques", "Rotator Cuff"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high mobility and external rotation." }
      ]
    },
    techniquePoints: [
      "Combines the unilateral focus of an Archer Push-up with the instability and external rotation of RTO on rings.",
      "An extremely challenging variation for shoulder stability and strength."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=_CakWOnh3-Y",
    substitutions: ["RTO Pushups (Rings-Turned-Out Pushups)", "Archer Push-Up"]
  },
  "RTO Maltese PU": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids"],
      stability: ["Shoulder Girdle", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "High mobility and flexibility required for the wide-arm Maltese position." }
      ]
    },
    techniquePoints: [
      "A dynamic push-up in a Maltese position with rings turned out.",
      "Represents an elite level of pushing strength due to the extreme leverage and instability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vi4bW1rpnWc",
    substitutions: ["RTO 40-degree-lean Pseudo Planche Pushups"]
  },
  "RTO Pushups (Rings-Turned-Out Pushups)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Advanced)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps", "Biceps"],
      stability: ["Rotator Cuff", "Scapular Muscles"],
      mobility: [
        { muscle: "Shoulder External Rotation", level: "High", description: "High mobility required to maintain the RTO position." }
      ]
    },
    techniquePoints: [
      "An advanced push-up on rings where the palms are kept facing forward throughout the movement.",
      "Places the biceps and pecs in a lengthened state, increasing difficulty and conditioning stimulus.",
      "Places extreme demand on the rotator cuff to maintain the externally rotated position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=CYYedOexd0w",
    substitutions: ["Rings Pushups"]
  },
  "Russian twist": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Rotational)",
    muscles: {
      strength: ["Obliques", "Rectus Abdominis"],
      stability: ["Core"],
      mobility: [
        { muscle: "Thoracic Spine", level: "Moderate", description: "Requires good rotational mobility." }
      ]
    },
    techniquePoints: [
      "Sit on the floor with your knees bent and feet elevated.",
      "Lean back to engage your core, maintaining a straight back.",
      "Twist your torso from side to side, touching your hands to the floor on each side.",
      "Can be weighted for increased difficulty."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=1ITqUh87anc",
    substitutions: ["Bicycle Crunch", "Cable Wood Chopper"]
  },
  "Shoulder stand on parallel bars": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Progression",
    attachments: ["Parallel Bars"],
    muscles: {
      strength: ["Triceps", "Deltoids", "Core"],
      stability: ["Shoulder Stabilizers", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a functional range of shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A stable precursor to rings work for inverted strength.",
      "Keep elbows flared out and wide.",
      "Maintain a perfectly straight body from shoulders to feet.",
      "Actively use hands to grip the bars and control balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Lh5Cb22qXvc",
    substitutions: ["Rings shoulder stand"]
  },
  "Side-Lying Clam": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Isolation",
    muscles: {
      strength: ["Gluteus Medius"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "A fundamental exercise for gluteus medius activation and strength.",
      "Lie on your side with your knees bent and stacked.",
      "Keeping your feet together, lift your top knee towards the ceiling.",
      "Avoid rocking your hips back; the movement should come purely from hip rotation.",
      "Can be made harder with a resistance band around the thighs."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6N_HRWRRSYQ",
    substitutions: ["Side-Lying Hip Abduction", "Band Lateral Walk"]
  },
  "Side-Lying Hip Abduction": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Isolation",
    muscles: {
      strength: ["Gluteus Medius"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your side with your legs straight and stacked.",
      "Lift your top leg towards the ceiling without rocking your torso.",
      "Keep your core engaged and your hips stable.",
      "Lower the leg with control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vy_P7D8cfAM",
    substitutions: ["Side-Lying Clam", "Cable Hip Abduction"]
  },
  "Side-to-Side Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Squat",
    muscles: {
      strength: ["Quadriceps", "Glutes", "Adductors"],
      stability: ["Core", "Gluteus Medius"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires good hip and adductor flexibility." },
        { muscle: "Ankle", level: "High", description: "Requires good ankle dorsiflexion." }
      ]
    },
    techniquePoints: [
      "Also known as a Cossack Squat.",
      "Stand with a very wide stance.",
      "Shift your weight to one side, squatting down as low as possible on that leg while keeping the other leg straight.",
      "Keep the heel of the squatting leg on the floor.",
      "Push back to the center and repeat on the other side."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=3w_FMHLPeSY",
    substitutions: ["Pistol Squat", "Lunge"]
  },
  "Single-Leg Hip Thrust": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Bridge",
    attachments: ["Bench"],
    muscles: {
      strength: ["Gluteus Maximus", "Hamstrings"],
      stability: ["Core", "Gluteus Medius"],
      mobility: []
    },
    techniquePoints: [
      "An advanced hip thrust variation for unilateral glute strength.",
      "Perform a hip thrust with one leg lifted off the floor.",
      "Focus on driving through the heel of the working leg and keeping the hips level.",
      "Requires significant glute strength and stability."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=z9qjK_v105U",
    substitutions: ["Single-Leg Glute Bridge", "DB Bulgarian Split Squat"]
  },
  "Sissy Squat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Quadriceps",
    muscles: {
      strength: ["Quadriceps (especially Rectus Femoris)"],
      stability: ["Core", "Ankle Stabilizers"],
      mobility: [
        { muscle: "Ankle", level: "High", description: "Requires excellent plantar flexion." },
        { muscle: "Knee", level: "High", description: "Places significant stress on the knee joint and patellar tendon." }
      ]
    },
    techniquePoints: [
      "An isolation exercise for the quads.",
      "Rise onto the balls of your feet and lean your torso back while bending your knees forward.",
      "Keep a straight line from knees to head.",
      "Lower until shins are close to parallel with the floor, then use your quads to return to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6M-A6O_b-r8",
    substitutions: ["Leg Extension", "Reverse Nordic"]
  },
  "Skin the Cat": {
    image: "",
    category: "Calisthenics",
    subcategory: "Mobility (Shoulder)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rectus Abdominis", "Hip Flexors"],
      stability: ["Biceps", "Teres Major", "Pectorals"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "A dynamic movement that requires and builds significant shoulder extension flexibility." }
      ]
    },
    techniquePoints: [
      "A fundamental mobility drill for the shoulders.",
      "From a hang, pull knees to chest and rotate hips over your head.",
      "Lower feet toward the ground behind you into a German Hang position.",
      "Reverse the motion by pulling knees to chest and returning to the start."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=44vYDHorwkM",
    substitutions: ["German Hang"]
  },
  "Slap abs pull-up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up (Plyometric)",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps", "Core"],
      stability: ["Scapular Stabilizers"],
      mobility: []
    },
    techniquePoints: [
      "An explosive pull-up where you pull high enough to slap your abs before re-gripping the bar.",
      "Requires immense vertical pulling power and body control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=Blb8oO0mOXw",
    substitutions: ["Non-kipping clapping pull-ups"]
  },
  "Sliding Leg Curl": {
    image: "",
    category: "Calisthenics",
    subcategory: "Posterior Chain",
    attachments: ["Sliders", "Towel"],
    muscles: {
      strength: ["Hamstrings", "Glutes"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Lie on your back with your heels on sliders or a towel on a smooth floor.",
      "Lift your hips into a glute bridge position.",
      "Slowly extend your legs by sliding your heels away from you.",
      "Use your hamstrings to pull your heels back towards your glutes.",
    ],
    youtubeLink: "https://youtu.be/0a_fVS2s4Ho?t=247",
    substitutions: ["Swiss Ball Leg Curl", "Nordic Ham Curl"]
  },
  "Standing Glute Squeeze": {
    image: "",
    category: "Calisthenics",
    subcategory: "Glute Isolation",
    muscles: {
      strength: ["Gluteus Maximus"],
      stability: [],
      mobility: []
    },
    techniquePoints: [
      "An isometric activation exercise to improve mind-muscle connection.",
      "Stand with feet shoulder-width apart.",
      "Squeeze your glutes as hard as possible, focusing on posterior pelvic tilt (tucking your tailbone under).",
      "Can also incorporate slight external rotation of the hips for maximal contraction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=aKynEjSVh9c",
    substitutions: ["Glute Bridge (Isometric Hold)"]
  },
  "Straddle Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rear Delts", "Core"],
      stability: ["Biceps", "Glutes", "Hip Abductors"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Good hip flexibility for the straddle position is required." },
        { muscle: "Shoulder", level: "High", description: "Requires shoulder extension flexibility." }
      ]
    },
    techniquePoints: [
      "Assume the Back Lever position with your legs spread wide in a straddle.",
      "The straddle shortens the lever, making it easier than the full version.",
      "Body should form a straight line from shoulders to hips, parallel to the ground.",
      "Keep arms straight and scapulae depressed and neutral."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kYoJnMY4XM0",
    substitutions: ["Advanced Tuck Back Lever", "Full Back Lever"]
  },
  "Straddle Front Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Front)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Core"],
      stability: ["Scapular Retractors", "Glutes", "Hip Abductors"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires good hip flexibility to achieve a wide straddle." }
      ]
    },
    techniquePoints: [
      "Hold the body horizontal with legs extended and spread wide in a straddle.",
      "The straddle shortens the lever, making it easier than the full version.",
      "Maintain a straight line from shoulders to hips.",
      "Scapulae must be held in a depressed and retracted position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bgRVpNRMjG4",
    substitutions: ["Advanced Tuck Front Lever", "Full Front Lever"]
  },
  "Straddle Front Lever Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Posterior Deltoids", "Biceps"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires good hip flexibility." }
      ]
    },
    techniquePoints: [
      "Perform a row while holding a straddle front lever.",
      "Pull the bar or rings towards your hips.",
      "Maintain the horizontal alignment of your torso."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=bgRVpNRMjG4",
    substitutions: ["Advanced Tuck Front Lever Rows", "Full Front Lever Rows"]
  },
  "Straddle L-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Adductors"],
      stability: ["Triceps", "Serratus Anterior", "Anterior Deltoids"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Excellent hip and hamstring flexibility for the straddle position." }
      ]
    },
    techniquePoints: [
      "Sit in a straddle on the floor and place hands between your legs.",
      "Push down firmly to lift your body.",
      "Contract abs and hip flexors to hold legs off the ground.",
      "Scapulae should be depressed and slightly protracted."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=0dnOQV77mhQ",
    substitutions: ["L-Sit"]
  },
  "Straddle One-Arm Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Unilateral)",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Biceps", "Posterior Deltoids", "Rhomboids"],
      stability: ["Entire Core", "Obliques"],
      mobility: [
        { muscle: "Hips", level: "Moderate", description: "A wide straddle provides a more stable base." }
      ]
    },
    techniquePoints: [
      "The foundational progression for one-arm ring rows.",
      "Adopt a straddle leg position to reduce the rotational difficulty.",
      "Initiate the pull by retracting the scapula and keeping the elbow close to the body."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=2RgDsiQuHSA",
    substitutions: ["Archer Ring Rows"]
  },
  "Straddle Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Serratus Anterior", "Biceps", "Pectorals", "Core"],
      stability: ["Glutes", "Lower Back", "Hip Abductors"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires good hip flexibility for a wide straddle." },
        { muscle: "Wrist", level: "High", description: "Elite-level wrist flexibility under load." }
      ]
    },
    techniquePoints: [
      "Hold the body horizontal to the floor with legs extended and spread wide.",
      "The straddle shortens the lever, making it easier than a full planche.",
      "Body from shoulders to hips should be parallel to the ground.",
      "Arms must remain locked straight with scapulae protracted and depressed."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=WN0nk0p_fEc",
    substitutions: ["Advanced Tuck Planche", "Full Planche"]
  },
  "Straight-arm back kip to support": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Deltoids", "Pectorals", "Triceps"],
      stability: ["Core", "Shoulder Girdle"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good mobility to execute the rotation comfortably." }
      ]
    },
    techniquePoints: [
      "The reverse motion of the forward kip.",
      "Uses a powerful hip extension from an inverted pike to generate backward rotation.",
      "Culminates in a stable support position with locked arms.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=rw6joxoI29A",
    substitutions: ["Straight-arm kip to L-sit (SA Kip to L-Sit)"]
  },
  "Straight-arm kip to L-sit (SA Kip to L-Sit)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Core", "Hip Flexors"],
      stability: ["Shoulder Girdle"],
      mobility: [
        { muscle: "Hamstrings", level: "Moderate", description: "Needed to hold the final L-sit position." }
      ]
    },
    techniquePoints: [
      "A dynamic kipping motion to lift the body into an L-sit with locked arms.",
      "Generate momentum from the hips with a quick extension.",
      "Forcefully pull the rings backward to your hips.",
      "Finish in a stable L-sit position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=pwRGmhTc9dw",
    substitutions: ["Back Kip to Support"]
  },
  "Straight-arm kip to V-sit / Kip to cross or L-sit cross": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Rings"],
    muscles: {
      strength: ["Lats", "Core", "Pectorals", "Deltoids"],
      stability: ["Shoulder Girdle"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "High flexibility required for the V-sit." },
        { muscle: "Shoulder", level: "High", description: "High mobility required for the cross." }
      ]
    },
    techniquePoints: [
      "An elite skill channeling momentum from a kip into a V-sit or Iron Cross.",
      "Kip to V-sit: Momentum carries legs past L-sit into a V-sit.",
      "Kip to Cross: Requires immense strength to absorb momentum and engage the cross muscles."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=gOLleJM1nxo",
    substitutions: ["Straight-arm kip to L-sit (SA Kip to L-Sit)"]
  },
  "Straight-arm L-sit to straddle press to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    muscles: {
      strength: ["Deltoids", "Core", "Hip Flexors"],
      stability: ["Shoulder Stabilizers"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Excellent flexibility needed for L-sit and straddle positions." },
        { muscle: "Hamstrings", level: "High", description: "Excellent flexibility needed for L-sit and straddle positions." }
      ]
    },
    techniquePoints: [
      "A dynamic press transitioning from a low L-sit through a wide range of motion into a handstand.",
      "Requires significant straight-arm strength and active compression."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=gDA7bEUocv0",
    substitutions: ["Straight-arm straddle planche to handstand"]
  },
  "Straight-arm pike press to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    muscles: {
      strength: ["Deltoids", "Trapezius", "Core"],
      stability: ["Scapular Muscles"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Excellent flexibility and active compression strength are required." }
      ]
    },
    techniquePoints: [
      "A straight-arm press to handstand performed with legs together in a pike.",
      "Requires a greater forward lean and superior compression strength compared to the straddle version."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=vFOWNjFdkaY",
    substitutions: ["Straight-arm press handstands"]
  },
  "Straight-arm press handstands": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Press",
    muscles: {
      strength: ["Deltoids", "Trapezius"],
      stability: ["Core", "Scapular Muscles"],
      mobility: [
        { muscle: "Hips", level: "High", description: "Requires excellent hip and hamstring flexibility for straddle and pike variations." }
      ]
    },
    techniquePoints: [
      "A category of elite skills involving lifting into a handstand without any elbow bend.",
      "Relies on shoulder strength, forward lean, and body compression."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=RWq8Fw8cKlw",
    substitutions: ["Bent-arm straddle or pike press to handstand"]
  },
  "Straight-arm straddle planche to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Shoulder Stabilizers", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a controlled shoulder extension-to-flexion range." },
        { muscle: "Hips", level: "High", description: "High hip flexibility for the straddle position." }
      ]
    },
    techniquePoints: [
      "An elite transition between two high-level static holds.",
      "Begin from a stable straddle planche.",
      "Lean slightly forward and press through the hands to lift the hips.",
      "Keep arms perfectly straight and avoid arching the back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6AD5RL2acu0",
    substitutions: ["Eccentrics (Handstand to Planche)"]
  },
  "Straight-arm, straight-body from planche to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Deltoids", "Core"],
      stability: ["Maximum engagement from all shoulder and core stabilizers."],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires a strong and controlled shoulder extension-to-flexion range." }
      ]
    },
    techniquePoints: [
      "The pinnacle of floor-based straight-arm pressing strength.",
      "Connects a full planche to a handstand in one fluid motion.",
      "Requires significantly higher force output than the straddle version."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-R-1EhSPK6s",
    substitutions: ["Straight-arm straddle planche to handstand"]
  },
  "Straight-body one-arm pushups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Push-Up (Unilateral)",
    muscles: {
      strength: ["Pectorals", "Anterior Deltoids", "Triceps"],
      stability: ["Entire Core", "Obliques"],
      mobility: [
        { muscle: "Wrist", level: "Moderate", description: "Good wrist extension is needed." }
      ]
    },
    techniquePoints: [
      "The most advanced version of the one-arm push-up, performed with feet together.",
      "The narrow base of support places maximum demand on the core's anti-rotational strength.",
      "Lean the body slightly towards the working arm to maintain balance."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=xvOoZ3SbKCw",
    substitutions: ["One-arm straddle pushups"]
  },
  "Straight-body rotation to handstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    muscles: {
      strength: ["Deltoids", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires mobility for rotation while inverted." }
      ]
    },
    techniquePoints: [
      "An advanced handstand skill involving rotation of the body while maintaining a straight line.",
      "Requires exceptional balance and shoulder control."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=j11ENLCIqq0",
    substitutions: ["Handstand"]
  },
  "Strict Bar Muscle-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Transition",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Biceps", "Triceps", "Pectorals"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires significant strength and mobility for a controlled transition." }
      ]
    },
    techniquePoints: [
      "Performed without any kipping or momentum from the lower body.",
      "Requires a powerful pull-up and a strong transition.",
      "A false grip is typically required to get the wrists over the bar.",
      "Pull high, transition smoothly, and press out of the dip."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kYoJnMY4XM0",
    substitutions: ["Muscle-Up", "Kipping Muscle-Up"]
  },
  "Tuck Back Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Back)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rear Delts", "Triceps (Long Head)"],
      stability: ["Biceps", "Core", "Glutes"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires shoulder extension flexibility." }
      ]
    },
    techniquePoints: [
      "The foundational progression for the back lever.",
      "Lower into the position from an inverted hang.",
      "Body should be parallel to the floor with a horizontal torso.",
      "Keep knees tucked tightly against the chest and arms straight.",
      "Scapulae should be depressed and neutral."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=LfyGMZh-Bz4",
    substitutions: ["Skin the Cat", "Advanced Tuck Back Lever"]
  },
  "Tuck Front Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Front)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rectus Abdominis"],
      stability: ["Scapular Retractors", "Rear Delts"],
      mobility: []
    },
    techniquePoints: [
      "The foundational progression for the front lever.",
      "Hang from a bar or rings, pull knees to chest, and lean back until torso is horizontal.",
      "Scapulae should be retracted and depressed; avoid rounding the upper back.",
      "Imagine forcing the bar down to your hips."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EkdHh8DYlQ0",
    substitutions: ["Advanced Tuck Front Lever"]
  },
  "Tuck Front Lever Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row (Advanced)",
    attachments: ["Bar", "Rings"],
    muscles: {
      strength: ["Lats", "Rhomboids", "Posterior Deltoids", "Biceps"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "Perform a row while holding a tuck front lever.",
      "Maintain the tuck front lever position, with hips aligned with shoulders.",
      "Initiate the pull by driving the elbows down until the bar reaches your shins.",
      "Avoid dropping the hips below shoulder level."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=kplP75nBuT4",
    substitutions: ["Wide Ring Rows", "Advanced Tuck Front Lever Rows"]
  },
  "Tuck L-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes", "Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors", "Triceps"],
      stability: ["Anterior Deltoids", "Pectorals", "Scapular Depressors"],
      mobility: [
        { muscle: "Hips", level: "Low", description: "Basic hip and hamstring flexibility." }
      ]
    },
    techniquePoints: [
      "The foundational progression for the L-Sit.",
      "Place hands on the floor or parallettes, lift your body, and tuck your knees against your chest.",
      "Keep shoulders pushed down, away from the ears (scapular depression).",
      "Avoid rounding your chest excessively."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=v6G77HjByZ4",
    substitutions: ["One-Leg Bent L-Sit", "Captain's Chair Leg Raise"]
  },
  "Tuck Planche": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Floor", "Parallettes"],
    muscles: {
      strength: ["Anterior Deltoids", "Serratus Anterior", "Biceps"],
      stability: ["Core", "Wrist Flexors"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "Excellent wrist extension flexibility under load is required." }
      ]
    },
    techniquePoints: [
      "The foundational progression for the planche.",
      "Place hands on floor with arms locked, lean forward.",
      "Raise hips to shoulder height, keeping knees tucked tightly to chest.",
      "Scapulae should be protracted and depressed, creating a slight rounding in the upper back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=biE7KtZoGmA",
    substitutions: ["Frog Stand", "Advanced Tuck Planche"]
  },
  "Two-Arm Elbow Lever": {
    image: "",
    category: "Calisthenics",
    subcategory: "Lever (Elbow)",
    muscles: {
      strength: ["Deltoids", "Pectorals", "Core"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Abdomen", level: "Low", description: "Requires tolerance to sustained pressure from the elbows." }
      ]
    },
    techniquePoints: [
      "A foundational balancing exercise.",
      "Place elbows on your stomach, between your navel and iliac crests.",
      "Straighten your body and lean forward to balance.",
      "Focus on maintaining a rigid, horizontal body line."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=UcDjtLoM91g",
    substitutions: ["Plank"]
  },
  "Two-Arms Two-Legs Dead Bug": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Anti-Extension)",
    muscles: {
      strength: [],
      stability: ["Rectus Abdominis", "Transverse Abdominis", "Obliques"],
      mobility: []
    },
    techniquePoints: [
      "An advanced Dead Bug variation.",
      "Lie on your back with arms and legs in the air (tabletop position).",
      "Lower both legs simultaneously towards the floor while keeping arms static.",
      "Keep your lower back pressed firmly into the floor; do not let it arch.",
      "This dramatically increases the demand on the core to resist spinal extension."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=VAQuNfFRKds",
    substitutions: ["Dead Bug (Standard)", "Hollow Body Hold"]
  },
  "V Sit-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires good hamstring flexibility to touch toes with straight legs." }
      ]
    },
    techniquePoints: [
      "Lie flat on your back with arms extended overhead.",
      "Simultaneously lift your legs (straight) and your torso off the floor.",
      "Reach your hands towards your toes, forming a 'V' shape with your body.",
      "Lower yourself back to the starting position with control."
    ],
    youtubeLink: "https://youtu.be/h-kVpuNoGaA",
    substitutions: ["Tuck L-Sit", "Bicycle Crunch"]
  },
  "V-sits": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Compression)",
    attachments: ["Floor", "Parallettes", "Rings"],
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Shoulder Stabilizers", "Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires a high level of hamstring flexibility." }
      ]
    },
    techniquePoints: [
      "A direct progression from the L-Sit.",
      "The goal is to progressively raise the legs higher toward the torso.",
      "Dramatically increases the demand on core compression strength and active hamstring flexibility.",
    ],
    youtubeLink: "https://www.youtube.com/watch?v=DTK22KGYVsM",
    substitutions: ["L-Sit", "Manna"]
  },
  "V-ups": {
    image: "",
    category: "Calisthenics",
    subcategory: "Core (Flexion)",
    muscles: {
      strength: ["Rectus Abdominis", "Hip Flexors"],
      stability: ["Core"],
      mobility: [
        { muscle: "Hamstrings", level: "High", description: "Requires good hamstring flexibility." }
      ]
    },
    techniquePoints: [
      "A dynamic core exercise similar to a V Sit-Up.",
      "From a lying position, simultaneously lift your straight legs and torso to meet in the middle.",
      "Focus on a powerful, controlled movement."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=iP2fjvG0g3w",
    substitutions: ["V Sit-Up"]
  },
  "Victorian": {
    image: "",
    category: "Calisthenics",
    subcategory: "Multi-Plane Hold",
    attachments: ["Rings", "Parallel Bars"],
    muscles: {
      strength: ["Lats", "Teres Major", "Pectorals", "Anterior Deltoids"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires high shoulder extension." }
      ]
    },
    techniquePoints: [
      "An elite, borderline push/pull static hold.",
      "Similar to a Maltese but performed face-up.",
      "Can be visualized as a Front Lever with arms held out wide to the sides.",
      "Places extreme demand on the core and scapular stabilizers."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=UQdnnMn9Ht8",
    substitutions: ["Iron cross", "Front Lever"]
  },
  "Wall Headstand Push-Up Eccentric": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup Progression",
    attachments: ["Wall"],
    muscles: {
      strength: ["Anterior Deltoids", "Triceps", "Upper Pectorals"],
      stability: ["Core", "Serratus Anterior", "Trapezius"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires full shoulder flexion." }
      ]
    },
    techniquePoints: [
      "A key exercise for building HSPU strength.",
      "Start in a handstand against a wall.",
      "Slowly lower your body with control until your head touches the ground (3-5 seconds).",
      "Kick down and reset for the next rep.",
      "Builds strength in the eccentric phase."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=GGBOX8Byz08",
    substitutions: ["Pike Push-Up"]
  },
  "Wall Headstand": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand",
    attachments: ["Wall"],
    muscles: {
      strength: [],
      stability: ["Deltoids", "Triceps", "Trapezius", "Serratus Anterior", "Core"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires 180-degree shoulder flexion." },
        { muscle: "Wrist", level: "High", description: "Requires excellent wrist extension." }
      ]
    },
    techniquePoints: [
      "A foundational drill for handstand strength and alignment.",
      "Can be done facing the wall (chest to wall) or facing away (back to wall).",
      "Actively push the ground away, keeping arms locked and shoulders open ('earmuff' position).",
      "Maintain a straight body line by engaging your core and glutes."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=olA58oW-21A",
    substitutions: ["Pike Hold", "Handstand"]
  },
  "Wall headstand pushups (Wall HeSPU)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Handstand Pushup",
    attachments: ["Wall"],
    muscles: {
      strength: ["Deltoids", "Triceps", "Upper Pectorals", "Trapezius"],
      stability: ["Core", "Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "High", description: "Requires shoulder flexion for vertical alignment." },
        { muscle: "Wrist", level: "Moderate", description: "Requires wrist extension to support the body." }
      ]
    },
    techniquePoints: [
      "A fundamental vertical pressing movement.",
      "Maintain a completely straight body with feet lightly touching the wall for balance.",
      "Lower under control until the head lightly touches the ground.",
      "Press up powerfully until shoulders are fully elevated.",
      "Strictly avoid arching the back."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=6MdyYIRS7FY",
    substitutions: ["Pike Push-Up"]
  },
  "Wall pseudo planche pushups (Wall PPP)": {
    image: "",
    category: "Calisthenics",
    subcategory: "Planche Progression",
    attachments: ["Wall"],
    muscles: {
      strength: ["Anterior Deltoids", "Pectorals", "Triceps"],
      stability: ["Core"],
      mobility: [
        { muscle: "Wrist", level: "High", description: "A significant forward lean places high demand on the wrists." }
      ]
    },
    techniquePoints: [
      "An assisted PPPU where the wall reduces the load.",
      "Focus on maintaining perfect technique and a strong forward lean.",
      "Avoid any arching of the back.",
      "Use slippery socks on the wall to reduce friction."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=odcPqBOlJhI",
    substitutions: ["Pseudo Planche Pushups"]
  },
  "Wall Slide": {
    image: "",
    category: "Calisthenics",
    subcategory: "Mobility (Shoulder)",
    attachments: ["Wall"],
    muscles: {
      strength: ["Scapular Retractors", "External Rotators"],
      stability: ["Scapular Stabilizers"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Improves shoulder flexion and external rotation." },
        { muscle: "Thoracic Spine", level: "Moderate", description: "Promotes thoracic extension." }
      ]
    },
    techniquePoints: [
      "A key exercise for shoulder health and posture.",
      "Stand with your back against a wall, feet slightly forward.",
      "Press your lower back, upper back, and head against the wall.",
      "Place your arms against the wall in a 'W' shape.",
      "Slide your arms up the wall into a 'Y' shape, keeping elbows and wrists in contact with the wall."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=CFiAOwA342Y",
    substitutions: ["Band Pull-Apart", "Face Pull"]
  },
  "Wall-Sit": {
    image: "",
    category: "Calisthenics",
    subcategory: "Quadriceps",
    attachments: ["Wall"],
    muscles: {
      strength: ["Quadriceps", "Glutes"],
      stability: ["Core"],
      mobility: []
    },
    techniquePoints: [
      "An isometric exercise for quadriceps endurance.",
      "Slide your back down a wall until your thighs are parallel to the floor.",
      "Ensure your knees are directly above your ankles, forming a 90-degree angle.",
      "Keep your back flat against the wall and hold the position."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=-cdph8hv0O0",
    substitutions: ["Plank", "Bodyweight Squat (Isometric Hold)"]
  },
  "Wide Ring Rows": {
    image: "",
    category: "Calisthenics",
    subcategory: "Row",
    attachments: ["Rings"],
    muscles: {
      strength: ["Posterior Deltoids", "Rhomboids", "Mid-Trapezius", "Lats"],
      stability: ["Core", "Glutes", "Spinal Erectors"],
      mobility: []
    },
    techniquePoints: [
      "Set up with feet elevated to shoulder height for a horizontal body line.",
      "Initiate with scapular retraction (squeezing shoulder blades).",
      "Pull by driving the elbows wide, at a 60-90 degree angle from the torso.",
      "Pull until your torso reaches the height of your hands."
    ],
    youtubeLink: "https://www.youtube.com/watch?v=EjAdoFZy_kk",
    substitutions: ["Archer Ring Rows"]
  },
  "Wide-Grip Pull-Up": {
    image: "",
    category: "Calisthenics",
    subcategory: "Pull-Up",
    attachments: ["Bar"],
    muscles: {
      strength: ["Lats", "Teres Major", "Rhomboids"],
      stability: ["Core", "Forearms (Grip)"],
      mobility: [
        { muscle: "Shoulder", level: "Moderate", description: "Requires good shoulder adduction strength." }
      ]
    },
    techniquePoints: [
      "Grip the bar with an overhand grip significantly wider than your shoulders.",
      "From a dead hang, pull your chest towards the bar.",
      "Focus on squeezing your lats to initiate the movement.",
      "This variation increases the emphasis on the latissimus dorsi."
    ],
    youtubeLink: "https://youtu.be/eZDJ3SiXrOE?t=2m9s",
    substitutions: ["Pull-Up", "Wide-Grip Lat Pulldown"]
  }
}
