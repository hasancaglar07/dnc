'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';
import ProjectForm from '../../ProjectForm';

export default function EditProject({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProject();
  }, [params.id]);

  const fetchProject = async () => {
    try {
      const res = await fetch('/api/admin/projects');
      if (res.ok) {
        const projects: Project[] = await res.json();
        const foundProject = projects.find(p => p.id === parseInt(params.id));
        if (foundProject) {
          setProject(foundProject);
        } else {
          router.push('/admin/projects');
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

  if (!project) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Proje bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Projeyi Düzenle</h1>
        <p className="text-slate-400">{project.name}</p>
      </div>
      <ProjectForm project={project} isEdit={true} />
    </div>
  );
}
