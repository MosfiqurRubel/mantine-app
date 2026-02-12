export interface Category {
  id?: string;
  title: string;
  image: string;
}

export interface Feature {
  title: string;
  icon: React.ReactNode;
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
}
