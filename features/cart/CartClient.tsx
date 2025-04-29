'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/features/cart/cart.store';

export function CartClient() {
  const items = useCartStore(state => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/panier" className="relative flex items-center gap-1 hover:text-gray-300" title="Voir le panier">
      <ShoppingCart className="w-5 h-5" />
      <span className="hidden md:inline">Panier</span>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center text-xs w-5 h-5 rounded-full bg-red-600 text-white font-bold">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}
