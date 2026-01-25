import Statistics from '@/components/Statistics/Statistics';
import useStatistics from '@/hooks/useStatistics';

export default function About() {
  const {
    statistics,
    loading,
    error,
    reload,
  } = useStatistics();

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Что-то пошло не так</p>
        <button onClick={reload}>Повторить</button>
      </div>
    );
  }
  return (
    <section className="about">
      <div className="about-wrap">
        <ul className="about-list list">
          <Statistics statistics={statistics}/>
        </ul>
      </div>
    </section>
  );
}
