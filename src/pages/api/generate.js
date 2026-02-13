import tools from "../../data/tools.js";

export const GET = () => {
  return new Response(
    JSON.stringify({ tools }), 
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};
