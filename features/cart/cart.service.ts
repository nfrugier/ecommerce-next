'use client';

import { useCartStore } from './cart.store';
import { useToast } from '@/features/ui/toast/useToast';

export function useCartActions() {
  const addToCartStore = useCartStore(state => state.addToCart);
  const toast = useToast();

  function addProduct(product: { id: string; name: string; price: number; image: string }) {
    addToCartStore(product);
    toast({ id: product.id, text: `✅ ${product.name} ajouté au panier` });
  }

  return {
    addProduct,
  };
}
