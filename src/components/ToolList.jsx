import { useState, useEffect } from 'react';

export default function ToolList() {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/generate')
      .then(res => res.json())
      .then(data => setTools(data.tools))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading tools...</p>;
  if (error) return <p className="text-center text-red-500">Failed to load tools.</p>;

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search AI tools..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-8 shadow-sm"
      />

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(tool => (
          <div key={tool.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-700">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
