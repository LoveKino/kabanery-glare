const {
  view
} = require('kabanery');

module.exports = (render, {
  defaultProps
} = {}) => {
  if (typeof render !== 'function') {
    throw new Error(`Expect function for glare view render, but got ${render}`);
  }
  return view(({
    props,
    onChange,
    children
  }, ctx) => {
    // merge props with default props
    const mergedProps = mergeDeep(defaultProps, props);
    return render({
      props: mergedProps,
      onChange,
      children
    }, ctx);
  });
};

/**
 * merge two objects
 */
const mergeDeep = (obj1, obj2) => {
  if (obj1 === null || obj1 === undefined) return obj2;
  if (obj2 === null || obj2 === undefined) return obj1;

  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const newObj = Object.assign({}, obj1); // copy obj1
    for (let key in obj2) {
      newObj[key] = mergeDeep(newObj[key], obj2[key]);
    }
    return newObj;
  }

  return obj2;
};
