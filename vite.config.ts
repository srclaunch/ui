import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name, version } from './package.json';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      fileName: format => `index${format === 'es' ? '' : '.' + format}.js`,
      formats: ['es', 'cjs', 'umd'],
      name: 'ui',
    },
    sourcemap: true,
    outDir: './dist',
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: [
        // '@srclaunch/actions',
        // '@srclaunch/exceptions',
        // '@srclaunch/i18n',
        // '@srclaunch/icons',
        // '@srclaunch/logger',
        // '@srclaunch/react-hooks',
        // '@srclaunch/themes',
        // '@srclaunch/transform',
        // '@srclaunch/types',
        // '@srclaunch/web-application-state',
        // 'amazon-cognito-identity-js',
        // 'color-namer',
        // 'i18n-iso-countries',
        'react',
        // 'react-date-picker',
        'react-dom',
        // 'react-password-strength-bar',
        // 'react-redux',
        // 'react-router',
        // 'react-router-dom',
        'styled-components',
      ],
      output: {
        // Global vars to use in UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: [],
    include: ['@srclaunch/validation', 'react-password-strength-bar'],
  },
  define: {
    pkgJson: { name, version },
    // window: {},
  },
  esbuild: {
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment',
    // jsxInject: `import React from 'react'`,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
});

/*
export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/index.tsx'),
          fileName: 'index',
          formats: ['cjs', 'es'],
          name: 'ui',
        },
        sourcemap: true,
        outDir: './dist',
        rollupOptions: {
          // Externalize deps that shouldn't be bundled
          external: [
            '@srclaunch/web-environment',
            '@srclaunch/exceptions',
            '@srclaunch/i18n',
            '@srclaunch/logger',
            '@srclaunch/http-services',
            '@srclaunch/web-application-state',
            '@srclaunch/themes',
            '@srclaunch/types',
            '@srclaunch/ui',
            '@srclaunch/validation',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'styled-components',
            'amazon-cognito-identity-js',
 
            'isemail',
          ],
          output: {
            // Global vars to use in UMD build for externalized deps
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
      define: {
        pkgJson: { name, version },
      },
      esbuild: {
        // jsxInject: `import React from 'react'`,
      },
      plugins: [react()],
    };
  } else if (command === 'serve') {
    // command === 'build'
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/docs/index.tsx'),
          fileName: 'index',
          formats: ['es'],
          name: 'ui',
        },
        sourcemap: true,
        outDir: './dist',
        rollupOptions: {
          // Externalize deps that shouldn't be bundled
          external: [
            '@srclaunch/web-environment',
            '@srclaunch/exceptions',
            '@srclaunch/i18n',
            '@srclaunch/logger',
            '@srclaunch/http-services',
            '@srclaunch/web-application-state',
            '@srclaunch/themes',
            '@srclaunch/types',
            '@srclaunch/validation',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-dom',
            'styled-components',
          ],
          output: {
            // Global vars to use in UMD build for externalized deps
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
      define: {
        global: {},
        process: {
          env: {},
        },
      },
      optimizeDeps: {
        exclude: ['@srclaunch/logger', 'styled-components'],
        include: ['react/jsx-runtime', 'react-password-strength-bar'],
      },
      plugins: [
        react({
          babel: {
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        }),
      ],
    };
  }
});
*/
