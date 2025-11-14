import ScrollVideo from './ScrollVideo';
import { Box } from '@mui/material';

export default {
  title: '02. Components/Shared/ScrollVideo',
  component: ScrollVideo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '스크롤 위치에 따라 비디오 currentTime을 시킹하는 컴포넌트. showTime/ showTimeline 옵션 제공.',
      },
    },
  },
  parameters: { layout: 'fullscreen' },
};

const src = '/product/1-motion.mp4';

export const Default = () => (
  <Box sx={{ p: 4, mx: 'auto', width: 'min(960px, 96vw)' }}>
    <ScrollVideo src={src} showTime={true} showTimeline={false} />
  </Box>
);

export const MobileVerticalTimeline = () => (
  <Box sx={{ p: 4, mx: 'auto', width: 'min(960px, 96vw)' }}>
    <ScrollVideo src={src} showTime={true} showTimeline={true} />
  </Box>
);


