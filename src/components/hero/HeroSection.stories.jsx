import HeroSection from './HeroSection';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';
import { Box } from '@mui/material';

export default {
  title: '03. Templates/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '좌측/우측 스크롤 비디오로 구성된 히어로 섹션. sm 이하에서는 우측 그리드만 노출되며 타이틀이 오버레이됩니다.',
      },
    },
  },
  decorators: [
    withTimelineValues({ timelineValue: 0.33 }),
    (Story) => (
      <Box sx={{ height: '300vh' }}>
        <Story />
        <Box sx={{ height: '200vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
          Scroll to see video effects
        </Box>
      </Box>
    ),
  ],
};

export const Desktop = {};

export const Mobile = {
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};


