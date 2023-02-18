import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleBodyData } from "../../features/api/articlesActions";
import { Link, useParams } from "react-router-dom";
import classes from "./ArticlePage.module.css";
import { colorTheme } from "../../ults/color";
import { ArticleSlice } from "../../features/api/ArticlesSlice";

const ArticlePage = () => {
  let { id } = useParams();
  const [tempLoading, setTempLoading] = useState(false);
  const article = useSelector((state) => state.GetArticles.articleBody);
  const loading = useSelector((state) => state.GetArticles.isLoading);
  const dispatch = useDispatch();
  // const { LLoading } = ArticleAction;

  useEffect(() => {
    dispatch(fetchArticleBodyData(id));
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {loading && article ? (
        <div>
          <div className={classes.bannerConatiner}>
            <div className={classes.tagContainer}>
              {article.tags.map((tag, index) => (
                <p key={index} className={classes.tag}>
                  {tag}
                </p>
              ))}
            </div>
            <div className={classes.titleContainer}>
              <h1>{article.title}</h1>
            </div>
            <div className={classes.quoteContainer}>"{article.quote}"</div>
            <div>
              <p className={classes.author}>
                By <span>{article.author}</span>
              </p>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={article.articleImgs[0]} />
          </div>

          <div className={classes.articleBody}>
            {article.body.map((paragraph, index) => (
              <div key={index}>
                {index == 3 ? (
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgContainer}
                      src={article.articleImgs[1]}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {index == 2 ? (
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgContainer}
                      src={article.articleImgs[2]}
                    />
                  </div>
                ) : (
                  <></>
                )}
                <p key={index}>{paragraph}</p>
              </div>
            ))}
          </div>
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
