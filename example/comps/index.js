const TextField = require('../../src/base/TextField');
const Button = require('../../src/base/Button');
const Divider = require('../../src/base/Divider');
const Badge = require('../../src/base/Badge');
const Checkbox = require('../../src/base/Checkbox');
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
    }),

    // badge
    bn(Badge, {
      propsPath: 'badge1'
    }, [
      bn(Button, {
        propsPath: 'badge1-test-button'
      }, 'badge button')
    ]),

    bn(Badge, {
      propsPath: 'badge2'
    }, [
      bn(Button, {
        propsPath: 'badge2-test-button'
      }, 'badge button')
    ]),

    // checkbox
    bn(Checkbox, {
      propsPath: 'checkbox1'
    }),
    bn(Checkbox, {
      propsPath: 'checkbox2'
    }),
    bn(Checkbox, {
      propsPath: 'checkbox3'
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
      badge1: {
        content: '4'
      },
      'badge1-test-button': {
        color: 'primary',
        type: 'contained'
      },
      badge2: {
        content: '10',
        color: 'secondary'
      },
      'badge2-test-button': {
        color: 'primary'
      },

      'checkbox1': {
        label: 'default',
        checked: true
      },
      'checkbox2': {
        label: 'primary',
        color: 'primary',
        checked: true
      },
      'checkbox3': {
        label: 'secondary',
        color: 'secondary',
        checked: true
      }
    }
  })
]), document.body);
