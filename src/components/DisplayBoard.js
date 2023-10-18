import { useEffect, useState } from "react";

function DisplayBoard({ id }) {
  const [videos, SetVideos] = useState([]);
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL = "https://api.themoviedb.org/3/";
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getRecommendMovies = async () => {
    const json = await (
      await fetch(
        `${BaseURL}tv/${id}/videos?include_video_language&language=ko`,
        option
      )
    ).json();
    SetVideos(() => {
      return json.results;
    });
    console.log(videos);
  };
  useEffect(() => {
    getRecommendMovies();
  }, []);
  return (
    <div className={area}>
      <iframe
        className={video}
        src="https://www.youtube.com/embed/UGvf8-m3S-c?autoplay=1&mute=1&controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default DisplayBoard;
