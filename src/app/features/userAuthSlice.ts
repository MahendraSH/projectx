import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userResponse } from "./authApiSlice";

const initialState: userResponse = {
  kind: "",
  localId: "",
  email: "",
  displayName: "",
  idToken: "",
  registered: "",
  refreshToken: "",
  expiresId: "",
};

export const userAuthSlice = createSlice({
  initialState: initialState,
  name: "userSlice",
  reducers: {
    setUser: (state, action: PayloadAction<userResponse>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userAuthSlice.actions;

export default userAuthSlice.reducer;
