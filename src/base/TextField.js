const glareView = require('../util/glareView');

module.exports = glareView(({
  props,
  onChange,
  onEvent,
  n
}, ctx) => {
  return n('div', {
    style: props.style.box,

    onclick: (e) => {
      onEvent({
        type: 'click',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'focused');
    },

    onfocusin: (e) => {
      onEvent({
        type: 'focusin',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'focused');
    },

    onfocusout: (e) => {
      onEvent({
        type: 'focusout',
        sourceEvent: e
      });
      ctx.update('props.activeStatus', 'unfocused');
    },

    onmouseover: (e) => {
      onEvent({
        type: 'mouseover',
        sourceEvent: e
      });
      if (props.activeStatus === 'unfocused') {
        ctx.update('props.activeStatus', 'hover');
      }
    },

    onmouseout: (e) => {
      onEvent({
        type: 'mouseout',
        sourceEvent: e
      });
      if (props.activeStatus === 'hover') {
        ctx.update('props.activeStatus', 'unfocused');
      }
    }
  }, [
    // input box
    n('input', {
      style: props.style.input,
      value: props.value,
      type: props.type,
      // TODO other events
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
    }),

    n('label', {
      style: props.activeStatus === 'focused' ? props.style.placeholder.active : props.value !== '' ? props.style.placeholder.placeContent: props.style.placeholder.place
    }, `${props.placeholder}`),

    // hover line
    n('div', {
      style: props.activeStatus === 'hover' ? props.style.hover : ''
    }),

    // focus line
    n('div', {
      style: props.activeStatus === 'focused' ? props.style.focus.active : props.style.focus.unactive
    })
  ]);
}, {
  id: 'TextField',
  defaultProps: {
    placeholder: '',
    value: '',
    type: 'text',
    activeStatus: 'unfocused'
  }
});
