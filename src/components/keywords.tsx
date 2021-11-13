import React, { useState } from 'react';

export default () => {

    const [keywords, setKeywords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("Type keywords in here");

    const addKeyword = () => {
        if (inputValue != "") {
            let newArray: string[] = keywords.concat(`${inputValue}, `)
            setInputValue("");
            setKeywords(newArray);
        } 
    }

    return (
        <div className="keywords">
            Keywords: {keywords.map(keyword => <span>{keyword}</span>)}
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={addKeyword}>+</button>
        </div>
    )
}