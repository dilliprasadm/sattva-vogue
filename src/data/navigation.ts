export interface NavLink {
  label: string;
  href: string;
}

export const headerNavLinks: NavLink[] = [
  { label: 'Shop All', href: '#products' },
  { label: 'Co-ord Sets', href: '#featured' },
  { label: 'Kurta Sets', href: '#categories' },
  { label: 'Our Story', href: '#story' },
  { label: 'Journal', href: '#journal' },
];

export const footerCollections: NavLink[] = [
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Office Wear Collection', href: '#office-wear' },
  { label: 'Summer Cotton Collection', href: '#daily-wear' },
];

export const footerAboutUs: NavLink[] = [
  { label: 'Our Story', href: '#story' },
  { label: 'Craftsmanship', href: '#why-us' },
  { label: 'Sustainability', href: '#why-us' },
  { label: 'Vogue Journal', href: '#journal' },
];

export const footerAssistance: NavLink[] = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Store Locator', href: '#' },
  { label: 'Contact Us', href: '#' },
];
