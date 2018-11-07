const glareView = require('../util/glareView');

/**
 * <Badge>
 *   <Child></Child>
 * </Badge>
 */
module.exports = glareView(({
  props,
  onChange,
  onEvent,
  n
}, ctx) => {
  return n('label', {
    style: props.style.box,
    onclick: (e) => {
      e.preventDefault();

      props.checked = !props.checked;
      onChange(props, ctx, e);
      ctx.update();

      onEvent({
        type: 'click',
        sourceEvent: e
      });
    }
  }, [
    n('span', {
      style: props.style.checkbox[props.color][props.checked ? 'checked' : 'unchecked']
    }, [
      n('input', {
        type: 'checkbox',
        value: props.checked,
        style: {
          margin: 0,
          padding: 0,
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          opacity: '0'
        }
      }),
      n('span', {
        style: {
          left: 4,
          top: -1,
          width: 5,
          height: 10,
          display: 'block',
          border: 'solid white',
          'border-width': '0 2px 2px 0',
          '-webkit-transform': 'rotate(45deg)',
          '-ms-transform': 'rotate(45deg)',
          'transform': 'rotate(45deg)',
          position: 'absolute'
        }
      })
    ]),

    n('span', {
      style: props.style.label
    }, [props.label])
  ]);
}, {
  id: 'Checkbox',
  defaultProps: {
    color: 'default',
    checked: false
  }
});
