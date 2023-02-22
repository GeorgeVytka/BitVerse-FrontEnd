import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthorSlice } from "../../features/api/AuthorSlice";
import { fetchAuthorData } from "../../features/api/authorActions";
import { Link, useParams } from "react-router-dom";

import { datereturn } from "../../ults/helper";
import classes from "./AuthorPage.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const AuthorPage = () => {
  const DUMMY_DATA = {
    Name: "Big Man",
    ProfilePic:
      "https://res.cloudinary.com/dmuj0ybjy/image/upload/v1676926503/Author/nuts%20for%20nuts/download_xvpmwy.jpg",
    Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elit mauris. Proin porta est rhoncus enim sollicitudin vestibulum. Pellentesque eu ligula vel augue sagittis hendrerit at placerat lorem. Praesent molestie tincidunt nibh, eu pulvinar ante elementum in. Aenean non efficitur metus, quis tristique purus. Etiam tempor dapibus odio nec blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt rutrum purus sed sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus fringilla nunc eu erat finibus, a luctus magna varius. Praesent justo tellus, pharetra a varius nec, tristique in massa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam ligula quis turpis fringilla dictum. Maecenas justo tortor,",
    Joined: "2023-02-20T21:08:33.205Z",
    Socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/officialbenshapiro/?hl=en",
      },
    ],
    Articles: ["1", "2", "3"],
  };
  let { name } = useParams();
  const author = useSelector((state) => state.GetAuthor.author);
  const loading = useSelector((state) => state.GetAuthor.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthorData(name));
    dispatch(AuthorSlice.actions.IsLoading(true));
    console.log("---", author);
  }, [dispatch]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <img className={classes.imgContainer} src={DUMMY_DATA.ProfilePic} />
        </div>
        <div className={classes.bannerContainer}>
          <h1 style={{ marginTop: "0px" }}>{DUMMY_DATA.Name}</h1>
          <div className={classes.infoContainer}>
            <span className={classes.textContainer}>
              Joined on:{" "}
              <span style={{ fontWeight: "bold" }}>
                {datereturn(DUMMY_DATA.Joined)}
              </span>
            </span>
            <div className={classes.textContainer2}>
              Posts:{" "}
              <span style={{ fontWeight: "bold" }}>
                {DUMMY_DATA.Articles.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.bioContainer}>
        <p>{DUMMY_DATA.Bio}</p>
      </div>

      <div className={classes.socailContainer}>
        <TwitterIcon /> <InstagramIcon />
      </div>

      <div className={classes.activityContainer}>
        <h2>Activity</h2>
      </div>
    </>
  );
};

export default AuthorPage;
