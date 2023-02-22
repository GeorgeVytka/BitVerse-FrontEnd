import { AuthorSlice } from "./AuthorSlice.js";

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
    } catch (error) {
      console.log("**", error);
    }
  };
};
