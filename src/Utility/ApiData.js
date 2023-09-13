import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ApiData = () => {
    const [data,setData]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8383/api/data')
        .then(res=>{
            setData(res.data)
            console.log(res.data)
        })
    })
  return (
    <div>
      <h2 className="home_h1">Latest Travel stories...</h2>
      <div className="common_latest">
        {data
          .filter((val) => {
            return val.category === "travel";
            
          })
          .map((value, index) => (
            <div key={index}>
              <div>
                <Link to={`/article/${value.id}`} className="mainlink">
                  <img
                    src={value.Image}
                    width={200}
                    height={200}
                    alt={"img not found"}
                  />

                  <h2>{value.title}</h2>
                  <p>{value.description.slice(0, 120)}....</p>
                  <br />
                  <h6>{value.category}/30/05/23</h6>
                </Link>
              </div>
            </div>
          ))}
      </div>

    </div>
  )
}

export default ApiData
