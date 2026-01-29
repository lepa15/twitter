export default function Statistics({ statistics }) {
  const {
    usersRegistr,
    writMessages,
    writToday,
  } = statistics;
  return (
    <>
      <li className="list__item item">
        <p className="item__count">{usersRegistr}</p>
        <p className="item__desc">Пользователей зарегестрировано</p>
      </li>
      <li className="list__item item">
        <p className="item__count">{writMessages}</p>
        <p className="item__desc">Сообщений <br/> написано</p>
      </li>
      <li className="list__item item">
        <p className="item__count">{writToday}</p>
        <p className="item__desc">Написано <br/> сегодня</p>
      </li>
    </>
  );
}
