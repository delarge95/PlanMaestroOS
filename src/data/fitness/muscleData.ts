// src/data/fitness/muscleData.ts

export type MuscleGroupCategory = 'Legs' | 'Back' | 'Chest' | 'Shoulders' | 'Arms' | 'Core' | 'Thorax';

export interface MuscleGroupInfo {
  name: string;
  category: MuscleGroupCategory;
  overview: string;
  specificMuscles: string[];
}

export interface SpecificMuscle {
  name: string;
  group: MuscleGroupCategory;
  origin: string;
  insertion: string;
  functions: string[];
  biomechanicalRole: string;
  mainExercises: string[];
  aesthetics: string;
  precautions: string;
}

export interface MuscleTarget {
  group: string;
  specific?: string;
}

export const muscleGroupsDatabase: { [key: string]: MuscleGroupInfo } = {
  "Pectoral Region": {
    name: "Pectoral Region",
    category: "Chest",
    overview: "The pectoral region is primarily responsible for horizontal pushing movements and bringing the arms across the body. It consists of the large Pectoralis Major and the smaller, underlying Pectoralis Minor, both crucial for a powerful and full-looking chest.",
    specificMuscles: ["Pectoralis Major", "Pectoralis Minor"]
  },
  "Deltoid Group": {
    name: "Deltoid Group",
    category: "Shoulders",
    overview: "The deltoids are a group of three distinct sets of fibers (heads) that cap the shoulder, giving it a rounded appearance. They are responsible for lifting the arm in all directions: forward (anterior), to the side (lateral), and backward (posterior). Developing all three heads is essential for creating broad, 3D shoulders and maintaining joint health.",
    specificMuscles: ["Anterior Deltoid", "Lateral Deltoid", "Posterior Deltoid"]
  },
  "Rotator Cuff Group": {
    name: "Rotator Cuff Group",
    category: "Shoulders",
    overview: "The Rotator Cuff is a critical functional group of four muscles and their tendons that surround the shoulder joint. Their primary role is not to produce large movements, but to stabilize the head of the humerus (the 'ball') within the glenoid socket of the scapula. They are essential for shoulder health, controlling rotation, and providing stability during all arm movements.",
    specificMuscles: ["Rotator Cuff (SITS muscles)"]
  },
  "Latissimus Dorsi & Teres Major": {
    name: "Latissimus Dorsi & Teres Major",
    category: "Back",
    overview: "This group forms the primary width of the back, creating the 'V-taper'. The Latissimus Dorsi is the largest muscle of the back, responsible for powerful pulling movements. The Teres Major, often called the 'lats' little helper,' assists in the same movements and adds thickness to the upper back below the armpit.",
    specificMuscles: ["Latissimus Dorsi", "Teres Major"]
  },
  "Trapezius & Rhomboids": {
    name: "Trapezius & Rhomboids",
    category: "Back",
    overview: "This group forms the 'upper shelf' and middle thickness of the back. The Trapezius is a large, diamond-shaped muscle with upper, middle, and lower fibers responsible for shrugging, retracting, and depressing the scapula. The Rhomboids lie beneath the traps and are key players in pulling the shoulder blades together, crucial for posture and rowing strength.",
    specificMuscles: ["Trapezius (Upper, Mid, Lower)", "Rhomboids"]
  },
  "Erector Spinae": {
    name: "Erector Spinae",
    category: "Back",
    overview: "These are a bundle of muscles running vertically along the spine, often described as the 'lower back'. Their primary role is spinal extension (arching the back) and providing isometric stability during heavy compound lifts like squats and deadlifts. A strong erector spinae is fundamental for spinal health and transferring force.",
    specificMuscles: ["Erector Spinae"]
  },
  "Biceps Group": {
    name: "Biceps Group",
    category: "Arms",
    overview: "Located on the front of the upper arm, this group is responsible for flexing the elbow (curling) and supinating the forearm (turning the palm up). It consists of the two-headed Biceps Brachii, which creates the 'peak', and the underlying Brachialis, which adds significant thickness to the arm.",
    specificMuscles: ["Biceps Brachii", "Brachialis"]
  },
  "Triceps Brachii Group": {
    name: "Triceps Brachii Group",
    category: "Arms",
    overview: "Making up two-thirds of the upper arm's mass, the triceps are essential for arm size and all pressing movements. This three-headed muscle's primary function is elbow extension (straightening the arm). The long head also assists in shoulder extension.",
    specificMuscles: ["Triceps Brachii"]
  },
  "Forearm Group": {
    name: "Forearm Group",
    category: "Arms",
    overview: "This complex group of muscles is responsible for grip strength, wrist flexion (bending palm down), and wrist extension (bending palm up). Key muscles include the Brachioradialis for elbow flexion with a neutral grip and the various flexors and extensors for hand and wrist control.",
    specificMuscles: ["Brachioradialis", "Wrist Flexors", "Wrist Extensors"]
  },
  "Abdominal Group": {
    name: "Abdominal Group",
    category: "Core",
    overview: "The abdominal group forms the anterior and lateral walls of the core. It includes the Rectus Abdominis (the 'six-pack') for trunk flexion, the Obliques for rotation and side-bending, and the deep Transverse Abdominis which acts as a natural corset, stabilizing the spine.",
    specificMuscles: ["Rectus Abdominis", "Obliques"]
  },
  "Gluteal Region": {
    name: "Gluteal Region",
    category: "Legs",
    overview: "The gluteal region is a powerhouse for human movement, responsible for hip extension, abduction, and rotation. It's comprised of the large Gluteus Maximus, which drives powerful movements, and the smaller Gluteus Medius and Minimus, which are crucial for hip stability and pelvic alignment, especially during single-leg activities. The Tensor Fasciae Latae (TFL) also contributes to hip stability and flexion.",
    specificMuscles: ["Gluteus Maximus", "Gluteus Medius & Minimus", "Tensor Fasciae Latae (TFL)"]
  },
  "Quadriceps Femoris": {
    name: "Quadriceps Femoris",
    category: "Legs",
    overview: "The quadriceps are a group of four muscles on the front of the thigh that are the primary extensors of the knee. They are essential for squatting, running, jumping, and walking. Balanced development of all four heads is key for knee health and aesthetic leg development.",
    specificMuscles: ["Rectus Femoris", "Vastus Lateralis", "Vastus Medialis", "Vastus Intermedius"]
  },
  "Hamstring Group": {
    name: "Hamstring Group",
    category: "Legs",
    overview: "Located on the back of the thigh, the hamstrings are a group of three muscles that primarily function to flex the knee and extend the hip. They are crucial for explosive movements like sprinting and are vital for stabilizing the knee joint, acting as an antagonist to the quadriceps.",
    specificMuscles: ["Biceps Femoris", "Semitendinosus & Semimembranosus"]
  },
  "Adductor Group": {
    name: "Adductor Group",
    category: "Legs",
    overview: "Located on the inner thigh, the adductors are a group of muscles whose primary function is hip adduction (bringing the leg toward the midline of the body). They are crucial for stability during squatting and single-leg movements, and they contribute significantly to the overall mass of the upper leg. They also assist in hip flexion and rotation.",
    specificMuscles: ["Adductor Magnus", "Adductor Longus & Brevis"]
  },
  "Hip Flexor Group": {
    name: "Hip Flexor Group",
    category: "Core",
    overview: "This is a functional group of muscles located at the front of the hip, responsible for hip flexion (lifting the knee towards the chest). It includes muscles from both the leg and the core, such as the Rectus Femoris (one of the quadriceps) and the powerful Iliopsoas. Due to modern sedentary lifestyles, these muscles are often tight, which can lead to postural issues like anterior pelvic tilt and lower back pain.",
    specificMuscles: ["Iliopsoas", "Rectus Femoris"]
  },
  "Calf Group (Triceps Surae)": {
    name: "Calf Group (Triceps Surae)",
    category: "Legs",
    overview: "The calf is composed of two primary muscles: the large, two-headed Gastrocnemius, which is most visible, and the underlying Soleus. Together, they are responsible for plantarflexion (pointing the foot down), which is essential for walking, running, and jumping.",
    specificMuscles: ["Gastrocnemius", "Soleus"]
  },
  "Ankle & Foot Stabilizers": {
    name: "Ankle & Foot Stabilizers",
    category: "Legs",
    overview: "This is a functional group of muscles in the lower leg, primarily the peroneals and tibialis muscles, that control the fine movements of the ankle and foot. They are responsible for eversion (turning the sole of the foot outwards), inversion (turning it inwards), and dorsiflexion. These muscles are critically important for balance, especially during single-leg movements, and for absorbing shock during dynamic activities like running and jumping.",
    specificMuscles: ["Ankle Evertors & Invertors"]
  },
  "Scapular & Thoracic Muscles": {
    name: "Scapular & Thoracic Muscles",
    category: "Thorax",
    overview: "This group includes muscles that directly control the movement and stability of the scapula (shoulder blade) and contribute to the function of the rib cage. A key muscle here is the Serratus Anterior, which is vital for protracting the scapula and plays a major role in shoulder health and punching movements.",
    specificMuscles: ["Serratus Anterior"]
  }
};

