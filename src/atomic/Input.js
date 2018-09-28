const {
  View,
  n
} = require('kabanery');

module.exports = View(({
  props,
  onChange
}) => {
  return n('input', {
    type: props.type,
    placeholder: props.placeholder,
    value: props.value,
    style: props.style,
    onInput: (e) => {
      props.value = e.target.value;
      onChange(props, e);
    }
  });
});
