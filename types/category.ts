export type CategoryType = {
  id: number;
  categoryName: string;
  slug: string;
  mainImage: {
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
      thumbnail: {
        url: string;
      };
    };
  };
};
