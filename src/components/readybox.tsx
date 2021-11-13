import React from "react";

export default () => {
    return (
        <div className="readybox">
            <h2>Checklist</h2>
            <div className="checktile">
                Forms Lesson Recap complete:
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark"></span>
            </div>
            <div className="checktile">
                Lesson Plan Complete:
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark"></span>
            </div>
        </div>
    )
}