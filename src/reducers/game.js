import messageTypes from '../actions/messageTypes';
import { omit } from 'lodash';

export const game = (state = {}, action) => {
  switch (action.type) {
    case messageTypes.youSignedIn:
      return { ...state, ...action.data };
    case messageTypes.reset:
      return { ...state, ...action.data };
    case messageTypes.reveal:
      return { ...state, ...action.data };
    case messageTypes.someoneSignedIn:
      return { ...state, users: action.data.users };
    case messageTypes.placeVote:
      return { ...state, votes: { [state.nickname]: action.value } };
    case messageTypes.someoneVoted:
      return { ...state, votes: action.data.votes };
    case messageTypes.clientRevoke:
      return { ...state, votes: omit(state.votes, action.data.nickname) };
    default:
      return state;
  }
};
