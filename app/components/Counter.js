'use client';
import { useState } from 'react';

export default function Counter({ increment, color }) {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        const newCount = count + increment;

        if (newCount > 10) {
            setCount(0);
        } else {
            setCount(newCount);
        }
    }

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button
                onClick={handleIncrement}
                style={{ backgroundColor: color }}
            >
                Increment by {increment}
            </button>
        </div>
    );
}
