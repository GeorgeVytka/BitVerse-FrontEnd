import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleBodyData } from "../../features/api/authorActions";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import classes from "./AuthorArticlePage.module.css";
import { colorTheme } from "../../ults/color";
import { ArticleSlice } from "../../features/api/ArticlesSlice";
import { AuthorSlice } from "../../features/api/AuthorSlice";

const AuthorArticlePage = () => {
  let { id } = useParams();
  const [tempLoading, setTempLoading] = useState(false);
  const [article, setUsers] = useState();
  //  const article = useSelector((state) => state?.GetAuthor?.article);
  const loading = useSelector((state) => state.GetAuthor.isLoading);
  const dispatch = useDispatch();
  // const { LLoading } = ArticleAction;

  useEffect(() => {
    // dispatch(fetchArticleBodyData(id));

    const fetchData = async (id) => {
      let response = await axios.get(
        `http://localhost:8080/api/v1/article/${id}`
      );

      setUsers(response.data);
      //return response.data[0];
    };

    fetchData(id);
  }, [id]);

  return (
    <div className={classes.container}>
      {article !== undefined ? (
        <div>
          <div className={classes.bannerConatiner}>
            <div className={classes.tagContainer}>
              {article[0].tags.map((tag, index) => (
                <p key={index} className={classes.tag}>
                  {tag}
                </p>
              ))}
            </div>
            <div className={classes.titleContainer}>
              <h1>{article[0].title}</h1>
            </div>
            <div className={classes.quoteContainer}>"{article[0].quote}"</div>
            <div>
              <p className={classes.author}>
                By <span>{article[0].author}</span>
              </p>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={article[0].articleImgs[0]} />
          </div>

          <div className={classes.articleBody}>
            {article[0].body.map((paragraph, index) => (
              <div key={index}>
                {index == 3 ? (
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgContainer}
                      src={article[0].articleImgs[1]}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {index == 2 ? (
                  <div className={classes.imgContainer}>
                    <img
                      className={classes.imgContainer}
                      src={article[0].articleImgs[2]}
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

export default AuthorArticlePage;
