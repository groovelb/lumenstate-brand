/**
 * Typography Design Tokens
 * Optimized for Tiempos Headline serif typeface
 *
 * 2024-2025 Editorial Typography Trends:
 * - Serif headlines: Ultra-tight letter-spacing (-0.04 to -0.02em) for elegance
 * - Line-height: 1.08-1.2 for display, 1.6-1.7 for body
 * - Word-spacing: Tighter for large serif display (-0.03 to -0.01em)
 * - Optical sizing: Larger sizes demand tighter tracking
 * - Luxury editorial aesthetic: breathing room with intentional compression
 */

export const typography = {
  // Font families
  fontFamily: {
    display: '"Tiempos Headline", Georgia, serif',
    body: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },

  // Display/Heading tokens - Tiempos Headline serif optimized
  h1: {
    fontFamily: '"Tiempos Headline", Georgia, serif',
    fontSize: '5rem',        // 88px - Hero display (increased from 56px)
    fontWeight: 500,
    letterSpacing: '-0.05em', // Ultra-tight for larger size (optical sizing)
    lineHeight: 1.02,          // Extremely compact for maximum drama
    wordSpacing: '0.02em',   // Very tight word spacing for monolithic presence
  },

  h2: {
    fontFamily: '"Tiempos Headline", Georgia, serif',
    fontSize: '3rem',       // 60px - Section headers (scaled up)
    fontWeight: 500,
    letterSpacing: '0.02em', // Tight tracking for large serif
    lineHeight: 1.2,          // Compact for impact
    wordSpacing: '0.1em',   // Tight for cohesion
  },

  h3: {
    fontFamily: '"Tiempos Headline", Georgia, serif',
    fontSize: '2rem',       // 44px - Sub-section headers (Pretendard)
    fontWeight: 800,
    letterSpacing: '0.03em', // Tight for sans-serif large display
    lineHeight: 1.18,          // Breathing room
    wordSpacing: '-0.02em',    // Moderately tight
  },

  // Sans-serif headings - Pretendard for UI hierarchy
  h4: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1.3rem',        // 24px
    fontWeight: 600,
    letterSpacing: '-0.02em',  // Tighter for sans-serif heading
    lineHeight: 1.45,          // Generous for readability
    wordSpacing: '-0.005em',   // Slightly tight
  },

  h5: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1.25rem',       // 20px
    fontWeight: 600,
    letterSpacing: '-0.015em', // Modern tight tracking
    lineHeight: 1.32,
    wordSpacing: 'normal',
  },

  h6: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1.125rem',      // 18px
    fontWeight: 600,
    letterSpacing: '-0.01em',  // Subtle tightness
    lineHeight: 1.38,
    wordSpacing: 'normal',
  },

  // Subtitle tokens - Supporting text hierarchy
  subtitle1: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1.125rem',      // 18px
    fontWeight: 500,
    letterSpacing: '0.002em',  // Nearly normal, slight openness
    lineHeight: 1.55,          // Readable
    wordSpacing: 'normal',
  },

  subtitle2: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1rem',          // 16px
    fontWeight: 500,
    letterSpacing: '0.006em',  // Slightly open
    lineHeight: 1.5,
    wordSpacing: 'normal',
  },

  // Body text tokens - Optimized for long-form reading
  body1: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '1rem',          // 16px
    fontWeight: 400,
    letterSpacing: '0.012em',  // Open for comfortable reading (trend)
    lineHeight: 1.7,           // Very generous for long-form content
    wordSpacing: '0.01em',     // Slight breathing room
  },

  body2: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '0.875rem',      // 14px
    fontWeight: 400,
    letterSpacing: '0.015em',  // More open for smaller size
    lineHeight: 1.65,          // Generous
    wordSpacing: '0.008em',
  },

  // Utility text tokens
  button: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '0.9375rem',     // 15px
    fontWeight: 500,
    letterSpacing: '0.025em',  // Open for UI clarity and clickability
    lineHeight: 1.4,
    wordSpacing: 'normal',
    textTransform: 'none',
  },

  caption: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '0.75rem',       // 12px
    fontWeight: 400,
    letterSpacing: '0.03em',   // Very open for legibility at small size
    lineHeight: 1.5,
    wordSpacing: '0.015em',    // Breathing room
  },

  overline: {
    fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: '0.75rem',       // 12px
    fontWeight: 600,
    letterSpacing: '0.12em',   // Wide tracking for uppercase labels (luxury)
    lineHeight: 1.4,
    wordSpacing: '0.025em',
    textTransform: 'uppercase',
  },
};

/**
 * Responsive typography scale adjustments
 * These multipliers can be applied at different breakpoints
 */
export const typographyScale = {
  mobile: {
    h1: 0.55,   // 48.4px on mobile (88px * 0.55)
    h2: 0.6,    // 36px on mobile (60px * 0.6)
    h3: 0.65,   // 28.6px on mobile (44px * 0.65)
    h4: 0.75,
    h5: 0.85,
    h6: 0.9,
  },
  tablet: {
    h1: 0.75,   // 66px on tablet (88px * 0.75)
    h2: 0.8,    // 48px on tablet (60px * 0.8)
    h3: 0.82,   // 36px on tablet (44px * 0.82)
    h4: 0.875,
    h5: 0.925,
    h6: 0.95,
  },
};
