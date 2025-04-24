'use client';

import { useCartStore } from '../../features/cart/cart.store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PaiementPage() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const router = useRouter();
  const clearCart = useCartStore(state => state.clearCart);
  const [email, setEmail] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    // Simule un paiement → redirection vers confirmation
    router.push('/confirmation');
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Paiement</h1>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <form onSubmit={handlePayment} className="space-y-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>{(item.price * item.quantity / 100).toFixed(2)} €</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Total</span>
              <span>{(total / 100).toFixed(2)} €</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Adresse e-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-4 py-2"
              placeholder="exemple@domaine.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Procéder au paiement
          </button>
        </form>
      )}
    </div>
  );
}
