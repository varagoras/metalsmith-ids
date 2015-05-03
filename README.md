# metalsmith-ids

A [Metalsmith](https://github.com/segmentio/metalsmith) plugin that assigns a numeric id on your files based on sort by a field (by default date).

## Features

  - assign numeric id

## Installation

    $ npm install metalsmith-ids

## Usage

```js
var ids = require('metalsmith-ids');

metalsmith.use(ids());
```

There are additional options with the following default values:

```js
metalsmith.use(ids({
  sortBy: 'date',
  reverse: false
}));
```

You could alter those options:

```js
metalsmith.use(ids({
  sortBy: 'counter', // sort by the custom field -counter- of each file
  reverse: true // newest = 1, older = increase ID
}));
```


## CLI Usage

All of the same options apply, just add them to the `"plugins"` key in your `metalsmith.json` configuration:

```json
{
  "plugins": {
    "metalsmith-ids": {
      "sortBy": "date",
      "reverse": true
    }
  }
}
```

## License

  MIT