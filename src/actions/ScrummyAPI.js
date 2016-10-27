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
        this.error(store, data);
      } else {
        store.dispatch(data);
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
   * @param {Object} data
   *   The data payload which includes the error message.
   * @return {undefined}
   */
  error(store, data) {
    setTimeout(() => store.dispatch({ type: 'hideError' }), 3000);
    store.dispatch(data);
  }
}
