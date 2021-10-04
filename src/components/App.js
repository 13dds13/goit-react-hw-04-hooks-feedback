import React, { useState } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

const INIT_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [state, setState] = useState({...INIT_STATE});

  const { good, neutral, bad } = state;

  const onBtnClick = evt => {
    const currentBtn = evt.target.name;
    setState(prev => ({ ...prev, [currentBtn]: state[currentBtn] + 1 }));
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <>
      <Section title={'Please leave Your feedback'}>
        <FeedbackOptions options={Object.keys(state)} onBtnClick={onBtnClick} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          msg={'No feedback given'}
        />
      </Section>
    </>
  );
};

export default App;
