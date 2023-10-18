import logo from "./images/netflix-logo.png";
import styles from "./css/Header.module.css";
import Navigation from "./Navigation";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <div>
      <header className={styles.container}>
        <img src={logo} className={styles.logo} />
        <Navigation />
        <Toolbar />
      </header>
    </div>
  );
}

export default Header;
