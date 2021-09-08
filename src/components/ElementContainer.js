import React from "react";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";
import TinyMce from "./TinyMCE";
import "./ElementContainer.css";

export const ElementContainer = () => {
    return <div>
        <div className="root">
        <div>
            <LeftPanel />
        </div>
        <div>
            <TinyMce />
        </div>
        <div>
            <RightPanel />
        </div>
        </div>
        
    </div>
}