import React from 'react';
import './Client.scss';

const Client = ({ nickname, vote }) => (
  <div className={`client ${vote ? 'voted' : ''}`}>
    <div className="back">
      <div className="nickname">{nickname}</div>
    </div>
    <div className="front">
      <div className="nickname">{nickname}</div>
      <div className="vote-wrap"><span className="vote">{vote}</span></div>
    </div>
  </div>
);

Client.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  vote: React.PropTypes.string,
};

export default Client;
