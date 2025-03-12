import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['C:/PROJECTS/Headphone_web/my-project/csrf.html'] // Exclude the csrf.html file
    }
  },
  server: {
    watch: {
      ignored: ['C:/PROJECTS/Headphone_web/my-project/csrf.html'] // Ignore csrf.html during server start
    }
  },
  publicDir: 'public', // Ensure static files are only in the public folder
});
