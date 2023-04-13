import React, { useState, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import AppContext from "../../context/AppContext";
import "./index.css";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const { searchInput, onChangeSearchInput, filteredTitleList } =
    useContext(AppContext);

  const [searchDropdown, setsearchDropdown] = useState(true);

  const [searchFilterList, setsearchFilterList] = useState([]);

  const sliceSearchList = searchFilterList.slice(0, 5);
  console.warn(sliceSearchList);

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
    setsearchDropdown(true);
    onChangeSearchInput(event.target.value);
    const resultList = filteredTitleList.filter((eachItem) => {
      return eachItem.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setsearchFilterList(resultList);
  };

  const onClickSearchBtn = () => {
    onChangeSearchInput(searchValue);
  };

  const SetSearchInput = (title) => {
    onChangeSearchInput(title);
    setsearchDropdown(false);
  };

  // if (searchValue === "") {
  //   onChangeSearchInput(searchValue);
  // }
  return (
    <div className="header-bg">
      <div className="youtube-container">
        <ImYoutube2 size={32} />
      </div>
      <div>
        <div className="searchContainer">
          <input
            className="searchInput"
            type="search"
            value={searchValue}
            onChange={onChangeInput}
          />
          <button className="submitInput" onClick={onClickSearchBtn}>
            <AiOutlineSearch />
          </button>
        </div>
        {searchInput !== "" && searchDropdown ? (
          <ul className="search-dropDown-container">
            {sliceSearchList.map((video) => (
              <>
                <li
                  onClick={() => SetSearchInput(video.title)}
                  className="video-item"
                >
                  * {video.title}
                </li>
              </>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="avatar-container">
        <RxAvatar size={32} />
      </div>
    </div>
  );
};

export default Header;