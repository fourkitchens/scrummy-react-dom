import { connect } from 'react-redux';
import Hand from '../components/Hand';

export const mapStateToProps = (state) => ({
  points: state.game.points,
  nickname: state.game.nickname,
});

export default connect(mapStateToProps)(Hand);
