import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  version: string;
  locale: string;
}

const initialState: AppState = {
  version: '0.0.1',
  locale: 'en',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    recordVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { recordVersion } = appSlice.actions;

export default appSlice.reducer;
