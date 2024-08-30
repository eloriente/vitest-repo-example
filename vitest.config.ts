import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ["./vitest.setup.ts"],
      include: ["./src/**/*.test.*"],
      globals: true,
      environment: "jsdom",
      coverage: {
        provider: "istanbul", // o 'v8'
        reportsDirectory: "coverage",
      },
    },
  })
);
