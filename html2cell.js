const parse5 = require('parse5');
const node2cell = require('./node2cell');

module.exports = function convert(str) {
  return parse5.parseFragment(str).childNodes.map(n => node2cell(n, true));
};
