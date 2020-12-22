import React from 'react';
import PropTypes from 'prop-types';
import './statistic.css';

function Statistic({ good, neutral, bad, total }) {
  const countPositiveFeedbackPercentage = (totalFeed, goodFeed) => {
    const totalPositive = (goodFeed * 100) / totalFeed;
    return totalFeed === 0 ? 0 : Number.parseInt(totalPositive) + ' %';
  };

  return (
    <div>
      <ul className="statistic">
        <li className="item">
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>
            Positive Feedback: {countPositiveFeedbackPercentage(total, good)}
          </p>
        </li>
      </ul>
    </div>
  );
}

Statistic.prototype = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.string,
};

export default Statistic;
