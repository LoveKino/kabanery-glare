const Input = require('../../src/base/Input');

const {
  mount,
  n
} = require('kabanery');

mount(n('div', [
  Input()
]), document.body);
