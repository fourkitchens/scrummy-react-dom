const jsdom = require("jsdom");
require("babel-polyfill");
require("babel-register");

const document = jsdom.jsdom("<body></body>");
const window = document.defaultView;
global.navigator = window.navigator;
global.document = document;
global.window = window;
global.history = {
  pushState: () => {}
};
global.WebSocket = class WebSocket {
  send() {}
};
global.ga = () => {};
