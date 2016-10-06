import React from 'react';
import Client from '../Client';

const VotingResult = ({ users, votes, revealed, onReveal, onReset }) => (
  <section id="votingResult">
    <div id="votingActions">
      <input type="button" id="btnReveal" value="Reveal" onClick={onReveal} />
      <input type="button" id="btnReset" value="Reset" onClick={onReset} />
      <div id="gameLink">
        <input type="text" id="txtUrl" value={window.location.href} readOnly />
      </div>
    </div>
    {users.map((user, index) => {
      let client;
      if (revealed) {
        client = (<Client
          key={index}
          nickname={user.nickname}
          vote={votes[user.nickname]}
        />);
      } else {
        client = (<Client
          key={index}
          nickname={user.nickname}
        />);
      }
      return client;
    })}
  </section>
);

VotingResult.propTypes = {
  users: React.PropTypes.array.isRequired,
  votes: React.PropTypes.object.isRequired,
  revealed: React.PropTypes.bool.isRequired,
  onReveal: React.PropTypes.func.isRequired,
  onReset: React.PropTypes.func.isRequired,
};

export default VotingResult;
