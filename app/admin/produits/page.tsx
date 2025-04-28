'use client';

import Link from 'next/link';
import {PackagePlus} from 'lucide-react';

export default function ProduitsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Produits</h1>
                <Link
                    href="/admin/produits/nouveau"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-800 flex"
                >
                    Ajouter un produit&nbsp;&nbsp;<PackagePlus />
                </Link>
            </div>

            <div className="bg-white rounded shadow p-6">
                <p className="text-gray-500 text-center">Aucun produit pour l'instant.</p>
            </div>
        </div>
    );
}
