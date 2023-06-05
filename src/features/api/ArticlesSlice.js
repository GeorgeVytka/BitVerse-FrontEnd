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
    articleByTags: [],
    headline: [],
    articleBody: [],
  },
  reducers: {
    Articles(state, action) {
      state.articles = action.payload.articles;
      state.headline = action.payload.headlines;
    },
    ArticleTags(state, action) {
      console.log("can i do htis here?", action.payload);
      state.articleByTags = action.payload;
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
