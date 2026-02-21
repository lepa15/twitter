import { useState, useCallback, useEffect } from 'react';
import getMessages from '@/services/messages/messages.api';
import getAvatars from '@/services/avatars/avatars.api';
import normalizePostsAdapter from '@/adapters/postsAdapter';
import { PostsData } from '@/entities/postsAdapter/types';

export default function usePosts() {
  const [data, setData] = useState<PostsData>({
    usersById: {},
    postsList: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadPosts = useCallback(async ():Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const [messages, avatars] = await Promise.all([getMessages(), getAvatars()]);
      const result = normalizePostsAdapter(messages, avatars);
      setData(result);
    } catch (er) {
      setError(er as Error);
    } finally {
      setLoading(false);
    }
  }, []);

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
