import { useEffect } from 'react';
import { useTimeline } from '../../contexts/TimelineContext';

function Setter({ values, children }) {
  const {
    setTimelineValue,
    setIsSliderVisible,
    setHasSliderBeenSeen,
    setIsShowcaseInView,
    setIsSliderAboveHeader,
  } = useTimeline();

  useEffect(() => {
    if (values?.timelineValue !== undefined) setTimelineValue(values.timelineValue);
    if (values?.isSliderVisible !== undefined) setIsSliderVisible(values.isSliderVisible);
    if (values?.hasSliderBeenSeen !== undefined) setHasSliderBeenSeen(values.hasSliderBeenSeen);
    if (values?.isShowcaseInView !== undefined) setIsShowcaseInView(values.isShowcaseInView);
    if (values?.isSliderAboveHeader !== undefined) setIsSliderAboveHeader(values.isSliderAboveHeader);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values)]);

  return children;
}

export const withTimelineValues = (values) => (Story) => (
  <Setter values={values}>
    <Story />
  </Setter>
);


