import { connect } from 'react-redux';
import Message from '../components/Message';

export const mapStateToProps = (state) => ({
  message: state.game.message,
  showError: state.ui.showError,
});


export default connect(mapStateToProps)(Message);
