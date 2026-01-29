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
    <section className="messages">
      <div className="container">
        <h2 className="messages-title">Последние сообщения</h2>
        <div className="messages-wrap">
          <ul className="messages-list">
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
