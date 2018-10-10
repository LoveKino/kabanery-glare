const TextField = require('../../src/base/TextField');
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
    })
  ]);
});

mount(n('div', [
  Page({
    props: {
      name: {
        value: '123'
      }
    }
  })
]), document.body);
