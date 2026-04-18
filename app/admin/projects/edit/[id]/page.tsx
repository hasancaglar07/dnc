'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';
import ProjectForm from '../../ProjectForm';

export default function EditProject({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/projects')
      .then(r => r.ok ? r.json() : [])
      .then((list: Project[]) => {
        const found = list.find(p => p.id === parseInt(id));
        if (found) setProject(found);
        else router.push('/admin/projects');
      })
      .finally(() => setLoading(false));
  }, [id, router]);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, color: 'var(--adm-text-3)', fontSize: 14 }}>
      Yükleniyor...
    </div>
  );

  if (!project) return null;

  return <ProjectForm project={project} isEdit={true} />;
}
