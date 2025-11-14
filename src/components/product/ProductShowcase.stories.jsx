import ProductShowcase from './ProductShowcase';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';

export default {
  title: '03. Templates/ProductShowcase',
  component: ProductShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '제품 쇼케이스 섹션 컨테이너. 타임라인 슬라이더, 타입 필터, 제품 그리드를 포함합니다. sm 이하에서는 필터가 숨겨집니다.',
      },
    },
  },
  decorators: [withTimelineValues({ timelineValue: 0.5 })],
};

export const Default = {};

export const FilterHiddenOnSm = {
  parameters: { viewport: { defaultViewport: 'iphone12' } },
};


