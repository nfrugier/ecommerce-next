'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProduitPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = params;

    // Normalement ici : fetch produit existant
    const [nom, setNom] = useState('Nom existant');
    const [prix, setPrix] = useState('29.99');
    const [stock, setStock] = useState('10');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Modifier produit', { id, nom, prix, stock });
        // Appel API PUT ici plus tard
    };

    const handleDelete = async () => {
        if (confirm('Supprimer ce produit ?')) {
            console.log('Suppression produit', id);
            // Appel API DELETE ici
            router.push('/admin/produits');
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Éditer le produit</h1>
                <button
                    onClick={handleDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                    Supprimer
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Nom du produit</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Prix (€)</label>
                    <input
                        type="number"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    Enregistrer les modifications
                </button>
            </form>
        </div>
    );
}
