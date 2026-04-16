import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return <ProjectDetailClient id={params.id} />;
}
