import React from 'react';

const Login = ({ welcomeText, nickname, game, onPlayClick, onWatchClick, onChangeGameName }) => (
  <section id="login" className="signin-form">
    <h2>{welcomeText}</h2>
    <div id="loginActions">
      <form>
        <input type="text" id="txtNickname" placeholder="Nickname?" defaultValue={nickname} />
        <input
          type="text"
          id="txtGame"
          placeholder="New Game!"
          defaultValue={game}
          onChange={onChangeGameName}
        />
        <input
          type="submit"
          value="Play"
          id="btnSignIn"
          onClick={e => {
            e.preventDefault();
            onPlayClick(e);
          }}
        />
        <input
          type="submit"
          value="Watch"
          id="btnObserve"
          onClick={e => {
            e.preventDefault();
            onWatchClick(e);
          }}
        />
      </form>
    </div>
  </section>
);

Login.propTypes = {
  welcomeText: React.PropTypes.string.isRequired,
  nickname: React.PropTypes.string,
  game: React.PropTypes.string,
  onPlayClick: React.PropTypes.func.isRequired,
  onWatchClick: React.PropTypes.func.isRequired,
  onChangeGameName: React.PropTypes.func.isRequired,
};

export default Login;
