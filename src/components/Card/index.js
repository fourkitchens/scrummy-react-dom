import React from 'react';
import classNames from 'classnames';

const Card = ({ value, selected }) => (
  <div className={classNames({ card: true, selected })}>
    <span className="card-text">{value}</span>
  </div>
);

Card.propTypes = {
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
};

export default Card;
