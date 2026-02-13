import tools from "./tools.js";

const slugify = str =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Extract unique categories
const categoryMap = {};

tools.forEach(tool => {
  const cat = tool.category;
  const slug = slugify(cat);

  if (!categoryMap[cat]) {
    categoryMap[cat] = {
      name: cat,
      slug,
      count: 0,
      tools: []
    };
  }

  categoryMap[cat].count += 1;
  categoryMap[cat].tools.push(tool);
});

// Convert to array
const categories = Object.values(categoryMap);

// Sort alphabetically (optional)
categories.sort((a, b) => a.name.localeCompare(b.name));

export default categories;
