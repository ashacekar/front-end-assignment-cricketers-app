import { useContext } from 'react';
import { CricketContext, CricketProps } from '../providers/CricketDataProvider';

/**
 * Returns cricketer data
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
