import { useMediaQuery } from '@mui/material';
import MobileReviews from './MobileReviews';
import ScrollingReviews from './ScrollingReviews';

const ResponsiveReviews = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isMobile ? <MobileReviews /> : <ScrollingReviews />}
    </>
  );
};

export default ResponsiveReviews;
