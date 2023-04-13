import { useState } from "react";
import "./index.css";
const Comment = (props) => {
  const { comment, addReply } = props;
  // console.log(comment);
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  // const inputEl = useRef(null);

  const renderComment = () => (
    <div className="comment-reply-item-container">
      <div className="replied-user-logo">M</div>
      <p className="c-text">{comment.display}</p>
      {!showReplyBox && (
        <button
          type="button"
          className="replied-comment-reply-btn"
          onClick={() => {
            setShowReplyBox(true);

            // This is to make the ref available
            // setTimeout(() => inputEl.current.focus());
          }}
        >
          reply
        </button>
      )}
    </div>
  );

  return (
    <li>
      {renderComment()}

      {/* {!showReplyBox && (
        <button
          type="button"
          className="ml-3 mr-3"
          onClick={() => {
            setShowReplyBox(true);

            // This is to make the ref available
            // setTimeout(() => inputEl.current.focus());
          }}
        >
          reply
        </button>
      )} */}
      {showReplyBox && (
        //   <button
        //       type="button"
        //       className="ml-3 mr-3"
        //       onClick={() => {
        //         setShowReplyBox(true);

        //         // This is to make the ref available
        //         //setTimeout(() => inputEl.current.focus());
        //       }}
        //     >
        //       r
        //     </button>
        <div className="reply-text-input-container">
          <div className="reply-user-logo-input-element-container">
            <div className="user-logo">M</div>
            <input
              type="text"
              placeholder="Add a reply..."
              value={replyText}
              className="reply-input-element"
              onChange={(e) => {
                setReplyText(e.target.value);
              }}
            />
          </div>
          <div className="reply-btns-container">
            <button
              className="cancel-btn"
              onClick={() => {
                setReplyText("");
                setShowReplyBox(false);
              }}
            >
              Cancel
            </button>
            <button
              className="reply-btn"
              onClick={() => {
                addReply(comment.id, replyText);
                setShowReplyBox(false);
                setReplyText("");
              }}
            >
              Reply
            </button>
          </div>
        </div>
      )}

      {comment.children.length > 0 && (
        <ul>
          {comment.children.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment}
              addReply={addReply}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Comment;
