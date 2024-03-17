import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};

const ColorSlice = createSlice({
  initialState,
  name: "color",
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeColor } = ColorSlice.actions;
export default ColorSlice.reducer;
