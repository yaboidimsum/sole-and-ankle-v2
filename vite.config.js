import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
    react(),
  ],
  esbuild: {
    loader: 'jsx',
  },
});
