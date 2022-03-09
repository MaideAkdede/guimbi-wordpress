(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w2) {
            if (!w2.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w2);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i2, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i2 in preservedScriptAttributes) {
              val = node[i2] || node.getAttribute && node.getAttribute(i2);
              if (val) {
                script.setAttribute(i2, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.0", jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        };
        jQuery2.fn = jQuery2.prototype = {
          jquery: version,
          constructor: jQuery2,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i2) {
              return callback.call(elem, i2, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return (i2 + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
              return i2 % 2;
            }));
          },
          eq: function(i2) {
            var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i2] || {};
            i2++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i2 === length) {
            target = this;
            i2--;
          }
          for (; i2 < length; i2++) {
            if ((options = arguments[i2]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery2.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i2 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i2 < length; i2++) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            } else {
              for (i2 in obj) {
                if (callback.call(obj[i2], i2, obj[i2]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery2.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i2) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i2 = first.length;
            for (; j < len; j++) {
              first[i2++] = second[j];
            }
            first.length = i2;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
            for (; i2 < length; i2++) {
              callbackInverse = !callback(elems[i2], i2);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i2]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i2 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i2 < length; i2++) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i2 in elems) {
                value = callback(elems[i2], i2, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery2.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i2, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a2, b2) {
            if (a2 === b2) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i3 = 0, len = list.length;
            for (; i3 < len; i3++) {
              if (list[i3] === elem) {
                return i3;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e2) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i3 = 0;
                while (target[j++] = els[i3++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m2, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m2 = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m2)) {
                        if (elem.id === m2) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m2)) && contains(context, elem) && elem.id === m2) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m2 = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m2));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i3 = groups.length;
                    while (i3--) {
                      groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e2) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i3 = arr3.length;
            while (i3--) {
              Expr.attrHandle[arr3[i3]] = handler;
            }
          }
          function siblingCheck(a2, b2) {
            var cur = b2 && a2, diff = cur && a2.nodeType === 1 && b2.nodeType === 1 && a2.sourceIndex - b2.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b2) {
                  return -1;
                }
              }
            }
            return a2 ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i3 = matchIndexes.length;
                while (i3--) {
                  if (seed[j = matchIndexes[i3]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i3, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i3 = 0;
                    while (elem = elems[i3++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i3 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i3++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a2, b2) {
              var adown = a2.nodeType === 9 ? a2.documentElement : a2, bup = b2 && b2.parentNode;
              return a2 === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a2.compareDocumentPosition && a2.compareDocumentPosition(bup) & 16));
            } : function(a2, b2) {
              if (b2) {
                while (b2 = b2.parentNode) {
                  if (b2 === a2) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a2, b2) {
              if (a2 === b2) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a2.compareDocumentPosition - !b2.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a2.ownerDocument || a2) == (b2.ownerDocument || b2) ? a2.compareDocumentPosition(b2) : 1;
              if (compare & 1 || !support2.sortDetached && b2.compareDocumentPosition(a2) === compare) {
                if (a2 == document3 || a2.ownerDocument == preferredDoc && contains(preferredDoc, a2)) {
                  return -1;
                }
                if (b2 == document3 || b2.ownerDocument == preferredDoc && contains(preferredDoc, b2)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a2) - indexOf2(sortInput, b2) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a2, b2) {
              if (a2 === b2) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i3 = 0, aup = a2.parentNode, bup = b2.parentNode, ap = [a2], bp = [b2];
              if (!aup || !bup) {
                return a2 == document3 ? -1 : b2 == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a2) - indexOf2(sortInput, b2) : 0;
              } else if (aup === bup) {
                return siblingCheck(a2, b2);
              }
              cur = a2;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b2;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i3] === bp[i3]) {
                i3++;
              }
              return i3 ? siblingCheck(ap[i3], bp[i3]) : ap[i3] == preferredDoc ? -1 : bp[i3] == preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e2) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i3 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i3++]) {
                if (elem === results[i3]) {
                  j = duplicates.push(i3);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i3 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i3++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i3 = matched.length;
                    while (i3--) {
                      idx = indexOf2(seed, matched[i3]);
                      seed[idx] = !(matches2[idx] = matched[i3]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i3 = seed.length;
                  while (i3--) {
                    if (elem = unmatched[i3]) {
                      seed[i3] = !(matches2[i3] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 0;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i3 = 1;
                for (; i3 < length; i3 += 2) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i3 >= 0; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i3 = argument < 0 ? argument + length : argument;
                for (; ++i3 < length; ) {
                  matchIndexes.push(i3);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i2] = createInputPseudo(i2);
          }
          for (i2 in { submit: true, reset: true }) {
            Expr.pseudos[i2] = createButtonPseudo(i2);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i3 = 0, len = tokens.length, selector = "";
            for (; i3 < len; i3++) {
              selector += tokens[i3].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i3 = matchers.length;
              while (i3--) {
                if (!matchers[i3](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i3 = 0, len = contexts.length;
            for (; i3 < len; i3++) {
              Sizzle2(selector, contexts[i3], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
            for (; i3 < len; i3++) {
              if (elem = unmatched[i3]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i3);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i3, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i3 = temp.length;
                while (i3--) {
                  if (elem = temp[i3]) {
                    matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i3 = matcherOut.length;
                    while (i3--) {
                      if (elem = matcherOut[i3]) {
                        temp.push(matcherIn[i3] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i3 = matcherOut.length;
                  while (i3--) {
                    if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i3]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i3 < len; i3++) {
              if (matcher = Expr.relative[tokens[i3].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
                if (matcher[expando]) {
                  j = ++i3;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(i3 > 1 && elementMatcher(matchers), i3 > 1 && toSelector(tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i3 < j && matcherFromTokens(tokens.slice(i3, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i3;
              if (bySet && i3 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i3--) {
                      if (!(unmatched[i3] || setMatched[i3])) {
                        setMatched[i3] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i3 = match.length;
              while (i3--) {
                cached = matcherFromTokens(match[i3]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i3, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i3 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i3--) {
                token = tokens[i3];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i3, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery2.find = Sizzle;
        jQuery2.expr = Sizzle.selectors;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
        jQuery2.text = Sizzle.getText;
        jQuery2.isXMLDoc = Sizzle.isXML;
        jQuery2.contains = Sizzle.contains;
        jQuery2.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n2, elem) {
          var matched = [];
          for (; n2; n2 = n2.nextSibling) {
            if (n2.nodeType === 1 && n2 !== elem) {
              matched.push(n2);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i2) {
              return !!qualifier.call(elem, i2, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery2.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery2.filter(qualifier, elements, not);
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i2, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i2 = 0; i2 < len; i2++) {
                  if (jQuery2.contains(self2[i2], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i2 = 0; i2 < len; i2++) {
              jQuery2.find(selector, self2[i2], ret);
            }
            return len > 1 ? jQuery2.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [], false).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
                if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery2);
          }
          return jQuery2.makeArray(selector, this);
        };
        init.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var targets = jQuery2(target, this), l2 = targets.length;
            return this.filter(function() {
              var i2 = 0;
              for (; i2 < l2; i2++) {
                if (jQuery2.contains(this, targets[i2])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i2 = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i2 < l2; i2++) {
                for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery2(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
          },
          add: function(selector, context) {
            return this.pushStack(jQuery2.uniqueSort(jQuery2.merge(this.get(), jQuery2(selector, context))));
          },
          addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery2.fn[name] = function(until, selector) {
            var matched = jQuery2.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery2.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery2.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_2, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery2.each(arguments, function(_2, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v2) {
          return v2;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery2.Callbacks("memory"),
                jQuery2.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                        } else {
                          maxDepth++;
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e2) {
                        if (jQuery2.Deferred.exceptionHook) {
                          jQuery2.Deferred.exceptionHook(e2, process.stackTrace);
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e2];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery2.Deferred.getStackHook) {
                        process.stackTrace = jQuery2.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery2.Deferred(function(newDefer) {
                  tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                  tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                  tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery2.each(tuples, function(i2, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[3 - i2][2].disable, tuples[3 - i2][3].disable, tuples[0][2].lock, tuples[0][3].lock);
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
              return function(value) {
                resolveContexts[i3] = this;
                resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(singleValue, primary.done(updateFunc(i2)).resolve, primary.reject, !remaining);
              if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) {
                return primary.then();
              }
            }
            while (i2--) {
              adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery2.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery2.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery2.Deferred();
        jQuery2.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery2.readyException(error);
          });
          return this;
        };
        jQuery2.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery2]);
          }
        });
        jQuery2.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery2.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery2.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i2 = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i2 in key) {
              access(elems, fn, i2, key[i2], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i2 < len; i2++) {
                fn(elems[i2], key, raw ? value : value.call(elems[i2], i2, fn(elems[i2], key)));
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery2.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i2, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i2 = key.length;
              while (i2--) {
                delete cache[key[i2]];
              }
            }
            if (key === void 0 || jQuery2.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery2.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e2) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery2.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i2 = attrs.length;
                  while (i2--) {
                    if (attrs[i2]) {
                      name = attrs[i2].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i2--) {
              tmp = dataPriv.get(elements[i2], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery2.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery2.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery2.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery2.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery2.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery2.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            dataPriv.set(elems[i2], "globalEval", !refElements || dataPriv.get(refElements[i2], "globalEval"));
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l2 = elems.length;
          for (; i2 < l2; i2++) {
            elem = elems[i2];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i2 = 0;
          while (elem = nodes[i2++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery2.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e2) {
                return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e2.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t2 = types.length;
            while (t2--) {
              tmp = rtypenamespace.exec(types[t2]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t2], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            for (i2 = 1; i2 < arguments.length; i2++) {
              args[i2] = arguments[i2];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i2 = 0;
            while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i2 = 0; i2 < delegateCount; i2++) {
                    handleObj = handlers[i2];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery2.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery2.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery2.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery2.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery2.event.trigger(jQuery2.extend(saved[0], jQuery2.Event.prototype), saved.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery2.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e2 = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.preventDefault();
            }
          },
          stopPropagation: function() {
            var e2 = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e2 = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e2 && !this.isSimulated) {
              e2.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery2.event.addProp);
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery2.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function() {
              return true;
            },
            delegateType
          };
        });
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery2.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery2(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i2, l2, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i2 = 0, l2 = events[type].length; i2 < l2; i2++) {
                  jQuery2.event.add(dest, type, events[type][i2]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery2.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l2) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i2 < l2; i2++) {
                node = fragment;
                if (i2 !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i2], node, i2);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i2 = 0; i2 < hasScripts; i2++) {
                  node = scripts[i2];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery2._evalUrl && !node.noModule) {
                        jQuery2._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
          for (; (node = nodes[i2]) != null; i2++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i2, l2, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                fixInput(srcElements[i2], destElements[i2]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
                  cloneCopyEvent(srcElements[i2], destElements[i2]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery2.event.special, i2 = 0;
            for (; (elem = elems[i2]) !== void 0; i2++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i2 = 0;
            for (; (elem = this[i2]) != null; i2++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i2 = 0, l2 = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i2 < l2; i2++) {
                    elem = this[i2] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e2) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
            for (; i2 <= last; i2++) {
              elems = i2 === last ? this : this.clone(true);
              jQuery2(insert[i2])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery2.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
          while (i2--) {
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery2.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i2 < 4; i2 += 2) {
            if (box === "margin") {
              delta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              if (box !== "padding") {
                delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              } else {
                extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
        }
        jQuery2.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(_i, dimension) {
          jQuery2.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery2.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery2.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        });
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i2 < 4; i2++) {
                expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i2 = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i2 < len; i2++) {
                  map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p2) {
            return p2;
          },
          swing: function(p2) {
            return 0.5 - Math.cos(p2 * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery2.fx.interval);
            }
            jQuery2.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i2 = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i2 < 4; i2 += 2 - includeWidth) {
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            }
          }
          propTween = !jQuery2.isEmptyObject(props);
          if (!propTween && jQuery2.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery2.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery2.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery2.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery2.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery2.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery2.fx.timer(jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          }));
          return animation;
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery2.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery2.fx.speeds) {
                opt.duration = jQuery2.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery2.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, i2 = 0, timers = jQuery2.timers;
          fxNow = Date.now();
          for (; i2 < timers.length; i2++) {
            timer = timers[i2];
            if (!timer() && timers[i2] === timer) {
              timers.splice(i2--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          jQuery2.fx.start();
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery2.fx.stop = function() {
          inProgress = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery2.expr.attrHandle;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i2++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery2.propFix[name] || name];
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i2++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery2(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i2++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery2(this).toggleClass(value.call(this, i2, getClass(this), stateVal), stateVal);
              });
            }
            return this.each(function() {
              var className, i2, self2, classNames;
              if (isValidValue) {
                i2 = 0;
                self2 = jQuery2(this);
                classNames = classesToArray(value);
                while (className = classNames[i2++]) {
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i2 = 0;
            className = " " + selector + " ";
            while (elem = this[i2++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i2) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i2, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery2.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i2 = max;
                } else {
                  i2 = one ? index : 0;
                }
                for (; i2 < max; i2++) {
                  option = options[i2];
                  if ((option.selected || i2 === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
                while (i2--) {
                  option = options[i2];
                  if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
          e2.stopPropagation();
        };
        jQuery2.extend(jQuery2.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i2 = 0;
            while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i2 > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e2 = jQuery2.extend(new jQuery2.Event(), event, {
              type,
              isSimulated: true
            });
            jQuery2.event.trigger(e2, null, elem);
          }
        });
        jQuery2.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
            };
            jQuery2.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery2.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e2) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery2.each(obj, function(i2, v2) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v2);
              } else {
                buildParams(prefix + "[" + (typeof v2 === "object" && v2 != null ? i2 : "") + "]", v2, traditional, add);
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a2, traditional) {
          var prefix, s2 = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a2 == null) {
            return "";
          }
          if (Array.isArray(a2) || a2.jquery && !jQuery2.isPlainObject(a2)) {
            jQuery2.each(a2, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a2) {
              buildParams(prefix, a2[prefix], traditional, add);
            }
          }
          return s2.join("&");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery2(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery2.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i2++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s2, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s2, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s2.converters) {
              converters[conv.toLowerCase()] = s2.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s2.responseFields[current]) {
              jqXHR[s2.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s2.dataFilter) {
              response = s2.dataFilter(response, s2.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s2.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e2) {
                      return {
                        state: "parsererror",
                        error: conv ? e2 : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery2.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s2 = jQuery2.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s2.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s2.url = ((url || s2.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s2.type = options.method || options.type || s2.method || s2.type;
            s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s2.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s2.url;
                urlAnchor.href = urlAnchor.href;
                s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e2) {
                s2.crossDomain = true;
              }
            }
            if (s2.data && s2.processData && typeof s2.data !== "string") {
              s2.data = jQuery2.param(s2.data, s2.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s2.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s2.type = s2.type.toUpperCase();
            s2.hasContent = !rnoContent.test(s2.type);
            cacheURL = s2.url.replace(rhash, "");
            if (!s2.hasContent) {
              uncached = s2.url.slice(cacheURL.length);
              if (s2.data && (s2.processData || typeof s2.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
                delete s2.data;
              }
              if (s2.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s2.url = cacheURL + uncached;
            } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s2.data = s2.data.replace(r20, "+");
            }
            if (s2.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s2.contentType);
            }
            jqXHR.setRequestHeader("Accept", s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]);
            for (i2 in s2.headers) {
              jqXHR.setRequestHeader(i2, s2.headers[i2]);
            }
            if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s2.complete);
            jqXHR.done(s2.success);
            jqXHR.fail(s2.error);
            transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s2.async && s2.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s2.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e2) {
                if (completed2) {
                  throw e2;
                }
                done(-1, e2);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s2, jqXHR, responses);
              }
              if (!isSuccess && jQuery2.inArray("script", s2.dataTypes) > -1 && jQuery2.inArray("json", s2.dataTypes) < 0) {
                s2.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s2, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s2.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s2.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s2, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(_i, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2.ajaxPrefilter(function(s2) {
          var i2;
          for (i2 in s2.headers) {
            if (i2.toLowerCase() === "content-type") {
              s2.contentType = s2.headers[i2] || "";
            }
          }
        });
        jQuery2._evalUrl = function(url, options, doc) {
          return jQuery2.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery2.globalEval(response, options, doc);
            }
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i2) {
                jQuery2(this).wrapInner(html.call(this, i2));
              });
            }
            return this.each(function() {
              var self2 = jQuery2(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i2) {
              jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery2(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery2.expr.pseudos.hidden = function(elem) {
          return !jQuery2.expr.pseudos.visible(elem);
        };
        jQuery2.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery2.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery2.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery2.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i2, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                if (options.xhrFields) {
                  for (i2 in options.xhrFields) {
                    xhr[i2] = options.xhrFields[i2];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i2 in headers) {
                  xhr.setRequestHeader(i2, headers[i2]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e2) {
                  if (callback) {
                    throw e2;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery2.ajaxPrefilter(function(s2) {
          if (s2.crossDomain) {
            s2.contents.script = false;
          }
        });
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s2) {
          if (s2.cache === void 0) {
            s2.cache = false;
          }
          if (s2.crossDomain) {
            s2.type = "GET";
          }
        });
        jQuery2.ajaxTransport("script", function(s2) {
          if (s2.crossDomain || s2.scriptAttrs) {
            var script, callback;
            return {
              send: function(_2, complete) {
                script = jQuery2("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
          if (jsonProp || s2.dataTypes[0] === "jsonp") {
            callbackName = s2.jsonpCallback = isFunction(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
            if (jsonProp) {
              s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s2.jsonp !== false) {
              s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
            }
            s2.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s2.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s2[callbackName]) {
                s2.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        jQuery2.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery2.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.expr.pseudos.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery2.offset = {
          setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i2, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i2) {
                jQuery2.offset.setOffset(this, options, i2);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery2.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery2(offsetParent).offset();
                parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = prop === "pageYOffset";
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery2.each(["top", "left"], function(_i, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          });
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery2.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                }
                return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery2.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery2.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
          jQuery2.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        });
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery2.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
          return proxy;
        };
        jQuery2.holdReady = function(hold) {
          if (hold) {
            jQuery2.readyWait++;
          } else {
            jQuery2.ready(true);
          }
        };
        jQuery2.isArray = Array.isArray;
        jQuery2.parseJSON = JSON.parse;
        jQuery2.nodeName = nodeName;
        jQuery2.isFunction = isFunction;
        jQuery2.isWindow = isWindow;
        jQuery2.camelCase = camelCase;
        jQuery2.type = toType;
        jQuery2.now = Date.now;
        jQuery2.isNumeric = function(obj) {
          var type = jQuery2.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery2.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // node_modules/owl.carousel/dist/owl.carousel.js
  var require_owl_carousel = __commonJS({
    "node_modules/owl.carousel/dist/owl.carousel.js"() {
      (function($3, window2, document2, undefined2) {
        function Owl(element, options) {
          this.settings = null;
          this.options = $3.extend({}, Owl.Defaults, options);
          this.$element = $3(element);
          this._handlers = {};
          this._plugins = {};
          this._supress = {};
          this._current = null;
          this._speed = null;
          this._coordinates = [];
          this._breakpoint = null;
          this._width = null;
          this._items = [];
          this._clones = [];
          this._mergers = [];
          this._widths = [];
          this._invalidated = {};
          this._pipe = [];
          this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
              start: null,
              current: null
            },
            direction: null
          };
          this._states = {
            current: {},
            tags: {
              "initializing": ["busy"],
              "animating": ["busy"],
              "dragging": ["interacting"]
            }
          };
          $3.each(["onResize", "onThrottledResize"], $3.proxy(function(i2, handler) {
            this._handlers[handler] = $3.proxy(this[handler], this);
          }, this));
          $3.each(Owl.Plugins, $3.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
          }, this));
          $3.each(Owl.Workers, $3.proxy(function(priority, worker) {
            this._pipe.push({
              "filter": worker.filter,
              "run": $3.proxy(worker.run, this)
            });
          }, this));
          this.setup();
          this.initialize();
        }
        Owl.Defaults = {
          items: 3,
          loop: false,
          center: false,
          rewind: false,
          checkVisibility: true,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: false,
          margin: 0,
          stagePadding: 0,
          merge: false,
          mergeFit: true,
          autoWidth: false,
          startPosition: 0,
          rtl: false,
          smartSpeed: 250,
          fluidSpeed: false,
          dragEndSpeed: false,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: window2,
          fallbackEasing: "swing",
          slideTransition: "",
          info: false,
          nestedItemSelector: false,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab"
        };
        Owl.Width = {
          Default: "default",
          Inner: "inner",
          Outer: "outer"
        };
        Owl.Type = {
          Event: "event",
          State: "state"
        };
        Owl.Plugins = {};
        Owl.Workers = [{
          filter: ["width", "settings"],
          run: function() {
            this._width = this.$element.width();
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
          }
        }, {
          filter: ["items", "settings"],
          run: function() {
            this.$stage.children(".cloned").remove();
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
              "width": "auto",
              "margin-left": rtl ? margin : "",
              "margin-right": rtl ? "" : margin
            };
            !grid && this.$stage.children().css(css);
            cache.css = css;
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, merge = null, iterator = this._items.length, grid = !this.settings.autoWidth, widths = [];
            cache.items = {
              merge: false,
              width
            };
            while (iterator--) {
              merge = this._mergers[iterator];
              merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
              cache.items.merge = merge > 1 || cache.items.merge;
              widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }
            this._widths = widths;
          }
        }, {
          filter: ["items", "settings"],
          run: function() {
            var clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2, repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0, append = "", prepend = "";
            repeat /= 2;
            while (repeat > 0) {
              clones.push(this.normalize(clones.length / 2, true));
              append = append + items[clones[clones.length - 1]][0].outerHTML;
              clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
              prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
              repeat -= 1;
            }
            this._clones = clones;
            $3(append).addClass("cloned").appendTo(this.$stage);
            $3(prepend).addClass("cloned").prependTo(this.$stage);
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function() {
            var rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, iterator = -1, previous = 0, current = 0, coordinates = [];
            while (++iterator < size) {
              previous = coordinates[iterator - 1] || 0;
              current = this._widths[this.relative(iterator)] + this.settings.margin;
              coordinates.push(previous + current * rtl);
            }
            this._coordinates = coordinates;
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function() {
            var padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
              "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
              "padding-left": padding || "",
              "padding-right": padding || ""
            };
            this.$stage.css(css);
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            var iterator = this._coordinates.length, grid = !this.settings.autoWidth, items = this.$stage.children();
            if (grid && cache.items.merge) {
              while (iterator--) {
                cache.css.width = this._widths[this.relative(iterator)];
                items.eq(iterator).css(cache.css);
              }
            } else if (grid) {
              cache.css.width = cache.items.width;
              items.css(cache.css);
            }
          }
        }, {
          filter: ["items"],
          run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          }
        }, {
          filter: ["width", "items", "settings"],
          run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
          }
        }, {
          filter: ["position"],
          run: function() {
            this.animate(this.coordinates(this._current));
          }
        }, {
          filter: ["width", "position", "items", "settings"],
          run: function() {
            var rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, begin = this.coordinates(this.current()) + padding, end = begin + this.width() * rtl, inner, outer, matches = [], i2, n2;
            for (i2 = 0, n2 = this._coordinates.length; i2 < n2; i2++) {
              inner = this._coordinates[i2 - 1] || 0;
              outer = Math.abs(this._coordinates[i2]) + padding * rtl;
              if (this.op(inner, "<=", begin) && this.op(inner, ">", end) || this.op(outer, "<", begin) && this.op(outer, ">", end)) {
                matches.push(i2);
              }
            }
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + matches.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            if (this.settings.center) {
              this.$stage.children().eq(this.current()).addClass("center");
            }
          }
        }];
        Owl.prototype.initializeStage = function() {
          this.$stage = this.$element.find("." + this.settings.stageClass);
          if (this.$stage.length) {
            return;
          }
          this.$element.addClass(this.options.loadingClass);
          this.$stage = $3("<" + this.settings.stageElement + ">", {
            "class": this.settings.stageClass
          }).wrap($3("<div/>", {
            "class": this.settings.stageOuterClass
          }));
          this.$element.append(this.$stage.parent());
        };
        Owl.prototype.initializeItems = function() {
          var $items = this.$element.find(".owl-item");
          if ($items.length) {
            this._items = $items.get().map(function(item) {
              return $3(item);
            });
            this._mergers = this._items.map(function() {
              return 1;
            });
            this.refresh();
            return;
          }
          this.replace(this.$element.children().not(this.$stage.parent()));
          if (this.isVisible()) {
            this.refresh();
          } else {
            this.invalidate("width");
          }
          this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        };
        Owl.prototype.initialize = function() {
          this.enter("initializing");
          this.trigger("initialize");
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
          if (this.settings.autoWidth && !this.is("pre-loading")) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find("img");
            nestedSelector = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : undefined2;
            width = this.$element.children(nestedSelector).width();
            if (imgs.length && width <= 0) {
              this.preloadAutoWidthImages(imgs);
            }
          }
          this.initializeStage();
          this.initializeItems();
          this.registerEventHandlers();
          this.leave("initializing");
          this.trigger("initialized");
        };
        Owl.prototype.isVisible = function() {
          return this.settings.checkVisibility ? this.$element.is(":visible") : true;
        };
        Owl.prototype.setup = function() {
          var viewport = this.viewport(), overwrites = this.options.responsive, match = -1, settings = null;
          if (!overwrites) {
            settings = $3.extend({}, this.options);
          } else {
            $3.each(overwrites, function(breakpoint) {
              if (breakpoint <= viewport && breakpoint > match) {
                match = Number(breakpoint);
              }
            });
            settings = $3.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === "function") {
              settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;
            if (settings.responsiveClass) {
              this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + match));
            }
          }
          this.trigger("change", { property: { name: "settings", value: settings } });
          this._breakpoint = match;
          this.settings = settings;
          this.invalidate("settings");
          this.trigger("changed", { property: { name: "settings", value: this.settings } });
        };
        Owl.prototype.optionsLogic = function() {
          if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
          }
        };
        Owl.prototype.prepare = function(item) {
          var event = this.trigger("prepare", { content: item });
          if (!event.data) {
            event.data = $3("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(item);
          }
          this.trigger("prepared", { content: event.data });
          return event.data;
        };
        Owl.prototype.update = function() {
          var i2 = 0, n2 = this._pipe.length, filter = $3.proxy(function(p2) {
            return this[p2];
          }, this._invalidated), cache = {};
          while (i2 < n2) {
            if (this._invalidated.all || $3.grep(this._pipe[i2].filter, filter).length > 0) {
              this._pipe[i2].run(cache);
            }
            i2++;
          }
          this._invalidated = {};
          !this.is("valid") && this.enter("valid");
        };
        Owl.prototype.width = function(dimension) {
          dimension = dimension || Owl.Width.Default;
          switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
              return this._width;
            default:
              return this._width - this.settings.stagePadding * 2 + this.settings.margin;
          }
        };
        Owl.prototype.refresh = function() {
          this.enter("refreshing");
          this.trigger("refresh");
          this.setup();
          this.optionsLogic();
          this.$element.addClass(this.options.refreshClass);
          this.update();
          this.$element.removeClass(this.options.refreshClass);
          this.leave("refreshing");
          this.trigger("refreshed");
        };
        Owl.prototype.onThrottledResize = function() {
          window2.clearTimeout(this.resizeTimer);
          this.resizeTimer = window2.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
        };
        Owl.prototype.onResize = function() {
          if (!this._items.length) {
            return false;
          }
          if (this._width === this.$element.width()) {
            return false;
          }
          if (!this.isVisible()) {
            return false;
          }
          this.enter("resizing");
          if (this.trigger("resize").isDefaultPrevented()) {
            this.leave("resizing");
            return false;
          }
          this.invalidate("width");
          this.refresh();
          this.leave("resizing");
          this.trigger("resized");
        };
        Owl.prototype.registerEventHandlers = function() {
          if ($3.support.transition) {
            this.$stage.on($3.support.transition.end + ".owl.core", $3.proxy(this.onTransitionEnd, this));
          }
          if (this.settings.responsive !== false) {
            this.on(window2, "resize", this._handlers.onThrottledResize);
          }
          if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on("mousedown.owl.core", $3.proxy(this.onDragStart, this));
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
              return false;
            });
          }
          if (this.settings.touchDrag) {
            this.$stage.on("touchstart.owl.core", $3.proxy(this.onDragStart, this));
            this.$stage.on("touchcancel.owl.core", $3.proxy(this.onDragEnd, this));
          }
        };
        Owl.prototype.onDragStart = function(event) {
          var stage = null;
          if (event.which === 3) {
            return;
          }
          if ($3.support.transform) {
            stage = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(",");
            stage = {
              x: stage[stage.length === 16 ? 12 : 4],
              y: stage[stage.length === 16 ? 13 : 5]
            };
          } else {
            stage = this.$stage.position();
            stage = {
              x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
              y: stage.top
            };
          }
          if (this.is("animating")) {
            $3.support.transform ? this.animate(stage.x) : this.$stage.stop();
            this.invalidate("position");
          }
          this.$element.toggleClass(this.options.grabClass, event.type === "mousedown");
          this.speed(0);
          this._drag.time = new Date().getTime();
          this._drag.target = $3(event.target);
          this._drag.stage.start = stage;
          this._drag.stage.current = stage;
          this._drag.pointer = this.pointer(event);
          $3(document2).on("mouseup.owl.core touchend.owl.core", $3.proxy(this.onDragEnd, this));
          $3(document2).one("mousemove.owl.core touchmove.owl.core", $3.proxy(function(event2) {
            var delta = this.difference(this._drag.pointer, this.pointer(event2));
            $3(document2).on("mousemove.owl.core touchmove.owl.core", $3.proxy(this.onDragMove, this));
            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is("valid")) {
              return;
            }
            event2.preventDefault();
            this.enter("dragging");
            this.trigger("drag");
          }, this));
        };
        Owl.prototype.onDragMove = function(event) {
          var minimum = null, maximum = null, pull = null, delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this.difference(this._drag.stage.start, delta);
          if (!this.is("dragging")) {
            return;
          }
          event.preventDefault();
          if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
          } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
          }
          this._drag.stage.current = stage;
          this.animate(stage.x);
        };
        Owl.prototype.onDragEnd = function(event) {
          var delta = this.difference(this._drag.pointer, this.pointer(event)), stage = this._drag.stage.current, direction = delta.x > 0 ^ this.settings.rtl ? "left" : "right";
          $3(document2).off(".owl.core");
          this.$element.removeClass(this.options.grabClass);
          if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate("position");
            this.update();
            this._drag.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
              this._drag.target.one("click.owl.core", function() {
                return false;
              });
            }
          }
          if (!this.is("dragging")) {
            return;
          }
          this.leave("dragging");
          this.trigger("dragged");
        };
        Owl.prototype.closest = function(coordinate, direction) {
          var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();
          if (!this.settings.freeDrag) {
            $3.each(coordinates, $3.proxy(function(index, value) {
              if (direction === "left" && coordinate > value - pull && coordinate < value + pull) {
                position = index;
              } else if (direction === "right" && coordinate > value - width - pull && coordinate < value - width + pull) {
                position = index + 1;
              } else if (this.op(coordinate, "<", value) && this.op(coordinate, ">", coordinates[index + 1] !== undefined2 ? coordinates[index + 1] : value - width)) {
                position = direction === "left" ? index + 1 : index;
              }
              return position === -1;
            }, this));
          }
          if (!this.settings.loop) {
            if (this.op(coordinate, ">", coordinates[this.minimum()])) {
              position = coordinate = this.minimum();
            } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
              position = coordinate = this.maximum();
            }
          }
          return position;
        };
        Owl.prototype.animate = function(coordinate) {
          var animate = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd();
          if (animate) {
            this.enter("animating");
            this.trigger("translate");
          }
          if ($3.support.transform3d && $3.support.transition) {
            this.$stage.css({
              transform: "translate3d(" + coordinate + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            });
          } else if (animate) {
            this.$stage.animate({
              left: coordinate + "px"
            }, this.speed(), this.settings.fallbackEasing, $3.proxy(this.onTransitionEnd, this));
          } else {
            this.$stage.css({
              left: coordinate + "px"
            });
          }
        };
        Owl.prototype.is = function(state) {
          return this._states.current[state] && this._states.current[state] > 0;
        };
        Owl.prototype.current = function(position) {
          if (position === undefined2) {
            return this._current;
          }
          if (this._items.length === 0) {
            return undefined2;
          }
          position = this.normalize(position);
          if (this._current !== position) {
            var event = this.trigger("change", { property: { name: "position", value: position } });
            if (event.data !== undefined2) {
              position = this.normalize(event.data);
            }
            this._current = position;
            this.invalidate("position");
            this.trigger("changed", { property: { name: "position", value: this._current } });
          }
          return this._current;
        };
        Owl.prototype.invalidate = function(part) {
          if ($3.type(part) === "string") {
            this._invalidated[part] = true;
            this.is("valid") && this.leave("valid");
          }
          return $3.map(this._invalidated, function(v2, i2) {
            return i2;
          });
        };
        Owl.prototype.reset = function(position) {
          position = this.normalize(position);
          if (position === undefined2) {
            return;
          }
          this._speed = 0;
          this._current = position;
          this.suppress(["translate", "translated"]);
          this.animate(this.coordinates(position));
          this.release(["translate", "translated"]);
        };
        Owl.prototype.normalize = function(position, relative) {
          var n2 = this._items.length, m2 = relative ? 0 : this._clones.length;
          if (!this.isNumeric(position) || n2 < 1) {
            position = undefined2;
          } else if (position < 0 || position >= n2 + m2) {
            position = ((position - m2 / 2) % n2 + n2) % n2 + m2 / 2;
          }
          return position;
        };
        Owl.prototype.relative = function(position) {
          position -= this._clones.length / 2;
          return this.normalize(position, true);
        };
        Owl.prototype.maximum = function(relative) {
          var settings = this.settings, maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
          if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
          } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
              reciprocalItemsWidth = this._items[--iterator].width();
              elementWidth = this.$element.width();
              while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                  break;
                }
              }
            }
            maximum = iterator + 1;
          } else if (settings.center) {
            maximum = this._items.length - 1;
          } else {
            maximum = this._items.length - settings.items;
          }
          if (relative) {
            maximum -= this._clones.length / 2;
          }
          return Math.max(maximum, 0);
        };
        Owl.prototype.minimum = function(relative) {
          return relative ? 0 : this._clones.length / 2;
        };
        Owl.prototype.items = function(position) {
          if (position === undefined2) {
            return this._items.slice();
          }
          position = this.normalize(position, true);
          return this._items[position];
        };
        Owl.prototype.mergers = function(position) {
          if (position === undefined2) {
            return this._mergers.slice();
          }
          position = this.normalize(position, true);
          return this._mergers[position];
        };
        Owl.prototype.clones = function(position) {
          var odd = this._clones.length / 2, even = odd + this._items.length, map = function(index) {
            return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
          };
          if (position === undefined2) {
            return $3.map(this._clones, function(v2, i2) {
              return map(i2);
            });
          }
          return $3.map(this._clones, function(v2, i2) {
            return v2 === position ? map(i2) : null;
          });
        };
        Owl.prototype.speed = function(speed) {
          if (speed !== undefined2) {
            this._speed = speed;
          }
          return this._speed;
        };
        Owl.prototype.coordinates = function(position) {
          var multiplier = 1, newPosition = position - 1, coordinate;
          if (position === undefined2) {
            return $3.map(this._coordinates, $3.proxy(function(coordinate2, index) {
              return this.coordinates(index);
            }, this));
          }
          if (this.settings.center) {
            if (this.settings.rtl) {
              multiplier = -1;
              newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
          } else {
            coordinate = this._coordinates[newPosition] || 0;
          }
          coordinate = Math.ceil(coordinate);
          return coordinate;
        };
        Owl.prototype.duration = function(from, to, factor) {
          if (factor === 0) {
            return 0;
          }
          return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
        };
        Owl.prototype.to = function(position, speed) {
          var current = this.current(), revert = null, distance = position - this.relative(current), direction = (distance > 0) - (distance < 0), items = this._items.length, minimum = this.minimum(), maximum = this.maximum();
          if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
              distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
              current = revert - distance;
              position = revert;
              this.reset(current);
            }
          } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
          } else {
            position = Math.max(minimum, Math.min(maximum, position));
          }
          this.speed(this.duration(current, position, speed));
          this.current(position);
          if (this.isVisible()) {
            this.update();
          }
        };
        Owl.prototype.next = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) + 1, speed);
        };
        Owl.prototype.prev = function(speed) {
          speed = speed || false;
          this.to(this.relative(this.current()) - 1, speed);
        };
        Owl.prototype.onTransitionEnd = function(event) {
          if (event !== undefined2) {
            event.stopPropagation();
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
              return false;
            }
          }
          this.leave("animating");
          this.trigger("translated");
        };
        Owl.prototype.viewport = function() {
          var width;
          if (this.options.responsiveBaseElement !== window2) {
            width = $3(this.options.responsiveBaseElement).width();
          } else if (window2.innerWidth) {
            width = window2.innerWidth;
          } else if (document2.documentElement && document2.documentElement.clientWidth) {
            width = document2.documentElement.clientWidth;
          } else {
            console.warn("Can not detect viewport width.");
          }
          return width;
        };
        Owl.prototype.replace = function(content) {
          this.$stage.empty();
          this._items = [];
          if (content) {
            content = content instanceof jQuery ? content : $3(content);
          }
          if (this.settings.nestedItemSelector) {
            content = content.find("." + this.settings.nestedItemSelector);
          }
          content.filter(function() {
            return this.nodeType === 1;
          }).each($3.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          }, this));
          this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
          this.invalidate("items");
        };
        Owl.prototype.add = function(content, position) {
          var current = this.relative(this._current);
          position = position === undefined2 ? this._items.length : this.normalize(position, true);
          content = content instanceof jQuery ? content : $3(content);
          this.trigger("add", { content, position });
          content = this.prepare(content);
          if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1);
          }
          this._items[current] && this.reset(this._items[current].index());
          this.invalidate("items");
          this.trigger("added", { content, position });
        };
        Owl.prototype.remove = function(position) {
          position = this.normalize(position, true);
          if (position === undefined2) {
            return;
          }
          this.trigger("remove", { content: this._items[position], position });
          this._items[position].remove();
          this._items.splice(position, 1);
          this._mergers.splice(position, 1);
          this.invalidate("items");
          this.trigger("removed", { content: null, position });
        };
        Owl.prototype.preloadAutoWidthImages = function(images) {
          images.each($3.proxy(function(i2, element) {
            this.enter("pre-loading");
            element = $3(element);
            $3(new Image()).one("load", $3.proxy(function(e2) {
              element.attr("src", e2.target.src);
              element.css("opacity", 1);
              this.leave("pre-loading");
              !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", element.attr("src") || element.attr("data-src") || element.attr("data-src-retina"));
          }, this));
        };
        Owl.prototype.destroy = function() {
          this.$element.off(".owl.core");
          this.$stage.off(".owl.core");
          $3(document2).off(".owl.core");
          if (this.settings.responsive !== false) {
            window2.clearTimeout(this.resizeTimer);
            this.off(window2, "resize", this._handlers.onThrottledResize);
          }
          for (var i2 in this._plugins) {
            this._plugins[i2].destroy();
          }
          this.$stage.children(".cloned").remove();
          this.$stage.unwrap();
          this.$stage.children().contents().unwrap();
          this.$stage.children().unwrap();
          this.$stage.remove();
          this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
        };
        Owl.prototype.op = function(a2, o2, b2) {
          var rtl = this.settings.rtl;
          switch (o2) {
            case "<":
              return rtl ? a2 > b2 : a2 < b2;
            case ">":
              return rtl ? a2 < b2 : a2 > b2;
            case ">=":
              return rtl ? a2 <= b2 : a2 >= b2;
            case "<=":
              return rtl ? a2 >= b2 : a2 <= b2;
            default:
              break;
          }
        };
        Owl.prototype.on = function(element, event, listener, capture) {
          if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
          } else if (element.attachEvent) {
            element.attachEvent("on" + event, listener);
          }
        };
        Owl.prototype.off = function(element, event, listener, capture) {
          if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
          } else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
          }
        };
        Owl.prototype.trigger = function(name, data, namespace, state, enter) {
          var status = {
            item: { count: this._items.length, index: this.current() }
          }, handler = $3.camelCase($3.grep(["on", name, namespace], function(v2) {
            return v2;
          }).join("-").toLowerCase()), event = $3.Event([name, "owl", namespace || "carousel"].join(".").toLowerCase(), $3.extend({ relatedTarget: this }, status, data));
          if (!this._supress[name]) {
            $3.each(this._plugins, function(name2, plugin) {
              if (plugin.onTrigger) {
                plugin.onTrigger(event);
              }
            });
            this.register({ type: Owl.Type.Event, name });
            this.$element.trigger(event);
            if (this.settings && typeof this.settings[handler] === "function") {
              this.settings[handler].call(this, event);
            }
          }
          return event;
        };
        Owl.prototype.enter = function(name) {
          $3.each([name].concat(this._states.tags[name] || []), $3.proxy(function(i2, name2) {
            if (this._states.current[name2] === undefined2) {
              this._states.current[name2] = 0;
            }
            this._states.current[name2]++;
          }, this));
        };
        Owl.prototype.leave = function(name) {
          $3.each([name].concat(this._states.tags[name] || []), $3.proxy(function(i2, name2) {
            this._states.current[name2]--;
          }, this));
        };
        Owl.prototype.register = function(object) {
          if (object.type === Owl.Type.Event) {
            if (!$3.event.special[object.name]) {
              $3.event.special[object.name] = {};
            }
            if (!$3.event.special[object.name].owl) {
              var _default = $3.event.special[object.name]._default;
              $3.event.special[object.name]._default = function(e2) {
                if (_default && _default.apply && (!e2.namespace || e2.namespace.indexOf("owl") === -1)) {
                  return _default.apply(this, arguments);
                }
                return e2.namespace && e2.namespace.indexOf("owl") > -1;
              };
              $3.event.special[object.name].owl = true;
            }
          } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
              this._states.tags[object.name] = object.tags;
            } else {
              this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = $3.grep(this._states.tags[object.name], $3.proxy(function(tag, i2) {
              return $3.inArray(tag, this._states.tags[object.name]) === i2;
            }, this));
          }
        };
        Owl.prototype.suppress = function(events) {
          $3.each(events, $3.proxy(function(index, event) {
            this._supress[event] = true;
          }, this));
        };
        Owl.prototype.release = function(events) {
          $3.each(events, $3.proxy(function(index, event) {
            delete this._supress[event];
          }, this));
        };
        Owl.prototype.pointer = function(event) {
          var result = { x: null, y: null };
          event = event.originalEvent || event || window2.event;
          event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
          if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
          } else {
            result.x = event.clientX;
            result.y = event.clientY;
          }
          return result;
        };
        Owl.prototype.isNumeric = function(number) {
          return !isNaN(parseFloat(number));
        };
        Owl.prototype.difference = function(first, second) {
          return {
            x: first.x - second.x,
            y: first.y - second.y
          };
        };
        $3.fn.owlCarousel = function(option) {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.each(function() {
            var $this = $3(this), data = $this.data("owl.carousel");
            if (!data) {
              data = new Owl(this, typeof option == "object" && option);
              $this.data("owl.carousel", data);
              $3.each([
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove"
              ], function(i2, event) {
                data.register({ type: Owl.Type.Event, name: event });
                data.$element.on(event + ".owl.carousel.core", $3.proxy(function(e2) {
                  if (e2.namespace && e2.relatedTarget !== this) {
                    this.suppress([event]);
                    data[event].apply(this, [].slice.call(arguments, 1));
                    this.release([event]);
                  }
                }, data));
              });
            }
            if (typeof option == "string" && option.charAt(0) !== "_") {
              data[option].apply(data, args);
            }
          });
        };
        $3.fn.owlCarousel.Constructor = Owl;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var AutoRefresh = function(carousel) {
          this._core = carousel;
          this._interval = null;
          this._visible = null;
          this._handlers = {
            "initialized.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.autoRefresh) {
                this.watch();
              }
            }, this)
          };
          this._core.options = $3.extend({}, AutoRefresh.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
        };
        AutoRefresh.Defaults = {
          autoRefresh: true,
          autoRefreshInterval: 500
        };
        AutoRefresh.prototype.watch = function() {
          if (this._interval) {
            return;
          }
          this._visible = this._core.isVisible();
          this._interval = window2.setInterval($3.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
        };
        AutoRefresh.prototype.refresh = function() {
          if (this._core.isVisible() === this._visible) {
            return;
          }
          this._visible = !this._visible;
          this._core.$element.toggleClass("owl-hidden", !this._visible);
          this._visible && (this._core.invalidate("width") && this._core.refresh());
        };
        AutoRefresh.prototype.destroy = function() {
          var handler, property;
          window2.clearInterval(this._interval);
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var Lazy = function(carousel) {
          this._core = carousel;
          this._loaded = [];
          this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": $3.proxy(function(e2) {
              if (!e2.namespace) {
                return;
              }
              if (!this._core.settings || !this._core.settings.lazyLoad) {
                return;
              }
              if (e2.property && e2.property.name == "position" || e2.type == "initialized") {
                var settings = this._core.settings, n2 = settings.center && Math.ceil(settings.items / 2) || settings.items, i2 = settings.center && n2 * -1 || 0, position = (e2.property && e2.property.value !== undefined2 ? e2.property.value : this._core.current()) + i2, clones = this._core.clones().length, load = $3.proxy(function(i3, v2) {
                  this.load(v2);
                }, this);
                if (settings.lazyLoadEager > 0) {
                  n2 += settings.lazyLoadEager;
                  if (settings.loop) {
                    position -= settings.lazyLoadEager;
                    n2++;
                  }
                }
                while (i2++ < n2) {
                  this.load(clones / 2 + this._core.relative(position));
                  clones && $3.each(this._core.clones(this._core.relative(position)), load);
                  position++;
                }
              }
            }, this)
          };
          this._core.options = $3.extend({}, Lazy.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
        };
        Lazy.Defaults = {
          lazyLoad: false,
          lazyLoadEager: 0
        };
        Lazy.prototype.load = function(position) {
          var $item = this._core.$stage.children().eq(position), $elements = $item && $item.find(".owl-lazy");
          if (!$elements || $3.inArray($item.get(0), this._loaded) > -1) {
            return;
          }
          $elements.each($3.proxy(function(index, element) {
            var $element = $3(element), image, url = window2.devicePixelRatio > 1 && $element.attr("data-src-retina") || $element.attr("data-src") || $element.attr("data-srcset");
            this._core.trigger("load", { element: $element, url }, "lazy");
            if ($element.is("img")) {
              $element.one("load.owl.lazy", $3.proxy(function() {
                $element.css("opacity", 1);
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this)).attr("src", url);
            } else if ($element.is("source")) {
              $element.one("load.owl.lazy", $3.proxy(function() {
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this)).attr("srcset", url);
            } else {
              image = new Image();
              image.onload = $3.proxy(function() {
                $element.css({
                  "background-image": 'url("' + url + '")',
                  "opacity": "1"
                });
                this._core.trigger("loaded", { element: $element, url }, "lazy");
              }, this);
              image.src = url;
            }
          }, this));
          this._loaded.push($item.get(0));
        };
        Lazy.prototype.destroy = function() {
          var handler, property;
          for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var AutoHeight = function(carousel) {
          this._core = carousel;
          this._previousHeight = null;
          this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.autoHeight) {
                this.update();
              }
            }, this),
            "changed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.autoHeight && e2.property.name === "position") {
                this.update();
              }
            }, this),
            "loaded.owl.lazy": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.autoHeight && e2.element.closest("." + this._core.settings.itemClass).index() === this._core.current()) {
                this.update();
              }
            }, this)
          };
          this._core.options = $3.extend({}, AutoHeight.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
          this._intervalId = null;
          var refThis = this;
          $3(window2).on("load", function() {
            if (refThis._core.settings.autoHeight) {
              refThis.update();
            }
          });
          $3(window2).resize(function() {
            if (refThis._core.settings.autoHeight) {
              if (refThis._intervalId != null) {
                clearTimeout(refThis._intervalId);
              }
              refThis._intervalId = setTimeout(function() {
                refThis.update();
              }, 250);
            }
          });
        };
        AutoHeight.Defaults = {
          autoHeight: false,
          autoHeightClass: "owl-height"
        };
        AutoHeight.prototype.update = function() {
          var start = this._core._current, end = start + this._core.settings.items, lazyLoadEnabled = this._core.settings.lazyLoad, visible = this._core.$stage.children().toArray().slice(start, end), heights = [], maxheight = 0;
          $3.each(visible, function(index, item) {
            heights.push($3(item).height());
          });
          maxheight = Math.max.apply(null, heights);
          if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
          }
          this._previousHeight = maxheight;
          this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
        };
        AutoHeight.prototype.destroy = function() {
          var handler, property;
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var Video = function(carousel) {
          this._core = carousel;
          this._videos = {};
          this._playing = null;
          this._handlers = {
            "initialized.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace) {
                this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
              }
            }, this),
            "resize.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.video && this.isInFullScreen()) {
                e2.preventDefault();
              }
            }, this),
            "refreshed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.is("resizing")) {
                this._core.$stage.find(".cloned .owl-video-frame").remove();
              }
            }, this),
            "changed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && e2.property.name === "position" && this._playing) {
                this.stop();
              }
            }, this),
            "prepared.owl.carousel": $3.proxy(function(e2) {
              if (!e2.namespace) {
                return;
              }
              var $element = $3(e2.content).find(".owl-video");
              if ($element.length) {
                $element.css("display", "none");
                this.fetch($element, $3(e2.content));
              }
            }, this)
          };
          this._core.options = $3.extend({}, Video.Defaults, this._core.options);
          this._core.$element.on(this._handlers);
          this._core.$element.on("click.owl.video", ".owl-video-play-icon", $3.proxy(function(e2) {
            this.play(e2);
          }, this));
        };
        Video.Defaults = {
          video: false,
          videoHeight: false,
          videoWidth: false
        };
        Video.prototype.fetch = function(target, item) {
          var type = function() {
            if (target.attr("data-vimeo-id")) {
              return "vimeo";
            } else if (target.attr("data-vzaar-id")) {
              return "vzaar";
            } else {
              return "youtube";
            }
          }(), id = target.attr("data-vimeo-id") || target.attr("data-youtube-id") || target.attr("data-vzaar-id"), width = target.attr("data-width") || this._core.settings.videoWidth, height = target.attr("data-height") || this._core.settings.videoHeight, url = target.attr("href");
          if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
            if (id[3].indexOf("youtu") > -1) {
              type = "youtube";
            } else if (id[3].indexOf("vimeo") > -1) {
              type = "vimeo";
            } else if (id[3].indexOf("vzaar") > -1) {
              type = "vzaar";
            } else {
              throw new Error("Video URL not supported.");
            }
            id = id[6];
          } else {
            throw new Error("Missing video URL.");
          }
          this._videos[url] = {
            type,
            id,
            width,
            height
          };
          item.attr("data-video", url);
          this.thumbnail(target, this._videos[url]);
        };
        Video.prototype.thumbnail = function(target, video) {
          var tnLink, icon, path, dimensions = video.width && video.height ? "width:" + video.width + "px;height:" + video.height + "px;" : "", customTn = target.find("img"), srcType = "src", lazyClass = "", settings = this._core.settings, create = function(path2) {
            icon = '<div class="owl-video-play-icon"></div>';
            if (settings.lazyLoad) {
              tnLink = $3("<div/>", {
                "class": "owl-video-tn " + lazyClass,
                "srcType": path2
              });
            } else {
              tnLink = $3("<div/>", {
                "class": "owl-video-tn",
                "style": "opacity:1;background-image:url(" + path2 + ")"
              });
            }
            target.after(tnLink);
            target.after(icon);
          };
          target.wrap($3("<div/>", {
            "class": "owl-video-wrapper",
            "style": dimensions
          }));
          if (this._core.settings.lazyLoad) {
            srcType = "data-src";
            lazyClass = "owl-lazy";
          }
          if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
          }
          if (video.type === "youtube") {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
          } else if (video.type === "vimeo") {
            $3.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + video.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(data) {
                path = data[0].thumbnail_large;
                create(path);
              }
            });
          } else if (video.type === "vzaar") {
            $3.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + video.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function(data) {
                path = data.framegrab_url;
                create(path);
              }
            });
          }
        };
        Video.prototype.stop = function() {
          this._core.trigger("stop", null, "video");
          this._playing.find(".owl-video-frame").remove();
          this._playing.removeClass("owl-video-playing");
          this._playing = null;
          this._core.leave("playing");
          this._core.trigger("stopped", null, "video");
        };
        Video.prototype.play = function(event) {
          var target = $3(event.target), item = target.closest("." + this._core.settings.itemClass), video = this._videos[item.attr("data-video")], width = video.width || "100%", height = video.height || this._core.$stage.height(), html, iframe;
          if (this._playing) {
            return;
          }
          this._core.enter("playing");
          this._core.trigger("play", null, "video");
          item = this._core.items(this._core.relative(item.index()));
          this._core.reset(item.index());
          html = $3('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
          html.attr("height", height);
          html.attr("width", width);
          if (video.type === "youtube") {
            html.attr("src", "//www.youtube.com/embed/" + video.id + "?autoplay=1&rel=0&v=" + video.id);
          } else if (video.type === "vimeo") {
            html.attr("src", "//player.vimeo.com/video/" + video.id + "?autoplay=1");
          } else if (video.type === "vzaar") {
            html.attr("src", "//view.vzaar.com/" + video.id + "/player?autoplay=true");
          }
          iframe = $3(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find(".owl-video"));
          this._playing = item.addClass("owl-video-playing");
        };
        Video.prototype.isInFullScreen = function() {
          var element = document2.fullscreenElement || document2.mozFullScreenElement || document2.webkitFullscreenElement;
          return element && $3(element).parent().hasClass("owl-video-frame");
        };
        Video.prototype.destroy = function() {
          var handler, property;
          this._core.$element.off("click.owl.video");
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.Video = Video;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var Animate = function(scope) {
          this.core = scope;
          this.core.options = $3.extend({}, Animate.Defaults, this.core.options);
          this.swapping = true;
          this.previous = undefined2;
          this.next = undefined2;
          this.handlers = {
            "change.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && e2.property.name == "position") {
                this.previous = this.core.current();
                this.next = e2.property.value;
              }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace) {
                this.swapping = e2.type == "translated";
              }
            }, this),
            "translate.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                this.swap();
              }
            }, this)
          };
          this.core.$element.on(this.handlers);
        };
        Animate.Defaults = {
          animateOut: false,
          animateIn: false
        };
        Animate.prototype.swap = function() {
          if (this.core.settings.items !== 1) {
            return;
          }
          if (!$3.support.animation || !$3.support.transition) {
            return;
          }
          this.core.speed(0);
          var left, clear = $3.proxy(this.clear, this), previous = this.core.$stage.children().eq(this.previous), next = this.core.$stage.children().eq(this.next), incoming = this.core.settings.animateIn, outgoing = this.core.settings.animateOut;
          if (this.core.current() === this.previous) {
            return;
          }
          if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($3.support.animation.end, clear).css({ "left": left + "px" }).addClass("animated owl-animated-out").addClass(outgoing);
          }
          if (incoming) {
            next.one($3.support.animation.end, clear).addClass("animated owl-animated-in").addClass(incoming);
          }
        };
        Animate.prototype.clear = function(e2) {
          $3(e2.target).css({ "left": "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
          this.core.onTransitionEnd();
        };
        Animate.prototype.destroy = function() {
          var handler, property;
          for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var Autoplay = function(carousel) {
          this._core = carousel;
          this._call = null;
          this._time = 0;
          this._timeout = 0;
          this._paused = true;
          this._handlers = {
            "changed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && e2.property.name === "settings") {
                if (this._core.settings.autoplay) {
                  this.play();
                } else {
                  this.stop();
                }
              } else if (e2.namespace && e2.property.name === "position" && this._paused) {
                this._time = 0;
              }
            }, this),
            "initialized.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.autoplay) {
                this.play();
              }
            }, this),
            "play.owl.autoplay": $3.proxy(function(e2, t2, s2) {
              if (e2.namespace) {
                this.play(t2, s2);
              }
            }, this),
            "stop.owl.autoplay": $3.proxy(function(e2) {
              if (e2.namespace) {
                this.stop();
              }
            }, this),
            "mouseover.owl.autoplay": $3.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.pause();
              }
            }, this),
            "mouseleave.owl.autoplay": $3.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.play();
              }
            }, this),
            "touchstart.owl.core": $3.proxy(function() {
              if (this._core.settings.autoplayHoverPause && this._core.is("rotating")) {
                this.pause();
              }
            }, this),
            "touchend.owl.core": $3.proxy(function() {
              if (this._core.settings.autoplayHoverPause) {
                this.play();
              }
            }, this)
          };
          this._core.$element.on(this._handlers);
          this._core.options = $3.extend({}, Autoplay.Defaults, this._core.options);
        };
        Autoplay.Defaults = {
          autoplay: false,
          autoplayTimeout: 5e3,
          autoplayHoverPause: false,
          autoplaySpeed: false
        };
        Autoplay.prototype._next = function(speed) {
          this._call = window2.setTimeout($3.proxy(this._next, this, speed), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());
          if (this._core.is("interacting") || document2.hidden) {
            return;
          }
          this._core.next(speed || this._core.settings.autoplaySpeed);
        };
        Autoplay.prototype.read = function() {
          return new Date().getTime() - this._time;
        };
        Autoplay.prototype.play = function(timeout, speed) {
          var elapsed;
          if (!this._core.is("rotating")) {
            this._core.enter("rotating");
          }
          timeout = timeout || this._core.settings.autoplayTimeout;
          elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
          if (this._paused) {
            this._time = this.read();
            this._paused = false;
          } else {
            window2.clearTimeout(this._call);
          }
          this._time += this.read() % timeout - elapsed;
          this._timeout = timeout;
          this._call = window2.setTimeout($3.proxy(this._next, this, speed), timeout - elapsed);
        };
        Autoplay.prototype.stop = function() {
          if (this._core.is("rotating")) {
            this._time = 0;
            this._paused = true;
            window2.clearTimeout(this._call);
            this._core.leave("rotating");
          }
        };
        Autoplay.prototype.pause = function() {
          if (this._core.is("rotating") && !this._paused) {
            this._time = this.read();
            this._paused = true;
            window2.clearTimeout(this._call);
          }
        };
        Autoplay.prototype.destroy = function() {
          var handler, property;
          this.stop();
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        "use strict";
        var Navigation = function(carousel) {
          this._core = carousel;
          this._initialized = false;
          this._pages = [];
          this._controls = {};
          this._templates = [];
          this.$element = this._core.$element;
          this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
          };
          this._handlers = {
            "prepared.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.dotsData) {
                this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $3(e2.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
              }
            }, this),
            "added.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.dotsData) {
                this._templates.splice(e2.position, 0, this._templates.pop());
              }
            }, this),
            "remove.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.dotsData) {
                this._templates.splice(e2.position, 1);
              }
            }, this),
            "changed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && e2.property.name == "position") {
                this.draw();
              }
            }, this),
            "initialized.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && !this._initialized) {
                this._core.trigger("initialize", null, "navigation");
                this.initialize();
                this.update();
                this.draw();
                this._initialized = true;
                this._core.trigger("initialized", null, "navigation");
              }
            }, this),
            "refreshed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._initialized) {
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation");
              }
            }, this)
          };
          this._core.options = $3.extend({}, Navigation.Defaults, this._core.options);
          this.$element.on(this._handlers);
        };
        Navigation.Defaults = {
          nav: false,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>'
          ],
          navSpeed: false,
          navElement: 'button type="button" role="presentation"',
          navContainer: false,
          navContainerClass: "owl-nav",
          navClass: [
            "owl-prev",
            "owl-next"
          ],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: true,
          dotsEach: false,
          dotsData: false,
          dotsSpeed: false,
          dotsContainer: false
        };
        Navigation.prototype.initialize = function() {
          var override, settings = this._core.settings;
          this._controls.$relative = (settings.navContainer ? $3(settings.navContainer) : $3("<div>").addClass(settings.navContainerClass).appendTo(this.$element)).addClass("disabled");
          this._controls.$previous = $3("<" + settings.navElement + ">").addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on("click", $3.proxy(function(e2) {
            this.prev(settings.navSpeed);
          }, this));
          this._controls.$next = $3("<" + settings.navElement + ">").addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on("click", $3.proxy(function(e2) {
            this.next(settings.navSpeed);
          }, this));
          if (!settings.dotsData) {
            this._templates = [$3('<button role="button">').addClass(settings.dotClass).append($3("<span>")).prop("outerHTML")];
          }
          this._controls.$absolute = (settings.dotsContainer ? $3(settings.dotsContainer) : $3("<div>").addClass(settings.dotsClass).appendTo(this.$element)).addClass("disabled");
          this._controls.$absolute.on("click", "button", $3.proxy(function(e2) {
            var index = $3(e2.target).parent().is(this._controls.$absolute) ? $3(e2.target).index() : $3(e2.target).parent().index();
            e2.preventDefault();
            this.to(index, settings.dotsSpeed);
          }, this));
          for (override in this._overrides) {
            this._core[override] = $3.proxy(this[override], this);
          }
        };
        Navigation.prototype.destroy = function() {
          var handler, control, property, override, settings;
          settings = this._core.settings;
          for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
          }
          for (control in this._controls) {
            if (control === "$relative" && settings.navContainer) {
              this._controls[control].html("");
            } else {
              this._controls[control].remove();
            }
          }
          for (override in this.overides) {
            this._core[override] = this._overrides[override];
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        Navigation.prototype.update = function() {
          var i2, j, k2, lower = this._core.clones().length / 2, upper = lower + this._core.items().length, maximum = this._core.maximum(true), settings = this._core.settings, size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
          if (settings.slideBy !== "page") {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
          }
          if (settings.dots || settings.slideBy == "page") {
            this._pages = [];
            for (i2 = lower, j = 0, k2 = 0; i2 < upper; i2++) {
              if (j >= size || j === 0) {
                this._pages.push({
                  start: Math.min(maximum, i2 - lower),
                  end: i2 - lower + size - 1
                });
                if (Math.min(maximum, i2 - lower) === maximum) {
                  break;
                }
                j = 0, ++k2;
              }
              j += this._core.mergers(this._core.relative(i2));
            }
          }
        };
        Navigation.prototype.draw = function() {
          var difference, settings = this._core.settings, disabled = this._core.items().length <= settings.items, index = this._core.relative(this._core.current()), loop = settings.loop || settings.rewind;
          this._controls.$relative.toggleClass("disabled", !settings.nav || disabled);
          if (settings.nav) {
            this._controls.$previous.toggleClass("disabled", !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass("disabled", !loop && index >= this._core.maximum(true));
          }
          this._controls.$absolute.toggleClass("disabled", !settings.dots || disabled);
          if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;
            if (settings.dotsData && difference !== 0) {
              this._controls.$absolute.html(this._templates.join(""));
            } else if (difference > 0) {
              this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
              this._controls.$absolute.children().slice(difference).remove();
            }
            this._controls.$absolute.find(".active").removeClass("active");
            this._controls.$absolute.children().eq($3.inArray(this.current(), this._pages)).addClass("active");
          }
        };
        Navigation.prototype.onTrigger = function(event) {
          var settings = this._core.settings;
          event.page = {
            index: $3.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
          };
        };
        Navigation.prototype.current = function() {
          var current = this._core.relative(this._core.current());
          return $3.grep(this._pages, $3.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
          }, this)).pop();
        };
        Navigation.prototype.getPosition = function(successor) {
          var position, length, settings = this._core.settings;
          if (settings.slideBy == "page") {
            position = $3.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[(position % length + length) % length].start;
          } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
          }
          return position;
        };
        Navigation.prototype.next = function(speed) {
          $3.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        };
        Navigation.prototype.prev = function(speed) {
          $3.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        };
        Navigation.prototype.to = function(position, speed, standard) {
          var length;
          if (!standard && this._pages.length) {
            length = this._pages.length;
            $3.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
          } else {
            $3.proxy(this._overrides.to, this._core)(position, speed);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        "use strict";
        var Hash = function(carousel) {
          this._core = carousel;
          this._hashes = {};
          this.$element = this._core.$element;
          this._handlers = {
            "initialized.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && this._core.settings.startPosition === "URLHash") {
                $3(window2).trigger("hashchange.owl.navigation");
              }
            }, this),
            "prepared.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace) {
                var hash = $3(e2.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                if (!hash) {
                  return;
                }
                this._hashes[hash] = e2.content;
              }
            }, this),
            "changed.owl.carousel": $3.proxy(function(e2) {
              if (e2.namespace && e2.property.name === "position") {
                var current = this._core.items(this._core.relative(this._core.current())), hash = $3.map(this._hashes, function(item, hash2) {
                  return item === current ? hash2 : null;
                }).join();
                if (!hash || window2.location.hash.slice(1) === hash) {
                  return;
                }
                window2.location.hash = hash;
              }
            }, this)
          };
          this._core.options = $3.extend({}, Hash.Defaults, this._core.options);
          this.$element.on(this._handlers);
          $3(window2).on("hashchange.owl.navigation", $3.proxy(function(e2) {
            var hash = window2.location.hash.substring(1), items = this._core.$stage.children(), position = this._hashes[hash] && items.index(this._hashes[hash]);
            if (position === undefined2 || position === this._core.current()) {
              return;
            }
            this._core.to(this._core.relative(position), false, true);
          }, this));
        };
        Hash.Defaults = {
          URLhashListener: false
        };
        Hash.prototype.destroy = function() {
          var handler, property;
          $3(window2).off("hashchange.owl.navigation");
          for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
          }
          for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != "function" && (this[property] = null);
          }
        };
        $3.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
      })(window.Zepto || window.jQuery, window, document);
      (function($3, window2, document2, undefined2) {
        var style = $3("<support>").get(0).style, prefixes = "Webkit Moz O ms".split(" "), events = {
          transition: {
            end: {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd",
              transition: "transitionend"
            }
          },
          animation: {
            end: {
              WebkitAnimation: "webkitAnimationEnd",
              MozAnimation: "animationend",
              OAnimation: "oAnimationEnd",
              animation: "animationend"
            }
          }
        }, tests = {
          csstransforms: function() {
            return !!test("transform");
          },
          csstransforms3d: function() {
            return !!test("perspective");
          },
          csstransitions: function() {
            return !!test("transition");
          },
          cssanimations: function() {
            return !!test("animation");
          }
        };
        function test(property, prefixed2) {
          var result = false, upper = property.charAt(0).toUpperCase() + property.slice(1);
          $3.each((property + " " + prefixes.join(upper + " ") + upper).split(" "), function(i2, property2) {
            if (style[property2] !== undefined2) {
              result = prefixed2 ? property2 : true;
              return false;
            }
          });
          return result;
        }
        function prefixed(property) {
          return test(property, true);
        }
        if (tests.csstransitions()) {
          $3.support.transition = new String(prefixed("transition"));
          $3.support.transition.end = events.transition.end[$3.support.transition];
        }
        if (tests.cssanimations()) {
          $3.support.animation = new String(prefixed("animation"));
          $3.support.animation.end = events.animation.end[$3.support.animation];
        }
        if (tests.csstransforms()) {
          $3.support.transform = new String(prefixed("transform"));
          $3.support.transform3d = tests.csstransforms3d();
        }
      })(window.Zepto || window.jQuery, window, document);
    }
  });

  // resources/js/parts/owl-carousel.js
  var owl_carousel_exports = {};
  __markAsModule(owl_carousel_exports);
  var import_jquery;
  var init_owl_carousel = __esm({
    "resources/js/parts/owl-carousel.js"() {
      import_jquery = __toModule(require_jquery());
      $ = jQuery = import_jquery.default;
      require_owl_carousel();
      $(function() {
        $(".owl-carousel-regular").owlCarousel({
          loop: true,
          nav: true,
          dots: true,
          navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
          responsive: {
            0: {
              items: 1
            },
            640: {
              items: 2
            },
            768: {
              items: 3
            },
            1024: {
              items: 4
            }
          }
        });
      });
      $(function() {
        $(".owl-carousel-hero").owlCarousel({
          items: 1,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 8e3,
          onInitialized: startProgressBar,
          onTranslate: resetProgressBar,
          onTranslated: startProgressBar
        });
        function startProgressBar() {
          $(".slide-progress").css({
            height: "100%",
            transition: "height 8000ms"
          });
        }
        function resetProgressBar() {
          $(".slide-progress").css({
            height: 0,
            transition: "height 0s"
          });
        }
      });
      $(function() {
        $(".owl-date").owlCarousel({
          loop: false,
          nav: true,
          navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
          dots: false,
          responsive: {
            0: {
              items: 3
            },
            640: {
              items: 5
            },
            768: {
              items: 7
            },
            1024: {
              items: 9
            },
            1280: {
              items: 11
            },
            1590: {
              items: 15
            }
          }
        });
      });
      window.addEventListener("load", function() {
        function postsCarousel() {
          var checkWidth = $(window).width();
          var owlPost = $(".carousel-actu");
          if (checkWidth > 767) {
            if (typeof owlPost.data("owl.carousel") != "undefined") {
              owlPost.data("owl.carousel").destroy();
            }
            owlPost.removeClass("owl-carousel-regular owl-carousel owl-theme");
          } else if (checkWidth < 768) {
            owlPost.addClass("owl-carousel-regular owl-carousel owl-theme");
            owlPost.owlCarousel({
              items: 1,
              loop: true,
              nav: true,
              dots: false,
              navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"]
            });
          }
        }
        postsCarousel();
        $(window).resize(postsCarousel);
      });
    }
  });

  // resources/js/parts/toggle-menu.js
  var require_toggle_menu = __commonJS({
    "resources/js/parts/toggle-menu.js"() {
      var main_navigation = document.querySelector("#primary-menu");
      var toggle_menu = document.querySelector("#primary-menu-toggle");
      var toggle_logo = document.querySelector("#primary-menu-toggle div");
      toggle_menu.addEventListener("click", function(e2) {
        e2.preventDefault();
        main_navigation.classList.toggle("hidden");
        document.querySelector("main").classList.toggle("fixed");
        toggle_menu.classList.toggle("close-menu");
        toggle_menu.classList.toggle("open-menu");
        toggle_logo.classList.toggle("toggle-logo");
        document.querySelector("header").classList.toggle("active-header");
      });
    }
  });

  // resources/js/parts/toggle-submenu.js
  var require_toggle_submenu = __commonJS({
    "resources/js/parts/toggle-submenu.js"() {
      (function() {
        const ToggleSubMenu = {
          init() {
            this.toggleSub = document.querySelector(".sub");
            this.toggleArrow = document.querySelector(".sub i");
            this.submenu = document.querySelector(".sub-menu");
            this.toggleSub.addEventListener("click", (e2) => this.toggle(e2));
            this.toggleSub.addEventListener("mouseover", (e2) => this.hover(e2));
            this.submenu.addEventListener("mouseover", (e2) => this.hover(e2));
            this.toggleSub.addEventListener("mouseout", (e2) => this.remove(e2));
            this.submenu.addEventListener("mouseout", (e2) => this.remove(e2));
            document.addEventListener("click", (e2) => this.bodyClick(e2));
          },
          toggle(e2) {
            e2.preventDefault();
            this.submenu.classList.toggle("hidden");
            this.toggleArrow.classList.toggle("rotate-180");
          },
          hover(e2) {
            e2.preventDefault();
            this.submenu.classList.remove("hidden");
            this.toggleArrow.classList.add("rotate-180");
          },
          remove(e2) {
            e2.preventDefault();
            this.submenu.classList.add("hidden");
            this.toggleArrow.classList.remove("rotate-180");
          },
          bodyClick(e2) {
            if (e2.target === this.toggleSub || this.toggleSub.contains(e2.target)) {
              return;
            }
            this.submenu.classList.add("hidden");
            this.toggleArrow.classList.remove("rotate-180");
          }
        };
        ToggleSubMenu.init();
      })();
    }
  });

  // resources/js/parts/focus-search.js
  var require_focus_search = __commonJS({
    "resources/js/parts/focus-search.js"() {
      (function() {
        const FocusSearch = {
          init() {
            this.form = document.querySelector(".search-form");
            if (this.form != null) {
              this.input = document.querySelector(".search-form input[name='search']");
              this.form.addEventListener("mouseover", () => {
                this.focus();
              });
              this.form.addEventListener("mouseout", () => {
                this.focusOut();
              });
              document.addEventListener("click", (e2) => this.bodyClick(e2));
            }
          },
          focus() {
            if (this.input === document.activeElement) {
              this.form.classList.remove("translate-x-widget-search");
              this.form.classList.add("translate-x-0");
            }
          },
          focusOut() {
            if (this.input !== document.activeElement) {
              this.form.classList.add("translate-x-widget-search");
              this.form.classList.remove("translate-x-0");
            }
          },
          bodyClick(e2) {
            if (e2.target === this.form || this.form.contains(e2.target)) {
              return;
            }
            this.form.classList.remove("translate-x-0");
            this.form.classList.add("translate-x-widget-search");
          }
        };
        FocusSearch.init();
      })();
    }
  });

  // resources/js/parts/toggle-tabs.js
  var require_toggle_tabs = __commonJS({
    "resources/js/parts/toggle-tabs.js"() {
      (function() {
        const ToggleTabs = {
          init() {
            this.detailBtn = document.querySelector("button.detail");
            this.synopsisBtn = document.querySelector("button.synopsis");
            this.detailSection = document.querySelector("section.detail");
            this.synopsisSection = document.querySelector("section.synopsis");
            if (this.detailBtn != null) {
              this.detailBtn.addEventListener("click", (e2) => this.toggleDetail(e2));
            }
            if (this.synopsisBtn != null) {
              this.synopsisBtn.addEventListener("click", (e2) => this.toggleSynopsis(e2));
            }
          },
          toggleDetail(e2) {
            e2.preventDefault();
            this.synopsisBtn.classList.remove("active");
            this.detailBtn.classList.add("active");
            this.detailSection.classList.remove("hidden");
            this.synopsisSection.classList.add("lg:hidden");
          },
          toggleSynopsis(e2) {
            e2.preventDefault();
            this.synopsisBtn.classList.add("active");
            this.detailBtn.classList.remove("active");
            this.detailSection.classList.add("hidden");
            this.synopsisSection.classList.remove("lg:hidden");
          }
        };
        ToggleTabs.init();
      })();
    }
  });

  // resources/js/parts/sticky-scroll.js
  var require_sticky_scroll = __commonJS({
    "resources/js/parts/sticky-scroll.js"() {
    }
  });

  // resources/js/parts/toggle-readmore.js
  var require_toggle_readmore = __commonJS({
    "resources/js/parts/toggle-readmore.js"() {
      (function() {
        const ToggleReadMore = {
          init() {
            this.detailBtn = document.querySelector("section.detail .readmore");
            this.detailBtnContent = document.querySelectorAll("section.detail .readmore span");
            this.detailArrow = document.querySelector("section.detail .readmore i");
            this.detailHidden = document.querySelectorAll("section.detail ul li.hidden");
            this.detailAfter = document.querySelector("section.detail ul");
            this.synopsisBtn = document.querySelector("section.synopsis .readmore");
            this.synopsisBtnContent = document.querySelectorAll("section.synopsis .readmore span");
            this.synopsisArrow = document.querySelector("section.synopsis .readmore i");
            this.synopsisAfter = document.querySelector("section div");
            this.synHidden = document.querySelectorAll("section.synopsis div>*");
            if (this.detailBtn != null) {
              this.detailBtn.addEventListener("click", (e2) => this.toggleDetail(e2));
            }
            if (this.synopsisBtn != null) {
              this.synopsisBtn.addEventListener("click", (e2) => this.toggleSynopsis(e2));
            }
          },
          toggleDetail(e2) {
            e2.preventDefault();
            for (let i2 = 0; i2 < this.detailHidden.length; i2++) {
              this.detailHidden[i2].classList.toggle("hidden");
            }
            for (let i2 = 0; i2 < this.detailBtnContent.length; i2++) {
              this.detailBtnContent[i2].classList.toggle("hidden");
            }
            this.detailArrow.classList.toggle("rotate-180");
            this.detailAfter.classList.toggle("after:block");
            this.detailAfter.classList.toggle("after:hidden");
          },
          toggleSynopsis(e2) {
            e2.preventDefault();
            for (let i2 = 0; i2 < this.synHidden.length; i2++) {
              this.synHidden[i2].classList.toggle("hidden");
              this.synHidden[i2].classList.toggle("first:block");
            }
            for (let i2 = 0; i2 < this.synopsisBtnContent.length; i2++) {
              this.synopsisBtnContent[i2].classList.toggle("hidden");
            }
            this.synopsisBtn.classList.toggle("-mt-7");
            this.synopsisAfter.classList.toggle("after:block");
            this.synopsisAfter.classList.toggle("after:hidden");
            this.synopsisArrow.classList.toggle("rotate-180");
          }
        };
        ToggleReadMore.init();
      })();
    }
  });

  // resources/js/parts/toggle-sorting.js
  var require_toggle_sorting = __commonJS({
    "resources/js/parts/toggle-sorting.js"() {
      (function() {
        const ToggleSorting = {
          init() {
            this.element = document.querySelector(".sort");
            if (this.element != null) {
              this.button = this.element.querySelector(".button");
              this.content = this.element.querySelector(".content");
              this.button.addEventListener("click", (e2) => this.toggle(e2));
              document.addEventListener("click", (e2) => this.bodyClick(e2));
            }
          },
          toggle(e2) {
            e2.preventDefault();
            this.content.classList.toggle("hidden");
            this.element.classList.toggle("after:hidden");
            this.element.classList.toggle("after:block");
            this.button.classList.toggle("active");
            document.querySelector("body").classList.toggle("overflow-y-hidden");
          },
          bodyClick(e2) {
            if (e2.target === this.element || this.element.contains(e2.target)) {
              return;
            }
            this.content.classList.add("hidden");
            this.element.classList.add("after:hidden");
            this.element.classList.remove("after:block");
            this.button.classList.remove("active");
            document.querySelector("body").classList.remove("overflow-y-hidden");
          }
        };
        ToggleSorting.init();
      })();
    }
  });

  // node_modules/@fancyapps/ui/dist/fancybox.esm.js
  var t = (t2) => typeof t2 == "object" && t2 !== null && t2.constructor === Object && Object.prototype.toString.call(t2) === "[object Object]";
  var e = (...i2) => {
    let s2 = false;
    typeof i2[0] == "boolean" && (s2 = i2.shift());
    let o2 = i2[0];
    if (!o2 || typeof o2 != "object")
      throw new Error("extendee must be an object");
    const n2 = i2.slice(1), a2 = n2.length;
    for (let i3 = 0; i3 < a2; i3++) {
      const a3 = n2[i3];
      for (let i4 in a3)
        if (a3.hasOwnProperty(i4)) {
          const n3 = a3[i4];
          if (s2 && (Array.isArray(n3) || t(n3))) {
            const t2 = Array.isArray(n3) ? [] : {};
            o2[i4] = e(true, o2.hasOwnProperty(i4) ? o2[i4] : t2, n3);
          } else
            o2[i4] = n3;
        }
    }
    return o2;
  };
  var i = (t2, e2 = 1e4) => (t2 = parseFloat(t2) || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
  var s = function(t2) {
    return !!(t2 && typeof t2 == "object" && t2 instanceof Element && t2 !== document.body) && (!t2.__Panzoom && (function(t3) {
      const e2 = getComputedStyle(t3)["overflow-y"], i2 = getComputedStyle(t3)["overflow-x"], s2 = (e2 === "scroll" || e2 === "auto") && Math.abs(t3.scrollHeight - t3.clientHeight) > 1, o2 = (i2 === "scroll" || i2 === "auto") && Math.abs(t3.scrollWidth - t3.clientWidth) > 1;
      return s2 || o2;
    }(t2) ? t2 : s(t2.parentNode)));
  };
  var o = typeof window != "undefined" && window.ResizeObserver || class {
    constructor(t2) {
      this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t2;
    }
    observe(t2) {
      if (this.observables.some((e3) => e3.el === t2))
        return;
      const e2 = { el: t2, size: { height: t2.clientHeight, width: t2.clientWidth } };
      this.observables.push(e2);
    }
    unobserve(t2) {
      this.observables = this.observables.filter((e2) => e2.el !== t2);
    }
    disconnect() {
      this.observables = [];
    }
    check() {
      const t2 = this.observables.filter((t3) => {
        const e2 = t3.el.clientHeight, i2 = t3.el.clientWidth;
        if (t3.size.height !== e2 || t3.size.width !== i2)
          return t3.size.height = e2, t3.size.width = i2, true;
      }).map((t3) => t3.el);
      t2.length > 0 && this.callback(t2), window.requestAnimationFrame(this.boundCheck);
    }
  };
  var n = class {
    constructor(t2) {
      this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY;
    }
  };
  var a = (t2, e2) => e2 ? Math.sqrt((e2.clientX - t2.clientX) ** 2 + (e2.clientY - t2.clientY) ** 2) : 0;
  var r = (t2, e2) => e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
  var h = class {
    constructor(t2, { start: e2 = () => true, move: i2 = () => {
    }, end: s2 = () => {
    } } = {}) {
      this._element = t2, this.startPointers = [], this.currentPointers = [], this._pointerStart = (t3) => {
        if (t3.buttons > 0 && t3.button !== 0)
          return;
        const e3 = new n(t3);
        this.currentPointers.some((t4) => t4.id === e3.id) || this._triggerPointerStart(e3, t3) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd));
      }, this._touchStart = (t3) => {
        for (const e3 of Array.from(t3.changedTouches || []))
          this._triggerPointerStart(new n(e3), t3);
      }, this._move = (t3) => {
        const e3 = this.currentPointers.slice(), i3 = ((t4) => "changedTouches" in t4)(t3) ? Array.from(t3.changedTouches).map((t4) => new n(t4)) : [new n(t3)];
        for (const t4 of i3) {
          const e4 = this.currentPointers.findIndex((e5) => e5.id === t4.id);
          e4 < 0 || (this.currentPointers[e4] = t4);
        }
        this._moveCallback(e3, this.currentPointers.slice(), t3);
      }, this._triggerPointerEnd = (t3, e3) => {
        const i3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
        return !(i3 < 0) && (this.currentPointers.splice(i3, 1), this.startPointers.splice(i3, 1), this._endCallback(t3, e3), true);
      }, this._pointerEnd = (t3) => {
        t3.buttons > 0 && t3.button !== 0 || this._triggerPointerEnd(new n(t3), t3) && (window.removeEventListener("mousemove", this._move, { passive: false }), window.removeEventListener("mouseup", this._pointerEnd, { passive: false }));
      }, this._touchEnd = (t3) => {
        for (const e3 of Array.from(t3.changedTouches || []))
          this._triggerPointerEnd(new n(e3), t3);
      }, this._startCallback = e2, this._moveCallback = i2, this._endCallback = s2, this._element.addEventListener("mousedown", this._pointerStart, { passive: false }), this._element.addEventListener("touchstart", this._touchStart, { passive: false }), this._element.addEventListener("touchmove", this._move, { passive: false }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
    }
    stop() {
      this._element.removeEventListener("mousedown", this._pointerStart, { passive: false }), this._element.removeEventListener("touchstart", this._touchStart, { passive: false }), this._element.removeEventListener("touchmove", this._move, { passive: false }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
    }
    _triggerPointerStart(t2, e2) {
      return !!this._startCallback(t2, e2) && (this.currentPointers.push(t2), this.startPointers.push(t2), true);
    }
  };
  var l = class {
    constructor(t2 = {}) {
      this.options = e(true, {}, t2), this.plugins = [], this.events = {};
      for (const t3 of ["on", "once"])
        for (const e2 of Object.entries(this.options[t3] || {}))
          this[t3](...e2);
    }
    option(t2, e2, ...i2) {
      t2 = String(t2);
      let s2 = (o2 = t2, n2 = this.options, o2.split(".").reduce(function(t3, e3) {
        return t3 && t3[e3];
      }, n2));
      var o2, n2;
      return typeof s2 == "function" && (s2 = s2.call(this, this, ...i2)), s2 === void 0 ? e2 : s2;
    }
    localize(t2, e2 = []) {
      return t2 = (t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, i2, s2) => {
        let o2 = "";
        s2 ? o2 = this.option(`${i2[0] + i2.toLowerCase().substring(1)}.l10n.${s2}`) : i2 && (o2 = this.option(`l10n.${i2}`)), o2 || (o2 = t3);
        for (let t4 = 0; t4 < e2.length; t4++)
          o2 = o2.split(e2[t4][0]).join(e2[t4][1]);
        return o2;
      })).replace(/\{\{(.*)\}\}/, (t3, e3) => e3);
    }
    on(e2, i2) {
      if (t(e2)) {
        for (const t2 of Object.entries(e2))
          this.on(...t2);
        return this;
      }
      return String(e2).split(" ").forEach((t2) => {
        const e3 = this.events[t2] = this.events[t2] || [];
        e3.indexOf(i2) == -1 && e3.push(i2);
      }), this;
    }
    once(e2, i2) {
      if (t(e2)) {
        for (const t2 of Object.entries(e2))
          this.once(...t2);
        return this;
      }
      return String(e2).split(" ").forEach((t2) => {
        const e3 = (...s2) => {
          this.off(t2, e3), i2.call(this, this, ...s2);
        };
        e3._ = i2, this.on(t2, e3);
      }), this;
    }
    off(e2, i2) {
      if (!t(e2))
        return e2.split(" ").forEach((t2) => {
          const e3 = this.events[t2];
          if (!e3 || !e3.length)
            return this;
          let s2 = -1;
          for (let t3 = 0, o2 = e3.length; t3 < o2; t3++) {
            const o3 = e3[t3];
            if (o3 && (o3 === i2 || o3._ === i2)) {
              s2 = t3;
              break;
            }
          }
          s2 != -1 && e3.splice(s2, 1);
        }), this;
      for (const t2 of Object.entries(e2))
        this.off(...t2);
    }
    trigger(t2, ...e2) {
      for (const i2 of [...this.events[t2] || []].slice())
        if (i2 && i2.call(this, this, ...e2) === false)
          return false;
      for (const i2 of [...this.events["*"] || []].slice())
        if (i2 && i2.call(this, t2, this, ...e2) === false)
          return false;
      return true;
    }
    attachPlugins(t2) {
      const i2 = {};
      for (const [s2, o2] of Object.entries(t2 || {}))
        this.options[s2] === false || this.plugins[s2] || (this.options[s2] = e({}, o2.defaults || {}, this.options[s2]), i2[s2] = new o2(this));
      for (const [t3, e2] of Object.entries(i2))
        e2.attach(this);
      return this.plugins = Object.assign({}, this.plugins, i2), this;
    }
    detachPlugins() {
      for (const t2 in this.plugins) {
        let e2;
        (e2 = this.plugins[t2]) && typeof e2.detach == "function" && e2.detach(this);
      }
      return this.plugins = {}, this;
    }
  };
  var c = { touch: true, zoom: true, pinchToZoom: true, panOnlyZoomed: false, lockAxis: false, friction: 0.64, decelFriction: 0.88, zoomFriction: 0.74, bounceForce: 0.2, baseScale: 1, minScale: 1, maxScale: 2, step: 0.5, textSelection: false, click: "toggleZoom", wheel: "zoom", wheelFactor: 42, wheelLimit: 5, draggableClass: "is-draggable", draggingClass: "is-dragging", ratio: 1 };
  var d = class extends l {
    constructor(t2, i2 = {}) {
      super(e(true, {}, c, i2)), this.state = "init", this.$container = t2;
      for (const t3 of ["onLoad", "onWheel", "onClick"])
        this[t3] = this[t3].bind(this);
      this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), this.option("centerOnStart") === false ? this.state = "ready" : this.panTo({ friction: 0 }), t2.__Panzoom = this;
    }
    initLayout() {
      const t2 = this.$container;
      if (!(t2 instanceof HTMLElement))
        throw new Error("Panzoom: Container not found");
      const e2 = this.option("content") || t2.querySelector(".panzoom__content");
      if (!e2)
        throw new Error("Panzoom: Content not found");
      this.$content = e2;
      let i2 = this.option("viewport") || t2.querySelector(".panzoom__viewport");
      i2 || this.option("wrapInner") === false || (i2 = document.createElement("div"), i2.classList.add("panzoom__viewport"), i2.append(...t2.childNodes), t2.appendChild(i2)), this.$viewport = i2 || e2.parentNode;
    }
    resetValues() {
      this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = { width: 0, height: 0 }, this.viewport = { width: 0, height: 0 }, this.content = { origWidth: 0, origHeight: 0, width: 0, height: 0, x: this.option("x", 0), y: this.option("y", 0), scale: this.option("baseScale") }, this.transform = { x: 0, y: 0, scale: 1 }, this.resetDragPosition();
    }
    onLoad(t2) {
      this.updateMetrics(), this.panTo({ scale: this.option("baseScale"), friction: 0 }), this.trigger("load", t2);
    }
    onClick(t2) {
      if (t2.defaultPrevented)
        return;
      if (this.option("textSelection") && window.getSelection().toString().length)
        return void t2.stopPropagation();
      const e2 = this.$content.getClientRects()[0];
      if (this.state !== "ready" && (this.dragPosition.midPoint || Math.abs(e2.top - this.dragStart.rect.top) > 1 || Math.abs(e2.left - this.dragStart.rect.left) > 1))
        return t2.preventDefault(), void t2.stopPropagation();
      this.trigger("click", t2) !== false && this.option("zoom") && this.option("click") === "toggleZoom" && (t2.preventDefault(), t2.stopPropagation(), this.zoomWithClick(t2));
    }
    onWheel(t2) {
      this.trigger("wheel", t2) !== false && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t2);
    }
    zoomWithWheel(t2) {
      this.changedDelta === void 0 && (this.changedDelta = 0);
      const e2 = Math.max(-1, Math.min(1, -t2.deltaY || -t2.deltaX || t2.wheelDelta || -t2.detail)), i2 = this.content.scale;
      let s2 = i2 * (100 + e2 * this.option("wheelFactor")) / 100;
      if (e2 < 0 && Math.abs(i2 - this.option("minScale")) < 0.01 || e2 > 0 && Math.abs(i2 - this.option("maxScale")) < 0.01 ? (this.changedDelta += Math.abs(e2), s2 = i2) : (this.changedDelta = 0, s2 = Math.max(Math.min(s2, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit"))
        return;
      if (t2.preventDefault(), s2 === i2)
        return;
      const o2 = this.$content.getBoundingClientRect(), n2 = t2.clientX - o2.left, a2 = t2.clientY - o2.top;
      this.zoomTo(s2, { x: n2, y: a2 });
    }
    zoomWithClick(t2) {
      const e2 = this.$content.getClientRects()[0], i2 = t2.clientX - e2.left, s2 = t2.clientY - e2.top;
      this.toggleZoom({ x: i2, y: s2 });
    }
    attachEvents() {
      this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, { passive: false }), this.$container.addEventListener("click", this.onClick, { passive: false }), this.initObserver();
      const t2 = new h(this.$container, { start: (e2, i2) => {
        if (!this.option("touch"))
          return false;
        if (this.velocity.scale < 0)
          return false;
        const o2 = i2.composedPath()[0];
        if (!t2.currentPointers.length) {
          if (["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o2.nodeName) !== -1)
            return false;
          if (this.option("textSelection") && ((t3, e3, i3) => {
            const s2 = t3.childNodes, o3 = document.createRange();
            for (let t4 = 0; t4 < s2.length; t4++) {
              const n2 = s2[t4];
              if (n2.nodeType !== Node.TEXT_NODE)
                continue;
              o3.selectNodeContents(n2);
              const a2 = o3.getBoundingClientRect();
              if (e3 >= a2.left && i3 >= a2.top && e3 <= a2.right && i3 <= a2.bottom)
                return n2;
            }
            return false;
          })(o2, e2.clientX, e2.clientY))
            return false;
        }
        return !s(o2) && (this.trigger("touchStart", i2) !== false && (i2.type === "mousedown" && i2.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), true));
      }, move: (e2, i2, s2) => {
        if (this.state !== "pointerdown")
          return;
        if (this.trigger("touchMove", s2) === false)
          return void s2.preventDefault();
        if (i2.length < 2 && this.option("panOnlyZoomed") === true && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale"))
          return;
        if (i2.length > 1 && (!this.option("zoom") || this.option("pinchToZoom") === false))
          return;
        const o2 = r(e2[0], e2[1]), n2 = r(i2[0], i2[1]), h2 = n2.clientX - o2.clientX, l2 = n2.clientY - o2.clientY, c2 = a(e2[0], e2[1]), d2 = a(i2[0], i2[1]), u2 = c2 && d2 ? d2 / c2 : 1;
        this.dragOffset.x += h2, this.dragOffset.y += l2, this.dragOffset.scale *= u2, this.dragOffset.time = Date.now() - this.dragPosition.time;
        const f2 = this.dragStart.scale === 1 && this.option("lockAxis");
        if (f2 && !this.lockAxis) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
            return void s2.preventDefault();
          const t3 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
          this.lockAxis = t3 > 45 && t3 < 135 ? "y" : "x";
        }
        if (f2 === "xy" || this.lockAxis !== "y") {
          if (s2.preventDefault(), s2.stopPropagation(), s2.stopImmediatePropagation(), this.lockAxis && (this.dragOffset[this.lockAxis === "x" ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && this.lockAxis === "y" || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && this.lockAxis === "x" || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i2.length > 1) {
            const e3 = r(t2.startPointers[0], t2.startPointers[1]), i3 = e3.clientX - this.dragStart.rect.x, s3 = e3.clientY - this.dragStart.rect.y, { deltaX: o3, deltaY: a2 } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i3, s3);
            this.dragPosition.x -= o3, this.dragPosition.y -= a2, this.dragPosition.midPoint = n2;
          } else
            this.setDragResistance();
          this.transform = { x: this.dragPosition.x, y: this.dragPosition.y, scale: this.dragPosition.scale }, this.startAnimation();
        }
      }, end: (e2, i2) => {
        if (this.state !== "pointerdown")
          return;
        if (this._dragOffset = { ...this.dragOffset }, t2.currentPointers.length)
          return void this.resetDragPosition();
        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), this.trigger("touchEnd", i2) === false)
          return;
        if (this.state !== "decel")
          return;
        const s2 = this.option("minScale");
        if (this.transform.scale < s2)
          return void this.zoomTo(s2, { friction: 0.64 });
        const o2 = this.option("maxScale");
        if (this.transform.scale - o2 > 0.01) {
          const t3 = this.dragPosition.midPoint || e2, i3 = this.$content.getClientRects()[0];
          this.zoomTo(o2, { friction: 0.64, x: t3.clientX - i3.left, y: t3.clientY - i3.top });
        } else
          ;
      } });
      this.pointerTracker = t2;
    }
    initObserver() {
      this.resizeObserver || (this.resizeObserver = new o(() => {
        this.updateTimer || (this.updateTimer = setTimeout(() => {
          const t2 = this.$container.getBoundingClientRect();
          t2.width && t2.height ? ((Math.abs(t2.width - this.container.width) > 1 || Math.abs(t2.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(true), this.updateMetrics(), this.panTo({ x: this.content.x, y: this.content.y, scale: this.option("baseScale"), friction: 0 })), this.updateTimer = null) : this.updateTimer = null;
        }, this.updateRate));
      }), this.resizeObserver.observe(this.$container));
    }
    resetDragPosition() {
      this.lockAxis = null, this.friction = this.option("friction"), this.velocity = { x: 0, y: 0, scale: 0 };
      const { x: t2, y: e2, scale: i2 } = this.content;
      this.dragStart = { rect: this.$content.getBoundingClientRect(), x: t2, y: e2, scale: i2 }, this.dragPosition = { ...this.dragPosition, x: t2, y: e2, scale: i2 }, this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 };
    }
    updateMetrics(t2) {
      t2 !== true && this.trigger("beforeUpdate");
      const e2 = this.$container, s2 = this.$content, o2 = this.$viewport, n2 = s2 instanceof HTMLImageElement, a2 = this.option("zoom"), r2 = this.option("resizeParent", a2);
      let h2 = this.option("width"), l2 = this.option("height"), c2 = h2 || (d2 = s2, Math.max(parseFloat(d2.naturalWidth || 0), parseFloat(d2.width && d2.width.baseVal && d2.width.baseVal.value || 0), parseFloat(d2.offsetWidth || 0), parseFloat(d2.scrollWidth || 0)));
      var d2;
      let u2 = l2 || ((t3) => Math.max(parseFloat(t3.naturalHeight || 0), parseFloat(t3.height && t3.height.baseVal && t3.height.baseVal.value || 0), parseFloat(t3.offsetHeight || 0), parseFloat(t3.scrollHeight || 0)))(s2);
      Object.assign(s2.style, { width: h2 ? `${h2}px` : "", height: l2 ? `${l2}px` : "", maxWidth: "", maxHeight: "" }), r2 && Object.assign(o2.style, { width: "", height: "" });
      const f2 = this.option("ratio");
      c2 = i(c2 * f2), u2 = i(u2 * f2), h2 = c2, l2 = u2;
      const g2 = s2.getBoundingClientRect(), p2 = o2.getBoundingClientRect(), m2 = o2 == e2 ? p2 : e2.getBoundingClientRect();
      let y2 = Math.max(o2.offsetWidth, i(p2.width)), v2 = Math.max(o2.offsetHeight, i(p2.height)), b2 = window.getComputedStyle(o2);
      if (y2 -= parseFloat(b2.paddingLeft) + parseFloat(b2.paddingRight), v2 -= parseFloat(b2.paddingTop) + parseFloat(b2.paddingBottom), this.viewport.width = y2, this.viewport.height = v2, a2) {
        if (Math.abs(c2 - g2.width) > 0.1 || Math.abs(u2 - g2.height) > 0.1) {
          const t3 = ((t4, e3, i2, s3) => {
            const o3 = Math.min(i2 / t4 || 0, s3 / e3);
            return { width: t4 * o3 || 0, height: e3 * o3 || 0 };
          })(c2, u2, Math.min(c2, g2.width), Math.min(u2, g2.height));
          h2 = i(t3.width), l2 = i(t3.height);
        }
        Object.assign(s2.style, { width: `${h2}px`, height: `${l2}px`, transform: "" });
      }
      if (r2 && (Object.assign(o2.style, { width: `${h2}px`, height: `${l2}px` }), this.viewport = { ...this.viewport, width: h2, height: l2 }), n2 && a2 && typeof this.options.maxScale != "function") {
        const t3 = this.option("maxScale");
        this.options.maxScale = function() {
          return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t3;
        };
      }
      this.content = { ...this.content, origWidth: c2, origHeight: u2, fitWidth: h2, fitHeight: l2, width: h2, height: l2, scale: 1, isZoomable: a2 }, this.container = { width: m2.width, height: m2.height }, t2 !== true && this.trigger("afterUpdate");
    }
    zoomIn(t2) {
      this.zoomTo(this.content.scale + (t2 || this.option("step")));
    }
    zoomOut(t2) {
      this.zoomTo(this.content.scale - (t2 || this.option("step")));
    }
    toggleZoom(t2 = {}) {
      const e2 = this.option("maxScale"), i2 = this.option("baseScale"), s2 = this.content.scale > i2 + 0.5 * (e2 - i2) ? i2 : e2;
      this.zoomTo(s2, t2);
    }
    zoomTo(t2 = this.option("baseScale"), { x: e2 = null, y: s2 = null } = {}) {
      t2 = Math.max(Math.min(t2, this.option("maxScale")), this.option("minScale"));
      const o2 = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
      e2 === null && (e2 = this.content.width * o2 * 0.5), s2 === null && (s2 = this.content.height * o2 * 0.5);
      const { deltaX: n2, deltaY: a2 } = this.getZoomDelta(t2, e2, s2);
      e2 = this.content.x - n2, s2 = this.content.y - a2, this.panTo({ x: e2, y: s2, scale: t2, friction: this.option("zoomFriction") });
    }
    getZoomDelta(t2, e2 = 0, i2 = 0) {
      const s2 = this.content.fitWidth * this.content.scale, o2 = this.content.fitHeight * this.content.scale, n2 = e2 > 0 && s2 ? e2 / s2 : 0, a2 = i2 > 0 && o2 ? i2 / o2 : 0;
      return { deltaX: (this.content.fitWidth * t2 - s2) * n2, deltaY: (this.content.fitHeight * t2 - o2) * a2 };
    }
    panTo({ x: t2 = this.content.x, y: e2 = this.content.y, scale: i2, friction: s2 = this.option("friction"), ignoreBounds: o2 = false } = {}) {
      if (i2 = i2 || this.content.scale || 1, !o2) {
        const { boundX: s3, boundY: o3 } = this.getBounds(i2);
        s3 && (t2 = Math.max(Math.min(t2, s3.to), s3.from)), o3 && (e2 = Math.max(Math.min(e2, o3.to), o3.from));
      }
      this.friction = s2, this.transform = { ...this.transform, x: t2, y: e2, scale: i2 }, s2 ? (this.state = "panning", this.velocity = { x: (1 / this.friction - 1) * (t2 - this.content.x), y: (1 / this.friction - 1) * (e2 - this.content.y), scale: (1 / this.friction - 1) * (i2 - this.content.scale) }, this.startAnimation()) : this.endAnimation();
    }
    startAnimation() {
      this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(() => this.animate());
    }
    animate() {
      if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating())
        this.setTransform();
      else if (this.state !== "pointerdown")
        return void this.endAnimation();
      this.rAF = requestAnimationFrame(() => this.animate());
    }
    getBounds(t2) {
      let e2 = this.boundX, s2 = this.boundY;
      if (e2 !== void 0 && s2 !== void 0)
        return { boundX: e2, boundY: s2 };
      e2 = { from: 0, to: 0 }, s2 = { from: 0, to: 0 }, t2 = t2 || this.transform.scale;
      const o2 = this.content.fitWidth * t2, n2 = this.content.fitHeight * t2, a2 = this.viewport.width, r2 = this.viewport.height;
      if (o2 < a2) {
        const t3 = i(0.5 * (a2 - o2));
        e2.from = t3, e2.to = t3;
      } else
        e2.from = i(a2 - o2);
      if (n2 < r2) {
        const t3 = 0.5 * (r2 - n2);
        s2.from = t3, s2.to = t3;
      } else
        s2.from = i(r2 - n2);
      return { boundX: e2, boundY: s2 };
    }
    setEdgeForce() {
      if (this.state !== "decel")
        return;
      const t2 = this.option("bounceForce"), { boundX: e2, boundY: i2 } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
      let s2, o2, n2, a2;
      if (e2 && (s2 = this.content.x < e2.from, o2 = this.content.x > e2.to), i2 && (n2 = this.content.y < i2.from, a2 = this.content.y > i2.to), s2 || o2) {
        let i3 = ((s2 ? e2.from : e2.to) - this.content.x) * t2;
        const o3 = this.content.x + (this.velocity.x + i3) / this.friction;
        o3 >= e2.from && o3 <= e2.to && (i3 += this.velocity.x), this.velocity.x = i3, this.recalculateTransform();
      }
      if (n2 || a2) {
        let e3 = ((n2 ? i2.from : i2.to) - this.content.y) * t2;
        const s3 = this.content.y + (e3 + this.velocity.y) / this.friction;
        s3 >= i2.from && s3 <= i2.to && (e3 += this.velocity.y), this.velocity.y = e3, this.recalculateTransform();
      }
    }
    setDragResistance() {
      if (this.state !== "pointerdown")
        return;
      const { boundX: t2, boundY: e2 } = this.getBounds(this.dragPosition.scale);
      let i2, s2, o2, n2;
      if (t2 && (i2 = this.dragPosition.x < t2.from, s2 = this.dragPosition.x > t2.to), e2 && (o2 = this.dragPosition.y < e2.from, n2 = this.dragPosition.y > e2.to), (i2 || s2) && (!i2 || !s2)) {
        const e3 = i2 ? t2.from : t2.to, s3 = e3 - this.dragPosition.x;
        this.dragPosition.x = e3 - 0.3 * s3;
      }
      if ((o2 || n2) && (!o2 || !n2)) {
        const t3 = o2 ? e2.from : e2.to, i3 = t3 - this.dragPosition.y;
        this.dragPosition.y = t3 - 0.3 * i3;
      }
    }
    setDragForce() {
      this.state === "pointerdown" && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
    }
    recalculateTransform() {
      this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
    }
    isAnimating() {
      return !(!this.friction || !(Math.abs(this.velocity.x) > 0.05 || Math.abs(this.velocity.y) > 0.05 || Math.abs(this.velocity.scale) > 0.05));
    }
    setTransform(t2) {
      let e2, s2, o2;
      if (t2 ? (e2 = i(this.transform.x), s2 = i(this.transform.y), o2 = this.transform.scale, this.content = { ...this.content, x: e2, y: s2, scale: o2 }) : (e2 = i(this.content.x), s2 = i(this.content.y), o2 = this.content.scale / (this.content.width / this.content.fitWidth), this.content = { ...this.content, x: e2, y: s2 }), this.trigger("beforeTransform"), e2 = i(this.content.x), s2 = i(this.content.y), t2 && this.option("zoom")) {
        let t3, n2;
        t3 = i(this.content.fitWidth * o2), n2 = i(this.content.fitHeight * o2), this.content.width = t3, this.content.height = n2, this.transform = { ...this.transform, width: t3, height: n2, scale: o2 }, Object.assign(this.$content.style, { width: `${t3}px`, height: `${n2}px`, maxWidth: "none", maxHeight: "none", transform: `translate3d(${e2}px, ${s2}px, 0) scale(1)` });
      } else
        this.$content.style.transform = `translate3d(${e2}px, ${s2}px, 0) scale(${o2})`;
      this.trigger("afterTransform");
    }
    endAnimation(t2) {
      cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = { x: 0, y: 0, scale: 0 }, this.setTransform(true), this.state = "ready", this.handleCursor(), t2 !== true && this.trigger("endAnimation");
    }
    handleCursor() {
      const t2 = this.option("draggableClass");
      t2 && this.option("touch") && (this.option("panOnlyZoomed") == 1 && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t2) : this.$container.classList.add(t2));
    }
    detachEvents() {
      this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, { passive: false }), this.$container.removeEventListener("click", this.onClick, { passive: false }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    }
    destroy() {
      this.state !== "destroy" && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
    }
  };
  d.version = "4.0.26", d.Plugins = {};
  var u = (t2, e2) => {
    let i2 = 0;
    return function(...s2) {
      const o2 = new Date().getTime();
      if (!(o2 - i2 < e2))
        return i2 = o2, t2(...s2);
    };
  };
  var f = class {
    constructor(t2) {
      this.$container = null, this.$prev = null, this.$next = null, this.carousel = t2, this.onRefresh = this.onRefresh.bind(this);
    }
    option(t2) {
      return this.carousel.option(`Navigation.${t2}`);
    }
    createButton(t2) {
      const e2 = document.createElement("button");
      e2.setAttribute("title", this.carousel.localize(`{{${t2.toUpperCase()}}}`));
      const i2 = this.option("classNames.button") + " " + this.option(`classNames.${t2}`);
      return e2.classList.add(...i2.split(" ")), e2.setAttribute("tabindex", "0"), e2.innerHTML = this.carousel.localize(this.option(`${t2}Tpl`)), e2.addEventListener("click", (e3) => {
        e3.preventDefault(), e3.stopPropagation(), this.carousel["slide" + (t2 === "next" ? "Next" : "Prev")]();
      }), e2;
    }
    build() {
      this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
    }
    onRefresh() {
      const t2 = this.carousel.pages.length;
      t2 <= 1 || t2 > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t2 - 1 && this.$next.setAttribute("disabled", "")));
    }
    cleanup() {
      this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
    }
    attach() {
      this.carousel.on("refresh change", this.onRefresh);
    }
    detach() {
      this.carousel.off("refresh change", this.onRefresh), this.cleanup();
    }
  };
  f.defaults = { prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>', nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', classNames: { main: "carousel__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } };
  var g = class {
    constructor(t2) {
      this.carousel = t2, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
    }
    addAsTargetFor(t2) {
      this.target = this.carousel, this.nav = t2, this.attachEvents();
    }
    addAsNavFor(t2) {
      this.target = t2, this.nav = this.carousel, this.attachEvents();
    }
    attachEvents() {
      this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
    onNavReady() {
      this.onTargetChange(true);
    }
    onNavClick(t2, e2, i2) {
      const s2 = i2.target.closest(".carousel__slide");
      if (!s2)
        return;
      i2.stopPropagation();
      const o2 = parseInt(s2.dataset.index, 10), n2 = this.target.findPageForSlide(o2);
      this.target.page !== n2 && this.target.slideTo(n2, { friction: this.friction }), this.markSelectedSlide(o2);
    }
    onNavCreateSlide(t2, e2) {
      e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
    }
    onTargetChange() {
      const t2 = this.target.pages[this.target.page].indexes[0], e2 = this.nav.findPageForSlide(t2);
      this.nav.slideTo(e2), this.markSelectedSlide(t2);
    }
    markSelectedSlide(t2) {
      this.selectedIndex = t2, [...this.nav.slides].filter((t3) => t3.$el && t3.$el.classList.remove("is-nav-selected"));
      const e2 = this.nav.slides[t2];
      e2 && e2.$el && e2.$el.classList.add("is-nav-selected");
    }
    attach(t2) {
      const e2 = t2.options.Sync;
      (e2.target || e2.nav) && (e2.target ? this.addAsNavFor(e2.target) : e2.nav && this.addAsTargetFor(e2.nav), this.friction = e2.friction);
    }
    detach() {
      this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
    }
  };
  g.defaults = { friction: 0.92 };
  var p = { Navigation: f, Dots: class {
    constructor(t2) {
      this.carousel = t2, this.$list = null, this.events = { change: this.onChange.bind(this), refresh: this.onRefresh.bind(this) };
    }
    buildList() {
      if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))
        return;
      const t2 = document.createElement("ol");
      return t2.classList.add("carousel__dots"), t2.addEventListener("click", (t3) => {
        if (!("page" in t3.target.dataset))
          return;
        t3.preventDefault(), t3.stopPropagation();
        const e2 = parseInt(t3.target.dataset.page, 10), i2 = this.carousel;
        e2 !== i2.page && (i2.pages.length < 3 && i2.option("infinite") ? i2[e2 == 0 ? "slidePrev" : "slideNext"]() : i2.slideTo(e2));
      }), this.$list = t2, this.carousel.$container.appendChild(t2), this.carousel.$container.classList.add("has-dots"), t2;
    }
    removeList() {
      this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
    }
    rebuildDots() {
      let t2 = this.$list;
      const e2 = !!t2, i2 = this.carousel.pages.length;
      if (i2 < 2)
        return void (e2 && this.removeList());
      e2 || (t2 = this.buildList());
      const s2 = this.$list.children.length;
      if (s2 > i2)
        for (let t3 = i2; t3 < s2; t3++)
          this.$list.removeChild(this.$list.lastChild);
      else {
        for (let t3 = s2; t3 < i2; t3++) {
          const e3 = document.createElement("li");
          e3.classList.add("carousel__dot"), e3.dataset.page = t3, e3.setAttribute("role", "button"), e3.setAttribute("tabindex", "0"), e3.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", t3 + 1]])), e3.addEventListener("keydown", (t4) => {
            const i3 = t4.code;
            let s3;
            i3 === "Enter" || i3 === "NumpadEnter" ? s3 = e3 : i3 === "ArrowRight" ? s3 = e3.nextSibling : i3 === "ArrowLeft" && (s3 = e3.previousSibling), s3 && s3.click();
          }), this.$list.appendChild(e3);
        }
        this.setActiveDot();
      }
    }
    setActiveDot() {
      if (!this.$list)
        return;
      this.$list.childNodes.forEach((t3) => {
        t3.classList.remove("is-selected");
      });
      const t2 = this.$list.childNodes[this.carousel.page];
      t2 && t2.classList.add("is-selected");
    }
    onChange() {
      this.setActiveDot();
    }
    onRefresh() {
      this.rebuildDots();
    }
    attach() {
      this.carousel.on(this.events);
    }
    detach() {
      this.removeList(), this.carousel.off(this.events), this.carousel = null;
    }
  }, Sync: g };
  var m = { slides: [], preload: 0, slidesPerPage: "auto", initialPage: null, initialSlide: null, friction: 0.92, center: true, infinite: true, fill: true, dragFree: false, prefix: "", classNames: { viewport: "carousel__viewport", track: "carousel__track", slide: "carousel__slide", slideSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
  var y = class extends l {
    constructor(t2, i2 = {}) {
      if (super(i2 = e(true, {}, m, i2)), this.state = "init", this.$container = t2, !(this.$container instanceof HTMLElement))
        throw new Error("No root element provided");
      this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init(), t2.__Carousel = this;
    }
    init() {
      this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
    }
    initLayout() {
      const t2 = this.option("prefix"), e2 = this.option("classNames");
      this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t2}${e2.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(t2 + e2.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${t2}${e2.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(t2 + e2.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
    }
    initSlides() {
      this.slides = [];
      this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((t2) => {
        const e2 = { $el: t2, isDom: true };
        this.slides.push(e2), this.trigger("createSlide", e2, this.slides.length);
      }), Array.isArray(this.options.slides) && (this.slides = e(true, [...this.slides], this.options.slides));
    }
    updateMetrics() {
      let t2, e2 = 0, s2 = [];
      this.slides.forEach((i2, o3) => {
        const n3 = i2.$el, a3 = i2.isDom || !t2 ? this.getSlideMetrics(n3) : t2;
        i2.index = o3, i2.width = a3, i2.left = e2, t2 = a3, e2 += a3, s2.push(o3);
      });
      let o2 = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)), n2 = getComputedStyle(this.$track);
      o2 -= parseFloat(n2.paddingLeft) + parseFloat(n2.paddingRight), this.contentWidth = e2, this.viewportWidth = o2;
      const a2 = [], r2 = this.option("slidesPerPage");
      if (Number.isInteger(r2) && e2 > o2)
        for (let t3 = 0; t3 < this.slides.length; t3 += r2)
          a2.push({ indexes: s2.slice(t3, t3 + r2), slides: this.slides.slice(t3, t3 + r2) });
      else {
        let t3 = 0, e3 = 0;
        for (let i2 = 0; i2 < this.slides.length; i2 += 1) {
          let s3 = this.slides[i2];
          (!a2.length || e3 + s3.width > o2) && (a2.push({ indexes: [], slides: [] }), t3 = a2.length - 1, e3 = 0), e3 += s3.width, a2[t3].indexes.push(i2), a2[t3].slides.push(s3);
        }
      }
      const h2 = this.option("center"), l2 = this.option("fill");
      a2.forEach((t3, i2) => {
        t3.index = i2, t3.width = t3.slides.reduce((t4, e3) => t4 + e3.width, 0), t3.left = t3.slides[0].left, h2 && (t3.left += 0.5 * (o2 - t3.width) * -1), l2 && !this.option("infiniteX", this.option("infinite")) && e2 > o2 && (t3.left = Math.max(t3.left, 0), t3.left = Math.min(t3.left, e2 - o2));
      });
      const c2 = [];
      let d2;
      a2.forEach((t3) => {
        const e3 = { ...t3 };
        d2 && e3.left === d2.left ? (d2.width += e3.width, d2.slides = [...d2.slides, ...e3.slides], d2.indexes = [...d2.indexes, ...e3.indexes]) : (e3.index = c2.length, d2 = e3, c2.push(e3));
      }), this.pages = c2;
      let u2 = this.page;
      if (u2 === null) {
        const t3 = this.option("initialSlide");
        u2 = t3 !== null ? this.findPageForSlide(t3) : parseInt(this.option("initialPage", 0), 10) || 0, c2[u2] || (u2 = c2.length && u2 > c2.length ? c2[c2.length - 1].index : 0), this.page = u2, this.pageIndex = u2;
      }
      this.updatePanzoom(), this.trigger("refresh");
    }
    getSlideMetrics(t2) {
      if (!t2) {
        const e3 = this.slides[0];
        (t2 = document.createElement("div")).dataset.isTestEl = 1, t2.style.visibility = "hidden", t2.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e3.customClass && t2.classList.add(...e3.customClass.split(" ")), this.$track.prepend(t2);
      }
      let e2 = Math.max(t2.offsetWidth, i(t2.getBoundingClientRect().width));
      const s2 = t2.currentStyle || window.getComputedStyle(t2);
      return e2 = e2 + (parseFloat(s2.marginLeft) || 0) + (parseFloat(s2.marginRight) || 0), t2.dataset.isTestEl && t2.remove(), e2;
    }
    findPageForSlide(t2) {
      t2 = parseInt(t2, 10) || 0;
      const e2 = this.pages.find((e3) => e3.indexes.indexOf(t2) > -1);
      return e2 ? e2.index : null;
    }
    slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
    slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
    slideTo(t2, e2 = {}) {
      const { x: i2 = -1 * this.setPage(t2, true), y: s2 = 0, friction: o2 = this.option("friction") } = e2;
      this.Panzoom.content.x === i2 && !this.Panzoom.velocity.x && o2 || (this.Panzoom.panTo({ x: i2, y: s2, friction: o2, ignoreBounds: true }), this.state === "ready" && this.Panzoom.state === "ready" && this.trigger("settle"));
    }
    initPanzoom() {
      this.Panzoom && this.Panzoom.destroy();
      const t2 = e(true, {}, { content: this.$track, wrapInner: false, resizeParent: false, zoom: false, click: false, lockAxis: "x", x: this.pages.length ? -1 * this.pages[this.page].left : 0, centerOnStart: false, textSelection: () => this.option("textSelection", false), panOnlyZoomed: function() {
        return this.content.width <= this.viewport.width;
      } }, this.option("Panzoom"));
      this.Panzoom = new d(this.$container, t2), this.Panzoom.on({ "*": (t3, ...e2) => this.trigger(`Panzoom.${t3}`, ...e2), afterUpdate: () => {
        this.updatePage();
      }, beforeTransform: this.onBeforeTransform.bind(this), touchEnd: this.onTouchEnd.bind(this), endAnimation: () => {
        this.trigger("settle");
      } }), this.updateMetrics(), this.manageSlideVisiblity();
    }
    updatePanzoom() {
      this.Panzoom && (this.Panzoom.content = { ...this.Panzoom.content, fitWidth: this.contentWidth, origWidth: this.contentWidth, width: this.contentWidth }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = { from: -1 * this.pages[this.pages.length - 1].left, to: -1 * this.pages[0].left }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = { from: 0, to: 0 }, this.Panzoom.handleCursor());
    }
    manageSlideVisiblity() {
      const t2 = this.contentWidth, e2 = this.viewportWidth;
      let i2 = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
      const s2 = this.option("preload"), o2 = this.option("infiniteX", this.option("infinite")), n2 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), a2 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
      this.slides.forEach((r3) => {
        let h3, l2, c2 = 0;
        h3 = i2 - n2, l2 = i2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2), l2 += s2 * (e2 + n2 + a2);
        const d2 = r3.left + r3.width > h3 && r3.left < l2;
        h3 = i2 + t2 - n2, l2 = i2 + t2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2);
        const u2 = o2 && r3.left + r3.width > h3 && r3.left < l2;
        h3 = i2 - t2 - n2, l2 = i2 - t2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2);
        const f2 = o2 && r3.left + r3.width > h3 && r3.left < l2;
        u2 || d2 || f2 ? (this.createSlideEl(r3), d2 && (c2 = 0), u2 && (c2 = -1), f2 && (c2 = 1), r3.left + r3.width > i2 && r3.left <= i2 + e2 + a2 && (c2 = 0)) : this.removeSlideEl(r3), r3.hasDiff = c2;
      });
      let r2 = 0, h2 = 0;
      this.slides.forEach((e3, i3) => {
        let s3 = 0;
        e3.$el ? (i3 !== r2 || e3.hasDiff ? s3 = h2 + e3.hasDiff * t2 : h2 = 0, e3.$el.style.left = Math.abs(s3) > 0.1 ? `${h2 + e3.hasDiff * t2}px` : "", r2++) : h2 += e3.width;
      }), this.markSelectedSlides();
    }
    createSlideEl(t2) {
      if (!t2)
        return;
      if (t2.$el) {
        let e3 = t2.$el.dataset.index;
        if (!e3 || parseInt(e3, 10) !== t2.index) {
          let e4;
          t2.$el.dataset.index = t2.index, t2.$el.querySelectorAll("[data-lazy-srcset]").forEach((t3) => {
            t3.srcset = t3.dataset.lazySrcset;
          }), t2.$el.querySelectorAll("[data-lazy-src]").forEach((t3) => {
            let e5 = t3.dataset.lazySrc;
            t3 instanceof HTMLImageElement ? t3.src = e5 : t3.style.backgroundImage = `url('${e5}')`;
          }), (e4 = t2.$el.dataset.lazySrc) && (t2.$el.style.backgroundImage = `url('${e4}')`), t2.state = "ready";
        }
        return;
      }
      const e2 = document.createElement("div");
      e2.dataset.index = t2.index, e2.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t2.customClass && e2.classList.add(...t2.customClass.split(" ")), t2.html && (e2.innerHTML = t2.html);
      const i2 = [];
      this.slides.forEach((t3, e3) => {
        t3.$el && i2.push(e3);
      });
      const s2 = t2.index;
      let o2 = null;
      if (i2.length) {
        let t3 = i2.reduce((t4, e3) => Math.abs(e3 - s2) < Math.abs(t4 - s2) ? e3 : t4);
        o2 = this.slides[t3];
      }
      return this.$track.insertBefore(e2, o2 && o2.$el ? o2.index < t2.index ? o2.$el.nextSibling : o2.$el : null), t2.$el = e2, this.trigger("createSlide", t2, s2), t2;
    }
    removeSlideEl(t2) {
      t2.$el && !t2.isDom && (this.trigger("removeSlide", t2), t2.$el.remove(), t2.$el = null);
    }
    markSelectedSlides() {
      const t2 = this.option("classNames.slideSelected"), e2 = "aria-hidden";
      this.slides.forEach((i2, s2) => {
        const o2 = i2.$el;
        if (!o2)
          return;
        const n2 = this.pages[this.page];
        n2 && n2.indexes && n2.indexes.indexOf(s2) > -1 ? (t2 && !o2.classList.contains(t2) && (o2.classList.add(t2), this.trigger("selectSlide", i2)), o2.removeAttribute(e2)) : (t2 && o2.classList.contains(t2) && (o2.classList.remove(t2), this.trigger("unselectSlide", i2)), o2.setAttribute(e2, true));
      });
    }
    updatePage() {
      this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
    }
    onBeforeTransform() {
      this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
    }
    manageInfiniteTrack() {
      const t2 = this.contentWidth, e2 = this.viewportWidth;
      if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t2 < e2)
        return;
      const i2 = this.Panzoom;
      let s2 = false;
      return i2.content.x < -1 * (t2 - e2) && (i2.content.x += t2, this.pageIndex = this.pageIndex - this.pages.length, s2 = true), i2.content.x > e2 && (i2.content.x -= t2, this.pageIndex = this.pageIndex + this.pages.length, s2 = true), s2 && i2.state === "pointerdown" && i2.resetDragPosition(), s2;
    }
    onTouchEnd(t2, e2) {
      const i2 = this.option("dragFree");
      if (!i2 && this.pages.length > 1 && t2.dragOffset.time < 350 && Math.abs(t2.dragOffset.y) < 1 && Math.abs(t2.dragOffset.x) > 5)
        this[t2.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
      else if (i2) {
        const [, e3] = this.getPageFromPosition(-1 * t2.transform.x);
        this.setPage(e3);
      } else
        this.slideToClosest();
    }
    slideToClosest(t2 = {}) {
      let [, e2] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
      this.slideTo(e2, t2);
    }
    getPageFromPosition(t2) {
      const e2 = this.pages.length;
      this.option("center") && (t2 += 0.5 * this.viewportWidth);
      const i2 = Math.floor(t2 / this.contentWidth);
      t2 -= i2 * this.contentWidth;
      let s2 = this.slides.find((e3) => e3.left <= t2 && e3.left + e3.width > t2);
      if (s2) {
        let t3 = this.findPageForSlide(s2.index);
        return [t3, t3 + i2 * e2];
      }
      return [0, 0];
    }
    setPage(t2, e2) {
      let i2 = 0, s2 = parseInt(t2, 10) || 0;
      const o2 = this.page, n2 = this.pageIndex, a2 = this.pages.length, r2 = this.contentWidth, h2 = this.viewportWidth;
      if (t2 = (s2 % a2 + a2) % a2, this.option("infiniteX", this.option("infinite")) && r2 > h2) {
        const o3 = Math.floor(s2 / a2) || 0, n3 = r2;
        if (i2 = this.pages[t2].left + o3 * n3, e2 === true && a2 > 2) {
          let t3 = -1 * this.Panzoom.content.x;
          const e3 = i2 - n3, o4 = i2 + n3, r3 = Math.abs(t3 - i2), h3 = Math.abs(t3 - e3), l2 = Math.abs(t3 - o4);
          l2 < r3 && l2 <= h3 ? (i2 = o4, s2 += a2) : h3 < r3 && h3 < l2 && (i2 = e3, s2 -= a2);
        }
      } else
        t2 = s2 = Math.max(0, Math.min(s2, a2 - 1)), i2 = this.pages.length ? this.pages[t2].left : 0;
      return this.page = t2, this.pageIndex = s2, o2 !== null && t2 !== o2 && (this.prevPage = o2, this.prevPageIndex = n2, this.trigger("change", t2, o2)), i2;
    }
    destroy() {
      this.state = "destroy", this.slides.forEach((t2) => {
        this.removeSlideEl(t2);
      }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
    }
  };
  y.version = "4.0.26", y.Plugins = p;
  var v = !(typeof window == "undefined" || !window.document || !window.document.createElement);
  var b = null;
  var x = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'];
  var w = (t2) => {
    if (t2 && v) {
      b === null && document.createElement("div").focus({ get preventScroll() {
        return b = true, false;
      } });
      try {
        if (t2.setActive)
          t2.setActive();
        else if (b)
          t2.focus({ preventScroll: true });
        else {
          const e2 = window.pageXOffset || document.body.scrollTop, i2 = window.pageYOffset || document.body.scrollLeft;
          t2.focus(), document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
        }
      } catch (t3) {
      }
    }
  };
  var $2 = class {
    constructor(t2) {
      this.fancybox = t2, this.$container = null, this.state = "init";
      for (const t3 of ["onPrepare", "onClosing", "onKeydown"])
        this[t3] = this[t3].bind(this);
      this.events = { prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown };
    }
    onPrepare() {
      this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : this.fancybox.option("Thumbs.autoStart") === true && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
    }
    onClosing() {
      this.Carousel && this.Carousel.Panzoom.detachEvents();
    }
    onKeydown(t2, e2) {
      e2 === t2.option("Thumbs.key") && this.toggle();
    }
    build() {
      if (this.$container)
        return;
      const t2 = document.createElement("div");
      t2.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t2, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t2, e(true, { Dots: false, Navigation: false, Sync: { friction: 0 }, infinite: false, center: true, fill: true, dragFree: true, slidesPerPage: 1, preload: 1 }, this.fancybox.option("Thumbs.Carousel"), { Sync: { target: this.fancybox.Carousel }, slides: this.getSlides() })), this.Carousel.Panzoom.on("wheel", (t3, e2) => {
        e2.preventDefault(), this.fancybox[e2.deltaY < 0 ? "prev" : "next"]();
      }), this.$container = t2, this.state = "visible";
    }
    getSlides() {
      const t2 = [];
      for (const e2 of this.fancybox.items) {
        const i2 = e2.thumb;
        i2 && t2.push({ html: `<div class="fancybox__thumb" style="background-image:url('${i2}')"></div>`, customClass: `has-thumb has-${e2.type || "image"}` });
      }
      return t2;
    }
    toggle() {
      this.state === "visible" ? this.hide() : this.state === "hidden" ? this.show() : this.build();
    }
    show() {
      this.state === "hidden" && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
    }
    hide() {
      this.state === "visible" && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
    }
    cleanup() {
      this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  };
  $2.defaults = { minSlideCount: 2, minScreenHeight: 500, autoStart: true, key: "t", Carousel: {} };
  var C = (t2, e2) => {
    const i2 = new URL(t2), s2 = new URLSearchParams(i2.search);
    let o2 = new URLSearchParams();
    for (const [t3, i3] of [...s2, ...Object.entries(e2)])
      t3 === "t" ? o2.set("start", parseInt(i3)) : o2.set(t3, i3);
    o2 = o2.toString();
    let n2 = t2.match(/#t=((.*)?\d+s)/);
    return n2 && (o2 += `#t=${n2[1]}`), o2;
  };
  var S = { video: { autoplay: true, ratio: 16 / 9 }, youtube: { autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, vimeo: { hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, html5video: { tpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, format: "" } };
  var E = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"])
        this[t3] = this[t3].bind(this);
      this.events = { init: this.onInit, ready: this.onReady, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide, "Carousel.selectSlide": this.onSelectSlide, "Carousel.unselectSlide": this.onUnselectSlide, "Carousel.refresh": this.onRefresh };
    }
    onInit() {
      for (const t2 of this.fancybox.items)
        this.processType(t2);
    }
    processType(t2) {
      if (t2.html)
        return t2.src = t2.html, t2.type = "html", void delete t2.html;
      const i2 = t2.src || "";
      let s2 = t2.type || this.fancybox.options.type, o2 = null;
      if (!i2 || typeof i2 == "string") {
        if (o2 = i2.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          const e2 = C(i2, this.fancybox.option("Html.youtube")), n2 = encodeURIComponent(o2[1]);
          t2.videoId = n2, t2.src = `https://www.youtube-nocookie.com/embed/${n2}?${e2}`, t2.thumb = t2.thumb || `https://i.ytimg.com/vi/${n2}/mqdefault.jpg`, t2.vendor = "youtube", s2 = "video";
        } else if (o2 = i2.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
          const e2 = C(i2, this.fancybox.option("Html.vimeo")), n2 = encodeURIComponent(o2[1]);
          t2.videoId = n2, t2.src = `https://player.vimeo.com/video/${n2}?${e2}`, t2.vendor = "vimeo", s2 = "video";
        } else
          (o2 = i2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t2.src = `//maps.google.${o2[1]}/?ll=${(o2[2] ? o2[2] + "&z=" + Math.floor(o2[3]) + (o2[4] ? o2[4].replace(/^\//, "&") : "") : o2[4] + "").replace(/\?/, "&")}&output=${o2[4] && o2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s2 = "map") : (o2 = i2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t2.src = `//maps.google.${o2[1]}/maps?q=${o2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s2 = "map");
        s2 || (i2.charAt(0) === "#" ? s2 = "inline" : (o2 = i2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s2 = "html5video", t2.format = t2.format || "video/" + (o2[1] === "ogv" ? "ogg" : o2[1])) : i2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s2 = "image" : i2.match(/\.(pdf)((\?|#).*)?$/i) && (s2 = "pdf")), t2.type = s2 || this.fancybox.option("defaultType", "image"), s2 !== "html5video" && s2 !== "video" || (t2.video = e({}, this.fancybox.option("Html.video"), t2.video), t2._width && t2._height ? t2.ratio = parseFloat(t2._width) / parseFloat(t2._height) : t2.ratio = t2.ratio || t2.video.ratio || S.video.ratio);
      }
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t2) => {
        t2.$el && (this.setContent(t2), t2.index === this.fancybox.getSlide().index && this.playVideo(t2));
      });
    }
    onCreateSlide(t2, e2, i2) {
      this.fancybox.state === "ready" && this.setContent(i2);
    }
    loadInlineContent(t2) {
      let e2;
      if (t2.src instanceof HTMLElement)
        e2 = t2.src;
      else if (typeof t2.src == "string") {
        const i2 = t2.src.split("#", 2), s2 = i2.length === 2 && i2[0] === "" ? i2[1] : i2[0];
        e2 = document.getElementById(s2);
      }
      if (e2) {
        if (t2.type === "clone" || e2.$placeHolder) {
          e2 = e2.cloneNode(true);
          let i2 = e2.getAttribute("id");
          i2 = i2 ? `${i2}--clone` : `clone-${this.fancybox.id}-${t2.index}`, e2.setAttribute("id", i2);
        } else {
          const t3 = document.createElement("div");
          t3.classList.add("fancybox-placeholder"), e2.parentNode.insertBefore(t3, e2), e2.$placeHolder = t3;
        }
        this.fancybox.setContent(t2, e2);
      } else
        this.fancybox.setError(t2, "{{ELEMENT_NOT_FOUND}}");
    }
    loadAjaxContent(t2) {
      const e2 = this.fancybox, i2 = new XMLHttpRequest();
      e2.showLoading(t2), i2.onreadystatechange = function() {
        i2.readyState === XMLHttpRequest.DONE && e2.state === "ready" && (e2.hideLoading(t2), i2.status === 200 ? e2.setContent(t2, i2.responseText) : e2.setError(t2, i2.status === 404 ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
      }, i2.open("GET", t2.src), i2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i2.send(t2.ajax || null), t2.xhr = i2;
    }
    loadIframeContent(t2) {
      const e2 = this.fancybox, i2 = document.createElement("iframe");
      if (i2.className = "fancybox__iframe", i2.setAttribute("id", `fancybox__iframe_${e2.id}_${t2.index}`), i2.setAttribute("allow", "autoplay; fullscreen"), i2.setAttribute("scrolling", "auto"), t2.$iframe = i2, t2.type !== "iframe" || t2.preload === false)
        return i2.setAttribute("src", t2.src), this.fancybox.setContent(t2, i2), void this.resizeIframe(t2);
      e2.showLoading(t2);
      const s2 = document.createElement("div");
      s2.style.visibility = "hidden", this.fancybox.setContent(t2, s2), s2.appendChild(i2), i2.onerror = () => {
        e2.setError(t2, "{{IFRAME_ERROR}}");
      }, i2.onload = () => {
        e2.hideLoading(t2);
        let s3 = false;
        i2.isReady || (i2.isReady = true, s3 = true), i2.src.length && (i2.parentNode.style.visibility = "", this.resizeIframe(t2), s3 && e2.revealContent(t2));
      }, i2.setAttribute("src", t2.src);
    }
    setAspectRatio(t2) {
      const e2 = t2.$content, i2 = t2.ratio;
      if (!e2)
        return;
      let s2 = t2._width, o2 = t2._height;
      if (i2 || s2 && o2) {
        Object.assign(e2.style, { width: s2 && o2 ? "100%" : "", height: s2 && o2 ? "100%" : "", maxWidth: "", maxHeight: "" });
        let t3 = e2.offsetWidth, n2 = e2.offsetHeight;
        if (s2 = s2 || t3, o2 = o2 || n2, s2 > t3 || o2 > n2) {
          let e3 = Math.min(t3 / s2, n2 / o2);
          s2 *= e3, o2 *= e3;
        }
        Math.abs(s2 / o2 - i2) > 0.01 && (i2 < s2 / o2 ? s2 = o2 * i2 : o2 = s2 / i2), Object.assign(e2.style, { width: `${s2}px`, height: `${o2}px` });
      }
    }
    resizeIframe(t2) {
      const e2 = t2.$iframe;
      if (!e2)
        return;
      let i2 = t2._width || 0, s2 = t2._height || 0;
      i2 && s2 && (t2.autoSize = false);
      const o2 = e2.parentNode, n2 = o2 && o2.style;
      if (t2.preload !== false && t2.autoSize !== false && n2)
        try {
          const t3 = window.getComputedStyle(o2), a2 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight), r2 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), h2 = e2.contentWindow.document, l2 = h2.getElementsByTagName("html")[0], c2 = h2.body;
          n2.width = "", c2.style.overflow = "hidden", i2 = i2 || l2.scrollWidth + a2, n2.width = `${i2}px`, c2.style.overflow = "", n2.flex = "0 0 auto", n2.height = `${c2.scrollHeight}px`, s2 = l2.scrollHeight + r2;
        } catch (t3) {
        }
      if (i2 || s2) {
        const t3 = { flex: "0 1 auto" };
        i2 && (t3.width = `${i2}px`), s2 && (t3.height = `${s2}px`), Object.assign(n2, t3);
      }
    }
    onRefresh(t2, e2) {
      e2.slides.forEach((t3) => {
        t3.$el && (t3.$iframe && this.resizeIframe(t3), t3.ratio && this.setAspectRatio(t3));
      });
    }
    setContent(t2) {
      if (t2 && !t2.isDom) {
        switch (t2.type) {
          case "html":
            this.fancybox.setContent(t2, t2.src);
            break;
          case "html5video":
            this.fancybox.setContent(t2, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t2.src).replace("{{format}}", t2.format || t2.html5video && t2.html5video.format || "").replace("{{poster}}", t2.poster || t2.thumb || ""));
            break;
          case "inline":
          case "clone":
            this.loadInlineContent(t2);
            break;
          case "ajax":
            this.loadAjaxContent(t2);
            break;
          case "pdf":
          case "video":
          case "map":
            t2.preload = false;
          case "iframe":
            this.loadIframeContent(t2);
        }
        t2.ratio && this.setAspectRatio(t2);
      }
    }
    onSelectSlide(t2, e2, i2) {
      t2.state === "ready" && this.playVideo(i2);
    }
    playVideo(t2) {
      if (t2.type === "html5video" && t2.video.autoplay)
        try {
          const e3 = t2.$el.querySelector("video");
          if (e3) {
            const t3 = e3.play();
            t3 !== void 0 && t3.then(() => {
            }).catch((t4) => {
              e3.muted = true, e3.play();
            });
          }
        } catch (t3) {
        }
      if (t2.type !== "video" || !t2.$iframe || !t2.$iframe.contentWindow)
        return;
      const e2 = () => {
        if (t2.state === "done" && t2.$iframe && t2.$iframe.contentWindow) {
          let e3;
          if (t2.$iframe.isReady)
            return t2.video && t2.video.autoplay && (e3 = t2.vendor == "youtube" ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }), void (e3 && t2.$iframe.contentWindow.postMessage(JSON.stringify(e3), "*"));
          t2.vendor === "youtube" && (e3 = { event: "listening", id: t2.$iframe.getAttribute("id") }, t2.$iframe.contentWindow.postMessage(JSON.stringify(e3), "*"));
        }
        t2.poller = setTimeout(e2, 250);
      };
      e2();
    }
    onUnselectSlide(t2, e2, i2) {
      if (i2.type === "html5video") {
        try {
          i2.$el.querySelector("video").pause();
        } catch (t3) {
        }
        return;
      }
      let s2 = false;
      i2.vendor == "vimeo" ? s2 = { method: "pause", value: "true" } : i2.vendor === "youtube" && (s2 = { event: "command", func: "pauseVideo" }), s2 && i2.$iframe && i2.$iframe.contentWindow && i2.$iframe.contentWindow.postMessage(JSON.stringify(s2), "*"), clearTimeout(i2.poller);
    }
    onRemoveSlide(t2, e2, i2) {
      i2.xhr && (i2.xhr.abort(), i2.xhr = null), i2.$iframe && (i2.$iframe.onload = i2.$iframe.onerror = null, i2.$iframe.src = "//about:blank", i2.$iframe = null);
      const s2 = i2.$content;
      i2.type === "inline" && s2 && (s2.classList.remove("fancybox__content"), s2.style.display !== "none" && (s2.style.display = "none")), i2.$closeButton && (i2.$closeButton.remove(), i2.$closeButton = null);
      const o2 = s2 && s2.$placeHolder;
      o2 && (o2.parentNode.insertBefore(s2, o2), o2.remove(), s2.$placeHolder = null);
    }
    onMessage(t2) {
      try {
        let e2 = JSON.parse(t2.data);
        if (t2.origin === "https://player.vimeo.com") {
          if (e2.event === "ready")
            for (let e3 of document.getElementsByClassName("fancybox__iframe"))
              e3.contentWindow === t2.source && (e3.isReady = 1);
        } else
          t2.origin === "https://www.youtube-nocookie.com" && e2.event === "onReady" && (document.getElementById(e2.id).isReady = 1);
      } catch (t3) {
      }
    }
    attach() {
      this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, false);
    }
    detach() {
      this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, false);
    }
  };
  E.defaults = S;
  var P = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"])
        this[t3] = this[t3].bind(this);
      this.events = { ready: this.onReady, closing: this.onClosing, done: this.onDone, "Carousel.change": this.onPageChange, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide };
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t2) => {
        t2.$el && this.setContent(t2);
      });
    }
    onDone(t2, e2) {
      this.handleCursor(e2);
    }
    onClosing(t2) {
      clearTimeout(this.clickTimer), this.clickTimer = null, t2.Carousel.slides.forEach((t3) => {
        t3.$image && (t3.state = "destroy"), t3.Panzoom && t3.Panzoom.detachEvents();
      }), this.fancybox.state === "closing" && this.canZoom(t2.getSlide()) && this.zoomOut();
    }
    onCreateSlide(t2, e2, i2) {
      this.fancybox.state === "ready" && this.setContent(i2);
    }
    onRemoveSlide(t2, e2, i2) {
      i2.$image && (i2.$el.classList.remove(t2.option("Image.canZoomInClass")), i2.$image.remove(), i2.$image = null), i2.Panzoom && (i2.Panzoom.destroy(), i2.Panzoom = null), i2.$el && i2.$el.dataset && delete i2.$el.dataset.imageFit;
    }
    setContent(t2) {
      if (t2.isDom || t2.html || t2.type && t2.type !== "image")
        return;
      if (t2.$image)
        return;
      t2.type = "image", t2.state = "loading";
      const e2 = document.createElement("div");
      e2.style.visibility = "hidden";
      const i2 = document.createElement("img");
      i2.addEventListener("load", (e3) => {
        e3.stopImmediatePropagation(), this.onImageStatusChange(t2);
      }), i2.addEventListener("error", () => {
        this.onImageStatusChange(t2);
      }), i2.src = t2.src, i2.alt = "", i2.draggable = false, i2.classList.add("fancybox__image"), t2.srcset && i2.setAttribute("srcset", t2.srcset), t2.sizes && i2.setAttribute("sizes", t2.sizes), t2.$image = i2;
      const s2 = this.fancybox.option("Image.wrap");
      if (s2) {
        const o2 = document.createElement("div");
        o2.classList.add(typeof s2 == "string" ? s2 : "fancybox__image-wrap"), o2.appendChild(i2), e2.appendChild(o2), t2.$wrap = o2;
      } else
        e2.appendChild(i2);
      t2.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t2, e2), i2.complete || i2.error ? this.onImageStatusChange(t2) : this.fancybox.showLoading(t2);
    }
    onImageStatusChange(t2) {
      const e2 = t2.$image;
      e2 && t2.state === "loading" && (e2.complete && e2.naturalWidth && e2.naturalHeight ? (this.fancybox.hideLoading(t2), this.fancybox.option("Image.fit") === "contain" && this.initSlidePanzoom(t2), t2.$el.addEventListener("wheel", (e3) => this.onWheel(t2, e3), { passive: false }), t2.$content.addEventListener("click", (e3) => this.onClick(t2, e3), { passive: false }), this.revealContent(t2)) : this.fancybox.setError(t2, "{{IMAGE_ERROR}}"));
    }
    initSlidePanzoom(t2) {
      t2.Panzoom || (t2.Panzoom = new d(t2.$el, e(true, this.fancybox.option("Image.Panzoom", {}), { viewport: t2.$wrap, content: t2.$image, width: t2._width, height: t2._height, wrapInner: false, textSelection: true, touch: this.fancybox.option("Image.touch"), panOnlyZoomed: true, click: false, wheel: false })), t2.Panzoom.on("startAnimation", () => {
        this.fancybox.trigger("Image.startAnimation", t2);
      }), t2.Panzoom.on("endAnimation", () => {
        t2.state === "zoomIn" && this.fancybox.done(t2), this.handleCursor(t2), this.fancybox.trigger("Image.endAnimation", t2);
      }), t2.Panzoom.on("afterUpdate", () => {
        this.handleCursor(t2), this.fancybox.trigger("Image.afterUpdate", t2);
      }));
    }
    revealContent(t2) {
      this.fancybox.Carousel.prevPage === null && t2.index === this.fancybox.options.startIndex && this.canZoom(t2) ? this.zoomIn() : this.fancybox.revealContent(t2);
    }
    getZoomInfo(t2) {
      const e2 = t2.$thumb.getBoundingClientRect(), i2 = e2.width, s2 = e2.height, o2 = t2.$content.getBoundingClientRect(), n2 = o2.width, a2 = o2.height, r2 = o2.top - e2.top, h2 = o2.left - e2.left;
      let l2 = this.fancybox.option("Image.zoomOpacity");
      return l2 === "auto" && (l2 = Math.abs(i2 / s2 - n2 / a2) > 0.1), { top: r2, left: h2, scale: n2 && i2 ? i2 / n2 : 1, opacity: l2 };
    }
    canZoom(t2) {
      const e2 = this.fancybox, i2 = e2.$container;
      if (window.visualViewport && window.visualViewport.scale !== 1)
        return false;
      if (t2.Panzoom && !t2.Panzoom.content.width)
        return false;
      if (!e2.option("Image.zoom") || e2.option("Image.fit") !== "contain")
        return false;
      const s2 = t2.$thumb;
      if (!s2 || t2.state === "loading")
        return false;
      i2.classList.add("fancybox__no-click");
      const o2 = s2.getBoundingClientRect();
      let n2;
      if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        const t3 = document.elementFromPoint(o2.left + 1, o2.top + 1) === s2, e3 = document.elementFromPoint(o2.right - 1, o2.bottom - 1) === s2;
        n2 = t3 && e3;
      } else
        n2 = document.elementFromPoint(o2.left + 0.5 * o2.width, o2.top + 0.5 * o2.height) === s2;
      return i2.classList.remove("fancybox__no-click"), n2;
    }
    zoomIn() {
      const t2 = this.fancybox, e2 = t2.getSlide(), i2 = e2.Panzoom, { top: s2, left: o2, scale: n2, opacity: a2 } = this.getZoomInfo(e2);
      t2.trigger("reveal", e2), i2.panTo({ x: -1 * o2, y: -1 * s2, scale: n2, friction: 0, ignoreBounds: true }), e2.$content.style.visibility = "", e2.state = "zoomIn", a2 === true && i2.on("afterTransform", (t3) => {
        e2.state !== "zoomIn" && e2.state !== "zoomOut" || (t3.$content.style.opacity = Math.min(1, 1 - (1 - t3.content.scale) / (1 - n2)));
      }), i2.panTo({ x: 0, y: 0, scale: 1, friction: this.fancybox.option("Image.zoomFriction") });
    }
    zoomOut() {
      const t2 = this.fancybox, e2 = t2.getSlide(), i2 = e2.Panzoom;
      if (!i2)
        return;
      e2.state = "zoomOut", t2.state = "customClosing", e2.$caption && (e2.$caption.style.visibility = "hidden");
      let s2 = this.fancybox.option("Image.zoomFriction");
      const o2 = (t3) => {
        const { top: o3, left: n2, scale: a2, opacity: r2 } = this.getZoomInfo(e2);
        t3 || r2 || (s2 *= 0.82), i2.panTo({ x: -1 * n2, y: -1 * o3, scale: a2, friction: s2, ignoreBounds: true }), s2 *= 0.98;
      };
      window.addEventListener("scroll", o2), i2.once("endAnimation", () => {
        window.removeEventListener("scroll", o2), t2.destroy();
      }), o2();
    }
    handleCursor(t2) {
      if (t2.type !== "image" || !t2.$el)
        return;
      const e2 = t2.Panzoom, i2 = this.fancybox.option("Image.click", false, t2), s2 = this.fancybox.option("Image.touch"), o2 = t2.$el.classList, n2 = this.fancybox.option("Image.canZoomInClass"), a2 = this.fancybox.option("Image.canZoomOutClass");
      if (o2.remove(a2), o2.remove(n2), e2 && i2 === "toggleZoom") {
        e2 && e2.content.scale === 1 && e2.option("maxScale") - e2.content.scale > 0.01 ? o2.add(n2) : e2.content.scale > 1 && !s2 && o2.add(a2);
      } else
        i2 === "close" && o2.add(a2);
    }
    onWheel(t2, e2) {
      if (this.fancybox.state === "ready" && this.fancybox.trigger("Image.wheel", e2) !== false)
        switch (this.fancybox.option("Image.wheel")) {
          case "zoom":
            t2.state === "done" && t2.Panzoom && t2.Panzoom.zoomWithWheel(e2);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "slide":
            this.fancybox[e2.deltaY < 0 ? "prev" : "next"]();
        }
    }
    onClick(t2, e2) {
      if (this.fancybox.state !== "ready")
        return;
      const i2 = t2.Panzoom;
      if (i2 && (i2.dragPosition.midPoint || i2.dragOffset.x !== 0 || i2.dragOffset.y !== 0 || i2.dragOffset.scale !== 1))
        return;
      if (this.fancybox.Carousel.Panzoom.lockAxis)
        return false;
      const s2 = (i3) => {
        switch (i3) {
          case "toggleZoom":
            e2.stopPropagation(), t2.Panzoom && t2.Panzoom.zoomWithClick(e2);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "next":
            e2.stopPropagation(), this.fancybox.next();
        }
      }, o2 = this.fancybox.option("Image.click"), n2 = this.fancybox.option("Image.doubleClick");
      n2 ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s2(n2)) : this.clickTimer = setTimeout(() => {
        this.clickTimer = null, s2(o2);
      }, 300) : s2(o2);
    }
    onPageChange(t2, e2) {
      const i2 = t2.getSlide();
      e2.slides.forEach((t3) => {
        t3.Panzoom && t3.state === "done" && t3.index !== i2.index && t3.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
      });
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events);
    }
  };
  P.defaults = { canZoomInClass: "can-zoom_in", canZoomOutClass: "can-zoom_out", zoom: true, zoomOpacity: "auto", zoomFriction: 0.82, ignoreCoveredThumbnail: false, touch: true, click: "toggleZoom", doubleClick: null, wheel: "zoom", fit: "contain", wrap: false, Panzoom: { ratio: 1 } };
  var L = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onChange", "onClosing"])
        this[t3] = this[t3].bind(this);
      this.events = { initCarousel: this.onChange, "Carousel.change": this.onChange, closing: this.onClosing }, this.hasCreatedHistory = false, this.origHash = "", this.timer = null;
    }
    onChange(t2) {
      const e2 = t2.Carousel;
      this.timer && clearTimeout(this.timer);
      const i2 = e2.prevPage === null, s2 = t2.getSlide(), o2 = new URL(document.URL).hash;
      let n2 = false;
      if (s2.slug)
        n2 = "#" + s2.slug;
      else {
        const i3 = s2.$trigger && s2.$trigger.dataset, o3 = t2.option("slug") || i3 && i3.fancybox;
        o3 && o3.length && o3 !== "true" && (n2 = "#" + o3 + (e2.slides.length > 1 ? "-" + (s2.index + 1) : ""));
      }
      i2 && (this.origHash = o2 !== n2 ? o2 : ""), n2 && o2 !== n2 && (this.timer = setTimeout(() => {
        try {
          window.history[i2 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n2), i2 && (this.hasCreatedHistory = true);
        } catch (t3) {
        }
      }, 300));
    }
    onClosing() {
      if (this.timer && clearTimeout(this.timer), this.hasSilentClose !== true)
        try {
          return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
        } catch (t2) {
        }
    }
    attach(t2) {
      t2.on(this.events);
    }
    detach(t2) {
      t2.off(this.events);
    }
    static startFromUrl() {
      const t2 = L.Fancybox;
      if (!t2 || t2.getInstance() || t2.defaults.Hash === false)
        return;
      const { hash: e2, slug: i2, index: s2 } = L.getParsedURL();
      if (!i2)
        return;
      let o2 = document.querySelector(`[data-slug="${e2}"]`);
      if (o2 && o2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), t2.getInstance())
        return;
      const n2 = document.querySelectorAll(`[data-fancybox="${i2}"]`);
      n2.length && (s2 === null && n2.length === 1 ? o2 = n2[0] : s2 && (o2 = n2[s2 - 1]), o2 && o2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
    }
    static onHashChange() {
      const { slug: t2, index: e2 } = L.getParsedURL(), i2 = L.Fancybox, s2 = i2 && i2.getInstance();
      if (s2 && s2.plugins.Hash) {
        if (t2) {
          const i3 = s2.Carousel;
          if (t2 === s2.option("slug"))
            return i3.slideTo(e2 - 1);
          for (let e3 of i3.slides)
            if (e3.slug && e3.slug === t2)
              return i3.slideTo(e3.index);
          const o2 = s2.getSlide(), n2 = o2.$trigger && o2.$trigger.dataset;
          if (n2 && n2.fancybox === t2)
            return i3.slideTo(e2 - 1);
        }
        s2.plugins.Hash.hasSilentClose = true, s2.close();
      }
      L.startFromUrl();
    }
    static create(t2) {
      function e2() {
        window.addEventListener("hashchange", L.onHashChange, false), L.startFromUrl();
      }
      L.Fancybox = t2, v && window.requestAnimationFrame(() => {
        /complete|interactive|loaded/.test(document.readyState) ? e2() : document.addEventListener("DOMContentLoaded", e2);
      });
    }
    static destroy() {
      window.removeEventListener("hashchange", L.onHashChange, false);
    }
    static getParsedURL() {
      const t2 = window.location.hash.substr(1), e2 = t2.split("-"), i2 = e2.length > 1 && /^\+?\d+$/.test(e2[e2.length - 1]) && parseInt(e2.pop(-1), 10) || null;
      return { hash: t2, slug: e2.join("-"), index: i2 };
    }
  };
  var T = { pageXOffset: 0, pageYOffset: 0, element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement, activate(t2) {
    T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t2.requestFullscreen ? t2.requestFullscreen() : t2.mozRequestFullScreen ? t2.mozRequestFullScreen() : t2.webkitRequestFullscreen ? t2.webkitRequestFullscreen() : t2.msRequestFullscreen && t2.msRequestFullscreen();
  }, deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  } };
  var _ = class {
    constructor(t2) {
      this.fancybox = t2, this.active = false, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    isActive() {
      return this.active;
    }
    setTimer() {
      if (!this.active || this.timer)
        return;
      const t2 = this.fancybox.option("slideshow.delay", 3e3);
      this.timer = setTimeout(() => {
        this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, { friction: 0 });
      }, t2);
      let e2 = this.$progress;
      e2 || (e2 = document.createElement("div"), e2.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e2, this.fancybox.$carousel), this.$progress = e2, e2.offsetHeight), e2.style.transitionDuration = `${t2}ms`, e2.style.transform = "scaleX(1)";
    }
    clearTimer() {
      clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
    }
    activate() {
      this.active || (this.active = true, this.fancybox.$container.classList.add("has-slideshow"), this.fancybox.getSlide().state === "done" && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, false));
    }
    handleVisibilityChange() {
      this.deactivate();
    }
    deactivate() {
      this.active = false, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, false);
    }
    toggle() {
      this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
    }
  };
  var A = { display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"], autoEnable: true, items: { counter: { position: "left", type: "div", class: "fancybox__counter", html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>', attr: { tabindex: -1 } }, prev: { type: "button", class: "fancybox__button--prev", label: "PREV", html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>', attr: { "data-fancybox-prev": "" } }, next: { type: "button", class: "fancybox__button--next", label: "NEXT", html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>', attr: { "data-fancybox-next": "" } }, fullscreen: { type: "button", class: "fancybox__button--fullscreen", label: "TOGGLE_FULLSCREEN", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>', click: function(t2) {
    t2.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
  } }, slideshow: { type: "button", class: "fancybox__button--slideshow", label: "TOGGLE_SLIDESHOW", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>', click: function(t2) {
    t2.preventDefault(), this.Slideshow.toggle();
  } }, zoom: { type: "button", class: "fancybox__button--zoom", label: "TOGGLE_ZOOM", html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>', click: function(t2) {
    t2.preventDefault();
    const e2 = this.fancybox.getSlide().Panzoom;
    e2 && e2.toggleZoom();
  } }, download: { type: "link", label: "DOWNLOAD", class: "fancybox__button--download", html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>', click: function(t2) {
    t2.stopPropagation();
  } }, thumbs: { type: "button", label: "TOGGLE_THUMBS", class: "fancybox__button--thumbs", html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>', click: function(t2) {
    t2.stopPropagation();
    const e2 = this.fancybox.plugins.Thumbs;
    e2 && e2.toggle();
  } }, close: { type: "button", label: "CLOSE", class: "fancybox__button--close", html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>', attr: { "data-fancybox-close": "", tabindex: 0 } } } };
  var z = class {
    constructor(t2) {
      this.fancybox = t2, this.$container = null, this.state = "init";
      for (const t3 of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"])
        this[t3] = this[t3].bind(this);
      this.events = { init: this.onInit, prepare: this.onPrepare, done: this.onDone, keydown: this.onKeydown, closing: this.onClosing, "Carousel.change": this.onChange, "Carousel.settle": this.onSettle, "Carousel.Panzoom.touchStart": () => this.onRefresh(), "Image.startAnimation": (t3, e2) => this.onRefresh(e2), "Image.afterUpdate": (t3, e2) => this.onRefresh(e2) };
    }
    onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        let t2 = false;
        for (const e2 of this.fancybox.items)
          if (e2.type === "image") {
            t2 = true;
            break;
          }
        if (!t2)
          return void (this.state = "disabled");
      }
      for (const e2 of this.fancybox.option("Toolbar.display")) {
        if ((t(e2) ? e2.id : e2) === "close") {
          this.fancybox.options.closeButton = false;
          break;
        }
      }
    }
    onPrepare() {
      const t2 = this.fancybox;
      if (this.state === "init" && (this.build(), this.update(), this.Slideshow = new _(t2), !t2.Carousel.prevPage && (t2.option("slideshow.autoStart") && this.Slideshow.activate(), t2.option("fullscreen.autoStart") && !T.element())))
        try {
          T.activate(t2.$container);
        } catch (t3) {
        }
    }
    onFsChange() {
      window.scrollTo(T.pageXOffset, T.pageYOffset);
    }
    onSettle() {
      const t2 = this.fancybox, e2 = this.Slideshow;
      e2 && e2.isActive() && (t2.getSlide().index !== t2.Carousel.slides.length - 1 || t2.option("infinite") ? t2.getSlide().state === "done" && e2.setTimer() : e2.deactivate());
    }
    onChange() {
      this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
    }
    onDone(t2, e2) {
      const i2 = this.Slideshow;
      e2.index === t2.getSlide().index && (this.update(), i2 && i2.isActive() && (t2.option("infinite") || e2.index !== t2.Carousel.slides.length - 1 ? i2.setTimer() : i2.deactivate()));
    }
    onRefresh(t2) {
      t2 && t2.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t2 && t2.state !== "done" || this.Slideshow.deactivate());
    }
    onKeydown(t2, e2, i2) {
      e2 === " " && this.Slideshow && (this.Slideshow.toggle(), i2.preventDefault());
    }
    onClosing() {
      this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
    }
    createElement(t2) {
      let e2;
      t2.type === "div" ? e2 = document.createElement("div") : (e2 = document.createElement(t2.type === "link" ? "a" : "button"), e2.classList.add("carousel__button")), e2.innerHTML = t2.html, e2.setAttribute("tabindex", t2.tabindex || 0), t2.class && e2.classList.add(...t2.class.split(" "));
      for (const i3 in t2.attr)
        e2.setAttribute(i3, t2.attr[i3]);
      t2.label && e2.setAttribute("title", this.fancybox.localize(`{{${t2.label}}}`)), t2.click && e2.addEventListener("click", t2.click.bind(this)), t2.id === "prev" && e2.setAttribute("data-fancybox-prev", ""), t2.id === "next" && e2.setAttribute("data-fancybox-next", "");
      const i2 = e2.querySelector("svg");
      return i2 && (i2.setAttribute("role", "img"), i2.setAttribute("tabindex", "-1"), i2.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e2;
    }
    build() {
      this.cleanup();
      const i2 = this.fancybox.option("Toolbar.items"), s2 = [{ position: "left", items: [] }, { position: "center", items: [] }, { position: "right", items: [] }], o2 = this.fancybox.plugins.Thumbs;
      for (const n3 of this.fancybox.option("Toolbar.display")) {
        let a2, r2;
        if (t(n3) ? (a2 = n3.id, r2 = e({}, i2[a2], n3)) : (a2 = n3, r2 = i2[a2]), ["counter", "next", "prev", "slideshow"].includes(a2) && this.fancybox.items.length < 2)
          continue;
        if (a2 === "fullscreen") {
          if (!document.fullscreenEnabled || window.fullScreen)
            continue;
          document.addEventListener("fullscreenchange", this.onFsChange);
        }
        if (a2 === "thumbs" && (!o2 || o2.state === "disabled"))
          continue;
        if (!r2)
          continue;
        let h2 = r2.position || "right", l2 = s2.find((t2) => t2.position === h2);
        l2 && l2.items.push(r2);
      }
      const n2 = document.createElement("div");
      n2.classList.add("fancybox__toolbar");
      for (const t2 of s2)
        if (t2.items.length) {
          const e2 = document.createElement("div");
          e2.classList.add("fancybox__toolbar__items"), e2.classList.add(`fancybox__toolbar__items--${t2.position}`);
          for (const i3 of t2.items)
            e2.appendChild(this.createElement(i3));
          n2.appendChild(e2);
        }
      this.fancybox.$carousel.parentNode.insertBefore(n2, this.fancybox.$carousel), this.$container = n2;
    }
    update() {
      const t2 = this.fancybox.getSlide(), e2 = t2.index, i2 = this.fancybox.items.length, s2 = t2.downloadSrc || (t2.type !== "image" || t2.error ? null : t2.src);
      for (const t3 of this.fancybox.$container.querySelectorAll("a.fancybox__button--download"))
        s2 ? (t3.removeAttribute("disabled"), t3.removeAttribute("tabindex"), t3.setAttribute("href", s2), t3.setAttribute("download", s2), t3.setAttribute("target", "_blank")) : (t3.setAttribute("disabled", ""), t3.setAttribute("tabindex", -1), t3.removeAttribute("href"), t3.removeAttribute("download"));
      const o2 = t2.Panzoom, n2 = o2 && o2.option("maxScale") > o2.option("baseScale");
      for (const t3 of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"))
        n2 ? t3.removeAttribute("disabled") : t3.setAttribute("disabled", "");
      for (const e3 of this.fancybox.$container.querySelectorAll("[data-fancybox-index]"))
        e3.innerHTML = t2.index + 1;
      for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-count]"))
        t3.innerHTML = i2;
      if (!this.fancybox.option("infinite")) {
        for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"))
          e2 === 0 ? t3.setAttribute("disabled", "") : t3.removeAttribute("disabled");
        for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-next]"))
          e2 === i2 - 1 ? t3.setAttribute("disabled", "") : t3.removeAttribute("disabled");
      }
    }
    cleanup() {
      this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  };
  z.defaults = A;
  var k = { ScrollLock: class {
    constructor(t2) {
      this.fancybox = t2, this.viewport = null, this.pendingUpdate = null;
      for (const t3 of ["onReady", "onResize", "onTouchstart", "onTouchmove"])
        this[t3] = this[t3].bind(this);
    }
    onReady() {
      const t2 = window.visualViewport;
      t2 && (this.viewport = t2, this.startY = 0, t2.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, { passive: false }), window.addEventListener("touchmove", this.onTouchmove, { passive: false }), window.addEventListener("wheel", this.onWheel, { passive: false });
    }
    onResize() {
      this.updateViewport();
    }
    updateViewport() {
      const t2 = this.fancybox, e2 = this.viewport, i2 = e2.scale || 1, s2 = t2.$container;
      if (!s2)
        return;
      let o2 = "", n2 = "", a2 = "";
      i2 - 1 > 0.1 && (o2 = e2.width * i2 + "px", n2 = e2.height * i2 + "px", a2 = `translate3d(${e2.offsetLeft}px, ${e2.offsetTop}px, 0) scale(${1 / i2})`), s2.style.width = o2, s2.style.height = n2, s2.style.transform = a2;
    }
    onTouchstart(t2) {
      this.startY = t2.touches ? t2.touches[0].screenY : t2.screenY;
    }
    onTouchmove(t2) {
      const e2 = this.startY, i2 = window.innerWidth / window.document.documentElement.clientWidth;
      if (!t2.cancelable)
        return;
      if (t2.touches.length > 1 || i2 !== 1)
        return;
      const o2 = s(t2.composedPath()[0]);
      if (!o2)
        return void t2.preventDefault();
      const n2 = window.getComputedStyle(o2), a2 = parseInt(n2.getPropertyValue("height"), 10), r2 = t2.touches ? t2.touches[0].screenY : t2.screenY, h2 = e2 <= r2 && o2.scrollTop === 0, l2 = e2 >= r2 && o2.scrollHeight - o2.scrollTop === a2;
      (h2 || l2) && t2.preventDefault();
    }
    onWheel(t2) {
      s(t2.composedPath()[0]) || t2.preventDefault();
    }
    cleanup() {
      this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
      const t2 = this.viewport;
      t2 && (t2.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, false), window.removeEventListener("touchmove", this.onTouchmove, false), window.removeEventListener("wheel", this.onWheel, { passive: false });
    }
    attach() {
      this.fancybox.on("initLayout", this.onReady);
    }
    detach() {
      this.fancybox.off("initLayout", this.onReady), this.cleanup();
    }
  }, Thumbs: $2, Html: E, Toolbar: z, Image: P, Hash: L };
  var O = { startIndex: 0, preload: 1, infinite: true, showClass: "fancybox-zoomInUp", hideClass: "fancybox-fadeOut", animated: true, hideScrollbar: true, parentEl: null, mainClass: null, autoFocus: true, trapFocus: true, placeFocusBack: true, click: "close", closeButton: "inside", dragToClose: true, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "next", ArrowDown: "prev", ArrowRight: "next", ArrowLeft: "prev" }, template: { closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>', spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>', main: null }, l10n: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" } };
  var M = new Map();
  var I = 0;
  var F = class extends l {
    constructor(t2, i2 = {}) {
      t2 = t2.map((t3) => (t3.width && (t3._width = t3.width), t3.height && (t3._height = t3.height), t3)), super(e(true, {}, O, i2)), this.bindHandlers(), this.state = "init", this.setItems(t2), this.attachPlugins(F.Plugins), this.trigger("init"), this.option("hideScrollbar") === true && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), M.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus();
    }
    option(t2, ...e2) {
      const i2 = this.getSlide();
      let s2 = i2 ? i2[t2] : void 0;
      return s2 !== void 0 ? (typeof s2 == "function" && (s2 = s2.call(this, this, ...e2)), s2) : super.option(t2, ...e2);
    }
    bindHandlers() {
      for (const t2 of ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"])
        this[t2] = this[t2].bind(this);
    }
    attachEvents() {
      document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, true), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, true), this.$container.addEventListener("click", this.onClick);
    }
    detachEvents() {
      document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, true), document.removeEventListener("focus", this.onFocus, true), this.$container.removeEventListener("click", this.onClick);
    }
    initLayout() {
      this.$root = this.option("parentEl") || document.body;
      let t2 = this.option("template.main");
      t2 && (this.$root.insertAdjacentHTML("beforeend", this.localize(t2)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, false), Object.entries({ class: "fancybox__container", role: "dialog", tabIndex: "-1", "aria-modal": "true", "aria-hidden": "true", "aria-label": this.localize("{{MODAL}}") }).forEach((t3) => this.$container.setAttribute(...t3)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++I, this.$container.setAttribute("id", "fancybox-" + this.id));
      const e2 = this.option("mainClass");
      return e2 && this.$container.classList.add(...e2.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
    }
    setItems(t2) {
      const e2 = [];
      for (const i2 of t2) {
        const t3 = i2.$trigger;
        if (t3) {
          const e3 = t3.dataset || {};
          i2.src = e3.src || t3.getAttribute("href") || i2.src, i2.type = e3.type || i2.type, !i2.src && t3 instanceof HTMLImageElement && (i2.src = t3.currentSrc || i2.$trigger.src);
        }
        let s2 = i2.$thumb;
        if (!s2) {
          let t4 = i2.$trigger && i2.$trigger.origTarget;
          t4 && (s2 = t4 instanceof HTMLImageElement ? t4 : t4.querySelector("img:not([aria-hidden])")), !s2 && i2.$trigger && (s2 = i2.$trigger instanceof HTMLImageElement ? i2.$trigger : i2.$trigger.querySelector("img:not([aria-hidden])"));
        }
        i2.$thumb = s2 || null;
        let o2 = i2.thumb;
        !o2 && s2 && (o2 = s2.currentSrc || s2.src, !o2 && s2.dataset && (o2 = s2.dataset.lazySrc || s2.dataset.src)), o2 || i2.type !== "image" || (o2 = i2.src), i2.thumb = o2 || null, i2.caption = i2.caption || "", e2.push(i2);
      }
      this.items = e2;
    }
    initCarousel() {
      return this.Carousel = new y(this.$carousel, e(true, {}, { prefix: "", classNames: { viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" }, textSelection: true, preload: this.option("preload"), friction: 0.88, slides: this.items, initialPage: this.options.startIndex, slidesPerPage: 1, infiniteX: this.option("infinite"), infiniteY: true, l10n: this.option("l10n"), Dots: false, Navigation: { classNames: { main: "fancybox__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } }, Panzoom: { textSelection: true, panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"), lockAxis: () => {
        if (this.Carousel) {
          let t2 = "x";
          return this.option("dragToClose") && (t2 += "y"), t2;
        }
      } }, on: { "*": (t2, ...e2) => this.trigger(`Carousel.${t2}`, ...e2), init: (t2) => this.Carousel = t2, createSlide: this.onCreateSlide, settle: this.onSettle } }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({ touchMove: this.onTouchMove, afterTransform: this.onTransform, touchEnd: this.onTouchEnd }), this.trigger("initCarousel"), this;
    }
    onCreateSlide(t2, e2) {
      let i2 = e2.caption || "";
      if (typeof this.options.caption == "function" && (i2 = this.options.caption.call(this, this, this.Carousel, e2)), typeof i2 == "string" && i2.length) {
        const t3 = document.createElement("div"), s2 = `fancybox__caption_${this.id}_${e2.index}`;
        t3.className = "fancybox__caption", t3.innerHTML = i2, t3.setAttribute("id", s2), e2.$caption = e2.$el.appendChild(t3), e2.$el.classList.add("has-caption"), e2.$el.setAttribute("aria-labelledby", s2);
      }
    }
    onSettle() {
      this.option("autoFocus") && this.focus();
    }
    onFocus(t2) {
      this.focus(t2);
    }
    onClick(t2) {
      if (t2.defaultPrevented)
        return;
      let e2 = t2.composedPath()[0];
      if (e2.matches("[data-fancybox-close]"))
        return t2.preventDefault(), void F.close(false, t2);
      if (e2.matches("[data-fancybox-next]"))
        return t2.preventDefault(), void F.next();
      if (e2.matches("[data-fancybox-prev]"))
        return t2.preventDefault(), void F.prev();
      if (e2.matches(x) || document.activeElement.blur(), e2.closest(".fancybox__content"))
        return;
      if (getSelection().toString().length)
        return;
      if (this.trigger("click", t2) === false)
        return;
      switch (this.option("click")) {
        case "close":
          this.close();
          break;
        case "next":
          this.next();
      }
    }
    onTouchMove() {
      const t2 = this.getSlide().Panzoom;
      return !t2 || t2.content.scale === 1;
    }
    onTouchEnd(t2) {
      const e2 = t2.dragOffset.y;
      Math.abs(e2) >= 150 || Math.abs(e2) >= 35 && t2.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t2.content.y < 0 ? "Up" : "Down")), this.close()) : t2.lockAxis === "y" && t2.panTo({ y: 0 });
    }
    onTransform(t2) {
      if (this.$backdrop) {
        const e2 = Math.abs(t2.content.y), i2 = e2 < 1 ? "" : Math.max(0.33, Math.min(1, 1 - e2 / t2.content.fitHeight * 1.5));
        this.$container.style.setProperty("--fancybox-ts", i2 ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i2);
      }
    }
    onMousedown() {
      this.state === "ready" && document.body.classList.add("is-using-mouse");
    }
    onKeydown(t2) {
      if (F.getInstance().id !== this.id)
        return;
      document.body.classList.remove("is-using-mouse");
      const e2 = t2.key, i2 = this.option("keyboard");
      if (!i2 || t2.ctrlKey || t2.altKey || t2.shiftKey)
        return;
      const s2 = t2.composedPath()[0], o2 = document.activeElement && document.activeElement.classList, n2 = o2 && o2.contains("carousel__button");
      if (e2 !== "Escape" && !n2) {
        if (t2.target.isContentEditable || ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s2.nodeName) !== -1)
          return;
      }
      if (this.trigger("keydown", e2, t2) === false)
        return;
      const a2 = i2[e2];
      typeof this[a2] == "function" && this[a2]();
    }
    getSlide() {
      const t2 = this.Carousel;
      if (!t2)
        return null;
      const e2 = t2.page === null ? t2.option("initialPage") : t2.page, i2 = t2.pages || [];
      return i2.length && i2[e2] ? i2[e2].slides[0] : null;
    }
    focus(t2) {
      if (F.ignoreFocusChange)
        return;
      if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1)
        return;
      const e2 = this.$container, i2 = this.getSlide(), s2 = i2.state === "done" ? i2.$el : null;
      if (s2 && s2.contains(document.activeElement))
        return;
      t2 && t2.preventDefault(), F.ignoreFocusChange = true;
      const o2 = Array.from(e2.querySelectorAll(x));
      let n2, a2 = [];
      for (let t3 of o2) {
        const e3 = t3.offsetParent, i3 = s2 && s2.contains(t3), o3 = !this.Carousel.$viewport.contains(t3);
        e3 && (i3 || o3) ? (a2.push(t3), t3.dataset.origTabindex !== void 0 && (t3.tabIndex = t3.dataset.origTabindex, t3.removeAttribute("data-orig-tabindex")), (t3.hasAttribute("autoFocus") || !n2 && i3 && !t3.classList.contains("carousel__button")) && (n2 = t3)) : (t3.dataset.origTabindex = t3.dataset.origTabindex === void 0 ? t3.getAttribute("tabindex") : t3.dataset.origTabindex, t3.tabIndex = -1);
      }
      t2 ? a2.indexOf(t2.target) > -1 ? this.lastFocus = t2.target : this.lastFocus === e2 ? w(a2[a2.length - 1]) : w(e2) : this.option("autoFocus") && n2 ? w(n2) : a2.indexOf(document.activeElement) < 0 && w(e2), this.lastFocus = document.activeElement, F.ignoreFocusChange = false;
    }
    hideScrollbar() {
      if (!v)
        return;
      const t2 = window.innerWidth - document.documentElement.getBoundingClientRect().width, e2 = "fancybox-style-noscroll";
      let i2 = document.getElementById(e2);
      i2 || t2 > 0 && (i2 = document.createElement("style"), i2.id = e2, i2.type = "text/css", i2.innerHTML = `.compensate-for-scrollbar {padding-right: ${t2}px;}`, document.getElementsByTagName("head")[0].appendChild(i2), document.body.classList.add("compensate-for-scrollbar"));
    }
    revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      const t2 = document.getElementById("fancybox-style-noscroll");
      t2 && t2.remove();
    }
    clearContent(t2) {
      this.Carousel.trigger("removeSlide", t2), t2.$content && (t2.$content.remove(), t2.$content = null), t2.$closeButton && (t2.$closeButton.remove(), t2.$closeButton = null), t2._className && t2.$el.classList.remove(t2._className);
    }
    setContent(t2, e2, i2 = {}) {
      let s2;
      const o2 = t2.$el;
      if (e2 instanceof HTMLElement)
        ["img", "iframe", "video", "audio"].indexOf(e2.nodeName.toLowerCase()) > -1 ? (s2 = document.createElement("div"), s2.appendChild(e2)) : s2 = e2;
      else {
        const t3 = document.createRange().createContextualFragment(e2);
        s2 = document.createElement("div"), s2.appendChild(t3);
      }
      if (t2.filter && !t2.error && (s2 = s2.querySelector(t2.filter)), s2 instanceof Element)
        return t2._className = `has-${i2.suffix || t2.type || "unknown"}`, o2.classList.add(t2._className), s2.classList.add("fancybox__content"), s2.style.display !== "none" && getComputedStyle(s2).getPropertyValue("display") !== "none" || (s2.style.display = t2.display || this.option("defaultDisplay") || "flex"), t2.id && s2.setAttribute("id", t2.id), t2.$content = s2, o2.prepend(s2), this.manageCloseButton(t2), t2.state !== "loading" && this.revealContent(t2), s2;
      this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
    }
    manageCloseButton(t2) {
      const e2 = t2.closeButton === void 0 ? this.option("closeButton") : t2.closeButton;
      if (!e2 || e2 === "top" && this.$closeButton)
        return;
      const i2 = document.createElement("button");
      i2.classList.add("carousel__button", "is-close"), i2.setAttribute("title", this.options.l10n.CLOSE), i2.innerHTML = this.option("template.closeButton"), i2.addEventListener("click", (t3) => this.close(t3)), e2 === "inside" ? (t2.$closeButton && t2.$closeButton.remove(), t2.$closeButton = t2.$content.appendChild(i2)) : this.$closeButton = this.$container.insertBefore(i2, this.$container.firstChild);
    }
    revealContent(t2) {
      this.trigger("reveal", t2), t2.$content.style.visibility = "";
      let e2 = false;
      t2.error || t2.state === "loading" || this.Carousel.prevPage !== null || t2.index !== this.options.startIndex || (e2 = t2.showClass === void 0 ? this.option("showClass") : t2.showClass), e2 ? (t2.state = "animating", this.animateCSS(t2.$content, e2, () => {
        this.done(t2);
      })) : this.done(t2);
    }
    animateCSS(t2, e2, i2) {
      if (t2 && t2.dispatchEvent(new CustomEvent("animationend", { bubbles: true, cancelable: true })), !t2 || !e2)
        return void (typeof i2 == "function" && i2());
      const s2 = function(o2) {
        o2.currentTarget === this && (t2.removeEventListener("animationend", s2), i2 && i2(), t2.classList.remove(e2));
      };
      t2.addEventListener("animationend", s2), t2.classList.add(e2);
    }
    done(t2) {
      t2.state = "done", this.trigger("done", t2);
      const e2 = this.getSlide();
      e2 && t2.index === e2.index && this.option("autoFocus") && this.focus();
    }
    setError(t2, e2) {
      t2.error = e2, this.hideLoading(t2), this.clearContent(t2);
      const i2 = document.createElement("div");
      i2.classList.add("fancybox-error"), i2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>"), this.setContent(t2, i2, { suffix: "error" });
    }
    showLoading(t2) {
      t2.state = "loading", t2.$el.classList.add("is-loading");
      let e2 = t2.$el.querySelector(".fancybox__spinner");
      e2 || (e2 = document.createElement("div"), e2.classList.add("fancybox__spinner"), e2.innerHTML = this.option("template.spinner"), e2.addEventListener("click", () => {
        this.Carousel.Panzoom.velocity || this.close();
      }), t2.$el.prepend(e2));
    }
    hideLoading(t2) {
      const e2 = t2.$el && t2.$el.querySelector(".fancybox__spinner");
      e2 && (e2.remove(), t2.$el.classList.remove("is-loading")), t2.state === "loading" && (this.trigger("load", t2), t2.state = "ready");
    }
    next() {
      const t2 = this.Carousel;
      t2 && t2.pages.length > 1 && t2.slideNext();
    }
    prev() {
      const t2 = this.Carousel;
      t2 && t2.pages.length > 1 && t2.slidePrev();
    }
    jumpTo(...t2) {
      this.Carousel && this.Carousel.slideTo(...t2);
    }
    close(t2) {
      if (t2 && t2.preventDefault(), ["closing", "customClosing", "destroy"].includes(this.state))
        return;
      if (this.trigger("shouldClose", t2) === false)
        return;
      if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t2), this.state === "destroy")
        return;
      this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
      const e2 = this.getSlide();
      if (this.Carousel.slides.forEach((t3) => {
        t3.$content && t3.index !== e2.index && this.Carousel.trigger("removeSlide", t3);
      }), this.state === "closing") {
        const t3 = e2.hideClass === void 0 ? this.option("hideClass") : e2.hideClass;
        this.animateCSS(e2.$content, t3, () => {
          this.destroy();
        }, true);
      }
    }
    destroy() {
      if (this.state === "destroy")
        return;
      this.state = "destroy", this.trigger("destroy");
      const t2 = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
      this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t2 && w(t2), M.delete(this.id);
      const e2 = F.getInstance();
      e2 ? e2.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
    }
    static show(t2, e2 = {}) {
      return new F(t2, e2);
    }
    static fromEvent(t2, e2 = {}) {
      if (t2.defaultPrevented)
        return;
      if (t2.button && t2.button !== 0)
        return;
      if (t2.ctrlKey || t2.metaKey || t2.shiftKey)
        return;
      const i2 = t2.composedPath()[0];
      let s2, o2, n2, a2 = i2;
      if ((a2.matches("[data-fancybox-trigger]") || (a2 = a2.closest("[data-fancybox-trigger]"))) && (s2 = a2 && a2.dataset && a2.dataset.fancyboxTrigger), s2) {
        const t3 = document.querySelectorAll(`[data-fancybox="${s2}"]`), e3 = parseInt(a2.dataset.fancyboxIndex, 10) || 0;
        a2 = t3.length ? t3[e3] : a2;
      }
      a2 || (a2 = i2), Array.from(F.openers.keys()).reverse().some((e3) => {
        n2 = a2;
        let i3 = false;
        try {
          n2 instanceof Element && (typeof e3 == "string" || e3 instanceof String) && (i3 = n2.matches(e3) || (n2 = n2.closest(e3)));
        } catch (t3) {
        }
        return !!i3 && (t2.preventDefault(), o2 = e3, true);
      });
      let r2 = false;
      if (o2) {
        e2.event = t2, e2.target = n2, n2.origTarget = i2, r2 = F.fromOpener(o2, e2);
        const s3 = F.getInstance();
        s3 && s3.state === "ready" && t2.detail && document.body.classList.add("is-using-mouse");
      }
      return r2;
    }
    static fromOpener(t2, i2 = {}) {
      let s2 = [], o2 = i2.startIndex || 0, n2 = i2.target || null;
      const a2 = (i2 = e({}, i2, F.openers.get(t2))).groupAll !== void 0 && i2.groupAll, r2 = i2.groupAttr === void 0 ? "data-fancybox" : i2.groupAttr, h2 = r2 && n2 ? n2.getAttribute(`${r2}`) : "";
      if (!n2 || h2 || a2) {
        const e2 = i2.root || (n2 ? n2.getRootNode() : document.body);
        s2 = [].slice.call(e2.querySelectorAll(t2));
      }
      if (n2 && !a2 && (s2 = h2 ? s2.filter((t3) => t3.getAttribute(`${r2}`) === h2) : [n2]), !s2.length)
        return false;
      const l2 = F.getInstance();
      return !(l2 && s2.indexOf(l2.options.$trigger) > -1) && (o2 = n2 ? s2.indexOf(n2) : o2, s2 = s2.map(function(t3) {
        const e2 = ["false", "0", "no", "null", "undefined"], i3 = ["true", "1", "yes"], s3 = Object.assign({}, t3.dataset), o3 = {};
        for (let [t4, n3] of Object.entries(s3))
          if (t4 !== "fancybox")
            if (t4 === "width" || t4 === "height")
              o3[`_${t4}`] = n3;
            else if (typeof n3 == "string" || n3 instanceof String)
              if (e2.indexOf(n3) > -1)
                o3[t4] = false;
              else if (i3.indexOf(o3[t4]) > -1)
                o3[t4] = true;
              else
                try {
                  o3[t4] = JSON.parse(n3);
                } catch (e3) {
                  o3[t4] = n3;
                }
            else
              o3[t4] = n3;
        return t3 instanceof Element && (o3.$trigger = t3), o3;
      }), new F(s2, e({}, i2, { startIndex: o2, $trigger: n2 })));
    }
    static bind(t2, e2 = {}) {
      function i2() {
        document.body.addEventListener("click", F.fromEvent, false);
      }
      v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i2() : document.addEventListener("DOMContentLoaded", i2)), F.openers.set(t2, e2));
    }
    static unbind(t2) {
      F.openers.delete(t2), F.openers.size || F.destroy();
    }
    static destroy() {
      let t2;
      for (; t2 = F.getInstance(); )
        t2.destroy();
      F.openers = new Map(), document.body.removeEventListener("click", F.fromEvent, false);
    }
    static getInstance(t2) {
      if (t2)
        return M.get(t2);
      return Array.from(M.values()).reverse().find((t3) => !["closing", "customClosing", "destroy"].includes(t3.state) && t3) || null;
    }
    static close(t2 = true, e2) {
      if (t2)
        for (const t3 of M.values())
          t3.close(e2);
      else {
        const t3 = F.getInstance();
        t3 && t3.close(e2);
      }
    }
    static next() {
      const t2 = F.getInstance();
      t2 && t2.next();
    }
    static prev() {
      const t2 = F.getInstance();
      t2 && t2.prev();
    }
  };
  F.version = "4.0.26", F.defaults = O, F.openers = new Map(), F.Plugins = k, F.bind("[data-fancybox]");
  for (const [t2, e2] of Object.entries(F.Plugins || {}))
    typeof e2.create == "function" && e2.create(F);

  // resources/js/app.js
  Promise.resolve().then(() => init_owl_carousel());
  window.addEventListener("load", function() {
    Promise.resolve().then(() => __toModule(require_toggle_menu()));
    Promise.resolve().then(() => __toModule(require_toggle_submenu()));
    Promise.resolve().then(() => __toModule(require_focus_search()));
    Promise.resolve().then(() => __toModule(require_toggle_tabs()));
    Promise.resolve().then(() => __toModule(require_sticky_scroll()));
    Promise.resolve().then(() => __toModule(require_toggle_readmore()));
    Promise.resolve().then(() => __toModule(require_toggle_sorting()));
  });
})();
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
