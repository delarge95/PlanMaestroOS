// src/components/shell/navItems.ts - Navegación Principal y Más per FIX 01

export type NavItem = {
  href: string;
  label: string;
  icon: 'sun' | 'dumbbell' | 'briefcase' | 'languages' | 'heart-pulse' | 'chef-hat' | 'book';
  section: 'primary' | 'more';
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/app/today',      label: 'Hoy',        icon: 'sun',        section: 'primary' },
  { href: '/app/fitness',    label: 'Fitness',    icon: 'dumbbell',   section: 'primary' },
  { href: '/app/career',     label: 'Laboral',    icon: 'briefcase',  section: 'primary' },
  { href: '/app/languages',  label: 'Idiomas',    icon: 'languages',  section: 'primary' },
  { href: '/app/clinical',   label: 'Clínico',    icon: 'heart-pulse',section: 'more' },
  { href: '/app/gastronomy', label: 'Gastronomía',icon: 'chef-hat',   section: 'more' },
  { href: '/app/library',    label: 'Biblioteca', icon: 'book',       section: 'more' }
];
