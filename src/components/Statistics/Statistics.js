import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFedback }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad: {bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total: {total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback: {positiveFedback}%</p>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.bool.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFedback: PropTypes.number.isRequired,
  }),
};
