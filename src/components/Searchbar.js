import React from "react";

const Searchbar = ({ searchBar, setSearchBar }) => {
  return (
    <div className="searchBar">
      <form>
        <input
          type="text"
          placeholder="looking for something?"
          value={searchBar}
          onChange={(event) => setSearchBar(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
