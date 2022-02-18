import { createContext, useState } from 'react';
import { Finance } from '../models/finance';

interface FinanceContextData {
  finances: Finance[];
  setFinances: (finances: Finance[]) => void;
  finance: Finance;
  setFinance: (finance: Finance) => void;
}

interface FinanceContextProps {
  children: React.ReactNode;
}

export const FinanceContext = createContext({} as FinanceContextData);

export function FinanceProvider(props: FinanceContextProps) {
  const [finances, setFinances] = useState<Finance[]>([]);
  const [finance, setFinance] = useState<Finance>({} as Finance);

  return (
    <FinanceContext.Provider value={{ finances, setFinances, finance, setFinance }}>
      {props.children}
    </FinanceContext.Provider>
  );
}
