'use client';

import { useState, useEffect } from 'react';
import SwitchToggle from '@/features/ui/switch/SwitchToggle';
import ActionButton from '@/features/common/ActionButton';
import { Save } from 'lucide-react';
import { useConfig } from '@/features/admin/hooks/useConfig';

export default function ConfigBoutiquePage() {
  const { config, loading, error, updateConfig } = useConfig();

  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [rue, setRue] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState('');
  const [pays, setPays] = useState('');
  const [stripeTestKey, setStripeTestKey] = useState('');
  const [stripeProdKey, setStripeProdKey] = useState('');
  const [sendcloudTestKey, setSendcloudTestKey] = useState('');
  const [sendcloudProdKey, setSendcloudProdKey] = useState('');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [testMode, setTestMode] = useState(false);

  useEffect(() => {
    if (config) {
      setNom(config.nom);
      setEmail(config.emailGerant);
      setStripeTestKey(config.stripeTestKey);
      setStripeProdKey(config.stripeProdKey);
      setSendcloudTestKey(config.sendcloudTestKey);
      setSendcloudProdKey(config.sendcloudProdKey);
      setMaintenanceMode(config.maintenanceMode);
      setTestMode(config.testMode);

      // Si l'adresse existe
      if (config.adresse) {
        setRue(config.adresse.rue || '');
        setCodePostal(config.adresse.codePostal || '');
        setVille(config.adresse.ville || '');
        setPays(config.adresse.pays || '');
      }
    }
  }, [config]);

  const handleSubmit = async () => {
    const updated = await updateConfig({
      nom,
      emailGerant: email,
      stripeTestKey,
      stripeProdKey,
      sendcloudTestKey,
      sendcloudProdKey,
      maintenanceMode,
      testMode,
      adresse: {
        rue,
        codePostal,
        ville,
        pays,
      },
    });

    if (updated) {
      console.log('Configuration mise à jour !');
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Configuration de la boutique</h1>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6 bg-white p-6 rounded shadow">
        {/* Infos générales */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Nom de la boutique</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Email du gérant</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        {/* Adresse complète */}
        <hr className="my-6" />

        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Adresse de la boutique</h2>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Rue</label>
            <input
              type="text"
              value={rue}
              onChange={(e) => setRue(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Code Postal</label>
              <input
                type="text"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Ville</label>
              <input
                type="text"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Pays</label>
            <input
              type="text"
              value={pays}
              onChange={(e) => setPays(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        {/* Clés API */}
        <hr className="my-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Clé Stripe Test</label>
            <input
              type="text"
              value={stripeTestKey}
              onChange={(e) => setStripeTestKey(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Clé Stripe Production</label>
            <input
              type="text"
              value={stripeProdKey}
              onChange={(e) => setStripeProdKey(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Clé SendCloud Test</label>
            <input
              type="text"
              value={sendcloudTestKey}
              onChange={(e) => setSendcloudTestKey(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Clé SendCloud Production</label>
            <input
              type="text"
              value={sendcloudProdKey}
              onChange={(e) => setSendcloudProdKey(e.target.value)}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        {/* Switchs */}
        <hr className="my-6" />

        <SwitchToggle enabled={maintenanceMode} setEnabled={setMaintenanceMode} label="Mode maintenance" />
        <SwitchToggle enabled={testMode} setEnabled={setTestMode} label="Mode test" />

        {/* Bouton */}
        <ActionButton
          label="Sauvegarder la configuration"
          icon={<Save className="w-5 h-5" />}
          onClick={handleSubmit}
          color="bg-green-600"
        />
      </form>
    </div>
  );
}
