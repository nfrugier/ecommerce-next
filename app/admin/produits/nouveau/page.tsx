'use client';

import { useState } from 'react';

export default function NouveauProduitPage() {
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState('');
    const [categorie, setCategorie] = useState('');
    const [type, setType] = useState('physique');
    const [image, setImage] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const nouveauProduit = {
            nom,
            prix: parseFloat(prix),
            categorie,
            type,
            image,
            stock: parseInt(stock),
            description,
        };

        console.log('Produit à enregistrer :', nouveauProduit);
        // Ici plus tard : POST vers une API
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold">Ajouter un produit</h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
                <div className="space-y-2">
                    <label className="block text-sm font-medium">Nom du produit</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Prix (en €)</label>
                    <input
                        type="number"
                        value={prix}
                        onChange={(e) => setPrix(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        required
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Catégorie</label>
                    <input
                        type="text"
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                    {/* À terme, un select avec les vraies catégories */}
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Type de produit</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                    >
                        <option value="physique">Physique</option>
                        <option value="virtuel">Virtuel</option>
                        <option value="abonnement">Abonnement</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Image (URL)</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Stock disponible</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        required
                        min="0"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded px-4 py-2"
                        rows={4}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                    Enregistrer le produit
                </button>
            </form>
        </div>
    );
}
