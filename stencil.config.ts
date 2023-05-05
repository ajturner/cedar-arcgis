import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'cedar-arcgis',
  sourceMap: true,
  plugins: [
    sass()
  ],
  outputTargets: [
    { 
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "./**/*.html",
        },
        {
          src: "./data/*",
        },
        {
          src: "./**/*.json", dest: 'data/'
        },
        {
          src: '../node_modules/@arcgis/charts-components/dist/arcgis-charts-components/*',
          dest: 'lib/'
        }
      ]
    },
  ],
};
