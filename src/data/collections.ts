export interface CollectionCard {
  id: string;
  title: string;
  tag: string;
  image: string;
  span: 'large' | 'small';
}

export const featuredCollections: CollectionCard[] = [
  {
    id: 'col-1',
    title: 'The Summer Collection',
    tag: 'NEW ARRIVALS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBynls8jDUkqnYeW-puTHn5NlegclgbV9xMyNVwFDhY7PUfKQx2RYgqHf9NTSFrwCix8n8WmlK7UM98VqMvJqAXYqnitVbipQ2bBGtq4IlIhIeKHnU_Wmi2qJh2WSLPDa2WK8Vue6uyuI6BimRJ3LOb289hytfnHo5ZmCG6_qvui6-pOCdxflCzk9jze_-xxLtUtw6tjyN_b2UCSj9lZClZ7421NJmfB_D_azsjd03V1sS949ev9tgKyQ',
    span: 'large',
  },
  {
    id: 'col-2',
    title: 'Comfortable Premium Co-ords',
    tag: 'ESSENTIAL WEAR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxs2Jfno0blwddqTD_BUDp-Cf-D_VPE8w5umna3Q_x4CICenpFClsmCrHvM6yyQlHU1BC47hN7823REPMJO1TF1aJPTEut8yAlA9RvbRP6V8XU51VjiQLiaoiXKyjxWvHFRKhS1K44vX5xY-0fL_QRa59YABhkb1NoeIikDmAJfewM-Xhna01SJ6g8BSksrUU8OdldTx2G9cWEEAckXrD668AEMTolbf8jEqCgUnzt6kiqrTc2UkbVsg',
    span: 'small',
  },
  {
    id: 'col-3',
    title: 'Everyday Kurta Sets',
    tag: 'BEST SELLERS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyF1DUAbBYEDQ2DPan6VNs5_3ftFuk8ylhMSFTqMYmTx2kHUikLQAs7CktqbARRPxSKBDbncE2kPPbTbqQfCQ9PHpaHYLRR7diT6MukYksswwSlp6l6GRjBoSNsfhnyxRLqRCsSXoOateGZilMbAy6S5QX3vFnixUIJUkAFXAysLRJ6AH8mPem3oOYzf1obMPTIBMWtCtCwXj_SXE4t4Wy182QXS7A0CA4aO5KvA6CP-KBFIMj8IXNyw',
    span: 'small',
  },
];
export const collectionsTitle = 'Featured Collections';
export const collectionsSubtitle = 'Handcrafted narratives reimagined for contemporary everyday elegance';
