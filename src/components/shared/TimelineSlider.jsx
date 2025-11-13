import { Box, Typography, Slider } from '@mui/material';
import {
  Sun as SunIcon,
  Moon as MoonIcon,
  SunHorizon as SunHorizonIcon,
  SunDim as SunDimIcon
} from '@phosphor-icons/react';
import { useTimeline } from '../../contexts/TimelineContext';

/**
 * Timeline Slider Component
 * Controls 4 time periods (12:00pm, 4:00pm, 8:00pm, 00:00am)
 */
const TimelineSlider = () => {
  const { timelineValue, setTimelineValue } = useTimeline();

  // Icon positions for all 4 ticks
  const timeIcons = [
    { value: 0, icon: SunIcon, label: '12:00pm' },
    { value: 0.33, icon: SunDimIcon, label: '4:00pm' },
    { value: 0.67, icon: SunHorizonIcon, label: '8:00pm' },
    { value: 1, icon: MoonIcon, label: '00:00am' },
  ];

  // Determine which icon is active (closest to current timeline value)
  const getActiveIndex = () => {
    const distances = timeIcons.map(({ value }) => Math.abs(value - timelineValue));
    return distances.indexOf(Math.min(...distances));
  };

  const activeIndex = getActiveIndex();

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', md: '600px' }, // 고정 최대 너비
        mx: 'auto', // 중앙 정렬
        px: { xs: 1, sm: 0 },
      }}
    >
      {/* Icons - all ticks */}
      <Box
        sx={{
          mb: 1,
          position: 'relative',
          height: '24px',
        }}
      >
        {timeIcons.map((timeIcon, index) => {
          const { value, icon } = timeIcon;
          const IconComponent = icon;
          const isActive = index === activeIndex;
          return (
            <Box
              key={value}
              onClick={() => setTimelineValue(value)}
              sx={{
                position: 'absolute',
                left: `${value * 100}%`,
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0), opacity 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
                opacity: isActive ? 1 : 0.6,
                '&:hover': {
                  transform: 'translateX(-50%) scale(1.2)',
                  opacity: 1,
                },
              }}
            >
              <IconComponent
                weight={isActive ? 'regular' : 'thin'}
                size={24}
                color="currentColor"
              />
            </Box>
          );
        })}
      </Box>

      {/* Time Labels - all ticks */}
      <Box
        sx={{
          mb: 1,
          position: 'relative',
          height: '20px',
        }}
      >
        {timeIcons.map(({ value, label }) => (
          <Typography
            key={value}
            variant="body2"
            color="text.secondary"
            sx={{
              position: 'absolute',
              left: `${value * 100}%`,
              transform: 'translateX(-50%)',
              cursor: 'pointer',
                fontSize: { xs: '0.7rem', md: '0.75rem' },
              transition: 'opacity 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={() => setTimelineValue(value)}
          >
            {label}
          </Typography>
        ))}
      </Box>

      {/* Slider with clickable marks */}
      <Slider
        value={timelineValue}
        onChange={(_, newValue) => setTimelineValue(newValue)}
        min={0}
        max={1}
        step={null}
        marks={[
          { value: 0, label: '' },
          { value: 0.33, label: '' },
          { value: 0.67, label: '' },
          { value: 1, label: '' },
        ]}
        sx={{
          height: '1px !important', // Thinner line
          '& .MuiSlider-thumb': {
            width: '12px !important',
            height: '12px !important',
            backgroundColor: 'text.primary',
            border: 'none !important',
            boxShadow: 'none !important', // Remove elevation
            transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), left 0.3s cubic-bezier(0.618, 0.0, 0.382, 1.0)', // Golden ratio easing
            '&:hover': {
              boxShadow: 'none !important',
            },
            '&:focus, &:active': {
              boxShadow: 'none !important',
            },
            '&::before': {
              display: 'none', // Remove semi-transparent circle
            },
            '&::after': {
              display: 'none', // Remove semi-transparent circle
            },
          },
          '& .MuiSlider-track': {
            height: '0.5px !important',
            backgroundColor: 'text.primary',
            transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
          },
          '& .MuiSlider-rail': {
            height: '1px !important',
            opacity: 0.3,
            backgroundColor: 'text.primary',
            transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
          },
          '& .MuiSlider-mark': {
            width: '1px !important',
            height: { xs: '14px !important', md: '20px !important' },
            backgroundColor: 'text.primary',
            opacity: 0.5,
            transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), opacity 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0), height 0.2s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            cursor: 'pointer',
            '&:hover': {
              opacity: 1,
              height: { xs: '18px !important', md: '24px !important' },
            },
          },
          '& .MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'text.primary',
            transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
          },
        }}
      />
    </Box>
  );
};

export default TimelineSlider;
