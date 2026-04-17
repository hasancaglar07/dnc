import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminNav from './AdminNav';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin-auth')?.value === 'true';

  if (!isAuthenticated) {
    redirect('/admin-login');
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <AdminNav />
      <main className="lg:pl-64">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
