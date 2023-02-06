import React from "react";
import HeadlineThumbNail from "../../components/HeadlineThumbNail/HeadlineThumbNail";

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

  return (
    <>
      {tempArry.map((article) => (
        <HeadlineThumbNail thumbnail={article} />
      ))}
    </>
  );
};

export default HomePage;
