import { Box } from '@mui/material';

/**
 * 페이지 컨테이너 컴포넌트
 * - PC (lg 이상): 고정 maxWidth
 * - Tablet/Mobile (md 이하): 100% width
 */
const Container = ({ children, sx = {}, ...props }) => {
  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto', // 중앙 정렬
        px: { xs: 2, sm: 3, md: 4 }, // 좌우 패딩
        maxWidth: {
          xs: '100%',  // Mobile: 100%
          sm: '100%',  // Tablet: 100%
          md: '100%',  // Tablet: 100%
          lg: '1200px', // PC: 고정값
          xl: '1400px', // Large PC: 고정값
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
