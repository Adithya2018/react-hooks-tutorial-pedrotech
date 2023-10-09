import React, { useState } from "react";

const ReducerTutorial = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return (
        <div className="main">
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setShowText(!showText);
                }}
            >
                Click Here
            </button>
            {showText && <p>This is a text</p>}
        </div>
    );
};

export default ReducerTutorial;