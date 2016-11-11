import { connect } from 'react-redux';
import Message from '../components/Message';

export const mapStateToProps = (state) => ({
  message: state.game.message,
  showMessage: state.ui.showMessage,
});

export default connect(mapStateToProps)(Message);