export const specificMusclesDatabase: { [key: string]: SpecificMuscle } = {
  "Pectoralis Major": {
    name: "Pectoralis Major",
    group: "Chest",
    origin: "Clavicular head: Medial half of clavicle. Sternocostal head: Sternum, upper six costal cartilages.",
    insertion: "Lateral lip of bicipital groove of humerus.",
    functions: ["Shoulder Flexion (clavicular head)", "Shoulder Adduction (bringing arm across body)", "Internal Rotation of the humerus.", "Horizontal Adduction (fly movements)."],
    biomechanicalRole: "Prime mover in all horizontal pressing and fly movements. A powerful internal rotator of the shoulder.",
    mainExercises: ["Barbell Bench Press", "Dumbbell Bench Press", "Dumbbell Incline Press", "Push-ups", "Dips"],
    aesthetics: "Forms the bulk of the chest. The clavicular (upper) head creates the upper 'shelf'. The sternocostal (main) head provides overall mass.",
    precautions: "Shoulder impingement risk with improper form. Retract scapula during presses."
  },
  "Pectoralis Minor": {
    name: "Pectoralis Minor",
    group: "Chest",
    origin: "Ribs 3-5.",
    insertion: "Coracoid process of the scapula.",
    functions: ["Stabilizes scapula by drawing it downward and forward.", "Scapular Protraction and Depression."],
    biomechanicalRole: "Key stabilizer of the scapula.",
    mainExercises: ["Dips", "Push-ups", "Lat Pull-Over"],
    aesthetics: "Deep muscle. Tightness pulls shoulders forward.",
    precautions: "Regular stretching recommended."
  },
  "Anterior Deltoid": {
    name: "Anterior Deltoid",
    group: "Shoulders",
    origin: "Lateral third of the clavicle.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Flexion (raising arm forward).", "Assists in internal rotation."],
    biomechanicalRole: "Prime mover in raising arm forward and overhead pressing.",
    mainExercises: ["Overhead Press", "Push Press", "Dumbbell Incline Press", "Barbell Bench Press"],
    aesthetics: "Creates front cap of the shoulder.",
    precautions: "Easily becomes overdeveloped relative to rear delt."
  },
  "Lateral Deltoid": {
    name: "Lateral Deltoid",
    group: "Shoulders",
    origin: "Acromion process of the scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Abduction (raising arm to side)."],
    biomechanicalRole: "Primary muscle responsible for shoulder width.",
    mainExercises: ["Dumbbell Lateral Raise", "Upright Row"],
    aesthetics: "Key head for creating shoulder width and 3D look.",
    precautions: "Avoid momentum/swinging during lateral raises."
  },
  "Posterior Deltoid": {
    name: "Posterior Deltoid",
    group: "Shoulders",
    origin: "Spine of the scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Extension and Horizontal Abduction.", "External Rotation."],
    biomechanicalRole: "Crucial for pulling movements and shoulder joint stability.",
    mainExercises: ["Face Pull", "Bent Over Reverse Dumbbell Flye", "Pendlay Row"],
    aesthetics: "Rear delts create 3D separation from back.",
    precautions: "Needs direct high-volume work."
  },
  "Rotator Cuff (SITS muscles)": {
    name: "Rotator Cuff (SITS muscles)",
    group: "Shoulders",
    origin: "Supraspinatus, Infraspinatus, Teres Minor, Subscapularis.",
    insertion: "Greater and lesser tubercles of humerus.",
    functions: ["Stabilize humeral head in glenoid socket.", "Internal/External rotation."],
    biomechanicalRole: "Dynamic stabilizer for glenohumeral joint.",
    mainExercises: ["Face Pull", "Band Pull-Apart"],
    aesthetics: "Deep functional stability muscles.",
    precautions: "Train with light weights and controlled form."
  },
  "Latissimus Dorsi": {
    name: "Latissimus Dorsi",
    group: "Back",
    origin: "Spinous processes T7-L5, thoracolumbar fascia, iliac crest.",
    insertion: "Floor of bicipital groove of humerus.",
    functions: ["Shoulder Extension", "Shoulder Adduction", "Internal Rotation."],
    biomechanicalRole: "Primary pulling muscle of upper body creating V-taper.",
    mainExercises: ["Pull-ups", "Chin-Up", "Seated Cable Row", "Pendlay Row"],
    aesthetics: "V-taper width muscle.",
    precautions: "Drive elbows down and back for full activation."
  },
  "Teres Major": {
    name: "Teres Major",
    group: "Back",
    origin: "Inferior angle of scapula.",
    insertion: "Bicipital groove of humerus.",
    functions: ["Shoulder Adduction", "Internal Rotation."],
    biomechanicalRole: "Strong synergist to Latissimus Dorsi.",
    mainExercises: ["Pull-ups", "Seated Cable Row"],
    aesthetics: "Adds upper back thickness under armpit.",
    precautions: "Trained concurrently with lats."
  },
  "Trapezius (Upper, Mid, Lower)": {
    name: "Trapezius (Upper, Mid, Lower)",
    group: "Back",
    origin: "Occipital bone, spinous processes C7-T12.",
    insertion: "Clavicle, acromion, spine of scapula.",
    functions: ["Upper: Shrugging", "Mid: Retraction", "Lower: Depression."],
    biomechanicalRole: "Key stabilizer and mover of scapula.",
    mainExercises: ["Deadlift", "Dumbbell Shrug", "Face Pull"],
    aesthetics: "Yoke look upper traps and mid-back thickness.",
    precautions: "Engage mid and lower traps by pulling blades back and down."
  },
  "Rhomboids": {
    name: "Rhomboids",
    group: "Back",
    origin: "Spinous processes C7-T5.",
    insertion: "Medial border of scapula.",
    functions: ["Scapular Retraction and Downward Rotation."],
    biomechanicalRole: "Prime mover for squeezing shoulder blades.",
    mainExercises: ["Seated Cable Row", "Pendlay Row", "T-Bar Row"],
    aesthetics: "Mid-back thickness preventing rounded posture.",
    precautions: "Pause at peak contraction."
  },
  "Erector Spinae": {
    name: "Erector Spinae",
    group: "Back",
    origin: "Iliac crest, sacrum, lumbar spinous processes.",
    insertion: "Vertebrae, ribs, skull.",
    functions: ["Spinal Extension", "Lateral Flexion."],
    biomechanicalRole: "Isometric tension during squats/deadlifts to keep spine neutral.",
    mainExercises: ["Deadlift", "Back Squat", "Romanian Deadlift"],
    aesthetics: "Thick columns along spine (spinal erectors).",
    precautions: "Never lift with rounded lumbar spine."
  },
  "Biceps Brachii": {
    name: "Biceps Brachii",
    group: "Arms",
    origin: "Short head: Coracoid process. Long head: Supraglenoid tubercle.",
    insertion: "Radial tuberosity.",
    functions: ["Elbow Flexion", "Forearm Supination."],
    biomechanicalRole: "Prime mover for elbow flexion and supination.",
    mainExercises: ["Chin-Up", "Barbell Curl", "Incline Dumbbell Curl"],
    aesthetics: "Creates bicep peak.",
    precautions: "Control eccentric phase."
  },
  "Brachialis": {
    name: "Brachialis",
    group: "Arms",
    origin: "Anterior humerus.",
    insertion: "Tuberosity of ulna.",
    functions: ["Pure Elbow Flexion."],
    biomechanicalRole: "Most powerful flexor of elbow.",
    mainExercises: ["Hammer Curl", "Chin-Up"],
    aesthetics: "Pushes bicep peak up and adds arm thickness.",
    precautions: "Neutral grip hammer curls target this muscle."
  },
  "Triceps Brachii": {
    name: "Triceps Brachii",
    group: "Arms",
    origin: "Long head: Infraglenoid tubercle. Lateral/Medial: Posterior humerus.",
    insertion: "Olecranon of ulna.",
    functions: ["Elbow Extension."],
    biomechanicalRole: "Sole extensor of elbow joint.",
    mainExercises: ["Dips", "Close-Grip Bench Press", "Skull Crusher"],
    aesthetics: "Constitutes 2/3 of upper arm mass.",
    precautions: "Full warm-up to protect elbows."
  },
  "Brachioradialis": {
    name: "Brachioradialis",
    group: "Arms",
    origin: "Lateral supracondylar ridge of humerus.",
    insertion: "Styloid process of radius.",
    functions: ["Elbow Flexion in neutral grip."],
    biomechanicalRole: "Powerful elbow flexor in neutral position.",
    mainExercises: ["Hammer Curl", "Chin-Up"],
    aesthetics: "Prominent forearm muscle near elbow.",
    precautions: "Heavy neutral grip movements target this."
  },
  "Wrist Flexors": {
    name: "Wrist Flexors",
    group: "Arms",
    origin: "Medial epicondyle of humerus.",
    insertion: "Carpals, metacarpals.",
    functions: ["Wrist Flexion", "Grip Strength."],
    biomechanicalRole: "Grip strength and wrist flexion.",
    mainExercises: ["Barbell Curl", "Deadlift"],
    aesthetics: "Inner forearm mass.",
    precautions: "Balance with extensor work."
  },
  "Wrist Extensors": {
    name: "Wrist Extensors",
    group: "Arms",
    origin: "Lateral epicondyle of humerus.",
    insertion: "Metacarpals.",
    functions: ["Wrist Extension."],
    biomechanicalRole: "Stabilize wrist during presses.",
    mainExercises: ["Barbell Bench Press", "Overhead Press"],
    aesthetics: "Top outer forearm muscle.",
    precautions: "Reverse curls strengthen directly."
  },
  "Rectus Abdominis": {
    name: "Rectus Abdominis",
    group: "Core",
    origin: "Pubic crest.",
    insertion: "Xiphoid process and costal cartilages 5-7.",
    functions: ["Trunk Flexion", "Anti-extension stability."],
    biomechanicalRole: "Trunk flexion and core anti-extension.",
    mainExercises: ["Hanging Leg Raise", "Plank", "V Sit-Up"],
    aesthetics: "Six-pack muscle.",
    precautions: "Drive movement from spinal flexion, not neck pull."
  },
  "Obliques": {
    name: "Obliques",
    group: "Core",
    origin: "Ribs 5-12, thoracolumbar fascia.",
    insertion: "Iliac crest, linea alba.",
    functions: ["Trunk Rotation", "Lateral Flexion"],
    biomechanicalRole: "Rotation and anti-rotation stability.",
    mainExercises: ["Bicycle Crunch", "Hanging Leg Raise"],
    aesthetics: "Lines down side of torso.",
    precautions: "Heavy side bends can widen waist."
  },
  "Iliopsoas": {
    name: "Iliopsoas",
    group: "Core",
    origin: "Iliacus: Iliac fossa. Psoas: T12-L5.",
    insertion: "Lesser trochanter of femur.",
    functions: ["Hip Flexion."],
    biomechanicalRole: "Primary hip flexor.",
    mainExercises: ["Hanging Leg Raise", "L-Sit"],
    aesthetics: "Deep core functional muscle.",
    precautions: "Regular stretching prevents anterior pelvic tilt."
  },
  "Gluteus Maximus": {
    name: "Gluteus Maximus",
    group: "Legs",
    origin: "Ilium, sacrum, coccyx.",
    insertion: "Gluteal tuberosity and IT band.",
    functions: ["Hip Extension", "External Rotation."],
    biomechanicalRole: "Most powerful hip extensor and locomotion engine.",
    mainExercises: ["Back Squat", "Deadlift", "Romanian Deadlift", "Barbell 45° Hyperextension"],
    aesthetics: "Largest muscle shaping buttocks.",
    precautions: "Squeeze glutes at top to avoid lower back over-reliance."
  },
  "Gluteus Medius & Minimus": {
    name: "Gluteus Medius & Minimus",
    group: "Legs",
    origin: "Outer surface of ilium.",
    insertion: "Greater trochanter of femur.",
    functions: ["Hip Abduction", "Pelvic Stability."],
    biomechanicalRole: "Pelvic stabilizer during single-leg stance.",
    mainExercises: ["Hip Abduction", "Banded Lateral Walk"],
    aesthetics: "Upper glute shelf.",
    precautions: "Weakness causes knee valgus."
  },
  "Tensor Fasciae Latae (TFL)": {
    name: "Tensor Fasciae Latae (TFL)",
    group: "Legs",
    origin: "Anterior iliac crest.",
    insertion: "IT band.",
    functions: ["Hip Flexion", "Abduction", "Internal Rotation."],
    biomechanicalRole: "Works with glute medius for hip stability.",
    mainExercises: ["Hip Abduction", "Back Squat"],
    aesthetics: "Outer hip corner definition.",
    precautions: "Prone to tightness; foam roll IT band."
  },
  "Rectus Femoris": {
    name: "Rectus Femoris",
    group: "Legs",
    origin: "Anterior inferior iliac spine.",
    insertion: "Tibial tuberosity.",
    functions: ["Knee Extension", "Hip Flexion."],
    biomechanicalRole: "Bi-articular quad and hip flexor.",
    mainExercises: ["Leg Extension", "Leg Press", "Back Squat"],
    aesthetics: "Center quad definition.",
    precautions: "Stretch hip flexors to balance pelvic tilt."
  },
  "Vastus Lateralis": {
    name: "Vastus Lateralis",
    group: "Legs",
    origin: "Greater trochanter of femur.",
    insertion: "Tibial tuberosity.",
    functions: ["Knee Extension."],
    biomechanicalRole: "Largest quad head.",
    mainExercises: ["Back Squat", "Leg Press"],
    aesthetics: "Outer quad sweep width.",
    precautions: "Full ROM squatting builds balanced quad."
  },
  "Vastus Medialis": {
    name: "Vastus Medialis",
    group: "Legs",
    origin: "Linea aspera of femur.",
    insertion: "Tibial tuberosity.",
    functions: ["Knee Extension", "Patellar Tracking."],
    biomechanicalRole: "Terminal knee extension and kneecap stability.",
    mainExercises: ["Leg Extension", "Back Squat", "Pistol Squat"],
    aesthetics: "Teardrop muscle above knee (VMO).",
    precautions: "Target terminal extension."
  },
  "Vastus Intermedius": {
    name: "Vastus Intermedius",
    group: "Legs",
    origin: "Anterior femur.",
    insertion: "Tibial tuberosity.",
    functions: ["Knee Extension."],
    biomechanicalRole: "Deep knee extensor.",
    mainExercises: ["Back Squat", "Leg Press"],
    aesthetics: "Deep quad mass.",
    precautions: "Trained during compound quad lifts."
  },
  "Biceps Femoris": {
    name: "Biceps Femoris",
    group: "Legs",
    origin: "Long head: Ischial tuberosity. Short head: Femur.",
    insertion: "Head of fibula.",
    functions: ["Knee Flexion", "Hip Extension."],
    biomechanicalRole: "Lateral hamstring knee flexor and hip extensor.",
    mainExercises: ["Romanian Deadlift", "Leg Curl", "Glute Ham Raise"],
    aesthetics: "Outer hamstring hang.",
    precautions: "Proper warm-up prevents hamstring pulls."
  },
  "Semitendinosus & Semimembranosus": {
    name: "Semitendinosus & Semimembranosus",
    group: "Legs",
    origin: "Ischial tuberosity.",
    insertion: "Medial tibia.",
    functions: ["Knee Flexion", "Hip Extension."],
    biomechanicalRole: "Medial hamstring group.",
    mainExercises: ["Romanian Deadlift", "Leg Curl"],
    aesthetics: "Inner back thigh mass.",
    precautions: "Strengthen through full ROM."
  },
  "Adductor Magnus": {
    name: "Adductor Magnus",
    group: "Legs",
    origin: "Pubic rami & ischial tuberosity.",
    insertion: "Linea aspera of femur.",
    functions: ["Hip Adduction", "Hip Extension."],
    biomechanicalRole: "Largest inner thigh muscle (fourth hamstring).",
    mainExercises: ["Back Squat", "Sumo Box Squat"],
    aesthetics: "Inner thigh bulk.",
    precautions: "Wider squat stance increases activation."
  },
  "Adductor Longus & Brevis": {
    name: "Adductor Longus & Brevis",
    group: "Legs",
    origin: "Pubis.",
    insertion: "Linea aspera.",
    functions: ["Hip Adduction", "Hip Flexion."],
    biomechanicalRole: "Inner thigh adduction.",
    mainExercises: ["Back Squat", "Barbell Lunge"],
    aesthetics: "Upper inner thigh fullness.",
    precautions: "Warm up properly to prevent groin strains."
  },
  "Gastrocnemius": {
    name: "Gastrocnemius",
    group: "Legs",
    origin: "Femur condyles.",
    insertion: "Calcaneus via Achilles tendon.",
    functions: ["Plantarflexion", "Knee Flexion."],
    biomechanicalRole: "Explosive calf power in knee extension.",
    mainExercises: ["Standing Calf Raise", "Leg Press"],
    aesthetics: "Diamond shaped upper calf.",
    precautions: "Train with knees straight."
  },
  "Soleus": {
    name: "Soleus",
    group: "Legs",
    origin: "Posterior tibia and fibula.",
    insertion: "Calcaneus via Achilles tendon.",
    functions: ["Plantarflexion."],
    biomechanicalRole: "Slow-twitch calf endurance workhorse.",
    mainExercises: ["Standing Calf Raise"],
    aesthetics: "Deep calf width.",
    precautions: "Train with knees bent for isolation."
  },
  "Ankle Evertors & Invertors": {
    name: "Ankle Evertors & Invertors",
    group: "Legs",
    origin: "Tibia and fibula.",
    insertion: "Tarsals and metatarsals.",
    functions: ["Ankle Eversion", "Inversion", "Dorsiflexion."],
    biomechanicalRole: "Dynamic ankle and arch balance.",
    mainExercises: ["Pistol Squat", "Standing Calf Raise"],
    aesthetics: "Tibialis anterior shin muscle.",
    precautions: "Single leg balance work prevents sprains."
  },
  "Serratus Anterior": {
    name: "Serratus Anterior",
    group: "Thorax",
    origin: "Upper 8-9 ribs.",
    insertion: "Medial border of scapula.",
    functions: ["Scapular Protraction", "Upward Rotation."],
    biomechanicalRole: "Boxer's muscle for scapular protraction and shoulder health.",
    mainExercises: ["Push-ups", "Overhead Press", "Lat Pull-Over"],
    aesthetics: "Feathered ribs look under armpit.",
    precautions: "Full reach at top of push-ups activates serratus."
  }
};

