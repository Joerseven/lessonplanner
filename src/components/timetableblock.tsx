import React from 'react';

interface timetableProps {
    key: string;
    cposition: number;
    rposition: number;
    group: string;
    active?: boolean;
    setActive: (block:Array<number>) => void;
}

export default (props:timetableProps) => {

    const style = {
        gridColumnStart: props.rposition + 1,
        gridColumnEnd: props.rposition + 2,
        gridRowStart: props.cposition + 1,
        gridRowEnd: props.cposition + 2,
        margin: "0",
        backgroundColor: "white",
        borderColor: "white",
        borderStyle: "dashed",
        borderWidth: "0px",
        color: 'black'
    }

    if (props.group.includes("9")) {
        style.backgroundColor = "#ffb3b3"
        style.borderColor = "#ff6666"
    } 
    else if (props.group.includes("8")) {
        style.backgroundColor = "#ffc2b3"
        style.borderColor = "#ff8566"
    } 
    else if (props.group.includes("10")) {
        style.backgroundColor = "#ffffb3"
        style.borderColor = "#e1e100"
    }
    else if (props.group.includes("11")) {
        style.backgroundColor = "#ecffb3"
        style.borderColor = "#b9ee55"
    }
    else if (props.group.includes("Non-contact")) {
        style.backgroundColor = "#eeeeee"
        style.borderColor = "#cccccc"
        style.color = '#888888'
    }

    if (props.active) {
        style.borderWidth = "2px"
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