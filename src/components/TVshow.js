import PropTypes from "prop-types";

function TVshow({ id, title, imgSrc }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200/${imgSrc}`} />
    </div>
  );
}
TVshow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
export default TVshow;
