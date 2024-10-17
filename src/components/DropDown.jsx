import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [options, setOptions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "...",
  ]);

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="dropdown position-relative"
    >
      <div className="d-flex bg-elements align-items-center gap-5 shadow p-3">
        <p className="m-0 dropdown-display rounded-2">{selectedRegion}</p>
        <RiArrowDownSLine
          style={{
            transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s ease-in-out",
          }}
        />
      </div>
      {toggleDropdown && (
        <ul className="dropdown-options position-absolute bg-elements mt-2 py-3 px-0 rounded-2">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setToggleDropdown(false);
                  setSelectedRegion(
                    option === "..." ? "Filter by Region" : option,
                  );
                  filterByRegion(option);
                }}
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
