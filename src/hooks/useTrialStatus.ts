import { useState, useEffect } from 'react';

interface TrialStatus {
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
  isExpired: boolean;
  hasDeposited: boolean;
  trialStart: Date | null;
}

export const useTrialStatus = (): TrialStatus => {
  const [status, setStatus] = useState<TrialStatus>({
    daysLeft: 3,
    hoursLeft: 72,
    minutesLeft: 0,
    isExpired: false,
    hasDeposited: false,
    trialStart: null,
  });

  useEffect(() => {
    const leadData = localStorage.getItem('smartrader_lead');
    if (!leadData) return;

    const { trial_start, has_deposited } = JSON.parse(leadData);
    const trialStart = new Date(trial_start);

    const update = () => {
      const now = new Date();
      const trialEnd = new Date(trialStart.getTime() + 3 * 24 * 60 * 60 * 1000);
      const remaining = trialEnd.getTime() - now.getTime();

      if (remaining <= 0) {
        setStatus({
          daysLeft: 0,
          hoursLeft: 0,
          minutesLeft: 0,
          isExpired: true,
          hasDeposited: !!has_deposited,
          trialStart,
        });
      } else {
        setStatus({
          daysLeft: Math.floor(remaining / (24 * 60 * 60 * 1000)),
          hoursLeft: Math.floor(remaining / (60 * 60 * 1000)),
          minutesLeft: Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)),
          isExpired: false,
          hasDeposited: !!has_deposited,
          trialStart,
        });
      }
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
};
