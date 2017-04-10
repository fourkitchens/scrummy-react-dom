import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Card = ({ value, selected, vote }) => (
  <div className={classNames({ card: true, selected })} onClick={vote}>
    <span className="card-text">{value}</span>
  </div>
);

Card.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  vote: PropTypes.func
};

export default Card;
