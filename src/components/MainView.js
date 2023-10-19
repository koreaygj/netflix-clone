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
            title={"최고평점 TV프로그램"}
            discover={false}
            type={"tv"}
            language={"ko"}
            country={"KR"}
            listInfo={"top_rated"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            title={"인기있는 TV프로그램"}
            discover={false}
            type={"tv"}
            language={"ko"}
            country={"KR"}
            listInfo={"popular"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            title={"최고평점 영화"}
            discover={false}
            type={"movie"}
            language={"ko"}
            country={"KR"}
            listInfo={"top_rated"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            title={"한국에서 인기있는 영화"}
            discover={true}
            type={"movie"}
            language={"ko"}
            country={"KR"}
            sortBy={"popularity"}
            prop={
              "discover/movie?include_adult=false&language=ko&page=1&sort_by=popularity.desc&without_genres=10749&with_origin_country=KR"
            }
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            title={"한국에서 인기있는 TV프로그램"}
            discover={true}
            type={"tv"}
            language={"ko"}
            country={"KR"}
            sortBy={"popularity"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainView;
