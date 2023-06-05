import { ArticleSlice } from "./ArticlesSlice.js";

import axios from "axios";

export const fetchActiclesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/api/v1/articles");

      return response.data;
    };

    try {
      const articleData = await fetchData();
      console.log("*****************************", articleData);
      dispatch(ArticleSlice.actions.Articles(articleData));
    } catch (error) {
      console.log("**", error);
    }
  };
};

export const fetchArticleByTag = (tag) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        ` http://localhost:8080/api/v1/articles/${tag}`
      );
      console.log("this is the result::: ", response.data);

      return response.data;
    };

    try {
      const articleData = await fetchData();
      console.log("after DB call : ", articleData);
      dispatch(ArticleSlice.actions.ArticleTags(articleData));
      // dispatch(ArticleSlice.actions.Articles(articleData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchArticleBodyData = (id) => {
  console.log("where it starts--", id);

  return async (dispatch) => {
    dispatch(ArticleSlice.actions.IsLoading(false));
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/article/${id}`
      );

      return response.data[0];
    };

    try {
      const articleData = await fetchData();
      console.log("in actionsSS --", articleData);
      dispatch(ArticleSlice.actions.ArticleBody(articleData));
      dispatch(ArticleSlice.actions.IsLoading(true));
    } catch (error) {
      console.log("**", error);
    }
  };
};

export const updateViewCount = () => {};
