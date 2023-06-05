import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleByTag } from "../../features/api/articlesActions";
import { ArticleSlice } from "../../features/api/ArticlesSlice";
import { Link, useParams } from "react-router-dom";
import ArticleThumbnail from "../../components/ArticleThumbnail/ArticleThumbnail";
import classes from "./DramaArticles.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const DramaArticles = (props) => {
  const articles = useSelector((state) => state.GetArticles.articles);
  const tempArticles = useSelector((state) => state.GetArticles.articleByTags);
  const loading = useSelector((state) => state.GetArticles.isLoading);
  const dispatch = useDispatch();
  const { tags } = props;

  useEffect(() => {
    console.log("porps: ", props);
    dispatch(fetchArticleByTag("Drama"));
    console.log("this is map: ->", tempArticles);
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {articles.map((article, index) =>
        !articles.isHeadLine ? (
          <ArticleThumbnail key={index} thumbnail={article} />
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
};

export default DramaArticles;
/* 
article.map((article, index) =>
            !article.isHeadLine ? (
              <ArticleThumbnail key={index} thumbnail={article} />
            ) : (
              <div key={index}></div>
            )
          )*/
