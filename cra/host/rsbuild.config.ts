import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
//@ts-ignore
import mfConfig from './modulefederation.config';
import rspack, { EnvironmentPlugin } from '@rspack/core';
export default defineConfig({
  server: {
    port: 3000,
  },
  performance: {
    chunkSplit: {
      override: {
        chunks: 'async',
        minSize: 30000,
      },
    },
  },
  tools: {
    rspack: {
      output: {
        publicPath: 'auto',
      },

      plugins: [
        new rspack.container.ModuleFederationPlugin(mfConfig),
        new EnvironmentPlugin([
          'REACT_APP_UPLOADCARE_PUBLIC_KEY',
          'REACT_APP_UPLOADCARE_PRIVATE_KEY',
        ]),
      ],
    },
  },
  plugins: [pluginReact()],
});
