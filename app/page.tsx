'use client';

import { LayoutGrid, Rocket, Truck, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
  { id: '1', name: 'T-shirt premium', price: 2500, image: 'https://placehold.co/300x300?text=T-shirt' },
  { id: '2', name: 'Mug isotherme', price: 1200, image: 'https://placehold.co/300x300?text=Mug' },
  { id: '3', name: 'Sac écologique', price: 1800, image: 'https://placehold.co/300x300?text=Sac' },
];

export default function Home() {
  return (
    <div className="text-center mt-12 space-y-14">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Bienvenue dans la boutique
        </h1>
        <p className="text-gray-600 text-lg">
          Des produits simples, cools et utiles. Pour vous.
        </p>
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Voir le catalogue
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-4 text-left">
        <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Produits Star
        </h2>
        <div className="sm:grid sm:grid-cols-3 gap-6 flex overflow-x-auto snap-x snap-mandatory px-1 sm:px-0">
          {featuredProducts.map(product => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 text-center bg-white min-w-[260px] sm:min-w-0 snap-center shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{(product.price / 100).toFixed(2)} €</p>
              <Link
                href="/catalogue"
                className="inline-block mt-2 text-sm px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Voir le produit
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
        <div className="flex items-start gap-4">
          <Truck className="w-8 h-8 text-black" />
          <div>
            <h3 className="text-lg font-semibold">Livraison rapide</h3>
            <p className="text-sm text-gray-600">Colissimo ou MondialRelay.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 text-black" />
          <div>
            <h3 className="text-lg font-semibold">Paiement sécurisé</h3>
            <p className="text-sm text-gray-600">Par carte via Stripe.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Rocket className="w-8 h-8 text-black" />
          <div>
            <h3 className="text-lg font-semibold">Produits de qualité</h3>
            <p className="text-sm text-gray-600">Testés et approuvés par nos clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
