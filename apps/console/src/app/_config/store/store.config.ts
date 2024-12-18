import { configureStore } from '@reduxjs/toolkit';

import appReducer from '../../_state/global/app.slice';
import authReducer from '../../_state/global/auth.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
