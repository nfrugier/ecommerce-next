'use client';
import { useCartStore } from '../cart/cart.store';
import { useState } from 'react';
import { useToast } from '../ui/toast/useToast';


const products = [
  { id: '1', name: "T-shirt noir", price: 2000, image: "https://placehold.co/300x300/EEE/31343C" },
  { id: '2', name: "Mug blanc", price: 1000, image: "https://placehold.co/300x300/EEE/31343C" },
  { id: '3', name: "Sac en toile", price: 1500, image: "https://placehold.co/300x300/EEE/31343C" },
  { id: '4', name: "Figurine Pop!", price: 1700, image: "https://placehold.co/300x300/EEE/31343C" },
  { id: '5', name: "Jean Homme", price: 5500, image: "https://placehold.co/300x300/EEE/31343C" },
  { id: '6', name: "Jupe couleur", price: 4500, image: "https://placehold.co/300x300/EEE/31343C" },
];

export default function CataloguePage() {
  const addToCart = useCartStore(state => state.addToCart);
  const [added, setAdded] = useState<string | null>(null);
  const toast = useToast();


  const handleAdd = (product) => {
    addToCart(product);
    toast({ id: product.id, text: `✅ ${product.name} ajouté au panier` });
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <div className="text-center mt-12 space-y-14">
      <h1 className="text-3xl font-bold mb-6">Catalogue</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2 text-gray-700">{(product.price / 100).toFixed(2)} €</p>
            <button
              onClick={() => handleAdd(product)}
              className={`mt-4 w-full py-2 rounded text-white transition-colors duration-200 ${
                added === product.id ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
              }`}
            >
              {added === product.id ? 'Ajouté !' : 'Ajouter au panier'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
