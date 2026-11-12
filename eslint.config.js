import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
          // PPV pages also export their event data, collected in src/PPVPages/ppvPages.ts (PPV planner,
          // recent matches, previous / next PPV buttons).
          allowExportNames: [
            'ArmageddonEvents', 'BraggingRightsEvents', 'BacklashEvents', 'CIPEvents', 'CyberSundayEvents', 'ECEvents',
            'EREvents', 'HIACEvents', 'MITBEvents', 'NOCEvents', 'NoMercyEvents', 'NoWayOutEvents', 'NYREvents',
            'ONSEvent', 'OTLEvents', 'RoyalRumbleEvents', 'SummerSlamEvents', 'SurvivorSeriesEvents', 'TLCEvents',
            'WMEvents',
          ],
        },
      ],
    },
  },
)
