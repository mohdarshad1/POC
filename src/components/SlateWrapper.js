import React from "react";
import { ElementContainer } from "./ElementContainer";
import "./SlateWrapper.css"

export const SlateWrapper = () => {
    return <div>
        <div className="slatebox">
        <ElementContainer />
        <ElementContainer />
        </div>
    </div>
}