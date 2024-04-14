import { createSlice } from "@reduxjs/toolkit";

export interface ProductQuantityType {
  value: number;
}

const initialState: ProductQuantityType = {
  value: 1,
};

const QuantitySlice = createSlice({
  initialState,
  name: "quantity",
  reducers: {
    changeQuantity: (state, action) => {
      state.value = action.payload;
    },
    incrementQuantity: (state) => {
      state.value++;
    },
    decrementQuantity: (state) => {
      if (state.value > 1) {
        state.value--;
      }
    },
  },
});

export const { changeQuantity, incrementQuantity, decrementQuantity } =
  QuantitySlice.actions;
export default QuantitySlice.reducer;
