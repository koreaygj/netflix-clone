import PropTypes from "prop-types";
import styles from "./css/ContentContainer.module.css";
import { useState } from "react";
import ShowDetails from "./ShowDetails";

function ContentContainer({ type, id, title, imgSrc }) {
  const [toggleInfo, SetToggleInfo] = useState(true);
  const onShowDetail = () => {
    SetToggleInfo((prev) => !prev);
  };
  const onHideDetail = () => {
    SetToggleInfo((prev) => !prev);
  };
  return (
    <div>
      <div
        className={styles.contentBox}
        onMouseEnter={onShowDetail}
        onMouseLeave={onHideDetail}
      >
        <div className={styles.contentPoster}>
          <img src={`https://image.tmdb.org/t/p/w200/${imgSrc}`} alt={title} />
        </div>
        <div className={styles.contentDetails} hidden={toggleInfo}>
          <h3>{title}</h3>
          {/*<ShowDetails type={type} id={id} />*/}
        </div>
      </div>
    </div>
  );
}
ContentContainer.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
export default ContentContainer;
