import React, { useState } from 'react';
import Section from './components/section/section';
import Statistic from './components/statistic/statistic';
import FeedbackBtn from './components/buttons/feedbackOptions';
import Notification from './components/notification/notification';
import './App.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  return (
    <div className="main">
      <h1 className="name">cafe 'Expresso'</h1>

      <Section title="Please leave feedback">
        <FeedbackBtn
          onGoodBtn={() => setGood(good + 1)}
          onNeutralBtn={() => setNeutral(neutral + 1)}
          onBadBtn={() => setBad(bad + 1)}
        />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
