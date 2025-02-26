import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TAB_TITLES } from '../../../constants/const';

// %======================== TitleManager ========================% //

function TitleManager(): React.JSX.Element | null {
  const pathname = useLocation().pathname;
  useEffect(() => {
    document.title = TAB_TITLES[pathname as keyof typeof TAB_TITLES] || '';
  }, [pathname]);
  return null;
}
export default TitleManager;