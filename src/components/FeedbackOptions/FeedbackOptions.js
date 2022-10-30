import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackButton,
  FeedbackIconUp,
  FeedbackIconUpDown,
  FeedbackIconDown,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackList>
      <li>
        <FeedbackButton type="button" name="good" onClick={onLeaveFeedback}>
          Good
          <FeedbackIconUp />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" name="neutral" onClick={onLeaveFeedback}>
          Neutral <FeedbackIconUpDown />
        </FeedbackButton>
      </li>
      <li>
        <FeedbackButton type="button" name="bad" onClick={onLeaveFeedback}>
          Bad <FeedbackIconDown />
        </FeedbackButton>
      </li>
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  updateValue: PropTypes.func.isRequired,
};
