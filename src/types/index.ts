export interface Feature {
  title: string;
  icon: React.ReactNode;
}

export interface Category {
  CategoryId: string;
  Category: string;
  CategoryPhotos?: string;
  QuizCategoryName?: string;
  QuizCategoryImage?: string;
}

export interface Product {
  ProductId: number;
  IsPrescriptionGenerationRequired: boolean;
  IsAcknowledgmentRequired: boolean;
  Name: string;
  Price: number;
  LowestPrice?: number;
  ConsultancyFee?: number;
  MedicineType?: string;
  CoverPhoto?: string;
  PreviewUrl?: string;
  IntakeFormScreenUrl?: string | null;
  CategoryId: number;
  Category: string;
  ShippingCharge?: number | null;
  LabCharge?: number | null;
  IsCompounded: boolean;
  IsPerMonth: boolean;
  IsStartWithLowest: boolean;
  IsOutOfStock: boolean;
  ContentAlignment?: string;
  TotalDoes?: number;
  Doses?: string;
  AboutTheProduct?: string;
  HealthBenefits?: string;
}
export interface ProductCategory {
  CategoryId: number;
  Category: string;
  Products: Product[];
}

// export type ProductCategoryKey =
//   | 'all'
//   | 'weight-loss'
//   | 'beauty-hair'
//   | 'testosterone'
//   | 'sexual-health';

// export interface ProductCardProps {
//   ProductId: string;
//   Name: string;
//   CoverPhoto?: string;
//   Price: string;
//   IsOutOfStock?: string;
//   cartGradient?: { from: string; to: string };
//   Category: ProductCategoryKey | string;
// }
