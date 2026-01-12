export const GET = () => {
  return new Response(JSON.stringify({
    tools: [
      { name: "AI Writer", description: "Generates text based on prompts." },
      { name: "ImageAI", description: "Creates images from text." },
      { name: "CodeHelper", description: "Assists in generating code snippets." }
    ]
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
