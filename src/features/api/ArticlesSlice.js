import { createSlice } from "@reduxjs/toolkit";

// export const ArticleSlice = createSlice({
//   name: "articles",
//   initialState: {
//     articles: [],
//   },
//   reducers: {
//     getArticles(state, action) {
//       state.articles = action.payload;
//     },
//   },
// });

// export const articleAction = ArticleSlice.actions;

// export default ArticleSlice.reducers;

export const ArticleSlice = createSlice({
  name: "article",
  initialState: {
    isLoading: false,
    articles: [],
    articleBody: [],
  },
  reducers: {
    Articles(state, action) {
      state.articles = action.payload;
    },

    ArticleBody(state, action) {
      state.articleBody = action.payload;
    },
    IsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const ArticleAction = ArticleSlice.actions;
export default ArticleSlice.reducer;
