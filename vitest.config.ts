// vitest.config.ts - project root - Vitest configuration.
import { defineConfig } from "vitest/config";

process.env.SKIP_POSTCSS = "1";

export default defineConfig({
  test: {
    environment: "node",
  },
});
