export interface Category {
  id?: string;
  title: string;
  image: string;
}

export interface Feature {
  title: string;
  icon: React.ReactNode;
}

export type ProductCategory =
  | 'all'
  | 'weight-loss'
  | 'beauty-hair'
  | 'testosterone'
  | 'sexual-health';

export interface Category {
  CategoryId: string;
  Category: string;
  CategoryPhotos?: string;
  QuizCategoryName?: string;
  QuizCategoryImage?: string;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  badge?: string; // e.g. "Research use only"
  cartGradient: {
    from: string;
    to: string;
  };
  category: ProductCategory;
}
