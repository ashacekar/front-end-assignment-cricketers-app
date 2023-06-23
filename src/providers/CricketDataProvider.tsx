import React, { createContext, useState, useMemo } from 'react';
import { TPlayer } from '../data/get-players';

export interface CricketProps {
  data: TPlayer[];
  setData: (_: TPlayer[]) => void;
}

export const CricketContext = createContext<CricketProps>({
  data: [] as TPlayer[],
  setData: (_: TPlayer[]) => {},
});

interface Props {
  children: React.ReactNode;
}

export const CricketDataProvider: React.FunctionComponent<Props> = ({children}) => {
  const [data, updateData] = useState<TPlayer[]>([]);

  const setData = (choice: TPlayer[]) => {
    console.log("provider:"+data);
    updateData(choice);
  };

  const CricketContextProviderValue = useMemo(
    () => ({ data, setData }),
    [data, updateData]
  )
  return (
    <CricketContext.Provider
      value={CricketContextProviderValue}>
        {children}
    </CricketContext.Provider>
  );
};