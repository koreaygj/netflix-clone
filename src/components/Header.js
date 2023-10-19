import logo from "../images/netflix-logo.png";
import styles from "./css/Header.module.css";
import Navigation from "./Navigation";
import Toolbar from "./Toolbar";
import DisplayBoard from "./DisplayBoard";

function Header() {
  return (
    <div>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <Navigation />
        <Toolbar />
      </div>
      <div className={styles.display}>
        <DisplayBoard id={"126485"} />
      </div>
    </div>
  );
}

export default Header;
