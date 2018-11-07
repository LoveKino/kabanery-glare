const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  n
}) => {
  return n('br', {
    style: props.style
  });
}, {
  id: 'Br',
  defaultProps: {}
});
