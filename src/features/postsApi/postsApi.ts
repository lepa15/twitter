import { createApi } from '@reduxjs/toolkit/query/react';
import { PostsData } from '@/entities/postsAdapter/types';
import getMessages from '@/services/messages/messages.api';
import getAvatars from '@/services/avatars/avatars.api';
import normalizePostsAdapter from '@/adapters/postsAdapter';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: async () => ({ data: null }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsData, void>({
      async queryFn() {
        try {
          const [messages, avatars] = await Promise.all([
            getMessages(),
            getAvatars(),
          ]);
          const result = normalizePostsAdapter(messages, avatars);
          return { data: result };
        } catch (error) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: String(error),
            },
          };
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
