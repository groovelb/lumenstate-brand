import HeroSection from './HeroSection';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';

export default {
  title: '3. Templates/HeroSection',
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
  decorators: [withTimelineValues({ timelineValue: 0.33 })],
};

export const Desktop = {};

export const Mobile = {
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};


