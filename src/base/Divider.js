const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  n
}) => {
  return n('hr', {
    style: props.style
  });
}, {
  id: 'Divider',
  defaultProps: {}
});
