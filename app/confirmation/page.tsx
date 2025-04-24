'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4 text-center space-y-6">
      <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
      <h1 className="text-3xl font-bold">Merci pour votre commande !</h1>
      <p className="text-gray-600 text-lg">
        Vous recevrez un e-mail de confirmation avec les détails de votre commande dans quelques instants.
      </p>
      <Link
        href="/catalogue"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Continuer vos achats
      </Link>
    </div>
  );
}
