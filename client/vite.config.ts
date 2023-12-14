import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import rollupReplace from '@rollup/plugin-replace'
import { dependencies } from "./package.json";

//const env = loadEnv('all', process.cwd(), '')
const excludeCodeSplitting = ["react", "react-dom", "react-router-dom"];

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (excludeCodeSplitting.includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'process.env': env,
  // },
  plugins: [
    // rollupReplace({
    //   preventAssignment: true,
    //   values: {
    //     'process.env.GRPC_NODE_VERBOSITY': JSON.stringify('DEBUG'),
    //     'process.env.GRPC_VERBOSITY': JSON.stringify('DEBUG'),
    //   },
    // }),
    react(),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  server: {
    host: "localhost",
    port: 9999,
  },
});
