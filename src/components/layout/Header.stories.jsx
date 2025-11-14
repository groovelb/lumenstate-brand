import Header from './Header';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';

export default {
  title: '02. Components/Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '상단 고정 헤더. 좌측 로고, 우측 현재 시각. 타임라인이 헤더 상단을 지나면 미니 타임라인 슬라이더를 노출합니다(뷰포트에 따라 중앙/좌측).',
      },
    },
  },
};

export const Default = {};

export const InlineTimelineSm = {
  decorators: [withTimelineValues({ isSliderAboveHeader: true })],
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};


