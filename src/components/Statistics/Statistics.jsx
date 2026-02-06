import Statistic from '@/components/Statistic/Statistic';

export default function Statistics({ statistics }) {
  const {
    usersRegistr,
    writMessages,
    writToday,
  } = statistics;
  return (
    <>
      <Statistic statisticInfo={usersRegistr} statisticText={'Пользователей зарегестрировано'}/>
      <Statistic statisticInfo={writMessages} statisticText={
        <>
          Сообщений<br/>
          написано
        </>
      }/>
      <Statistic statisticInfo={writToday} statisticText={
        <>
          Написано<br/>
          Сегодня
        </>
      }/>
    </>
  );
}
