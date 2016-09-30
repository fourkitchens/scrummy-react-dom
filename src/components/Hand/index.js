import React from 'react';
import Card from '../Card';

const Hand = ({ nickname, points }) => (
  <section id="playersHand">
    <h2 id="nickname-display">{nickname}</h2>
    <div className="cards-wrap">
      {points.map((point, index) => <Card key={index} value={point} />)}
    </div>
  </section>
);

Hand.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  points: React.PropTypes.array.isRequired,
};

export default Hand;
