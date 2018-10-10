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
      props: {
        value: props.name
      },
      onChange: ({
        value
      }) => {
        ctx.update('props.name', value);
      }
    })
  ]);
});

mount(n('div', [
  Page({
    props: {
      name: '123'
    }
  })
]), document.body);
