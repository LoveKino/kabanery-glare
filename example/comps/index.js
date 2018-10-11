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
      propsPath: 'button1'
    }, 'default button'),
    bn(Button, {
      propsPath: 'button2'
    }, 'primary button'),
    bn(Button, {
      propsPath: 'button3'
    }, 'secondary button')
  ]);
});

mount(n('div', [
  Page({
    props: {
      name: {
        value: '',
        placeholder: 'Test'
      },
      button1: {},
      button2: {
        color: 'primary'
      },
      button3: {
        color: 'secondary'
      }
    }
  })
]), document.body);
