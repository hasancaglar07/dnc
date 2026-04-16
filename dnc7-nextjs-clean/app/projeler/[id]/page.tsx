import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find(p => p.id === parseInt(params.id));
  if (!project) return { title: 'Proje Bulunamadı' };
  return {
    title: project.name,
    description: project.longDescription || project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailClient id={params.id} />;
}
