// src/data/fitness/progressionAliases.ts
// Manual alias map for progression exercise names → real DB exercise names
// Used when fuzzy matching alone cannot find the right exercise

export const PROGRESSION_ALIASES: Record<string, string[]> = {
  // ── HANDSTAND ──────────────────────────────────────────────────────────────
  "Wall Handstand": ["Handstand Hold Against the Wall", "Handstand Hold Facing the Wall"],
  "Freestanding Handstand Hold": ["Handstand Hold", "Advanced Handstand Hold (On Parallettes)"],
  "Wall Handstand Pushup": ["Handstand Push Ups (Against the Wall)", "Handstand Negative Push Up (Against the Wall)"],
  "Wall Headstand Pushup Eccentric": ["Handstand Negative Push Up (Against the Wall)"],
  "Freestanding Handstand Pushup (Full ROM)": ["Handstand Push Ups", "Handstand Push-Up"],
  "Rings Freestanding Handstand Pushup": ["Rings wide handstand pushup", "Rings strap handstand pushup (with elbows in)"],
  "Straight Arm Press To Handstand": ["Straight-arm press handstands", "Straight-arm straddle planche to handstand"],

  // ── PLANCHE ─────────────────────────────────────────────────────────────────
  "Planche Lean": ["Planche Lean Hold"],
  "Tuck Planche Pumps": ["Tuck Planche"],
  "Tuck Planche Hold on Rings": ["Tuck Planche"],
  "L-sit to Straddle Planche": ["Straddle Planche"],
  "L-sit to Full Planche": ["Full Planche", "Full Planche Lean"],
  "Full Planche Lean Hold": ["Full Planche Lean"],
  "Full Planche Pumps": ["Full Planche"],
  "Full Planche Lean Raises": ["Full Planche Lean", "Full Planche"],
  "L-Sit + Tuck L-Sit + Tuck Planche Combo": ["Tuck L-Sit", "Tuck Planche"],
  "Straight Arm Ring Tap": ["Ring Support Hold"],

  // ── FRONT LEVER ─────────────────────────────────────────────────────────────
  "Single Leg Front Lever": ["One-leg Front Lever"],
  "Straight Arm Hold": ["Straight-Arm Lat Pulldown", "Hanging Straight-Arm Pull Down"],
  "Straight Arm Pull Down": ["Straight-Arm Lat Pulldown"],

  // ── MUSCLE UP ───────────────────────────────────────────────────────────────
  "Kipping Muscle-Ups": ["Kipping Muscle-Up"],
  "Strict Bar Muscle-Ups": ["Muscle-Up", "Bar Muscle-Up"],

  // ── PUSH / SHOULDER ─────────────────────────────────────────────────────────
  "Straight Arm Flies": ["Dumbbell Lateral Raise", "Cable Lateral Raise"],
  "Straight Arm Press": ["Dumbbell Shoulder Press", "Overhead Press"],
  "Dumbbells Lateral Raises": ["Dumbbell Lateral Raise"],
  "PUSH UP HOLD ": ["Push-Up Hold"],

  // ── HERIA STEP NAMES ────────────────────────────────────────────────────────
  "Step 3 - Pseudo Planche Push Ups": ["Pseudo Planche Push Up"],
  "Step 4 - Pseudo Planche Push Up Hold": ["Pseudo Planche Push Up"],
  "Step 5 - 90 Degree Hold Toe Taps": ["90 Degree Hold"],
  "Step 6 - 90 Degree Lean + Raise": ["90 Degree Hold"],
  "Step 7 - 90 Degree Hold ": ["90 Degree Hold"],
  "90 Degree Hold Outro": ["90 Degree Hold"],
  "Step 2 - High Dragon Flag Hold": ["Dragon Flag"],
  "Step 3 - Half Lay Dragon Flag Negative": ["Dragon Flag Negative"],
  "Step 4 - Single Leg Dragon Flag & Dragon Flag Negative": ["Dragon Flag Negative"],
  "Step 5 - Dragon Flag Hold": ["Dragon Flag"],
  "Dragon flag - Outro ": ["Dragon Flag"],
  "Step 2 - Switching One Arm Pull Up Hold": ["One Arm Pull Up Hold"],
  "Step 3 - Jumping One Arm Pull Ups": ["Assisted One Arm Pull Up"],
  "Step 4 - Pull Up One Arm Negative": ["One Arm Chin Up Negative"],
  "Step 5 - Jumping One Arm Negative Pull Up": ["One Arm Chin Up Negative"],
  "Step 6 - Assisted One Arm Pull Ups": ["Assisted One Arm Pull Up"],
  "Step 7 - One Arm Pull Up": ["One Arm Pull Up"],
  "One Arm Pull Up - Outro": ["One Arm Pull Up"],
  "FLAG NEGATIVES": ["Human Flag Negative"],
  "FLAG RAISE": ["Human Flag"],
  "FP THE FLAG": ["Full Planche", "Human Flag"],
  "Step 2 - Assisted One Arm Push Up (Elevated Surface)": ["Assisted One Arm Push Up"],
  "Step 3 - Assisted One Arm Push Up": ["Assisted One Arm Push Up"],
  "Step 4 - One Arm Push Ups": ["One Arm Push Up"],
  "One Arm Push Up - Outro": ["One Arm Push Up"],
  "Step 2 - Hanging Knee Raises": ["Hanging Knee Raise"],
  "Step 3 - Hanging Tuck L-Sit": ["Hanging Tuck L-Sit"],
  "Step 4 - Hanging High Knee Raises": ["Hanging Knee Raise"],
  "Step 5 - Hanging Leg Raises": ["Hanging Leg Raise"],
  "Step 6 - Hanging L-Sit Hold": ["Hanging L-Sit"],
  "Step 7 - Tuck Toes to Bar": ["Toes to Bar"],
  "Step 8 - Toes to Bar": ["Toes to Bar"],
  "Step 2 - Hanging Bent Arm Leg Raises": ["Hanging Knee Raise"],
  "Step 3 - Toes to Bar": ["Toes to Bar"],
  "Step 4 - Upside Down Deadlift": ["Inverted Row"],
  "Step 5 - Inverted Row Pull Ups": ["Inverted Row Pull Up"],
  "Step 6 - Pull Over": ["Pull Over"],
  "Pull Over - Outro": ["Pull Over"],

  // ── OTHER ───────────────────────────────────────────────────────────────────
  "REVERSE LEG RAISES ": ["Reverse Leg Raise"],
  "One-Leg-Bent L-Sit": ["L-Sit"],
};
