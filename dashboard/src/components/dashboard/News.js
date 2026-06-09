import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

const News = () => {

  const [news,
    setNews] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:3002/marketNews"
      )
      .then((res) => {

        setNews(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <div className="news-page">

      <h2>
        Market News
      </h2>

      {
        news.length === 0
        ? (
          <h3>
            Loading News...
          </h3>
        )
        : (
          news.map(
            (item, index) => (

              <div
                key={index}
                className="news-card"
              >

                {
                  item.urlToImage &&
                  (
                    <img
                      src={item.urlToImage}
                      alt="news"
                      className="news-image"
                    />
                  )
                }

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.description}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More →
                </a>

              </div>

            )
          )
        )
      }

    </div>

  );

};

export default News;