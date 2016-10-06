import { connect } from 'react-redux';
import { vote } from '../actions';
import Card from '../components/Card';

export const mapStateToProps = (state, ownProps) => ({
  selected: state.game.votes[state.game.nickname] &&
    state.game.votes[state.game.nickname] === ownProps.value,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onVote: () => {
    dispatch(vote(ownProps.value));
  },
});

const Vote = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default Vote;
