import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Requests from '../../Utils/requests';

const Banner = () => {
  const [movie,setMovie]=useState({});
  console.log()
  useEffect(()=>{
    (async ()=>{
      try {
        const Request=await axios.get(Requests.fetchNetflixOriginals)
       setMovie(Request.data.results[
        Math.floor(Math.random() * Request.data.results.length)
       ]);
      } catch (error) {
        console.log("error",error);
      }
      
    })()
  },[]);

  return (
    <div 
   className="banner"
   style={{
    backgroundSize:"cover",
    backgroundImage:`url('https://image.tmdb.org/t/p/original$(movie?backdrop_path)')`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat"
   }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            (movie?.title|| movie?.name || movie?.original_name )

          </h1>
          <div className="banner_buttons">
            <button className="banner-Button_play">play</button>
            <button className="banner_button">my list</button>

          </div>
          {/* <h1 className="banner_description">{truncate(movie?.overview,150)}</h1> */}
        </div>
        <div className="banner_fedeBottom"/>

    </div>
  )
}

export default Banner