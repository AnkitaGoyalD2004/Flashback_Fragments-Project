// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  // Your Vite configuration settings here
  // For example:
  plugins: [],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
