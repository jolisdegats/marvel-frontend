import React, { useState } from "react";
import { trimText } from "../functions/trimText";
import { Link, withRouter } from "react-router-dom";

import pictureNotFound from "../img/pictureNotFound.png";
import FavStar from "../components/FavStar";

var he = require("he");

const Item = ({ thumbnail, desc, ident, title, favType, apiUrl, page }) => {
  const [descOnHover, setDescOnHover] = useState("disabled");
  const [iconFavStatus, setIconFavStatus] = useState(false);

  const favTypeSing = favType.slice(0, favType.length - 1);

  // let idToHover = "";
  const showDesc = (event) => {
    // idToHover = event.target.getAttribute("data-hover");
    setDescOnHover("enabled");
  };

  const hideDesc = (event) => {
    // idToHover = "";
    setDescOnHover("disabled");
  };

  he.decode(title);
  title.replace("<br>", "");
  desc && (desc = he.decode(desc) && desc.replace("<br>", ""));

  thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" &&
    (thumbnail = pictureNotFound);

  return (
    <div
      className={
        "itemDiv " +
        (favType === "comics"
          ? "comicsItem"
          : favType === "characters"
          ? "charactersItem"
          : "otherItem")
      }
      key={ident}
    >
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          // backgroundSize: "contain",
          backgroundPosition: "center top",
          backgroundClip: "content-box",
          backgroundOrigin: "content-box",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <FavStar
          id={ident}
          title={title}
          favType={favType}
          setIconFavStatus={setIconFavStatus}
          iconFavStatus={iconFavStatus}
          page={page}
          apiUrl={apiUrl}
        ></FavStar>
        <Link
          to={`/${favTypeSing}/${ident}`}
          onMouseEnter={showDesc}
          onMouseLeave={hideDesc}
        >
          <div className="itemTextContent">
            <h2>{title}</h2>
            {desc && (
              <div className={"itemDesc " + descOnHover}>
                <span>{desc && trimText(desc, 100)}</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Item);
