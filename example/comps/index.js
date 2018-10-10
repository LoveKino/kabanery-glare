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
  n
}, ctx) => {
  return n('p', [
    n(TextField, {
      props: props.name,
      onChange: (newTextProps) => {
        ctx.update('props.name', newTextProps);
      }
    }),
    n('br'),
    n('code', `${props.name.value}`),
    n('br'),
    n(Button, {
      props: props.button
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
