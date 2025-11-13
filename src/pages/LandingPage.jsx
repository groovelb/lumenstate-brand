import Header from '../components/layout/Header';
import HeroSection from '../components/hero/HeroSection';
import BrandValue from '../sections/BrandValue';
import ProductShowcase from '../components/product/ProductShowcase';
import LineGrid from '../components/layout/LineGrid';
import { Box } from '@mui/material';

const LandingPage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content with top padding for fixed header */}
      <Box sx={{ pt: { xs: '64px', md: '72px' } }}>
        <LineGrid spacing={0}>
          {/* 히어로 섹션 */}
          <HeroSection />

          {/* 브랜드 가치 섹션 */}
          <BrandValue />

          {/* 제품 쇼케이스 섹션 */}
          <ProductShowcase />
        </LineGrid>
      </Box>
    </>
  );
};

export default LandingPage;
