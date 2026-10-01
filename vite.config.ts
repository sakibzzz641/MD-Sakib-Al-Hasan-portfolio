import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function syncAssetFolderPlugin(): Plugin {
  const syncAssets = () => {
    try {
      const rootAssetDir = path.resolve(import.meta.dirname, 'asset');
      const publicAssetDir = path.resolve(import.meta.dirname, 'public/asset');
      if (fs.existsSync(rootAssetDir)) {
        if (!fs.existsSync(publicAssetDir)) {
          fs.mkdirSync(publicAssetDir, { recursive: true });
        }
        const files = fs.readdirSync(rootAssetDir);
        for (const file of files) {
          const srcFile = path.join(rootAssetDir, file);
          const destFile = path.join(publicAssetDir, file);
          if (fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
          }
        }
      }
    } catch (e) {
      console.warn('Could not sync /asset folder:', e);
    }
  };

  return {
    name: 'sync-root-asset-folder',
    buildStart() {
      syncAssets();
    },
    configureServer() {
      syncAssets();
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [syncAssetFolderPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
