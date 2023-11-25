import { setTheSession } from "../../Sets/SetTheSession";
import classes from "./Articles.module.css";
import { NewsType } from "../../Pages/Types/NewsType";
import { Link } from "react-router-dom";
type noticia = {
  noticias: NewsType;
};
const Articles = ({ noticias }: noticia) => {
  return (
    <>
      <div>
        {" "}
        {noticias?.articles.map(
          (news, index: number) =>
            news.urlToImage && (
              <div className={classes.articles}>
                <div
                  className={classes.articles_image}
                  style={{
                    backgroundImage: `url(${news.urlToImage})`,
                  }}
                />
                <div className={classes.summary}>
                  <Link
                    onClick={() => setTheSession(index, noticias)}
                    to={`/news/${noticias?.articles[index].title}`}
                  >
                    <h1>{news.title ? news.title : ""}</h1>
                  </Link>
                  <h2>{news.description ? news.description : ""}</h2>
                  <h3>{`${news.publishedAt ? news.publishedAt : ""} - ${
                    news.author ? news.author : ""
                  }`}</h3>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Articles;
