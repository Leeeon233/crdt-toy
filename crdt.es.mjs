function _mergeNamespaces(n2, m2) {
  m2.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k2) {
      if (k2 !== "default" && !(k2 in n2)) {
        var d2 = Object.getOwnPropertyDescriptor(e2, k2);
        Object.defineProperty(n2, k2, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k2];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
const p$3 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link2 of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link2);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node2 of mutation.addedNodes) {
        if (node2.tagName === "LINK" && node2.rel === "modulepreload")
          processPreload(node2);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link2) {
    if (link2.ep)
      return;
    link2.ep = true;
    const fetchOpts = getFetchOpts(link2);
    fetch(link2.href, fetchOpts);
  }
};
p$3();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from2;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from2 = Object(arguments[s]);
    for (var key in from2) {
      if (hasOwnProperty.call(from2, key)) {
        to[key] = from2[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from2);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from2, symbols[i])) {
          to[symbols[i]] = from2[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = objectAssign, n$2 = 60103, p$2 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$2 = 60109, r$2 = 60110, t$2 = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v$1 = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w$1 = Symbol.for;
  n$2 = w$1("react.element");
  p$2 = w$1("react.portal");
  react_production_min.Fragment = w$1("react.fragment");
  react_production_min.StrictMode = w$1("react.strict_mode");
  react_production_min.Profiler = w$1("react.profiler");
  q$2 = w$1("react.provider");
  r$2 = w$1("react.context");
  t$2 = w$1("react.forward_ref");
  react_production_min.Suspense = w$1("react.suspense");
  u = w$1("react.memo");
  v$1 = w$1("react.lazy");
}
var x$1 = typeof Symbol === "function" && Symbol.iterator;
function y$2(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x$1 && a[x$1] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b2) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z$1(85));
  this.updater.enqueueSetState(this, a, b2, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$1(a, b2, c2) {
  this.props = a;
  this.context = b2;
  this.refs = B$1;
  this.updater = c2 || A$1;
}
var F$1 = E$1.prototype = new D$1();
F$1.constructor = E$1;
l$1(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b2, c2) {
  var e2, d2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (e2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      H$1.call(b2, e2) && !I$1.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    d2.children = c2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d2.children = f2;
  }
  if (a && a.defaultProps)
    for (e2 in g2 = a.defaultProps, g2)
      d2[e2] === void 0 && (d2[e2] = g2[e2]);
  return { $$typeof: n$2, type: a, key: k2, ref: h2, props: d2, _owner: G$1.current };
}
function K(a, b2) {
  return { $$typeof: n$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$2;
}
function escape$2(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b2) {
  return typeof a === "object" && a !== null && a.key != null ? escape$2("" + a.key) : b2.toString(36);
}
function O$1(a, b2, c2, e2, d2) {
  var k2 = typeof a;
  if (k2 === "undefined" || k2 === "boolean")
    a = null;
  var h2 = false;
  if (a === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$2:
          case p$2:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, d2 = d2(h2), a = e2 === "" ? "." + N$1(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", a != null && (c2 = a.replace(M$1, "$&/") + "/"), O$1(d2, b2, c2, "", function(a2) {
      return a2;
    })) : d2 != null && (L(d2) && (d2 = K(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M$1, "$&/") + "/") + a)), b2.push(d2)), 1;
  h2 = 0;
  e2 = e2 === "" ? "." : e2 + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = e2 + N$1(k2, g2);
      h2 += O$1(k2, b2, c2, f2, d2);
    }
  else if (f2 = y$2(a), typeof f2 === "function")
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = e2 + N$1(k2, g2++), h2 += O$1(k2, b2, c2, f2, d2);
  else if (k2 === "object")
    throw b2 = "" + a, Error(z$1(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2));
  return h2;
}
function P$1(a, b2, c2) {
  if (a == null)
    return a;
  var e2 = [], d2 = 0;
  O$1(a, e2, "", "", function(a2) {
    return b2.call(c2, a2, d2++);
  });
  return e2;
}
function Q(a) {
  if (a._status === -1) {
    var b2 = a._result;
    b2 = b2();
    a._status = 0;
    a._result = b2;
    b2.then(function(b3) {
      a._status === 0 && (b3 = b3.default, a._status = 1, a._result = b3);
    }, function(b3) {
      a._status === 0 && (a._status = 2, a._result = b3);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z$1(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l$1 };
react_production_min.Children = { map: P$1, forEach: function(a, b2, c2) {
  P$1(a, function() {
    b2.apply(this, arguments);
  }, c2);
}, count: function(a) {
  var b2 = 0;
  P$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z$1(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b2, c2) {
  if (a === null || a === void 0)
    throw Error(z$1(267, a));
  var e2 = l$1({}, a.props), d2 = a.key, k2 = a.ref, h2 = a._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = G$1.current);
    b2.key !== void 0 && (d2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      H$1.call(b2, f2) && !I$1.hasOwnProperty(f2) && (e2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    e2.children = c2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e2.children = g2;
  }
  return {
    $$typeof: n$2,
    type: a.type,
    key: d2,
    ref: k2,
    props: e2,
    _owner: h2
  };
};
react_production_min.createContext = function(a, b2) {
  b2 === void 0 && (b2 = null);
  a = { $$typeof: r$2, _calculateChangedBits: b2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b2 = J.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$2, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v$1, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: u, type: a, compare: b2 === void 0 ? null : b2 };
};
react_production_min.useCallback = function(a, b2) {
  return S$1().useCallback(a, b2);
};
react_production_min.useContext = function(a, b2) {
  return S$1().useContext(a, b2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b2) {
  return S$1().useEffect(a, b2);
};
react_production_min.useImperativeHandle = function(a, b2, c2) {
  return S$1().useImperativeHandle(a, b2, c2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return S$1().useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return S$1().useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, c2) {
  return S$1().useReducer(a, b2, c2);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": React
}, [react.exports]);
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a) {
      t2 !== null ? setTimeout(f2, 0, a) : (t2 = a, setTimeout(w2, 0));
    };
    g2 = function(a, b2) {
      u2 = setTimeout(a, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a, b2) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (e2 !== void 0 && 0 < I2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b2 = a[0];
    if (b2 !== void 0) {
      var c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a:
          for (var d2 = 0, e2 = a.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c2))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d2] = r2, a[v2] = c2, d2 = v2) : (a[d2] = n2, a[m2] = c2, d2 = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c2))
              a[d2] = r2, a[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b2 = J2(M2); b2 !== null; ) {
      if (b2.callback === null)
        K2(M2);
      else if (b2.startTime <= a)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        b2 !== null && g2(U2, b2.startTime - a);
      }
  }
  function V2(a, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b2) || a && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if (typeof d2 === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = P2;
    P2 = a;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: N2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a.sortIndex = e2, H2(L2, a), R2 || Q2 || (R2 = true, f2(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m$2 = objectAssign, r$1 = scheduler.exports;
function y$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$1(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b2) {
  ea(a, b2);
  ea(a + "Capture", b2);
}
function ea(a, b2) {
  ca[a] = b2;
  for (a = 0; a < b2.length; a++)
    ba.add(b2[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ma(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  D[b2] = new B(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b2, c2, d2) {
  var e2 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e2 !== null ? e2.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? la(b2) && (c2 === null ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b2) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a();
    }
  } catch (k2) {
    if (k2 && d2 && typeof k2.stack === "string") {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a.render;
        b2 = b2.displayName || b2.name || "";
        return a.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b2 = a._payload;
        a = a._init;
        try {
          return Ra(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return m$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Sa(b2.value != null ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function $a(a, b2) {
  b2 = b2.checked;
  b2 != null && qa(a, "checked", b2, false);
}
function ab(a, b2) {
  $a(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a.value === "" || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a.defaultChecked = !!b2.defaultChecked);
}
function cb(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  c2 !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c2 !== "" && (a.name = c2);
}
function bb(a, b2, c2) {
  if (b2 !== "number" || Xa(a.ownerDocument) !== a)
    c2 == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
function db(a) {
  var b2 = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b2 += a2);
  });
  return b2;
}
function eb(a, b2) {
  a = m$2({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a.children = b2;
  return a;
}
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a[e2].disabled || (b2 = a[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y$1(91));
  return m$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(y$1(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a.value && (a.value = c2), b2.defaultValue == null && a.defaultValue !== c2 && (a.defaultValue = c2));
  d2 != null && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && b2 !== "" && b2 !== null && (a.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b2) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b2) : a === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function pb(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b2] = qb[a];
  });
});
function sb(a, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b2).trim() : b2 + "px";
}
function tb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = sb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var ub = m$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b2) {
  if (b2) {
    if (ub[a] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y$1(137, a));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y$1(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$1(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y$1(62));
  }
}
function wb(a, b2) {
  if (a.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y$1(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb(a, b2, c2, d2, e2) {
  return a(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b2, c2) {
  if (Lb)
    return a(b2, c2);
  Lb = true;
  try {
    return Jb(a, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b2) {
  var c2 = a.stateNode;
  if (c2 === null)
    return null;
  var d2 = Db(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(y$1(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$1(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, (b2.flags & 1026) !== 0 && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return b2.tag === 3 ? c2 : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b2 = a.memoizedState;
    b2 === null && (a = a.alternate, a !== null && (b2 = a.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y$1(188));
}
function bc(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Zb(a);
    if (b2 === null)
      throw Error(y$1(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$1(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$1(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$1(190));
  }
  if (c2.tag !== 3)
    throw Error(y$1(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b2 = a; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a, b2) {
  for (var c2 = a.alternate; b2 !== null; ) {
    if (b2 === a || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b2, c2, d2, e2) {
  return { blockedOn: a, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a, b2, c2, d2, e2, f2) {
  if (a === null || a.nativeEvent !== f2)
    return a = rc(b2, c2, d2, e2, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a;
}
function uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a) {
  var b2 = wc(a.target);
  if (b2 !== null) {
    var c2 = Zb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = $b(c2), b2 !== null) {
          a.blockedOn = b2;
          hc(a.lanePriority, function() {
            r$1.unstable_runWithPriority(a.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.hydrate) {
        a.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (c2 !== null)
      return b2 = Cb(c2), b2 !== null && fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a, b2, c2) {
  xc(a) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (c2 !== null) {
        a.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b2(b3) {
    return Bc(b3, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
    vc(c2), c2.blockedOn === null && pc.shift();
}
function Dc(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b2 = Ec[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a] = b2[c2];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b2) {
  for (var c2 = 0; c2 < a.length; c2 += 2) {
    var d2 = a[c2], e2 = a[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b2 = 24 & a;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a;
  if (b2 !== 0)
    return F = 5, b2;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$1(358, a));
  }
}
function Uc(a, b2) {
  var c2 = a.pendingLanes;
  if (c2 === 0)
    return F = 0;
  var d2 = 0, e2 = 0, f2 = a.expiredLanes, g2 = a.suspendedLanes, h2 = a.pingedLanes;
  if (f2 !== 0)
    d2 = f2, e2 = F = 15;
  else if (f2 = c2 & 134217727, f2 !== 0) {
    var k2 = f2 & ~g2;
    k2 !== 0 ? (d2 = Rc(k2), e2 = F) : (h2 &= f2, h2 !== 0 && (d2 = Rc(h2), e2 = F));
  } else
    f2 = c2 & ~g2, f2 !== 0 ? (d2 = Rc(f2), e2 = F) : h2 !== 0 && (d2 = Rc(h2), e2 = F);
  if (d2 === 0)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
    Rc(b2);
    if (e2 <= F)
      return b2;
    F = e2;
  }
  b2 = a.entangledLanes;
  if (b2 !== 0)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b2) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b2), a === 0 ? Xc(10, b2) : a;
    case 10:
      return a = Yc(192 & ~b2), a === 0 ? Xc(8, b2) : a;
    case 8:
      return a = Yc(3584 & ~b2), a === 0 && (a = Yc(4186112 & ~b2), a === 0 && (a = 512)), a;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y$1(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function $c(a, b2, c2) {
  a.pendingLanes |= b2;
  var d2 = b2 - 1;
  a.suspendedLanes &= d2;
  a.pingedLanes &= d2;
  a = a.eventTimes;
  b2 = 31 - Vc(b2);
  a[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a, b2, c2, d2) {
  ed(dd, hd.bind(null, a, b2, c2, d2));
}
function hd(a, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b2, c2, d2), jc.push(a);
    else {
      var f2 = yc(a, b2, c2, d2);
      if (f2 === null)
        e2 && sc(a, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f2, a, b2, c2, d2);
            jc.push(a);
            return;
          }
          if (uc(f2, a, b2, c2, d2))
            return;
          sc(a, d2);
        }
        jd(a, b2, d2, null, c2);
      }
    }
  }
}
function yc(a, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (e2 !== null) {
    var f2 = Zb(e2);
    if (f2 === null)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e2 = $b(f2);
        if (e2 !== null)
          return e2;
        e2 = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b2 === 13 && (a = 13)) : a = b2;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$2({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m$2({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a.type] : b2 === "textarea" ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if (a === "change")
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b2);
    else {
      Kb = true;
      try {
        Gb(a, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b2, c2) {
  a === "focusin" ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b2) {
  if (a === "click")
    return te(b2);
}
function Fe(a, b2) {
  if (a === "input" || a === "change")
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (a !== 0 || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b2) {
  if (He(a, b2))
    return true;
  if (typeof a !== "object" || a === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b2) {
  var c2 = Ke(a);
  a = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a, b2) {
  return a && b2 ? a === b2 ? true : a && a.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Oe(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b2 === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Yb(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b2) {
  var c2 = $e(b2), d2 = a + "__bubble";
  c2.has(d2) || (af(b2, a, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a, null);
    df(b2, true, a, null);
  }));
}
function df(a, b2, c2, d2) {
  var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c2;
  a === "selectionchange" && c2.nodeType !== 9 && (f2 = c2.ownerDocument);
  if (d2 !== null && !b2 && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a, e2, b2), g2.add(h2));
}
function af(a, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (e2 === void 0 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : e2 !== void 0 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function jd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a);
      if (h3 !== void 0) {
        var k3 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (od(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = (b2 & 4) !== 0, z2 = !w2 && a === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a === "mouseover" || a === "pointerover";
        k3 = a === "mouseout" || a === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k3 == null ? h3 : ue(k3);
            q2 = x2 == null ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && hf(g3, h3, k3, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a, h3, d3);
        a === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c2) && (L2 = "onCompositionEnd") : a === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c2.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a !== null; ) {
    var e2 = a, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Ob(a, c2), f2 != null && d2.unshift(ef(a, f2, e2)), f2 = Ob(a, b2), f2 != null && d2.push(ef(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Ob(c2, f2), k2 != null && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), k2 != null && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b2) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a, b2) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (a.nodeType === 8) {
      var c2 = a.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b2 = a[wf];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c2 = a[wf])
            return c2;
          a = sf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y$1(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b2 = a[yf];
  b2 === void 0 && (b2 = a[yf] = /* @__PURE__ */ new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b2) {
  Af++;
  zf[Af] = a.current;
  a.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b2, c2) {
  if (M.current !== Cf)
    throw Error(y$1(168));
  I(M, b2);
  I(N, c2);
}
function If(a, b2, c2) {
  var d2 = a.stateNode;
  a = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a))
      throw Error(y$1(108, Ra(b2) || "Unknown", e2));
  return m$2({}, c2, d2);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(y$1(169));
  c2 ? (a = If(a, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c2);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$1(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$1(332));
  }
}
function gg(a, b2) {
  a = fg(a);
  return Nf(a, b2);
}
function hg(a, b2, c2) {
  a = fg(a);
  return Of(a, b2, c2);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a < b2.length; a++) {
          var c2 = b2[a];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      ag = null;
    } catch (c2) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = m$2({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      b2[c2] === void 0 && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b2 = mg.current;
  H(mg);
  a.type._context._currentValue = b2;
}
function sg(a, b2) {
  for (; a !== null; ) {
    var c2 = a.alternate;
    if ((a.childLanes & b2) === b2)
      if (c2 === null || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
    a = a.return;
  }
}
function tg(a, b2) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b2) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b2) {
  if (pg !== a && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a, b2 = 1073741823;
    b2 = { context: a, observedBits: b2, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y$1(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b2) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c2 = a.pending;
    c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
}
function Bg(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  a === null ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (f2 !== null) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f2;
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$2({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a.lanes = g2;
    a.memoizedState = A2;
  }
}
function Eg(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (a !== null)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(y$1(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : m$2({}, b2, c2);
  a.memoizedState = c2;
  a.lanes === 0 && (a.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = Hg(), e2 = Ig(a), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a, f2);
  Jg(a, e2, d2);
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = Hg(), d2 = Ig(a), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a, e2);
  Jg(a, d2, c2);
} };
function Lg(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Ef(a, e2) : Cf);
  b2 = new b2(c2, f2);
  a.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a, b2, c2, d2) {
  a = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = Fg;
  xg(a);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a, f2));
  Cg(a, c2, e2, d2);
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a, b2, f2, c2), e2.state = a.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a, c2, e2, d2), e2.state = a.memoizedState);
  typeof e2.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b2, c2) {
  a = c2.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(y$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$1(147, a));
      var e2 = "" + a;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        a2 === null ? delete b3[e2] : b3[e2] = a2;
      };
      b2._stringRef = e2;
      return b2;
    }
    if (typeof a !== "string")
      throw Error(y$1(284));
    if (!c2._owner)
      throw Error(y$1(290, a));
  }
  return a;
}
function Rg(a, b2) {
  if (a.type !== "textarea")
    throw Error(y$1(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.lastEffect;
      d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Tg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    if (b3 !== null && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a2, b3, c3), d3.return = a2, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Qg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function n2(a2, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function A2(a2, b3, c3) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a2.mode, c3), b3.return = a2, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Qg(a2, null, b3), c3.return = a2, c3;
        case ta:
          return b3 = Wg(b3, a2.mode, c3), b3.return = a2, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a2.mode, c3, null), b3.return = a2, b3;
      Rg(a2, b3);
    }
    return null;
  }
  function p2(a2, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e3 !== null ? null : h2(a2, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a2, b3, c3.props.children, d3, e3) : k2(a2, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return e3 !== null ? null : n2(a2, b3, c3, d3, null);
      Rg(a2, c3);
    }
    return null;
  }
  function C2(a2, b3, c3, d3, e3) {
    if (typeof d3 === "string" || typeof d3 === "number")
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case sa:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a2, d3.props.children, e3, d3.key) : k2(b3, a2, d3, e3);
        case ta:
          return a2 = a2.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a2 = a2.get(c3) || null, n2(b3, a2, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y$1(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y$1(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w3.alternate === null && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    return l3;
  }
  return function(a2, d3, f3, h3) {
    var k3 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k3 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a2, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a2, k3, f3);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                }
                c2(a2, k3);
                break;
              } else
                b2(a2, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Qg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case ta:
          a: {
            for (k3 = f3.key; d3 !== null; ) {
              if (d3.key === k3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Ug(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2);
    if (Pg(f3))
      return x2(a2, d3, f3, h3);
    if (La(f3))
      return w2(a2, d3, f3, h3);
    l3 && Rg(a2, f3);
    if (typeof f3 === "undefined" && !k3)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$1(152, Ra(a2.type) || "Component"));
      }
    return c2(a2, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y$1(174));
  return a;
}
function eh(a, b2) {
  I(ch, b2);
  I(bh, a);
  I(ah, $g);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = mb(b2, a);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a.type);
  b2 !== c2 && (I(bh, a), I(ah, c2));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b2 = a; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  c2.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c2, a.lastEffect = c2) : a.firstEffect = a.lastEffect = c2;
}
function oh(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a.stateNode = b2, true) : false;
    case 6:
      return b2 = a.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a, b2)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c2);
      }
      jh = a;
      kh = rf(b2.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b2 = a.type;
  if (a.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a.memoizedProps))
    for (b2 = kh; b2; )
      mh(a, b2), b2 = rf(b2.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y$1(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (a.nodeType === 8) {
          var c2 = a.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y$1(321));
}
function Bh(a, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$1(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y$1(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a;
  else {
    if (a === null)
      throw Error(y$1(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b2) {
  return typeof b2 === "function" ? b2(a) : b2;
}
function Kh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a ? k2.eagerState : a(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e2);
    h2 === null ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (e2 !== null)
    a = e2 === d2;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$1(350));
}
function Nh(a, b2, c2, d2) {
  var e2 = U;
  if (e2 === null)
    throw Error(y$1(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a2 = f2(b2._source);
    if (!He(g2, a2)) {
      a2 = c2(b2._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w2), e2.mutableReadLanes |= a2 & e2.pendingLanes);
      a2 = e2.mutableReadLanes;
      e2.entangledLanes |= a2;
      for (var d3 = e2.entanglements, h3 = a2; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a2;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a2 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a2(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k2.queue = a, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a, b2, c2);
}
function Qh(a) {
  var b2 = Hh();
  typeof a === "function" && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b2.memoizedState, a];
}
function Rh(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function Sh(a) {
  var b2 = Hh();
  a = { current: a };
  return b2.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function Vh(a, b2, c2, d2) {
  var e2 = Ih();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a, b2) {
  return Uh(516, 4, a, b2);
}
function Xh(a, b2) {
  return Vh(516, 4, a, b2);
}
function Yh(a, b2) {
  return Vh(4, 2, a, b2);
}
function Zh(a, b2) {
  if (typeof b2 === "function")
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function $h(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a), c2);
}
function ai() {
}
function bi(a, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ci(a, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function di(a, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a, b2, c2) {
  var d2 = Hg(), e2 = Ig(a), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a.alternate;
  if (a === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b2) {
  Hh().memoizedState = [a, b2 === void 0 ? null : b2];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a), c2);
}, useLayoutEffect: function(a, b2) {
  return Uh(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Hh();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d2.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Qh(a), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Qh(false), b2 = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b2];
}, useMutableSource: function(a, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a, subscribe: c2 };
  return Nh(d2, a, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b2 = uf(function() {
      a || (a = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$1(355));
    }), c2 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c2("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a);
    } finally {
      wh.transition = b3;
    }
  }, [a]);
  return c2;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b2, c2, d2) {
  b2.child = a === null ? Zg(b2, null, c2, d2) : Yg(b2, a.child, c2, d2);
}
function gi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a, b2, c2, d2, f2, e2);
  if (a !== null && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, d2, e2);
  return b2.child;
}
function ii(a, b2, c2, d2, e2, f2) {
  if (a === null) {
    var g2 = c2.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = g2, ki(a, b2, g2, d2, e2, f2);
    a = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  g2 = a.child;
  if ((e2 & f2) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je, c2(e2, d2) && a.ref === b2.ref))
    return hi(a, b2, f2);
  b2.flags |= 1;
  a = Tg(g2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function ki(a, b2, c2, d2, e2, f2) {
  if (a !== null && Je(a.memoizedProps, d2) && a.ref === b2.ref)
    if (ug = false, (f2 & e2) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a.lanes, hi(a, b2, f2);
  return li(a, b2, c2, d2, f2);
}
function mi(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a !== null ? a.memoizedState : null;
  if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, f2 !== null ? f2.baseLanes : c2);
    else
      return a = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a }, ni(b2, a), null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a, b2, e2, c2);
  return b2.child;
}
function oi(a, b2) {
  var c2 = b2.ref;
  if (a === null && c2 !== null || a !== null && a.ref !== c2)
    b2.flags |= 128;
}
function li(a, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a, b2, c2, d2, f2, e2);
  if (a !== null && !ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -517, a.lanes &= ~e2, hi(a, b2, e2);
  b2.flags |= 1;
  fi(a, b2, c2, e2);
  return b2.child;
}
function pi(a, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (b2.stateNode === null)
    a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (a === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && p2 === a.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a, b2, c2, d2, f2, e2);
}
function qi(a, b2, c2, d2, e2, f2) {
  oi(a, b2);
  var g2 = (b2.flags & 64) !== 0;
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a !== null && g2 ? (b2.child = Yg(b2, a.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? Hf(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a, b2.context, false);
  eh(a, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = (b2.flags & 64) !== 0) || (g2 = a !== null && a.memoizedState === null ? false : (e2 & 2) !== 0);
  g2 ? (f2 = true, b2.flags &= -65) : a !== null && a.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
  I(P, e2 & 1);
  if (a === null) {
    d2.fallback !== void 0 && ph(b2);
    a = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a;
    if (typeof d2.unstable_expectedLoadTime === "number")
      return a = ui(b2, a, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a;
    c2 = vi({ mode: "visible", children: a }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (a.memoizedState !== null) {
    if (f2)
      return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a, b2, c2, d2) {
  var e2 = a.mode, f2 = a.child;
  b2 = { mode: "hidden", children: b2 };
  (e2 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a;
  c2.return = a;
  f2.sibling = c2;
  a.child = f2;
  return c2;
}
function xi(a, b2, c2, d2) {
  var e2 = a.child;
  a = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  (b2.mode & 2) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b2.firstEffect = b2.lastEffect = a);
  return b2.child = c2;
}
function wi(a, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a.child;
  a = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  (f2 & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  a !== null ? d2 = Tg(a, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  c2 !== null && (c2.lanes |= b2);
  sg(a.return, b2);
}
function zi(a, b2, c2, d2, e2, f2) {
  var g2 = a.memoizedState;
  g2 === null ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a, b2, d2.children, c2);
  d2 = P.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b2.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c2);
          else if (a.tag === 19)
            yi(a, c2);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  I(P, d2);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a = c2.alternate, a !== null && ih(a) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a = e2.alternate;
          if (a !== null && ih(a) === null) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a, b2, c2) {
  a !== null && (b2.dependencies = a.dependencies);
  Dg |= b2.lanes;
  if ((c2 & b2.childLanes) !== 0) {
    if (a !== null && b2.child !== a.child)
      throw Error(y$1(153));
    if (b2.child !== null) {
      a = b2.child;
      c2 = Tg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; a.sibling !== null; )
        a = a.sibling, c2 = c2.sibling = Tg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a, e2);
        d2 = eb(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$2({}, e2, { value: void 0 });
        d2 = m$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G("scroll", a), f2 || h2 === k2 || (f2 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a, b2) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a.tail === null ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a === null || a.child === null)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (a !== null && b2.stateNode != null)
        Di(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(y$1(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G("cancel", d2);
              G("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d2);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d2);
              break;
            case "source":
              G("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d2);
              G("load", d2);
              break;
            case "details":
              G("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G("invalid", d2);
          }
          vb(c2, f2);
          a = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], g2 === "children" ? typeof e2 === "string" ? d2.textContent !== e2 && (a = ["children", e2]) : typeof e2 === "number" && d2.textContent !== "" + e2 && (a = ["children", "" + e2]) : ca.hasOwnProperty(g2) && e2 != null && g2 === "onScroll" && G("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = jf);
          }
          d2 = a;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a === kb.html && (a = lb(c2));
          a === kb.html ? c2 === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d2.is === "string" ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), c2 === "select" && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[wf] = b2;
          a[xf] = d2;
          Bi(a, b2, false, false);
          b2.stateNode = a;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G(Xe[e2], a);
              e2 = d2;
              break;
            case "source":
              G("error", a);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e2 = d2;
              break;
            case "details":
              G("toggle", a);
              e2 = d2;
              break;
            case "input":
              Za(a, d2);
              e2 = Ya(a, d2);
              G("invalid", a);
              break;
            case "option":
              e2 = eb(a, d2);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$2({}, d2, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d2);
              e2 = gb(a, d2);
              G("invalid", a);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              f2 === "style" ? tb(a, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a, k2) : typeof k2 === "number" && pb(a, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && G("scroll", a) : k2 != null && qa(a, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a);
              cb(a, d2, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d2.value != null && a.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a.multiple = !!d2.multiple;
              f2 = d2.value;
              f2 != null ? fb(a, !!d2.multiple, f2, false) : d2.defaultValue != null && fb(a, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              typeof e2.onClick === "function" && (a.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a && b2.stateNode != null)
        Ei(a, b2, a.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(y$1(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H(P);
      d2 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a.memoizedState !== null;
      if (d2 && !c2 && (b2.mode & 2) !== 0)
        if (a === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d2 = b2.memoizedState;
      if (d2 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g2 = d2.rendering;
      if (g2 === null)
        if (f2)
          Fi(d2, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b2.child; a !== null; ) {
              g2 = ih(a);
              if (g2 !== null) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d2.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          d2.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a = ih(g2), a !== null) {
            if (b2.flags |= 64, f2 = true, c2 = a.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y$1(156, b2.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b2 = a.flags;
      return b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a.flags;
      if ((b2 & 64) !== 0)
        throw Error(y$1(285));
      a.flags = b2 & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b2 = a.flags, b2 & 4096 ? (a.flags = b2 & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2 };
}
function Ni(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a, b2);
  };
  return c2;
}
function Si(a, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a, b2);
      return d2(e2);
    };
  }
  var f2 = a.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    typeof d2 !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b2 = a.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c2) {
        Wi(a, c2);
      }
    else
      b2.current = null;
}
function Xi(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a !== null) {
        var c2 = a.memoizedProps, d2 = a.memoizedState;
        a = b2.stateNode;
        b2 = a.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$1(163));
}
function Yi(a, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a = b2 = b2.next;
        do {
          if ((a.tag & 3) === 3) {
            var d2 = a.create;
            a.destroy = d2();
          }
          a = a.next;
        } while (a !== b2);
      }
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a = b2 = b2.next;
        do {
          var e2 = a;
          d2 = e2.next;
          e2 = e2.tag;
          (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c2, a), $i(c2, a));
          a = d2;
        } while (a !== b2);
      }
      return;
    case 1:
      a = c2.stateNode;
      c2.flags & 4 && (b2 === null ? a.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a.componentDidUpdate(d2, b2.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b2 = c2.updateQueue;
      b2 !== null && Eg(c2, b2, a);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (b2 !== null) {
        a = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a = c2.child.stateNode;
              break;
            case 1:
              a = c2.child.stateNode;
          }
        Eg(c2, b2, a);
      }
      return;
    case 5:
      a = c2.stateNode;
      b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$1(163));
}
function aj(a, b2) {
  for (var c2 = a; ; ) {
    if (c2.tag === 5) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (c2.tag === 6)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a) && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === a)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b2.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c2 = a = a.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (e2 !== void 0)
            if ((d2 & 4) !== 0)
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a);
      }
      break;
    case 1:
      Vi(b2);
      a = b2.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b2.memoizedProps, a.state = b2.memoizedState, a.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a, b2);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b2 = a.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$1(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$1(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.flags & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a, c2, b2) : hj(a, c2, b2);
}
function gj(a, b2, c2) {
  var d2 = a.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (gj(a, b2, c2), a = a.sibling; a !== null; )
      gj(a, b2, c2), a = a.sibling;
}
function hj(a, b2, c2) {
  var d2 = a.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a = e2 ? a.stateNode : a.stateNode.instance, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (d2 !== 4 && (a = a.child, a !== null))
    for (hj(a, b2, c2), a = a.sibling; a !== null; )
      hj(a, b2, c2), a = a.sibling;
}
function cj(a, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (d2 === null)
            throw Error(y$1(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (c2.tag === 5 || c2.tag === 6) {
      a:
        for (var g2 = a, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (c2.tag === 4) {
      if (c2.child !== null) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a, c2), c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
      c2.tag === 4 && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = c2 !== null ? c2.lastEffect : null;
      if (c2 !== null) {
        var d2 = c2 = c2.next;
        do
          (d2.tag & 3) === 3 && (a = d2.destroy, d2.destroy = void 0, a !== void 0 && a()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (c2 != null) {
        d2 = b2.memoizedProps;
        var e2 = a !== null ? a.memoizedProps : d2;
        a = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c2[xf] = d2;
          a === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
          wb(a, e2);
          b2 = wb(a, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? fb(c2, !!d2.multiple, f2, false) : a !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y$1(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y$1(163));
}
function kj(a) {
  var b2 = a.updateQueue;
  if (b2 !== null) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    c2 === null && (c2 = a.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a, b2) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a = 4186112 & ~a, b2 = a & -a, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$1(185));
  a = Kj(a, b2);
  if (a === null)
    return null;
  $c(a, b2, c2);
  a === U && (Hi |= b2, V === 4 && Ii(a, W));
  var d2 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c2), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c2));
  vj = a;
}
function Kj(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b2, c2 = a.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a, a = a.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Mj(a, b2) {
  for (var c2 = a.callbackNode, d2 = a.suspendedLanes, e2 = a.pingedLanes, f2 = a.expirationTimes, g2 = a.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
        l2 = b2;
        Rc(k2);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a, a === U ? W : 0);
  b2 = F;
  if (d2 === 0)
    c2 !== null && (c2 !== Zf && Pf(c2), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c2 !== null) {
      if (a.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    b2 === 15 ? (c2 = Lj.bind(null, a), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a)));
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  var b2 = a.callbackNode;
  if (Oj() && a.callbackNode !== b2)
    return null;
  var c2 = Uc(a, a === U ? W : 0);
  if (c2 === 0)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a || W !== d2)
    wj(), Qj(a, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  Y !== null ? d2 = 0 : (U = null, W = 0, d2 = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d2 !== 0) {
    d2 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c2 = Wc(a), c2 !== 0 && (d2 = Tj(a, c2)));
    if (d2 === 1)
      throw b2 = sj, Qj(a, 0), Ii(a, c2), Mj(a, O()), b2;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$1(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (Uc(a, 0) !== 0)
            break;
          e2 = a.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e2;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d2);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a.timeoutHandle = of(Uj.bind(null, a), c2);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y$1(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b2 ? Nj.bind(null, a) : null;
}
function Ii(a, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b2 = W;
    var c2 = Tj(a, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a, b2), c2 = Tj(a, b2));
  } else
    b2 = Uc(a, 0), c2 = Tj(a, b2);
  a.tag !== 0 && c2 === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b2 = Wc(a), b2 !== 0 && (c2 = Tj(a, b2)));
  if (c2 === 1)
    throw c2 = sj, Qj(a, 0), Ii(a, b2), Mj(a, O()), c2;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function Xj(a, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function ni(a, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  c2 !== -1 && (a.timeoutHandle = -1, pf(c2));
  if (Y !== null)
    for (c2 = Y.return; c2 !== null; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c2 === null || c2.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && c2 !== null && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a && W === b2 || Qj(a, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (Y !== null)
    throw Error(y$1(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b2 = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b2 === null ? Zj(a) : Y = b2;
  pj.current = null;
}
function Zj(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if ((b2.flags & 2048) === 0) {
      c2 = Gi(c2, b2, qj);
      if (c2 !== null) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
        for (var d2 = 0, e2 = c2.child; e2 !== null; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b2.firstEffect), a.lastEffect = b2.lastEffect), 1 < b2.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b2 : a.firstEffect = b2, a.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (c2 !== null) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b2 = eg();
  gg(99, dk.bind(null, a, b2));
  return null;
}
function dk(a, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  var c2 = a.finishedWork;
  if (c2 === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(y$1(177));
  a.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a.pendingLanes & ~e2;
  a.pendingLanes = e2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e2;
  a.mutableReadLanes &= e2;
  a.entangledLanes &= e2;
  e2 = a.entanglements;
  for (var g2 = a.eventTimes, h2 = a.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d2 & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (d2 !== null) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c2;
    Z = d2;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e2;
  } else
    a.current = c2;
  if (xj)
    xj = false, yj = a, zj = b2;
  else
    for (Z = d2; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d2 = a.pendingLanes;
  d2 === 0 && (Ti = null);
  d2 === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b2) {
  Aj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b2) {
  Bj.push(b2, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y$1(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k2) {
        if (f2 === null)
          throw Error(y$1(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (f2 === null)
        throw Error(y$1(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a.current.firstEffect; h2 !== null; )
    a = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a;
  X = b2;
  ig();
  return true;
}
function gk(a, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a, b2, 1);
  Ag(a, b2);
  b2 = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b2), Mj(a, b2));
}
function Wi(a, b2) {
  if (a.tag === 3)
    gk(a, a, b2);
  else
    for (var c2 = a.return; c2 !== null; ) {
      if (c2.tag === 3) {
        gk(c2, a, b2);
        break;
      } else if (c2.tag === 1) {
        var d2 = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
          a = Mi(b2, a);
          var e2 = Si(c2, a, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (c2 !== null)
            $c(c2, 1, e2), Mj(c2, e2);
          else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a, b2, c2) {
  var d2 = a.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Hg();
  a.pingedLanes |= a.suspendedLanes & c2;
  U === a && (W & c2) === c2 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c2);
  Mj(a, b2);
}
function lj(a, b2) {
  var c2 = a.stateNode;
  c2 !== null && c2.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c2 = Hg();
  a = Kj(a, b2);
  a !== null && ($c(a, b2, c2), Mj(a, c2));
}
var ck;
ck = function(a, b2, c2) {
  var d2 = b2.lanes;
  if (a !== null)
    if (a.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c2 & d2) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c2 & b2.child.childLanes) !== 0)
              return ti(a, b2, c2);
            I(P, P.current & 1);
            b2 = hi(a, b2, c2);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d2 = (c2 & b2.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d2)
              return Ai(a, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a, b2, c2);
      }
      return hi(a, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
      a = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a, e2, c2);
      b2.flags |= 1;
      if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b2, d2, g2, a);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
        a = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a = lg(e2, a);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a), d2, c2);
            break a;
        }
        throw Error(y$1(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (a === null || d2 === null)
        throw Error(y$1(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = e2 !== null ? e2.element : null;
      yg(a, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a = e2.mutableSourceEagerHydrationData;
          if (a != null)
            for (e2 = 0; e2 < a.length; e2 += 2)
              f2 = a[e2], f2._workInProgressVersionPrimary = a[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a === null && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : f2 !== null && nf(d2, f2) && (b2.flags |= 16), oi(a, b2), fi(a, b2, g2, c2), b2.child;
    case 6:
      return a === null && ph(b2), null;
    case 13:
      return ti(a, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a === null ? b2.child = Yg(b2, null, d2, c2) : fi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a, b2, d2, e2, c2);
    case 7:
      return fi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return fi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k2 = h2.dependencies;
              if (k2 !== null) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d2 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(e2, f2.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, fi(a, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a, b2, e2, f2, d2, c2);
    case 15:
      return ki(a, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), a !== null && (a.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a = true, Jf(b2)) : a = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a, c2);
    case 19:
      return Ai(a, b2, c2);
    case 23:
      return mi(a, b2, c2);
    case 24:
      return mi(a, b2, c2);
  }
  throw Error(y$1(156, b2.tag));
};
function ik(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b2, c2, d2) {
  return new ik(a, b2, c2, d2);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b2) {
  var c2 = a.alternate;
  c2 === null ? (c2 = nh(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Vg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if (typeof a === "function")
    ji(a) && (g2 = 1);
  else if (typeof a === "string")
    g2 = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a = nh(12, c2, b2, e2 | 8), a.elementType = xa, a.type = xa, a.lanes = f2, a;
        case Ba:
          return a = nh(13, c2, b2, e2), a.type = Ba, a.elementType = Ba, a.lanes = f2, a;
        case Ca:
          return a = nh(19, c2, b2, e2), a.elementType = Ca, a.lanes = f2, a;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a = nh(24, c2, b2, e2), a.elementType = Ja, a.lanes = f2, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$1(130, a == null ? a : typeof a, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a, b2, c2, d2) {
  a = nh(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function vi(a, b2, c2, d2) {
  a = nh(23, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  return a;
}
function Ug(a, b2, c2) {
  a = nh(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Wg(a, b2, c2) {
  b2 = nh(4, a.children !== null ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function jk(a, b2, c2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function lk(a, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || c2.tag !== 1)
          throw Error(y$1(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y$1(171));
      }
      if (c2.tag === 1) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b2) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c2 = a.retryLane;
    a.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function ok(a, b2) {
  nk(a, b2);
  (a = a.alternate) && nk(a, b2);
}
function pk() {
  return null;
}
function qk(a, b2, c2) {
  var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a, b2, c2 != null && c2.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a[ff] = c2.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d2)
    for (a = 0; a < d2.length; a++) {
      b2 = d2[a];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b2 = a.containerInfo;
  lk(null, a, null, function() {
    b2[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b2) {
  b2 || (b2 = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a.lastChild; )
      a.removeChild(c2);
  return new qk(a, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        h2.call(a2);
      };
    }
    lk(b2, g2, a, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var k2 = e2;
      e2 = function() {
        var a2 = mk(g2);
        k2.call(a2);
      };
    }
    Xj(function() {
      lk(b2, g2, a, e2);
    });
  }
  return mk(g2);
}
ec = function(a) {
  if (a.tag === 13) {
    var b2 = Hg();
    Jg(a, 4, b2);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b2 = Hg();
    Jg(a, 67108864, b2);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b2 = Hg(), c2 = Ig(a);
    Jg(a, c2, b2);
    ok(a, c2);
  }
};
hc = function(a, b2) {
  return b2();
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      ab(a, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$1(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
};
function uk(a, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$1(200));
  return kk(a, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b2 = a._reactInternals;
  if (b2 === void 0) {
    if (typeof a.render === "function")
      throw Error(y$1(188));
    throw Error(y$1(268, Object.keys(a)));
  }
  a = cc(b2);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b2) {
  var c2 = X;
  if ((c2 & 48) !== 0)
    return a(b2);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a, b2, true, c2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y$1(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b2) {
  return uk(a, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$1(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y$1(38));
  return tk(a, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
let wasm;
const cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
let cachedUint8Memory0;
function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
let WASM_VECTOR_LEN = 0;
const cachedTextEncoder = new TextEncoder("utf-8");
const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code2 = arg.charCodeAt(offset);
    if (code2 > 127)
      break;
    mem[ptr + offset] = code2;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
let cachedInt32Memory0;
function getInt32Memory0() {
  if (cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
class Action {
  static __wrap(ptr) {
    const obj = Object.create(Action.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_action_free(ptr);
  }
  constructor(position2, action, char2) {
    const ptr0 = passStringToWasm0(action, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(char2, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.action_new(position2, ptr0, len0, ptr1, len1);
    return Action.__wrap(ret);
  }
}
class Document {
  static __wrap(ptr) {
    const obj = Object.create(Document.prototype);
    obj.ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_document_free(ptr);
  }
  constructor(client_id) {
    const ret = wasm.document_new(client_id);
    return Document.__wrap(ret);
  }
  add_action(action) {
    _assertClass(action, Action);
    var ptr0 = action.ptr;
    action.ptr = 0;
    wasm.document_add_action(this.ptr, ptr0);
  }
  content() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.document_content(retptr, this.ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  }
  merge(other) {
    _assertClass(other, Document);
    wasm.document_merge(this.ptr, other.ptr);
  }
}
async function load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e2) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e2);
        } else {
          throw e2;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module };
    } else {
      return instance;
    }
  }
}
function getImports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  return imports;
}
function finalizeInit(instance, module) {
  wasm = instance.exports;
  init.__wbindgen_wasm_module = module;
  cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  new Uint32Array(wasm.memory.buffer);
  cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  return wasm;
}
async function init(input) {
  if (typeof input === "undefined") {
    input = new URL("data:application/wasm;base64,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KAIAEAYLIAJBKGoQGgwCC0GAgMAAQZiDwAAQOwALIAJB4AFqIAJB4ABqKQMANwMAIAJB2AFqIAJB2ABqKQMANwMAIAJB0AFqIAJB0ABqKQMANwMAIAJByAFqIAJByABqKQMANwMAIAJBwAFqIAJBQGspAwA3AwAgAkG4AWogAkE4aikDADcDACACQbABaiACQTBqKQMANwMAIAIgAikDKDcDqAEgAiABNgLsASACIAY2AugBIARBuH9qIQkgECAPIAJB6AFqEA8iDUIZiCIQQv8Ag0KBgoSIkKDAgAF+IREgAigC7AEhByACKALoASEIQQAhASAAIA2nIgpxIgYhAwJAA0AgAyAEaikAACIPIBGFIg1Cf4UgDUL//fv379+//358g0KAgYKEiJCgwIB/gyENA0AgDVAEQCAPIA9CAYaDQoCBgoSIkKDAgH+DUEUNAyADIAFBCGoiAWogAHEhAwwCCyANeiESIA1Cf3wgDYMiDiENIAlBACASp0EDdiADaiAAcWsiC0HIAGxqIgwoAgAgCEcNACAOIQ0gDEEEaigCACAHRw0ACwsgAkGgAWogBCALQcgAbGoiAEF4aiIBKQMANwMAIAJBmAFqIABBcGoiBSkDADcDACACQZABaiAAQWhqIgQpAwA3AwAgAkGIAWogAEFgaiIDKQMANwMAIAJBgAFqIABBWGoiBikDADcDACACQfgAaiAAQVBqIgcpAwA3AwAgAkHwAGogAEFIaiIIKQMANwMAIABBQGoiACkDACENIAAgAikDqAE3AwAgCCACQbABaikDADcDACAHIAJBuAFqKQMANwMAIAYgAkHAAWopAwA3AwAgAyACQcgBaikDADcDACAEIAJB0AFqKQMANwMAIAUgAkHYAWopAwA3AwAgASACQeABaikDADcDACACIA03A2ggAi0ApAFBAkYNASACKAKcAQRAIAIoApgBEAYLIAJB6ABqEBoMAQsgBCAGaikAAEKAgYKEiJCgwIB/gyINUARAQQghAQNAIAEgBmohAyABQQhqIQEgBCAAIANxIgZqKQAAQoCBgoSIkKDAgH+DIg1QDQALCwJAIAUoAhggBCANeqdBA3YgBmogAHEiAWosAAAiA0F/SgR/IAQgBCkDAEKAgYKEiJCgwIB/g3qnQQN2IgFqLQAABSADC0EBcSIGRXINACACIAVBEGogBRAD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DAELIAJBCGoQU0HQjMAAQgE3AwBB4IzAACACKQMQIgM3AwAgAikDCAshBCAAQQA2AhAgACADNwMIIAAgBDcDACAAQgQ3A0ggACABNgJEIABBADYCQCAAQRhqQgA3AwAgAEEUakHIgcAANgIAQdiMwAAgBEIBfDcDACAAQSBqQgA3AwAgAEEoakIANwMAIABBNGpCADcCACAAQTBqQQE2AgAgAEE8akEAOgAAIABB0ABqQQA2AgAgAkEwaiQADwsgAkEsakEANgIAIAJBgIDAADYCKCACQgE3AhwgAkHwgcAANgIYIAJBGGpBlILAABBBAAvXAQEDfyMAQcABayIBJAACQCAABEAgACgCAA0BIABBADYCACABQeAAaiAAQeAA/AoAACABQQhqIAFB6ABqQdgA/AoAACAAEAYgAUE8aigCAARAIAFBOGooAgAQBgsgAUEIahAZIAEoAlAhAiABQdgAaigCACIABEAgAEEFdCEDIAJBGGohAANAIAAoAgAEQCAAQXxqKAIAEAYLIABBIGohACADQWBqIgMNAAsLIAFB1ABqKAIAIgBFIABBBXRFckUEQCACEAYLIAFBwAFqJAAPCxBdAAsQXgAL0QEBBX8jAEEgayICJAACQCABQQFqIgMgAUkNAEEEIQQgAEEEaigCACIFQQF0IgEgAyABIANLGyIBQQQgAUEESxsiAUH///8/cSABRkECdCEDIAFBBXQhBgJAIAVFBEBBACEEDAELIAIgBUEFdDYCFCACIAAoAgA2AhALIAIgBDYCGCACIAYgAyACQRBqECkgAigCAARAIAJBCGooAgAiAEUNASACKAIEIAAQYwALIAIoAgQhAyAAQQRqIAE2AgAgACADNgIAIAJBIGokAA8LEEAAC9IBAQV/IwBBIGsiAiQAAkAgAUEBaiIDIAFJDQBBBCEEIABBBGooAgAiBUEBdCIBIAMgASADSxsiAUEEIAFBBEsbIgFB/////wNxIAFGQQJ0IQMgAUECdCEGAkAgBUUEQEEAIQQMAQsgAiAFQQJ0NgIUIAIgACgCADYCEAsgAiAENgIYIAIgBiADIAJBEGoQKSACKAIABEAgAkEIaigCACIARQ0BIAIoAgQgABBjAAsgAigCBCEDIABBBGogATYCACAAIAM2AgAgAkEgaiQADwsQQAAL0gEBBX8jAEEgayICJAACQCAB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CyAAQQA2AgAgACAFKQMANwIEIABBDGogBUEIaikDADcCACAAQRRqIAVBEGopAwA3AgAgAEEcaiAFQRhqKAIANgIAIAVBQGskACAAC44BAQJ/AkACfwJAAkACQAJ/QQEiAyABQQBIDQAaIAIoAghFDQIgAigCBCIEDQEgAQ0DQQEMBAshA0EAIQEMBAsgAigCACAEQQEgARBNDAILIAENAEEBDAELIAFBARBQCyICBEAgACACNgIEQQAhAwwBCyAAIAE2AgRBASEBCyAAIAM2AgAgAEEIaiABNgIAC54BAQJ/IwBBEGsiAyQAIABBFGooAgAhBAJAAn8CQAJAIABBBGooAgAOAgABAwsgBA0CQQAhAEHohMAADAELIAQNASAAKAIAIgQoAgQhACAEKAIACyEEIAMgADYCBCADIAQ2AgAgA0HghsAAIAEoAgggAiABLQAQECMACyADQQA2AgQgAyAANgIAIANBzIbAACABKAIIIAIgAS0AEBAjAAt1AQN/IAAgABBqIgBBCBBMIABrIgIQaCEAQfyPwAAgASACayIBNgIAQYSQwAAgADYCACAAIAFBAXI2AgRBCEEIEEwhAkEUQQgQTCEDQRBBCBBMIQQgACABEGggBCADIAJBCGtqajYCBEGgkMAAQYCAgAE2AgALbwEBfyMAQTBrIgIkACACIAE2AgQgAiAANgIAIAJBHGpBAjYCACACQSxqQQE2AgAgAkICNwIMIAJB9IvAADYCCCACQQE2AiQgAiACQSBqNgIYIAIgAkEEajYCKCACIAI2AiAgAkEIakGEjMAAEEEAC28BAX8jAEEwayICJAAgAiABNgIEIAIgADYCACACQRxqQQI2AgAgAkEsakEBNgIAIAJCAjcCDCACQbCLwAA2AgggAkEBNgIkIAIgAkEgajYCGCACIAJBBGo2AiggAiACNgIgIAJBCGpBwIvAABBBAAtsAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EcakECNgIAIANBLGpBATYCACADQgI3AgwgA0H0iMAANgIIIANBATYCJCADIANBIGo2AhggAyADNgIoIAMgA0EEajYCICADQQhqIAIQQQALTwEEfwJAIAAEQCAAKAIADQEgAEEANgIAIAAoAgghASAAKAIMIAAoAhQhAyAAKAIYIQQgABAGBEAgARAGCyAEBEAgAxAG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YWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkCgAAkwIQABUAAACoAhAADgAAAGxpYnJhcnkvc3RkL3NyYy9hbGxvYy5yc8gCEAAYAAAARAEAAAkAAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJz8AIQABwAAABGAgAAHwAAAPACEAAcAAAARwIAAB4AAAAHAAAADAAAAAQAAAAIAAAAAwAAAAgAAAAEAAAACQAAAAoAAAAQAAAABAAAAAsAAAAMAAAAAwAAAAgAAAAEAAAADQAAAA4AAABIYXNoIHRhYmxlIGNhcGFjaXR5IG92ZXJmbG93dAMQABwAAAAvY2FyZ28vcmVnaXN0cnkvc3JjL2dpdGh1Yi5jb20tMWVjYzYyOTlkYjllYzgyMy9oYXNoYnJvd24tMC4xMi4wL3NyYy9yYXcvbW9kLnJzAJgDEABPAAAAYAAAACgAAABsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzY2FwYWNpdHkgb3ZlcmZsb3cAAAAUBBAAEQAAAPgDEAAcAAAABQIAAAUAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAQAQQACAAAABgBBAAEgAAABAAAAAAAAAAAQAAABEAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OSBvdXQgb2YgcmFuZ2UgZm9yIHNsaWNlIG9mIGxlbmd0aCBsaWJyYXJ5L2NvcmUvc3JjL3NsaWNlL2luZGV4LnJzcmFuZ2UgZW5kIGluZGV4IAAAAJ0FEAAQAAAAXAUQACIAAAB+BRAAHwAAAEkAAAAFAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAA0AUQABYAAADmBRAADQAAAH4FEAAfAAAAXAAAAAUAewlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNjIuMCAoYTgzMTRlZjdkIDIwMjItMDYtMjcpBndhbHJ1cwYwLjE5LjAMd2FzbS1iaW5kZ2VuEjAuMi44MSAoMDYyYWE1ZjcwKQA4D3RhcmdldF9mZWF0dXJlcwMrB2F0b21pY3MrC2J1bGstbWVtb3J5Kw9tdXRhYmxlLWdsb2JhbHM=", self.location);
  }
  const imports = getImports();
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  const { instance, module } = await load(await input, imports);
  return finalizeInit(instance, module);
}
function sheetForTag(tag2) {
  if (tag2.sheet) {
    return tag2.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag2) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag2 = document.createElement("style");
  tag2.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag2.setAttribute("nonce", options.nonce);
  }
  tag2.appendChild(document.createTextNode(""));
  tag2.setAttribute("data-s", "");
  return tag2;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag2) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag2, before);
      _this.tags.push(tag2);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag2 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag2);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag2.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag2) {
      return tag2.parentNode && tag2.parentNode.removeChild(tag2);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position$1 = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root2, props) {
  return assign(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position$1 > 0 ? charat(characters, --position$1) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position$1 < length ? charat(characters, position$1++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position$1);
}
function caret() {
  return position$1;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position$1 = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position$1 - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position$1;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position$1;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position$1 - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position$1);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && characters2.charCodeAt(length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size2 = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size2; ++x2)
      if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root2, parent) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root2, parent, length2) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
function memoize$1(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position$1);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position$1 - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k2++) {
      element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container2;
  var nodesToHydrate = [];
  {
    container2 = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node2) {
      var attrib = node2.getAttribute("data-emotion").split(" ");
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node2);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector2, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector2 ? selector2 + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container: container2,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
function _extends$a() {
  _extends$a = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$a.apply(this, arguments);
}
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f$1 = b ? Symbol.for("react.strict_mode") : 60108, g$1 = b ? Symbol.for("react.profiler") : 60114, h$1 = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m$1 = b ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b ? Symbol.for("react.forward_ref") : 60112, p$1 = b ? Symbol.for("react.suspense") : 60113, q$1 = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t$1 = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m$1:
          case e:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n$1:
              case t$1:
              case r:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m$1;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m$1;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h$1;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n$1;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t$1;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f$1;
reactIs_production_min.Suspense = p$1;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h$1;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n$1;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t$1;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g$1;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f$1;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p$1;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || typeof a === "object" && a !== null && (a.$$typeof === t$1 || a.$$typeof === r || a.$$typeof === h$1 || a.$$typeof === k || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser$1 = true;
function getRegisteredStyles(registered, registeredStyles, classNames2) {
  var rawClassName = "";
  classNames2.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;
  if ((isStringTag === false || isBrowser$1 === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= k2 >>> 24;
    h2 = (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles2 += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var EmotionCacheContext = /* @__PURE__ */ react.exports.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
  key: "css"
}) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
    var cache = react.exports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ react.exports.createContext({});
var getTheme = function getTheme2(outerTheme, theme2) {
  if (typeof theme2 === "function") {
    var mergedTheme = theme2(outerTheme);
    return mergedTheme;
  }
  return _extends$a({}, outerTheme, theme2);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme2) {
    return getTheme(outerTheme, theme2);
  });
});
var ThemeProvider$1 = function ThemeProvider2(props) {
  var theme2 = react.exports.useContext(ThemeContext);
  if (props.theme !== theme2) {
    theme2 = createCacheWithTheme(theme2)(props.theme);
  }
  return /* @__PURE__ */ react.exports.createElement(ThemeContext.Provider, {
    value: theme2
  }, props.children);
};
React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : function useInsertionEffect2(create) {
  create();
};
var useInsertionEffect$1 = React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : react.exports.useLayoutEffect;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, react.exports.useContext(ThemeContext));
  var sheetRef = react.exports.useRef();
  useInsertionEffect$1(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect$1(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css$1.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var CSSReset = function CSSReset2() {
  return /* @__PURE__ */ react.exports.createElement(Global, {
    styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `
  });
};
var CSSReset$1 = CSSReset;
var lodash_mergewith = { exports: {} };
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  function baseTimes(n2, iteratee) {
    var index = -1, result = Array(n2);
    while (++index < n2) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  function overArg(func, transform10) {
    return function(arg) {
      return func(transform10(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root2["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString = objectProto.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Buffer = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array2 = root2.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root2, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length2) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size2 = data.size;
    data.set(key, value);
    this.size += data.size == size2 ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack2(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack2.prototype.clear = stackClear;
  Stack2.prototype["delete"] = stackDelete;
  Stack2.prototype.get = stackGet;
  Stack2.prototype.has = stackHas;
  Stack2.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length2)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
  function assocIndexOf(array, key) {
    var length2 = array.length;
    while (length2--) {
      if (eq(array[length2][0], key)) {
        return length2;
      }
    }
    return -1;
  }
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  function baseKeysIn(object) {
    if (!isObject2(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack2());
      if (isObject2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction2(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length2 = source.length;
    array || (array = Array(length2));
    while (++index < length2) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length2 = props.length;
    while (++index < length2) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length2 < 3 ? void 0 : customizer;
        length2 = 1;
      }
      object = Object(object);
      while (++index < length2) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length2 = props.length;
      while (length2--) {
        var key = props[fromRight ? length2 : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag), tag2 = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag2;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function isIndex(value, length2) {
    var type = typeof value;
    length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
    return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  function isIterateeCall(value, index, object) {
    if (!isObject2(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
      return eq(object[index], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  function overRest(func, start, transform10) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length2 = nativeMax(args.length - start, 0), array = Array(length2);
      while (++index < length2) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform10(array);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction2(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction2(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag2 = baseGetTag(value);
    return tag2 == funcTag || tag2 == genTag || tag2 == asyncTag || tag2 == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var mergeWith2 = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = mergeWith2;
})(lodash_mergewith, lodash_mergewith.exports);
var mergeWith = lodash_mergewith.exports;
function getLastItem(array) {
  var length2 = array == null ? 0 : array.length;
  return length2 ? array[length2 - 1] : void 0;
}
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isNull(value) {
  return value == null;
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var __DEV__ = false;
function omit(object, keys2) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    if (keys2.includes(key))
      return;
    result[key] = object[key];
  });
  return result;
}
function pick(object, keys2) {
  var result = {};
  keys2.forEach(function(key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}
function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = function memoize2(fn) {
  var cache = /* @__PURE__ */ new WeakMap();
  var memoizedFn = function memoizedFn2(obj, path, fallback, index) {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    var map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach(function(key) {
    var value = object[key];
    var shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = function filterUndefined2(object) {
  return objectFilter(object, function(val) {
    return val !== null && val !== void 0;
  });
};
var objectKeys = function objectKeys2(obj) {
  return Object.keys(obj);
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(carry, _ref) {
    var key = _ref[0], value = _ref[1];
    carry[key] = value;
    return carry;
  }, {});
};
function analyzeCSSValue$1(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}
function px(value) {
  if (value == null)
    return value;
  var _analyzeCSSValue = analyzeCSSValue$1(value), unitless = _analyzeCSSValue.unitless;
  return unitless || isNumber(value) ? value + "px" : value;
}
var sortByBreakpointValue = function sortByBreakpointValue2(a, b2) {
  return parseInt(a[1], 10) > parseInt(b2[1], 10) ? 1 : -1;
};
var sortBps = function sortBps2(breakpoints2) {
  return fromEntries(Object.entries(breakpoints2).sort(sortByBreakpointValue));
};
function normalize(breakpoints2) {
  var sorted = sortBps(breakpoints2);
  return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints2) {
  var value = Object.keys(sortBps(breakpoints2));
  return new Set(value);
}
function subtract(value) {
  var _px;
  if (!value)
    return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, function(m2) {
    return "" + (parseFloat(m2) + factor);
  });
}
function queryString(min, max) {
  var query = ["@media screen"];
  if (min)
    query.push("and", "(min-width: " + px(min) + ")");
  if (max)
    query.push("and", "(max-width: " + px(max) + ")");
  return query.join(" ");
}
function analyzeBreakpoints(breakpoints2) {
  var _breakpoints$base;
  if (!breakpoints2)
    return null;
  breakpoints2.base = (_breakpoints$base = breakpoints2.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints2);
  var queries2 = Object.entries(breakpoints2).sort(sortByBreakpointValue).map(function(_ref, index, entry) {
    var _entry;
    var breakpoint = _ref[0], minW = _ref[1];
    var _ref2 = (_entry = entry[index + 1]) != null ? _entry : [], maxW = _ref2[1];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : void 0;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });
  var _keys = keys(breakpoints2);
  var _keysArr = Array.from(_keys.values());
  return {
    keys: _keys,
    normalized,
    isResponsive: function isResponsive(test) {
      var keys2 = Object.keys(test);
      return keys2.length > 0 && keys2.every(function(key) {
        return _keys.has(key);
      });
    },
    asObject: sortBps(breakpoints2),
    asArray: normalize(breakpoints2),
    details: queries2,
    media: [null].concat(normalized.map(function(minW) {
      return queryString(minW);
    }).slice(1)),
    toArrayValue: function toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }
      var result = _keysArr.map(function(bp) {
        var _test$bp;
        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });
      while (getLastItem(result) === null) {
        result.pop();
      }
      return result;
    },
    toObjectValue: function toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }
      return test.reduce(function(acc, value, index) {
        var key = _keysArr[index];
        if (key != null && value != null)
          acc[key] = value;
        return acc;
      }, {});
    }
  };
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
var dataAttr = function dataAttr2(condition) {
  return condition ? "" : void 0;
};
var ariaAttr = function ariaAttr2(condition) {
  return condition ? true : void 0;
};
var cx = function cx2() {
  for (var _len = arguments.length, classNames2 = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames2[_key] = arguments[_key];
  }
  return classNames2.filter(Boolean).join(" ");
};
function runIfFn(valueOrFn) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return isFunction(valueOrFn) ? valueOrFn.apply(void 0, args) : valueOrFn;
}
function callAllHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function func(event) {
    fns.some(function(fn) {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function once(fn) {
  var result;
  return function func() {
    if (fn) {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  };
}
var noop$1 = function noop2() {
};
var warn = once(function(options) {
  return function() {
    var condition = options.condition, message = options.message;
    if (condition && __DEV__) {
      console.warn(message);
    }
  };
});
function flatten(target, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = Infinity;
  }
  if (!isObject(target) && !Array.isArray(target) || !maxDepth) {
    return target;
  }
  return Object.entries(target).reduce(function(result, _ref) {
    var key = _ref[0], value = _ref[1];
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth - 1)).forEach(function(_ref2) {
        var childKey = _ref2[0], childValue = _ref2[1];
        result[key + "." + childKey] = childValue;
      });
    } else {
      result[key] = value;
    }
    return result;
  }, {});
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function mapResponsive(prop2, mapper) {
  if (isArray(prop2)) {
    return prop2.map(function(item) {
      if (item === null) {
        return null;
      }
      return mapper(item);
    });
  }
  if (isObject(prop2)) {
    return objectKeys(prop2).reduce(function(result, key) {
      result[key] = mapper(prop2[key]);
      return result;
    }, {});
  }
  if (prop2 != null) {
    return mapper(prop2);
  }
  return null;
}
function createContext(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$strict = _options.strict, strict = _options$strict === void 0 ? true : _options$strict, _options$errorMessage = _options.errorMessage, errorMessage = _options$errorMessage === void 0 ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider" : _options$errorMessage, name = _options.name;
  var Context = /* @__PURE__ */ react.exports.createContext(void 0);
  Context.displayName = name;
  function useContext() {
    var context = react.exports.useContext(Context);
    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext, Context];
}
function getValidChildren(children) {
  return react.exports.Children.toArray(children).filter(function(child) {
    return /* @__PURE__ */ react.exports.isValidElement(child);
  });
}
var defaultIdContext = {
  current: 1
};
var IdContext = /* @__PURE__ */ react.exports.createContext(defaultIdContext);
var IdProvider = /* @__PURE__ */ react.exports.memo(function(_ref) {
  var children = _ref.children;
  return /* @__PURE__ */ react.exports.createElement(IdContext.Provider, {
    value: {
      current: 1
    }
  }, children);
});
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error("Cannot assign value '" + value + "' to ref '" + ref + "'");
  }
}
function useMergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return react.exports.useMemo(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node2) {
      refs.forEach(function(ref) {
        if (ref)
          assignRef(ref, node2);
      });
    };
  }, refs);
}
var _createContext$1$1 = createContext({
  strict: false,
  name: "PortalManagerContext"
}), PortalManagerContextProvider = _createContext$1$1[0];
function PortalManager(props) {
  var children = props.children, zIndex = props.zIndex;
  return /* @__PURE__ */ react.exports.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}
createContext({
  strict: false,
  name: "PortalContext"
});
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c2, a, k2) {
  var b2, d2 = {}, e2 = null, l2 = null;
  k2 !== void 0 && (e2 = "" + k2);
  a.key !== void 0 && (e2 = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b2 in a)
    n.call(a, b2) && !p.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      d2[b2] === void 0 && (d2[b2] = a[b2]);
  return { $$typeof: g, type: c2, key: e2, ref: l2, props: d2, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
var doc = {
  body: {
    classList: {
      add: function add() {
      },
      remove: function remove() {
      }
    }
  },
  addEventListener: function addEventListener() {
  },
  removeEventListener: function removeEventListener() {
  },
  activeElement: {
    blur: function blur2() {
    },
    nodeName: ""
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {
      }
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {
      },
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  }
};
var ssrDocument = doc;
var noop = function noop3() {
};
var win = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop,
  removeEventListener: noop,
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia: function matchMedia() {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop
    };
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id2) {
    if (typeof setTimeout === "undefined")
      return;
    clearTimeout(id2);
  },
  setTimeout: function setTimeout2() {
    return 0;
  },
  clearTimeout: noop,
  setInterval: function setInterval() {
    return 0;
  },
  clearInterval: noop
};
var ssrWindow = win;
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /* @__PURE__ */ react.exports.createContext(defaultEnv);
function useEnvironment() {
  return react.exports.useContext(EnvironmentContext);
}
function EnvironmentProvider(props) {
  var children = props.children, environmentProp = props.environment;
  var _useState = react.exports.useState(null), node2 = _useState[0], setNode = _useState[1];
  var context = react.exports.useMemo(function() {
    var _ref;
    var doc3 = node2 == null ? void 0 : node2.ownerDocument;
    var win2 = node2 == null ? void 0 : node2.ownerDocument.defaultView;
    var nodeEnv = doc3 ? {
      document: doc3,
      window: win2
    } : void 0;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node2, environmentProp]);
  var showEnvGetter = !node2 && !environmentProp;
  return /* @__PURE__ */ jsxs(EnvironmentContext.Provider, {
    value: context,
    children: [children, showEnvGetter && /* @__PURE__ */ jsx("span", {
      ref: function ref(el) {
        if (el)
          setNode(el);
      }
    })]
  });
}
var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
var mockBody = {
  classList: {
    add: noop$1,
    remove: noop$1
  }
};
var getBody = function getBody2(document2) {
  return isBrowser ? document2.body : mockBody;
};
function syncBodyClassName(isDark3, document2) {
  var body = getBody(document2);
  body.classList.add(isDark3 ? classNames.dark : classNames.light);
  body.classList.remove(isDark3 ? classNames.light : classNames.dark);
}
function getMediaQuery(query) {
  var mediaQueryList = window.matchMedia == null ? void 0 : window.matchMedia(query);
  if (!mediaQueryList) {
    return void 0;
  }
  return !!mediaQueryList.media === mediaQueryList.matches;
}
var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
function getColorScheme(fallback) {
  var _getMediaQuery;
  var isDark3 = (_getMediaQuery = getMediaQuery(queries.dark)) != null ? _getMediaQuery : fallback === "dark";
  return isDark3 ? "dark" : "light";
}
function addListener(fn) {
  if (!("matchMedia" in window)) {
    return noop$1;
  }
  var mediaQueryList = window.matchMedia(queries.dark);
  var listener = function listener2() {
    fn(mediaQueryList.matches ? "dark" : "light", true);
  };
  mediaQueryList.addEventListener("change", listener);
  return function() {
    mediaQueryList.removeEventListener("change", listener);
  };
}
var root = {
  get: function get2() {
    return document.documentElement.style.getPropertyValue("--chakra-ui-color-mode") || document.documentElement.dataset.theme;
  },
  set: function set(mode2) {
    if (isBrowser) {
      document.documentElement.style.setProperty("--chakra-ui-color-mode", mode2);
      document.documentElement.setAttribute("data-theme", mode2);
    }
  }
};
var hasSupport = function hasSupport2() {
  return typeof Storage !== "undefined";
};
var storageKey = "chakra-ui-color-mode";
var localStorageManager = {
  get: function get3(init2) {
    if (!hasSupport())
      return init2;
    try {
      var _value = localStorage.getItem(storageKey);
      return _value != null ? _value : init2;
    } catch (error) {
      return init2;
    }
  },
  set: function set2(value) {
    if (!hasSupport())
      return;
    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
    }
  },
  type: "localStorage"
};
var ColorModeContext = /* @__PURE__ */ react.exports.createContext({});
var useColorMode = function useColorMode2() {
  var context = react.exports.useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};
function ColorModeProvider(props) {
  var value = props.value, children = props.children, _props$options = props.options, useSystemColorMode = _props$options.useSystemColorMode, initialColorMode = _props$options.initialColorMode, _props$colorModeManag = props.colorModeManager, colorModeManager = _props$colorModeManag === void 0 ? localStorageManager : _props$colorModeManag;
  var defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
  var _React$useState = react.exports.useState(colorModeManager.type === "cookie" ? colorModeManager.get(defaultColorMode) : defaultColorMode), colorMode = _React$useState[0], rawSetColorMode = _React$useState[1];
  var _useEnvironment = useEnvironment(), document2 = _useEnvironment.document;
  react.exports.useEffect(function() {
    if (isBrowser && colorModeManager.type === "localStorage") {
      var systemColorWithFallback = getColorScheme(defaultColorMode);
      if (useSystemColorMode) {
        return rawSetColorMode(systemColorWithFallback);
      }
      var rootGet = root.get();
      var colorManagerGet = colorModeManager.get();
      if (rootGet) {
        return rawSetColorMode(rootGet);
      }
      if (colorManagerGet) {
        return rawSetColorMode(colorManagerGet);
      }
      if (initialColorMode === "system") {
        return rawSetColorMode(systemColorWithFallback);
      }
      return rawSetColorMode(defaultColorMode);
    }
  }, [colorModeManager, useSystemColorMode, defaultColorMode, initialColorMode]);
  react.exports.useEffect(function() {
    var isDark3 = colorMode === "dark";
    syncBodyClassName(isDark3, document2);
    root.set(isDark3 ? "dark" : "light");
  }, [colorMode, document2]);
  var setColorMode = react.exports.useCallback(function(value2, isListenerEvent) {
    if (isListenerEvent === void 0) {
      isListenerEvent = false;
    }
    if (!isListenerEvent) {
      colorModeManager.set(value2);
    } else if (colorModeManager.get() && !useSystemColorMode)
      return;
    rawSetColorMode(value2);
  }, [colorModeManager, useSystemColorMode]);
  var toggleColorMode = react.exports.useCallback(function() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  react.exports.useEffect(function() {
    var shouldUseSystemListener = useSystemColorMode || initialColorMode === "system";
    var removeListener;
    if (shouldUseSystemListener) {
      removeListener = addListener(setColorMode);
    }
    return function() {
      if (removeListener && shouldUseSystemListener) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode, initialColorMode]);
  var context = react.exports.useMemo(function() {
    return {
      colorMode: value != null ? value : colorMode,
      toggleColorMode: value ? noop$1 : toggleColorMode,
      setColorMode: value ? noop$1 : setColorMode
    };
  }, [colorMode, setColorMode, toggleColorMode, value]);
  return /* @__PURE__ */ react.exports.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}
function _extends$9() {
  _extends$9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$9.apply(this, arguments);
}
var tokenToCSSVar = function tokenToCSSVar2(scale, value) {
  return function(theme2) {
    var valueStr = String(value);
    var key = scale ? scale + "." + valueStr : valueStr;
    return isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  };
};
function createTransform(options) {
  var scale = options.scale, transform10 = options.transform, compose = options.compose;
  var fn = function fn2(value, theme2) {
    var _transform;
    var _value = tokenToCSSVar(scale, value)(theme2);
    var result = (_transform = transform10 == null ? void 0 : transform10(_value, theme2)) != null ? _transform : _value;
    if (compose) {
      result = compose(result, theme2);
    }
    return result;
  };
  return fn;
}
function toConfig(scale, transform10) {
  return function(property) {
    var result = {
      property,
      scale
    };
    result.transform = createTransform({
      scale,
      transform: transform10
    });
    return result;
  };
}
var getRtl = function getRtl2(_ref) {
  var rtl = _ref.rtl, ltr = _ref.ltr;
  return function(theme2) {
    return theme2.direction === "rtl" ? rtl : ltr;
  };
};
function logical(options) {
  var property = options.property, scale = options.scale, transform10 = options.transform;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform10
    }) : transform10
  };
}
var _spaceXTemplate, _spaceYTemplate;
var transformTemplate = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function getTransformTemplate() {
  return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))"].concat(transformTemplate).join(" ");
}
function getTransformGpuTemplate() {
  return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)"].concat(transformTemplate).join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": value,
    boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = (_spaceXTemplate = {}, _spaceXTemplate[owlSelector] = {
  marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
  marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
}, _spaceXTemplate);
var spaceYTemplate = (_spaceYTemplate = {}, _spaceYTemplate[owlSelector] = {
  marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
  marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
}, _spaceYTemplate);
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _wrapRegExp() {
  _wrapRegExp = function(re2, groups) {
    return new BabelRegExp(re2, void 0, groups);
  };
  var _super = RegExp.prototype;
  var _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re2, flags, groups) {
    var _this = new RegExp(re2, flags);
    _groups.set(_this, groups || _groups.get(re2));
    return _setPrototypeOf(_this, BabelRegExp.prototype);
  }
  _inherits(BabelRegExp, RegExp);
  BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result)
      result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        if (typeof args[args.length - 1] !== "object") {
          args = [].slice.call(args);
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re2) {
    var g2 = _groups.get(re2);
    return Object.keys(g2).reduce(function(groups, name) {
      groups[name] = result[g2[name]];
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]);
var trimSpace = function trimSpace2(str) {
  return str.trim();
};
function parseGradient(value, theme2) {
  var _regex$exec$groups, _regex$exec;
  if (value == null || globalSet.has(value))
    return value;
  var regex = /* @__PURE__ */ _wrapRegExp(/(^[\x2DA-Za-z]+)\(((.*))\)/g, {
    type: 1,
    values: 2
  });
  var _ref = (_regex$exec$groups = (_regex$exec = regex.exec(value)) == null ? void 0 : _regex$exec.groups) != null ? _regex$exec$groups : {}, type = _ref.type, values = _ref.values;
  if (!type || !values)
    return value;
  var _type = type.includes("-gradient") ? type : type + "-gradient";
  var _values$split$map$fil = values.split(",").map(trimSpace).filter(Boolean), maybeDirection = _values$split$map$fil[0], stops = _values$split$map$fil.slice(1);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  var direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  var _values = stops.map(function(stop) {
    if (valueSet.has(stop))
      return stop;
    var firstStop = stop.indexOf(" ");
    var _ref2 = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop], _color = _ref2[0], _stop = _ref2[1];
    var _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    var key = "colors." + _color;
    var color2 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [color2].concat(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]).join(" ") : color2;
  });
  return _type + "(" + _values.join(", ") + ")";
}
var isCSSFunction = function isCSSFunction2(value) {
  return isString(value) && value.includes("(") && value.includes(")");
};
var gradientTransform = function gradientTransform2(value, theme2) {
  return parseGradient(value, theme2 != null ? theme2 : {});
};
var analyzeCSSValue = function analyzeCSSValue2(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
};
var wrap = function wrap2(str) {
  return function(value) {
    return str + "(" + value + ")";
  };
};
var transformFunctions = {
  filter: function filter2(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter: function backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring: function ring2(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip: function bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform: function transform2(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  px: function px2(value) {
    if (value == null)
      return value;
    var _analyzeCSSValue = analyzeCSSValue(value), unitless = _analyzeCSSValue.unitless;
    return unitless || isNumber(value) ? value + "px" : value;
  },
  fraction: function fraction(value) {
    return !isNumber(value) || value > 1 ? value : value * 100 + "%";
  },
  "float": function float(value, theme2) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree: function degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    var unitless = isString(value) && !value.endsWith("deg");
    return isNumber(value) || unitless ? value + "deg" : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage: function bgImage(value) {
    if (value == null)
      return value;
    var prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? "url(" + value + ")" : value;
  },
  outline: function outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection: function flexDirection(value) {
    var _flexDirectionTemplat;
    var _ref = (_flexDirectionTemplat = flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {}, space2 = _ref.space, divide3 = _ref.divide;
    var result = {
      flexDirection: value
    };
    if (space2)
      result[space2] = 1;
    if (divide3)
      result[divide3] = 1;
    return result;
  }
};
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", transformFunctions.px),
  spaceT: toConfig("space", transformFunctions.px),
  degreeT: function degreeT(property) {
    return {
      property,
      transform: transformFunctions.degree
    };
  },
  prop: function prop(property, scale, transform10) {
    return _extends$9({
      property,
      scale
    }, scale && {
      transform: createTransform({
        scale,
        transform: transform10
      })
    });
  },
  propT: function propT(property, transform10) {
    return {
      property,
      transform: transform10
    };
  },
  sizes: toConfig("sizes", transformFunctions.px),
  sizesT: toConfig("sizes", transformFunctions.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: transformFunctions.bgClip
  },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: {
    transform: transformFunctions.bgClip
  }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter = {
  filter: {
    transform: transformFunctions.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: {
    transform: transformFunctions.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: transformFunctions.flexDirection
  },
  experimental_spaceX: {
    "static": spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform3(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  experimental_spaceY: {
    "static": spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: function transform4(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: transformFunctions.outline
  },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  d: t.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  "float": t.propT("float", transformFunctions["float"]),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list$1 = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = function getWithPriority2(theme2, key, styles2) {
  var result = {};
  var obj = memoizedGet(theme2, key, {});
  for (var prop2 in obj) {
    var isInStyles = prop2 in styles2 && styles2[prop2] != null;
    if (!isInStyles)
      result[prop2] = obj[prop2];
  }
  return result;
};
var others = {
  srOnly: {
    transform: function transform5(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: function transform6(value, theme2, styles2) {
      return getWithPriority(theme2, "layerStyles." + value, styles2);
    }
  },
  textStyle: {
    processResult: true,
    transform: function transform7(value, theme2, styles2) {
      return getWithPriority(theme2, "textStyles." + value, styles2);
    }
  },
  apply: {
    processResult: true,
    transform: function transform8(value, theme2, styles2) {
      return getWithPriority(theme2, value, styles2);
    }
  }
};
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring = {
  ring: {
    transform: transformFunctions.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition$1 = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};
var typography$1 = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    "static": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform: function transform9(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var state = {
  hover: function hover(str, post) {
    return str + ":hover " + post + ", " + str + "[data-hover] " + post;
  },
  focus: function focus(str, post) {
    return str + ":focus " + post + ", " + str + "[data-focus] " + post;
  },
  focusVisible: function focusVisible(str, post) {
    return str + ":focus-visible " + post;
  },
  focusWithin: function focusWithin(str, post) {
    return str + ":focus-within " + post;
  },
  active: function active(str, post) {
    return str + ":active " + post + ", " + str + "[data-active] " + post;
  },
  disabled: function disabled(str, post) {
    return str + ":disabled " + post + ", " + str + "[data-disabled] " + post;
  },
  invalid: function invalid(str, post) {
    return str + ":invalid " + post + ", " + str + "[data-invalid] " + post;
  },
  checked: function checked(str, post) {
    return str + ":checked " + post + ", " + str + "[data-checked] " + post;
  },
  indeterminate: function indeterminate(str, post) {
    return str + ":indeterminate " + post + ", " + str + "[aria-checked=mixed] " + post + ", " + str + "[data-indeterminate] " + post;
  },
  readOnly: function readOnly(str, post) {
    return str + ":read-only " + post + ", " + str + "[readonly] " + post + ", " + str + "[data-read-only] " + post;
  },
  expanded: function expanded(str, post) {
    return str + ":read-only " + post + ", " + str + "[aria-expanded=true] " + post + ", " + str + "[data-expanded] " + post;
  },
  placeholderShown: function placeholderShown(str, post) {
    return str + ":placeholder-shown " + post;
  }
};
var toGroup = function toGroup2(fn) {
  return merge(function(v2) {
    return fn(v2, "&");
  }, "[role=group]", "[data-group]", ".group");
};
var toPeer = function toPeer2(fn) {
  return merge(function(v2) {
    return fn(v2, "~ &");
  }, "[data-peer]", ".peer");
};
var merge = function merge2(fn) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return selectors.map(fn).join(", ");
};
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(state.hover),
  _peerHover: toPeer(state.hover),
  _groupFocus: toGroup(state.focus),
  _peerFocus: toPeer(state.focus),
  _groupFocusVisible: toGroup(state.focusVisible),
  _peerFocusVisible: toPeer(state.focusVisible),
  _groupActive: toGroup(state.active),
  _peerActive: toPeer(state.active),
  _groupDisabled: toGroup(state.disabled),
  _peerDisabled: toPeer(state.disabled),
  _groupInvalid: toGroup(state.invalid),
  _peerInvalid: toPeer(state.invalid),
  _groupChecked: toGroup(state.checked),
  _peerChecked: toPeer(state.checked),
  _groupFocusWithin: toGroup(state.focusWithin),
  _peerFocusWithin: toPeer(state.focusWithin),
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
};
var pseudoPropNames = objectKeys(pseudoSelectors);
var systemProps = mergeWith({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position, effect, space, scroll, typography$1, textDecoration, transform, list$1, transition$1);
Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [].concat(objectKeys(systemProps), pseudoPropNames);
var styleProps = _extends$9({}, systemProps, pseudoSelectors);
var isStyleProp = function isStyleProp2(prop2) {
  return prop2 in styleProps;
};
var expandResponsive = function expandResponsive2(styles2) {
  return function(theme2) {
    if (!theme2.__breakpoints)
      return styles2;
    var _theme$__breakpoints = theme2.__breakpoints, isResponsive = _theme$__breakpoints.isResponsive, toArrayValue = _theme$__breakpoints.toArrayValue, medias = _theme$__breakpoints.media;
    var computedStyles = {};
    for (var key in styles2) {
      var value = runIfFn(styles2[key], theme2);
      if (value == null)
        continue;
      value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }
      var queries2 = value.slice(0, medias.length).length;
      for (var index = 0; index < queries2; index += 1) {
        var media = medias == null ? void 0 : medias[index];
        if (!media) {
          computedStyles[key] = value[index];
          continue;
        }
        computedStyles[media] = computedStyles[media] || {};
        if (value[index] == null) {
          continue;
        }
        computedStyles[media][key] = value[index];
      }
    }
    return computedStyles;
  };
};
var isCSSVariableTokenValue = function isCSSVariableTokenValue2(key, value) {
  return key.startsWith("--") && isString(value) && !isCssVar(value);
};
var resolveTokenValue = function resolveTokenValue2(theme2, value) {
  var _ref, _getVar2;
  if (value == null)
    return value;
  var getVar = function getVar2(val) {
    var _theme$__cssMap, _theme$__cssMap$val;
    return (_theme$__cssMap = theme2.__cssMap) == null ? void 0 : (_theme$__cssMap$val = _theme$__cssMap[val]) == null ? void 0 : _theme$__cssMap$val.varRef;
  };
  var getValue = function getValue2(val) {
    var _getVar;
    return (_getVar = getVar(val)) != null ? _getVar : val;
  };
  var valueSplit = value.split(",").map(function(v2) {
    return v2.trim();
  });
  var tokenValue = valueSplit[0], fallbackValue = valueSplit[1];
  value = (_ref = (_getVar2 = getVar(tokenValue)) != null ? _getVar2 : getValue(fallbackValue)) != null ? _ref : getValue(value);
  return value;
};
function getCss(options) {
  var _options$configs = options.configs, configs = _options$configs === void 0 ? {} : _options$configs, _options$pseudos = options.pseudos, pseudos = _options$pseudos === void 0 ? {} : _options$pseudos, theme2 = options.theme;
  var css3 = function css4(stylesOrFn, nested) {
    if (nested === void 0) {
      nested = false;
    }
    var _styles = runIfFn(stylesOrFn, theme2);
    var styles2 = expandResponsive(_styles)(theme2);
    var computedStyles = {};
    for (var key in styles2) {
      var _config$transform, _config, _config2, _config3, _config4;
      var valueOrFn = styles2[key];
      var value = runIfFn(valueOrFn, theme2);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme2, value);
      }
      var config2 = configs[key];
      if (config2 === true) {
        config2 = {
          property: key
        };
      }
      if (isObject(value)) {
        var _computedStyles$key;
        computedStyles[key] = (_computedStyles$key = computedStyles[key]) != null ? _computedStyles$key : {};
        computedStyles[key] = mergeWith({}, computedStyles[key], css4(value, true));
        continue;
      }
      var rawValue = (_config$transform = (_config = config2) == null ? void 0 : _config.transform == null ? void 0 : _config.transform(value, theme2, _styles)) != null ? _config$transform : value;
      rawValue = (_config2 = config2) != null && _config2.processResult ? css4(rawValue, true) : rawValue;
      var configProperty = runIfFn((_config3 = config2) == null ? void 0 : _config3.property, theme2);
      if (!nested && (_config4 = config2) != null && _config4["static"]) {
        var staticStyles = runIfFn(config2["static"], theme2);
        computedStyles = mergeWith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (var _iterator = _createForOfIteratorHelperLoose(configProperty), _step; !(_step = _iterator()).done; ) {
          var property = _step.value;
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css3;
}
var css = function css2(styles2) {
  return function(theme2) {
    var cssFn = getCss({
      theme: theme2,
      pseudos: pseudoSelectors,
      configs: systemProps
    });
    return cssFn(styles2);
  };
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = function toExpression2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(resolveReference).join(" " + operator + " ").replace(/calc/g, "");
};
var _add$1 = function add2() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpression.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract$1 = function subtract2() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpression.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply$1 = function multiply() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpression.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide$1 = function divide() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpression.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate$1 = function negate(x2) {
  var value = resolveReference(x2);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply$1(value, -1);
};
var calc$1 = Object.assign(function(x2) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc$1(_add$1.apply(void 0, [x2].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc$1(_subtract$1.apply(void 0, [x2].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc$1(_multiply$1.apply(void 0, [x2].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc$1(_divide$1.apply(void 0, [x2].concat(operands)));
    },
    negate: function negate3() {
      return calc$1(_negate$1(x2));
    },
    toString: function toString() {
      return x2.toString();
    }
  };
}, {
  add: _add$1,
  subtract: _subtract$1,
  multiply: _multiply$1,
  divide: _divide$1,
  negate: _negate$1
});
function replaceWhiteSpace$1(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape$1(value) {
  var valueStr = replaceWhiteSpace$1(value.toString());
  if (valueStr.includes("\\."))
    return value;
  var isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? valueStr.replace(".", "\\.") : value;
}
function addPrefix$1(value, prefix2) {
  if (prefix2 === void 0) {
    prefix2 = "";
  }
  return [prefix2, escape$1(value)].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return "var(" + escape$1(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVarDefinition(value, prefix2) {
  if (prefix2 === void 0) {
    prefix2 = "";
  }
  return "--" + addPrefix$1(value, prefix2);
}
function cssVar$1(name, fallback, cssVarPrefix) {
  var cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
function tokenToCssVar(token2, prefix2) {
  return cssVar$1(String(token2).replace(/\./g, "-"), void 0, prefix2);
}
function createThemeVars(flatTokens, options) {
  var cssVars = {};
  var cssMap = {};
  var _loop = function _loop2() {
    var _Object$entries$_i = _Object$entries[_i], token2 = _Object$entries$_i[0], tokenValue = _Object$entries$_i[1];
    var isSemantic = tokenValue.isSemantic, value = tokenValue.value;
    var _tokenToCssVar = tokenToCssVar(token2, options == null ? void 0 : options.cssVarPrefix), variable = _tokenToCssVar.variable, reference = _tokenToCssVar.reference;
    if (!isSemantic) {
      if (token2.startsWith("space")) {
        var keys2 = token2.split(".");
        var firstKey = keys2[0], referenceKeys = keys2.slice(1);
        var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
        var negativeValue = calc$1.negate(value);
        var negatedReference = calc$1.negate(reference);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          "var": variable,
          varRef: negatedReference
        };
      }
      cssVars[variable] = value;
      cssMap[token2] = {
        value,
        "var": variable,
        varRef: reference
      };
      return "continue";
    }
    var lookupToken = function lookupToken2(maybeToken) {
      var scale = String(token2).split(".")[0];
      var withScale = [scale, maybeToken].join(".");
      var resolvedTokenValue = flatTokens[withScale];
      if (!resolvedTokenValue)
        return maybeToken;
      var _tokenToCssVar2 = tokenToCssVar(withScale, options == null ? void 0 : options.cssVarPrefix), reference2 = _tokenToCssVar2.reference;
      return reference2;
    };
    var normalizedValue = isObject(value) ? value : {
      "default": value
    };
    cssVars = mergeWith(cssVars, Object.entries(normalizedValue).reduce(function(acc, _ref) {
      var _pseudoSelectors$cond, _acc$conditionSelecto;
      var conditionAlias = _ref[0], conditionValue = _ref[1];
      var maybeReference = lookupToken(conditionValue);
      if (conditionAlias === "default") {
        acc[variable] = maybeReference;
        return acc;
      }
      var conditionSelector = (_pseudoSelectors$cond = pseudoSelectors == null ? void 0 : pseudoSelectors[conditionAlias]) != null ? _pseudoSelectors$cond : conditionAlias;
      acc[conditionSelector] = (_acc$conditionSelecto = {}, _acc$conditionSelecto[variable] = maybeReference, _acc$conditionSelecto);
      return acc;
    }, {}));
    cssMap[token2] = {
      value: reference,
      "var": variable,
      varRef: reference
    };
  };
  for (var _i = 0, _Object$entries = Object.entries(flatTokens); _i < _Object$entries.length; _i++) {
    var _ret = _loop();
    if (_ret === "continue")
      continue;
  }
  return {
    cssVars,
    cssMap
  };
}
function _objectWithoutPropertiesLoose$7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$k = ["__cssMap", "__cssVars", "__breakpoints"];
var tokens = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function extractTokens(theme2) {
  var _tokens = tokens;
  return pick(theme2, _tokens);
}
function extractSemanticTokens(theme2) {
  return theme2.semanticTokens;
}
function omitVars(rawTheme) {
  rawTheme.__cssMap;
  rawTheme.__cssVars;
  rawTheme.__breakpoints;
  var cleanTheme = _objectWithoutPropertiesLoose$7(rawTheme, _excluded$k);
  return cleanTheme;
}
function flattenTokens(_ref) {
  var _flatten, _flatten2;
  var tokens2 = _ref.tokens, semanticTokens = _ref.semanticTokens;
  var tokenEntries = Object.entries((_flatten = flatten(tokens2)) != null ? _flatten : {}).map(function(_ref2) {
    var token2 = _ref2[0], value = _ref2[1];
    var enhancedToken = {
      isSemantic: false,
      value
    };
    return [token2, enhancedToken];
  });
  var semanticTokenEntries = Object.entries((_flatten2 = flatten(semanticTokens, 1)) != null ? _flatten2 : {}).map(function(_ref3) {
    var token2 = _ref3[0], value = _ref3[1];
    var enhancedToken = {
      isSemantic: true,
      value
    };
    return [token2, enhancedToken];
  });
  return fromEntries([].concat(tokenEntries, semanticTokenEntries));
}
function toCSSVar(rawTheme) {
  var _theme$config;
  var theme2 = omitVars(rawTheme);
  var tokens2 = extractTokens(theme2);
  var semanticTokens = extractSemanticTokens(theme2);
  var flatTokens = flattenTokens({
    tokens: tokens2,
    semanticTokens
  });
  var cssVarPrefix = (_theme$config = theme2.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var _createThemeVars = createThemeVars(flatTokens, {
    cssVarPrefix
  }), cssMap = _createThemeVars.cssMap, cssVars = _createThemeVars.cssVars;
  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme2, {
    __cssVars: _extends$9({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(theme2.breakpoints)
  });
  return theme2;
}
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b2) {
  if (a === b2)
    return true;
  if (a && b2 && typeof a == "object" && typeof b2 == "object") {
    if (a.constructor !== b2.constructor)
      return false;
    var length2, i, keys2;
    if (Array.isArray(a)) {
      length2 = a.length;
      if (length2 != b2.length)
        return false;
      for (i = length2; i-- !== 0; )
        if (!equal(a[i], b2[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b2 instanceof Map) {
      if (a.size !== b2.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b2.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b2 instanceof Set) {
      if (a.size !== b2.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b2)) {
      length2 = a.length;
      if (length2 != b2.length)
        return false;
      for (i = length2; i-- !== 0; )
        if (a[i] !== b2[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b2.source && a.flags === b2.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b2.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b2.toString();
    keys2 = Object.keys(a);
    length2 = keys2.length;
    if (length2 !== Object.keys(b2).length)
      return false;
    for (i = length2; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length2; i-- !== 0; ) {
      if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys2[i]], b2[keys2[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
var reactFastCompare = function isEqual(a, b2) {
  try {
    return equal(a, b2);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(function(prop2) {
  return reactPropsRegex.test(prop2) || prop2.charCodeAt(0) === 111 && prop2.charCodeAt(1) === 110 && prop2.charCodeAt(2) < 91;
});
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag2) {
  return typeof tag2 === "string" && tag2.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag2, options, isReal) {
  var shouldForwardProp3;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp3 = tag2.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag2.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp3 !== "function" && isReal) {
    shouldForwardProp3 = tag2.__emotion_forwardProp;
  }
  return shouldForwardProp3;
};
var useInsertionEffect = React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : function useInsertionEffect3(create) {
  create();
};
function useInsertionEffectMaybe(create) {
  useInsertionEffect(create);
}
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  useInsertionEffectMaybe(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var createStyled = function createStyled2(tag2, options) {
  var isReal = tag2.__emotion_real === tag2;
  var baseTag = isReal && tag2.__emotion_base || tag2;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp3 = composeShouldForwardProps(tag2, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp3 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag2.__emotion_styles !== void 0 ? tag2.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = react.exports.useContext(ThemeContext);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp3 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, /* @__PURE__ */ react.exports.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ react.exports.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag2.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp3;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends$a({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function _extends$8() {
  _extends$8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}
var ThemeProvider = function ThemeProvider3(props) {
  var cssVarsRoot = props.cssVarsRoot, theme2 = props.theme, children = props.children;
  var computedTheme = react.exports.useMemo(function() {
    return toCSSVar(theme2);
  }, [theme2]);
  return /* @__PURE__ */ react.exports.createElement(ThemeProvider$1, {
    theme: computedTheme
  }, /* @__PURE__ */ react.exports.createElement(CSSVars, {
    root: cssVarsRoot
  }), children);
};
var CSSVars = function CSSVars2(_ref) {
  var _ref$root = _ref.root, root2 = _ref$root === void 0 ? ":host, :root" : _ref$root;
  var selector2 = [root2, "[data-theme]"].join(",");
  return /* @__PURE__ */ react.exports.createElement(Global, {
    styles: function styles2(theme2) {
      var _ref2;
      return _ref2 = {}, _ref2[selector2] = theme2.__cssVars, _ref2;
    }
  });
};
function useTheme() {
  var theme2 = react.exports.useContext(ThemeContext);
  if (!theme2) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
  }
  return theme2;
}
createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
var GlobalStyle = function GlobalStyle2() {
  var _useColorMode = useColorMode(), colorMode = _useColorMode.colorMode;
  return /* @__PURE__ */ react.exports.createElement(Global, {
    styles: function styles2(theme2) {
      var styleObjectOrFn = memoizedGet(theme2, "styles.global");
      var globalStyles = runIfFn(styleObjectOrFn, {
        theme: theme2,
        colorMode
      });
      if (!globalStyles)
        return void 0;
      var styles3 = css(globalStyles)(theme2);
      return styles3;
    }
  });
};
function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
function useChakra() {
  var colorModeResult = useColorMode();
  var theme2 = useTheme();
  return _extends$8({}, colorModeResult, {
    theme: theme2
  });
}
function _objectWithoutPropertiesLoose$6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var allPropNames = new Set([].concat(propNames, ["textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]));
var validHTMLProps = /* @__PURE__ */ new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
var shouldForwardProp = function shouldForwardProp2(prop2) {
  return validHTMLProps.has(prop2) || !allPropNames.has(prop2);
};
var _excluded$1$3 = ["theme", "css", "__css", "sx"], _excluded2$3 = ["baseStyle"];
var toCSSObject = function toCSSObject2(_ref) {
  var baseStyle22 = _ref.baseStyle;
  return function(props) {
    props.theme;
    var cssProp = props.css, __css = props.__css, sx = props.sx, rest = _objectWithoutPropertiesLoose$6(props, _excluded$1$3);
    var styleProps2 = objectFilter(rest, function(_, prop2) {
      return isStyleProp(prop2);
    });
    var finalBaseStyle = runIfFn(baseStyle22, props);
    var finalStyles = Object.assign({}, __css, finalBaseStyle, filterUndefined(styleProps2), sx);
    var computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
};
function styled(component, options) {
  var _ref2 = options != null ? options : {}, baseStyle22 = _ref2.baseStyle, styledOptions = _objectWithoutPropertiesLoose$6(_ref2, _excluded2$3);
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  var styleObject = toCSSObject({
    baseStyle: baseStyle22
  });
  return newStyled(component, styledOptions)(styleObject);
}
function forwardRef(component) {
  return /* @__PURE__ */ react.exports.forwardRef(component);
}
var _excluded$j = ["styleConfig"];
function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP;
  if (props === void 0) {
    props = {};
  }
  if (opts === void 0) {
    opts = {};
  }
  var _props = props, styleConfigProp = _props.styleConfig, rest = _objectWithoutPropertiesLoose$6(_props, _excluded$j);
  var _useChakra = useChakra(), theme2 = _useChakra.theme, colorMode = _useChakra.colorMode;
  var themeStyleConfig = memoizedGet(theme2, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = mergeWith({
    theme: theme2,
    colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, filterUndefined(omit(rest, ["children"])));
  var stylesRef = react.exports.useRef({});
  if (styleConfig) {
    var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;
    var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
    var variants2 = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
    var sizes2 = runIfFn((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
    var styles2 = mergeWith({}, baseStyles, sizes2, variants2);
    if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
      styleConfig.parts.forEach(function(part) {
        var _styles$part;
        styles2[part] = (_styles$part = styles2[part]) != null ? _styles$part : {};
      });
    }
    var isStyleEqual = reactFastCompare(stylesRef.current, styles2);
    if (!isStyleEqual) {
      stylesRef.current = styles2;
    }
  }
  return stylesRef.current;
}
function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}
function factory() {
  var cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    apply: function apply(target, thisArg, argArray) {
      return styled.apply(void 0, argArray);
    },
    get: function get4(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
var chakra = factory();
var ChakraProvider$1 = function ChakraProvider2(props) {
  var children = props.children, colorModeManager = props.colorModeManager, portalZIndex = props.portalZIndex, _props$resetCSS = props.resetCSS, resetCSS = _props$resetCSS === void 0 ? true : _props$resetCSS, _props$theme = props.theme, theme2 = _props$theme === void 0 ? {} : _props$theme, environment = props.environment, cssVarsRoot = props.cssVarsRoot;
  var _children = /* @__PURE__ */ react.exports.createElement(EnvironmentProvider, {
    environment
  }, children);
  return /* @__PURE__ */ react.exports.createElement(IdProvider, null, /* @__PURE__ */ react.exports.createElement(ThemeProvider, {
    theme: theme2,
    cssVarsRoot
  }, /* @__PURE__ */ react.exports.createElement(ColorModeProvider, {
    colorModeManager,
    options: theme2.config
  }, resetCSS && /* @__PURE__ */ react.exports.createElement(CSSReset$1, null), /* @__PURE__ */ react.exports.createElement(GlobalStyle, null), portalZIndex ? /* @__PURE__ */ react.exports.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
function _extends$7() {
  _extends$7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$7.apply(this, arguments);
}
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
};
var container$1 = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes$l = _extends$7({}, spacing, largeSizes, {
  container: container$1
});
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var s = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l: l2 };
}
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p2 = v2 * (1 - s);
  var q2 = v2 * (1 - f2 * s);
  var t2 = v2 * (1 - (1 - f2) * s);
  var mod = i % 6;
  var r2 = [v2, q2, p2, p2, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a, allow4Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color2) {
  return {
    r: color2 >> 16,
    g: (color2 & 65280) >> 8,
    b: color2 & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color2) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok2 = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v2 = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v2);
      ok2 = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l2 = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l2);
      ok2 = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a = color2.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok2,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match2 = matchers.rgb.exec(color2);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3] };
  }
  match2 = matchers.rgba.exec(color2);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
  }
  match2 = matchers.hsl.exec(color2);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3] };
  }
  match2 = matchers.hsla.exec(color2);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
  }
  match2 = matchers.hsv.exec(color2);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3] };
  }
  match2 = matchers.hsva.exec(color2);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
  }
  match2 = matchers.hex8.exec(color2);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      a: convertHexToDecimal(match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex6.exec(color2);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      format: named ? "name" : "hex"
    };
  }
  match2 = matchers.hex4.exec(color2);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      a: convertHexToDecimal(match2[4] + match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex3.exec(color2);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}
var TinyColor = function() {
  function TinyColor2(color2, opts) {
    if (color2 === void 0) {
      color2 = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    if (color2 instanceof TinyColor2) {
      return color2;
    }
    if (typeof color2 === "number") {
      color2 = numberInputToObject(color2);
    }
    this.originalInput = color2;
    var rgb = inputToRGB(color2);
    this.originalInput = color2;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r2 = Math.round(this.r);
    var g2 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x2) {
      return "".concat(Math.round(bound01(x2, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x2) {
      return Math.round(bound01(x2, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
      var _b = _a[_i], key = _b[0], value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color2, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color2).toRgb();
    var p2 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p2 + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background2) {
    var fg2 = this.toRgb();
    var bg2 = new TinyColor2(background2).toRgb();
    return new TinyColor2({
      r: bg2.r + (fg2.r - bg2.r) * fg2.a,
      g: bg2.g + (fg2.g - bg2.g) * fg2.a,
      b: bg2.b + (fg2.b - bg2.b) * fg2.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n2) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n2;
    for (var i = 1; i < n2; i++) {
      result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color2) {
    return this.toRgbString() === new TinyColor2(color2).toRgbString();
  };
  return TinyColor2;
}();
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors2 = [];
    options.count = void 0;
    while (totalColors > colors2.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors2.push(random(options));
    }
    options.count = totalColors;
    return colors2;
  }
  var h2 = pickHue(options.hue, options.seed);
  var s = pickSaturation(h2, options);
  var v2 = pickBrightness(h2, s, options);
  var res = { h: h2, s, v: v2 };
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H2, S2, options) {
  var bMin = getMinimumBrightness(H2, S2);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H2, S2) {
  var lowerBounds = getColorInfo(H2).lowerBounds;
  for (var i = 0; i < lowerBounds.length - 1; i++) {
    var s1 = lowerBounds[i][0];
    var v1 = lowerBounds[i][1];
    var s2 = lowerBounds[i + 1][0];
    var v2 = lowerBounds[i + 1][1];
    if (S2 >= s1 && S2 <= s2) {
      var m2 = (v2 - v1) / (s2 - s1);
      var b2 = v1 - m2 * s1;
      return m2 * S2 + b2;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n2) {
      return n2.name === colorInput;
    });
    if (namedColor) {
      var color2 = defineColor(namedColor);
      if (color2.hueRange) {
        return color2.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color2 = defineColor(bound);
    if (color2.hueRange && hue >= color2.hueRange[0] && hue <= color2.hueRange[1]) {
      return color2;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range, seed) {
  if (seed === void 0) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  var max = range[1] || 1;
  var min = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];
var getColor = function getColor2(theme2, color2, fallback) {
  var hex = memoizedGet(theme2, "colors." + color2, color2);
  var _TinyColor = new TinyColor(hex), isValid = _TinyColor.isValid;
  return isValid ? hex : fallback;
};
var tone = function tone2(color2) {
  return function(theme2) {
    var hex = getColor(theme2, color2);
    var isDark3 = new TinyColor(hex).isDark();
    return isDark3 ? "dark" : "light";
  };
};
var isDark = function isDark2(color2) {
  return function(theme2) {
    return tone(color2)(theme2) === "dark";
  };
};
var transparentize = function transparentize2(color2, opacity) {
  return function(theme2) {
    var raw = getColor(theme2, color2);
    return new TinyColor(raw).setAlpha(opacity).toRgbString();
  };
};
function generateStripe(size2, color2) {
  if (size2 === void 0) {
    size2 = "1rem";
  }
  if (color2 === void 0) {
    color2 = "rgba(255, 255, 255, 0.15)";
  }
  return {
    backgroundImage: "linear-gradient(\n    45deg,\n    " + color2 + " 25%,\n    transparent 25%,\n    transparent 50%,\n    " + color2 + " 50%,\n    " + color2 + " 75%,\n    transparent 75%,\n    transparent\n  )",
    backgroundSize: size2 + " " + size2
  };
}
function randomColor(opts) {
  var fallback = random().toHexString();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  var hash2 = 0;
  if (str.length === 0)
    return hash2.toString();
  for (var i = 0; i < str.length; i += 1) {
    hash2 = str.charCodeAt(i) + ((hash2 << 5) - hash2);
    hash2 = hash2 & hash2;
  }
  var color2 = "#";
  for (var j = 0; j < 3; j += 1) {
    var value = hash2 >> j * 8 & 255;
    color2 += ("00" + value.toString(16)).substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  var index = 0;
  if (str.length === 0)
    return list2[0];
  for (var i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}
function mode(light, dark) {
  return function(props) {
    return props.colorMode === "dark" ? dark : light;
  };
}
function orient(options) {
  var orientation = options.orientation, vertical = options.vertical, horizontal = options.horizontal;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function _extends$6() {
  _extends$6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$6.apply(this, arguments);
}
var createBreakpoints = function createBreakpoints2(config2) {
  warn({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends$6({
    base: "0em"
  }, config2);
};
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Anatomy = /* @__PURE__ */ function() {
  function Anatomy2(name) {
    var _this = this;
    this.map = {};
    this.called = false;
    this.assert = function() {
      if (!_this.called) {
        _this.called = true;
        return;
      }
      throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
    };
    this.parts = function() {
      _this.assert();
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }
      for (var _i = 0, _values = values; _i < _values.length; _i++) {
        var part = _values[_i];
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.extend = function() {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }
      for (var _i2 = 0, _parts = parts; _i2 < _parts.length; _i2++) {
        var part = _parts[_i2];
        if (part in _this.map)
          continue;
        _this.map[part] = _this.toPart(part);
      }
      return _this;
    };
    this.toPart = function(part) {
      var el = ["container", "root"].includes(part != null ? part : "") ? [_this.name] : [_this.name, part];
      var attr = el.filter(Boolean).join("__");
      var className = "chakra-" + attr;
      var partObj = {
        className,
        selector: "." + className,
        toString: function toString() {
          return part;
        }
      };
      return partObj;
    };
    this.__type = {};
  }
  _createClass(Anatomy2, [{
    key: "selectors",
    get: function get4() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref) {
        var key = _ref[0], part = _ref[1];
        return [key, part.selector];
      }));
      return value;
    }
  }, {
    key: "classNames",
    get: function get4() {
      var value = fromEntries(Object.entries(this.map).map(function(_ref2) {
        var key = _ref2[0], part = _ref2[1];
        return [key, part.className];
      }));
      return value;
    }
  }, {
    key: "keys",
    get: function get4() {
      return Object.keys(this.map);
    }
  }]);
  return Anatomy2;
}();
function anatomy(name) {
  return new Anatomy(name);
}
function toRef(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = function toExpr2(operator) {
  for (var _len = arguments.length, operands = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    operands[_key - 1] = arguments[_key];
  }
  return operands.map(toRef).join(" " + operator + " ").replace(/calc/g, "");
};
var _add = function add3() {
  for (var _len2 = arguments.length, operands = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    operands[_key2] = arguments[_key2];
  }
  return "calc(" + toExpr.apply(void 0, ["+"].concat(operands)) + ")";
};
var _subtract = function subtract3() {
  for (var _len3 = arguments.length, operands = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    operands[_key3] = arguments[_key3];
  }
  return "calc(" + toExpr.apply(void 0, ["-"].concat(operands)) + ")";
};
var _multiply = function multiply2() {
  for (var _len4 = arguments.length, operands = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    operands[_key4] = arguments[_key4];
  }
  return "calc(" + toExpr.apply(void 0, ["*"].concat(operands)) + ")";
};
var _divide = function divide2() {
  for (var _len5 = arguments.length, operands = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    operands[_key5] = arguments[_key5];
  }
  return "calc(" + toExpr.apply(void 0, ["/"].concat(operands)) + ")";
};
var _negate = function negate2(x2) {
  var value = toRef(x2);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : "-" + value;
  }
  return _multiply(value, -1);
};
var calc = Object.assign(function(x2) {
  return {
    add: function add4() {
      for (var _len6 = arguments.length, operands = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        operands[_key6] = arguments[_key6];
      }
      return calc(_add.apply(void 0, [x2].concat(operands)));
    },
    subtract: function subtract4() {
      for (var _len7 = arguments.length, operands = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        operands[_key7] = arguments[_key7];
      }
      return calc(_subtract.apply(void 0, [x2].concat(operands)));
    },
    multiply: function multiply3() {
      for (var _len8 = arguments.length, operands = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        operands[_key8] = arguments[_key8];
      }
      return calc(_multiply.apply(void 0, [x2].concat(operands)));
    },
    divide: function divide3() {
      for (var _len9 = arguments.length, operands = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        operands[_key9] = arguments[_key9];
      }
      return calc(_divide.apply(void 0, [x2].concat(operands)));
    },
    negate: function negate3() {
      return calc(_negate(x2));
    },
    toString: function toString() {
      return x2.toString();
    }
  };
}, {
  add: _add,
  subtract: _subtract,
  multiply: _multiply,
  divide: _divide,
  negate: _negate
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue) {
  if (replaceValue === void 0) {
    replaceValue = "-";
  }
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  var valueStr = replaceWhiteSpace(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", "\\.") : value;
}
function addPrefix(value, prefix2) {
  if (prefix2 === void 0) {
    prefix2 = "";
  }
  return [prefix2, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return "var(" + escape(name) + (fallback ? ", " + fallback : "") + ")";
}
function toVar(value, prefix2) {
  if (prefix2 === void 0) {
    prefix2 = "";
  }
  return "--" + addPrefix(value, prefix2);
}
function cssVar(name, options) {
  var cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
var typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    "short": 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var baseStyleContainer$4 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton$1 = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "1rem",
  _focus: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon$5 = {
  fontSize: "1.25em"
};
var baseStyle$D = {
  root: {},
  container: baseStyleContainer$4,
  button: baseStyleButton$1,
  panel: baseStylePanel,
  icon: baseStyleIcon$5
};
var accordion = {
  parts: accordionAnatomy.keys,
  baseStyle: baseStyle$D
};
var baseStyle$C = {
  container: {
    px: 4,
    py: 3
  },
  title: {
    fontWeight: "bold",
    lineHeight: 6,
    marginEnd: 2
  },
  description: {
    lineHeight: 6
  },
  icon: {
    flexShrink: 0,
    marginEnd: 3,
    w: 5,
    h: 6
  }
};
function getBg(props) {
  var theme2 = props.theme, c2 = props.colorScheme;
  var lightBg = getColor(theme2, c2 + ".100", c2);
  var darkBg = transparentize(c2 + ".200", 0.16)(theme2);
  return mode(lightBg, darkBg)(props);
}
var variantSubtle$1 = function variantSubtle2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantLeftAccent = function variantLeftAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      paddingStart: 3,
      borderStartWidth: "4px",
      borderStartColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantTopAccent = function variantTopAccent2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      pt: 2,
      borderTopWidth: "4px",
      borderTopColor: mode(c2 + ".500", c2 + ".200")(props),
      bg: getBg(props)
    },
    icon: {
      color: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var variantSolid$3 = function variantSolid2(props) {
  var c2 = props.colorScheme;
  return {
    container: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    }
  };
};
var variants$b = {
  subtle: variantSubtle$1,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid$3
};
var defaultProps$n = {
  variant: "subtle",
  colorScheme: "blue"
};
var alert = {
  parts: alertAnatomy.keys,
  baseStyle: baseStyle$C,
  variants: variants$b,
  defaultProps: defaultProps$n
};
var baseStyleBadge = function baseStyleBadge2(props) {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
};
var baseStyleExcessLabel = function baseStyleExcessLabel2(props) {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
};
var baseStyleContainer$3 = function baseStyleContainer2(props) {
  var name = props.name, theme2 = props.theme;
  var bg2 = name ? randomColor({
    string: name
  }) : "gray.400";
  var isBgDark = isDark(bg2)(theme2);
  var color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  var borderColor = mode("white", "gray.800")(props);
  return {
    bg: bg2,
    color: color2,
    borderColor,
    verticalAlign: "top"
  };
};
var baseStyle$B = function baseStyle2(props) {
  return {
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer$3(props)
  };
};
function getSize$3(size2) {
  var themeSize = sizes$l[size2];
  return {
    container: {
      width: size2,
      height: size2,
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)"
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size2) + " / 2.5)",
      lineHeight: size2 !== "100%" ? themeSize != null ? themeSize : size2 : void 0
    }
  };
}
var sizes$k = {
  "2xs": getSize$3("4"),
  xs: getSize$3("6"),
  sm: getSize$3("8"),
  md: getSize$3("12"),
  lg: getSize$3("16"),
  xl: getSize$3("24"),
  "2xl": getSize$3("32"),
  full: getSize$3("100%")
};
var defaultProps$m = {
  size: "md"
};
var avatar = {
  parts: avatarAnatomy.keys,
  baseStyle: baseStyle$B,
  sizes: sizes$k,
  defaultProps: defaultProps$m
};
var baseStyle$A = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};
var variantSolid$2 = function variantSolid3(props) {
  var c2 = props.colorScheme, theme2 = props.theme;
  var dark = transparentize(c2 + ".500", 0.6)(theme2);
  return {
    bg: mode(c2 + ".500", dark)(props),
    color: mode("white", "whiteAlpha.800")(props)
  };
};
var variantSubtle = function variantSubtle3(props) {
  var c2 = props.colorScheme, theme2 = props.theme;
  var darkBg = transparentize(c2 + ".200", 0.16)(theme2);
  return {
    bg: mode(c2 + ".100", darkBg)(props),
    color: mode(c2 + ".800", c2 + ".200")(props)
  };
};
var variantOutline$2 = function variantOutline2(props) {
  var c2 = props.colorScheme, theme2 = props.theme;
  var darkColor = transparentize(c2 + ".200", 0.8)(theme2);
  var lightColor = getColor(theme2, c2 + ".500");
  var color2 = mode(lightColor, darkColor)(props);
  return {
    color: color2,
    boxShadow: "inset 0 0 0px 1px " + color2
  };
};
var variants$a = {
  solid: variantSolid$2,
  subtle: variantSubtle,
  outline: variantOutline$2
};
var defaultProps$l = {
  variant: "subtle",
  colorScheme: "gray"
};
var Badge$1 = {
  baseStyle: baseStyle$A,
  variants: variants$a,
  defaultProps: defaultProps$l
};
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle$z = {
  link: baseStyleLink
};
var breadcrumb = {
  parts: breadcrumbAnatomy.keys,
  baseStyle: baseStyle$z
};
var baseStyle$y = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};
var variantGhost = function variantGhost2(props) {
  var c2 = props.colorScheme, theme2 = props.theme;
  if (c2 === "gray") {
    return {
      color: mode("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      }
    };
  }
  var darkHoverBg = transparentize(c2 + ".200", 0.12)(theme2);
  var darkActiveBg = transparentize(c2 + ".200", 0.24)(theme2);
  return {
    color: mode(c2 + ".600", c2 + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: mode(c2 + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: mode(c2 + ".100", darkActiveBg)(props)
    }
  };
};
var variantOutline$1 = function variantOutline3(props) {
  var c2 = props.colorScheme;
  var borderColor = mode("gray.200", "whiteAlpha.300")(props);
  return _extends$7({
    border: "1px solid",
    borderColor: c2 === "gray" ? borderColor : "currentColor"
  }, variantGhost(props));
};
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid$1 = function variantSolid4(props) {
  var _accessibleColorMap$c;
  var c2 = props.colorScheme;
  if (c2 === "gray") {
    var _bg = mode("gray.100", "whiteAlpha.200")(props);
    return {
      bg: _bg,
      _hover: {
        bg: mode("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: mode("gray.300", "whiteAlpha.400")(props)
      }
    };
  }
  var _ref = (_accessibleColorMap$c = accessibleColorMap[c2]) != null ? _accessibleColorMap$c : {}, _ref$bg = _ref.bg, bg2 = _ref$bg === void 0 ? c2 + ".500" : _ref$bg, _ref$color = _ref.color, color2 = _ref$color === void 0 ? "white" : _ref$color, _ref$hoverBg = _ref.hoverBg, hoverBg = _ref$hoverBg === void 0 ? c2 + ".600" : _ref$hoverBg, _ref$activeBg = _ref.activeBg, activeBg = _ref$activeBg === void 0 ? c2 + ".700" : _ref$activeBg;
  var background2 = mode(bg2, c2 + ".200")(props);
  return {
    bg: background2,
    color: mode(color2, "gray.800")(props),
    _hover: {
      bg: mode(hoverBg, c2 + ".300")(props),
      _disabled: {
        bg: background2
      }
    },
    _active: {
      bg: mode(activeBg, c2 + ".400")(props)
    }
  };
};
var variantLink = function variantLink2(props) {
  var c2 = props.colorScheme;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(c2 + ".500", c2 + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(c2 + ".700", c2 + ".500")(props)
    }
  };
};
var variantUnstyled$2 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants$9 = {
  ghost: variantGhost,
  outline: variantOutline$1,
  solid: variantSolid$1,
  link: variantLink,
  unstyled: variantUnstyled$2
};
var sizes$j = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps$k = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var button = {
  baseStyle: baseStyle$y,
  variants: variants$9,
  sizes: sizes$j,
  defaultProps: defaultProps$k
};
var baseStyleControl$1 = function baseStyleControl2(props) {
  var c2 = props.colorScheme;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: mode(c2 + ".600", c2 + ".300")(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(c2 + ".500", c2 + ".200")(props),
      borderColor: mode(c2 + ".500", c2 + ".200")(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
};
var baseStyleContainer$2 = {
  _disabled: {
    cursor: "not-allowed"
  }
};
var baseStyleLabel$3 = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon$4 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};
var baseStyle$x = function baseStyle3(props) {
  return {
    icon: baseStyleIcon$4,
    container: baseStyleContainer$2,
    control: baseStyleControl$1(props),
    label: baseStyleLabel$3
  };
};
var sizes$i = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps$j = {
  size: "md",
  colorScheme: "blue"
};
var Checkbox = {
  parts: checkboxAnatomy.keys,
  baseStyle: baseStyle$x,
  sizes: sizes$i,
  defaultProps: defaultProps$j
};
var _lg$1, _md$1, _sm$1;
var $size$1 = cssVar("close-button-size");
var baseStyle$w = function baseStyle4(props) {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size$1.reference],
    h: [$size$1.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
};
var sizes$h = {
  lg: (_lg$1 = {}, _lg$1[$size$1.variable] = "40px", _lg$1.fontSize = "16px", _lg$1),
  md: (_md$1 = {}, _md$1[$size$1.variable] = "32px", _md$1.fontSize = "12px", _md$1),
  sm: (_sm$1 = {}, _sm$1[$size$1.variable] = "24px", _sm$1.fontSize = "10px", _sm$1)
};
var defaultProps$i = {
  size: "md"
};
var closeButton = {
  baseStyle: baseStyle$w,
  sizes: sizes$h,
  defaultProps: defaultProps$i
};
var variants$8 = Badge$1.variants, defaultProps$h = Badge$1.defaultProps;
var baseStyle$v = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var code = {
  baseStyle: baseStyle$v,
  variants: variants$8,
  defaultProps: defaultProps$h
};
var baseStyle$u = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "1rem"
};
var container = {
  baseStyle: baseStyle$u
};
var baseStyle$t = {
  opacity: 0.6,
  borderColor: "inherit"
};
var variantSolid = {
  borderStyle: "solid"
};
var variantDashed = {
  borderStyle: "dashed"
};
var variants$7 = {
  solid: variantSolid,
  dashed: variantDashed
};
var defaultProps$g = {
  variant: "solid"
};
var divider = {
  baseStyle: baseStyle$t,
  variants: variants$7,
  defaultProps: defaultProps$g
};
function getSize$2(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var baseStyleOverlay$1 = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer$1 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};
var baseStyleDialog$1 = function baseStyleDialog2(props) {
  var isFullHeight = props.isFullHeight;
  return _extends$7({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  });
};
var baseStyleHeader$2 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$3 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$2 = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter$2 = {
  px: 6,
  py: 4
};
var baseStyle$s = function baseStyle5(props) {
  return {
    overlay: baseStyleOverlay$1,
    dialogContainer: baseStyleDialogContainer$1,
    dialog: baseStyleDialog$1(props),
    header: baseStyleHeader$2,
    closeButton: baseStyleCloseButton$3,
    body: baseStyleBody$2,
    footer: baseStyleFooter$2
  };
};
var sizes$g = {
  xs: getSize$2("xs"),
  sm: getSize$2("md"),
  md: getSize$2("lg"),
  lg: getSize$2("2xl"),
  xl: getSize$2("4xl"),
  full: getSize$2("full")
};
var defaultProps$f = {
  size: "xs"
};
var drawer = {
  parts: drawerAnatomy.keys,
  baseStyle: baseStyle$s,
  sizes: sizes$g,
  defaultProps: defaultProps$f
};
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyleTextarea = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle$r = {
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
};
var editable = {
  parts: editableAnatomy.keys,
  baseStyle: baseStyle$r
};
var baseStyleRequiredIndicator = function baseStyleRequiredIndicator2(props) {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyleHelperText = function baseStyleHelperText2(props) {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};
var baseStyle$q = function baseStyle6(props) {
  return {
    container: {
      width: "100%",
      position: "relative"
    },
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props)
  };
};
var form = {
  parts: formAnatomy.keys,
  baseStyle: baseStyle$q
};
var baseStyleText = function baseStyleText2(props) {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm",
    lineHeight: "normal"
  };
};
var baseStyleIcon$3 = function baseStyleIcon2(props) {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
};
var baseStyle$p = function baseStyle7(props) {
  return {
    text: baseStyleText(props),
    icon: baseStyleIcon$3(props)
  };
};
var formError = {
  parts: formErrorAnatomy.keys,
  baseStyle: baseStyle$p
};
var baseStyle$o = {
  fontSize: "md",
  marginEnd: 3,
  mb: 2,
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};
var formLabel = {
  baseStyle: baseStyle$o
};
var baseStyle$n = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes$f = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps$e = {
  size: "xl"
};
var heading = {
  baseStyle: baseStyle$n,
  sizes: sizes$f,
  defaultProps: defaultProps$e
};
var baseStyle$m = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal"
  }
};
var size = {
  lg: {
    fontSize: "lg",
    px: 4,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: 4,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: 3,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: 2,
    h: 6,
    borderRadius: "sm"
  }
};
var sizes$e = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};
function getDefaults(props) {
  var fc2 = props.focusBorderColor, ec2 = props.errorBorderColor;
  return {
    focusBorderColor: fc2 || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec2 || mode("red.500", "red.300")(props)
  };
}
var variantOutline = function variantOutline4(props) {
  var theme2 = props.theme;
  var _getDefaults = getDefaults(props), fc2 = _getDefaults.focusBorderColor, ec2 = _getDefaults.errorBorderColor;
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme2, ec2),
        boxShadow: "0 0 0 1px " + getColor(theme2, ec2)
      },
      _focus: {
        zIndex: 1,
        borderColor: getColor(theme2, fc2),
        boxShadow: "0 0 0 1px " + getColor(theme2, fc2)
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
};
var variantFilled = function variantFilled2(props) {
  var theme2 = props.theme;
  var _getDefaults2 = getDefaults(props), fc2 = _getDefaults2.focusBorderColor, ec2 = _getDefaults2.errorBorderColor;
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed"
      },
      _invalid: {
        borderColor: getColor(theme2, ec2)
      },
      _focus: {
        bg: "transparent",
        borderColor: getColor(theme2, fc2)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
};
var variantFlushed = function variantFlushed2(props) {
  var theme2 = props.theme;
  var _getDefaults3 = getDefaults(props), fc2 = _getDefaults3.focusBorderColor, ec2 = _getDefaults3.errorBorderColor;
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme2, ec2)
      },
      _focus: {
        borderColor: getColor(theme2, fc2),
        boxShadow: "0px 1px 0px 0px " + getColor(theme2, fc2)
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: 0,
      px: 0,
      bg: "transparent"
    }
  };
};
var variantUnstyled$1 = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
};
var variants$6 = {
  outline: variantOutline,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled$1
};
var defaultProps$d = {
  size: "md",
  variant: "outline"
};
var Input = {
  parts: inputAnatomy.keys,
  baseStyle: baseStyle$m,
  sizes: sizes$e,
  variants: variants$6,
  defaultProps: defaultProps$d
};
var baseStyle$l = function baseStyle8(props) {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
};
var kbd = {
  baseStyle: baseStyle$l
};
var baseStyle$k = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var link = {
  baseStyle: baseStyle$k
};
var baseStyleIcon$2 = {
  marginEnd: "0.5rem",
  display: "inline",
  verticalAlign: "text-bottom"
};
var baseStyle$j = {
  container: {},
  item: {},
  icon: baseStyleIcon$2
};
var list = {
  parts: listAnatomy.keys,
  baseStyle: baseStyle$j
};
var baseStyleList = function baseStyleList2(props) {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
};
var baseStyleItem = function baseStyleItem2(props) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyle$i = function baseStyle9(props) {
  return {
    button: baseStyleButton,
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider
  };
};
var menu = {
  parts: menuAnatomy.keys,
  baseStyle: baseStyle$i
};
var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "modal"
};
var baseStyleDialogContainer = function baseStyleDialogContainer2(props) {
  var isCentered = props.isCentered, scrollBehavior = props.scrollBehavior;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
};
var baseStyleDialog = function baseStyleDialog3(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
};
var baseStyleHeader$1 = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton$2 = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody$1 = function baseStyleBody2(props) {
  var scrollBehavior = props.scrollBehavior;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
};
var baseStyleFooter$1 = {
  px: 6,
  py: 4
};
var baseStyle$h = function baseStyle10(props) {
  return {
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer(props),
    dialog: baseStyleDialog(props),
    header: baseStyleHeader$1,
    closeButton: baseStyleCloseButton$2,
    body: baseStyleBody$1(props),
    footer: baseStyleFooter$1
  };
};
function getSize$1(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minH: "-webkit-fill-available"
        },
        my: 0
      }
    };
  }
  return {
    dialog: {
      maxW: value
    }
  };
}
var sizes$d = {
  xs: getSize$1("xs"),
  sm: getSize$1("sm"),
  md: getSize$1("md"),
  lg: getSize$1("lg"),
  xl: getSize$1("xl"),
  "2xl": getSize$1("2xl"),
  "3xl": getSize$1("3xl"),
  "4xl": getSize$1("4xl"),
  "5xl": getSize$1("5xl"),
  "6xl": getSize$1("6xl"),
  full: getSize$1("full")
};
var defaultProps$c = {
  size: "md"
};
var modal = {
  parts: modalAnatomy.keys,
  baseStyle: baseStyle$h,
  sizes: sizes$d,
  defaultProps: defaultProps$c
};
var _baseStyleRoot, _Input$baseStyle$fiel, _Input$baseStyle;
var variants$5 = Input.variants, defaultProps$b = Input.defaultProps;
var $stepperWidth = cssVar("number-input-stepper-width");
var $inputPadding = cssVar("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var baseStyleRoot$1 = (_baseStyleRoot = {}, _baseStyleRoot[$stepperWidth.variable] = "24px", _baseStyleRoot[$inputPadding.variable] = inputPaddingValue, _baseStyleRoot);
var baseStyleField$1 = (_Input$baseStyle$fiel = (_Input$baseStyle = Input.baseStyle) == null ? void 0 : _Input$baseStyle.field) != null ? _Input$baseStyle$fiel : {};
var baseStyleStepperGroup = {
  width: [$stepperWidth.reference]
};
var baseStyleStepper = function baseStyleStepper2(props) {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};
var baseStyle$g = function baseStyle11(props) {
  return {
    root: baseStyleRoot$1,
    field: baseStyleField$1,
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper(props)
  };
};
function getSize(size2) {
  var _sizeStyle$field$font, _sizeStyle$field;
  var sizeStyle = Input.sizes[size2];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  var _fontSize = (_sizeStyle$field$font = (_sizeStyle$field = sizeStyle.field) == null ? void 0 : _sizeStyle$field.fontSize) != null ? _sizeStyle$field$font : "md";
  var fontSize = typography.fontSizes[_fontSize.toString()];
  return {
    field: _extends$7({}, sizeStyle.field, {
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: calc(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}
var sizes$c = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
var numberInput = {
  parts: numberInputAnatomy.keys,
  baseStyle: baseStyle$g,
  sizes: sizes$c,
  variants: variants$5,
  defaultProps: defaultProps$b
};
var _Input$variants$unsty$1;
var baseStyle$f = _extends$7({}, Input.baseStyle.field, {
  textAlign: "center"
});
var sizes$b = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
var variants$4 = {
  outline: function outline2(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty$1 = Input.variants.unstyled.field) != null ? _Input$variants$unsty$1 : {}
};
var defaultProps$a = Input.defaultProps;
var pinInput = {
  baseStyle: baseStyle$f,
  sizes: sizes$b,
  variants: variants$4,
  defaultProps: defaultProps$a
};
var $popperBg = cssVar("popper-bg");
var $arrowBg$1 = cssVar("popper-arrow-bg");
var $arrowShadowColor = cssVar("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};
var baseStyleContent = function baseStyleContent2(props) {
  var _ref;
  var bg2 = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return _ref = {}, _ref[$popperBg.variable] = "colors." + bg2, _ref.bg = $popperBg.reference, _ref[$arrowBg$1.variable] = $popperBg.reference, _ref[$arrowShadowColor.variable] = "colors." + shadowColor, _ref.width = "xs", _ref.border = "1px solid", _ref.borderColor = "inherit", _ref.borderRadius = "md", _ref.boxShadow = "sm", _ref.zIndex = "inherit", _ref._focus = {
    outline: 0,
    boxShadow: "outline"
  }, _ref;
};
var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};
var baseStyleCloseButton$1 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
};
var baseStyle$e = function baseStyle12(props) {
  return {
    popper: baseStylePopper,
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
    arrow: {},
    closeButton: baseStyleCloseButton$1
  };
};
var popover = {
  parts: popoverAnatomy.keys,
  baseStyle: baseStyle$e
};
function filledStyle(props) {
  var c2 = props.colorScheme, t2 = props.theme, isIndeterminate = props.isIndeterminate, hasStripe = props.hasStripe;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c2 + ".500", c2 + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t2, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends$7({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}
var baseStyleLabel$2 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};
var baseStyleTrack$2 = function baseStyleTrack2(props) {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
};
var baseStyleFilledTrack$1 = function baseStyleFilledTrack2(props) {
  return _extends$7({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
};
var baseStyle$d = function baseStyle13(props) {
  return {
    label: baseStyleLabel$2,
    filledTrack: baseStyleFilledTrack$1(props),
    track: baseStyleTrack$2(props)
  };
};
var sizes$a = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps$9 = {
  size: "md",
  colorScheme: "blue"
};
var progress = {
  parts: progressAnatomy.keys,
  sizes: sizes$a,
  baseStyle: baseStyle$d,
  defaultProps: defaultProps$9
};
var baseStyleControl = function baseStyleControl3(props) {
  var _Checkbox$baseStyle = Checkbox.baseStyle(props), _Checkbox$baseStyle$c = _Checkbox$baseStyle.control, control = _Checkbox$baseStyle$c === void 0 ? {} : _Checkbox$baseStyle$c;
  return _extends$7({}, control, {
    borderRadius: "full",
    _checked: _extends$7({}, control["_checked"], {
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
};
var baseStyle$c = function baseStyle14(props) {
  return {
    label: Checkbox.baseStyle(props).label,
    container: Checkbox.baseStyle(props).container,
    control: baseStyleControl(props)
  };
};
var sizes$9 = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps$8 = {
  size: "md",
  colorScheme: "blue"
};
var radio = {
  parts: radioAnatomy.keys,
  baseStyle: baseStyle$c,
  sizes: sizes$9,
  defaultProps: defaultProps$8
};
var baseStyleField = function baseStyleField2(props) {
  return _extends$7({}, Input.baseStyle.field, {
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
};
var baseStyleIcon$1 = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};
var baseStyle$b = function baseStyle15(props) {
  return {
    field: baseStyleField(props),
    icon: baseStyleIcon$1
  };
};
var iconSpacing = {
  paddingInlineEnd: "2rem"
};
var sizes$8 = mergeWith({}, Input.sizes, {
  lg: {
    field: iconSpacing
  },
  md: {
    field: iconSpacing
  },
  sm: {
    field: iconSpacing
  },
  xs: {
    field: iconSpacing,
    icon: {
      insetEnd: "0.25rem"
    }
  }
});
var select = {
  parts: selectAnatomy.keys,
  baseStyle: baseStyle$b,
  sizes: sizes$8,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};
var fade = function fade2(startColor, endColor) {
  return keyframes({
    from: {
      borderColor: startColor,
      background: startColor
    },
    to: {
      borderColor: endColor,
      background: endColor
    }
  });
};
var baseStyle$a = function baseStyle16(props) {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var _props$startColor = props.startColor, startColor = _props$startColor === void 0 ? defaultStartColor : _props$startColor, _props$endColor = props.endColor, endColor = _props$endColor === void 0 ? defaultEndColor : _props$endColor, speed = props.speed, theme2 = props.theme;
  var start = getColor(theme2, startColor);
  var end = getColor(theme2, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};
var skeleton = {
  baseStyle: baseStyle$a
};
var baseStyle$9 = function baseStyle17(props) {
  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focus: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: mode("white", "gray.700")(props)
    }
  };
};
var skipLink = {
  baseStyle: baseStyle$9
};
function thumbOrientation(props) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}
var baseStyleContainer$1 = function baseStyleContainer3(props) {
  var orientation = props.orientation;
  return _extends$7({
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, orient({
    orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};
var baseStyleTrack$1 = function baseStyleTrack3(props) {
  return {
    overflow: "hidden",
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
};
var baseStyleThumb$1 = function baseStyleThumb2(props) {
  return _extends$7({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
};
var baseStyleFilledTrack = function baseStyleFilledTrack3(props) {
  var c2 = props.colorScheme;
  return {
    width: "inherit",
    height: "inherit",
    bg: mode(c2 + ".500", c2 + ".200")(props)
  };
};
var baseStyle$8 = function baseStyle18(props) {
  return {
    container: baseStyleContainer$1(props),
    track: baseStyleTrack$1(props),
    thumb: baseStyleThumb$1(props),
    filledTrack: baseStyleFilledTrack(props)
  };
};
var sizeLg = function sizeLg2(props) {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeMd = function sizeMd2(props) {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
};
var sizeSm = function sizeSm2(props) {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: orient({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
};
var sizes$7 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps$7 = {
  size: "md",
  colorScheme: "blue"
};
var slider = {
  parts: sliderAnatomy.keys,
  sizes: sizes$7,
  baseStyle: baseStyle$8,
  defaultProps: defaultProps$7
};
var _xs, _sm, _md, _lg, _xl;
var $size = cssVar("spinner-size");
var baseStyle$7 = {
  width: [$size.reference],
  height: [$size.reference]
};
var sizes$6 = {
  xs: (_xs = {}, _xs[$size.variable] = "0.75rem", _xs),
  sm: (_sm = {}, _sm[$size.variable] = "1rem", _sm),
  md: (_md = {}, _md[$size.variable] = "1.5rem", _md),
  lg: (_lg = {}, _lg[$size.variable] = "2rem", _lg),
  xl: (_xl = {}, _xl[$size.variable] = "3rem", _xl)
};
var defaultProps$6 = {
  size: "md"
};
var spinner = {
  baseStyle: baseStyle$7,
  sizes: sizes$6,
  defaultProps: defaultProps$6
};
var baseStyleLabel$1 = {
  fontWeight: "medium"
};
var baseStyleHelpText = {
  opacity: 0.8,
  marginBottom: 2
};
var baseStyleNumber = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
};
var baseStyleIcon = {
  marginEnd: 1,
  w: "14px",
  h: "14px",
  verticalAlign: "middle"
};
var baseStyle$6 = {
  container: {},
  label: baseStyleLabel$1,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon
};
var sizes$5 = {
  md: {
    label: {
      fontSize: "sm"
    },
    helpText: {
      fontSize: "sm"
    },
    number: {
      fontSize: "2xl"
    }
  }
};
var defaultProps$5 = {
  size: "md"
};
var stat = {
  parts: statAnatomy.keys,
  baseStyle: baseStyle$6,
  sizes: sizes$5,
  defaultProps: defaultProps$5
};
var _container2, _container3, _container4;
var $width = cssVar("switch-track-width");
var $height = cssVar("switch-track-height");
var $diff = cssVar("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar("switch-thumb-x");
var baseStyleTrack = function baseStyleTrack4(props) {
  var c2 = props.colorScheme;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c2 + ".500", c2 + ".200")(props)
    }
  };
};
var baseStyleThumb = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};
var baseStyle$5 = function baseStyle19(props) {
  var _rtl, _container;
  return {
    container: (_container = {}, _container[$diff.variable] = diffValue, _container[$translateX.variable] = $diff.reference, _container._rtl = (_rtl = {}, _rtl[$translateX.variable] = calc($diff).negate().toString(), _rtl), _container),
    track: baseStyleTrack(props),
    thumb: baseStyleThumb
  };
};
var sizes$4 = {
  sm: {
    container: (_container2 = {}, _container2[$width.variable] = "1.375rem", _container2[$height.variable] = "0.75rem", _container2)
  },
  md: {
    container: (_container3 = {}, _container3[$width.variable] = "1.875rem", _container3[$height.variable] = "1rem", _container3)
  },
  lg: {
    container: (_container4 = {}, _container4[$width.variable] = "2.875rem", _container4[$height.variable] = "1.5rem", _container4)
  }
};
var defaultProps$4 = {
  size: "md",
  colorScheme: "blue"
};
var _switch = {
  parts: switchAnatomy.keys,
  baseStyle: baseStyle$5,
  sizes: sizes$4,
  defaultProps: defaultProps$4
};
var baseStyle$4 = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
};
var numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
};
var variantSimple = function variantSimple2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends$7({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends$7({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variantStripe = function variantStripe2(props) {
  var c2 = props.colorScheme;
  return {
    th: _extends$7({
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    td: _extends$7({
      borderBottom: "1px",
      borderColor: mode(c2 + ".100", c2 + ".700")(props)
    }, numericStyles),
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(c2 + ".100", c2 + ".700")(props)
          },
          td: {
            background: mode(c2 + ".100", c2 + ".700")(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: {
            borderBottomWidth: 0
          }
        }
      }
    }
  };
};
var variants$3 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: {}
};
var sizes$3 = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  },
  md: {
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  },
  lg: {
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  }
};
var defaultProps$3 = {
  variant: "simple",
  size: "md",
  colorScheme: "gray"
};
var table = {
  parts: tableAnatomy.keys,
  baseStyle: baseStyle$4,
  variants: variants$3,
  sizes: sizes$3,
  defaultProps: defaultProps$3
};
var baseStyleRoot = function baseStyleRoot2(props) {
  var orientation = props.orientation;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
};
var baseStyleTab = function baseStyleTab2(props) {
  var isFitted = props.isFitted;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focus: {
      zIndex: 1,
      boxShadow: "outline"
    }
  };
};
var baseStyleTablist = function baseStyleTablist2(props) {
  var _props$align = props.align, align = _props$align === void 0 ? "start" : _props$align, orientation = props.orientation;
  var alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
};
var baseStyleTabpanel = {
  p: 4
};
var baseStyle$3 = function baseStyle20(props) {
  return {
    root: baseStyleRoot(props),
    tab: baseStyleTab(props),
    tablist: baseStyleTablist(props),
    tabpanel: baseStyleTabpanel
  };
};
var sizes$2 = {
  sm: {
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  },
  md: {
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  },
  lg: {
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  }
};
var variantLine = function variantLine2(props) {
  var _tablist, _tab;
  var c2 = props.colorScheme, orientation = props.orientation;
  var isVertical = orientation === "vertical";
  var borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  var marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: (_tablist = {}, _tablist[borderProp] = "2px solid", _tablist.borderColor = "inherit", _tablist),
    tab: (_tab = {}, _tab[borderProp] = "2px solid", _tab.borderColor = "transparent", _tab[marginProp] = "-2px", _tab._selected = {
      color: mode(c2 + ".600", c2 + ".300")(props),
      borderColor: "currentColor"
    }, _tab._active = {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    }, _tab._disabled = {
      opacity: 0.4,
      cursor: "not-allowed"
    }, _tab)
  };
};
var variantEnclosed = function variantEnclosed2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderBottomColor: mode("white", "gray.800")(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantEnclosedColored = function variantEnclosedColored2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode("gray.50", "whiteAlpha.50")(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(c2 + ".600", c2 + ".300")(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
};
var variantSoftRounded = function variantSoftRounded2(props) {
  var c2 = props.colorScheme, theme2 = props.theme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, c2 + ".700"),
        bg: getColor(theme2, c2 + ".100")
      }
    }
  };
};
var variantSolidRounded = function variantSolidRounded2(props) {
  var c2 = props.colorScheme;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode("#fff", "gray.800")(props),
        bg: mode(c2 + ".600", c2 + ".300")(props)
      }
    }
  };
};
var variantUnstyled = {};
var variants$2 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled
};
var defaultProps$2 = {
  size: "md",
  variant: "line",
  colorScheme: "blue"
};
var tabs = {
  parts: tabsAnatomy.keys,
  baseStyle: baseStyle$3,
  sizes: sizes$2,
  variants: variants$2,
  defaultProps: defaultProps$2
};
var baseStyleContainer = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyleLabel = {
  lineHeight: 1.2,
  overflow: "visible"
};
var baseStyleCloseButton = {
  fontSize: "18px",
  w: "1.25rem",
  h: "1.25rem",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "0.375rem",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focus: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
};
var baseStyle$2 = {
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton
};
var sizes$1 = {
  sm: {
    container: {
      minH: "1.25rem",
      minW: "1.25rem",
      fontSize: "xs",
      px: 2,
      borderRadius: "md"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  },
  md: {
    container: {
      minH: "1.5rem",
      minW: "1.5rem",
      fontSize: "sm",
      borderRadius: "md",
      px: 2
    }
  },
  lg: {
    container: {
      minH: 8,
      minW: 8,
      fontSize: "md",
      borderRadius: "md",
      px: 3
    }
  }
};
var variants$1 = {
  subtle: function subtle(props) {
    return {
      container: Badge$1.variants.subtle(props)
    };
  },
  solid: function solid(props) {
    return {
      container: Badge$1.variants.solid(props)
    };
  },
  outline: function outline3(props) {
    return {
      container: Badge$1.variants.outline(props)
    };
  }
};
var defaultProps$1 = {
  size: "md",
  variant: "subtle",
  colorScheme: "gray"
};
var tag = {
  parts: tagAnatomy.keys,
  variants: variants$1,
  baseStyle: baseStyle$2,
  sizes: sizes$1,
  defaultProps: defaultProps$1
};
var _Input$variants$unsty, _Input$sizes$xs$field, _Input$sizes$sm$field, _Input$sizes$md$field, _Input$sizes$lg$field;
var baseStyle$1 = _extends$7({}, Input.baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short",
  verticalAlign: "top"
});
var variants = {
  outline: function outline4(props) {
    var _Input$variants$outli;
    return (_Input$variants$outli = Input.variants.outline(props).field) != null ? _Input$variants$outli : {};
  },
  flushed: function flushed2(props) {
    var _Input$variants$flush;
    return (_Input$variants$flush = Input.variants.flushed(props).field) != null ? _Input$variants$flush : {};
  },
  filled: function filled2(props) {
    var _Input$variants$fille;
    return (_Input$variants$fille = Input.variants.filled(props).field) != null ? _Input$variants$fille : {};
  },
  unstyled: (_Input$variants$unsty = Input.variants.unstyled.field) != null ? _Input$variants$unsty : {}
};
var sizes = {
  xs: (_Input$sizes$xs$field = Input.sizes.xs.field) != null ? _Input$sizes$xs$field : {},
  sm: (_Input$sizes$sm$field = Input.sizes.sm.field) != null ? _Input$sizes$sm$field : {},
  md: (_Input$sizes$md$field = Input.sizes.md.field) != null ? _Input$sizes$md$field : {},
  lg: (_Input$sizes$lg$field = Input.sizes.lg.field) != null ? _Input$sizes$lg$field : {}
};
var defaultProps = {
  size: "md",
  variant: "outline"
};
var textarea = {
  baseStyle: baseStyle$1,
  sizes,
  variants,
  defaultProps
};
var $bg = cssVar("tooltip-bg");
var $arrowBg = cssVar("popper-arrow-bg");
var baseStyle = function baseStyle21(props) {
  var _ref;
  var bg2 = mode("gray.700", "gray.300")(props);
  return _ref = {}, _ref[$bg.variable] = "colors." + bg2, _ref.px = "8px", _ref.py = "2px", _ref.bg = [$bg.reference], _ref[$arrowBg.variable] = [$bg.reference], _ref.color = mode("whiteAlpha.900", "gray.900")(props), _ref.borderRadius = "sm", _ref.fontWeight = "medium", _ref.fontSize = "sm", _ref.boxShadow = "md", _ref.maxW = "320px", _ref.zIndex = "tooltip", _ref;
};
var tooltip = {
  baseStyle
};
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Accordion: accordion,
  Alert: alert,
  Avatar: avatar,
  Badge: Badge$1,
  Breadcrumb: breadcrumb,
  Button: button,
  Checkbox,
  CloseButton: closeButton,
  Code: code,
  Container: container,
  Divider: divider,
  Drawer: drawer,
  Editable: editable,
  Form: form,
  FormError: formError,
  FormLabel: formLabel,
  Heading: heading,
  Input,
  Kbd: kbd,
  Link: link,
  List: list,
  Menu: menu,
  Modal: modal,
  NumberInput: numberInput,
  PinInput: pinInput,
  Popover: popover,
  Progress: progress,
  Radio: radio,
  Select: select,
  Skeleton: skeleton,
  SkipLink: skipLink,
  Slider: slider,
  Spinner: spinner,
  Stat: stat,
  Switch: _switch,
  Table: table,
  Tabs: tabs,
  Tag: tag,
  Textarea: textarea,
  Tooltip: tooltip
});
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
});
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var foundations = _extends$7({
  breakpoints,
  zIndices,
  radii,
  blur,
  colors
}, typography, {
  sizes: sizes$l,
  shadows,
  space: spacing,
  borders,
  transition
});
var styles = {
  global: function global2(props) {
    return {
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base"
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props)
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word"
      }
    };
  }
};
var styles$1 = styles;
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = _extends$7({
  direction
}, foundations, {
  components,
  styles: styles$1,
  config
});
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$i = ["as", "viewBox", "color", "focusable", "children", "className", "__css"];
var fallbackIcon = {
  path: /* @__PURE__ */ react.exports.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ react.exports.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /* @__PURE__ */ react.exports.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /* @__PURE__ */ react.exports.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
};
var Icon = /* @__PURE__ */ forwardRef(function(props, ref) {
  var element = props.as, viewBox = props.viewBox, _props$color = props.color, color2 = _props$color === void 0 ? "currentColor" : _props$color, _props$focusable = props.focusable, focusable = _props$focusable === void 0 ? false : _props$focusable, children = props.children, className = props.className, __css = props.__css, rest = _objectWithoutPropertiesLoose$5(props, _excluded$i);
  var _className = cx("chakra-icon", className);
  var styles2 = _extends$5({
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: color2
  }, __css);
  var shared = {
    ref,
    focusable,
    className: _className,
    __css: styles2
  };
  var _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  if (element && typeof element !== "string") {
    return /* @__PURE__ */ react.exports.createElement(chakra.svg, _extends$5({
      as: element
    }, shared, rest));
  }
  var _path = children != null ? children : fallbackIcon.path;
  return /* @__PURE__ */ react.exports.createElement(chakra.svg, _extends$5({
    verticalAlign: "middle",
    viewBox: _viewBox
  }, shared, rest), _path);
});
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var VisuallyHidden = chakra("span", {
  baseStyle: visuallyHiddenStyle
});
chakra("input", {
  baseStyle: visuallyHiddenStyle
});
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$e = ["label", "thickness", "speed", "emptyColor", "className"];
var spin = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var Spinner = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Spinner", props);
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$lab = _omitThemingProps.label, label = _omitThemingProps$lab === void 0 ? "Loading..." : _omitThemingProps$lab, _omitThemingProps$thi = _omitThemingProps.thickness, thickness = _omitThemingProps$thi === void 0 ? "2px" : _omitThemingProps$thi, _omitThemingProps$spe = _omitThemingProps.speed, speed = _omitThemingProps$spe === void 0 ? "0.45s" : _omitThemingProps$spe, _omitThemingProps$emp = _omitThemingProps.emptyColor, emptyColor = _omitThemingProps$emp === void 0 ? "transparent" : _omitThemingProps$emp, className = _omitThemingProps.className, rest = _objectWithoutPropertiesLoose$4(_omitThemingProps, _excluded$e);
  var _className = cx("chakra-spinner", className);
  var spinnerStyles = _extends$4({
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: thickness,
    borderBottomColor: emptyColor,
    borderLeftColor: emptyColor,
    animation: spin + " " + speed + " linear infinite"
  }, styles2);
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$4({
    ref,
    __css: spinnerStyles,
    className: _className
  }, rest), label && /* @__PURE__ */ react.exports.createElement(VisuallyHidden, null, label));
});
function _objectWithoutPropertiesLoose$3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
var _createContext$2 = createContext({
  strict: false,
  name: "ButtonGroupContext"
}), useButtonGroup = _createContext$2[1];
var _excluded$3$1 = ["label", "placement", "spacing", "children", "className", "__css"];
var ButtonSpinner = function ButtonSpinner2(props) {
  var label = props.label, placement = props.placement, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, _props$children = props.children, children = _props$children === void 0 ? /* @__PURE__ */ react.exports.createElement(Spinner, {
    color: "currentColor",
    width: "1em",
    height: "1em"
  }) : _props$children, className = props.className, __css = props.__css, rest = _objectWithoutPropertiesLoose$3(props, _excluded$3$1);
  var _className = cx("chakra-button__spinner", className);
  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = react.exports.useMemo(function() {
    var _extends2;
    return _extends$3((_extends2 = {
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute"
    }, _extends2[marginProp] = label ? spacing2 : 0, _extends2.fontSize = "1em", _extends2.lineHeight = "normal", _extends2), __css);
  }, [__css, label, marginProp, spacing2]);
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$3({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};
var _excluded$2$1 = ["children", "className"];
var ButtonIcon = function ButtonIcon2(props) {
  var children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose$3(props, _excluded$2$1);
  var _children = /* @__PURE__ */ react.exports.isValidElement(children) ? /* @__PURE__ */ react.exports.cloneElement(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  var _className = cx("chakra-button__icon", className);
  return /* @__PURE__ */ react.exports.createElement(chakra.span, _extends$3({
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0
  }, rest, {
    className: _className
  }), _children);
};
function useButtonType(value) {
  var _React$useState = react.exports.useState(!value), isButton = _React$useState[0], setIsButton = _React$useState[1];
  var refCallback = react.exports.useCallback(function(node2) {
    if (!node2)
      return;
    setIsButton(node2.tagName === "BUTTON");
  }, []);
  var type = isButton ? "button" : void 0;
  return {
    ref: refCallback,
    type
  };
}
var _excluded$1$2 = ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"];
var Button = /* @__PURE__ */ forwardRef(function(props, ref) {
  var group = useButtonGroup();
  var styles2 = useStyleConfig("Button", _extends$3({}, group, props));
  var _omitThemingProps = omitThemingProps(props), _omitThemingProps$isD = _omitThemingProps.isDisabled, isDisabled = _omitThemingProps$isD === void 0 ? group == null ? void 0 : group.isDisabled : _omitThemingProps$isD, isLoading = _omitThemingProps.isLoading, isActive = _omitThemingProps.isActive, isFullWidth = _omitThemingProps.isFullWidth, children = _omitThemingProps.children, leftIcon = _omitThemingProps.leftIcon, rightIcon = _omitThemingProps.rightIcon, loadingText = _omitThemingProps.loadingText, _omitThemingProps$ico = _omitThemingProps.iconSpacing, iconSpacing2 = _omitThemingProps$ico === void 0 ? "0.5rem" : _omitThemingProps$ico, type = _omitThemingProps.type, spinner2 = _omitThemingProps.spinner, _omitThemingProps$spi = _omitThemingProps.spinnerPlacement, spinnerPlacement = _omitThemingProps$spi === void 0 ? "start" : _omitThemingProps$spi, className = _omitThemingProps.className, as = _omitThemingProps.as, rest = _objectWithoutPropertiesLoose$3(_omitThemingProps, _excluded$1$2);
  var buttonStyles = react.exports.useMemo(function() {
    var _styles$_focus;
    var _focus = mergeWith({}, (_styles$_focus = styles2 == null ? void 0 : styles2["_focus"]) != null ? _styles$_focus : {}, {
      zIndex: 1
    });
    return _extends$3({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      width: isFullWidth ? "100%" : "auto"
    }, styles2, !!group && {
      _focus
    });
  }, [styles2, group, isFullWidth]);
  var _useButtonType = useButtonType(as), _ref = _useButtonType.ref, defaultType = _useButtonType.type;
  var contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing: iconSpacing2,
    children
  };
  return /* @__PURE__ */ react.exports.createElement(chakra.button, _extends$3({
    disabled: isDisabled || isLoading,
    ref: useMergeRefs(ref, _ref),
    as,
    type: type != null ? type : defaultType,
    "data-active": dataAttr(isActive),
    "data-loading": dataAttr(isLoading),
    __css: buttonStyles,
    className: cx("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /* @__PURE__ */ react.exports.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start",
    spacing: iconSpacing2
  }, spinner2), isLoading ? loadingText || /* @__PURE__ */ react.exports.createElement(chakra.span, {
    opacity: 0
  }, /* @__PURE__ */ react.exports.createElement(ButtonContent, contentProps)) : /* @__PURE__ */ react.exports.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /* @__PURE__ */ react.exports.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end",
    spacing: iconSpacing2
  }, spinner2));
});
function ButtonContent(props) {
  var leftIcon = props.leftIcon, rightIcon = props.rightIcon, children = props.children, iconSpacing2 = props.iconSpacing;
  return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, null, leftIcon && /* @__PURE__ */ react.exports.createElement(ButtonIcon, {
    marginEnd: iconSpacing2
  }, leftIcon), children, rightIcon && /* @__PURE__ */ react.exports.createElement(ButtonIcon, {
    marginStart: iconSpacing2
  }, rightIcon));
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _createContext$1 = createContext({
  strict: false,
  name: "FormControlContext"
}), useFormControlContext = _createContext$1[1];
var _excluded$1$1 = ["isDisabled", "isInvalid", "isReadOnly", "isRequired"], _excluded2 = ["id", "disabled", "readOnly", "required", "isRequired", "isInvalid", "isReadOnly", "isDisabled", "onFocus", "onBlur"];
function useFormControl(props) {
  var _useFormControlProps = useFormControlProps(props), isDisabled = _useFormControlProps.isDisabled, isInvalid = _useFormControlProps.isInvalid, isReadOnly = _useFormControlProps.isReadOnly, isRequired = _useFormControlProps.isRequired, rest = _objectWithoutPropertiesLoose$2(_useFormControlProps, _excluded$1$1);
  return _extends$2({}, rest, {
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  });
}
function useFormControlProps(props) {
  var _ref, _ref2, _ref3;
  var field = useFormControlContext();
  var id2 = props.id, disabled2 = props.disabled, readOnly2 = props.readOnly, required = props.required, isRequired = props.isRequired, isInvalid = props.isInvalid, isReadOnly = props.isReadOnly, isDisabled = props.isDisabled, onFocus = props.onFocus, onBlur = props.onBlur, rest = _objectWithoutPropertiesLoose$2(props, _excluded2);
  var labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if (field != null && field.hasFeedbackText && field != null && field.isInvalid) {
    labelIds.push(field.feedbackId);
  }
  if (field != null && field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return _extends$2({}, rest, {
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id2 != null ? id2 : field == null ? void 0 : field.id,
    isDisabled: (_ref = disabled2 != null ? disabled2 : isDisabled) != null ? _ref : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_ref2 = readOnly2 != null ? readOnly2 : isReadOnly) != null ? _ref2 : field == null ? void 0 : field.isReadOnly,
    isRequired: (_ref3 = required != null ? required : isRequired) != null ? _ref3 : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur)
  });
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$h = ["ratio", "children", "className"];
var AspectRatio = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _props$ratio = props.ratio, ratio = _props$ratio === void 0 ? 4 / 3 : _props$ratio, children = props.children, className = props.className, rest = _objectWithoutPropertiesLoose$1(props, _excluded$h);
  var child = react.exports.Children.only(children);
  var _className = cx("chakra-aspect-ratio", className);
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    position: "relative",
    className: _className,
    _before: {
      height: 0,
      content: '""',
      display: "block",
      paddingBottom: mapResponsive(ratio, function(r2) {
        return 1 / r2 * 100 + "%";
      })
    },
    __css: {
      "& > *:not(style)": {
        overflow: "hidden",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      },
      "& > img, & > video": {
        objectFit: "cover"
      }
    }
  }, rest), child);
});
if (__DEV__) {
  AspectRatio.displayName = "AspectRatio";
}
var _excluded$g = ["className"];
var Badge = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Badge", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$g);
  return /* @__PURE__ */ react.exports.createElement(chakra.span, _extends$1({
    ref,
    className: cx("chakra-badge", props.className)
  }, rest, {
    __css: _extends$1({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles2)
  }));
});
if (__DEV__) {
  Badge.displayName = "Badge";
}
var _excluded$f = ["size", "centerContent"], _excluded2$5 = ["size"];
var Box = chakra("div");
if (__DEV__) {
  Box.displayName = "Box";
}
var Square = /* @__PURE__ */ forwardRef(function(props, ref) {
  var size2 = props.size, _props$centerContent = props.centerContent, centerContent = _props$centerContent === void 0 ? true : _props$centerContent, rest = _objectWithoutPropertiesLoose$1(props, _excluded$f);
  var styles2 = centerContent ? {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } : {};
  return /* @__PURE__ */ react.exports.createElement(Box, _extends$1({
    ref,
    boxSize: size2,
    __css: _extends$1({}, styles2, {
      flexShrink: 0,
      flexGrow: 0
    })
  }, rest));
});
if (__DEV__) {
  Square.displayName = "Square";
}
var Circle = /* @__PURE__ */ forwardRef(function(props, ref) {
  var size2 = props.size, rest = _objectWithoutPropertiesLoose$1(props, _excluded2$5);
  return /* @__PURE__ */ react.exports.createElement(Square, _extends$1({
    size: size2,
    ref,
    borderRadius: "9999px"
  }, rest));
});
if (__DEV__) {
  Circle.displayName = "Circle";
}
var Center = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
if (__DEV__) {
  Center.displayName = "Center";
}
var _excluded$d = ["className"];
var Code = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Code", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$d);
  return /* @__PURE__ */ react.exports.createElement(chakra.code, _extends$1({
    ref,
    className: cx("chakra-code", props.className)
  }, rest, {
    __css: _extends$1({
      display: "inline-block"
    }, styles2)
  }));
});
if (__DEV__) {
  Code.displayName = "Code";
}
var _excluded$c = ["className", "centerContent"];
var Container = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, centerContent = _omitThemingProps.centerContent, rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$c);
  var styles2 = useStyleConfig("Container", props);
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    className: cx("chakra-container", className)
  }, rest, {
    __css: _extends$1({}, styles2, centerContent && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
  }));
});
if (__DEV__) {
  Container.displayName = "Container";
}
var _excluded$b = ["borderLeftWidth", "borderBottomWidth", "borderTopWidth", "borderRightWidth", "borderWidth", "borderStyle", "borderColor"], _excluded2$4 = ["className", "orientation", "__css"];
var Divider = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _useStyleConfig = useStyleConfig("Divider", props), borderLeftWidth = _useStyleConfig.borderLeftWidth, borderBottomWidth = _useStyleConfig.borderBottomWidth, borderTopWidth = _useStyleConfig.borderTopWidth, borderRightWidth = _useStyleConfig.borderRightWidth, borderWidth = _useStyleConfig.borderWidth, borderStyle = _useStyleConfig.borderStyle, borderColor = _useStyleConfig.borderColor, styles2 = _objectWithoutPropertiesLoose$1(_useStyleConfig, _excluded$b);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, _omitThemingProps$ori = _omitThemingProps.orientation, orientation = _omitThemingProps$ori === void 0 ? "horizontal" : _omitThemingProps$ori, __css = _omitThemingProps.__css, rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded2$4);
  var dividerStyles = {
    vertical: {
      borderLeftWidth: borderLeftWidth || borderRightWidth || borderWidth || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: borderBottomWidth || borderTopWidth || borderWidth || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ react.exports.createElement(chakra.hr, _extends$1({
    ref,
    "aria-orientation": orientation
  }, rest, {
    __css: _extends$1({}, styles2, {
      border: "0",
      borderColor,
      borderStyle
    }, dividerStyles[orientation], __css),
    className: cx("chakra-divider", className)
  }));
});
if (__DEV__) {
  Divider.displayName = "Divider";
}
var _excluded$a = ["direction", "align", "justify", "wrap", "basis", "grow", "shrink"];
var Flex = /* @__PURE__ */ forwardRef(function(props, ref) {
  var direction2 = props.direction, align = props.align, justify = props.justify, wrap3 = props.wrap, basis = props.basis, grow = props.grow, shrink = props.shrink, rest = _objectWithoutPropertiesLoose$1(props, _excluded$a);
  var styles2 = {
    display: "flex",
    flexDirection: direction2,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap3,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink
  };
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    __css: styles2
  }, rest));
});
if (__DEV__) {
  Flex.displayName = "Flex";
}
var _excluded$9 = ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"];
var Grid = /* @__PURE__ */ forwardRef(function(props, ref) {
  var area = props.area, templateAreas = props.templateAreas, gap = props.gap, rowGap = props.rowGap, columnGap = props.columnGap, column2 = props.column, row = props.row, autoFlow = props.autoFlow, autoRows = props.autoRows, templateRows = props.templateRows, autoColumns = props.autoColumns, templateColumns = props.templateColumns, rest = _objectWithoutPropertiesLoose$1(props, _excluded$9);
  var styles2 = {
    display: "grid",
    gridArea: area,
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column2,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    __css: styles2
  }, rest));
});
if (__DEV__) {
  Grid.displayName = "Grid";
}
var _excluded$8 = ["className"];
var Heading = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Heading", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  var rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$8);
  return /* @__PURE__ */ react.exports.createElement(chakra.h2, _extends$1({
    ref,
    className: cx("chakra-heading", props.className)
  }, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Heading.displayName = "Heading";
}
var _excluded$7 = ["className"];
var Kbd = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Kbd", props);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$7);
  return /* @__PURE__ */ react.exports.createElement(chakra.kbd, _extends$1({
    ref,
    className: cx("chakra-kbd", className)
  }, rest, {
    __css: _extends$1({
      fontFamily: "mono"
    }, styles2)
  }));
});
if (__DEV__) {
  Kbd.displayName = "Kbd";
}
var _excluded$6 = ["className", "isExternal"];
var Link = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Link", props);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, isExternal = _omitThemingProps.isExternal, rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$6);
  return /* @__PURE__ */ react.exports.createElement(chakra.a, _extends$1({
    target: isExternal ? "_blank" : void 0,
    rel: isExternal ? "noopener" : void 0,
    ref,
    className: cx("chakra-link", className)
  }, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Link.displayName = "Link";
}
var _excluded$5 = ["children", "styleType", "stylePosition", "spacing"], _excluded2$2 = ["as"], _excluded3 = ["as"];
var _createContext = createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in a `<*List />` "
}), StylesProvider = _createContext[0], useStyles = _createContext[1];
var List = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _ref;
  var styles2 = useMultiStyleConfig("List", props);
  var _omitThemingProps = omitThemingProps(props), children = _omitThemingProps.children, _omitThemingProps$sty = _omitThemingProps.styleType, styleType = _omitThemingProps$sty === void 0 ? "none" : _omitThemingProps$sty, stylePosition = _omitThemingProps.stylePosition, spacing2 = _omitThemingProps.spacing, rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$5);
  var validChildren = getValidChildren(children);
  var selector2 = "& > *:not(style) ~ *:not(style)";
  var spacingStyle = spacing2 ? (_ref = {}, _ref[selector2] = {
    mt: spacing2
  }, _ref) : {};
  return /* @__PURE__ */ react.exports.createElement(StylesProvider, {
    value: styles2
  }, /* @__PURE__ */ react.exports.createElement(chakra.ul, _extends$1({
    ref,
    listStyleType: styleType,
    listStylePosition: stylePosition,
    role: "list",
    __css: _extends$1({}, styles2.container, spacingStyle)
  }, rest), validChildren));
});
if (__DEV__) {
  List.displayName = "List";
}
var OrderedList = /* @__PURE__ */ forwardRef(function(props, ref) {
  props.as;
  var rest = _objectWithoutPropertiesLoose$1(props, _excluded2$2);
  return /* @__PURE__ */ react.exports.createElement(List, _extends$1({
    ref,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em"
  }, rest));
});
if (__DEV__) {
  OrderedList.displayName = "OrderedList";
}
var UnorderedList = /* @__PURE__ */ forwardRef(function(props, ref) {
  props.as;
  var rest = _objectWithoutPropertiesLoose$1(props, _excluded3);
  return /* @__PURE__ */ react.exports.createElement(List, _extends$1({
    ref,
    as: "ul",
    styleType: "initial",
    marginStart: "1em"
  }, rest));
});
if (__DEV__) {
  UnorderedList.displayName = "UnorderedList";
}
var ListItem = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyles();
  return /* @__PURE__ */ react.exports.createElement(chakra.li, _extends$1({
    ref
  }, props, {
    __css: styles2.item
  }));
});
if (__DEV__) {
  ListItem.displayName = "ListItem";
}
var ListIcon = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyles();
  return /* @__PURE__ */ react.exports.createElement(Icon, _extends$1({
    ref,
    role: "presentation"
  }, props, {
    __css: styles2.icon
  }));
});
if (__DEV__) {
  ListIcon.displayName = "ListIcon";
}
var _excluded$4 = ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"];
var SimpleGrid = /* @__PURE__ */ forwardRef(function(props, ref) {
  var columns = props.columns, spacingX = props.spacingX, spacingY = props.spacingY, spacing2 = props.spacing, minChildWidth = props.minChildWidth, rest = _objectWithoutPropertiesLoose$1(props, _excluded$4);
  var templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /* @__PURE__ */ react.exports.createElement(Grid, _extends$1({
    ref,
    gap: spacing2,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns
  }, rest));
});
if (__DEV__) {
  SimpleGrid.displayName = "SimpleGrid";
}
function toPx(n2) {
  return isNumber(n2) ? n2 + "px" : n2;
}
function widthToColumns(width) {
  return mapResponsive(width, function(value) {
    return isNull(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))";
  });
}
function countToColumns(count) {
  return mapResponsive(count, function(value) {
    return isNull(value) ? null : "repeat(" + value + ", minmax(0, 1fr))";
  });
}
var Spacer = chakra("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
if (__DEV__) {
  Spacer.displayName = "Spacer";
}
var selector = "& > *:not(style) ~ *:not(style)";
function getStackStyles(options) {
  var _ref;
  var spacing2 = options.spacing, direction2 = options.direction;
  var directionStyles = {
    column: {
      marginTop: spacing2,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: 0
    },
    row: {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: 0,
      marginStart: spacing2
    },
    "column-reverse": {
      marginTop: 0,
      marginEnd: 0,
      marginBottom: spacing2,
      marginStart: 0
    },
    "row-reverse": {
      marginTop: 0,
      marginEnd: spacing2,
      marginBottom: 0,
      marginStart: 0
    }
  };
  return _ref = {
    flexDirection: direction2
  }, _ref[selector] = mapResponsive(direction2, function(value) {
    return directionStyles[value];
  }), _ref;
}
function getDividerStyles(options) {
  var spacing2 = options.spacing, direction2 = options.direction;
  var dividerStyles = {
    column: {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing2,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing2,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": mapResponsive(direction2, function(value) {
      return dividerStyles[value];
    })
  };
}
var _excluded$3 = ["isInline", "direction", "align", "justify", "spacing", "wrap", "children", "divider", "className", "shouldWrapChildren"];
var StackItem = function StackItem2(props) {
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    className: "chakra-stack__item"
  }, props, {
    __css: _extends$1({
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0
    }, props["__css"])
  }));
};
var Stack = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _ref;
  var isInline = props.isInline, directionProp = props.direction, align = props.align, justify = props.justify, _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, wrap3 = props.wrap, children = props.children, divider2 = props.divider, className = props.className, shouldWrapChildren = props.shouldWrapChildren, rest = _objectWithoutPropertiesLoose$1(props, _excluded$3);
  var direction2 = isInline ? "row" : directionProp != null ? directionProp : "column";
  var styles2 = react.exports.useMemo(function() {
    return getStackStyles({
      direction: direction2,
      spacing: spacing2
    });
  }, [direction2, spacing2]);
  var dividerStyle = react.exports.useMemo(function() {
    return getDividerStyles({
      spacing: spacing2,
      direction: direction2
    });
  }, [spacing2, direction2]);
  var hasDivider = !!divider2;
  var shouldUseChildren = !shouldWrapChildren && !hasDivider;
  var validChildren = getValidChildren(children);
  var clones = shouldUseChildren ? validChildren : validChildren.map(function(child, index) {
    var key = typeof child.key !== "undefined" ? child.key : index;
    var isLast = index + 1 === validChildren.length;
    var wrappedChild = /* @__PURE__ */ react.exports.createElement(StackItem, {
      key
    }, child);
    var _child = shouldWrapChildren ? wrappedChild : child;
    if (!hasDivider)
      return _child;
    var clonedDivider = /* @__PURE__ */ react.exports.cloneElement(divider2, {
      __css: dividerStyle
    });
    var _divider = isLast ? null : clonedDivider;
    return /* @__PURE__ */ react.exports.createElement(react.exports.Fragment, {
      key
    }, _child, _divider);
  });
  var _className = cx("chakra-stack", className);
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: styles2.flexDirection,
    flexWrap: wrap3,
    className: _className,
    __css: hasDivider ? {} : (_ref = {}, _ref[selector] = styles2[selector], _ref)
  }, rest), clones);
});
if (__DEV__) {
  Stack.displayName = "Stack";
}
var HStack = /* @__PURE__ */ forwardRef(function(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(Stack, _extends$1({
    align: "center"
  }, props, {
    direction: "row",
    ref
  }));
});
if (__DEV__) {
  HStack.displayName = "HStack";
}
var VStack = /* @__PURE__ */ forwardRef(function(props, ref) {
  return /* @__PURE__ */ react.exports.createElement(Stack, _extends$1({
    align: "center"
  }, props, {
    direction: "column",
    ref
  }));
});
if (__DEV__) {
  VStack.displayName = "VStack";
}
var _excluded$2 = ["className", "align", "decoration", "casing"];
var Text = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Text", props);
  var _omitThemingProps = omitThemingProps(props);
  _omitThemingProps.className;
  _omitThemingProps.align;
  _omitThemingProps.decoration;
  _omitThemingProps.casing;
  var rest = _objectWithoutPropertiesLoose$1(_omitThemingProps, _excluded$2);
  var aliasedProps = filterUndefined({
    textAlign: props.align,
    textDecoration: props.decoration,
    textTransform: props.casing
  });
  return /* @__PURE__ */ react.exports.createElement(chakra.p, _extends$1({
    ref,
    className: cx("chakra-text", props.className)
  }, aliasedProps, rest, {
    __css: styles2
  }));
});
if (__DEV__) {
  Text.displayName = "Text";
}
var _excluded$1 = ["spacing", "spacingX", "spacingY", "children", "justify", "direction", "align", "className", "shouldWrapChildren"], _excluded2$1 = ["className"];
var Wrap = /* @__PURE__ */ forwardRef(function(props, ref) {
  var _props$spacing = props.spacing, spacing2 = _props$spacing === void 0 ? "0.5rem" : _props$spacing, spacingX = props.spacingX, spacingY = props.spacingY, children = props.children, justify = props.justify, direction2 = props.direction, align = props.align, className = props.className, shouldWrapChildren = props.shouldWrapChildren, rest = _objectWithoutPropertiesLoose$1(props, _excluded$1);
  var styles2 = react.exports.useMemo(function() {
    var _spacingX$spacingY = {
      spacingX,
      spacingY
    }, _spacingX$spacingY$sp = _spacingX$spacingY.spacingX, x2 = _spacingX$spacingY$sp === void 0 ? spacing2 : _spacingX$spacingY$sp, _spacingX$spacingY$sp2 = _spacingX$spacingY.spacingY, y2 = _spacingX$spacingY$sp2 === void 0 ? spacing2 : _spacingX$spacingY$sp2;
    return {
      "--chakra-wrap-x-spacing": function chakraWrapXSpacing(theme2) {
        return mapResponsive(x2, function(value) {
          return tokenToCSSVar("space", value)(theme2);
        });
      },
      "--chakra-wrap-y-spacing": function chakraWrapYSpacing(theme2) {
        return mapResponsive(y2, function(value) {
          return tokenToCSSVar("space", value)(theme2);
        });
      },
      "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
      "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction2,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
      }
    };
  }, [spacing2, spacingX, spacingY, justify, align, direction2]);
  var childrenToRender = shouldWrapChildren ? react.exports.Children.map(children, function(child, index) {
    return /* @__PURE__ */ react.exports.createElement(WrapItem, {
      key: index
    }, child);
  }) : children;
  return /* @__PURE__ */ react.exports.createElement(chakra.div, _extends$1({
    ref,
    className: cx("chakra-wrap", className)
  }, rest), /* @__PURE__ */ react.exports.createElement(chakra.ul, {
    className: "chakra-wrap__list",
    __css: styles2
  }, childrenToRender));
});
if (__DEV__) {
  Wrap.displayName = "Wrap";
}
var WrapItem = /* @__PURE__ */ forwardRef(function(props, ref) {
  var className = props.className, rest = _objectWithoutPropertiesLoose$1(props, _excluded2$1);
  return /* @__PURE__ */ react.exports.createElement(chakra.li, _extends$1({
    ref,
    __css: {
      display: "flex",
      alignItems: "flex-start"
    },
    className: cx("chakra-wrap__listitem", className)
  }, rest));
});
if (__DEV__) {
  WrapItem.displayName = "WrapItem";
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded = ["className", "rows"];
var Textarea = /* @__PURE__ */ forwardRef(function(props, ref) {
  var styles2 = useStyleConfig("Textarea", props);
  var _omitThemingProps = omitThemingProps(props), className = _omitThemingProps.className, rows = _omitThemingProps.rows, rest = _objectWithoutPropertiesLoose(_omitThemingProps, _excluded);
  var textareaProps = useFormControl(rest);
  var omitted = ["h", "minH", "height", "minHeight"];
  var textareaStyles = rows ? omit(styles2, omitted) : styles2;
  return /* @__PURE__ */ react.exports.createElement(chakra.textarea, _extends({
    ref,
    rows
  }, textareaProps, {
    className: cx("chakra-textarea", className),
    __css: textareaStyles
  }));
});
if (__DEV__) {
  Textarea.displayName = "Textarea";
}
var ChakraProvider = ChakraProvider$1;
ChakraProvider.defaultProps = {
  theme
};
var diff$1 = { exports: {} };
/*!

 diff v3.5.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root2, factory2) {
    module.exports = factory2();
  })(commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module2 = installedModules[moduleId] = {
          exports: {},
          id: moduleId,
          loaded: false
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.loaded = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    }([
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.canonicalize = exports2.convertChangesToXML = exports2.convertChangesToDMP = exports2.merge = exports2.parsePatch = exports2.applyPatches = exports2.applyPatch = exports2.createPatch = exports2.createTwoFilesPatch = exports2.structuredPatch = exports2.diffArrays = exports2.diffJson = exports2.diffCss = exports2.diffSentences = exports2.diffTrimmedLines = exports2.diffLines = exports2.diffWordsWithSpace = exports2.diffWords = exports2.diffChars = exports2.Diff = void 0;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        var _character = __webpack_require__(2);
        var _word = __webpack_require__(3);
        var _line = __webpack_require__(5);
        var _sentence = __webpack_require__(6);
        var _css = __webpack_require__(7);
        var _json = __webpack_require__(8);
        var _array = __webpack_require__(9);
        var _apply = __webpack_require__(10);
        var _parse = __webpack_require__(11);
        var _merge = __webpack_require__(13);
        var _create = __webpack_require__(14);
        var _dmp = __webpack_require__(16);
        var _xml = __webpack_require__(17);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        exports2.Diff = _base2["default"];
        exports2.diffChars = _character.diffChars;
        exports2.diffWords = _word.diffWords;
        exports2.diffWordsWithSpace = _word.diffWordsWithSpace;
        exports2.diffLines = _line.diffLines;
        exports2.diffTrimmedLines = _line.diffTrimmedLines;
        exports2.diffSentences = _sentence.diffSentences;
        exports2.diffCss = _css.diffCss;
        exports2.diffJson = _json.diffJson;
        exports2.diffArrays = _array.diffArrays;
        exports2.structuredPatch = _create.structuredPatch;
        exports2.createTwoFilesPatch = _create.createTwoFilesPatch;
        exports2.createPatch = _create.createPatch;
        exports2.applyPatch = _apply.applyPatch;
        exports2.applyPatches = _apply.applyPatches;
        exports2.parsePatch = _parse.parsePatch;
        exports2.merge = _merge.merge;
        exports2.convertChangesToDMP = _dmp.convertChangesToDMP;
        exports2.convertChangesToXML = _xml.convertChangesToXML;
        exports2.canonicalize = _json.canonicalize;
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2["default"] = Diff;
        function Diff() {
        }
        Diff.prototype = {
          diff: function diff2(oldString, newString) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var callback = options.callback;
            if (typeof options === "function") {
              callback = options;
              options = {};
            }
            this.options = options;
            var self2 = this;
            function done(value) {
              if (callback) {
                setTimeout(function() {
                  callback(void 0, value);
                }, 0);
                return true;
              } else {
                return value;
              }
            }
            oldString = this.castInput(oldString);
            newString = this.castInput(newString);
            oldString = this.removeEmpty(this.tokenize(oldString));
            newString = this.removeEmpty(this.tokenize(newString));
            var newLen = newString.length, oldLen = oldString.length;
            var editLength = 1;
            var maxEditLength = newLen + oldLen;
            var bestPath = [{ newPos: -1, components: [] }];
            var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
            if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
              return done([{ value: this.join(newString), count: newString.length }]);
            }
            function execEditLength() {
              for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
                var basePath = void 0;
                var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
                if (addPath) {
                  bestPath[diagonalPath - 1] = void 0;
                }
                var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
                if (!canAdd && !canRemove) {
                  bestPath[diagonalPath] = void 0;
                  continue;
                }
                if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
                  basePath = clonePath(removePath);
                  self2.pushComponent(basePath.components, void 0, true);
                } else {
                  basePath = addPath;
                  basePath.newPos++;
                  self2.pushComponent(basePath.components, true, void 0);
                }
                _oldPos = self2.extractCommon(basePath, newString, oldString, diagonalPath);
                if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
                  return done(buildValues(self2, basePath.components, newString, oldString, self2.useLongestToken));
                } else {
                  bestPath[diagonalPath] = basePath;
                }
              }
              editLength++;
            }
            if (callback) {
              (function exec() {
                setTimeout(function() {
                  if (editLength > maxEditLength) {
                    return callback();
                  }
                  if (!execEditLength()) {
                    exec();
                  }
                }, 0);
              })();
            } else {
              while (editLength <= maxEditLength) {
                var ret = execEditLength();
                if (ret) {
                  return ret;
                }
              }
            }
          },
          pushComponent: function pushComponent(components2, added, removed) {
            var last = components2[components2.length - 1];
            if (last && last.added === added && last.removed === removed) {
              components2[components2.length - 1] = { count: last.count + 1, added, removed };
            } else {
              components2.push({ count: 1, added, removed });
            }
          },
          extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
            var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
            while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
              newPos++;
              oldPos++;
              commonCount++;
            }
            if (commonCount) {
              basePath.components.push({ count: commonCount });
            }
            basePath.newPos = newPos;
            return oldPos;
          },
          equals: function equals(left, right) {
            if (this.options.comparator) {
              return this.options.comparator(left, right);
            } else {
              return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
            }
          },
          removeEmpty: function removeEmpty(array) {
            var ret = [];
            for (var i = 0; i < array.length; i++) {
              if (array[i]) {
                ret.push(array[i]);
              }
            }
            return ret;
          },
          castInput: function castInput(value) {
            return value;
          },
          tokenize: function tokenize(value) {
            return value.split("");
          },
          join: function join(chars) {
            return chars.join("");
          }
        };
        function buildValues(diff2, components2, newString, oldString, useLongestToken) {
          var componentPos = 0, componentLen = components2.length, newPos = 0, oldPos = 0;
          for (; componentPos < componentLen; componentPos++) {
            var component = components2[componentPos];
            if (!component.removed) {
              if (!component.added && useLongestToken) {
                var value = newString.slice(newPos, newPos + component.count);
                value = value.map(function(value2, i) {
                  var oldValue = oldString[oldPos + i];
                  return oldValue.length > value2.length ? oldValue : value2;
                });
                component.value = diff2.join(value);
              } else {
                component.value = diff2.join(newString.slice(newPos, newPos + component.count));
              }
              newPos += component.count;
              if (!component.added) {
                oldPos += component.count;
              }
            } else {
              component.value = diff2.join(oldString.slice(oldPos, oldPos + component.count));
              oldPos += component.count;
              if (componentPos && components2[componentPos - 1].added) {
                var tmp = components2[componentPos - 1];
                components2[componentPos - 1] = components2[componentPos];
                components2[componentPos] = tmp;
              }
            }
          }
          var lastComponent = components2[componentLen - 1];
          if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff2.equals("", lastComponent.value)) {
            components2[componentLen - 2].value += lastComponent.value;
            components2.pop();
          }
          return components2;
        }
        function clonePath(path) {
          return { newPos: path.newPos, components: path.components.slice(0) };
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.characterDiff = void 0;
        exports2.diffChars = diffChars;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var characterDiff = exports2.characterDiff = new _base2["default"]();
        function diffChars(oldStr, newStr, options) {
          return characterDiff.diff(oldStr, newStr, options);
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.wordDiff = void 0;
        exports2.diffWords = diffWords;
        exports2.diffWordsWithSpace = diffWordsWithSpace;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        var _params = __webpack_require__(4);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
        var reWhitespace = /\S/;
        var wordDiff = exports2.wordDiff = new _base2["default"]();
        wordDiff.equals = function(left, right) {
          if (this.options.ignoreCase) {
            left = left.toLowerCase();
            right = right.toLowerCase();
          }
          return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
        };
        wordDiff.tokenize = function(value) {
          var tokens2 = value.split(/(\s+|\b)/);
          for (var i = 0; i < tokens2.length - 1; i++) {
            if (!tokens2[i + 1] && tokens2[i + 2] && extendedWordChars.test(tokens2[i]) && extendedWordChars.test(tokens2[i + 2])) {
              tokens2[i] += tokens2[i + 2];
              tokens2.splice(i + 1, 2);
              i--;
            }
          }
          return tokens2;
        };
        function diffWords(oldStr, newStr, options) {
          options = (0, _params.generateOptions)(options, { ignoreWhitespace: true });
          return wordDiff.diff(oldStr, newStr, options);
        }
        function diffWordsWithSpace(oldStr, newStr, options) {
          return wordDiff.diff(oldStr, newStr, options);
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2.generateOptions = generateOptions;
        function generateOptions(options, defaults) {
          if (typeof options === "function") {
            defaults.callback = options;
          } else if (options) {
            for (var name in options) {
              if (options.hasOwnProperty(name)) {
                defaults[name] = options[name];
              }
            }
          }
          return defaults;
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.lineDiff = void 0;
        exports2.diffLines = diffLines;
        exports2.diffTrimmedLines = diffTrimmedLines;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        var _params = __webpack_require__(4);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var lineDiff = exports2.lineDiff = new _base2["default"]();
        lineDiff.tokenize = function(value) {
          var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
          if (!linesAndNewlines[linesAndNewlines.length - 1]) {
            linesAndNewlines.pop();
          }
          for (var i = 0; i < linesAndNewlines.length; i++) {
            var line2 = linesAndNewlines[i];
            if (i % 2 && !this.options.newlineIsToken) {
              retLines[retLines.length - 1] += line2;
            } else {
              if (this.options.ignoreWhitespace) {
                line2 = line2.trim();
              }
              retLines.push(line2);
            }
          }
          return retLines;
        };
        function diffLines(oldStr, newStr, callback) {
          return lineDiff.diff(oldStr, newStr, callback);
        }
        function diffTrimmedLines(oldStr, newStr, callback) {
          var options = (0, _params.generateOptions)(callback, { ignoreWhitespace: true });
          return lineDiff.diff(oldStr, newStr, options);
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.sentenceDiff = void 0;
        exports2.diffSentences = diffSentences;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var sentenceDiff = exports2.sentenceDiff = new _base2["default"]();
        sentenceDiff.tokenize = function(value) {
          return value.split(/(\S.+?[.!?])(?=\s+|$)/);
        };
        function diffSentences(oldStr, newStr, callback) {
          return sentenceDiff.diff(oldStr, newStr, callback);
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.cssDiff = void 0;
        exports2.diffCss = diffCss;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var cssDiff = exports2.cssDiff = new _base2["default"]();
        cssDiff.tokenize = function(value) {
          return value.split(/([{}:;,]|\s+)/);
        };
        function diffCss(oldStr, newStr, callback) {
          return cssDiff.diff(oldStr, newStr, callback);
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.jsonDiff = void 0;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        exports2.diffJson = diffJson;
        exports2.canonicalize = canonicalize;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        var _line = __webpack_require__(5);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var objectPrototypeToString = Object.prototype.toString;
        var jsonDiff = exports2.jsonDiff = new _base2["default"]();
        jsonDiff.useLongestToken = true;
        jsonDiff.tokenize = _line.lineDiff.tokenize;
        jsonDiff.castInput = function(value) {
          var _options = this.options, undefinedReplacement = _options.undefinedReplacement, _options$stringifyRep = _options.stringifyReplacer, stringifyReplacer = _options$stringifyRep === void 0 ? function(k2, v2) {
            return typeof v2 === "undefined" ? undefinedReplacement : v2;
          } : _options$stringifyRep;
          return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
        };
        jsonDiff.equals = function(left, right) {
          return _base2["default"].prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
        };
        function diffJson(oldObj, newObj, options) {
          return jsonDiff.diff(oldObj, newObj, options);
        }
        function canonicalize(obj, stack, replacementStack, replacer, key) {
          stack = stack || [];
          replacementStack = replacementStack || [];
          if (replacer) {
            obj = replacer(key, obj);
          }
          var i = void 0;
          for (i = 0; i < stack.length; i += 1) {
            if (stack[i] === obj) {
              return replacementStack[i];
            }
          }
          var canonicalizedObj = void 0;
          if (objectPrototypeToString.call(obj) === "[object Array]") {
            stack.push(obj);
            canonicalizedObj = new Array(obj.length);
            replacementStack.push(canonicalizedObj);
            for (i = 0; i < obj.length; i += 1) {
              canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
            }
            stack.pop();
            replacementStack.pop();
            return canonicalizedObj;
          }
          if (obj && obj.toJSON) {
            obj = obj.toJSON();
          }
          if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null) {
            stack.push(obj);
            canonicalizedObj = {};
            replacementStack.push(canonicalizedObj);
            var sortedKeys = [], _key = void 0;
            for (_key in obj) {
              if (obj.hasOwnProperty(_key)) {
                sortedKeys.push(_key);
              }
            }
            sortedKeys.sort();
            for (i = 0; i < sortedKeys.length; i += 1) {
              _key = sortedKeys[i];
              canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
            }
            stack.pop();
            replacementStack.pop();
          } else {
            canonicalizedObj = obj;
          }
          return canonicalizedObj;
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.arrayDiff = void 0;
        exports2.diffArrays = diffArrays;
        var _base = __webpack_require__(1);
        var _base2 = _interopRequireDefault(_base);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var arrayDiff = exports2.arrayDiff = new _base2["default"]();
        arrayDiff.tokenize = function(value) {
          return value.slice();
        };
        arrayDiff.join = arrayDiff.removeEmpty = function(value) {
          return value;
        };
        function diffArrays(oldArr, newArr, callback) {
          return arrayDiff.diff(oldArr, newArr, callback);
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.applyPatch = applyPatch;
        exports2.applyPatches = applyPatches;
        var _parse = __webpack_require__(11);
        var _distanceIterator = __webpack_require__(12);
        var _distanceIterator2 = _interopRequireDefault(_distanceIterator);
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function applyPatch(source, uniDiff) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (typeof uniDiff === "string") {
            uniDiff = (0, _parse.parsePatch)(uniDiff);
          }
          if (Array.isArray(uniDiff)) {
            if (uniDiff.length > 1) {
              throw new Error("applyPatch only works with a single input.");
            }
            uniDiff = uniDiff[0];
          }
          var lines = source.split(/\r\n|[\n\v\f\r\x85]/), delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [], hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line3, operation2, patchContent) {
            return line3 === patchContent;
          }, errorCount = 0, fuzzFactor = options.fuzzFactor || 0, minLine = 0, offset = 0, removeEOFNL = void 0, addEOFNL = void 0;
          function hunkFits(hunk2, toPos2) {
            for (var j2 = 0; j2 < hunk2.lines.length; j2++) {
              var line3 = hunk2.lines[j2], operation2 = line3.length > 0 ? line3[0] : " ", content2 = line3.length > 0 ? line3.substr(1) : line3;
              if (operation2 === " " || operation2 === "-") {
                if (!compareLine(toPos2 + 1, lines[toPos2], operation2, content2)) {
                  errorCount++;
                  if (errorCount > fuzzFactor) {
                    return false;
                  }
                }
                toPos2++;
              }
            }
            return true;
          }
          for (var i = 0; i < hunks.length; i++) {
            var hunk = hunks[i], maxLine = lines.length - hunk.oldLines, localOffset = 0, toPos = offset + hunk.oldStart - 1;
            var iterator = (0, _distanceIterator2["default"])(toPos, minLine, maxLine);
            for (; localOffset !== void 0; localOffset = iterator()) {
              if (hunkFits(hunk, toPos + localOffset)) {
                hunk.offset = offset += localOffset;
                break;
              }
            }
            if (localOffset === void 0) {
              return false;
            }
            minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
          }
          var diffOffset = 0;
          for (var _i = 0; _i < hunks.length; _i++) {
            var _hunk = hunks[_i], _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
            diffOffset += _hunk.newLines - _hunk.oldLines;
            if (_toPos < 0) {
              _toPos = 0;
            }
            for (var j = 0; j < _hunk.lines.length; j++) {
              var line2 = _hunk.lines[j], operation = line2.length > 0 ? line2[0] : " ", content = line2.length > 0 ? line2.substr(1) : line2, delimiter2 = _hunk.linedelimiters[j];
              if (operation === " ") {
                _toPos++;
              } else if (operation === "-") {
                lines.splice(_toPos, 1);
                delimiters.splice(_toPos, 1);
              } else if (operation === "+") {
                lines.splice(_toPos, 0, content);
                delimiters.splice(_toPos, 0, delimiter2);
                _toPos++;
              } else if (operation === "\\") {
                var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
                if (previousOperation === "+") {
                  removeEOFNL = true;
                } else if (previousOperation === "-") {
                  addEOFNL = true;
                }
              }
            }
          }
          if (removeEOFNL) {
            while (!lines[lines.length - 1]) {
              lines.pop();
              delimiters.pop();
            }
          } else if (addEOFNL) {
            lines.push("");
            delimiters.push("\n");
          }
          for (var _k = 0; _k < lines.length - 1; _k++) {
            lines[_k] = lines[_k] + delimiters[_k];
          }
          return lines.join("");
        }
        function applyPatches(uniDiff, options) {
          if (typeof uniDiff === "string") {
            uniDiff = (0, _parse.parsePatch)(uniDiff);
          }
          var currentIndex = 0;
          function processIndex() {
            var index = uniDiff[currentIndex++];
            if (!index) {
              return options.complete();
            }
            options.loadFile(index, function(err, data) {
              if (err) {
                return options.complete(err);
              }
              var updatedContent = applyPatch(data, index, options);
              options.patched(index, updatedContent, function(err2) {
                if (err2) {
                  return options.complete(err2);
                }
                processIndex();
              });
            });
          }
          processIndex();
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2.parsePatch = parsePatch;
        function parsePatch(uniDiff) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/), delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [], list2 = [], i = 0;
          function parseIndex() {
            var index = {};
            list2.push(index);
            while (i < diffstr.length) {
              var line2 = diffstr[i];
              if (/^(\-\-\-|\+\+\+|@@)\s/.test(line2)) {
                break;
              }
              var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line2);
              if (header) {
                index.index = header[1];
              }
              i++;
            }
            parseFileHeader(index);
            parseFileHeader(index);
            index.hunks = [];
            while (i < diffstr.length) {
              var _line = diffstr[i];
              if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
                break;
              } else if (/^@@/.test(_line)) {
                index.hunks.push(parseHunk());
              } else if (_line && options.strict) {
                throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
              } else {
                i++;
              }
            }
          }
          function parseFileHeader(index) {
            var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
            if (fileHeader) {
              var keyPrefix = fileHeader[1] === "---" ? "old" : "new";
              var data = fileHeader[2].split("	", 2);
              var fileName = data[0].replace(/\\\\/g, "\\");
              if (/^".*"$/.test(fileName)) {
                fileName = fileName.substr(1, fileName.length - 2);
              }
              index[keyPrefix + "FileName"] = fileName;
              index[keyPrefix + "Header"] = (data[1] || "").trim();
              i++;
            }
          }
          function parseHunk() {
            var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
            var hunk = {
              oldStart: +chunkHeader[1],
              oldLines: +chunkHeader[2] || 1,
              newStart: +chunkHeader[3],
              newLines: +chunkHeader[4] || 1,
              lines: [],
              linedelimiters: []
            };
            var addCount = 0, removeCount = 0;
            for (; i < diffstr.length; i++) {
              if (diffstr[i].indexOf("--- ") === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf("+++ ") === 0 && diffstr[i + 2].indexOf("@@") === 0) {
                break;
              }
              var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? " " : diffstr[i][0];
              if (operation === "+" || operation === "-" || operation === " " || operation === "\\") {
                hunk.lines.push(diffstr[i]);
                hunk.linedelimiters.push(delimiters[i] || "\n");
                if (operation === "+") {
                  addCount++;
                } else if (operation === "-") {
                  removeCount++;
                } else if (operation === " ") {
                  addCount++;
                  removeCount++;
                }
              } else {
                break;
              }
            }
            if (!addCount && hunk.newLines === 1) {
              hunk.newLines = 0;
            }
            if (!removeCount && hunk.oldLines === 1) {
              hunk.oldLines = 0;
            }
            if (options.strict) {
              if (addCount !== hunk.newLines) {
                throw new Error("Added line count did not match for hunk at line " + (chunkHeaderIndex + 1));
              }
              if (removeCount !== hunk.oldLines) {
                throw new Error("Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1));
              }
            }
            return hunk;
          }
          while (i < diffstr.length) {
            parseIndex();
          }
          return list2;
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2["default"] = function(start, minLine, maxLine) {
          var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
          return function iterator() {
            if (wantForward && !forwardExhausted) {
              if (backwardExhausted) {
                localOffset++;
              } else {
                wantForward = false;
              }
              if (start + localOffset <= maxLine) {
                return localOffset;
              }
              forwardExhausted = true;
            }
            if (!backwardExhausted) {
              if (!forwardExhausted) {
                wantForward = true;
              }
              if (minLine <= start - localOffset) {
                return -localOffset++;
              }
              backwardExhausted = true;
              return iterator();
            }
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.calcLineCount = calcLineCount;
        exports2.merge = merge3;
        var _create = __webpack_require__(14);
        var _parse = __webpack_require__(11);
        var _array = __webpack_require__(15);
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        function calcLineCount(hunk) {
          var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
          if (oldLines !== void 0) {
            hunk.oldLines = oldLines;
          } else {
            delete hunk.oldLines;
          }
          if (newLines !== void 0) {
            hunk.newLines = newLines;
          } else {
            delete hunk.newLines;
          }
        }
        function merge3(mine, theirs, base) {
          mine = loadPatch(mine, base);
          theirs = loadPatch(theirs, base);
          var ret = {};
          if (mine.index || theirs.index) {
            ret.index = mine.index || theirs.index;
          }
          if (mine.newFileName || theirs.newFileName) {
            if (!fileNameChanged(mine)) {
              ret.oldFileName = theirs.oldFileName || mine.oldFileName;
              ret.newFileName = theirs.newFileName || mine.newFileName;
              ret.oldHeader = theirs.oldHeader || mine.oldHeader;
              ret.newHeader = theirs.newHeader || mine.newHeader;
            } else if (!fileNameChanged(theirs)) {
              ret.oldFileName = mine.oldFileName;
              ret.newFileName = mine.newFileName;
              ret.oldHeader = mine.oldHeader;
              ret.newHeader = mine.newHeader;
            } else {
              ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
              ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
              ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
              ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
            }
          }
          ret.hunks = [];
          var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
          while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
            var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity }, theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };
            if (hunkBefore(mineCurrent, theirsCurrent)) {
              ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
              mineIndex++;
              theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
            } else if (hunkBefore(theirsCurrent, mineCurrent)) {
              ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
              theirsIndex++;
              mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
            } else {
              var mergedHunk = {
                oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
                oldLines: 0,
                newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
                newLines: 0,
                lines: []
              };
              mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
              theirsIndex++;
              mineIndex++;
              ret.hunks.push(mergedHunk);
            }
          }
          return ret;
        }
        function loadPatch(param, base) {
          if (typeof param === "string") {
            if (/^@@/m.test(param) || /^Index:/m.test(param)) {
              return (0, _parse.parsePatch)(param)[0];
            }
            if (!base) {
              throw new Error("Must provide a base reference or pass in a patch");
            }
            return (0, _create.structuredPatch)(void 0, void 0, base, param);
          }
          return param;
        }
        function fileNameChanged(patch) {
          return patch.newFileName && patch.newFileName !== patch.oldFileName;
        }
        function selectField(index, mine, theirs) {
          if (mine === theirs) {
            return mine;
          } else {
            index.conflict = true;
            return { mine, theirs };
          }
        }
        function hunkBefore(test, check) {
          return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
        }
        function cloneHunk(hunk, offset) {
          return {
            oldStart: hunk.oldStart,
            oldLines: hunk.oldLines,
            newStart: hunk.newStart + offset,
            newLines: hunk.newLines,
            lines: hunk.lines
          };
        }
        function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
          var mine = { offset: mineOffset, lines: mineLines, index: 0 }, their = { offset: theirOffset, lines: theirLines, index: 0 };
          insertLeading(hunk, mine, their);
          insertLeading(hunk, their, mine);
          while (mine.index < mine.lines.length && their.index < their.lines.length) {
            var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
            if ((mineCurrent[0] === "-" || mineCurrent[0] === "+") && (theirCurrent[0] === "-" || theirCurrent[0] === "+")) {
              mutualChange(hunk, mine, their);
            } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
              var _hunk$lines;
              (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
            } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
              var _hunk$lines2;
              (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
            } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
              removal(hunk, mine, their);
            } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
              removal(hunk, their, mine, true);
            } else if (mineCurrent === theirCurrent) {
              hunk.lines.push(mineCurrent);
              mine.index++;
              their.index++;
            } else {
              conflict(hunk, collectChange(mine), collectChange(their));
            }
          }
          insertTrailing(hunk, mine);
          insertTrailing(hunk, their);
          calcLineCount(hunk);
        }
        function mutualChange(hunk, mine, their) {
          var myChanges = collectChange(mine), theirChanges = collectChange(their);
          if (allRemoves(myChanges) && allRemoves(theirChanges)) {
            if ((0, _array.arrayStartsWith)(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
              var _hunk$lines3;
              (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));
              return;
            } else if ((0, _array.arrayStartsWith)(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
              var _hunk$lines4;
              (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));
              return;
            }
          } else if ((0, _array.arrayEqual)(myChanges, theirChanges)) {
            var _hunk$lines5;
            (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));
            return;
          }
          conflict(hunk, myChanges, theirChanges);
        }
        function removal(hunk, mine, their, swap) {
          var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
          if (theirChanges.merged) {
            var _hunk$lines6;
            (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
          } else {
            conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
          }
        }
        function conflict(hunk, mine, their) {
          hunk.conflict = true;
          hunk.lines.push({
            conflict: true,
            mine,
            theirs: their
          });
        }
        function insertLeading(hunk, insert, their) {
          while (insert.offset < their.offset && insert.index < insert.lines.length) {
            var line2 = insert.lines[insert.index++];
            hunk.lines.push(line2);
            insert.offset++;
          }
        }
        function insertTrailing(hunk, insert) {
          while (insert.index < insert.lines.length) {
            var line2 = insert.lines[insert.index++];
            hunk.lines.push(line2);
          }
        }
        function collectChange(state2) {
          var ret = [], operation = state2.lines[state2.index][0];
          while (state2.index < state2.lines.length) {
            var line2 = state2.lines[state2.index];
            if (operation === "-" && line2[0] === "+") {
              operation = "+";
            }
            if (operation === line2[0]) {
              ret.push(line2);
              state2.index++;
            } else {
              break;
            }
          }
          return ret;
        }
        function collectContext(state2, matchChanges) {
          var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
          while (matchIndex < matchChanges.length && state2.index < state2.lines.length) {
            var change = state2.lines[state2.index], match2 = matchChanges[matchIndex];
            if (match2[0] === "+") {
              break;
            }
            contextChanges = contextChanges || change[0] !== " ";
            merged.push(match2);
            matchIndex++;
            if (change[0] === "+") {
              conflicted = true;
              while (change[0] === "+") {
                changes.push(change);
                change = state2.lines[++state2.index];
              }
            }
            if (match2.substr(1) === change.substr(1)) {
              changes.push(change);
              state2.index++;
            } else {
              conflicted = true;
            }
          }
          if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
            conflicted = true;
          }
          if (conflicted) {
            return changes;
          }
          while (matchIndex < matchChanges.length) {
            merged.push(matchChanges[matchIndex++]);
          }
          return {
            merged,
            changes
          };
        }
        function allRemoves(changes) {
          return changes.reduce(function(prev2, change) {
            return prev2 && change[0] === "-";
          }, true);
        }
        function skipRemoveSuperset(state2, removeChanges, delta) {
          for (var i = 0; i < delta; i++) {
            var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
            if (state2.lines[state2.index + i] !== " " + changeContent) {
              return false;
            }
          }
          state2.index += delta;
          return true;
        }
        function calcOldNewLineCount(lines) {
          var oldLines = 0;
          var newLines = 0;
          lines.forEach(function(line2) {
            if (typeof line2 !== "string") {
              var myCount = calcOldNewLineCount(line2.mine);
              var theirCount = calcOldNewLineCount(line2.theirs);
              if (oldLines !== void 0) {
                if (myCount.oldLines === theirCount.oldLines) {
                  oldLines += myCount.oldLines;
                } else {
                  oldLines = void 0;
                }
              }
              if (newLines !== void 0) {
                if (myCount.newLines === theirCount.newLines) {
                  newLines += myCount.newLines;
                } else {
                  newLines = void 0;
                }
              }
            } else {
              if (newLines !== void 0 && (line2[0] === "+" || line2[0] === " ")) {
                newLines++;
              }
              if (oldLines !== void 0 && (line2[0] === "-" || line2[0] === " ")) {
                oldLines++;
              }
            }
          });
          return { oldLines, newLines };
        }
      },
      function(module2, exports2, __webpack_require__) {
        exports2.__esModule = true;
        exports2.structuredPatch = structuredPatch;
        exports2.createTwoFilesPatch = createTwoFilesPatch;
        exports2.createPatch = createPatch;
        var _line = __webpack_require__(5);
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
          if (!options) {
            options = {};
          }
          if (typeof options.context === "undefined") {
            options.context = 4;
          }
          var diff2 = (0, _line.diffLines)(oldStr, newStr, options);
          diff2.push({ value: "", lines: [] });
          function contextLines(lines) {
            return lines.map(function(entry) {
              return " " + entry;
            });
          }
          var hunks = [];
          var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
          var _loop = function _loop2(i2) {
            var current = diff2[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
            current.lines = lines;
            if (current.added || current.removed) {
              var _curRange;
              if (!oldRangeStart) {
                var prev2 = diff2[i2 - 1];
                oldRangeStart = oldLine;
                newRangeStart = newLine;
                if (prev2) {
                  curRange = options.context > 0 ? contextLines(prev2.lines.slice(-options.context)) : [];
                  oldRangeStart -= curRange.length;
                  newRangeStart -= curRange.length;
                }
              }
              (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
                return (current.added ? "+" : "-") + entry;
              })));
              if (current.added) {
                newLine += lines.length;
              } else {
                oldLine += lines.length;
              }
            } else {
              if (oldRangeStart) {
                if (lines.length <= options.context * 2 && i2 < diff2.length - 2) {
                  var _curRange2;
                  (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
                } else {
                  var _curRange3;
                  var contextSize = Math.min(lines.length, options.context);
                  (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
                  var hunk = {
                    oldStart: oldRangeStart,
                    oldLines: oldLine - oldRangeStart + contextSize,
                    newStart: newRangeStart,
                    newLines: newLine - newRangeStart + contextSize,
                    lines: curRange
                  };
                  if (i2 >= diff2.length - 2 && lines.length <= options.context) {
                    var oldEOFNewline = /\n$/.test(oldStr);
                    var newEOFNewline = /\n$/.test(newStr);
                    if (lines.length == 0 && !oldEOFNewline) {
                      curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                    } else if (!oldEOFNewline || !newEOFNewline) {
                      curRange.push("\\ No newline at end of file");
                    }
                  }
                  hunks.push(hunk);
                  oldRangeStart = 0;
                  newRangeStart = 0;
                  curRange = [];
                }
              }
              oldLine += lines.length;
              newLine += lines.length;
            }
          };
          for (var i = 0; i < diff2.length; i++) {
            _loop(i);
          }
          return {
            oldFileName,
            newFileName,
            oldHeader,
            newHeader,
            hunks
          };
        }
        function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
          var diff2 = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
          var ret = [];
          if (oldFileName == newFileName) {
            ret.push("Index: " + oldFileName);
          }
          ret.push("===================================================================");
          ret.push("--- " + diff2.oldFileName + (typeof diff2.oldHeader === "undefined" ? "" : "	" + diff2.oldHeader));
          ret.push("+++ " + diff2.newFileName + (typeof diff2.newHeader === "undefined" ? "" : "	" + diff2.newHeader));
          for (var i = 0; i < diff2.hunks.length; i++) {
            var hunk = diff2.hunks[i];
            ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
            ret.push.apply(ret, hunk.lines);
          }
          return ret.join("\n") + "\n";
        }
        function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
          return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2.arrayEqual = arrayEqual;
        exports2.arrayStartsWith = arrayStartsWith;
        function arrayEqual(a, b2) {
          if (a.length !== b2.length) {
            return false;
          }
          return arrayStartsWith(a, b2);
        }
        function arrayStartsWith(array, start) {
          if (start.length > array.length) {
            return false;
          }
          for (var i = 0; i < start.length; i++) {
            if (start[i] !== array[i]) {
              return false;
            }
          }
          return true;
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2.convertChangesToDMP = convertChangesToDMP;
        function convertChangesToDMP(changes) {
          var ret = [], change = void 0, operation = void 0;
          for (var i = 0; i < changes.length; i++) {
            change = changes[i];
            if (change.added) {
              operation = 1;
            } else if (change.removed) {
              operation = -1;
            } else {
              operation = 0;
            }
            ret.push([operation, change.value]);
          }
          return ret;
        }
      },
      function(module2, exports2) {
        exports2.__esModule = true;
        exports2.convertChangesToXML = convertChangesToXML;
        function convertChangesToXML(changes) {
          var ret = [];
          for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            if (change.added) {
              ret.push("<ins>");
            } else if (change.removed) {
              ret.push("<del>");
            }
            ret.push(escapeHTML(change.value));
            if (change.added) {
              ret.push("</ins>");
            } else if (change.removed) {
              ret.push("</del>");
            }
          }
          return ret.join("");
        }
        function escapeHTML(s) {
          var n2 = s;
          n2 = n2.replace(/&/g, "&amp;");
          n2 = n2.replace(/</g, "&lt;");
          n2 = n2.replace(/>/g, "&gt;");
          n2 = n2.replace(/"/g, "&quot;");
          return n2;
        }
      }
    ]);
  });
})(diff$1);
const diff = function(oldStr, newStr) {
  const parts = diff$1.exports.diffChars(oldStr, newStr);
  let index = 0;
  const infosMap = /* @__PURE__ */ new Map();
  for (const p2 of parts) {
    let infos = infosMap.get(index);
    if (p2.added === true || p2.removed === true) {
      switch (true) {
        case p2.added:
          if (!infos) {
            infos = [];
            infosMap.set(index, infos);
          }
          infos.push({ operat: "ADD", chars: p2.value });
          break;
        case p2.removed:
          if (!infos) {
            infos = [];
            infosMap.set(index + 1, infos);
          }
          infos.push({ operat: "DELETE", chars: p2.value });
          break;
      }
    }
    if (p2.removed !== true) {
      index = index + p2.count;
    }
  }
  var actions = [];
  for (let [position2, infos] of infosMap.entries()) {
    actions.push({ position: position2, infos });
  }
  actions = getActions(actions);
  return actions;
};
const getActions = (oldActions) => {
  const actions = [];
  for (let oldAction of oldActions) {
    for (let info of oldAction.infos) {
      let i = 0;
      const chars = info.chars.split("");
      if (info.operat === "DELETE") {
        i = chars.length - 1;
        chars.reverse();
      }
      for (let char2 of chars) {
        const realPosition = oldAction.position + i;
        if (info.operat === "DELETE") {
          i--;
        } else {
          i++;
        }
        actions.push({ position: realPosition, action: info.operat, char: char2 });
      }
    }
  }
  return actions;
};
const Client = ({
  clientId,
  onSync,
  onActions
}) => {
  const [isSync, setIsSync] = react.exports.useState(false);
  const [text, setText] = react.exports.useState("");
  const onClick = () => {
    setIsSync(true);
    setText(onSync(clientId));
    setIsSync(false);
  };
  const onChange = async (e2) => {
    if (!isSync) {
      const t2 = e2.target.value;
      const actions = diff(text, t2);
      onActions(clientId, actions);
      setText(t2);
    }
  };
  return /* @__PURE__ */ jsxs(Flex, {
    w: "300px",
    h: "300px",
    direction: "column",
    children: [/* @__PURE__ */ jsxs(Text, {
      m: "8px",
      children: [" Client: ", clientId]
    }), /* @__PURE__ */ jsx(Textarea, {
      value: text,
      onChange,
      flex: "1",
      placeholder: "Here is a sample placeholder",
      resize: "none"
    }), /* @__PURE__ */ jsx(Button, {
      onClick,
      children: "\u83B7\u53D6\u540C\u6B65"
    })]
  });
};
let doc1 = null;
let doc2 = null;
let docAll = null;
function App() {
  const [finalText, setFinalText] = react.exports.useState("");
  react.exports.useEffect(() => {
    (async () => {
      await init();
      doc1 = new Document(1);
      doc2 = new Document(2);
      docAll = new Document(3);
    })();
  }, []);
  const onSync = (clientId) => {
    switch (clientId) {
      case 1: {
        doc1 == null ? void 0 : doc1.merge(doc2);
        return doc1 == null ? void 0 : doc1.content();
      }
      case 2: {
        doc2 == null ? void 0 : doc2.merge(doc1);
        return doc2 == null ? void 0 : doc2.content();
      }
    }
  };
  const onActions = async (clientId, actions) => {
    let doc3;
    switch (clientId) {
      case 1:
        doc3 = doc1;
        break;
      case 2:
        doc3 = doc2;
        break;
    }
    actions.forEach((action) => {
      doc3 == null ? void 0 : doc3.add_action(new Action(action.position, action.action, action.char));
    });
    docAll == null ? void 0 : docAll.merge(doc3);
    setFinalText((docAll == null ? void 0 : docAll.content()) || "");
  };
  return /* @__PURE__ */ jsx("div", {
    className: "App",
    children: /* @__PURE__ */ jsx(Container, {
      w: "100%",
      h: "100vh",
      children: /* @__PURE__ */ jsx(Center, {
        children: /* @__PURE__ */ jsxs(VStack, {
          spacing: "50",
          children: [/* @__PURE__ */ jsxs(HStack, {
            spacing: "200",
            pt: "100",
            children: [/* @__PURE__ */ jsx(Client, {
              clientId: 1,
              onSync,
              onActions
            }), /* @__PURE__ */ jsx(Client, {
              clientId: 2,
              onSync,
              onActions
            })]
          }), /* @__PURE__ */ jsxs(Box, {
            w: "100%",
            children: [/* @__PURE__ */ jsx(Center, {
              children: /* @__PURE__ */ jsx(Text, {
                fontSize: "3xl",
                children: "Final Text :"
              })
            }), /* @__PURE__ */ jsx(Textarea, {
              value: finalText,
              h: "300",
              resize: "none",
              isDisabled: true
            })]
          })]
        })
      })
    })
  });
}
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(ChakraProvider, {
    children: /* @__PURE__ */ jsx(App, {})
  })
}), document.getElementById("root"));
