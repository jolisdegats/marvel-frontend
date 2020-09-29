import React from "react";
import { withRouter } from "react-router-dom";

import Item from "../components/Item";

const FavList = ({ data, favType, apiUrl }) => {
  return (
    <div className="favList">
      {data.map((item, id) => {
        let thumbnail = item.thumbnail.path + "." + item.thumbnail.extension;
        let desc = item.description;
        let title = item.title || item.name;

        return (
          <Item
            thumbnail={thumbnail}
            desc={desc}
            title={title}
            ident={item.id}
            key={id}
            favType={favType}
            apiUrl={apiUrl}
          ></Item>
        );
      })}
    </div>
  );
};

export default withRouter(FavList);
