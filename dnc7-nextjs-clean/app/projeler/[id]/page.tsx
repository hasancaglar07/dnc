import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) return { title: 'Proje Bulunamadı' };
  return {
    title: project.name,
    description: project.longDescription || project.description,
  };
}

export default async function ProjectDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
