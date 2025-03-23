import React, { useState } from 'react';
import ChatInput from './ChatInput.astro';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>+</button>
            <p>{count}</p>
        </div>
    )
}