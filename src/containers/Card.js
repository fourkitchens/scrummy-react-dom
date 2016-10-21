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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
