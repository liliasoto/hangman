// En WinCountContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface WinCountContextType {
  winCount: number;
  updateWinCount: () => void;
}

const WinCountContext = createContext<WinCountContextType | undefined>(undefined);

export const useWinCount = () => {
  const context = useContext(WinCountContext);
  if (!context) {
    throw new Error('useWinCount must be used within a WinCountProvider');
  }
  return context;
};

interface WinCountProviderProps {
  children: React.ReactNode; // Definir children como ReactNode
}

export const WinCountProvider: React.FC<WinCountProviderProps> = ({ children }) => {
  const [winCount, setWinCount] = useState(0);

  const updateWinCount = () => {
    setWinCount(prevWinCount => prevWinCount + 1);
  };

  const contextValue: WinCountContextType = {
    winCount,
    updateWinCount
  };

  return (
    <WinCountContext.Provider value={contextValue}>
      {children}
    </WinCountContext.Provider>
  );
};
