import type { Plugin } from 'vite';
import { existsSync } from 'fs';
import { resolve } from 'path';

export default function handleMissingAssets(): Plugin {
  return {
    name: 'handle-missing-assets',
    enforce: 'pre',
    buildStart() {
      // Suppress ENOENT errors for missing image files
      const originalError = console.error;
      console.error = (...args: any[]) => {
        const message = args[0]?.toString() || '';
        if (message.includes('ENOENT') && message.includes('designated-broker-application-form')) {
          // Suppress this specific error
          return;
        }
        originalError(...args);
      };
    },
    resolveId(id, importer) {
      // Check if this is a missing image file reference
      if (id.includes('designated-broker-application-form')) {
        const resolvedPath = importer 
          ? resolve(importer, '..', id)
          : resolve(process.cwd(), 'public', id);
        
        if (!existsSync(resolvedPath) && (id.endsWith('.svg') || id.endsWith('.png') || id.endsWith('.jpg'))) {
          // Return a virtual module to prevent errors
          return `\0virtual:${id}`;
        }
      }
      return null;
    },
    load(id) {
      // Return empty content for virtual modules (missing files)
      if (id.startsWith('\0virtual:') && id.includes('designated-broker-application-form')) {
        return '';
      }
      return null;
    },
  };
}

