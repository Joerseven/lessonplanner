import React from 'react';
import { render } from 'react-dom';
import { Title } from './components/title'
import Objectives from './components/objectives'
import Timetable from './components/timetable'
import Description from './components/description'
import Readybox from './components/readybox'

const App: React.FunctionComponent<{}> = () => (
    <div className="wrapper">
        <Title />
        <Timetable />
        <div className="lessoncontent">
            <Objectives/>
            <Description/>
            <Readybox/>
        </div>
    </div>
);

render(<App />, document.getElementById('root'));