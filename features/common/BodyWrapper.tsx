'use client';

import { usePathname } from 'next/navigation';
import Header from "./Header";
import Footer from "./Footer";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    return (
        <>
            {!isAdmin && <Header />}
            <main className="min-h-screen ">{children}</main>
            {!isAdmin && <Footer />}
        </>
    );
}
