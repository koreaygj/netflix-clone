import Slider from "./Slider";
import Header from "./Header";
import styles from "./css/MainView.module.css";
import DisplayBoard from "./DisplayBoard";
import { useState } from "react";

function MainView() {
  const [scroll, setScroll] = useState("false");
  return (
    <div className={styles.view}>
      <div>
        <Header />
      </div>
      <div className={styles.display} hidden={scroll ? false : true}>
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
        <div className={styles.slideView}>
          <Slider
            title={"현재 상영중인 영화"}
            discover={false}
            type={"movie"}
            language={"ko"}
            country={"KR"}
            listInfo={"now_playing"}
          />
        </div>
        <div className={styles.slideView}>
          <Slider
            title={"현재 방영중인 TV프로그램"}
            discover={false}
            type={"trending/tv"}
            language={"ko"}
            country={"KR"}
            listInfo={"day"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainView;
