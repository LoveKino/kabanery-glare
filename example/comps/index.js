const TextField = require('../../src/base/TextField');

const {
  mount,
  n
} = require('kabanery');

mount(n('div', [
  TextField()
]), document.body);
