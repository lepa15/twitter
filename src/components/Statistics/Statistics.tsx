import Statistic from '@/components/Statistic/Statistic';
import type { StatisticProps } from '@/entities/statistic/type';

export default function Statistics({ usersRegistr, writMessages, writToday }: StatisticProps) {

  return (
    <>
      <Statistic statisticInfo={usersRegistr} statisticText="Пользователей зарегестрировано" />
      <Statistic
        statisticInfo={writMessages}
        statisticText={(
          <>
            Сообщений
            <br />
            написано
          </>
        )}
      />
      <Statistic
        statisticInfo={writToday}
        statisticText={(
          <>
            Написано
            <br />
            Сегодня
          </>
        )}
      />
    </>
  );
}
