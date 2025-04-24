'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../features/auth/auth.store';


export default function ComptePage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = useAuthStore(state => state.login);

  if (mode === 'login') {
    login({ email }); // 👈 simule une session
    router.push('/compte/dashboard');
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'test@demo.fr' && password === 'demo123') {
        router.push('/compte/dashboard');
      } else {
        setError('Identifiants invalides');
      }

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push('/compte/dashboard');
    } else {
      setError('Identifiants invalides');
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {mode === 'login' ? 'Connexion' : 'Inscription'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Votre email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border px-4 py-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {mode === 'login' ? 'Se connecter' : "S'inscrire"}
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        {mode === 'login' ? "Pas encore de compte ?" : "Déjà inscrit ?"}{' '}
        <button
          type="button"
          onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          className="text-blue-600 hover:underline"
        >
          {mode === 'login' ? "Créer un compte" : "Se connecter"}
        </button>
      </p>
    </div>
  );
}
