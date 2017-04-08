import React from "react";
import classNames from "classnames";

const Client = ({ nickname, revealed, vote }) => (
  <div
    className={classNames({
      client: true,
      voted: Boolean(vote),
      reveal: revealed
    })}
  >
    <div className="back">
      <div className="nickname">{nickname}</div>
    </div>
    <div className="front">
      <div className="nickname">{nickname}</div>
      <div className="vote-wrap">
        {revealed ? <span className="vote">{vote}</span> : <span />}
      </div>
    </div>
  </div>
);

Client.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  revealed: React.PropTypes.bool,
  vote: React.PropTypes.string
};

export default Client;
