const {
  view,
  parseArgs,
  n
} = require('kabanery');
const uuidv4 = require('uuid/v4');

const defaultTheme = require('../theme/base')();
const noop = () => {};

const copyTo = (obj1, obj2) => {
  for (let name in obj2) {
    if (obj2[name] !== null && obj2[name] !== undefined) {
      if (obj1[name] === null || obj1[name] === undefined) {
        obj1[name] = obj2[name];
      } else {
        if (typeof obj1[name] === 'object' && typeof obj2[name] === 'object') {
          obj1[name] = copyTo(obj1[name], obj2[name]);
        }
      }
    }
  }

  return obj1;
};

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
  return view((data, ctx) => {
    data.onChange = data.onChange || noop;
    data.onEvent = data.onEvent || noop;
    data.theme = data.theme || defaultTheme;
    /**
     * priority:
     *  props >> defaultProps >> theme
     */
    copyTo(data.props, defaultProps);
    copyTo(data.props, {
      style: data.theme[id]
    });

    data.n = (...args) => {
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

    return render(data, ctx);
  });
};
