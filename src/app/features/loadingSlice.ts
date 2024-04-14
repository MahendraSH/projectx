import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const LoadingSlice = createSlice({
  initialState,
  name: "loading",
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
