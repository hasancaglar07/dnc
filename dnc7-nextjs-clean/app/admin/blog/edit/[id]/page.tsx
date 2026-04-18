'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/data/blog';
import BlogForm from '../../BlogForm';

export default function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/blog')
      .then(r => r.ok ? r.json() : [])
      .then((list: BlogPost[]) => {
        const found = list.find(p => p.id === id);
        if (found) setPost(found);
        else router.push('/admin/blog');
      })
      .finally(() => setLoading(false));
  }, [id, router]);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, color: 'var(--adm-text-3)', fontSize: 14 }}>
      Yükleniyor...
    </div>
  );

  if (!post) return null;

  return <BlogForm post={post} isEdit={true} />;
}
