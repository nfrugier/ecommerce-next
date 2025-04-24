'use client';

import { useState } from 'react';
import { ToastContext, ToastMessage } from './ToastContext';
import { v4 as uuidv4 } from 'uuid';

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: ToastMessage) => {
    const id = uuidv4();
    const toast = { id, text: message.text };
    setToasts((t) => [...t, toast]);
    setTimeout(() => {
      setToasts((t) => t.filter((msg) => msg.id !== id));
    }, 2500);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-black text-white px-4 py-2 rounded shadow-md text-sm animate-fade"
          >
            {toast.text}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
