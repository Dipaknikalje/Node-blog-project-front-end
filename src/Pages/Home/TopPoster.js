import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopPoster = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-backend-blog-project-f5vv.onrender.com/api/data")
      .then((res) => {
        setData(res.data);
      });
  });
  return (
    <div>
      <div className="poster-file">
      {data
        .filter((val) => {
          return val.id === 1;
        })
        .map((value, index) => (
          <div key={index}>
            <div className="TopPoster__big">
              <Link to={`/article/${value.id}`} className="mainlink">
                <img src={value.Image} alt={"img not found"}  height="610px"/>
                <p>
                  <span>{value.title.slice(0, 30)}</span>
                </p>
              </Link>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default TopPoster;
