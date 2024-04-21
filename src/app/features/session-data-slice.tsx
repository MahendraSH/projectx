import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "./sessionApiSlice";

// Define the initial state for the sessionData slice
const initialState: ApiResponse = {} as ApiResponse;

// Create the sessionData slice
const sessionDataSlice = createSlice({
  name: "sessionData",
  initialState,
  reducers: {
    setSessionData: (state, action: PayloadAction<ApiResponse>) =>
      action.payload,
  },
});

export const { setSessionData } = sessionDataSlice.actions;
export default sessionDataSlice.reducer;
