import React, { useState } from "react"

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Adi");

    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    let onTextChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <br />
            <br />
            <input type="text" placeholder="enter something" onChange={onTextChange}/>
            <br />
            <br />
            <b>{inputValue}</b>
        </div>
    );
};

export default StateTutorial;