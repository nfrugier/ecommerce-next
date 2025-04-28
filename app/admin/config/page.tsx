'use client';

import { useState } from 'react';
import SwitchToggle from '../../../features/ui/switch/SwitchToggle';
import ActionButton from '../../../features/common/ActionButton';
import { Save } from 'lucide-react';


export default function ConfigBoutiquePage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [stripeTestKey, setStripeTestKey] = useState('');
  const [stripeProdKey, setStripeProdKey] = useState('');
  const [sendcloudTestKey, setSendcloudTestKey] = useState('');
  const [sendcloudProdKey, setSendcloudProdKey] = useState('');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [testMode, setTestMode] = useState(false);

  const handleSubmit = async (/*e: React.FormEvent*/) => {
    //e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const config = {
      nom,
      email,
      stripeTestKey,
      stripeProdKey,
      sendcloudTestKey,
      sendcloudProdKey,
      maintenanceMode,
      testMode,
    };

    console.log('Nouvelle configuration boutique :', config);
    // Appel API PUT ici plus tard
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Configuration de la boutique</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
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

        <hr className="my-6" />

        <SwitchToggle enabled={maintenanceMode} setEnabled={setMaintenanceMode} label="Mode maintenance" />
        <SwitchToggle enabled={testMode} setEnabled={setTestMode} label="Mode test" />

        {/*<button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 flex items-center justify-center gap-2"
        >
          Sauvegarder la configuration
          <Save className="w-5 h-5" />
        </button>*/}
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
