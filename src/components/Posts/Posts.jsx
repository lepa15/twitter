import Post from '@/components/Post/Post';
import usePosts from '@/hooks/usePosts';

export default function Posts() {
  const {
    usersById,
    postsList,
    loading,
    error,
    reload,
  } = usePosts();

  if (loading) {
    return <div id="loader"></div>;
  }

  if (error) {
    return (
      <div>
        <p>Ошибка загрузки</p>
        <button onClick={reload}>Повторить</button>
      </div>
    );
  }
  return (
    <section className="mt-[2.625rem] sm:mt-16">
      <div className="mx-auto px-4 w-full max-w-[60rem]">
        <h2 className="font-extrabold text-2xl sm:text-4xl">Последние сообщения</h2>
        <div className="mt-6 sm:p-4 sm:bg-white sm:overflow-hidden sm:rounded-lg">
          <ul className="flex flex-col">
            {postsList.map((post) => {
              const user = usersById[post.userId];
              return (
                <Post key={post.id} user={user} post={post}/>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
