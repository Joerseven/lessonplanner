import React from "react";

interface proptypes {
    activeWeek: number;
    activeDay: number[];
}

export default (props:proptypes) => {
    return (
        <div className="descriptionblock">
            <h2>Notes</h2>
            <div className="editableblock" contentEditable="true">
                
            </div>
        </div>
    )
}