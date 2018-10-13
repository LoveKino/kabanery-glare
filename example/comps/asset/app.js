/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/basetype/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/basetype/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * basic types\n */\n\nlet truth = () => true;\n\nlet isUndefined = v => v === undefined;\n\nlet isNull = v => v === null;\n\nlet isFalsy = v => !v;\n\nlet likeArray = v => !!(v && typeof v === 'object' && typeof v.length === 'number' && v.length >= 0);\n\nlet isArray = v => Array.isArray(v);\n\nlet isString = v => typeof v === 'string';\n\nlet isObject = v => !!(v && typeof v === 'object');\n\nlet isFunction = v => typeof v === 'function';\n\nlet isNumber = v => typeof v === 'number' && !isNaN(v);\n\nlet isBool = v => typeof v === 'boolean';\n\nlet isNode = (o) => {\n    return (\n        typeof Node === 'object' ? o instanceof Node :\n        o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'\n    );\n};\n\nlet isPromise = v => v && typeof v === 'object' && typeof v.then === 'function' && typeof v.catch === 'function';\n\nlet isRegExp = v => v instanceof RegExp;\n\nlet isReadableStream = (v) => isObject(v) && isFunction(v.on) && isFunction(v.pipe);\n\nlet isWritableStream = v => isObject(v) && isFunction(v.on) && isFunction(v.write);\n\n/**\n * check type\n *\n * types = [typeFun]\n */\nlet funType = (fun, types = []) => {\n    if (!isFunction(fun)) {\n        throw new TypeError(typeErrorText(fun, 'function'));\n    }\n\n    if (!likeArray(types)) {\n        throw new TypeError(typeErrorText(types, 'array'));\n    }\n\n    for (let i = 0; i < types.length; i++) {\n        let typeFun = types[i];\n        if (typeFun) {\n            if (!isFunction(typeFun)) {\n                throw new TypeError(typeErrorText(typeFun, 'function'));\n            }\n        }\n    }\n\n    return function() {\n        // check type\n        for (let i = 0; i < types.length; i++) {\n            let typeFun = types[i];\n            let arg = arguments[i];\n            if (typeFun && !typeFun(arg)) {\n                throw new TypeError(`Argument type error. Arguments order ${i}. Argument is ${arg}. function is ${fun}, args are ${arguments}.`);\n            }\n        }\n        // result\n        return fun.apply(this, arguments);\n    };\n};\n\nlet and = (...args) => {\n    if (!any(args, isFunction)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n    return (v) => {\n        for (let i = 0; i < args.length; i++) {\n            let typeFun = args[i];\n            if (!typeFun(v)) {\n                return false;\n            }\n        }\n        return true;\n    };\n};\n\nlet or = (...args) => {\n    if (!any(args, isFunction)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n\n    return (v) => {\n        for (let i = 0; i < args.length; i++) {\n            let typeFun = args[i];\n            if (typeFun(v)) {\n                return true;\n            }\n        }\n        return false;\n    };\n};\n\nlet not = (type) => {\n    if (!isFunction(type)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n    return (v) => !type(v);\n};\n\nlet any = (list, type) => {\n    if (!likeArray(list)) {\n        throw new TypeError(typeErrorText(list, 'list'));\n    }\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    for (let i = 0; i < list.length; i++) {\n        if (!type(list[i])) {\n            return false;\n        }\n    }\n    return true;\n};\n\nlet exist = (list, type) => {\n    if (!likeArray(list)) {\n        throw new TypeError(typeErrorText(list, 'array'));\n    }\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    for (let i = 0; i < list.length; i++) {\n        if (type(list[i])) {\n            return true;\n        }\n    }\n    return false;\n};\n\nlet mapType = (map) => {\n    if (!isObject(map)) {\n        throw new TypeError(typeErrorText(map, 'obj'));\n    }\n\n    for (let name in map) {\n        let type = map[name];\n        if (!isFunction(type)) {\n            throw new TypeError(typeErrorText(type, 'function'));\n        }\n    }\n\n    return (v) => {\n        if (!isObject(v)) {\n            return false;\n        }\n\n        for (let name in map) {\n            let type = map[name];\n            let attr = v[name];\n            if (!type(attr)) {\n                return false;\n            }\n        }\n\n        return true;\n    };\n};\n\nlet listType = (type) => {\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    return (list) => any(list, type);\n};\n\nlet typeErrorText = (v, expect) => {\n    return `Expect ${expect} type, but got type ${typeof v}, and value is ${v}`;\n};\n\nmodule.exports = {\n    isArray,\n    likeArray,\n    isString,\n    isObject,\n    isFunction,\n    isNumber,\n    isBool,\n    isNode,\n    isPromise,\n    isNull,\n    isUndefined,\n    isFalsy,\n    isRegExp,\n    isReadableStream,\n    isWritableStream,\n\n    funType,\n    any,\n    exist,\n\n    and,\n    or,\n    not,\n    mapType,\n    listType,\n    truth\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/basetype/index.js?");

/***/ }),

/***/ "../../node_modules/bolzano/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n    isObject, funType, or, isString, isFalsy, likeArray\n} = __webpack_require__(/*! basetype */ \"../../node_modules/basetype/index.js\");\n\nlet iterate = __webpack_require__(/*! ./lib/iterate */ \"../../node_modules/bolzano/lib/iterate.js\");\n\nlet {\n    map, reduce, find, findIndex, forEach, filter, any, exist, compact\n} = __webpack_require__(/*! ./lib/fp */ \"../../node_modules/bolzano/lib/fp.js\");\n\nlet contain = (list, item, fopts) => findIndex(list, item, fopts) !== -1;\n\nlet difference = (list1, list2, fopts) => {\n    return reduce(list1, (prev, item) => {\n        if (!contain(list2, item, fopts) &&\n            !contain(prev, item, fopts)) {\n            prev.push(item);\n        }\n        return prev;\n    }, []);\n};\n\nlet union = (list1, list2, fopts) => deRepeat(list2, fopts, deRepeat(list1, fopts));\n\nlet mergeMap = (map1 = {}, map2 = {}) => reduce(map2, setValueKey, reduce(map1, setValueKey, {}));\n\nlet setValueKey = (obj, value, key) => {\n    obj[key] = value;\n    return obj;\n};\n\nlet interset = (list1, list2, fopts) => {\n    return reduce(list1, (prev, cur) => {\n        if (contain(list2, cur, fopts)) {\n            prev.push(cur);\n        }\n        return prev;\n    }, []);\n};\n\nlet deRepeat = (list, fopts, init = []) => {\n    return reduce(list, (prev, cur) => {\n        if (!contain(prev, cur, fopts)) {\n            prev.push(cur);\n        }\n        return prev;\n    }, init);\n};\n\n/**\n * a.b.c\n */\nlet get = funType((sandbox, name = '') => {\n    name = name.trim();\n    let parts = !name ? [] : name.split('.');\n    return reduce(parts, getValue, sandbox, invertLogic);\n}, [\n    isObject,\n    or(isString, isFalsy)\n]);\n\nlet getValue = (obj, key) => obj[key];\n\nlet invertLogic = v => !v;\n\nlet delay = (time) => new Promise((resolve) => {\n    setTimeout(resolve, time);\n});\n\nlet flat = (list) => {\n    if (likeArray(list) && !isString(list)) {\n        return reduce(list, (prev, item) => {\n            prev = prev.concat(flat(item));\n            return prev;\n        }, []);\n    } else {\n        return [list];\n    }\n};\n\nmodule.exports = {\n    flat,\n    contain,\n    difference,\n    union,\n    interset,\n    map,\n    reduce,\n    iterate,\n    find,\n    findIndex,\n    deRepeat,\n    forEach,\n    filter,\n    any,\n    exist,\n    get,\n    delay,\n    mergeMap,\n    compact\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/index.js?");

/***/ }),

/***/ "../../node_modules/bolzano/lib/fp.js":
/*!***************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/lib/fp.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet iterate = __webpack_require__(/*! ./iterate */ \"../../node_modules/bolzano/lib/iterate.js\");\n\nlet defauls = {\n    eq: (v1, v2) => v1 === v2\n};\n\nlet setDefault = (opts, defauls) => {\n    for (let name in defauls) {\n        opts[name] = opts[name] || defauls[name];\n    }\n};\n\nlet forEach = (list, handler) => iterate(list, {\n    limit: (rets) => {\n        if (rets === true) return true;\n        return false;\n    },\n    transfer: handler,\n    output: (prev, cur) => cur,\n    def: false\n});\n\nlet map = (list, handler, limit) => iterate(list, {\n    transfer: handler,\n    def: [],\n    limit\n});\n\nlet reduce = (list, handler, def, limit) => iterate(list, {\n    output: handler,\n    def,\n    limit\n});\n\nlet filter = (list, handler, limit) => reduce(list, (prev, cur, index, list) => {\n    handler && handler(cur, index, list) && prev.push(cur);\n    return prev;\n}, [], limit);\n\nlet find = (list, item, fopts) => {\n    let index = findIndex(list, item, fopts);\n    if (index === -1) return undefined;\n    return list[index];\n};\n\nlet any = (list, handler) => reduce(list, (prev, cur, index, list) => {\n    let curLogic = handler && handler(cur, index, list);\n    return prev && originLogic(curLogic);\n}, true, falsyIt);\n\nlet exist = (list, handler) => reduce(list, (prev, cur, index, list) => {\n    let curLogic = handler && handler(cur, index, list);\n    return prev || originLogic(curLogic);\n}, false, originLogic);\n\nlet findIndex = (list, item, fopts = {}) => {\n    setDefault(fopts, defauls);\n\n    let {\n        eq\n    } = fopts;\n    let predicate = (v) => eq(item, v);\n    let ret = iterate(list, {\n        transfer: indexTransfer,\n        limit: onlyOne,\n        predicate,\n        def: []\n    });\n    if (!ret.length) return -1;\n    return ret[0];\n};\n\nlet compact = (list) => reduce(list, (prev, cur) => {\n    if (cur) prev.push(cur);\n    return prev;\n}, []);\n\nlet indexTransfer = (item, index) => index;\n\nlet onlyOne = (rets, item, name, domain, count) => count >= 1;\n\nlet falsyIt = v => !v;\n\nlet originLogic = v => !!v;\n\nmodule.exports = {\n    map,\n    forEach,\n    reduce,\n    find,\n    findIndex,\n    filter,\n    any,\n    exist,\n    compact\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/lib/fp.js?");

/***/ }),

/***/ "../../node_modules/bolzano/lib/iterate.js":
/*!********************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/lib/iterate.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n    likeArray, isObject, funType, isFunction, isUndefined, or, isNumber, isFalsy, mapType\n} = __webpack_require__(/*! basetype */ \"../../node_modules/basetype/index.js\");\n\n/**\n *\n * preidcate: chose items to iterate\n * limit: when to stop iteration\n * transfer: transfer item\n * output\n */\nlet iterate = funType((domain = [], opts = {}) => {\n    let {\n        predicate, transfer, output, limit, def\n    } = opts;\n\n    opts.predicate = predicate || truthy;\n    opts.transfer = transfer || id;\n    opts.output = output || toList;\n    if (limit === undefined) limit = domain && domain.length;\n    limit = opts.limit = stopCondition(limit);\n\n    let rets = def;\n    let count = 0;\n\n    if (likeArray(domain)) {\n        for (let i = 0; i < domain.length; i++) {\n            let itemRet = iterateItem(domain, i, count, rets, opts);\n            rets = itemRet.rets;\n            count = itemRet.count;\n            if (itemRet.stop) return rets;\n        }\n    } else if (isObject(domain)) {\n        for (let name in domain) {\n            let itemRet = iterateItem(domain, name, count, rets, opts);\n            rets = itemRet.rets;\n            count = itemRet.count;\n            if (itemRet.stop) return rets;\n        }\n    }\n\n    return rets;\n}, [\n    or(isObject, isFunction, isFalsy),\n    or(isUndefined, mapType({\n        predicate: or(isFunction, isFalsy),\n        transfer: or(isFunction, isFalsy),\n        output: or(isFunction, isFalsy),\n        limit: or(isUndefined, isNumber, isFunction)\n    }))\n]);\n\nlet iterateItem = (domain, name, count, rets, {\n    predicate, transfer, output, limit\n}) => {\n    let item = domain[name];\n    if (limit(rets, item, name, domain, count)) {\n        // stop\n        return {\n            stop: true,\n            count,\n            rets\n        };\n    }\n\n    if (predicate(item)) {\n        rets = output(rets, transfer(item, name, domain, rets), name, domain);\n        count++;\n    }\n    return {\n        stop: false,\n        count,\n        rets\n    };\n};\n\nlet stopCondition = (limit) => {\n    if (isUndefined(limit)) {\n        return falsy;\n    } else if (isNumber(limit)) {\n        return (rets, item, name, domain, count) => count >= limit;\n    } else {\n        return limit;\n    }\n};\n\nlet toList = (prev, v) => {\n    prev.push(v);\n    return prev;\n};\n\nlet truthy = () => true;\n\nlet falsy = () => false;\n\nlet id = v => v;\n\nmodule.exports = iterate;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/bolzano/lib/iterate.js?");

/***/ }),

