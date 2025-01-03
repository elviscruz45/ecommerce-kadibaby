export type ProductType = {
  id: number;

  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  taste: string;
  origin: string;
  price: number;
  images: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      medium: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  category: {
    data: {
      attributes: {
        slug: string;
        categoryName: string;
      };
    };
  };
};
