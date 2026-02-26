const tools = [
  // Writing & Chat
  { 
    name: "ChatGPT", 
    description: "Advanced conversational AI for chat, content creation, and problem-solving.", 
    category: "writing", 
    featured: true, 
    rank: 1,
    slug: "chatgpt",
    url: "https://chat.openai.com",
    longDescription: `ChatGPT is one of the most powerful and widely used AI models available today. Developed by OpenAI, it acts as a versatile language assistant that can understand context, generate high-quality text, write code, analyse information, create ideas, automate tasks, and help users work significantly faster. Thanks to its natural language abilities, ChatGPT feels more like collaborating with a human expert than using traditional software.

The tool can be applied to nearly every digital workflow — writing content, summarising research, building applications, drafting emails, improving communication, producing creative assets, and even solving complex technical problems. Its large-scale training on text, code, and real-world data allows it to reason about instructions, follow constraints, and provide contextually aware answers that maintain coherence across long conversations.

ChatGPT stands out from competing AI writing tools because it's not limited to "copywriting" or "blog text generation." It functions as a general-purpose intelligence assistant. It not only writes but also analyses, corrects, explains, recommends, strategises, and integrates deeply into business processes. Advanced plans (ChatGPT Plus, Team, and Enterprise) unlock even more capabilities, including multimodal reasoning, custom GPTs, file uploads, image understanding, and access to the latest models such as GPT-5.1.

Creators, professionals, and businesses use ChatGPT to reduce repetitive work, improve output quality, and speed up production. Writers use it to brainstorm ideas. Developers use it to debug and write code. Students use it to understand complex topics. Companies use it for customer support, automation, and internal knowledge retrieval.

Whether you need long-form content, concise answers, structured data, creative ideas, or technical guidance, ChatGPT adapts to your goals. With plugins, custom instructions, and workflow automation features, it becomes a personalised digital partner that evolves over time. Its strength comes from its ability to combine creativity, logic, and language understanding in a single interface — making it one of the most impactful AI tools available today.`,
    features: [
      "Natural language understanding and reasoning",
      "High-quality text generation for any writing style",
      "Code writing, debugging, and technical guidance",
      "Research assistance and summarisation",
      "Creative ideation for content, marketing, and storytelling",
      "Document uploads and advanced data analysis",
      "Multimodal input: understand images, screenshots, PDFs",
      "Custom GPTs for personalised workflows",
      "Integrations with automation tools (Zapier, Make, APIs)",
      "Memory system for persistent personalization"
    ],
    useCases: [
      "Content writing (blogs, articles, newsletters)",
      "Copywriting (ads, landing pages, social media posts)",
      "Coding and software development",
      "Research and fact summarisation",
      "Brainstorming and creative work",
      "Task automation",
      "Email and business communication",
      "UX writing, product descriptions, SEO optimisation"
    ],
    pricing: {
      "Free Plan": "Limited features, slower model, capped messages",
      "ChatGPT Plus": "Access to GPT-5.1, faster speeds, priority access",
      "ChatGPT Team": "Collaboration spaces + enhanced privacy",
      "ChatGPT Enterprise": "Unlimited usage, admin controls, highest accuracy",
      "API Pricing": "Pay-as-you-go for developers"
    },
    pros: [
      "Extremely versatile — not limited to writing",
      "Best-in-class reasoning and accuracy",
      "Handles long, complex tasks",
      "Customizable workflows",
      "Strong ecosystem (custom GPTs, plugins, API)"
    ],
    cons: [
      "Quality depends on prompts",
      "Some advanced features require a paid plan",
      "Occasional factual inaccuracies"
    ],
    alternatives: [
      { name: "Claude", reason: "better for long documents and advanced reasoning" },
      { name: "Jasper", reason: "specialised in marketing and brand-consistent copywriting" },
      { name: "Copy.ai", reason: "built for teams creating sales and outreach content" }
    ],
    faqItems: [
      {
        question: "Is ChatGPT good for long-form writing?",
        answer: "Yes — it can generate entire articles, outlines, or drafts with a consistent voice."
      },
      {
        question: "Does ChatGPT replace writers?",
        answer: "No. It accelerates writing, but human editing and strategy still matter."
      },
      {
        question: "Can ChatGPT analyse files?",
        answer: "Yes — PDFs, documents, images, and datasets (paid plans)."
      },
      {
        question: "Is ChatGPT safe for business use?",
        answer: "Enterprise plans provide enhanced security and data privacy."
      }
    ]
  },
  { 
    name: "Claude", 
    description: "Powerful AI assistant for analysis, coding, writing, and complex reasoning.", 
    category: "writing", 
    featured: true, 
    rank: 2,
    slug: "claude",
    url: "https://www.anthropic.com/claude",
    longDescription: `Claude is a next-generation AI assistant created by Anthropic, known for its deep reasoning abilities, long-context understanding, and safety-focused design. Unlike many AI writing tools that primarily generate text, Claude is built as a high-level cognitive assistant — capable of analysing long documents, summarising research, generating structured content, and solving complex tasks with impressive clarity.

One of Claude's biggest advantages is its ability to process extremely long inputs. Thanks to its extended context window, Claude can read full PDFs, research papers, technical documentation, or entire books and still respond with accurate, coherent summaries or insights. This makes it especially valuable for researchers, analysts, writers, students, and knowledge-intensive professionals.

Claude also produces some of the cleanest, most human-like writing on the market. Its tone is natural, logical, and consistent — ideal for editorial content, essays, reports, or professional communication. Many users choose Claude over other AI models when they need precision, structure, or complex reasoning rather than raw creativity.

The assistant is also known for its strong ethical baseline. Anthropic focuses on AI safety, transparency, and responsible model alignment. This reduces hallucinations and improves reliability when working with factual or sensitive information. When writing or reasoning, Claude often provides clear chains of thought, structured explanations, and balanced perspective.

Beyond writing, Claude is widely used for brainstorming, UX copy, legal analysis, coding assistance, data extraction, business strategy, and document clean-up. With file uploads, image understanding, and integrations through the Anthropic API, it can be embedded into applications and workflows across industries. Power users especially appreciate how well Claude maintains structure, follows constraints, and produces output that requires minimal editing.

Combined with its premium reasoning performance, long context, and reliability, Claude has quickly become one of the top AI assistants for professionals who need accuracy, clarity, and depth in their work.`,
    features: [
      "Exceptional reasoning capabilities for complex or multi-step problems",
      "Ultra-long context window — analyse large PDFs and documents",
      "Natural, high-quality writing excellent for essays, reports, and editorial content",
      "Advanced research summarisation with low hallucination rates",
      "File + image uploads",
      "Structured output (tables, lists, JSON, reports)",
      "Safety-first design with strong factual consistency",
      "API and workflow integrations",
      "Multilingual support for writing and translation"
    ],
    useCases: [
      "Research synthesis and academic writing",
      "Professional writing (reports, briefs, documentation)",
      "Reading, summarising, and analysing long PDFs",
      "Brainstorming and idea development",
      "Coding assistance",
      "Business strategy analysis",
      "Legal, technical, or scientific explanation",
      "Structured data extraction or reformatting"
    ],
    pricing: {
      "Claude Free": "Access to the basic model with limited usage",
      "Claude Pro": "Faster responses, higher limits, premium model access",
      "Claude Team": "Collaboration features + admin tools",
      "Anthropic API": "Pay-as-you-go usage for developers and apps"
    },
    pros: [
      "Best-in-class reasoning and clarity",
      "Extremely long context window",
      "Great with research and analysis",
      "Reliable and low hallucination rate",
      "Clean, human-like writing style"
    ],
    cons: [
      "Slightly less creative than some competing models",
      "Full capabilities require a paid plan",
      "Sometimes conservative in responses due to safety system"
    ],
    alternatives: [
      { name: "ChatGPT", reason: "More creative and versatile, strong multimodal abilities" },
      { name: "Perplexity", reason: "Best for research + real-time citations" },
      { name: "Jasper", reason: "Marketing-focused AI for branded content" }
    ],
    faqItems: [
      {
        question: "Is Claude better than ChatGPT?",
        answer: "Claude is often better for long documents, research, and structured reasoning, while ChatGPT excels at creativity and versatility."
      },
      {
        question: "Can Claude analyse PDFs and research papers?",
        answer: "Yes — it has one of the longest context windows available."
      },
      {
        question: "Is Claude good for writing?",
        answer: "Absolutely. It produces clean, coherent, and natural prose with minimal editing."
      },
      {
        question: "Does Claude work well for coding?",
        answer: "Yes, though not as code-specialised as tools like Copilot or Cursor."
      }
    ]
  },
  { 
    name: "Grammarly", 
    description: "AI-powered writing assistant for grammar, clarity, and tone.", 
    category: "writing", 
    featured: true, 
    rank: 3,
    slug: "grammarly",
    url: "https://www.grammarly.com",
    affiliateUrl: null, // TODO: Sign up at https://www.grammarly.com/affiliates - up to $20/premium signup
    longDescription: `Grammarly is one of the most widely used AI writing assistants in the world, trusted by millions of writers, students, professionals, and teams to improve clarity, correctness, and communication effectiveness. What started as a grammar-checking tool has evolved into a powerful AI writing platform that enhances tone, style, structure, and intent across every type of written content.

At its core, Grammarly analyses your writing in real time and provides suggestions for grammar, punctuation, spelling, and sentence structure. But the real strength of the tool comes from its advanced AI engine, which interprets context and meaning to deliver writing improvements that go far beyond surface-level corrections. It can clarify complicated sentences, strengthen your tone, rewrite weak phrasing, and help your message sound more professional or more friendly depending on your goal.

The platform integrates seamlessly with your daily communication workflow. Grammarly works across email clients like Gmail and Outlook, collaboration tools like Google Docs and Notion, messaging apps like Slack, and even social media platforms. Its browser extension and desktop app ensure that high-quality writing follows you everywhere.

Grammarly also offers a powerful premium tier that includes full-sentence rewrites, tone transformations, formality adjustments, plagiarism detection, and AI-powered content creation. With GrammarlyGO, the tool adds generative AI capabilities that help you draft emails, rewrite large paragraphs, create outlines, and speed up everyday writing tasks.

Students use Grammarly to improve academic papers, essays, and research writing. Professionals rely on it for email communication, presentations, and reports. Teams use Grammarly Business to maintain a consistent writing standard across entire organizations with style guides, brand tone settings, and team management features.

The platform's accuracy and ease of use make it a must-have productivity tool for anyone who writes daily. Whether you want error-free writing, clearer communication, or faster drafting, Grammarly provides a reliable, AI-enhanced solution tailored to modern writing demands.`,
    features: [
      "Grammar & spelling correction in real time",
      "Advanced clarity suggestions to enhance readability",
      "Tone detection — identify whether your message sounds formal, friendly, confident, etc.",
      "Sentence rewrites & tone transformations",
      "Plagiarism checker (premium)",
      "Email rewrite and drafting tools via GrammarlyGO",
      "Cross-platform integration (Chrome, Safari, desktop app, mobile app)",
      "Business features including brand tone, style guides, and team analytics",
      "Multilingual text support and translation assistance"
    ],
    useCases: [
      "Academic writing, essays, reports, research",
      "Email drafting and professional communication",
      "Business documentation and client messaging",
      "Blog posts, articles, and content marketing",
      "Resume and cover letter polishing",
      "Daily communication (Slack, social media, messaging apps)",
      "Team-wide writing consistency for companies"
    ],
    pricing: {
      "Free Plan": "Grammar and spelling corrections, tone detection",
      "Premium": "Full rewrites, advanced clarity, plagiarism detection, generative AI",
      "Business": "Admin control, brand tone, team style guides, analytics"
    },
    pros: [
      "Best grammar checker on the market",
      "Easy to use with seamless integration",
      "Excellent tone and clarity suggestions",
      "Strong rewriting and generative AI tools",
      "Works across all devices and platforms"
    ],
    cons: [
      "Full capabilities locked behind Premium",
      "Rewrites sometimes sound too polished or formal",
      "Not ideal for long-form creative writing"
    ],
    alternatives: [
      { name: "Jasper", reason: "Marketing-focused AI writing" },
      { name: "QuillBot", reason: "Strong paraphrasing tool" },
      { name: "ChatGPT", reason: "Best for creativity and ideation" }
    ],
    faqItems: [
      {
        question: "Is Grammarly good for academic writing?",
        answer: "Yes, especially with plagiarism detection and clarity improvements."
      },
      {
        question: "Is Grammarly free?",
        answer: "The free version covers basic corrections, while Premium unlocks advanced AI features."
      },
      {
        question: "Does Grammarly rewrite full sentences?",
        answer: "Yes — Premium and GrammarlyGO provide powerful rewriting capabilities."
      },
      {
        question: "Can it be used in Google Docs and Gmail?",
        answer: "Absolutely — it integrates directly through browser extensions."
      }
    ]
  },
  { 
    name: "Jasper", 
    description: "Creates marketing copy, blog posts, and AI-generated content.", 
    category: "writing", 
    featured: true, 
    rank: 4,
    slug: "jasper",
    url: "https://www.jasper.ai",
    affiliateUrl: null, // TODO: Sign up at https://www.jasper.ai/affiliates - ~30% recurring commission
    longDescription: `Jasper (formerly known as Jarvis) is one of the most powerful AI writing tools built specifically for marketing teams and content creators who need to produce large amounts of high-quality text quickly. Unlike generic AI writing assistants, Jasper focuses heavily on brand voice, conversion-oriented copy, and professional content workflows, making it a favorite among agencies, startups, and enterprise teams.

The platform uses a combination of large-language models, including its custom Jasper Engine, to generate content that is not only accurate and well-written but also aligned with your brand style. You can upload existing brand guidelines, specify tone preferences, and let Jasper maintain consistency across every type of content—from blog posts and email campaigns to ad copy, scripts, and social content.

One of Jasper's strongest capabilities is its structured workflow system. Instead of writing in a plain chat interface, Jasper offers templates and frameworks optimized for specific tasks. For example, you can generate Facebook ads, long-form SEO blog posts, landing pages, product descriptions, YouTube scripts, and more with targeted prompts. The tool guides you step-by-step, which reduces editing time and ensures content meets professional marketing standards.

Jasper also includes a built-in AI art generator, allowing you to create visuals directly inside the platform. Combined with its document editor, collaboration tools, and CMS integrations, Jasper becomes a complete content creation ecosystem for teams that publish regularly.

With Jasper Chat and recent updates to the platform, the tool now supports research, fact-checked outlines, rephrasing, rewriting, summarizing, and ideation workflows. Teams can collaborate via project folders, assign tasks, leave comments, and maintain shared knowledge bases (called "Brand Memories") that train Jasper to better represent your voice.

Overall, Jasper stands out for anyone who creates content professionally—not just writers, but entire marketing departments aiming to streamline their creative process and produce consistent, on-brand messaging across channels.`,
    features: [
      "50+ marketing templates (blogs, ads, emails, landing pages, captions, scripts)",
      "AI art generator for visuals",
      "SEO-friendly content outlines",
      "Brand Voice engine with custom tone and style training",
      "Jasper Chat for conversational content generation",
      "Rewrite, expand, condense, and repurpose content",
      "Collaboration tools for teams",
      "Integrations with CMS platforms, Google Docs, HubSpot, Webflow",
      "Fast long-form content generation"
    ],
    useCases: [
      "SEO blogs and long-form articles",
      "Facebook ads, Google Ads, and social media campaigns",
      "Email marketing sequences",
      "Landing pages and website copy",
      "YouTube scripts and content briefs",
      "Content repurposing for multi-channel distribution",
      "Branding and tone-of-voice consistency for teams",
      "Marketing agencies producing content for clients"
    ],
    pricing: {
      "Creator Plan": "For individuals and freelancers",
      "Pro/Teams Plan": "Collaboration features, growing teams",
      "Business Plan": "Brand Voice Engine, SSO, API, advanced collaboration"
    },
    pros: [
      "Extremely strong for marketing and branded content",
      "Templates make it beginner-friendly and fast",
      "Brand Voice and Memories feature = huge advantage",
      "Great for teams and professional workflows",
      "Offers both written content and AI art generation"
    ],
    cons: [
      "Higher price compared to generic AI writing tools",
      "Not ideal for deep research or technical writing",
      "Works best when you already know marketing frameworks",
      "Some outputs require human editing for accuracy"
    ],
    alternatives: [
      { name: "Copy.ai", reason: "Fast, simple, AI copy generator for marketers" },
      { name: "ChatGPT", reason: "Most flexible for creative and general writing" },
      { name: "Writesonic", reason: "Balanced marketing + SEO capabilities" }
    ],
    faqItems: [
      {
        question: "Is Jasper good for long-form content?",
        answer: "Yes — it offers SEO outlines, paragraph builders, and structured workflows."
      },
      {
        question: "How is Jasper different from ChatGPT?",
        answer: "Jasper is optimized for marketing copy, branding, and professional content workflows, while ChatGPT is more general-purpose."
      },
      {
        question: "Does Jasper support custom brand voice?",
        answer: "Yes — it can learn your tone, writing style, and messaging based on examples you provide."
      },
      {
        question: "Can Jasper generate images?",
        answer: "Yes — Jasper Art is included for creating AI visuals."
      }
    ]
  },
  { 
    name: "Copy.ai", 
    description: "AI copywriting tool for marketing content and social media posts.", 
    category: "writing", 
    featured: false, 
    rank: 5,
    slug: "copy-ai",
    url: "https://www.copy.ai",
    affiliateUrl: null, // TODO: Sign up at https://www.copy.ai/affiliates
    longDescription: `Copy.ai is one of the most widely used AI writing tools, known for its simplicity, speed, and marketing-focused templates. The platform helps individuals and teams rapidly generate digital content—from email sequences and ad copy to product descriptions, blog posts, and social media updates—without requiring deep writing or marketing skills.

Built on top of advanced language models, Copy.ai's core strength lies in workflow automation. It provides pre-built templates and structured flows designed for marketers, growth teams, and small businesses who need to launch content quickly. Whether you're crafting a Facebook ad, creating a drip email campaign, or writing website copy, Copy.ai offers templates that guide you through each step and deliver ready-to-use copy in seconds.

One of its standout features is Workflows — an automation tool that lets users combine AI tasks into custom multi-step processes. For example, you can create a workflow that takes a product description → generates a blog outline → writes the blog → summarizes it for social media → and formats it for email, all in one automated pipeline. This makes Copy.ai extremely powerful for scaling repetitive marketing tasks and content operations.

The platform also includes a multipurpose chat interface—Copy.ai Chat—that acts as an AI assistant capable of generating ideas, answering questions, researching topics, and producing polished content on demand. It's similar to ChatGPT but enhanced with marketing-focused capabilities and integrated with workflow automation.

Copy.ai is ideal for teams that rely on fast, efficient production of digital content. It reduces the time spent drafting emails, landing pages, or ads and helps users deliver consistent quality even without a dedicated copywriter. For founders and solopreneurs, the platform can act as a personal marketing assistant capable of producing content for multiple channels simultaneously.

Overall, Copy.ai excels in speed, workflow automation, and simplicity — making it a preferred tool for marketers who want to quickly generate content that converts.`,
    features: [
      "Workflows Automation — build multi-step AI pipelines for blogs, emails, ads, etc.",
      "90+ Copywriting Templates — from ads to product descriptions",
      "AI Chat Assistant — similar to ChatGPT but optimized for marketing",
      "Email Sequence Generator — fast campaign creation",
      "Long-form blog writer — outlines, expansions, and full articles",
      "Social media content creator — Instagram, LinkedIn, X, TikTok captions",
      "Project organization and collaborative editing",
      "Integrations with Zapier, HubSpot, and other marketing tools",
      "Fast content generation with minimal prompting"
    ],
    useCases: [
      "Email sequences and cold outreach campaigns",
      "Blog writing and SEO content production",
      "LinkedIn or Instagram content calendars",
      "Facebook and Google ads",
      "Startup landing pages and product announcements",
      "Product descriptions for e-commerce",
      "Social media growth campaigns",
      "Marketing automation and content pipelines"
    ],
    pricing: {
      "Free Plan": "Limited usage, great for testing",
      "Pro Plan": "Unlimited generations, workflows, chat",
      "Team/Enterprise Plan": "Collaboration features, enhanced workflows, SSO, API"
    },
    pros: [
      "Extremely user-friendly",
      "Huge library of ready-made templates",
      "Workflows automate complex multi-step tasks",
      "Fast content generation for marketing teams",
      "Great for founders who don't have a copywriter",
      "Affordable compared to other marketing-focused AI tools"
    ],
    cons: [
      "Less control over tone compared to Jasper's Brand Voice",
      "Long-form content sometimes requires more editing",
      "Not ideal for technical or research-heavy content",
      "Visual content generation is not included",
      "Advanced workflow tools may require some setup"
    ],
    alternatives: [
      { name: "Jasper AI", reason: "Best for brand voice and professional marketing teams" },
      { name: "ChatGPT", reason: "Most flexible and powerful for general writing" },
      { name: "Writesonic", reason: "Good blend of SEO + marketing templates" }
    ],
    faqItems: [
      {
        question: "Is Copy.ai good for long-form blog writing?",
        answer: "Yes — it includes blog outlines, paragraph expanders, and full long-form generators."
      },
      {
        question: "Does Copy.ai support automation?",
        answer: "Yes — the Workflows feature is one of its biggest advantages for marketers."
      },
      {
        question: "Who should use Copy.ai?",
        answer: "Marketers, founders, agencies, and content creators who need quick, consistent content."
      },
      {
        question: "Does it offer a free plan?",
        answer: "Yes — Copy.ai has a free plan ideal for testing before upgrading."
      }
    ]
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
    url: "https://www.canva.com",
    affiliateUrl: null, // TODO: Sign up at https://www.canva.com/affiliates - ~$36/new Pro signup
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
    url: "https://www.synthesia.io",
    affiliateUrl: null, // TODO: Sign up at https://www.synthesia.io/affiliates
  },
  {
    name: "Descript", 
    description: "Video and podcast editing through text-based interface.", 
    category: "video", 
    featured: false, 
    rank: 18,
    slug: "descript",
    url: "https://www.descript.com",
    affiliateUrl: null, // TODO: Sign up at https://www.descript.com/affiliates
  },
  {
    name: "Pictory", 
    description: "Converts long-form content into short videos automatically.", 
    category: "video", 
    featured: false, 
    rank: 19,
    slug: "pictory",
    url: "https://pictory.ai",
    affiliateUrl: null, // TODO: Sign up at https://pictory.ai/affiliates - ~20% recurring
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
    url: "https://murf.ai",
    affiliateUrl: null, // TODO: Sign up at https://murf.ai/affiliates
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
  },

  // AI Marketing
  { 
    name: "Writesonic", 
    description: "AI platform that generates marketing copy, ads, blog posts, and landing pages with a focus on conversions and engagement.", 
    category: "ai-marketing", 
    featured: true, 
    rank: 1,
    slug: "writesonic",
    url: "https://writesonic.com",
    affiliateUrl: null, // TODO: Sign up at https://writesonic.com/affiliates - ~30% recurring
  },
  {
    name: "Surfer SEO", 
    description: "AI-powered SEO platform that helps marketers optimise content for higher search engine rankings and analyse competitors.", 
    category: "ai-marketing", 
    featured: false, 
    rank: 2,
    slug: "surfer-seo",
    url: "https://surferseo.com",
    affiliateUrl: null, // TODO: Sign up at https://surferseo.com/affiliate - ~25% recurring
  }
];

export default tools;