/***/ "../../node_modules/kabanery/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./src */ \"../../node_modules/kabanery/src/index.js\");\n\n/**\n * @readme-doc\n *\n * ## features\n *\n * - simple DOM DSL, construct dom tree quickly\n *\n * - data-driven view, include updating view by data\n *\n * - Just functions, easy to compose\n *\n * [readme-lang:zh]## 特征\n *\n * - 简单的DOM DSL，快速构建DOM结构\n *\n * - 数据驱动视图，包括通过数据更新视图\n *\n * - 以函数为核心，易于复合\n *\n */\n\n/**\n * @readme-quick-run\n *\n * Using method n to construct dom node quickly.\n *\n * [readme-lang:zh]用方法n快速构造dom节点\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {n, mount} = kabanery;\n *\n * mount(n('div', {\n *   id: 'qu',\n *   style: {\n *      backgroundColor: 'red'\n *   }\n * }, [\n *      n('span class=go style=\"font-size:16px\"', 'hello!')\n * ]), document.body);\n *\n * console.log(document.getElementById('qu').outerHTML); // print result\n */\n\n/**\n * @readme-quick-run\n *\n * Basic way to construct a view.\n *\n * [readme-lang:zh]构造一个组件的简单方法\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {view, n, mount} = kabanery;\n *\n * let MyView = view((data) => {\n *      let {type} = data;\n *\n *      return n('div', {\n *         id: 'test1',\n *         style: {\n *            fontSize: 10\n *         }\n *      },[\n *          type === 2 && n('span', 'second'),\n *          type === 3 && n('div', 'third')\n *      ]);\n * });\n *\n * mount(MyView({type: 3}), document.body);\n *\n * console.log(document.getElementById('test1').outerHTML); // print result\n */\n\n/**\n * @readme-quick-run\n *\n * Using update api to update a view.\n *\n * [readme-lang:zh]运用update api去更新一个view\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {view, n, mount} = kabanery;\n *\n * let MyView = view((data, {update}) => {\n *      return n('div', {\n *         id: 'a',\n *         style: {\n *            fontSize: 10\n *         },\n *         onclick: () => {\n *            update('show', !data.show);\n *         }\n *      }, [\n *          data.show && n('div', 'show text')\n *      ]);\n * });\n *\n * mount(MyView({show: false}), document.body);\n *\n * document.getElementById('a').click(); // simulate user action\n * console.log(document.getElementById('a').outerHTML); // print result\n */\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/const/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/const/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst uuidv4 = __webpack_require__(/*! uuid/v4 */ \"../../node_modules/uuid/v4.js\");\n\nconst seed = uuidv4();\n\nmodule.exports = {\n  eventMapHook: `__eventMap_${seed}`,\n  globalEventTypePrefix: `__event_type_id_${seed}_`,\n  stopPropagationFlag: '__stopPropagation'\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/const/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/event/eventMatrix.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/event/eventMatrix.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n  contain\n} = __webpack_require__(/*! bolzano */ \"../../node_modules/bolzano/index.js\");\n\nlet {\n  eventMapHook,\n  globalEventTypePrefix,\n  stopPropagationFlag\n} = __webpack_require__(/*! ../const */ \"../../node_modules/kabanery/src/const/index.js\");\n\nmodule.exports = () => {\n  let docs = [];\n  let eventTypeMap = {};\n  let handlerMap = {};\n\n  let listenEventType = (type) => {\n    if (!eventTypeMap[type]) {\n      updateDocs(type);\n    }\n    eventTypeMap[type] = true;\n  };\n\n    /**\n     * attach document used to accept events\n     */\n  let attachDocument = (doc = document) => {\n    if (!contain(docs, doc)) {\n      for (let type in eventTypeMap) {\n        // prevent multiple version of kabanery to binding multiple times for the same type\n        let id = getGlobalEventTypeId(type);\n        if (!doc[id]) {\n          addEventListenerToDoc(doc, type);\n          doc[id] = true;\n        }\n      }\n      docs.push(doc);\n    }\n  };\n\n  let updateDocs = (type) => {\n    if (!docs.length) {\n      docs.push(document);\n    }\n    for (let i = 0; i < docs.length; i++) {\n      let doc = docs[i];\n      addEventListenerToDoc(doc, type);\n    }\n  };\n\n  let addEventListenerToDoc = (doc, type) => {\n    let handler = null;\n    if (handlerMap[type]) {\n      handler = handlerMap[type];\n    } else {\n      handler = listener(type);\n      handlerMap[type] = handler;\n    }\n    doc.addEventListener(type, handler);\n  };\n\n  let clearEvents = () => {\n    for (let type in eventTypeMap) {\n      removeListenerType(type);\n    }\n  };\n\n  let removeListenerType = (type) => {\n    let handler = handlerMap[type];\n    if (handler) {\n      for (let i = 0; i < docs.length; i++) {\n        let doc = docs[i];\n        doc.removeEventListener(type, handler);\n      }\n      delete handlerMap[type];\n      delete eventTypeMap[type];\n    }\n  };\n\n  let getDocs = () => docs.slice(0);\n\n  /**\n     * e = {\n     *  target,\n     *  stopPropagation [optional]\n     * }\n     */\n  let listener = (type) => function(e) {\n    let ctx = this;\n    let target = e.target;\n\n    // hack the stopPropagration function\n    let oldProp = e.stopPropagation;\n    e.stopPropagation = function(...args) {\n      e[stopPropagationFlag] = true;\n      return oldProp && oldProp.apply(this, args);\n    };\n\n    let nodePath = getNodePath(target);\n\n    for (let i = 0; i < nodePath.length; i++) {\n      let node = nodePath[i];\n      applyNodeHandlers(e, type, node, ctx);\n    }\n  };\n\n  let applyNodeHandlers = (e, type, node, ctx) => {\n    if (e.__stopPropagation) { // event already been stoped by child node\n      return true;\n    }\n\n    let handler = getHandler(type, node);\n    return handler && handler.apply(ctx, [e]);\n  };\n\n  let getHandler = (type, target) => {\n    let eventMap = target && target[eventMapHook];\n    return eventMap && eventMap[type];\n  };\n\n  let dispatchEvent = (type, e) => {\n    let handler = handlerMap[type];\n    handler && handler(e);\n  };\n\n  return {\n    listenEventType,\n    clearEvents,\n    removeListenerType,\n    getDocs,\n    attachDocument,\n    dispatchEvent\n  };\n};\n\n/**\n * get the path of node\n */\nlet getNodePath = (target) => {\n  let paths = [];\n  while (target) {\n    paths.push(target);\n    target = target.parentNode;\n  }\n  return paths;\n};\n\nlet getGlobalEventTypeId = (type) => `${globalEventTypePrefix}${type}`;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/event/eventMatrix.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/event/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/event/index.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet EventMatrix = __webpack_require__(/*! ./eventMatrix */ \"../../node_modules/kabanery/src/event/eventMatrix.js\");\n\nlet {\n  eventMapHook\n} = __webpack_require__(/*! ../const */ \"../../node_modules/kabanery/src/const/index.js\");\n\nlet {\n  listenEventType,\n  clearEvents,\n  attachDocument,\n  dispatchEvent\n} = EventMatrix();\n\nlet bindEvents = (node, eventMap) => {\n  // hook event at node\n  node[eventMapHook] = eventMap;\n\n  for (let type in eventMap) {\n    listenEventType(type);\n  }\n};\n\nmodule.exports = {\n  bindEvents,\n  attachDocument,\n  dispatchEvent,\n  clearEvents\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/event/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  n,\n  svgn,\n  parseArgs,\n  isKabaneryNode,\n  parseStyle\n} = __webpack_require__(/*! ./n */ \"../../node_modules/kabanery/src/n/index.js\");\n\nconst {\n  view\n} = __webpack_require__(/*! ./view */ \"../../node_modules/kabanery/src/view/index.js\");\n\nconst {\n  dispatchEvent,\n  clearEvents\n} = __webpack_require__(/*! ./event */ \"../../node_modules/kabanery/src/event/index.js\");\n\nconst {\n  toHTML,\n  mount\n} = __webpack_require__(/*! ./resolver */ \"../../node_modules/kabanery/src/resolver/index.js\");\n\nmodule.exports = {\n  n,\n  isKabaneryNode,\n  svgn,\n  view,\n  mount,\n  toHTML,\n\n  parseArgs,\n  parseStyle,\n  dispatchEvent,\n  clearEvents\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/n/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isObject,\n  isNode\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\n\nconst parseArgs = __webpack_require__(/*! ./parseArgs */ \"../../node_modules/kabanery/src/n/parseArgs.js\");\n\nconst parseStyle = __webpack_require__(/*! ./parseStyle */ \"../../node_modules/kabanery/src/n/parseStyle.js\");\n\nconst KABANERY_NODE = 'kabanery_node';\n\nconst isKabaneryNode = (v) => isObject(v) && v.type === KABANERY_NODE;\n\n/**\n * elementType: html, svg\n */\nconst knodeCreator = (elementType) => {\n  return (...args) => {\n    return createKabaneryNode(elementType, args);\n  };\n};\n\nconst createKabaneryNode = (elementType, args) => {\n  let {\n    tagName,\n    attributes,\n    childs\n  } = parseArgs(args);\n\n  if (isKabaneryNode(attributes) ||\n    isNode(attributes)) {\n    childs = [attributes];\n    attributes = {};\n  }\n\n  const {\n    attrMap,\n    eventMap\n  } = splitAttribues(attributes);\n\n  return {\n    tagName,\n    attrMap,\n    eventMap,\n    elementType,\n    type: KABANERY_NODE,\n    childNodes: childs,\n  };\n};\n\n/**\n * split event handlers\n */\nconst splitAttribues = (attributes) => {\n  const attrMap = {},\n    eventMap = {};\n  for (const name in attributes) {\n    const item = attributes[name];\n    if (name.indexOf('on') === 0) {\n      eventMap[name.substring(2)] = item;\n    } else {\n      attrMap[name] = item;\n    }\n  }\n  return {\n    attrMap,\n    eventMap\n  };\n};\n\nmodule.exports = {\n  n: knodeCreator('html'),\n  svgn: knodeCreator('svg'),\n  knodeCreator,\n  isKabaneryNode,\n  parseArgs,\n  parseStyle\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/n/parseArgs.js":
/*!*************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseArgs.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst parseAttribute = __webpack_require__(/*! ./parseAttribute */ \"../../node_modules/kabanery/src/n/parseAttribute.js\");\n\nconst {\n  isString,\n  isObject,\n  isNode,\n  likeArray,\n  isNumber,\n  isBool\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\n\nconst parseArgs = (args, {\n  doParseStyle = true\n} = {}) => {\n  let tagName,\n    attributes = {},\n    childExp = [];\n\n  let first = args.shift();\n\n  let parts = splitTagNameAttribute(first);\n\n  if (parts.length > 1) { // not only tagName\n    tagName = parts[0];\n    attributes = parts[1];\n  } else {\n    tagName = first;\n  }\n\n  let next = args.shift();\n\n  let nextAttr = {};\n\n  if (likeArray(next) ||\n        isString(next) ||\n        isNode(next) ||\n        isNumber(next) ||\n        isBool(next)) {\n    childExp = next;\n  } else if (isObject(next)) {\n    nextAttr = next;\n    childExp = args.shift() || [];\n  }\n\n  attributes = parseAttribute(attributes, nextAttr, {\n    doParseStyle\n  });\n\n  let childs = parseChildExp(childExp);\n\n  return {\n    tagName,\n    attributes,\n    childs\n  };\n};\n\nlet splitTagNameAttribute = (str = '') => {\n  if (typeof str !== 'string') return [str];\n\n  let tagName = str.split(' ')[0];\n  let attr = str.substring(tagName.length);\n  attr = attr && attr.trim();\n\n  tagName = tagName.toLowerCase().trim();\n  if (attr) {\n    return [tagName, attr];\n  } else {\n    return [tagName];\n  }\n};\n\nconst parseChildExp = (childExp) => {\n  let ret = [];\n  if (isNode(childExp)) {\n    ret.push(childExp);\n  } else if (likeArray(childExp)) {\n    for (let i = 0; i < childExp.length; i++) {\n      let child = childExp[i];\n      ret = ret.concat(parseChildExp(child));\n    }\n  } else if (childExp) {\n    ret.push(childExp);\n  }\n  return ret;\n};\n\nmodule.exports = parseArgs;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseArgs.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/n/parseAttribute.js":
/*!******************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseAttribute.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n  isString\n} = __webpack_require__(/*! basetype */ \"../../node_modules/basetype/index.js\");\n\nlet parseStyle = __webpack_require__(/*! ./parseStyle */ \"../../node_modules/kabanery/src/n/parseStyle.js\");\n\nlet {\n  mergeMap\n} = __webpack_require__(/*! bolzano */ \"../../node_modules/bolzano/index.js\");\n\nconst ITEM_REG = /([\\w-]+)\\s*=\\s*(([\\w-]+)|('.*?')|(\".*?\"))/;\n\n// TODO better key=value grammer\n// TODO refactor with grammerL: class grammer, id grammer, refer some popular grammer\nlet parseAttribute = (attributes, nextAttr, {\n  doParseStyle\n}) => {\n  // key=value key=value\n  // value='abc' value=true value=123 value=\"def\"\n  if (isString(attributes)) {\n    let str = attributes.trim(),\n      kvs = [];\n\n    let stop = false;\n    while (!stop) {\n      let newstr = str.replace(ITEM_REG, (matchStr, $1, $2) => {\n        kvs.push([$1, $2]);\n        return '';\n      }).trim();\n      if (newstr === str) {\n        stop = true;\n      }\n      str = newstr;\n    }\n\n    attributes = {};\n    for (let i = 0; i < kvs.length; i++) {\n      let [key, value] = kvs[i];\n      if (value[0] === '\\'' && value[value.length - 1] === '\\'' ||\n                value[0] === '\"' && value[value.length - 1] === '\"') {\n        value = value.substring(1, value.length - 1);\n      }\n      attributes[key] = value;\n    }\n  }\n  // merge\n  attributes = mergeMap(attributes, nextAttr);\n\n  if (attributes.style && doParseStyle) {\n    attributes.style = parseStyle(attributes.style);\n  }\n\n  // TODO presudo\n  /*\n    if (attributes.presudo) {\n        for (let name in attributes.presudo) {\n            attributes.presudo[name] = parseStyle(attributes.presudo[name]);\n        }\n    }\n   */\n\n  return attributes;\n};\n\nmodule.exports = parseAttribute;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseAttribute.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/n/parseStyle.js":
/*!**************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseStyle.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  isString,\n  isObject\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\n\nmodule.exports = (attr = '', {\n  keyWrapper,\n  valueWrapper\n} = {}) => {\n  if (isString(attr)) {\n    return attr;\n  }\n\n  if (!isObject(attr)) {\n    throw new TypeError(`Expect object for style object, but got ${attr}`);\n  }\n\n  const styles = [];\n\n  for (let key in attr) {\n    let value = attr[key];\n    key = convertStyleKey(key);\n    value = convertStyleValue(value, key);\n    if (keyWrapper) {\n      key = keyWrapper(key, value);\n    }\n\n    if (valueWrapper) {\n      value = valueWrapper(value, key);\n    }\n\n    styles.push(`${key}: ${value};`);\n  }\n\n  return styles.join('');\n};\n\nconst convertStyleKey = (key) => {\n  return key.replace(/[A-Z]/, (letter) => {\n    return `-${letter.toLowerCase()}`;\n  });\n};\n\nconst convertStyleValue = (value, key) => {\n  if (typeof value === 'number' && key !== 'z-index') {\n    return value + 'px';\n  }\n  if (key === 'padding' || key === 'margin') {\n    let parts = value.split(' ');\n    for (let i = 0; i < parts.length; i++) {\n      let part = parts[i];\n      if (!isNaN(Number(part))) {\n        parts[i] = part + 'px';\n      }\n    }\n\n    value = parts.join(' ');\n  }\n  return value;\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/n/parseStyle.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/resolver/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/resolver/index.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isNode,\n  createElement,\n  createSvgElement\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\nconst {\n  isKabaneryNode\n} = __webpack_require__(/*! ../n */ \"../../node_modules/kabanery/src/n/index.js\");\nconst {\n  bindEvents,\n  attachDocument\n} = __webpack_require__(/*! ../event */ \"../../node_modules/kabanery/src/event/index.js\");\nconst {\n  flat,\n  forEach,\n  map\n} = __webpack_require__(/*! bolzano */ \"../../node_modules/bolzano/index.js\");\n\nconst toHTML = (node) => {\n  if (isNode(node)) {\n    return node.outerHTML;\n  } else if (isKabaneryNode(node)) {\n    const {\n      tagName,\n      attrMap,\n      childNodes\n    } = node;\n\n    let attrs = [];\n    for (const key in attrMap) {\n      const value = attrMap[key];\n      attrs.push(`${key}=\"${value}\"`);\n    }\n\n    let attrStr = attrs.join(' ');\n    attrStr = attrStr ? ' ' + attrStr : '';\n\n    let childs = [];\n    for (let i = 0, n = childNodes.length; i < n; i++) {\n      childs.push(toHTML(childNodes[i]));\n    }\n\n    return `<${tagName}${attrStr}>${childs.join('')}</${tagName}>`;\n  } else {\n    return node + '';\n  }\n};\n\n/**\n * @param parentNode\n *      the dom node used hook node we rendered\n */\nconst mount = (kabaneryRoots, parentNode) => {\n  kabaneryRoots = flat(kabaneryRoots);\n\n  forEach(kabaneryRoots, (item) => {\n    item = toDomNode(item);\n    if (isNode(item)) {\n      parentNode.appendChild(item);\n    }\n  });\n\n  // attach to document\n  attachDocument(getDoc(parentNode));\n};\n\nconst toDomNode = (kNode) => {\n  if (isKabaneryNode(kNode)) {\n    let nativeNode = null;\n    if (kNode.elementType === 'html') {\n      nativeNode = createElement(kNode.tagName, kNode.attrMap, map(kNode.childNodes, toDomNode));\n    } else { // svg\n      nativeNode = createSvgElement(kNode.tagName, kNode.attrMap, map(kNode.childNodes, toDomNode));\n    }\n\n    if (kNode.ctx) {\n      kNode.ctx.bindNativeNode(nativeNode);\n    }\n\n    bindEvents(nativeNode, kNode.eventMap);\n    return nativeNode;\n  } else if (isNode(kNode)) {\n    return kNode;\n  } else {\n    return document.createTextNode(kNode.toString());\n  }\n};\n\nconst getDoc = (node) => {\n  while (node.parentNode) {\n    node = node.parentNode;\n  }\n  return node;\n};\n\nmodule.exports = {\n  toDomNode,\n  toHTML,\n  mount\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/resolver/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/util/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/util/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst toArray = (v) => Array.prototype.slice.call(v);\n\nconst isNode = (o) => {\n  return (\n    typeof Node === 'object' ? o instanceof Node : o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'\n  );\n};\n\nconst bind = (fn, ctx) => {\n  return (...args) => {\n    return fn.apply(ctx, args);\n  };\n};\n\nconst isObject = (v) => v && typeof v === 'object';\n\nconst isString = (v) => typeof v === 'string';\n\nconst isNumber = (v) => typeof v === 'number';\n\nconst likeArray = (v) => isObject(v) && isNumber(v.length) && v.length >= 0;\n\nconst isBool = (v) => typeof v === 'boolean';\n\nconst isFunction = (v) => typeof v === 'function';\n\nconst set = (sandbox, name = '', value) => {\n  name = name.trim();\n  let parts = !name ? [] : name.split('.');\n  let parent = sandbox;\n  if (!isObject(parent)) return;\n  if (!parts.length) return;\n  for (let i = 0; i < parts.length - 1; i++) {\n    let part = parts[i];\n    let next = parent[part];\n    if (!isObject(next)) {\n      next = {};\n      parent[part] = next;\n    }\n    parent = next;\n  }\n\n  parent[parts[parts.length - 1]] = value;\n  return sandbox;\n};\n\nconst svgNS = 'http://www.w3.org/2000/svg';\n\nconst applyNode = (node, attributes, childs) => {\n  for (let name in attributes) {\n    const attr = attributes[name];\n    node.setAttribute(name, attr);\n  }\n\n  for (let i = 0; i < childs.length; i++) {\n    const child = childs[i];\n    if (isNode(child)) {\n      node.appendChild(child);\n    } else {\n      node.textContent = child + '';\n    }\n  }\n};\n\nconst createElement = (tagName, attributes, childs) => {\n  const node = document.createElement(tagName);\n  applyNode(node, attributes, childs);\n  return node;\n};\n\nconst createSvgElement = (tagName, attributes, childs) => {\n  const node = document.createElementNS(svgNS, tagName);\n  applyNode(node, attributes, childs);\n  return node;\n};\n\nconst getAttributeMap = (attributes = []) => {\n  const map = {};\n  for (let i = 0; i < attributes.length; i++) {\n    const {\n      name,\n      value\n    } = attributes[i];\n    map[name] = value;\n  }\n  return map;\n};\n\nconst removeNode = (oldNode) => {\n  let parent = oldNode.parentNode;\n  if (parent) {\n    parent.removeChild(oldNode);\n  }\n};\n\nconst hasOwnProperty = (obj, key) => {\n  if (obj.hasOwnProperty) {\n    return obj.hasOwnProperty(key);\n  }\n  for (const name in obj) {\n    if (name === key) return true;\n  }\n  return false;\n};\n\nconst emptyChildren = (node) => {\n  const childNodes = node.childNodes;\n  for (let i = 0, n = childNodes.length; i < n; i++) {\n    node.removeChild(childNodes[i]);\n  }\n};\n\nconst getTagName = (node) => {\n  return node.tagName.toUpperCase();\n};\n\nconst getAttrMap = (node) => {\n  if (isNode(node)) {\n    return getAttributeMap(node.attributes);\n  } else { // kabanery node\n    return node.attrMap;\n  }\n};\n\nconst getTextAreaTextContent = (node) => {\n  if (isNode(node)) {\n    return node.textContent;\n  } else {\n    return (node.childNodes.length && node.childNodes[0]) || '';\n  }\n};\n\nconst getAttributeValue = (node, key) => {\n  if (isNode(node)) {\n    return node.getAttribute(key);\n  } else {\n    return node.attrMap[key];\n  }\n};\n\nmodule.exports = {\n  toArray,\n  isNode,\n  isObject,\n  likeArray,\n  bind,\n  isString,\n  isNumber,\n  isBool,\n  isFunction,\n  set,\n  createElement,\n  createSvgElement,\n  getAttributeMap,\n  removeNode,\n  hasOwnProperty,\n  emptyChildren,\n  getTagName,\n  getAttrMap,\n  getTextAreaTextContent,\n  getAttributeValue\n\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/util/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/view/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isFunction\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\nconst updateData = __webpack_require__(/*! ./updateData */ \"../../node_modules/kabanery/src/view/updateData.js\");\nconst replace = __webpack_require__(/*! ./replace */ \"../../node_modules/kabanery/src/view/replace/index.js\");\nconst {\n  mount\n} = __webpack_require__(/*! ../resolver */ \"../../node_modules/kabanery/src/resolver/index.js\");\n\nconst ViewContext = function(render, obj) {\n  this.nativeNode = null; // record corresponding native node\n  this.data = obj;\n  this.render = render;\n  this.kNode = null; // cache old kabanery node\n};\n\nViewContext.prototype = {\n  construct: ViewContext,\n\n  update: function(...args) {\n    updateData(this.data, args);\n    return this.renderNativeView();\n  },\n\n  // for some special situation, like log view\n  // TODO prepend?\n  appendView: function(itemView) {\n    if (this.nativeNode) {\n      mount(itemView, this.nativeNode);\n    }\n  },\n\n  /**\n   * render view according to current data\n   *\n   * do the diff to reduce dom operations\n   */\n  renderNativeView: function() {\n    const newKNode = this.getKabaneryNode();\n    this.nativeNode = replace(this.nativeNode, newKNode, this.kNode);\n    // update KNode to latest\n    this.kNode = newKNode;\n    return this.nativeNode;\n  },\n\n  /**\n   * run render function and get the tree based on n function\n   */\n  renderKabaneryNode: function() {\n    this.kNode = this.getKabaneryNode();\n    return this.kNode;\n  },\n\n  getKabaneryNode: function() {\n    const kNode = this.render(this.data, this.getContext());\n\n    if (isFunction(kNode)) { // closure\n      this.render = kNode;\n      return this.getKabaneryNode(this.data, this.getContext());\n    } else {\n      kNode.ctx = this.getContext(); // hook the content\n      return kNode;\n    }\n  },\n\n  getKNode: function() {\n    return this.kNode;\n  },\n\n  getNativeNode: function() {\n    return this.nativeNode;\n  },\n\n  getData: function() {\n    return this.data;\n  },\n\n  getContext: function() {\n    return this._ctx;\n  },\n\n  bindNativeNode: function(node) {\n    this.nativeNode = node;\n  }\n};\n\nvar getViewContext = (view, obj) => {\n  const _ctx = {};\n\n  const ctxInst = new ViewContext(view, obj);\n\n  ctxInst._ctx = _ctx;\n\n  for (const name in ViewContext.prototype) {\n    if (name !== 'construct') {\n      _ctx[name] = (...args) => ctxInst[name].apply(ctxInst, args);\n    }\n  }\n\n  return _ctx;\n};\n\nmodule.exports = {\n  /**\n   * create a view class\n   */\n  view: (viewFun) => {\n    /**\n     * create a view instance\n     *\n     * (data) -> nativeNode\n     */\n    return (obj) => {\n      // create context\n      const ctx = getViewContext(viewFun, obj);\n      // render node\n      const kNode = ctx.renderKabaneryNode();\n\n      return kNode;\n    };\n  }\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/view/replace/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/replace/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  toDomNode\n} = __webpack_require__(/*! ../../resolver */ \"../../node_modules/kabanery/src/resolver/index.js\");\nconst {\n  removeNode,\n  getTagName,\n  getTextAreaTextContent,\n  getAttributeValue,\n  getAttrMap,\n  hasOwnProperty\n} = __webpack_require__(/*! ../../util */ \"../../node_modules/kabanery/src/util/index.js\");\nconst {\n  eventMapHook\n} = __webpack_require__(/*! ../../const */ \"../../node_modules/kabanery/src/const/index.js\");\nconst {\n  isKabaneryNode\n} = __webpack_require__(/*! ../../n */ \"../../node_modules/kabanery/src/n/index.js\");\n\nconst editAttributes = (node, newKNode, oldKNode) => {\n  // attributes\n  const orinAttrMap = getAttrMap(oldKNode);\n  const newAttrMap = getAttrMap(newKNode);\n\n  // update and remove\n  for (const name in orinAttrMap) {\n    const orinValue = orinAttrMap[name];\n    if (hasOwnProperty(newAttrMap, name)) {\n      let newValue = newAttrMap[name];\n      if (newValue !== orinValue) {\n        node.setAttribute(name, newValue);\n      }\n    } else {\n      node.removeAttribute(name);\n    }\n  }\n\n  for (const name in newAttrMap) {\n    const newAttr = newAttrMap[name];\n    if (!hasOwnProperty(orinAttrMap, name)) {\n      node.setAttribute(name, newAttr);\n    }\n  }\n};\n\n// node and newKNode have the same tagName\nconst editNode = (node, newKNode, oldKNode) => {\n  // attributes\n  editAttributes(node, newKNode, oldKNode);\n\n  // hacks for dom\n  if (getTagName(node) === 'TEXTAREA') {\n    node.value = getTextAreaTextContent(newKNode);\n  }\n  if (getTagName(node) === 'INPUT') {\n    node.value = getAttributeValue(newKNode, 'value');\n  }\n\n  // transfer event map\n  node[eventMapHook] = newKNode.eventMap || {};\n\n  diffList(newKNode.childNodes, oldKNode.childNodes, node);\n};\n\n// TODO using key\nconst diffList = (newKChilds, oldKChilds, parent) => {\n  const childNodes = parent.childNodes,\n    oldLen = oldKChilds.length,\n    newLen = newKChilds.length;\n\n  // remove\n  for (let i = newLen; i < oldLen; i++) {\n    childNodes[i] && removeNode(childNodes[i]);\n  }\n\n  // diff\n  for (let i = 0, n = Math.min(newLen, oldLen); i < n; i++) {\n    diffNode(childNodes[i], newKChilds[i], oldKChilds[i]);\n  }\n\n  // append\n  for (let i = oldLen; i < newLen; i++) {\n    parent.appendChild(toDomNode(newKChilds[i]));\n  }\n};\n\nconst diffNode = (node, newKNode, oldKNode) => {\n  if (isKabaneryNode(newKNode) && isKabaneryNode(oldKNode)) {\n    if (getTagName(oldKNode) !== getTagName(newKNode)) {\n      return replaceDirectly(node, newKNode);\n    } else {\n      editNode(node, newKNode, oldKNode);\n      // binding native node\n      if (newKNode.ctx) {\n        newKNode.ctx.bindNativeNode(node);\n      }\n      return node;\n    }\n  } else {\n    return replaceDirectly(node, newKNode);\n  }\n};\n\n/**\n * replace old node with new node\n */\nconst replaceDirectly = (node, newKNode) => {\n  const parent = node.parentNode;\n  const newNode = toDomNode(newKNode);\n  // replace\n  parent.replaceChild(newNode, node);\n  return newNode;\n};\n\n// TODO type check for newNode\nmodule.exports = (realNode, newKNode, oldKNode) => {\n  if (!realNode) { // add new node\n    return toDomNode(newKNode);\n  } else if (!newKNode) { // delete old node\n    removeNode(realNode);\n    return null;\n  } else { // diff with old node\n    return diffNode(realNode, newKNode, oldKNode);\n  }\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/replace/index.js?");

