import messageTypes from '../actions/messageTypes';
import { omit, reject } from 'lodash';

export const game = (state = {}, action) => {
  switch (action.type) {
    case messageTypes.youSignedIn:
    case messageTypes.reset:
    case messageTypes.reveal:
    case messageTypes.someoneSignedIn:
    case messageTypes.someoneVoted:
    case messageTypes.error:
      return { ...state, ...action.data };
    case messageTypes.placeVote:
      return { ...state, votes: { [state.nickname]: action.value } };
    case messageTypes.clientDisconnect:
      return {
        ...state,
        users: reject(state.users, (value) => value.nickname === action.data.nickname),
      };
    case messageTypes.clientRevoke:
      return { ...state, votes: omit(state.votes, action.data.nickname) };
    default:
      return state;
  }
};
