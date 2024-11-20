import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import { copyResult } from './components/Copyresult';

const DateDifferenceCalculator = () => {

  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');
  const [results, setResults] = useState({ days: '', months: '', years: '' });

  const calculateDifference = () => {
    const startDate = new Date(firstDate);
    const endDate = new Date(secondDate);

    if (!firstDate || !secondDate) {
      alert('Please select both dates.');
      return;
    }

    if (endDate < startDate) {
      alert('Oops! End date should be later than or equal to the start date.');
      return;
    }

    const diffInMs = endDate - startDate;

    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365.25);

    const remainingDaysAfterYears = totalDays % 365.25;

    const months = Math.floor(remainingDaysAfterYears / 30.4375);

    const remainingDays = Math.floor(remainingDaysAfterYears % 30.4375);

    setResults({
      days: `${totalDays} days`,
      months: `${months} months`,
      years: `${years} years ${remainingDays} days`,
    });

  };

  return (

    <div className="container">

      <div className="input-group">
        <label htmlFor="firstDate">Start Date:</label>
        <input type="date" id="firstDate" value={firstDate} onChange={(e) => setFirstDate(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="secondDate">End Date:</label>
        <input type="date" id="secondDate" value={secondDate} onChange={(e) => setSecondDate(e.target.value)} />
      </div>

      <button type="button" className="calculate-btn" onClick={calculateDifference}>Find Difference</button>

      <div className="results">
        {(!firstDate || !secondDate) ? (
          <p className="informative-message">Enter Start Date and End Date to see the results.</p>
        ) : (
          <>
            <Result text={results.days} onCopy={copyResult} />
            <Result text={results.months} onCopy={copyResult} />
            <Result text={results.years} onCopy={copyResult} />
          </>
        )}
      </div>
    </div>
  );
};

export default DateDifferenceCalculator;