/***/ }),

/***/ "../../node_modules/kabanery/src/view/updateData.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/updateData.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  set,\n  isFunction,\n  likeArray\n} = __webpack_require__(/*! ../util */ \"../../node_modules/kabanery/src/util/index.js\");\n\nconst updateData = (data, scripts) => {\n  if (scripts.length === 1 && likeArray(scripts[0])) {\n    let arg = scripts[0];\n    for (let i = 0, n = arg.length; i < n; i++) {\n      const item = arg[i];\n      set(data, item[0], item[1]);\n    }\n  } else {\n    let [path, value] = scripts;\n\n    // function is a special data\n    if (isFunction(value)) {\n      value = value(data);\n    }\n\n    set(data, path, value);\n  }\n};\n\nmodule.exports = updateData;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/kabanery/src/view/updateData.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!*********************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/lib/bytesToUuid.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!*********************************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/lib/rng-browser.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!********************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/v4.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"../../node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"../../node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/node_modules/uuid/v4.js?");

/***/ }),

/***/ "../../src/base/TextField.js":
/*!******************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/base/TextField.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const glareView = __webpack_require__(/*! ../util/glareView */ \"../../src/util/glareView.js\");\n\nmodule.exports = glareView(({\n  props,\n  onChange,\n  onEvent,\n  n\n}, ctx) => {\n  return n('div', {\n    style: props.style.box,\n\n    onclick: (e) => {\n      onEvent({\n        type: 'click',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'focused');\n    },\n\n    onfocusin: (e) => {\n      onEvent({\n        type: 'focusin',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'focused');\n    },\n\n    onfocusout: (e) => {\n      onEvent({\n        type: 'focusout',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'unfocused');\n    },\n\n    onmouseover: (e) => {\n      onEvent({\n        type: 'mouseover',\n        sourceEvent: e\n      });\n      if (props.activeStatus === 'unfocused') {\n        ctx.update('props.activeStatus', 'hover');\n      }\n    },\n\n    onmouseout: (e) => {\n      onEvent({\n        type: 'mouseout',\n        sourceEvent: e\n      });\n      if (props.activeStatus === 'hover') {\n        ctx.update('props.activeStatus', 'unfocused');\n      }\n    }\n  }, [\n    // input box\n    n('input', {\n      style: props.style.input,\n      value: props.value,\n      type: props.type,\n      // TODO other events\n      oninput: (e) => {\n        if (e.target.value !== props.value) {\n          props.value = e.target.value;\n          onChange(props, e); // onChange should always report the change\n        }\n\n        onEvent({\n          type: 'input',\n          sourceEvent: e\n        });\n      }\n    }),\n\n    n('label', {\n      style: props.activeStatus === 'focused' ? props.style.placeholder.active : props.value !== '' ? props.style.placeholder.placeContent : props.style.placeholder.place\n    }, `${props.placeholder}`),\n\n    // hover line\n    n('div', {\n      style: props.activeStatus === 'hover' ? props.style.hover : ''\n    }),\n\n    // focus line\n    n('div', {\n      style: props.activeStatus === 'focused' ? props.style.focus.active : props.style.focus.unactive\n    })\n  ]);\n}, {\n  id: 'TextField',\n  defaultProps: {\n    placeholder: '',\n    value: '',\n    type: 'text',\n    activeStatus: 'unfocused'\n  }\n});\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/base/TextField.js?");

