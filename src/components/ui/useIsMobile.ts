import { useEffect, useState } from 'react';

export default function useIsMobile(breakpointPx = 767) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = `(max-width: ${breakpointPx}px)`;
    const media = window.matchMedia(query);

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [breakpointPx]);

  return isMobile;
}