import ReactPlayer from "react-player";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import CommentItem from "../CommentItem";
import Header from "../Header";
import "./index.css";

const commentsArray = [ 
    {   id:1,
        userName:"Ravi",
        text:"Hello World"
    },
    {   
        id:2,
        userName:"Raju",
        text:"Learngig Java"
        
    },
    {
     id:3,
     userName:"Ramu",
     text:"Learnig Spring Boot"
    }
]

 
const VideoPlayer = () => {
//   console.log(props);

const {videoId,channelId} = useContext(AppContext)
  const videoURL = `https://www.youtube.com/watch?v=${videoId}_channel=${channelId}`;
  return ( 
 
    <div className="video-container">
        <Header/>
         
      <div className="responsive-container">
        <ReactPlayer url={videoURL} height={"400px"} width={"60vw"} />
      </div>
      <ul className="comments-container">
      {commentsArray.map((eachItem) => <CommentItem key = {eachItem.id} commentDetails = {eachItem}/> )}
      </ul>
    </div>
     
  );
};

export default VideoPlayer;
