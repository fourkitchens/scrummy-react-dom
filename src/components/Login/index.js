import React from 'react';

const Login = ({ onSubmitClick }) => (
  <section id="login" className="signin-form">
    <h2>Welcome! Start a new game.</h2>
    <div id="loginActions">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitClick(e);
        }}
      >
        <input type="text" id="txtNickname" placeholder="Nickname?" />
        <input type="text" id="txtGame" placeholder="New Game!" />
        <input type="submit" value="Play" id="btnSignIn" />
        <input type="submit" value="Watch" id="btnObserve" />
      </form>
    </div>
  </section>
);

Login.propTypes = {
  onSubmitClick: React.PropTypes.func.isRequired,
};

export default Login;
