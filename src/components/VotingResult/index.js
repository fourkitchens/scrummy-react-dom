import React from 'react';
import classNames from 'classnames';
import Client from '../Client';
import { selectText } from '../../lib/util';

const VotingResult = ({ users, votes, revealed, onReveal, onReset }) => (
  <section id="votingResult" className={classNames({ reveal: revealed })}>
    <div id="votingActions">
      <input type="button" id="btnReveal" value="Reveal" onClick={onReveal} />
      <input type="button" id="btnReset" value="Reset" onClick={onReset} />
      <div id="gameLink">
        <input type="text" id="txtUrl" value={window.location.href} onClick={selectText} readOnly />
      </div>
    </div>
    <div id="clients">
      {users.map((user, index) => {
        let client;
        if (revealed) {
          client = (<Client
            key={index}
            nickname={user.nickname}
            vote={votes[user.nickname]}
            revealed
          />);
        } else {
          client = (<Client
            key={index}
            nickname={user.nickname}
            vote={votes[user.nickname]}
          />);
        }
        return client;
      })}
    </div>
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
