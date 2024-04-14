import { createSlice } from "@reduxjs/toolkit";

export interface ProductSize {
  value: "XL" | "L" | "M" | "S";
}

const initialState: ProductSize = {
  value: "S",
};

const SizeSlice = createSlice({
  initialState,
  name: "size",
  reducers: {
    changeSize: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeSize } = SizeSlice.actions;
export default SizeSlice.reducer;
