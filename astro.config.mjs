import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";


import react from "@astrojs/react";


import db from "@astrojs/db";


export default defineConfig({
  integrations: [clerk(), react(), db()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});