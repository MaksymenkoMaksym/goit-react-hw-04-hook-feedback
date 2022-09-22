import PropTypes from 'prop-types';
import { FeedbackListStyled, FeedbackItem } from './FeedbackList.styled';

export const Feedback = ({ list }) => {
  const feedbackList = list.map(el => (
    <FeedbackItem key={el}>{el}</FeedbackItem>
  ));
  return <FeedbackListStyled>{feedbackList}</FeedbackListStyled>;
};

Feedback.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
