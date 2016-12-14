import test from 'ava';
import { mapStateToProps } from '../../src/components/App';

test('Vote mapStateToProps true', t => {
  const state = {
    ui: { signedIn: true },
    game: {
      nickname: 'flip',
      votes: { flip: '5' },
      users: [{ nickname: 'flip', watch: true }],
    },
  };
  t.true(mapStateToProps(state).watching);
});
