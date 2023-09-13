import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DisplayIcon from "../Components/Footer/DisplayIcon";
import axios from "axios";
import "./Article.css";

function Article() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-backend-blog-project-f5vv.onrender.com/api/data")
      .then((res) => {
        setData(res.data);
      });
  });
  var { Id } = useParams();
  Id = +Id;
  var newCategory;
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === Id) {
      newCategory = data[i].category;
      break;
    }
  }
  return (
    <div>
  
      {data
        .filter((val) => val.id === Id)
        .map((value, index) => (
          <div key={index}>
            <div className="article_div">
              <div className="icon">
                <DisplayIcon />
              </div>
              <h1>{value.title}</h1>

              <div className="article_img">
                <img
                  src={value.Image}
                  alt="img not found"
                  width={400}
                  height={400}
                />
              </div>

              <div className="article_description">
                <p>{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      <h2 className="moreh2">More....</h2>
      <div className="article_more_div">
        {data
          .filter((val) => val.id !== Id && val.category === newCategory)
          .slice(0, 3)
          .map((value, index) => (
            <div key={index}>
              <div>
                <div>
                  <Link to={`/article/${value.id}`}>
                    <img
                      src={value.Image}
                      height={250}
                      width={250}
                      alt={"img not found"}
                    />
                  </Link>
                </div>
                <div>
                  <p>{value.description.slice(0, 120)}...</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Article;
