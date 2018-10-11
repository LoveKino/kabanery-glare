const TextField = require('../../src/base/TextField');
const Button = require('../../src/base/button');
const {
  glareView
} = require('../../src');

const {
  mount,
  n
} = require('kabanery');

const Page = glareView(({
  props,
  n,
  bn
}) => {
  return n('p', [
    bn(TextField, {
      propsPath: 'name',
      doUpdate: true
    }),
    n('br'),
    n('code', `${props.name.value}`),
    n('br'),
    bn(Button, {
      propsPath: 'button'
    }, 'a button')
  ]);
});

mount(n('div', [
  Page({
    props: {
      name: {
        value: '',
        placeholder: 'Test'
      },
      button: {}
    }
  })
]), document.body);
