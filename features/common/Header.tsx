'use client';

import Link from 'next/link';
import { ShoppingCart, LayoutGrid, Home, LogIn, LogOut } from 'lucide-react';
import { useCartStore } from '../cart/cart.store';
import { useAuthStore } from '../../features/auth/auth.store';


export default function Header() {
  const items = useCartStore(state => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const user = useAuthStore(state => state.user);


  return (
    <header className="mx-4 mt-2 bg-zinc-900 text-white shadow-sm sticky top-0 z-40 border-b border-zinc-700 rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-300">
          <Home className="w-5 h-5" />
          <span className="hidden sm:inline">Ma Boutique</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/catalogue" className="flex items-center gap-1 hover:text-gray-300" title="Voir le catalogue">
            <LayoutGrid className="w-5 h-5" />
            <span className="hidden md:inline">Catalogue</span>
          </Link>
          <Link href="/panier" className="relative flex items-center gap-1 hover:text-gray-300" title="Voir le panier">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden md:inline">Panier</span>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center text-xs w-5 h-5 rounded-full bg-red-600 text-white font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
          {user ? (
              <p className="text-sm text-gray-500">Connecté en tant que {user.email}</p>
            ) : (
              <p className="text-sm text-gray-500">Vous n'êtes pas connecté</p>
            )}
          <Link href="/compte" className="relative flex items-center gap-1 hover:text-gray-300" title="Voir le panier">
            {user ? (
              <LogIn className="w-5 h-5" />
              ) : (
              <LogOut className="w-5 h-5" />
              )}
          </Link>

        </nav>
      </div>
    </header>
  );
}

