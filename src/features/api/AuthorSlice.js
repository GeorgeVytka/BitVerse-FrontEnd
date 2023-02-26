import { createSlice } from "@reduxjs/toolkit";

export const AuthorSlice = createSlice({
  name: "article",
  initialState: {
    isLoading: false,
    author: [{}],
    article: {},
  },
  reducers: {
    Author(state, action) {
      state.author = action.payload;
    },
    IsLoading(state, action) {
      console.log("this is author slice::", state.isLoading);
      state.isLoading = action.payload;
    },
    Article(state, action) {
      state.article = action.payload;
    },
  },
});

export const AuthorAction = AuthorSlice.actions;
export default AuthorSlice.reducer;
