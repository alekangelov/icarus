import { defineConfig } from 'vite';
import viteNxProjectPaths from '@nxext/vite/src/executors/utils/nx-project-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';
import react from '@vitejs/plugin-react';

const workspaceRoot = path.resolve(__dirname, '../../');

export default defineConfig(() => {
  return {
    plugins: [
      viteNxProjectPaths({ workspaceRoot }),
      vanillaExtractPlugin(),
      react()
    ],
    build: {
      target: 'esnext',
      lib: {
        entry: './src/index.ts',
        name: 'react',
        fileName: (format) => `react.${format}.js`
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['@icarus/core'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {}
        }
      }
    }
  };
});
