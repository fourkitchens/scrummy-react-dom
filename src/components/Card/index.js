import React from 'react';
import './Card.scss';

const Card = ({ value, selected }) => (
  <div className={`card ${selected ? 'selected' : ''}`}>
    <span className="card-text">{value}</span>
  </div>
);

Card.propTypes = {
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
};

export default Card;
