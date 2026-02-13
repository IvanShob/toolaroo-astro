import React, { useState, useEffect } from 'react';
import tools_data from '../data/tools.js';

// Category emoji mapping
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

export default function ToolList({ category, featuredOnly = false }) {
  const [tools, setTools] = useState(tools_data);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Data is already loaded, no need for useEffect

  if (loading)
    return <p className="text-center py-12 text-slate-500">Loading tools...</p>;
  if (error)
    return <p className="text-center py-12 text-red-500">Failed to load tools.</p>;

  let filtered = tools.filter(tool => {
    const matchQuery = tool.name.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category ? tool.category === category : true;
    const matchFeatured = featuredOnly ? tool.featured : true;
    return matchQuery && matchCategory && matchFeatured;
  });

  // Home page: limit top 12
  if (featuredOnly) filtered = filtered.slice(0, 12);

  // Sort by rank
  filtered.sort((a, b) => (a.rank || 999) - (b.rank || 999));

  return (
    <div className="w-full space-y-8">
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="🔍 Search AI tools..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full px-6 py-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-colors bg-white text-slate-900 placeholder-slate-500"
        />
      </div>

      {/* Results Count */}
      {filtered.length > 0 && (
        <div className="text-sm text-slate-600 px-2">
          Found <span className="font-semibold text-slate-900">{filtered.length}</span> tool{filtered.length !== 1 ? 's' : ''}
        </div>
      )}

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(tool => (
          <div
            key={tool.slug}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden border border-slate-200 hover:border-blue-300"
          >
            {/* Header with Logo and Category Badge */}
            <div className="flex items-start justify-between p-6 pb-4 gap-3">
              <div className="flex items-start gap-3 flex-1">
                {/* Tool Logo */}
                <img
                  src={`https://www.google.com/s2/favicons?sz=32&domain=${tool.url}`}
                  alt={`${tool.name} logo`}
                  className="w-8 h-8 rounded flex-shrink-0 mt-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex-1 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
              </div>
              {tool.featured && (
                <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Category & Badge */}
            <div className="px-6 pb-3">
              <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg capitalize">
                {categoryEmojis[tool.category] || '📦'} {tool.category}
              </span>
            </div>

            {/* Description */}
            <p className="px-6 pb-6 text-slate-600 text-sm font-normal line-clamp-2 flex-grow">
              {tool.description}
            </p>

            {/* Footer with Actions */}
            <div className="px-6 py-4 pt-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-2">
              <a
                href={`/tool/${tool.slug}`}
                className="flex-1 text-center text-sm font-semibold px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 border border-blue-200 hover:border-blue-300 transition-colors"
              >
                Learn More
              </a>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                Open Tool →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 mb-2">No tools found matching your search.</p>
          <button
            onClick={() => setQuery('')}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