/***/ }),

/***/ "../../src/base/button.js":
/*!***************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/base/button.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const glareView = __webpack_require__(/*! ../util/glareView */ \"../../src/util/glareView.js\");\n\nmodule.exports = glareView(({\n  props,\n  onEvent,\n  n,\n  children\n}, ctx) => {\n  const style = props.style.box[props.type][props.color][props.activeStatus];\n\n  return n('button', {\n    style,\n    onclick: (e) => {\n      onEvent({\n        type: 'click',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'active');\n      setTimeout(() => {\n        if (props.activeStatus === 'active') {\n          ctx.update('props.activeStatus', 'hover');\n        }\n      }, 200);\n    },\n\n    onmouseover: (e) => {\n      onEvent({\n        type: 'mouseover',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'hover');\n    },\n\n    onmouseout: (e) => {\n      onEvent({\n        type: 'mouseout',\n        sourceEvent: e\n      });\n      ctx.update('props.activeStatus', 'normal');\n    }\n  }, [\n    n('span', [\n      children\n    ])\n  ]);\n}, {\n  id: 'Button',\n  defaultProps: {\n    type: 'text',\n    color: 'default',\n    activeStatus: 'normal'\n  }\n});\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/base/button.js?");

/***/ }),

/***/ "../../src/index.js":
/*!*********************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const glareView = __webpack_require__(/*! ./util/glareView */ \"../../src/util/glareView.js\");\n\nmodule.exports = {\n  glareView\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/index.js?");

/***/ }),

/***/ "../../src/theme/base.js":
/*!**************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/theme/base.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * define the default style for kabanery-glare\n */\n\nconst {\n  mergeDeep\n} = __webpack_require__(/*! ../util/util */ \"../../src/util/util.js\");\n\nmodule.exports = (basics = {\n  box: {\n    margin: 0\n  },\n\n  font: {\n    size: {\n      normal: '1rem',\n      small: '0.75rem'\n    },\n    color: {\n      placeholder: 'rgba(0, 0, 0, 0.54)'\n    }\n  },\n\n  line: {\n    color: {\n      normal: 'rgba(0, 0, 0, 0.42)',\n      hover: 'rgb(31,31,31)',\n      light: '#1976d2'\n    }\n  }\n}) => {\n  const btnBase = {\n    normal: {\n      border: 0,\n      margin: basics.box.margin,\n      boxSizing: 'border-box',\n      padding: '8px 16px',\n      minWidth: 64,\n      minHeight: 36,\n      fontSize: '0.875rem',\n      cursor: 'pointer',\n      letterSpacing: '0.02857em',\n      fontWeight: '500',\n      borderRadius: 4,\n      textTransform: 'uppercase',\n      lineHeight: '1.5',\n      outline: 0\n    },\n\n    hover: {\n      border: 0,\n      margin: basics.box.margin,\n      boxSizing: 'border-box',\n      padding: '8px 16px',\n      minWidth: 64,\n      minHeight: 36,\n      fontSize: '0.875rem',\n      cursor: 'pointer',\n      letterSpacing: '0.02857em',\n      fontWeight: '500',\n      borderRadius: 4,\n      textTransform: 'uppercase',\n      lineHeight: '1.5',\n      textDecoration: 'none',\n      outline: 0\n    },\n\n    active: {\n      border: 0,\n      margin: basics.box.margin,\n      boxSizing: 'border-box',\n      padding: '8px 16px',\n      minWidth: 64,\n      minHeight: 36,\n      fontSize: '0.875rem',\n      cursor: 'pointer',\n      letterSpacing: '0.02857em',\n      fontWeight: '500',\n      borderRadius: 4,\n      textTransform: 'uppercase',\n      lineHeight: '1.5',\n      textDecoration: 'none',\n      outline: 0\n    }\n  };\n\n  return {\n    TextField: {\n      box: {\n        display: 'inline-flex',\n        position: 'relative',\n        width: 200,\n        height: 48,\n        cursor: 'text',\n        margin: basics.box.margin,\n        padding: 0,\n        boxSizing: 'border-box'\n      },\n\n      placeholder: {\n        place: {\n          position: 'absolute',\n          left: 0,\n          fontSize: basics.font.size.normal,\n          color: basics.font.color.placeholder,\n          cursor: 'text',\n          transform: 'translate(0, 24px) scale(1)',\n          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'\n        },\n\n        active: {\n          position: 'absolute',\n          top: 0,\n          left: 0,\n          fontSize: basics.font.size.normal,\n          color: basics.line.color.light,\n          transform: 'translate(0, 1.5px) scale(0.75)',\n          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'\n        },\n\n        placeContent: {\n          position: 'absolute',\n          top: 0,\n          left: 0,\n          transform: 'translate(0, 1.5px) scale(0.75)',\n          fontSize: basics.font.size.normal,\n          color: basics.font.color.placeholder,\n          cursor: 'text'\n        }\n      },\n\n      input: {\n        width: '100%',\n        height: 30,\n        position: 'absolute',\n        bottom: 0,\n        left: 0,\n        margin: 0,\n        padding: '0 6px 0 6px',\n        border: 'none',\n        borderBottom: `1px solid ${basics.line.color.normal}`,\n        fontSize: basics.font.size.normal,\n        outline: 'none',\n        boxSizing: 'border-box'\n      },\n\n      hover: {\n        position: 'absolute',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        borderBottom: `2px solid ${basics.line.color.hover}`,\n      },\n\n      focus: {\n        active: {\n          position: 'absolute',\n          bottom: 0,\n          left: 0,\n          right: 0,\n          borderBottom: `2px solid ${basics.line.color.light}`,\n          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'\n        },\n        unactive: {\n          position: 'absolute',\n          bottom: 0,\n          left: 0,\n          right: 0,\n          borderBottom: `2px solid ${basics.line.color.light}`,\n          transform: 'scaleX(0)',\n          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'\n        }\n      }\n    },\n\n    Button: {\n      box: {\n        text: {\n          default: mergeDeep(btnBase, {\n            normal: {\n              color: 'rgba(0, 0, 0, 0.87)',\n            },\n            hover: {\n              color: 'rgba(0, 0, 0, 0.87)',\n              backgroundColor: 'rgba(0, 0, 0, 0.08)',\n            },\n            active: {\n              color: 'rgba(0, 0, 0, 0.87)',\n              backgroundColor: 'rgba(0, 0, 0, 0.3)',\n            }\n          }),\n\n          primary: mergeDeep(btnBase, {\n            normal: {\n              color: '#2196f3'\n            },\n            hover: {\n              color: '#2196f3',\n              backgroundColor: 'rgba(33, 150, 243, 0.08)',\n            },\n            active: {\n              color: '#2196f3',\n              backgroundColor: 'rgba(33, 150, 243, 0.3)',\n            }\n          }),\n\n          secondary: mergeDeep(btnBase, {\n            normal: {\n              color: 'rgb(225, 0, 80)'\n            },\n            hover: {\n              color: 'rgb(225, 0, 80)',\n              backgroundColor: 'rgba(225, 0, 80, 0.08)',\n            },\n            active: {\n              color: 'rgb(225, 0, 80)',\n              backgroundColor: 'rgba(225, 0, 80, 0.3)',\n            }\n          })\n        },\n\n        contained: {\n          default: mergeDeep(btnBase, {\n            normal: {\n              border: 0,\n              color: 'rgba(0, 0, 0, 0.87)',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#e0e0e0'\n            },\n            hover: {\n              border: 0,\n              color: 'rgba(0, 0, 0, 0.87)',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#d5d5d5'\n            },\n            active: {\n              border: 0,\n              color: 'rgba(0, 0, 0, 0.87)',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#e0e0e0'\n            }\n          }),\n\n          primary: mergeDeep(btnBase, {\n            normal: {\n              border: 0,\n              color: '#fff',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#2196f3'\n            },\n            hover: {\n              border: 0,\n              color: '#fff',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#1976d2'\n            },\n            active: {\n              border: 0,\n              color: '#fff',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: '#2196f3'\n            }\n          }),\n\n          secondary: mergeDeep(btnBase, {\n            normal: {\n              border: 0,\n              color: '#fff',\n              backgroundColor: 'rgb(225, 0, 80)',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'\n            },\n            hover: {\n              border: 0,\n              color: '#fff',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: 'rgb(157, 0, 56)'\n            },\n            active: {\n              border: 0,\n              color: '#fff',\n              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',\n              backgroundColor: 'rgb(225, 0, 80)'\n            }\n          })\n        }\n      }\n    }\n  };\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/theme/base.js?");

