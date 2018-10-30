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

const isObject = (v) => v && typeof v === 'object';

const set = (sandbox, name = '', value) => {
  name = name.trim();
  const parts = !name ? [] : name.split('.');
  let parent = sandbox;
  if (!isObject(parent)) return;
  if (!parts.length) return;
  for (let i = 0; i < parts.length - 1; i++) {
    let part = parts[i];
    let next = parent[part];
    if (!isObject(next)) {
      next = {};
      parent[part] = next;
    }
    parent = next;
  }

  parent[parts[parts.length - 1]] = value;
  return sandbox;
};

/**
 * a.b.c
 */
const get = (sandbox, name = '') => {
  name = name.trim();
  let parts = !name ? [] : name.split('.');

  let parent = sandbox;

  for (let i = 0; i < parts.length; i++) {
    if (!isObject(parent)) return undefined;
    const part = parts[i];
    parent = parent[part];
  }

  return parent;
};

module.exports = {
  mergeDeep,
  set,
  get,
  isObject
};
