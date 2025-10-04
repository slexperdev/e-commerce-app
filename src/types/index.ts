export type ID = string | number;

export interface Category {
  id: ID;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: ID;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
export interface ProductListResponse {
  data: Product[];
}

export interface CartItem {
  productId: ID;
  product?: Product;  
  quantity: number;
  unitPrice: number;
}

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: ID;
  items: CartItem[];
  shipping: ShippingAddress;
  totalAmount: number;
  createdAt?: string;
  status?: "pending" | "confirmed" | "shipped" | "delivered";
}

export interface ApiError {
  status: string;
  error?: string | number;
}