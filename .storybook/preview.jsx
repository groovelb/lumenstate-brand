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

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: { source: { state: 'shown' } },
    viewport: { defaultViewport: 'responsive' },
    a11y: {
      test: 'todo',
    },
    options: {
      showRoots: true,
      storySort: {
        order: ['00. Overview', '01. Style', '02. Components', '03. Templates', '04. Data'],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#12100E' },
      ],
    },
  },

  decorators: [
    (Story) => (
      <TimelineProvider>
        <DynamicThemeDecorator>
          <Story />
        </DynamicThemeDecorator>
      </TimelineProvider>
    ),
  ],
};

export default preview;
