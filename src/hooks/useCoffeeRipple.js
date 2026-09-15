import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Timings copied from the original prototype's showScreen():
// ripple fires immediately, content swaps at 260ms, ripple clears at 620ms.
const SWAP_DELAY = 260;
const CLEAR_DELAY = 620;

export function useCoffeeRipple() {
  const location = useLocation();
  const [isFiring, setIsFiring] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsFiring(true);
    const clearTimer = setTimeout(() => setIsFiring(false), CLEAR_DELAY);
    return () => clearTimeout(clearTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return { isFiring, swapDelay: SWAP_DELAY };
}
