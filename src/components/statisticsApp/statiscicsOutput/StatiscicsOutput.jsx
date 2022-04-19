import React from 'react';
import PropTypes from 'prop-types';
import Nofeedback from '../noFeedback/Nofeedback';
import StatisticsView from '../statiscicsView/StatisticsView';

const StatisticsOutputSection = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.trunc((good * 100) / countTotalFeedback());

  return countTotalFeedback() === 0 ? (
    <Nofeedback />
  ) : (
    <StatisticsView
      good={good}
      neutral={neutral}
      bad={bad}
      total={countTotalFeedback}
      feedbackPercentage={countPositiveFeedbackPercentage}
    />
  );
};

StatisticsOutputSection.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default StatisticsOutputSection;
