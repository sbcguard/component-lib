import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import '../src/index.scss';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Light: 'light',
      Dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-bs-theme',
  }),
];

export default preview;
