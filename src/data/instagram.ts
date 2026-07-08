export interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  isVideo?: boolean;
}

export const instagramData: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw-8HKi5OpCOvDMJe0mgbob6iA5y8-S-JUu6nE7TlUNTmG6LlhlvDQAAL19T_i0t_ZVKbMaiMVYEhjqd6LwaBWFL5kZ5HNZutq2U1urxpwEW7pQKUyrFRRxQQheLCBGs07sa9IRQoxIkX4rd_9dOAO5az-BRbMWdwJmu7oGgsRASDJ1LeRhEnvIYYx-91IvZWLHFdcsu1yMlUQfb97EciPhERGRwIZxpyt2XczMQiRbRESR-kLlG45yw',
    alt: 'Candid lifestyle photo of a customer laughing in a sunny cafe, wearing a premium cotton set.',
  },
  {
    id: 'ig-2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ0XnBlIv7Ho_SLB19Cxwq6DYkoVppNbpn1azP8vStL5pOn7gJe1Ali_3-ZC3S0Dv_pNXwbLP2rvtWjArS45Cy_RmJkU20A_JxcFF0nuW5C1NEgUghmOmBgFpsXKFC7_eLYc-sle-aBN5xScGWwNcitBG_RN-jKtGb-X_Z2uTtHPYLenYCJ49JHdUkjaBtOrGw2AbWFT0nu8o2KZcewPLV57wSNpi7j49ozxW9CsSjN6rtR2aB2ZkhQ',
    alt: 'Lifestyle photo of a customer wearing a printed kurta set at a beach resort during sunset.',
  },
  {
    id: 'ig-3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZOS7o2xatriegD1ClGSNl9EykTc2Jf4r7Ill3HyTRdWIJBEBnBs-SFmA6A37kCZoYxSKNmhd4DSa9iXP3aHKfL_autpE4mjYiQ5_Ch8GG-b9QHzWfB7c7yA7g5xGX6_mU-VLSTAg8za-bVykrQOqqXARunokzBPJTy7cNiqUy-pa6qLAPFvXnidLS3oD82n3QxCtDW8jNEEXtxBEZ5HcOr6lpnwuZMegMNa72ZZf2bOx4RLwhYYbsOw',
    alt: 'Cinematic layout showing soft cotton fabric blowing in the morning breeze.',
    isVideo: true,
  },
  {
    id: 'ig-4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHDvu23A2zQx2ly3OHoUPm8sW-VQaWnDf8p0zcZ9GyV7fgssmsLnfcb74NX677rvsN2ZBFKnxpEf_LLx1BhH_r62ZII9psbpgrMsF55DMdxpL-LAoT6J3tZdiFWIGkSUi9xAb5K95bNlwYBAFtiiCL85NKfqP0ow2U6FutNS5l6I_CDI7NKbz6zXyCTxKaQh-qjdA0dLDqINWwubTddrZKT46Ylz-nk7qg5UkNek5EHm_tW_YTLFEFvw',
    alt: 'Minimalist detail styling shot of hand-printed cotton sleeve and premium jewelry.',
  },
  {
    id: 'ig-5',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR6ErCZVKMjv9vXYQw2jPfZUrVCun1zug-BhtKJeQ5-vQYpkAQ_FJV95YFoseN6NOgHXo9ao7BH_UhUh970iDPNlldofZay1k8Wzh-TX_lxUXj0UseSDq02BO1rxcerKHOQQk4bRkolrUgtBYXR6nGXMNuK_g-l_DqS934JbD-wa79xUlPz6I9QBKXZGKlIwSKZ4X4KMsGvkkQ-ZAePsaaYRYJwgLJQ-FkGxC7A1etesVZFEuTACcHnA',
    alt: 'Mirror selfie showing customer wearing a relaxed summer cotton co-ord set in a modern home.',
  },
];
export const instagramHashtag = '#SattvaVogue';
export const instagramTitle = 'Spotted in Sattva';
