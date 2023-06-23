import { useContext } from 'react';
import { CricketContext, CricketProps } from '../providers/CricketDataProvider';

/**
 * Returns a adas data state which pulls from the backend associated with current played video frame.
 *
 * Usage:
 *
 * ```typescript
 *  const {
 *       data,
 *       setData,
 *  } = useCricketData();
 * ```
 */
export const useCricketData = (): CricketProps => {
  return useContext(CricketContext);
};
