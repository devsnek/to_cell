### convert structures to [cell](https://github.com/intercellular/cell)

```js
> const to_cell = require('to_cell')
undefined
> to_cell.jsx('<h1></h1>')
[ { '$type': 'h1', '$cell': true } ]
> to_cell.html('<h1></h1>')
[ { '$type': 'h1', '$cell': true } ]
> to_cell.jsx('<h1 onclick={() => {}}></h1>')
[ { '$type': 'h1', '$cell': true, onclick: [Function] } ]
> to_cell.jsx('<h1 onclick={() => {}}>hi</h1>')
[ { '$type': 'h1',
    '$cell': true,
    onclick: [Function],
    '$text': 'hi' } ]
> to_cell.html('<h1>hi</h1>')
[ { '$type': 'h1', '$cell': true, '$text': 'hi' } ]
```
