import { connectNodeAdapter } from "@connectrpc/connect-node";
import { cors as connectCors } from "@connectrpc/connect";
import cors from "cors";
import routes from "./connect";
import http from "node:http";

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const PORT = parseInt(process.argv[2] ?? 3000);
  build().listen({ host: "localhost", port: PORT });
  console.log(`The app is running on http://localhost:${PORT}`);
  console.log("Run `npm run client` for a terminal client.");
}

export function build() {
  // The adapter turns our RPC routes into as Node.js request handler.
  const handler = connectNodeAdapter({
    routes,
  });

  // CORS example using Express middleware with vanilla HTTP server
  // The @connectrpc/connect package exports convenience variables for
  // configuring a CORS setup.
  const corsHandler = cors({
    // Reflects the request origin. This should only be used for development.
    // Production should explicitly specify an origin
    origin: true,
    methods: [...connectCors.allowedMethods],
    allowedHeaders: [...connectCors.allowedHeaders],
    exposedHeaders: [...connectCors.exposedHeaders],
  });

  // If the CORS middleware is not needed, simply start the server with the
  // handler only using http.createServer(handler)
  return http.createServer((req, res) => {
    corsHandler(req, res, () => handler(req, res));
  });
}
