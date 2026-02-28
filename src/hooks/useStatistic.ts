import { useEffect, useState, useCallback } from 'react';
import getStatistic from '@/services/statistic/statistic.api';
import { StatisticProps } from '@/entities/statistic/type';


type StatisticState =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: StatisticProps }
    | { status: 'error'; error: string; };

type UseStatisticReturn = {
  state: StatisticState;
  refetch: () => Promise<void>;
};


export default function useStatistic(): UseStatisticReturn {
  const [state, setState] = useState<StatisticState>({ status: 'idle' });

  const fetchStatistic = useCallback(async (): Promise<void> => {
    try {
      setState({ status: 'loading' });
      const result = await getStatistic();
      setState({ status: 'success', data: result });
    } catch (er) {
      setState({ status: 'error', error: String(er) });
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchStatistic();
    })();
  }, [fetchStatistic]);

  return {
    state,
    refetch: fetchStatistic,
  };
}
