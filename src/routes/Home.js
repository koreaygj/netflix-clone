import Slider from "../components/Slider";
import Menu from "../components/Header";
import DisplayBoard from "../components/DisplayBoard";
function Home() {
  return (
    <div>
      <section>
        <Menu />
      </section>
      <DisplayBoard id={"126485"} />
      {/*Slider props 재구성 필요*/}
      <Slider prop={"tv/top_rated?language=ko&page=1"} />
      <Slider prop={"tv/popular?language=ko&page=1"} />
      <Slider prop={"movie/top_rated?language=ko&page=1"} />
      <Slider
        prop={
          "discover/movie?include_adult=false&language=ko&page=1&sort_by=popularity.desc&without_genres=10749&with_origin_country=KR"
        }
      />
      <Slider
        prop={
          "discover/tv?include_adult=true&language=ko&page=1&sort_by=popularity.desc&with_origin_country=KR"
        }
      />
    </div>
  );
}

export default Home;
