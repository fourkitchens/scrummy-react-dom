import React from "react";
import PropTypes from "prop-types";
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
  nickname: PropTypes.string.isRequired,
  revealed: PropTypes.bool,
  vote: PropTypes.string
};

export default Client;
