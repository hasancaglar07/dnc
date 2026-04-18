import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminNav from './AdminNav';
import './admin.css';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin-auth')?.value === 'true';
  if (!isAuthenticated) redirect('/admin-login');

  return (
    <div
      id="admin-root"
      className="flex overflow-hidden"
      style={{
        height: '100dvh',
        fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
      }}
    >
      <AdminNav />
      <main
        className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden lg:pt-0"
        style={{ paddingTop: 64 }}
      >
        <div style={{ padding: '32px clamp(20px, 4vw, 48px)', maxWidth: 1100 }}>
          {children}
        </div>
      </main>
    </div>
  );
}
