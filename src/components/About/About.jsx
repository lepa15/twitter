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
    <>
      <div className="about-wrap">
        <ul className="mx-auto w-full max-w-[60rem] pt-7 pb-9 sm:px-20 sm:py-16 flex items-center flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0 bg-primary text-white">
          <Statistics statistics={statistics}/>
        </ul>
      </div>
    </>
  );
}
