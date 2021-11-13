import React from 'react';

interface timetableProps {
    cposition: number;
    rposition: number;
    group: string;
    active?: boolean;
    setActive: (block:Array<number>) => void;
}

export default (props:timetableProps) => {

    const style = {
        gridColumnStart: props.cposition + 1,
        gridColumnEnd: props.cposition + 2,
        rowColumnStart: props.rposition + 1,
        rowColumnEnd: props.rposition + 2,
        borderWidth: "1px",
        margin: "0px"
    }

    if (props.active) {
        style.borderWidth = "3px"
        style.margin = "-2px"
    }


    return(
        <div className="timetableblock" style={style} onClick={() => props.setActive([props.rposition, props.cposition])}>
            <div className="timetableclass">{props.group}</div>
            <div className="timetabledetails">
                <span className="timetablesubject">
                    IT
                </span>
                <span className="timetableroom">
                    D1
                </span>
            </div>
        </div>
    );
}