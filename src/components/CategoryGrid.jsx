import React from 'react';

const categoryMeta = {
  writing:        { emoji: '✍️', description: 'AI writing assistants, copywriting tools & grammar checkers', bg: '#dbeafe', accent: '#2563eb' },
  image:          { emoji: '🎨', description: 'AI image generators, photo editors & visual creation tools', bg: '#f3e8ff', accent: '#9333ea' },
  coding:         { emoji: '💻', description: 'AI code completion, debugging & developer productivity tools', bg: '#dcfce7', accent: '#16a34a' },
  video:          { emoji: '🎬', description: 'AI video generation, editing & content creation platforms', bg: '#fee2e2', accent: '#dc2626' },
  audio:          { emoji: '🎵', description: 'AI voice synthesis, music generation & audio editing tools', bg: '#fef9c3', accent: '#ca8a04' },
  productivity:   { emoji: '⚡', description: 'AI task management, meeting tools & workflow automation', bg: '#ffedd5', accent: '#ea580c' },
  research:       { emoji: '🔬', description: 'AI research assistants, data analysis & knowledge tools', bg: '#ccfbf1', accent: '#0d9488' },
  design:         { emoji: '🖼️', description: 'UI/UX design tools, prototyping & visual collaboration', bg: '#fce7f3', accent: '#db2777' },
  'ai-marketing': { emoji: '📊', description: 'AI SEO tools, content optimization & marketing analytics', bg: '#e0e7ff', accent: '#4f46e5' },
};

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className="text-center text-slate-500 py-12">No categories available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(cat => {
        const meta = categoryMeta[cat.slug] || { emoji: '📦', description: '', bg: '#f1f5f9', accent: '#64748b' };
        return (
          <a
            key={cat.slug}
            href={`/category/${cat.slug}/`}
            className="group p-6 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start border border-slate-200 hover:border-blue-300 cursor-pointer"
          >
            {/* Icon box with accent color */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 duration-300"
              style={{ background: meta.bg }}
            >
              {meta.emoji}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors capitalize">
              {cat.name}
            </h3>

            {/* Description */}
            {meta.description && (
              <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-snug">
                {meta.description}
              </p>
            )}

            {/* Count + Arrow row */}
            <div className="mt-auto flex items-center justify-between w-full pt-3 border-t border-slate-100">
              <p className="text-sm text-slate-600 font-medium">
                <span className="font-bold text-slate-900">{cat.count}</span> tools
              </p>
              <span className="text-blue-600 text-lg opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
