import { useState, useCallback, useEffect } from 'react';
import getMessagesInfo from '@/services/messagesInfo.api';
import getAvatars from '@/services/avatars.api';
import normalizePostsAdapter from '@/adapters/postsAdapter';

export default function usePosts() {
  const [usersById, setUsersById] = useState({});
  const [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPosts = useCallback(() => {
    setLoading(true);
    setError(null);
    return Promise.all([getMessagesInfo(), getAvatars()])
      .then(([messages, avatars]) => {
        const result = normalizePostsAdapter(messages, avatars);
        setUsersById(result.usersById);
        setPostsList(result.postsList);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    (async () => {
      await loadPosts();
    })();
  }, [loadPosts]);

  return {
    usersById,
    postsList,
    loading,
    error,
    reload: loadPosts,
  };
}
