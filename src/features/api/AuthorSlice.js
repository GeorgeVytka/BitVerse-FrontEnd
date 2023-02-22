import { createSlice } from "@reduxjs/toolkit";

export const AuthorSlice = createSlice({
  name: "article",
  initialState: {
    isLoading: false,
    author: [{}],
  },
  reducers: {
    Author(state, action) {
      state.author = action.payload;
    },
    IsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const AuthorAction = AuthorSlice.actions;
export default AuthorSlice.reducer;
