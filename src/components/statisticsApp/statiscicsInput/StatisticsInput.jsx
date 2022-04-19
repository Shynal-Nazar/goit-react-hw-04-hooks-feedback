import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsInputList,
  StatisticsInputName,
  StatisticsInput,
  StatisticsInputBtn,
} from './StatisticsInput.styled';

const StatisticsInputSection = ({ options, onLeaveFeedback }) => (
  <StatisticsInput>
    <StatisticsInputName>Please leave feedbaack</StatisticsInputName>
    <StatisticsInputList>
      {options.map(item => (
        <StatisticsInputBtn
          key={item.title}
          type="button"
          onClick={onLeaveFeedback(item.onLeaveFeedbackKey)}
        >
          {item.title}
        </StatisticsInputBtn>
      ))}
    </StatisticsInputList>
  </StatisticsInput>
);

StatisticsInputSection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default StatisticsInputSection;
