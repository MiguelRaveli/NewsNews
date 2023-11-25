import classes from "./Home.module.css";

import { useState, useEffect } from "react";

import { NewsType } from "../Types/NewsType";
import { WeatherType } from "../Types/WeatherType";
import Navbar from "../../Components/Navbar/Navbar";

import { getWeather } from "../../Gets/GetWeather";
import { getNewsPrime } from "../../Gets/GetNewsPrime";
import { getNews } from "../../Gets/GetNews";

import NewsPrime from "../../Components/NewsPrime/NewsPrime";
import Articles from "../../Components/Articles/Articles";
import Weather from "../../Components/Weather/Weather";
import { getSearch } from "../../Gets/GetSearch";

import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Home = () => {
  const [newsPrime, setNoticiasPrime] = useState<NewsType>();
  const [news, setNews] = useState<NewsType>();
  const [weather, setWeather] = useState<WeatherType>();
  const [searchTextResult, setSearchTextResult] = useState<NewsType>();
  const [searchByText, setSearchByText] = useState(String);
  const [HandlesearchByText, setHandleSearchByText] = useState(String);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    getNews(setNews);
    getWeather(setWeather);
    getNewsPrime(setNoticiasPrime);
  }, []);

  return (
    <>
      <Navbar key={Math.floor(Math.random() * 10000)} />
      <div className={classes.SearchBar}>
        <div className={classes.container_search}>
          <button
            className={classes.back_btn}
            onClick={() => {
              setIsSearch(false);
              setHandleSearchByText("");
            }}
          >
            {" "}
            <IoChevronBackCircleOutline key={1} />
          </button>
          <input
            type="text"
            placeholder="SEARCH"
            onChange={(e) => setSearchByText(e.target.value)}
          />{" "}
          <CiSearch
            style={{ color: "#1DA1F2" }}
            onClick={() => {
              searchByText !== ""
                ? (setIsSearch(true),
                  getSearch({
                    searchByText: searchByText,
                    setSearchTextResult,
                  }),
                  setHandleSearchByText(searchByText))
                : null;
            }}
          />
        </div>
      </div>
      {isSearch && HandlesearchByText !== "" ? (
        <>
          <div className={classes.Home}>
            <div className={classes.container_articles}>
              <Articles
                key={Math.floor(Math.random() * 10000)}
                noticias={searchTextResult!}
              />
            </div>
            <div className={classes.container_weather}>
              <Weather
                key={Math.floor(Math.random() * 10000)}
                weather={weather!}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={classes.principal}>
            <div className={classes.container_principal}>
              <div
                style={{
                  backgroundImage: `url(${newsPrime?.articles[19].urlToImage})`,
                }}
                className={classes.news_left}
              >
                <NewsPrime
                  key={Math.floor(Math.random() * 10000)}
                  index={19}
                  newsPrime={newsPrime!}
                />
              </div>
              <div className={classes.news_right}>
                <div
                  style={{
                    backgroundImage: `url(${newsPrime?.articles[15].urlToImage})`,
                  }}
                  className={classes.news_top}
                >
                  <NewsPrime
                    key={Math.floor(Math.random() * 10000)}
                    index={15}
                    newsPrime={newsPrime!}
                  />
                </div>
                <div
                  style={{
                    backgroundImage: `url(${newsPrime?.articles[5].urlToImage})`,
                  }}
                  className={classes.news_top}
                >
                  <NewsPrime
                    key={Math.floor(Math.random() * 10000)}
                    index={5}
                    newsPrime={newsPrime!}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.Home}>
            <div className={classes.container_articles}>
              <Articles
                key={Math.floor(Math.random() * 10000)}
                noticias={news!}
              />
            </div>
            <div className={classes.container_weather}>
              <Weather
                key={Math.floor(Math.random() * 10000)}
                weather={weather!}
              />
            </div>
          </div>
          <footer className={classes.svg}>
            <p>
              <FaCopyright />
              Created by Miguel Raveli
            </p>{" "}
            <Link to={"https://github.com/MiguelRaveli"} target="_blank">
              <FaGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/miguel-raveli-gusmao"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