/***/ }),

/***/ "../../src/util/glareView.js":
/*!******************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/util/glareView.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  view,\n  parseArgs,\n  n\n} = __webpack_require__(/*! kabanery */ \"../../node_modules/kabanery/index.js\");\nconst uuidv4 = __webpack_require__(/*! uuid/v4 */ \"../../node_modules/uuid/v4.js\");\nconst {\n  get,\n  set,\n  isObject\n} = __webpack_require__(/*! ./util */ \"../../src/util/util.js\");\n\nconst defaultTheme = __webpack_require__(/*! ../theme/base */ \"../../src/theme/base.js\")();\nconst noop = () => {};\n\nconst copyTo = (obj1, obj2) => {\n  for (let name in obj2) {\n    if (obj2[name] !== null && obj2[name] !== undefined) {\n      if (obj1[name] === null || obj1[name] === undefined) {\n        obj1[name] = obj2[name];\n      } else {\n        if (typeof obj1[name] === 'object' && typeof obj2[name] === 'object') {\n          obj1[name] = copyTo(obj1[name], obj2[name]);\n        }\n      }\n    }\n  }\n\n  return obj1;\n};\n\nmodule.exports = (render, {\n  /**\n   * id rule: (1) specify a name, like 'input', 'text'\n   *          (2) auto generate an id\n   * TODO: avoid repeated name by using global view map\n   */\n  id = uuidv4(),\n  defaultProps\n} = {}) => {\n  if (typeof render !== 'function') {\n    throw new Error(`Expect function for glare view render, but got ${render}`);\n  }\n  return view((data, ctx) => {\n    data.onChange = data.onChange || noop;\n    data.onEvent = data.onEvent || noop;\n    data.theme = data.theme || defaultTheme;\n    /**\n     * priority:\n     *  props >> defaultProps >> theme\n     */\n    copyTo(data.props, defaultProps);\n    copyTo(data.props, {\n      style: data.theme[id]\n    });\n\n    data.n = (...args) => {\n      const {\n        tagName,\n        attributes,\n        childs\n      } = parseArgs(args);\n      if (typeof tagName === 'function') { // TODO check is glare view or not\n        return tagName({\n          props: attributes.props,\n          onChange: attributes.onChange,\n          onEvent: attributes.onEvent,\n          theme: attributes.theme, // extend theme to all glare view children\n          children: childs\n        });\n      } else {\n        return n(tagName, attributes, childs);\n      }\n    };\n\n    /**\n     * bind props of current view with child view\n     *\n     * @param propsPath string a json path\n     */\n    data.bn = (childView, {\n      propsPath,\n      onChildChange,\n      doUpdate = false\n    }, children) => {\n      // get child props by json path\n      // if child props is not exists, set default value\n      let childProps = get(data.props, propsPath);\n      if (!isObject(childProps)) {\n        childProps = {};\n        set(data.props, propsPath, childProps);\n      }\n      return childView({\n        props: childProps,\n        onChange: (newChildProps, e) => {\n          // update parent props\n          set(data.props, propsPath, newChildProps);\n          if (onChildChange) {\n            onChildChange(newChildProps, e);\n          }\n          if (doUpdate) {\n            ctx.update();\n          }\n          data.onChange(data.props, e);\n        },\n        onEvent: (e) => {\n          data.onEvent(e);\n        },\n        theme: data.theme,\n        children\n      });\n    };\n\n    return render(data, ctx);\n  });\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/util/glareView.js?");

/***/ }),

/***/ "../../src/util/util.js":
/*!*************************************************************************************!*\
  !*** /Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/util/util.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * merge two objects\n */\nconst mergeDeep = (obj1, obj2) => {\n  if (obj1 === null || obj1 === undefined) return obj2;\n  if (obj2 === null || obj2 === undefined) return obj1;\n\n  if (typeof obj1 === 'object' && typeof obj2 === 'object') {\n    const newObj = Object.assign({}, obj1); // copy obj1\n    for (let key in obj2) {\n      newObj[key] = mergeDeep(newObj[key], obj2[key]);\n    }\n    return newObj;\n  }\n\n  return obj2;\n};\n\nconst isObject = (v) => v && typeof v === 'object';\n\nconst set = (sandbox, name = '', value) => {\n  name = name.trim();\n  const parts = !name ? [] : name.split('.');\n  let parent = sandbox;\n  if (!isObject(parent)) return;\n  if (!parts.length) return;\n  for (let i = 0; i < parts.length - 1; i++) {\n    let part = parts[i];\n    let next = parent[part];\n    if (!isObject(next)) {\n      next = {};\n      parent[part] = next;\n    }\n    parent = next;\n  }\n\n  parent[parts[parts.length - 1]] = value;\n  return sandbox;\n};\n\n/**\n * a.b.c\n */\nconst get = (sandbox, name = '') => {\n  name = name.trim();\n  let parts = !name ? [] : name.split('.');\n\n  let parent = sandbox;\n\n  for (let i = 0; i < parts.length; i++) {\n    const part = parts[i];\n    if (!isObject(parent)) return undefined;\n    parent = sandbox[part];\n  }\n\n  return parent;\n};\n\nmodule.exports = {\n  mergeDeep,\n  set,\n  get,\n  isObject\n};\n\n\n//# sourceURL=webpack:////Users/yuer/workspaceforme/ddki/tech/base/web/kabanery-glare/src/util/util.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TextField = __webpack_require__(/*! ../../src/base/TextField */ \"../../src/base/TextField.js\");\nconst Button = __webpack_require__(/*! ../../src/base/button */ \"../../src/base/button.js\");\nconst {\n  glareView\n} = __webpack_require__(/*! ../../src */ \"../../src/index.js\");\n\nconst {\n  mount,\n  n\n} = __webpack_require__(/*! kabanery */ \"./node_modules/kabanery/index.js\");\n\nconst Page = glareView(({\n  props,\n  n,\n  bn\n}) => {\n  return n('p', [\n    bn(TextField, {\n      propsPath: 'name',\n      doUpdate: true\n    }),\n    n('br'),\n    n('code', `${props.name.value}`),\n    n('br'),\n    bn(Button, {\n      propsPath: 'button1'\n    }, 'default button'),\n    bn(Button, {\n      propsPath: 'button2'\n    }, 'primary button'),\n    bn(Button, {\n      propsPath: 'button3'\n    }, 'secondary button'),\n\n    bn(Button, {\n      propsPath: 'button4'\n    }, 'default button'),\n    bn(Button, {\n      propsPath: 'button5'\n    }, 'primary button'),\n    bn(Button, {\n      propsPath: 'button6'\n    }, 'secondary button')\n  ]);\n});\n\nmount(n('div', [\n  Page({\n    props: {\n      name: {\n        value: '',\n        placeholder: 'Test'\n      },\n      button1: {},\n      button2: {\n        color: 'primary'\n      },\n      button3: {\n        color: 'secondary'\n      },\n      button4: {\n        type: 'contained'\n      },\n      button5: {\n        color: 'primary',\n        type: 'contained'\n      },\n      button6: {\n        color: 'secondary',\n        type: 'contained'\n      },\n    }\n  })\n]), document.body);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/basetype/index.js":
/*!****************************************!*\
  !*** ./node_modules/basetype/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * basic types\n */\n\nlet truth = () => true;\n\nlet isUndefined = v => v === undefined;\n\nlet isNull = v => v === null;\n\nlet isFalsy = v => !v;\n\nlet likeArray = v => !!(v && typeof v === 'object' && typeof v.length === 'number' && v.length >= 0);\n\nlet isArray = v => Array.isArray(v);\n\nlet isString = v => typeof v === 'string';\n\nlet isObject = v => !!(v && typeof v === 'object');\n\nlet isFunction = v => typeof v === 'function';\n\nlet isNumber = v => typeof v === 'number' && !isNaN(v);\n\nlet isBool = v => typeof v === 'boolean';\n\nlet isNode = (o) => {\n    return (\n        typeof Node === 'object' ? o instanceof Node :\n        o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'\n    );\n};\n\nlet isPromise = v => v && typeof v === 'object' && typeof v.then === 'function' && typeof v.catch === 'function';\n\nlet isRegExp = v => v instanceof RegExp;\n\nlet isReadableStream = (v) => isObject(v) && isFunction(v.on) && isFunction(v.pipe);\n\nlet isWritableStream = v => isObject(v) && isFunction(v.on) && isFunction(v.write);\n\n/**\n * check type\n *\n * types = [typeFun]\n */\nlet funType = (fun, types = []) => {\n    if (!isFunction(fun)) {\n        throw new TypeError(typeErrorText(fun, 'function'));\n    }\n\n    if (!likeArray(types)) {\n        throw new TypeError(typeErrorText(types, 'array'));\n    }\n\n    for (let i = 0; i < types.length; i++) {\n        let typeFun = types[i];\n        if (typeFun) {\n            if (!isFunction(typeFun)) {\n                throw new TypeError(typeErrorText(typeFun, 'function'));\n            }\n        }\n    }\n\n    return function() {\n        // check type\n        for (let i = 0; i < types.length; i++) {\n            let typeFun = types[i];\n            let arg = arguments[i];\n            if (typeFun && !typeFun(arg)) {\n                throw new TypeError(`Argument type error. Arguments order ${i}. Argument is ${arg}. function is ${fun}, args are ${arguments}.`);\n            }\n        }\n        // result\n        return fun.apply(this, arguments);\n    };\n};\n\nlet and = (...args) => {\n    if (!any(args, isFunction)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n    return (v) => {\n        for (let i = 0; i < args.length; i++) {\n            let typeFun = args[i];\n            if (!typeFun(v)) {\n                return false;\n            }\n        }\n        return true;\n    };\n};\n\nlet or = (...args) => {\n    if (!any(args, isFunction)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n\n    return (v) => {\n        for (let i = 0; i < args.length; i++) {\n            let typeFun = args[i];\n            if (typeFun(v)) {\n                return true;\n            }\n        }\n        return false;\n    };\n};\n\nlet not = (type) => {\n    if (!isFunction(type)) {\n        throw new TypeError('The argument of and must be function.');\n    }\n    return (v) => !type(v);\n};\n\nlet any = (list, type) => {\n    if (!likeArray(list)) {\n        throw new TypeError(typeErrorText(list, 'list'));\n    }\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    for (let i = 0; i < list.length; i++) {\n        if (!type(list[i])) {\n            return false;\n        }\n    }\n    return true;\n};\n\nlet exist = (list, type) => {\n    if (!likeArray(list)) {\n        throw new TypeError(typeErrorText(list, 'array'));\n    }\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    for (let i = 0; i < list.length; i++) {\n        if (type(list[i])) {\n            return true;\n        }\n    }\n    return false;\n};\n\nlet mapType = (map) => {\n    if (!isObject(map)) {\n        throw new TypeError(typeErrorText(map, 'obj'));\n    }\n\n    for (let name in map) {\n        let type = map[name];\n        if (!isFunction(type)) {\n            throw new TypeError(typeErrorText(type, 'function'));\n        }\n    }\n\n    return (v) => {\n        if (!isObject(v)) {\n            return false;\n        }\n\n        for (let name in map) {\n            let type = map[name];\n            let attr = v[name];\n            if (!type(attr)) {\n                return false;\n            }\n        }\n\n        return true;\n    };\n};\n\nlet listType = (type) => {\n    if (!isFunction(type)) {\n        throw new TypeError(typeErrorText(type, 'function'));\n    }\n\n    return (list) => any(list, type);\n};\n\nlet typeErrorText = (v, expect) => {\n    return `Expect ${expect} type, but got type ${typeof v}, and value is ${v}`;\n};\n\nmodule.exports = {\n    isArray,\n    likeArray,\n    isString,\n    isObject,\n    isFunction,\n    isNumber,\n    isBool,\n    isNode,\n    isPromise,\n    isNull,\n    isUndefined,\n    isFalsy,\n    isRegExp,\n    isReadableStream,\n    isWritableStream,\n\n    funType,\n    any,\n    exist,\n\n    and,\n    or,\n    not,\n    mapType,\n    listType,\n    truth\n};\n\n\n//# sourceURL=webpack:///./node_modules/basetype/index.js?");

/***/ }),

/***/ "./node_modules/bolzano/index.js":
/*!***************************************!*\
  !*** ./node_modules/bolzano/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n    isObject, funType, or, isString, isFalsy, likeArray\n} = __webpack_require__(/*! basetype */ \"./node_modules/basetype/index.js\");\n\nlet iterate = __webpack_require__(/*! ./lib/iterate */ \"./node_modules/bolzano/lib/iterate.js\");\n\nlet {\n    map, reduce, find, findIndex, forEach, filter, any, exist, compact\n} = __webpack_require__(/*! ./lib/fp */ \"./node_modules/bolzano/lib/fp.js\");\n\nlet contain = (list, item, fopts) => findIndex(list, item, fopts) !== -1;\n\nlet difference = (list1, list2, fopts) => {\n    return reduce(list1, (prev, item) => {\n        if (!contain(list2, item, fopts) &&\n            !contain(prev, item, fopts)) {\n            prev.push(item);\n        }\n        return prev;\n    }, []);\n};\n\nlet union = (list1, list2, fopts) => deRepeat(list2, fopts, deRepeat(list1, fopts));\n\nlet mergeMap = (map1 = {}, map2 = {}) => reduce(map2, setValueKey, reduce(map1, setValueKey, {}));\n\nlet setValueKey = (obj, value, key) => {\n    obj[key] = value;\n    return obj;\n};\n\nlet interset = (list1, list2, fopts) => {\n    return reduce(list1, (prev, cur) => {\n        if (contain(list2, cur, fopts)) {\n            prev.push(cur);\n        }\n        return prev;\n    }, []);\n};\n\nlet deRepeat = (list, fopts, init = []) => {\n    return reduce(list, (prev, cur) => {\n        if (!contain(prev, cur, fopts)) {\n            prev.push(cur);\n        }\n        return prev;\n    }, init);\n};\n\n/**\n * a.b.c\n */\nlet get = funType((sandbox, name = '') => {\n    name = name.trim();\n    let parts = !name ? [] : name.split('.');\n    return reduce(parts, getValue, sandbox, invertLogic);\n}, [\n    isObject,\n    or(isString, isFalsy)\n]);\n\nlet getValue = (obj, key) => obj[key];\n\nlet invertLogic = v => !v;\n\nlet delay = (time) => new Promise((resolve) => {\n    setTimeout(resolve, time);\n});\n\nlet flat = (list) => {\n    if (likeArray(list) && !isString(list)) {\n        return reduce(list, (prev, item) => {\n            prev = prev.concat(flat(item));\n            return prev;\n        }, []);\n    } else {\n        return [list];\n    }\n};\n\nmodule.exports = {\n    flat,\n    contain,\n    difference,\n    union,\n    interset,\n    map,\n    reduce,\n    iterate,\n    find,\n    findIndex,\n    deRepeat,\n    forEach,\n    filter,\n    any,\n    exist,\n    get,\n    delay,\n    mergeMap,\n    compact\n};\n\n\n//# sourceURL=webpack:///./node_modules/bolzano/index.js?");

/***/ }),

