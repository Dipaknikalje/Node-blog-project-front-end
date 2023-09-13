import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SmallPoster = () => {
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
                  width={250}
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
  );
};

export default SmallPoster;
