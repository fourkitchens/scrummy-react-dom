import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: evt => {
    dispatch(login(
      evt.target.querySelector('#txtNickname').value,
      evt.target.querySelector('#txtGame').value
    ));
  },
});

const Vote = connect(null, mapDispatchToProps)(Login);

export default Vote;
