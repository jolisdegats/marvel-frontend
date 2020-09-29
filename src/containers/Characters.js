import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Searchbar from "../components/Searchbar";
import ItemList from "../components/ItemList";
import Pagination from "../components/Pagination";

const Characters = ({ apiUrl, favArr, setFavArr }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalItems, setTotalItems] = useState(0);

  const [searchBar, setSearchBar] = useState("");

  const paginationLink = "/characters";
  const wording = "name";
  const favType = paginationLink.slice(1, paginationLink.length);

  // Création de la requête
  const limit = 100;
  let offset = Math.floor(limit * (page - 1));
  let urlToRequest = `${apiUrl}/${favType}`;
  const date = new Date();
  const timestamp = Math.floor(date.getTime() / 1000);
  let filters = "";

  if (searchBar.length === 0) {
    filters = `${urlToRequest}?ts=${timestamp}&limit=${limit}&offset=${offset}&orderBy=${wording}`;
  } else {
    filters = `${urlToRequest}?ts=${timestamp}&limit=${limit}&offset=${offset}&orderBy=${wording}&${wording}StartsWith=${searchBar}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(filters);
      setData(response.data.data.results);
      setIsLoading(false);
      setTotalItems(response.data.data.total);
    };

    fetchData();

    // eslint-disable-next-line
  }, [page, searchBar]);

  return (
    <main>
      <Searchbar searchBar={searchBar} setSearchBar={setSearchBar}></Searchbar>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <h1 className="pageTitle">Discover our {favType}</h1>
          <div className="container">
            <ItemList
              data={data}
              favType={favType}
              apiUrl={apiUrl}
              page={page}
            ></ItemList>

            <Pagination
              favType={favType}
              pageSize={limit}
              page={page}
              totalItems={totalItems}
              setPage={setPage}
            ></Pagination>
          </div>
        </>
      )}
    </main>
  );
};

export default Characters;
