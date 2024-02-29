import React, { useState } from "react";

const UseStateExample = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const incrementCount = () => {
        setCurrentCount(currentCount + 1);
    };

    const decrementCount=()=>{
        setCurrentCount(currentCount-1);
    }
    const reset=()=>{
        setCurrentCount(0);
    }

    return (
        <>
            <h2>{currentCount}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default UseStateExample;
