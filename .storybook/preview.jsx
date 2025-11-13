import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { TimelineProvider, useTimeline } from '../src/contexts/TimelineContext';
import { useDynamicTheme } from '../src/theme';

function DynamicThemeDecorator({ children }) {
  const { timelineValue } = useTimeline();
  const theme = useDynamicTheme(timelineValue);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  docs: { source: { state: 'shown' } },
  viewport: { defaultViewport: 'responsive' },
  options: {
    showRoots: true,
    storySort: {
      method: 'alphabetical',
      order: ['00. Overview', '1. Style', '2. Component', '3. Template', '4. Data', '*'],
      locales: 'en-US',
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#12100E' },
    ],
  },
};

export const decorators = [
  (Story) => (
    <TimelineProvider>
      <DynamicThemeDecorator>
        <Story />
      </DynamicThemeDecorator>
    </TimelineProvider>
  ),
];

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;

