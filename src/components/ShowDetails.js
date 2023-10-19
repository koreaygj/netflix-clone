import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import Styles from "./css/ShowDetail.module.css";

function ShowDetails({ type, id }) {
  const [details, setDetail] = useState();
  const BaseURL = "https://api.themoviedb.org/3/";
  const ACCESS_TOKEN = process.env.REACT_APP_MOVIE_TOKEN;
  const getDetails = useCallback(async () => {
    const URL = `${BaseURL}${type}/${id}?language=ko`;
    const option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    const json = await (
      await fetch(URL, option).catch((error) => {
        console.log(`Error!!!! : ${error}`);
      })
    ).json();
    setDetail(() => json);
    console.log(details.genres);
  }, []);
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      <div className={Styles.title}>
        <p>{type === "tv" ? details.name : details.title}</p>
      </div>
      <div>
        <p>{details.vote}</p>
      </div>
    </div>
  );
}

ShowDetails.prototype = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ShowDetails;
