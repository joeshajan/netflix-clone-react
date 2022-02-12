import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, BANNER_IMAGE_URL } from "../../Constants/Constants";


function RowPost(props) {
  const [generes, setGeneres] = useState([]);
  const [urlid,setUrlId] = useState('')

  console.log(props);
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        setGeneres(Response.data.results);
      })
      .catch((err) => alert("network err"));
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results[0]) {
        
        setUrlId(response.data.results[0].key)
      }
    })
  }
  return (
    
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {generes.map((data) => {
          if (data.backdrop_path) {
            return (
              <img
              onClick={()=>handleMovie(data.id)}
                id={data.id}
                className={props.isSmall ? "small-poster" : "poster"}
                src={BANNER_IMAGE_URL + data.backdrop_path}
                alt="poster"
              />
            )
          }
        })}
      </div>
      {urlid ? <Youtube videoId={urlid} opts={opts}/>:''}
      
    </div>
  );
}

export default RowPost;
