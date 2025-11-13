import { useState, useEffect, memo } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Sun, Moon } from '@phosphor-icons/react';
import { useTimeline } from '../../contexts/TimelineContext';
import { content } from '../../data/content';
import MinimalTimelineSlider from '../shared/MinimalTimelineSlider';

/**
 * Format Date object to time string with seconds (12:00:00pm format)
 */
const formatCurrentTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const period = hours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  if (hours === 0) {
    hours = 12; // 0:00 = 12:00am
  } else if (hours > 12) {
    hours -= 12; // 13:00 = 1:00pm
  }

  return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${period}`;
};

/**
 * Header Component
 * Fixed header with logo (left) and real-time clock (right)
 */
const Header = memo(() => {
  const { timelineValue, isSliderAboveHeader } = useTimeline();
  const [currentTime, setCurrentTime] = useState(formatCurrentTime(new Date()));
  const isDark = timelineValue >= 0.5;
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  // Show minimal slider only when TimelineSlider is above header line
  const showMinimalSlider = isSliderAboveHeader;
  const shouldShowInlineSlider = showMinimalSlider && isBelowMd;

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatCurrentTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: { xs: '64px', md: '72px' },
        backgroundColor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'text.primary',
        transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), border-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'background-color, border-color',
        contain: 'layout style paint',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: '100%',
          px: { xs: 3, sm: 4, md: 8 },
          position: 'relative',
        }}
      >
        {/* Left - Logo */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          {!shouldShowInlineSlider && (
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Tiempos Headline", serif',
                fontWeight: 700,
                letterSpacing: '-0.0em',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                transition: 'opacity 0.3s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
              }}
            >
              {content.brand.name}
            </Typography>
          )}
          {shouldShowInlineSlider && (
            <Box
              sx={{
                display: { xs: 'block', md: 'none' },
                width: '100%',
                maxWidth: { xs: '200px', sm: '260px' },
                ml: { xs: 1.5, sm: 2 },
              }}
            >
              <MinimalTimelineSlider />
            </Box>
          )}
        </Box>

        {/* Center - Minimal Timeline Slider (shown when main slider scrolled past) */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%) translate3d(0, 0, 0)',
            width: { xs: '90vw', sm: 'auto' },
            opacity: showMinimalSlider ? 1 : 0,
            visibility: showMinimalSlider ? 'visible' : 'hidden',
            pointerEvents: showMinimalSlider ? 'auto' : 'none',
            transition: 'opacity 0.3s cubic-bezier(0.618, 0.0, 0.382, 1.0), visibility 0.3s',
            willChange: 'opacity, visibility',
            contain: 'layout style paint',
            display: shouldShowInlineSlider
              ? { xs: 'none', sm: 'none', md: 'block' }
              : { xs: 'block', sm: 'block', md: 'block' },
          }}
        >
          {showMinimalSlider && <MinimalTimelineSlider />}
        </Box>

        {/* Right - Time Display with Icon */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            {isDark ? (
              <Moon size={24} weight="regular" />
            ) : (
              <Sun size={24} weight="regular" />
            )}
            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              {currentTime}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
});

Header.displayName = 'Header';

export default Header;
