import React from 'react';

const Result = ({ text, onCopy }) => (
    <div className="result">
        <span>{text}</span>
        <button onClick={() => onCopy(text)}>Copy</button>
    </div>
);

export default Result;
