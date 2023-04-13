import ReactPlayer from "react-player";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
//import CommentItem from "../CommentItem";
import Header from "../Header";
import Comments from "../Comments";
import "./index.css";

const VideoPlayer = () => {
 
  const { videoId, channelId } = useContext(AppContext);
  const videoURL = `https://www.youtube.com/watch?v=${videoId}_channel=${channelId}`;

 
  return (
    <div className="video-container">
      <Header />
      <div className="responsive-container">
        <ReactPlayer url={videoURL} height={"400px"} width={"60vw"} />
      </div>

      <h1 className="comments-heading">Comments:</h1>
      { <Comments /> }
    </div>
  );
};

export default VideoPlayer;
