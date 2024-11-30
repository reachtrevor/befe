import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  authenticated: boolean;
}

const initialState: AuthState = {
  authenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.authenticated = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
