import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-backend-blog-project-f5vv.onrender.com/api/data")
      .then((res) => {
        setData(res.data);
      });
  });
  return (
    <div className="main_common">
      <div className="TopPoster__div">
        {data
          .filter((val) => {
            return val.id === 1;
          })
          .map((value, index) => (
            <div key={index}>
              <div className="TopPoster__big">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img src={value.Image} alt={"img not found"} />
                  <p>
                    <span>{value.title.slice(0, 30)}</span>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        <div className="TopPoster__small">
          {data
            .filter((val) => {
              return val.id === 9;
            })
            .map((value, index) => (
              <div key={index}>
                <div className="TopPoster__small_upper">
                  <Link to={`/article/${value.id}`} className="mainlink">
                    <img
                      src={value.Image}
                      width={400}
                      height={245}
                      alt={"img not found"}
                    />
                    <p>
                      <span>{value.title.slice(0, 30)}</span>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          {data
            .filter((val) => {
              return val.id === 8;
            })
            .map((value, index) => (
              <div key={index}>
                <div className="TopPoster__small_smaller">
                  <Link to={`/article/${value.id}`} className="mainlink">
                    <img
                      src={value.Image}
                      width={400}
                      height={245}
                      alt={"img not found"}
                    />
                    <p>
                      <span>{value.title.slice(0, 30)}</span>
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h2 className="home_h1">Latest Travel stories...</h2>
      <div className="common_latest">
        {data
          .filter((val) => {
            return val.category === "travel";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2>{value.title.slice(0, 30)}</h2>
                  <p>{value.description.slice(0, 120)}....</p>
                  <br />
                  <h6>{value.category}/30/05/23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Articles...</h2>
      <div className="Category_div">
        <div className="left_Side_Of_Category">
          {data
            .filter((val) => {
              return val.subcat === "Technology";
            })
            .map((value, index) => (
              <div key={index}>
                <div className="child_data_left_Side_Of_Category">
                  <div className="description_div">
                    <Link to={`/article/${value.id}`} className="link_bolly">
                      <img
                        src={value.Image}
                        width={300}
                        height={300}
                        alt={"img not found"}
                      />

                      <div className="text-bolly">
                        <p className="bolly_title1">{value.title}</p>
                        <br />
                        <p id="desc">{value.description.slice(0, 120)}...</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            ))}
        </div>

        <div>
          <div className="home_add">
          </div>
        </div>
      </div>
      <h2 className="home_h1">Latest Stories </h2>
      <div className="common_latest">
        {data
          .filter((val) => {
            return val.subcat === "Fitness";
          })
          .map((value, index) => (
            <div key={index}>
              <div className="box1">
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2>{value.title.slice(0, 30)}</h2>
                  <p>{value.description.slice(0, 120)}....</p>
                  <br />
                  <h6>{value.category}/30/05/23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
