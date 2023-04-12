import React, { useState ,useContext} from "react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import "./index.css";
import AppContext from "../../context/AppContext";



const classNamesList = ["orange", "blue", "red", "green", "dark", "yellow"];

const Card = (props) => {
  const { cardDetails } = props;
 
  const {onChangeChannelId, onChangeVideoId} = useContext(AppContext)

  const  onUpdateChannelIdAndVideoId = () => {
  onChangeChannelId(channelId);
  onChangeVideoId(videoId);
  }

  // console.log(cardDetails);
  const { thumbnailUrl, videoId, title, channelId, channelTitle, publishedAt } =
    cardDetails;
  // https://www.youtube.com/watch?v=[vedio_id]_channel=[channel_id]

  // const videoPath = "https://youtu.be/BC9s_Zof_Xk"

  const distance = formatDistance(
    new Date(),
    new Date(publishedAt.split("T")[0])
  );

  //console.log(distance);

  const index = Math.ceil(Math.random() * classNamesList.length) - 1;

  return (
    <li className="card">
      <div className="card-image-container">
        <Link to="/videoplayer" onClick={onUpdateChannelIdAndVideoId}>
          <img src={thumbnailUrl} alt={videoId} className="card-image" />
        </Link>
      </div>

      <div className="card-details-container">
        <div
          className="card-details-logo-container"
          style={{ backgroundColor: classNamesList[index] }}
        >
          {channelTitle[0]}
        </div>
        <div className="card-details-para-container">
          <p className="card-title">{title}</p>
          <p className="card-date">{distance}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
