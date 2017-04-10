import React from "react";
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
  nickname: React.PropTypes.string.isRequired,
  points: React.PropTypes.array.isRequired,
  vote: React.PropTypes.func.isRequired
};

export default Hand;
