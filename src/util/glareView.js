const {
  view,
  parseArgs,
  n
} = require('kabanery');
const {
  mergeDeep
} = require('./util');
const uuidv4 = require('uuid/v4');

const defaultTheme = require('../theme/base')();
const noop = () => {};

module.exports = (render, {
  /**
   * id rule: (1) specify a name, like 'input', 'text'
   *          (2) auto generate an id
   * TODO: avoid repeated name by using global view map
   */
  id = uuidv4(),
  defaultProps
} = {}) => {
  if (typeof render !== 'function') {
    throw new Error(`Expect function for glare view render, but got ${render}`);
  }
  return view(({
    props,
    onChange = noop, // should only called on props changed, need to compare old props and new props
    onEvent = noop, // any event happened
    theme = defaultTheme, // control every detail style
    children
  } = {}, ctx) => {
    /**
     * priority:
     *  props >> defaultProps >> theme
     */
    const mergedProps = mergeDeep(mergeDeep({
      style: theme[id]
    }, defaultProps), props);

    const glareNode = (...args) => {
      const {
        tagName,
        attributes,
        childs
      } = parseArgs(args);
      if (typeof tagName === 'function') { // TODO check is glare view or not
        return tagName({
          props: attributes.props,
          onChange: attributes.onChange,
          onEvent: attributes.onEvent,
          theme: attributes.theme, // extend theme to all glare view children
          children: childs
        });
      } else {
        return n(tagName, attributes, childs);
      }
    };

    return render({
      props: mergedProps,
      onChange,
      onEvent,
      theme,
      children,
      n: glareNode
    }, ctx);
  });
};
