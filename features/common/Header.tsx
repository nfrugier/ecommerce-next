'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, Home } from 'lucide-react';
import { CartClient } from '@/features/cart/CartClient';
import { AuthClient } from '@/features/auth/AuthClient';

export default function Header() {
  const [nomBoutique, setNomBoutique] = useState('StreetShop');

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/admin/config');
        const data = await res.json();
        if (data.nom) {
          setNomBoutique(data.nom);
        }
      } catch (error) {
        console.error('Erreur chargement config boutique', error);
      }
    }

    fetchConfig();
  }, []);

  return (
    <header className="mx-4 mt-2 bg-zinc-900 text-white shadow-sm sticky top-0 z-40 border-b border-zinc-700 rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-300">
          <Home className="w-5 h-5" />
          <span className="hidden sm:inline">{nomBoutique}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-white">
          <Link href="/catalogue" className="flex items-center gap-1 hover:text-gray-300" title="Voir le catalogue">
            <LayoutGrid className="w-5 h-5" />
            <span className="hidden md:inline">Catalogue</span>
          </Link>
          <CartClient />
          <AuthClient />
        </nav>
      </div>
    </header>
  );
}
