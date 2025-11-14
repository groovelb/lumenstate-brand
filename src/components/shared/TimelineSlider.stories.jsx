import TimelineSlider from './TimelineSlider';
import { withTimelineValues } from '../../stories/decorators/SetTimelineValues.jsx';
import { Box } from '@mui/material';

export default {
  title: '02. Components/Shared/TimelineSlider',
  component: TimelineSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '12:00pm → 00:00am 4지점 타임라인 슬라이더. 아이콘/마크 클릭으로 값 변경. TimelineContext에 값을 반영합니다.',
      },
    },
  },
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Box sx={{ width: 'min(640px, 92vw)', px: 3 }}>
      <TimelineSlider />
    </Box>
  ),
};

export const SetToEvening = {
  decorators: [withTimelineValues({ timelineValue: 0.67 })],
  render: () => (
    <Box sx={{ width: 'min(640px, 92vw)', px: 3 }}>
      <TimelineSlider />
    </Box>
  ),
};


