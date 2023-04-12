import "./index.css"
 


const classNamesList = ["orange", "blue", "red", "green", "dark", "yellow"];


const CommentItem = (props) => {
    const {commentDetails} = props
    const{userName,text} = commentDetails;
    const index = Math.ceil(Math.random() * classNamesList.length) - 1;
    
return(
<li className="comment-item-container">
    <div className="user-logo" style={{ backgroundColor: classNamesList[index] }} >
        <p>{userName[0]} </p>

    </div>
    <div>
    <p className="comment-username">{userName}</p>
    <p className="comment-text">{text}</p>
    </div>
    
</li>)
 }

 export default CommentItem;