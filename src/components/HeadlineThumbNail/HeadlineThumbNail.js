import React, { useState } from "react";
import classes from "./HeadlineThumbNail.module.css";
//"https://www.placecage.com/300/300"
const HeadlineThumbNail = (props) => {
  const [ArticleImg, SetArticleImg] = useState(
    "https://placekitten.com/440/360"
  );
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={props.thumbnail.img} />
      </div>
      <div className={classes.titleContainer}>
        <div className={classes.tag}>
          <p>{props.thumbnail.tag}</p>
        </div>
        <h2 className={classes.title}>{props.thumbnail.title}</h2>
        <p>{props.thumbnail.author}</p>
      </div>
    </div>
  );
};

export default HeadlineThumbNail;
