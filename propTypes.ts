import PropTypes from 'prop-types';

const ChoicePropType = PropTypes.shape({
  choice: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
});

const QuestionPropType = PropTypes.shape({
  question: PropTypes.string.isRequired,
  published_at: PropTypes.instanceOf(Date).isRequired,
  choices: PropTypes.arrayOf(ChoicePropType).isRequired,
  url: PropTypes.string.isRequired,
});

export { ChoicePropType, QuestionPropType };
