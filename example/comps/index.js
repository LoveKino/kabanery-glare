const TextField = require('../../src/view/TextField');
const Text = require('../../src/view/Text');
const Br = require('../../src/view/br');
const Button = require('../../src/view/Button');
const Divider = require('../../src/view/Divider');
const Badge = require('../../src/view/Badge');
const Checkbox = require('../../src/view/Checkbox');
const {
  ToolBar,
  ToolBarLeft,
  ToolBarRight
} = require('../../src/view/ToolBar');
const {
  glareView
} = require('../../src');
const {
  mount,
  n
} = require('kabanery');
const log = console.log; // eslint-disable-line

const IntroduceView = glareView(({
  props,
  n,
  children
}) => {
  return n('div', [
    n(Text, {
      props: {
        type: 'h2',
      }
    }, props.title),
    n(Br),
    children
  ]);
}, {});

const Page = glareView(({
  props,
  n,
  bn
}) => {
  return n('p', [
    n(IntroduceView, {
      props: {
        title: 'TextField'
      }
    }, [
      // text field
      bn(TextField, {
        propsPath: 'name',
        doUpdate: true
      }),
      n(Br),
      n(Text, `${props.name.value}`),
    ]),

    // buttons
    n(IntroduceView, {
      props: {
        title: 'Button'
      }
    }, [
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
    ]),

    n(IntroduceView, {
      props: {
        title: 'Divider'
      }
    }, [
      // divider
      bn(Divider, {
        propsPath: 'divider'
      })
    ]),

    n(IntroduceView, {
      props: {
        title: 'Badge'
      }
    }, [
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
      ])
    ]),

    n(IntroduceView, {
      props: {
        title: 'Checkbox'
      }
    }, [
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
    ]),

    n(IntroduceView, {
      props: {
        title: 'ToolBar'
      }
    }, [
      // checkbox
      bn(ToolBar, {
        propsPath: 'toolbar1'
      }, [
        n(ToolBarLeft, [n(Button, 'leftBtn1')]),
        n(ToolBarRight, [
          n(Button, 'rightBtn1')
        ])
      ]),

      n(Br),

      bn(ToolBar, {
        propsPath: 'toolbar2'
      }, [
        n(ToolBarLeft, [
          n(Button, [n('span', {
            style: {
              color: 'white'
            }
          }, 'l_btn1')])
        ]),


        n(ToolBarRight, [
          n(Button, [n('span', {
            style: {
              color: 'white'
            }
          }, 'r_btn1')])
        ])
      ])
    ])
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
      },
      'toolbar1': {
        title: 'App Name'
      },
      'toolbar2': {
        title: 'App Name',
        color: 'primary'
      }
    }
  })
]), document.body);
