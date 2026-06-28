import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
    },

    setTokenAndUser(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;

      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { logout, setTokenAndUser } = authSlice.actions;

export default authSlice.reducer;
