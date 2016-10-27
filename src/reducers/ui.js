import messageTypes from '../actions/messageTypes';

export const ui = (state = {}, action) => {
  switch (action.type) {
    case messageTypes.reveal:
      return { ...state, revealed: true };
    case messageTypes.reset:
      return { ...state, revealed: false };
    case messageTypes.youSignedIn:
      return { ...state, signedIn: true };
    case messageTypes.error:
      return { ...state, showError: true };
    case 'hideError':
      return { ...state, showError: false };
    default:
      return state;
  }
};
