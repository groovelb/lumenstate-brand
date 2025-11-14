import LineGrid from './LineGrid';
import { Grid, Box, Typography } from '@mui/material';

export default {
  title: '02. Components/Layout/LineGrid',
  component: LineGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'MUI Grid/Stack 위에 간격 라인을 그려주는 레이아웃 유틸. container 모드(그리드)와 stack 모드를 지원하며 equalHeight/rowHeights를 제공.',
      },
    },
  },
};

export const ContainerGrid = () => (
  <Box sx={{ p: { xs: 3, md: 6 } }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Container mode · lines between grid items</Typography>
    <LineGrid container gap={16} borderColor="text.primary">
      <Grid size={{ xs: 12, md: 8 }}>
        <Box sx={{ p: 2 }}>xs=12 md=8</Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ p: 2 }}>xs=12 md=4</Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box sx={{ p: 2 }}>xs=12 md=4</Box>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Box sx={{ p: 2 }}>xs=12 md=8</Box>
      </Grid>
    </LineGrid>
  </Box>
);

export const StackLayout = () => (
  <Box sx={{ p: { xs: 3, md: 6 } }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Stack mode · divider lines</Typography>
    <LineGrid gap={16} borderColor="text.primary">
      <Box sx={{ p: 2 }}>Section 1</Box>
      <Box sx={{ p: 2 }}>Section 2</Box>
      <Box sx={{ p: 2 }}>Section 3</Box>
    </LineGrid>
  </Box>
);

export const EqualHeightGrid = () => (
  <Box sx={{ p: { xs: 3, md: 6 }, height: 380 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Equal height rows</Typography>
    <LineGrid container gap={16} equalHeight sx={{ height: '100%' }}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 1 (1/3 h)</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 1</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 2</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 3</Box>
      </Grid>
    </LineGrid>
  </Box>
);

export const RatioRows = () => (
  <Box sx={{ p: { xs: 3, md: 6 }, height: 420 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Custom row ratios [1, 2]</Typography>
    <LineGrid container gap={16} rowHeights={[1, 2]} sx={{ height: '100%' }}>
      <Grid size={{ xs: 12 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 1 (1/3)</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 1 (2/3)</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 2</Box>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Box sx={{ p: 2, height: '100%' }}>Row 2 Col 3</Box>
      </Grid>
    </LineGrid>
  </Box>
);


