import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";
const path = `${Deno.cwd()}/css/index.html`;


async function handler(req) {
  const swapi = await axiod.get("https://swapi.dev/api/people/1")
  return new Response(path);
}

console.log("Listening on http://localhost:8000");
await listenAndServe(":8000", handler);
