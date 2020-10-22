import React from 'react';
import Title from './Title';

export default function Counter() {
    const [count, setcount] = sueState(0);
    function onClick() {
        setcount(count + 1); 
    }
    return (
        <div>
            <Title tile={`현재 카운트 : ${socunt}`} />
            <button onClick={onClick}>증가</button>
        </div>
    )
} 