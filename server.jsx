import { serve } from "https://deno.land/std@0.176.0/http/server.ts";
import { createServer } from "ultra/server.ts";
import App from "./src/app.jsx";

const server = await createServer({
  importMapPath: import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.jsx"),
});

function ServerApp({ context }) {
  const requestUrl = new URL(context.req.url);

  return <App />;
}

server.get("*", async (context) => {
  /**
   * Render the request
   */
  let result = await server.render(<ServerApp context={context} />);

  return context.body(result, 200, {
    "content-type": "text/html; charset=utf-8",
  });
});
if (import.meta.main) {
  serve(server.fetch);
}
export default server;
