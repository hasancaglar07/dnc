'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from '@/data/blog';
import BlogForm from '../../BlogForm';

export default function EditBlogPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    try {
      const res = await fetch('/api/admin/blog');
      if (res.ok) {
        const posts: BlogPost[] = await res.json();
        const foundPost = posts.find(p => p.id === params.id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          router.push('/admin/blog');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-400">Yükleniyor...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Blog yazısı bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Blog Yazısını Düzenle</h1>
        <p className="text-slate-400">{post.title}</p>
      </div>
      <BlogForm post={post} isEdit={true} />
    </div>
  );
}
