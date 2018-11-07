const glareView = require('../util/glareView');

/**
 * <Badge>
 *   <Child></Child>
 * </Badge>
 */
module.exports = glareView(({
  props,
  n,
  children
}) => {
  return n('span', {
    style: props.style.box
  }, [
    children,
    n('span', {
      style: props.style.badge[props.color]
    }, props.content.toString())
  ]);
}, {
  id: 'Badge',
  defaultProps: {
    color: 'primary',
    content: ''
  }
});
