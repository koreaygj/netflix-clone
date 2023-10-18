import PropTypes from "prop-types";

function TVshow({ id, title, imgSrc }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${imgSrc}`} alt={title} />;
      <span>{`id: ${id}`}</span>
      <span>{`title: ${title}`}</span>
    </div>
  );
}
TVshow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
export default TVshow;
