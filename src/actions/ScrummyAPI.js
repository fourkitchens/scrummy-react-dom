export default class ScrummyAPI {
  constructor(uri, store) {
    this.ws = new WebSocket(uri);
    this.ws.onmessage = (msg) => { store.dispatch(JSON.parse(msg.data)); };
  }
  emit(type, data) {
    this.ws.send(JSON.stringify({ type, data }));
  }
}
