import './Feedback.css';
import React from 'react';

function Feedback({ onChoose }) {

    return (
        <div>
            <ul>
                <li>
                    <button onClick={onChoose}>Good</button>
                </li>
                <li>
                    <button onClick={onChoose}>Neutral</button>
                </li>
                <li>
                    <button onClick={onChoose}>Bad</button>
                </li>
            </ul>
        </div>
        
    )
}

export default Feedback;