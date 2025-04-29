'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [nomBoutique, setNomBoutique] = useState('Votre Boutique');
  const [email, setEmail] = useState('contact@boutique.com');
  const [adresseComplete, setAdresseComplete] = useState('Adresse de votre boutique');
  const year = new Date().getFullYear();

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/admin/config');
        const data = await res.json();
        if (data.nom) setNomBoutique(data.nom);
        if (data.emailGerant) setEmail(data.emailGerant);
        if (data.adresse) {
          setAdresseComplete(`${data.adresse.rue}, ${data.adresse.codePostal} ${data.adresse.ville}`);
        }
      } catch (error) {
        console.error('Erreur chargement config boutique', error);
      }
    }

    fetchConfig();
  }, []);

  return (
    <footer className="bg-zinc-900 text-white mt-16 border-t border-zinc-700 rounded-md">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">À propos</h4>
          <p className="text-gray-400">
            Notre boutique propose des produits utiles, durables et pensés pour vous simplifier la vie. Service client au top.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/catalogue" className="hover:text-white">Catalogue</Link></li>
            <li><Link href="/panier" className="hover:text-white">Panier</Link></li>
            <li><Link href="/cgv" className="hover:text-white">Conditions Générales de Vente</Link></li>
            <li><Link href="/rgpd" className="hover:text-white">Politique de Confidentialité</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">
            {email} <br />
            +33 1 23 45 67 89<br />
            {adresseComplete}
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-zinc-800">
        © {year} {nomBoutique}. Tous droits réservés.
      </div>
    </footer>
  );
}
