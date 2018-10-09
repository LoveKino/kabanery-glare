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
      normal: 'rgb(138,138,138)'
    }
  }
}) => {
  return {
    TextField: {
      input: {
        width: 200,
        height: 30,
        margin: 0,
        padding: '0 6px 0 6px',
        border: 'none',
        borderBottom: `1px solid ${basics.line.color.normal}`,
        fontSize: basics.font.size.normal,
        outline: 'none'
      },

      focusLine: {
        borderBottom: `2px solid ${basics.line.color.normal}`,
      }
    }
  };
};
