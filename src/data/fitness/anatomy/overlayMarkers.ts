// src/data/fitness/anatomy/overlayMarkers.ts
// AG-ANATOM — GENERADO por gen-overlay-markers.mjs
// Marcadores de región sobre músculos padre (overlays semitransparentes).
// NO son aislables independientemente: al seleccionarlos resaltan el músculo
// padre + aumentan su opacidad para mostrar la región.

/** pieceKey del marcador → pieceKey del músculo padre sólido. */
export const OVERLAY_PARENT: Record<string, string> = {
  'lower-limb:Ligament_of_head_of_femurr': 'lower-limb:Femurr',
  'lower-limb:Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'lower-limb:Lateral_head_of_gastrocnemiusr': 'lower-limb:Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Long_head_of_biceps_femorisr': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'lower-limb:Medial_head_of_gastrocnemiusr': 'lower-limb:Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Short_head_of_biceps_femorisr': 'lower-limb:Common_tendon_of_biceps_femorisr',
  'upper-limb:Lateral_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Long_head_of_biceps_brachiir': 'upper-limb:Common_tendon_of_biceps_brachiir',
  'upper-limb:Long_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Medial_head_of_triceps_brachiir': 'upper-limb:Common_tendon_of_triceps_brachiir',
  'upper-limb:Short_head_of_biceps_brachiir': 'upper-limb:Common_tendon_of_biceps_brachiir',
  'upper-limb:Humeral_head_of_extensor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Humeral_head_of_flexor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_extensor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_flexor_carpi_ulnarisr': 'upper-limb:Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Thickened_part_of_antebrachial_fascia': 'upper-limb:Antebrachial_fasciar',
  'upper-limb:Oblique_head_of_adductor_pollicisr': 'upper-limb:Adductor_pollicisr',
  'upper-limb:Transverse_head_of_adductor_pollicisr': 'upper-limb:Adductor_pollicisr',
  'upper-limb:Acromial_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Ascending_part_of_Trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'upper-limb:Clavicular_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Descending_part_of_Trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'upper-limb:Spinal_part_of_deltoid_muscler': 'upper-limb:Deltoid_muscler',
  'upper-limb:Transverse_part_of_trapezius_muscler': 'upper-limb:Trapezius_muscler',
  'hand:Oblique_head_of_adductor_pollicis': 'hand:Adductor_pollicis',
  'hand:Transverse_head_of_adductor_pollicis': 'hand:Adductor_pollicis',
};

/** pieceKey del marcador → nombre legible del marcador (para UI). */
export const OVERLAY_LABELS: Record<string, string> = {
  'lower-limb:Ligament_of_head_of_femurr': 'Femurr',
  'lower-limb:Common_tendon_of_Semitendinosus_and_Long_head_of_biceps_femoris': 'Common_tendon_of_biceps_femorisr',
  'lower-limb:Lateral_head_of_gastrocnemiusr': 'Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Long_head_of_biceps_femorisr': 'Common_tendon_of_biceps_femorisr',
  'lower-limb:Medial_head_of_gastrocnemiusr': 'Lateral_subtendinous_bursa_of_gastrocnemius_muscler',
  'lower-limb:Short_head_of_biceps_femorisr': 'Common_tendon_of_biceps_femorisr',
  'upper-limb:Lateral_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Long_head_of_biceps_brachiir': 'Common_tendon_of_biceps_brachiir',
  'upper-limb:Long_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Medial_head_of_triceps_brachiir': 'Common_tendon_of_triceps_brachiir',
  'upper-limb:Short_head_of_biceps_brachiir': 'Common_tendon_of_biceps_brachiir',
  'upper-limb:Humeral_head_of_extensor_carpi_ulnarisr': 'Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Humeral_head_of_flexor_carpi_ulnarisr': 'Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_extensor_carpi_ulnarisr': 'Common_tendon_of_extensor_carpi_ulnarisr',
  'upper-limb:Ulnar_head_of_flexor_carpi_ulnarisr': 'Common_tendon_of_flexor_carpi_ulnarisr',
  'upper-limb:Thickened_part_of_antebrachial_fascia': 'Antebrachial_fasciar',
  'upper-limb:Oblique_head_of_adductor_pollicisr': 'Adductor_pollicisr',
  'upper-limb:Transverse_head_of_adductor_pollicisr': 'Adductor_pollicisr',
  'upper-limb:Acromial_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Ascending_part_of_Trapezius_muscler': 'Trapezius_muscler',
  'upper-limb:Clavicular_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Descending_part_of_Trapezius_muscler': 'Trapezius_muscler',
  'upper-limb:Spinal_part_of_deltoid_muscler': 'Deltoid_muscler',
  'upper-limb:Transverse_part_of_trapezius_muscler': 'Trapezius_muscler',
  'hand:Oblique_head_of_adductor_pollicis': 'Adductor_pollicis',
  'hand:Transverse_head_of_adductor_pollicis': 'Adductor_pollicis',
};

export function overlayParent(pieceKeyStr: string): string | null {
  return OVERLAY_PARENT[pieceKeyStr] ?? null;
}
