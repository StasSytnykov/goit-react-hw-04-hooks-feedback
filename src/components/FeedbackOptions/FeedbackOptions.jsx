import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={style.feedbackThumb}>
    <button
      className={style.feedbackButton}
      type="button"
      onClick={() => onLeaveFeedback('good')}
    >
      Good
    </button>
    <button
      className={style.feedbackButton}
      type="button"
      onClick={() => onLeaveFeedback('neutral')}
    >
      Neutral
    </button>
    <button
      className={style.feedbackButton}
      type="button"
      onClick={() => onLeaveFeedback('bad')}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
