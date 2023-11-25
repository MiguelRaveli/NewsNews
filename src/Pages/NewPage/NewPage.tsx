import Navbar from "../../Components/Navbar/Navbar";
import classes from "./NewPage.module.css";
import { useState } from "react";

import { useEffect } from "react";
const News = () => {
  const [title] = useState(sessionStorage.title);
  const [author] = useState(sessionStorage.author);
  const [publishedAt] = useState(sessionStorage.publishedAt);
  const [urlToImage] = useState(sessionStorage.urlToImage);
  const [description] = useState(sessionStorage.description);
  const [content] = useState(sessionStorage.content);
  useEffect(() => {}, []);
  return (
    <>
      {" "}
      <Navbar />
      <div className={classes.News}>
        <div className={classes.News_container}>
          <h1>{title}</h1>
          <span>{description}</span>
          <h2>By: {author}</h2>
          <div
            style={{ backgroundImage: `url(${urlToImage})` }}
            className={classes.News_img}
          ></div>
          <p>{publishedAt}</p>
          <div className={classes.content}>
            <span>{content}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
