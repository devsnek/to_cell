module.exports = function node2cell(node, top = false) {
  const cell = {
    $type: node.nodeName,
  };
  if (top) cell.$cell = true;
  if (node.attrs) for (const a of node.attrs) {
    if (a.type && a.type === '#jsx') a.value = eval(a.value);
    cell[a.name] = a.value;
  }
  const $components = [];
  for (const child of node.childNodes || []) {
    if (child.nodeName === '#text') {
      if (!child.value.trim()) continue;
      if (node.childNodes.length === 1) cell.$text = child.value;
      else $components.push({ $type: 'text', $text: child.value });
    } else {
      $components.push(node2cell(child));
    }
  }
  if ($components.length) cell.$components = $components;
  return cell;
}
