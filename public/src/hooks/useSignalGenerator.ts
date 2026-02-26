import { useState, useEffect, useCallback, useRef } from 'react';

export interface TradingSignal {
  id: string;
  signalId: string;
  traderId: string;
  instrument: string;
  amount: number;
  isWin: boolean;
  timestamp: Date;
}

const INSTRUMENTS = ['BTC/USD', 'ETH/USD', 'XRP/USD', 'SOL/USD', 'ADA/USD', 'DOGE/USD'];

const generateSignalId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const generateTraderId = () => String(Math.floor(100 + Math.random() * 900));

const generateSignal = (): TradingSignal => {
  const isWin = Math.random() < 0.8;
  const amount = isWin
    ? Math.floor(50 + Math.random() * 1950)
    : Math.floor(20 + Math.random() * 130);

  return {
    id: crypto.randomUUID(),
    signalId: generateSignalId(),
    traderId: generateTraderId(),
    instrument: INSTRUMENTS[Math.floor(Math.random() * INSTRUMENTS.length)],
    amount,
    isWin,
    timestamp: new Date(),
  };
};

export const useSignalGenerator = (maxSignals = 20) => {
  const [signals, setSignals] = useState<TradingSignal[]>(() =>
    Array.from({ length: 8 }, () => {
      const s = generateSignal();
      s.timestamp = new Date(Date.now() - Math.floor(Math.random() * 300000));
      return s;
    }).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
  );

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const scheduleNext = useCallback(() => {
    const delay = 5000 + Math.random() * 10000;
    timeoutRef.current = setTimeout(() => {
      setSignals(prev => {
        const newSignal = generateSignal();
        const updated = [newSignal, ...prev];
        return updated.slice(0, maxSignals);
      });
      scheduleNext();
    }, delay);
  }, [maxSignals]);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scheduleNext]);

  return signals;
};
