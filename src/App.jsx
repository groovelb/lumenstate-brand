import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TimelineProvider, useTimeline } from './contexts/TimelineContext';
import { useDynamicTheme } from './theme';
import LandingPage from './pages/LandingPage';

/**
 * AppContent - Dynamic theme generation based on timeline value
 */
function AppContent() {
  const { timelineValue } = useTimeline();
  const dynamicTheme = useDynamicTheme(timelineValue);

  return (
    <ThemeProvider theme={dynamicTheme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

/**
 * App - Wrapped with TimelineProvider
 */
function App() {
  return (
    <TimelineProvider>
      <AppContent />
    </TimelineProvider>
  );
}

export default App;