/***/ "./node_modules/bolzano/lib/fp.js":
/*!****************************************!*\
  !*** ./node_modules/bolzano/lib/fp.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet iterate = __webpack_require__(/*! ./iterate */ \"./node_modules/bolzano/lib/iterate.js\");\n\nlet defauls = {\n    eq: (v1, v2) => v1 === v2\n};\n\nlet setDefault = (opts, defauls) => {\n    for (let name in defauls) {\n        opts[name] = opts[name] || defauls[name];\n    }\n};\n\nlet forEach = (list, handler) => iterate(list, {\n    limit: (rets) => {\n        if (rets === true) return true;\n        return false;\n    },\n    transfer: handler,\n    output: (prev, cur) => cur,\n    def: false\n});\n\nlet map = (list, handler, limit) => iterate(list, {\n    transfer: handler,\n    def: [],\n    limit\n});\n\nlet reduce = (list, handler, def, limit) => iterate(list, {\n    output: handler,\n    def,\n    limit\n});\n\nlet filter = (list, handler, limit) => reduce(list, (prev, cur, index, list) => {\n    handler && handler(cur, index, list) && prev.push(cur);\n    return prev;\n}, [], limit);\n\nlet find = (list, item, fopts) => {\n    let index = findIndex(list, item, fopts);\n    if (index === -1) return undefined;\n    return list[index];\n};\n\nlet any = (list, handler) => reduce(list, (prev, cur, index, list) => {\n    let curLogic = handler && handler(cur, index, list);\n    return prev && originLogic(curLogic);\n}, true, falsyIt);\n\nlet exist = (list, handler) => reduce(list, (prev, cur, index, list) => {\n    let curLogic = handler && handler(cur, index, list);\n    return prev || originLogic(curLogic);\n}, false, originLogic);\n\nlet findIndex = (list, item, fopts = {}) => {\n    setDefault(fopts, defauls);\n\n    let {\n        eq\n    } = fopts;\n    let predicate = (v) => eq(item, v);\n    let ret = iterate(list, {\n        transfer: indexTransfer,\n        limit: onlyOne,\n        predicate,\n        def: []\n    });\n    if (!ret.length) return -1;\n    return ret[0];\n};\n\nlet compact = (list) => reduce(list, (prev, cur) => {\n    if (cur) prev.push(cur);\n    return prev;\n}, []);\n\nlet indexTransfer = (item, index) => index;\n\nlet onlyOne = (rets, item, name, domain, count) => count >= 1;\n\nlet falsyIt = v => !v;\n\nlet originLogic = v => !!v;\n\nmodule.exports = {\n    map,\n    forEach,\n    reduce,\n    find,\n    findIndex,\n    filter,\n    any,\n    exist,\n    compact\n};\n\n\n//# sourceURL=webpack:///./node_modules/bolzano/lib/fp.js?");

/***/ }),

/***/ "./node_modules/bolzano/lib/iterate.js":
/*!*********************************************!*\
  !*** ./node_modules/bolzano/lib/iterate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n    likeArray, isObject, funType, isFunction, isUndefined, or, isNumber, isFalsy, mapType\n} = __webpack_require__(/*! basetype */ \"./node_modules/basetype/index.js\");\n\n/**\n *\n * preidcate: chose items to iterate\n * limit: when to stop iteration\n * transfer: transfer item\n * output\n */\nlet iterate = funType((domain = [], opts = {}) => {\n    let {\n        predicate, transfer, output, limit, def\n    } = opts;\n\n    opts.predicate = predicate || truthy;\n    opts.transfer = transfer || id;\n    opts.output = output || toList;\n    if (limit === undefined) limit = domain && domain.length;\n    limit = opts.limit = stopCondition(limit);\n\n    let rets = def;\n    let count = 0;\n\n    if (likeArray(domain)) {\n        for (let i = 0; i < domain.length; i++) {\n            let itemRet = iterateItem(domain, i, count, rets, opts);\n            rets = itemRet.rets;\n            count = itemRet.count;\n            if (itemRet.stop) return rets;\n        }\n    } else if (isObject(domain)) {\n        for (let name in domain) {\n            let itemRet = iterateItem(domain, name, count, rets, opts);\n            rets = itemRet.rets;\n            count = itemRet.count;\n            if (itemRet.stop) return rets;\n        }\n    }\n\n    return rets;\n}, [\n    or(isObject, isFunction, isFalsy),\n    or(isUndefined, mapType({\n        predicate: or(isFunction, isFalsy),\n        transfer: or(isFunction, isFalsy),\n        output: or(isFunction, isFalsy),\n        limit: or(isUndefined, isNumber, isFunction)\n    }))\n]);\n\nlet iterateItem = (domain, name, count, rets, {\n    predicate, transfer, output, limit\n}) => {\n    let item = domain[name];\n    if (limit(rets, item, name, domain, count)) {\n        // stop\n        return {\n            stop: true,\n            count,\n            rets\n        };\n    }\n\n    if (predicate(item)) {\n        rets = output(rets, transfer(item, name, domain, rets), name, domain);\n        count++;\n    }\n    return {\n        stop: false,\n        count,\n        rets\n    };\n};\n\nlet stopCondition = (limit) => {\n    if (isUndefined(limit)) {\n        return falsy;\n    } else if (isNumber(limit)) {\n        return (rets, item, name, domain, count) => count >= limit;\n    } else {\n        return limit;\n    }\n};\n\nlet toList = (prev, v) => {\n    prev.push(v);\n    return prev;\n};\n\nlet truthy = () => true;\n\nlet falsy = () => false;\n\nlet id = v => v;\n\nmodule.exports = iterate;\n\n\n//# sourceURL=webpack:///./node_modules/bolzano/lib/iterate.js?");

/***/ }),

/***/ "./node_modules/kabanery/index.js":
/*!****************************************!*\
  !*** ./node_modules/kabanery/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./src */ \"./node_modules/kabanery/src/index.js\");\n\n/**\n * @readme-doc\n *\n * ## features\n *\n * - simple DOM DSL, construct dom tree quickly\n *\n * - data-driven view, include updating view by data\n *\n * - Just functions, easy to compose\n *\n * [readme-lang:zh]## 特征\n *\n * - 简单的DOM DSL，快速构建DOM结构\n *\n * - 数据驱动视图，包括通过数据更新视图\n *\n * - 以函数为核心，易于复合\n *\n */\n\n/**\n * @readme-quick-run\n *\n * Using method n to construct dom node quickly.\n *\n * [readme-lang:zh]用方法n快速构造dom节点\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {n, mount} = kabanery;\n *\n * mount(n('div', {\n *   id: 'qu',\n *   style: {\n *      backgroundColor: 'red'\n *   }\n * }, [\n *      n('span class=go style=\"font-size:16px\"', 'hello!')\n * ]), document.body);\n *\n * console.log(document.getElementById('qu').outerHTML); // print result\n */\n\n/**\n * @readme-quick-run\n *\n * Basic way to construct a view.\n *\n * [readme-lang:zh]构造一个组件的简单方法\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {view, n, mount} = kabanery;\n *\n * let MyView = view((data) => {\n *      let {type} = data;\n *\n *      return n('div', {\n *         id: 'test1',\n *         style: {\n *            fontSize: 10\n *         }\n *      },[\n *          type === 2 && n('span', 'second'),\n *          type === 3 && n('div', 'third')\n *      ]);\n * });\n *\n * mount(MyView({type: 3}), document.body);\n *\n * console.log(document.getElementById('test1').outerHTML); // print result\n */\n\n/**\n * @readme-quick-run\n *\n * Using update api to update a view.\n *\n * [readme-lang:zh]运用update api去更新一个view\n *\n * ## test tar=js r_c=kabanery env=browser\n * let {view, n, mount} = kabanery;\n *\n * let MyView = view((data, {update}) => {\n *      return n('div', {\n *         id: 'a',\n *         style: {\n *            fontSize: 10\n *         },\n *         onclick: () => {\n *            update('show', !data.show);\n *         }\n *      }, [\n *          data.show && n('div', 'show text')\n *      ]);\n * });\n *\n * mount(MyView({show: false}), document.body);\n *\n * document.getElementById('a').click(); // simulate user action\n * console.log(document.getElementById('a').outerHTML); // print result\n */\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/const/index.js":
/*!**************************************************!*\
  !*** ./node_modules/kabanery/src/const/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst uuidv4 = __webpack_require__(/*! uuid/v4 */ \"./node_modules/uuid/v4.js\");\n\nconst seed = uuidv4();\n\nmodule.exports = {\n  eventMapHook: `__eventMap_${seed}`,\n  globalEventTypePrefix: `__event_type_id_${seed}_`,\n  stopPropagationFlag: '__stopPropagation'\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/const/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/event/eventMatrix.js":
