export default function convertTime(postDate, currentDate) {
  const post = postDate.getTime();
  const current = currentDate.getTime();
  const diff = current - post;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  function pluralize(number, one, few, many) {
    const n = Math.abs(number) % 100;
    if (n >= 11 && n <= 14) return many;

    const lastDigit = n % 10;
    if (lastDigit === 1) return one;
    if (lastDigit >= 2 && lastDigit <= 4) return few;

    return many;
  }

  if (minutes < 1) return 'только что';
  if (minutes < 60) return `${minutes} ${pluralize(minutes, 'минуту', 'минуты', 'минут')} назад`;
  if (hours < 24) return `${hours} ${pluralize(hours, 'час', 'часа', 'часов')} назад`;
  if (days < 30) return `${days} ${pluralize(days, 'день', 'дня', 'дней')} назад`;
  if (months < 12) return `${months} ${pluralize(months, 'месяц', 'месяца', 'месяцев')} назад`;
  return `${years} ${pluralize(years, 'год', 'года', 'лет')} назад`;
}
const post = new Date('23.10.2023 16:57');
const current = new Date('2025-01-01T12:05:00Z');
