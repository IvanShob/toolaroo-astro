export const GET = () => {
  return new Response(JSON.stringify({
    tools: [
      // Writing & Chat (4 featured od 5 ukupno)
      { 
        name: "ChatGPT", 
        description: "Advanced conversational AI for chat, content creation, and problem-solving.", 
        category: "writing", 
        featured: true, 
        rank: 1 
      },
      { 
        name: "Claude", 
        description: "Powerful AI assistant for analysis, coding, writing, and complex reasoning.", 
        category: "writing", 
        featured: true, 
        rank: 2 
      },
      { 
        name: "Grammarly", 
        description: "AI-powered writing assistant for grammar, clarity, and tone.", 
        category: "writing", 
        featured: true, 
        rank: 3 
      },
      { 
        name: "Jasper", 
        description: "Creates marketing copy, blog posts, and AI-generated content.", 
        category: "writing", 
        featured: true, 
        rank: 4 
      },
      { 
        name: "Copy.ai", 
        description: "AI copywriting tool for marketing content and social media posts.", 
        category: "writing", 
        featured: false, 
        rank: 5 
      },
      
      // Image Generation (3 featured od 5 ukupno)
      { 
        name: "DALL·E", 
        description: "Generates images from textual prompts using AI.", 
        category: "image", 
        featured: true, 
        rank: 6 
      },
      { 
        name: "MidJourney", 
        description: "AI art generator to create stunning visuals from text.", 
        category: "image", 
        featured: true, 
        rank: 7 
      },
      { 
        name: "Stable Diffusion", 
        description: "Open-source image generation model for creating art and designs.", 
        category: "image", 
        featured: true, 
        rank: 8 
      },
      { 
        name: "Canva AI", 
        description: "Design tool with AI features for images, graphics, and presentations.", 
        category: "image", 
        featured: false, 
        rank: 9 
      },
      { 
        name: "Adobe Firefly", 
        description: "AI-powered creative tools integrated into Adobe suite.", 
        category: "image", 
        featured: false, 
        rank: 10 
      },
      
      // Coding (2 featured od 5 ukupno)
      { 
        name: "GitHub Copilot", 
        description: "AI code assistant to help write and complete code faster.", 
        category: "coding", 
        featured: true, 
        rank: 11 
      },
      { 
        name: "Cursor", 
        description: "AI-first code editor with powerful coding assistance.", 
        category: "coding", 
        featured: true, 
        rank: 12 
      },
      { 
        name: "Replit Ghostwriter", 
        description: "AI coding assistant integrated into Replit IDE.", 
        category: "coding", 
        featured: false, 
        rank: 13 
      },
      { 
        name: "Codeium", 
        description: "Free AI-powered code completion and chat assistant.", 
        category: "coding", 
        featured: false, 
        rank: 14 
      },
      { 
        name: "Tabnine", 
        description: "AI code completion tool supporting multiple programming languages.", 
        category: "coding", 
        featured: false, 
        rank: 15 
      },
      
      // Video (2 featured od 4 ukupno)
      { 
        name: "Runway", 
        description: "Video editing and creative tools powered by AI.", 
        category: "video", 
        featured: true, 
        rank: 16 
      },
      { 
        name: "Synthesia", 
        description: "Creates AI-generated video content from text scripts.", 
        category: "video", 
        featured: true, 
        rank: 17 
      },
      { 
        name: "Descript", 
        description: "Video and podcast editing through text-based interface.", 
        category: "video", 
        featured: false, 
        rank: 18 
      },
      { 
        name: "Pictory", 
        description: "Converts long-form content into short videos automatically.", 
        category: "video", 
        featured: false, 
        rank: 19 
      },
      
      // Audio (1 featured od 3 ukupno)
      { 
        name: "ElevenLabs", 
        description: "AI voice generation and text-to-speech with realistic voices.", 
        category: "audio", 
        featured: true, 
        rank: 20 
      },
      { 
        name: "Murf.ai", 
        description: "Text-to-speech software for voiceovers and narration.", 
        category: "audio", 
        featured: false, 
        rank: 21 
      },
      { 
        name: "Soundraw", 
        description: "AI music generator for creating royalty-free tracks.", 
        category: "audio", 
        featured: false, 
        rank: 22 
      },
      
      // Productivity (0 featured od 4 ukupno)
      { 
        name: "Notion AI", 
        description: "Boost productivity by generating notes, summaries, and ideas.", 
        category: "productivity", 
        featured: false, 
        rank: 23 
      },
      { 
        name: "Tome", 
        description: "AI-powered storytelling and presentation generator.", 
        category: "productivity", 
        featured: false, 
        rank: 24 
      },
      { 
        name: "Otter.ai", 
        description: "AI meeting assistant for transcription and note-taking.", 
        category: "productivity", 
        featured: false, 
        rank: 25 
      },
      { 
        name: "Mem", 
        description: "AI-powered note-taking with automatic organization and search.", 
        category: "productivity", 
        featured: false, 
        rank: 26 
      },
      
      // Research (0 featured od 3 ukupno)
      { 
        name: "Perplexity", 
        description: "AI-powered search engine with cited sources and answers.", 
        category: "research", 
        featured: false, 
        rank: 27 
      },
      { 
        name: "Consensus", 
        description: "AI search engine for finding and summarizing research papers.", 
        category: "research", 
        featured: false, 
        rank: 28 
      },
      { 
        name: "Elicit", 
        description: "AI research assistant for analyzing academic papers.", 
        category: "research", 
        featured: false, 
        rank: 29 
      },
      
      // Design (0 featured od 2 ukupno)
      { 
        name: "Uizard", 
        description: "Turn sketches and wireframes into UI designs with AI.", 
        category: "design", 
        featured: false, 
        rank: 30 
      },
      { 
        name: "Spline AI", 
        description: "Generate 3D models and scenes using text prompts.", 
        category: "design", 
        featured: false, 
        rank: 31 
      }
    ]
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};