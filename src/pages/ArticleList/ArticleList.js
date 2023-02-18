import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleByTag } from "../../features/api/articlesActions";
import { ArticleSlice } from "../../features/api/ArticlesSlice";
import { Link, useParams } from "react-router-dom";
import ArticleThumbnail from "../../components/ArticleThumbnail/ArticleThumbnail";
import classes from "./ArticleLists.module.css";

const ArticleList = () => {
  const article = useSelector((state) => state.GetArticles.articles);
  const loading = useSelector((state) => state.GetArticles.isLoading);
  const dispatch = useDispatch();
  let { tags } = useParams();
  useEffect(() => {
    dispatch(fetchArticleByTag(tags));
    dispatch(ArticleSlice.actions.IsLoading(true));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {loading && article ? (
        <div>
          <h1>{tags}</h1>
          {article.map((article, index) => (
            <ArticleThumbnail key={index} thumbnail={article} />
          ))}
        </div>
      ) : (
        <>Fsiled to load</>
      )}
    </div>
  );
};

export default ArticleList;
