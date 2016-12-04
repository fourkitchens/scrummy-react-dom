import React from 'react';

const Login = ({ welcomeText, nickname, game, onSubmitClick, onChangeGameName }) => (
  <section id="login" className="signin-form">
    <h2>{welcomeText}</h2>
    <div id="loginActions">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitClick(e);
        }}
      >
        <input type="text" id="txtNickname" placeholder="Nickname?" defaultValue={nickname} />
        <input
          type="text"
          id="txtGame"
          placeholder="New Game!"
          defaultValue={game}
          onChange={onChangeGameName}
        />
        <input type="submit" value="Play" id="btnSignIn" />
        <input type="submit" value="Watch" id="btnObserve" />
      </form>
    </div>
  </section>
);

Login.propTypes = {
  welcomeText: React.PropTypes.string.isRequired,
  nickname: React.PropTypes.string,
  game: React.PropTypes.string,
  onSubmitClick: React.PropTypes.func.isRequired,
  onChangeGameName: React.PropTypes.func.isRequired,
};

export default Login;
