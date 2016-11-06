export default [
  'placeVote',
  'signIn',
  'youSignedIn',
  'someoneSignedIn',
  'someoneVoted',
  'reveal',
  'reset',
  'clientRevoke',
  'clientDisconnect',
  'revokeVote',
  'error',
].reduce((accum, msg) => {
  const acc = accum;
  acc[msg] = msg;
  return acc;
}, {});
