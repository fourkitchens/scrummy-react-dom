import React from 'react';
import Client from '../Client';

const VotingResult = ({ nickname, onReveal, onReset }) => (
  <section id="votingResult">
    <div id="votingActions">
      <input type="button" id="btnReveal" value="Reveal" onClick={onReveal} />
      <input type="button" id="btnReset" value="Reset" onClick={onReset} />
      <div id="gameLink">
        <input type="text" id="txtUrl" value={window.location.href} readOnly />
      </div>
    </div>
    <Client nickname={nickname} />
  </section>
);

VotingResult.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  onReveal: React.PropTypes.func.isRequired,
  onReset: React.PropTypes.func.isRequired,
};

export default VotingResult;
