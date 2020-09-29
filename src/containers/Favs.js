import React, { useState, useEffect } from "react";
import axios from "axios";
// import Searchbar from "../components/Searchbar";
import FavList from "../components/FavList";
import Loader from "../components/Loader";

const Favs = ({ searchBar, apiUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [favComics, setFavComics] = useState([]);
  const [favCharacters, setFavCharacters] = useState([]);

  useEffect(() => {
    const getAllFavs = async () => {
      try {
        let allFavs;
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);
        searchBar === ""
          ? (allFavs = await axios.get(`${apiUrl}/favs?ts=${timestamp}`))
          : (allFavs = await axios.get(
              `${apiUrl}/favs?ts=${timestamp}&searchBar=${searchBar}`
            ));
        setFavComics(allFavs.data.comics);
        setFavCharacters(allFavs.data.characters);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getAllFavs();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {/* <Searchbar searchBar={searchBar} setSearchBar={setSearchBar}></Searchbar> */}
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <h1 className="pageTitle">My favs</h1>
          <div className="container">
            {favComics.length === 0 ? (
              ""
            ) : (
              <>
                <h2 className="favTitle">My comics</h2>
                <FavList
                  data={favComics}
                  favType="comics"
                  apiUrl={apiUrl}
                ></FavList>
              </>
            )}
            {favComics.length === 0 || favCharacters.length === 0 ? (
              ""
            ) : (
              <p className="favLine"></p>
            )}
            {favCharacters.length === 0 ? (
              ""
            ) : (
              <>
                <h2 className="favTitle">My characters</h2>
                <FavList
                  data={favCharacters}
                  favType="characters"
                  apiUrl={apiUrl}
                ></FavList>
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default Favs;
