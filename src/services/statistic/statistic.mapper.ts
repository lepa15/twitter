import { StatisticDTO } from '@/services/statistic/statistic.type';
import { Statistic } from '@/entities/statistic/type';

export default function normalize(dto: StatisticDTO): Statistic {
  return {
    usersRegistr: Number(dto.usersRegistr),
    writMessages: Number(dto.writMessages),
    writToday: Number(dto.writToday),
  };
}
