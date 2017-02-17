import messageTypes from '../actions/messageTypes';

export const game = (state = {}, action) => {
  switch (action.type) {
    case messageTypes.youSignedIn:
    case messageTypes.reset:
    case messageTypes.reveal:
    case messageTypes.someoneSignedIn:
    case messageTypes.someoneVoted:
    case messageTypes.clientRevoke:
    case messageTypes.clientDisconnect:
    case messageTypes.error:
    case 'setError':
    case 'changeGameName':
      return { ...state, ...action.data };
    case messageTypes.placeVote:
      return { ...state, votes: { [state.nickname]: action.value, ...state.votes } };
    default:
      return state;
  }
};
