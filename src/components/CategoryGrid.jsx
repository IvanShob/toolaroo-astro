import React from 'react';

const categoryEmojis = {
  writing: '✍️',
  image: '🎨',
  coding: '💻',
  video: '🎬',
  audio: '🎵',
  productivity: '⚡',
  research: '🔬',
  design: '🖼️',
};

export default function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className="text-center text-slate-500 py-12">No categories available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map(cat => (
        <a
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className="group p-8 bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start border border-slate-200 hover:border-blue-300 cursor-pointer"
        >
          {/* Icon */}
          <div className="text-5xl mb-4 transition-transform group-hover:scale-110 duration-300">
            {categoryEmojis[cat.slug] || '📦'}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors capitalize">
            {cat.name}
          </h3>

          {/* Count */}
          <p className="text-sm text-slate-600 font-medium">
            <span className="text-lg font-bold text-slate-900">{cat.count}</span> tools
          </p>

          {/* Arrow */}
          <div className="mt-4 text-blue-600 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </div>
        </a>
      ))}
    </div>
  );
}
