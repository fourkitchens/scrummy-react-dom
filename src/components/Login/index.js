import React from "react";
import PropTypes from "prop-types";

const Login = (
  { welcomeText, nickname, game, onPlayClick, onWatchClick, onChangeGameName }
) => (
  <section id="login" className="signin-form">
    <h2>{welcomeText}</h2>
    <div id="loginActions">
      <form>
        <input
          type="text"
          id="txtNickname"
          placeholder="Nickname?"
          defaultValue={nickname}
        />
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
  welcomeText: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  game: PropTypes.string,
  onPlayClick: PropTypes.func.isRequired,
  onWatchClick: PropTypes.func.isRequired,
  onChangeGameName: PropTypes.func.isRequired
};

export default Login;
