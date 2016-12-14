import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import Readme from '../Readme';
import Footer from '../Footer';
import VotingResult from '../../containers/VotingResult';
import Login from '../../containers/Login';
import Hand from '../../containers/Hand';
import Message from '../../containers/Message';

const App = ({ signedIn, watching }) => (
  <div>
    <Logo />
    {signedIn ?
      (<section id="container">
        <VotingResult />
        {!watching ? <Hand /> : ''}
      </section>) :
      (<section id="container">
        <Login />
        <Readme />
      </section>)}
    <Footer />
    <Message />
  </div>
);

App.propTypes = {
  signedIn: React.PropTypes.bool,
  watching: React.PropTypes.bool,
};

export const mapStateToProps = (state) => ({
  signedIn: state.ui.signedIn,
  watching: state.game.users.some(user => user.watch && user.nickname === state.game.nickname),
});

export default connect(mapStateToProps)(App);
