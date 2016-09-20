import React from 'react';
import classNames from 'classnames';
import Client from '../Client';
import './VotingResult.scss';

const VotingResult = ({ nickname, gameLinkToggled, onReveal, onReset, onGameLinkToggle }) => (
  <section id="votingResult">
    <div id="votingActions">
      <input type="button" id="btnReveal" value="Reveal" onClick={onReveal}></input>
      <input type="button" id="btnReset" value="Reset" onClick={onReset}></input>
      <input
        type="button"
        id="btnLink"
        value="Game Link"
        className={classNames({ active: gameLinkToggled })}
        onClick={onGameLinkToggle}
      ></input>
      <div id="gameLink" className={classNames({ open: gameLinkToggled })}>
        <input type="text" id="txtUrl" value={window.location.href} readOnly></input>
      </div>
    </div>
    <Client nickname={nickname} />
  </section>
);

VotingResult.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  gameLinkToggled: React.PropTypes.bool.isRequired,
  onReveal: React.PropTypes.func.isRequired,
  onReset: React.PropTypes.func.isRequired,
  onGameLinkToggle: React.PropTypes.func.isRequired,
};

export default VotingResult;
