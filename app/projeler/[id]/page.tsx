import type { Metadata } from 'next';
import { getProjects } from '@/lib/db';
import ProjectDetailClient from './ProjectDetailClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const project = getProjects().find(p => p.id === parseInt(id));
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
  const projects = getProjects();
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) notFound();
  const idx = projects.findIndex(p => p.id === parseInt(id));
  const nextProject = projects[(idx + 1) % projects.length];
  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
