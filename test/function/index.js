const {
  get
} = require('../../src/util/util');
const assert = require('assert');

describe('index', () => {
  it('get: base', () => {
    assert(get({
      a: 1
    }, 'a'), 1);

    assert(get({
      a: {
        b: 2
      }
    }, 'a.b'), 2);

    assert(get({
      a: {
        b: [1, 2, 3]
      }
    }, 'a.b.2'), 3);
  });
});
