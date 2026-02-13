const tools = [
  // Writing & Chat
  { 
    name: "ChatGPT", 
    description: "Advanced conversational AI for chat, content creation, and problem-solving.", 
    category: "writing", 
    featured: true, 
    rank: 1,
    slug: "chatgpt",
    url: "https://chat.openai.com"
  },
  { 
    name: "Claude", 
    description: "Powerful AI assistant for analysis, coding, writing, and complex reasoning.", 
    category: "writing", 
    featured: true, 
    rank: 2,
    slug: "claude",
    url: "https://www.anthropic.com/claude"
  },
  { 
    name: "Grammarly", 
    description: "AI-powered writing assistant for grammar, clarity, and tone.", 
    category: "writing", 
    featured: true, 
    rank: 3,
    slug: "grammarly",
    url: "https://www.grammarly.com"
  },
  { 
    name: "Jasper", 
    description: "Creates marketing copy, blog posts, and AI-generated content.", 
    category: "writing", 
    featured: true, 
    rank: 4,
    slug: "jasper",
    url: "https://www.jasper.ai"
  },
  { 
    name: "Copy.ai", 
    description: "AI copywriting tool for marketing content and social media posts.", 
    category: "writing", 
    featured: false, 
    rank: 5,
    slug: "copy-ai",
    url: "https://www.copy.ai"
  },

  // Image Generation
  { 
    name: "DALL·E", 
    description: "Generates images from textual prompts using AI.", 
    category: "image", 
    featured: true, 
    rank: 6,
    slug: "dalle",
    url: "https://openai.com/dall-e"
  },
  { 
    name: "MidJourney", 
    description: "AI art generator to create stunning visuals from text.", 
    category: "image", 
    featured: true, 
    rank: 7,
    slug: "midjourney",
    url: "https://www.midjourney.com"
  },
  { 
    name: "Stable Diffusion", 
    description: "Open-source image generation model for creating art and designs.", 
    category: "image", 
    featured: true, 
    rank: 8,
    slug: "stable-diffusion",
    url: "https://stability.ai"
  },
  { 
    name: "Canva AI", 
    description: "Design tool with AI features for images, graphics, and presentations.", 
    category: "image", 
    featured: false, 
    rank: 9,
    slug: "canva-ai",
    url: "https://www.canva.com"
  },
  { 
    name: "Adobe Firefly", 
    description: "AI-powered creative tools integrated into Adobe suite.", 
    category: "image", 
    featured: false, 
    rank: 10,
    slug: "adobe-firefly",
    url: "https://www.adobe.com/sensei.html"
  },

  // Coding
  { 
    name: "GitHub Copilot", 
    description: "AI code assistant to help write and complete code faster.", 
    category: "coding", 
    featured: true, 
    rank: 11,
    slug: "github-copilot",
    url: "https://github.com/features/copilot"
  },
  { 
    name: "Cursor", 
    description: "AI-first code editor with powerful coding assistance.", 
    category: "coding", 
    featured: true, 
    rank: 12,
    slug: "cursor",
    url: "https://www.cursor.so"
  },
  { 
    name: "Replit Ghostwriter", 
    description: "AI coding assistant integrated into Replit IDE.", 
    category: "coding", 
    featured: false, 
    rank: 13,
    slug: "replit-ghostwriter",
    url: "https://replit.com/site/ghostwriter"
  },
  { 
    name: "Codeium", 
    description: "Free AI-powered code completion and chat assistant.", 
    category: "coding", 
    featured: false, 
    rank: 14,
    slug: "codeium",
    url: "https://www.codeium.com"
  },
  { 
    name: "Tabnine", 
    description: "AI code completion tool supporting multiple programming languages.", 
    category: "coding", 
    featured: false, 
    rank: 15,
    slug: "tabnine",
    url: "https://www.tabnine.com"
  },

  // Video
  { 
    name: "Runway", 
    description: "Video editing and creative tools powered by AI.", 
    category: "video", 
    featured: true, 
    rank: 16,
    slug: "runway",
    url: "https://runwayml.com"
  },
  { 
    name: "Synthesia", 
    description: "Creates AI-generated video content from text scripts.", 
    category: "video", 
    featured: true, 
    rank: 17,
    slug: "synthesia",
    url: "https://www.synthesia.io"
  },
  { 
    name: "Descript", 
    description: "Video and podcast editing through text-based interface.", 
    category: "video", 
    featured: false, 
    rank: 18,
    slug: "descript",
    url: "https://www.descript.com"
  },
  { 
    name: "Pictory", 
    description: "Converts long-form content into short videos automatically.", 
    category: "video", 
    featured: false, 
    rank: 19,
    slug: "pictory",
    url: "https://pictory.ai"
  },

  // Audio
  { 
    name: "ElevenLabs", 
    description: "AI voice generation and text-to-speech with realistic voices.", 
    category: "audio", 
    featured: true, 
    rank: 20,
    slug: "elevenlabs",
    url: "https://elevenlabs.io"
  },
  { 
    name: "Murf.ai", 
    description: "Text-to-speech software for voiceovers and narration.", 
    category: "audio", 
    featured: false, 
    rank: 21,
    slug: "murf-ai",
    url: "https://murf.ai"
  },
  { 
    name: "Soundraw", 
    description: "AI music generator for creating royalty-free tracks.", 
    category: "audio", 
    featured: false, 
    rank: 22,
    slug: "soundraw",
    url: "https://soundraw.io"
  },

  // Productivity
  { 
    name: "Notion AI", 
    description: "Boost productivity by generating notes, summaries, and ideas.", 
    category: "productivity", 
    featured: false, 
    rank: 23,
    slug: "notion-ai",
    url: "https://www.notion.so/product/ai"
  },
  { 
    name: "Tome", 
    description: "AI-powered storytelling and presentation generator.", 
    category: "productivity", 
    featured: false, 
    rank: 24,
    slug: "tome",
    url: "https://tome.app"
  },
  { 
    name: "Otter.ai", 
    description: "AI meeting assistant for transcription and note-taking.", 
    category: "productivity", 
    featured: false, 
    rank: 25,
    slug: "otter-ai",
    url: "https://otter.ai"
  },
  { 
    name: "Mem", 
    description: "AI-powered note-taking with automatic organization and search.", 
    category: "productivity", 
    featured: false, 
    rank: 26,
    slug: "mem",
    url: "https://getmem.ai"
  },

  // Research
  { 
    name: "Perplexity", 
    description: "AI-powered search engine with cited sources and answers.", 
    category: "research", 
    featured: false, 
    rank: 27,
    slug: "perplexity",
    url: "https://www.perplexity.ai"
  },
  { 
    name: "Consensus", 
    description: "AI search engine for finding and summarizing research papers.", 
    category: "research", 
    featured: false, 
    rank: 28,
    slug: "consensus",
    url: "https://www.consensus.app"
  },
  { 
    name: "Elicit", 
    description: "AI research assistant for analyzing academic papers.", 
    category: "research", 
    featured: false, 
    rank: 29,
    slug: "elicit",
    url: "https://elicit.org"
  },

  // Design
  { 
    name: "Uizard", 
    description: "Turn sketches and wireframes into UI designs with AI.", 
    category: "design", 
    featured: false, 
    rank: 30,
    slug: "uizard",
    url: "https://uizard.io"
  },
  { 
    name: "Spline AI", 
    description: "Generate 3D models and scenes using text prompts.", 
    category: "design", 
    featured: false, 
    rank: 31, 
    slug: "spline-ai",
    url: "https://spline.design"
  }
];

export default tools;
