export interface IProduct {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  price: number;
  priceOld?: number;
  category: TProductCategory;
  image: string;
  badge?: string;
  isVetOnly?: boolean;
  isFeatured?: boolean;
}

export type TProductCategory =
  | "higiene"
  | "entrenamiento"
  | "accesorios"
  | "suplementos"
  | "veterinario";

export interface ICategory {
  id: TProductCategory;
  label: string;
  image: string;
  count: number;
  bgClass: string;
}
