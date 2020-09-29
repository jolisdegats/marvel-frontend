import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Pagination = ({ setPage, page, totalItems, pageSize, favType }) => {
  const [arrPagesNumber, setarrPagesNumber] = useState([]);

  const lastPageIndex = Math.floor(totalItems / pageSize + 1);
  const firstPageIndex = 1;

  const pageLink = `/${favType}`;

  useEffect(() => {
    const pagesToDisplay = [];
    for (let i = 1; i < lastPageIndex + 1; i++) {
      pagesToDisplay.push(i);
    }

    if (lastPageIndex <= 9) {
      setarrPagesNumber(pagesToDisplay);
    } else {
      if (page === 1) {
        setarrPagesNumber([3, 4, 5, 6, 7]);
      } else if (page <= firstPageIndex + 4) {
        setarrPagesNumber(
          pagesToDisplay.slice(firstPageIndex + 1, firstPageIndex + 6)
        );
      } else if (page >= lastPageIndex - 4) {
        setarrPagesNumber(
          pagesToDisplay.slice(lastPageIndex - 6, lastPageIndex - 2)
        );
      } else {
        setarrPagesNumber(pagesToDisplay.slice(page - 3, page + 2));
      }
    }
  }, [page, lastPageIndex]);

  const arrow = (str) => {
    let pageArrowIndex = 0;
    let calc = 0;
    let symbol = "";
    if (str === "left") {
      pageArrowIndex = firstPageIndex;
      calc = page - 1;
      symbol = "<";
    } else {
      pageArrowIndex = lastPageIndex;
      calc = page + 1;
      symbol = ">";
    }

    return (
      <div
        className={"arrows " + (page === pageArrowIndex ? "linkDisabled" : "")}
      >
        <Link to={pageLink} onClick={() => setPage(calc)}>
          {symbol}
        </Link>
      </div>
    );
  };

  return (
    <nav className="pagination">
      {arrow("left")}
      {lastPageIndex <= 9 ? (
        <div className="paginationNumbersBloc">
          {arrPagesNumber.map((item, index) => {
            return (
              <div key={item}>
                <Link to={pageLink} onClick={() => setPage(item)}>
                  <div
                    className={
                      item === page ? "pageNumber pageFocus" : "pageNumber"
                    }
                  >
                    {item}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="paginationNumbersBloc">
          <Link to={pageLink} onClick={() => setPage(firstPageIndex)}>
            <div
              className={
                page === firstPageIndex ? "pageNumber pageFocus" : "pageNumber"
              }
            >
              {firstPageIndex}
            </div>
          </Link>
          {page <= firstPageIndex + 4 ? (
            <Link to={pageLink} onClick={() => setPage(firstPageIndex + 1)}>
              <div
                className={
                  page === firstPageIndex + 1
                    ? "pageNumber pageFocus"
                    : "pageNumber"
                }
              >
                {firstPageIndex + 1}
              </div>
            </Link>
          ) : (
            <Link to={pageLink} onClick={() => setPage(page - 5)}>
              <div className="pageNumber">...</div>
            </Link>
          )}

          {arrPagesNumber.map((item, index) => {
            return (
              <div key={item}>
                <Link to={pageLink} onClick={() => setPage(item)}>
                  <div
                    className={
                      item === page ? "pageNumber pageFocus" : "pageNumber"
                    }
                  >
                    {item}
                  </div>
                </Link>
              </div>
            );
          })}
          {page >= lastPageIndex - 4 ? (
            <Link to={pageLink} onClick={() => setPage(lastPageIndex - 1)}>
              <div
                className={
                  page === lastPageIndex - 1
                    ? "pageNumber pageFocus"
                    : "pageNumber"
                }
              >
                {lastPageIndex - 1}
              </div>
            </Link>
          ) : (
            <Link to={pageLink} onClick={() => setPage(page + 5)}>
              <div className="pageNumber">...</div>
            </Link>
          )}

          <Link to={pageLink} onClick={() => setPage(lastPageIndex)}>
            <div
              className={
                page === lastPageIndex ? "pageNumber pageFocus" : "pageNumber"
              }
            >
              {lastPageIndex}
            </div>
          </Link>
        </div>
      )}
      {arrow("right")}
    </nav>
  );
};

export default Pagination;
