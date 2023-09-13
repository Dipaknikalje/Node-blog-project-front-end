import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpperSposter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-backend-blog-project-f5vv.onrender.com/api/data")
      .then((res) => {
        setData(res.data);
      });
  });
  return (
    <>
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
    </>
  );
};

export default UpperSposter;
