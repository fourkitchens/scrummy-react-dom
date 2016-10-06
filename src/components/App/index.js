import React from 'react';
import Logo from '../Logo';
import Readme from '../Readme';
import Footer from '../Footer';
import ClientVotes from '../../containers/ClientVotes';
import LoginForm from '../../containers/LoginForm';
import VoteOptions from '../../containers/VoteOptions';

const App = ({ signedIn }) => (
  <div>
    <Logo />
    {signedIn ?
      (<section>
        <ClientVotes />
        <VoteOptions />
      </section>) :
      (<section>
        <LoginForm />
        <Readme />
      </section>)}
    <Footer />
  </div>
);

App.propTypes = {
  signedIn: React.PropTypes.bool,
};

export default App;
