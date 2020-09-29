import React, { useEffect } from "react";
import starIcon from "../img/starIcon.svg";
import axios from "axios";

const FavStar = ({
  id,
  iconFavStatus,
  title,
  setIconFavStatus,
  favType,
  apiUrl,
  page,
}) => {
  // CHECK IF ITEM ALREADY IN DB AND SETSTATE

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await axios.get(`${apiUrl}/favexists?idMarvel=${id}`);
        const data = response.data;
        data === true ? setIconFavStatus(true) : setIconFavStatus(false);
      } catch (err) {
        console.log(err);
      }
    };

    checkStatus();
    // eslint-disable-next-line
  }, [id, setIconFavStatus, page]);

  // ON CLICK ON STAR, ADD TO DB

  const addToFavs = async (id, favType) => {
    try {
      await axios.post(`${apiUrl}/favs/create`, {
        category: favType,
        item: {
          idMarvel: id,
          title: title,
        },
      });
      setIconFavStatus(true);
    } catch (err) {
      console.log(err);
    }
  };

  // IF ALREADY IN DB, REMOVE FROM DB ON CLICK

  const removeFromFavs = async (id) => {
    try {
      await axios.post(`${apiUrl}/favs/remove`, {
        idMarvel: id,
      });
      setIconFavStatus(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favStuff">
      <button
        className={iconFavStatus === false ? "iconFav" : "iconFavActive"}
        onClick={() =>
          iconFavStatus === false
            ? addToFavs(id, favType)
            : removeFromFavs(id, favType)
        }
      >
        <img src={starIcon} alt="" />
      </button>
    </div>
  );
};

export default FavStar;
