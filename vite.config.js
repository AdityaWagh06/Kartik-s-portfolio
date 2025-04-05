import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Kartik-s-portfolio/', // ✅ Your repo name
  plugins: [react()],
});
