import '../styles/globals.css';

import ToastProvider from '../features/ui/toast/ToastProvider';
import BodyWrapper from "../features/common/BodyWrapper";
import {usePathname} from "next/navigation";


export const metadata = {
  title: 'Mini E-commerce',
  description: 'Catalogue de produits',
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900">
        <ToastProvider>
          <BodyWrapper>{children}</BodyWrapper>
        </ToastProvider>
      </body>
    </html>
  );
}
