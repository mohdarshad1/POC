import React from "react";
import Comment from "./Comment";
import TCMIcon from "./TCMIcon";
import "./RightPanel.css"

export const RightPanel = () => {
    return(
        <div className="right">
             <Comment />
             <TCMIcon />
        </div>
    );
}