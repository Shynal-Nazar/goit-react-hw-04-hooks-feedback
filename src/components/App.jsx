import { useState } from 'react';
import StatisticsInputSection from './statisticsApp/statiscicsInput/StatisticsInput';
import StatisticsOutputSection from './statisticsApp/statiscicsOutput/StatiscicsOutput';
import { Container, StatisticsTitle } from './App.styled';

const options = [
  {
    title: 'Good',
    onLeaveFeedbackKey: 'good',
  },
  {
    title: 'Neutral',
    onLeaveFeedbackKey: 'neutral',
  },
  {
    title: 'Bad',
    onLeaveFeedbackKey: 'bad',
  },
];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = key => () => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <StatisticsTitle>Statistics of restaurant "Expresso"</StatisticsTitle>
      <StatisticsInputSection
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      />
      <StatisticsOutputSection good={good} neutral={neutral} bad={bad} />
    </Container>
  );
}
