import React from "react";
import { colorTheme } from "../../ults/color";
import classes from "./ArticleThumbnail.module.css";
const ArticleThumbnail = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={props.thumbnail.img} />
      </div>
      <div className={classes.titleContainer}>
        <div
          className={classes.tag}
          style={{ backgroundColor: colorTheme.SECONDARY_COLOR }}
        >
          <p>{props.thumbnail.tag}</p>
        </div>
        <h2 className={classes.title}>{props.thumbnail.title}</h2>
        <p>
          By{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: colorTheme.TERTIARY_COLOR,
            }}
          >
            {props.thumbnail.author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
