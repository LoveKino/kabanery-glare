const TextField = require('../../src/base/TextField');
const Button = require('../../src/base/Button');
const Divider = require('../../src/base/Divider');
const {
  glareView
} = require('../../src');
const {
  mount,
  n
} = require('kabanery');
const log = console.log; // eslint-disable-line

const Page = glareView(({
  props,
  n,
  bn
}) => {
  return n('p', [
    // text field
    bn(TextField, {
      propsPath: 'name',
      doUpdate: true
    }),
    n('br'),
    n('code', `${props.name.value}`),
    n('br'),

    // buttons
    bn(Button, {
      propsPath: 'button1',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'default button'),
    bn(Button, {
      propsPath: 'button2',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'primary button'),
    bn(Button, {
      propsPath: 'button3',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'secondary button'),

    bn(Button, {
      propsPath: 'button4',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'default button'),
    bn(Button, {
      propsPath: 'button5',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'primary button'),
    bn(Button, {
      propsPath: 'button6',
      onChildEvent: (e) => e.type === 'click' && log(e.type)
    }, 'secondary button'),

    n('br'),
    n('br'),

    // divider
    bn(Divider, {
      propsPath: 'divider'
    })
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
      },
      button4: {
        type: 'contained'
      },
      button5: {
        color: 'primary',
        type: 'contained'
      },
      button6: {
        color: 'secondary',
        type: 'contained'
      },
    }
  })
]), document.body);
