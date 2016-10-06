import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  signedIn: state.ui.signedIn,
});

const Scrummy = connect(mapStateToProps)(App);

export default Scrummy;
