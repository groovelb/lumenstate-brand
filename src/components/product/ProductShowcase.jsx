import { Box, Typography, Grid, Stack } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import Container from '../layout/Container';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';
import TimelineSlider from '../shared/TimelineSlider';
import products from '../../data/products';
import { useTimeline } from '../../contexts/TimelineContext';
import { content } from '../../data/content';

const ProductShowcase = () => {
  const { timelineValue, setIsSliderVisible, setHasSliderBeenSeen, setIsShowcaseInView, setIsSliderAboveHeader } = useTimeline();
  const sliderRef = useRef(null);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);
  const [selectedType, setSelectedType] = useState('all');

  // Filter products based on selected type
  const filteredProducts = selectedType === 'all'
    ? products
    : products.filter(product => product.type === selectedType);

  // Scroll to the top of the ProductShowcase section (smooth) before applying filter
  const handleTypeChange = (nextType) => {
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl?.getBoundingClientRect().height || 72;
    const sectionTop = sectionRef.current?.getBoundingClientRect().top || 0;
    const targetTop = window.scrollY + sectionTop - headerHeight;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    setSelectedType(nextType);
  };

  // Observer for showcase section (to mark as seen)
  useEffect(() => {
    const currentRef = gridRef.current;
    let rafId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mark as seen when grid enters viewport
        if (entry.isIntersecting) {
          // Defer state update to next frame to avoid blocking scroll
          rafId = requestAnimationFrame(() => {
            setHasSliderBeenSeen(true);
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-72px 0px 0px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [setHasSliderBeenSeen]);

  // Observer for entire ProductShowcase section - track if section is currently in view
  useEffect(() => {
    const currentRef = sectionRef.current;
    let rafId = null;

    const headerEl = document.querySelector('header');
    const headerHeight = headerEl?.getBoundingClientRect().height || 72;

    const observer = new IntersectionObserver(([entry]) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        setIsShowcaseInView(entry.isIntersecting);
      });
    }, {
      threshold: 0,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [setIsShowcaseInView]);

  // Observer for slider - detect when it scrolls PAST viewport top
  useEffect(() => {
    const currentRef = sliderRef.current;
    let rafId = null;

    // Measure header height so visibility flips exactly when slider goes under the header
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl?.getBoundingClientRect().height || 72;

    const observer = new IntersectionObserver(([entry]) => {
      // Defer state update to next frame to avoid blocking scroll
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        // Using negative top rootMargin equals header height:
        // - entry.isIntersecting === false as soon as the slider is covered by the header
        setIsSliderVisible(entry.isIntersecting);
        // Show minimal only when slider is fully above header (not intersecting and its bottom is at/below header line)
        const { bottom } = entry.boundingClientRect;
        const isAboveHeader = !entry.isIntersecting && bottom <= headerHeight;
        setIsSliderAboveHeader(isAboveHeader);
      });
    }, {
      threshold: 0,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [setIsSliderVisible, setIsSliderAboveHeader]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: '100vh',
        py: { xs: 8, sm: 12, md: 24 },
      }}
    >
      <Container>
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Section Title */}
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.9rem', sm: '2.1rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 500,
                mb: 1,
              }}
            >
              {content.products.sectionTitle}
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                fontWeight: 300,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              }}
            >
              {content.products.sectionSubtitle}
            </Typography>
          </Box>

          {/* Timeline Slider */}
          <Box ref={sliderRef} sx={{ width: '100%' }}>
            <TimelineSlider />
          </Box>

          {/* Filter and Product Grid Layout */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: { xs: 3, md: 4 },
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'stretch', md: 'flex-start' },
            }}
          >
            {/* Filter - Left Side */}
            <Box
              sx={{
                minWidth: { xs: '100%', md: '140px' },
                maxWidth: { xs: '100%', md: '140px' },
              }}
            >
              <ProductFilter selectedType={selectedType} onTypeChange={handleTypeChange} />
            </Box>

            {/* Product Grid */}
            <Box sx={{ flex: 1 }}>
              <Grid
                ref={gridRef}
                container
                rowSpacing={{ xs: 6, md: 9 }}
                columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
              >
                {filteredProducts.map((product, index) => (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4, lg: 12 / 5 }}
                    key={product.id}
                  >
                    <ProductCard
                      product={product}
                      timelineValue={timelineValue}
                      index={index}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
