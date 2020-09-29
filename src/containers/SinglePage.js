import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FavList from "../components/FavList";

import Loader from "../components/Loader";

const SinglePage = ({ apiUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [subData, setSubData] = useState([]);
  const [itemType, setItemType] = useState("");

  const itemArr = [];

  const locationArr = window.location.pathname.split("/");
  locationArr.shift();
  const [pageType] = useState(locationArr[0]);

  useEffect(() => {
    let id = locationArr[1];
    const fetchData = async () => {
      const date = new Date();
      const timestamp = Math.floor(date.getTime() / 1000);

      let response = await axios.get(
        `${apiUrl}/${pageType}/${id}?ts=${timestamp}`
      );

      setData(response.data.data.results[0]);

      if (pageType === "character") {
        setItemType("comic");
        setSubData(response.data.data.results[0].comics.items);
        for (
          let i = 0;
          i < response.data.data.results[0].comics.items.length;
          i++
        ) {
          let URI = response.data.data.results[0].comics.items[i].resourceURI;
          let URIsplit = URI.split("/");
          let itemID = URIsplit.slice(-1)[0];
          let responseItem = await axios.get(
            `${apiUrl}/comic/${itemID}?ts=${timestamp}`
          );
          itemArr.push(responseItem.data.data.results[0]);
        }
        setSubData(itemArr);
      } else {
        setItemType("character");
        setSubData(response.data.data.results[0].characters.items);
        for (
          let i = 0;
          i < response.data.data.results[0].characters.items.length;
          i++
        ) {
          let URI =
            response.data.data.results[0].characters.items[i].resourceURI;
          let URIsplit = URI.split("/");
          let itemID = URIsplit.slice(-1)[0];
          let responseItem = await axios.get(
            `${apiUrl}/character/${itemID}?ts=${timestamp}`
          );
          itemArr.push(responseItem.data.data.results[0]);
        }
        setSubData(itemArr);
      }

      setIsLoading(false);

      // let pageName = response.data.data.results.name;
    };

    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="container">
            <div className="singlePage">
              <div className="singlePageImage">
                <img
                  src={data.thumbnail.path + "." + data.thumbnail.extension}
                  alt=""
                />
              </div>
              <div className="rightColumn">
                <div>
                  <h1 className="pageTitle">
                    {pageType === "comic" ? data.title : data.name}
                  </h1>
                  <p>{data.description}</p>
                </div>
                {subData.length === 0 ? (
                  ""
                ) : (
                  <div className="singlePageList">
                    <h2>
                      {pageType === "comic" ? "Character(s)" : "Comic(s)"}
                    </h2>
                    <FavList
                      data={subData}
                      favType={itemType + "s"}
                      apiUrl={apiUrl}
                    ></FavList>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default withRouter(SinglePage);
