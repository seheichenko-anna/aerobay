import { useMediaQuery } from 'react-responsive';

export const useDashboard = () => {
  const isBigScreenOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return {
    isBigScreenOrTablet,
    isBigScreen,
    isMobile,
    isRetina,
  };
};
