import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { colors } from './colors';
import { typography } from './typography';
import { interpolateColor } from '../utils/colorInterpolation';

/**
 * Custom hook for dynamic theme generation based on timeline value
 * @param {number} timelineValue - Timeline value (0-1)
 * @returns {Object} MUI theme object
 */
export const useDynamicTheme = (timelineValue) => {
  return useMemo(() => {
    // UI uses binary light/dark mode based on 0.5 threshold
    const isDark = timelineValue >= 0.5;

    // Background only: 4-stage gradient (0 → 0.33 → 0.67 → 1.0)
    let bgColor;
    if (timelineValue <= 0.33) {
      // 12:00pm → 4:00pm
      const t = timelineValue / 0.33;
      bgColor = interpolateColor(colors.bg1, colors.bg2, t);
    } else if (timelineValue <= 0.67) {
      // 4:00pm → 8:00pm
      const t = (timelineValue - 0.33) / 0.34;
      bgColor = interpolateColor(colors.bg2, colors.bg3, t);
    } else {
      // 8:00pm → 00:00am
      const t = (timelineValue - 0.67) / 0.33;
      bgColor = interpolateColor(colors.bg3, colors.bg4, t);
    }

    // Card background - binary light/dark only
    const paperColor = isDark ? colors.warmBlack : colors.wallTintWhite;

    // Primary text color - binary light/dark only
    const textPrimary = isDark ? colors.white3800K : colors.warmBlack;

    // Secondary text color - binary light/dark only
    const textSecondaryBase = isDark ? colors.white3800K : colors.warmBlack;

    return createTheme({
      shape: {
        borderRadius: 0, // Remove radius for all components
      },
      palette: {
        mode: timelineValue > 0.5 ? 'dark' : 'light',
        primary: {
          main: '#121212',
        },
        background: {
          default: bgColor,
          paper: paperColor,
        },
        text: {
          primary: textPrimary,
          secondary: textSecondaryBase,
        },
        divider: textSecondaryBase,
      },
      typography: {
        fontFamily: typography.fontFamily.body,
        // Display/Heading variants
        h1: typography.h1,
        h2: typography.h2,
        h3: typography.h3,
        h4: typography.h4,
        h5: typography.h5,
        h6: typography.h6,
        // Subtitle variants
        subtitle1: typography.subtitle1,
        subtitle2: typography.subtitle2,
        // Body text variants
        body1: typography.body1,
        body2: typography.body2,
        // Utility variants
        button: typography.button,
        caption: typography.caption,
        overline: typography.overline,
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Tiempos Headline';
              font-style: normal;
              font-display: swap;
              font-weight: 100 900;
              src: url('/fonts/test-tiempos-headline-vf-roman.woff2') format('woff2-variations');
            }

            body {
              transition: background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0);
            }
          `,
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 0,
              transition: 'all 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
            contained: {
              backgroundColor: textPrimary,
              color: isDark ? colors.warmBlack : colors.white3800K,
              '&:hover': {
                backgroundColor: textPrimary,
                opacity: 0.85,
              },
            },
            outlined: {
              borderColor: textPrimary,
              color: textPrimary,
              '&:hover': {
                borderColor: textPrimary,
                backgroundColor: isDark
                  ? 'rgba(242, 233, 218, 0.08)'
                  : 'rgba(18, 16, 14, 0.08)',
              },
            },
          },
        },
        MuiCard: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              borderRadius: 0,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
          },
        },
        MuiPaper: {
          defaultProps: {
            elevation: 0,
          },
          styleOverrides: {
            root: {
              borderRadius: 0,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          },
        },
        MuiSlider: {
          styleOverrides: {
            root: {
              color: textPrimary, // Binary light/dark text color
              height: 6,
              transition: 'color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor: textPrimary,
              border: `2px solid ${textPrimary}`,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), border-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
              '&:hover': {
                boxShadow: isDark
                  ? '0 0 0 8px rgba(242, 233, 218, 0.16)'
                  : '0 0 0 8px rgba(18, 16, 14, 0.16)',
              },
            },
            track: {
              height: 6,
              backgroundColor: textPrimary,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
            rail: {
              height: 6,
              opacity: 0.3,
              backgroundColor: textPrimary,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
            mark: {
              width: 2,
              height: 12,
              backgroundColor: textPrimary,
              opacity: 0.5,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
            markActive: {
              opacity: 1,
              backgroundColor: textPrimary,
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              transition: 'color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            },
          },
        },
      },
      transitions: {
        duration: {
          standard: 1000, // 1 second transition
        },
      },
    });
  }, [timelineValue]);
};
