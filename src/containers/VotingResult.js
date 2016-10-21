import { connect } from 'react-redux';
import { reveal, reset } from '../actions';
import VotingResult from '../components/VotingResult';

export const mapStateToProps = (state) => ({
  users: state.game.users,
  votes: state.game.votes,
  revealed: state.ui.revealed,
});

export const mapDispatchToProps = (dispatch) => ({
  onReveal: () => {
    dispatch(reveal());
  },
  onReset: () => {
    dispatch(reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingResult);
