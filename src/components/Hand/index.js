import React from "react";
import PropTypes from "prop-types";
import Card from "../../containers/Card";

const Hand = ({ nickname, points, vote }) => (
  <section id="playersHand">
    <h2 id="nickname-display">{nickname}</h2>
    <div className="cards-wrap">
      {points.map((point, index) => (
        <Card key={index} value={point} vote={vote} />
      ))}
    </div>
  </section>
);

Hand.propTypes = {
  nickname: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  vote: PropTypes.func.isRequired
};

export default Hand;
