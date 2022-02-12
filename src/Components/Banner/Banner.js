import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { TRENDING ,BANNER_IMAGE_URL} from "../../Constants/Constants";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      let response = await axios.get(TRENDING);
      let x = Math.floor((Math.random() * 19) + 1);
      let desc = response.data.results[x].overview
      if(desc.length > 170){
        response.data.results[x].overview = desc.slice(0,170)
      }
      setMovie(response.data.results[x]);
    })();
  }, []);
  const { original_title, overview ,backdrop_path} = movie;
  return (
    <div className="banner" style={{backgroundImage:`url(${movie ? BANNER_IMAGE_URL+backdrop_path : ""})`}}>
      <div className="content">
        <h1 className="title">{original_title}</h1>
        <div className="banner_buttons">
          <button className="button">play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{overview}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
