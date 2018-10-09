const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  onChange,
  onEvent,
  n
}) => {
  return n('input', Object.assign({}, props, {
    oninput: (e) => {
      if (e.target.value !== props.value) {
        props.value = e.target.value;
        onChange(props, e); // onChange should always report the change
      }

      onEvent({
        type: 'input',
        sourceEvent: e
      });
    }
    // TODO other events
  }));
}, {
  id: 'input',
  defaultProps: {
    placeholder: '',
    value: '',
    type: 'text'
  }
});
