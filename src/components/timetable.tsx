import React, { useState } from 'react';
import Timetableblock from './timetableblock';

interface timetableProps {
    activeDay: number[];
    setActive: (block:Array<number>) => void;
    activeWeek: number;
    setActiveWeek: (week: number) => void;
}

export default (props: timetableProps) => {

    const weekOneClasses: Array<Array<string>> = [
        ['102/It1', '9B/It1', '11A/It1', 'Non-contact', '11D/It1'],
        ['102/It1', '11D/It1', '103/It1', '8B/It3', 'Non-contact'],
        ['102/It1', 'Non-contact', 'Non-contact', '103/It1', 'Non-contact'],
        ['Non-contact', '9A/It1', '103/It1', '11A/It1', '9B/It3'],
        ['Non-contact', '100/It1', '8B/It3', '11A/It1', '11D/It1']
    ];

    const weekTwoClasses: Array<Array<string>> = [
        ['Non-contact', '8A/It1', 'Non-contact', '9B/It1', '102/It1'],
        ['102/It1', 'Non-contact', '8A/It1', 'Non-contact', '11A/It1'],
        ['102/It1', '11D/It1', 'Non-contact', '103/It1', '8A/It3'],
        ['8A/It3', 'Non-contact', '9A/It3', '11A/It1', '11D/It1'],
        ['Non-contact', '9B/It3', '103/It1', 'Non-contact', 'Non-contact']
    ]

    const days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    return (
        <>
            <div className="tabs">
                <div className={`tab${props.activeWeek === 1 ? ' active' : ''}`} onClick={() => props.setActiveWeek(1)}>Week One</div>
                <div className={`tab${props.activeWeek === 2 ? ' active' : ''}`} onClick={() => props.setActiveWeek(2)}>Week Two</div>
            </div>
            <div className="timetable">
                {(props.activeWeek === 1 ? weekOneClasses : weekTwoClasses).map((day, rposition) => {
                    return (
                        <>
                            {day.map((group, cposition) => {
                                return <Timetableblock key={"" + cposition + rposition} setActive={props.setActive} active={rposition === props.activeDay[0] && cposition === props.activeDay[1]} group={group} cposition={cposition} rposition={rposition} />
                            })}
                        </>
                    )
                })}
            </div>
        </>
    )
}