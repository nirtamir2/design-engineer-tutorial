import svgUse from "@svg-use/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgUse(),
  ],
  build: {
    assetsInlineLimit: (filePath) => {
      // Do not inline SVG images as base64, because base64 is not a valid target for
      // `use[href]`. If you can think of a more narrow check (such that it
      // only targets assets relevant to `@svg-use`), do let us know!
      return !filePath.endsWith(".svg");
    },
  },
});
