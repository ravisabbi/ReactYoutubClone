import "./index.css"
 
const classNamesList = ["orange", "blue", "red", "green", "dark", "yellow"];

const ReplieItem = (props) => {
    const {replyDetails} = props
    const{userName,text} = replyDetails;
    const index = Math.ceil(Math.random() * classNamesList.length) - 1;
    
return(
<li className="reply-item-container">
    <div className="reply-user-logo" style={{ backgroundColor: classNamesList[index] }} >
        <p>{userName[0]} </p>
    </div>
    <div>
    <p className="reply-username">{userName}</p>
    <p className="reply-text">{text}</p>
    </div>
    
</li>)
 }

 export default  ReplieItem;