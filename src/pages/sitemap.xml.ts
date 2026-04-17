import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import tools from '../data/tools.js';
import categories from '../data/categories.js';

const SITE_URL = 'https://www.toolaroo.net';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

interface SitemapEntry {
  loc: string;
  changefreq: string;
  priority: number;
  lastmod: string;
}

export const GET: APIRoute = async () => {
  const sitemapEntries: SitemapEntry[] = [];
  const today = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about/', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact/', priority: 0.6, changefreq: 'monthly' },
    { url: '/tools/', priority: 0.8, changefreq: 'weekly' },
    { url: '/category/', priority: 0.9, changefreq: 'weekly' },
    { url: '/blog/', priority: 0.8, changefreq: 'weekly' },
  ];

  staticPages.forEach(page => {
    sitemapEntries.push({
      loc: `${SITE_URL}${page.url}`,
      changefreq: page.changefreq,
      priority: page.priority,
      lastmod: today,
    });
  });

  // Category pages
  categories.forEach(category => {
    sitemapEntries.push({
      loc: `${SITE_URL}/category/${category.slug}/`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: today,
    });
  });

  // Tool detail pages
  tools.forEach(tool => {
    sitemapEntries.push({
      loc: `${SITE_URL}/tool/${tool.slug}/`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: today,
    });
  });

  // Blog posts
  const blogPosts = await getCollection('blog');
  blogPosts.forEach(post => {
    const slug = post.id.replace(/\.md$/, '');
    const postDate = post.data.date || today;
    sitemapEntries.push({
      loc: `${SITE_URL}/blog/${slug}/`,
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: postDate,
    });
  });

  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries
    .map(
      entry => `
  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
