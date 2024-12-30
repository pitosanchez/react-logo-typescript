import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const base =
  process.env.NODE_ENV === "production" ? "/react-logo-typescript/" : "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
});
