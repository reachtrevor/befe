import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'yarn nx run kandra:dev',
        production: 'yarn nx run kandra:serve-static',
      },
      ciWebServerCommand: 'yarn nx run kandra:serve-static',
      ciBaseUrl: 'http://localhost:3000',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
