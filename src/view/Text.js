const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  n,
  children
}) => {
  if (props.type === 'default') {
    return n('span', {
      style: props.style[props.type]
    }, children);
  } else if (props.type === 'h2') {
    return n('h2', {
      style: props.style[props.type]
    }, children);
  } else {
    throw new Error(`unexpect Text type ${props.type}`);
  }
}, {
  id: 'Text',
  defaultProps: {
    type: 'default'
  }
});
