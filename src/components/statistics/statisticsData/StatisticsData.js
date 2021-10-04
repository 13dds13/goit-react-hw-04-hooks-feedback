import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticalData.module.css';

const StatisticsData = ({
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <div className={styles.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>PositiveFeedback: {positive}%</p>
    </div>
  );
};

StatisticsData.propTypes = {
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default StatisticsData;