// TABLA DE RESOLUCIÓN Y MAPEO EXHAUSTIVO DE ALIAS Y VARIACIONES BILINGÜES
const MUSCLE_TARGET_MAP: Record<string, MuscleTarget> = {
  // Nombres canónicos exactos
  'Pectoralis Major': { group: 'Pectoral Region', specific: 'Pectoralis Major' },
  'Pectoralis Minor': { group: 'Pectoral Region', specific: 'Pectoralis Minor' },
  'Anterior Deltoid': { group: 'Deltoid Group', specific: 'Anterior Deltoid' },
  'Lateral Deltoid': { group: 'Deltoid Group', specific: 'Lateral Deltoid' },
  'Posterior Deltoid': { group: 'Deltoid Group', specific: 'Posterior Deltoid' },
  'Latissimus Dorsi': { group: 'Latissimus Dorsi & Teres Major', specific: 'Latissimus Dorsi' },
  'Teres Major': { group: 'Latissimus Dorsi & Teres Major', specific: 'Teres Major' },
  'Trapezius (Upper, Mid, Lower)': { group: 'Trapezius & Rhomboids', specific: 'Trapezius (Upper, Mid, Lower)' },
  'Rhomboids': { group: 'Trapezius & Rhomboids', specific: 'Rhomboids' },
  'Erector Spinae': { group: 'Erector Spinae', specific: 'Erector Spinae' },
  'Biceps Brachii': { group: 'Biceps Group', specific: 'Biceps Brachii' },
  'Brachialis': { group: 'Biceps Group', specific: 'Brachialis' },
  'Triceps Brachii': { group: 'Triceps Brachii Group', specific: 'Triceps Brachii' },
  'Brachioradialis': { group: 'Forearm Group', specific: 'Brachioradialis' },
  'Wrist Flexors': { group: 'Forearm Group', specific: 'Wrist Flexors' },
  'Wrist Extensors': { group: 'Forearm Group', specific: 'Wrist Extensors' },
  'Rectus Abdominis': { group: 'Abdominal Group', specific: 'Rectus Abdominis' },
  'Obliques': { group: 'Abdominal Group', specific: 'Obliques' },
  'Iliopsoas': { group: 'Hip Flexor Group', specific: 'Iliopsoas' },
  'Gluteus Maximus': { group: 'Gluteal Region', specific: 'Gluteus Maximus' },
  'Gluteus Medius & Minimus': { group: 'Gluteal Region', specific: 'Gluteus Medius & Minimus' },
  'Tensor Fasciae Latae (TFL)': { group: 'Gluteal Region', specific: 'Tensor Fasciae Latae (TFL)' },
  'Rectus Femoris': { group: 'Quadriceps Femoris', specific: 'Rectus Femoris' },
  'Vastus Lateralis': { group: 'Quadriceps Femoris', specific: 'Vastus Lateralis' },
  'Vastus Medialis': { group: 'Quadriceps Femoris', specific: 'Vastus Medialis' },
  'Vastus Intermedius': { group: 'Quadriceps Femoris', specific: 'Vastus Intermedius' },
  'Biceps Femoris': { group: 'Hamstring Group', specific: 'Biceps Femoris' },
  'Semitendinosus & Semimembranosus': { group: 'Hamstring Group', specific: 'Semitendinosus & Semimembranosus' },
  'Adductor Magnus': { group: 'Adductor Group', specific: 'Adductor Magnus' },
  'Adductor Longus & Brevis': { group: 'Adductor Group', specific: 'Adductor Longus & Brevis' },
  'Gastrocnemius': { group: 'Calf Group (Triceps Surae)', specific: 'Gastrocnemius' },
  'Soleus': { group: 'Calf Group (Triceps Surae)', specific: 'Soleus' },
  'Ankle Evertors & Invertors': { group: 'Ankle & Foot Stabilizers', specific: 'Ankle Evertors & Invertors' },
  'Serratus Anterior': { group: 'Scapular & Thoracic Muscles', specific: 'Serratus Anterior' },
  'Rotator Cuff (SITS muscles)': { group: 'Rotator Cuff Group', specific: 'Rotator Cuff (SITS muscles)' },

  // Variaciones comunes e inglés
  'Pectorals': { group: 'Pectoral Region', specific: 'Pectoralis Major' },
  'Upper Pectorals': { group: 'Pectoral Region', specific: 'Pectoralis Major' },
  'Chest': { group: 'Pectoral Region' },
  'Deltoids': { group: 'Deltoid Group' },
  'Anterior Deltoids': { group: 'Deltoid Group', specific: 'Anterior Deltoid' },
  'Lateral Deltoids': { group: 'Deltoid Group', specific: 'Lateral Deltoid' },
  'Rear Delts': { group: 'Deltoid Group', specific: 'Posterior Deltoid' },
  'Lats': { group: 'Latissimus Dorsi & Teres Major', specific: 'Latissimus Dorsi' },
  'Latissimus': { group: 'Latissimus Dorsi & Teres Major', specific: 'Latissimus Dorsi' },
  'Traps': { group: 'Trapezius & Rhomboids', specific: 'Trapezius (Upper, Mid, Lower)' },
  'Trapezius': { group: 'Trapezius & Rhomboids', specific: 'Trapezius (Upper, Mid, Lower)' },
  'Lower Back': { group: 'Erector Spinae', specific: 'Erector Spinae' },
  'Biceps': { group: 'Biceps Group', specific: 'Biceps Brachii' },
  'Triceps': { group: 'Triceps Brachii Group', specific: 'Triceps Brachii' },
  'Forearms': { group: 'Forearm Group' },
  'Core': { group: 'Abdominal Group' },
  'Abs': { group: 'Abdominal Group', specific: 'Rectus Abdominis' },
  'Abdominals': { group: 'Abdominal Group', specific: 'Rectus Abdominis' },
  'Glutes': { group: 'Gluteal Region', specific: 'Gluteus Maximus' },
  'Quads': { group: 'Quadriceps Femoris' },
  'Quadriceps': { group: 'Quadriceps Femoris' },
  'Hamstrings': { group: 'Hamstring Group' },
  'Adductors': { group: 'Adductor Group' },
  'Hip Flexors': { group: 'Hip Flexor Group', specific: 'Iliopsoas' },
  'Calves': { group: 'Calf Group (Triceps Surae)', specific: 'Gastrocnemius' },
  'Rotator Cuff': { group: 'Rotator Cuff Group', specific: 'Rotator Cuff (SITS muscles)' },

  // Nombres en Español y variaciones hispanas
  'Pectoral Mayor': { group: 'Pectoral Region', specific: 'Pectoralis Major' },
  'Pectoral Menor': { group: 'Pectoral Region', specific: 'Pectoralis Minor' },
  'Pectorales': { group: 'Pectoral Region', specific: 'Pectoralis Major' },
  'Pecho': { group: 'Pectoral Region' },
  'Deltoides Anterior': { group: 'Deltoid Group', specific: 'Anterior Deltoid' },
  'Deltoides Lateral': { group: 'Deltoid Group', specific: 'Lateral Deltoid' },
  'Deltoides Posterior': { group: 'Deltoid Group', specific: 'Posterior Deltoid' },
  'Hombro Posterior': { group: 'Deltoid Group', specific: 'Posterior Deltoid' },
  'Hombros': { group: 'Deltoid Group' },
  'Dorsal Ancho': { group: 'Latissimus Dorsi & Teres Major', specific: 'Latissimus Dorsi' },
  'Dorsales': { group: 'Latissimus Dorsi & Teres Major', specific: 'Latissimus Dorsi' },
  'Redondo Mayor': { group: 'Latissimus Dorsi & Teres Major', specific: 'Teres Major' },
  'Trapecio': { group: 'Trapezius & Rhomboids', specific: 'Trapezius (Upper, Mid, Lower)' },
  'Romboide': { group: 'Trapezius & Rhomboids', specific: 'Rhomboids' },
  'Romboides': { group: 'Trapezius & Rhomboids', specific: 'Rhomboids' },
  'Erectores Espinales': { group: 'Erector Spinae', specific: 'Erector Spinae' },
  'Espalda Baja': { group: 'Erector Spinae', specific: 'Erector Spinae' },
  'Bíceps Braquial': { group: 'Biceps Group', specific: 'Biceps Brachii' },
  'Bíceps': { group: 'Biceps Group', specific: 'Biceps Brachii' },
  'Braquial': { group: 'Biceps Group', specific: 'Brachialis' },
  'Tríiceps': { group: 'Triceps Brachii Group', specific: 'Triceps Brachii' },
  'Tríceps Braquial': { group: 'Triceps Brachii Group', specific: 'Triceps Brachii' },
  'Braquiorradial': { group: 'Forearm Group', specific: 'Brachioradialis' },
  'Antebrazos': { group: 'Forearm Group' },
  'Flexores de Muñeca': { group: 'Forearm Group', specific: 'Wrist Flexors' },
  'Extensores de Muñeca': { group: 'Forearm Group', specific: 'Wrist Extensors' },
  'Recto Abdominal': { group: 'Abdominal Group', specific: 'Rectus Abdominis' },
  'Abdominales': { group: 'Abdominal Group', specific: 'Rectus Abdominis' },
  'Oblicuos': { group: 'Abdominal Group', specific: 'Obliques' },
  'Flexores de Cadera': { group: 'Hip Flexor Group', specific: 'Iliopsoas' },
  'Glúteo Mayor': { group: 'Gluteal Region', specific: 'Gluteus Maximus' },
  'Glúteo Medio': { group: 'Gluteal Region', specific: 'Gluteus Medius & Minimus' },
  'Glúteo Menor': { group: 'Gluteal Region', specific: 'Gluteus Medius & Minimus' },
  'Glúteos': { group: 'Gluteal Region', specific: 'Gluteus Maximus' },
  'Cuádriceps': { group: 'Quadriceps Femoris' },
  'Recto Femoral': { group: 'Quadriceps Femoris', specific: 'Rectus Femoris' },
  'Vasto Lateral': { group: 'Quadriceps Femoris', specific: 'Vastus Lateralis' },
  'Vasto Medial': { group: 'Quadriceps Femoris', specific: 'Vastus Medialis' },
  'Vasto Intermedio': { group: 'Quadriceps Femoris', specific: 'Vastus Intermedius' },
  'Isquiotibiales': { group: 'Hamstring Group' },
  'Bíceps Femoral': { group: 'Hamstring Group', specific: 'Biceps Femoris' },
  'Semitendinoso': { group: 'Hamstring Group', specific: 'Semitendinosus & Semimembranosus' },
  'Semimembranoso': { group: 'Hamstring Group', specific: 'Semitendinosus & Semimembranosus' },
  'Aductores': { group: 'Adductor Group' },
  'Aductor Mayor': { group: 'Adductor Group', specific: 'Adductor Magnus' },
  'Gemelos': { group: 'Calf Group (Triceps Surae)', specific: 'Gastrocnemius' },
  'Gastrocnemio': { group: 'Calf Group (Triceps Surae)', specific: 'Gastrocnemius' },
  'Soleo': { group: 'Calf Group (Triceps Surae)', specific: 'Soleus' },
  'Sóleo': { group: 'Calf Group (Triceps Surae)', specific: 'Soleus' },
  'Pantorrillas': { group: 'Calf Group (Triceps Surae)', specific: 'Gastrocnemius' },
  'Serrato Anterior': { group: 'Scapular & Thoracic Muscles', specific: 'Serratus Anterior' },
  'Manguito Rotador': { group: 'Rotator Cuff Group', specific: 'Rotator Cuff (SITS muscles)' }
};

