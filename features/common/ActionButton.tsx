'use client';

import { Loader2 } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface ActionButtonProps {
  label: string;
  icon: ReactNode;
  onClick: () => Promise<void> | void;
  color?: string; // ex: "bg-green-600"
}

export default function ActionButton({ label, icon, onClick, color = "bg-black" }: ActionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className={`w-full ${color} text-white py-2 rounded hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition`}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          En traitement...
        </>
      ) : (
        <>
          {label}
          {icon}
        </>
      )}
    </button>
  );
}
