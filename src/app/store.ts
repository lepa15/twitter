import { configureStore } from '@reduxjs/toolkit';
import authModalReducer from '@/features/authModalSlice/authModalSlice';
import { postsApi } from '@/features/postsApi/postsApi';

export const store = configureStore({
  reducer: {
    authModal: authModalReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
