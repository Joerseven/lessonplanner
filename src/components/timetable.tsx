import React, { useState } from 'react';
import Timetableblock from './timetableblock';

export default () => {

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

    const [activeBlock, setActiveBlock] = useState([0, 0])
    const [activeWeek, setActiveWeek] = useState<number>(1)

    const changeActiveBlock = (block: Array<number>) => {
        setActiveBlock(block)
    }

    const days: Array<string> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

    return (
        <>
            <div className="tabs">
                <div className={"tab " + (activeWeek == 1 ? 'active' : '')} onClick={() => setActiveWeek(1)}>Week One</div>
                <div className={"tab " + (activeWeek == 2 ? 'active' : '')} onClick={() => setActiveWeek(2)}>Week Two</div>
            </div>
            <div className="timetable">
                {(activeWeek == 1 ? weekOneClasses : weekTwoClasses).map((day, rposition) => {
                    return (
                        <>
                            {day.map((group, cposition) => {
                                return <Timetableblock key={cposition} setActive={changeActiveBlock} active={rposition === activeBlock[0] && cposition == activeBlock[1]} group={group} cposition={cposition} rposition={rposition} />
                            })}
                        </>
                    )
                })}
            </div>
        </>
    )
}