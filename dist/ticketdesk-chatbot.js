var bh = Object.defineProperty;
var Qh = (e, t, n) => t in e ? bh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => Qh(e, typeof t != "symbol" ? t + "" : t, n);
function gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vd = { exports: {} }, A = {};
var ro = Symbol.for("react.element"), Kh = Symbol.for("react.portal"), Yh = Symbol.for("react.fragment"), Gh = Symbol.for("react.strict_mode"), Xh = Symbol.for("react.profiler"), Zh = Symbol.for("react.provider"), Jh = Symbol.for("react.context"), qh = Symbol.for("react.forward_ref"), em = Symbol.for("react.suspense"), tm = Symbol.for("react.memo"), nm = Symbol.for("react.lazy"), aa = Symbol.iterator;
function rm(e) {
  return e === null || typeof e != "object" ? null : (e = aa && e[aa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var wd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, xd = Object.assign, kd = {};
function tr(e, t, n) {
  this.props = e, this.context = t, this.refs = kd, this.updater = n || wd;
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sd() {
}
Sd.prototype = tr.prototype;
function Xs(e, t, n) {
  this.props = e, this.context = t, this.refs = kd, this.updater = n || wd;
}
var Zs = Xs.prototype = new Sd();
Zs.constructor = Xs;
xd(Zs, tr.prototype);
Zs.isPureReactComponent = !0;
var ca = Array.isArray, Cd = Object.prototype.hasOwnProperty, Js = { current: null }, Ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function _d(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) Cd.call(t, r) && !Ed.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ro, type: e, key: l, ref: i, props: o, _owner: Js.current };
}
function om(e, t) {
  return { $$typeof: ro, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function qs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ro;
}
function lm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var da = /\/+/g;
function ci(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? lm("" + e.key) : t.toString(36);
}
function Io(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (l) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ro:
        case Kh:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + ci(i, 0) : r, ca(o) ? (n = "", e != null && (n = e.replace(da, "$&/") + "/"), Io(o, t, n, "", function(a) {
    return a;
  })) : o != null && (qs(o) && (o = om(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(da, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ca(e)) for (var s = 0; s < e.length; s++) {
    l = e[s];
    var u = r + ci(l, s);
    i += Io(l, t, n, u, o);
  }
  else if (u = rm(e), typeof u == "function") for (e = u.call(e), s = 0; !(l = e.next()).done; ) l = l.value, u = r + ci(l, s++), i += Io(l, t, n, u, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function co(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Io(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function im(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null }, Oo = { transition: null }, sm = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: Oo, ReactCurrentOwner: Js };
function $d() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: co, forEach: function(e, t, n) {
  co(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return co(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return co(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!qs(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = tr;
A.Fragment = Yh;
A.Profiler = Xh;
A.PureComponent = Xs;
A.StrictMode = Gh;
A.Suspense = em;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm;
A.act = $d;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = xd({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Js.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Cd.call(t, u) && !Ed.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ro, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function(e) {
  return e = { $$typeof: Jh, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Zh, _context: e }, e.Consumer = e;
};
A.createElement = _d;
A.createFactory = function(e) {
  var t = _d.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: qh, render: e };
};
A.isValidElement = qs;
A.lazy = function(e) {
  return { $$typeof: nm, _payload: { _status: -1, _result: e }, _init: im };
};
A.memo = function(e, t) {
  return { $$typeof: tm, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = Oo.transition;
  Oo.transition = {};
  try {
    e();
  } finally {
    Oo.transition = t;
  }
};
A.unstable_act = $d;
A.useCallback = function(e, t) {
  return _e.current.useCallback(e, t);
};
A.useContext = function(e) {
  return _e.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return _e.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return _e.current.useEffect(e, t);
};
A.useId = function() {
  return _e.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return _e.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return _e.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return _e.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return _e.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return _e.current.useRef(e);
};
A.useState = function(e) {
  return _e.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return _e.current.useTransition();
};
A.version = "18.3.1";
vd.exports = A;
var z = vd.exports;
const xt = /* @__PURE__ */ gd(z);
var Nd = { exports: {} }, Ke = {}, Td = { exports: {} }, Pd = {};
(function(e) {
  function t(j, I) {
    var D = j.length;
    j.push(I);
    e: for (; 0 < D; ) {
      var oe = D - 1 >>> 1, ae = j[oe];
      if (0 < o(ae, I)) j[oe] = I, j[D] = ae, D = oe;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var I = j[0], D = j.pop();
    if (D !== I) {
      j[0] = D;
      e: for (var oe = 0, ae = j.length, uo = ae >>> 1; oe < uo; ) {
        var rn = 2 * (oe + 1) - 1, ai = j[rn], on = rn + 1, ao = j[on];
        if (0 > o(ai, D)) on < ae && 0 > o(ao, ai) ? (j[oe] = ao, j[on] = D, oe = on) : (j[oe] = ai, j[rn] = D, oe = rn);
        else if (on < ae && 0 > o(ao, D)) j[oe] = ao, j[on] = D, oe = on;
        else break e;
      }
    }
    return I;
  }
  function o(j, I) {
    var D = j.sortIndex - I.sortIndex;
    return D !== 0 ? D : j.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var u = [], a = [], f = 1, p = null, m = 3, v = !1, g = !1, w = !1, k = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(j) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a);
      else if (I.startTime <= j) r(a), I.sortIndex = I.expirationTime, t(u, I);
      else break;
      I = n(a);
    }
  }
  function x(j) {
    if (w = !1, h(j), !g) if (n(u) !== null) g = !0, si(_);
    else {
      var I = n(a);
      I !== null && ui(x, I.startTime - j);
    }
  }
  function _(j, I) {
    g = !1, w && (w = !1, d(S), S = -1), v = !0;
    var D = m;
    try {
      for (h(I), p = n(u); p !== null && (!(p.expirationTime > I) || j && !B()); ) {
        var oe = p.callback;
        if (typeof oe == "function") {
          p.callback = null, m = p.priorityLevel;
          var ae = oe(p.expirationTime <= I);
          I = e.unstable_now(), typeof ae == "function" ? p.callback = ae : p === n(u) && r(u), h(I);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var uo = !0;
      else {
        var rn = n(a);
        rn !== null && ui(x, rn.startTime - I), uo = !1;
      }
      return uo;
    } finally {
      p = null, m = D, v = !1;
    }
  }
  var N = !1, P = null, S = -1, T = 5, E = -1;
  function B() {
    return !(e.unstable_now() - E < T);
  }
  function F() {
    if (P !== null) {
      var j = e.unstable_now();
      E = j;
      var I = !0;
      try {
        I = P(!0, j);
      } finally {
        I ? re() : (N = !1, P = null);
      }
    } else N = !1;
  }
  var re;
  if (typeof c == "function") re = function() {
    c(F);
  };
  else if (typeof MessageChannel < "u") {
    var tt = new MessageChannel(), ii = tt.port2;
    tt.port1.onmessage = F, re = function() {
      ii.postMessage(null);
    };
  } else re = function() {
    k(F, 0);
  };
  function si(j) {
    P = j, N || (N = !0, re());
  }
  function ui(j, I) {
    S = k(function() {
      j(e.unstable_now());
    }, I);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, si(_));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(j) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = m;
    }
    var D = m;
    m = I;
    try {
      return j();
    } finally {
      m = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, I) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var D = m;
    m = j;
    try {
      return I();
    } finally {
      m = D;
    }
  }, e.unstable_scheduleCallback = function(j, I, D) {
    var oe = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? oe + D : oe) : D = oe, j) {
      case 1:
        var ae = -1;
        break;
      case 2:
        ae = 250;
        break;
      case 5:
        ae = 1073741823;
        break;
      case 4:
        ae = 1e4;
        break;
      default:
        ae = 5e3;
    }
    return ae = D + ae, j = { id: f++, callback: I, priorityLevel: j, startTime: D, expirationTime: ae, sortIndex: -1 }, D > oe ? (j.sortIndex = D, t(a, j), n(u) === null && j === n(a) && (w ? (d(S), S = -1) : w = !0, ui(x, D - oe))) : (j.sortIndex = ae, t(u, j), g || v || (g = !0, si(_))), j;
  }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(j) {
    var I = m;
    return function() {
      var D = m;
      m = I;
      try {
        return j.apply(this, arguments);
      } finally {
        m = D;
      }
    };
  };
})(Pd);
Td.exports = Pd;
var um = Td.exports;
var am = z, Qe = um;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Rd = /* @__PURE__ */ new Set(), Ir = {};
function $n(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) Rd.add(t[e]);
}
var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yi = Object.prototype.hasOwnProperty, cm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fa = {}, pa = {};
function dm(e) {
  return Yi.call(pa, e) ? !0 : Yi.call(fa, e) ? !1 : cm.test(e) ? pa[e] = !0 : (fa[e] = !0, !1);
}
function fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pm(e, t, n, r) {
  if (t === null || typeof t > "u" || fm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function $e(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  me[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  me[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  me[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  me[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  me[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  me[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  me[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  me[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  me[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eu = /[\-:]([a-z])/g;
function tu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    eu,
    tu
  );
  me[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(eu, tu);
  me[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(eu, tu);
  me[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  me[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  me[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nu(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pm(t, n, o, r) && (n = null), r || o === null ? dm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fo = Symbol.for("react.element"), Rn = Symbol.for("react.portal"), jn = Symbol.for("react.fragment"), ru = Symbol.for("react.strict_mode"), Gi = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), zd = Symbol.for("react.context"), ou = Symbol.for("react.forward_ref"), Xi = Symbol.for("react.suspense"), Zi = Symbol.for("react.suspense_list"), lu = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), Md = Symbol.for("react.offscreen"), ha = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object" ? null : (e = ha && e[ha] || e["@@iterator"], typeof e == "function" ? e : null);
}
var te = Object.assign, di;
function gr(e) {
  if (di === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    di = t && t[1] || "";
  }
  return `
` + di + e;
}
var fi = !1;
function pi(e, t) {
  if (!e || fi) return "";
  fi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (o[i] !== l[s]) {
        if (i !== 1 || s !== 1)
          do
            if (i--, s--, 0 > s || o[i] !== l[s]) {
              var u = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    fi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function hm(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = pi(e.type, !1), e;
    case 11:
      return e = pi(e.type.render, !1), e;
    case 1:
      return e = pi(e.type, !0), e;
    default:
      return "";
  }
}
function Ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case Rn:
      return "Portal";
    case Gi:
      return "Profiler";
    case ru:
      return "StrictMode";
    case Xi:
      return "Suspense";
    case Zi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zd:
      return (e.displayName || "Context") + ".Consumer";
    case jd:
      return (e._context.displayName || "Context") + ".Provider";
    case ou:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case lu:
      return t = e.displayName || null, t !== null ? t : Ji(e.type) || "Memo";
    case It:
      t = e._payload, e = e._init;
      try {
        return Ji(e(t));
      } catch {
      }
  }
  return null;
}
function mm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ji(t);
    case 8:
      return t === ru ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ym(e) {
  var t = Fd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function po(e) {
  e._valueTracker || (e._valueTracker = ym(e));
}
function Ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ol(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qi(e, t) {
  var n = t.checked;
  return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Id(e, t) {
  t = t.checked, t != null && nu(e, "checked", t, !1);
}
function es(e, t) {
  Id(e, t);
  var n = Jt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ts(e, t.type, n) : t.hasOwnProperty("defaultValue") && ts(e, t.type, Jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ya(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ts(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ga(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function Od(e, t) {
  var n = Jt(t.value), r = Jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ho, Ud = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ho = ho || document.createElement("div"), ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ho.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, gm = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function(e) {
  gm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _r[t] = _r[e];
  });
});
function Ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _r.hasOwnProperty(e) && _r[e] ? ("" + t).trim() : t + "px";
}
function Bd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ad(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var vm = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function os(e, t) {
  if (t) {
    if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ls(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var is = null;
function iu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ss = null, Wn = null, Hn = null;
function wa(e) {
  if (e = io(e)) {
    if (typeof ss != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = Vl(t), ss(e.stateNode, e.type, t));
  }
}
function Vd(e) {
  Wn ? Hn ? Hn.push(e) : Hn = [e] : Wn = e;
}
function Wd() {
  if (Wn) {
    var e = Wn, t = Hn;
    if (Hn = Wn = null, wa(e), t) for (e = 0; e < t.length; e++) wa(t[e]);
  }
}
function Hd(e, t) {
  return e(t);
}
function bd() {
}
var hi = !1;
function Qd(e, t, n) {
  if (hi) return e(t, n);
  hi = !0;
  try {
    return Hd(e, t, n);
  } finally {
    hi = !1, (Wn !== null || Hn !== null) && (bd(), Wd());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var us = !1;
if (_t) try {
  var sr = {};
  Object.defineProperty(sr, "passive", { get: function() {
    us = !0;
  } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
} catch {
  us = !1;
}
function wm(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var $r = !1, ll = null, il = !1, as = null, xm = { onError: function(e) {
  $r = !0, ll = e;
} };
function km(e, t, n, r, o, l, i, s, u) {
  $r = !1, ll = null, wm.apply(xm, arguments);
}
function Sm(e, t, n, r, o, l, i, s, u) {
  if (km.apply(this, arguments), $r) {
    if ($r) {
      var a = ll;
      $r = !1, ll = null;
    } else throw Error(C(198));
    il || (il = !0, as = a);
  }
}
function Nn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xa(e) {
  if (Nn(e) !== e) throw Error(C(188));
}
function Cm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return xa(o), e;
        if (l === r) return xa(o), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (s === r) {
          i = !0, r = o, n = l;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Yd(e) {
  return e = Cm(e), e !== null ? Gd(e) : null;
}
function Gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xd = Qe.unstable_scheduleCallback, ka = Qe.unstable_cancelCallback, Em = Qe.unstable_shouldYield, _m = Qe.unstable_requestPaint, le = Qe.unstable_now, $m = Qe.unstable_getCurrentPriorityLevel, su = Qe.unstable_ImmediatePriority, Zd = Qe.unstable_UserBlockingPriority, sl = Qe.unstable_NormalPriority, Nm = Qe.unstable_LowPriority, Jd = Qe.unstable_IdlePriority, Dl = null, yt = null;
function Tm(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function") try {
    yt.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var st = Math.clz32 ? Math.clz32 : jm, Pm = Math.log, Rm = Math.LN2;
function jm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pm(e) / Rm | 0) | 0;
}
var mo = 64, yo = 4194304;
function wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? r = wr(s) : (l &= i, l !== 0 && (r = wr(l)));
  } else i = n & ~o, i !== 0 ? r = wr(i) : l !== 0 && (r = wr(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - st(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function zm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Mm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - st(l), s = 1 << i, u = o[i];
    u === -1 ? (!(s & n) || s & r) && (o[i] = zm(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
  }
}
function cs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qd() {
  var e = mo;
  return mo <<= 1, !(mo & 4194240) && (mo = 64), e;
}
function mi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oo(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - st(t), e[t] = n;
}
function Fm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - st(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function uu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var H = 0;
function ef(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var tf, au, nf, rf, of, ds = !1, go = [], Ht = null, bt = null, Qt = null, Ur = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Dt = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function ur(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = io(t), t !== null && au(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Im(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ht = ur(Ht, e, t, n, r, o), !0;
    case "dragenter":
      return bt = ur(bt, e, t, n, r, o), !0;
    case "mouseover":
      return Qt = ur(Qt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return Ur.set(l, ur(Ur.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Ar.set(l, ur(Ar.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function lf(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Kd(n), t !== null) {
          e.blockedOn = t, of(e.priority, function() {
            nf(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Do(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      is = r, n.target.dispatchEvent(r), is = null;
    } else return t = io(n), t !== null && au(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ca(e, t, n) {
  Do(e) && n.delete(t);
}
function Om() {
  ds = !1, Ht !== null && Do(Ht) && (Ht = null), bt !== null && Do(bt) && (bt = null), Qt !== null && Do(Qt) && (Qt = null), Ur.forEach(Ca), Ar.forEach(Ca);
}
function ar(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ds || (ds = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Om)));
}
function Br(e) {
  function t(o) {
    return ar(o, e);
  }
  if (0 < go.length) {
    ar(go[0], e);
    for (var n = 1; n < go.length; n++) {
      var r = go[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ht !== null && ar(Ht, e), bt !== null && ar(bt, e), Qt !== null && ar(Qt, e), Ur.forEach(t), Ar.forEach(t), n = 0; n < Dt.length; n++) r = Dt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && (n = Dt[0], n.blockedOn === null); ) lf(n), n.blockedOn === null && Dt.shift();
}
var bn = jt.ReactCurrentBatchConfig, al = !0;
function Dm(e, t, n, r) {
  var o = H, l = bn.transition;
  bn.transition = null;
  try {
    H = 1, cu(e, t, n, r);
  } finally {
    H = o, bn.transition = l;
  }
}
function Um(e, t, n, r) {
  var o = H, l = bn.transition;
  bn.transition = null;
  try {
    H = 4, cu(e, t, n, r);
  } finally {
    H = o, bn.transition = l;
  }
}
function cu(e, t, n, r) {
  if (al) {
    var o = fs(e, t, n, r);
    if (o === null) _i(e, t, r, cl, n), Sa(e, r);
    else if (Im(o, e, t, n, r)) r.stopPropagation();
    else if (Sa(e, r), t & 4 && -1 < Lm.indexOf(e)) {
      for (; o !== null; ) {
        var l = io(o);
        if (l !== null && tf(l), l = fs(e, t, n, r), l === null && _i(e, t, r, cl, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else _i(e, t, r, null, n);
  }
}
var cl = null;
function fs(e, t, n, r) {
  if (cl = null, e = iu(r), e = hn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Kd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return cl = e, null;
}
function sf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($m()) {
        case su:
          return 1;
        case Zd:
          return 4;
        case sl:
        case Nm:
          return 16;
        case Jd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null, du = null, Uo = null;
function uf() {
  if (Uo) return Uo;
  var e, t = du, n = t.length, r, o = "value" in At ? At.value : At.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return Uo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ao(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vo() {
  return !0;
}
function Ea() {
  return !1;
}
function Ye(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? vo : Ea, this.isPropagationStopped = Ea, this;
  }
  return te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vo);
  }, persist: function() {
  }, isPersistent: vo }), t;
}
var nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fu = Ye(nr), lo = te({}, nr, { view: 0, detail: 0 }), Am = Ye(lo), yi, gi, cr, Ul = te({}, lo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (yi = e.screenX - cr.screenX, gi = e.screenY - cr.screenY) : gi = yi = 0, cr = e), yi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : gi;
} }), _a = Ye(Ul), Bm = te({}, Ul, { dataTransfer: 0 }), Vm = Ye(Bm), Wm = te({}, lo, { relatedTarget: 0 }), vi = Ye(Wm), Hm = te({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = Ye(Hm), Qm = te({}, nr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Km = Ye(Qm), Ym = te({}, nr, { data: 0 }), $a = Ye(Ym), Gm = {
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
}, Xm = {
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
}, Zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
}
function pu() {
  return Jm;
}
var qm = te({}, lo, { key: function(e) {
  if (e.key) {
    var t = Gm[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ao(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pu, charCode: function(e) {
  return e.type === "keypress" ? Ao(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), e0 = Ye(qm), t0 = te({}, Ul, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Na = Ye(t0), n0 = te({}, lo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pu }), r0 = Ye(n0), o0 = te({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), l0 = Ye(o0), i0 = te({}, Ul, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), s0 = Ye(i0), u0 = [9, 13, 27, 32], hu = _t && "CompositionEvent" in window, Nr = null;
_t && "documentMode" in document && (Nr = document.documentMode);
var a0 = _t && "TextEvent" in window && !Nr, af = _t && (!hu || Nr && 8 < Nr && 11 >= Nr), Ta = " ", Pa = !1;
function cf(e, t) {
  switch (e) {
    case "keyup":
      return u0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function df(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function c0(e, t) {
  switch (e) {
    case "compositionend":
      return df(t);
    case "keypress":
      return t.which !== 32 ? null : (Pa = !0, Ta);
    case "textInput":
      return e = t.data, e === Ta && Pa ? null : e;
    default:
      return null;
  }
}
function d0(e, t) {
  if (zn) return e === "compositionend" || !hu && cf(e, t) ? (e = uf(), Uo = du = At = null, zn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return af && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var f0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!f0[e.type] : t === "textarea";
}
function ff(e, t, n, r) {
  Vd(r), t = dl(t, "onChange"), 0 < t.length && (n = new fu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tr = null, Vr = null;
function p0(e) {
  Cf(e, 0);
}
function Al(e) {
  var t = Ln(e);
  if (Ld(t)) return e;
}
function h0(e, t) {
  if (e === "change") return t;
}
var pf = !1;
if (_t) {
  var wi;
  if (_t) {
    var xi = "oninput" in document;
    if (!xi) {
      var ja = document.createElement("div");
      ja.setAttribute("oninput", "return;"), xi = typeof ja.oninput == "function";
    }
    wi = xi;
  } else wi = !1;
  pf = wi && (!document.documentMode || 9 < document.documentMode);
}
function za() {
  Tr && (Tr.detachEvent("onpropertychange", hf), Vr = Tr = null);
}
function hf(e) {
  if (e.propertyName === "value" && Al(Vr)) {
    var t = [];
    ff(t, Vr, e, iu(e)), Qd(p0, t);
  }
}
function m0(e, t, n) {
  e === "focusin" ? (za(), Tr = t, Vr = n, Tr.attachEvent("onpropertychange", hf)) : e === "focusout" && za();
}
function y0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Al(Vr);
}
function g0(e, t) {
  if (e === "click") return Al(t);
}
function v0(e, t) {
  if (e === "input" || e === "change") return Al(t);
}
function w0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var at = typeof Object.is == "function" ? Object.is : w0;
function Wr(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yi.call(t, o) || !at(e[o], t[o])) return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fa(e, t) {
  var n = Ma(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ma(n);
  }
}
function mf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function yf() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function x0(e) {
  var t = yf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && mf(n.ownerDocument.documentElement, n)) {
    if (r !== null && mu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Fa(n, l);
        var i = Fa(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var k0 = _t && "documentMode" in document && 11 >= document.documentMode, Mn = null, ps = null, Pr = null, hs = !1;
function La(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hs || Mn == null || Mn !== ol(r) || (r = Mn, "selectionStart" in r && mu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pr && Wr(Pr, r) || (Pr = r, r = dl(ps, "onSelect"), 0 < r.length && (t = new fu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Mn)));
}
function wo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Fn = { animationend: wo("Animation", "AnimationEnd"), animationiteration: wo("Animation", "AnimationIteration"), animationstart: wo("Animation", "AnimationStart"), transitionend: wo("Transition", "TransitionEnd") }, ki = {}, gf = {};
_t && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function Bl(e) {
  if (ki[e]) return ki[e];
  if (!Fn[e]) return e;
  var t = Fn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in gf) return ki[e] = t[n];
  return e;
}
var vf = Bl("animationend"), wf = Bl("animationiteration"), xf = Bl("animationstart"), kf = Bl("transitionend"), Sf = /* @__PURE__ */ new Map(), Ia = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function en(e, t) {
  Sf.set(e, t), $n(t, [e]);
}
for (var Si = 0; Si < Ia.length; Si++) {
  var Ci = Ia[Si], S0 = Ci.toLowerCase(), C0 = Ci[0].toUpperCase() + Ci.slice(1);
  en(S0, "on" + C0);
}
en(vf, "onAnimationEnd");
en(wf, "onAnimationIteration");
en(xf, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(kf, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
$n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), E0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Oa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Sm(r, t, void 0, e), e.currentTarget = null;
}
function Cf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
        Oa(o, s, a), l = u;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
        Oa(o, s, a), l = u;
      }
    }
  }
  if (il) throw e = as, il = !1, as = null, e;
}
function Y(e, t) {
  var n = t[ws];
  n === void 0 && (n = t[ws] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ef(t, e, 2, !1), n.add(r));
}
function Ei(e, t, n) {
  var r = 0;
  t && (r |= 4), Ef(n, e, r, t);
}
var xo = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[xo]) {
    e[xo] = !0, Rd.forEach(function(n) {
      n !== "selectionchange" && (E0.has(n) || Ei(n, !1, e), Ei(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xo] || (t[xo] = !0, Ei("selectionchange", !1, t));
  }
}
function Ef(e, t, n, r) {
  switch (sf(t)) {
    case 1:
      var o = Dm;
      break;
    case 4:
      o = Um;
      break;
    default:
      o = cu;
  }
  n = o.bind(null, t, n, e), o = void 0, !us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function _i(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var u = i.tag;
        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = hn(s), i === null) return;
        if (u = i.tag, u === 5 || u === 6) {
          r = l = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Qd(function() {
    var a = l, f = iu(n), p = [];
    e: {
      var m = Sf.get(e);
      if (m !== void 0) {
        var v = fu, g = e;
        switch (e) {
          case "keypress":
            if (Ao(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = e0;
            break;
          case "focusin":
            g = "focus", v = vi;
            break;
          case "focusout":
            g = "blur", v = vi;
            break;
          case "beforeblur":
          case "afterblur":
            v = vi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = _a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = r0;
            break;
          case vf:
          case wf:
          case xf:
            v = bm;
            break;
          case kf:
            v = l0;
            break;
          case "scroll":
            v = Am;
            break;
          case "wheel":
            v = s0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Km;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Na;
        }
        var w = (t & 4) !== 0, k = !w && e === "scroll", d = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var x = h.stateNode;
          if (h.tag === 5 && x !== null && (h = x, d !== null && (x = Dr(c, d), x != null && w.push(br(c, x, h)))), k) break;
          c = c.return;
        }
        0 < w.length && (m = new v(m, g, null, n, f), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== is && (g = n.relatedTarget || n.fromElement) && (hn(g) || g[$t])) break e;
        if ((v || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? hn(g) : null, g !== null && (k = Nn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (w = _a, x = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Na, x = "onPointerLeave", d = "onPointerEnter", c = "pointer"), k = v == null ? m : Ln(v), h = g == null ? m : Ln(g), m = new w(x, c + "leave", v, n, f), m.target = k, m.relatedTarget = h, x = null, hn(f) === a && (w = new w(d, c + "enter", g, n, f), w.target = h, w.relatedTarget = k, x = w), k = x, v && g) t: {
            for (w = v, d = g, c = 0, h = w; h; h = Tn(h)) c++;
            for (h = 0, x = d; x; x = Tn(x)) h++;
            for (; 0 < c - h; ) w = Tn(w), c--;
            for (; 0 < h - c; ) d = Tn(d), h--;
            for (; c--; ) {
              if (w === d || d !== null && w === d.alternate) break t;
              w = Tn(w), d = Tn(d);
            }
            w = null;
          }
          else w = null;
          v !== null && Da(p, m, v, w, !1), g !== null && k !== null && Da(p, k, g, w, !0);
        }
      }
      e: {
        if (m = a ? Ln(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var _ = h0;
        else if (Ra(m)) if (pf) _ = v0;
        else {
          _ = y0;
          var N = m0;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (_ = g0);
        if (_ && (_ = _(e, a))) {
          ff(p, _, n, f);
          break e;
        }
        N && N(e, m, a), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && ts(m, "number", m.value);
      }
      switch (N = a ? Ln(a) : window, e) {
        case "focusin":
          (Ra(N) || N.contentEditable === "true") && (Mn = N, ps = a, Pr = null);
          break;
        case "focusout":
          Pr = ps = Mn = null;
          break;
        case "mousedown":
          hs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          hs = !1, La(p, n, f);
          break;
        case "selectionchange":
          if (k0) break;
        case "keydown":
        case "keyup":
          La(p, n, f);
      }
      var P;
      if (hu) e: {
        switch (e) {
          case "compositionstart":
            var S = "onCompositionStart";
            break e;
          case "compositionend":
            S = "onCompositionEnd";
            break e;
          case "compositionupdate":
            S = "onCompositionUpdate";
            break e;
        }
        S = void 0;
      }
      else zn ? cf(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S && (af && n.locale !== "ko" && (zn || S !== "onCompositionStart" ? S === "onCompositionEnd" && zn && (P = uf()) : (At = f, du = "value" in At ? At.value : At.textContent, zn = !0)), N = dl(a, S), 0 < N.length && (S = new $a(S, e, null, n, f), p.push({ event: S, listeners: N }), P ? S.data = P : (P = df(n), P !== null && (S.data = P)))), (P = a0 ? c0(e, n) : d0(e, n)) && (a = dl(a, "onBeforeInput"), 0 < a.length && (f = new $a("onBeforeInput", "beforeinput", null, n, f), p.push({ event: f, listeners: a }), f.data = P));
    }
    Cf(p, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = Dr(e, n), l != null && r.unshift(br(e, l, o)), l = Dr(e, t), l != null && r.push(br(e, l, o))), e = e.return;
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Da(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Dr(n, l), u != null && i.unshift(br(n, u, s))) : o || (u = Dr(n, l), u != null && i.push(br(n, u, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var _0 = /\r\n?/g, $0 = /\u0000|\uFFFD/g;
function Ua(e) {
  return (typeof e == "string" ? e : "" + e).replace(_0, `
`).replace($0, "");
}
function ko(e, t, n) {
  if (t = Ua(t), Ua(e) !== t && n) throw Error(C(425));
}
function fl() {
}
var ms = null, ys = null;
function gs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vs = typeof setTimeout == "function" ? setTimeout : void 0, N0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Aa = typeof Promise == "function" ? Promise : void 0, T0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Aa < "u" ? function(e) {
  return Aa.resolve(null).then(e).catch(P0);
} : vs;
function P0(e) {
  setTimeout(function() {
    throw e;
  });
}
function $i(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Br(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Br(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ba(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2), mt = "__reactFiber$" + rr, Qr = "__reactProps$" + rr, $t = "__reactContainer$" + rr, ws = "__reactEvents$" + rr, R0 = "__reactListeners$" + rr, j0 = "__reactHandles$" + rr;
function hn(e) {
  var t = e[mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[$t] || n[mt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ba(e); e !== null; ) {
        if (n = e[mt]) return n;
        e = Ba(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function io(e) {
  return e = e[mt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Vl(e) {
  return e[Qr] || null;
}
var xs = [], In = -1;
function tn(e) {
  return { current: e };
}
function X(e) {
  0 > In || (e.current = xs[In], xs[In] = null, In--);
}
function K(e, t) {
  In++, xs[In] = e.current, e.current = t;
}
var qt = {}, ke = tn(qt), Me = tn(!1), kn = qt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Fe(e) {
  return e = e.childContextTypes, e != null;
}
function pl() {
  X(Me), X(ke);
}
function Va(e, t, n) {
  if (ke.current !== qt) throw Error(C(168));
  K(ke, t), K(Me, n);
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, mm(e) || "Unknown", o));
  return te({}, n, r);
}
function hl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt, kn = ke.current, K(ke, e), K(Me, Me.current), !0;
}
function Wa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = _f(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, X(Me), X(ke), K(ke, e)) : X(Me), K(Me, n);
}
var kt = null, Wl = !1, Ni = !1;
function $f(e) {
  kt === null ? kt = [e] : kt.push(e);
}
function z0(e) {
  Wl = !0, $f(e);
}
function nn() {
  if (!Ni && kt !== null) {
    Ni = !0;
    var e = 0, t = H;
    try {
      var n = kt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kt = null, Wl = !1;
    } catch (o) {
      throw kt !== null && (kt = kt.slice(e + 1)), Xd(su, nn), o;
    } finally {
      H = t, Ni = !1;
    }
  }
  return null;
}
var On = [], Dn = 0, ml = null, yl = 0, Ge = [], Xe = 0, Sn = null, St = 1, Ct = "";
function un(e, t) {
  On[Dn++] = yl, On[Dn++] = ml, ml = e, yl = t;
}
function Nf(e, t, n) {
  Ge[Xe++] = St, Ge[Xe++] = Ct, Ge[Xe++] = Sn, Sn = e;
  var r = St;
  e = Ct;
  var o = 32 - st(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - st(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, St = 1 << 32 - st(t) + o | n << o | r, Ct = l + e;
  } else St = 1 << l | n << o | r, Ct = e;
}
function yu(e) {
  e.return !== null && (un(e, 1), Nf(e, 1, 0));
}
function gu(e) {
  for (; e === ml; ) ml = On[--Dn], On[Dn] = null, yl = On[--Dn], On[Dn] = null;
  for (; e === Sn; ) Sn = Ge[--Xe], Ge[Xe] = null, Ct = Ge[--Xe], Ge[Xe] = null, St = Ge[--Xe], Ge[Xe] = null;
}
var be = null, He = null, J = !1, lt = null;
function Tf(e, t) {
  var n = Ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ha(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, He = Kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, He = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: St, overflow: Ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, He = null, !0) : !1;
    default:
      return !1;
  }
}
function ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ss(e) {
  if (J) {
    var t = He;
    if (t) {
      var n = t;
      if (!Ha(e, t)) {
        if (ks(e)) throw Error(C(418));
        t = Kt(n.nextSibling);
        var r = be;
        t && Ha(e, t) ? Tf(r, n) : (e.flags = e.flags & -4097 | 2, J = !1, be = e);
      }
    } else {
      if (ks(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, J = !1, be = e;
    }
  }
}
function ba(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  be = e;
}
function So(e) {
  if (e !== be) return !1;
  if (!J) return ba(e), J = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps)), t && (t = He)) {
    if (ks(e)) throw Pf(), Error(C(418));
    for (; t; ) Tf(e, t), t = Kt(t.nextSibling);
  }
  if (ba(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = be ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Pf() {
  for (var e = He; e; ) e = Kt(e.nextSibling);
}
function Xn() {
  He = be = null, J = !1;
}
function vu(e) {
  lt === null ? lt = [e] : lt.push(e);
}
var M0 = jt.ReactCurrentBatchConfig;
function dr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var s = o.refs;
        i === null ? delete s[l] : s[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Co(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Rf(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? (d.deletions = [c], d.flags |= 16) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function o(d, c) {
    return d = Zt(d, c), d.index = 0, d.sibling = null, d;
  }
  function l(d, c, h) {
    return d.index = h, e ? (h = d.alternate, h !== null ? (h = h.index, h < c ? (d.flags |= 2, c) : h) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, h, x) {
    return c === null || c.tag !== 6 ? (c = Fi(h, d.mode, x), c.return = d, c) : (c = o(c, h), c.return = d, c);
  }
  function u(d, c, h, x) {
    var _ = h.type;
    return _ === jn ? f(d, c, h.props.children, x, h.key) : c !== null && (c.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === It && Qa(_) === c.type) ? (x = o(c, h.props), x.ref = dr(d, c, h), x.return = d, x) : (x = Ko(h.type, h.key, h.props, null, d.mode, x), x.ref = dr(d, c, h), x.return = d, x);
  }
  function a(d, c, h, x) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Li(h, d.mode, x), c.return = d, c) : (c = o(c, h.children || []), c.return = d, c);
  }
  function f(d, c, h, x, _) {
    return c === null || c.tag !== 7 ? (c = xn(h, d.mode, x, _), c.return = d, c) : (c = o(c, h), c.return = d, c);
  }
  function p(d, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Fi("" + c, d.mode, h), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case fo:
          return h = Ko(c.type, c.key, c.props, null, d.mode, h), h.ref = dr(d, null, c), h.return = d, h;
        case Rn:
          return c = Li(c, d.mode, h), c.return = d, c;
        case It:
          var x = c._init;
          return p(d, x(c._payload), h);
      }
      if (vr(c) || ir(c)) return c = xn(c, d.mode, h, null), c.return = d, c;
      Co(d, c);
    }
    return null;
  }
  function m(d, c, h, x) {
    var _ = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return _ !== null ? null : s(d, c, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case fo:
          return h.key === _ ? u(d, c, h, x) : null;
        case Rn:
          return h.key === _ ? a(d, c, h, x) : null;
        case It:
          return _ = h._init, m(
            d,
            c,
            _(h._payload),
            x
          );
      }
      if (vr(h) || ir(h)) return _ !== null ? null : f(d, c, h, x, null);
      Co(d, h);
    }
    return null;
  }
  function v(d, c, h, x, _) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(h) || null, s(c, d, "" + x, _);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case fo:
          return d = d.get(x.key === null ? h : x.key) || null, u(c, d, x, _);
        case Rn:
          return d = d.get(x.key === null ? h : x.key) || null, a(c, d, x, _);
        case It:
          var N = x._init;
          return v(d, c, h, N(x._payload), _);
      }
      if (vr(x) || ir(x)) return d = d.get(h) || null, f(c, d, x, _, null);
      Co(c, x);
    }
    return null;
  }
  function g(d, c, h, x) {
    for (var _ = null, N = null, P = c, S = c = 0, T = null; P !== null && S < h.length; S++) {
      P.index > S ? (T = P, P = null) : T = P.sibling;
      var E = m(d, P, h[S], x);
      if (E === null) {
        P === null && (P = T);
        break;
      }
      e && P && E.alternate === null && t(d, P), c = l(E, c, S), N === null ? _ = E : N.sibling = E, N = E, P = T;
    }
    if (S === h.length) return n(d, P), J && un(d, S), _;
    if (P === null) {
      for (; S < h.length; S++) P = p(d, h[S], x), P !== null && (c = l(P, c, S), N === null ? _ = P : N.sibling = P, N = P);
      return J && un(d, S), _;
    }
    for (P = r(d, P); S < h.length; S++) T = v(P, d, S, h[S], x), T !== null && (e && T.alternate !== null && P.delete(T.key === null ? S : T.key), c = l(T, c, S), N === null ? _ = T : N.sibling = T, N = T);
    return e && P.forEach(function(B) {
      return t(d, B);
    }), J && un(d, S), _;
  }
  function w(d, c, h, x) {
    var _ = ir(h);
    if (typeof _ != "function") throw Error(C(150));
    if (h = _.call(h), h == null) throw Error(C(151));
    for (var N = _ = null, P = c, S = c = 0, T = null, E = h.next(); P !== null && !E.done; S++, E = h.next()) {
      P.index > S ? (T = P, P = null) : T = P.sibling;
      var B = m(d, P, E.value, x);
      if (B === null) {
        P === null && (P = T);
        break;
      }
      e && P && B.alternate === null && t(d, P), c = l(B, c, S), N === null ? _ = B : N.sibling = B, N = B, P = T;
    }
    if (E.done) return n(
      d,
      P
    ), J && un(d, S), _;
    if (P === null) {
      for (; !E.done; S++, E = h.next()) E = p(d, E.value, x), E !== null && (c = l(E, c, S), N === null ? _ = E : N.sibling = E, N = E);
      return J && un(d, S), _;
    }
    for (P = r(d, P); !E.done; S++, E = h.next()) E = v(P, d, S, E.value, x), E !== null && (e && E.alternate !== null && P.delete(E.key === null ? S : E.key), c = l(E, c, S), N === null ? _ = E : N.sibling = E, N = E);
    return e && P.forEach(function(F) {
      return t(d, F);
    }), J && un(d, S), _;
  }
  function k(d, c, h, x) {
    if (typeof h == "object" && h !== null && h.type === jn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case fo:
          e: {
            for (var _ = h.key, N = c; N !== null; ) {
              if (N.key === _) {
                if (_ = h.type, _ === jn) {
                  if (N.tag === 7) {
                    n(d, N.sibling), c = o(N, h.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (N.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === It && Qa(_) === N.type) {
                  n(d, N.sibling), c = o(N, h.props), c.ref = dr(d, N, h), c.return = d, d = c;
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            h.type === jn ? (c = xn(h.props.children, d.mode, x, h.key), c.return = d, d = c) : (x = Ko(h.type, h.key, h.props, null, d.mode, x), x.ref = dr(d, c, h), x.return = d, d = x);
          }
          return i(d);
        case Rn:
          e: {
            for (N = h.key; c !== null; ) {
              if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(d, c.sibling), c = o(c, h.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Li(h, d.mode, x), c.return = d, d = c;
          }
          return i(d);
        case It:
          return N = h._init, k(d, c, N(h._payload), x);
      }
      if (vr(h)) return g(d, c, h, x);
      if (ir(h)) return w(d, c, h, x);
      Co(d, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, h), c.return = d, d = c) : (n(d, c), c = Fi(h, d.mode, x), c.return = d, d = c), i(d)) : n(d, c);
  }
  return k;
}
var Zn = Rf(!0), jf = Rf(!1), gl = tn(null), vl = null, Un = null, wu = null;
function xu() {
  wu = Un = vl = null;
}
function ku(e) {
  var t = gl.current;
  X(gl), e._currentValue = t;
}
function Cs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qn(e, t) {
  vl = e, wu = Un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (wu !== e) if (e = { context: e, memoizedValue: t, next: null }, Un === null) {
    if (vl === null) throw Error(C(308));
    Un = e, vl.dependencies = { lanes: 0, firstContext: e };
  } else Un = Un.next = e;
  return t;
}
var mn = null;
function Su(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function zf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Su(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Nt(e, r);
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function Cu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Mf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, W & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Nt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Su(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Nt(e, n);
}
function Bo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, uu(e, n);
  }
}
function Ka(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function wl(e, t, n, r) {
  var o = e.updateQueue;
  Ot = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, i === null ? l = a : i.next = a, i = u;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, s = f.lastBaseUpdate, s !== i && (s === null ? f.firstBaseUpdate = a : s.next = a, f.lastBaseUpdate = u));
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, f = a = u = null, s = l;
    do {
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        f !== null && (f = f.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, w = s;
          switch (m = t, v = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                p = g.call(v, p, m);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, m = typeof g == "function" ? g.call(v, p, m) : g, m == null) break e;
              p = te({}, p, m);
              break e;
            case 2:
              Ot = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, f === null ? (a = f = v, u = p) : f = f.next = v, i |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    En |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Ya(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(C(191, o));
      o.call(r);
    }
  }
}
var so = {}, gt = tn(so), Kr = tn(so), Yr = tn(so);
function yn(e) {
  if (e === so) throw Error(C(174));
  return e;
}
function Eu(e, t) {
  switch (K(Yr, t), K(Kr, e), K(gt, so), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = rs(t, e);
  }
  X(gt), K(gt, t);
}
function Jn() {
  X(gt), X(Kr), X(Yr);
}
function Ff(e) {
  yn(Yr.current);
  var t = yn(gt.current), n = rs(t, e.type);
  t !== n && (K(Kr, e), K(gt, n));
}
function _u(e) {
  Kr.current === e && (X(gt), X(Kr));
}
var q = tn(0);
function xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Ti = [];
function $u() {
  for (var e = 0; e < Ti.length; e++) Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var Vo = jt.ReactCurrentDispatcher, Pi = jt.ReactCurrentBatchConfig, Cn = 0, ee = null, se = null, ce = null, kl = !1, Rr = !1, Gr = 0, F0 = 0;
function ve() {
  throw Error(C(321));
}
function Nu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, o, l) {
  if (Cn = l, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vo.current = e === null || e.memoizedState === null ? D0 : U0, e = n(r, o), Rr) {
    l = 0;
    do {
      if (Rr = !1, Gr = 0, 25 <= l) throw Error(C(301));
      l += 1, ce = se = null, t.updateQueue = null, Vo.current = A0, e = n(r, o);
    } while (Rr);
  }
  if (Vo.current = Sl, t = se !== null && se.next !== null, Cn = 0, ce = se = ee = null, kl = !1, t) throw Error(C(300));
  return e;
}
function Pu() {
  var e = Gr !== 0;
  return Gr = 0, e;
}
function ht() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ce === null ? ee.memoizedState = ce = e : ce = ce.next = e, ce;
}
function et() {
  if (se === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) ce = t, se = e;
  else {
    if (e === null) throw Error(C(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, ce === null ? ee.memoizedState = ce = e : ce = ce.next = e;
  }
  return ce;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ri(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var s = i = null, u = null, a = l;
    do {
      var f = a.lane;
      if ((Cn & f) === f) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, i = r) : u = u.next = p, ee.lanes |= f, En |= f;
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? i = r : u.next = s, at(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, ee.lanes |= l, En |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ji(e) {
  var t = et(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    at(l, t.memoizedState) || (ze = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Lf() {
}
function If(e, t) {
  var n = ee, r = et(), o = t(), l = !at(r.memoizedState, o);
  if (l && (r.memoizedState = o, ze = !0), r = r.queue, Ru(Uf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ce !== null && ce.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zr(9, Df.bind(null, n, r, o, t), void 0, null), de === null) throw Error(C(349));
    Cn & 30 || Of(n, t, o);
  }
  return o;
}
function Of(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Df(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Af(t) && Bf(e);
}
function Uf(e, t, n) {
  return n(function() {
    Af(t) && Bf(e);
  });
}
function Af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Bf(e) {
  var t = Nt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Ga(e) {
  var t = ht();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = O0.bind(null, ee, e), [t.memoizedState, e];
}
function Zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Vf() {
  return et().memoizedState;
}
function Wo(e, t, n, r) {
  var o = ht();
  ee.flags |= e, o.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Hl(e, t, n, r) {
  var o = et();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (l = i.destroy, r !== null && Nu(r, i.deps)) {
      o.memoizedState = Zr(t, n, l, r);
      return;
    }
  }
  ee.flags |= e, o.memoizedState = Zr(1 | t, n, l, r);
}
function Xa(e, t) {
  return Wo(8390656, 8, e, t);
}
function Ru(e, t) {
  return Hl(2048, 8, e, t);
}
function Wf(e, t) {
  return Hl(4, 2, e, t);
}
function Hf(e, t) {
  return Hl(4, 4, e, t);
}
function bf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Qf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(4, 4, bf.bind(null, t, e), n);
}
function ju() {
}
function Kf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Yf(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Nu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gf(e, t, n) {
  return Cn & 21 ? (at(n, t) || (n = qd(), ee.lanes |= n, En |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n);
}
function L0(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Pi.transition;
  Pi.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Pi.transition = r;
  }
}
function Xf() {
  return et().memoizedState;
}
function I0(e, t, n) {
  var r = Xt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Zf(e)) Jf(t, n);
  else if (n = zf(e, t, n, r), n !== null) {
    var o = Ee();
    ut(n, e, r, o), qf(n, t, r);
  }
}
function O0(e, t, n) {
  var r = Xt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zf(e)) Jf(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, s = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = s, at(s, i)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Su(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = zf(e, t, o, r), n !== null && (o = Ee(), ut(n, e, r, o), qf(n, t, r));
  }
}
function Zf(e) {
  var t = e.alternate;
  return e === ee || t !== null && t === ee;
}
function Jf(e, t) {
  Rr = kl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function qf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, uu(e, n);
  }
}
var Sl = { readContext: qe, useCallback: ve, useContext: ve, useEffect: ve, useImperativeHandle: ve, useInsertionEffect: ve, useLayoutEffect: ve, useMemo: ve, useReducer: ve, useRef: ve, useState: ve, useDebugValue: ve, useDeferredValue: ve, useTransition: ve, useMutableSource: ve, useSyncExternalStore: ve, useId: ve, unstable_isNewReconciler: !1 }, D0 = { readContext: qe, useCallback: function(e, t) {
  return ht().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: Xa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Wo(
    4194308,
    4,
    bf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Wo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Wo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ht();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ht();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = I0.bind(null, ee, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ht();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ga, useDebugValue: ju, useDeferredValue: function(e) {
  return ht().memoizedState = e;
}, useTransition: function() {
  var e = Ga(!1), t = e[0];
  return e = L0.bind(null, e[1]), ht().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ee, o = ht();
  if (J) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), de === null) throw Error(C(349));
    Cn & 30 || Of(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Xa(Uf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Zr(9, Df.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = ht(), t = de.identifierPrefix;
  if (J) {
    var n = Ct, r = St;
    n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = F0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, U0 = {
  readContext: qe,
  useCallback: Kf,
  useContext: qe,
  useEffect: Ru,
  useImperativeHandle: Qf,
  useInsertionEffect: Wf,
  useLayoutEffect: Hf,
  useMemo: Yf,
  useReducer: Ri,
  useRef: Vf,
  useState: function() {
    return Ri(Xr);
  },
  useDebugValue: ju,
  useDeferredValue: function(e) {
    var t = et();
    return Gf(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = Ri(Xr)[0], t = et().memoizedState;
    return [e, t];
  },
  useMutableSource: Lf,
  useSyncExternalStore: If,
  useId: Xf,
  unstable_isNewReconciler: !1
}, A0 = { readContext: qe, useCallback: Kf, useContext: qe, useEffect: Ru, useImperativeHandle: Qf, useInsertionEffect: Wf, useLayoutEffect: Hf, useMemo: Yf, useReducer: ji, useRef: Vf, useState: function() {
  return ji(Xr);
}, useDebugValue: ju, useDeferredValue: function(e) {
  var t = et();
  return se === null ? t.memoizedState = e : Gf(t, se.memoizedState, e);
}, useTransition: function() {
  var e = ji(Xr)[0], t = et().memoizedState;
  return [e, t];
}, useMutableSource: Lf, useSyncExternalStore: If, useId: Xf, unstable_isNewReconciler: !1 };
function rt(e, t) {
  if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Es(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Xt(e), l = Et(r, o);
  l.payload = t, n != null && (l.callback = n), t = Yt(e, l, o), t !== null && (ut(t, e, o, r), Bo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ee(), o = Xt(e), l = Et(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Yt(e, l, o), t !== null && (ut(t, e, o, r), Bo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ee(), r = Xt(e), o = Et(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yt(e, o, r), t !== null && (ut(t, e, r, n), Bo(t, e, r));
} };
function Za(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(o, l) : !0;
}
function ep(e, t, n) {
  var r = !1, o = qt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = qe(l) : (o = Fe(t) ? kn : ke.current, r = t.contextTypes, l = (r = r != null) ? Gn(e, o) : qt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Ja(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function _s(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Cu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = qe(l) : (l = Fe(t) ? kn : ke.current, o.context = Gn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Es(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && bl.enqueueReplaceState(o, o.state, null), wl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t) {
  try {
    var n = "", r = t;
    do
      n += hm(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $s(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var B0 = typeof WeakMap == "function" ? WeakMap : Map;
function tp(e, t, n) {
  n = Et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    El || (El = !0, Is = r), $s(e, t);
  }, n;
}
function np(e, t, n) {
  n = Et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      $s(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    $s(e, t), typeof r != "function" && (Gt === null ? Gt = /* @__PURE__ */ new Set([this]) : Gt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function qa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new B0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ty.bind(null, e, t, n), t.then(e, e));
}
function ec(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function tc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Et(-1, 1), t.tag = 2, Yt(n, t, 1))), n.lanes |= 1), e);
}
var V0 = jt.ReactCurrentOwner, ze = !1;
function Se(e, t, n, r) {
  t.child = e === null ? jf(t, null, n, r) : Zn(t, e.child, n, r);
}
function nc(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Qn(t, o), r = Tu(e, t, n, r, l, o), n = Pu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (J && n && yu(t), t.flags |= 1, Se(e, t, r, o), t.child);
}
function rc(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Uu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, rp(e, t, l, r, o)) : (e = Ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wr, n(i, r) && e.ref === t.ref) return Tt(e, t, o);
  }
  return t.flags |= 1, e = Zt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function rp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Wr(l, r) && e.ref === t.ref) if (ze = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (ze = !0);
    else return t.lanes = e.lanes, Tt(e, t, o);
  }
  return Ns(e, t, n, r, o);
}
function op(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Bn, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Bn, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, K(Bn, Ue), Ue |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Bn, Ue), Ue |= r;
  return Se(e, t, o, n), t.child;
}
function lp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ns(e, t, n, r, o) {
  var l = Fe(n) ? kn : ke.current;
  return l = Gn(t, l), Qn(t, o), n = Tu(e, t, n, r, l, o), r = Pu(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tt(e, t, o)) : (J && r && yu(t), t.flags |= 1, Se(e, t, n, o), t.child);
}
function oc(e, t, n, r, o) {
  if (Fe(n)) {
    var l = !0;
    hl(t);
  } else l = !1;
  if (Qn(t, o), t.stateNode === null) Ho(e, t), ep(t, n, r), _s(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var u = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = qe(a) : (a = Fe(n) ? kn : ke.current, a = Gn(t, a));
    var f = n.getDerivedStateFromProps, p = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && Ja(t, i, r, a), Ot = !1;
    var m = t.memoizedState;
    i.state = m, wl(t, r, i, o), u = t.memoizedState, s !== r || m !== u || Me.current || Ot ? (typeof f == "function" && (Es(t, n, f, r), u = t.memoizedState), (s = Ot || Za(t, n, s, r, m, u, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Mf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : rt(t.type, s), i.props = a, p = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = qe(u) : (u = Fe(n) ? kn : ke.current, u = Gn(t, u));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || m !== u) && Ja(t, i, r, u), Ot = !1, m = t.memoizedState, i.state = m, wl(t, r, i, o);
    var g = t.memoizedState;
    s !== p || m !== g || Me.current || Ot ? (typeof v == "function" && (Es(t, n, v, r), g = t.memoizedState), (a = Ot || Za(t, n, a, r, m, g, u) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ts(e, t, n, r, l, o);
}
function Ts(e, t, n, r, o, l) {
  lp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Wa(t, n, !1), Tt(e, t, l);
  r = t.stateNode, V0.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Zn(t, e.child, null, l), t.child = Zn(t, null, s, l)) : Se(e, t, s, l), t.memoizedState = r.state, o && Wa(t, n, !0), t.child;
}
function ip(e) {
  var t = e.stateNode;
  t.pendingContext ? Va(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Va(e, t.context, !1), Eu(e, t.containerInfo);
}
function lc(e, t, n, r, o) {
  return Xn(), vu(o), t.flags |= 256, Se(e, t, n, r), t.child;
}
var Ps = { dehydrated: null, treeContext: null, retryLane: 0 };
function Rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sp(e, t, n) {
  var r = t.pendingProps, o = q.current, l = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(q, o & 1), e === null)
    return Ss(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Yl(i, r, 0, null), e = xn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Rs(n), t.memoizedState = Ps, e) : zu(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return W0(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Zt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Zt(s, l) : (l = xn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Rs(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ps, r;
  }
  return l = e.child, e = l.sibling, r = Zt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function zu(e, t) {
  return t = Yl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Eo(e, t, n, r) {
  return r !== null && vu(r), Zn(t, e.child, null, n), e = zu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function W0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = zi(Error(C(422))), Eo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Yl({ mode: "visible", children: r.children }, o, 0, null), l = xn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Zn(t, e.child, null, i), t.child.memoizedState = Rs(i), t.memoizedState = Ps, l);
  if (!(t.mode & 1)) return Eo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, l = Error(C(419)), r = zi(l, r, void 0), Eo(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, ze || s) {
    if (r = de, r !== null) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Nt(e, o), ut(r, e, o, -1));
    }
    return Du(), r = zi(Error(C(421))), Eo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ny.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = Kt(o.nextSibling), be = t, J = !0, lt = null, e !== null && (Ge[Xe++] = St, Ge[Xe++] = Ct, Ge[Xe++] = Sn, St = e.id, Ct = e.overflow, Sn = t), t = zu(t, r.children), t.flags |= 4096, t);
}
function ic(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cs(e.return, t, n);
}
function Mi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function up(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (Se(e, t, r.children, n), r = q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
      else if (e.tag === 19) ic(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (K(q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && xl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Mi(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && xl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Mi(t, !0, n, null, l);
      break;
    case "together":
      Mi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ho(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), En |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function H0(e, t, n) {
  switch (t.tag) {
    case 3:
      ip(t), Xn();
      break;
    case 5:
      Ff(t);
      break;
    case 1:
      Fe(t.type) && hl(t);
      break;
    case 4:
      Eu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(gl, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(q, q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sp(e, t, n) : (K(q, q.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
      K(q, q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return up(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(q, q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, op(e, t, n);
  }
  return Tt(e, t, n);
}
var ap, js, cp, dp;
ap = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
js = function() {
};
cp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yn(gt.current);
    var l = null;
    switch (n) {
      case "input":
        o = qi(e, o), r = qi(e, r), l = [];
        break;
      case "select":
        o = te({}, o, { value: void 0 }), r = te({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = ns(e, o), r = ns(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fl);
    }
    os(n, r);
    var i;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var s = o[a];
      for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ir.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
      } else n || (l || (l = []), l.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ir.hasOwnProperty(a) ? (u != null && a === "onScroll" && Y("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
dp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!J) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function b0(e, t, n) {
  var r = t.pendingProps;
  switch (gu(t), t.tag) {
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
      return we(t), null;
    case 1:
      return Fe(t.type) && pl(), we(t), null;
    case 3:
      return r = t.stateNode, Jn(), X(Me), X(ke), $u(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (So(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, lt !== null && (Us(lt), lt = null))), js(e, t), we(t), null;
    case 5:
      _u(t);
      var o = yn(Yr.current);
      if (n = t.type, e !== null && t.stateNode != null) cp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return we(t), null;
        }
        if (e = yn(gt.current), So(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[mt] = t, r[Qr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < xr.length; o++) Y(xr[o], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              ma(r, l), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Y("invalid", r);
              break;
            case "textarea":
              ga(r, l), Y("invalid", r);
          }
          os(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var s = l[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && ko(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && ko(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Ir.hasOwnProperty(i) && s != null && i === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              po(r), ya(r, l, !0);
              break;
            case "textarea":
              po(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = fl);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[mt] = t, e[Qr] = r, ap(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ls(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < xr.length; o++) Y(xr[o], e);
                o = r;
                break;
              case "source":
                Y("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), o = r;
                break;
              case "details":
                Y("toggle", e), o = r;
                break;
              case "input":
                ma(e, r), o = qi(e, r), Y("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = te({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                ga(e, r), o = ns(e, r), Y("invalid", e);
                break;
              default:
                o = r;
            }
            os(n, o), s = o;
            for (l in s) if (s.hasOwnProperty(l)) {
              var u = s[l];
              l === "style" ? Bd(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ud(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Or(e, u) : typeof u == "number" && Or(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Ir.hasOwnProperty(l) ? u != null && l === "onScroll" && Y("scroll", e) : u != null && nu(e, l, u, i));
            }
            switch (n) {
              case "input":
                po(e), ya(e, r, !1);
                break;
              case "textarea":
                po(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Vn(e, !!r.multiple, l, !1) : r.defaultValue != null && Vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) dp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (n = yn(Yr.current), yn(gt.current), So(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (l = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
            case 3:
              ko(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ko(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
      }
      return we(t), null;
    case 13:
      if (X(q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (J && He !== null && t.mode & 1 && !(t.flags & 128)) Pf(), Xn(), t.flags |= 98560, l = !1;
        else if (l = So(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
            l[mt] = t;
          } else Xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          we(t), l = !1;
        } else lt !== null && (Us(lt), lt = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || q.current & 1 ? ue === 0 && (ue = 3) : Du())), t.updateQueue !== null && (t.flags |= 4), we(t), null);
    case 4:
      return Jn(), js(e, t), e === null && Hr(t.stateNode.containerInfo), we(t), null;
    case 10:
      return ku(t.type._context), we(t), null;
    case 17:
      return Fe(t.type) && pl(), we(t), null;
    case 19:
      if (X(q), l = t.memoizedState, l === null) return we(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) fr(l, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = xl(e), i !== null) {
            for (t.flags |= 128, fr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(q, q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && le() > er && (t.flags |= 128, r = !0, fr(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = xl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), fr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !J) return we(t), null;
        } else 2 * le() - l.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, fr(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = le(), t.sibling = null, n = q.current, K(q, r ? n & 1 | 2 : n & 1), t) : (we(t), null);
    case 22:
    case 23:
      return Ou(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Q0(e, t) {
  switch (gu(t), t.tag) {
    case 1:
      return Fe(t.type) && pl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Jn(), X(Me), X(ke), $u(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _u(t), null;
    case 13:
      if (X(q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        Xn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return X(q), null;
    case 4:
      return Jn(), null;
    case 10:
      return ku(t.type._context), null;
    case 22:
    case 23:
      return Ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1, xe = !1, K0 = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ne(e, t, r);
  }
  else n.current = null;
}
function zs(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var sc = !1;
function Y0(e, t) {
  if (ms = al, e = yf(), mu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, s = -1, u = -1, a = 0, f = 0, p = e, m = null;
        t: for (; ; ) {
          for (var v; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (u = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (v = p.firstChild) !== null; )
            m = p, p = v;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++a === o && (s = i), m === l && ++f === r && (u = i), (v = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = v;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ys = { focusedElem: e, selectionRange: n }, al = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var w = g.memoizedProps, k = g.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? w : rt(t.type, w), k);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(C(163));
      }
    } catch (x) {
      ne(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return g = sc, sc = !1, g;
}
function jr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && zs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ql(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ms(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function fp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, fp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[Qr], delete t[ws], delete t[R0], delete t[j0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function pp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || pp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Fs(e, t, n), e = e.sibling; e !== null; ) Fs(e, t, n), e = e.sibling;
}
function Ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ls(e, t, n), e = e.sibling; e !== null; ) Ls(e, t, n), e = e.sibling;
}
var fe = null, ot = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) hp(e, t, n), n = n.sibling;
}
function hp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function") try {
    yt.onCommitFiberUnmount(Dl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      xe || An(n, t);
    case 6:
      var r = fe, o = ot;
      fe = null, zt(e, t, n), fe = r, ot = o, fe !== null && (ot ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null && (ot ? (e = fe, n = n.stateNode, e.nodeType === 8 ? $i(e.parentNode, n) : e.nodeType === 1 && $i(e, n), Br(e)) : $i(fe, n.stateNode));
      break;
    case 4:
      r = fe, o = ot, fe = n.stateNode.containerInfo, ot = !0, zt(e, t, n), fe = r, ot = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && zs(n, t, i), o = o.next;
        } while (o !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (!xe && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ne(n, t, s);
      }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, zt(e, t, n), xe = r) : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new K0()), t.forEach(function(r) {
      var o = ry.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            fe = s.stateNode, ot = !1;
            break e;
          case 3:
            fe = s.stateNode.containerInfo, ot = !0;
            break e;
          case 4:
            fe = s.stateNode.containerInfo, ot = !0;
            break e;
        }
        s = s.return;
      }
      if (fe === null) throw Error(C(160));
      hp(l, i, o), fe = null, ot = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ne(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) mp(t, e), t = t.sibling;
}
function mp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nt(t, e), ct(e), r & 4) {
        try {
          jr(3, e, e.return), Ql(3, e);
        } catch (w) {
          ne(e, e.return, w);
        }
        try {
          jr(5, e, e.return);
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      break;
    case 1:
      nt(t, e), ct(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (nt(t, e), ct(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Or(o, "");
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && l.type === "radio" && l.name != null && Id(o, l), ls(s, i);
          var a = ls(s, l);
          for (i = 0; i < u.length; i += 2) {
            var f = u[i], p = u[i + 1];
            f === "style" ? Bd(o, p) : f === "dangerouslySetInnerHTML" ? Ud(o, p) : f === "children" ? Or(o, p) : nu(o, f, p, a);
          }
          switch (s) {
            case "input":
              es(o, l);
              break;
            case "textarea":
              Od(o, l);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var v = l.value;
              v != null ? Vn(o, !!l.multiple, v, !1) : m !== !!l.multiple && (l.defaultValue != null ? Vn(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : Vn(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[Qr] = l;
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      break;
    case 6:
      if (nt(t, e), ct(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (w) {
          ne(e, e.return, w);
        }
      }
      break;
    case 3:
      if (nt(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Br(t.containerInfo);
      } catch (w) {
        ne(e, e.return, w);
      }
      break;
    case 4:
      nt(t, e), ct(e);
      break;
    case 13:
      nt(t, e), ct(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Lu = le())), r & 4 && ac(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (a = xe) || f, nt(t, e), xe = a) : nt(t, e), ct(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !f && e.mode & 1) for (R = e, f = e.child; f !== null; ) {
          for (p = R = f; R !== null; ) {
            switch (m = R, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jr(4, m, m.return);
                break;
              case 1:
                An(m, m.return);
                var g = m.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (w) {
                    ne(r, n, w);
                  }
                }
                break;
              case 5:
                An(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  dc(p);
                  continue;
                }
            }
            v !== null ? (v.return = m, R = v) : dc(p);
          }
          f = f.sibling;
        }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                o = p.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Ad("display", i));
              } catch (w) {
                ne(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (f === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (w) {
              ne(e, e.return, w);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), p = p.return;
          }
          f === p && (f = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      nt(t, e), ct(e), r & 4 && ac(e);
      break;
    case 21:
      break;
    default:
      nt(
        t,
        e
      ), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Or(o, ""), r.flags &= -33);
          var l = uc(e);
          Ls(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = uc(e);
          Fs(e, s, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G0(e, t, n) {
  R = e, yp(e);
}
function yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || _o;
      if (!i) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || xe;
        s = _o;
        var a = xe;
        if (_o = i, (xe = u) && !a) for (R = o; R !== null; ) i = R, u = i.child, i.tag === 22 && i.memoizedState !== null ? fc(o) : u !== null ? (u.return = i, R = u) : fc(o);
        for (; l !== null; ) R = l, yp(l), l = l.sibling;
        R = o, _o = s, xe = a;
      }
      cc(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, R = l) : cc(e);
  }
}
function cc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xe || Ql(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !xe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : rt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Ya(t, l, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ya(t, i, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var a = t.alternate;
              if (a !== null) {
                var f = a.memoizedState;
                if (f !== null) {
                  var p = f.dehydrated;
                  p !== null && Br(p);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(C(163));
        }
        xe || t.flags & 512 && Ms(t);
      } catch (m) {
        ne(t, t.return, m);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function dc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function fc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ql(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, o, u);
            }
          }
          var l = t.return;
          try {
            Ms(t);
          } catch (u) {
            ne(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ms(t);
          } catch (u) {
            ne(t, i, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, R = s;
      break;
    }
    R = t.return;
  }
}
var X0 = Math.ceil, Cl = jt.ReactCurrentDispatcher, Mu = jt.ReactCurrentOwner, Je = jt.ReactCurrentBatchConfig, W = 0, de = null, ie = null, he = 0, Ue = 0, Bn = tn(0), ue = 0, Jr = null, En = 0, Kl = 0, Fu = 0, zr = null, je = null, Lu = 0, er = 1 / 0, wt = null, El = !1, Is = null, Gt = null, $o = !1, Bt = null, _l = 0, Mr = 0, Os = null, bo = -1, Qo = 0;
function Ee() {
  return W & 6 ? le() : bo !== -1 ? bo : bo = le();
}
function Xt(e) {
  return e.mode & 1 ? W & 2 && he !== 0 ? he & -he : M0.transition !== null ? (Qo === 0 && (Qo = qd()), Qo) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : sf(e.type)), e) : 1;
}
function ut(e, t, n, r) {
  if (50 < Mr) throw Mr = 0, Os = null, Error(C(185));
  oo(e, n, r), (!(W & 2) || e !== de) && (e === de && (!(W & 2) && (Kl |= n), ue === 4 && Ut(e, he)), Le(e, r), n === 1 && W === 0 && !(t.mode & 1) && (er = le() + 500, Wl && nn()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Mm(e, t);
  var r = ul(e, e === de ? he : 0);
  if (r === 0) n !== null && ka(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ka(n), t === 1) e.tag === 0 ? z0(pc.bind(null, e)) : $f(pc.bind(null, e)), T0(function() {
      !(W & 6) && nn();
    }), n = null;
    else {
      switch (ef(r)) {
        case 1:
          n = su;
          break;
        case 4:
          n = Zd;
          break;
        case 16:
          n = sl;
          break;
        case 536870912:
          n = Jd;
          break;
        default:
          n = sl;
      }
      n = Ep(n, gp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function gp(e, t) {
  if (bo = -1, Qo = 0, W & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = ul(e, e === de ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $l(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var l = wp();
    (de !== e || he !== t) && (wt = null, er = le() + 500, wn(e, t));
    do
      try {
        q0();
        break;
      } catch (s) {
        vp(e, s);
      }
    while (!0);
    xu(), Cl.current = l, W = o, ie !== null ? t = 0 : (de = null, he = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (o = cs(e), o !== 0 && (r = o, t = Ds(e, o))), t === 1) throw n = Jr, wn(e, 0), Ut(e, r), Le(e, le()), n;
    if (t === 6) Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Z0(o) && (t = $l(e, r), t === 2 && (l = cs(e), l !== 0 && (r = l, t = Ds(e, l))), t === 1)) throw n = Jr, wn(e, 0), Ut(e, r), Le(e, le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          an(e, je, wt);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Lu + 500 - le(), 10 < t)) {
            if (ul(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ee(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = vs(an.bind(null, e, je, wt), t);
            break;
          }
          an(e, je, wt);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - st(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * X0(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = vs(an.bind(null, e, je, wt), r);
            break;
          }
          an(e, je, wt);
          break;
        case 5:
          an(e, je, wt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Le(e, le()), e.callbackNode === n ? gp.bind(null, e) : null;
}
function Ds(e, t) {
  var n = zr;
  return e.current.memoizedState.isDehydrated && (wn(e, t).flags |= 256), e = $l(e, t), e !== 2 && (t = je, je = n, t !== null && Us(t)), e;
}
function Us(e) {
  je === null ? je = e : je.push.apply(je, e);
}
function Z0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!at(l(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ut(e, t) {
  for (t &= ~Fu, t &= ~Kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - st(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function pc(e) {
  if (W & 6) throw Error(C(327));
  Kn();
  var t = ul(e, 0);
  if (!(t & 1)) return Le(e, le()), null;
  var n = $l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cs(e);
    r !== 0 && (t = r, n = Ds(e, r));
  }
  if (n === 1) throw n = Jr, wn(e, 0), Ut(e, t), Le(e, le()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, an(e, je, wt), Le(e, le()), null;
}
function Iu(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (er = le() + 500, Wl && nn());
  }
}
function _n(e) {
  Bt !== null && Bt.tag === 0 && !(W & 6) && Kn();
  var t = W;
  W |= 1;
  var n = Je.transition, r = H;
  try {
    if (Je.transition = null, H = 1, e) return e();
  } finally {
    H = r, Je.transition = n, W = t, !(W & 6) && nn();
  }
}
function Ou() {
  Ue = Bn.current, X(Bn);
}
function wn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, N0(n)), ie !== null) for (n = ie.return; n !== null; ) {
    var r = n;
    switch (gu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && pl();
        break;
      case 3:
        Jn(), X(Me), X(ke), $u();
        break;
      case 5:
        _u(r);
        break;
      case 4:
        Jn();
        break;
      case 13:
        X(q);
        break;
      case 19:
        X(q);
        break;
      case 10:
        ku(r.type._context);
        break;
      case 22:
      case 23:
        Ou();
    }
    n = n.return;
  }
  if (de = e, ie = e = Zt(e.current, null), he = Ue = t, ue = 0, Jr = null, Fu = Kl = En = 0, je = zr = null, mn !== null) {
    for (t = 0; t < mn.length; t++) if (n = mn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var i = l.next;
        l.next = o, r.next = i;
      }
      n.pending = r;
    }
    mn = null;
  }
  return e;
}
function vp(e, t) {
  do {
    var n = ie;
    try {
      if (xu(), Vo.current = Sl, kl) {
        for (var r = ee.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        kl = !1;
      }
      if (Cn = 0, ce = se = ee = null, Rr = !1, Gr = 0, Mu.current = null, n === null || n.return === null) {
        ue = 1, Jr = t, ie = null;
        break;
      }
      e: {
        var l = e, i = n.return, s = n, u = t;
        if (t = he, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, f = s, p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m ? (f.updateQueue = m.updateQueue, f.memoizedState = m.memoizedState, f.lanes = m.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var v = ec(i);
          if (v !== null) {
            v.flags &= -257, tc(v, i, s, l, t), v.mode & 1 && qa(l, a, t), t = v, u = a;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(u), t.updateQueue = w;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              qa(l, a, t), Du();
              break e;
            }
            u = Error(C(426));
          }
        } else if (J && s.mode & 1) {
          var k = ec(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), tc(k, i, s, l, t), vu(qn(u, s));
            break e;
          }
        }
        l = u = qn(u, s), ue !== 4 && (ue = 2), zr === null ? zr = [l] : zr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = tp(l, u, t);
              Ka(l, d);
              break e;
            case 1:
              s = u;
              var c = l.type, h = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Gt === null || !Gt.has(h)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var x = np(l, s, t);
                Ka(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      kp(n);
    } catch (_) {
      t = _, ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wp() {
  var e = Cl.current;
  return Cl.current = Sl, e === null ? Sl : e;
}
function Du() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), de === null || !(En & 268435455) && !(Kl & 268435455) || Ut(de, he);
}
function $l(e, t) {
  var n = W;
  W |= 2;
  var r = wp();
  (de !== e || he !== t) && (wt = null, wn(e, t));
  do
    try {
      J0();
      break;
    } catch (o) {
      vp(e, o);
    }
  while (!0);
  if (xu(), W = n, Cl.current = r, ie !== null) throw Error(C(261));
  return de = null, he = 0, ue;
}
function J0() {
  for (; ie !== null; ) xp(ie);
}
function q0() {
  for (; ie !== null && !Em(); ) xp(ie);
}
function xp(e) {
  var t = Cp(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? kp(e) : ie = t, Mu.current = null;
}
function kp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Q0(n, t), n !== null) {
        n.flags &= 32767, ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, ie = null;
        return;
      }
    } else if (n = b0(n, t, Ue), n !== null) {
      ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function an(e, t, n) {
  var r = H, o = Je.transition;
  try {
    Je.transition = null, H = 1, ey(e, t, n, r);
  } finally {
    Je.transition = o, H = r;
  }
  return null;
}
function ey(e, t, n, r) {
  do
    Kn();
  while (Bt !== null);
  if (W & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Fm(e, l), e === de && (ie = de = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $o || ($o = !0, Ep(sl, function() {
    return Kn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Je.transition, Je.transition = null;
    var i = H;
    H = 1;
    var s = W;
    W |= 4, Mu.current = null, Y0(e, n), mp(n, e), x0(ys), al = !!ms, ys = ms = null, e.current = n, G0(n), _m(), W = s, H = i, Je.transition = l;
  } else e.current = n;
  if ($o && ($o = !1, Bt = e, _l = o), l = e.pendingLanes, l === 0 && (Gt = null), Tm(n.stateNode), Le(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (El) throw El = !1, e = Is, Is = null, e;
  return _l & 1 && e.tag !== 0 && Kn(), l = e.pendingLanes, l & 1 ? e === Os ? Mr++ : (Mr = 0, Os = e) : Mr = 0, nn(), null;
}
function Kn() {
  if (Bt !== null) {
    var e = ef(_l), t = Je.transition, n = H;
    try {
      if (Je.transition = null, H = 16 > e ? 16 : e, Bt === null) var r = !1;
      else {
        if (e = Bt, Bt = null, _l = 0, W & 6) throw Error(C(331));
        var o = W;
        for (W |= 4, R = e.current; R !== null; ) {
          var l = R, i = l.child;
          if (R.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (R = a; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, f, l);
                  }
                  var p = f.child;
                  if (p !== null) p.return = f, R = p;
                  else for (; R !== null; ) {
                    f = R;
                    var m = f.sibling, v = f.return;
                    if (fp(f), f === a) {
                      R = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, R = m;
                      break;
                    }
                    R = v;
                  }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var k = w.sibling;
                    w.sibling = null, w = k;
                  } while (w !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, R = i;
          else e: for (; R !== null; ) {
            if (l = R, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                jr(9, l, l.return);
            }
            var d = l.sibling;
            if (d !== null) {
              d.return = l.return, R = d;
              break e;
            }
            R = l.return;
          }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          i = R;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) h.return = i, R = h;
          else e: for (i = c; R !== null; ) {
            if (s = R, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ql(9, s);
              }
            } catch (_) {
              ne(s, s.return, _);
            }
            if (s === i) {
              R = null;
              break e;
            }
            var x = s.sibling;
            if (x !== null) {
              x.return = s.return, R = x;
              break e;
            }
            R = s.return;
          }
        }
        if (W = o, nn(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot(Dl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, Je.transition = t;
    }
  }
  return !1;
}
function hc(e, t, n) {
  t = qn(n, t), t = tp(e, t, 1), e = Yt(e, t, 1), t = Ee(), e !== null && (oo(e, 1, t), Le(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      hc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
        e = qn(n, e), e = np(t, e, 1), t = Yt(t, e, 1), e = Ee(), t !== null && (oo(t, 1, e), Le(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ty(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, de === e && (he & n) === n && (ue === 4 || ue === 3 && (he & 130023424) === he && 500 > le() - Lu ? wn(e, 0) : Fu |= n), Le(e, t);
}
function Sp(e, t) {
  t === 0 && (e.mode & 1 ? (t = yo, yo <<= 1, !(yo & 130023424) && (yo = 4194304)) : t = 1);
  var n = Ee();
  e = Nt(e, t), e !== null && (oo(e, t, n), Le(e, n));
}
function ny(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sp(e, n);
}
function ry(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Sp(e, n);
}
var Cp;
Cp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, H0(e, t, n);
    ze = !!(e.flags & 131072);
  }
  else ze = !1, J && t.flags & 1048576 && Nf(t, yl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ho(e, t), e = t.pendingProps;
      var o = Gn(t, ke.current);
      Qn(t, n), o = Tu(null, t, r, e, o, n);
      var l = Pu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (l = !0, hl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Cu(t), o.updater = bl, t.stateNode = o, o._reactInternals = t, _s(t, r, e, n), t = Ts(null, t, r, !0, l, n)) : (t.tag = 0, J && l && yu(t), Se(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ho(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ly(r), e = rt(r, e), o) {
          case 0:
            t = Ns(null, t, r, e, n);
            break e;
          case 1:
            t = oc(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), Ns(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), oc(e, t, r, o, n);
    case 3:
      e: {
        if (ip(t), e === null) throw Error(C(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Mf(e, t), wl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = qn(Error(C(423)), t), t = lc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = qn(Error(C(424)), t), t = lc(e, t, r, n, o);
          break e;
        } else for (He = Kt(t.stateNode.containerInfo.firstChild), be = t, J = !0, lt = null, n = jf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Xn(), r === o) {
            t = Tt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ff(t), e === null && Ss(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, gs(r, o) ? i = null : l !== null && gs(r, l) && (t.flags |= 32), lp(e, t), Se(e, t, i, n), t.child;
    case 6:
      return e === null && Ss(t), null;
    case 13:
      return sp(e, t, n);
    case 4:
      return Eu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), nc(e, t, r, o, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(gl, r._currentValue), r._currentValue = i, l !== null) if (at(l.value, i)) {
          if (l.children === o.children && !Me.current) {
            t = Tt(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var s = l.dependencies;
          if (s !== null) {
            i = l.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (l.tag === 1) {
                  u = Et(-1, n & -n), u.tag = 2;
                  var a = l.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var f = a.pending;
                    f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u;
                  }
                }
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Cs(
                  l.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (i = l.return, i === null) throw Error(C(341));
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Cs(i, n, t), i = l.sibling;
          } else i = l.child;
          if (i !== null) i.return = l;
          else for (i = l; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (l = i.sibling, l !== null) {
              l.return = i.return, i = l;
              break;
            }
            i = i.return;
          }
          l = i;
        }
        Se(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Qn(t, n), o = qe(o), r = r(o), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = rt(r, t.pendingProps), o = rt(r.type, o), rc(e, t, r, o, n);
    case 15:
      return rp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rt(r, o), Ho(e, t), t.tag = 1, Fe(r) ? (e = !0, hl(t)) : e = !1, Qn(t, n), ep(t, r, o), _s(t, r, o, n), Ts(null, t, r, !0, e, n);
    case 19:
      return up(e, t, n);
    case 22:
      return op(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Ep(e, t) {
  return Xd(e, t);
}
function oy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ze(e, t, n, r) {
  return new oy(e, t, n, r);
}
function Uu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ly(e) {
  if (typeof e == "function") return Uu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ou) return 11;
    if (e === lu) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ko(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") Uu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case jn:
      return xn(n.children, o, l, t);
    case ru:
      i = 8, o |= 8;
      break;
    case Gi:
      return e = Ze(12, n, t, o | 2), e.elementType = Gi, e.lanes = l, e;
    case Xi:
      return e = Ze(13, n, t, o), e.elementType = Xi, e.lanes = l, e;
    case Zi:
      return e = Ze(19, n, t, o), e.elementType = Zi, e.lanes = l, e;
    case Md:
      return Yl(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case jd:
          i = 10;
          break e;
        case zd:
          i = 9;
          break e;
        case ou:
          i = 11;
          break e;
        case lu:
          i = 14;
          break e;
        case It:
          i = 16, r = null;
          break e;
      }
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = Ze(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function xn(e, t, n, r) {
  return e = Ze(7, e, r, t), e.lanes = n, e;
}
function Yl(e, t, n, r) {
  return e = Ze(22, e, r, t), e.elementType = Md, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Fi(e, t, n) {
  return e = Ze(6, e, null, t), e.lanes = n, e;
}
function Li(e, t, n) {
  return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function iy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = mi(0), this.expirationTimes = mi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Au(e, t, n, r, o, l, i, s, u) {
  return e = new iy(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ze(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cu(l), e;
}
function sy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function _p(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return _f(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, o, l, i, s, u) {
  return e = Au(n, r, !0, e, o, l, i, s, u), e.context = _p(null), n = e.current, r = Ee(), o = Xt(n), l = Et(r, o), l.callback = t ?? null, Yt(n, l, o), e.current.lanes = o, oo(e, o, r), Le(e, r), e;
}
function Gl(e, t, n, r) {
  var o = t.current, l = Ee(), i = Xt(o);
  return n = _p(n), t.context === null ? t.context = n : t.pendingContext = n, t = Et(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yt(o, t, i), e !== null && (ut(e, o, i, l), Bo(e, o, i)), i;
}
function Nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bu(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function uy() {
  return null;
}
var Np = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vu(e) {
  this._internalRoot = e;
}
Xl.prototype.render = Vu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Gl(e, t, null, null);
};
Xl.prototype.unmount = Vu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _n(function() {
      Gl(null, e, null, null);
    }), t[$t] = null;
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = rf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++) ;
    Dt.splice(n, 0, e), n === 0 && lf(e);
  }
};
function Wu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Zl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function yc() {
}
function ay(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Nl(i);
        l.call(a);
      };
    }
    var i = $p(t, r, e, 0, null, !1, !1, "", yc);
    return e._reactRootContainer = i, e[$t] = i.current, Hr(e.nodeType === 8 ? e.parentNode : e), _n(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = Nl(u);
      s.call(a);
    };
  }
  var u = Au(e, 0, !1, null, null, !1, !1, "", yc);
  return e._reactRootContainer = u, e[$t] = u.current, Hr(e.nodeType === 8 ? e.parentNode : e), _n(function() {
    Gl(t, u, n, r);
  }), u;
}
function Jl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = Nl(i);
        s.call(u);
      };
    }
    Gl(t, i, e, o);
  } else i = ay(n, t, e, o, r);
  return Nl(i);
}
tf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 && (uu(t, n | 1), Le(t, le()), !(W & 6) && (er = le() + 500, nn()));
      }
      break;
    case 13:
      _n(function() {
        var r = Nt(e, 1);
        if (r !== null) {
          var o = Ee();
          ut(r, e, 1, o);
        }
      }), Bu(e, 1);
  }
};
au = function(e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      ut(t, e, 134217728, n);
    }
    Bu(e, 134217728);
  }
};
nf = function(e) {
  if (e.tag === 13) {
    var t = Xt(e), n = Nt(e, t);
    if (n !== null) {
      var r = Ee();
      ut(n, e, t, r);
    }
    Bu(e, t);
  }
};
rf = function() {
  return H;
};
of = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
  }
};
ss = function(e, t, n) {
  switch (t) {
    case "input":
      if (es(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Vl(r);
            if (!o) throw Error(C(90));
            Ld(r), es(r, o);
          }
        }
      }
      break;
    case "textarea":
      Od(e, n);
      break;
    case "select":
      t = n.value, t != null && Vn(e, !!n.multiple, t, !1);
  }
};
Hd = Iu;
bd = _n;
var cy = { usingClientEntryPoint: !1, Events: [io, Ln, Vl, Vd, Wd, Iu] }, pr = { findFiberByHostInstance: hn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dy = { bundleType: pr.bundleType, version: pr.version, rendererPackageName: pr.rendererPackageName, rendererConfig: pr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: jt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Yd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: pr.findFiberByHostInstance || uy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!No.isDisabled && No.supportsFiber) try {
    Dl = No.inject(dy), yt = No;
  } catch {
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
Ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wu(t)) throw Error(C(200));
  return sy(e, t, null, n);
};
Ke.createRoot = function(e, t) {
  if (!Wu(e)) throw Error(C(299));
  var n = !1, r = "", o = Np;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Au(e, 1, !1, null, null, n, !1, r, o), e[$t] = t.current, Hr(e.nodeType === 8 ? e.parentNode : e), new Vu(t);
};
Ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = Yd(t), e = e === null ? null : e.stateNode, e;
};
Ke.flushSync = function(e) {
  return _n(e);
};
Ke.hydrate = function(e, t, n) {
  if (!Zl(t)) throw Error(C(200));
  return Jl(null, e, t, !0, n);
};
Ke.hydrateRoot = function(e, t, n) {
  if (!Wu(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Np;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = $p(t, null, e, 1, n ?? null, o, !1, l, i), e[$t] = t.current, Hr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Xl(t);
};
Ke.render = function(e, t, n) {
  if (!Zl(t)) throw Error(C(200));
  return Jl(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function(e) {
  if (!Zl(e)) throw Error(C(40));
  return e._reactRootContainer ? (_n(function() {
    Jl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[$t] = null;
    });
  }), !0) : !1;
};
Ke.unstable_batchedUpdates = Iu;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Zl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Jl(e, t, n, !1, r);
};
Ke.version = "18.3.1-next-f1338f8080-20240426";
function Tp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp);
    } catch (e) {
      console.error(e);
    }
}
Tp(), Nd.exports = Ke;
var Pp = Nd.exports, Hu, gc = Pp;
Hu = gc.createRoot, gc.hydrateRoot;
var fy = Object.defineProperty, py = (e, t, n) => t in e ? fy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, To = (e, t, n) => py(e, typeof t != "symbol" ? t + "" : t, n);
const hy = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, my = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, yy = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function gy(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Rp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const vy = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Rp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, wy = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, xy = {
  stringify: (e) => e,
  parse: (e) => e
}, Ii = {
  string: xy,
  number: wy,
  boolean: hy,
  function: my,
  method: vy,
  json: yy
}, hr = Symbol.for("r2wc.render"), Po = Symbol.for("r2wc.connected"), ln = Symbol.for("r2wc.context"), Ie = Symbol.for("r2wc.props");
function ky(e, t, n) {
  var r, o, l;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const i = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, f = {}, p = {};
  for (const v of i) {
    u[v] = Array.isArray(t.props) ? "string" : t.props[v];
    const g = gy(v);
    f[v] = g, p[g] = v;
  }
  for (const v of s)
    a[v] = Array.isArray(t.events) ? {} : t.events[v];
  class m extends HTMLElement {
    constructor() {
      super(), To(this, l, !0), To(this, o), To(this, r, {}), To(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[Ie].container = this.container;
      for (const g of i) {
        const w = f[g], k = this.getAttribute(w), d = u[g], c = d ? Ii[d] : null;
        if (d === "method") {
          const h = Rp(w);
          Object.defineProperty(this[Ie].container, h, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ie][h];
            },
            set(x) {
              this[Ie][h] = x, this[hr]();
            }
          }), this[Ie][g] = c.parse(k, w, this);
        }
        c != null && c.parse && k && (this[Ie][g] = c.parse(k, w, this));
      }
      for (const g of s)
        this[Ie][g] = (w) => {
          const k = g.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(k, { detail: w, ...a[g] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(p);
    }
    connectedCallback() {
      this[Po] = !0, this[hr]();
    }
    disconnectedCallback() {
      this[Po] = !1, this[ln] && n.unmount(this[ln]), delete this[ln];
    }
    attributeChangedCallback(g, w, k) {
      const d = p[g], c = u[d], h = c ? Ii[c] : null;
      d in u && h != null && h.parse && k && (this[Ie][d] = h.parse(k, g, this), this[hr]());
    }
    [(l = Po, o = ln, r = Ie, hr)]() {
      this[Po] && (this[ln] ? n.update(this[ln], this[Ie]) : this[ln] = n.mount(
        this.container,
        e,
        this[Ie]
      ));
    }
  }
  for (const v of i) {
    const g = f[v], w = u[v];
    Object.defineProperty(m.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ie][v];
      },
      set(k) {
        this[Ie][v] = k;
        const d = w ? Ii[w] : null;
        if (d != null && d.stringify) {
          const c = d.stringify(k, g, this);
          this.getAttribute(g) !== c && this.setAttribute(g, c);
        } else
          this[hr]();
      }
    });
  }
  return m;
}
function Sy(e, t, n) {
  const r = Hu(e), o = xt.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Cy({ root: e, ReactComponent: t }, n) {
  const r = xt.createElement(t, n);
  e.render(r);
}
function Ey({ root: e }) {
  e.unmount();
}
function _y(e, t = {}) {
  return ky(e, t, { mount: Sy, update: Cy, unmount: Ey });
}
var jp = { exports: {} }, ql = {};
var $y = z, Ny = Symbol.for("react.element"), Ty = Symbol.for("react.fragment"), Py = Object.prototype.hasOwnProperty, Ry = $y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function zp(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Py.call(t, r) && !jy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ny, type: e, key: l, ref: i, props: o, _owner: Ry.current };
}
ql.Fragment = Ty;
ql.jsx = zp;
ql.jsxs = zp;
jp.exports = ql;
var y = jp.exports;
var zy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const My = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = z.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: i,
      className: s = "",
      children: u,
      ...a
    }, f) => z.createElement(
      "svg",
      {
        ref: f,
        ...zy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(l) * 24 / Number(o) : l,
        className: ["lucide", `lucide-${My(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([p, m]) => z.createElement(p, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Mp = Z("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Fy = Z("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Ly = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Iy = Z("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Oy = Z("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Dy = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Uy = Z("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const Ay = Z("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Fp = Z("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const By = Z("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const Vy = Z("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const Wy = Z("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const Hy = Z("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const by = Z("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const Qy = Z("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const vc = Z("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const wc = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const Ky = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Yy = Z("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const Gy = Z("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const Xy = Z("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Zy = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const Jy = Z("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const qy = Z("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Lp = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function eg({ isOpen: e, onClick: t, config: n }) {
  const r = `
    fixed bottom-6 right-6 p-4 text-white shadow-lg transition-all duration-300
    ${n.shape === "round" ? "rounded-full" : "rounded-lg"}
  `;
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: t,
      style: { backgroundColor: n.color },
      className: r,
      children: e ? /* @__PURE__ */ y.jsx(Lp, { className: "h-6 w-6" }) : /* @__PURE__ */ y.jsx(Fp, { className: "h-6 w-6" })
    }
  );
}
function tg({
  onClose: e,
  onToggleMaximize: t,
  isMaximized: n,
  isConnected: r,
  currentView: o,
  onBackToChat: l,
  onStartNewChat: i,
  onEndChat: s,
  onViewRecentChats: u,
  config: a
}) {
  const [f, p] = z.useState(!1), m = () => {
    switch (o) {
      case "recent-chats":
        return "Recent chats";
      case "profile":
        return "Update Profile";
      default:
        return "Chat with us";
    }
  }, v = o !== "chat", g = o === "chat";
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      style: { backgroundColor: a.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-3", children: [
          v && /* @__PURE__ */ y.jsx(
            "button",
            {
              onClick: l,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ y.jsx(Fy, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("h3", { className: "font-semibold text-lg", children: m() }),
            g && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ y.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${r ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ y.jsx("p", { className: "text-sm opacity-90", children: r ? "Online" : "Connecting..." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ y.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ y.jsx(
            "button",
            {
              onClick: () => p(!f),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ y.jsx(by, { className: "h-4 w-4" })
            }
          ),
          f && /* @__PURE__ */ y.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                onClick: () => {
                  i(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ y.jsx(Ky, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                onClick: () => {
                  s(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ y.jsx(Yy, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                onClick: () => {
                  u(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ y.jsx(By, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ y.jsx("hr", {}),
            /* @__PURE__ */ y.jsx(
              "button",
              {
                onClick: () => {
                  t(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                  /* @__PURE__ */ y.jsx(Hy, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                  /* @__PURE__ */ y.jsx(Ay, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                onClick: () => {
                  e(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ y.jsx(Lp, { className: "h-4 w-4" }),
                  " Close"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
}
function ng({
  status: e,
  timestamp: t,
  onRetry: n
}) {
  const r = (l) => new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(new Date(l)), o = () => {
    switch (e) {
      case "sent":
        return /* @__PURE__ */ y.jsx(Dy, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ y.jsx(Oy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ y.jsx(Mp, { className: "w-3 h-3 text-red-500" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1 text-xs text-gray-500", children: [
    /* @__PURE__ */ y.jsx("span", { children: r(t) }),
    e && o(),
    e === "failed" && n && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx("span", { className: "text-red-500", children: "Not sent" }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          onClick: n,
          className: "text-blue-500 hover:text-blue-700 underline ml-1",
          children: "Retry"
        }
      )
    ] })
  ] });
}
function Ip({ onSubmit: e, config: t }) {
  const [n, r] = z.useState(""), [o, l] = z.useState(!1), i = async (u) => {
    if (u.preventDefault(), !(!n.trim() || !n.includes("@"))) {
      l(!0);
      try {
        e({ email: n });
      } finally {
        l(!1);
      }
    }
  }, s = n.trim() && n.includes("@");
  return /* @__PURE__ */ y.jsx("div", { className: "py-2", children: /* @__PURE__ */ y.jsx("form", { onSubmit: i, className: "flex items-center gap-3", children: /* @__PURE__ */ y.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
    /* @__PURE__ */ y.jsx(
      "input",
      {
        type: "email",
        value: n,
        onChange: (u) => r(u.target.value),
        placeholder: "Your email address",
        className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50",
        style: { "--tw-ring-color": t.color },
        disabled: o,
        required: !0
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "submit",
        disabled: !s || o,
        style: {
          backgroundColor: s ? t.color : "#d1d5db",
          cursor: s ? "pointer" : "not-allowed"
        },
        className: "px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1",
        children: /* @__PURE__ */ y.jsx(Ly, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function rg({
  messages: e,
  onRetryMessage: t,
  onFormSubmit: n,
  config: r
}) {
  const o = z.useRef(null);
  z.useEffect(() => {
    var i;
    (i = o.current) == null || i.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const l = (i) => {
    var s, u, a;
    if ((s = i.file) != null && s.url) {
      const f = (u = i.file.type) == null ? void 0 : u.startsWith("image/"), p = (a = i.file.type) == null ? void 0 : a.startsWith("audio/");
      return f ? /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx(
          "img",
          {
            src: i.file.url,
            alt: i.file.name,
            className: "max-w-xs rounded-lg mb-2"
          }
        ),
        i.content && /* @__PURE__ */ y.jsx("p", { children: i.content })
      ] }) : p ? /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsxs("audio", { controls: !0, className: "max-w-xs mb-2", children: [
          /* @__PURE__ */ y.jsx("source", { src: i.file.url, type: i.file.type }),
          "Your browser does not support the audio element."
        ] }),
        i.content && /* @__PURE__ */ y.jsx("p", { children: i.content })
      ] }) : /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsxs(
          "a",
          {
            href: i.file.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-500 hover:text-blue-700 underline",
            children: [
              "📎 ",
              i.file.name
            ]
          }
        ),
        i.content && /* @__PURE__ */ y.jsx("p", { className: "mt-2", children: i.content })
      ] });
    } else if (i.type === "form")
      return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx("span", { children: i.content }),
        /* @__PURE__ */ y.jsx(Ip, { onSubmit: n, config: r })
      ] });
    return i.content;
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    e.map((i, s) => /* @__PURE__ */ y.jsx(
      "div",
      {
        className: `flex ${i.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col max-w-[80%] gap-1", children: [
          /* @__PURE__ */ y.jsx(
            "div",
            {
              className: `p-4 rounded-2xl ${i.from === "user" ? "bg-blue-500 text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"}`,
              children: l(i)
            }
          ),
          /* @__PURE__ */ y.jsx("div", { className: "px-2", children: /* @__PURE__ */ y.jsx(
            ng,
            {
              status: i.from === "user" ? i.status : void 0,
              timestamp: i.timestamp,
              onRetry: i.status === "failed" ? () => t(i.id) : void 0
            }
          ) })
        ] })
      },
      i.id || s
    )),
    /* @__PURE__ */ y.jsx("div", { ref: o })
  ] });
}
const og = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "👍",
  "👎",
  "👌",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👋",
  "🤚",
  "🖐️",
  "✋",
  "🖖",
  "👏",
  "🙌",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💪",
  "🦾",
  "🦿",
  "🦵",
  "🦶",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "🤍",
  "🤎",
  "💔",
  "❣️",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️"
];
function lg({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ y.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ y.jsx("div", { className: "grid grid-cols-8 gap-1", children: og.map((n, r) => /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: () => {
        e(n), t();
      },
      className: "p-2 hover:bg-gray-100 rounded text-lg transition-colors",
      children: n
    },
    r
  )) }) });
}
function ig({ onFileSelect: e }) {
  const t = z.useRef(null), n = (r) => {
    var l;
    const o = (l = r.target.files) == null ? void 0 : l[0];
    if (o) {
      if (o.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      if (![
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "audio/webm",
        "audio/mp3",
        "audio/wav",
        "audio/ogg",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain"
      ].includes(o.type)) {
        alert(
          "File type not supported. Please upload images, audio files, PDF, Word documents, or text files."
        );
        return;
      }
      e(o);
    }
    t.current && (t.current.value = "");
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      "input",
      {
        ref: t,
        type: "file",
        onChange: n,
        accept: "image/*,audio/*,.pdf,.doc,.docx,.txt",
        className: "hidden"
      }
    ),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        onClick: () => {
          var r;
          return (r = t.current) == null ? void 0 : r.click();
        },
        className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
        title: "Upload file",
        children: /* @__PURE__ */ y.jsx(Qy, { className: "h-5 w-5" })
      }
    )
  ] });
}
function sg({ onAudioRecorded: e, config: t }) {
  const [n, r] = z.useState(!1), [o, l] = z.useState(!1), [i, s] = z.useState(0), [u, a] = z.useState(null), [f, p] = z.useState(!1), [m, v] = z.useState(null), g = z.useRef(null), w = z.useRef([]), k = z.useRef(null), d = z.useRef(null), c = z.useRef(null);
  z.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((F) => F.stop());
  }, []);
  const h = async () => {
    try {
      const F = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = F, v(!0), !0;
    } catch (F) {
      return console.error("Microphone permission denied:", F), v(!1), !1;
    }
  }, x = async () => {
    if (!(!await h() || !c.current))
      try {
        w.current = [];
        const re = new MediaRecorder(c.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        g.current = re, re.ondataavailable = (tt) => {
          tt.data.size > 0 && w.current.push(tt.data);
        }, re.onstop = () => {
          const tt = new Blob(w.current, {
            type: "audio/webm;codecs=opus"
          });
          a(tt), c.current && (c.current.getTracks().forEach((ii) => ii.stop()), c.current = null);
        }, re.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((tt) => tt + 1);
        }, 1e3);
      } catch (re) {
        console.error("Error starting recording:", re);
      }
  }, _ = () => {
    g.current && g.current.state === "recording" && (g.current.pause(), l(!0), k.current && clearInterval(k.current));
  }, N = () => {
    g.current && g.current.state === "paused" && (g.current.resume(), l(!1), k.current = setInterval(() => {
      s((F) => F + 1);
    }, 1e3));
  }, P = () => {
    g.current && g.current.state !== "inactive" && (g.current.stop(), r(!1), l(!1), k.current && clearInterval(k.current));
  }, S = () => {
    if (u && !f) {
      const F = URL.createObjectURL(u);
      d.current = new Audio(F), d.current.onended = () => {
        p(!1), URL.revokeObjectURL(F);
      }, d.current.play(), p(!0);
    } else d.current && f && (d.current.pause(), p(!1));
  }, T = () => {
    if (u) {
      const F = new File([u], `audio-${Date.now()}.webm`, {
        type: "audio/webm;codecs=opus"
      });
      e(F), a(null), s(0), p(!1);
    }
  }, E = () => {
    n && P(), a(null), s(0), p(!1), c.current && (c.current.getTracks().forEach((F) => F.stop()), c.current = null);
  }, B = (F) => {
    const re = Math.floor(F / 60), tt = F % 60;
    return `${re}:${tt.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      onClick: h,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ y.jsx(Vy, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ y.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ y.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: B(i) })
    ] }),
    u && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          onClick: S,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: f ? "Pause" : "Play",
          children: f ? /* @__PURE__ */ y.jsx(vc, { className: "h-4 w-4" }) : /* @__PURE__ */ y.jsx(wc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ y.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: B(i) })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: o ? N : _,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ y.jsx(wc, { className: "h-4 w-4" }) : /* @__PURE__ */ y.jsx(vc, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: P,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ y.jsx(Zy, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: T,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: E,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ y.jsx(Jy, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      onClick: x,
      className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
      title: "Record audio message",
      children: /* @__PURE__ */ y.jsx(Wy, { className: "h-5 w-5" })
    }
  );
}
function ug({
  onSendMessage: e,
  onFileUpload: t,
  config: n
}) {
  const [r, o] = z.useState(""), [l, i] = z.useState(!1), s = (a) => {
    a.preventDefault(), r.trim() && (e(r), o(""));
  }, u = (a) => {
    o((f) => f + a);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ y.jsx("form", { onSubmit: s, className: "p-4 pb-2 relative", children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "text",
          value: r,
          onChange: (a) => o(a.target.value),
          placeholder: "Send a message...",
          className: "flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
          style: { "--tw-ring-color": n.color }
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !r.trim(),
          children: /* @__PURE__ */ y.jsx(Gy, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ y.jsxs("div", { className: "px-4 pb-1 flex items-center justify-between gap-2 relative", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ y.jsx(ig, { onFileSelect: t, config: n }),
        /* @__PURE__ */ y.jsx(sg, { onAudioRecorded: t, config: n }),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            type: "button",
            onClick: () => i(!l),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ y.jsx(Xy, { className: "h-4 w-4" })
          }
        ),
        l && /* @__PURE__ */ y.jsx(
          lg,
          {
            onEmojiSelect: u,
            onClose: () => i(!1)
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ y.jsxs(
        "a",
        {
          href: "https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=referral&utm_campaign=powered-by",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-gray-500 hover:text-gray-700 transition-colors",
          children: [
            "Powered by ",
            /* @__PURE__ */ y.jsx("span", { className: "font-semibold", children: "Ticketdesk AI" })
          ]
        }
      ) })
    ] })
  ] });
}
function ag({
  sessions: e,
  onLoadSession: t
}) {
  const n = (o) => {
    const l = new Date(o), s = ((/* @__PURE__ */ new Date()).getTime() - l.getTime()) / (1e3 * 60 * 60);
    return s < 24 ? l.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : s < 168 ? l.toLocaleDateString("en-US", { weekday: "short" }) : l.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, r = (o) => {
    switch (o) {
      case "active":
        return "text-green-600 bg-green-100";
      case "resolved":
        return "text-gray-600 bg-gray-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return /* @__PURE__ */ y.jsx("div", { className: "flex-1 overflow-y-auto", children: e.length === 0 ? /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: [
    /* @__PURE__ */ y.jsx(Fp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ y.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ y.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ y.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ y.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ y.jsx(qy, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ y.jsx(Iy, { className: "h-8 w-8 text-indigo-500" }) }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex justify-start items-center gap-3 mb-1", children: [
            /* @__PURE__ */ y.jsx("span", { className: "font-medium truncate", children: o.last_message_from === "user" ? "You" : o.last_message_from }),
            /* @__PURE__ */ y.jsx("span", { className: "text-xs text-gray-500", children: n(o.updated_at) })
          ] }),
          /* @__PURE__ */ y.jsx("p", { className: "text-sm text-gray-600 truncate", children: o.last_message })
        ] }),
        /* @__PURE__ */ y.jsx(
          "span",
          {
            className: `px-2 py-1 rounded-full text-xs font-medium ${r(
              o.state
            )}`,
            children: o.state
          }
        )
      ]
    },
    o.session_id
  )) }) });
}
function cg({ onFormSubmit: e, config: t }) {
  const [n, r] = z.useState(!1);
  return /* @__PURE__ */ y.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ y.jsx(
    Ip,
    {
      config: t,
      onSubmit: (o) => {
        e(o), r(!1);
      }
    }
  ) : /* @__PURE__ */ y.jsxs(
    "button",
    {
      className: "w-full flex items-center gap-2 text-left text-yellow-800 hover:text-yellow-900 transition-colors group",
      onClick: () => r(!0),
      children: [
        /* @__PURE__ */ y.jsx(Mp, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ y.jsx("span", { className: "text-sm flex-1", children: "Click here to set your email to get notifications" }),
        /* @__PURE__ */ y.jsx(Uy, { className: "h-4 w-4 text-yellow-600 group-hover:text-yellow-700" })
      ]
    }
  ) });
}
function dg({
  isOpen: e,
  isMaximized: t,
  isConnected: n,
  config: r,
  messages: o,
  sessions: l,
  selectedSession: i,
  onStartNewChat: s,
  onEndChat: u,
  onLoadSession: a,
  onGetRecentChats: f,
  onUpdateProfile: p,
  onClose: m,
  onToggleMaximize: v,
  onSendMessage: g,
  onFileUpload: w,
  onRetryMessage: k
}) {
  const [d, c] = z.useState(
    "chat"
  );
  if (!e) return null;
  const h = t ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", x = () => {
    c("recent-chats"), f();
  }, _ = () => {
    c("chat");
  }, N = (T) => {
    a(T), c("chat");
  }, P = (T) => {
    p(T), c("chat");
  }, S = i && !i.email && o.filter((T) => T.from === "user").length > 1;
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: `${h} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ y.jsx(
          tg,
          {
            onClose: m,
            onToggleMaximize: v,
            isMaximized: t,
            isConnected: n,
            currentView: d,
            onBackToChat: _,
            onStartNewChat: s,
            onEndChat: u,
            onViewRecentChats: x,
            config: r
          }
        ),
        d === "chat" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            rg,
            {
              messages: o,
              onRetryMessage: k,
              onFormSubmit: P,
              config: r
            }
          ),
          S && /* @__PURE__ */ y.jsx(cg, { config: r, onFormSubmit: P }),
          /* @__PURE__ */ y.jsx(
            ug,
            {
              onSendMessage: g,
              onFileUpload: w,
              config: r
            }
          )
        ] }),
        d === "recent-chats" && /* @__PURE__ */ y.jsx(
          ag,
          {
            sessions: l,
            onLoadSession: N,
            config: r
          }
        )
      ]
    }
  );
}
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Op = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    V(this, "message");
    V(this, "error");
    this.message = t.message, this.error = t;
  }
}, Dp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    V(this, "code");
    V(this, "reason");
    V(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Oi = {
  Event,
  ErrorEvent: Op,
  CloseEvent: Dp
};
function fg(e, t) {
  if (!e)
    throw new Error(t);
}
function pg(e) {
  return new e.constructor(e.type, e);
}
function hg(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Dp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Op(e.error, e) : new Event(e.type, e);
}
var xc, mg = typeof process < "u" && typeof ((xc = process.versions) == null ? void 0 : xc.node) < "u" && typeof document > "u", Ro = mg ? hg : pg, sn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, kc = !1, yg = class cn extends EventTarget {
  constructor(n, r, o = {}) {
    super();
    V(this, "_ws");
    V(this, "_retryCount", -1);
    V(this, "_uptimeTimeout");
    V(this, "_connectTimeout");
    V(this, "_shouldReconnect", !0);
    V(this, "_connectLock", !1);
    V(this, "_binaryType", "blob");
    V(this, "_closeCalled", !1);
    V(this, "_messageQueue", []);
    V(this, "_debugLogger", console.log.bind(console));
    V(this, "_url");
    V(this, "_protocols");
    V(this, "_options");
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */
    V(this, "onclose", null);
    /**
     * An event listener to be called when an error occurs
     */
    V(this, "onerror", null);
    /**
     * An event listener to be called when a message is received from the server
     */
    V(this, "onmessage", null);
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    V(this, "onopen", null);
    V(this, "_handleOpen", (n) => {
      this._debug("open event");
      const { minUptime: r = sn.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), fg(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
        var l;
        return (l = this._ws) == null ? void 0 : l.send(o);
      }), this._messageQueue = [], this.onopen && this.onopen(n), this.dispatchEvent(Ro(n));
    });
    V(this, "_handleMessage", (n) => {
      this._debug("message event"), this.onmessage && this.onmessage(n), this.dispatchEvent(Ro(n));
    });
    V(this, "_handleError", (n) => {
      this._debug("error event", n.message), this._disconnect(void 0, n.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(n), this._debug("exec error listeners"), this.dispatchEvent(Ro(n)), this._connect();
    });
    V(this, "_handleClose", (n) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(n), this.dispatchEvent(Ro(n));
    });
    this._url = n, this._protocols = r, this._options = o, this._options.startClosed && (this._shouldReconnect = !1), this._options.debugLogger && (this._debugLogger = this._options.debugLogger), this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return cn.CONNECTING;
  }
  get OPEN() {
    return cn.OPEN;
  }
  get CLOSING() {
    return cn.CLOSING;
  }
  get CLOSED() {
    return cn.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(n) {
    this._binaryType = n, this._ws && (this._ws.binaryType = n);
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    return this._messageQueue.reduce((r, o) => (typeof o == "string" ? r += o.length : o instanceof Blob ? r += o.size : r += o.byteLength, r), 0) + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    return this._ws ? this._ws.readyState : this._options.startClosed ? cn.CLOSED : cn.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Whether the websocket object is now in reconnectable state
   */
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  close(n = 1e3, r) {
    if (this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), !this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(n, r);
  }
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(n, r) {
    this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(n, r), this._connect());
  }
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(n) {
    if (this._ws && this._ws.readyState === this.OPEN)
      this._debug("send", n), this._ws.send(n);
    else {
      const { maxEnqueuedMessages: r = sn.maxEnqueuedMessages } = this._options;
      this._messageQueue.length < r && (this._debug("enqueue", n), this._messageQueue.push(n));
    }
  }
  _debug(...n) {
    this._options.debug && this._debugLogger("RWS>", ...n);
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor: n = sn.reconnectionDelayGrowFactor,
      minReconnectionDelay: r = sn.minReconnectionDelay,
      maxReconnectionDelay: o = sn.maxReconnectionDelay
    } = this._options;
    let l = 0;
    return this._retryCount > 0 && (l = r * n ** (this._retryCount - 1), l > o && (l = o)), this._debug("next delay", l), l;
  }
  _wait() {
    return new Promise((n) => {
      setTimeout(n, this._getNextDelay());
    });
  }
  _getNextProtocols(n) {
    if (!n) return Promise.resolve(null);
    if (typeof n == "string" || Array.isArray(n))
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (!r) return Promise.resolve(null);
      if (typeof r == "string" || Array.isArray(r))
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(n) {
    if (typeof n == "string")
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (typeof r == "string")
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect)
      return;
    this._connectLock = !0;
    const {
      maxRetries: n = sn.maxRetries,
      connectionTimeout: r = sn.connectionTimeout
    } = this._options;
    if (this._retryCount >= n) {
      this._debug("max retries reached", this._retryCount, ">=", n);
      return;
    }
    this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), this._wait().then(
      () => Promise.all([
        this._getNextUrl(this._url),
        this._getNextProtocols(this._protocols || null)
      ])
    ).then(([o, l]) => {
      if (this._closeCalled) {
        this._connectLock = !1;
        return;
      }
      !this._options.WebSocket && typeof WebSocket > "u" && !kc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), kc = !0);
      const i = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: l }), this._ws = l ? new i(o, l) : new i(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Oi.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Oi.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Oi.CloseEvent(n, r, this));
      } catch {
      }
    }
  }
  _acceptOpen() {
    this._debug("accept open"), this._retryCount = 0;
  }
  _removeListeners() {
    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
  }
  _addListeners() {
    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
  }
};
var gg = (e) => e[1] !== null && e[1] !== void 0;
function vg() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Up(e, t, n = {}) {
  const {
    host: r,
    path: o,
    protocol: l,
    room: i,
    party: s,
    basePath: u,
    prefix: a,
    query: f
  } = e;
  let p = r.replace(/^(http|https|ws|wss):\/\//, "");
  if (p.endsWith("/") && (p = p.slice(0, -1)), o != null && o.startsWith("/"))
    throw new Error("path must not start with a slash");
  const m = s ?? "main", v = o ? `/${o}` : "", g = l || (p.startsWith("localhost:") || p.startsWith("127.0.0.1:") || p.startsWith("192.168.") || p.startsWith("10.") || p.startsWith("172.") && p.split(".")[1] >= "16" && p.split(".")[1] <= "31" || p.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), w = `${g}://${p}/${u || `${a || "parties"}/${m}/${i}`}${v}`, k = (c = {}) => `${w}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter(gg)
  ])}`, d = typeof f == "function" ? async () => k(await f()) : k(f);
  return {
    host: p,
    path: v,
    room: i,
    name: m,
    protocol: g,
    partyUrl: w,
    urlProvider: d
  };
}
var wg = class extends yg {
  constructor(t) {
    var n, r;
    const o = Sc(t);
    super(o.urlProvider, o.protocols, o.socketOptions);
    V(this, "_pk");
    V(this, "_pkurl");
    V(this, "name");
    V(this, "room");
    V(this, "host");
    V(this, "path");
    this.partySocketOptions = t, this.setWSProperties(o), t.disableNameValidation || ((n = t.party) != null && n.includes("/") && console.warn(
      `PartySocket: party name "${t.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ), (r = t.room) != null && r.includes("/") && console.warn(
      `PartySocket: room name "${t.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ));
  }
  updateProperties(t) {
    const n = Sc({
      ...this.partySocketOptions,
      ...t,
      host: t.host ?? this.host,
      room: t.room ?? this.room,
      path: t.path ?? this.path
    });
    this._url = n.urlProvider, this._protocols = n.protocols, this._options = n.socketOptions, this.setWSProperties(n);
  }
  setWSProperties(t) {
    const { _pk: n, _pkurl: r, name: o, room: l, host: i, path: s } = t;
    this._pk = n, this._pkurl = r, this.name = o, this.room = l, this.host = i, this.path = s;
  }
  reconnect(t, n) {
    if (!this.room || !this.host)
      throw new Error(
        "The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor."
      );
    super.reconnect(t, n);
  }
  get id() {
    return this._pk;
  }
  /**
   * Exposes the static PartyKit room URL without applying query parameters.
   * To access the currently connected WebSocket url, use PartySocket#url.
   */
  get roomUrl() {
    return this._pkurl;
  }
  // a `fetch` method that uses (almost) the same options as `PartySocket`
  static async fetch(t, n) {
    const r = Up(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function Sc(e) {
  const {
    id: t,
    host: n,
    path: r,
    party: o,
    room: l,
    protocol: i,
    query: s,
    protocols: u,
    ...a
  } = e, f = t || vg(), p = Up(e, "ws", { _pk: f });
  return {
    _pk: f,
    _pkurl: p.partyUrl,
    name: p.name,
    room: p.room,
    host: p.host,
    path: p.path,
    protocols: u,
    socketOptions: a,
    urlProvider: p.urlProvider
  };
}
var xg = (e, t) => {
  const n = z.useRef(t);
  n.current = t, z.useEffect(() => {
    const r = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onOpen) == null ? void 0 : a.call(u, s);
    }, o = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onMessage) == null ? void 0 : a.call(u, s);
    }, l = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onClose) == null ? void 0 : a.call(u, s);
    }, i = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onError) == null ? void 0 : a.call(u, s);
    };
    return e.addEventListener("open", r), e.addEventListener("close", l), e.addEventListener("error", i), e.addEventListener("message", o), () => {
      e.removeEventListener("open", r), e.removeEventListener("close", l), e.removeEventListener("error", i), e.removeEventListener("message", o);
    };
  }, [e]);
}, kg = (e) => [
  e.startClosed,
  e.minUptime,
  e.maxRetries,
  e.connectionTimeout,
  e.maxEnqueuedMessages,
  e.maxReconnectionDelay,
  e.minReconnectionDelay,
  e.reconnectionDelayGrowFactor,
  e.debug
];
function Sg({
  options: e,
  createSocket: t,
  createSocketMemoKey: n
}) {
  const r = n(e), o = z.useMemo(() => e, [r]), [l, i] = z.useState(
    () => (
      // only connect on first mount
      t({ ...o, startClosed: !0 })
    )
  ), s = z.useRef(null), u = z.useRef(t);
  return u.current = t, z.useEffect(() => {
    if (s.current === l) {
      const a = u.current({
        ...o,
        // when reconnecting because of options change, we always reconnect
        // (startClosed only applies to initial mount)
        startClosed: !1
      });
      i(a);
    } else
      return !s.current && o.startClosed !== !0 && l.reconnect(), s.current = l, () => {
        l.close();
      };
  }, [l, o]), l;
}
function Cg(e) {
  const { host: t, ...n } = e, r = Sg({
    options: {
      host: t || (typeof window < "u" ? window.location.host : "dummy-domain.com"),
      ...n
    },
    createSocket: (o) => new wg(o),
    createSocketMemoKey: (o) => JSON.stringify([
      // NOTE: if query is defined as a function, the socket
      // won't reconnect when you change the function identity
      o.query,
      o.id,
      o.host,
      o.room,
      o.party,
      o.path,
      o.protocol,
      o.protocols,
      o.basePath,
      o.prefix,
      ...kg(o)
    ])
  });
  return xg(r, e), r;
}
const Cc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, jo = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, mr = () => "m_" + crypto.randomUUID();
function Eg({ chatbotId: e }) {
  const [t, n] = z.useState({
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [r, o] = z.useState(!0), [l, i] = z.useState([]), [s, u] = z.useState(null), [a, f] = z.useState(null), [p, m] = z.useState([]), [v, g] = z.useState(
    null
  ), w = Cg({
    host: "https://api.ticketdesk.ai",
    party: "chatroom",
    room: e,
    onOpen() {
      const S = jo(`ti_${e}_session_id`), E = {
        type: "session:join",
        client_id: jo(`ti_${e}_client_id`),
        session_id: S
      };
      w.send(JSON.stringify(E));
    },
    onMessage(S) {
      const { type: T, data: E } = JSON.parse(S.data);
      T === "session:joined" ? (E.session_id && (u(E.session_id), Cc(`ti_${e}_session_id`, E.session_id)), E.client_id && (f(E.client_id), Cc(`ti_${e}_client_id`, E.client_id)), i(E.messages || []), g(E.session), n({
        color: "#3b82f6",
        shape: "round",
        welcome_message: "Hi! How can I help you today?",
        ...E.config
      }), o(!1)) : T === "session:list" ? m(E.sessions) : T === "message:recieved" ? i((B) => [...B, E.message]) : T === "message:read" ? i(
        (B) => B.map(
          (F) => F.id === E.message_id ? { ...F, status: E.status } : F
        )
      ) : console.log("Unhandled message type:", T, E);
    },
    onClose() {
    },
    onError(S) {
      console.error(S);
    }
  });
  z.useEffect(() => {
    const S = jo(`ti_${e}_session_id`), T = jo(`ti_${e}_client_id`);
    if (S && u(S), T && f(T), t != null && t.welcome_message) {
      const E = {
        id: mr(),
        from: "agent",
        content: t == null ? void 0 : t.welcome_message,
        type: "text",
        timestamp: Date.now()
      };
      i([E]);
    }
  }, [e, t == null ? void 0 : t.welcome_message]);
  const k = z.useCallback(
    (S) => {
      if (!s || !a) {
        console.log("No session details yet, cannot send message");
        return;
      }
      const T = {
        id: mr(),
        from: "user",
        content: S,
        type: "text",
        timestamp: Date.now(),
        status: w ? "sent" : "failed"
      };
      if (i((E) => {
        const B = [...E, T];
        return v && !v.email && !E.find((F) => F.type === "form") && setTimeout(() => {
          const F = {
            id: mr(),
            from: "agent",
            content: "What is your email address?",
            type: "form",
            fields: ["email"],
            timestamp: Date.now()
          };
          i((re) => [...re, F]);
        }, 1e3), B;
      }), w) {
        const E = {
          type: "message:new",
          session_id: s,
          client_id: a,
          message: {
            id: T.id,
            from: "user",
            content: S,
            type: "text",
            timestamp: Date.now()
          }
        };
        w.send(JSON.stringify(E));
      }
    },
    [s, a, w, v]
  ), d = z.useCallback(
    async (S) => {
      if (!s || !a) {
        console.log("No session details yet, cannot send file");
        return;
      }
      const T = {
        id: mr(),
        from: "user",
        content: `Uploading ${S.name}...`,
        type: "file",
        timestamp: Date.now(),
        status: w ? "sent" : "failed",
        file: {
          name: S.name,
          type: S.type
        }
      };
      i((E) => [...E, T]);
      try {
        const E = new FormData();
        E.append("file", S), E.append("chatbotId", e), E.append("session_id", s), E.append("client_id", a), await new Promise((F) => setTimeout(F, 1e3));
        const B = URL.createObjectURL(S);
        if (i(
          (F) => F.map(
            (re) => re.id === T.id ? {
              ...re,
              content: "",
              status: "sent",
              file: {
                ...re.file,
                url: B
              }
            } : re
          )
        ), w) {
          const F = {
            type: "message:file",
            session_id: s,
            client_id: a,
            message: {
              id: T.id,
              from: "user",
              type: "file",
              timestamp: Date.now(),
              file: {
                name: S.name,
                type: S.type,
                url: B
              }
            }
          };
          w.send(JSON.stringify(F));
        }
      } catch (E) {
        console.log("Error", E), i(
          (B) => B.map(
            (F) => F.id === T.id ? {
              ...F,
              status: "failed",
              content: `Failed to upload ${S.name}`
            } : F
          )
        );
      }
    },
    [w, s, a, e]
  ), c = z.useCallback(() => {
    if (w) {
      i([]), u(null);
      const S = {
        type: "session:new",
        client_id: a
      };
      w.send(JSON.stringify(S)), t != null && t.welcome_message && setTimeout(() => {
        const T = {
          id: mr(),
          from: "agent",
          content: t.welcome_message,
          type: "text",
          timestamp: Date.now()
        };
        i([T]);
      }, 100);
    }
  }, [w, a, t == null ? void 0 : t.welcome_message]), h = z.useCallback(() => {
    if (w && s) {
      const S = {
        type: "session:end",
        session_id: s,
        client_id: a
      };
      w.send(JSON.stringify(S));
    }
  }, [w, s, a]), x = z.useCallback(
    (S) => {
      if (w) {
        const T = {
          type: "session:join",
          session_id: S,
          client_id: a
        };
        w.send(JSON.stringify(T)), u(S);
      }
    },
    [w, a]
  ), _ = z.useCallback(() => {
    if (w && a) {
      const S = {
        type: "session:list",
        client_id: a
      };
      w.send(JSON.stringify(S));
    }
  }, [w, a]), N = z.useCallback(
    (S) => {
      if (w && a) {
        const T = {
          type: "profile:update",
          client_id: a,
          profile: S
        };
        w.send(JSON.stringify(T));
      }
      g(
        (T) => T && {
          ...T,
          ...S
        }
      );
    },
    [w, a]
  ), P = z.useCallback(
    (S) => {
      if (!s || !a) {
        console.log("No session details yet, cannot retry message");
        return;
      }
      const T = l.find((E) => E.id === S);
      if (T && T.from === "user")
        if (i(
          (E) => E.map(
            (B) => B.id === S ? { ...B, status: "sent" } : B
          )
        ), w)
          if (T.file) {
            const E = {
              type: "message:file",
              session_id: s,
              client_id: a,
              message: {
                id: T.id,
                from: "user",
                type: "file",
                timestamp: Date.now(),
                file: T.file
              }
            };
            w.send(JSON.stringify(E));
          } else {
            const E = {
              type: "message:new",
              session_id: s,
              client_id: a,
              message: {
                id: T.id,
                from: "user",
                content: T.content,
                type: "text",
                timestamp: Date.now()
              }
            };
            w.send(JSON.stringify(E));
          }
        else
          i(
            (E) => E.map(
              (B) => B.id === S ? { ...B, status: "failed" } : B
            )
          );
    },
    [l, s, a, w]
  );
  return {
    messages: l,
    sendMessage: k,
    sendFile: d,
    retryMessage: P,
    startNewChat: c,
    endCurrentChat: h,
    loadSession: x,
    getRecentChats: _,
    updateProfile: N,
    sessions: p,
    selectedSession: v,
    isConnected: !!w,
    isLoading: r,
    config: t,
    sessionId: s,
    clientId: a
  };
}
var or = {};
var Ap = z;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Pe = Object.prototype.hasOwnProperty, _g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ec = {}, _c = {};
function Bp(e) {
  return Pe.call(_c, e) ? !0 : Pe.call(Ec, e) ? !1 : _g.test(e) ? _c[e] = !0 : (Ec[e] = !0, !1);
}
function Ne(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bu = /[\-:]([a-z])/g;
function Qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bu,
    Qu
  );
  ye[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bu, Qu);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bu, Qu);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var Yo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, $g = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yo).forEach(function(e) {
  $g.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Yo[t] = Yo[e];
  });
});
var Ng = /["'&<>]/;
function Ce(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = Ng.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var Tg = /([A-Z])/g, Pg = /^ms-/, As = Array.isArray;
function vt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Rg(e, t, n) {
  switch (t) {
    case "select":
      return vt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return vt(2, null);
    case "math":
      return vt(3, null);
    case "foreignObject":
      return vt(1, null);
    case "table":
      return vt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return vt(5, null);
    case "colgroup":
      return vt(7, null);
    case "tr":
      return vt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? vt(1, null) : e;
}
var $c = /* @__PURE__ */ new Map();
function Vp(e, t, n) {
  if (typeof n != "object") throw Error(L(62));
  t = !0;
  for (var r in n) if (Pe.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var l = Ce(r);
        o = Ce(("" + o).trim());
      } else {
        l = r;
        var i = $c.get(l);
        i !== void 0 || (i = Ce(l.replace(Tg, "-$1").toLowerCase().replace(Pg, "-ms-")), $c.set(l, i)), l = i, o = typeof o == "number" ? o === 0 || Pe.call(Yo, r) ? "" + o : o + "px" : Ce(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', l, ":", o)) : e.push(";", l, ":", o);
    }
  }
  t || e.push('"');
}
function Oe(e, t, n, r) {
  switch (n) {
    case "style":
      Vp(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ye.hasOwnProperty(n) ? ye[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', Ce(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', Ce(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', Ce(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', Ce(r), '"');
      }
    } else if (Bp(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", n, '="', Ce(r), '"');
    }
  }
}
function Go(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(L(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function jg(e) {
  var t = "";
  return Ap.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Di(e, t, n, r) {
  e.push(dt(n));
  var o = n = null, l;
  for (l in t) if (Pe.call(t, l)) {
    var i = t[l];
    if (i != null) switch (l) {
      case "children":
        n = i;
        break;
      case "dangerouslySetInnerHTML":
        o = i;
        break;
      default:
        Oe(e, r, l, i);
    }
  }
  return e.push(">"), Go(e, o, n), typeof n == "string" ? (e.push(Ce(n)), null) : n;
}
var zg = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Nc = /* @__PURE__ */ new Map();
function dt(e) {
  var t = Nc.get(e);
  if (t === void 0) {
    if (!zg.test(e)) throw Error(L(65, e));
    t = "<" + e, Nc.set(e, t);
  }
  return t;
}
function Mg(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(dt("select"));
      var l = null, i = null;
      for (f in n) if (Pe.call(n, f)) {
        var s = n[f];
        if (s != null) switch (f) {
          case "children":
            l = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            Oe(e, r, f, s);
        }
      }
      return e.push(">"), Go(e, i, l), l;
    case "option":
      i = o.selectedValue, e.push(dt("option"));
      var u = s = null, a = null, f = null;
      for (l in n) if (Pe.call(n, l)) {
        var p = n[l];
        if (p != null) switch (l) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            f = p;
            break;
          case "value":
            u = p;
          default:
            Oe(e, r, l, p);
        }
      }
      if (i != null) if (n = u !== null ? "" + u : jg(s), As(i)) {
        for (r = 0; r < i.length; r++)
          if ("" + i[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + i === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), Go(e, f, s), s;
    case "textarea":
      e.push(dt("textarea")), f = i = l = null;
      for (s in n) if (Pe.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          f = u;
          break;
        case "value":
          l = u;
          break;
        case "defaultValue":
          i = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(L(91));
        default:
          Oe(
            e,
            r,
            s,
            u
          );
      }
      if (l === null && i !== null && (l = i), e.push(">"), f != null) {
        if (l != null) throw Error(L(92));
        if (As(f) && 1 < f.length) throw Error(L(93));
        l = "" + f;
      }
      return typeof l == "string" && l[0] === `
` && e.push(`
`), l !== null && e.push(Ce("" + l)), null;
    case "input":
      e.push(dt("input")), u = f = s = l = null;
      for (i in n) if (Pe.call(n, i) && (a = n[i], a != null)) switch (i) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          f = a;
          break;
        case "value":
          l = a;
          break;
        default:
          Oe(e, r, i, a);
      }
      return f !== null ? Oe(e, r, "checked", f) : u !== null && Oe(e, r, "checked", u), l !== null ? Oe(e, r, "value", l) : s !== null && Oe(e, r, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(dt("menuitem"));
      for (var m in n) if (Pe.call(n, m) && (l = n[m], l != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(400));
        default:
          Oe(e, r, m, l);
      }
      return e.push(">"), null;
    case "title":
      e.push(dt("title")), l = null;
      for (p in n) if (Pe.call(n, p) && (i = n[p], i != null)) switch (p) {
        case "children":
          l = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(L(434));
        default:
          Oe(e, r, p, i);
      }
      return e.push(">"), l;
    case "listing":
    case "pre":
      e.push(dt(t)), i = l = null;
      for (u in n) if (Pe.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        default:
          Oe(e, r, u, s);
      }
      if (e.push(">"), i != null) {
        if (l != null) throw Error(L(60));
        if (typeof i != "object" || !("__html" in i)) throw Error(L(61));
        n = i.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof l == "string" && l[0] === `
` && e.push(`
`), l;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(dt(t));
      for (var v in n) if (Pe.call(n, v) && (l = n[v], l != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(399, t));
        default:
          Oe(e, r, v, l);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Di(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Di(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Di(e, n, t, r);
      e.push(dt(t)), i = l = null;
      for (a in n) if (Pe.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        case "style":
          Vp(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Bp(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Ce(s), '"');
      }
      return e.push(">"), Go(e, i, l), l;
  }
}
function Tc(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(L(395));
  return e.push(n), e.push('"></template>');
}
function Fg(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    default:
      throw Error(L(397));
  }
}
function Lg(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(L(397));
  }
}
var Ig = /[<\u2028\u2029]/g;
function Ui(e) {
  return JSON.stringify(e).replace(Ig, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function Og(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Pc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Ce(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Ce(t)), e = !0), e);
}
var Fr = Object.assign, Dg = Symbol.for("react.element"), Wp = Symbol.for("react.portal"), Hp = Symbol.for("react.fragment"), bp = Symbol.for("react.strict_mode"), Qp = Symbol.for("react.profiler"), Kp = Symbol.for("react.provider"), Yp = Symbol.for("react.context"), Gp = Symbol.for("react.forward_ref"), Xp = Symbol.for("react.suspense"), Zp = Symbol.for("react.suspense_list"), Jp = Symbol.for("react.memo"), Ku = Symbol.for("react.lazy"), Ug = Symbol.for("react.scope"), Ag = Symbol.for("react.debug_trace_mode"), Bg = Symbol.for("react.legacy_hidden"), Vg = Symbol.for("react.default_value"), Rc = Symbol.iterator;
function Bs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hp:
      return "Fragment";
    case Wp:
      return "Portal";
    case Qp:
      return "Profiler";
    case bp:
      return "StrictMode";
    case Xp:
      return "Suspense";
    case Zp:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Yp:
      return (e.displayName || "Context") + ".Consumer";
    case Kp:
      return (e._context.displayName || "Context") + ".Provider";
    case Gp:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Jp:
      return t = e.displayName || null, t !== null ? t : Bs(e.type) || "Memo";
    case Ku:
      t = e._payload, e = e._init;
      try {
        return Bs(e(t));
      } catch {
      }
  }
  return null;
}
var qp = {};
function jc(e, t) {
  if (e = e.contextTypes, !e) return qp;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var gn = null;
function ei(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401));
    } else {
      if (n === null) throw Error(L(401));
      ei(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function eh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && eh(e);
}
function th(e) {
  var t = e.parent;
  t !== null && th(t), e.context._currentValue2 = e.value;
}
function nh(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? ei(e, t) : nh(e, t);
}
function rh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? ei(e, n) : rh(e, n), t.context._currentValue2 = t.value;
}
function Tl(e) {
  var t = gn;
  t !== e && (t === null ? th(e) : e === null ? eh(t) : t.depth === e.depth ? ei(t, e) : t.depth > e.depth ? nh(t, e) : rh(t, e), gn = e);
}
var zc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Mc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = zc, e.props = n, e.state = o;
  var l = { queue: [], replace: !1 };
  e._reactInternals = l;
  var i = t.contextType;
  if (e.context = typeof i == "object" && i !== null ? i._currentValue2 : r, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(n, o), o = i == null ? o : Fr({}, o, i), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && zc.enqueueReplaceState(e, e.state, null), l.queue !== null && 0 < l.queue.length) if (t = l.queue, i = l.replace, l.queue = null, l.replace = !1, i && t.length === 1) e.state = t[0];
  else {
    for (l = i ? t[0] : e.state, o = !0, i = i ? 1 : 0; i < t.length; i++) {
      var s = t[i];
      s = typeof s == "function" ? s.call(e, l, n, r) : s, s != null && (o ? (o = !1, l = Fr({}, l, s)) : Fr(l, s));
    }
    e.state = l;
  }
  else l.queue = null;
}
var Wg = { id: 1, overflow: "" };
function Vs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - Xo(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Xo(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    return l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, { id: 1 << 32 - Xo(t) + o | n << o | r, overflow: l + e };
  }
  return { id: 1 << l | n << o | r, overflow: e };
}
var Xo = Math.clz32 ? Math.clz32 : Qg, Hg = Math.log, bg = Math.LN2;
function Qg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Hg(e) / bg | 0) | 0;
}
function Kg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Yg = typeof Object.is == "function" ? Object.is : Kg, Pt = null, Yu = null, Zo = null, b = null, kr = !1, Pl = !1, qr = 0, Vt = null, ti = 0;
function dn() {
  if (Pt === null) throw Error(L(321));
  return Pt;
}
function Fc() {
  if (0 < ti) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function Gu() {
  return b === null ? Zo === null ? (kr = !1, Zo = b = Fc()) : (kr = !0, b = Zo) : b.next === null ? (kr = !1, b = b.next = Fc()) : (kr = !0, b = b.next), b;
}
function Xu() {
  Yu = Pt = null, Pl = !1, Zo = null, ti = 0, b = Vt = null;
}
function oh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lc(e, t, n) {
  if (Pt = dn(), b = Gu(), kr) {
    var r = b.queue;
    if (t = r.dispatch, Vt !== null && (n = Vt.get(r), n !== void 0)) {
      Vt.delete(r), r = b.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return b.memoizedState = r, [r, t];
    }
    return [b.memoizedState, t];
  }
  return e = e === oh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, b.memoizedState = e, e = b.queue = { last: null, dispatch: null }, e = e.dispatch = Gg.bind(null, Pt, e), [b.memoizedState, e];
}
function Ic(e, t) {
  if (Pt = dn(), b = Gu(), t = t === void 0 ? null : t, b !== null) {
    var n = b.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Yg(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), b.memoizedState = [e, t], e;
}
function Gg(e, t, n) {
  if (25 <= ti) throw Error(L(301));
  if (e === Pt) if (Pl = !0, e = { action: n, next: null }, Vt === null && (Vt = /* @__PURE__ */ new Map()), n = Vt.get(t), n === void 0) Vt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Xg() {
  throw Error(L(394));
}
function zo() {
}
var Oc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return dn(), e._currentValue2;
}, useMemo: Ic, useReducer: Lc, useRef: function(e) {
  Pt = dn(), b = Gu();
  var t = b.memoizedState;
  return t === null ? (e = { current: e }, b.memoizedState = e) : t;
}, useState: function(e) {
  return Lc(oh, e);
}, useInsertionEffect: zo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Ic(function() {
    return e;
  }, t);
}, useImperativeHandle: zo, useEffect: zo, useDebugValue: zo, useDeferredValue: function(e) {
  return dn(), e;
}, useTransition: function() {
  return dn(), [
    !1,
    Xg
  ];
}, useId: function() {
  var e = Yu.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - Xo(e) - 1)).toString(32) + t;
  var n = Jo;
  if (n === null) throw Error(L(404));
  return t = qr++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return dn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(L(407));
  return n();
} }, Jo = null, Ai = Ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Zg(e) {
  return console.error(e), null;
}
function Sr() {
}
function Jg(e, t, n, r, o, l, i, s, u) {
  var a = [], f = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: f, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Zg : o, onAllReady: Sr, onShellReady: i === void 0 ? Sr : i, onShellError: Sr, onFatalError: Sr }, n = Rl(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = Zu(t, e, null, n, f, qp, null, Wg), a.push(e), t;
}
function Zu(e, t, n, r, o, l, i, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && sh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: l, context: i, treeContext: s };
  return o.add(u), u;
}
function Rl(e, t, n, r, o, l) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: l };
}
function eo(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function jl(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Dc(e, t, n, r, o) {
  for (Pt = {}, Yu = t, qr = 0, e = n(r, o); Pl; ) Pl = !1, qr = 0, ti += 1, b = null, e = n(r, o);
  return Xu(), e;
}
function Uc(e, t, n, r) {
  var o = n.render(), l = r.childContextTypes;
  if (l != null) {
    var i = t.legacyContext;
    if (typeof n.getChildContext != "function") r = i;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in l)) throw Error(L(108, Bs(r) || "Unknown", s));
      r = Fr({}, i, n);
    }
    t.legacyContext = r, Ae(e, t, o), t.legacyContext = i;
  } else Ae(e, t, o);
}
function Ac(e, t) {
  if (e && e.defaultProps) {
    t = Fr({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ws(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = jc(n, t.legacyContext);
    var l = n.contextType;
    l = new n(r, typeof l == "object" && l !== null ? l._currentValue2 : o), Mc(l, n, r, o), Uc(e, t, l, n);
  } else {
    l = jc(n, t.legacyContext), o = Dc(e, t, n, r, l);
    var i = qr !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Mc(o, n, r, l), Uc(e, t, o, n);
    else if (i) {
      r = t.treeContext, t.treeContext = Vs(r, 1, 0);
      try {
        Ae(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ae(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, l = Mg(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, i = o.formatContext, o.formatContext = Rg(i, n, r), Hs(e, t, l), o.formatContext = i, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push("</", n, ">");
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case Bg:
      case Ag:
      case bp:
      case Qp:
      case Hp:
        Ae(e, t, r.children);
        return;
      case Zp:
        Ae(e, t, r.children);
        return;
      case Ug:
        throw Error(L(343));
      case Xp:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, l = r.fallback, r = r.children, i = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: i, errorDigest: null }, u = Rl(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Rl(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Hs(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, zl(s, a), s.pendingTasks === 0) break e;
          } catch (f) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = eo(e, f);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = Zu(e, l, n, u, i, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case Gp:
        if (r = Dc(e, t, n.render, r, o), qr !== 0) {
          n = t.treeContext, t.treeContext = Vs(n, 1, 0);
          try {
            Ae(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ae(e, t, r);
        return;
      case Jp:
        n = n.type, r = Ac(n, r), Ws(e, t, n, r, o);
        return;
      case Kp:
        if (o = r.children, n = n._context, r = r.value, l = n._currentValue2, n._currentValue2 = r, i = gn, gn = r = { parent: i, depth: i === null ? 0 : i.depth + 1, context: n, parentValue: l, value: r }, t.context = r, Ae(e, t, o), e = gn, e === null) throw Error(L(403));
        r = e.parentValue, e.context._currentValue2 = r === Vg ? e.context._defaultValue : r, e = gn = e.parent, t.context = e;
        return;
      case Yp:
        r = r.children, r = r(n._currentValue2), Ae(e, t, r);
        return;
      case Ku:
        o = n._init, n = o(n._payload), r = Ac(n, r), Ws(
          e,
          t,
          n,
          r,
          void 0
        );
        return;
    }
    throw Error(L(130, n == null ? n : typeof n, ""));
  }
}
function Ae(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Dg:
        Ws(e, t, n.type, n.props, n.ref);
        return;
      case Wp:
        throw Error(L(257));
      case Ku:
        var r = n._init;
        n = r(n._payload), Ae(e, t, n);
        return;
    }
    if (As(n)) {
      Bc(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Rc && n[Rc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Bc(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Pc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Pc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Bc(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var l = t.treeContext;
    t.treeContext = Vs(l, r, o);
    try {
      Hs(e, t, n[o]);
    } finally {
      t.treeContext = l;
    }
  }
}
function Hs(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, l = t.context;
  try {
    return Ae(e, t, n);
  } catch (u) {
    if (Xu(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var i = t.blockedSegment, s = Rl(e, i.chunks.length, null, i.formatContext, i.lastPushedText, !0);
      i.children.push(s), i.lastPushedText = !1, e = Zu(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Tl(l);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Tl(l), u;
  }
}
function qg(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, ih(this, t, e);
}
function lh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return lh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function zl(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && zl(e, n);
  } else e.completedSegments.push(t);
}
function ih(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Sr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && zl(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(qg, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (zl(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function sh(e) {
  if (e.status !== 2) {
    var t = gn, n = Ai.current;
    Ai.current = Oc;
    var r = Jo;
    Jo = e.responseState;
    try {
      var o = e.pingedTasks, l;
      for (l = 0; l < o.length; l++) {
        var i = o[l], s = e, u = i.blockedSegment;
        if (u.status === 0) {
          Tl(i.context);
          try {
            Ae(s, i, i.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), i.abortSet.delete(i), u.status = 1, ih(s, i.blockedBoundary, u);
          } catch (g) {
            if (Xu(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = i.ping;
              g.then(a, a);
            } else {
              i.abortSet.delete(i), u.status = 4;
              var f = i.blockedBoundary, p = g, m = eo(s, p);
              if (f === null ? jl(s, p) : (f.pendingTasks--, f.forceClientRender || (f.forceClientRender = !0, f.errorDigest = m, f.parentFlushed && s.clientRenderedBoundaries.push(f))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, l), e.destination !== null && Ju(e, e.destination);
    } catch (g) {
      eo(e, g), jl(e, g);
    } finally {
      Jo = r, Ai.current = n, n === Oc && Tl(t);
    }
  }
}
function Mo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var l = 0;
      n = n.children;
      for (var i = 0; i < n.length; i++) {
        for (o = n[i]; l < o.index; l++) t.push(r[l]);
        o = ni(e, t, o);
      }
      for (; l < r.length - 1; l++) t.push(r[l]);
      return l < r.length && (o = t.push(r[l])), o;
    default:
      throw Error(L(390));
  }
}
function ni(e, t, n) {
  var r = n.boundary;
  if (r === null) return Mo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = Ce(r), t.push(r), t.push('"')), t.push("></template>")), Mo(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, l = o.nextSuspenseID++;
    return o = o.boundaryPrefix + l.toString(16), r = r.id = o, Tc(t, e.responseState, r), Mo(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Tc(t, e.responseState, r.id), Mo(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(L(391));
  return ni(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function Vc(e, t, n) {
  return Fg(t, e.responseState, n.formatContext, n.id), ni(e, t, n), Lg(t, n.formatContext);
}
function Wc(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) uh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(L(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function uh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return Vc(e, t, r);
  }
  return Vc(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function Ju(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      ni(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var o = e.clientRenderedBoundaries, l;
    for (l = 0; l < o.length; l++) {
      var i = o[l];
      r = t;
      var s = e.responseState, u = i.id, a = i.errorDigest, f = i.errorMessage, p = i.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(L(395));
      if (r.push(u), r.push('"'), a || f || p) {
        r.push(",");
        var m = Ui(a || "");
        r.push(m);
      }
      if (f || p) {
        r.push(",");
        var v = Ui(f || "");
        r.push(v);
      }
      if (p) {
        r.push(",");
        var g = Ui(p);
        r.push(g);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, l++, o.splice(0, l);
        return;
      }
    }
    o.splice(0, l);
    var w = e.completedBoundaries;
    for (l = 0; l < w.length; l++) if (!Wc(e, t, w[l])) {
      e.destination = null, l++, w.splice(0, l);
      return;
    }
    w.splice(0, l);
    var k = e.partialBoundaries;
    for (l = 0; l < k.length; l++) {
      var d = k[l];
      e: {
        o = e, i = t;
        var c = d.completedSegments;
        for (s = 0; s < c.length; s++) if (!uh(o, i, d, c[s])) {
          s++, c.splice(0, s);
          var h = !1;
          break e;
        }
        c.splice(0, s), h = !0;
      }
      if (!h) {
        e.destination = null, l++, k.splice(0, l);
        return;
      }
    }
    k.splice(0, l);
    var x = e.completedBoundaries;
    for (l = 0; l < x.length; l++) if (!Wc(e, t, x[l])) {
      e.destination = null, l++, x.splice(0, l);
      return;
    }
    x.splice(0, l);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function e1(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return lh(r, e, t);
    }), n.clear(), e.destination !== null && Ju(e, e.destination);
  } catch (r) {
    eo(e, r), jl(e, r);
  }
}
function t1() {
}
function ah(e, t, n, r) {
  var o = !1, l = null, i = "", s = { push: function(a) {
    return a !== null && (i += a), !0;
  }, destroy: function(a) {
    o = !0, l = a;
  } }, u = !1;
  if (e = Jg(e, Og(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, t1, void 0, function() {
    u = !0;
  }), sh(e), e1(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Ju(e, s);
    } catch (a) {
      eo(e, a), jl(e, a);
    }
  }
  if (o) throw l;
  if (!u) throw Error(L(426));
  return i;
}
or.renderToNodeStream = function() {
  throw Error(L(207));
};
or.renderToStaticMarkup = function(e, t) {
  return ah(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
or.renderToStaticNodeStream = function() {
  throw Error(L(208));
};
or.renderToString = function(e, t) {
  return ah(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
or.version = "18.3.1";
var qu = {};
var ch = z;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Be = null, Ve = 0;
function M(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < Ve && (e.enqueue(new Uint8Array(Be.buffer, 0, Ve)), Be = new Uint8Array(512), Ve = 0), e.enqueue(t);
  else {
    var n = Be.length - Ve;
    n < t.length && (n === 0 ? e.enqueue(Be) : (Be.set(t.subarray(0, n), Ve), e.enqueue(Be), t = t.subarray(n)), Be = new Uint8Array(512), Ve = 0), Be.set(t, Ve), Ve += t.length;
  }
}
function G(e, t) {
  return M(e, t), !0;
}
function Hc(e) {
  Be && 0 < Ve && (e.enqueue(new Uint8Array(Be.buffer, 0, Ve)), Be = null, Ve = 0);
}
var dh = new TextEncoder();
function U(e) {
  return dh.encode(e);
}
function $(e) {
  return dh.encode(e);
}
function fh(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Re = Object.prototype.hasOwnProperty, n1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bc = {}, Qc = {};
function ph(e) {
  return Re.call(Qc, e) ? !0 : Re.call(bc, e) ? !1 : n1.test(e) ? Qc[e] = !0 : (bc[e] = !0, !1);
}
function Te(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ea = /[\-:]([a-z])/g;
function ta(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ea,
    ta
  );
  ge[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ea, ta);
  ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ea, ta);
  ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var qo = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, r1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(qo).forEach(function(e) {
  r1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qo[t] = qo[e];
  });
});
var o1 = /["'&<>]/;
function pe(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = o1.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var l1 = /([A-Z])/g, i1 = /^ms-/, bs = Array.isArray, s1 = $("<script>"), u1 = $("<\/script>"), a1 = $('<script src="'), c1 = $('<script type="module" src="'), Kc = $('" async=""><\/script>'), d1 = /(<\/|<)(s)(cript)/gi;
function f1(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function p1(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? s1 : $('<script nonce="' + pe(t) + '">');
  var l = [];
  if (n !== void 0 && l.push(t, U(("" + n).replace(d1, f1)), u1), r !== void 0) for (n = 0; n < r.length; n++) l.push(a1, U(pe(r[n])), Kc);
  if (o !== void 0) for (r = 0; r < o.length; r++) l.push(c1, U(pe(o[r])), Kc);
  return { bootstrapChunks: l, startInlineScript: t, placeholderPrefix: $(e + "P:"), segmentPrefix: $(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function ft(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function h1(e) {
  return ft(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function m1(e, t, n) {
  switch (t) {
    case "select":
      return ft(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return ft(2, null);
    case "math":
      return ft(3, null);
    case "foreignObject":
      return ft(1, null);
    case "table":
      return ft(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return ft(5, null);
    case "colgroup":
      return ft(7, null);
    case "tr":
      return ft(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? ft(1, null) : e;
}
var na = $("<!-- -->");
function Yc(e, t, n, r) {
  return t === "" ? r : (r && e.push(na), e.push(U(pe(t))), !0);
}
var Gc = /* @__PURE__ */ new Map(), y1 = $(' style="'), Xc = $(":"), g1 = $(";");
function hh(e, t, n) {
  if (typeof n != "object") throw Error(O(62));
  t = !0;
  for (var r in n) if (Re.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var l = U(pe(r));
        o = U(pe(("" + o).trim()));
      } else {
        l = r;
        var i = Gc.get(l);
        i !== void 0 || (i = $(pe(l.replace(l1, "-$1").toLowerCase().replace(i1, "-ms-"))), Gc.set(l, i)), l = i, o = typeof o == "number" ? o === 0 || Re.call(qo, r) ? U("" + o) : U(o + "px") : U(pe(("" + o).trim()));
      }
      t ? (t = !1, e.push(y1, l, Xc, o)) : e.push(g1, l, Xc, o);
    }
  }
  t || e.push(fn);
}
var Ft = $(" "), Pn = $('="'), fn = $('"'), Zc = $('=""');
function De(e, t, n, r) {
  switch (n) {
    case "style":
      hh(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ge.hasOwnProperty(n) ? ge[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = U(t.attributeName), t.type) {
        case 3:
          r && e.push(Ft, n, Zc);
          break;
        case 4:
          r === !0 ? e.push(Ft, n, Zc) : r !== !1 && e.push(Ft, n, Pn, U(pe(r)), fn);
          break;
        case 5:
          isNaN(r) || e.push(Ft, n, Pn, U(pe(r)), fn);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Ft, n, Pn, U(pe(r)), fn);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(Ft, n, Pn, U(pe(r)), fn);
      }
    } else if (ph(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(Ft, U(n), Pn, U(pe(r)), fn);
    }
  }
}
var Lt = $(">"), Jc = $("/>");
function el(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(O(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(O(61));
    t = t.__html, t != null && e.push(U("" + t));
  }
}
function v1(e) {
  var t = "";
  return ch.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Bi = $(' selected=""');
function Vi(e, t, n, r) {
  e.push(pt(n));
  var o = n = null, l;
  for (l in t) if (Re.call(t, l)) {
    var i = t[l];
    if (i != null) switch (l) {
      case "children":
        n = i;
        break;
      case "dangerouslySetInnerHTML":
        o = i;
        break;
      default:
        De(e, r, l, i);
    }
  }
  return e.push(Lt), el(e, o, n), typeof n == "string" ? (e.push(U(pe(n))), null) : n;
}
var Wi = $(`
`), w1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qc = /* @__PURE__ */ new Map();
function pt(e) {
  var t = qc.get(e);
  if (t === void 0) {
    if (!w1.test(e)) throw Error(O(65, e));
    t = $("<" + e), qc.set(e, t);
  }
  return t;
}
var x1 = $("<!DOCTYPE html>");
function k1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(pt("select"));
      var l = null, i = null;
      for (f in n) if (Re.call(n, f)) {
        var s = n[f];
        if (s != null) switch (f) {
          case "children":
            l = s;
            break;
          case "dangerouslySetInnerHTML":
            i = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            De(e, r, f, s);
        }
      }
      return e.push(Lt), el(e, i, l), l;
    case "option":
      i = o.selectedValue, e.push(pt("option"));
      var u = s = null, a = null, f = null;
      for (l in n) if (Re.call(n, l)) {
        var p = n[l];
        if (p != null) switch (l) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            f = p;
            break;
          case "value":
            u = p;
          default:
            De(e, r, l, p);
        }
      }
      if (i != null) if (n = u !== null ? "" + u : v1(s), bs(i)) {
        for (r = 0; r < i.length; r++)
          if ("" + i[r] === n) {
            e.push(Bi);
            break;
          }
      } else "" + i === n && e.push(Bi);
      else a && e.push(Bi);
      return e.push(Lt), el(e, f, s), s;
    case "textarea":
      e.push(pt("textarea")), f = i = l = null;
      for (s in n) if (Re.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          f = u;
          break;
        case "value":
          l = u;
          break;
        case "defaultValue":
          i = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(O(91));
        default:
          De(e, r, s, u);
      }
      if (l === null && i !== null && (l = i), e.push(Lt), f != null) {
        if (l != null) throw Error(O(92));
        if (bs(f) && 1 < f.length) throw Error(O(93));
        l = "" + f;
      }
      return typeof l == "string" && l[0] === `
` && e.push(Wi), l !== null && e.push(U(pe("" + l))), null;
    case "input":
      e.push(pt("input")), u = f = s = l = null;
      for (i in n) if (Re.call(n, i) && (a = n[i], a != null)) switch (i) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          f = a;
          break;
        case "value":
          l = a;
          break;
        default:
          De(e, r, i, a);
      }
      return f !== null ? De(
        e,
        r,
        "checked",
        f
      ) : u !== null && De(e, r, "checked", u), l !== null ? De(e, r, "value", l) : s !== null && De(e, r, "value", s), e.push(Jc), null;
    case "menuitem":
      e.push(pt("menuitem"));
      for (var m in n) if (Re.call(n, m) && (l = n[m], l != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O(400));
        default:
          De(e, r, m, l);
      }
      return e.push(Lt), null;
    case "title":
      e.push(pt("title")), l = null;
      for (p in n) if (Re.call(n, p) && (i = n[p], i != null)) switch (p) {
        case "children":
          l = i;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(O(434));
        default:
          De(e, r, p, i);
      }
      return e.push(Lt), l;
    case "listing":
    case "pre":
      e.push(pt(t)), i = l = null;
      for (u in n) if (Re.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        default:
          De(e, r, u, s);
      }
      if (e.push(Lt), i != null) {
        if (l != null) throw Error(O(60));
        if (typeof i != "object" || !("__html" in i)) throw Error(O(61));
        n = i.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Wi, U(n)) : e.push(U("" + n)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(Wi), l;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(pt(t));
      for (var v in n) if (Re.call(n, v) && (l = n[v], l != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O(399, t));
        default:
          De(e, r, v, l);
      }
      return e.push(Jc), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Vi(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push(x1), Vi(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Vi(e, n, t, r);
      e.push(pt(t)), i = l = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          l = s;
          break;
        case "dangerouslySetInnerHTML":
          i = s;
          break;
        case "style":
          hh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          ph(a) && typeof s != "function" && typeof s != "symbol" && e.push(Ft, U(a), Pn, U(pe(s)), fn);
      }
      return e.push(Lt), el(e, i, l), l;
  }
}
var S1 = $("</"), C1 = $(">"), E1 = $('<template id="'), _1 = $('"></template>'), $1 = $("<!--$-->"), N1 = $('<!--$?--><template id="'), T1 = $('"></template>'), P1 = $("<!--$!-->"), R1 = $("<!--/$-->"), j1 = $("<template"), z1 = $('"'), M1 = $(' data-dgst="');
$(' data-msg="');
$(' data-stck="');
var F1 = $("></template>");
function ed(e, t, n) {
  if (M(e, N1), n === null) throw Error(O(395));
  return M(e, n), G(e, T1);
}
var L1 = $('<div hidden id="'), I1 = $('">'), O1 = $("</div>"), D1 = $('<svg aria-hidden="true" style="display:none" id="'), U1 = $('">'), A1 = $("</svg>"), B1 = $('<math aria-hidden="true" style="display:none" id="'), V1 = $('">'), W1 = $("</math>"), H1 = $('<table hidden id="'), b1 = $('">'), Q1 = $("</table>"), K1 = $('<table hidden><tbody id="'), Y1 = $('">'), G1 = $("</tbody></table>"), X1 = $('<table hidden><tr id="'), Z1 = $('">'), J1 = $("</tr></table>"), q1 = $('<table hidden><colgroup id="'), ev = $('">'), tv = $("</colgroup></table>");
function nv(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return M(e, L1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, I1);
    case 2:
      return M(e, D1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, U1);
    case 3:
      return M(e, B1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, V1);
    case 4:
      return M(e, H1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, b1);
    case 5:
      return M(e, K1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, Y1);
    case 6:
      return M(e, X1), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, Z1);
    case 7:
      return M(
        e,
        q1
      ), M(e, t.segmentPrefix), M(e, U(r.toString(16))), G(e, ev);
    default:
      throw Error(O(397));
  }
}
function rv(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return G(e, O1);
    case 2:
      return G(e, A1);
    case 3:
      return G(e, W1);
    case 4:
      return G(e, Q1);
    case 5:
      return G(e, G1);
    case 6:
      return G(e, J1);
    case 7:
      return G(e, tv);
    default:
      throw Error(O(397));
  }
}
var ov = $('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), lv = $('$RS("'), iv = $('","'), sv = $('")<\/script>'), uv = $('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), av = $('$RC("'), cv = $('","'), dv = $('")<\/script>'), fv = $('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), pv = $('$RX("'), hv = $('"'), mv = $(")<\/script>"), Hi = $(","), yv = /[<\u2028\u2029]/g;
function bi(e) {
  return JSON.stringify(e).replace(yv, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var Lr = Object.assign, gv = Symbol.for("react.element"), mh = Symbol.for("react.portal"), yh = Symbol.for("react.fragment"), gh = Symbol.for("react.strict_mode"), vh = Symbol.for("react.profiler"), wh = Symbol.for("react.provider"), xh = Symbol.for("react.context"), kh = Symbol.for("react.forward_ref"), Sh = Symbol.for("react.suspense"), Ch = Symbol.for("react.suspense_list"), Eh = Symbol.for("react.memo"), ra = Symbol.for("react.lazy"), vv = Symbol.for("react.scope"), wv = Symbol.for("react.debug_trace_mode"), xv = Symbol.for("react.legacy_hidden"), kv = Symbol.for("react.default_value"), td = Symbol.iterator;
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yh:
      return "Fragment";
    case mh:
      return "Portal";
    case vh:
      return "Profiler";
    case gh:
      return "StrictMode";
    case Sh:
      return "Suspense";
    case Ch:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case xh:
      return (e.displayName || "Context") + ".Consumer";
    case wh:
      return (e._context.displayName || "Context") + ".Provider";
    case kh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Eh:
      return t = e.displayName || null, t !== null ? t : Qs(e.type) || "Memo";
    case ra:
      t = e._payload, e = e._init;
      try {
        return Qs(e(t));
      } catch {
      }
  }
  return null;
}
var _h = {};
function nd(e, t) {
  if (e = e.contextTypes, !e) return _h;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var vn = null;
function ri(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(O(401));
    } else {
      if (n === null) throw Error(O(401));
      ri(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function $h(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && $h(e);
}
function Nh(e) {
  var t = e.parent;
  t !== null && Nh(t), e.context._currentValue = e.value;
}
function Th(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(O(402));
  e.depth === t.depth ? ri(e, t) : Th(e, t);
}
function Ph(e, t) {
  var n = t.parent;
  if (n === null) throw Error(O(402));
  e.depth === n.depth ? ri(e, n) : Ph(e, n), t.context._currentValue = t.value;
}
function Ml(e) {
  var t = vn;
  t !== e && (t === null ? Nh(e) : e === null ? $h(t) : t.depth === e.depth ? ri(t, e) : t.depth > e.depth ? Th(t, e) : Ph(t, e), vn = e);
}
var rd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function od(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = rd, e.props = n, e.state = o;
  var l = { queue: [], replace: !1 };
  e._reactInternals = l;
  var i = t.contextType;
  if (e.context = typeof i == "object" && i !== null ? i._currentValue : r, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(n, o), o = i == null ? o : Lr({}, o, i), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && rd.enqueueReplaceState(e, e.state, null), l.queue !== null && 0 < l.queue.length) if (t = l.queue, i = l.replace, l.queue = null, l.replace = !1, i && t.length === 1) e.state = t[0];
  else {
    for (l = i ? t[0] : e.state, o = !0, i = i ? 1 : 0; i < t.length; i++) {
      var s = t[i];
      s = typeof s == "function" ? s.call(e, l, n, r) : s, s != null && (o ? (o = !1, l = Lr({}, l, s)) : Lr(l, s));
    }
    e.state = l;
  }
  else l.queue = null;
}
var Sv = { id: 1, overflow: "" };
function Ks(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - tl(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - tl(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    return l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, { id: 1 << 32 - tl(t) + o | n << o | r, overflow: l + e };
  }
  return { id: 1 << l | n << o | r, overflow: e };
}
var tl = Math.clz32 ? Math.clz32 : _v, Cv = Math.log, Ev = Math.LN2;
function _v(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Cv(e) / Ev | 0) | 0;
}
function $v(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Nv = typeof Object.is == "function" ? Object.is : $v, Rt = null, oa = null, nl = null, Q = null, Cr = !1, Fl = !1, to = 0, Wt = null, oi = 0;
function pn() {
  if (Rt === null) throw Error(O(321));
  return Rt;
}
function ld() {
  if (0 < oi) throw Error(O(312));
  return { memoizedState: null, queue: null, next: null };
}
function la() {
  return Q === null ? nl === null ? (Cr = !1, nl = Q = ld()) : (Cr = !0, Q = nl) : Q.next === null ? (Cr = !1, Q = Q.next = ld()) : (Cr = !0, Q = Q.next), Q;
}
function ia() {
  oa = Rt = null, Fl = !1, nl = null, oi = 0, Q = Wt = null;
}
function Rh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function id(e, t, n) {
  if (Rt = pn(), Q = la(), Cr) {
    var r = Q.queue;
    if (t = r.dispatch, Wt !== null && (n = Wt.get(r), n !== void 0)) {
      Wt.delete(r), r = Q.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Q.memoizedState = r, [r, t];
    }
    return [Q.memoizedState, t];
  }
  return e = e === Rh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Q.memoizedState = e, e = Q.queue = { last: null, dispatch: null }, e = e.dispatch = Tv.bind(null, Rt, e), [Q.memoizedState, e];
}
function sd(e, t) {
  if (Rt = pn(), Q = la(), t = t === void 0 ? null : t, Q !== null) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Nv(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), Q.memoizedState = [e, t], e;
}
function Tv(e, t, n) {
  if (25 <= oi) throw Error(O(301));
  if (e === Rt) if (Fl = !0, e = { action: n, next: null }, Wt === null && (Wt = /* @__PURE__ */ new Map()), n = Wt.get(t), n === void 0) Wt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Pv() {
  throw Error(O(394));
}
function Fo() {
}
var ud = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return pn(), e._currentValue;
}, useMemo: sd, useReducer: id, useRef: function(e) {
  Rt = pn(), Q = la();
  var t = Q.memoizedState;
  return t === null ? (e = { current: e }, Q.memoizedState = e) : t;
}, useState: function(e) {
  return id(Rh, e);
}, useInsertionEffect: Fo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return sd(function() {
    return e;
  }, t);
}, useImperativeHandle: Fo, useEffect: Fo, useDebugValue: Fo, useDeferredValue: function(e) {
  return pn(), e;
}, useTransition: function() {
  return pn(), [!1, Pv];
}, useId: function() {
  var e = oa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - tl(e) - 1)).toString(32) + t;
  var n = rl;
  if (n === null) throw Error(O(404));
  return t = to++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return pn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(O(407));
  return n();
} }, rl = null, Qi = ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Rv(e) {
  return console.error(e), null;
}
function Er() {
}
function jv(e, t, n, r, o, l, i, s, u) {
  var a = [], f = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: f, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Rv : o, onAllReady: l === void 0 ? Er : l, onShellReady: i === void 0 ? Er : i, onShellError: s === void 0 ? Er : s, onFatalError: u === void 0 ? Er : u }, n = Ll(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = sa(t, e, null, n, f, _h, null, Sv), a.push(e), t;
}
function sa(e, t, n, r, o, l, i, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Mh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: l, context: i, treeContext: s };
  return o.add(u), u;
}
function Ll(e, t, n, r, o, l) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: l };
}
function no(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Il(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, fh(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function ad(e, t, n, r, o) {
  for (Rt = {}, oa = t, to = 0, e = n(r, o); Fl; ) Fl = !1, to = 0, oi += 1, Q = null, e = n(r, o);
  return ia(), e;
}
function cd(e, t, n, r) {
  var o = n.render(), l = r.childContextTypes;
  if (l != null) {
    var i = t.legacyContext;
    if (typeof n.getChildContext != "function") r = i;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in l)) throw Error(O(108, Qs(r) || "Unknown", s));
      r = Lr({}, i, n);
    }
    t.legacyContext = r, We(e, t, o), t.legacyContext = i;
  } else We(e, t, o);
}
function dd(e, t) {
  if (e && e.defaultProps) {
    t = Lr({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ys(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = nd(n, t.legacyContext);
    var l = n.contextType;
    l = new n(r, typeof l == "object" && l !== null ? l._currentValue : o), od(l, n, r, o), cd(e, t, l, n);
  } else {
    l = nd(n, t.legacyContext), o = ad(e, t, n, r, l);
    var i = to !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) od(o, n, r, l), cd(e, t, o, n);
    else if (i) {
      r = t.treeContext, t.treeContext = Ks(r, 1, 0);
      try {
        We(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else We(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, l = k1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, i = o.formatContext, o.formatContext = m1(i, n, r), Gs(e, t, l), o.formatContext = i, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push(S1, U(n), C1);
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case xv:
      case wv:
      case gh:
      case vh:
      case yh:
        We(e, t, r.children);
        return;
      case Ch:
        We(e, t, r.children);
        return;
      case vv:
        throw Error(O(343));
      case Sh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, l = r.fallback, r = r.children, i = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: i, errorDigest: null }, u = Ll(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Ll(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Gs(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(na), a.status = 1, Ol(s, a), s.pendingTasks === 0) break e;
          } catch (f) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = no(e, f);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = sa(e, l, n, u, i, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case kh:
        if (r = ad(e, t, n.render, r, o), to !== 0) {
          n = t.treeContext, t.treeContext = Ks(n, 1, 0);
          try {
            We(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else We(e, t, r);
        return;
      case Eh:
        n = n.type, r = dd(n, r), Ys(e, t, n, r, o);
        return;
      case wh:
        if (o = r.children, n = n._context, r = r.value, l = n._currentValue, n._currentValue = r, i = vn, vn = r = { parent: i, depth: i === null ? 0 : i.depth + 1, context: n, parentValue: l, value: r }, t.context = r, We(e, t, o), e = vn, e === null) throw Error(O(403));
        r = e.parentValue, e.context._currentValue = r === kv ? e.context._defaultValue : r, e = vn = e.parent, t.context = e;
        return;
      case xh:
        r = r.children, r = r(n._currentValue), We(e, t, r);
        return;
      case ra:
        o = n._init, n = o(n._payload), r = dd(n, r), Ys(e, t, n, r, void 0);
        return;
    }
    throw Error(O(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function We(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case gv:
        Ys(e, t, n.type, n.props, n.ref);
        return;
      case mh:
        throw Error(O(257));
      case ra:
        var r = n._init;
        n = r(n._payload), We(e, t, n);
        return;
    }
    if (bs(n)) {
      fd(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = td && n[td] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        fd(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Yc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Yc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function fd(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var l = t.treeContext;
    t.treeContext = Ks(l, r, o);
    try {
      Gs(e, t, n[o]);
    } finally {
      t.treeContext = l;
    }
  }
}
function Gs(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, l = t.context;
  try {
    return We(e, t, n);
  } catch (u) {
    if (ia(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var i = t.blockedSegment, s = Ll(e, i.chunks.length, null, i.formatContext, i.lastPushedText, !0);
      i.children.push(s), i.lastPushedText = !1, e = sa(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Ml(l);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = l, Ml(l), u;
  }
}
function zv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, zh(this, t, e);
}
function jh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(O(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return jh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Ol(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Ol(e, n);
  } else e.completedSegments.push(t);
}
function zh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(O(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Er, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Ol(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(zv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Ol(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Mh(e) {
  if (e.status !== 2) {
    var t = vn, n = Qi.current;
    Qi.current = ud;
    var r = rl;
    rl = e.responseState;
    try {
      var o = e.pingedTasks, l;
      for (l = 0; l < o.length; l++) {
        var i = o[l], s = e, u = i.blockedSegment;
        if (u.status === 0) {
          Ml(i.context);
          try {
            We(s, i, i.node), u.lastPushedText && u.textEmbedded && u.chunks.push(na), i.abortSet.delete(i), u.status = 1, zh(s, i.blockedBoundary, u);
          } catch (g) {
            if (ia(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = i.ping;
              g.then(a, a);
            } else {
              i.abortSet.delete(i), u.status = 4;
              var f = i.blockedBoundary, p = g, m = no(s, p);
              if (f === null ? Il(s, p) : (f.pendingTasks--, f.forceClientRender || (f.forceClientRender = !0, f.errorDigest = m, f.parentFlushed && s.clientRenderedBoundaries.push(f))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, l), e.destination !== null && ua(e, e.destination);
    } catch (g) {
      no(e, g), Il(e, g);
    } finally {
      rl = r, Qi.current = n, n === ud && Ml(t);
    }
  }
}
function Lo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, M(t, E1), M(t, e.placeholderPrefix), e = U(r.toString(16)), M(t, e), G(t, _1);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var l = 0;
      n = n.children;
      for (var i = 0; i < n.length; i++) {
        for (o = n[i]; l < o.index; l++) M(t, r[l]);
        o = li(e, t, o);
      }
      for (; l < r.length - 1; l++) M(t, r[l]);
      return l < r.length && (o = G(t, r[l])), o;
    default:
      throw Error(O(390));
  }
}
function li(e, t, n) {
  var r = n.boundary;
  if (r === null) return Lo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, G(t, P1), M(t, j1), r && (M(t, M1), M(t, U(pe(r))), M(t, z1)), G(t, F1), Lo(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, l = o.nextSuspenseID++;
    o = $(o.boundaryPrefix + l.toString(16)), r = r.id = o, ed(t, e.responseState, r), Lo(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), ed(t, e.responseState, r.id), Lo(e, t, n);
  else {
    if (G(t, $1), n = r.completedSegments, n.length !== 1) throw Error(O(391));
    li(e, t, n[0]);
  }
  return G(t, R1);
}
function pd(e, t, n) {
  return nv(t, e.responseState, n.formatContext, n.id), li(e, t, n), rv(t, n.formatContext);
}
function hd(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Fh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, M(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? M(t, av) : (e.sentCompleteBoundaryFunction = !0, M(t, uv)), r === null) throw Error(O(395));
  return n = U(n.toString(16)), M(t, r), M(t, cv), M(t, e.segmentPrefix), M(t, n), G(t, dv);
}
function Fh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(O(392));
    return pd(e, t, r);
  }
  return pd(e, t, r), e = e.responseState, M(t, e.startInlineScript), e.sentCompleteSegmentFunction ? M(t, lv) : (e.sentCompleteSegmentFunction = !0, M(t, ov)), M(t, e.segmentPrefix), o = U(o.toString(16)), M(t, o), M(t, iv), M(t, e.placeholderPrefix), M(t, o), G(t, sv);
}
function ua(e, t) {
  Be = new Uint8Array(512), Ve = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      li(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) M(t, r[n]);
      n < r.length && G(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, l;
    for (l = 0; l < o.length; l++) {
      var i = o[l];
      r = t;
      var s = e.responseState, u = i.id, a = i.errorDigest, f = i.errorMessage, p = i.errorComponentStack;
      if (M(r, s.startInlineScript), s.sentClientRenderFunction ? M(r, pv) : (s.sentClientRenderFunction = !0, M(
        r,
        fv
      )), u === null) throw Error(O(395));
      M(r, u), M(r, hv), (a || f || p) && (M(r, Hi), M(r, U(bi(a || "")))), (f || p) && (M(r, Hi), M(r, U(bi(f || "")))), p && (M(r, Hi), M(r, U(bi(p)))), G(r, mv);
    }
    o.splice(0, l);
    var m = e.completedBoundaries;
    for (l = 0; l < m.length; l++) hd(e, t, m[l]);
    m.splice(0, l), Hc(t), Be = new Uint8Array(512), Ve = 0;
    var v = e.partialBoundaries;
    for (l = 0; l < v.length; l++) {
      var g = v[l];
      e: {
        o = e, i = t;
        var w = g.completedSegments;
        for (s = 0; s < w.length; s++) if (!Fh(
          o,
          i,
          g,
          w[s]
        )) {
          s++, w.splice(0, s);
          var k = !1;
          break e;
        }
        w.splice(0, s), k = !0;
      }
      if (!k) {
        e.destination = null, l++, v.splice(0, l);
        return;
      }
    }
    v.splice(0, l);
    var d = e.completedBoundaries;
    for (l = 0; l < d.length; l++) hd(e, t, d[l]);
    d.splice(0, l);
  } finally {
    Hc(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function md(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return jh(r, e, t);
    }), n.clear(), e.destination !== null && ua(e, e.destination);
  } catch (r) {
    no(e, r), Il(e, r);
  }
}
qu.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, l, i = new Promise(function(f, p) {
      l = f, o = p;
    }), s = jv(e, p1(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), h1(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, l, function() {
      var f = new ReadableStream({ type: "bytes", pull: function(p) {
        if (s.status === 1) s.status = 2, fh(p, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = p;
          try {
            ua(s, p);
          } catch (m) {
            no(s, m), Il(s, m);
          }
        }
      }, cancel: function() {
        md(s);
      } }, { highWaterMark: 0 });
      f.allReady = i, n(f);
    }, function(f) {
      i.catch(function() {
      }), r(f);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        md(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Mh(s);
  });
};
qu.version = "18.3.1";
var lr, Lh;
lr = or, Lh = qu;
lr.version;
var Mv = lr.renderToString;
lr.renderToStaticMarkup;
lr.renderToNodeStream;
lr.renderToStaticNodeStream;
Lh.renderToReadableStream;
var Ih = { exports: {} }, Fv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Lv = Fv, Iv = Lv;
function Oh() {
}
function Dh() {
}
Dh.resetWarningCache = Oh;
var Ov = function() {
  function e(r, o, l, i, s, u) {
    if (u !== Iv) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dh,
    resetWarningCache: Oh
  };
  return n.PropTypes = n, n;
};
Ih.exports = Ov();
var Dv = Ih.exports;
const it = /* @__PURE__ */ gd(Dv);
var Uv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Av = Uh(function(e) {
  (function(t) {
    var n = function(k, d, c) {
      if (!u(d) || f(d) || p(d) || m(d) || s(d)) return d;
      var h, x = 0, _ = 0;
      if (a(d)) for (h = [], _ = d.length; x < _; x++) h.push(n(k, d[x], c));
      else for (var N in h = {}, d) Object.prototype.hasOwnProperty.call(d, N) && (h[k(N, c)] = n(k, d[N], c));
      return h;
    }, r = function(k) {
      return v(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(d, c) {
        return c ? c.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var d = r(k);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, l = function(k, d) {
      return function(c, h) {
        var x = (h = h || {}).separator || "_", _ = h.split || /(?=[A-Z])/;
        return c.split(_).join(x);
      }(k, d).toLowerCase();
    }, i = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return i.call(k) == "[object Array]";
    }, f = function(k) {
      return i.call(k) == "[object Date]";
    }, p = function(k) {
      return i.call(k) == "[object RegExp]";
    }, m = function(k) {
      return i.call(k) == "[object Boolean]";
    }, v = function(k) {
      return (k -= 0) == k;
    }, g = function(k, d) {
      var c = d && "process" in d ? d.process : d;
      return typeof c != "function" ? k : function(h, x) {
        return c(h, k, x);
      };
    }, w = { camelize: r, decamelize: l, pascalize: o, depascalize: l, camelizeKeys: function(k, d) {
      return n(g(r, d), k);
    }, decamelizeKeys: function(k, d) {
      return n(g(l, d), k, d);
    }, pascalizeKeys: function(k, d) {
      return n(g(o, d), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = w : t.humps = w;
  })(Uv);
}).decamelize, Bv = function(e) {
  if (Array.isArray(e)) return e;
}, Vv = function(e, t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
    var n = [], r = !0, o = !1, l = void 0;
    try {
      for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) ;
    } catch (u) {
      o = !0, l = u;
    } finally {
      try {
        r || s.return == null || s.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}, yd = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}, Wv = function(e, t) {
  if (e) {
    if (typeof e == "string") return yd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yd(e, t) : void 0;
  }
}, Hv = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, bv = function(e, t) {
  return Bv(e) || Vv(e, t) || Wv(e, t) || Hv();
}, Ah = Uh(function(e) {
  function t() {
    return e.exports = t = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
      }
      return n;
    }, t.apply(this, arguments);
  }
  e.exports = t;
}), Qv = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, l = Object.keys(e);
  for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, Bh = function(e, t) {
  if (e == null) return {};
  var n, r, o = Qv(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, Kv = z.createContext(null);
function Vh(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = Bh(e, ["children"]);
  return typeof n != "string" && (n = Mv(n)), xt.createElement("template", Ah({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function Wh(e) {
  var t = e.root, n = e.children;
  return Pp.createPortal(n === void 0 ? null : n, t);
}
function Yv(e) {
  var t = z.forwardRef(function(n, r) {
    var o, l, i = n.mode, s = i === void 0 ? "open" : i, u = n.delegatesFocus, a = u !== void 0 && u, f = n.styleSheets, p = f === void 0 ? [] : f, m = n.ssr, v = m !== void 0 && m, g = n.children, w = Bh(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (l = z.useRef((o = r) && o.current), z.useEffect(function() {
      o && (o.current = l.current);
    }, [o]), l), d = z.useState(null), c = bv(d, 2), h = c[0], x = c[1], _ = "node_".concat(s).concat(a);
    return z.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), v) {
          var N = k.current.shadowRoot;
          return void x(N);
        }
        var P = k.current.attachShadow({ mode: s, delegatesFocus: a });
        p.length > 0 && (P.adoptedStyleSheets = p), x(P);
      } catch (S) {
        (function(T) {
          var E = T.error, B = T.styleSheets, F = T.root;
          switch (E.name) {
            case "NotSupportedError":
              B.length > 0 && (F.adoptedStyleSheets = B);
              break;
            default:
              throw E;
          }
        })({ error: S, styleSheets: p, root: h });
      }
    }, [r, k, p]), xt.createElement(xt.Fragment, null, xt.createElement(e.tag, Ah({ key: _, ref: k }, w), (h || v) && xt.createElement(Kv.Provider, { value: h }, v ? xt.createElement(Vh, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: v, children: g })) : xt.createElement(Wh, { root: h }, e.render({ root: h, ssr: v, children: g })))));
  });
  return t.propTypes = { mode: it.oneOf(["open", "closed"]), delegatesFocus: it.bool, styleSheets: it.arrayOf(it.instanceOf(globalThis.CSSStyleSheet)), ssr: it.bool, children: it.node }, t;
}
Vh.propTypes = { children: it.oneOfType([it.string, it.node]) }, Wh.propTypes = { root: it.object.isRequired, children: it.node };
var Ki = /* @__PURE__ */ new Map();
function Gv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var l = Av(o, { separator: "-" }), i = "".concat(t, "-").concat(l);
    return Ki.has(i) || Ki.set(i, Yv({ tag: l, render: n })), Ki.get(i);
  } });
}
var Xv = Gv();
const Zv = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}.group:hover .group-hover\\:text-yellow-700{--tw-text-opacity: 1;color:rgb(161 98 7 / var(--tw-text-opacity, 1))}';
function Jv(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function Hh({ chatbotId: e }) {
  const [t, n] = z.useState(!1), [r, o] = z.useState(!1), {
    messages: l,
    sendMessage: i,
    sendFile: s,
    retryMessage: u,
    startNewChat: a,
    endCurrentChat: f,
    loadSession: p,
    getRecentChats: m,
    updateProfile: v,
    sessions: g,
    selectedSession: w,
    isConnected: k,
    isLoading: d,
    config: c
  } = Eg({
    chatbotId: e
  });
  return d === !0 || !c ? null : /* @__PURE__ */ y.jsxs(Xv.div, { children: [
    /* @__PURE__ */ y.jsx("style", { children: Jv(Zv) }),
    /* @__PURE__ */ y.jsx(
      eg,
      {
        isOpen: t,
        onClick: () => n(!t),
        config: c
      }
    ),
    /* @__PURE__ */ y.jsx(
      dg,
      {
        isOpen: t,
        isMaximized: r,
        isConnected: k,
        config: c,
        messages: l,
        sessions: g,
        selectedSession: w,
        onStartNewChat: a,
        onEndChat: f,
        onLoadSession: p,
        onGetRecentChats: m,
        onUpdateProfile: v,
        onClose: () => n(!1),
        onToggleMaximize: () => o(!r),
        onSendMessage: i,
        onFileUpload: s,
        onRetryMessage: u
      }
    )
  ] });
}
let yr = null, Mt = null;
function qv(e) {
  Mt || (Mt = document.createElement("div"), Mt.id = "ticketdesk-ai", document.body.appendChild(Mt));
  const t = () => {
    yr && (yr.unmount(), yr = null), Mt && (Mt.remove(), Mt = null);
  };
  return yr = Hu(Mt), yr.render(/* @__PURE__ */ y.jsx(Hh, { chatbotId: e })), { close: t };
}
const ew = _y(Hh, {
  props: {
    chatbotId: "string"
  }
});
customElements.define("ticketdesk-chatbot", ew);
window.ticketdesk = {
  initChatbot: qv
};
window.TICKETDESK_CHATBOT_ID && window.ticketdesk.initChatbot(window.TICKETDESK_CHATBOT_ID);
