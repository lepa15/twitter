import { useEffect, useState, useCallback } from 'react';
import getStatisticsInfo from '@/services/statistics.api';

export default function useStatistics() {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStatistics = useCallback(() => {
    setLoading(true);
    setError(null);
    return getStatisticsInfo()
      .then(setStatistics)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    (async () => {
      await loadStatistics();
    })();
  }, [loadStatistics]);

  return {
    statistics,
    loading,
    error,
    reload: loadStatistics,
  };
}
