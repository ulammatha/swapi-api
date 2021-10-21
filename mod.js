// import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
// import axiod from "https://deno.land/x/axiod/mod.ts";
// const path = `${Deno.cwd()}/css/index.html`;

// async function handler(req) {
//   const swapi = await axiod.get("https://swapi.dev/api/people/1")
//   return new Response(path);
// }

// console.log("Listening on http://localhost:8000");
// await listenAndServe(":8000", handler);

import { Application } from 'https://deno.land/x/oak/mod.ts'

const port = 8080

const app = new Application()


app.use(async (context, next) => {
    const root = `${Deno.cwd()}/css/index.html`
    try {
        await context.send({ root })
    } catch {
        next()
    }
})


app.addEventListener("listen", ({ port }) => console.log(`listening on port: ${port}`) )

await app.listen({ port })
