import React from "react";

interface objectiveProps {
    objectivevalue: string
    remove: (objective: string) => void
}

export default (props: React.PropsWithChildren<objectiveProps>) => {
    return (
        <div className="objectivetile">
            <div className="objectivetext">- {props.objectivevalue}</div>
            <div className="objectivebutton objectivetilebutton" onClick={() => props.remove(props.objectivevalue)}>-</div>
        </div>
    );
}