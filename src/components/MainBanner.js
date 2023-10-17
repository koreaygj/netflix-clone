import { useState, useEffect } from "react";
import TVshow from "./TVshow";

function MainBanner() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const BaseURL =
    "https://api.themoviedb.org/3/tv/top_rated?language=KR&page=1";
  const option = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const getMovies = async () => {
    const json = await (await fetch(BaseURL, option)).json();
    setMovies(() => json.results);
    setLoading(false);
    console.log(json.results);
    console.log(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        movies.map((movie) => {
          console.log(movie.poster_path);
          return (
            <TVshow
              id={movie.id}
              title={movie.name}
              imgSrc={movie.poster_path}
            />
          );
        })
      )}
    </div>
  );
}

export default MainBanner;
