import styles from "./Navigation.module.css";
import btnStyle from "./Button.module.css";
import { useState } from "react";

function Navigation() {
  const [toggle, setToggle] = useState(true);
  const onClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={styles.navigation}>
      <div className={styles.menu}>
        <button className={btnStyle.btn}>
          <span>홈</span>
        </button>
      </div>
      <div className={styles.menu}>
        <button className={btnStyle.btn}>
          <span>TV 프로그램</span>
        </button>
      </div>
      <div className={styles.menu}>
        <button className={btnStyle.btn}>
          <span>영화</span>
        </button>
      </div>
      <div className={styles.menu}>
        <button className={btnStyle.btn}>
          <span>내가 찜한 콘텐츠</span>
        </button>
      </div>
      <div className={styles.toggleMenu}>
        <button className={btnStyle.btn} onClick={onClick}>
          <span>메뉴</span>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
