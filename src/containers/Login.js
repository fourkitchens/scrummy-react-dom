import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

export const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: evt => {
    dispatch(login(
      evt.target.querySelector('#txtNickname').value,
      evt.target.querySelector('#txtGame').value
    ));
  },
});

export default connect(null, mapDispatchToProps)(Login);
