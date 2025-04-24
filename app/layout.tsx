import '../styles/globals.css';
import Header from '../features/common/Header';
import Footer from '../features/common/Footer';
import ToastProvider from '../features/ui/toast/ToastProvider';


export const metadata = {
  title: 'Mini E-commerce',
  description: 'Catalogue de produits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900">
        <ToastProvider>
          <main className="max-w-5xl mx-auto p-4">
            <Header />
            {children}
            <Footer />
          </main>
        </ToastProvider>
      </body>
    </html>
  );
}
