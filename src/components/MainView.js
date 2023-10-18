import Slider from "./Slider";
import Header from "./Header";
import styles from "./css/MainView.module.css";

function MainView() {
  return (
    <div className={styles.view}>
      <div>
        <Header />
      </div>
      <div className={styles.boardView}>
        <div className={styles.slideView}>
          <Slider
            theme={"최고평점 TV프로그램"}
            prop={"tv/top_rated?language=ko&page=1"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            theme={"인기있는 TV프로그램"}
            prop={"tv/popular?language=ko&page=1"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            theme={"최고평점 영화"}
            prop={"movie/top_rated?language=ko&page=1"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            theme={"한국에서 인기있는 영화"}
            prop={
              "discover/movie?include_adult=false&language=ko&page=1&sort_by=popularity.desc&without_genres=10749&with_origin_country=KR"
            }
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            theme={"한국에서 인기있는 TV프로그램"}
            prop={
              "discover/tv?include_adult=true&language=ko&page=1&sort_by=popularity.desc&with_origin_country=KR"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MainView;
