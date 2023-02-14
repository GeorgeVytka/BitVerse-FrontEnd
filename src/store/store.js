/* 
This creates a Redux store, and also automatically 
configure the Redux DevTools extension 
so that you can inspect the store while developing.
*/

import { configureStore } from "@reduxjs/toolkit";
import ArticlesSlice from "../features/api/ArticlesSlice";

export default configureStore({
  reducer: {
    GetArticles: ArticlesSlice,
  },
});
