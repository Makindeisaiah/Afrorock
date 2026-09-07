export interface Product {
  id: number;
  img: string;
  name: string;
  price: string;
  category: 'Gown' | 'Crop Top' | 'Off-Shoulder';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  img: string;
  slug: string;
}

export interface TeamMember {
  role: string;
  name: string;
  bio: string;
}
