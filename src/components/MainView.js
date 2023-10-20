import Slider from "./Slider";
import Header from "./Header";
import styles from "./css/MainView.module.css";
import DisplayBoard from "./DisplayBoard";

function MainView() {
  return (
    <div className={styles.view}>
      <div>
        <Header />
      </div>
      <div className={styles.display}>
        <DisplayBoard id={"126485"} />
      </div>
      <div className={styles.contentsView}>
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
