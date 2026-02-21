import { useEffect, useState, useCallback } from 'react';
import getStatistic from '@/services/statistic/statistic.api';

export default function useStatistic() {
  const [statistic, setStatistic] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadStatistic = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const result = await getStatistic();
      setStatistic(result);
    } catch (er) {
      setError(er as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await loadStatistic();
    })();
  }, [loadStatistic]);

  return {
    statistic,
    loading,
    error,
    reload: loadStatistic,
  };
}
