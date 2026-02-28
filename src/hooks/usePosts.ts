import { useState, useCallback, useEffect } from 'react';
import getMessages from '@/services/messages/messages.api';
import getAvatars from '@/services/avatars/avatars.api';
import normalizePostsAdapter from '@/adapters/postsAdapter';
import { PostsData } from '@/entities/postsAdapter/types';

type PostsState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: PostsData }
  | { status: 'error'; error: string };

type UsePostsReturn = {
  state: PostsState;
  refetch: () => Promise<void>;
};

export default function usePosts(): UsePostsReturn {
  const [state, setState] = useState<PostsState>({ status: 'idle' });

  const fetchPosts = useCallback(async (): Promise<void> => {
    try {
      setState({ status: 'loading' });

      const [messages, avatars] = await Promise.all([getMessages(), getAvatars()]);
      const result = normalizePostsAdapter(messages, avatars);

      setState({ status: 'success', data: result });
    } catch (er) {
      setState({ status: 'error', error: String(er) });
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchPosts();
    })();
  }, [fetchPosts]);

  return {
    state,
    refetch: fetchPosts,
  };
}
