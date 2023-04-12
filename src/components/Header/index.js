import React,{useState,useContext} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import AppContext from "../../context/AppContext";
import "./index.css";

const Header = () => {
  const [searchValue,setSearchValue] = useState("");
  const {onChangeSearchInput} = useContext(AppContext)

  const onChangeInput = (event) => {
    
      setSearchValue(event.target.value);
  }
//console.log(searchValue.length);

const onClickSearchBtn = () => {
  onChangeSearchInput(searchValue);
}

if(searchValue === "") {
  onChangeSearchInput(searchValue)
}
  return (
          <div className="header-bg">
            <div className="youtube-container">
              <ImYoutube2 size={32} />
            </div>
            <div className="searchContainer">
              <input
                className="searchInput"
                type="search"
                value={searchValue}
                onChange={onChangeInput}
              />
              <button className="submitInput" onClick = {onClickSearchBtn}>
                <AiOutlineSearch />
              </button>
            </div>
            <div className="avatar-container">
              <RxAvatar size={32} />
            </div>
          </div>
        );
};

export default Header;
