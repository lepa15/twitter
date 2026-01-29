export default async function getStatisticsInfo() {
  const response = await fetch('https://burtovoy.github.io/statistic.json');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const { statistic } = await response.json();
  return statistic;
}
