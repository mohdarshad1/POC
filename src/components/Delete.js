import React from "react";
import DeleteI from "./image/Delete.png";
import "./Delete.css"

const Delete = () => {
    return <div>
        <button><img src= {DeleteI} className="delete" /></button>
    </div>

}
export default Delete;