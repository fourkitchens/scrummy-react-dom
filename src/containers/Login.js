import { connect } from 'react-redux';
import { login, changeGameName } from '../actions';
import Login from '../components/Login';

export const mapStateToProps = (state) => ({
  welcomeText: (() => {
    if (state.game.game) {
      if (state.ui.numPlayers > 0) {
        return [
          'Welcome!',
          state.ui.numPlayers,
          state.ui.numPlayers > 1 ? 'others are' : 'other is',
          'playing.',
        ].reduce((str, part) => (part ? `${str} ${part}` : str));
      }
      return `Welcome! "${state.game.game}" is a new game.`;
    }
    return 'Welcome! Start a new game.';
  })(),
  nickname: state.game.nickname,
  game: state.game.game,
});

export const mapDispatchToProps = (dispatch) => ({
  onSubmitClick: event => {
    dispatch(login(
      event.target.querySelector('#txtNickname').value,
      event.target.querySelector('#txtGame').value
    ));
  },
  onChangeGameName: event => {
    dispatch(changeGameName(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
