import React from "react";
import classNames from "classnames";

const Card = ({ value, selected, vote }) => (
  <div className={classNames({ card: true, selected })} onClick={vote}>
    <span className="card-text">{value}</span>
  </div>
);

Card.propTypes = {
  value: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  vote: React.PropTypes.func
};

export default Card;
