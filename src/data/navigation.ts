export interface NavLink {
  label: string;
  href: string;
}

export const headerNavLinks: NavLink[] = [
  { label: 'Shop All', href: '/shop' },
  { label: 'Co-ord Sets', href: '/coord-sets' },
  { label: 'Kurta Sets', href: '/shop/kurta-sets' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Journal', href: '/journal' },
];

export const footerCollections: NavLink[] = [
  { label: 'New Arrivals', href: '/shop' },
  { label: 'Best Sellers', href: '/shop' },
  { label: 'Office Wear Collection', href: '/shop/office-wear' },
  { label: 'Summer Cotton Collection', href: '/shop/daily-wear' },
];

export const footerAboutUs: NavLink[] = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Craftsmanship', href: '/our-story' },
  { label: 'Sustainability', href: '/our-story' },
  { label: 'Vogue Journal', href: '/journal' },
];

export const footerAssistance: NavLink[] = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Store Locator', href: '#' },
  { label: 'Contact Us', href: '/contact' },
];
