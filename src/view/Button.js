const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  onEvent,
  n,
  children
}, ctx) => {
  const style = props.style.box[props.type][props.color][props.activeStatus];

  return n('button', {
    style,
    onclick: (e) => {
      onEvent({
        type: 'click',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'active');
      setTimeout(() => {
        if (props.activeStatus === 'active') {
          ctx.update('props.activeStatus', 'hover');
        }
      }, 200);
    },

    onmouseover: (e) => {
      onEvent({
        type: 'mouseover',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'hover');
    },

    onmouseout: (e) => {
      onEvent({
        type: 'mouseout',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'normal');
    }
  }, [
    n('span', [
      children
    ])
  ]);
}, {
  id: 'Button',
  defaultProps: {
    type: 'text',
    color: 'default',
    activeStatus: 'normal'
  }
});
