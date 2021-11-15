import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { Title } from './components/title'
import Objectives from './components/objectives'
import Timetable from './components/timetable'
import Description from './components/description'
import Readybox from './components/readybox'

const App: React.FunctionComponent<{}> = () => {

    const [activeDay, setActiveDay] = useState<Array<number>>([0, 0])
    const [activeWeek, setActiveWeek] = useState<number>(1)

    return (
        <div className="wrapper">
            <Title />
            <Timetable activeDay={activeDay} setActive={setActiveDay} activeWeek={activeWeek} setActiveWeek={setActiveWeek}/>
            <div className="lessoncontent">
                <Objectives activeDay={activeDay} activeWeek={activeWeek}/>
                <Description activeDay={activeDay} activeWeek={activeWeek}/>
                <Readybox activeDay={activeDay} activeWeek={activeWeek}/>
            </div>
        </div>
    );
}

render(<App />, document.getElementById('root'));