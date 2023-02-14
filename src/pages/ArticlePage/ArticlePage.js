import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleBodyData } from "../../features/api/articlesActions";
import { Link, useParams } from "react-router-dom";
import { ArticleSlice } from "../../features/api/ArticlesSlice";

const ArticlePage = () => {
  let { id } = useParams();
  const article = useSelector((state) => state.GetArticles.articleBody);
  const loading = useSelector((state) => state.GetArticles.isLoading);
  const dispatch = useDispatch();
  // const { LLoading } = ArticleAction;

  useEffect(() => {
    dispatch(fetchArticleBodyData(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(ArticleSlice.actions.IsLoading(true));
    console.log(loading);
  }, []);
  return (
    <div>
      {false ? (
        <div>
          <div>{article.tags}</div>
          <div>
            <h1>{article.title}</h1>
          </div>
          <div>{article.quote}</div>
          <div>
            <img src={article.articleImgs[0]} />
          </div>

          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div>
            <p>l</p>
          </div>
        </div>
      ) : (
        <p>isLoading</p>
      )}
    </div>
  );
};

export default ArticlePage;
