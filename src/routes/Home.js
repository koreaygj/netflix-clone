import Slider from "../components/Slider";
import Menu from "../components/Header";
import DisplayBoard from "../components/DisplayBoard";
function Home() {
  return (
    <div>
      <div>
        <DisplayBoard id={"126485"} />
      </div>
      <header>
        <Menu />
      </header>
      {/*Slider props 재구성 필요*/}
      <div>
        <div>
          <Slider prop={"tv/top_rated?language=ko&page=1"} />
        </div>
        <div>
          <Slider prop={"tv/popular?language=ko&page=1"} />
        </div>
        <div>
          <Slider prop={"movie/top_rated?language=ko&page=1"} />
        </div>
        <div>
          <Slider
            prop={
              "discover/movie?include_adult=false&language=ko&page=1&sort_by=popularity.desc&without_genres=10749&with_origin_country=KR"
            }
          />
        </div>
        <div>
          <Slider
            prop={
              "discover/tv?include_adult=true&language=ko&page=1&sort_by=popularity.desc&with_origin_country=KR"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
