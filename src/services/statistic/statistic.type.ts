export interface StatisticDTO {
  usersRegistr: string;
  writMessages: string;
  writToday: string;
}

export interface StatisticResponse {
  statistic: StatisticDTO;
}

export function isStatisticDTO(obj: any): obj is StatisticDTO {
  return (
    obj
        && typeof obj === 'object'
        && typeof obj.usersRegistr === 'string'
        && typeof obj.writMessages === 'string'
        && typeof obj.writToday === 'string'
  );
}

export function isStatisticResponse(obj: any): obj is StatisticResponse {
  return (
    obj
        && typeof obj === 'object'
        && 'statistic' in obj
        && isStatisticDTO(obj.statistic)
  );
}
