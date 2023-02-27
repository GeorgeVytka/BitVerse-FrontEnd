import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActiclesData } from "../../features/api/articlesActions";
import { Navigate, redirect } from "react-router-dom";
import { ArticleSlice } from "../../features/api/ArticlesSlice";
import HeadlineThumbNail from "../../components/HeadlineThumbNail/HeadlineThumbNail";
import ArticleThumbnail from "../../components/ArticleThumbnail/ArticleThumbnail";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const tempArry = [
    {
      img: "https://placekitten.com/440/360",
      tag: "Xbox",
      title: "Kitty Cat also cute",
      author: "Big Dog",
    },
    {
      img: "https://placekitten.com/440/360",
      tag: "Ps5",
      title: "Kitty Cat too Cute!!!",
      author: "Big Dog",
    },
    {
      img: "https://placekitten.com/440/360",
      tag: "Pc",
      title: "Cutie!!!",
      author: "Big Dog",
    },
  ];

  const tempArry2 = [
    {
      img: "https://placebeard.it/640x360 ",
      tag: "Pc",
      title: "This is an Article!!!",
      author: "Vibes",
    },
    {
      img: "https://placebeard.it/640x360 ",
      tag: "Pc",
      title: "This is an Article!!!",
      author: "Vibes",
    },
  ];
  const articleArry = [];

  const article = useSelector((state) => state.GetArticles.articles);
  const loading = useSelector((state) => state.GetArticles.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActiclesData());
    dispatch(ArticleSlice.actions.IsLoading(false));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.ArticleContainer}>
        <h1 className={classes.HeadLine}>Top News</h1>
        {console.log("-------------------", article)}
        <div className={classes.gridContainer}>
          {article.map((article, index) =>
            article.isHeadLine ? (
              <div className={classes.gridColSpan2}>
                <HeadlineThumbNail key={index} thumbnail={article} />
              </div>
            ) : (
              <div key={index}></div>
            )
          )}
        </div>
      </div>
      <div className={classes.HeadLineContainer}>
        <h2 className={classes.HeadLine}>More News</h2>
        <div className={classes.divider}></div>
      </div>

      <div>
        {article.map((article, index) =>
          !article.isHeadLine ? (
            <ArticleThumbnail key={index} thumbnail={article} />
          ) : (
            <div key={index}></div>
          )
        )}
      </div>
    </div>
  );
};
//<ArticleThumbnail key={index} thumbnail={article} />
export default HomePage;