/**
 * Resuelve cualquier nombre o alias de músculo hacia su grupo y músculo específico correspondiente
 */
export function findMuscleTarget(muscleName: string): MuscleTarget | null {
  if (!muscleName) return null;
  const clean = muscleName.trim();
  
  // 1. Coincidencia directa exacta
  if (MUSCLE_TARGET_MAP[clean]) {
    return MUSCLE_TARGET_MAP[clean];
  }
  
  // 2. Coincidencia case-insensitive
  const lower = clean.toLowerCase();
  const foundKey = Object.keys(MUSCLE_TARGET_MAP).find((k) => k.toLowerCase() === lower);
  if (foundKey) {
    return MUSCLE_TARGET_MAP[foundKey];
  }

  // 3. Coincidencia por subcadena en la base de datos de grupos
  const foundGroup = Object.values(muscleGroupsDatabase).find(
    (g) => g.name.toLowerCase().includes(lower) || g.category.toLowerCase().includes(lower)
  );
  if (foundGroup) {
    return { group: foundGroup.name };
  }

  // 4. Coincidencia por subcadena en specificMusclesDatabase
  const foundSpecific = Object.values(specificMusclesDatabase).find(
    (m) => m.name.toLowerCase().includes(lower)
  );
  if (foundSpecific) {
    const parentGroup = Object.values(muscleGroupsDatabase).find((g) =>
      g.specificMuscles.includes(foundSpecific.name)
    );
    return { group: parentGroup ? parentGroup.name : foundSpecific.group, specific: foundSpecific.name };
  }

  return null;
}
