import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    products: [],
    quantity: 0,
    currentUser: null,
    isDetching: false,
    error: false
  },
  reducers: {
      loginStart: (state)=>{
        state.isFetching = true
      },
      loginSuccess: (state, action)=>{
        state.isFetching = false;
        state.currentUser = action.payload
      },
      loginFailure: (state)=>{
        state.isFetching = false;
        state.error = true;

      },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;