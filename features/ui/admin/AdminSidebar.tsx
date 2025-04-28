'use client';

import Link from 'next/link';
import { Store, ShoppingBag, Package, Settings, ChartNoAxesGantt } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function AdminSidebar() {
    const pathname = usePathname();

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: <Store className="w-5 h-5" /> },
        { href: '/admin/produits', label: 'Produits', icon: <ShoppingBag className="w-5 h-5" /> },
        { href: '/admin/categorie', label: 'Catégories', icon: <ChartNoAxesGantt className="w-5 h-5" /> },
        /*{ href: '/admin/produits', label: 'Produits', icon: <ShoppingBag className="w-5 h-5" /> },*/
        { href: '/admin/commandes', label: 'Commandes', icon: <Package className="w-5 h-5" /> },
        { href: '/admin/config', label: 'Config boutique', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <aside className="w-64 bg-zinc-900 text-white flex flex-col p-6 space-y-6 min-h-screen">
            <div className="text-2xl font-bold mb-4">Admin</div>
            <nav className="flex flex-col space-y-2">
                {navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={clsx(
                            'flex items-center gap-3 p-2 rounded hover:bg-zinc-800 transition',
                            pathname === href ? 'bg-zinc-800' : ''
                        )}
                    >
                        {icon}
                        <span>{label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
