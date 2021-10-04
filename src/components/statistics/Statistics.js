import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../notification/Notification';
import StatisticsData from './statisticsData/StatisticsData';

const Statistics = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
  msg,
}) => {
  const isAnyFeedback = countTotalFeedback();
  return isAnyFeedback ? (
    <StatisticsData
      good={good}
      neutral={neutral}
      bad={bad}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
    />
  ) : (
    <Notification msg={msg} />
  );
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
};

export default Statistics;
