// utils/loadBlogs.ts
import fs from 'fs';
import path from 'path';

// Location of blog JSON files
const BLOG_DIR = path.resolve(__dirname, '../content/blogs');

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  content: string;
}

export const loadAllBlogs = (): BlogPost[] => {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as BlogPost;
  });
};

export const loadBlogBySlug = (slug: string): BlogPost | null => {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as BlogPost;
};
