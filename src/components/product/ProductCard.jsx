import { useMemo } from 'react';
import { Card, Typography, Chip, Box, Stack } from '@mui/material';
import StateLabel from '../shared/StateLabel';

/**
 * Product Card Component
 * @param {Object} product - Product data (id, title, type, lux, kelvin, images, video)
 * @param {number} timelineValue - Timeline value (0-1: dawn→day→evening→night)
 * @param {number} index - Card index (for staggered transition)
 */
const ProductCard = ({ product, timelineValue = 0, index = 0 }) => {
  const { title, type, lux, kelvin, images } = product;

  // Calculate dark image (images[1]) opacity based on timelineValue
  // 0 (dawn) → opacity: 0 (bright image only)
  // 1 (night) → opacity: 1 (dark image fully visible)
  const darkImageOpacity = timelineValue;

  // Random delay within 0-300ms range, stable per card
  const randomDelay = useMemo(() => Math.random() * 300, []);

  // Staggered transition: add random offset (0-300ms)
  const transitionDelay = `${randomDelay}ms`;

  // Binary light/dark mode based on 0.5 threshold
  const isDark = timelineValue >= 0.5;

  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: 'transparent',
      }}
    >
      <Stack spacing={2}>
        {/* Thumbnail Area */}
        <Box
          sx={{
            width: '100%',
            paddingTop: { xs: '120%', lg: '125%' }, // 4:5 aspect ratio
            position: 'relative',
            overflow: 'hidden',
            // borderRadius: '0.75rem',
            // border: '0.5px solid #ffffff33',
          }}
        >
          {/* Bright image (base layer) - images[0] */}
          <Box
            component="img"
            src={images[0]}
            alt={title}
            loading="lazy"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Dark image (overlay layer) - images[1] */}
          <Box
            component="img"
            src={images[1]}
            alt={`${title} - dark`}
            loading="lazy"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: darkImageOpacity,
              transition: `opacity 2s cubic-bezier(0.618, 0.0, 0.382, 1.0) ${transitionDelay}`,
            }}
          />
        </Box>

        {/* Product Info */}
        <Stack spacing={1}>
          {/* Product Name */}
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: { xs: '0.95rem', lg: '1.1rem' },
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>

          {/* Type Tag */}
          <Chip
            label={type}
            size="small"
            sx={{
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              alignSelf: 'flex-start',
              backgroundColor: isDark ? '#F2E9DA' : '#12100E', // Dark mode: light bg, Light mode: dark bg
              color: isDark ? '#12100E' : '#F2E9DA', // Dark mode: dark text, Light mode: light text
              transition: 'background-color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0), color 1s cubic-bezier(0.618, 0.0, 0.382, 1.0)',
            }}
          />

          {/* State Label (brightness·color temperature) */}
          <StateLabel lux={lux} kelvin={kelvin} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductCard;
