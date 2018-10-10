/**
 * define the default style for kabanery-glare
 */

module.exports = (basics = {
  font: {
    size: {
      normal: 14
    }
  },

  line: {
    color: {
      normal: 'rgba(0, 0, 0, 0.42)',
      hover: 'rgb(31,31,31)',
      light: '#1976d2'
    }
  }
}) => {
  return {
    TextField: {
      box: {
        display: 'inline-block',
        position: 'relative',
        width: 200,
        height: 30
      },

      input: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: '0 6px 0 6px',
        border: 'none',
        borderBottom: `1px solid ${basics.line.color.normal}`,
        fontSize: basics.font.size.normal,
        outline: 'none',
        boxSizing: 'border-box'
      },

      hover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottom: `2px solid ${basics.line.color.hover}`,
      },

      focus: {
        active: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        unactive: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transform: 'scaleX(0)',
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        }
      }
    }
  };
};
