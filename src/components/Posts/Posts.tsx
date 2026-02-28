import PostItem from '@/components/Post/PostItem';
import usePosts from '@/hooks/usePosts';

export default function Posts() {
  const {
    state,
    refetch,
  } = usePosts();

  if (state.status === 'loading') {
    return <div id="loader"/>;
  }

  if (state.status === 'error') {
    return (
      <div>
        <p>Ошибка загрузки</p>
        <button onClick={refetch}>Повторить</button>
      </div>
    );
  }

  if (state.status === 'success') {
    return (
      <section className="mt-[2.625rem] sm:mt-16">
        <div className="mx-auto px-4 w-full max-w-[60rem]">
          <h2 className="font-extrabold text-2xl sm:text-4xl">Последние сообщения</h2>
          <div className="mt-6 sm:p-4 sm:bg-white sm:overflow-hidden sm:rounded-lg">
            <ul className="flex flex-col">
              {state.data.postsList.map((post) => {
                const user = state.data.usersById[post.userId];
                return (
                  <PostItem key={post.id} user={user} post={post}/>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
