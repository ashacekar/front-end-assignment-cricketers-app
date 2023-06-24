import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useCricketData } from '../../hooks/useCricketData';
import { CricketDataProvider } from '../../providers/CricketDataProvider';

interface Props {
  children: React.ReactNode;
}

describe('Cricket Data Provider', () => {
  it('shows initial state', () => {
    const { result } = renderHook(() => useCricketData());
    expect(result.current.data).toStrictEqual([]);
  });
  it('updates state', () => {
    const wrapper: React.FC<Props> = ({ children }) => {
      return (
        <CricketDataProvider>
          {children}
        </CricketDataProvider>
      );
    };
    const { result } = renderHook(() => useCricketData(), { wrapper });
    expect(result.current.data).toStrictEqual([]);
  });
});
