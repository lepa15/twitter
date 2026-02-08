import { useState, useCallback, useEffect } from 'react';
import getMessagesInfo from '@/services/messagesInfo.api';
import getAvatars from '@/services/avatars.api';
import normalizePostsAdapter from '@/adapters/postsAdapter';

export default function usePosts() {
  const [data, setData] = useState({
    usersById: {},
    postsList: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPosts = useCallback(() => {
    setLoading(true);
    setError(null);
    return Promise.all([getMessagesInfo(), getAvatars()])
      .then(([messages, avatars]) => {
        const result = normalizePostsAdapter(messages, avatars);
        setData({
          usersById: result.usersById,
          postsList: result.postsList,
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("data",data);
  }, [data]);

  useEffect(() => {
    (async () => {
      await loadPosts();
    })();
  }, [loadPosts]);

  return {
    usersById: data.usersById,
    postsList: data.postsList,
    loading,
    error,
    reload: loadPosts,
  };
}