/*!********************************************************!*\
  !*** ./node_modules/kabanery/src/event/eventMatrix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n  contain\n} = __webpack_require__(/*! bolzano */ \"./node_modules/bolzano/index.js\");\n\nlet {\n  eventMapHook,\n  globalEventTypePrefix,\n  stopPropagationFlag\n} = __webpack_require__(/*! ../const */ \"./node_modules/kabanery/src/const/index.js\");\n\nmodule.exports = () => {\n  let docs = [];\n  let eventTypeMap = {};\n  let handlerMap = {};\n\n  let listenEventType = (type) => {\n    if (!eventTypeMap[type]) {\n      updateDocs(type);\n    }\n    eventTypeMap[type] = true;\n  };\n\n    /**\n     * attach document used to accept events\n     */\n  let attachDocument = (doc = document) => {\n    if (!contain(docs, doc)) {\n      for (let type in eventTypeMap) {\n        // prevent multiple version of kabanery to binding multiple times for the same type\n        let id = getGlobalEventTypeId(type);\n        if (!doc[id]) {\n          addEventListenerToDoc(doc, type);\n          doc[id] = true;\n        }\n      }\n      docs.push(doc);\n    }\n  };\n\n  let updateDocs = (type) => {\n    if (!docs.length) {\n      docs.push(document);\n    }\n    for (let i = 0; i < docs.length; i++) {\n      let doc = docs[i];\n      addEventListenerToDoc(doc, type);\n    }\n  };\n\n  let addEventListenerToDoc = (doc, type) => {\n    let handler = null;\n    if (handlerMap[type]) {\n      handler = handlerMap[type];\n    } else {\n      handler = listener(type);\n      handlerMap[type] = handler;\n    }\n    doc.addEventListener(type, handler);\n  };\n\n  let clearEvents = () => {\n    for (let type in eventTypeMap) {\n      removeListenerType(type);\n    }\n  };\n\n  let removeListenerType = (type) => {\n    let handler = handlerMap[type];\n    if (handler) {\n      for (let i = 0; i < docs.length; i++) {\n        let doc = docs[i];\n        doc.removeEventListener(type, handler);\n      }\n      delete handlerMap[type];\n      delete eventTypeMap[type];\n    }\n  };\n\n  let getDocs = () => docs.slice(0);\n\n  /**\n     * e = {\n     *  target,\n     *  stopPropagation [optional]\n     * }\n     */\n  let listener = (type) => function(e) {\n    let ctx = this;\n    let target = e.target;\n\n    // hack the stopPropagration function\n    let oldProp = e.stopPropagation;\n    e.stopPropagation = function(...args) {\n      e[stopPropagationFlag] = true;\n      return oldProp && oldProp.apply(this, args);\n    };\n\n    let nodePath = getNodePath(target);\n\n    for (let i = 0; i < nodePath.length; i++) {\n      let node = nodePath[i];\n      applyNodeHandlers(e, type, node, ctx);\n    }\n  };\n\n  let applyNodeHandlers = (e, type, node, ctx) => {\n    if (e.__stopPropagation) { // event already been stoped by child node\n      return true;\n    }\n\n    let handler = getHandler(type, node);\n    return handler && handler.apply(ctx, [e]);\n  };\n\n  let getHandler = (type, target) => {\n    let eventMap = target && target[eventMapHook];\n    return eventMap && eventMap[type];\n  };\n\n  let dispatchEvent = (type, e) => {\n    let handler = handlerMap[type];\n    handler && handler(e);\n  };\n\n  return {\n    listenEventType,\n    clearEvents,\n    removeListenerType,\n    getDocs,\n    attachDocument,\n    dispatchEvent\n  };\n};\n\n/**\n * get the path of node\n */\nlet getNodePath = (target) => {\n  let paths = [];\n  while (target) {\n    paths.push(target);\n    target = target.parentNode;\n  }\n  return paths;\n};\n\nlet getGlobalEventTypeId = (type) => `${globalEventTypePrefix}${type}`;\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/event/eventMatrix.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/event/index.js":
/*!**************************************************!*\
  !*** ./node_modules/kabanery/src/event/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet EventMatrix = __webpack_require__(/*! ./eventMatrix */ \"./node_modules/kabanery/src/event/eventMatrix.js\");\n\nlet {\n  eventMapHook\n} = __webpack_require__(/*! ../const */ \"./node_modules/kabanery/src/const/index.js\");\n\nlet {\n  listenEventType,\n  clearEvents,\n  attachDocument,\n  dispatchEvent\n} = EventMatrix();\n\nlet bindEvents = (node, eventMap) => {\n  // hook event at node\n  node[eventMapHook] = eventMap;\n\n  for (let type in eventMap) {\n    listenEventType(type);\n  }\n};\n\nmodule.exports = {\n  bindEvents,\n  attachDocument,\n  dispatchEvent,\n  clearEvents\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/event/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/kabanery/src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  n,\n  svgn,\n  parseArgs,\n  isKabaneryNode,\n  parseStyle\n} = __webpack_require__(/*! ./n */ \"./node_modules/kabanery/src/n/index.js\");\n\nconst {\n  view\n} = __webpack_require__(/*! ./view */ \"./node_modules/kabanery/src/view/index.js\");\n\nconst {\n  dispatchEvent,\n  clearEvents\n} = __webpack_require__(/*! ./event */ \"./node_modules/kabanery/src/event/index.js\");\n\nconst {\n  toHTML,\n  mount\n} = __webpack_require__(/*! ./resolver */ \"./node_modules/kabanery/src/resolver/index.js\");\n\nmodule.exports = {\n  n,\n  isKabaneryNode,\n  svgn,\n  view,\n  mount,\n  toHTML,\n\n  parseArgs,\n  parseStyle,\n  dispatchEvent,\n  clearEvents\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/n/index.js":
/*!**********************************************!*\
  !*** ./node_modules/kabanery/src/n/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isObject,\n  isNode\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\n\nconst parseArgs = __webpack_require__(/*! ./parseArgs */ \"./node_modules/kabanery/src/n/parseArgs.js\");\n\nconst parseStyle = __webpack_require__(/*! ./parseStyle */ \"./node_modules/kabanery/src/n/parseStyle.js\");\n\nconst KABANERY_NODE = 'kabanery_node';\n\nconst isKabaneryNode = (v) => isObject(v) && v.type === KABANERY_NODE;\n\n/**\n * elementType: html, svg\n */\nconst knodeCreator = (elementType) => {\n  return (...args) => {\n    return createKabaneryNode(elementType, args);\n  };\n};\n\nconst createKabaneryNode = (elementType, args) => {\n  let {\n    tagName,\n    attributes,\n    childs\n  } = parseArgs(args);\n\n  if (isKabaneryNode(attributes) ||\n    isNode(attributes)) {\n    childs = [attributes];\n    attributes = {};\n  }\n\n  const {\n    attrMap,\n    eventMap\n  } = splitAttribues(attributes);\n\n  return {\n    tagName,\n    attrMap,\n    eventMap,\n    elementType,\n    type: KABANERY_NODE,\n    childNodes: childs,\n  };\n};\n\n/**\n * split event handlers\n */\nconst splitAttribues = (attributes) => {\n  const attrMap = {},\n    eventMap = {};\n  for (const name in attributes) {\n    const item = attributes[name];\n    if (name.indexOf('on') === 0) {\n      eventMap[name.substring(2)] = item;\n    } else {\n      attrMap[name] = item;\n    }\n  }\n  return {\n    attrMap,\n    eventMap\n  };\n};\n\nmodule.exports = {\n  n: knodeCreator('html'),\n  svgn: knodeCreator('svg'),\n  knodeCreator,\n  isKabaneryNode,\n  parseArgs,\n  parseStyle\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/n/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/n/parseArgs.js":
/*!**************************************************!*\
  !*** ./node_modules/kabanery/src/n/parseArgs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst parseAttribute = __webpack_require__(/*! ./parseAttribute */ \"./node_modules/kabanery/src/n/parseAttribute.js\");\n\nconst {\n  isString,\n  isObject,\n  isNode,\n  likeArray,\n  isNumber,\n  isBool\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\n\nconst parseArgs = (args, {\n  doParseStyle = true\n} = {}) => {\n  let tagName,\n    attributes = {},\n    childExp = [];\n\n  let first = args.shift();\n\n  let parts = splitTagNameAttribute(first);\n\n  if (parts.length > 1) { // not only tagName\n    tagName = parts[0];\n    attributes = parts[1];\n  } else {\n    tagName = first;\n  }\n\n  let next = args.shift();\n\n  let nextAttr = {};\n\n  if (likeArray(next) ||\n        isString(next) ||\n        isNode(next) ||\n        isNumber(next) ||\n        isBool(next)) {\n    childExp = next;\n  } else if (isObject(next)) {\n    nextAttr = next;\n    childExp = args.shift() || [];\n  }\n\n  attributes = parseAttribute(attributes, nextAttr, {\n    doParseStyle\n  });\n\n  let childs = parseChildExp(childExp);\n\n  return {\n    tagName,\n    attributes,\n    childs\n  };\n};\n\nlet splitTagNameAttribute = (str = '') => {\n  if (typeof str !== 'string') return [str];\n\n  let tagName = str.split(' ')[0];\n  let attr = str.substring(tagName.length);\n  attr = attr && attr.trim();\n\n  tagName = tagName.toLowerCase().trim();\n  if (attr) {\n    return [tagName, attr];\n  } else {\n    return [tagName];\n  }\n};\n\nconst parseChildExp = (childExp) => {\n  let ret = [];\n  if (isNode(childExp)) {\n    ret.push(childExp);\n  } else if (likeArray(childExp)) {\n    for (let i = 0; i < childExp.length; i++) {\n      let child = childExp[i];\n      ret = ret.concat(parseChildExp(child));\n    }\n  } else if (childExp) {\n    ret.push(childExp);\n  }\n  return ret;\n};\n\nmodule.exports = parseArgs;\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/n/parseArgs.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/n/parseAttribute.js":
/*!*******************************************************!*\
  !*** ./node_modules/kabanery/src/n/parseAttribute.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nlet {\n  isString\n} = __webpack_require__(/*! basetype */ \"./node_modules/basetype/index.js\");\n\nlet parseStyle = __webpack_require__(/*! ./parseStyle */ \"./node_modules/kabanery/src/n/parseStyle.js\");\n\nlet {\n  mergeMap\n} = __webpack_require__(/*! bolzano */ \"./node_modules/bolzano/index.js\");\n\nconst ITEM_REG = /([\\w-]+)\\s*=\\s*(([\\w-]+)|('.*?')|(\".*?\"))/;\n\n// TODO better key=value grammer\n// TODO refactor with grammerL: class grammer, id grammer, refer some popular grammer\nlet parseAttribute = (attributes, nextAttr, {\n  doParseStyle\n}) => {\n  // key=value key=value\n  // value='abc' value=true value=123 value=\"def\"\n  if (isString(attributes)) {\n    let str = attributes.trim(),\n      kvs = [];\n\n    let stop = false;\n    while (!stop) {\n      let newstr = str.replace(ITEM_REG, (matchStr, $1, $2) => {\n        kvs.push([$1, $2]);\n        return '';\n      }).trim();\n      if (newstr === str) {\n        stop = true;\n      }\n      str = newstr;\n    }\n\n    attributes = {};\n    for (let i = 0; i < kvs.length; i++) {\n      let [key, value] = kvs[i];\n      if (value[0] === '\\'' && value[value.length - 1] === '\\'' ||\n                value[0] === '\"' && value[value.length - 1] === '\"') {\n        value = value.substring(1, value.length - 1);\n      }\n      attributes[key] = value;\n    }\n  }\n  // merge\n  attributes = mergeMap(attributes, nextAttr);\n\n  if (attributes.style && doParseStyle) {\n    attributes.style = parseStyle(attributes.style);\n  }\n\n  // TODO presudo\n  /*\n    if (attributes.presudo) {\n        for (let name in attributes.presudo) {\n            attributes.presudo[name] = parseStyle(attributes.presudo[name]);\n        }\n    }\n   */\n\n  return attributes;\n};\n\nmodule.exports = parseAttribute;\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/n/parseAttribute.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/n/parseStyle.js":
/*!***************************************************!*\
  !*** ./node_modules/kabanery/src/n/parseStyle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  isString,\n  isObject\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\n\nmodule.exports = (attr = '', {\n  keyWrapper,\n  valueWrapper\n} = {}) => {\n  if (isString(attr)) {\n    return attr;\n  }\n\n  if (!isObject(attr)) {\n    throw new TypeError(`Expect object for style object, but got ${attr}`);\n  }\n\n  const styles = [];\n\n  for (let key in attr) {\n    let value = attr[key];\n    key = convertStyleKey(key);\n    value = convertStyleValue(value, key);\n    if (keyWrapper) {\n      key = keyWrapper(key, value);\n    }\n\n    if (valueWrapper) {\n      value = valueWrapper(value, key);\n    }\n\n    styles.push(`${key}: ${value};`);\n  }\n\n  return styles.join('');\n};\n\nconst convertStyleKey = (key) => {\n  return key.replace(/[A-Z]/, (letter) => {\n    return `-${letter.toLowerCase()}`;\n  });\n};\n\nconst convertStyleValue = (value, key) => {\n  if (typeof value === 'number' && key !== 'z-index') {\n    return value + 'px';\n  }\n  if (key === 'padding' || key === 'margin') {\n    let parts = value.split(' ');\n    for (let i = 0; i < parts.length; i++) {\n      let part = parts[i];\n      if (!isNaN(Number(part))) {\n        parts[i] = part + 'px';\n      }\n    }\n\n    value = parts.join(' ');\n  }\n  return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/n/parseStyle.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/resolver/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/kabanery/src/resolver/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isNode,\n  createElement,\n  createSvgElement\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\nconst {\n  isKabaneryNode\n} = __webpack_require__(/*! ../n */ \"./node_modules/kabanery/src/n/index.js\");\nconst {\n  bindEvents,\n  attachDocument\n} = __webpack_require__(/*! ../event */ \"./node_modules/kabanery/src/event/index.js\");\nconst {\n  flat,\n  forEach,\n  map\n} = __webpack_require__(/*! bolzano */ \"./node_modules/bolzano/index.js\");\n\nconst toHTML = (node) => {\n  if (isNode(node)) {\n    return node.outerHTML;\n  } else if (isKabaneryNode(node)) {\n    const {\n      tagName,\n      attrMap,\n      childNodes\n    } = node;\n\n    let attrs = [];\n    for (const key in attrMap) {\n      const value = attrMap[key];\n      attrs.push(`${key}=\"${value}\"`);\n    }\n\n    let attrStr = attrs.join(' ');\n    attrStr = attrStr ? ' ' + attrStr : '';\n\n    let childs = [];\n    for (let i = 0, n = childNodes.length; i < n; i++) {\n      childs.push(toHTML(childNodes[i]));\n    }\n\n    return `<${tagName}${attrStr}>${childs.join('')}</${tagName}>`;\n  } else {\n    return node + '';\n  }\n};\n\n/**\n * @param parentNode\n *      the dom node used hook node we rendered\n */\nconst mount = (kabaneryRoots, parentNode) => {\n  kabaneryRoots = flat(kabaneryRoots);\n\n  forEach(kabaneryRoots, (item) => {\n    item = toDomNode(item);\n    if (isNode(item)) {\n      parentNode.appendChild(item);\n    }\n  });\n\n  // attach to document\n  attachDocument(getDoc(parentNode));\n};\n\nconst toDomNode = (kNode) => {\n  if (isKabaneryNode(kNode)) {\n    let nativeNode = null;\n    if (kNode.elementType === 'html') {\n      nativeNode = createElement(kNode.tagName, kNode.attrMap, map(kNode.childNodes, toDomNode));\n    } else { // svg\n      nativeNode = createSvgElement(kNode.tagName, kNode.attrMap, map(kNode.childNodes, toDomNode));\n    }\n\n    if (kNode.ctx) {\n      kNode.ctx.bindNativeNode(nativeNode);\n    }\n\n    bindEvents(nativeNode, kNode.eventMap);\n    return nativeNode;\n  } else if (isNode(kNode)) {\n    return kNode;\n  } else {\n    return document.createTextNode(kNode.toString());\n  }\n};\n\nconst getDoc = (node) => {\n  while (node.parentNode) {\n    node = node.parentNode;\n  }\n  return node;\n};\n\nmodule.exports = {\n  toDomNode,\n  toHTML,\n  mount\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/resolver/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/util/index.js":
