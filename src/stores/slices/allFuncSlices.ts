import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  loading: boolean;
  handleError: string;
  user: string | null;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  handleError: "",
  user: localStorage.getItem("user") || null,
};

export const counterSlice = createSlice({
  name: "allFunctions",
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
  },
});

// Action creators are generated for each case reducer function
export const { handleLoading, handleError } = counterSlice.actions;

export default counterSlice.reducer;
