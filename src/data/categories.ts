export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
  description: string;
}

export const categoriesData: Category[] = [
  {
    id: 'cat-1',
    name: 'Kurta Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOUzTmbB-O5Oa9A33BcNGYFHknXywAUiOK1USy-TzgakfeSvAkiwvcYx2Be-Sca08gQ4A08SGqx6g0_1QxL7v1TFCwWRKtgLjkNktDj7H3CPBJ13GdwKtXrXuSopRuBjgnpoE4N47MJIwIXtVoGwTkAKVkx-rDOOrCcvMzzsHzvWvrcG3n3kSHRZgJJfvEJ6EGxgmtQ1jB9ARjYyGL5hL2POMwiom2bsc_SJwQswLn0enJ6HMH-3FLrg',
    href: '/shop/kurta-sets',
    description: 'Crisp silhouettes and refined details for elegant wear.',
  },
  {
    id: 'cat-2',
    name: 'Office Wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgw6JFvSfrg--gLqKbSBCNkbKXbr2q3gzDVsM0T5N3HYl-16VlMEKR_UprR5nA8BNRZ4ks_NgdEOxVSxSvHR-4cLj6dXTVIuAt7bO9_micpKbPA4bp7orVMCigheUIMQw8nS7jqGK9G-fkB1mKCTQaHyaPixpgKfgsoKBDPJpo-HvbCiu-EyVEk047lh-d2zxZmMoBPHqk5Mh8ZzwCinUwu_GVDJocIlQC8pQjNy_nUVO3BGluj-aQow',
    href: '/shop/office-wear',
    description: 'Structured everyday fashion designed for confidence and ease.',
  },
  {
    id: 'cat-3',
    name: 'Co-ord Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI6pMbC6gNdO1yGCkfEbg0o3u8zqlYOuqaMikm3rkiJgFOj2Hxh5OGOTzogGGDQQiEDqTTSszG6UsSdx8Tek6d0lLR1vhARURLAWoLsUy2W8un6QTRWNRynpoIpKvxDGNUykFG3tb96-TBcyc8E1F9uB6aWyYxwIglVG1Cx1CP77zlV-qAxKhJQW0zB-iKLROmnwq4g3WZB2ntBr7h7_pILDX2k_hOYnHnzOIa0xAosjZ50JlUXlm1qw',
    href: '/shop/coord-sets',
    description: 'Traditional motifs reimagined in bold, rich silhouettes.',
  },
  {
    id: 'cat-4',
    name: 'Daily Wear',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfs8PQukBQ97AskKbSm60chm_VQRI6ls2Up8h48AT2p14jnkBz06hk9GIgyNLG8eYz8jHVaiD4o769wv2kLJ_DVmevW_lhSPcEmcSalPbvZAQO1XUOfoqoP2eN7V0ncVDrihxAZm_AuTHvYPnk1a9e0ZdZpjAIqEPrEbeIJC9JzJGS0AwmqGfHoh2QFyym_rsteFvKjG-3fzjE3i6ZdVkyIoxT1KljHDxrySD2bV8rMfyVSECprUs6kQ',
    href: '/shop/daily-wear',
    description: 'Comfortable premium cottons made for effortless relaxation.',
  },
];
export const categoriesTitle = 'Shop by Category';
export const categoriesSubtitle = 'Curated classifications of modern everyday fashion';
