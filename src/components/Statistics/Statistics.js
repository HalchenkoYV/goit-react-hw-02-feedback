import './Statistics.css';
import React from 'react';

function Statistics ({text} ) {
    const { good, neutral, bad } = text;
    const sum = good + neutral + bad;
    const pos = good / (good + neutral + bad) ;
    return (
        <div>
            <ul>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {sum}</p>   
                </li>
                <li>
                    <p>Positive feedback: {!pos?0:(pos*100).toFixed(0)}%</p>   
                </li>
            </ul>
        </div>
        
    )
}

export default Statistics;