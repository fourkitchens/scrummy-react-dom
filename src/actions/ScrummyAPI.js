import { reset, reveal } from './';

export default class ScrummyAPI {
 /**
   * constructor
   *   Creates a connection to the Scrummy API.
   * @return {undefined}
   */
  constructor(uri, store) {
    this.store = store;
    this.ws = new WebSocket(uri);
  }

  /**
   * init
   *   Initializes event listeners
   *
   * @return {undefined}
   */
  init() {
    window.onbeforeunload = () => this.handleDisconnect();
    this.ws.onmessage = (message) => this.handleMessage(message);
    this.ws.onopen = () => this.getPlayerCount();
  }

  /**
   * handleKeyboardShortcuts
   *   Dispatches reveal/reset shortcuts
   *
   * @param {object} event
   *   The KeyboardEvent
   * @return {undefined}
   */
  handleKeyboardShortcuts(event) {
    if (event.defaultPrevented) {
      return;
    } else if (event.key === 'Enter') {
      this.store.dispatch(reveal());
    } else if (event.key === 'Escape') {
      this.store.dispatch(reset());
    }
    event.preventDefault();
  }

  /**
   * handleMessage
   *   Dispatches messages by type.
   *
   * @param {object} message
   *   The WebSocket MessageEvent received from the API.
   * @return {undefined}
   */
  handleMessage(message) {
    const action = JSON.parse(message.data);
    if (action.type === 'error') {
      this.dispatchErrorHide(this.store);
    } else if (action.type === 'youSignedIn') {
      this.setHash(action.data.game);
      window.addEventListener('keyup', this.handleKeyboardShortcuts, true);
    }
    this.store.dispatch(action);
  }

  /**
   * getPlayerCount
   *   Gets player count for current game
   *
   * @param {object} message
   *   The WebSocket MessageEvent received from the API.
   * @return {undefined}
   */
  getPlayerCount() {
    if (!!this.store.getState().game.game) {
      this.emit('getPlayerCount', { game: this.store.getState().game.game });
    }
  }

  /**
   * handleDisconnect
   *   Sends disconnect event before browser is closed.
   *
   * @return {undefined}
   */
  handleDisconnect() {
    if (this.store.getState().game.game &&
        this.store.getState().game.users.length) {
      this.emit('disconnect', {
        game: this.store.getState().game.game,
        nickname: this.store.getState().game.nickname,
      });
    }
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
   * @param {number} [timeoutMs=3000]
   *   The amount of time in ms that the error should show before hiding.
   * @return {undefined}
   */
  dispatchErrorHide(timeoutMs = 3000) {
    setTimeout(() => this.store.dispatch({ type: 'hideError' }), timeoutMs);
  }

  /**
   * setHash
   *   Push the game name to the browser history as a hash.
   *
   * @param {string} game
   *   The game name
   * @return {undefined}
   */
  setHash(game) {
    history.pushState({ game }, 'New game', `#${game}`);
  }
}
