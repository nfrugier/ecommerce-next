'use client';

import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CartStore {
  items: { product: Product; quantity: number }[];
  addToCart: (product: Product) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),
}));
