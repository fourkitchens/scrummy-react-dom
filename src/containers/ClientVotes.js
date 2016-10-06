import { connect } from 'react-redux';
import { reveal, reset } from '../actions';
import VotingResult from '../components/VotingResult';

const mapStateToProps = (state) => ({
  users: state.game.users,
  votes: state.game.votes,
  revealed: state.ui.revealed,
});

const mapDispatchToProps = (dispatch) => ({
  onReveal: () => {
    dispatch(reveal());
  },
  onReset: () => {
    dispatch(reset());
  },
});

const ClientVotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingResult);

export default ClientVotes;
