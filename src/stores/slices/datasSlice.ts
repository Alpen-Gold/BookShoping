import { createSlice } from "@reduxjs/toolkit";
import type { ProductsType } from "../../types";

export interface State {
  loading: boolean;
  handleError: string;
  products: ProductsType | [];
}

const initialState: State = {
  loading: false,
  handleError: "",
  products: [],
};

export const datasSlice = createSlice({
  name: "datasSlice",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },

    handleLoading: (state, action) => {
      state.loading = action.payload;
    },

    handleError: (state, action) => {
      state.handleError = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleLoading, handleError, setProducts } = datasSlice.actions;

export default datasSlice.reducer;
