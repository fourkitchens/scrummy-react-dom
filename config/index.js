const defaultConfig = require('./default.yaml');
let localConfig;

try {
  localConfig = require('./local.yaml'); // eslint-disable-line global-require, import/no-unresolved, max-len
} catch (e) {
  localConfig = {};
}

module.exports = { ...defaultConfig, ...localConfig };
