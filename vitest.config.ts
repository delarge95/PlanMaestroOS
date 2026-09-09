import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // MuseAudits/impl/** usa node:test (no vitest): correr con `npm run test:impl`.
    include: ["src/**/*.{test,spec}.{ts,tsx}", "worker/src/**/*.{test,spec}.{ts,tsx}", "scripts/**/*.{test,spec}.ts"],
  },
});
