import { AuthorSlice } from "./AuthorSlice.js";
import { ArticleSlice } from "./ArticlesSlice.js";
import axios from "axios";

export const fetchAuthorData = (name) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        ` http://localhost:8080/api/v1/author/info/${name}`
      );

      return response.data;
    };

    try {
      const AuthorData = await fetchData();

      dispatch(AuthorSlice.actions.Author(AuthorData));
      dispatch(ArticleSlice.actions.IsLoading(true));
    } catch (error) {
      console.log("**", error);
    }
  };
};

export const fetchArticleByTag = (author) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `  http://localhost:8080/api/v1/author/articles`,
        { author: author }
      );
      console.log("this is the result::: ", response.data);

      return response.data;
    };

    try {
      const articleData = await fetchData();

      dispatch(ArticleSlice.actions.Articles(articleData));
      dispatch(ArticleSlice.actions.IsLoading(true));
    } catch (error) {
      console.log("**", error);
    }
  };
};

export const fetchArticleBodyData = (id) => {
  console.log("where it starts--", id);

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/article/${id}`
      );

      return response.data[0];
    };

    try {
      const articleData = await fetchData();
      console.log("in actionsSS --", articleData);

      dispatch(AuthorSlice.actions.Article(articleData));
      dispatch(AuthorSlice.actions.IsLoading(true));
    } catch (error) {
      console.log("**", error);
    }
  };
};
