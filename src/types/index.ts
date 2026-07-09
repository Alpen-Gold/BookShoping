interface Book {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  categoryId?: string;
  images: string[];
  numberSold: number;
  isActive: boolean;
  owner: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type ProductsType = Book[];
