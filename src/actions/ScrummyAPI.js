export default class ScrummyAPI {
  /**
 * constructor
 *   Creates a connection to the Scrummy API.
 * @return {undefined}
 */
  constructor(uri, store) {
    this.ws = new WebSocket(uri);
    this.ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.type === 'error') {
        this.dispatchErrorHide(store);
      } else if (data.type === 'youSignedIn') {
        this.setHash(data);
      }
      store.dispatch(data);
    };
    this.ws.onopen = () => {
      if (!!store.getState().game.game) {
        this.emit('getPlayerCount', { game: store.getState().game.game });
      }
    };
    window.onbeforeunload = () => {
      if (store.getState().game.game && store.getState().game.users.length) {
        this.emit('disconnect', {
          game: store.getState().game.game,
          nickname: store.getState().game.nickname,
        });
      }
    };
  }

  /**
   * emit
   *   Sends a message back to the Scrummy server.
   *
   * @param {String} type
   *   The message type to send.
   * @param {Object} data
   *   The data to send
   * @return {undefined}
   */
  emit(type, data) {
    this.ws.send(JSON.stringify({ type, data }));
  }

  /**
   * error
   *   Dispatches the error action and a delayed hideError action.
   *
   * @param {Object} store
   *   The redux store.
   * @param {number} [timeoutMs=3000]
   *   The amount of time in ms that the error should show before hiding.
   * @return {undefined}
   */
  dispatchErrorHide(store, timeoutMs = 3000) {
    setTimeout(() => store.dispatch({ type: 'hideError' }), timeoutMs);
  }

  setHash(data) {
    history.pushState({ game: data.data.game }, 'New game', `#${data.data.game}`);
  }
}
