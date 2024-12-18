import { useMediaQuery } from 'react-responsive';

export const useDashboard = () => {
  const isBigScreenOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isLaptopOrTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isMobileOrBigScreen = useMediaQuery({
    query: '(max-width: 767px) or (min-width: 1440px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1439px)' });
  const isMobile = useMediaQuery({
    query: '(min-width: 375px) and (max-width: 767px)',
  });
  const isAllMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1025px)',
  });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return {
    isBigScreenOrTablet,
    isBigScreen,
    isMobileOrTablet,
    isRetina,
    isLaptopOrTablet,
    isMobileOrBigScreen,
    isMobile,
    isTablet,
    isAllMobile,
  };
};
