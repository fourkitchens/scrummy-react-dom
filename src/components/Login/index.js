import React from 'react';

const Login = ({ onSignIn, onWatch }) => (
  <section id="login" className="signin-form">
    <h2>Welcome! Start a new game.</h2>
    <div id="loginActions">
      <form>
        <input type="text" id="txtNickname" placeholder="Nickname?" />
        <input type="text" id="txtGame" placeholder="New Game!" />
        <input type="button" value="Play" id="btnSignIn" onClick={onSignIn} />
        <input type="button" value="Watch" id="btnObserve" onClick={onWatch} />
      </form>
    </div>
  </section>
);

Login.propTypes = {
  onSignIn: React.PropTypes.func.isRequired,
  onWatch: React.PropTypes.func.isRequired,
};

export default Login;
