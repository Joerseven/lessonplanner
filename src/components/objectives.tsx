import React, { useState } from 'react';

import Objectivetile from './objectivetile';

export default () => {

    const [objectives, setObjectives] = useState<Array<string>>([])
    const [objectiveInput, setObjectiveInput] = useState<string>('');

    const addObjective = () => {
        if (objectiveInput != '') {
            const newArray: Array<string> = objectives.concat(`${objectiveInput}`)
            setObjectiveInput("");
            setObjectives(newArray);
        }
    }

    const removeObjective = (objective: string) => {
        setObjectives(objectives.filter(obj => obj !== objective))
    }

    return (
        <div className="objectives">
            <h2>Objectives</h2>
            <div className="objectivearea">
            <div className="objectiveinput">
                <textarea placeholder="Enter in your obectives here" value={objectiveInput} onChange={event => setObjectiveInput(event.target.value)}></textarea>
                <div className="objectivebutton" onClick={addObjective}>+</div>
            </div>
            {objectives.map(objective => <Objectivetile objectivevalue={objective} remove={removeObjective}></Objectivetile>)}
            </div>
        </div> 
    );
}