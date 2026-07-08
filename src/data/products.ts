export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'neutral';
  description: string;
}

export const newArrivalsProducts: Product[] = [
  {
    id: 'na-1',
    name: 'Cotton Co-ord Set (Blush Floral)',
    category: 'Co-ord Sets',
    price: 8400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUkCjCN51pGF1P_G7nWW_9gYvC1bKcnTdDNG9XM54FRI7DuY3T6Jd4Y8acFCiUE11oo-7FTa3WhYhbhHzrUYrZK7HdKq5FWzN2NYoKC-H_VBbd9A_4okv7aYfhepK8YGsDtDIV145JSKA_nmSAypCN2QeLFXxf2cMddDy_pETpPEYjNFGPgf3GlxFLQMeYbGJlp0KCyx2sddXRfapAmb3N_Es2X28vvta1ZR12UeaoaTcZr0Z4pcqddQ',
    badge: 'Limited',
    badgeType: 'primary',
    description: 'Breathable cotton in a modern, relaxed silhouette.',
  },
  {
    id: 'na-2',
    name: 'Printed Kurta Set (Ivory Petal)',
    category: 'Kurta Sets',
    price: 7200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoujfMy6h_tANJY1y7W39RIHUcRXcRys5IhKZ4sbuyVVHFBNR28r-RnWar1ECi-whGcZO2crFBlKSoXz9ehgHXKwgEtrYoD3vdPz_ys1Rmjiysjqieq3U-8-Y44SXoq-pxN7kTyDsZNG0Wp_zZJ1neP1_kYw0IC_NUxC759SIBlU6qZlnMZpKOG_kBuZugHI60IzYq2M8LCPF90JkkPIijFoAFw1hpo2_mgmqPPoEHB-pf3t7tsMRQjA',
    description: 'Fine details and an airy aesthetic for hot afternoons.',
  },
  {
    id: 'na-3',
    name: 'Cotton Co-ord Set (Natural Indigo)',
    category: 'Co-ord Sets',
    price: 9800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkQTD2rQZ6eBWvxbeDjHO2zFP9XV1-SLmTYW183mRaAQBM9MUt2JF4PV3KTObygO0ZwoD7HXUeGi4PLr1ZSLYOd1N8bJ896RhqqPO7bH3Zrcz5F-tMOmRkEElcklSCYq_6reQr_yOHbsX3gjgQLJ6iZz_iVWlL79zLvj15q2RfjL6zTZvNNH6uqWI4cF2Vfw_Ex_LlYvUHm8ekW5YqpH5fixvyt0MEwFMOa1p871GcT6yrcvtrNvRp-A',
    badge: 'New',
    badgeType: 'secondary',
    description: 'Timeless prints dyed with organic natural pigments.',
  }
];

