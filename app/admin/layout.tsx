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
    <div className="min-h-screen bg-[#0B0D10] bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_42%)]">
      <AdminNav />
      <main className="lg:pl-60 pt-16 lg:pt-0">
        <div className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
