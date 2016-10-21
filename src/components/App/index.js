import React from 'react';
import { connect } from 'react-redux';
import Logo from '../Logo';
import Readme from '../Readme';
import Footer from '../Footer';
import VotingResult from '../../containers/VotingResult';
import Login from '../../containers/Login';
import Hand from '../../containers/Hand';

const App = ({ signedIn }) => (
  <div>
    <Logo />
    {signedIn ?
      (<section>
        <VotingResult />
        <Hand />
      </section>) :
      (<section>
        <Login />
        <Readme />
      </section>)}
    <Footer />
  </div>
);

App.propTypes = {
  signedIn: React.PropTypes.bool,
};

export const mapStateToProps = (state) => ({
  signedIn: state.ui.signedIn,
});

export default connect(mapStateToProps)(App);
