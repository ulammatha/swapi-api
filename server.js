import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

async function handler(req: Request): Response {
  const swapi = await axiod.get("https://swapi.dev/api/people/1")
  console.log('<swapi', swapi.data)
  return new Response(JSON.stringify(swapi.data));
}

console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);
