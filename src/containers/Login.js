import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

export const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: event => {
    dispatch(login(
      event.target.querySelector('#txtNickname').value,
      event.target.querySelector('#txtGame').value
    ));
  },
});

export default connect(null, mapDispatchToProps)(Login);
