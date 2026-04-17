import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/data/blog';
import { Project } from '@/data/projects';

const DATA_DIR = path.join(process.cwd(), 'data');

function ensureJsonFile(filename: string, fallbackImport: () => unknown[]): string {
  const jsonPath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(jsonPath)) {
    const data = fallbackImport();
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf-8');
  }
  return jsonPath;
}

// Blog
export function getBlogPosts(): BlogPost[] {
  const { blogPosts } = require('@/data/blog');
  const filePath = ensureJsonFile('blog.json', () => blogPosts);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function saveBlogPosts(posts: BlogPost[]): void {
  const filePath = path.join(DATA_DIR, 'blog.json');
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf-8');
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find(p => p.slug === slug);
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return getBlogPosts().find(p => p.id === id);
}

export function upsertBlogPost(post: BlogPost): void {
  const posts = getBlogPosts();
  const idx = posts.findIndex(p => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.unshift(post);
  }
  saveBlogPosts(posts);
}

export function deleteBlogPost(id: string): void {
  const posts = getBlogPosts().filter(p => p.id !== id);
  saveBlogPosts(posts);
}

// Projects
export function getProjects(): Project[] {
  const { projects } = require('@/data/projects');
  const filePath = ensureJsonFile('projects.json', () => projects);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function saveProjects(projects: Project[]): void {
  const filePath = path.join(DATA_DIR, 'projects.json');
  fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), 'utf-8');
}

export function getProjectById(id: number): Project | undefined {
  return getProjects().find(p => p.id === id);
}

export function upsertProject(project: Project): void {
  const projects = getProjects();
  const idx = projects.findIndex(p => p.id === project.id);
  if (idx >= 0) {
    projects[idx] = project;
  } else {
    projects.unshift(project);
  }
  saveProjects(projects);
}

export function deleteProject(id: number): void {
  const projects = getProjects().filter(p => p.id !== id);
  saveProjects(projects);
}
