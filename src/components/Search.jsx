import React from "react";
import DropDown from "./DropDown";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ filterByRegion, filterBySearch }) => {
  return (
    <div className="d-flex align-items-center justify-content-between bg-main-color custom-text-white search-con ">
      <form action="" className="position-relative first-con">
        <BiSearchAlt2 className="fs-2 position-absolute ms-5 search-icon" />
        <input
          onChange={(event) => {
            filterBySearch(event.target.value.toLowerCase());
          }}
          className="w-100 border-0 shadow py-3 rounded-2 bg-elements custom-text-white"
          type="text"
          placeholder="Search for a country..."
        />
      </form>

      <DropDown filterByRegion={filterByRegion} />
    </div>
  );
};

export default Search;
