'use client';

import AdminSidebar from '../../features/ui/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen ">
            <AdminSidebar />
            <main className="flex-1 bg-white p-10">
                {children}
            </main>
        </div>
    );
}
