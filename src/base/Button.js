const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  onEvent,
  n,
  children
}, ctx) => {
  return n('button', {
    style: props.style.box[props.activeStatus],
    onclick: (e) => {
      onEvent({
        type: 'click',
        sourceEvent: e
      });
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
    activeStatus: 'normal'
  }
});
