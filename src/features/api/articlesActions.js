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

      dispatch(ArticleSlice.actions.Articles(articleData));
    } catch (error) {
      console.log("**", error);
    }
  };
};

export const fetchArticleBodyData = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/article/${id}`
      );

      return response.data[0];
    };

    try {
      const articleData = await fetchData();

      dispatch(ArticleSlice.actions.ArticleBody(articleData));
    } catch (error) {
      console.log("**", error);
    }
  };
};
