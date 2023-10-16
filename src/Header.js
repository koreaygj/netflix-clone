import logo from "./images/netflix-logo.png";
import styles from "./Header.module.css";
import searchIcon from "./images/search-icon.png";
import alarmIcon from "./images/alarm-icon.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} />
      <div>
        <ul className={styles.navigation}>
          <li>홈</li>
          <li>TV 프로그램</li>
          <li>영화</li>
          <li>신규 콘텐츠</li>
          <li>내가 찜한 콘텐츠</li>
        </ul>
      </div>
      <div>
        <ul className={styles.rightNavigation}>
          <li>
            <img src={searchIcon} />
          </li>
          <li>
            <img src={alarmIcon} />
          </li>
          <li>User image</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
