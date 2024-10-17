import React from 'react'
import { useState } from 'react';

const Cnt = () => {
    const [counter, setCounter] = useState(0);
    function handleIncreament() {
        setCounter(counter + 1);
    }
    function handleDecreament() {
        setCounter(counter - 1);
    }
    function resetCounter() {
        setCounter(0);
    }
    return (

        <div>
            <p>{counter}</p>
            <button onClick={handleIncreament}>Increment</button>
            <button onClick={handleDecreament}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>

    )
}

export default Cnt
