import React, { createContext, useState } from 'react';
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
    updateData(choice);
  };


  return (
    <CricketContext.Provider
      value={{data,setData}}>
        {children}
    </CricketContext.Provider>
  );
};