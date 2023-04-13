import { useState } from "react";
// import { debounce } from "./utils";
import Comment from "../Comment";
import "./index.css";

const Comments = () => {
  const [commentText, setCommentText] = useState("");
  let [comments, setComments] = useState([
    {
      id: 1,
      display: "c1",
      children: [
        {
          id: 2,
          display: "c11",
          children: [],
        },
        {
          id: 3,
          display: "c12",
          children: [],
        },
      ],
    },
  ]);
  const newComment = (text) => ({
    id: new Date().getTime(),
    display: text,
    children: [],
  });

  const changeCommentsList = () => {
    setComments([newComment(commentText), ...comments]);
  };

  const insertComment = (comments, parentId, text) => {
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.id === parentId) {
        comment.children.unshift(newComment(text));
      }
    }

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      insertComment(comment.children, parentId, text);
    }
  };

  const addReply = (commentId, replyText) => {
    let commentsWithNewReply = [...comments];
    insertComment(commentsWithNewReply, commentId, replyText);
    setComments(commentsWithNewReply);
  };


  return (
    <div className="comments-main-container">
      <div className="comment-text-input-container">
        <div className="user-logo-input-element-container">
          <div className="user-logo">M</div>
          <input
            type="text"
            placeholder="Add Comment..."
            value={commentText}
            className="comment-input-element"
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
          />
        </div>
        <div className="comment-btns-container">
          <button className="cancel-btn" onClick={() => setCommentText("")}>
            Cancel
          </button>
          <button className="comment-btn" onClick={changeCommentsList}>
            Comment
          </button>
        </div>
      </div>

      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