/*!*************************************************!*\
  !*** ./node_modules/kabanery/src/util/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst toArray = (v) => Array.prototype.slice.call(v);\n\nconst isNode = (o) => {\n  return (\n    typeof Node === 'object' ? o instanceof Node : o && typeof o === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string'\n  );\n};\n\nconst bind = (fn, ctx) => {\n  return (...args) => {\n    return fn.apply(ctx, args);\n  };\n};\n\nconst isObject = (v) => v && typeof v === 'object';\n\nconst isString = (v) => typeof v === 'string';\n\nconst isNumber = (v) => typeof v === 'number';\n\nconst likeArray = (v) => isObject(v) && isNumber(v.length) && v.length >= 0;\n\nconst isBool = (v) => typeof v === 'boolean';\n\nconst isFunction = (v) => typeof v === 'function';\n\nconst set = (sandbox, name = '', value) => {\n  name = name.trim();\n  let parts = !name ? [] : name.split('.');\n  let parent = sandbox;\n  if (!isObject(parent)) return;\n  if (!parts.length) return;\n  for (let i = 0; i < parts.length - 1; i++) {\n    let part = parts[i];\n    let next = parent[part];\n    if (!isObject(next)) {\n      next = {};\n      parent[part] = next;\n    }\n    parent = next;\n  }\n\n  parent[parts[parts.length - 1]] = value;\n  return sandbox;\n};\n\nconst svgNS = 'http://www.w3.org/2000/svg';\n\nconst applyNode = (node, attributes, childs) => {\n  for (let name in attributes) {\n    const attr = attributes[name];\n    node.setAttribute(name, attr);\n  }\n\n  for (let i = 0; i < childs.length; i++) {\n    const child = childs[i];\n    if (isNode(child)) {\n      node.appendChild(child);\n    } else {\n      node.textContent = child + '';\n    }\n  }\n};\n\nconst createElement = (tagName, attributes, childs) => {\n  const node = document.createElement(tagName);\n  applyNode(node, attributes, childs);\n  return node;\n};\n\nconst createSvgElement = (tagName, attributes, childs) => {\n  const node = document.createElementNS(svgNS, tagName);\n  applyNode(node, attributes, childs);\n  return node;\n};\n\nconst getAttributeMap = (attributes = []) => {\n  const map = {};\n  for (let i = 0; i < attributes.length; i++) {\n    const {\n      name,\n      value\n    } = attributes[i];\n    map[name] = value;\n  }\n  return map;\n};\n\nconst removeNode = (oldNode) => {\n  let parent = oldNode.parentNode;\n  if (parent) {\n    parent.removeChild(oldNode);\n  }\n};\n\nconst hasOwnProperty = (obj, key) => {\n  if (obj.hasOwnProperty) {\n    return obj.hasOwnProperty(key);\n  }\n  for (const name in obj) {\n    if (name === key) return true;\n  }\n  return false;\n};\n\nconst emptyChildren = (node) => {\n  const childNodes = node.childNodes;\n  for (let i = 0, n = childNodes.length; i < n; i++) {\n    node.removeChild(childNodes[i]);\n  }\n};\n\nconst getTagName = (node) => {\n  return node.tagName.toUpperCase();\n};\n\nconst getAttrMap = (node) => {\n  if (isNode(node)) {\n    return getAttributeMap(node.attributes);\n  } else { // kabanery node\n    return node.attrMap;\n  }\n};\n\nconst getTextAreaTextContent = (node) => {\n  if (isNode(node)) {\n    return node.textContent;\n  } else {\n    return (node.childNodes.length && node.childNodes[0]) || '';\n  }\n};\n\nconst getAttributeValue = (node, key) => {\n  if (isNode(node)) {\n    return node.getAttribute(key);\n  } else {\n    return node.attrMap[key];\n  }\n};\n\nmodule.exports = {\n  toArray,\n  isNode,\n  isObject,\n  likeArray,\n  bind,\n  isString,\n  isNumber,\n  isBool,\n  isFunction,\n  set,\n  createElement,\n  createSvgElement,\n  getAttributeMap,\n  removeNode,\n  hasOwnProperty,\n  emptyChildren,\n  getTagName,\n  getAttrMap,\n  getTextAreaTextContent,\n  getAttributeValue\n\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/util/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/view/index.js":
/*!*************************************************!*\
  !*** ./node_modules/kabanery/src/view/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  isFunction\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\nconst updateData = __webpack_require__(/*! ./updateData */ \"./node_modules/kabanery/src/view/updateData.js\");\nconst replace = __webpack_require__(/*! ./replace */ \"./node_modules/kabanery/src/view/replace/index.js\");\nconst {\n  mount\n} = __webpack_require__(/*! ../resolver */ \"./node_modules/kabanery/src/resolver/index.js\");\n\nconst ViewContext = function(render, obj) {\n  this.nativeNode = null; // record corresponding native node\n  this.data = obj;\n  this.render = render;\n  this.kNode = null; // cache old kabanery node\n};\n\nViewContext.prototype = {\n  construct: ViewContext,\n\n  update: function(...args) {\n    updateData(this.data, args);\n    return this.renderNativeView();\n  },\n\n  // for some special situation, like log view\n  // TODO prepend?\n  appendView: function(itemView) {\n    if (this.nativeNode) {\n      mount(itemView, this.nativeNode);\n    }\n  },\n\n  /**\n   * render view according to current data\n   *\n   * do the diff to reduce dom operations\n   */\n  renderNativeView: function() {\n    const newKNode = this.getKabaneryNode();\n    this.nativeNode = replace(this.nativeNode, newKNode, this.kNode);\n    // update KNode to latest\n    this.kNode = newKNode;\n    return this.nativeNode;\n  },\n\n  /**\n   * run render function and get the tree based on n function\n   */\n  renderKabaneryNode: function() {\n    this.kNode = this.getKabaneryNode();\n    return this.kNode;\n  },\n\n  getKabaneryNode: function() {\n    const kNode = this.render(this.data, this.getContext());\n\n    if (isFunction(kNode)) { // closure\n      this.render = kNode;\n      return this.getKabaneryNode(this.data, this.getContext());\n    } else {\n      kNode.ctx = this.getContext(); // hook the content\n      return kNode;\n    }\n  },\n\n  getKNode: function() {\n    return this.kNode;\n  },\n\n  getNativeNode: function() {\n    return this.nativeNode;\n  },\n\n  getData: function() {\n    return this.data;\n  },\n\n  getContext: function() {\n    return this._ctx;\n  },\n\n  bindNativeNode: function(node) {\n    this.nativeNode = node;\n  }\n};\n\nvar getViewContext = (view, obj) => {\n  const _ctx = {};\n\n  const ctxInst = new ViewContext(view, obj);\n\n  ctxInst._ctx = _ctx;\n\n  for (const name in ViewContext.prototype) {\n    if (name !== 'construct') {\n      _ctx[name] = (...args) => ctxInst[name].apply(ctxInst, args);\n    }\n  }\n\n  return _ctx;\n};\n\nmodule.exports = {\n  /**\n   * create a view class\n   */\n  view: (viewFun) => {\n    /**\n     * create a view instance\n     *\n     * (data) -> nativeNode\n     */\n    return (obj) => {\n      // create context\n      const ctx = getViewContext(viewFun, obj);\n      // render node\n      const kNode = ctx.renderKabaneryNode();\n\n      return kNode;\n    };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/view/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/view/replace/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/kabanery/src/view/replace/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst {\n  toDomNode\n} = __webpack_require__(/*! ../../resolver */ \"./node_modules/kabanery/src/resolver/index.js\");\nconst {\n  removeNode,\n  getTagName,\n  getTextAreaTextContent,\n  getAttributeValue,\n  getAttrMap,\n  hasOwnProperty\n} = __webpack_require__(/*! ../../util */ \"./node_modules/kabanery/src/util/index.js\");\nconst {\n  eventMapHook\n} = __webpack_require__(/*! ../../const */ \"./node_modules/kabanery/src/const/index.js\");\nconst {\n  isKabaneryNode\n} = __webpack_require__(/*! ../../n */ \"./node_modules/kabanery/src/n/index.js\");\n\nconst editAttributes = (node, newKNode, oldKNode) => {\n  // attributes\n  const orinAttrMap = getAttrMap(oldKNode);\n  const newAttrMap = getAttrMap(newKNode);\n\n  // update and remove\n  for (const name in orinAttrMap) {\n    const orinValue = orinAttrMap[name];\n    if (hasOwnProperty(newAttrMap, name)) {\n      let newValue = newAttrMap[name];\n      if (newValue !== orinValue) {\n        node.setAttribute(name, newValue);\n      }\n    } else {\n      node.removeAttribute(name);\n    }\n  }\n\n  for (const name in newAttrMap) {\n    const newAttr = newAttrMap[name];\n    if (!hasOwnProperty(orinAttrMap, name)) {\n      node.setAttribute(name, newAttr);\n    }\n  }\n};\n\n// node and newKNode have the same tagName\nconst editNode = (node, newKNode, oldKNode) => {\n  // attributes\n  editAttributes(node, newKNode, oldKNode);\n\n  // hacks for dom\n  if (getTagName(node) === 'TEXTAREA') {\n    node.value = getTextAreaTextContent(newKNode);\n  }\n  if (getTagName(node) === 'INPUT') {\n    node.value = getAttributeValue(newKNode, 'value');\n  }\n\n  // transfer event map\n  node[eventMapHook] = newKNode.eventMap || {};\n\n  diffList(newKNode.childNodes, oldKNode.childNodes, node);\n};\n\n// TODO using key\nconst diffList = (newKChilds, oldKChilds, parent) => {\n  const childNodes = parent.childNodes,\n    oldLen = oldKChilds.length,\n    newLen = newKChilds.length;\n\n  // remove\n  for (let i = newLen; i < oldLen; i++) {\n    childNodes[i] && removeNode(childNodes[i]);\n  }\n\n  // diff\n  for (let i = 0, n = Math.min(newLen, oldLen); i < n; i++) {\n    diffNode(childNodes[i], newKChilds[i], oldKChilds[i]);\n  }\n\n  // append\n  for (let i = oldLen; i < newLen; i++) {\n    parent.appendChild(toDomNode(newKChilds[i]));\n  }\n};\n\nconst diffNode = (node, newKNode, oldKNode) => {\n  if (isKabaneryNode(newKNode) && isKabaneryNode(oldKNode)) {\n    if (getTagName(oldKNode) !== getTagName(newKNode)) {\n      return replaceDirectly(node, newKNode);\n    } else {\n      editNode(node, newKNode, oldKNode);\n      // binding native node\n      if (newKNode.ctx) {\n        newKNode.ctx.bindNativeNode(node);\n      }\n      return node;\n    }\n  } else {\n    return replaceDirectly(node, newKNode);\n  }\n};\n\n/**\n * replace old node with new node\n */\nconst replaceDirectly = (node, newKNode) => {\n  const parent = node.parentNode;\n  const newNode = toDomNode(newKNode);\n  // replace\n  parent.replaceChild(newNode, node);\n  return newNode;\n};\n\n// TODO type check for newNode\nmodule.exports = (realNode, newKNode, oldKNode) => {\n  if (!realNode) { // add new node\n    return toDomNode(newKNode);\n  } else if (!newKNode) { // delete old node\n    removeNode(realNode);\n    return null;\n  } else { // diff with old node\n    return diffNode(realNode, newKNode, oldKNode);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/view/replace/index.js?");

/***/ }),

/***/ "./node_modules/kabanery/src/view/updateData.js":
/*!******************************************************!*\
  !*** ./node_modules/kabanery/src/view/updateData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  set,\n  isFunction,\n  likeArray\n} = __webpack_require__(/*! ../util */ \"./node_modules/kabanery/src/util/index.js\");\n\nconst updateData = (data, scripts) => {\n  if (scripts.length === 1 && likeArray(scripts[0])) {\n    let arg = scripts[0];\n    for (let i = 0, n = arg.length; i < n; i++) {\n      const item = arg[i];\n      set(data, item[0], item[1]);\n    }\n  } else {\n    let [path, value] = scripts;\n\n    // function is a special data\n    if (isFunction(value)) {\n      value = value(data);\n    }\n\n    set(data, path, value);\n  }\n};\n\nmodule.exports = updateData;\n\n\n//# sourceURL=webpack:///./node_modules/kabanery/src/view/updateData.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ })

/******/ });