'use client';
import { useCartStore } from './cart.store';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const items = useCartStore(state => state.items);
  const removeFromCart = useCartStore(state => state.removeFromCart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log('panier', items);

  const router = useRouter();

  return (
    <div className="text-center mt-12 space-y-14">
      <h1 className="text-3xl font-bold mb-6">Votre panier</h1>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{(item.price / 100).toFixed(2)} € x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </div>
          ))}
          <p className="text-right font-semibold text-xl">Total : {(total / 100).toFixed(2)} €</p>
          <button
            onClick={() => router.push('/payment')}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Payer (Mock)
          </button>
        </div>
      )}
    </div>
  );
}
