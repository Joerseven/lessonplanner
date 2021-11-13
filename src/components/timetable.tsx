import React, { useState } from 'react';
import Timetableblock from './timetableblock';

export default () => {

    const [activeBlock, setActiveBlock] = useState([0, 0])

    const changeActiveBlock = (block:Array<number>) => {
        setActiveBlock(block)
    }

    const mondayClasses: Array<Array<string>> = [
        ['103/It1', '9B/It1', '11A/It1', 'Non-contact', '11D/It1'],
        ['102/It1', '11D/It1', '103/It1', '8B/It3', 'Non-contact'],
        ['102/It1', 'Non-contact', 'Non-contact', '103/It1', 'Non-contact'],
        ['Non-contact', '9A/It1', '103/It1', '11A/It1', '9B/It3'],
        ['Non-contact', '102/It1', '8B/It3', '11A/It1', '11D/It1']
    ];

    const days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    return (
        <div className="timetable">
            {mondayClasses.map((day, rposition) => {
                return (
                    <span key={rposition}>
                        {days[rposition]}
                        {day.map((group, cposition) => {
                            return <Timetableblock key={cposition} setActive={changeActiveBlock} active={rposition === activeBlock[0] && cposition == activeBlock[1]} group={group} cposition={cposition} rposition={rposition} />
                        })}
                    </span>
                )
            })}
        </div>
    )
}