import { useMemo, memo } from 'react';
import { Box } from '@mui/material';
import {
  Sun as SunIcon,
  Moon as MoonIcon,
  SunHorizon as SunHorizonIcon,
  SunDim as SunDimIcon
} from '@phosphor-icons/react';
import { useTimeline } from '../../contexts/TimelineContext';

// Icon positions for all 4 ticks (outside component for stability)
const timeIcons = [
  { value: 0, icon: SunIcon },
  { value: 0.33, icon: SunDimIcon },
  { value: 0.67, icon: SunHorizonIcon },
  { value: 1, icon: MoonIcon },
];

/**
 * Minimal Timeline Slider Component
 * Shows only icons at tick positions (no labels, no slider line)
 * Used in Header when main slider is out of view
 */
const MinimalTimelineSlider = memo(() => {
  const { timelineValue, setTimelineValue } = useTimeline();

  // Determine which icon is active (closest to current timeline value)
  // Memoized to prevent recalculation on every render
  const activeIndex = useMemo(() => {
    const distances = timeIcons.map(({ value }) => Math.abs(value - timelineValue));
    return distances.indexOf(Math.min(...distances));
  }, [timelineValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      {timeIcons.map(({ value, icon: Icon }, index) => {
        const isActive = index === activeIndex;
        return (
          <Box
            key={value}
            onClick={() => setTimelineValue(value)}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0), opacity 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
              opacity: isActive ? 1 : 0.6,
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform, opacity',
              '&:hover': {
                transform: 'scale(1.2) translate3d(0, 0, 0)',
                opacity: 1,
              },
            }}
          >
            <Icon
              weight={isActive ? "regular" : "thin"}
              size={20}
              color="currentColor"
            />
          </Box>
        );
      })}
    </Box>
  );
});

MinimalTimelineSlider.displayName = 'MinimalTimelineSlider';

export default MinimalTimelineSlider;
