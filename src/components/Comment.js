import React from "react";
import CommentI from "./image/Comment.png"
import "./Comment.css"

const Comment = () => {
    return <div className="cmnt">
        <button><img src={CommentI} className="comment" /></button>
    </div>

}
export default Comment;