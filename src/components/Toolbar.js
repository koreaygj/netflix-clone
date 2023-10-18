import styles from "./css/Toolbar.module.css";
import btnStyle from "./css/Button.module.css";
import searchIcon from "./images/search-icon.png";
import alarmIcon from "./images/alarm-icon.png";

function Toolbar() {
  return (
    <div className={`${styles.Toolbar}`}>
      <div>
        <button className={btnStyle.btn}>
          <img src={searchIcon} />
        </button>
      </div>
      <div>
        <button className={btnStyle.btn}>
          <img src={alarmIcon} />
        </button>
      </div>
      <div>
        <button className={btnStyle.btn}>
          <span> User </span>
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