export const bestSellersProducts: Product[] = [
  {
    id: 'bs-1',
    name: 'Printed Kurta Set (Rose Garden)',
    category: 'Kurta Sets',
    price: 3499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmGbVz5ROL1vxXVHCwqgwxIUGhe4G0A6hkqTRwBbSNiuHXm4IlSiVM4B8iStMLynXmWwqa0ChkAdZc13_QR4EFSXmJQy2HEYFyvhNa6fVzBjicbIKeuwfxVK8pAurkpWdep0enpf2nfS_PV0Zm3tMreyxQ3wyenINAc_BNRaz1k9Ls1E3Ll92Pe3lhzCRgdWqW-JUCHCyNlAAmPy6Z76oV9jn4lHrfYvylweBZHPsUbmvpTIN0mrvFKA',
    badge: 'Best Seller',
    badgeType: 'secondary',
    description: 'Delicate floral patterns with a structured premium neck detail.',
  },
  {
    id: 'bs-2',
    name: 'Cotton Co-ord Set (Sandstone Orange)',
    category: 'Co-ord Sets',
    price: 4250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRUYlhdycW0LeZ2YGE4UwGKZ2g4jqJD7LwHhemBhR1FYgG0drTes31x8MW_Z5pR04zcTjS-s1DWf6nkRoHm8_uMJjWlcbxyW3sihW02oJIHafka507dc6tv2EdlWR2LL005ibY0HTEWWVWOfsVOaRlzUU-x4z6Y6FBwLPHUd7hCZXScJBX2epnRfRevnRDu4FWVz2xnkAx8NJlizIqaz2ENOeO5mdh3J5D_9FPHszwym1HZsLBUjr_kA',
    badge: 'Popular',
    badgeType: 'neutral',
    description: 'Modern silhouette paired with traditional dye palettes.',
  },
  {
    id: 'bs-3',
    name: 'Everyday Cotton Tunic (Indigo Breeze)',
    category: 'Tunic',
    price: 2899,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-RgYd5pIuIYdQEqxCh6Lg8ZK6sHzHn2WjD1wEZHYUKpi5wB-RCu6pVU0mn66hmHFuXkC9e4DTf_yWknO8W9hUxGHiKrOm4vVTBHrNXuOEluAn0BXnA11OMN3d_zch0XfkmGi_cblFeRCKSxYOacADxxsLYCDUSAMmpMzYmXD8QuCz73QxjpcmJx2oZIesBTmVAVt4GHiCW1mKxgyIBtxFX8E4ud1zh6wFDsHO-PBwn96wo6WwWohwdw',
    badge: 'Limited Edition',
    badgeType: 'primary',
    description: 'A summer staple made from 100% fine cotton linen.',
  },
  {
    id: 'bs-4',
    name: 'Heritage Printed Kurta Set (Emerald Green)',
    category: 'Kurta Sets',
    price: 5900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw0XuhyAKm2oCT4JBYy01DJ_sNnipdv1U9K-0G8pDg3LT4VGEsk0F7CIa1rROhhT1kZxPI4nVKwkG7C6IoMwlaleFIkNzQyCt06kp2GjelWrHgNVckdwEbko4iwNvYvGNc2093Au3olm43QiQw4WVIWuiNZHGtB0rqOchjL7PtVbGBZHKoMNU3xkwa1ZBZxj-V1ue3J_Y2l2d3gbL7WOnitmx3JUdJJ9sTH1oK0NKdorlfpuKKosxFoQ',
    badge: 'Trending',
    badgeType: 'primary',
    description: 'Elegant deep tones paired with soft gold metallic accents.',
  },
  {
    id: 'bs-5',
    name: 'Cotton Co-ord Set (Crimson Bloom)',
    category: 'Co-ord Sets',
    price: 6400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUkCjCN51pGF1P_G7nWW_9gYvC1bKcnTdDNG9XM54FRI7DuY3T6Jd4Y8acFCiUE11oo-7FTa3WhYhbhHzrUYrZK7HdKq5FWzN2NYoKC-H_VBbd9A_4okv7aYfhepK8YGsDtDIV145JSKA_nmSAypCN2QeLFXxf2cMddDy_pETpPEYjNFGPgf3GlxFLQMeYbGJlp0KCyx2sddXRfapAmb3N_Es2X28vvta1ZR12UeaoaTcZr0Z4pcqddQ',
    badge: 'Best Seller',
    badgeType: 'secondary',
    description: 'Vibrant crimson dyes hand-printed on breathable soft cotton.',
  },
  {
    id: 'bs-6',
    name: 'Classic Linen Kurta (Desert Sand)',
    category: 'Kurta',
    price: 4900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Yn_bvOC1abDWacQTv1zrlAeK7qXqIzD9aeI9Hw24-biltTlybj0DK4ycHcOIujnQSqypSPtIg8GebzdGEoRcVOU2KpxjC1aV3YeawsxXhcrdxydDBTOUYqBwAdIRD4xILKZgL8JbB58QRr_fvbJdTfqAG1QBmo2TmP8dpht_rXWwmxcNylvTf1czEmVO3q23cnFuG2dJMxXB_HYRp5vpB9FJutmt7BVmwTJdk4ZpUkitzRd0OwatQ',
    description: 'Minimalist sand tone linen, tailored for a crisp modern look.',
  }
];
