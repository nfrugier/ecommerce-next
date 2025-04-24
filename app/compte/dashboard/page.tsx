'use client';

import { useAuthStore } from '../../../features/auth/auth.store';
import Link from 'next/link';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <div className="max-w-xl mx-auto py-16 px-4 text-center space-y-4">
        <h1 className="text-2xl font-bold">Non connecté</h1>
        <p className="text-gray-600">Veuillez vous connecter pour accéder à votre tableau de bord.</p>
        <Link href="/compte" className="text-blue-600 hover:underline">Se connecter</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold">Bienvenue, {user.email}</h1>
      <p className="text-gray-600">Voici votre tableau de bord utilisateur mocké.</p>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        <li>Historique de commandes (à venir)</li>
        <li>Produits numériques accessibles (à venir)</li>
        <li>Paramètres de compte (à venir)</li>
      </ul>
      <Link
        href="/"
        className="inline-block mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
