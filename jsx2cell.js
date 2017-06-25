const parse = require('jsx-parser/index.umd.js');
const node2cell = require('./node2cell');

function toStandard(node, parent = null) {
  const specNode = {
    nodeName: node.type,
    tagName: node.type,
    parentNode: parent,
  };
  if (node.props) {
    specNode.attrs = Object.entries(node.props).map(([name, prop]) => {
      if (typeof prop === 'string') return { name, type: '#text', value: prop };
      return {
        name,
        value: prop.nodeValue,
        type: prop.type,
      };
    });
  }
  if (node.type === '#text') specNode.value = node.nodeValue;
  if (node.children) specNode.childNodes = node.children.map(c => toStandard(c, specNode));
  return specNode;
}

module.exports = (str) => {
  return [node2cell(toStandard(parse(str)), true)];
};
