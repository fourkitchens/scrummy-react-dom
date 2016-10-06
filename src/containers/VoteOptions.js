import { connect } from 'react-redux';
import Hand from '../components/Hand';

const mapStateToProps = (state) => ({
  points: state.game.points,
  nickname: state.game.nickname,
});

const VoteOptions = connect(mapStateToProps)(Hand);

export default VoteOptions;
