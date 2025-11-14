import ProductCard from './ProductCard';
import products from '../../data/products';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';
import { Box } from '@mui/material';

const sample = products[0];

export default {
  title: '02. Components/Product/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '단일 제품 카드. 주 이미지와 야간 이미지 오버레이, 타입 칩, 상태 라벨(lux·kelvin). timelineValue(0~1)에 따라 이미지/스타일이 변합니다.',
      },
    },
  },
  args: {
    product: sample,
  },
  parameters: { layout: 'centered' },
};

export const TimelineDay = {
  decorators: [withTimelineValues({ timelineValue: 0 })],
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <ProductCard {...args} />
    </Box>
  ),
};

export const TimelineEvening = {
  decorators: [withTimelineValues({ timelineValue: 0.67 })],
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <ProductCard {...args} />
    </Box>
  ),
};

export const TimelineNight = {
  decorators: [withTimelineValues({ timelineValue: 1 })],
  render: (args) => (
    <Box sx={{ width: 320 }}>
      <ProductCard {...args} />
    </Box>
  ),
};


