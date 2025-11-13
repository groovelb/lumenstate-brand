import { createContext, useContext, useState } from 'react';

/**
 * TimelineContext - 시간대 값을 전역으로 관리
 */
const TimelineContext = createContext();

/**
 * TimelineProvider - Context Provider 컴포넌트
 */
export const TimelineProvider = ({ children }) => {
  const [timelineValue, setTimelineValue] = useState(0);
  const [isSliderVisible, setIsSliderVisible] = useState(false); // Is slider currently in viewport
  const [hasSliderBeenSeen, setHasSliderBeenSeen] = useState(false); // Has slider ever been in viewport
  const [isShowcaseInView, setIsShowcaseInView] = useState(false); // Is ProductShowcase section currently in viewport
  const [isSliderAboveHeader, setIsSliderAboveHeader] = useState(false); // Is TimelineSlider above header line

  return (
    <TimelineContext.Provider value={{
      timelineValue,
      setTimelineValue,
      isSliderVisible,
      setIsSliderVisible,
      hasSliderBeenSeen,
      setHasSliderBeenSeen,
      isShowcaseInView,
      setIsShowcaseInView,
      isSliderAboveHeader,
      setIsSliderAboveHeader
    }}>
      {children}
    </TimelineContext.Provider>
  );
};

/**
 * useTimeline - TimelineContext를 사용하기 위한 커스텀 훅
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
};
