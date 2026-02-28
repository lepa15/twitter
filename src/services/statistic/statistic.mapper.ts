import { StatisticDTO } from '@/services/statistic/statistic.type';
import { StatisticProps } from '@/entities/statistic/type';

export default function normalize(dto: StatisticDTO): StatisticProps {
  return {
    usersRegistr: Number(dto.usersRegistr),
    writMessages: Number(dto.writMessages),
    writToday: Number(dto.writToday),
  };
}
