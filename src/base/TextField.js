const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  onChange,
  onEvent,
  n
}) => {
  return n('div', {
    style: {
      display: 'inline-block'
    }
  }, [
    n('input', {
      style: props.style.input,
      value: props.value,
      type: props.type,
      placeholder: props.placeholder,
      // TODO other events
      oninput: (e) => {
        if (e.target.value !== props.value) {
          props.value = e.target.value;
          onChange(props, e); // onChange should always report the change
        }

        onEvent({
          type: 'input',
          sourceEvent: e
        });
      },
      onfocusin: (e) => {
        onEvent({
          type: 'focus',
          sourceEvent: e
        });
      }
    }),

    n('div', {
      style: props.focused ? props.style.focusLine : ''
    })
  ]);
}, {
  id: 'TextField',
  defaultProps: {
    placeholder: '',
    value: '',
    type: 'text'
  }
});
