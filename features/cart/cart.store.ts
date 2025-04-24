// /features/cart/cart.store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, quantity: 1 }] });
        }
      },
      removeFromCart: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // clé dans localStorage
    }
  )
);
