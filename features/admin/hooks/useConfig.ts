'use client';

import { useEffect, useState } from 'react';

interface Adresse {
  id?: string;
  rue: string;
  codePostal: string;
  ville: string;
  pays: string;
}

interface BoutiqueConfig {
  id?: string;
  nom: string;
  emailGerant: string;
  adresse?: Adresse;
  stripeTestKey: string;
  stripeProdKey: string;
  sendcloudTestKey: string;
  sendcloudProdKey: string;
  maintenanceMode: boolean;
  testMode: boolean;
}

export function useConfig() {
  const [config, setConfig] = useState<BoutiqueConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const res = await fetch('/api/admin/config');

        if (res.status === 404) {
          setConfig(null); // Pas d'erreur si config absente
        } else if (!res.ok) {
          throw new Error('Erreur de chargement de la configuration.');
        } else {
          const data = await res.json();
          setConfig(data);
        }
      } catch (err: any) {
        setError(err.message || 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    }

    fetchConfig();
  }, []);

  async function updateConfig(newConfig: Partial<BoutiqueConfig>) {
    try {
      const res = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConfig),
      });

      if (!res.ok) throw new Error('Erreur de mise à jour.');

      const updated = await res.json();
      setConfig(updated);
      return true;
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue');
      return false;
    }
  }

  return { config, loading, error, updateConfig };
}
