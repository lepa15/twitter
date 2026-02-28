import { StatisticProps } from '@/entities/statistic/type';
import { isStatisticResponse, StatisticResponse } from '@/services/statistic/statistic.type';
import normalize from '@/services/statistic/statistic.mapper';

export default async function getStatistic(): Promise<StatisticProps> {
  const response = await fetch('https://burtovoy.github.io/statistic.json');
  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json() as StatisticResponse;
  if (!isStatisticResponse(data)) {
    throw new Error('Invalid statistic response');
  }

  return normalize(data.statistic);
}
