'use client';

import Link from 'next/link';
import { LogIn, LogOut } from 'lucide-react';
import { useAuthStore } from '@/features/auth/auth.store';

export function AuthClient() {
  const user = useAuthStore(state => state.user);

  return (
    <>
      {user ? (
        <p className="text-sm text-gray-500">Connecté en tant que {user.email}</p>
      ) : (
        <p className="text-sm text-gray-500">Vous n'êtes pas connecté</p>
      )}
      <Link href="/compte" className="relative flex items-center gap-1 hover:text-gray-300" title="Voir le compte">
        {user ? (
          <LogIn className="w-5 h-5" />
        ) : (
          <LogOut className="w-5 h-5" />
        )}
      </Link>
    </>
  );
}
