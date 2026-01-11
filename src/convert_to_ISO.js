export default function convertToISO(dateString) {
  const [dateStr, timeStr] = dateString.split(' ');
  const [day, month, year] = dateStr.split('.');
  const [hour, minute] = timeStr.split(':');

  const date = new Date(Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
  ));

  return date.toISOString();
}

const dateStringToISO = '23.10.2023 16:57';
