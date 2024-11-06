import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        targets: '> 0.25%, not dead',
      },
    }),
  ],
  define: { 'process.env': {} },
});
