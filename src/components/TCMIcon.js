import React from "react";
import TCMI from "./image/TCM.png"
import "./TCMIcon.css"

const TCMicon = () => {
    return <div>
        <button className="tcmbtn"><img src={TCMI} className="tcm" /></button>
    </div>

}
export default TCMicon;