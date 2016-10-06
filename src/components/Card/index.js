import React from 'react';
import classNames from 'classnames';

const Card = ({ value, selected, onVote }) => (
  <div className={classNames({ card: true, selected })} onClick={onVote}>
    <span className="card-text">{value}</span>
  </div>
);

Card.propTypes = {
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  onVote: React.PropTypes.func,
};

export default Card;
