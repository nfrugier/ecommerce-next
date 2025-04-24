'use client';
import { createContext, useContext } from 'react';

export type ToastMessage = { id: string; text: string };

export const ToastContext = createContext<(message: ToastMessage) => void>(() => {
  throw new Error('ToastProvider missing');
});

export const useToast = () => useContext(ToastContext);
