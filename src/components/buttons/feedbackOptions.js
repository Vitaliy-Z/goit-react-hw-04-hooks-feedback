import React from 'react';
import PropTypes from 'prop-types';
import './feedbackOptions.css';

function FeedbackOptions({ onGoodBtn, onNeutralBtn, onBadBtn }) {
  return (
    <div>
      <ul className="buttons">
        <li className="item">
          <button className="btn" type="button" name="good" onClick={onGoodBtn}>
            good
          </button>
        </li>
        <li className="item">
          <button
            className="btn"
            type="button"
            name="neutral"
            onClick={onNeutralBtn}
          >
            neutral
          </button>
        </li>
        <li className="item">
          <button className="btn" type="button" name="bad" onClick={onBadBtn}>
            bad
          </button>
        </li>
      </ul>
    </div>
  );
}

FeedbackOptions.prototype = {
  setGoodFeedback: PropTypes.func,
  setNeutralFeedback: PropTypes.func,
  setBadFeedback: PropTypes.func,
};

export default FeedbackOptions;
