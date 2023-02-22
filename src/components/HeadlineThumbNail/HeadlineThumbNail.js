import React, { useState, useEffect } from "react";
import { useNavigate, redirect, Link } from "react-router-dom";
import classes from "./HeadlineThumbNail.module.css";
import { colorTheme } from "../../ults/color";
//"https://www.placecage.com/300/300"
const HeadlineThumbNail = (props) => {
  const [ArticleImg, SetArticleImg] = useState(
    "https://placekitten.com/440/360"
  );
  let navigate = useNavigate();
  return (
    <>
      <Link to={`/article/${props.thumbnail.ID}`}>
        <div className={classes.container}>
          <div className={classes.imgContainer}>
            <img src={props.thumbnail.thumbnailImg} />
          </div>
          <div className={classes.titleContainer}>
            <div
              className={classes.tag}
              style={{ backgroundColor: colorTheme.SECONDARY_COLOR }}
            >
              <p>{props.thumbnail.tags[0]}</p>
            </div>
            <h2 className={classes.title}>{props.thumbnail.title}</h2>
            <p>
              By{" "}
              <Link
                to={`/author/${props.thumbnail.author}`}
                style={{
                  textDecoration: "none",
                  color: colorTheme.TERTIARY_COLOR,
                }}
              >
                {props.thumbnail.author}
              </Link>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HeadlineThumbNail;
