import React from 'react';
import Vote from '../../containers/Vote';

const Hand = ({ nickname, points }) => (
  <section id="playersHand">
    <h2 id="nickname-display">{nickname}</h2>
    <div className="cards-wrap">
      {points.map((point, index) => <Vote key={index} value={point} />)}
    </div>
  </section>
);

Hand.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  points: React.PropTypes.array.isRequired,
};

export default Hand;
