import Statistics from '@/components/Statistics/Statistics';
import useStatistic from '@/hooks/useStatistic';

export default function About() {
  const {
    state,
    refetch,
  } = useStatistic();

  if (state.status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (state.status === 'error') {
    return (
      <div>
        <p>Что-то пошло не так</p>
        <button onClick={refetch}>Повторить</button>
      </div>
    );
  }
  if (state.status === 'success') {
    return (
      <div className="sm:px-4">
        <ul
          className="mx-auto w-full max-w-[60rem] pt-7 pb-9 sm:px-20 sm:py-16 flex items-center flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0 sm:rounded-b-[10px] bg-primary text-white"
        >
          <Statistics {...state.data} />
        </ul>
      </div>
    );
  }
}
