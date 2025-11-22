// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// Assuming you have 'react' plugin imported

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // 💥 ADD THIS SECTION 💥
  resolve: {
    // This forces Vite to use a single, de-duplicated version of these packages
    dedupe: ['react', 'react-dom'],
  },

  // Optional: You can also use this for a more aggressive fix (less common now)
  // optimizeDeps: {
  //   exclude: ['react-router-dom'],
  // },
  // 💥 END OF SECTION 💥

  server: {
    port: 5173, // or whatever port you are using
  },
});