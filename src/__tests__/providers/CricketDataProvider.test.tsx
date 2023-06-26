import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useCricketData } from '../../hooks/useCricketData';
import { CricketDataProvider } from '../../providers/CricketDataProvider';
import { TPlayer } from '../../data/get-players';

interface Props {
  children: React.ReactNode;
}

describe('Cricket Data Provider', () => {
  it('shows initial state', () => {
    const { result } = renderHook(() => useCricketData());
    expect(result.current.data).toStrictEqual([]);
  });
  it('updates state', () => {
    const mockData: TPlayer[] = [
    {
        id: "_1",
        name: "Virat Kohli",
        description:
            "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL and for the Delhi in Indian domestic cricket.",
        type: "batsman",
        points: 282,
        dob: 594691200000,
    }];
    const wrapper: React.FC<Props> = ({ children }) => {
      return (
        <CricketDataProvider>
          {children}
        </CricketDataProvider>
      );
    };
    const { result } = renderHook(() => useCricketData(), { wrapper });
    expect(result.current.data).toStrictEqual([]);
    act(() => {
      result.current.setData(mockData);
    });
    expect(result.current.data).toStrictEqual(mockData);
  });
});
