import type { ExerciseInfo } from '../types';

export const calisthenicsExercises: Record<string, ExerciseInfo> = {
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
    image: "https://i.vimeocdn.com/video/2020015024-df79358f550b98a70cf2c54975c5effe80c2f51553a62c2b727bba3cabdc533a-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Tuck Front Lever"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905418/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=917e53ad86a0e9daa1d9d8ea65bdec4d6510a434780bab5ab186a75b95812068",
    secondaryVideoLink: "https://www.youtube.com/watch?v=wwRLZ0n07P4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
    image: "https://i.vimeocdn.com/video/1783130279-a09617ba22112089e2ec9216d5f1761fc558c8eea69c4a9fb4b8c31c60c248e5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Glute Bridge"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Glute Bridge.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165669/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0ef288171fc7970ed5579e36fda9285a16a69a19ae2ce74041b5d2d5e0dfca36",
    secondaryVideoLink: "https://www.youtube.com/shorts/brn-QNicwWo",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
    image: "https://i.vimeocdn.com/video/752022043-6d7859d2fc72cc095a32efa8e4b9c1ea5a51e22726bcc8025f49f3549b7d5ce9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit (Parallettes)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759823.sd.mp4?s=3c80ca81819d7be1dfda609ed28808434aa3e85b&profile_id=164&oauth2_token_id=1299073511",
    secondaryVideoLink: "https://www.youtube.com/watch?v=BbAkWxDZKIM",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
    image: "https://i.vimeocdn.com/video/1984133287-a2c1775f25804d9057f6028919c76f3fc4886a60cff13ee0fd87d44d898c2aab-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Russian Twist"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Russian twist.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052945/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4a35cc9cd17d6062a162845d751cb2816cfd8921d8cf718b732c5759af4cafb8&user_id=53893387",
    secondaryVideoLink: "https://www.youtube.com/watch?v=1ITqUh87anc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
    image: "https://i.vimeocdn.com/video/1418537547-004d3e71efa7447e307f0d67b727f7dcb5e22054d8104fad9fa1f734e21fea58-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skin the Cat"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Skin the Cat.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702064818/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=a4167ab606c3323232e6f47c7d1bd4b037af94315c91604654e6420a4cb701d4",
    secondaryVideoLink: "https://www.youtube.com/watch?v=44vYDHorwkM",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
    image: "https://i.vimeocdn.com/video/1701645678-0c7409846998ca3bb6f0e9d1ab6b46273e3d8d69f77503b8eef853f7776dcae2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal V-Ups"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting V-ups.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847810096/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e1c9c2ef0a477f7025920260efbaac9b32d8367661b69294954607f099a139fc",
    secondaryVideoLink: "https://www.youtube.com/watch?v=iP2fjvG0g3w",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
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
  },
  "90 DEGREE HOLD": {
    image: "https://i.vimeocdn.com/video/1779393454-28b5847caf7b9e6e8f35aa4cfc10d53e2f7fab54387072a3c7ffefef7fe2a6c8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 DEGREE HOLD"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90 DEGREE HOLD.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group, Erector Spinae, Anterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900825420/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=111256e430b1aa1ab402e09c2e60544979518143e9ed631ac591a7a23bfe0e70",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 Degree Hold - Parallettes": {
    image: "https://i.vimeocdn.com/video/779311996-370969094ad8e8196793c4a32f6f03758220c27a99379d0dcb51c06443232660-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 Degree Hold - Parallettes"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90 Degree Hold - Parallettes.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/333352141.sd.mp4?s=0cdf068ea30cc6eb5704e6f8e968532bde3e1dd7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 DEGREE HOLD TOE TAPS": {
    image: "https://i.vimeocdn.com/video/1686731023-e91eef9f600636eb3030aa26ed81bf63c2fbc7ee3f18c46c0fe50ac20b6b1972-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 DEGREE HOLD TOE TAPS "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90 DEGREE HOLD TOE TAPS.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837994014/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8415cc1e721253563436bee1bec12f21d512be4b5dcf4760f5435ac21f4d9ede",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 DEGREE LEAN + RAISE": {
    image: "https://i.vimeocdn.com/video/1686731029-4c75b666efc21e448f328e884f41a80aef35153ab50079ed1b9b9cca8f197f9d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 DEGREE LEAN + RAISE"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837993996/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e0e2d8ab1f8eaf8bdacec11838c721796d340d86fe7f66740ae65d5a3c892856",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90 Degree + Push Up": {
    image: "https://i.vimeocdn.com/video/1935765605-66729abd8945a9e404185bae22fadff2ad704866f63c772bde51bc1301eca7d3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Erector Spinae", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90 Degree + Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Erector Spinae, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1017712549/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3480014e9a3b847b04c7aaaa17861a7b17dea2af23a1b5f24de8a215baea61dc",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90º Floor Toe Taps": {
    image: "https://i.vimeocdn.com/video/1686731023-e91eef9f600636eb3030aa26ed81bf63c2fbc7ee3f18c46c0fe50ac20b6b1972-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90\u00ba Floor Toe Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90\u00ba Floor Toe Taps.", "Execute concentric phase with intent, driving force through your Deltoid Group, Erector Spinae, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837994014/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8415cc1e721253563436bee1bec12f21d512be4b5dcf4760f5435ac21f4d9ede",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "90º Hold": {
    image: "https://i.vimeocdn.com/video/1686736619-e05ceee7a5b57ccb292377c1403e317e6fff61ce8d7f14d94c9c17670fe0bd78-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal 90\u00ba Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting 90\u00ba Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837994063/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d30bfa3ec6a627f77d1bfa64e3a124abb9c9ca497f4739a558c592e42b826868",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Handstand Hold (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/751995794-29f75abbaadf74699b5cbbe6b36282f8701bced8a996fa7b1ffab7817c660fee-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Handstand Hold (On Parallettes)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Advanced Handstand Hold (On Parallettes).", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759794.sd.mp4?s=974f37cf7f976e658306572e9fa340a4729ac137&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Reverse Australian Chin Up": {
    image: "https://i.vimeocdn.com/video/1425552447-faec4790ba32e5eeb64f82150148d6d7468676a012a5e18b3e0db473ec41a3b6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Reverse Australian Chin Up"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/706168489/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=9502227934a4411008dcb7c53fdb020c85a4a2a392d8da8ed71d4997b5f760c2",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Tuck Back Lever Drops": {
    image: "https://i.vimeocdn.com/video/1431228404-4238335701c493e1f964b41bce9de2a2f9407a2b56c87f78e8f5386b002b8db7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Tuck Back Lever Drops"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/709502337/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e5da2e3748063ae7232dd35d79f4bae1d9787f401b839ec72ac97f538ef1547b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Tuck Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1429505360-0f3d248a9544fce60d514713d7f69ab9f7ad5b1bbd395d88adfbc37fb15bdb3f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Tuck Back Lever Hold"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451374/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=768ec79a7ddd8949f7fda99d0b1ad2fd26304df31a9dada9f321bba81092a4c9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Tuck Front Lever Pull Ups": {
    image: "https://i.vimeocdn.com/video/2020312341-729891ecccafead07a964f553c0623a9ac70b0aba7661c1a297669cf64f15fb2-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Tuck Front Lever Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088155652/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=38665e5a6c9d62004b6b04719f88022d0b605e1add54e3d43c544a0218ac294d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Advanced Tuck Front Lever Raises": {
    image: "https://i.vimeocdn.com/video/2020015007-846fc6560f49bbdf7f40fd0a1b6cf801b71065a3273e0364bc4139b4e08ff092-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Advanced Tuck Front Lever Raises"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905314/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=be6daf846b83a80ce8ac054ceb66ee91e1d50a5dd28b1f3458af05528ca7bf9a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternate Side Plank": {
    image: "https://i.vimeocdn.com/video/1984131526-e2d721b3b6205fd38f2893cd7e286b4a1d07ce8732e7e129fa7a2177690dafbd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Obliques", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternate Side Plank"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051520/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1357390c7473214fbc956472c11d8d476285b1df0c0701ba0fddb0d11d2b73bc&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Curtsy Lunge": {
    image: "https://i.vimeocdn.com/video/1220026556-78e8e7b5a63be0e2bc00f05c01dbf86ffc989a686aa8e0af0dc998b663c01133-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Curtsy Lunge"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/589966404.sd.mp4?s=99579fae0b1a190aca7318144e72d5ff0e463a11&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Knee Raises - Dip Bar": {
    image: "https://i.vimeocdn.com/video/1135553029-cb9f2db1fb2910fdb6bd21a3bfb5ae0c93239e75354d3cd9f3cdb7fde25a8955-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Knee Raises - Dip Bar"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/548464223.sd.mp4?s=7beafb072709af32c8abc7858ddec83f6838312a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating One Arm Australian Chin Up Hold": {
    image: "https://i.vimeocdn.com/video/1777964999-329cfb44cfce623a4c1710e733cafc24c9dc1e51459c70946da383153ce4b86a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating One Arm Australian Chin Up Hold"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900011440/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=be84125737ed92988b42bbe80d5177a6706d4b2f6b2e67cef0a3aae006b7aa99",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating One Arm Hangs": {
    image: "https://i.vimeocdn.com/video/1995002803-f1664b139daddd181c5b83c79711b71c2e2ccdc7256b40605b49529dc832bc39-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating One Arm Hangs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Alternating One Arm Hangs.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Forearm Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147355/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3f896f12e72373caaca541f6d1d4d983b9dfe5c91d093ac8a6ad985aade92e7d&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Side Crunches": {
    image: "https://i.vimeocdn.com/video/817481119-a278a010356ad449357b26a5d556fcabb4a0565eea4218b8cd833df674531d29-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Side Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/362589548.sd.mp4?s=1ca9348fa2bc7c2544eec69fcc750b696d22adcd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Side Lunges": {
    image: "https://i.vimeocdn.com/video/752051727-6f0ec45dcc31ebd27294c56db09fd1b8c26ce910804b0b2d057b2c6f137f51fc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Side Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760812.sd.mp4?s=afc0773c96e8f1855dbaf77e0e9c523521a564b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Single Leg Raises": {
    image: "https://i.vimeocdn.com/video/1887344336-b110de67055ef8c46c4f94123c3111b79e25ac5608070ca49cdcbae6165ed2d8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Single Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/973235418/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8deeeb7d774d1cb48c7727707901d406b90c9431bc7f4061dd016a0035724b4d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alternating Toe Tap Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251158-19fa5ea18cc8b53d044a541d2c991b5b0cd9ffe6ef5f4b1ab70fb290f744e5e0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alternating Toe Tap Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Rectus Abdominis.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104050/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=0b0e9f24c56260b808cd69caa5cc42217d97d584972bf9c7fbe2ef77f408502e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alt Squat Side Kicks": {
    image: "https://i.vimeocdn.com/video/973191709-0e6a7bda3f742f3f38b86510ddc581aa1976bc9217ec936b10cabb4f4ef2ba30-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alt Squat Side Kicks"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/467061826.sd.mp4?s=8bb81df5731178a47a6d586792be25abec78421d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Alt Staggered Push Ups": {
    image: "https://i.vimeocdn.com/video/943591370-e6fb1435eb8154aff92857c4af7030f3b3c886f3f42acd646024d83b4c8992f7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Alt Staggered Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/449781878.sd.mp4?s=3a0f2e6babd5fa7f06761762753fa1172c8fcca0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Australian Chin Ups": {
    image: "https://i.vimeocdn.com/video/1777993611-e8271abe83e03764d780ae2e972268dfce78131d77ffdcd29a2807840d2668e5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Australian Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900024532/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b914c59d88b374db764d68de1c85e92bdad9b7318717bed8b741b824bb8d3737",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1777989228-f7d1a564573106bc017b37456164387d0ad7c94ab396ca02ee238837171266b0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Australian Pull Ups"}]
    },
    techniquePoints: ["Take a wide overhand grip and pull your chest toward one hand while extending the other arm straight along the bar.", "Keep your core tight and avoid kicking your legs for momentum.", "Alternate sides or complete reps on one side before lowering to a full hang."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900024548/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=341ffbed7d13d96d6702a4bc745c678d803b415cd257f8dd784441529ccf972b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Pull Ups": {
    image: "https://i.vimeocdn.com/video/751506999-c65853b539bc25ee8c263bd37a59a8a5fc8375154ef1493942ded389df55dd3f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Pull Ups"}]
    },
    techniquePoints: ["Take a wide overhand grip and pull your chest toward one hand while extending the other arm straight along the bar.", "Keep your core tight and avoid kicking your legs for momentum.", "Alternate sides or complete reps on one side before lowering to a full hang."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760870.sd.mp4?s=c1a9776a8afa5fd294822d022001ba29c3c31266&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Push Up Hold": {
    image: "https://i.vimeocdn.com/video/1798739282-5b4a426bc881ab2105ff8c2e4e07291181ae59544fb58645e729cb345e3cf770-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Push Up Hold"}]
    },
    techniquePoints: ["Assume a wide push-up stance, lowering your chest toward the working arm while keeping the opposite arm straight.", "Brace your core and glutes to prevent pelvic rotation or hip sagging as you shift laterally.", "Press forcefully through the active palm to return to the starting center position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111058/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4d2ba8bc532727feb3d4dd67e07b82ac2fc56a18c4b38d93b90067c63f1acd82",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Push Ups": {
    image: "https://i.vimeocdn.com/video/1798769424-9264434738a01843b97db26ee0df018953cce1b5e37d8f3022d9def5085594cf-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Push Ups"}]
    },
    techniquePoints: ["Assume a wide push-up stance, lowering your chest toward the working arm while keeping the opposite arm straight.", "Brace your core and glutes to prevent pelvic rotation or hip sagging as you shift laterally.", "Press forcefully through the active palm to return to the starting center position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913129785/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b0a841878146ae7160cdd078a1905a1e6acad4bd29fd9e08f69e1cb7f7fed765",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Archer Straight Bar Dips": {
    image: "https://i.vimeocdn.com/video/790284211-f35f97c0c89dfd52ea7a86174131551169aabc438a6247b867eaf037005e397c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Archer Straight Bar Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/341620697.sd.mp4?s=74abf19144801eb735440310c176563b712d4682&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Arm + Leg Raise": {
    image: "https://i.vimeocdn.com/video/793797944-74156fdae37f886f1a8b4ae7fbf5933e278ab14b10c16cd88ab3fc770f09f6f1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Arm + Leg Raise"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344984.sd.mp4?s=2fbb8ab8c6dad0121d157832470875bd51972c88&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Around the World": {
    image: "https://i.vimeocdn.com/video/751508561-5e5699e49629999bd005a95abd41ae74a5955b731f40cad116988b1339381f54-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Around the World"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Around the World.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760876.sd.mp4?s=5bc7dd3d14ab941856971220ee22ff93b6ffda05&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Around the World Australian Pull Up": {
    image: "https://i.vimeocdn.com/video/1984131688-80c0cd4f5fdb709cb33119d0bef2f7d7ffebb23b08f417a29d0803b641531c7d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Around the World Australian Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Biceps Brachii, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051624/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3a8374d83193268f0b5ba28a3cbfc15c0e20471fa2dc645f630f1a52c9050928&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Around the World Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251175-11a8e509c2956914fad7402eb2ee6bad3ef13b93649e1a2b3b9221e4e629c72b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Around the World Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104056/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=4eae2092bc2632d2259b1d9c87acdb79c43dce521aaa3242c561096de54e0041",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Half Lay Front Lever Hold": {
    image: "https://i.vimeocdn.com/video/2020015268-189b6d82af18e75070a39d82f9c5d7fcaf19a157e94abb86f3fcbce22cdea7a3-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Half Lay Front Lever Hold"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905577/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=571ea09e1f8b5cb5f7aa3e1d1ac21f84fade8fd644f3807280f0942af5a91613",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Half Lay Front Lever Pull-Ups": {
    image: "https://i.vimeocdn.com/video/2020015268-189b6d82af18e75070a39d82f9c5d7fcaf19a157e94abb86f3fcbce22cdea7a3-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Half Lay Front Lever Pull-Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group, Posterior Deltoid, Biceps Brachii.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905577/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=571ea09e1f8b5cb5f7aa3e1d1ac21f84fade8fd644f3807280f0942af5a91613",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted L-Sit Hold + Pumps": {
    image: "https://i.vimeocdn.com/video/782616628-ffd00da33e5c874f3b044c9adaec5a9461d73222bd989526a0489e117f55f787-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted L-Sit Hold + Pumps"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915073.sd.mp4?s=da49423a3418da402532c1321821c925e502b014&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted One Arm Push Up": {
    image: "https://i.vimeocdn.com/video/1696387577-8ce30966af7db421ce3b6596dc08d7dd82b84e5e0e27b3385b9b6383ac03dd81-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted One Arm Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844304328/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=feaa78b47e48506721ef03a2766259f0a18f4bd3d44046d4600acc5815c25dae",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted One Arm Push Up (Elevated Surface)": {
    image: "https://i.vimeocdn.com/video/1696387653-459f5710f742a718f8f1076e3e19bc47093cf35781e71e0f1419c4accb2ea38d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted One Arm Push Up (Elevated Surface)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844304302/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9b6888979fb4b261986f9d91a1bcc8d2ef6d3bdd96354da79b9cabb4665133a8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted One Arm Tricep Extension": {
    image: "https://i.vimeocdn.com/video/1262330669-4a7efc9cf964b52d179490b05856736f012b7788127a3a8aa_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted One Arm Tricep Extension"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/620072001.sd.mp4?s=176fb9b05d9dc25843ef4f999e97bc87fbb9f88e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Pistol Squat": {
    image: "https://i.vimeocdn.com/video/753102291-97287501faaa0bf58a906c3fc50e3224c017e432edf534a8bb27c5a1318d525a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Pistol Squat"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760826.sd.mp4?s=bb4fa42139f5174bbe6a0b4266079096efcc7bbe&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Pistol Squats - Elevated": {
    image: "https://i.vimeocdn.com/video/1783132060-4bbb2eb522f8cae860ba303de2127dfb0ffa43b9143d985ba333714fba9645a1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Pistol Squats - Elevated"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165242/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=400b4c69993c1eff40070e935e921acc46a4b61f251760d238dc36ea841071ff",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Tricep Extension": {
    image: "https://i.vimeocdn.com/video/863033224-c054933583e68f5f1991fcbc9a03362f29120f4b7384db9559efda27a6fb9c47-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Tricep Extension"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/396328650.sd.mp4?s=bf419a78824ed59d03d6653fd23a3d0774468c08&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Assisted Tuck Front Lever + Scapula Retractions": {
    image: "https://i.vimeocdn.com/video/2021813474-ec9176df0ed02ae930aa70be70596df471708bc6aaba50dd3a8f412170e913fe-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Assisted Tuck Front Lever + Scapula Retractions"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1089387565/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f82d23350fb0963223c05fe17311e6cb66950463e7ea39439f54ba6d82892bcd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Up (Close Grip)": {
    image: "https://i.vimeocdn.com/video/1984131715-4ac35ac0aa614c7d978a5361b251c341e6e7dd2d0c8ffaafaad4bd73ff3a0a56-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Up (Close Grip)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051693/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=933ae77d7f23db92d39aa17a20dd8145b56f6fef72684d737a1a8630b68f1ac3&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Up One Arm Negatve": {
    image: "https://i.vimeocdn.com/video/1984131900-d96b26b83029832309d388b454996991e2d0c9a23a6a7d4e93558394f05355d8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Up One Arm Negatve"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051785/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c33325aced97838da9529989bc7fbe3f8b20cb303ecdc60640126de8a6f912cf&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Ups": {
    image: "https://i.vimeocdn.com/video/1984131797-f12723f745f6ec718d88c5cd035f8ec01df11ea4a682204451f0476294bc1ca2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051746/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7dad12ca6de6f6e6725f88a9b5f10753b607c5a37c00410ec12125214f8044f5&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Up (Wide Grip)": {
    image: "https://i.vimeocdn.com/video/1984131753-7983aedfb5d71fc616f4b2886c9f47c07fc3bef79479f86aa48bc6c6f6bef27b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Up (Wide Grip)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051718/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bd981ca66c54c26caad65ceb78a3effa5328ade28419d6c9f12d7ecf90604e04&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Chin Up (Wide + Shoulder + Close Grip)": {
    image: "https://i.vimeocdn.com/video/1777990011-7de7a104471400a72630635466230b76772adfce9c7ffa7b2f94aa3c2d77fa73-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Chin Up (Wide + Shoulder + Close Grip)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900024488/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d8182624f12aaebf9697e8aa6345ea98caf8315f953d741b9316e7ba2338a9ba",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Face Pulls": {
    image: "https://i.vimeocdn.com/video/1984132301-541c54b20a83461d4b2ae57cee54ff44c034ddca4d860bf1f37fd48aacc31675-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Face Pulls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Australian Face Pulls.", "Execute concentric phase with intent, driving force through your Deltoid Group, Trapezius & Rhomboids, Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052150/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5b4527b76ddbb2f0d1d9b7fcc6351abca98952e4c277f1f1c02983d8e6d5d096&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian One Arm Pull Up": {
    image: "https://i.vimeocdn.com/video/1984132847-777ae55bec410f65d54c95bb534facc6861608b00652e4265b9ace4b8a59b376-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian One Arm Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052601/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9bad997816da77aff27461ef85b0f9ee7f9b8dd90b28c5cb94888bae70b785dc&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1984132041-9dbdf45f64ed8b90e5456b17d8557d014736453b230697109fa13b0b653cb0aa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051936/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9b6b40e76ec43c227b4b362c210552fefd18465dad9ef743566fb7af41d90281&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Ups (Close Grip)": {
    image: "https://i.vimeocdn.com/video/1984132000-3688a7e72270050e4514e6f0e59d731f2dbbd8b1fef48a56ffe4ac9dda89ff4a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Ups (Close Grip)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051906/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8555cd3801d490e4451250c71801de5abd7fb46e84cd10a552c741cbba02c4cd&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Australian Pull Up (Wide + Shoulder + Close Grip)": {
    image: "https://i.vimeocdn.com/video/1777989352-04a0dd2b4a7d6eda24338e158dad6594b85a766326a4124505669c27fcea1c03-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Australian Pull Up (Wide + Shoulder + Close Grip)"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900024572/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0e95cd96a920254f91f0b6a32201452ba5d94f563c6a300dd4305aee61dc76ee",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back and Forth Lunges": {
    image: "https://i.vimeocdn.com/video/1108133036-7d90238c3b5a16588c67d3a467f197f58b2f82a8262e09f99564c8d2a708829b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back and Forth Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/535311599.sd.mp4?s=d5040306be65da175cb61b44686551b192a74dbc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back Lever Drops": {
    image: "https://i.vimeocdn.com/video/1429504826-a89bcdaeb612bd5e5a2af7eab1e6626b8ef1f317c9039c88d6b5223c8d3e0e8d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back Lever Drops"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708450972/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7732238bca152c0b296e69d34531859fde7096c23562f378f269e5752394caeb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1418538199-98f954aed910844c42c9c295b73cfd9af455bcb780003e24332e8c3c8ca3bfb0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back Lever Hold"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702065174/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=8b2b71260da1be99fe24044f37f9aa56c5340ffbc9f9deb65302764fc25782bb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back Lever Raises": {
    image: "https://i.vimeocdn.com/video/1418537089-273c6320fc9b56dac9ab606cfb61d7b532e1ce02fe8c7ba3e92bb259e7e4ff0b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back Lever Raises"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702064511/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=6930a804b808346eab93aceba2135d99930d01ce79271c7a535f1a379921c4c2",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back Lifts": {
    image: "https://i.vimeocdn.com/video/793798349-ad01d45f694161d4b0dc7d6ec5b4dadccbb6fa6f56f8a354e0cbf1e3a15190a1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back Lifts"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Back Lifts.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344345282.sd.mp4?s=b257c845ec732b2515e9a75cd507ec78aab9c1c7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Back Squeeze": {
    image: "https://i.vimeocdn.com/video/793798207-6a32ebd8c2a36801d6ed1dc811a7f22fedefd765f4772aa25c16daa0fcb720a1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Back Squeeze"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Back Squeeze.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344345218.sd.mp4?s=e019d46a8ba8729a32f4cb990aec3497014ff51d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Assisted Hefesto": {
    image: "https://i.vimeocdn.com/video/1425552473-84da29a8e728c2bbeb564a4b26a89faed1d193395bfb6f07e3c536f4d9b1353d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Assisted Hefesto"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Assisted Hefesto.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/706168457/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=38bd57c249ac5bcdf32ce012367179501f977f33966a97e058bc9869a9a67ad2",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Crunches (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/751512210-2a61b09de95ed007c9fae40228bc9c581d3060a2a229dc83ab02a877917014a9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Crunches (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760848.sd.mp4?s=196e12efc123e0a749af45bf1e1efe24b81d4116&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Curls": {
    image: "https://i.vimeocdn.com/video/751512729-3c82111e5f5c0f21d39697a079b001e8ea8b3843e5cc4939a33cf783012d8dbb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Curls"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760850.sd.mp4?s=91452283a2c2dc77691a05c463dd1d9ecff035c7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Curls (Beginner)": {
    image: "https://i.vimeocdn.com/video/751512968-7d4c9b7ac9b395e0364c2b0b4762767ea0cb18f9714f5204a383f39602ef1dde-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Curls (Beginner)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Curls (Beginner).", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197211591.sd.mp4?s=c706ba21d137682c6f6ec196a310563701448527&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bar Curls (Close Grip)": {
    image: "https://i.vimeocdn.com/video/1984131422-675dd966d135ef07e20dbf730158038b1fce5b561fb0e820f3b71716dc1b5dc7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bar Curls (Close Grip)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bar Curls (Close Grip).", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051400/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a7ffc5f8c7ebaaa76f29cc716e6b7c78fc15b764c3739446dbeec27a769cc146&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Beginner Bench Dips": {
    image: "https://i.vimeocdn.com/video/1775489394-d235d05d262b68b71e6577fc9e99fbaa5ecceeb83005996ec152aa2c9a6d2031-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Beginner Bench Dips"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/898616395/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=46d023a10beaf9915fa2d3b1ebb9436f747e6ffeddbfa13f2f44e10fc3fa1909",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Beginner Skull Crushers (Close Grip)": {
    image: "https://i.vimeocdn.com/video/752267102-3ac5882929d89ef2d87d54db8afb7a9f7bfbb72850ebc58d2d96f78cb9e341f2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Beginner Skull Crushers (Close Grip)"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760854.sd.mp4?s=cf58083fcfef6da868baea8e4e6bcff5e16442fe&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind the Back Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251286-6bbbb0d0b6a53677b6da275653910f421ded81de57aa07ccb45db697795761e5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind the Back Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104066/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=73838308b8b9b78f7dcf47bb12855c3b5cdfdb35f0736fc878eef0d36d3f762f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind the Back Pull Ups": {
    image: "https://i.vimeocdn.com/video/777877287-e2bd35708a9876c70f2e20aca926d3fc59bf67d58c840b41e73a77cf47392536-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind the Back Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/332228912.sd.mp4?s=0ddd3bcce775b7646ee6715eafe938d463cafa5d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Behind the Head Chin Ups": {
    image: "https://i.vimeocdn.com/video/752286090-90c0c70a8df7a3d3b5f8afb6406462f2dce668681c49da56581c4e5d17a54db4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Behind the Head Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/217541281.sd.mp4?s=554644863cbbc815e6b99fdf999d91590ede18c0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bench Dips": {
    image: "https://i.vimeocdn.com/video/1698396209-842950318de109a9f089c8113e94f26f5a4f4176df41cb1e13c77b9ce51a20a9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bench Dips"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733580/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e74778a3dae3902f8bc39bf8e072a32c75004a1b943805e96cbb9de128acb014",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bent Over Calf Raises": {
    image: "https://i.vimeocdn.com/video/1296362051-e1825784310e449c0407404d4d7e94a96b3a1ffc6a3c62ae0_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bent Over Calf Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/644463304.sd.mp4?s=8784309587a0eae92f03d06c4a6c924f60fd26a5&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bicycles": {
    image: "https://i.vimeocdn.com/video/1984132108-eded63bb7957d4d289f9dc877df1982e4dcdf58e404d5429e1a2d3363ca832b2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bicycles"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Bicycles.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051969/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=578bb90ce849b216e950afd8b88cf8bfaa480dd1609893cad6dd27a66538306c&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Boat Hold": {
    image: "https://i.vimeocdn.com/video/751515128-978f98a49f948ce53c8f5667478bb6d2df1db3a412dafcc0f82f367aace0ae06-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Boat Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Boat Hold.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760782.sd.mp4?s=4580d358fd157a451f165fb169439fc88d5f7928&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Boat Hold Leg Flutters": {
    image: "https://i.vimeocdn.com/video/779308084-f0b27fa8e3c62a2a9f3e17667222bb7744fee612011685e37aed6510c12c89e6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Boat Hold Leg Flutters"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Boat Hold Leg Flutters.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/333349025.sd.mp4?s=5a49b397608bce56514c47b9a74851ebef17c96c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Body Rear Delts Flys - Floor": {
    image: "https://i.vimeocdn.com/video/1798879518-2c2fc77ea74baf9b092a9324c434e4b91a617f2410892279089bd5212afeb917-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Body Rear Delts Flys - Floor"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913175940/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5f27fbd1351ebc9c473105819368024471ba1978657f7d924e536908c48cca2f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Body Rows": {
    image: "https://i.vimeocdn.com/video/2013280006-443c96fa39c28552798e17f4730e3953b80f64a9ab61e312a8a48430d1e3d0a4-d_1920x1080?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Body Rows"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Biceps Brachii, Trapezius & Rhomboids.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1082319317/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3c4a4b56ba5568eac2a7dac15e064189ff29cd35ad84636897707850ef6887b8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Body Rows (Chairs)": {
    image: "https://i.vimeocdn.com/video/1804834521-7f911488adc3977081bffeb10e253b001457a1e75bbf7f96fee9a710d1242f3b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Body Rows (Chairs)"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Biceps Brachii, Trapezius & Rhomboids, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833079/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bd1981d9aca07da6db5c4cf6eb70e826b1a9d64801c855bb31e93cfe1be11932",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Body Weight Bicep Curls": {
    image: "https://i.vimeocdn.com/video/1804823105-6526f68c06f099c4fa72e89d023fecd9870272671731a935ea7d5290d6ad4b13-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Body Weight Bicep Curls"}]
    },
    techniquePoints: ["Stand or sit with chest up, shoulders back, and elbows fixed at your torso sides.", "Supinate wrists and curl weight upward, focusing tension on your Biceps Brachii.", "Avoid using hip momentum; lower weight under control to full elbow lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916832804/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d2d31489155b7666852e9e28d9a946d1cba9cec92af1a2d387f7ba23ded9122c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Body Weight Curl Hold": {
    image: "https://i.vimeocdn.com/video/1767146589-17fefd313684229b8abe8ba3dc2d99fa7774be35dbfc9091c145d4d2799faf23-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Body Weight Curl Hold "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Body Weight Curl Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/893411847/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=43679445e0e22fa7789a6a22501ae7f5ac2d36e481a8d2688b380e5fd5cbbbe8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bodyweight Rear Delt Fly": {
    image: "https://i.vimeocdn.com/video/1775497868-6ae86e3650f2465db135cda7aebae282290bac9d00941592c929f486dbcf3cb3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bodyweight Rear Delt Fly"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/898621458/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=93b1a2190d03bf41c7731345841dc80390652e139586f7506326cd67ace88ec4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Jump Burpees": {
    image: "https://i.vimeocdn.com/video/1701654212-4fa60428a3d0b969cb9e3ead89db1a24ad691d4402e9e44b253ca3a17f3b43df-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Jump Burpees"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Box Jump Burpees.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group, Quadriceps Femoris, Gluteal Region, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847811747/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d84e3407a0aae5029e3d81f69cbf6d474a773e13eb70b2530dc6854843e221c5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Jumps": {
    image: "https://i.vimeocdn.com/video/1783131696-c8eef94bd719e56a3b642f9057e9745ad11901e4ba20e0572669a108ac60d9a2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Jumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Box Jumps.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165319/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=40f33c400fbb0ce61a173693a84775d9abd439f931b38c903237b4fe40bedd80",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Squats": {
    image: "https://i.vimeocdn.com/video/751515990-fc842d609c97e7c1c7214f3307a0bfb39f6ab357de79b8ad8d83e118772ba98b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173510832.sd.mp4?s=8d263f4d9db46cdb23a358a1b578a20d5ead9dce&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Box Step Up": {
    image: "https://i.vimeocdn.com/video/1783131513-3a1915ec01787ab0d6fb2f42cc043a88266950d154a989fb7727fa8621023051-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Box Step Up"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165378/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=86e1d307d5c13c77b7b136817da43794246e1e4132a303cf463b047524f724ab",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Broad Jumps": {
    image: "https://i.vimeocdn.com/video/751516873-d355971c751ec0ef00742b3ff44cd42147ac6ea8c7afd3de07d8575b8947c381-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Broad Jumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Broad Jumps.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759815.sd.mp4?s=647f2b1887c8ab4816147e464216049a13d2a269&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Bulgarian Split Squat": {
    image: "https://i.vimeocdn.com/video/1783131201-95760bc3a85ef452c8e46bcd1937e50882a0fbe7096336ce8e4f7c8963c6faed-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Bulgarian Split Squat"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165460/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=eb94af0ccaa360e773d328bf79b8f1b9e8887229b8a2ca59940696f99c3f20b1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Burpee (Advanced)": {
    image: "https://i.vimeocdn.com/video/751518116-7c57266d4680f7e11363eb7a2b257a99b855ae334af7bdbc7966e09b45bb383b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Burpee (Advanced)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Burpee (Advanced).", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197212094.sd.mp4?s=77be860c3215ea2ca570cedd6fa69b1167ae67a9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Burpee (No Jumping)": {
    image: "https://i.vimeocdn.com/video/1698396255-a872ce4d86d1e13ace0c9481bf2cb331144be86fb642d2898f372f83ce475c66-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Burpee (No Jumping) "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Burpee (No Jumping).", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733611/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=dbaab20a420fb11b4ae7d607187d613e0ae592178945a6d4dc3af7db801f8e0d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Burpee (No Push Up)": {
    image: "https://i.vimeocdn.com/video/1266936379-48982fbfc18e74feb85914745e0307a97803a1b3a64cad357_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Burpee (No Push Up)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Full Body and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/624649632.sd.mp4?s=6253a7d1507e283d53d6ec3e2fd226a3ffe69f97&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Butterflies": {
    image: "https://i.vimeocdn.com/video/793797914-ce94b0d07a1be65ca47ad886aa0e97a0c6acfe3d0508a5676b173a6b681b1264-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Butterflies"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Butterflies.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344892.sd.mp4?s=fa2478c5151d63a48453b9e5558dc39366f70699&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Butt Kicks": {
    image: "https://i.vimeocdn.com/video/1698395948-64f3320edf53086190b526df52d006d261317ba55eeb35d1902633c66d77c4af-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Butt Kicks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Butt Kicks.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733351/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1e92957fe01b5bb6bea99a205ca72ad18c769b840012961658e114f18107e82e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises": {
    image: "https://i.vimeocdn.com/video/1783130765-2676e52cca0891ba5991ee41015bef722536a6f1bcaf014bf3c4e84d078e07f3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165533/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=52cfd78cf864f8424d7fd3fd1383ace888dac23a7fd286e3f0a9e8bfaaea218e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Calf Raises + Reverse Calf Raises": {
    image: "https://i.vimeocdn.com/video/1032187155-3abb905499632ad8e8142d456e981483269e332569d11a4619bead824462f955-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Calf Raises + Reverse Calf Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/498790381.sd.mp4?s=55517a763ab3856427d489cdd1ea8d40c3f59a62&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chair Crunches": {
    image: "https://i.vimeocdn.com/video/1106502696-e4ac651ab8f61ce740d2aea677157ff7b1af05bfdcbcbb4cb1d06507737d377d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chair Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/534557372.sd.mp4?s=38acec79a96ef675f72218e51e5f219774959995&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chair Sit Ups": {
    image: "https://i.vimeocdn.com/video/1803097632-9663fb1f546c928c07cfd84f2a049f32401633f23df92677c1906c81eab10a5a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chair Sit Ups"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/915817740/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8bcf4e7d9796f72eefcbcf97bb11ed991d4ca14e7feaa580c5e2287370d4ca14",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Up Grip Headbangers": {
    image: "https://i.vimeocdn.com/video/751983212-bff3be5c8299c3f8a42ac50388b5db2278de720a435c9abeb3d1f2f281b3fdf5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Up Grip Headbangers"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759790.sd.mp4?s=8af87f9eaa317286328f0840c4d0195fd2345ddf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Up Grip Shrugs": {
    image: "https://i.vimeocdn.com/video/751983341-6705502317fe0656e890261a72d8bd29c978044153698f37e872801bfc89487b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Up Grip Shrugs"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197212195.sd.mp4?s=3cfce7fa82901d0255a612dcadec3843c9aa5d76&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Up Hold": {
    image: "https://i.vimeocdn.com/video/751983611-71c889304a47784ab35ae133c957577f54e1b7e3bbcff36aa789cd9e83423c87-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Up Hold"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/208219806.sd.mp4?s=9d09ffe9eb0d2abba6a8e6aa365c434c3a730006&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups": {
    image: "https://i.vimeocdn.com/video/754824024-eb8eb577c59a2a42caf3c7c8186d5aa5ff82b94ce55d31820fade7bcaf96fddb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/185543842.sd.mp4?s=577d14fae4cc71996d6032468faaa6d4a5a2998c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups (Close Grip)": {
    image: "https://i.vimeocdn.com/video/751984035-47c2fc902f05c0409c70d6de5b954c2fa2a2dd459dcbd8f7c522594bcd377501-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups (Close Grip)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/185543841.sd.mp4?s=c721a0b49de10d9e5ffb1050bbece5b58c06e755&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups (Wide Grip)": {
    image: "https://i.vimeocdn.com/video/752287228-d4280b35035d4b4f294454aaeddfefe11c893be7b0b95db34d8730d33df902d4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups (Wide Grip)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311472862.sd.mp4?s=e2ddb9d6ca9d3061e24644f641ad4d94d10d4326&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Chin Ups (Wide + Shoulder + Close Grip + Hold)": {
    image: "https://i.vimeocdn.com/video/756068726-03aeaf9e1e2ec28f73605c609f518695ab179ec71f7f2db292ec4a3d53a564b8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Chin Ups (Wide + Shoulder + Close Grip + Hold)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314501194.sd.mp4?s=d9d8d3696443417bc51d412c0b0aae923948ac37&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Circle Push Ups": {
    image: "https://i.vimeocdn.com/video/1779377990-ac2c6b6241be9b46c8d692ec0909f7f3b33a810848b1b11d84d8f9155624041a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Circle Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900810674/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=142919be1f20d11324262affc711b1b9bb130adf6c62ce4db90ed4cdfbf9ce67",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Clapping Push Ups": {
    image: "https://i.vimeocdn.com/video/1102377832-31e38ba1ce23f409c2605a6c1bb2609e199a1739672672962801d6073e9104c1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Clapping Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/532647837.sd.mp4?s=f6ac508a17b5422c0014f669f3b356d2109b31e9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Close Tricep Extension": {
    image: "https://i.vimeocdn.com/video/751985437-9664421ea136de53a848038910c9019563f61c5a6eaf996fb214557ee527703c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Close Tricep Extension"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760797.sd.mp4?s=1181076040d1718aee593840c72df0f00bc0912f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Commando Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1984132214-2e040fcebdb3dba0d53893bb46db02a6bc9362af6ad636a3560545612564dca9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Commando Australian Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052078/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7285834bbc9130886d4fb6b1a5f863bd503e8763aac6937366247599a1aa57ac&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Commando Pull Up": {
    image: "https://i.vimeocdn.com/video/754827387-a3c0127595fb30d45bb181f6b5546582a75030fe853dd05d0a708e176a885261-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Commando Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760872.sd.mp4?s=08708d2f26ef239dbecf70a7550793ba976ae93f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Commando Pull Up (One Arm Negative)": {
    image: "https://i.vimeocdn.com/video/751986608-8fd962cbfe803ff012b18844b8eca6087824ede9d7de053373e4865338822faf-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Commando Pull Up (One Arm Negative)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760871.sd.mp4?s=42eda1996384a16373d9ab7a0aaea3b847a07f20&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Corner Raises (Dip Bar)": {
    image: "https://i.vimeocdn.com/video/754875087-5c079cd99b0cf6b14ed896c3ec9043a6ee9fc6ebed1544212100bf648b28faee-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Corner Raises (Dip Bar)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760865.sd.mp4?s=dfe11572cf8ba1f650220dc67df67dd93c9a66c8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crab Toe Touches": {
    image: "https://i.vimeocdn.com/video/793797307-9f065489eb5a2487739b265dbd3d67e4594ff773e34e1096f8e81dff3b97c2c1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crab Toe Touches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344488.sd.mp4?s=d6c104525503221cab117780eb5bbeecbb569dff&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crab Walks": {
    image: "https://i.vimeocdn.com/video/751987226-e669a67f73d80d1ce755aff27aa798ad84524a64e10b68acc124cb17c5f21a66-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crab Walks"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759813.sd.mp4?s=0a5727baa4652fc6fd9725e1ba800475b9d7eda9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Cross Tricep Extensions": {
    image: "https://i.vimeocdn.com/video/781384063-7c8bc2e2a384fb1733a2c187ebb9b6a436de5ff5687375c4e59120db1ddc8755-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Cross Tricep Extensions"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/334949348.sd.mp4?s=3f8120a3a3411e42398a41396eed3f8ec08bcc01&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crucifix": {
    image: "https://i.vimeocdn.com/video/1698410120-f067c8d17b9789e422d35b7e6deaa2740db65237ac6135d98d7d2d69c3b42458-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crucifix"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Crucifix.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845742556/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ab25397091accaa41d36340a31985046c7cf74ffec407510268648c7543481ab",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Crunch Reach Throughs": {
    image: "https://i.vimeocdn.com/video/1803097564-97d0efd7d08c2832fa60a11a843ff6ecbbbe210e67f5ea667b677019d3fcf1d6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Crunch Reach Throughs"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/915817704/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=104532c7269708f6dc81220e9a3cae89ac574bba1ce7820aff63d7180bc49e95",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Curtsy Lunges": {
    image: "https://i.vimeocdn.com/video/1783130515-3195bb8ab22e414dc22c881464b16af6ff92941c5dc1de4b394dd422b4af06bc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Curtsy Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165596/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4122ad9f12890e6a5fa3ce3972d032769afdf735c078d70c82437ffbca0b8ef2",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Decline Push Up": {
    image: "https://i.vimeocdn.com/video/1818136980-122ac8c92d809abf614366cf863f0783d4b6aea1e5a5226732d70c29936a91cc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Decline Push Up"}]
    },
    techniquePoints: ["Elevate your feet on a bench or platform, placing hands slightly wider than shoulder-width on the floor.", "Maintain a rigid plank from head to heels, engaging core and glutes to protect your lower back.", "Lower your upper chest toward the floor and press up explosively through your anterior deltoids and upper pecs."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/924881429/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=10bdf782a5cf958fbdb07c5f9162db9987f90666cdbd6584f8ca63f9fa9ab3b8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deep Push Ups": {
    image: "https://i.vimeocdn.com/video/1932632502-23297b9868e14af577dfab9be7b39d6048d813765459638d80144e9fb492db56-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deep Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1014547434/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f33b908c20d8d8db4e654935a15d341b1b08f8cb0c873c808060f9a7ae4bbd8c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Deficit Pike Push Ups": {
    image: "https://i.vimeocdn.com/video/1205765519-d78b5b7fba7b9af2a0221b89486621f5de39392691167fa998ed80748c720211-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Deficit Pike Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Anterior Deltoid and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/582592293.sd.mp4?s=f9beb45f80c0cc15db02d50a5117addeaa10f9c0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push Up Low Hold": {
    image: "https://i.vimeocdn.com/video/1804831945-7c76baa0c3a46c010314bcce952c861791eaee6fbaa7c883140dd34a71451a91-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push Up Low Hold"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833209/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5bd51bfe232380141b5c3b2180ccb9c2557fe15000b7d7c83011458bdae3279d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push Ups": {
    image: "https://i.vimeocdn.com/video/1804823984-0a9c2ce639597e50ae1d2ef53adfc2e311335756bc47a0859c56f1a884b96e1c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push Ups"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833325/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e97bd167fb1a21f557ca8e783b2b7bafa8d31e30e415f6d7ae57cb605a1dd575",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push Ups Feet Raised": {
    image: "https://i.vimeocdn.com/video/1027337221-c63d3fbc5a5c692e6162a931612ea1923e6f9bfa6a8c0176223eecc1ef6e8604-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push Ups Feet Raised"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453396.sd.mp4?s=c8009e0ffe748a435b39b78a924c5963ed78bbe5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Push Up Top Hold": {
    image: "https://i.vimeocdn.com/video/1798739824-1f8ab1c8818f9d713eae79df1cb8aad9a3ec99cc1a4bacfcbcc7e516ded84391-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Push Up Top Hold"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111119/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1d3c05ba1f54d7cb65bbc856e85e9fd045f6f21d763a03bccfaf3a9ce201189c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond to Regular Push Ups": {
    image: "https://i.vimeocdn.com/video/751988103-a97501bb07aa6e8fcbea76d079a8270f0dd84a37308ee69d43c994cd5d62ff89-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond to Regular Push Ups"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760769.sd.mp4?s=573e10655790c61bf64f98f03a40e183a0388010&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond to Regular Push Ups Across": {
    image: "https://i.vimeocdn.com/video/751988370-7eeb40e97265e5433087c4bc71ec33ffde8dd653c69fd9e0bc4628cf9635d99d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond to Regular Push Ups Across"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759793.sd.mp4?s=1064fcbe3f89e36037c98d2ccbc87b030fe2e8d8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Diamond Tricep Extension": {
    image: "https://i.vimeocdn.com/video/1935765604-3dd38f73fa079b8ec3276bd90020e345d0719a28b9187a07eafb587742db619d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Diamond Tricep Extension "}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group, Pectoralis Major.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1017712582/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=407446753b0fb65071936deaf373bf74de5431a5e1eb63902986c057a0a354e1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips": {
    image: "https://i.vimeocdn.com/video/751988970-215f4542dca61f37ff6c4bab2e8134aef080ca259286a86f841a3a8f0eac7de5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760863.sd.mp4?s=840e48c78b495dcede3c44f1ccb8b21d625df93c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips (Chairs)": {
    image: "https://i.vimeocdn.com/video/1445453831-a0180ee9b4a40ab6b83fe3d11c0f2e6e9692416d793b03ffa47a22a2507d1d71-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips (Chairs)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/717338712/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bd6cc053b49789c499694e04b2e3d0ebe1d9960274c4ce747a377666e7a0986a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dips to L-Sit": {
    image: "https://i.vimeocdn.com/video/751989273-01d3de714184c0cc7fdec4307de6f919d7dce0155e32558f84c18e4f87dd59e3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dips to L-Sit"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760830.sd.mp4?s=cf162848610b2241e3945bc226f3061e8a548cd6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Donkey Kicks": {
    image: "https://i.vimeocdn.com/video/1004337669-af163ac99f24d518d594ead6e0416dee01dcc227514bb96f013b71be863c4309-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Donkey Kicks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Donkey Kicks.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/484914507.sd.mp4?s=672fb9dd02b15eb12a29da4a66586b28e68843de&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Downward Dog": {
    image: "https://i.vimeocdn.com/video/923200379-0733dfe58b23a1d077d24fd6676aedcd787e188173266d533c65856268a68381-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Downward Dog"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Downward Dog.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613561.sd.mp4?s=548256a4066687ecb92d5f5bbb2827764c76f584&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dragon Flag Hip Raises": {
    image: "https://i.vimeocdn.com/video/1697401733-56a437998f962fc5f86539d9b8fb84ae1da0a477068d2a6bab7d9d67317e09cb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dragon Flag Hip Raises"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399344/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=bf0df55acfbd5326724e90fe601d36fd1aa412697b724271fc01b5571d789ea7",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dragon Flag Hold": {
    image: "https://i.vimeocdn.com/video/1697401546-dae2034525cfe3783d9b657eda51c0764fc8809776fdf6c384977ffc10594f34-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dragon Flag Hold"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399357/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=823d612a601aa0e6d616aa8dfe4ff9e35e91e6705ddd5f06115240bc08a2cc27",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dragon Flag Negative": {
    image: "https://i.vimeocdn.com/video/1697400909-d19e0063fda8135724a073288b2a538971c96acf4f9dca40f4216bd2a271a3ca-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dragon Flag Negative"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399402/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0c2e5361ff0532e39f22f4db69422ca30ccae7116363d6472486d92c8e651c91",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Dragon Flag Raises": {
    image: "https://i.vimeocdn.com/video/756060950-dccb2b523049b72cf251cad9ca2c9d885576cc6c52b843e8f93fe4a1df510e75-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Dragon Flag Raises"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314494823.sd.mp4?s=fc35c978fbaee79a7f5eb9a131a01a754f1eaaf5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Australian Chin Ups": {
    image: "https://i.vimeocdn.com/video/796472624-89859d2e2ef4241930e1a2721000f485b2a7ab829ef5a6a27d1a55c3d90f52ca-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Australian Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/346424579.sd.mp4?s=8a3d8f4ac66d0e6e1f5e912dbdf58df3c069ac86&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Australian One Arm Pull Up Negative": {
    image: "https://i.vimeocdn.com/video/1439327365-f2afe57b9169d8887cce240fb241d9eeba34c0d7f1ebd9d182fb6bb576140aa6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Australian One Arm Pull Up Negative"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/714070974/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=52e263118c32f1c989c52c4708fcc96992696bb8c37b2020453ca1debb9f9cb7",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/796472652-4b9205a16dd58e3ec861cf5f164c8375eddc9b4227c65a167197ef191c9b92c1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Australian Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/346424607.sd.mp4?s=d38c232128da1ff0b9d01e856dc72f25f2ecb9e9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Bench Dip Lean Hold": {
    image: "https://i.vimeocdn.com/video/1060201355-0feedb213e4649093b5a438e2a028b91ada316caca740d672ff3de5cc3c655d5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Bench Dip Lean Hold"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/512104312.sd.mp4?s=3c4e70d11cca7130910cc943548103ba3b0e7c86&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Bench Dips": {
    image: "https://i.vimeocdn.com/video/751989600-adcd80e94b59c9065628409681fd9f5c1b0602070c97d568ec580e340d8db80b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Bench Dips"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173510834.sd.mp4?s=111bd2f21aeb8d0df6bdd21b34126246b820e3c7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Pike Push Up": {
    image: "https://i.vimeocdn.com/video/751989765-d8d3e3208e8f4a3e87f17f85ff958d29d79ed8e779345c6552ae224f30245aa9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Pike Push Up"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759826.sd.mp4?s=fcb88758f78fe4c5512c7b7ea4ab23542e801375&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Pike Push Ups + Hold": {
    image: "https://i.vimeocdn.com/video/752287722-da0511a80bc822d418edc5004ed8829e2c0491914cb9782b7723ccd4f9c8ad9c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Pike Push Ups + Hold"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311473202.sd.mp4?s=df3a209ca84e69924d29af9e7b20e96b60b54302&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Push Up": {
    image: "https://i.vimeocdn.com/video/2010953746-cc67c1b172b7648c4eecbe63c7dcd197b6d18d4a48158af18f5fc47b9d83827e-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Push Up"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1080386735/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3e9ee9e28cffe9068053ebb63a0e7ae5d9a6124eb253aa22e09750988f824bb0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Push Ups Feet Raised": {
    image: "https://i.vimeocdn.com/video/1027337292-a2368c244013740db154476bb683550b4b0703959e9ea39781f7cb7c76c08ec3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Push Ups Feet Raised"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453446.sd.mp4?s=250d9db7b76cd245c74fdc690189f39026fee545&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond Squeeze": {
    image: "https://i.vimeocdn.com/video/1818135973-2965ac2a09106d24220e6f63c107102fc4134168306e8ced2a753cadf62ca244-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond Squeeze"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Diamond Squeeze.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/924880890/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f3dc7950580eb41d8869e0c0201e834859bbfa23657d1b202bf0135fe88f8d8b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Diamond to Regular Push Ups": {
    image: "https://i.vimeocdn.com/video/943590959-6104241e0c9aa16092975d17370af9b4c6d25d5f1223a8f0a9b7a25cd799cbe3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Diamond to Regular Push Ups"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/449781824.sd.mp4?s=bb19432a6bb9ef330415d64cb19335af994a6b18&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Explosive Push Ups": {
    image: "https://i.vimeocdn.com/video/943591138-1ad4721a16e3f827d37cf3263cf42d6542228b9384857b24fc4bd2b74ef14787-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Explosive Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/449781815.sd.mp4?s=3a4738e393972abc85b5fe2cc3ce3045f3702021&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Hamstring Curl": {
    image: "https://i.vimeocdn.com/video/1783129730-782c31fc613a688d83bc6bc27e03a317b53789c15e8a02d0f4814fb25c0e4a96-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Hamstring Curl"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Hamstring Curl.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165854/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f967ae2b5a15c07713582a07aec10f3488d5e5b8d7e826dd90c3337dc69a1352",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated High Plank to Pike Press": {
    image: "https://i.vimeocdn.com/video/1287294576-ba8ff21e086e30cc55371e827e32f373fe4a3bab8d7318c95_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated High Plank to Pike Press"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/640055094.sd.mp4?s=64cd9a38e4b1eb8d975e19d9ff359b599ae54d72&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated One Arm Push": {
    image: "https://i.vimeocdn.com/video/1696387453-e149e31ba15ea99ed6f47d34ca0f843edf42e500668732fb3d5d34cfbbc89377-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated One Arm Push"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated One Arm Push.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844304239/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=97b10c307d7dcd4f72234e5df7be814c53ade31ccb71f115e718c15e5af4a8e1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Hold": {
    image: "https://i.vimeocdn.com/video/752287691-c10680ee687e34c5f2c8481a20d2b40610afd3cb75705c2ff5fc131507bba700-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Pike Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311473237.sd.mp4?s=2734099ff65ea38dd09c5f366c212573395cfdb3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Press Pumps": {
    image: "https://i.vimeocdn.com/video/781646968-32e974c79931e2fcee8d0ee646f970f1d141cc3cbb7e1e1566f5f5328aea80bb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Press Pumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Pike Press Pumps.", "Execute concentric phase with intent, driving force through your Deltoid Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157266.sd.mp4?s=aea88e8084529c2571dbf751575cdd633fd4a383&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Push Up": {
    image: "https://i.vimeocdn.com/video/751991345-320d66b22402707cd8d27e4f9af548a82d4e7203051462d131f8c4abd0d06871-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760897.sd.mp4?s=1af0d8f6b25ebb5d51cc9262ac9ad36d0cca083e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pike Shoulder Taps": {
    image: "https://i.vimeocdn.com/video/880836604-c2e920696896142947811b70c126266f3c068c03b73ae225f86aec788c65ab89-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pike Shoulder Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Pike Shoulder Taps.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/409523960.sd.mp4?s=31bcf0b2dec76fbeb5498bce0f49b234e8de2db5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Planche Leans - Rings": {
    image: "https://i.vimeocdn.com/video/1705887598-4031aea6636ea3512752b3a5cccc85e7d723e2ccfb7ffe83b021b499f651b276-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Planche Leans - Rings"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851257345/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=124198fedf2df5d57340deb3553a163871f46b55613a8a174293afebd3b116b9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Plank To Pike Press": {
    image: "https://i.vimeocdn.com/video/877496833-9ffa83b0232b3851e2fbec34c3516e0aaa7499754370e1ef019209c009f5fdcc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Plank To Pike Press"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/406944510.sd.mp4?s=133dbce9e29e320ba08279f30925cf2398881f6e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Pseudo Push Ups to Pike Press": {
    image: "https://i.vimeocdn.com/video/1060201424-edba95d01f5f1effdef7c6a910c0c9d8e744c5c4a75afa7a870b97eec94484f9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Pseudo Push Ups to Pike Press"}]
    },
    techniquePoints: ["Turn hands outward or backward and lean your shoulders forward past your wrists.", "Maintain a hollow body position with maximum scapular protraction and posterior pelvic tilt.", "Lower your chest while maintaining the forward lean, then press up to full arm lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/512104335.sd.mp4?s=10ab66d56f2fff509068410164b94c68c780b02a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Reverse Plank Raises": {
    image: "https://i.vimeocdn.com/video/1328411574-d1885cae3c9e186a1f3ada59d2ce1047defe73c8ff0723f57247532abd95c4ab-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Reverse Plank Raises"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/658006035.sd.mp4?s=3c3017c2c940e8b8f145f7f1547b41781b31a8a3&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Shoulder Taps": {
    image: "https://i.vimeocdn.com/video/928963983-edaf86c0b91f8685dcfa9ec10c20405f73e12b1474eb69e9f34ee89d2945f342-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Shoulder Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Shoulder Taps.", "Execute concentric phase with intent, driving force through your Deltoid Group, Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/441078709.sd.mp4?s=e9dcbfb99e9836aa2711e36bc6ee731009ba09e2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Side Squats": {
    image: "https://i.vimeocdn.com/video/1698396390-46339d66c4858a973fba1092d5e30085ac2739134d776597c5ee5c85064ccbed-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Side Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733647/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=cd1944e3e511217b7a51c69053dd384a7148adfb257c9b057cdca9f954d2f0fe",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Single Leg Glute Bridge": {
    image: "https://i.vimeocdn.com/video/804734851-87dcba71d807f4352466d82bea977d89da1a6221700fd4028708e69b39483320-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Single Leg Glute Bridge"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Elevated Single Leg Glute Bridge.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762592.sd.mp4?s=8aa3d2af25eed01e745d1f32250296a57b5d2294&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Single Leg Squats": {
    image: "https://i.vimeocdn.com/video/1106525254-e6256534a2b5614150b7195e7b04657d2f67a0a291860d94c86e3b50fc2b029b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Single Leg Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/534557407.sd.mp4?s=54069e39e373bdc9753479b3f8523c982791fa66&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Wide Pike Push Up": {
    image: "https://i.vimeocdn.com/video/752290371-cc26d1caa7679deaad2103b80136c978702a6414642024b2207193c06d7af1c7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Wide Pike Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311473282.sd.mp4?s=c1576e3f10708fb869fc6bbe08bf838203408934&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Elevated Wide Push Up": {
    image: "https://i.vimeocdn.com/video/752287806-f0b3c6a2a7e0e5e45d8153ccb32ab933e315835e7820236a4d94867260595ec1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Elevated Wide Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311473290.sd.mp4?s=be4c5786d4af392628eaa787d1c1ff42d9ba9177&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1984132244-cc98d2cc4537bd3d14a28b413280d3415eba63b4dce876b7d93fa113e7dbd19e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Australian Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Deltoid Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052120/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d1b64ab40da37b26a2293f74131cb26f25436d672a7add9ab59f385f76a9f55e&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Australian Pull Ups Open & Closed": {
    image: "https://i.vimeocdn.com/video/1984131465-1a7856840c3b2e828a488c019ae45a5bcd2522f11013f10ac08796d413fec430-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Australian Pull Ups Open & Closed"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051471/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=aa1160ca7f0bc09523a6acc721121c80c42dd9ca8ae0e9b16197ea8bf78da5b2&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Chest Tap Push Ups": {
    image: "https://i.vimeocdn.com/video/1967564689-55f07c8edd6a8f268ebbc78964acf40fedfdbfb520ce25a617670e5c5132b533-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Chest Tap Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507506/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2609627c8d82d8e90c2b008066fe3c4c861c8f4071b802d63ac49a7b15e290c9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Chin Ups to One Arm": {
    image: "https://i.vimeocdn.com/video/1232154130-941c32fe3d1a6405a9835faf629b417a64124762cc07e768b18853a3fd2a32b4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Chin Ups to One Arm"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349386.sd.mp4?s=a284eb3800440a63f1e11d81ab4454593ce9f372&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Curtsy Lunges": {
    image: "https://i.vimeocdn.com/video/948879589-43ba11aa0c8cb099a7136d752caf5060f104cab223b481da0199f34f0d35c899-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Curtsy Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/452952220.sd.mp4?s=d65d32714df2c6de7809c49406693259e5c38e66&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Dips": {
    image: "https://i.vimeocdn.com/video/754828760-00ca9612461a8b017cb4542f17ff34d15e78dd64c13615181fb02dceaa948baa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760849.sd.mp4?s=61f4f14b2bbf29891e016aadea78530af211823b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Knee Push Ups": {
    image: "https://i.vimeocdn.com/video/751991704-87e70d5dcc5c1357bd66a6322eb2aa4bf1ad92e969328ba72f2ef2414d765ea7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Knee Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173755267.sd.mp4?s=afe9fa1413de0434e3c2286c4a964d493f01f428&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Leg Raise Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251876-8fce65c0a97b252b1e4474fd2771133268d17245852c2b4ce4bb01093bd5dd01-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Leg Raise Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104075/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=e253699468ae48df0b1ec29718a688bb91cd79c04798d67e21a44c2709d5331f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Lunges": {
    image: "https://i.vimeocdn.com/video/1701637855-e2a0d3463a0ff1459140d0b6c390fdb1ab5060a2dc82e7b8adb8b9b8138f4c23-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847809512/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=951e5a69762512097eb3df3296210877a7b123c2ed7e14d777b970918e4f5986",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Muscle Up": {
    image: "https://i.vimeocdn.com/video/753909731-e14e3c1eac7f0c261edb37667576ab3f6ba04a12eab240a215a738eafdbf4cb9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Muscle Up"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Explosive Muscle Up.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760884.sd.mp4?s=c499273bf43857b5e5252d9ac3f793e8778bd0e8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Negative Pull Ups": {
    image: "https://i.vimeocdn.com/video/965155604-a9ec6fdf4fc79c6c53b31d78cc0fff31c37d61c5c80db2a4d2e7f856c65a8210-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Negative Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/462446792.sd.mp4?s=c69251b087996552ebbf5cfe67e928e1219096e9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Negative Push Ups": {
    image: "https://i.vimeocdn.com/video/1779426241-2c7be893c6490e3374b7d9e84805e7f9bccfe452e81032de5c4c4167226087f7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Negative Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900848376/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e1fb4000326528f2439499f647f756f72346408096ebfb5761a05fb28080cb2b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive One Arm Push Ups": {
    image: "https://i.vimeocdn.com/video/1967564391-487a4bbefbe6f574c2407711cdf8c7f8feee5b7e0c95724da43737b89c1908b2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive One Arm Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507523/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=53f9c0c3ec36ef3297e2f3bc6c8eaffb8b1864f76e219a28c30012da82c07cb6",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Push Ups": {
    image: "https://i.vimeocdn.com/video/1798739588-c39d37f75ddc8db88299f656abde301bba4f0367e2dd458d3dcd1ae58e0101c1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111155/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=319cf714892c48e0151084fcaccec9e9e7c26d78d0df2cec8afbe90e4aaf521d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Push Ups Across": {
    image: "https://i.vimeocdn.com/video/751993326-b9d863c6e57eeb696eee92bd71b1d5f10560283a27f658b0851157a4b2fb7ee3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Push Ups Across"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173755320.sd.mp4?s=7a7b7f16099a54fe58ee9cab4d9b46625ff301b7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Explosive Step Ups": {
    image: "https://i.vimeocdn.com/video/948879482-48c0cebf1a3611067389851ef613bbe281a3fa29e561d58ea9343311265d5abe-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Explosive Step Ups"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/452952201.sd.mp4?s=867930c7895447f2ec8e59793f4f76aaf1b80df8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Face Pulls - Rings": {
    image: "https://i.vimeocdn.com/video/1705887715-d6c0bb73154ed4dedae435dd7e20588a29294098f16385d7818fb2ebbe085ddf-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Face Pulls - Rings"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Face Pulls - Rings.", "Execute concentric phase with intent, driving force through your Deltoid Group, Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851257358/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a9a895430129adc17bb6f5d021b1e149b1c3147777818b1358ee555391658841",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Face Tricep Extentions": {
    image: "https://i.vimeocdn.com/video/863032893-b6920a41122d81d57d811693d136ade211b74982cf9a1798bfbae7c7a335b7be-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Face Tricep Extentions"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/396328452.sd.mp4?s=36883c1a200f5616c99a9b486e9d6a08579e7fb5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "False Grip German Hang": {
    image: "https://i.vimeocdn.com/video/1425552399-8056fcd8e3797ad40d1706c08c2742f53dec5758c2618a332007cfe784d64832-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal False Grip German Hang"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting False Grip German Hang.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/706168423/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=433f21d23658811d7b65438335f6062d8d0c426c94defaa2458368a10bbbf1d1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Fast Foot Shuffle": {
    image: "https://i.vimeocdn.com/video/751993403-261f66a8c7db1dfdde7b69e9110db978f246c7fc0f9f7ae287a6b3485066b90c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Fast Foot Shuffle"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Fast Foot Shuffle.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197297101.sd.mp4?s=4de2491f730c846c73cdc64fec94ea3411a0b370&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Finger Balance Part 1 - Parallettes": {
    image: "https://i.vimeocdn.com/video/785011882-cb939df9065a3d5b903397200671bf5b43e34a530a7a6f90866dd60dad0d0ee7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Finger Balance Part 1 - Parallettes"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Finger Balance Part 1 - Parallettes.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803788.sd.mp4?s=94639f7ac351929cb0dc2ce15681add897238b4b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Finger Balance Part 2 - Parallettes": {
    image: "https://i.vimeocdn.com/video/785011697-3aabd9f945f8ce1706ac75c5d410658d4c92358eb7faa0b93e8fbfaf33b64abb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Finger Balance Part 2 - Parallettes"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Finger Balance Part 2 - Parallettes.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803656.sd.mp4?s=5b9461aa7489cb68b65877c8271d865fa5f350dc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Finger Press - Chair": {
    image: "https://i.vimeocdn.com/video/1804837632-073c39c5ca1067497c34c4173f6a18a66dc75cb8c05f6d9f47840787389f0065-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Forearm Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Finger Press - Chair"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Finger Press - Chair.", "Execute concentric phase with intent, driving force through your Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833459/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=212fd8ada247f3b8bcf618bbd465bc38e987978b80ff05737df36508a2ec6be1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Fingertips Push ups": {
    image: "https://i.vimeocdn.com/video/1935765535-ab902e5095023f1ed498c79bb65b3947efc8591f2375a856f02b7ef26122244f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Fingertips Push ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1017712513/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f9878092eaf7f0f1d12e51ff20743fcb798a5c56b6fb17e81af34ef1d1cc211c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Fire Hydrants": {
    image: "https://i.vimeocdn.com/video/1004337696-c993545c120861c60b185073d65c6f6f09404e9609170029c6b1868553b65eac-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Fire Hydrants"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Fire Hydrants.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/484914538.sd.mp4?s=0c54a4f9ec1b60793bec1717d150e34eb643312f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Flag Bounce": {
    image: "https://i.vimeocdn.com/video/781647170-cd7958173ab6fed4932a7419769cad6337c7ca41ecb6531609b4a9333033335e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Flag Bounce"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Flag Bounce.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Deltoid Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157347.sd.mp4?s=b86a64efcb1e30cbd5aefc11387ce89678f167c4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Flag Bounce + Closed Legs": {
    image: "https://i.vimeocdn.com/video/781646974-aa77c80c4f47827fa23899e40a7864f32667333c1884dfdd74c64b8296eb3e90-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Latissimus Dorsi & Teres Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Flag Bounce + Closed Legs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Flag Bounce + Closed Legs.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Latissimus Dorsi & Teres Major, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157301.sd.mp4?s=2b79f13e91cdca003b5ca66316c7c79d094c8908&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Flag Hold Plank": {
    image: "https://i.vimeocdn.com/video/781647289-a9e0d7bb16246f2b2490b7e14904a3e84fb423ae095ce77c48b9325fcb20eec1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Flag Hold Plank"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157411.sd.mp4?s=11941ff9562342c69b02fd48da9d26eb4b5a7737&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Floor Dips": {
    image: "https://i.vimeocdn.com/video/793798359-564f113716e83260fabaf66bdeb66b4d3750ba224f71972df4622579928adec2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Floor Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344345344.sd.mp4?s=46654816e8ebca51504a2077bf10ff224f32dce3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Flutter Kicks": {
    image: "https://i.vimeocdn.com/video/777877361-a7e54b9a789b95ae4737b48e4a525c5e746ebf18f58675cef6c69d62c62c8d7b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Flutter Kicks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Flutter Kicks.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/332228935.sd.mp4?s=9d5d6b40c0b21f904bb1e79d90a0fb5cbc3e5911&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Fly Push Ups": {
    image: "https://i.vimeocdn.com/video/1013949562-13615fcc51ad94429f5dd1d37445b70c81867eb2bc1fb3dc3da78d0f49065bba-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Biceps Brachii", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Fly Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Biceps Brachii, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/490174560.sd.mp4?s=3896f8b1a19942f12624ba41c9129b3e4f76d5b7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Frog Squats": {
    image: "https://i.vimeocdn.com/video/1220026860-32173cd2731afbdef1fd49653363da3d9553933b55f1a4abd6d08528a7789452-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Frog Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Hamstring Group, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/589966418.sd.mp4?s=b1fc64a86b5f77f7ce5b0738345cbf6ba1a9e85f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Front Lever Hold": {
    image: "https://i.vimeocdn.com/video/2020306044-093195757caa9fad092001c61b078a10ff890cd9b560de3bec23ed24707316e3-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Front Lever Hold"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088150460/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1fd14bece09e6b60ffc64c60f2d03233c7100b322d0e93b1c150c44bd90a9f02",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Front Lever Raises": {
    image: "https://i.vimeocdn.com/video/752290477-c529ef776b872c3a83e128150a68fa9d5fd01ac1615d41de1e246bfbaaf5c918-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Front Lever Raises"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475497.sd.mp4?s=97dc68a98168908e21a0fcf001895fda95f5dda8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Hold (Parallettes)": {
    image: "https://i.vimeocdn.com/video/751993947-02d9100e72fe23555ec3af81a3291fa1a6970564c1498f2e8b7052ff9bc6d8d1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Trapezius & Rhomboids", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Hold (Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492037.sd.mp4?s=13e71061acfbd88a5dcdf775efcd5f87e26d1b32&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Lean Hold (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/751994017-bd97dd2fd32394fbccdffbca00efc06490e22aaffc8e232362afcd57fdfc16f8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Lean Hold (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492114.sd.mp4?s=bcba3b6fa350c26fc550db84e60fd23ec25d33a4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Press to Handstand": {
    image: "https://i.vimeocdn.com/video/1702211174-ac859a098ffed10550648981389a62eda77e4b5f9af7c6d74e5780b43a6ba3ad-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Press to Handstand"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/848521042/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9bd56ff3d869d54b36ff836d82fb4b598b0d6178c153a6324773267c18d730ab",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Full Planche Pumps - on Dip Bars": {
    image: "https://i.vimeocdn.com/video/616542687-75fbf1a1a11f973f5ee8fbfb0184d086a34bc72d82865806784429a403780e1f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Full Planche Pumps - on Dip Bars"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492269.sd.mp4?s=f0759c7d9953dabd8eb46b1601fc5d3eb992fde9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Good Mornings": {
    image: "https://i.vimeocdn.com/video/1783130005-b16a610e35672bd86b6ac26aa8c87c8396930e1271f15d979a6139dd6a19b710-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Erector Spinae", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Good Mornings"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165775/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5b4a5f4d2d74dc9a017f4a49bf637e88d8ded08f9f237158d9b0f9ca46d5041d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Australian Chin Ups (Bottom Half)": {
    image: "https://i.vimeocdn.com/video/1984132138-56cf2fb0ab723aa124ff893e05445ca649656e21d153c6ee040d0a505cb9fd38-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Australian Chin Ups (Bottom Half)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052021/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c522c680bc294f96f93948fda85728fcbe2e7b18daa5a2126c9f966c20cead93&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Australian Pull ups (Bottom Half)": {
    image: "https://i.vimeocdn.com/video/1984132184-49f159f302aec83cddf0ab91de1f68d4c0bbdd4956a6d24f7e9f0712bb8c90f1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Australian Pull ups (Bottom Half)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052047/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c85d6da898b0188bed746f9591f84f468a50247b37b571c4b06889c79abe7afb&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Australian Pull up (Top Half)": {
    image: "https://i.vimeocdn.com/video/1984133547-1bf717086e5bf7e0dd6041219afef85aa30097003a9f5e746394076f3fda70dc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Australian Pull up (Top Half)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058053179/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b8477280d153e56faf656de708300e735c1a8161ccdac0a9dd5447b866583a74&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Burpees": {
    image: "https://i.vimeocdn.com/video/751994507-9728d6fddaae7795dc62609b2d2153c5f6170c4fe52dbac2048ecb8cb7c4cbe0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Burpees"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Half Burpees.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173755331.sd.mp4?s=a5778edbe812888f79492ab6126fbeff781776ff&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Impossible Dips": {
    image: "https://i.vimeocdn.com/video/1143362342-9b514904a24d7677ddc621dfaabf2f4234c120e47570f573b6479b20667fb56c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Impossible Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/553404398.sd.mp4?s=0365539d81d9cfc2a9d5fe9fbce6beff78a54684&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Lay Dragon Flag Negative": {
    image: "https://i.vimeocdn.com/video/1696515755-7b575bc231cbe87f13e7541a2b6a2a073b18453dd70bb89fe2846b7272a91e11-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Lay Dragon Flag Negative"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399316/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=847f69fe329262abb39d065ffeefd068f0ae854c2fa2763ce80d6e2c3f019e03",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Lay Front Lever  Hold": {
    image: "https://i.vimeocdn.com/video/2020015955-ea07fd4ee5dd5a4d6b0451aed2e1b14b4137e30f80530266506a8f4b147cc912-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae", "Posterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Lay Front Lever  Hold"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906153/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=da3e3cbf86b62f9e4b8e7ec6c1802ec6d43c1dd1093bdbfd014a971864be63a3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Lay Front Lever Pull-Ups": {
    image: "https://i.vimeocdn.com/video/2020015872-65a32195d37ff2ccc0a3b36ac0b8787ac04d29de93b124eb9bf5d3e988313e51-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Lay Front Lever Pull-Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Biceps Brachii, Erector Spinae.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906097/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=20a6293d1d56ae72eac8999ec7f34a4cef89dcf100e0f485c8c185fe5c90caaa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Lay Front Lever Raises": {
    image: "https://i.vimeocdn.com/video/2020016147-4142792bf50e75560ab469ef5b0cdc2a9cb46847cfb8859ab7d45f459b21b71b-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Lay Front Lever Raises"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906264/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=983900d6de539af4972393e01888899805e79f5807e86035d12578c8128e0e22",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Pull Up (Bottom Half)": {
    image: "https://i.vimeocdn.com/video/1304596917-90e6a297294f1a62dff5b9faaff5568be2b019e42f0ca5a7d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Pull Up (Bottom Half)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/647830189.sd.mp4?s=2f7673d943915aa6b5e76471b9d9490790133b17&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Half Pull Ups (Top Half)": {
    image: "https://i.vimeocdn.com/video/1304596631-e8b990b7eb4e1a6ffc8a7626ceb0597cfce95ae523faa5701_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Half Pull Ups (Top Half)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/647830211.sd.mp4?s=4c7c4389d44dbf89e6cdbdb2061ffb38c3b53e15&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hamstring Bridge": {
    image: "https://i.vimeocdn.com/video/804735064-f283f7d04a28d917fd0fadfd774506595dbe139d6f5af8dcece59119c05b71c0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hamstring Bridge"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hamstring Bridge.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762758.sd.mp4?s=6cb0fc7ac364cffbf9f19fefeed6a2437013d447&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand 90 Degree Push Up": {
    image: "https://i.vimeocdn.com/video/752290523-45da214f82695785d7489126fa608c19ef08d5f99dd73ba93b1316bd85bdb35a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand 90 Degree Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475553.sd.mp4?s=ba89ab88bf63232aa82fcd80565e435d3be3ef47&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Dismount": {
    image: "https://i.vimeocdn.com/video/782616727-375d4a29657c888bb53ea4b2985aedd25dc80a47a2d4075c7eb1a4667f25971d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Dismount"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Dismount.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915139.sd.mp4?s=855a6194f19a495b525c506c7b67acb5e0963892&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Dismount on Parallettes": {
    image: "https://i.vimeocdn.com/video/785011544-182216bb5ab2eb1abc011ca56feb70acacefa1f6a8c6764909a1ac1f7e930033-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Dismount on Parallettes"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Dismount on Parallettes.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803521.sd.mp4?s=bd5ddc92532171d6752ae020bb88621f1cf23528&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Finger Balance": {
    image: "https://i.vimeocdn.com/video/782616804-5b450680dc35a55df9cc393a1132cb682a9165e0bbc51de52ea4d079b9c2b799-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Finger Balance"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Finger Balance.", "Execute concentric phase with intent, driving force through your Deltoid Group, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915179.sd.mp4?s=4c4dd033e0b1198f8900e9f253c221cb0fa0100f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Finger Press": {
    image: "https://i.vimeocdn.com/video/782616942-e9bf999bf3229ff552571accc5f09dc2f3387266bccea92c2fe4547116feb83f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Finger Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Finger Press.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915245.sd.mp4?s=b6e829602121cb52f4735eceff003fbb69e22aa8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Hold": {
    image: "https://i.vimeocdn.com/video/789995208-09b8f0d91349a0eda81a74dd5b4acbec7c46f76d1fc447bc00995b6f62eb51ec-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173755323.sd.mp4?s=7701fcc5eba5754a5846aad05dd395205999b209&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Hold Against the Wall": {
    image: "https://i.vimeocdn.com/video/751995900-d855baf30a9d4c850f767462f09f19f34a864bb74e30569aab0cc2a6b0008d4a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Hold Against the Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Hold Against the Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759797.sd.mp4?s=4a6810f92602319eb99c0d5b831ca167c423691d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Hold Facing the Wall": {
    image: "https://i.vimeocdn.com/video/1497195208-efa11d9c0529d27ff236a893949403ebe459f777ee0525b5bdde852814cd6404-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Hold Facing the Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Hold Facing the Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/744215527/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0078233aa9b595f3323f339e3e600aafe8959f28cdf26b9ad7a558e2811501c5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Kick Ups": {
    image: "https://i.vimeocdn.com/video/751996451-633277fa17ab2f17d466200ca8de2f4c923f733f22fd0de9c2949b6984dab0fa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Kick Ups"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Kick Ups.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759800.sd.mp4?s=82df71324d8f23dc7e8b69c1c7d729e35a6865d8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Kick Ups (Parallettes)": {
    image: "https://i.vimeocdn.com/video/785041569-d5582b67d9d5a98b8ce42c6d3ab868efd220b4f0e76784061235c587212480c3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Kick Ups (Parallettes)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Kick Ups (Parallettes).", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337823658.sd.mp4?s=c0084e76918322de4c0a4a2022fe4b19bf1d87a8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Negative Push Up (Against the Wall)": {
    image: "https://i.vimeocdn.com/video/752290557-6eb005899c18db26519b61b0fc0e368b7ee7fb8277aea8798a38f672a0dbe9fa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Negative Push Up (Against the Wall)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475606.sd.mp4?s=a14e202bf4ecaa03f24b1353447e3426af0077dc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Off the Wall": {
    image: "https://i.vimeocdn.com/video/752290666-1b6bccae6ae511afac92f51cb903de444d58ad34680c249fa97ffa71f46e9627-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Off the Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Off the Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475656.sd.mp4?s=94d697cd58da80f7207d522cce1212a1fe952076&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press": {
    image: "https://i.vimeocdn.com/video/1690423419-8a69f72103cfe4ad70d3180cdd5eeff06aeb167cd32125e944e540177e553b54-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/840426311/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c5f6a2ae90b6205db393f5955e2dbef5354c335e55736486b1adc139a2651a40",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press Against the Wall": {
    image: "https://i.vimeocdn.com/video/1690423514-140a348f6eb5f813343295772d78a9cf3a76c44b6901d71c388ca7b18eba846b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press Against the Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press Against the Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/840426181/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=01fa75124c829dca589f640250618e85123df09927d5fc07344e0b2a3cdb2778",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press Against Wall": {
    image: "https://i.vimeocdn.com/video/1690423514-140a348f6eb5f813343295772d78a9cf3a76c44b6901d71c388ca7b18eba846b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press Against Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press Against Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/840426181/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=01fa75124c829dca589f640250618e85123df09927d5fc07344e0b2a3cdb2778",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press Negative": {
    image: "https://i.vimeocdn.com/video/751996998-34005738bf6c42bd232816ffe1b5ecaeedbd4d8fb1f301b605b6f130d0b26279-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press Negative"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press Negative.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759791.sd.mp4?s=3da1288848412ba05e9ad556662ceec95cf7f5bf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press Negative (Against the Wall)": {
    image: "https://i.vimeocdn.com/video/1360664283-e025a59a6e72d1e88e0fac1fb360769f01bc675064af52558ad0254c351c97bb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press Negative (Against the Wall)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press Negative (Against the Wall).", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/671571878/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=475f44a2e369e66bfcca43a0088750377c4671da90b5ff6a075557f3bac29d43",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Press Pumps": {
    image: "https://i.vimeocdn.com/video/1360660987-3ec6580b68089f7d1f214f8b737081cfa44116b42a8f825444c41077ee01a0b3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Press Pumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Press Pumps.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/671570951/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=508a6690ae219d207f6c218313757dcee087e2ddaa17edcd90e5327ba63af65c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Pumps Against Wall": {
    image: "https://i.vimeocdn.com/video/1360661050-a53e2f17e27c58782ed5044bda7043fd1d0e0a659a9540d9e1bbd8439dab0d02-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Pumps Against Wall"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Pumps Against Wall.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/671570968/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=4d60f3b5331cc1d79f8e7b394d622a7c0bd7dc5b7919d08bd6a7e4d235761e0b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Up (Facing the Wall)": {
    image: "https://i.vimeocdn.com/video/752290686-e42d71f127aba6d1b6b3944e1026f17189e5abb3293bd597c3a842845d09effa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Up (Facing the Wall)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475710.sd.mp4?s=19d67e8e7f3da62b7b21cf3caeb1942c1e82c181&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Up Hold": {
    image: "https://i.vimeocdn.com/video/847694944-99da22970d81e2212499f776987fea96a40cc4530cfabc15a1a48a6545136ef4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Up Hold"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/385539438.sd.mp4?s=687653f130539aabfb1e5d13d2a6284202f04907&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups": {
    image: "https://i.vimeocdn.com/video/790561707-5c43203ab3664be1637af2d6f86ce76e1ea3dcac0c41792a14f866547495a1dd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/341841166.sd.mp4?s=af8e8f93d464a762ccc8b65d408ef61b7ba6d3b0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups (Against the Wall)": {
    image: "https://i.vimeocdn.com/video/1705887645-69c3bb9d2ef3a2bca26f53465c9606364bcfcf575394d3426d58eeab4ca0cf70-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups (Against the Wall)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851257332/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=54d98d71d987072ff48311604f3006ce977f45b3375006b1890943fc90190637",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups (Facing The Wall)": {
    image: "https://i.vimeocdn.com/video/1205765883-4d6b123fddfe3f3644c5aa739e8fb1f5e49ead8921cffda639cac891756de432-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups (Facing The Wall)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/582592323.sd.mp4?s=37b5abbfb2d8c4acbbe03263124f02755ac2c152&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Push Ups (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/751997457-66c491471c4a5ffbfa82c705e89596f07c7570eaa308df00320a29e4d17fa250-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Push Ups (On Parallettes)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759795.sd.mp4?s=65a9b8b0ea4d6d462030e71e69738ea40a756b34&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand Shoulder Tap": {
    image: "https://i.vimeocdn.com/video/751997903-02a2c20ac8479fc816062e4b3bae9fe1e9f4bc08fe78920404fb7b468c7c9f80-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand Shoulder Tap"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Handstand Shoulder Tap.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759792.sd.mp4?s=c19bda1288fd3b0e7c39e85ea47f257dbdae0fe5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Handstand to Full Planche": {
    image: "https://i.vimeocdn.com/video/1415647787-d82371f6e36b806142a7ed5075919ee867c2c9863cd22fbfaf2caa1a5bbb9cc5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Handstand to Full Planche"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/700278183/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=0e0509111b5a216d19c588722a6b28e04cb3df167c3a50613731fbc9fb9c72d6",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hand Walks": {
    image: "https://i.vimeocdn.com/video/804734840-dd0f47d91ce953a35892fb96b551feecd7b861a686fe3ac26a3d70080e07bffe-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hand Walks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hand Walks.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762632.sd.mp4?s=0eaf68d76c84cf4be17876c97002f15fa3af15fb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging 90 Degree Chin Up Hold": {
    image: "https://i.vimeocdn.com/video/1995003031-dfb4b89c037ba25f4041bd7ff9953d7796b354d47656b593f3dc5e16d7f5ca53-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging 90 Degree Chin Up Hold"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147537/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6d81064c52bbb00bd6aba23bd7f606c8797fd665281d2d9867b14c5c3c22a6eb&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging 90 Degree Pull Up Hold": {
    image: "https://i.vimeocdn.com/video/1995003076-afa4c7cde5abe7f20c6c6f305894e3cb365706dfe5684a9c1174cc9613201ace-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging 90 Degree Pull Up Hold"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147592/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f3f27accedfe23d2141d0d9f93c33384a295d5a46fbba8b5d9f3fde743017e48&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Assisted One Arm Hold": {
    image: "https://i.vimeocdn.com/video/1995002880-96f912333e16c493789719883113819c3269b7ef3d694df79c14f5d5c97a3908-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Assisted One Arm Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Assisted One Arm Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147407/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1ad558a85040e0c4b5f806255840dd27ad4a5891f5a1c6f45a301daa4c9f6797&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Bar Crunches": {
    image: "https://i.vimeocdn.com/video/1699239405-757178986284c570e3586faca144ead385cb7cd3389a2bc2f81ec0fd2e82796b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Bar Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343437/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=fa869696c7fd21c1fa21c7eb25ddf9f0a3377783dc42e3ca9aad42b0ba7e7a08",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Bent Arm Leg Raises": {
    image: "https://i.vimeocdn.com/video/1705046747-2a0db8630c51fd78a35580b10c7771b4e1a793e5c523c5ba5e72d2cb9de5cba7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Bent Arm Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/850130757/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1805c177df448c37ccc4cdb986dff4cfe6d4c6e4a4192d61a843bcb994e49b0b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Bicycles": {
    image: "https://i.vimeocdn.com/video/1709394304-76ee6e2a229d0cd54ffb7da8702e9e0804209f22edf02b07f6d28e88bf457cdc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Bicycles"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Bicycles.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853676520/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5cdfaa1202a682654649f851b998673a4ab7883f461057f3aeec57b5497b0fbd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Corner Raises": {
    image: "https://i.vimeocdn.com/video/1699237327-f96b6ea7fe5b73155567dd717fb22b60d31380a6ac363339dab2591ca8986174-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Corner Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343462/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d66fdbce38f2fd64f7b0dcacc15af603fca3e626dfa4deac6cb26430865860b8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging High Knee Hold": {
    image: "https://i.vimeocdn.com/video/1418538261-b659c5aaf2b106a07be2a26925ffb4f53868736e1c933823d20116bd096b02b6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging High Knee Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging High Knee Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Rectus Abdominis, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702065404/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=8714a7bf04877172d3a6231e36ffb3a6238f7b934410031fae886e8b18aa130a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging High Knee Raises": {
    image: "https://i.vimeocdn.com/video/2025965942-18ce4479380240cdf9dfb61dc87dbc4336fb833fa4ef91ed9011976ce22d2cf4-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging High Knee Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853008794/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=da39cd40af4d9d05c8ecd58b2ddb712947e06b617ddc4a8dd1dd2d486b471b1c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Knee Raises": {
    image: "https://i.vimeocdn.com/video/1699330352-1c1d05453e03170f902ecfd3d11f29952b1a891ff15ca95ad23a01ff7c6d4169-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Knee Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343491/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=91e32d244a05ddec39811e0e6f5102f532a9dcb4a402f9d0ffa1fe45a5ac4872",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Leg Flutters": {
    image: "https://i.vimeocdn.com/video/1709393270-3687ccd5fd34df9aa1cc8f843dbe82d3ed0b2ad24634dd30c78f8205d78ef9c2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Leg Flutters"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Leg Flutters.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853676589/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d7f9d87a6c2d95d31d14df4a1c2e2a9996d21161964c5773efb05a9db24e874b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Leg Raises": {
    image: "https://i.vimeocdn.com/video/1699260325-46e5ccf8c0cbfb4753c1848ed69bb937300067ef8f72e84e9caf4f2f5c1b339a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343508/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e9f698f1806e9b6a5fccaea83560737eef5f0f8a0e148d7e0cb3c4b00f9e97b4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging L-Sit Hold": {
    image: "https://i.vimeocdn.com/video/1708372571-25b980f310451947391dd2b33e3174fc9201ab100dffd52dbe9fe013e8bea3cb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging L-Sit Hold"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853008746/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b22363f7903f537149b6df1804d145508faee7f5619b13f151b392d20742b009",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging L-Sit Kicks": {
    image: "https://i.vimeocdn.com/video/2025955222-297b79f97e7eeb7ed0fdb0d445d6bc4faae2c2c1536c26695c8db4908b973390-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging L-Sit Kicks"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/311475890/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=344d3fd6c372efefb4b02f0bceece76411940b8a6fb036e80498dea85c7b2335",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging L-Sit Open & Close": {
    image: "https://i.vimeocdn.com/video/752290966-977794a56d954b954e5bb2e00a8b9ffa92f70d712cccdd7a27675fce48ade89c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging L-Sit Open & Close"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311475931.sd.mp4?s=80c9629b0bed75042f337d2319f04d2480b2f34e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging L-Sit Scapula Retractions": {
    image: "https://i.vimeocdn.com/video/2020016286-a949e1434be6f829b5694467d2a1f7a53ce164d1467bdefe3b97abac0452231c-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging L-Sit Scapula Retractions"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906384/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=fa7225db94ddab76cc78d4e1935dddd8f33ff592d3a1bc734bf2c8dfc8589d31",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging One Arm Assisted Shrugs": {
    image: "https://i.vimeocdn.com/video/1995003000-925aecbe6d50859cd63bbc61173cb0f6dd02f6a86b2f7a820d71fdcd143a0695-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging One Arm Assisted Shrugs"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147476/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=03f99914c9687308900ddcc5f481f9de6ab2bf0cd8517b7be5fdcdebd07ee266&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging On The Bar": {
    image: "https://i.vimeocdn.com/video/1995003123-4e0b493b24ad46f02bb24e9bd1641bc058e426ad2dd4c322021f7f4e66687777-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging On The Bar"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging On The Bar.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147637/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e37e5689f5410518eee532f8ed64d39b6f18aa9ef50996c5d026ee31e5da2f44&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging on the bar chin up grip": {
    image: "https://i.vimeocdn.com/video/1994999086-9a3179e970ff28279f09485e54f82ce3c4425f96a7a25eb86a49216c03485f03-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Latissimus Dorsi & Teres Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging on the bar chin up grip"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067144348/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0c5727324c303f40c550adbb270d0c7a910df455f6fd3782ff4c6011795a8d13&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging On The Bar One Arm": {
    image: "https://i.vimeocdn.com/video/752302352-01894f3d4fd206f07c74f5ccf9d9920eca10d19ac1d2665186ec1e42953d2bce-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging On The Bar One Arm"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging On The Bar One Arm.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311484930.sd.mp4?s=430c9cfd4b88c4b8cbbf6b36d82a378998f81596&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Scapula Retraction + Depression": {
    image: "https://i.vimeocdn.com/video/2021567318-2facddb1a83f50bc1e5ce7712d6a505f1ec2ea43b302b00ca2e04b3b1affe845-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Scapula Retraction + Depression"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Scapula Retraction + Depression.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1089186920/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=930d0936a4572dde11bdac7cd17fc06369fa7563c2792d48b76b6bfad2f06c5d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Scapula Retractions": {
    image: "https://i.vimeocdn.com/video/1995003212-18375edb8c21a3efcfe42a8a7f1bcbe3d83a2416234165b8fa2e2cf1fcb4f4de-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Scapula Retractions"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Scapula Retractions.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Forearm Group, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147688/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2e4ec5394c8235e4a9d45f08f27fb38debd073fc29585d6c98a06938a63cb6af&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Scapula Retractions + Hold": {
    image: "https://i.vimeocdn.com/video/1994999215-aa826a834f060a85576713ec1a7aef0f20ae000819e62ce48efe7c2ffa665fd4-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Scapula Retractions + Hold "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Scapula Retractions + Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067144451/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5bb5cf51e43fd82629cf54551cc81cb7803c91673bb13faa5de59fa24d9073b9&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Side to Side": {
    image: "https://i.vimeocdn.com/video/1995003149-3c6aa48e7fb6c1fa450f90287ac747708492ecd65b952f5e5d8f42480ad8d6a6-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Side to Side"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hanging Side to Side.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1067147666/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=578a7b196406afe93fa6feec5d380cc5b6dd4421398843b6e07010280af7d835&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Switching Grips": {
    image: "https://i.vimeocdn.com/video/928963657-59ad5da5b424b93cb6e9bff28865b7349120aec426a4c0d7e53f1b7c25c1e36d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Switching Grips"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/441078638.sd.mp4?s=99d22f1d020714c58f27bf8dc721ad23ad0973d7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hanging Tuck L-Sit Hold": {
    image: "https://i.vimeocdn.com/video/1708586119-88f221e71d41abf7acdbb4c76477cdae8546a36a99eaa3a490cf873ccd4962e1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hanging Tuck L-Sit Hold"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853008784/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f0bf96341cfc26eecb74ea4411b9bc8019aaa49b7d2b61c235a168b88a8e95e0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hefesto": {
    image: "https://i.vimeocdn.com/video/1425553135-6f3e080823839e4fe778463fbaf314a5555f5d4048f630f48d942594d2f47723-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hefesto"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Hefesto.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/706168518/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=4d107e0e03983decfffcba9df60948295d23d8d9d2972da89dadeab95dacb91c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Dragon Flag Hold": {
    image: "https://i.vimeocdn.com/video/1696516063-b9ffa85a57f90286704ab748007216d71c68fdfe96f7e054731359d12aef6129-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Dragon Flag Hold"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399386/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c79965183c94d790b2440c3efec74d28e3a441d4fc458e449b8ff89326a032ee",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Hold P-Bars": {
    image: "https://i.vimeocdn.com/video/894558788-1e728847d026b1c1794c7d83481a04c8356fa4283f1872b73d9a5fe6375f26f5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Hold P-Bars"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting High Knee Hold P-Bars.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/419609288.sd.mp4?s=e2a614c0815ada1c122ae865d599e0846f7c5252&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Jump Ropes": {
    image: "https://i.vimeocdn.com/video/777877373-7f9938c2bb3064e21697f0c9d2ba3dd3159b5ba37e774d35141054294b1c5d86-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Jump Ropes"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting High Knee Jump Ropes.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Quadriceps Femoris, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/332228956.sd.mp4?s=f21babb56fc4f4cbb40ba964d4cb1d4d6614d567&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Raise Pull Up": {
    image: "https://i.vimeocdn.com/video/2025969519-5d5edf5514b9cff141da10e5b6341fd45c8ba58261feccad65c70857c7ac75f8-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Raise Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Full Body.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1092804683/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=832eba938d0ba2fba851d79ec884d2aaad357c2c7ec19e75138ce28e9133440b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Raises (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/756077213-cf076f272d5ff6c663460233b99a966c2c164faa59925d494adcd595f76b6370-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Raises (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760844.sd.mp4?s=20261a087c2405802cc1b1111ef141b28e4bc222&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Runs": {
    image: "https://i.vimeocdn.com/video/1709998584-3a4119a847ef82b83e99ea4c50b2380e4da44f4244c45b12d8e80a0657932a0f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Rectus Abdominis", "Calf Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Runs "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting High Knee Runs.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Rectus Abdominis, Calf Group, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/854152966/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a85f3a1dc1d4807f1427d3a031d14864811a0c09bc58dcc9ca7e1557968da646",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knees + Pause": {
    image: "https://i.vimeocdn.com/video/793797531-218beca2dc84635b7034212fd0c9646e3108a9696ab812a5020fd811c90d94d4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Obliques", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knees + Pause"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting High Knees + Pause.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Quadriceps Femoris, Obliques, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344706.sd.mp4?s=7bd42d6fcc0000f27b86bb5cb02e64b5a5bd1de2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Knee Taps": {
    image: "https://i.vimeocdn.com/video/1698410086-18d09b2809200d422130d086d901237d62e1f53c88f2eb096532859ad7a010c2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Obliques", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Knee Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting High Knee Taps.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Quadriceps Femoris, Obliques, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845742567/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=1ba1deb0aed38a303ce19edcd5fe7a293677b3a1be7de5c06986d5ba539bad7f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Leg Raise Pull Up": {
    image: "https://i.vimeocdn.com/video/2025987194-6b83f9c40461a5fda5d4342dd73b77f793f6b157eb8dfa37aa0aaceab35b0079-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Leg Raise Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1092818790/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d7ad249aefdda7ca37f581c9b18e682f81b4bcfa0bb486c67d677e34fdd446c9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Plank Hold": {
    image: "https://i.vimeocdn.com/video/1984132340-e8a1d75cca6d2515cc425fecfb81b5fff1caf1564534e851caf720a555387231-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Plank Hold"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052194/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=efb92f31641e1cfe55d060d7f9c022973986ddb8512d74f7104cc751b772346a&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Plank Jacks": {
    image: "https://i.vimeocdn.com/video/1838748552-ba28ad554c850ce19b1252e86e582b14390b0146315f651896c443fedda0ba47-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Plank Jacks"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/937966027/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=cd8c3765693579523f6ebcf8bb3b2bae1643ca3b33c967435a32265485cd4021",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Plank Toe Taps": {
    image: "https://i.vimeocdn.com/video/1984132404-c316a821dd0390b71962e4361d3836fed3813322fc44c48e485e53aa004fc5f7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Plank Toe Taps"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052227/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2b1d7f10af15bb35013934d95ef7be4177d144a439270bcdb046c479348ec105&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Pull Ups": {
    image: "https://i.vimeocdn.com/video/796472566-2f63bbf2347ea479939d407edfc3d855ac97715d0d1c5cd0c4d2d47e22d7730e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/346424563.sd.mp4?s=21110c473b2e1ca68bb47114e44c1d022ee2c567&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "High Side Plank Raises": {
    image: "https://i.vimeocdn.com/video/1984132453-f84ef9078c5b69e52d223e586ea87a7eb37a341ad1f72fbf8a46845eccf3313c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal High Side Plank Raises"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052281/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=afe4bbd06bc5fe03234901e542a7b1849a3f6299ca67bb567b41ec01f84e3d27&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hip Raises": {
    image: "https://i.vimeocdn.com/video/752014204-f30a17b55b2dc1e027603d208ee0320ca3afcd3dadbbc3f3982a96fad30096c7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hip Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760778.sd.mp4?s=e83e1a73190e85dfacf6731313d7f628f876061f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hip Raises (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752014100-32212c9b05f52f8c8af683dd114041e82e1723d4070551eb0e80d68842c3fb27-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hip Raises (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173510830.sd.mp4?s=f2d803c38c8cef72db8eeb4eab9200d9c8f02a28&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Hip Thrusters": {
    image: "https://i.vimeocdn.com/video/1004337866-fc5f15985315ba6034d2089cddba2748af794e668b569cfa5fc6c21d7b57f6e9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Hip Thrusters"}]
    },
    techniquePoints: ["Position upper back against bench pad with bar resting over hip crease.", "Drive through heels to extend hips upward until torso and thighs form a straight horizontal line.", "Squeeze glutes intensely at peak height for 1 second, lowering hips down under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/484914573.sd.mp4?s=7920755232f9e1e7daf2448bd20cdaa0af6cae5b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Human Flag Hold": {
    image: "https://i.vimeocdn.com/video/781647435-5f3a7fa801992de5858ea79099842988cdfd42a5b7cec757d0e89ea8e24e6205-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Human Flag Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Human Flag Hold.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Deltoid Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157488.sd.mp4?s=d9591606c62312b46671210c0c8880ed178690de&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Human Flag Negatives": {
    image: "https://i.vimeocdn.com/video/783828466-7a5b2f29444963759ce93b96f58675f213d9787c139b30e635b40c34189f9e2e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Obliques", "Latissimus Dorsi & Teres Major", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Human Flag Negatives"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Human Flag Negatives.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Obliques, Latissimus Dorsi & Teres Major, Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336870023.sd.mp4?s=fc0587dc3be62dfe2045d1146cc35aea4e12b29e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Human Flag Raises": {
    image: "https://i.vimeocdn.com/video/781647386-2c4955d281e02b866006497ae3ce02e241d584ae0c6bb8197771d68757cd660e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Latissimus Dorsi & Teres Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Human Flag Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157522.sd.mp4?s=a850998646e3418453d8192e04259008e404fbe1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Ice Cream Makers": {
    image: "https://i.vimeocdn.com/video/2021280508-4e11da46087b9a93dff0a61b9a0763e93e2006b75ab652eea2a7acd44c6496ae-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Forearm Group", "Posterior Deltoid", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Ice Cream Makers"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Ice Cream Makers.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Trapezius & Rhomboids, Forearm Group, Posterior Deltoid, Latissimus Dorsi & Teres Major, Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088947094/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=881491b73bc9e86b199b104b251c9a03a04f9f3d2077e8dcd4265d3b88343bf9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Archer Push Ups": {
    image: "https://i.vimeocdn.com/video/1103088153-c1abbc62e5912cc0deb5d7c933042fd381ade9b069ea6f2fb8ec6edd9fbdb730-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Archer Push Ups"}]
    },
    techniquePoints: ["Assume a wide push-up stance, lowering your chest toward the working arm while keeping the opposite arm straight.", "Brace your core and glutes to prevent pelvic rotation or hip sagging as you shift laterally.", "Press forcefully through the active palm to return to the starting center position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/532917395.sd.mp4?s=e6bfe9c0bc834c41f4bde420a41cd0e79ef27449&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Assisted One Arm Push Up": {
    image: "https://i.vimeocdn.com/video/1027337384-11abdc57544e9677588b668c798dcf255bd3497e664e5959bfcd2d3586be8931-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Assisted One Arm Push Up"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453487.sd.mp4?s=236c7a61b51c0526213e168967c1391aabf1998e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Clapping Push Ups": {
    image: "https://i.vimeocdn.com/video/1103091001-19cb464bb81c5c704adbaef396e2955ed50433cd03b75ebcf54c2493ebe47cf6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Clapping Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/532918354.sd.mp4?s=6efca4a3ab02b320e53d23b926777df22f03bdb5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Diamond Push Ups": {
    image: "https://i.vimeocdn.com/video/752302365-04a62e5751ee1a2a7e2518d50578b102c3c9479271e9ea877e206660e6363b7d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Diamond Push Ups"}]
    },
    techniquePoints: ["Place hands close together under your chest with index fingers and thumbs forming a diamond shape.", "Tuck elbows inward at a 20-30 degree angle relative to your torso to maximize triceps emphasis.", "Lower until your chest nearly touches your hands, then press back up to full elbow extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311485012.sd.mp4?s=494fde7d1b79b5be80e94aa8d913e3f4ac34c9c7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Explosive Negative Push Ups": {
    image: "https://i.vimeocdn.com/video/1203449771-552dac1ac73f1cf2ba275636675b9ee2445ff9d4a7a12026ce884251f4382955-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Explosive Negative Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/581577543.sd.mp4?s=8debc892cf14a474a6400f37e5b06f4b5b838369&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Explosive Push Ups": {
    image: "https://i.vimeocdn.com/video/1027342627-f3f25b53693ff4e94c5d77742444dfe32fd3b1ea8956a95cd7f554556c950fb7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Explosive Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496455780.sd.mp4?s=e4a9a3de48dc6feed01541f7ff2b96f8abf421e2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Fly Push Up": {
    image: "https://i.vimeocdn.com/video/1275404777-244a9a9deb09f9036992026ae360dbf7549380f64c5a690d9_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Fly Push Up"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/633060955.sd.mp4?s=3a03829ec13393eef7b03976ef5363d631c4fe92&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Plate Press": {
    image: "https://i.vimeocdn.com/video/1013947681-f78700dd3e015e1395491ed29ecd2b9fc2023d5829489d320742a3e5f8714911-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Plate Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Incline Plate Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/490174746.sd.mp4?s=4b22571f4ab2e2c62207ee09a4ca5a4e1ffbeece&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Pseudo Push Ups": {
    image: "https://i.vimeocdn.com/video/1262330540-165d6e10df50f48b2fffe49c711e2dcf795fa1ca6ad9f36cf_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Anterior Deltoid", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Pseudo Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/620072063.sd.mp4?s=2717b935d68ba917ce938a23ce3154142ad5c111&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Push Up + Hold": {
    image: "https://i.vimeocdn.com/video/1244270562-625923cdc06eecebd2a8be0b259e7d82d4b2e73deee89073f63e2c9a55d7269a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Push Up + Hold"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607591730.sd.mp4?s=c3bd64a9e5892f9ad2aa243ed12dfaeb19e85033&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Push Up Knee Raise": {
    image: "https://i.vimeocdn.com/video/1027337659-ecaad4412d180d0eb83a99d49e0151b1e6d41c3f172299e85ce223a0500e1ae7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Push Up Knee Raise"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453532.sd.mp4?s=34c697dffecd5777600f6a563c605d90b7781866&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Push Ups": {
    image: "https://i.vimeocdn.com/video/1244270618-1a06068ea9a577bd3ce35985332fb4e86451a757fc01afe3303825e80b88436f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/607591756.sd.mp4?s=576dc017dabd938dfa73b97016ad6fbf2e5e9243&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Push Ups 21's": {
    image: "https://i.vimeocdn.com/video/1203450162-2c00b69c42648ab2fc03cbd98624f25a443999ed0f2f31bfe637a87b8becc5bf-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Push Ups 21's"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/581577616.sd.mp4?s=1dbb40bfb984a8e92dc66ee004ce98c8db6122ae&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Side To Side Push Ups": {
    image: "https://i.vimeocdn.com/video/1106502618-bffdd302297eda3c387f65dcdf490550510e65db7ec601934af687503962a3a6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Side To Side Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/534557388.sd.mp4?s=688fa6270c40aee9d751d86ad209e07f975f5c0e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Slow Push Up": {
    image: "https://i.vimeocdn.com/video/1027337621-364767349d7e3296cfa67bec1ae19aaff7f6ed6ad4255e7a25ee17ee9b7c6eee-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Slow Push Up"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453544.sd.mp4?s=c5b1e9767f0a2ab99d87e62f9a2b926ff3b1aa85&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Tricep Extension": {
    image: "https://i.vimeocdn.com/video/1108786096-de141a5cf31d3944c631e4c6b06953f75807087440e9af57dfa3fa7aa00a92fc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Tricep Extension"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/535579533.sd.mp4?s=73eb418216279dba2b266ef121fce01e03fd206d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Typewriter Push Ups": {
    image: "https://i.vimeocdn.com/video/1203450279-2993cb622977411d5cdf70e7a4513280ff07324209e4900403a9b358c1673a99-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Typewriter Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/581577726.sd.mp4?s=8d9e16b2b1de088f6927d36d600f4b20c2945af8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Incline Wide Push Ups": {
    image: "https://i.vimeocdn.com/video/752302514-2fa9d8351bcdf93e777064d5a9e6b3279ebed8bad36bae8a2a3ed8cbadeebcb4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Incline Wide Push Ups"}]
    },
    techniquePoints: ["Place hands on an elevated surface (bench or bar) with feet flat on the ground.", "Keep your body in a straight diagonal line, lowering lower chest to the edge of the elevated surface.", "Press away smoothly while maintaining scapular protraction at peak extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311485074.sd.mp4?s=127ce508dbd1aada7e7463e65cd46c716aa4f4ec&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inverted Row Chin Ups": {
    image: "https://i.vimeocdn.com/video/752015184-59302dc8d850e896a62980ae79d9206f3b4860ebd9f40a36a333ce19f8f7fd8b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inverted Row Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760885.sd.mp4?s=12872fee4918e497a53d00b10473c3d560e1dcfa&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Inverted Row Pull Ups": {
    image: "https://i.vimeocdn.com/video/2025995036-d42ee215dbe29d3858e2758cc2fd2000ef9d8ae9fcd8f0ef0632690bd5d30f3e-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Inverted Row Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/850130772/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c0d1400cf17077e40da9270442b47545fbace0df5029b7ab0d5d82a0f63dd87c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jack knife": {
    image: "https://i.vimeocdn.com/video/1790004309-42fa85787d4ac4d2f15b6c7eeea9a160116a1e186e76e3cf3925235d8f5d3ec3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jack knife"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jack knife.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918081/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=27466292734287691114baf11dda61bc5fb1c8db54f2ad1dbea7c8a6e4e863fe",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Burpee (Across)": {
    image: "https://i.vimeocdn.com/video/752015884-2b3542615d5e1538553b5e0590a9b4c38e72651c9a93da7809e20566eca4c290-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Burpee (Across)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jump Burpee (Across).", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759817.sd.mp4?s=82fd0ed1aeab0978fdca25cffb0b0d1925a8dcf0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Chin Ups": {
    image: "https://i.vimeocdn.com/video/752016273-3d8ece3db6d9f45c70df76b7256d353dd27bb15c452c3e4ec20ada96c167aee9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760904.sd.mp4?s=e9e7ebef66530247785380610f02e5d2f39059b8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Dips": {
    image: "https://i.vimeocdn.com/video/752016422-c52664d007b677fe6fa1f101ed1a17443a8073281c5b8d418b189af3c3a5cf93-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760862.sd.mp4?s=f2d21d0ab0d05460b1a0417e69d75aba03e02dce&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Chin Up One Arm Negative": {
    image: "https://i.vimeocdn.com/video/1232153369-36cf64437d43790a10025886496b4210d14c9a7492f509202e276e8d1c24f8d9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Chin Up One Arm Negative"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349391.sd.mp4?s=b4c3ba8ad5e8e3d5abd3340f57f7168f926a10ea&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Close Grip Chin Ups": {
    image: "https://i.vimeocdn.com/video/1232153349-74cd1cee9346ba8d623539c28749ceecec3067b8007398fbc07182d8651b6ff2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Close Grip Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349478.sd.mp4?s=b16930707ddb738120d06990a405252ded98b554&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Close Grip Pull Ups": {
    image: "https://i.vimeocdn.com/video/1232153330-db1d3775f887dd78fe91aabbc26930c8bf7761918a339ac8a5debf13ac550569-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Close Grip Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349538.sd.mp4?s=548e5ee7a4eaaea0b9d01ece863107ffe844aae9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Commando Pull Ups": {
    image: "https://i.vimeocdn.com/video/1232153503-d04a286bb5bbf04a7a9c2ee854b89bbc8db87cd95517cab95759e9f390b5f97c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Commando Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349564.sd.mp4?s=b7e8dd9c91ec0052fc7234fd87f7548095f88dcf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Muscle Ups": {
    image: "https://i.vimeocdn.com/video/752017918-a61df91dfd26ff00295bd79e28d0da6d8a7069c6ed7d7797a612c11d4b2c6b82-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Muscle Ups"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jumping Muscle Ups.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Pectoralis Major, Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197304580.sd.mp4?s=2825d8ddd9c65991adcb24168e2e8e86a74f09fb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping One Arm Assisted Pull Ups": {
    image: "https://i.vimeocdn.com/video/1232158293-e2feb3ee17891be4514d7754621a6e98b0b9b56d4ee9025a20b60382a3be795a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping One Arm Assisted Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597352636.sd.mp4?s=0bd47f3a781f18b9fabf66c98f92b446e7ca6646&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping One Arm Negative Pull Up": {
    image: "https://i.vimeocdn.com/video/1706387899-24ec6dd9c9829ba61e028a3c2674b7c87b5b9e19f687446334aefd3e1275eeeb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping One Arm Negative Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631448/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=25a5cbddb025f1097c351f4d0a90d0f3ae0f910c224c7b80cde762d0a16a7104",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping One Arm Pull Ups": {
    image: "https://i.vimeocdn.com/video/1706387866-65f43bafbc4d933ead8ae6d0dabffbab779ade5a0a9ebb3ec892299c951ef458-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping One Arm Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631468/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7bc213e136e2cc305fc22ca32ad050d6d53cc6ccc30e818bc93596b8b07fa9f8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Pull Ups (Wide Grip)": {
    image: "https://i.vimeocdn.com/video/1037759461-581361b148ab4b36977beedbc205064f7b001b47fa314c29dd3d1c466760e311-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Pull Ups (Wide Grip)"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/501544121.sd.mp4?s=f9d0ad97d47e05ef0099a621a799e8b5df15ffe4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jumping Wide Chin Ups": {
    image: "https://i.vimeocdn.com/video/1232153719-f59fd79c7eb77b1127d7c229cd0580f8ff68ecbe8cd1116deac7ca2a18791e69-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jumping Wide Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/597349600.sd.mp4?s=d3a061dbca6014227e04966a924cdfbb1955e6a2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Chin Ups": {
    image: "https://i.vimeocdn.com/video/754870188-d01b01cb9e3234a1d3456381253e440073e6e0cdeb512cb38005121934d16c9e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760889.sd.mp4?s=26e75c8f2f432f61604b3e8472ea8bff5c83859f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Chin Ups (Wide, Shoulder, Close)": {
    image: "https://i.vimeocdn.com/video/783821097-ba495ce145bc1acd032475def3321e07e11e732e98ec856edcd0fb38fd39729c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Chin Ups (Wide, Shoulder, Close)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336863732.sd.mp4?s=e29981e4c659fe8f3c5d01b0419847fdad49039d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Dips": {
    image: "https://i.vimeocdn.com/video/782618798-596d7acaaadb9df0dec37a98cf0b6b98c292b4c1feb8f1cc2ccadfd84747e6cc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915355.sd.mp4?s=0a7463777beb21ff79ac17420525347626f221d7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Pull Ups": {
    image: "https://i.vimeocdn.com/video/754823552-30c4df6368be18702b2f84aab5ce54c70e930d8ff7d455723cef2a681f0dfeae-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760906.sd.mp4?s=ab5724e75df4e10034c1783b8f7692e6c862fc01&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Negative Pull Ups (Wide, Shoulder, Close)": {
    image: "https://i.vimeocdn.com/video/783821023-1a6e227a2dacc2796a8c4ddb5a5ef7610a4a4fa2511c8dfd734ee2822be2896b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Negative Pull Ups (Wide, Shoulder, Close)"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336863706.sd.mp4?s=5cde8509fe9b5997a4e90f3b7c469f24d8851f07&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Pull Ups": {
    image: "https://i.vimeocdn.com/video/752019866-1f83f437aa08db94d0ae434003ee4148c3ca83dc8f76fcc252f8c2cc024f6774-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760900.sd.mp4?s=ce085a953e6a4115ce6d313a5e03a8d680b7b112&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Rope": {
    image: "https://i.vimeocdn.com/video/752016857-7f54486af61af6d8feaed516f7eac579d3fb5b76375fe036c3f5b997cf9158ae-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Rope"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Jump Rope.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Quadriceps Femoris, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197212960.sd.mp4?s=4362cc9f793d412a65ebf41374fd2636cf90f5a2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats": {
    image: "https://i.vimeocdn.com/video/1783128074-f01432ccae416ad34ce11f413d09684a08c3b58a395ce929b438b7209a50a1c7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903165936/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0e0485d1a2384eba8bc53222e8af7ea3bff0c14e7597918bed450476f912726d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats (Advanced)": {
    image: "https://i.vimeocdn.com/video/752019453-e497caf7275b1a172e473c2c26e76122d7bedd6bbde2f2996701ad0382f700f6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats (Advanced)"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197728515.sd.mp4?s=75f1ef53dc33aa2365a409f506bd15a5c8894a29&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Jump Squats (Open and Close)": {
    image: "https://i.vimeocdn.com/video/1449749235-846f9a0e9f7142558b4913163b4f705717fdf4e04ae235c522087f895d25f024-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Jump Squats (Open and Close)"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/719629304/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f685599ec45984d10ad44ebee364fc7003605a415ad81320bda82c8c8b343dd0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Hugs": {
    image: "https://i.vimeocdn.com/video/804734917-6ac6bbc9ccb7c7b9f08281f0314b19c1c56b6d8947abc5a8597832e6eefae54a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Hugs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Knee Hugs.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762672.sd.mp4?s=e4e107eb4383860bf7d6992e93fd261c5b83f763&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Raises (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752020860-57bc77280f48600be66255465ef84e0c9d5cac330da03522ed84ed9d5d70caa2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Raises (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760859.sd.mp4?s=fcff6a05835a18f747901451fac7aba379e8076f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Side To Side Push Ups": {
    image: "https://i.vimeocdn.com/video/1106502638-be51da10dbc99d50360bb63124db758db4f8d76d2091d653c5e92e34f84ee5a6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Side To Side Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/534557427.sd.mp4?s=38dabbce975a28998cc037ff333c38b19d09f8db&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Taps": {
    image: "https://i.vimeocdn.com/video/752021609-82e4b43a76e77f42b01d242bf49403fbd811987c02edaf7dc87f397b40186419-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Knee Taps.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197213047.sd.mp4?s=02e48bd04333db008eb9586c3a8ce471e714d3d2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Knee Tricep Extensions": {
    image: "https://i.vimeocdn.com/video/846141756-f25826e5fbc017044012778cfeeb9b02b5bdb23917f79731f64d4491f8365ec8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Knee Tricep Extensions"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/384402794.sd.mp4?s=957be54c8eb5b9fcd8f326139cad8b5fc75c18cd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Korean Dips": {
    image: "https://i.vimeocdn.com/video/777880046-e87191fbbd736c951e7d0f744150b889083b8d6dff2449c8c7a09861375ea12e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Korean Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/208220305.sd.mp4?s=2b818e10c41219df3ae3a0e8fe975154d8ebbe44&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Lunge + Curtsy Lunge": {
    image: "https://i.vimeocdn.com/video/804734931-7b1cdc430fbfc95c70cf922a7008dc60e5387874aad13dde66c648b4a422f45b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Lunge + Curtsy Lunge"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762717.sd.mp4?s=8676918c839b4db9b1aab3cb943e32dbbc2bc82e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lateral Marches": {
    image: "https://i.vimeocdn.com/video/1032181924-a4f567e4cba19bf82bf3c4b46bc25f26a4cba7b56d16f683fb0aa2c8a859b7a2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lateral Marches"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Lateral Marches.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/498788393.sd.mp4?s=9349b0c58208878ede7667e1841ffb6970ee1734&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lat Pull Down": {
    image: "https://i.vimeocdn.com/video/790284143-30d67b723e5f647c7b37dd34362390e368d04da290f2837012fd131931d790ab-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lat Pull Down"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Lat Pull Down.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/341620659.sd.mp4?s=5757adef8591b092a69689ba52932446c8b15184&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Around The World": {
    image: "https://i.vimeocdn.com/video/1135518543-92be09eeb905acd221e62ce33f73fe32752f9684824c4d9089aea94db8ae0a80-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Around The World"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Laying Around The World.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/548462494.sd.mp4?s=530cc53a7a42ae1693a90caadc1947764b74d5c3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Donkey Kicks": {
    image: "https://i.vimeocdn.com/video/1783123336-764e924d36f981b41758ff4fdb5d34cde62db269da6852b3cf81351da4338002-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Donkey Kicks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Laying Donkey Kicks.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166121/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f0a8dc540157e417f9865387a74380017d5ecf144f8ccb70d991620d1cdf7d0a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Knee Raises": {
    image: "https://i.vimeocdn.com/video/1701644940-5b4d9cc0616ebc70f0cbd2a0a6fc8934848687801697d17281a92b4bc6104216-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Knee Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847809651/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=765d4b05dd3d8b9c283e093e3da1f1580aa21bbf6df126badc279e14264d9720",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Single Leg Raises": {
    image: "https://i.vimeocdn.com/video/1135517953-0f526b3cdd72112d953826e06ba181d096ffd829e2f48cbac74be2161cae7ec6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Single Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/548462461.sd.mp4?s=4d323d42a5cce6552e08a9350426d1384bee7d3e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Laying Windshield Wipers": {
    image: "https://i.vimeocdn.com/video/1064064399-f5c82625a08c22443706104bbc280de6c89bf911b109ebc6abadd31e111a2407-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Laying Windshield Wipers"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Laying Windshield Wipers.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/513918232.sd.mp4?s=14a9adb0c481b141c5f17a4fa22bb7dbfccfcf05&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lay Over the Bar": {
    image: "https://i.vimeocdn.com/video/783797636-a0eee1e645dc605394a350b0296055e23c06a74c58e0effaa90affe3f0828913-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lay Over the Bar"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Lay Over the Bar.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336844774.sd.mp4?s=461468561b1917d3df4acbe6281ed14e8ffb42df&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Flutters": {
    image: "https://i.vimeocdn.com/video/752025166-6962c089d9aea42cd3036f8d1c9da3bdd64e44c449485891936e1c1afe42ee8b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Flutters"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Leg Flutters.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760780.sd.mp4?s=04c9767d2a539f9d3d3c3e01c8c523e3d20499ed&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Raises": {
    image: "https://i.vimeocdn.com/video/1803097504-edb4aeaa542178708e300123fd20cae947da9faf87eb8fa8a100e242cbbe6057-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/915817688/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a42c010a70f508f3610193e08b9ac5c4396c6f9d369e3524bf9e7ebb7aa736fb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Raises -Chairs": {
    image: "https://i.vimeocdn.com/video/1789994398-b4edec4df9b9d6ba4dc314c168e94a179f2b8a28476bd6b738837969b9db878b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Raises -Chairs"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051845/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7354ca28a9b497821b3ba106314181e2dc4d8798b3c2923bb191d349c2d40580",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Leg Raises (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752026011-eefed4e8353c2ff4458f9e7e637250c97bd0e392f7ac9a1c0be2356caddb96a4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Leg Raises (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759789.sd.mp4?s=da12ed6146e864a70e2b05a7f74afa7d311a61ce&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Legs Down Hold": {
    image: "https://i.vimeocdn.com/video/754827401-f9aeb1e8a76cf95c12d6f97f14ad865c7c473229aeb174c9e5319fe98e228f47-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Legs Down Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Legs Down Hold.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760773.sd.mp4?s=691fc5fe72c8a66574f8114f5da514494904ae6a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Pike Hold": {
    image: "https://i.vimeocdn.com/video/839731137-53520a28a0c9fa075838f58f911e8f32fe4f221f76bdbc5975d60513bfa33fda-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Pike Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Low Pike Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/379619915.sd.mp4?s=e7e57c1036e45a69bc56c46ba26af93464b63bf0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Plank to High Plank": {
    image: "https://i.vimeocdn.com/video/1984132613-e3e5001bbd8b2f5235cfa435ab664a098258461ca1648a2b585ffac319201f7e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Plank to High Plank"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052396/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=481e1453d4a4605edc6ddd115ebdb3ff4dde5fb5597542703bc1fa2409243fb5&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Side Plank Crunches": {
    image: "https://i.vimeocdn.com/video/1838748874-6110eec071193d67e79b48085fca1ac80041ba5d78e80442a6bc990439d19908-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Side Plank Crunches"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/937966191/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d6c53ef89cccbad3e701a73cbed888c1ef03c15c06a302754fedb905fa1e6a92",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Side To Side Squats": {
    image: "https://i.vimeocdn.com/video/973191711-a03bccac98f5ceb044a27ee62d56ac0dc73c5452d03978a1cde6ea1110f131fa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Side To Side Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/467061829.sd.mp4?s=19327a0925610c51eee8c2f249237650ccb6fff4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Tuck Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1418537873-e43cfc9a6edba2e92461d53de4254ccccab0d795642bafe64d54fb8b3953374f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Tuck Back Lever Hold"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702065051/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=47a4b7d4831d67c60fb6d2b99f63caea7e026450af0ae71edacb7d862f8a6615",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Low Tuck Back Lever to Advanced Tuck Back Lever": {
    image: "https://i.vimeocdn.com/video/1429505202-182213eef1f3c97d6e6ddaebe222f36ecc3187900a19fe2874b888444a69e691-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Erector Spinae", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Low Tuck Back Lever to Advanced Tuck Back Lever"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451091/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=cf10212cb1aadedd66df2457df5e5563558143c88d79361876702d43fe96ee65",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Flutters (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753079330-ce50f8e96e675bcf54a6ee07e32323ecf1defa394b17b226d382c485072cc411-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Flutters (Parallettes)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108568.sd.mp4?s=31956408a8a2aae61d38afe1c4b3d9b190a485b9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit + Full Planche (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752022400-dd0953194ec05bdce1d566bfdf02ca7cf23e6eef7c3c40d935d473ec2e862b9f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Anterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit + Full Planche (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492332.sd.mp4?s=af6ea0010ed39c960de13be7ae1eba7b93d3502f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Head Bangers": {
    image: "https://i.vimeocdn.com/video/1355252737-2b511ddb6089abdd8f67eda1e7fc80d94a02295fe3d9174fd757146e7721db9e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Head Bangers"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104079/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=bd71177eba166c5066bbeb252dd44e6c356c1fa06a6751c845a5d11ade6596b5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Hold": {
    image: "https://i.vimeocdn.com/video/752023614-de7ca8ccaa1d6e3052f95573b797465723d6dffb27080f8916b9cd467209a94d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Hold"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197212315.sd.mp4?s=3fad7a0b27bc09667b4ba55c244c41ee430a3ef1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Hold (Chairs)": {
    image: "https://i.vimeocdn.com/video/1789995101-89af425f44ba7f4f1f767e94fa2c09e98e27a904e8f0a2de079a53079b28159b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Hold (Chairs)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/907051994/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=916c71944bf0d8125f61b0c266c787b1c276b86f8af0c5624058908cfd4cc441",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Hold (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752023796-19babb47dc56c20d9a5869d644ea545bba83432f6594911b474d9fad0a26fb47-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Hold (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760866.sd.mp4?s=9bdf1771dfbaca4d14d3b4b62677df33f207b65c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Kicks (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/753079318-ab10ef63ae5e45a2d8f257f9dbda9443bd598af536fc341d7780abb761d4d635-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Kicks (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108585.sd.mp4?s=f51d0763fed3f66e411f87866e8e37ce373aa0e8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Kicks (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753079250-05b2933129a15f0b400ce3cc7f80b3d9d3768604792599f6be9d80a4c83b7f61-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Kicks (Parallettes)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108596.sd.mp4?s=df2719b905a086798e3a54fa369b760cbd915919&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Open & Close (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/753079577-ddfb0bb425ac008fcc1bf164c3039b2b5e932c2390eaccf79003bf753da19aa0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Open & Close (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108603.sd.mp4?s=ca22a4511c2e1bf54106c4493aef67c114c8d05b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Open & Closed (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753079299-83a3f88184db63085aec974f7956efe137069e6431a6b5a1c09deadd809db7e2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Open & Closed (Parallettes)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108618.sd.mp4?s=ac35b44c3622ed0659cb60083d88377d331503d0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Pull Back": {
    image: "https://i.vimeocdn.com/video/783797727-9334916e148194f71305d35ba0963f630852babe26ee645c553d02361485b719-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Pull Back"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336844828.sd.mp4?s=dff0e4e21338e734e5aea8088fc2baf87ba336bf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Pull Ups": {
    image: "https://i.vimeocdn.com/video/1701253136-a082dc567a0eebf84a8ea83af5aa571b4769ad290b3485222a8ec276f2c31646-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Pull Ups"}]
    },
    techniquePoints: ["Raise legs to 90 degrees parallel to the floor in a strict L-sit hold before initiating the pull.", "Keep core and hip flexors locked as you pull your chest to the bar without swinging or dropping your legs.", "Lower back down smoothly while holding the L-sit position throughout the set."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847811761/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8a5346750d9c2625246e6ea07aa82a421e668059675d9b446665b147c9aca52e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Single Leg Pumps + Hold": {
    image: "https://i.vimeocdn.com/video/785011219-4848620f853c4c44b144c9fb6e9d13873746c0f9c11a35aa440e08331855182b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Single Leg Pumps + Hold"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803283.sd.mp4?s=4d6ef865b6b54167db4ae387e5df4df6d147e0e4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit + Straddle Planche (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752022843-3bc0200f17edaa3f70ef3f81e25e8906b82c1e1ed130d043f099a6f2444a34d1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit + Straddle Planche (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492407.sd.mp4?s=68c71aabaeeff619ae8008adaa63db5468cc687b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Switching Legs (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/753079308-8dcae7ff170113b6e7cf61c328aad7e044b4bbf0b4838dcade3716860f57f8e8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Switching Legs (Dip Bars)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108630.sd.mp4?s=9d375e6cb2ededad5b5683987ad9919a773858d6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Switching Legs (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753079403-f98d14dccaccf2c4c028b39b348410f95a89c32804eb037e2992b149bdb6362f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Switching Legs (Parallettes)"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108658.sd.mp4?s=6ead8c93977b82c3e103b5ae6c398611583efbd7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit to Front Lever": {
    image: "https://i.vimeocdn.com/video/753079783-25c2e0913646c4b4564e6d142a75f0350084067a807bd2f908fcc74cba23de18-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Erector Spinae", "Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit to Front Lever"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108964.sd.mp4?s=db606bfcdb2616d5e6424421eb8f0311c9372fba&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit to Full Planche (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753079804-421414929b6b657b1a009391a8ad922cf25ad7b438ea0ca057d96bdee8937cb3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit to Full Planche (Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312108982.sd.mp4?s=8fb136ada54125b2037455b01a418e2d6e911d5a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit to Handstand (Parallettes)": {
    image: "https://i.vimeocdn.com/video/754829172-c64f18eb553ba8abdcd9a3548380db7824cd03fa58fb12253986317b4c1843ce-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit to Handstand (Parallettes)"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759818.sd.mp4?s=57a8b52513d5c4ebfeeaaa3094d859efd7f36d48&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit to Inverted Row Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251217-f62ac509c2557dc2a54154512459fc8ead5901d9ec33a8214fcc1b1f02093008-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit to Inverted Row Pull Up"}]
    },
    techniquePoints: ["Raise legs to 90 degrees parallel to the floor in a strict L-sit hold before initiating the pull.", "Keep core and hip flexors locked as you pull your chest to the bar without swinging or dropping your legs.", "Lower back down smoothly while holding the L-sit position throughout the set."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104086/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=f80c711b594faf8078f7b0c1ec17189d6748843a4fb97d264353b791e120ab90",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit To Push Up": {
    image: "https://i.vimeocdn.com/video/941263722-2bf3daa2632cf6a98b358270219adb929679645c4b44c586e029a3b8c832e3b9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit To Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Rectus Abdominis, Pectoralis Major, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/448346348.sd.mp4?s=c1cbaba282ad9034151f100c5ad603312f5944e0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit + Tuck L-Sit + Tuck Planche (Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752023666-72f4ad734ce8e58d95c2d43cb928480cf4f3883521509fb37a34a122164d817d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit + Tuck L-Sit + Tuck Planche (Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492462.sd.mp4?s=bff66450abc4a892c232195ad87fb67b87cc9602&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "L-Sit Walks": {
    image: "https://i.vimeocdn.com/video/782617067-76a60d8e2c1643adadde4bca6341005db46816bcdbccab2711e120f7eb5795c4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal L-Sit Walks"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915415.sd.mp4?s=c06ef3234a6cdbbcb2c7565b52caddb7ee4fc7e5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunges": {
    image: "https://i.vimeocdn.com/video/1701250345-b6f1b9d309bcd6f59b3de81495493e13294c0c6fab34a15cc872f1bcfa33c0cb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847809638/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=749f919c69565e7ec436c270e89ecd9eed6652634fde54ee58d20a53cec8cfb5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Lunge With Reach": {
    image: "https://i.vimeocdn.com/video/923200525-ac724685b94f8f534f3f59a0d1e6ed7fc9b0a62c82c1aa18cca590513cd75c04-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Lunge With Reach"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613680.sd.mp4?s=f4d978e760bfe788ab14a439cf8046480c55edca&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Magic Button": {
    image: "https://i.vimeocdn.com/video/783797796-b61d56e635663823b3d1a74d9d0bc5887275ee521f1985db8f3939b283512c2c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Magic Button"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Magic Button.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/336844873.sd.mp4?s=16534f5199b2f2170d688b9bdc4735944f3001db&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Mountain Climbers": {
    image: "https://i.vimeocdn.com/video/1984132810-5ae2b5a37b87ddff336a81aafa03bdaa0d5c39cdf5b16986f49357e40332ccc9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Mountain Climbers"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Mountain Climbers.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052545/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4062e5fc559ea2db2f9b0418ca8b98475d33a5cac66428c684b00d5d9fd9031f&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Muscle Up": {
    image: "https://i.vimeocdn.com/video/1701653578-43190fd888a3ff07c7ea29aa770bf3e552a4343886fba7cc859157f3176a7e29-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Muscle Up"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Muscle Up.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii, Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847811774/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=d8d19d998136ab40d4ac985a1b124ee7c8b3fcc7924d672d0b30a22d0c1c6322",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Muscle Up + Dip + Pull Up": {
    image: "https://i.vimeocdn.com/video/754828213-e8beb557035edadda6e54e6977057212b88a20d1a8141aaa4c7ff8ad830f7d86-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Pectoralis Major", "Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Muscle Up + Dip + Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Pectoralis Major, Triceps Brachii Group, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760890.sd.mp4?s=b3f195c77cae0965d507d36dd2d5959e3c3f47ee&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Narrow Squats": {
    image: "https://i.vimeocdn.com/video/1989529557-1d9694e70f0ffc63ced5743b8b70ff8b5d9255322d9db3ad0601620e120ddd0e-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Narrow Squats"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Quadriceps Femoris, Gluteal Region.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1062585374/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0ec97a657d9d7c28a4d361e18f9410329b8a609925fa6c26fb69dd0ae94033a4&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Front Lever": {
    image: "https://i.vimeocdn.com/video/2020015766-767aba39fa38eb50b586d5be121404f6842aef04fa268b2239468f18140a0a58-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Latissimus Dorsi & Teres Major", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Front Lever"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087905847/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c103aa4c0ba838fb8d714d048d4df9e951aa3ba1dc78111d320ebbcc662b4a8b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "(Negative Handstand Press Against The Wall)": {
    image: "https://i.vimeocdn.com/video/1690423386-8663950cda0f50d6d482dfd4c2f164b8628cce6e99dfec46fe11a77f4e18d3e8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal (Negative Handstand Press Against The Wall)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting (Negative Handstand Press Against The Wall).", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/840426200/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=495eb2b3020d3eab18eb07df854e02255750cdc87c2d3ccc3494dd7da4018f87",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Handstand Push Ups": {
    image: "https://i.vimeocdn.com/video/753079896-636bcdb5d4f3d541adf22aeafd2f27dc5a86d8a0ca173cae3343e6a81c02ca88-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Handstand Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109041.sd.mp4?s=20180c22a952dff56bc00d2e70db6ce6a0b24e73&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Hefesto": {
    image: "https://i.vimeocdn.com/video/756061042-a7135497f008ab041e6564a74f60389f13d4ceff0dc6b07f09d4703b5d086bd9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Hefesto"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Negative Hefesto.", "Execute concentric phase with intent, driving force through your Biceps Brachii, Forearm Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314494897.sd.mp4?s=ecbb265496fde4f68fdd2efb9b57360fde79ddb9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Impossible Dips": {
    image: "https://i.vimeocdn.com/video/752302360-79cb70cd99c287af6ecc2bda1721b402f68cc5bf203ed4844f4f5eb4a68ae4f9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Impossible Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/311484989.sd.mp4?s=821e70c86ceefefa3088f05b146c8543bab09400&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Negative Muscle Up": {
    image: "https://i.vimeocdn.com/video/752041198-af6a7b7c66d128d96d8768b20888ffc4482e73de8ed018015d12c11ecf644fb5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Triceps Brachii Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Negative Muscle Up"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Negative Muscle Up.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group, Triceps Brachii Group, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760834.sd.mp4?s=77d3a9dca543ef7771bb2cc100556fe3b29aa29e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Neutral Grip Pull Ups": {
    image: "https://i.vimeocdn.com/video/1444381925-4ec3379eae3f502f248847982f56b6a18e7c665d2f4bc42901eb8672d7867550-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Neutral Grip Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Biceps Brachii, Trapezius & Rhomboids, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/716854791/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=475568e5b1e24cdd316b088b58b032cfe3aa8e1a9718e02bdacde44eac377827",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Assisted Pull Up": {
    image: "https://i.vimeocdn.com/video/1707587179-072963c12ac536c622f12f002656eb7c4d63fb0e8dc32ce406eebabd39a668a4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Assisted Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631411/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c07bd36e2dd08969850f9a7835abb7dd2b7979178869cf5955ce2e81f9cce0db",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Assisted Pull Ups": {
    image: "https://i.vimeocdn.com/video/1707587179-072963c12ac536c622f12f002656eb7c4d63fb0e8dc32ce406eebabd39a668a4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Assisted Pull Ups "}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631411/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c07bd36e2dd08969850f9a7835abb7dd2b7979178869cf5955ce2e81f9cce0db",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Australian Pull Up Hold": {
    image: "https://i.vimeocdn.com/video/1439328573-438def5dbc8127408a4785d0c4f3ba9ff6090ba1deb63c67b9ba6ae1ad77516c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Australian Pull Up Hold"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Biceps Brachii, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/714070999/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=cc56bb35a341659e7f054d19bbe2e573968332f4dfbd857f2c0c6fb41507e925",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Australian Pull Up Negative": {
    image: "https://i.vimeocdn.com/video/1984131981-75e8ae3cf1e56b06dcd9a22c9cf876ff6cb18d196f4ef273398d02b5fa45782d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Australian Pull Up Negative"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058051854/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6c3a459e9bdd96fb17283a9fa35a1cdc0b1ea2a1d20c6edcfba58f7f8064d35a&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Bench Dips": {
    image: "https://i.vimeocdn.com/video/1203450245-dce64fdab805610f2d5d4710339e8efd9a434ea30c88637711281ac7e8c3c758-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Bench Dips"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/581577778.sd.mp4?s=0015c4cec40b624b69ffa4e49e2be27813880f74&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Chin Up Hold Switching Arm": {
    image: "https://i.vimeocdn.com/video/753079886-184a73ff1983ed88517f7b66a952cf7a2e1f1de9fa7c7a4384ca8b7c3ea64c54-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Chin Up Hold Switching Arm"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109061.sd.mp4?s=e25f2c8e0bb9dee0512f41d0a51173acbcb8a076&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Chin Ups": {
    image: "https://i.vimeocdn.com/video/753102784-38917caa52737aa3ce605d30f56fa901f933c84cfdc9d3f9385830c39f6a9e53-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Chin Ups"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/218035392.sd.mp4?s=2247ccaaa66cf7d4cc65d7485b2dbfdc22d26f43&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Fingertip Push Up": {
    image: "https://i.vimeocdn.com/video/1027337712-48316d902456ee5e32d314636e9889d61ca34b17ee8ad40870f8ae961f255e09-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Fingertip Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453610.sd.mp4?s=904c51c25d611854b264f50d112fd5a4a324ae5a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Pull Up": {
    image: "https://i.vimeocdn.com/video/1707582750-0ddfa5cf9321547b6eb0137174bb0ad67765b49712e8f812a72203e0a433af9d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631496/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=97b6e61ac4a67d1212075203b97c6e5ed46c2cb4192bdb78f189228693ed8595",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "One Arm Push Up": {
    image: "https://i.vimeocdn.com/video/1696387545-77908d277ef3bb333bd1095e2ffa0cb7dddc212fb5954b4c5732548d4ed75e8d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal One Arm Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844304279/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=80686ff2aa52372a5f710efde21365996954c73fe5faae3459b11fc1a8757458",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Parallel Hold": {
    image: "https://i.vimeocdn.com/video/1287294626-1a34e2c3931e7c405c5dba403df131b6aa6a2ec8ed3a8dc72_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Parallel Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Parallel Hold.", "Execute concentric phase with intent, driving force through your Triceps Brachii Group, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/640055123.sd.mp4?s=075f55acc006f24fea1903ca3c77aa67df6a54e2&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pelican push ups": {
    image: "https://i.vimeocdn.com/video/1932632748-aa96ef0d6c97f15e06a274c06dbb0b0d57d097228c92e660f65086a24f420b4c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pelican push ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1014547615/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ad8383eebdc67d1dee3e2e89fad36aa510de177903500efc0b8380b05e8118ce",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pigeon Pose": {
    image: "https://i.vimeocdn.com/video/923200601-6c8c6ccb15b3958620a84a0746cdd65e81f7e63075e5c97e06ffc9ae96f1b86c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pigeon Pose"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pigeon Pose.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613711.sd.mp4?s=b573b20808786a299318d83d8f279dd14e133ae0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Hold": {
    image: "https://i.vimeocdn.com/video/1804824582-08f3a25cc88f6082a382dd4b3e816bf98350e4f70785da2284bc75fd9907b65d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833689/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5d354e51232c702cb5450ab038a6f908e054500c166e25a51dd59913cf0f510b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Push Up": {
    image: "https://i.vimeocdn.com/video/1804824736-4ca24d77e95e1d9bfe83581352609e3b8d605e85fc7786fdcbd1443e7c203cd1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Push Up"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916833816/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ae66b6aac2e1b029e1f8d1d36e26efafd361ecc24355edac8371ce9cb4b27d0a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Push Up + Hold": {
    image: "https://i.vimeocdn.com/video/752043061-bbf55e56ba64eee23da8b329b09c1555764f395bd74182c915a0d1006a739aac-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Push Up + Hold"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760792.sd.mp4?s=a1d75de3d21a780e6d1d4936d60ed91be1bffed6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Shoulder Taps": {
    image: "https://i.vimeocdn.com/video/880836696-fc8bede8888fb786eed7343d49715edf3dcad0c0c2146764290967d75c97c33d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Shoulder Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Shoulder Taps.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/409524000.sd.mp4?s=31dd5be01607b8cea5aaecd69921d535eff4d2c4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Walk Outs": {
    image: "https://i.vimeocdn.com/video/1287294611-e498872bfb66fa1acfadaed3281d90231b87ae709f3cc0ed0_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Walk Outs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Walk Outs.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/640055155.sd.mp4?s=6459aa62fd96471c77f1266d1430d02d961088bf&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pike Walks Across": {
    image: "https://i.vimeocdn.com/video/752043401-f57488bee3d51a2cc321e8c08167c26d90087a2618c02bb337a17d066365ba47-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pike Walks Across"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pike Walks Across.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759808.sd.mp4?s=5a1afb6ea432830f8acbcc997f54aca8054ccefb&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pistol Squats": {
    image: "https://i.vimeocdn.com/video/752043977-ad3282f5f01ab55215fddf31b4490e8b4be3f46f63141337b84194156dcaccab-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pistol Squats"}]
    },
    techniquePoints: ["Balance on one foot with non-working leg extended straight out in front.", "Descend into full single-leg squat while keeping torso upright and extended leg off floor.", "Drive through standing heel to return to full upright lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760831.sd.mp4?s=c55bb8a40d639c4259ebd81ab393ca152f9abb4f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Planche 90 Degree Hold": {
    image: "https://i.vimeocdn.com/video/753079948-d49e121bf9dfb5abe1f59ee016106cf9c0774fa53bc0e445adaea9892340d138-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Anterior Deltoid", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Planche 90 Degree Hold"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109089.sd.mp4?s=740b8a78b4c43cbcef68100b550d65744dee8c60&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Planche Lean Hold": {
    image: "https://i.vimeocdn.com/video/752044378-7ea9f33308c0fde8f4fb0d26db01696f0a0379475b723aa990b8bf425d942eca-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Planche Lean Hold"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492827.sd.mp4?s=73f366c73cdce56f4c5e0df8cbddb28416bb2e0c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Planche Leans": {
    image: "https://i.vimeocdn.com/video/1103088173-c4ede7b01898e5364ef2de357728b47d7530de945991138d3a67f14f320dc66f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Planche Leans"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/532917412.sd.mp4?s=c024d3d27a5ac44b4e57b8b5bfb50ae9869b6b06&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Planche Push Ups": {
    image: "https://i.vimeocdn.com/video/1967564175-e185431c72d0eba680747569d211ba5d9bd08f8b00ff938b54000666246c54f6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Planche Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507539/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=16c09f38ef4907a649d19a53bcaab5cd84154c87bb36c7446bb19cb6e0693539",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Alternating Toe Taps": {
    image: "https://i.vimeocdn.com/video/1937851425-ddca2e8306a38a19de1f1f54b63f26263868ce0bb284b9577732c924f5ed7432-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Alternating Toe Taps"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1019469447/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9ff0713785808db81644c200a4c2b74fbcc9863a375388c11c47121191dd06bd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Hold": {
    image: "https://i.vimeocdn.com/video/1984132513-d4086933600dd6e19a341c0fb9606e4d6454399849830c1f343effd86b60dc5d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Hold"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052304/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6d18631b891e04f90814d629169a78a06fd5c2613740a1b3e86057eecdc9eae9&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank In and Out + Open and Closed": {
    image: "https://i.vimeocdn.com/video/1984132930-9e5d63e3b9ad526eeacb0b02fff1154d4e68bd18e676c5fe61c4401bd0969e22-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank In and Out + Open and Closed"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052675/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3fa04473f934fb569239006c18547c08ec8c8e03831dab1e29e1c99c3e58f94b&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank In and Outs": {
    image: "https://i.vimeocdn.com/video/1984133008-89fb09eaee2fdc8953068ff595151f2540104e8cc6d151b4495546c90249df65-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank In and Outs"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052720/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5b61d75f912c607c035684bfb4681517a8934c3ab3df43fc0f3479d9a89253f5&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Knees to Elbow": {
    image: "https://i.vimeocdn.com/video/1984133075-129722f9300206c2f693695f64df74a1a77b0d2a95aca6e481e8b841c12e08bd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Knees to Elbow"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052765/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=82c059bd3773149b1fd63783e461ad70c995d21462439b0d4b7fdccabf3b90ae&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Leans + Scapula Push Ups": {
    image: "https://i.vimeocdn.com/video/1984132873-a285160b37b57d7908c7e72fa1e9501cc962462e0d7533f5309682a48a165f09-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Leans + Scapula Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Trapezius & Rhomboids, Deltoid Group, Anterior Deltoid and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052631/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4c30b170910ffc877569208dbc5d24cebf3260a6e1b75da475b9f07cb32df6ee&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Lean Toe Taps": {
    image: "https://i.vimeocdn.com/video/1336218291-c63e4d9371449ee0fe387b4e0de23efb3ede9ab348f9244e9575cdce25ca260d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Lean Toe Taps"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977086.sd.mp4?s=0288679ccfea2f6d6ea43ac6c574f3c13616b327&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Open & Closed": {
    image: "https://i.vimeocdn.com/video/1698410205-4c761db815d2a312c940afd2bfa62102ea8677db389b225ec7fdb74830719a94-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Open & Closed"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845742610/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=da6ba3ca0917a330abdca16a9e625356dc57e5ee2d3a6abb451079bff41a8428",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "plank shrugs": {
    image: "https://i.vimeocdn.com/video/1838748946-67bceef77c2ee4550e3f0c910aad84f4dbc2c48c0ff5db601467f0f650f81a75-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal plank shrugs"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/937966213/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=65b9d2dfbd6e16b10a411e09e30621a1d81869b713328c455dbe029523e03f42",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Side Hold": {
    image: "https://i.vimeocdn.com/video/1838748792-dcbb566dedabec24c3fffd4a1d22f264249c63386fe85d550e447f41878dd899-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Side Hold"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/937966131/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4d892b21f67222631e7c5b3f67bcf8014a40291557285e01ed16e5c71e03c5e0",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Side to Side": {
    image: "https://i.vimeocdn.com/video/1984132569-981897df308758f4628bfa9508c7adb7e76a764940a707a4fd87e0a7175e3e9b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Side to Side"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052350/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c7cb77e5b21a73fa95bf1387967dcc5aa25c4be0df271e5133a7c6cb1f30d74a&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank to Pike Press": {
    image: "https://i.vimeocdn.com/video/1804825227-fdae4671cd31fcd7d299333f854025fc639530d8c9c970b5183f7b25ffbca041-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank to Pike Press"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916834087/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=686aaa0c4dbf19875132f968a908800fbc6cacadc3c12105aaf32f6816af2e07",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank to Tuck Planche": {
    image: "https://i.vimeocdn.com/video/1336218128-a7989dd56b4d7a0b25b541d9d43769d9427463aeff5efc72138f15245286bad1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank to Tuck Planche"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977097.sd.mp4?s=6d0e07e0ebb408ed15059fa04732284be4277268&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plank Up & Down": {
    image: "https://i.vimeocdn.com/video/1984132670-ac7ab7dc123bd021fb2325a703457daf2c16c0d5338c86b4196affad403298cb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plank Up & Down"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052435/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0327b0d20ac0742bed89214758b23c89ed91061f57f0da7148cea8808d5c6598&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plate Press": {
    image: "https://i.vimeocdn.com/video/1013947851-3e64e076cf8ef1a6dafee8ce33441304f6b163f26f2d95761e9e4c98c6b801de-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plate Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Plate Press.", "Execute concentric phase with intent, driving force through your Pectoralis Major, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/490174781.sd.mp4?s=689b0f17cecde44982c26ea16c4a6dcc9b9f04c6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Plate Squats": {
    image: "https://i.vimeocdn.com/video/799343081-6464a2946dafda299dcaae244850afcc5a0a7ffa83716b90c59737502ee80b60-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Plate Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/348646641.sd.mp4?s=cca5949f042dbb83ed0d5c9eaee648a21c4c3b06&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pretend Jump Rope": {
    image: "https://i.vimeocdn.com/video/752048151-abd76a349cf3829d52962fe4080a65af3fd22b68c7afa1649eea85cf3cd81cf2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pretend Jump Rope"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pretend Jump Rope.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197213236.sd.mp4?s=f716b14f6d3e545cb1995972cbe82d30a73d8974&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "PSEUDO PLANCHE PUSH UP HOLD": {
    image: "https://i.vimeocdn.com/video/1686732805-d2179306ca2e64e4f5b0c6a0c0bff95f06e7d734561e4c598968fa056b080be9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal PSEUDO PLANCHE PUSH UP HOLD"}]
    },
    techniquePoints: ["Turn hands outward or backward and lean your shoulders forward past your wrists.", "Maintain a hollow body position with maximum scapular protraction and posterior pelvic tilt.", "Lower your chest while maintaining the forward lean, then press up to full arm lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837993982/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6e50591da7dd6f07ef521d2c20adbdd39ca5cf90d17e0b3ced7fa503b660059b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "PSEUDO PLANCHE PUSH UPS": {
    image: "https://i.vimeocdn.com/video/1932632625-df25968941be2eba1315e8c44439bb956c26cf95664725018ddcf944cfbe7626-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal PSEUDO PLANCHE PUSH UPS "}]
    },
    techniquePoints: ["Turn hands outward or backward and lean your shoulders forward past your wrists.", "Maintain a hollow body position with maximum scapular protraction and posterior pelvic tilt.", "Lower your chest while maintaining the forward lean, then press up to full arm lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1014547508/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7de41669aaf145d6abaea9940e086cbb405ede90dc00fffe6d4eda4abd39960f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pseudo Push Ups": {
    image: "https://i.vimeocdn.com/video/1686731217-12165b64cb8ac0bcb34c57e3d080677e37c3747fee64fa103c38829aa4c01328-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pseudo Push Ups"}]
    },
    techniquePoints: ["Turn hands outward or backward and lean your shoulders forward past your wrists.", "Maintain a hollow body position with maximum scapular protraction and posterior pelvic tilt.", "Lower your chest while maintaining the forward lean, then press up to full arm lockout."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/837994043/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a663087d8f8fc54f693f7b2d38c15b62c03812ac0e95cb2723cd941dd58ae07f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pseudo to Pike Press": {
    image: "https://i.vimeocdn.com/video/1147613580-2210c0e4dba269a7a24421394d73686cc30eb7fcfb9264b7df8a333107164608-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pseudo to Pike Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pseudo to Pike Press.", "Execute concentric phase with intent, driving force through your Deltoid Group, Anterior Deltoid, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/555313816.sd.mp4?s=f2fa7c45252835cc7a30f76e0289b5358e57ce0a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Over": {
    image: "https://i.vimeocdn.com/video/2026269333-6b55c04de2405648fde4c64ad600ef2ce9f469657d5a429dc2969babe427036d-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Over"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Pull Over.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii, Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/850130788/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ca2fff04f29141115c6b0a22a81b936bc33e3eee84b7c918bd810af27016c54d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up Grip Head Bangers": {
    image: "https://i.vimeocdn.com/video/752048705-501532fcf9bb6841dbc4ccf2c3b8c3bc8cf875abf02893ae78a56afa3c2bdac9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up Grip Head Bangers"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760881.sd.mp4?s=a8986a18719286abf837cd83852e4655a81ed038&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up Hold": {
    image: "https://i.vimeocdn.com/video/779855026-54b5babaa98c3fc0c2053aa5ed5533a21ccf8e0810459e51737371c279705809-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up Hold"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Biceps Brachii, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/333769881.sd.mp4?s=8231057a93124117c92002c61d30e9c7c35d2834&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up Hold Switching Arms": {
    image: "https://i.vimeocdn.com/video/953972747-f02e3cb1f8ecaa7bb7f3294a588e4a40bf0bd1bf44731e7240b323b700c22c6e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up Hold Switching Arms"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/455330316.sd.mp4?s=d096315cc9a254b8eebfa2d4741670a9711ba6a4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up Hold (Top,Middle, Bottom)": {
    image: "https://i.vimeocdn.com/video/965045314-1ae5dd0cdb14ba1f095bd3c4e84ec52e50d77f4894f87dae867417f66a98210a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up Hold (Top,Middle, Bottom)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/462388038.sd.mp4?s=de07a08cd50d29f6a579c7c8e070ea55c5ea70f1&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Up One Arm Negative": {
    image: "https://i.vimeocdn.com/video/1707592562-9545d85110b48545d0ec098ce548deeb3e65ef172bfb085ca90d373b07d6c972-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Up One Arm Negative"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631549/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=788b21819836c50e62b68b0c83116b0878715efbce600185379dc7fed87495fa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups": {
    image: "https://i.vimeocdn.com/video/752049584-dcc9ba93eeba493fdf80f51099a6fce27742589aff1d9be8a19002a64427b25c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760764.sd.mp4?s=c5029ad076b0a1a52c1748665bc402955bf6e198&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Close Grip)": {
    image: "https://i.vimeocdn.com/video/1185085692-21fc5f96288920ce5c576f29629d2f2ee59646dfcf56d888363c00c3178e1be5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Close Grip)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Posterior Deltoid, Latissimus Dorsi & Teres Major.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/573081098.sd.mp4?s=073f2eed4a49ac160fbbe42b4504d494f7808a60&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups Open & Closed": {
    image: "https://i.vimeocdn.com/video/1121498194-ced4baa6f68395751513473031f305e39665b20236fcb4c1a372f77734be1560-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups Open & Closed"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/541693536.sd.mp4?s=65f4275e882c3981d21facb4874188bba21ca047&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Wide Grip)": {
    image: "https://i.vimeocdn.com/video/756061093-aa0f473bf8c2def12a7966914964b2ecb379a2fc1a28d6830ee734eb8a4fd958-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Wide Grip)"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314494968.sd.mp4?s=6c1a44122abbc691677e00c062a5d1ad31c8ebe9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Pull Ups (Wide+Shoulder+Close Grip)": {
    image: "https://i.vimeocdn.com/video/756091245-f5ccd33708b56d234f9b89a34d91c09a692bcaa9368d6823f036fe840f58923e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Pull Ups (Wide+Shoulder+Close Grip)"}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314518873.sd.mp4?s=8125ebc81a9d0c42152d0661b7f02cf2ebab02ed&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Up 21's": {
    image: "https://i.vimeocdn.com/video/1203450441-05174ceee34b15fdefb5c00c029a36f7511d8c64297720aeb65bab22a74af8d6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Up 21's"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/581577816.sd.mp4?s=7927a3361ffd487a93e32dfd7d985a1ae9dbf8dd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "PUSH UP HOLD": {
    image: "https://i.vimeocdn.com/video/1798739606-7ce0db0d64f53329f120df01a48a3e30b999c8f9bfd8e7ee7cb5bddb51a4500b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal PUSH UP HOLD "}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111185/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2907f4e4e8ad24da0ee965dde0eccb30b95e680b74294f9fe0a272244cafb2f1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Up Knee Raise": {
    image: "https://i.vimeocdn.com/video/1027337832-c2384b0319dfe2ddf2394d262bf84ad80e43a4189d2f87063c2f6a37528d7411-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Rectus Abdominis", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Up Knee Raise"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Rectus Abdominis, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/496453635.sd.mp4?s=7f879229d5fe2322537a619f62130c872a538405&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push up pumps": {
    image: "https://i.vimeocdn.com/video/2010952092-d632d73fe822ef5bbb46a5426b89c71cf4fefdb07ba9418e54737491809e7a21-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push up pumps"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1080385187/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9d11515b4eda57179918d863baca6ba12a46cd6f777d268a1e8fbc526aed47fa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push up Pumps": {
    image: "https://i.vimeocdn.com/video/2010952092-d632d73fe822ef5bbb46a5426b89c71cf4fefdb07ba9418e54737491809e7a21-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push up Pumps"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1080385187/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9d11515b4eda57179918d863baca6ba12a46cd6f777d268a1e8fbc526aed47fa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Up Pumps": {
    image: "https://i.vimeocdn.com/video/2010952092-d632d73fe822ef5bbb46a5426b89c71cf4fefdb07ba9418e54737491809e7a21-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Up Pumps"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1080385187/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9d11515b4eda57179918d863baca6ba12a46cd6f777d268a1e8fbc526aed47fa",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups": {
    image: "https://i.vimeocdn.com/video/1798770296-ab111f95269ead81d9b7f89d3bf9df3bfe5643b88271b3a616ea1ccbe02f26b4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913129919/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=803620c82045d948b4ef3e4dc0b5274f8776081620ae78d3884abfc41b34f53d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Push Ups Knees to Elbow": {
    image: "https://i.vimeocdn.com/video/883939440-d4e113efb40d838c36f9627cf130bb0da3ad85e8092a70eef6248e271634f9ff-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Rectus Abdominis", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Push Ups Knees to Elbow"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Rectus Abdominis, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/411782509.sd.mp4?s=fa1170a6e2e27d80c2e908d9cb431c92294718ad&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rainbow Taps": {
    image: "https://i.vimeocdn.com/video/1253304297-eebab048a1ef18ea6a51ed92ed8af3f3c1c73a8b72b4b897b588cb8d8db443ae-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rainbow Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Rainbow Taps.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/613779070.sd.mp4?s=e3a49ddfdb8068cf7e799e2753a6ec29f9f8748c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reach Ups": {
    image: "https://i.vimeocdn.com/video/1698410182-c4fbeddfbdcbe57ac9823f3af4c39e8fe190d28fb3abb442bf900f9f7cbe544e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reach Ups"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reach Ups.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845742624/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=008f506d71889ed17f51f5f71bf1b8cd84d3f43f709fd3bd74e84d10c25d0d50",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rear Delt Flys Against the Wall": {
    image: "https://i.vimeocdn.com/video/1387792993-694d9e16b4b19c5019d6a52a1eb8fd4114516a46d64d0c5437985fe6dec000ba-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Posterior Deltoid", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rear Delt Flys Against the Wall"}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/684766546/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=b8318a6de95d7bf4a028534ad170021a7aa3b16f2abeb69a9aaa92bbd261bfc6",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Rear Delt Flys - Rings": {
    image: "https://i.vimeocdn.com/video/1705887711-a067031c102b201901fd5b8765b8db907f6e68a369723c1db9f28f4b0d051132-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Posterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Rear Delt Flys - Rings "}]
    },
    techniquePoints: ["Hinge forward at hips (or use chest-supported bench) with arms hanging down.", "Raise weights out to sides in a wide arc, leading with elbows and squeezing rear deltoids.", "Lower weights under control without swinging torso."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851257318/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7eb6814942abcf8062cc9f1eeb9ac2837f6f381718d9807c1ea9473f63a04f4e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Australian Chin Up": {
    image: "https://i.vimeocdn.com/video/1984133147-8c0e755473f44a0533e6fe91130ec4b70635b9444413b6fedd7c552266e7f565-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Australian Chin Up "}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052838/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=cd38c6b2e21a025d98b0866993f8f7143517df2a1a0776e81f65d24730052737&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1984133191-7d5082672262b2fbfe512321bb6b4db77d0ded4a3e6e06377be1d3517c114745-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Australian Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052893/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9a7c63dfb4b76b32e898eb83d5a3139aed3611d473c3adcba3f9dca788c33ae7&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Dips": {
    image: "https://i.vimeocdn.com/video/753102865-8d707257810ef8733174ef5e286bcecb3d3ae46dedfd1aa28c0ac1ffddced0bb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760855.sd.mp4?s=0b11ddbf9b3dc355fc230a7401509d067091fdea&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Hang Knee Raises": {
    image: "https://i.vimeocdn.com/video/1429505602-475f992a62c84f50b78dfefbbcc5639779c2010b6a87bbd18a8e0b8deddfce2f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Hang Knee Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451191/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ccf155c6eabc0009cad1ce77e4bd8694195d3eead037b34d94282633eba3d3cd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Leg Flutters": {
    image: "https://i.vimeocdn.com/video/1370155456-48b9fac4bacb7e25c6336b5bacf9ad9bd4b72658dacb87c67fefff09bb25bac7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Leg Flutters"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Leg Flutters.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/676135367/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=fa89ddf97886d47732338db962fbe7e421ed8b27ef8dd2daaadf8fb4bfca9eb9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Leg Raises": {
    image: "https://i.vimeocdn.com/video/1732879792-ec776f050e815ca0c3bb206082da05a038496b1cad3f009c9769f2c5aa3479ac-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709490/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=418f13d57ff670caa6964a438a59e0c77ec05f67196085fa6b09c44baa99c3f4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "REVERSE LEG RAISES": {
    image: "https://i.vimeocdn.com/video/1799087158-789a5b28d3e1d116ff571ceba13138a93c855d69d0f57bc4c7e956717d72bb85-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Gluteal Region", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal REVERSE LEG RAISES "}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913176036/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=fda55314e15e258d079d6249592b1c650a32b20e983e21cc8feb7ccba8f09422",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Lunge Knee Raise": {
    image: "https://i.vimeocdn.com/video/793797441-b007674ccf9da35957668b34850580bd3b67a1039f4fb32ab93a28d452f8a450-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Rectus Abdominis", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Lunge Knee Raise"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344545.sd.mp4?s=5889aa97d528718a779f0b39f55255efeb3e0af3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Plank Leans": {
    image: "https://i.vimeocdn.com/video/877497261-248091bbfbce5ff84e119f20265d986b95c69062cd8bf2a7520ad5bcbbcc5e07-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Plank Leans"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/406944825.sd.mp4?s=f1fd87d974ba6b9124177ae7ed5fcc86919c8eb9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Plank Pumps": {
    image: "https://i.vimeocdn.com/video/1435812826-29cd6fb44ff87e81ec5383c39dcfb862cb7de54bcca3c48069c4c670ef9a9c46-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids", "Erector Spinae", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Plank Pumps"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/712146051/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a56345aa95a73a19092671545793c6124dc3efb83da09833d4c460be539490bf",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Plank Raises": {
    image: "https://i.vimeocdn.com/video/1925130488-f9404b0c80425480447f8d61664a786fb1d5c7d3771d4557305c8d456f9fcf9d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Plank Raises"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1008145993/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f04fe631770848366d00537c1c8fe897ba13657dc663324995bbd81f59c86b6c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Tuck Hold": {
    image: "https://i.vimeocdn.com/video/1370155675-62d8bdd83c12a79603d88436705d0b0071720988bbc8e6a407cf7a49ffca7b4e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Tuck Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Tuck Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/676135397/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=4ba775b7061c012851c37bb9e587bdca0812af2e49c0195473953cefd026a25a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Upside Down Hold": {
    image: "https://i.vimeocdn.com/video/1429505516-d305c8417570d4374029fb36b5282c8fddafa6e59f8204a03e204608ef00c9ad-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Upside Down Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Upside Down Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451428/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2689d54d1a366f37f1e402011cd6c64d08ed6e9edb357fd0c3c922cf3cdc862b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Upside Down Pumps": {
    image: "https://i.vimeocdn.com/video/1429504556-88428a83e8e711afd05bb91fccc86d893cc35ae74bb757259e558a9217bb8581-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Upside Down Pumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Upside Down Pumps.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Biceps Brachii, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708450852/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=fe7588d54691aa5b2c47f1bb9f16292ebb76a2169967c210b57436301f64f2d1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Reverse Upside Down Tuck Hold": {
    image: "https://i.vimeocdn.com/video/1418538238-32e752424da36cacff72e6bb3c0a6d21b2a09a253bad13b6feb67db8f6ddb32c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Reverse Upside Down Tuck Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Reverse Upside Down Tuck Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702065361/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=539e9452e54dfff38ec205f03cd2c9df3920c40b171679e67e1086ab890acfbb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Russian Dips": {
    image: "https://i.vimeocdn.com/video/752050689-6fcbb492b797dadafafb087a254abea772d0f332fa7284b2573173c15b5c15d7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Russian Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/206164391.sd.mp4?s=4050e15798b525e9355830b259a671bcbb7fa2f7&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Scapula Push Ups": {
    image: "https://i.vimeocdn.com/video/1984133323-049e0aa1754c87dbb98bc3e76a3ceb4c85658d80fa4ec70f8ec358c93caa08de-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Scapula Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Trapezius & Rhomboids and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052987/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=64307e919286a0d7ae2859577b86985f29d3dfcba15f2c8e67cdd89e8f67ebfb&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Scapula Shrug Hold": {
    image: "https://i.vimeocdn.com/video/782617204-0bf4412760a3e53dd70ea044670e21c08138c9c51457296efbe4cf4159fdd22e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Scapula Shrug Hold"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915450.sd.mp4?s=81c276ca439fe42b97eeb22cc495ab8f4b253ebd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated In & Outs": {
    image: "https://i.vimeocdn.com/video/1984133355-64584081cd8a736beffa43016252428f1992525c3112ef2c612b79d5eb83f81b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated In & Outs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated In & Outs.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058053032/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b0eb5fb7a583062829b6d37c9baca093205a6147bec3930e613e8ed12703d85c&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Leg Flutters": {
    image: "https://i.vimeocdn.com/video/1984133419-065b6cf75a08b16908ff76689b5373ffe323c652bc229d48d7f2f7fce1993046-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Leg Flutters"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated Leg Flutters.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058053076/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3f1b47332f0e6575e61906281c12c79d96b56bbe1aa5113ef404ed6eed1994d3&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Seated Torso Twist": {
    image: "https://i.vimeocdn.com/video/923200634-4769cb137509ac20c57b5775bef868da958ee71163da4a4fce483f486f415721-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Seated Torso Twist"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Seated Torso Twist.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613749.sd.mp4?s=200103ed3a8b18e4877af84008c1c45db98c2b9c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder Taps": {
    image: "https://i.vimeocdn.com/video/793797624-c68e2b63141caba28d481b89b8f5ab3b0ea1a01760501533048e983451d41c05-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Shoulder Taps.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344758.sd.mp4?s=8f37ea23fbbb3963231f994af319a6426dd51571&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Shoulder to Shoulder": {
    image: "https://i.vimeocdn.com/video/1698396028-4a346ba30547d153dde7fbda77a17bdc4af1a70e65df91828df20e0ef36d1584-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Shoulder to Shoulder"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Shoulder to Shoulder.", "Execute concentric phase with intent, driving force through your Deltoid Group, Rectus Abdominis, Obliques.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733398/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9cf73f5df0718d3220896951130845896f312605bee4c9f7c6fd15d5b8c20b6c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Bar Crunches": {
    image: "https://i.vimeocdn.com/video/1699237265-b995866ba4b571b9011f16f15bd4d0440083ae23f9282fc47ab545b86858c4f2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Bar Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343531/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c989f63d2a435f060ca223240a57b1493c450e3ddaeaac0bc9479146f2402c16",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Hops": {
    image: "https://i.vimeocdn.com/video/1266911048-b973a54a5cc41548085aed14e947f74fbcd569491ae6d9142_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Hops"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Side Hops.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/624625593.sd.mp4?s=b5b796679ffa70e65f9c4d105edb3554519ce76b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Lunges": {
    image: "https://i.vimeocdn.com/video/752051727-6f0ec45dcc31ebd27294c56db09fd1b8c26ce910804b0b2d057b2c6f137f51fc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760812.sd.mp4?s=afc0773c96e8f1855dbaf77e0e9c523521a564b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Crunches": {
    image: "https://i.vimeocdn.com/video/1237966034-05ef79eef32c24e4697d879bb4d5f444a0f3927591db0066bd29e91b2e1fa5a2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Crunches"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/601910984.sd.mp4?s=c98fd8545bfea251529975a9b80c958dbd4b0555&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Hip Raises": {
    image: "https://i.vimeocdn.com/video/779308017-1fcd9adf1c6d423417c3c4a4fe434882068d36e444d7a18d3bff1743d0f278d0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Hip Raises"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/333348947.sd.mp4?s=47a8c5232ebdafdbeb87c3787bc04b20166876d3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Reach Through": {
    image: "https://i.vimeocdn.com/video/779313362-b8cd9857273c0194f95e4c342566036ff39f9347e91fe6b8f1fe001588bb86fd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Reach Through"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/333353258.sd.mp4?s=242036bd04295d71b09e5cdee9c1d0178550be82&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Plank Up & Down": {
    image: "https://i.vimeocdn.com/video/1984132758-9cdff2ce786d046b0e350eec60cb2ee08e8ef04a3b5ae04bee40b0f21d623a12-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Plank Up & Down"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058052481/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0a9f46a6ce6ce74ce2b061a959bb683c528567bbd9b519eb0d69adbb2df6b89c&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side Squats": {
    image: "https://i.vimeocdn.com/video/1783127436-d117c604fdd4cb5c9ec88b14f545f297ac09c7c31b19c8a07f750833999f21f0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166195/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=865fec0330c9be9a215e002d4536b2b8913815a3980616a0d770c7f1ea0a6b03",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Australian Pull Up Negative": {
    image: "https://i.vimeocdn.com/video/1439328526-fe3f35a957573b4c5588c92c639d59ff4864243f1aa666bd3a9251b7e63406ee-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Australian Pull Up Negative"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/714070949/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9a89956c5c3e352cf6eb7a34e2b7e60935165062a0876249b8cd9b21840a10dd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Burpees": {
    image: "https://i.vimeocdn.com/video/1180912396-29f819739935970e418ec023d1b6d766455d59a07be3f28f79f35e01486ad270-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Burpees"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Side to Side Burpees.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/570982565.sd.mp4?s=176119f9bbd7fb2f322f9b2216617ed40e73b0dd&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Hanging Knee Raises": {
    image: "https://i.vimeocdn.com/video/1699237384-7bee649bbc1573b445de39f0cfac92daf7d51813c4e6c90d134497e8db69d81c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Hanging Knee Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343547/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c83284271437e94013899c0f4217532a0913f49e4984c473c21430c576c78734",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Jump Squats": {
    image: "https://i.vimeocdn.com/video/1701250313-9b4904887a9ebaa781cf044fbf28ea163f657adfd19540f5ed57a5a17d5a23f3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Jump Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/847809602/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b601f20e8b04f07bce8db032fa28a2d87c98a517ed1c5e1dc3d87c5d1318dafd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Push Ups": {
    image: "https://i.vimeocdn.com/video/1788971178-b10c91a0ee12e420979c8fbaf73e5e63ad58b4d96302b5cea08f4b676188fe1f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918309/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7953e0f1c743474be0fc93bc5e5ee51a2a08f37c20e7c79ed27c6d7142704764",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Squats": {
    image: "https://i.vimeocdn.com/video/1656856481-c1ab28f69a0eda22c404b47c819f2f05f759994e7adb44cea6bbc53ceaced93b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/818473612/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=04c8e9510dc9291e542075c9cd404a76b1fe62dae4f70b58b569a46bbc0937f1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Side to Side Toe Taps": {
    image: "https://i.vimeocdn.com/video/948879454-2a202693f1e9a69adcc6712c23288cc94f185bac5dcd00efcd0d8209810361d7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Side to Side Toe Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Side to Side Toe Taps.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/452952180.sd.mp4?s=978c8476a34e390f050995ce8f40aaf7e89634bf&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Bar Curls": {
    image: "https://i.vimeocdn.com/video/756092897-c6584c9b8282dc15670212f3d91289019d5bbf24b37b46672ff5684435dc0bb3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Biceps Brachii", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Bar Curls "}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Arm Bar Curls.", "Execute concentric phase with intent, driving force through your Biceps Brachii.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/314520176.sd.mp4?s=c9098584ca6604c2e4129c58a68e514c98c9edd5&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Scapula Shrugs": {
    image: "https://i.vimeocdn.com/video/1706387897-593ce9a11b212dbb8cc2b0abd8c01b28ec85488715be0f142c8f5c920a5e3cd4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Scapula Shrugs"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631518/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=05bc510e5782fe317513be8f62c8df0bf482046e8b5521c89696948ae341eb0e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Arm Scapula Shrugs Hold": {
    image: "https://i.vimeocdn.com/video/753080668-78b1e264fdc493ba538d401972f5766b0ba947da244245d15453633604b0dce4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Posterior Deltoid", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Arm Scapula Shrugs Hold"}]
    },
    techniquePoints: ["Hold weight at arm's length with shoulders depressed.", "Elevate shoulders straight up toward ears without bending elbows or rolling shoulders.", "Hold peak contraction at top for 1 second, then lower under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109636.sd.mp4?s=09e399abf784c7a93de6714e8c536003b4ae46d8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Back Lever Drops": {
    image: "https://i.vimeocdn.com/video/1429504374-4342a6a72d9a51fa8860170a78c5de08eb82ee08bb694323689d1fa398382952-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Back Lever Drops"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708450738/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=38ceff0a1808a4f57c0b470f93e0ba9bd562611c6eb8b146c8cd9ec6e3e3794a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1418537750-6ea6d1c721672c74bccd35c7be76cc58a9054531c0d84c49f88ffd7ac8533a1c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Back Lever Hold"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702064930/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=fc17c50c9acf43ae7ce023ef9a7dc5ea2c32a16f7092b22765dca0969c276c36",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Back Lever Raises": {
    image: "https://i.vimeocdn.com/video/752265827-7c42cea71ebda910c67b6f49126565f8c9ba513742df3390d3ead421c0a1da0f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Rectus Abdominis", "Erector Spinae", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Back Lever Raises"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/206118945.sd.mp4?s=a3d9f49b32fdf34143dfbb7836589aedf0a0cc77&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Burpee": {
    image: "https://i.vimeocdn.com/video/752266293-e07eddd0a767bf38d1dc8bed88201b0daa511fbeb0bc70e6415196878b613c51-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Burpee"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Leg Burpee.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760828.sd.mp4?s=f28f226b07ab93008aa603be8c0fc0d2d09aaa2b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Calf Raises": {
    image: "https://i.vimeocdn.com/video/1783125198-da767122dca6c813a04a797d8d0e6ad59b8592996f1eec8335e66b835f8c584a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Calf Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166306/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=551877efb78c0d6a05f714ceaeeb24bcb73e84061cb6d982e393b52b0418ad5e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Dragon Flag Negative": {
    image: "https://i.vimeocdn.com/video/1697401323-56c521bcec21cdd57d7a135690103546b307d99daa627a211105ffbec1c01669-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Dragon Flag Negative"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/844399369/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2ff4d1885db4ca442a92ab5dc7a4ca85836c3ed297a040aef49344c3cc90825a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Front Lever Negative": {
    image: "https://i.vimeocdn.com/video/2028834549-0fc1238c5f182a31948479257aa5d1be94969ecb9ab26969aa5d61b56e9339b6-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Front Lever Negative"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1095111512/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=6324141e9cba40e442cd3379213c556c663063a9f986336d4052de74e25cbb33",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Front Lever Negatives": {
    image: "https://i.vimeocdn.com/video/2020307752-2011b93a390a330a8ca17ec8f33e4853a1b377d0bd112bf8f2c8bb191739c5f8-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Front Lever Negatives"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088151721/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=738491b7dd23981df26fad7412db187c6ee2ff189f5b842186861c901799fe08",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Front Lever Raises": {
    image: "https://i.vimeocdn.com/video/785010830-b21069107f4c3da08d8af480420855f8c34363f30d59f0e217800af0745efafc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Front Lever Raises"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803015.sd.mp4?s=e0c81765d0faefd6123d0ff439afd5ebb565b90a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Glute Bridge": {
    image: "https://i.vimeocdn.com/video/1783127025-df77454692de612ef831cb5ad5a097b6b0aa7a678951f490ec5a1f888412e5d4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Glute Bridge"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Single Leg Glute Bridge.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region, Hamstring Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166418/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=128a8380b85f2a3f6ec28813534d9ce867d18b3f5febeb20efd8d6a6956db9f8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Hip Thrusters": {
    image: "https://i.vimeocdn.com/video/1783126677-6af86eb43c6713cd82ac00a00a3916a9ea8c836294ecbf769ffdf6a0433a2566-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Hip Thrusters"}]
    },
    techniquePoints: ["Position upper back against bench pad with bar resting over hip crease.", "Drive through heels to extend hips upward until torso and thighs form a straight horizontal line.", "Squeeze glutes intensely at peak height for 1 second, lowering hips down under control."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166523/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f7f92ec48af303b5d9d896d4d39ed405bc8d0b0c1ecc8fdf537f3c12fa427cd8",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Planche Hold": {
    image: "https://i.vimeocdn.com/video/1336218171-8bf4e49808d0a34ab5bf640047ee338a486afb1d21ced52271c017c88775c4c8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Planche Hold"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977119.sd.mp4?s=2b51129c996c897f1eee6a2bb8b854103b7aa081&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Push Up Hold": {
    image: "https://i.vimeocdn.com/video/1798747423-c02bd1f953891462c13e9ff00c34e3a1cbf0722027a50f3c00cea0ad136251bd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Push Up Hold"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group, Erector Spinae and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111203/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=63d86298b74709b80bd9c580fa978a7c065167f606fcb44cd5809b32c0dde0b3",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Push Ups": {
    image: "https://i.vimeocdn.com/video/1798739592-828bd90214c3e697fcd39c09efe71c987ad38d83384a6762195f05c924933440-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Erector Spinae, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111224/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=8d8157886d599683af37bd32e587c57311fe8e9d87359ed7653e69cb08f1442a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Reverse Lunge": {
    image: "https://i.vimeocdn.com/video/1296362633-a95edefc95c2e0fa3c6287598b313cc380eb9ec47c23b1ea6_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Reverse Lunge"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/644463348.sd.mp4?s=39f43da7b9f4fa521d4f69066318ef47a1ec4118&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Romanian Deadlift": {
    image: "https://i.vimeocdn.com/video/1783126465-a9678a3d3453f2dd657019031464734569b7e6dde448618b05795a9af0b1d0c9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Romanian Deadlift"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166649/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=5712f146d254cb7e7a9c3f3ca4153dd6e8f42205bc40dc3bea0a0102320d04d7",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Single Leg Romanian Deadlift + Knee Raises": {
    image: "https://i.vimeocdn.com/video/804735074-abec00894967b8dc917c7cc466e331f0235bb05ad6d9734ad5f26d752154e1a5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Single Leg Romanian Deadlift + Knee Raises"}]
    },
    techniquePoints: ["Stand tall with weight held in front, knees soft but static.", "Push hips far backward while lowering weight along thighs, feeling deep hamstring stretch.", "Drive hips forward to return to standing position without arching lower back."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/352762812.sd.mp4?s=6e7a80a2f39919e45af73858f326f9f239393fb8&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers": {
    image: "https://i.vimeocdn.com/video/1804825543-c834d30631cd71d68afb288804e6b45398ac9d131eb8899a9d6d3e6e35f0fd18-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers "}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/916834429/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=48d76075ce1edbfbd0e8e1d13d5200d1ed3b31836040d8cd58e3932db10a9e69",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers (Advanced)": {
    image: "https://i.vimeocdn.com/video/753937345-7a6879295a1c3bf2289d2522c9542a1e0a61a3555adc2db5b47360f9bace4ec3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers (Advanced)"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759824.sd.mp4?s=c004b91186a5946af394622e2dce352ce0fd249f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers Closed Grip (Advanced)": {
    image: "https://i.vimeocdn.com/video/753937438-954ef7d15ef4f4bbb90455eb3a7fd8b05b486902fbcc000d24e92ddba43621e5-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers Closed Grip (Advanced)"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/198905144.sd.mp4?s=76ded7ebd24a0a70a8c652a04e93b8bad1249697&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Skull Crushers Closed Grip (Beginners)": {
    image: "https://i.vimeocdn.com/video/751986176-7a6a3e2ff0a6c8a9f300ff777494e7a9bd31de7cee970f6950b4547fa6421812-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Latissimus Dorsi & Teres Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Skull Crushers Closed Grip (Beginners)"}]
    },
    techniquePoints: ["Lie on flat bench holding bar or dumbbells directly above shoulders.", "Hinge at elbows to lower weight toward forehead or behind head while upper arms stay vertical.", "Extend elbows back to starting lockout position, squeezing lateral and long tricep heads."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197220424.sd.mp4?s=96bed8651bedf73a3b2aa57c9519ff05cdc51283&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Slow Dips": {
    image: "https://i.vimeocdn.com/video/752267530-01f4d0841583ab6c4dfb118a9693021684e8062ae02c40221a045ff553f0b631-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Slow Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760857.sd.mp4?s=86969c7339e8dd3b7b30ed15d8ea91743b589916&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Slow Motion Dips": {
    image: "https://i.vimeocdn.com/video/752267609-2c4c3ad292afa312ba9799908e145bdb5332c1efa818e814514dcf1452b323fb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Slow Motion Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/208209247.sd.mp4?s=5c2279b01ae4204f2fc74a17a759e99766d6330c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Slow Motion Wide Push Ups": {
    image: "https://i.vimeocdn.com/video/943590985-1df512f666c82493038df2f1d3ee2e4228d2facaae24da349e88e8e9bdcfadc7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Slow Motion Wide Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/449781771.sd.mp4?s=1efdf2e366197aba196628633ba9f9b4e0b7b214&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Slow Push Ups": {
    image: "https://i.vimeocdn.com/video/1779396334-379a83bc5861f578d54ea1650f9db7d00d5647b2106506af3a068ada7c95770d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Slow Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/900827878/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e0ad7d1429979993bb0031b2805976a3dbec0f70091d46f2e634824c2845a00a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Spiderman Push Ups": {
    image: "https://i.vimeocdn.com/video/752268051-495aee8b1defef3abe7114e691d207445ff16443fe1a693a67499cb34f89f01a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Spiderman Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Rectus Abdominis, Deltoid Group, Obliques and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759814.sd.mp4?s=ac97539ffd710a09867f26587cf08a3730cad7bc&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Kicks": {
    image: "https://i.vimeocdn.com/video/752268447-c6533a761cb722a0317d113a67e68e958eda54630b79a213dfdde1daa1930624-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Kicks"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760843.sd.mp4?s=a0cf185ecc919584d6a06026a1dd31da97c13260&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Lunge": {
    image: "https://i.vimeocdn.com/video/752268494-8acf57e7cd3450eec489424185cc4f4e9997aec58315e925e57814d36067c272-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Lunge"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Hamstring Group, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760842.sd.mp4?s=945de6372053ce48e36c194ce43aa7e25cb7ef6c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squats": {
    image: "https://i.vimeocdn.com/video/1982356093-96bd4a7f5cc1b6e943de71ad614934be1e7c538f85fb373967c967d2c1c82d33-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1056581490/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2d2574f4f6022047ca41c75a2727043109974199a3de4014e1609dbb673a3a24",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squats + Calve Raises": {
    image: "https://i.vimeocdn.com/video/1801357163-7e0408a6cc5b136511f6d9b0b27237f0a4ed5bfcc1d33d86e063af3f2919ce08-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squats + Calve Raises"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/914682052/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a5da6d54e677797e5e189b6d11488710f0bf74ed04f2dcf3b9dc1426f8d1d66a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Side Leg Raises": {
    image: "https://i.vimeocdn.com/video/1220026613-560d304cc3a648ed2dfc5af9db78988c1f076f94ced88f0a6a3a6bf7df3291db-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Side Leg Raises"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/589966430.sd.mp4?s=368ec86fefb9201af19693ddf8c437a5af2b8792&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Squat Taps": {
    image: "https://i.vimeocdn.com/video/1698395987-733e62f54a4d772a018a25db45d045d929585f1b473c4f3258a0e68be743eb1b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Squat Taps"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region, Calf Group and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/845733411/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e8bcab31f3a4d29f57fdc62a7417362b5490f12fdcfb782984221154bfefb304",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Kick Backs": {
    image: "https://i.vimeocdn.com/video/1296362336-79652abd189d247fd4b4cb9a8dcd8def8017159f1c890336b_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Kick Backs"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Standing Kick Backs.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/644463366.sd.mp4?s=15f37e564326b61bda805fe7573b62e147011fb0&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Knee Crunches": {
    image: "https://i.vimeocdn.com/video/1266911611-0626eabd4a71cc3a61d13afedb0b2fcc419a2cdc3d298adf4_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Knee Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/624625638.sd.mp4?s=75bab05e08e82127a06eab37604c993fb232254e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Side Crunches": {
    image: "https://i.vimeocdn.com/video/817481129-5cef006ce07d22e1d0ca9b674b8bf4988032a74023519ad64481ffda75d40092-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Side Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/362589577.sd.mp4?s=794f56cb885d1dd9ef8369dd4331269b8bc6c92c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Standing Toe Touches": {
    image: "https://i.vimeocdn.com/video/923200878-1504465bea701b98e9bb3b41c577d049f6b2ca7f70d9ec78b674a93b89d9bddc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Standing Toe Touches"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Standing Toe Touches.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Hamstring Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613879.sd.mp4?s=95f1fb357bf77982ac261da9ac998c18a8eccfd4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Star Crunches": {
    image: "https://i.vimeocdn.com/video/1788971248-ef22154000ec0816590177df4eb7f4fec2340fa09d88b9f1a4356afe6f5d9f29-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Star Crunches"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/906918357/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=36f4591d1b77a5059d670f28fd8d3d6f114e8e3ade6a88ebb9f2b2027606ef1a&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Stationary Lunges": {
    image: "https://i.vimeocdn.com/video/1405142399-7ee5dccf8616ca9e61660ac10b9bd1b98df2c07f62e433b3805d54f29dc09b70-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Stationary Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/694535011/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=c8586563162bc375d8f87fd8fc234b354d2690523ba21162424cb0bc0cdcaf00",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straddle 90 Degree Hold": {
    image: "https://i.vimeocdn.com/video/753080616-271f768a6b6507fffb8dbb974ec6085f85b9d51ff5dc4c93ce321a8cbcdacab8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straddle 90 Degree Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straddle 90 Degree Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group, Pectoralis Major, Triceps Brachii Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109656.sd.mp4?s=90df8a7f4fab4a47bf48062fe69be28553755e92&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straddle Planche Lean Kicks": {
    image: "https://i.vimeocdn.com/video/1319590192-7a5a9ab73f44be57aca0bf34e04e3d13c698d65a149e66760f323d9cec76390d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straddle Planche Lean Kicks"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/653807281.sd.mp4?s=7ffd5b377094c4acabb465b65dd865af289b83bd&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straddle Planche Lean Raises": {
    image: "https://i.vimeocdn.com/video/1319590044-2935cafccb6951662f32514fc94d8b524f442b462a0757735439dbad85550ea7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straddle Planche Lean Raises"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/653807285.sd.mp4?s=31b09511fca39fdbba7d0a69a4ffd95e91ebd8df&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straddle Planche to 90 Degree Negative": {
    image: "https://i.vimeocdn.com/video/1319590712-bb3f3f6bebc62f9a8de2a9849d7a3e1ad4b8c34f23cab5ab784063df020047d6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straddle Planche to 90 Degree Negative"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/653807301.sd.mp4?s=5e9c07b116b3c31250605a578d569770d2d0b863&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "STRAIGHT ARM LAT PULL DOWN + HOLD": {
    image: "https://i.vimeocdn.com/video/1732882259-eaaeb3e4492c6fdbeeaf2f5ca77c6b6c4d972f4693786e987988c08db02edf06-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal STRAIGHT ARM LAT PULL DOWN + HOLD"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting STRAIGHT ARM LAT PULL DOWN + HOLD.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/870709598/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b02a1ae3233d2baca108369cdc0e2083ab6149f795143550a7ca76ccf5fda5df",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Pike Press": {
    image: "https://i.vimeocdn.com/video/785011335-54f0c6f16924c68005c91f53504407ffc73c8a50a33dc5fff2a1ecca74e8f098-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Pike Press"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Pike Press.", "Execute concentric phase with intent, driving force through your Deltoid Group, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803389.sd.mp4?s=debb1607df6620079b80cf741a2d05e006649378&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Plank Lean": {
    image: "https://i.vimeocdn.com/video/781693920-d5e817a85b0b23f274d9a83a578fff2563cf399bd64815695ed6b85a3ffe4e82-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Plank Lean"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335183281.sd.mp4?s=0855d27878531ba669f6639df7d7c4a6cff6654d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Press - on Dip Bars": {
    image: "https://i.vimeocdn.com/video/616542053-152b39a49cd74fd3d16b673c5d3c272b4dbff866a01317938cd7a2b2023d1114-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Press - on Dip Bars"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202492973.sd.mp4?s=55c69bf67b7a522c7a450972d9bfb71bb411cc31&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Ring Hold": {
    image: "https://i.vimeocdn.com/video/616541911-a4855e5b344a288288d26d24d5e45c4485f71a6b5033cb06ad7522763595a6d1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Ring Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Ring Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202493035.sd.mp4?s=5819aa84daf7866c21f8d86313f45720bda733a9&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Ring Taps": {
    image: "https://i.vimeocdn.com/video/616541856-9e89b3c7365aa9ab4c09020201e8f107ec44ded41fcf336e6c8b201c4d7895bd-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Ring Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Ring Taps.", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202493094.sd.mp4?s=89df0b2f0b882b7bdd996a7ec3827c9257ef3663&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Side Plank": {
    image: "https://i.vimeocdn.com/video/752269872-f35f519d3f305729c732e5af01846ab9044da6c164681fbe119208241f8e5d59-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Side Plank"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/197213459.sd.mp4?s=fe74a507891bdf903bffec2b33788f283f9ea06f&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Arm Walk": {
    image: "https://i.vimeocdn.com/video/752269997-8f77fd71250c00ccdfe62a01afcc280f3106118f2e94b7a7b87e595398608f3a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Arm Walk"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Arm Walk.", "Execute concentric phase with intent, driving force through your Triceps Brachii Group, Deltoid Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/223324431.sd.mp4?s=73e544dfb298ebb459a3e3633912d61f150d2a31&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Bar Dips": {
    image: "https://i.vimeocdn.com/video/754824255-8ae4a98abf90371cfb9af12597e1dfdd875c43106b8c46d21a7b3b5bb0d24232-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Bar Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760839.sd.mp4?s=e8bd703b065d0003f7c32bacb5279855e9dffb4c&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Bar Dips (Close Grip)": {
    image: "https://i.vimeocdn.com/video/799343196-15ea35a42e00c3d403c89fb641f15eea559ce0283071fff5990125faf40f5dec-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Bar Dips (Close Grip) "}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/348646712.sd.mp4?s=ac6e8741a66b5c8647df2aaa78f23a080b43e4b2&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Bar Dips (Supinated Grip)": {
    image: "https://i.vimeocdn.com/video/802996578-d2edae28c7a03581dc1b871b37a6c5d4062b28d73bdf0e5d6e7d8d124befb66e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Bar Dips (Supinated Grip)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/351413427.sd.mp4?s=fa3e97d0071d715c74fd5cc4cf630265ab1ae926&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Bar Handstand Against the Wall (Parallettes)": {
    image: "https://i.vimeocdn.com/video/752270559-ce17dc9347fbadcd9a1fb32db0a8f36db290a0da319b7995ae2af03da680d464-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Bar Handstand Against the Wall (Parallettes)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Bar Handstand Against the Wall (Parallettes).", "Execute concentric phase with intent, driving force through your Deltoid Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759809.sd.mp4?s=d155a9bf79261728bcf26c4ea1e9aeecd480d2c6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Dips": {
    image: "https://i.vimeocdn.com/video/790284287-99312f53fce123f2db090db7259177a84035599f69f2f2fe1cdd0848e1f6f767-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major", "Deltoid Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/341620760.sd.mp4?s=bd0aef0312854fc80ce60afc56e4fd99556e353d&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Straight Leg Handstand Negative": {
    image: "https://i.vimeocdn.com/video/781647622-bc5cf2a6f7a1eda31df5838aa647eddf89efd6a917df61242259cdcc98e58cb6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Straight Leg Handstand Negative"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Straight Leg Handstand Negative.", "Execute concentric phase with intent, driving force through your Deltoid Group, Rectus Abdominis, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335157564.sd.mp4?s=77178db978d803d196cf65df1b477073056a6944&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Squats": {
    image: "https://i.vimeocdn.com/video/973191685-b2d4228e3ab8a68949e6864718ded7f1bff780691563b509b55be16d7d9e6185-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Squats"}]
    },
    techniquePoints: ["Set feet shoulder-width apart with toes turned slightly out.", "Brace core, descend by bending hips and knees simultaneously until thighs reach parallel or below.", "Drive through mid-foot to stand up, engaging your Quadriceps Femoris, Gluteal Region and locking glutes at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/467061803.sd.mp4?s=46b0fa242b294bec0fde0db2e251368504c0bc8a&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Sumo Walks": {
    image: "https://i.vimeocdn.com/video/1224072123-8f2eef6a9078f291640cb9f6a4bd96212c364d04281ded76501d56737df71487-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Sumo Walks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Sumo Walks.", "Execute concentric phase with intent, driving force through your Quadriceps Femoris, Calf Group, Gluteal Region.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/592327834.sd.mp4?s=0f7646e1b5e63762f6babce64abe018fc186e904&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Superman Dips": {
    image: "https://i.vimeocdn.com/video/995046614-a2d218807690333f940ffb8e42ffa1f149ec20b8c2ef31dcf885e2a7ba5ab1d6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Erector Spinae", "Anterior Deltoid", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Superman Dips"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/479395543.hd.mp4?s=2e2f5b6059bef23784f7df1cb9a4860e79f1d66b&profile_id=174&oa\nuth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Superman Hold": {
    image: "https://i.vimeocdn.com/video/793798043-5717e8bda430da038d1bebe4d1dde8c41037189efdfa5a6ef1bb8be74f2ea255-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Superman Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Superman Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344345070.sd.mp4?s=716b385a20c791c1a3a814707a00ed12a50fdc3b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Superman Pumps": {
    image: "https://i.vimeocdn.com/video/793798159-88fb73897b34862ffdc01ec334480e7facbc69d6066717fa8692cfeb8f045077-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Superman Pumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Superman Pumps.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344345152.sd.mp4?s=3b5302f5a7a9a1e3c9111173d25bb18ba9906187&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Superman Push Ups": {
    image: "https://i.vimeocdn.com/video/1967563478-d4e08dac512bff5bdd61fd32e67fbd192de816d842f467ea6500fcacab37d0cc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Superman Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Biceps Brachii and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507550/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0c060aca5fcbcddb4e5945090570c7b145d57c07429fc83aa9b970fce87008f5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Bench Dips": {
    image: "https://i.vimeocdn.com/video/863039236-4d4429427fe243d9a97f566c0d469021a71ae4d8e41a18e3596eedd77b88d43d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Bench Dips"}]
    },
    techniquePoints: ["Place hands shoulder-width apart on the edge of a bench with feet extended forward.", "Lower your hips vertically close to the bench until elbows form a 90-degree angle.", "Press upward through your palms, fully contracting your triceps at the top without shrugging shoulders."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/396332653.sd.mp4?s=d5a07779af28567318c04ca4f98a9f0e8d461c69&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Supinated Planche Push Ups": {
    image: "https://i.vimeocdn.com/video/1967562941-f41659b0095656775130cf89c61029da7f3807c80cb4d36209a28d7235756721-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Supinated Planche Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1043507561/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=dd201a44146ec6c15e98f27f980d70375942817b70fff294c4e88e6d5be010eb",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Lunges": {
    image: "https://i.vimeocdn.com/video/1783126107-7d59da039431ab2d01db5361d36f2e8bbf774c5addca82bd4e6ba3b65a0ad89f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region", "Hamstring Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Lunges"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166773/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b0395257dc284843762c4847c2730d33b2fe1c374ae14cf33c05df7df3838cb4",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Mountain Climbers": {
    image: "https://i.vimeocdn.com/video/1984133449-17777d9d4f7b2030b821ab99ea1a33b8d29b45d0650da087fab6d6b8eaea81d9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Mountain Climbers"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058053118/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=54a432338a830886cf5086189408174ff9c454fdce9c77e9f3a9364939ae68a3&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching One Arm Pull Up Hold": {
    image: "https://i.vimeocdn.com/video/1706388417-e07e325c43cfb01e0f2747a4124bc542a995f12549c119d9a8841bb20f99cb16-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching One Arm Pull Up Hold"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851631583/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0542c43dd2e229161acf227d65d11dd12ac0cb6db347d93cd3bfec02093a0309",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Switching Single Leg Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1431228832-ae8a56e74d6831118b0d675750586b0c33b14645a75c9d7a817055ea78d485cf-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Erector Spinae", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Switching Single Leg Back Lever Hold"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/709502641/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=f5bd1fa36f1e73bdab322929976de22faee9ec1ce4b13960c225221796fcd151",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tibialis Raises": {
    image: "https://i.vimeocdn.com/video/1296362090-1dd2ea72e63bd0bb2501bd6fc34dedfc50aea87757b8b5ff5_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tibialis Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/644463385.sd.mp4?s=6e6950d05b6efee12bf1f7c14d588334a586e0bb&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tip Toe Wall Sit": {
    image: "https://i.vimeocdn.com/video/752271618-4ce65eaec848f5dc8ddd780c05656235c995c18f7d7d0fc372d904870b5c7c3b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tip Toe Wall Sit"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759804.sd.mp4?s=017b834f4ff2c54e557edd37b26b93884b0ae992&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toes to Bar": {
    image: "https://i.vimeocdn.com/video/2020016543-6be991e3264086e1f2cfdba0780d1c33f56da328f184c7f03e3543a50d98d730-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toes to Bar"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toes to Bar.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906598/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=0c726befb02d56d1b2d0c1147cd73e1f09b7086952c66fd8f5d3188c8fe5e865",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toes To Bar": {
    image: "https://i.vimeocdn.com/video/1699238320-849ecd741fe6480e5570ae7e866c939d8e74cafdced17f181047921d31632ff2-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toes To Bar"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toes To Bar.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343564/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=3d971c30cde0b6dd24740373a62d2b30df17283c613a9c0e0f7b91221c476828",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toes To Bar Pull-Ups": {
    image: "https://i.vimeocdn.com/video/2020016613-e782756e07e7cbace1344436d5c36a04125f071a27580de0bb80a9f33f6c41bc-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toes To Bar Pull-Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Biceps Brachii, Forearm Group, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906674/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=63efcb321dd77a7c5f6b2580024ee631959e6536f44760d55437c8a675ee7f0d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toe Taps": {
    image: "https://i.vimeocdn.com/video/793797252-656d85e8d80251588a1d14980939efccd07aacf264742387f47e494618b3d64d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toe Taps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toe Taps.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Quadriceps Femoris, Calf Group.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/344344454.sd.mp4?s=ebc2b08fee2ca35986e59685feed251975e59a1b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Toe Touches": {
    image: "https://i.vimeocdn.com/video/1887343898-3db3555463258ecd8611798cf9d0ea762b4824936639d34618f75209f0a5e3e0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Toe Touches"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Toe Touches.", "Execute concentric phase with intent, driving force through your Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/973235123/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=053df85d243834d8be85668fb89946009d7aae122034d756761f035e90ab2779",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "T Push Ups": {
    image: "https://i.vimeocdn.com/video/802996844-005e931bb5b191c34d9b1f2bf90ee8939d203fe48df73d6df320bbdb420b1bdc-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal T Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group, Obliques and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/351413589.sd.mp4?s=5d40262c37a3cd0cb597de8767e319ac9375e317&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Extension": {
    image: "https://i.vimeocdn.com/video/752274049-51eb00dfe680c3c10724b5aac66b91cced60f8b50784f5c31dfa6fa0f6e70ffa-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Extension"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Triceps Brachii Group.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760798.sd.mp4?s=a7c3efa013f9d2a7621f7780e98880b81678bdd3&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tricep Extension Knees to Elbow": {
    image: "https://i.vimeocdn.com/video/752274351-5b83880c862cdcb6f4102675b19fdf3e45e60aafcd4446849f70e0181493a5c4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Triceps Brachii Group", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tricep Extension Knees to Elbow"}]
    },
    techniquePoints: ["Keep upper arms stationary throughout the entire rep.", "Extend forearms until elbows lock out fully, isolating your Rectus Abdominis, Triceps Brachii Group, Obliques.", "Control eccentric phase to feel a deep stretch in the triceps muscle belly."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760799.sd.mp4?s=a9630e8a36dffca31be85fe6aadc7f5b6876c332&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Back Lever Hold": {
    image: "https://i.vimeocdn.com/video/1418538019-a7db5d442a9f943ca4f381f41a24877e02f6927fa3a2b74b7ca46e30023f6ba1-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Back Lever Hold"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702065266/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=41ed1feca15b82a206e22aa89f56a9774bb413fa04a9b1937f2b40ffd6711562",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Back Lever Pull Ups": {
    image: "https://i.vimeocdn.com/video/796472570-64e7da228b53a693fdad2508b6b1aaa5b8e4aeac0535e33aa7048ff22faf5d0b-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Back Lever Pull Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/346424539.sd.mp4?s=f8e10be6d086911112ad37ba53d2319f838d6e87&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Back Lever Raises": {
    image: "https://i.vimeocdn.com/video/1418537313-fb184dff2a9a18f652c21c4af623a13e48ab1280c6ca41549ba1049ddcc90ab4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Back Lever Raises"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/702064674/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=836d8ab9c016f45d3591be08bd75545cc59672037f34e0e55c4e4d28cc505303",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Back Lever to Advanced Tuck Back Lever": {
    image: "https://i.vimeocdn.com/video/1429505173-214fc8602c80ea54d2fc5d59b9cbf730b1599a89eac19a0711d5ce172cff7729-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Back Lever to Advanced Tuck Back Lever"}]
    },
    techniquePoints: ["Invert on the bar or rings and lower your body backward into a horizontal line face-down.", "Protracted and depress shoulder blades, keeping straight arms and squeezing upper chest and biceps.", "Maintain a rigid hollow body hold from shoulders to toes throughout the duration."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451289/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4bac26c549e71079c40424fcc7af7c662f5ab4cfc764238b3ec33851f0f3b86a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Dragon Press Hold": {
    image: "https://i.vimeocdn.com/video/1387793158-08e8e1feeffdb41914c2af0fede21586cda1e14d68189a907058734c8a2b9794-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Dragon Press Hold"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/684766414/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=d579e5642004a6fc3baccf3376028610db5b7bfa7e2dd6fa42391c09c04a2aec",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Dragon Press Raises": {
    image: "https://i.vimeocdn.com/video/1387793422-aedbf7b55ad350c52324a5736e124ca3948b4f7f544a038cf11d0831ceb121ff-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Posterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Dragon Press Raises"}]
    },
    techniquePoints: ["Lie on bench gripping top of bench behind head.", "Drive legs and torso up into a vertical line, supporting weight on upper back.", "Lower entire body slowly as a rigid plank until just above bench, then pull back up."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/684766435/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=79c1138574b10ca698575d03b6631e9a6b9bb4e9e06a8a4628125ca4403f7f58",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tucked L-Sit Walks": {
    image: "https://i.vimeocdn.com/video/785010977-8e88d37665be510872cd36498a52c0a78ad9decf7fdad65ee3bf6a0f7fbe0cd0-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tucked L-Sit Walks"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/337803178.sd.mp4?s=f4ccbb2e96e8cc101f357cfbb940ebd3003dda32&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tucked Windshield Wipers": {
    image: "https://i.vimeocdn.com/video/753080813-61e40004311b40701b89b4457fc2aca98a50f4c2777a1c7731e347ff65f43e54-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tucked Windshield Wipers"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Tucked Windshield Wipers.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Trapezius & Rhomboids, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109769.sd.mp4?s=386df86d07dc9a86f16f4e5cadee974492011b2b&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Front Lever Hold": {
    image: "https://i.vimeocdn.com/video/2020310885-93305faf68ee032f8421ed9e30bee40532f22589b6b7fc1f6cc902281d2cfe0b-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Front Lever Hold"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088154371/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7de1f83b130eb610089003c260ffa68aabe356840f69d2a3595cfde7eabe811d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Front Lever Raise Pull-Ups": {
    image: "https://i.vimeocdn.com/video/2020016860-a92dc9e7696fd9e15d9ee65e9e7e95478a7963fc021fe4f63a63e29cdafd6039-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid", "Forearm Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Front Lever Raise Pull-Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Posterior Deltoid, Forearm Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906883/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=e18adf29412a4ec71f92f145c56bebcd6f84cabac7fd970d05f24bd02ba755af",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Front Lever Raises": {
    image: "https://i.vimeocdn.com/video/2020303212-803b023c48f3de0e1bd9cdf78a617478272f2e9a0f9f62a738a9afe26a26d066-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Front Lever Raises"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1088147942/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2fd9d1d172be937190410f0bf3c44551437a1dec85924a565ee4f4ee6e7367d5",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Front Lever + Scapula Pull-Ups": {
    image: "https://i.vimeocdn.com/video/2020016684-10dc1e7bffceaebbc471346ebd547035a7517fbab59bb7aff2f75ac9aa49f138-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Forearm Group", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Front Lever + Scapula Pull-Ups"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Forearm Group, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906720/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=9d41de2f737ecba026542929e5c6eff955b04b79eb62e9451749520daac06c4a",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Handstand Hold": {
    image: "https://i.vimeocdn.com/video/781695630-5452920c9ecb8cd3b2ce1bf1dc3e72958e6cea9c0efbbdb9279bc0da0cdc97f7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Handstand Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Tuck Handstand Hold.", "Execute concentric phase with intent, driving force through your Deltoid Group, Anterior Deltoid.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335184564.sd.mp4?s=1ab670efabcadfa47ce9794fdbaca2f56de91d26&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "(Tuck Handstand Press Pumps)": {
    image: "https://i.vimeocdn.com/video/1690423468-8d22a068e9cdc17071ec8010a0692dd6fea4e0ac4869fdef69e75bf3dc6bd7a6-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal (Tuck Handstand Press Pumps)"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting (Tuck Handstand Press Pumps).", "Execute concentric phase with intent, driving force through your Deltoid Group, Triceps Brachii Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/840426274/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=416c20cddaf7e2bf3a39f1a9d876c7d0cc8f73821f32822e22f173ec6736c7d1",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Handstand Pumps": {
    image: "https://i.vimeocdn.com/video/782617324-a3da0b3d42a5d63917915986d224e963267866764eece46240cfa10a2d5bbd07-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Handstand Pumps"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Tuck Handstand Pumps.", "Execute concentric phase with intent, driving force through your Deltoid Group, Triceps Brachii Group, Pectoralis Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/335915585.sd.mp4?s=e3f0681e5b39e9e64e819479a90c9014e3d8c503&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit Hold": {
    image: "https://i.vimeocdn.com/video/752274511-6dd982240849dd7f2c21bd07d9977a4c1b752ca764b1745ee36c659c0bd5a7bb-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit Hold"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760867.sd.mp4?s=b44e99b2e3b7e1910d85139d07ab35eb953edee0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit Raises": {
    image: "https://i.vimeocdn.com/video/1699237387-959c5fa66bc8763796471354c2160d88603e54fdb3c78cb73cc428e808c9a1d9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/846343588/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=c79bc91e9676db9ad929155308172ac6b31ee6da9b88ce8397379f06db0bfa94",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit to Inverted Row Pull Up": {
    image: "https://i.vimeocdn.com/video/1355251405-37a2fc7fa0a1294dbab826303dbde6ae4171ef5bbcfef99490be02403f5ca282-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Latissimus Dorsi & Teres Major", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit to Inverted Row Pull Up"}]
    },
    techniquePoints: ["Raise legs to 90 degrees parallel to the floor in a strict L-sit hold before initiating the pull.", "Keep core and hip flexors locked as you pull your chest to the bar without swinging or dropping your legs.", "Lower back down smoothly while holding the L-sit position throughout the set."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/669104089/rendition/360p/360p.mp4?loc=external&oauth2_token_id=1299073511&signature=ee0cf4221c82f5442695e45d05c5be2205343eb4bbc337bda711c6e345252013",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit To Straddle Planche": {
    image: "https://i.vimeocdn.com/video/1319590205-2c1501cca73e08e30c43865dff72943e5cd82d7c43c9c0f2298e37b8d0ceda4f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Anterior Deltoid", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit To Straddle Planche"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/653807312.sd.mp4?s=a29a6f6c2c228ab6c3414c3bb27f0a83a8458592&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit to Tuck Planche (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/753080707-7cc9571227b7ad88b39778145bd4ce9e2e0b4b6e2c2b4b7cbae899118b151f81-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit to Tuck Planche (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109687.sd.mp4?s=bd1bc4db14ac7004b06ae8e907f953ad89197061&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck L-Sit to Tuck Planche (Parallettes)": {
    image: "https://i.vimeocdn.com/video/753080647-e4f7ef978761f4aa1118be703cb53522fee3dc9b09a225f2b897442ce92405de-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck L-Sit to Tuck Planche (Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109705.sd.mp4?s=b4fb652761f9b5614889b8eaf047cae5940291be&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold": {
    image: "https://i.vimeocdn.com/video/1705887889-b87ede1ef1b56850fc34e2b64ec62dbd25eb86094216803e64d4a5131998c420-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/851257383/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=ff8d104df9ddc42f42ceefbbcbba4be695f530a782657a6331b4e57d10f52115",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752275817-132b68ab98a81e771b7d587579b3bf0a90d82ad6cd29ff31c80781bdc2b3ef0a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202493286.sd.mp4?s=33cc5909b7a5fceb2a14801caa75fd5b37961661&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/752275869-dff984779b635e432d5df212f4cefeac2fca05b83e18f1e296e76e02eadd6502-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold (On Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759820.sd.mp4?s=9258c7fd0ec311d5f732409cdb82c410c44a9e12&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold - on Rings": {
    image: "https://i.vimeocdn.com/video/616541605-802450b066667ad27eec172fa2d68fb5651515ab7d066f7601f70ed95296aef8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold - on Rings"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/202493375.sd.mp4?s=ce83ef10f6f7078ffc347e41c035b4dc245f161e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Hold Toe Taps": {
    image: "https://i.vimeocdn.com/video/1336218350-bedae99b7263677f9b30accf0d93e0637a2efcd5b060655e158ff2d437a29999-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Hold Toe Taps"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977130.sd.mp4?s=2814d2acc29dc12e0e84eadda4d8368c90c48e4d&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Kicks": {
    image: "https://i.vimeocdn.com/video/1336218316-0b592bfe9a892713dc8a1b2861efa887c242a3d64cb3ef60adfc563606e13387-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Kicks"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977156.sd.mp4?s=d5e427fbe0a1f3c75319b379c07c7e48246388f2&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Negative": {
    image: "https://i.vimeocdn.com/video/894558903-f2ad6a3f0d41c995793da85bf24acebe9c06a2774a7094fdb5539f0b12954d35-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Negative"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/419609391.sd.mp4?s=ee098fb8fddc0dda28cfb851a162edf64d484f35&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Press to Handstand": {
    image: "https://i.vimeocdn.com/video/753080677-bc34da81555fa72b6261224c20f8bb00d614808a0eb6e1c5232ecbb5e8df76ed-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Press to Handstand"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109716.sd.mp4?s=16e0815dc9966e0fec5545081657d27e42a57761&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Pumps (On Dip Bars)": {
    image: "https://i.vimeocdn.com/video/752276664-c2acceafad1596aeb7c8ea396f7c26659fad722053d1f222d6c7be6b22bc5093-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Pumps (On Dip Bars)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760852.sd.mp4?s=162ce45f8341af2fa93fe245e529f7457d934913&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Pumps (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/752276818-ffb9d767d2bdb2b21414f98d43309019d20fe3656b9c84c63021a12a50b9600f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Pumps (On Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759812.sd.mp4?s=c243e717b2ded1992e6298a175992115e7b66315&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Push Ups (On Dip Bar)": {
    image: "https://i.vimeocdn.com/video/752281008-635628354c13fc30a082ff2fbe87f6164467c1617cbfb319d060270afc01932d-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Push Ups (On Dip Bar)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group, Pectoralis Major and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760851.sd.mp4?s=189a58a279d44b6f54c71081726a553d7e9a0b46&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Push Ups (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/1935765658-a9685bc1f67d023375c54f085e983f31ba9250f909b0bdd048aabc7c9ff572a8-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Triceps Brachii Group", "Anterior Deltoid", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Push Ups (On Parallettes)"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Deltoid Group, Triceps Brachii Group, Anterior Deltoid, Pectoralis Major and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1017712603/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=7921fb4799957701659ce6b9f46d418a2796c3c7a2aab8ee4cc36328d2fce743",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche Raises (Box)": {
    image: "https://i.vimeocdn.com/video/1336218394-e71085765a4db8d656df764e53f85781b2a903e7c9529854c25b0a63e4ea2411-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche Raises (Box)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977175.sd.mp4?s=c126e7e9a082c165ecd4dfb2248d95945b61088e&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche To 90º": {
    image: "https://i.vimeocdn.com/video/1119248431-4adb8e814dffcdc89ddd60432d335e748d0732e59b225dd0571c4380a2f40a9c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Pectoralis Major", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche To 90\u00ba"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/540715306.sd.mp4?s=72691c0851048c984411ece8e297940fe5faa201&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche to Full Planche (On Parallettes)": {
    image: "https://i.vimeocdn.com/video/753080726-5853e006767579b1ebd0e0cfaba05ed1d4bdfd56bb62efb79fcf77a444c45bd3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche to Full Planche (On Parallettes)"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109736.sd.mp4?s=d6545df617814c89db5fda263d5e46b016c7a070&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche to Plank": {
    image: "https://i.vimeocdn.com/video/1336218358-8234aaa9bc3603fe969dffa4632548ee41c264ab737fd2a1e7c6a26d56b3624c-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche to Plank"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977199.sd.mp4?s=b40ef786d84c0b7abc9c1ecfc655d9ef729d456a&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche to Straddle 90º": {
    image: "https://i.vimeocdn.com/video/1336218428-713ae3d6411946a98b4578a3f246bb55d454858f2eddde7d208c6c9054f37c97-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche to Straddle 90\u00ba"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/660977231.sd.mp4?s=b42cd3f0e1915a633bc9f6451dcb7cc1b4a6743d&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Planche to Straddle Planche": {
    image: "https://i.vimeocdn.com/video/753080769-c4ee5e76ce4d33d4f2b565889560b10e732f98f5f6103dcd4b798bda82c645a3-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Pectoralis Major", "Erector Spinae", "Anterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Planche to Straddle Planche"}]
    },
    techniquePoints: ["Place hands on floor or parallettes, leaning shoulders forward into maximum scapular protraction.", "Lift legs off the floor into a horizontal hold parallel to the ground with straight elbows.", "Flex core, lower back, and glutes hard to hold a solid straight-body alignment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109757.sd.mp4?s=1e30925710fe830eb28a335de434f8d0fb03d1df&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Reverse Leg Raises": {
    image: "https://i.vimeocdn.com/video/1370156181-ff2ad1381c51b90dbc0a2e0c00273a214dfa380e95538935644ac01a6ad5f895-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Erector Spinae", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Reverse Leg Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/676135423/rendition/360p?loc=external&oauth2_token_id=1299073511&signature=1ab679fce16687a273b5cf1657ab6fe77e637fe0dba5db84d843a24c2e54d744",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Tuck Toes To Bar": {
    image: "https://i.vimeocdn.com/video/1708583887-afbcd55ce663d5da69457ba9b5a9015c23aaa0610bfcc32aaa79957269b19c0e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Tuck Toes To Bar"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Tuck Toes To Bar.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Latissimus Dorsi & Teres Major.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/853008858/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=61de1f59dd169f7a8d7500c44267ca905c8318029cf153cedc8b24505fd8bc8d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Twisting Sit Ups": {
    image: "https://i.vimeocdn.com/video/883939543-9ccf4d111053e7c588fec534fe978a9668a847bcb8aa0876b2ced3c8d77108af-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Twisting Sit Ups"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/411782546.sd.mp4?s=28956d7220dd1d5bc432052d0bc8ed7e7783d855&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Typewriter Australian Chin Up": {
    image: "https://i.vimeocdn.com/video/1777765923-f52972622fbd5834f2e13b5bd7b556b6278f417545c8eb3644663b79ec01d915-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Typewriter Australian Chin Up"}]
    },
    techniquePoints: ["Grip the bar underhand (palms facing you) shoulder-width apart.", "Initiate the pull by depressing your shoulder blades and driving elbows straight down toward your ribs.", "Pull until your chin clears the bar, squeezing your biceps and lower lats hard at the top position."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/899884917/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=eea993bbddee76ccbd386a438306618f6fdad10648c276c97d48774894ebd64d",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Typewriter Australian Pull Up": {
    image: "https://i.vimeocdn.com/video/1777770095-fddb9f305338ef9c4fc0606c9dcd2252d8ad4005e34bbf64fb297572bc5f0947-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Biceps Brachii", "Posterior Deltoid"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Typewriter Australian Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Biceps Brachii, Posterior Deltoid.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/899887171/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=23a27fa1f1d86b1adb4e31d6d0c0ddd1ae257332acb49f57ef6300145c502e01",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Typewriter Push Ups": {
    image: "https://i.vimeocdn.com/video/2010952271-864e6db8c22dedaeb0089379495dfe438fef2639b395838a456176685dc838e5-d_1920x1080?&r=pad",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Typewriter Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1080385223/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b2738e86829744869eba1cc60255fa5838a10505e4f3a4f43cd02174b5acc759",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Uneven Push Ups": {
    image: "https://i.vimeocdn.com/video/847694659-ac724a1ea50627b133c10f187035f84749d99fddb31ff7c56aa1fb281fdac66e-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Uneven Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Triceps Brachii Group, Deltoid Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/385539206.sd.mp4?s=69ccfbc3ac8395599cee5aaeeb6b1ca332b67e61&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Deadlift": {
    image: "https://i.vimeocdn.com/video/2020017050-3247c151a7971ef75a3a64d1477238261030e6ecb04763e75ebc81329827bbde-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Erector Spinae", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Deadlift"}]
    },
    techniquePoints: ["Set feet hip-width apart under bar, hinge at hips and grip bar just outside legs.", "Pull slack out of bar, flatten back, and drive floor away using quad and hip extension.", "Lock out hips at top by squeezing glutes, then lower bar in a controlled hinge."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087907027/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=a8390eb1b15adce6782360ac975a40b506aadcdba91c7c2d30e2f5ff25eba15c",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Deadlift Pull Up": {
    image: "https://i.vimeocdn.com/video/2020017008-7c808ddb02e91383af41c5aeb61ed88fe9bd7863eb2e18479dc3da2cfdb756b7-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Rectus Abdominis", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Deadlift Pull Up"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Trapezius & Rhomboids, Biceps Brachii, Rectus Abdominis, Latissimus Dorsi & Teres Major, Erector Spinae.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087906963/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=b7ce175c15060d8d2a88563de11b2125d0c267d7236771e8b3064fcc0732a5ac",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Deadlift (Pull Up Bar)": {
    image: "https://i.vimeocdn.com/video/2025992275-1d80538087e5f01ea7da2ec714196bec4b66f1ed799f100d34909135ea528223-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Deadlift (Pull Up Bar)"}]
    },
    techniquePoints: ["Hang from the bar with an overhand grip, starting from a full arm extension (active hang).", "Depress your scapulae and pull your chest toward the bar, driving elbows down toward your hips to engage your Rectus Abdominis, Deltoid Group.", "Pause briefly at peak chin height, then lower smoothly over 2-3 seconds to full extension."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/173760888/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=14fc55f64bf701db781da015ccaa518cfdcc14691c7d6be4004ae016b010328f",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Front Lever Hold": {
    image: "https://i.vimeocdn.com/video/2020017090-47fad309c260900762460483403946add97d383f553bacd07f3392e25189e277-d_1080x608?&r=pad&region=us",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Posterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Front Lever Hold"}]
    },
    techniquePoints: ["Grip the bar overhand, depressing and retracting shoulder blades while pulling down with your lats.", "Raise your torso and legs into a horizontal line parallel to the ground, keeping arms completely straight.", "Lock glutes, core, and quads tight to prevent arching or sagging during the hold."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1087907059/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=2ec05d50fa6715270e9816f9bf291120b915f29c9aa4ee427b2cb7f910790202",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upside Down Hold": {
    image: "https://i.vimeocdn.com/video/1429505566-030ce5be2e5d76466538abdaaab1419d055a174dec43364ffb85f616c5192834-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Latissimus Dorsi & Teres Major", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upside Down Hold"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Upside Down Hold.", "Execute concentric phase with intent, driving force through your Trapezius & Rhomboids, Latissimus Dorsi & Teres Major, Erector Spinae.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/708451515/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=92153516c7145684be1a146f81a506c17cbbb73f80a83ff482f59730ffc376fd",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Upward Dog": {
    image: "https://i.vimeocdn.com/video/923200927-57e7da14f9ba054fb89dfdc8dced172905a82ea261c002535375e9dccc728f48-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Full Body"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Full Body", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Upward Dog"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Upward Dog.", "Execute concentric phase with intent, driving force through your Full Body.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/437613949.sd.mp4?s=4ee27c1e8b739cac438aa082244ce21b7529f6ca&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Walking Lunges": {
    image: "https://i.vimeocdn.com/video/802996927-324a8aed27f9631b38970a394df247d03931a08f16c7266e323f6b2ae2076c44-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Hamstring Group", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Walking Lunges"}]
    },
    techniquePoints: ["Take a generous step forward/backward, keeping hips square and torso upright.", "Lower back knee toward floor until front thigh is parallel to ground and knee tracks over toe.", "Drive off front foot to return to starting position, keeping core braced."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/351413639.sd.mp4?s=ac142da4686c3ff0b451eda6e396727e0e6c2f6e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Plank": {
    image: "https://i.vimeocdn.com/video/752282341-4c0645fd5da3c3e0bde8b7edff92cb6cbc162efafb93c5b970f9c3ca22b4282a-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Rectus Abdominis", "Erector Spinae"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Plank"}]
    },
    techniquePoints: ["Set up on forearms/hands and toes, forming a straight line from head to heels.", "Squeeze glutes, pull belly button inward, and tuck pelvis into posterior pelvic tilt.", "Hold position statically while taking short, controlled breaths."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173759803.sd.mp4?s=b7d1b0514e7d9b12624dc6e4e9ceb529263dd2e4&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Sit": {
    image: "https://i.vimeocdn.com/video/1783126358-26ff5940837b4dfffdf006bbab0dba0700bce72e667f06550b1f6c8a712b7271-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Gluteal Region"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Sit"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/903166974/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=61e3c272a2710e5c9442b14806c54ee3acfc136afc210e1144e0a9efed72265b",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Sit Calf Raises": {
    image: "https://i.vimeocdn.com/video/1296362229-86f1999003a7cf5ff3aae96d05736860daead224d1f239553_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Quadriceps Femoris", "Calf Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Quadriceps Femoris", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Sit Calf Raises"}]
    },
    techniquePoints: ["Engage core before initiating movement, tucking pelvis to flatten lower back against floor/bench.", "Contract rectus abdominis / obliques sharply during concentric phase, exhaling completely.", "Control return under tension without allowing lower back to hyperextend."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/644463403.sd.mp4?s=1bcf02018ebae7065d6bbad70d8ede1812667d73&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wall Walks": {
    image: "https://i.vimeocdn.com/video/752283135-cb5096f78890d6d2cd8a0396b7c2b4232af216ed67ba178cf8754d24801ddf4f-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Deltoid Group", "Anterior Deltoid", "Rectus Abdominis"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Deltoid Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wall Walks"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Wall Walks.", "Execute concentric phase with intent, driving force through your Deltoid Group, Anterior Deltoid, Rectus Abdominis.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173755316.sd.mp4?s=d685d86954b9c1947d9b668dcfa842175ca166e6&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Australian Pull Ups": {
    image: "https://i.vimeocdn.com/video/1984133619-5ce14378cfa4a0177ed30f687a719b86d98e25a625e17c25573ce3c8f9ff4dc9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Biceps Brachii", "Latissimus Dorsi & Teres Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Australian Pull Ups "}]
    },
    techniquePoints: ["Grip the bar wider than shoulder-width with an overhand grip.", "Drive your elbows down and out to focus tension on the upper outer latissimus dorsi.", "Lower under full control to a dead hang, maintaining active shoulder engagement at the bottom."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/1058053202/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=4200c012244762733df034b5bf1c11f44bcb70cc0a1894a97b08ad0d59e44ada&user_id=53893387",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Body Rows": {
    image: "https://i.vimeocdn.com/video/1287295523-099c94b898251a6480c6ab46fe1ea45869046028c4384a38e_1080x608",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Trapezius & Rhomboids", "Deltoid Group", "Posterior Deltoid", "Biceps Brachii"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Trapezius & Rhomboids", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Body Rows"}]
    },
    techniquePoints: ["Maintain a braced, neutral spine position throughout the movement.", "Drive elbows back to pull weight toward lower ribs, contracting your Trapezius & Rhomboids, Deltoid Group, Posterior Deltoid, Biceps Brachii.", "Control the eccentric return to full stretch without allowing shoulders to round forward passively."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/640055173.sd.mp4?s=73ce6f09c1c7536633a6ba4d0f61f918d4ea9c13&profile_id=164&oauth_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Pike Push Ups": {
    image: "https://i.vimeocdn.com/video/753080827-4350f08367b8e6f62747c33132f302aa71526cf82e143c42d7f568469925add4-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Triceps Brachii Group", "Deltoid Group", "Pectoralis Major"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Triceps Brachii Group", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Pike Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Triceps Brachii Group, Deltoid Group, Pectoralis Major and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/312109787.sd.mp4?s=4ecf73409a498a07c27d11052a4c27b46eff20a0&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Push Up Hold": {
    image: "https://i.vimeocdn.com/video/1798739660-f150a4ad0df6a7f4b84fbb622b0f03bf5092ffdbc3e69b0fffd0cdd5911421b7-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Push Up Hold"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111241/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=903f870a4592459f84b8c61bf66eb84e29d97654d0db44c3fd3a9c84bfd4846e",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Push Ups": {
    image: "https://i.vimeocdn.com/video/1798739896-2c6727a72e14131c83dbffb603f9cd01c777830fe9a4ee9e20406cca7c54d657-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Deltoid Group", "Triceps Brachii Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Push Ups"}]
    },
    techniquePoints: ["Set up with hands slightly wider than shoulder-width, forming a solid plank from shoulders to ankles.", "Lower your chest under control until elbows reach 90 degrees, keeping them angled 45 degrees from your torso.", "Press through your palms to lock out, fully engaging your Pectoralis Major, Deltoid Group, Triceps Brachii Group and protracting scapulae at top."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/progressive_redirect/playback/913111258/rendition/360p/file.mp4?loc=external&oauth2_token_id=1299073511&signature=951cc71bd6a30e860de26a9fc9380d0e2bfb8f16bbef51e56431fc2ed7b3fcb9",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Wide Straight Bar Dips (Supinated Grip)": {
    image: "https://i.vimeocdn.com/video/959986000-f0d4330221754e10d51ee46d2be4b7e447ec2c0e6d2bf8083607411e272a3131-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Pectoralis Major", "Triceps Brachii Group", "Deltoid Group"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Pectoralis Major", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Wide Straight Bar Dips (Supinated Grip)"}]
    },
    techniquePoints: ["Grip parallel bars firmly, supporting your body weight with arms fully extended and core engaged.", "Incline your torso slightly forward for chest emphasis (or stay upright for triceps), lowering until shoulders reach elbow level.", "Drive through your palms to return to starting position, locking out elbows with controlled speed."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/459480171.sd.mp4?s=989820bb76aac22f5a84f5f6c78547af0ef7739e&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
  "Windshield Wipers": {
    image: "https://i.vimeocdn.com/video/752280083-7c7939c5442a9b155dd54e3c990b18b4d7097fc0d5606b29060a71a524fb76b9-d_1920x1080",
    subcategory: "Bodyweight",
    muscles: {
      strength: ["Rectus Abdominis", "Obliques", "Latissimus Dorsi & Teres Major", "Trapezius & Rhomboids"],
      stability: ["Scapular & Thoracic Muscles", "Core", "Erector Spinae"],
      mobility: [{"muscle": "Rectus Abdominis", "level": "Moderate", "description": "Requires adequate shoulder, hip and spinal mobility for optimal Windshield Wipers"}]
    },
    techniquePoints: ["Establish a stable base and brace your core to protect your spine before starting Windshield Wipers.", "Execute concentric phase with intent, driving force through your Rectus Abdominis, Obliques, Latissimus Dorsi & Teres Major, Trapezius & Rhomboids.", "Maintain controlled tempo on eccentric phase to maximize muscle fiber recruitment."],
    category: "Calisthenics",
    youtubeLink: "https://player.vimeo.com/external/173760873.sd.mp4?s=3da9a4285958e0822fa6cd053a994522db38c586&profile_id=164&oauth2_token_id=1299073511",
    substitutions: ["Push-Up", "Pull-Up", "Dips"]
  },
};
