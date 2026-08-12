import type { MuscleGroupInfo, SpecificMuscle } from '../types';

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
  // Chest
  "Pectoralis Major": {
    name: "Pectoralis Major",
    group: "Chest",
    origin: "Clavicular head: Medial half of clavicle. Sternocostal head: Sternum, upper six costal cartilages.",
    insertion: "Lateral lip of bicipital groove of humerus.",
    functions: ["Shoulder Flexion (clavicular head)", "Shoulder Adduction (bringing arm across body)", "Internal Rotation of the humerus.", "Horizontal Adduction (fly movements)."],
    biomechanicalRole: "Prime mover in all horizontal pressing and fly movements. A powerful internal rotator of the shoulder.",
    mainExercises: ["Barbell Bench Press", "Dumbbell Bench Press", "Dumbbell Incline Press", "Push-ups", "Dips"],
    aesthetics: "Forms the bulk of the chest. The clavicular (upper) head, often referred to as the 'Upper Pectorals', creates the upper 'shelf' that fills in the area below the collarbone. The sternocostal (main) head provides overall mass and width. A defined lower edge separates it from the abs.",
    precautions: "Shoulder impingement is a high risk with improper form. Retracting and depressing the scapula (pulling shoulder blades back and down) is critical during all presses to protect the shoulder joint."
  },
  "Pectoralis Minor": {
    name: "Pectoralis Minor",
    group: "Chest",
    origin: "Ribs 3-5.",
    insertion: "Coracoid process of the scapula.",
    functions: ["Stabilizes the scapula by drawing it downward and forward against the thoracic wall.", "Scapular Protraction and Depression."],
    biomechanicalRole: "A key stabilizer of the scapula. It is not a prime mover in pressing but its health and flexibility are vital for proper shoulder mechanics.",
    mainExercises: ["Dips", "Push-ups", "Lat Pull-Over"],
    aesthetics: "Not a visible 'aesthetic' muscle as it lies beneath the Pectoralis Major. However, a tight pec minor can pull the shoulders forward, contributing to poor posture ('rounded shoulders'), which negatively impacts overall physique.",
    precautions: "Tightness is very common and can lead to shoulder impingement and nerve issues. Regular stretching and soft tissue work are recommended, especially for those who do a lot of pressing."
  },

  // Shoulders
  "Anterior Deltoid": {
    name: "Anterior Deltoid",
    group: "Shoulders",
    origin: "Lateral third of the clavicle.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Flexion (raising arm forward).", "Assists in shoulder internal rotation and horizontal adduction."],
    biomechanicalRole: "Prime mover in raising the arm forward (front raises) and a strong synergist in all overhead and incline pressing movements.",
    mainExercises: ["Overhead Press", "Push Press", "Dumbbell Incline Press", "Barbell Bench Press"],
    aesthetics: "Creates the front 'cap' of the shoulder, tying the chest into the deltoid. It's often well-developed from pressing exercises.",
    precautions: "Can easily become overdeveloped relative to the lateral and posterior heads, leading to muscle imbalances and poor posture. Often requires less direct isolation work than other heads."
  },
  "Lateral Deltoid": {
    name: "Lateral Deltoid",
    group: "Shoulders",
    origin: "Acromion process of the scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Abduction (raising the arm out to the side)."],
    biomechanicalRole: "The primary muscle responsible for abducting the arm. It is the key to creating shoulder width.",
    mainExercises: ["Dumbbell Lateral Raise", "Upright Row"],
    aesthetics: "This is the most important head for creating the illusion of width and the 'capped shoulder' look. Its development makes the waist appear smaller.",
    precautions: "Highly susceptible to poor form. Using momentum ('swinging') on lateral raises shifts the work to the traps and anterior delts. Use a lighter weight, control the eccentric, and lead with the elbows."
  },
  "Posterior Deltoid": {
    name: "Posterior Deltoid",
    group: "Shoulders",
    origin: "Spine of the scapula.",
    insertion: "Deltoid tuberosity of humerus.",
    functions: ["Shoulder Extension and Hyperextension (pulling arm back).", "Horizontal Abduction (reverse flyes).", "External Rotation of the shoulder."],
    biomechanicalRole: "Crucial for pulling movements and acts as a key stabilizer for the shoulder joint. It directly counteracts the internal rotation forces from heavy pressing.",
    mainExercises: ["Face Pull", "Bent Over Reverse Dumbbell Flye", "Pendlay Row", "Helms Row"],
    aesthetics: "Also known as 'Rear Delts', this muscle provides the '3D' look from the back and side, showing separation from the triceps and back. It is critical for a balanced and healthy-looking shoulder.",
    precautions: "Often underdeveloped, leading to imbalances and a 'hunched' posture. Needs direct, high-volume work. Focus on squeezing the muscle, not just moving the weight."
  },
  "Rotator Cuff (SITS muscles)": {
    name: "Rotator Cuff (SITS muscles)",
    group: "Shoulders",
    origin: "Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis originate from various surfaces of the scapula.",
    insertion: "Greater and lesser tubercles of the humerus.",
    functions: [
      "Supraspinatus: Initiates shoulder abduction.",
      "Infraspinatus & Teres Minor: External Rotation of the shoulder.",
      "Subscapularis: Internal Rotation of the shoulder.",
      "All four work together to depress and stabilize the humeral head in the glenoid socket."
    ],
    biomechanicalRole: "A dynamic stabilizer for the glenohumeral joint. It provides the fine motor control and stability needed to allow the larger prime movers (deltoids, pecs, lats) to work effectively and safely. Weakness or imbalance in the cuff is a primary cause of shoulder impingement and instability.",
    mainExercises: ["Face Pull", "Band Pull-Apart"],
    aesthetics: "These are deep muscles and not visible for aesthetic purposes. Their value is entirely in function, performance, and injury prevention. A healthy rotator cuff allows for the development of impressive-looking shoulders and chest.",
    precautions: "Directly training the rotator cuff should be done with light weight and perfect form, focusing on external and internal rotation. Avoid pain. Heavy compound lifts are the primary context where a strong, stable cuff is essential. Most injuries are due to overuse, poor mechanics in pressing movements, or muscular imbalances (e.g., strong internal rotators, weak external rotators)."
  },

  // Back
  "Latissimus Dorsi": {
    name: "Latissimus Dorsi",
    group: "Back",
    origin: "Spinous processes of vertebrae T7-L5, thoracolumbar fascia, iliac crest, and lower 3-4 ribs.",
    insertion: "Floor of the bicipital groove of the humerus.",
    functions: ["Shoulder Extension (pulling arm from front to back).", "Shoulder Adduction (pulling arm down from the side).", "Internal Rotation of the shoulder."],
    biomechanicalRole: "The primary 'pulling' muscle of the upper body. Prime mover in pull-ups, pulldowns, and most rowing movements.",
    mainExercises: ["Pull-ups", "Chin-Up", "Seated Cable Row", "Pendlay Row", "Single-Arm Lat Pulldown"],
    aesthetics: "The 'V-taper' muscle. Its width is what gives the torso its characteristic tapered look from broad shoulders to a narrower waist.",
    precautions: "To properly engage the lats, focus on driving your elbows down and back, rather than just pulling with your hands/biceps. A full stretch at the top of the movement is key for growth."
  },
  "Teres Major": {
    name: "Teres Major",
    group: "Back",
    origin: "Posterior aspect of the inferior angle of the scapula.",
    insertion: "Medial lip of the bicipital groove of the humerus.",
    functions: ["Shoulder Adduction and Internal Rotation.", "Assists in shoulder extension."],
    biomechanicalRole: "A strong synergist to the Latissimus Dorsi, assisting in all of its functions. Often called the 'lats' little helper'.",
    mainExercises: ["Pull-ups", "Chin-Up", "Seated Cable Row", "Lat Pull-Over"],
    aesthetics: "Adds thickness and mass to the upper back, just below the armpit and above the main belly of the lat. It helps create a denser, more powerful-looking back.",
    precautions: "Functions so closely with the lats that it is trained concurrently. A strong mind-muscle connection, focusing on the area under the armpit, can enhance its activation."
  },
  "Trapezius (Upper, Mid, Lower)": {
    name: "Trapezius (Upper, Mid, Lower)",
    group: "Back",
    origin: "Occipital bone, spinous processes of C7-T12 vertebrae.",
    insertion: "Clavicle, acromion, and spine of the scapula.",
    functions: ["Upper Fibers: Scapular Elevation (shrugging).", "Middle Fibers: Scapular Retraction (pulling shoulder blades together).", "Lower Fibers: Scapular Depression (pulling shoulder blades down)."],
    biomechanicalRole: "A key stabilizer and mover of the scapula. All three sections work together to control the shoulder blade during complex movements.",
    mainExercises: ["Deadlift", "Dumbbell Shrug", "Incline Shrug", "Face Pull", "Seated Cable Row"],
    aesthetics: "The upper traps create the 'yoke' look around the neck. The middle and lower traps build thickness in the mid-back and are crucial for good posture and a detailed 'Christmas tree' lower back.",
    precautions: "Upper traps can easily dominate movements. It's crucial to consciously engage the mid and lower traps (by pulling shoulder blades 'back and down') during rows to ensure balanced development and shoulder health."
  },
  "Rhomboids": {
    name: "Rhomboids",
    group: "Back",
    origin: "Spinous processes of C7-T5 vertebrae.",
    insertion: "Medial border of the scapula.",
    functions: ["Scapular Retraction and Downward Rotation.", "Stabilizes the scapula."],
    biomechanicalRole: "Prime mover for squeezing the shoulder blades together. Works synergistically with the middle trapezius.",
    mainExercises: ["Seated Cable Row", "Pendlay Row", "T-Bar Row", "Face Pull"],
    aesthetics: "Lies underneath the trapezius and provides thickness to the upper-middle back. Strong, developed rhomboids are essential for creating 'deep valleys' in the back and preventing a hunched posture.",
    precautions: "Weak rhomboids are a common cause of rounded shoulders. During rows, pause at the peak contraction and focus on an intense squeeze between the shoulder blades to ensure they are being worked effectively."
  },
  "Erector Spinae": {
    name: "Erector Spinae",
    group: "Back",
    origin: "Arises from a broad, thick tendon on the iliac crest, sacrum, and lumbar spinous processes.",
    insertion: "Various points along the vertebrae, ribs, and skull.",
    functions: ["Spinal Extension (arching the back).", "Lateral Flexion (side bending) of the spine."],
    biomechanicalRole: "The primary muscle group for extending the spine. Critically, it provides isometric tension to keep the spine neutral and safe during heavy lifts.",
    mainExercises: ["Deadlift", "Back Squat", "Romanian Deadlift", "Glute Ham Raise"],
    aesthetics: "Forms two thick columns running along the spine. Well-developed erectors (the 'spinal erectors') look like steel cables and are a clear sign of immense strength, creating the 'Christmas tree' effect in the lower back when lean.",
    precautions: "The most common 'lower back' injury involves this muscle group. NEVER lift with a rounded lumbar spine. Always maintain a neutral spinal position by bracing your core. Distinguish between muscle soreness and sharp, shooting pain."
  },

  // Arms
  "Biceps Brachii": {
    name: "Biceps Brachii",
    group: "Arms",
    origin: "Short head: Coracoid process of scapula. Long head: Supraglenoid tubercle of scapula.",
    insertion: "Radial tuberosity and bicipital aponeurosis.",
    functions: ["Elbow Flexion.", "Forearm Supination (most powerful when elbow is flexed).", "Assists in shoulder flexion (long head)."],
    biomechanicalRole: "Prime mover for elbow flexion, especially with a supinated (palm-up) grip. A key dynamic stabilizer of the shoulder joint.",
    mainExercises: ["Chin-Up", "Barbell Curl", "Incline Dumbbell Curl", "Concentration Bicep Curl"],
    aesthetics: "Creates the coveted 'bicep peak'. The long head contributes more to the peak, while the short head adds thickness. Training with various grips and angles is needed for full development.",
    precautions: "Using too much momentum (swinging) can lead to lower back or shoulder injury and reduces tension on the bicep. Control the eccentric (lowering) phase of the curl."
  },
  "Brachialis": {
    name: "Brachialis",
    group: "Arms",
    origin: "Anterior surface of the humerus.",
    insertion: "Coronoid process and tuberosity of the ulna.",
    functions: ["A pure Elbow Flexor, regardless of forearm position."],
    biomechanicalRole: "The most powerful flexor of the elbow. It is a prime mover in all curling movements.",
    mainExercises: ["Hammer Curl", "Barbell Curl", "Chin-Up", "Incline Dumbbell Curl"],
    aesthetics: "Lies underneath the Biceps Brachii. A well-developed brachialis pushes the bicep up, increasing the apparent size and peak of the bicep. It also adds significant thickness to the side view of the arm.",
    precautions: "Trained during any curling motion. Neutral grip (hammer) curls and pronated (reverse) curls can place a greater emphasis on this muscle."
  },
  "Triceps Brachii": {
    name: "Triceps Brachii",
    group: "Arms",
    origin: "Long head: Infraglenoid tubercle of scapula. Lateral & Medial heads: Posterior surface of the humerus.",
    insertion: "Olecronon process of the ulna.",
    functions: ["Elbow Extension (all heads).", "Shoulder Extension and Adduction (long head only)."],
    biomechanicalRole: "The sole extensor of the elbow joint. It's the antagonist to the biceps/brachialis and is the prime mover in all pressing movements and dips.",
    mainExercises: ["Dips", "Close-Grip Bench Press", "Skull Crusher", "Triceps Pressdown", "Overhead Press"],
    aesthetics: "Constitutes about 2/3 of upper arm mass, making it crucial for large arms. The lateral head forms the visible 'horseshoe' shape, while the long head adds the most mass, especially visible from the back.",
    precautions: "Elbow pain is common. Ensure a full warm-up. Movements that place the long head on stretch (like overhead extensions or skull crushers) are excellent for growth but require strict form to protect the elbow joint."
  },
  "Brachioradialis": {
    name: "Brachioradialis",
    group: "Arms",
    origin: "Lateral supracondylar ridge of the humerus.",
    insertion: "Styloid process of the radius.",
    functions: ["Elbow Flexion, primarily with a neutral (thumb-up) forearm position."],
    biomechanicalRole: "A powerful elbow flexor, especially in the neutral grip. Assists in pronation and supination back to neutral.",
    mainExercises: ["Hammer Curl", "Chin-Up"],
    aesthetics: "A large, well-developed brachioradialis creates the prominent 'Popeye' muscle on the top of the forearm near the elbow. It bridges the gap between the upper arm and forearm.",
    precautions: "Heavy neutral grip movements are the best way to target this muscle. Often undertrained compared to the biceps."
  },
  "Wrist Flexors": {
    name: "Wrist Flexors",
    group: "Arms",
    origin: "Medial epicondyle of the humerus.",
    insertion: "Carpals, metacarpals, and phalanges.",
    functions: ["Wrist Flexion (bending the wrist, palm moving towards forearm).", "Contribute significantly to grip strength."],
    biomechanicalRole: "Prime movers for wrist flexion and crucial for gripping heavy objects.",
    mainExercises: ["Barbell Curl", "Deadlift", "Pull-ups"],
    aesthetics: "Form the meaty, inner part of the forearm. A thick flexor group indicates powerful grip strength.",
    precautions: "Can be prone to overuse injuries like medial epicondylitis ('Golfer's Elbow'). Stretching and balancing with extensor work is important."
  },
  "Wrist Extensors": {
    name: "Wrist Extensors",
    group: "Arms",
    origin: "Lateral epicondyle of the humerus.",
    insertion: "Metacarpals and phalanges.",
    functions: ["Wrist Extension (bending the wrist, back of hand moving towards forearm)."],
    biomechanicalRole: "Antagonist to the wrist flexors, crucial for stabilizing the wrist during pressing movements.",
    mainExercises: ["Barbell Bench Press", "Overhead Press"],
    aesthetics: "Form the muscularity on the top (outer) part of the forearm. Balanced development with the flexors creates complete forearm aesthetics.",
    precautions: "Can be prone to overuse injuries like lateral epicondylitis ('Tennis Elbow'). Performing reverse curls can help strengthen this group directly."
  },

  // Core
  "Rectus Abdominis": {
    name: "Rectus Abdominis",
    group: "Core",
    origin: "Pubic crest and pubic symphysis.",
    insertion: "Xiphoid process and costal cartilages of ribs 5-7.",
    functions: ["Trunk Flexion (crunching motion).", "Compresses abdominal contents.", "Posteriorly tilts the pelvis."],
    biomechanicalRole: "Prime mover for flexing the lumbar spine. Also provides major anti-extension stability, preventing the back from arching under load (e.g., in a plank or overhead press).",
    mainExercises: ["Hanging Leg Raise", "Plank", "V Sit-Up", "Bicycle Crunch"],
    aesthetics: "This is the 'six-pack' muscle. The tendinous intersections that cross the muscle belly create the segmented look. Visibility is dependent on low body fat, but direct training can increase its thickness.",
    precautions: "Avoid pulling on your head/neck during crunching movements. The work should come from spinal flexion driven by the abs. During leg raises, prevent the lower back from excessively arching."
  },
  "Obliques": {
    name: "Obliques",
    group: "Core",
    origin: "External: Ribs 5-12. Internal: Thoracolumbar fascia, iliac crest.",
    insertion: "Iliac crest, linea alba.",
    functions: ["Unilateral contraction: Trunk Rotation and Lateral Flexion (side bending).", "Bilateral contraction: assists in Trunk Flexion."],
    biomechanicalRole: "Prime movers for rotation and side-bending. Crucially, they act as anti-rotation and anti-lateral flexion stabilizers, which is their main role during heavy compound lifts.",
    mainExercises: ["Bicycle Crunch", "Hanging Leg Raise"],
    aesthetics: "Frame the rectus abdominis. Well-developed obliques create lines down the side of the torso and contribute to the 'V-taper'. When very lean, they can have a 'feathered' appearance.",
    precautions: "Directly training with heavy side-bends can lead to a wider, 'blockier' waist, which may be undesirable for some aesthetic goals. Most lifters get sufficient oblique stimulation from bracing in heavy compound movements."
  },
  "Iliopsoas": {
    name: "Iliopsoas",
    group: "Core",
    origin: "Iliacus: Iliac fossa. Psoas Major: Transverse processes of T12-L5 vertebrae.",
    insertion: "Lesser trochanter of the femur.",
    functions: ["Most powerful Hip Flexor.", "Assists in external rotation of the femur."],
    biomechanicalRole: "The primary driver of hip flexion. It is essential for sprinting, kicking, and lifting the knees. It also plays a role in stabilizing the lumbar spine.",
    mainExercises: ["Hanging Leg Raise", "L-Sit", "Back Squat"],
    aesthetics: "A deep core muscle, not visible externally. Its importance is functional rather than aesthetic.",
    precautions: "Chronically tight iliopsoas muscles are a major contributor to anterior pelvic tilt and lower back pain. Regular stretching is highly recommended for desk workers and athletes alike."
  },

  // Legs
  "Gluteus Maximus": {
    name: "Gluteus Maximus",
    group: "Legs",
    origin: "Ilium, sacrum, and coccyx.",
    insertion: "Gluteal tuberosity of the femur and iliotibial (IT) band.",
    functions: ["Hip Extension (most powerful hip extensor).", "Hip External Rotation.", "Upper fibers assist in hip abduction."],
    biomechanicalRole: "The primary engine for human locomotion and power. It's the prime mover for standing up from a squat, lifting in a deadlift, running, and jumping.",
    mainExercises: ["Back Squat", "Deadlift", "Romanian Deadlift", "Dumbbell Lunges", "Barbell 45° Hyperextension", "Snatch-Grip Romanian Deadlift"],
    aesthetics: "The largest muscle in the human body, it is the primary shaper of the buttocks. A strong, developed glute max gives a rounded, lifted appearance and is the hallmark of an athletic physique.",
    precautions: "Often underactive ('gluteal amnesia') due to sedentary lifestyles. Consciously squeezing the glutes at the top of squats, deadlifts, and hip thrusts is critical for full activation. Failure to use the glutes can lead to overuse of the hamstrings and lower back."
  },
  "Gluteus Medius & Minimus": {
    name: "Gluteus Medius & Minimus",
    group: "Legs",
    origin: "Outer surface of the ilium.",
    insertion: "Greater trochanter of the femur.",
    functions: ["Hip Abduction (primary abductor).", "Anterior fibers assist in internal rotation and flexion; posterior fibers assist in external rotation and extension."],
    biomechanicalRole: "A crucial stabilizer of the pelvis. It prevents the opposite side of the pelvis from dropping during single-leg stances (like walking or running).",
    mainExercises: ["Hip Abduction", "Banded Lateral Walk", "Dumbbell Lunges", "Pistol Squat"],
    aesthetics: "Located on the upper, outer part of the buttocks. Development of the gluteus medius creates the 'upper glute shelf' and contributes to a rounder, fuller appearance from the side and back.",
    precautions: "Weakness in these muscles is a common cause of knee pain (e.g., IT band syndrome) and lower back pain, as it leads to pelvic instability and compensatory movements like knee valgus (knock-knees)."
  },
  "Tensor Fasciae Latae (TFL)": {
    name: "Tensor Fasciae Latae (TFL)",
    group: "Legs",
    origin: "Anterior iliac crest and anterior superior iliac spine (ASIS).",
    insertion: "Iliotibial (IT) band.",
    functions: ["Hip Flexion, Abduction, and Internal Rotation."],
    biomechanicalRole: "Works with the gluteus medius and minimus to abduct and stabilize the hip. Assists in hip flexion and tenses the IT band, contributing to knee stability.",
    mainExercises: ["Hip Abduction", "Back Squat", "Dumbbell Lunges"],
    aesthetics: "A small muscle located at the front, outer corner of the hip. While not a major 'show' muscle, it can contribute to the 'hip dip' area and its tone is part of a lean midsection.",
    precautions: "The TFL is prone to becoming tight and overactive, especially if the gluteus medius is weak. An overactive TFL can contribute to IT band syndrome and knee pain. Stretching and foam rolling are often recommended."
  },
  "Rectus Femoris": {
    name: "Rectus Femoris",
    group: "Legs",
    origin: "Anterior inferior iliac spine (AIIS).",
    insertion: "Tibial tuberosity via the patellar ligament.",
    functions: ["Knee Extension.", "Hip Flexion."],
    biomechanicalRole: "Unique among the quadriceps as it crosses both the hip and knee joints. It's a prime mover for knee extension and a primary hip flexor.",
    mainExercises: ["Leg Extension", "Leg Press", "Back Squat", "Dumbbell Lunges"],
    aesthetics: "The most prominent of the quad muscles, running straight down the center of the thigh. A well-developed rectus femoris creates a clear separation in the middle of the quad.",
    precautions: "Can become tight due to its role as a hip flexor, contributing to anterior pelvic tilt. Stretching the hip flexors is important for postural health."
  },
  "Vastus Lateralis": {
    name: "Vastus Lateralis",
    group: "Legs",
    origin: "Greater trochanter and linea aspera of the femur.",
    insertion: "Tibial tuberosity via the patellar ligament.",
    functions: ["Knee Extension."],
    biomechanicalRole: "The largest and strongest of the four quadriceps muscles. It is a prime mover for knee extension.",
    mainExercises: ["Back Squat", "Leg Press", "Dumbbell Lunges", "Leg Extension"],
    aesthetics: "Forms the 'outer quad sweep', providing width to the thigh from a front-on view. This muscle is key for creating powerful-looking legs.",
    precautions: "Imbalances between the vastus lateralis and vastus medialis can contribute to poor patellar tracking and knee pain. Full range of motion exercises help ensure balanced development."
  },
  "Vastus Medialis": {
    name: "Vastus Medialis",
    group: "Legs",
    origin: "Intertrochanteric line and linea aspera of the femur.",
    insertion: "Tibial tuberosity via the patellar ligament.",
    functions: ["Knee Extension, particularly in the final degrees of extension."],
    biomechanicalRole: "A key knee extensor that is especially active in the last 30 degrees of extension. It plays a critical role in stabilizing the patella (kneecap).",
    mainExercises: ["Leg Extension", "Back Squat", "Dumbbell Lunges", "Pistol Squat"],
    aesthetics: "Forms the 'teardrop' muscle on the inner side of the knee. A well-developed vastus medialis oblique (VMO) is highly aesthetic and indicative of a strong, stable knee.",
    precautions: "Often the last of the quad heads to fatigue and can be difficult to develop. Focusing on full knee extension at the top of movements like leg extensions can help target it."
  },
  "Vastus Intermedius": {
    name: "Vastus Intermedius",
    group: "Legs",
    origin: "Anterior and lateral surfaces of the femur.",
    insertion: "Tibial tuberosity via the patellar ligament.",
    functions: ["Knee Extension."],
    biomechanicalRole: "Works with the other vasti muscles as a prime mover for knee extension.",
    mainExercises: ["Back Squat", "Leg Press", "Leg Extension"],
    aesthetics: "Located deep to the Rectus Femoris, it is not a visible muscle but contributes significantly to the overall mass and cross-sectional area of the thigh.",
    precautions: "Trained effectively through all compound quadriceps movements. Its health is tied to the overall function of the knee joint."
  },
  "Biceps Femoris": {
    name: "Biceps Femoris",
    group: "Legs",
    origin: "Long head: Ischial tuberosity. Short head: Linea aspera of the femur.",
    insertion: "Head of the fibula.",
    functions: ["Knee Flexion.", "Hip Extension (long head only).", "External Rotation of the tibia when the knee is flexed."],
    biomechanicalRole: "A powerful knee flexor and hip extensor, forming the lateral part of the hamstring group.",
    mainExercises: ["Romanian Deadlift", "Leg Curl", "Glute Ham Raise", "Deadlift"],
    aesthetics: "Creates the prominent bulge on the outer-back of the thigh, contributing to the 'hamstring hang'.",
    precautions: "The long head is one of the most frequently strained muscles in sports. A proper warm-up and avoiding ballistic over-stretching are crucial for injury prevention."
  },
  "Semitendinosus & Semimembranosus": {
    name: "Semitendinosus & Semimembranosus",
    group: "Legs",
    origin: "Ischial tuberosity.",
    insertion: "Medial surface of the tibia.",
    functions: ["Knee Flexion.", "Hip Extension.", "Internal Rotation of the tibia when the knee is flexed."],
    biomechanicalRole: "These two muscles form the medial part of the hamstring group, working together to flex the knee and extend the hip.",
    mainExercises: ["Romanian Deadlift", "Leg Curl", "Glute Ham Raise", "Deadlift"],
    aesthetics: "Provide thickness and detail to the inner-back of the thigh. They are crucial for a complete and balanced posterior leg development.",
    precautions: "Like the biceps femoris, these are susceptible to strains. Maintaining good flexibility and strengthening through a full range of motion is key."
  },
  "Adductor Magnus": {
    name: "Adductor Magnus",
    group: "Legs",
    origin: "Ischial and pubic rami and ischial tuberosity.",
    insertion: "Linea aspera and adductor tubercle of femur.",
    functions: ["Powerful Hip Adduction.", "The hamstring part (from ischial tuberosity) also performs Hip Extension."],
    biomechanicalRole: "The largest and most powerful of the adductor muscles. It's a significant contributor to hip extension, often called the 'fourth hamstring', and provides crucial stability in deep squats.",
    mainExercises: ["Back Squat", "Sumo Box Squat", "Dumbbell Lunges"],
    aesthetics: "Forms the bulk of the inner thigh, providing a thick and powerful appearance to the upper leg.",
    precautions: "Adductor strains ('groin pulls') are common. Proper warm-ups and avoiding sudden, ballistic movements are important. A wider squat stance increases its activation."
  },
  "Adductor Longus & Brevis": {
    name: "Adductor Longus & Brevis",
    group: "Legs",
    origin: "Pubis.",
    insertion: "Linea aspera of the femur.",
    functions: ["Hip Adduction.", "Assists in Hip Flexion."],
    biomechanicalRole: "Work together to pull the thigh inward and assist in the initial phase of hip flexion.",
    mainExercises: ["Back Squat", "Dumbbell Lunges"],
    aesthetics: "Located high on the inner thigh, they contribute to the upper fullness of the adductor region.",
    precautions: "Also susceptible to groin strains. Strengthening them through controlled movements is key to preventing injury in sports that require cutting and side-to-side motion."
  },
  "Gastrocnemius": {
    name: "Gastrocnemius",
    group: "Legs",
    origin: "Medial and lateral condyles of the femur.",
    insertion: "Calcaneus (heel bone) via the Achilles tendon.",
    functions: ["Plantarflexion of the foot (pointing toes down).", "Assists in knee flexion."],
    biomechanicalRole: "A powerful plantarflexor, especially when the knee is straight. It's a 'fast-twitch' dominant muscle, crucial for explosive movements like jumping and sprinting.",
    mainExercises: ["Standing Calf Raise", "Leg Press"],
    aesthetics: "Forms the visible, diamond-shaped bulk of the calf. Has two heads (medial and lateral) that can be developed for a fuller look.",
    precautions: "Best trained with heavy weight and lower reps, with the knee in extension (e.g., standing calf raises) to maximize its involvement over the Soleus."
  },
  "Soleus": {
    name: "Soleus",
    group: "Legs",
    origin: "Posterior aspect of the tibia and fibula.",
    insertion: "Calcaneus (heel bone) via the Achilles tendon.",
    functions: ["Plantarflexion of the foot."],
    biomechanicalRole: "A powerful plantarflexor, it is the workhorse of the calf, especially when the knee is bent. It is 'slow-twitch' dominant, making it crucial for endurance activities like walking and jogging.",
    mainExercises: ["Standing Calf Raise"],
    aesthetics: "Lies underneath the gastrocnemius. While less visible, developing the soleus adds width to the calf from the front and back views, making the entire lower leg look larger.",
    precautions: "Best trained with the knee bent (e.g., seated calf raises), which puts the gastrocnemius in a slackened position and forces the soleus to do more of the work. It responds well to higher reps and volume."
  },
  "Ankle Evertors & Invertors": {
    name: "Ankle Evertors & Invertors",
    group: "Legs",
    origin: "Various surfaces of the tibia and fibula.",
    insertion: "Metatarsals and tarsal bones of the foot.",
    functions: ["Eversion (Peroneal group).", "Inversion (Tibialis Posterior & Anterior).", "Dorsiflexion (Tibialis Anterior).", "Stabilization of the arch of the foot."],
    biomechanicalRole: "These muscles provide dynamic stability to the ankle joint, preventing sprains and allowing the body to balance on uneven surfaces or during unilateral exercises. They work isometrically to create a rigid base for force transfer during squats and deadlifts.",
    mainExercises: ["Pistol Squat", "Standing Calf Raise"],
    aesthetics: "The Tibialis Anterior is the prominent muscle on the shin. While not a primary aesthetic focus for most, well-developed lower leg muscles create a more complete and athletic look.",
    precautions: "Weakness in these muscles can lead to ankle instability, shin splints, and fallen arches. Imbalances are common. They are often best trained through balance work (e.g., single-leg RDLs) and ensuring full range of motion during calf raises."
  },

  // Thorax
  "Serratus Anterior": {
    name: "Serratus Anterior",
    group: "Thorax",
    origin: "Surface of the upper 8 or 9 ribs.",
    insertion: "Medial border of the scapula.",
    functions: ["Scapular Protraction (pulling the shoulder blade forward, e.g., reaching or punching).", "Scapular Upward Rotation.", "Stabilizes the scapula against the rib cage."],
    biomechanicalRole: "The prime mover for scapular protraction. It is essential for a healthy, functioning shoulder, as it works with the trapezius to properly rotate the scapula during overhead movements.",
    mainExercises: ["Push-ups", "Overhead Press", "Lat Pull-Over", "Dips"],
    aesthetics: "Known as the 'boxer's muscle', it creates a distinctive, finger-like or 'feathered' appearance on the side of the rib cage below the armpit when body fat is low.",
    precautions: "Weakness or poor activation of the serratus anterior can lead to 'winged scapula', where the shoulder blade protrudes from the back. This can cause shoulder impingement and instability. Focus on a full reach or press at the top of push-ups to activate it."
  }
};