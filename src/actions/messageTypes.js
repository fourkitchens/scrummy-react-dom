export default [
  'placeVote',
  'signIn',
  'youSignedIn',
  'someoneSignedIn',
  'someoneVoted',
  'reveal',
  'reset',
  'clientRevoke',
  'revokeVote',
].reduce((accum, msg) => {
  const acc = accum;
  acc[msg] = msg;
  return acc;
}, {});
