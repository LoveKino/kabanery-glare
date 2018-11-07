const glareView = require('../util/glareView');

/**
 * tool bar
 */
const ToolBar = glareView(({
  props,
  n,
  children
}) => {
  return n('div', {
    style: Object.assign({}, props.style.box, props.style.toolBar[props.color])
  }, [
    children[0],
    n('span', {
      style: props.style.title
    }, props.title),
    children[1]
  ]);
}, {
  id: 'ToolBar',
  defaultProps: {
    color: 'default',
    title: ''
  }
});

const ToolBarLeft = glareView(({
  props,
  n,
  children
}) => {
  console.log(children)
  return n('span', {
    style: props.style[props.color]
  }, children);
}, {
  id: 'ToolBarLeft',
  defaultProps: {
    color: 'default'
  }
});

const ToolBarRight = glareView(({
  props,
  n,
  children
}) => {
  return n('span', {
    style: props.style[props.color]
  }, children);
}, {
  id: 'ToolBarRight',
  defaultProps: {
    color: 'default'
  }
});

module.exports = {
  ToolBar,
  ToolBarLeft,
  ToolBarRight
};
