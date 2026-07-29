var lm = Object.defineProperty;
var sm = (e, t, n) => t in e ? lm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var V = (e, t, n) => sm(e, typeof t != "symbol" ? t + "" : t, n);
function Rd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zd = { exports: {} }, A = {};
var fo = Symbol.for("react.element"), um = Symbol.for("react.portal"), am = Symbol.for("react.fragment"), cm = Symbol.for("react.strict_mode"), dm = Symbol.for("react.profiler"), fm = Symbol.for("react.provider"), pm = Symbol.for("react.context"), hm = Symbol.for("react.forward_ref"), mm = Symbol.for("react.suspense"), ym = Symbol.for("react.memo"), gm = Symbol.for("react.lazy"), wa = Symbol.iterator;
function vm(e) {
  return e === null || typeof e != "object" ? null : (e = wa && e[wa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ld = Object.assign, Id = {};
function ir(e, t, n) {
  this.props = e, this.context = t, this.refs = Id, this.updater = n || Fd;
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dd() {
}
Dd.prototype = ir.prototype;
function ou(e, t, n) {
  this.props = e, this.context = t, this.refs = Id, this.updater = n || Fd;
}
var iu = ou.prototype = new Dd();
iu.constructor = ou;
Ld(iu, ir.prototype);
iu.isPureReactComponent = !0;
var xa = Array.isArray, Od = Object.prototype.hasOwnProperty, lu = { current: null }, bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ad(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Od.call(t, r) && !bd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: fo, type: e, key: i, ref: l, props: o, _owner: lu.current };
}
function wm(e, t) {
  return { $$typeof: fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fo;
}
function xm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ka = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? xm("" + e.key) : t.toString(36);
}
function Vo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case fo:
        case um:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + ml(l, 0) : r, xa(o) ? (n = "", e != null && (n = e.replace(ka, "$&/") + "/"), Vo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (su(o) && (o = wm(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ka, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", xa(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + ml(i, s);
    l += Vo(i, t, n, u, o);
  }
  else if (u = vm(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + ml(i, s++), l += Vo(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function go(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Vo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function km(e) {
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
var Ne = { current: null }, Bo = { transition: null }, Sm = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Bo, ReactCurrentOwner: lu };
function Ud() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: go, forEach: function(e, t, n) {
  go(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return go(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return go(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!su(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = ir;
A.Fragment = am;
A.Profiler = dm;
A.PureComponent = ou;
A.StrictMode = cm;
A.Suspense = mm;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
A.act = Ud;
A.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ld({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = lu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Od.call(t, u) && !bd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: fo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
A.createContext = function(e) {
  return e = { $$typeof: pm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fm, _context: e }, e.Consumer = e;
};
A.createElement = Ad;
A.createFactory = function(e) {
  var t = Ad.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: hm, render: e };
};
A.isValidElement = su;
A.lazy = function(e) {
  return { $$typeof: gm, _payload: { _status: -1, _result: e }, _init: km };
};
A.memo = function(e, t) {
  return { $$typeof: ym, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
A.unstable_act = Ud;
A.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
A.useContext = function(e) {
  return Ne.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
A.useId = function() {
  return Ne.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return Ne.current.useRef(e);
};
A.useState = function(e) {
  return Ne.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return Ne.current.useTransition();
};
A.version = "18.3.1";
zd.exports = A;
var M = zd.exports;
const Xe = /* @__PURE__ */ Rd(M);
var Wd = { exports: {} }, Je = {}, Vd = { exports: {} }, Bd = {};
(function(e) {
  function t(N, F) {
    var D = N.length;
    N.push(F);
    e: for (; 0 < D; ) {
      var R = D - 1 >>> 1, L = N[R];
      if (0 < o(L, F)) N[R] = F, N[D] = L, D = R;
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var F = N[0], D = N.pop();
    if (D !== F) {
      N[0] = D;
      e: for (var R = 0, L = N.length, W = L >>> 1; R < W; ) {
        var et = 2 * (R + 1) - 1, st = N[et], te = et + 1, _e = N[te];
        if (0 > o(st, D)) te < L && 0 > o(_e, st) ? (N[R] = _e, N[te] = D, R = te) : (N[R] = st, N[et] = D, R = et);
        else if (te < L && 0 > o(_e, D)) N[R] = _e, N[te] = D, R = te;
        else break e;
      }
    }
    return F;
  }
  function o(N, F) {
    var D = N.sortIndex - F.sortIndex;
    return D !== 0 ? D : N.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var u = [], a = [], d = 1, p = null, m = 3, v = !1, g = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= N) r(a), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(a);
    }
  }
  function w(N) {
    if (x = !1, h(N), !g) if (n(u) !== null) g = !0, dr(S);
    else {
      var F = n(a);
      F !== null && fr(w, F.startTime - N);
    }
  }
  function S(N, F) {
    g = !1, x && (x = !1, f(T), T = -1), v = !0;
    var D = m;
    try {
      for (h(F), p = n(u); p !== null && (!(p.expirationTime > F) || N && !Y()); ) {
        var R = p.callback;
        if (typeof R == "function") {
          p.callback = null, m = p.priorityLevel;
          var L = R(p.expirationTime <= F);
          F = e.unstable_now(), typeof L == "function" ? p.callback = L : p === n(u) && r(u), h(F);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var W = !0;
      else {
        var et = n(a);
        et !== null && fr(w, et.startTime - F), W = !1;
      }
      return W;
    } finally {
      p = null, m = D, v = !1;
    }
  }
  var _ = !1, E = null, T = -1, U = 5, z = -1;
  function Y() {
    return !(e.unstable_now() - z < U);
  }
  function H() {
    if (E !== null) {
      var N = e.unstable_now();
      z = N;
      var F = !0;
      try {
        F = E(!0, N);
      } finally {
        F ? we() : (_ = !1, E = null);
      }
    } else _ = !1;
  }
  var we;
  if (typeof c == "function") we = function() {
    c(H);
  };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(), cr = be.port2;
    be.port1.onmessage = H, we = function() {
      cr.postMessage(null);
    };
  } else we = function() {
    k(H, 0);
  };
  function dr(N) {
    E = N, _ || (_ = !0, we());
  }
  function fr(N, F) {
    T = k(function() {
      N(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
    N.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, dr(S));
  }, e.unstable_forceFrameRate = function(N) {
    0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < N ? Math.floor(1e3 / N) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(N) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = m;
    }
    var D = m;
    m = F;
    try {
      return N();
    } finally {
      m = D;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(N, F) {
    switch (N) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        N = 3;
    }
    var D = m;
    m = N;
    try {
      return F();
    } finally {
      m = D;
    }
  }, e.unstable_scheduleCallback = function(N, F, D) {
    var R = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? R + D : R) : D = R, N) {
      case 1:
        var L = -1;
        break;
      case 2:
        L = 250;
        break;
      case 5:
        L = 1073741823;
        break;
      case 4:
        L = 1e4;
        break;
      default:
        L = 5e3;
    }
    return L = D + L, N = { id: d++, callback: F, priorityLevel: N, startTime: D, expirationTime: L, sortIndex: -1 }, D > R ? (N.sortIndex = D, t(a, N), n(u) === null && N === n(a) && (x ? (f(T), T = -1) : x = !0, fr(w, D - R))) : (N.sortIndex = L, t(u, N), g || v || (g = !0, dr(S))), N;
  }, e.unstable_shouldYield = Y, e.unstable_wrapCallback = function(N) {
    var F = m;
    return function() {
      var D = m;
      m = F;
      try {
        return N.apply(this, arguments);
      } finally {
        m = D;
      }
    };
  };
})(Bd);
Vd.exports = Bd;
var Cm = Vd.exports;
var _m = M, Ze = Cm;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Hd = /* @__PURE__ */ new Set(), Br = {};
function Mn(e, t) {
  Jn(e, t), Jn(e + "Capture", t);
}
function Jn(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) Hd.add(t[e]);
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ts = Object.prototype.hasOwnProperty, Em = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Sa = {}, Ca = {};
function $m(e) {
  return ts.call(Ca, e) ? !0 : ts.call(Sa, e) ? !1 : Em.test(e) ? Ca[e] = !0 : (Sa[e] = !0, !1);
}
function Tm(e, t, n, r) {
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
function Nm(e, t, n, r) {
  if (t === null || typeof t > "u" || Tm(e, t, n, r)) return !0;
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
function Pe(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uu = /[\-:]([a-z])/g;
function au(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uu,
    au
  );
  ye[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uu, au);
  ye[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uu, au);
  ye[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Nm(t, n, o, r) && (n = null), r || o === null ? $m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), du = Symbol.for("react.strict_mode"), ns = Symbol.for("react.profiler"), Qd = Symbol.for("react.provider"), Yd = Symbol.for("react.context"), fu = Symbol.for("react.forward_ref"), rs = Symbol.for("react.suspense"), os = Symbol.for("react.suspense_list"), pu = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Xd = Symbol.for("react.offscreen"), _a = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object" ? null : (e = _a && e[_a] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ie = Object.assign, yl;
function Er(e) {
  if (yl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    yl = t && t[1] || "";
  }
  return `
` + yl + e;
}
var gl = !1;
function vl(e, t) {
  if (!e || gl) return "";
  gl = !0;
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
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || o[l] !== i[s]) {
              var u = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    gl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function Pm(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vl(e.type, !1), e;
    case 11:
      return e = vl(e.type.render, !1), e;
    case 1:
      return e = vl(e.type, !0), e;
    default:
      return "";
  }
}
function is(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Fn:
      return "Portal";
    case ns:
      return "Profiler";
    case du:
      return "StrictMode";
    case rs:
      return "Suspense";
    case os:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Yd:
      return (e.displayName || "Context") + ".Consumer";
    case Qd:
      return (e._context.displayName || "Context") + ".Provider";
    case fu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pu:
      return t = e.displayName || null, t !== null ? t : is(e.type) || "Memo";
    case Ut:
      t = e._payload, e = e._init;
      try {
        return is(e(t));
      } catch {
      }
  }
  return null;
}
function Mm(e) {
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
      return is(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
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
function rn(e) {
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
function Kd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function jm(e) {
  var t = Kd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function wo(e) {
  e._valueTracker || (e._valueTracker = jm(e));
}
function Gd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Kd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ls(e, t) {
  var n = t.checked;
  return ie({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ea(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = rn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Zd(e, t) {
  t = t.checked, t != null && cu(e, "checked", t, !1);
}
function ss(e, t) {
  Zd(e, t);
  var n = rn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? us(e, t.type, n) : t.hasOwnProperty("defaultValue") && us(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function $a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function us(e, t, n) {
  (t !== "number" || fi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $r = Array.isArray;
function Qn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function as(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ie({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ta(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if ($r(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: rn(n) };
}
function Jd(e, t) {
  var n = rn(t.value), r = rn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? qd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xo, ef = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xo = xo || document.createElement("div"), xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
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
}, Rm = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
  Rm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e];
  });
});
function tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px";
}
function nf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = tf(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var zm = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ds(e, t) {
  if (t) {
    if (zm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function fs(e, t) {
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
var ps = null;
function hu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hs = null, Yn = null, Xn = null;
function Pa(e) {
  if (e = mo(e)) {
    if (typeof hs != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = Gi(t), hs(e.stateNode, e.type, t));
  }
}
function rf(e) {
  Yn ? Xn ? Xn.push(e) : Xn = [e] : Yn = e;
}
function of() {
  if (Yn) {
    var e = Yn, t = Xn;
    if (Xn = Yn = null, Pa(e), t) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function lf(e, t) {
  return e(t);
}
function sf() {
}
var wl = !1;
function uf(e, t, n) {
  if (wl) return e(t, n);
  wl = !0;
  try {
    return lf(e, t, n);
  } finally {
    wl = !1, (Yn !== null || Xn !== null) && (sf(), of());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gi(n);
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
var ms = !1;
if (jt) try {
  var hr = {};
  Object.defineProperty(hr, "passive", { get: function() {
    ms = !0;
  } }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
} catch {
  ms = !1;
}
function Fm(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Fr = !1, pi = null, hi = !1, ys = null, Lm = { onError: function(e) {
  Fr = !0, pi = e;
} };
function Im(e, t, n, r, o, i, l, s, u) {
  Fr = !1, pi = null, Fm.apply(Lm, arguments);
}
function Dm(e, t, n, r, o, i, l, s, u) {
  if (Im.apply(this, arguments), Fr) {
    if (Fr) {
      var a = pi;
      Fr = !1, pi = null;
    } else throw Error(C(198));
    hi || (hi = !0, ys = a);
  }
}
function jn(e) {
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
function af(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ma(e) {
  if (jn(e) !== e) throw Error(C(188));
}
function Om(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jn(e), t === null) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ma(o), e;
        if (i === r) return Ma(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function cf(e) {
  return e = Om(e), e !== null ? df(e) : null;
}
function df(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = df(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ff = Ze.unstable_scheduleCallback, ja = Ze.unstable_cancelCallback, bm = Ze.unstable_shouldYield, Am = Ze.unstable_requestPaint, se = Ze.unstable_now, Um = Ze.unstable_getCurrentPriorityLevel, mu = Ze.unstable_ImmediatePriority, pf = Ze.unstable_UserBlockingPriority, mi = Ze.unstable_NormalPriority, Wm = Ze.unstable_LowPriority, hf = Ze.unstable_IdlePriority, Qi = null, St = null;
function Vm(e) {
  if (St && typeof St.onCommitFiberRoot == "function") try {
    St.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var pt = Math.clz32 ? Math.clz32 : Qm, Bm = Math.log, Hm = Math.LN2;
function Qm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Bm(e) / Hm | 0) | 0;
}
var ko = 64, So = 4194304;
function Tr(e) {
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
function yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = Tr(s) : (i &= l, i !== 0 && (r = Tr(i)));
  } else l = n & ~o, l !== 0 ? r = Tr(l) : i !== 0 && (r = Tr(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Ym(e, t) {
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
function Xm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - pt(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Ym(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function gs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function mf() {
  var e = ko;
  return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
}
function Km(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - pt(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function yu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Q = 0;
function yf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var gf, gu, vf, wf, xf, vs = !1, Co = [], Kt = null, Gt = null, Zt = null, Yr = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Map(), Vt = [], Gm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ra(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Zt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xr.delete(t.pointerId);
  }
}
function mr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = mo(t), t !== null && gu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Zm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kt = mr(Kt, e, t, n, r, o), !0;
    case "dragenter":
      return Gt = mr(Gt, e, t, n, r, o), !0;
    case "mouseover":
      return Zt = mr(Zt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Yr.set(i, mr(Yr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Xr.set(i, mr(Xr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function kf(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = af(n), t !== null) {
          e.blockedOn = t, xf(e.priority, function() {
            vf(n);
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
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ps = r, n.target.dispatchEvent(r), ps = null;
    } else return t = mo(n), t !== null && gu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Ho(e) && n.delete(t);
}
function Jm() {
  vs = !1, Kt !== null && Ho(Kt) && (Kt = null), Gt !== null && Ho(Gt) && (Gt = null), Zt !== null && Ho(Zt) && (Zt = null), Yr.forEach(za), Xr.forEach(za);
}
function yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vs || (vs = !0, Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Jm)));
}
function Kr(e) {
  function t(o) {
    return yr(o, e);
  }
  if (0 < Co.length) {
    yr(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kt !== null && yr(Kt, e), Gt !== null && yr(Gt, e), Zt !== null && yr(Zt, e), Yr.forEach(t), Xr.forEach(t), n = 0; n < Vt.length; n++) r = Vt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && (n = Vt[0], n.blockedOn === null); ) kf(n), n.blockedOn === null && Vt.shift();
}
var Kn = Dt.ReactCurrentBatchConfig, gi = !0;
function qm(e, t, n, r) {
  var o = Q, i = Kn.transition;
  Kn.transition = null;
  try {
    Q = 1, vu(e, t, n, r);
  } finally {
    Q = o, Kn.transition = i;
  }
}
function e0(e, t, n, r) {
  var o = Q, i = Kn.transition;
  Kn.transition = null;
  try {
    Q = 4, vu(e, t, n, r);
  } finally {
    Q = o, Kn.transition = i;
  }
}
function vu(e, t, n, r) {
  if (gi) {
    var o = ws(e, t, n, r);
    if (o === null) Ml(e, t, r, vi, n), Ra(e, r);
    else if (Zm(o, e, t, n, r)) r.stopPropagation();
    else if (Ra(e, r), t & 4 && -1 < Gm.indexOf(e)) {
      for (; o !== null; ) {
        var i = mo(o);
        if (i !== null && gf(i), i = ws(e, t, n, r), i === null && Ml(e, t, r, vi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var vi = null;
function ws(e, t, n, r) {
  if (vi = null, e = hu(r), e = vn(e), e !== null) if (t = jn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = af(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return vi = e, null;
}
function Sf(e) {
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
      switch (Um()) {
        case mu:
          return 1;
        case pf:
          return 4;
        case mi:
        case Wm:
          return 16;
        case hf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ht = null, wu = null, Qo = null;
function Cf() {
  if (Qo) return Qo;
  var e, t = wu, n = t.length, r, o = "value" in Ht ? Ht.value : Ht.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Qo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Yo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _o() {
  return !0;
}
function Fa() {
  return !1;
}
function qe(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _o : Fa, this.isPropagationStopped = Fa, this;
  }
  return ie(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
  }, persist: function() {
  }, isPersistent: _o }), t;
}
var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xu = qe(lr), ho = ie({}, lr, { view: 0, detail: 0 }), t0 = qe(ho), kl, Sl, gr, Yi = ie({}, ho, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ku, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (kl = e.screenX - gr.screenX, Sl = e.screenY - gr.screenY) : Sl = kl = 0, gr = e), kl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Sl;
} }), La = qe(Yi), n0 = ie({}, Yi, { dataTransfer: 0 }), r0 = qe(n0), o0 = ie({}, ho, { relatedTarget: 0 }), Cl = qe(o0), i0 = ie({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), l0 = qe(i0), s0 = ie({}, lr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), u0 = qe(s0), a0 = ie({}, lr, { data: 0 }), Ia = qe(a0), c0 = {
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
}, d0 = {
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
}, f0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function p0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = f0[e]) ? !!t[e] : !1;
}
function ku() {
  return p0;
}
var h0 = ie({}, ho, { key: function(e) {
  if (e.key) {
    var t = c0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? d0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ku, charCode: function(e) {
  return e.type === "keypress" ? Yo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), m0 = qe(h0), y0 = ie({}, Yi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Da = qe(y0), g0 = ie({}, ho, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ku }), v0 = qe(g0), w0 = ie({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), x0 = qe(w0), k0 = ie({}, Yi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), S0 = qe(k0), C0 = [9, 13, 27, 32], Su = jt && "CompositionEvent" in window, Lr = null;
jt && "documentMode" in document && (Lr = document.documentMode);
var _0 = jt && "TextEvent" in window && !Lr, _f = jt && (!Su || Lr && 8 < Lr && 11 >= Lr), Oa = " ", ba = !1;
function Ef(e, t) {
  switch (e) {
    case "keyup":
      return C0.indexOf(t.keyCode) !== -1;
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
function $f(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function E0(e, t) {
  switch (e) {
    case "compositionend":
      return $f(t);
    case "keypress":
      return t.which !== 32 ? null : (ba = !0, Oa);
    case "textInput":
      return e = t.data, e === Oa && ba ? null : e;
    default:
      return null;
  }
}
function $0(e, t) {
  if (In) return e === "compositionend" || !Su && Ef(e, t) ? (e = Cf(), Qo = wu = Ht = null, In = !1, e) : null;
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
      return _f && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var T0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!T0[e.type] : t === "textarea";
}
function Tf(e, t, n, r) {
  rf(r), t = wi(t, "onChange"), 0 < t.length && (n = new xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ir = null, Gr = null;
function N0(e) {
  Of(e, 0);
}
function Xi(e) {
  var t = bn(e);
  if (Gd(t)) return e;
}
function P0(e, t) {
  if (e === "change") return t;
}
var Nf = !1;
if (jt) {
  var _l;
  if (jt) {
    var El = "oninput" in document;
    if (!El) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"), El = typeof Ua.oninput == "function";
    }
    _l = El;
  } else _l = !1;
  Nf = _l && (!document.documentMode || 9 < document.documentMode);
}
function Wa() {
  Ir && (Ir.detachEvent("onpropertychange", Pf), Gr = Ir = null);
}
function Pf(e) {
  if (e.propertyName === "value" && Xi(Gr)) {
    var t = [];
    Tf(t, Gr, e, hu(e)), uf(N0, t);
  }
}
function M0(e, t, n) {
  e === "focusin" ? (Wa(), Ir = t, Gr = n, Ir.attachEvent("onpropertychange", Pf)) : e === "focusout" && Wa();
}
function j0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xi(Gr);
}
function R0(e, t) {
  if (e === "click") return Xi(t);
}
function z0(e, t) {
  if (e === "input" || e === "change") return Xi(t);
}
function F0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mt = typeof Object.is == "function" ? Object.is : F0;
function Zr(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ts.call(t, o) || !mt(e[o], t[o])) return !1;
  }
  return !0;
}
function Va(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ba(e, t) {
  var n = Va(e);
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
    n = Va(n);
  }
}
function Mf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function jf() {
  for (var e = window, t = fi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fi(e.document);
  }
  return t;
}
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function L0(e) {
  var t = jf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Mf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Cu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ba(n, i);
        var l = Ba(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var I0 = jt && "documentMode" in document && 11 >= document.documentMode, Dn = null, xs = null, Dr = null, ks = !1;
function Ha(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ks || Dn == null || Dn !== fi(r) || (r = Dn, "selectionStart" in r && Cu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dr && Zr(Dr, r) || (Dr = r, r = wi(xs, "onSelect"), 0 < r.length && (t = new xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Dn)));
}
function Eo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var On = { animationend: Eo("Animation", "AnimationEnd"), animationiteration: Eo("Animation", "AnimationIteration"), animationstart: Eo("Animation", "AnimationStart"), transitionend: Eo("Transition", "TransitionEnd") }, $l = {}, Rf = {};
jt && (Rf = document.createElement("div").style, "AnimationEvent" in window || (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation), "TransitionEvent" in window || delete On.transitionend.transition);
function Ki(e) {
  if ($l[e]) return $l[e];
  if (!On[e]) return e;
  var t = On[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rf) return $l[e] = t[n];
  return e;
}
var zf = Ki("animationend"), Ff = Ki("animationiteration"), Lf = Ki("animationstart"), If = Ki("transitionend"), Df = /* @__PURE__ */ new Map(), Qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function sn(e, t) {
  Df.set(e, t), Mn(t, [e]);
}
for (var Tl = 0; Tl < Qa.length; Tl++) {
  var Nl = Qa[Tl], D0 = Nl.toLowerCase(), O0 = Nl[0].toUpperCase() + Nl.slice(1);
  sn(D0, "on" + O0);
}
sn(zf, "onAnimationEnd");
sn(Ff, "onAnimationIteration");
sn(Lf, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(If, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), b0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Ya(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Dm(r, t, void 0, e), e.currentTarget = null;
}
function Of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ya(o, s, a), i = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ya(o, s, a), i = u;
      }
    }
  }
  if (hi) throw e = ys, hi = !1, ys = null, e;
}
function J(e, t) {
  var n = t[$s];
  n === void 0 && (n = t[$s] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bf(t, e, 2, !1), n.add(r));
}
function Pl(e, t, n) {
  var r = 0;
  t && (r |= 4), bf(n, e, r, t);
}
var $o = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[$o]) {
    e[$o] = !0, Hd.forEach(function(n) {
      n !== "selectionchange" && (b0.has(n) || Pl(n, !1, e), Pl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$o] || (t[$o] = !0, Pl("selectionchange", !1, t));
  }
}
function bf(e, t, n, r) {
  switch (Sf(t)) {
    case 1:
      var o = qm;
      break;
    case 4:
      o = e0;
      break;
    default:
      o = vu;
  }
  n = o.bind(null, t, n, e), o = void 0, !ms || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var u = l.tag;
        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = vn(s), l === null) return;
        if (u = l.tag, u === 5 || u === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  uf(function() {
    var a = i, d = hu(n), p = [];
    e: {
      var m = Df.get(e);
      if (m !== void 0) {
        var v = xu, g = e;
        switch (e) {
          case "keypress":
            if (Yo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = m0;
            break;
          case "focusin":
            g = "focus", v = Cl;
            break;
          case "focusout":
            g = "blur", v = Cl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Cl;
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
            v = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = r0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = v0;
            break;
          case zf:
          case Ff:
          case Lf:
            v = l0;
            break;
          case If:
            v = x0;
            break;
          case "scroll":
            v = t0;
            break;
          case "wheel":
            v = S0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = u0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Da;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, f !== null && (w = Qr(c, f), w != null && x.push(qr(c, w, h)))), k) break;
          c = c.return;
        }
        0 < x.length && (m = new v(m, g, null, n, d), p.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== ps && (g = n.relatedTarget || n.fromElement) && (vn(g) || g[Rt])) break e;
        if ((v || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? vn(g) : null, g !== null && (k = jn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (x = La, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Da, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), k = v == null ? m : bn(v), h = g == null ? m : bn(g), m = new x(w, c + "leave", v, n, d), m.target = k, m.relatedTarget = h, w = null, vn(d) === a && (x = new x(f, c + "enter", g, n, d), x.target = h, x.relatedTarget = k, w = x), k = w, v && g) t: {
            for (x = v, f = g, c = 0, h = x; h; h = Rn(h)) c++;
            for (h = 0, w = f; w; w = Rn(w)) h++;
            for (; 0 < c - h; ) x = Rn(x), c--;
            for (; 0 < h - c; ) f = Rn(f), h--;
            for (; c--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Rn(x), f = Rn(f);
            }
            x = null;
          }
          else x = null;
          v !== null && Xa(p, m, v, x, !1), g !== null && k !== null && Xa(p, k, g, x, !0);
        }
      }
      e: {
        if (m = a ? bn(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var S = P0;
        else if (Aa(m)) if (Nf) S = z0;
        else {
          S = j0;
          var _ = M0;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = R0);
        if (S && (S = S(e, a))) {
          Tf(p, S, n, d);
          break e;
        }
        _ && _(e, m, a), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && us(m, "number", m.value);
      }
      switch (_ = a ? bn(a) : window, e) {
        case "focusin":
          (Aa(_) || _.contentEditable === "true") && (Dn = _, xs = a, Dr = null);
          break;
        case "focusout":
          Dr = xs = Dn = null;
          break;
        case "mousedown":
          ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ks = !1, Ha(p, n, d);
          break;
        case "selectionchange":
          if (I0) break;
        case "keydown":
        case "keyup":
          Ha(p, n, d);
      }
      var E;
      if (Su) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else In ? Ef(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (_f && n.locale !== "ko" && (In || T !== "onCompositionStart" ? T === "onCompositionEnd" && In && (E = Cf()) : (Ht = d, wu = "value" in Ht ? Ht.value : Ht.textContent, In = !0)), _ = wi(a, T), 0 < _.length && (T = new Ia(T, e, null, n, d), p.push({ event: T, listeners: _ }), E ? T.data = E : (E = $f(n), E !== null && (T.data = E)))), (E = _0 ? E0(e, n) : $0(e, n)) && (a = wi(a, "onBeforeInput"), 0 < a.length && (d = new Ia("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: a }), d.data = E));
    }
    Of(p, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Qr(e, n), i != null && r.unshift(qr(e, i, o)), i = Qr(e, t), i != null && r.push(qr(e, i, o))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Qr(n, i), u != null && l.unshift(qr(n, u, s))) : o || (u = Qr(n, i), u != null && l.push(qr(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var A0 = /\r\n?/g, U0 = /\u0000|\uFFFD/g;
function Ka(e) {
  return (typeof e == "string" ? e : "" + e).replace(A0, `
`).replace(U0, "");
}
function To(e, t, n) {
  if (t = Ka(t), Ka(e) !== t && n) throw Error(C(425));
}
function xi() {
}
var Ss = null, Cs = null;
function _s(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Es = typeof setTimeout == "function" ? setTimeout : void 0, W0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ga = typeof Promise == "function" ? Promise : void 0, V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ga < "u" ? function(e) {
  return Ga.resolve(null).then(e).catch(B0);
} : Es;
function B0(e) {
  setTimeout(function() {
    throw e;
  });
}
function jl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Kr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Kr(t);
}
function Jt(e) {
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
function Za(e) {
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
var sr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + sr, eo = "__reactProps$" + sr, Rt = "__reactContainer$" + sr, $s = "__reactEvents$" + sr, H0 = "__reactListeners$" + sr, Q0 = "__reactHandles$" + sr;
function vn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Rt] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Za(e); e !== null; ) {
        if (n = e[kt]) return n;
        e = Za(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function mo(e) {
  return e = e[kt] || e[Rt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Gi(e) {
  return e[eo] || null;
}
var Ts = [], An = -1;
function un(e) {
  return { current: e };
}
function ee(e) {
  0 > An || (e.current = Ts[An], Ts[An] = null, An--);
}
function G(e, t) {
  An++, Ts[An] = e.current, e.current = t;
}
var on = {}, Ce = un(on), Ie = un(!1), En = on;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function ki() {
  ee(Ie), ee(Ce);
}
function Ja(e, t, n) {
  if (Ce.current !== on) throw Error(C(168));
  G(Ce, t), G(Ie, n);
}
function Af(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Mm(e) || "Unknown", o));
  return ie({}, n, r);
}
function Si(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, En = Ce.current, G(Ce, e), G(Ie, Ie.current), !0;
}
function qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = Af(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, ee(Ie), ee(Ce), G(Ce, e)) : ee(Ie), G(Ie, n);
}
var Tt = null, Zi = !1, Rl = !1;
function Uf(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function Y0(e) {
  Zi = !0, Uf(e);
}
function an() {
  if (!Rl && Tt !== null) {
    Rl = !0;
    var e = 0, t = Q;
    try {
      var n = Tt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Tt = null, Zi = !1;
    } catch (o) {
      throw Tt !== null && (Tt = Tt.slice(e + 1)), ff(mu, an), o;
    } finally {
      Q = t, Rl = !1;
    }
  }
  return null;
}
var Un = [], Wn = 0, Ci = null, _i = 0, tt = [], nt = 0, $n = null, Nt = 1, Pt = "";
function fn(e, t) {
  Un[Wn++] = _i, Un[Wn++] = Ci, Ci = e, _i = t;
}
function Wf(e, t, n) {
  tt[nt++] = Nt, tt[nt++] = Pt, tt[nt++] = $n, $n = e;
  var r = Nt;
  e = Pt;
  var o = 32 - pt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - pt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Nt = 1 << 32 - pt(t) + o | n << o | r, Pt = i + e;
  } else Nt = 1 << i | n << o | r, Pt = e;
}
function _u(e) {
  e.return !== null && (fn(e, 1), Wf(e, 1, 0));
}
function Eu(e) {
  for (; e === Ci; ) Ci = Un[--Wn], Un[Wn] = null, _i = Un[--Wn], Un[Wn] = null;
  for (; e === $n; ) $n = tt[--nt], tt[nt] = null, Pt = tt[--nt], tt[nt] = null, Nt = tt[--nt], tt[nt] = null;
}
var Ge = null, Ke = null, ne = !1, dt = null;
function Vf(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ke = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ke = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = $n !== null ? { id: Nt, overflow: Pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ke = null, !0) : !1;
    default:
      return !1;
  }
}
function Ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ps(e) {
  if (ne) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (Ns(e)) throw Error(C(418));
        t = Jt(n.nextSibling);
        var r = Ge;
        t && ec(e, t) ? Vf(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Ge = e);
      }
    } else {
      if (Ns(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, ne = !1, Ge = e;
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ge = e;
}
function No(e) {
  if (e !== Ge) return !1;
  if (!ne) return tc(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_s(e.type, e.memoizedProps)), t && (t = Ke)) {
    if (Ns(e)) throw Bf(), Error(C(418));
    for (; t; ) Vf(e, t), t = Jt(t.nextSibling);
  }
  if (tc(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ge ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Bf() {
  for (var e = Ke; e; ) e = Jt(e.nextSibling);
}
function er() {
  Ke = Ge = null, ne = !1;
}
function $u(e) {
  dt === null ? dt = [e] : dt.push(e);
}
var X0 = Dt.ReactCurrentBatchConfig;
function vr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Po(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function Hf(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function o(f, c) {
    return f = nn(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, h, w) {
    return c === null || c.tag !== 6 ? (c = bl(h, f.mode, w), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function u(f, c, h, w) {
    var S = h.type;
    return S === Ln ? d(f, c, h.props.children, w, h.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ut && nc(S) === c.type) ? (w = o(c, h.props), w.ref = vr(f, c, h), w.return = f, w) : (w = ei(h.type, h.key, h.props, null, f.mode, w), w.ref = vr(f, c, h), w.return = f, w);
  }
  function a(f, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Al(h, f.mode, w), c.return = f, c) : (c = o(c, h.children || []), c.return = f, c);
  }
  function d(f, c, h, w, S) {
    return c === null || c.tag !== 7 ? (c = _n(h, f.mode, w, S), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function p(f, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = bl("" + c, f.mode, h), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vo:
          return h = ei(c.type, c.key, c.props, null, f.mode, h), h.ref = vr(f, null, c), h.return = f, h;
        case Fn:
          return c = Al(c, f.mode, h), c.return = f, c;
        case Ut:
          var w = c._init;
          return p(f, w(c._payload), h);
      }
      if ($r(c) || pr(c)) return c = _n(c, f.mode, h, null), c.return = f, c;
      Po(f, c);
    }
    return null;
  }
  function m(f, c, h, w) {
    var S = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : s(f, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vo:
          return h.key === S ? u(f, c, h, w) : null;
        case Fn:
          return h.key === S ? a(f, c, h, w) : null;
        case Ut:
          return S = h._init, m(
            f,
            c,
            S(h._payload),
            w
          );
      }
      if ($r(h) || pr(h)) return S !== null ? null : d(f, c, h, w, null);
      Po(f, h);
    }
    return null;
  }
  function v(f, c, h, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(h) || null, s(c, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vo:
          return f = f.get(w.key === null ? h : w.key) || null, u(c, f, w, S);
        case Fn:
          return f = f.get(w.key === null ? h : w.key) || null, a(c, f, w, S);
        case Ut:
          var _ = w._init;
          return v(f, c, h, _(w._payload), S);
      }
      if ($r(w) || pr(w)) return f = f.get(h) || null, d(c, f, w, S, null);
      Po(c, w);
    }
    return null;
  }
  function g(f, c, h, w) {
    for (var S = null, _ = null, E = c, T = c = 0, U = null; E !== null && T < h.length; T++) {
      E.index > T ? (U = E, E = null) : U = E.sibling;
      var z = m(f, E, h[T], w);
      if (z === null) {
        E === null && (E = U);
        break;
      }
      e && E && z.alternate === null && t(f, E), c = i(z, c, T), _ === null ? S = z : _.sibling = z, _ = z, E = U;
    }
    if (T === h.length) return n(f, E), ne && fn(f, T), S;
    if (E === null) {
      for (; T < h.length; T++) E = p(f, h[T], w), E !== null && (c = i(E, c, T), _ === null ? S = E : _.sibling = E, _ = E);
      return ne && fn(f, T), S;
    }
    for (E = r(f, E); T < h.length; T++) U = v(E, f, T, h[T], w), U !== null && (e && U.alternate !== null && E.delete(U.key === null ? T : U.key), c = i(U, c, T), _ === null ? S = U : _.sibling = U, _ = U);
    return e && E.forEach(function(Y) {
      return t(f, Y);
    }), ne && fn(f, T), S;
  }
  function x(f, c, h, w) {
    var S = pr(h);
    if (typeof S != "function") throw Error(C(150));
    if (h = S.call(h), h == null) throw Error(C(151));
    for (var _ = S = null, E = c, T = c = 0, U = null, z = h.next(); E !== null && !z.done; T++, z = h.next()) {
      E.index > T ? (U = E, E = null) : U = E.sibling;
      var Y = m(f, E, z.value, w);
      if (Y === null) {
        E === null && (E = U);
        break;
      }
      e && E && Y.alternate === null && t(f, E), c = i(Y, c, T), _ === null ? S = Y : _.sibling = Y, _ = Y, E = U;
    }
    if (z.done) return n(
      f,
      E
    ), ne && fn(f, T), S;
    if (E === null) {
      for (; !z.done; T++, z = h.next()) z = p(f, z.value, w), z !== null && (c = i(z, c, T), _ === null ? S = z : _.sibling = z, _ = z);
      return ne && fn(f, T), S;
    }
    for (E = r(f, E); !z.done; T++, z = h.next()) z = v(E, f, T, z.value, w), z !== null && (e && z.alternate !== null && E.delete(z.key === null ? T : z.key), c = i(z, c, T), _ === null ? S = z : _.sibling = z, _ = z);
    return e && E.forEach(function(H) {
      return t(f, H);
    }), ne && fn(f, T), S;
  }
  function k(f, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Ln && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vo:
          e: {
            for (var S = h.key, _ = c; _ !== null; ) {
              if (_.key === S) {
                if (S = h.type, S === Ln) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = o(_, h.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ut && nc(S) === _.type) {
                  n(f, _.sibling), c = o(_, h.props), c.ref = vr(f, _, h), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            h.type === Ln ? (c = _n(h.props.children, f.mode, w, h.key), c.return = f, f = c) : (w = ei(h.type, h.key, h.props, null, f.mode, w), w.ref = vr(f, c, h), w.return = f, f = w);
          }
          return l(f);
        case Fn:
          e: {
            for (_ = h.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(f, c.sibling), c = o(c, h.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Al(h, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case Ut:
          return _ = h._init, k(f, c, _(h._payload), w);
      }
      if ($r(h)) return g(f, c, h, w);
      if (pr(h)) return x(f, c, h, w);
      Po(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, h), c.return = f, f = c) : (n(f, c), c = bl(h, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return k;
}
var tr = Hf(!0), Qf = Hf(!1), Ei = un(null), $i = null, Vn = null, Tu = null;
function Nu() {
  Tu = Vn = $i = null;
}
function Pu(e) {
  var t = Ei.current;
  ee(Ei), e._currentValue = t;
}
function Ms(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gn(e, t) {
  $i = e, Tu = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
    if ($i === null) throw Error(C(308));
    Vn = e, $i.dependencies = { lanes: 0, firstContext: e };
  } else Vn = Vn.next = e;
  return t;
}
var wn = null;
function Mu(e) {
  wn === null ? wn = [e] : wn.push(e);
}
function Yf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Mu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, zt(e, r);
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Wt = !1;
function ju(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Xf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, B & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, zt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Mu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, zt(e, n);
}
function Xo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yu(e, n);
  }
}
function rc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ti(e, t, n, r) {
  var o = e.updateQueue;
  Wt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, l === null ? i = a : l.next = a, l = u;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== l && (s === null ? d.firstBaseUpdate = a : s.next = a, d.lastBaseUpdate = u));
  }
  if (i !== null) {
    var p = o.baseState;
    l = 0, d = a = u = null, s = i;
    do {
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, x = s;
          switch (m = t, v = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                p = g.call(v, p, m);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, m = typeof g == "function" ? g.call(v, p, m) : g, m == null) break e;
              p = ie({}, p, m);
              break e;
            case 2:
              Wt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (a = d = v, u = p) : d = d.next = v, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Nn |= l, e.lanes = l, e.memoizedState = p;
  }
}
function oc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(C(191, o));
      o.call(r);
    }
  }
}
var yo = {}, Ct = un(yo), to = un(yo), no = un(yo);
function xn(e) {
  if (e === yo) throw Error(C(174));
  return e;
}
function Ru(e, t) {
  switch (G(no, t), G(to, e), G(Ct, yo), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cs(t, e);
  }
  ee(Ct), G(Ct, t);
}
function nr() {
  ee(Ct), ee(to), ee(no);
}
function Kf(e) {
  xn(no.current);
  var t = xn(Ct.current), n = cs(t, e.type);
  t !== n && (G(to, e), G(Ct, n));
}
function zu(e) {
  to.current === e && (ee(Ct), ee(to));
}
var re = un(0);
function Ni(e) {
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
var zl = [];
function Fu() {
  for (var e = 0; e < zl.length; e++) zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var Ko = Dt.ReactCurrentDispatcher, Fl = Dt.ReactCurrentBatchConfig, Tn = 0, oe = null, ae = null, de = null, Pi = !1, Or = !1, ro = 0, K0 = 0;
function xe() {
  throw Error(C(321));
}
function Lu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, o, i) {
  if (Tn = i, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? q0 : ey, e = n(r, o), Or) {
    i = 0;
    do {
      if (Or = !1, ro = 0, 25 <= i) throw Error(C(301));
      i += 1, de = ae = null, t.updateQueue = null, Ko.current = ty, e = n(r, o);
    } while (Or);
  }
  if (Ko.current = Mi, t = ae !== null && ae.next !== null, Tn = 0, de = ae = oe = null, Pi = !1, t) throw Error(C(300));
  return e;
}
function Du() {
  var e = ro !== 0;
  return ro = 0, e;
}
function xt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? oe.memoizedState = de = e : de = de.next = e, de;
}
function lt() {
  if (ae === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? oe.memoizedState : de.next;
  if (t !== null) de = t, ae = e;
  else {
    if (e === null) throw Error(C(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, de === null ? oe.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function oo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ll(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ae, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, u = null, a = i;
    do {
      var d = a.lane;
      if ((Tn & d) === d) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, l = r) : u = u.next = p, oe.lanes |= d, Nn |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, mt(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, oe.lanes |= i, Nn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Il(e) {
  var t = lt(), n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    mt(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Gf() {
}
function Zf(e, t) {
  var n = oe, r = lt(), o = t(), i = !mt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Le = !0), r = r.queue, Ou(ep.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, io(9, qf.bind(null, n, r, o, t), void 0, null), fe === null) throw Error(C(349));
    Tn & 30 || Jf(n, t, o);
  }
  return o;
}
function Jf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, tp(t) && np(e);
}
function ep(e, t, n) {
  return n(function() {
    tp(t) && np(e);
  });
}
function tp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function np(e) {
  var t = zt(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function ic(e) {
  var t = xt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: oo, lastRenderedState: e }, t.queue = e, e = e.dispatch = J0.bind(null, oe, e), [t.memoizedState, e];
}
function io(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = oe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, oe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function rp() {
  return lt().memoizedState;
}
function Go(e, t, n, r) {
  var o = xt();
  oe.flags |= e, o.memoizedState = io(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ji(e, t, n, r) {
  var o = lt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (i = l.destroy, r !== null && Lu(r, l.deps)) {
      o.memoizedState = io(t, n, i, r);
      return;
    }
  }
  oe.flags |= e, o.memoizedState = io(1 | t, n, i, r);
}
function lc(e, t) {
  return Go(8390656, 8, e, t);
}
function Ou(e, t) {
  return Ji(2048, 8, e, t);
}
function op(e, t) {
  return Ji(4, 2, e, t);
}
function ip(e, t) {
  return Ji(4, 4, e, t);
}
function lp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function sp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ji(4, 4, lp.bind(null, t, e), n);
}
function bu() {
}
function up(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ap(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function cp(e, t, n) {
  return Tn & 21 ? (mt(n, t) || (n = mf(), oe.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
}
function G0(e, t) {
  var n = Q;
  Q = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Fl.transition;
  Fl.transition = {};
  try {
    e(!1), t();
  } finally {
    Q = n, Fl.transition = r;
  }
}
function dp() {
  return lt().memoizedState;
}
function Z0(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, fp(e)) pp(t, n);
  else if (n = Yf(e, t, n, r), n !== null) {
    var o = Te();
    ht(n, e, r, o), hp(n, t, r);
  }
}
function J0(e, t, n) {
  var r = tn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fp(e)) pp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, mt(s, l)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Mu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Yf(e, t, o, r), n !== null && (o = Te(), ht(n, e, r, o), hp(n, t, r));
  }
}
function fp(e) {
  var t = e.alternate;
  return e === oe || t !== null && t === oe;
}
function pp(e, t) {
  Or = Pi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yu(e, n);
  }
}
var Mi = { readContext: it, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, q0 = { readContext: it, useCallback: function(e, t) {
  return xt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: lc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(
    4194308,
    4,
    lp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Go(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Go(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = xt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = xt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Z0.bind(null, oe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = xt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ic, useDebugValue: bu, useDeferredValue: function(e) {
  return xt().memoizedState = e;
}, useTransition: function() {
  var e = ic(!1), t = e[0];
  return e = G0.bind(null, e[1]), xt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = oe, o = xt();
  if (ne) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(C(349));
    Tn & 30 || Jf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, lc(ep.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, io(9, qf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = xt(), t = fe.identifierPrefix;
  if (ne) {
    var n = Pt, r = Nt;
    n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ro++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = K0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, ey = {
  readContext: it,
  useCallback: up,
  useContext: it,
  useEffect: Ou,
  useImperativeHandle: sp,
  useInsertionEffect: op,
  useLayoutEffect: ip,
  useMemo: ap,
  useReducer: Ll,
  useRef: rp,
  useState: function() {
    return Ll(oo);
  },
  useDebugValue: bu,
  useDeferredValue: function(e) {
    var t = lt();
    return cp(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = Ll(oo)[0], t = lt().memoizedState;
    return [e, t];
  },
  useMutableSource: Gf,
  useSyncExternalStore: Zf,
  useId: dp,
  unstable_isNewReconciler: !1
}, ty = { readContext: it, useCallback: up, useContext: it, useEffect: Ou, useImperativeHandle: sp, useInsertionEffect: op, useLayoutEffect: ip, useMemo: ap, useReducer: Il, useRef: rp, useState: function() {
  return Il(oo);
}, useDebugValue: bu, useDeferredValue: function(e) {
  var t = lt();
  return ae === null ? t.memoizedState = e : cp(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = Il(oo)[0], t = lt().memoizedState;
  return [e, t];
}, useMutableSource: Gf, useSyncExternalStore: Zf, useId: dp, unstable_isNewReconciler: !1 };
function at(e, t) {
  if (e && e.defaultProps) {
    t = ie({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function js(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ie({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qi = { isMounted: function(e) {
  return (e = e._reactInternals) ? jn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), o = tn(e), i = Mt(r, o);
  i.payload = t, n != null && (i.callback = n), t = qt(e, i, o), t !== null && (ht(t, e, o, r), Xo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Te(), o = tn(e), i = Mt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qt(e, i, o), t !== null && (ht(t, e, o, r), Xo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Te(), r = tn(e), o = Mt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = qt(e, o, r), t !== null && (ht(t, e, r, n), Xo(t, e, r));
} };
function sc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(o, i) : !0;
}
function mp(e, t, n) {
  var r = !1, o = on, i = t.contextType;
  return typeof i == "object" && i !== null ? i = it(i) : (o = De(t) ? En : Ce.current, r = t.contextTypes, i = (r = r != null) ? qn(e, o) : on), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function uc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qi.enqueueReplaceState(t, t.state, null);
}
function Rs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ju(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = it(i) : (i = De(t) ? En : Ce.current, o.context = qn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (js(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qi.enqueueReplaceState(o, o.state, null), Ti(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Pm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ny = typeof WeakMap == "function" ? WeakMap : Map;
function yp(e, t, n) {
  n = Mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ri || (Ri = !0, Vs = r), zs(e, t);
  }, n;
}
function gp(e, t, n) {
  n = Mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      zs(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    zs(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ny();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = yy.bind(null, e, t, n), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
}
var ry = Dt.ReactCurrentOwner, Le = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Qf(t, null, n, r) : tr(t, e.child, n, r);
}
function fc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Gn(t, o), r = Iu(e, t, n, r, i, o), n = Du(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (ne && n && _u(t), t.flags |= 1, Ee(e, t, r, o), t.child);
}
function pc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Yu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, vp(e, t, i, r, o)) : (e = ei(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zr, n(l, r) && e.ref === t.ref) return Ft(e, t, o);
  }
  return t.flags |= 1, e = nn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zr(i, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Le = !0);
    else return t.lanes = e.lanes, Ft(e, t, o);
  }
  return Fs(e, t, n, r, o);
}
function wp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(Hn, Ve), Ve |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, G(Hn, Ve), Ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, G(Hn, Ve), Ve |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, G(Hn, Ve), Ve |= r;
  return Ee(e, t, o, n), t.child;
}
function xp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Fs(e, t, n, r, o) {
  var i = De(n) ? En : Ce.current;
  return i = qn(t, i), Gn(t, o), n = Iu(e, t, n, r, i, o), r = Du(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (ne && r && _u(t), t.flags |= 1, Ee(e, t, n, o), t.child);
}
function hc(e, t, n, r, o) {
  if (De(n)) {
    var i = !0;
    Si(t);
  } else i = !1;
  if (Gn(t, o), t.stateNode === null) Zo(e, t), mp(t, n, r), Rs(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = it(a) : (a = De(n) ? En : Ce.current, a = qn(t, a));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && uc(t, l, r, a), Wt = !1;
    var m = t.memoizedState;
    l.state = m, Ti(t, r, l, o), u = t.memoizedState, s !== r || m !== u || Ie.current || Wt ? (typeof d == "function" && (js(t, n, d, r), u = t.memoizedState), (s = Wt || sc(t, n, s, r, m, u, a)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Xf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : at(t.type, s), l.props = a, p = t.pendingProps, m = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = it(u) : (u = De(n) ? En : Ce.current, u = qn(t, u));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== p || m !== u) && uc(t, l, r, u), Wt = !1, m = t.memoizedState, l.state = m, Ti(t, r, l, o);
    var g = t.memoizedState;
    s !== p || m !== g || Ie.current || Wt ? (typeof v == "function" && (js(t, n, v, r), g = t.memoizedState), (a = Wt || sc(t, n, a, r, m, g, u) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ls(e, t, n, r, i, o);
}
function Ls(e, t, n, r, o, i) {
  xp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && qa(t, n, !1), Ft(e, t, i);
  r = t.stateNode, ry.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = tr(t, e.child, null, i), t.child = tr(t, null, s, i)) : Ee(e, t, s, i), t.memoizedState = r.state, o && qa(t, n, !0), t.child;
}
function kp(e) {
  var t = e.stateNode;
  t.pendingContext ? Ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ja(e, t.context, !1), Ru(e, t.containerInfo);
}
function mc(e, t, n, r, o) {
  return er(), $u(o), t.flags |= 256, Ee(e, t, n, r), t.child;
}
var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sp(e, t, n) {
  var r = t.pendingProps, o = re.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), G(re, o & 1), e === null)
    return Ps(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = nl(l, r, 0, null), e = _n(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ds(n), t.memoizedState = Is, e) : Au(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return oy(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = nn(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = nn(s, i) : (i = _n(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Ds(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Is, r;
  }
  return i = e.child, e = i.sibling, r = nn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Au(e, t) {
  return t = nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mo(e, t, n, r) {
  return r !== null && $u(r), tr(t, e.child, null, n), e = Au(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function oy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Dl(Error(C(422))), Mo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = nl({ mode: "visible", children: r.children }, o, 0, null), i = _n(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && tr(t, e.child, null, l), t.child.memoizedState = Ds(l), t.memoizedState = Is, i);
  if (!(t.mode & 1)) return Mo(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(C(419)), r = Dl(i, r, void 0), Mo(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Le || s) {
    if (r = fe, r !== null) {
      switch (l & -l) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, zt(e, o), ht(r, e, o, -1));
    }
    return Qu(), r = Dl(Error(C(421))), Mo(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ke = Jt(o.nextSibling), Ge = t, ne = !0, dt = null, e !== null && (tt[nt++] = Nt, tt[nt++] = Pt, tt[nt++] = $n, Nt = e.id, Pt = e.overflow, $n = t), t = Au(t, r.children), t.flags |= 4096, t);
}
function yc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ms(e.return, t, n);
}
function Ol(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Cp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ee(e, t, r.children, n), r = re.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
      else if (e.tag === 19) yc(e, n, t);
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
  if (G(re, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ni(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ol(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ni(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ol(t, !0, n, null, i);
      break;
    case "together":
      Ol(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Zo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ft(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function iy(e, t, n) {
  switch (t.tag) {
    case 3:
      kp(t), er();
      break;
    case 5:
      Kf(t);
      break;
    case 1:
      De(t.type) && Si(t);
      break;
    case 4:
      Ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      G(Ei, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (G(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sp(e, t, n) : (G(re, re.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
      G(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Cp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), G(re, re.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, wp(e, t, n);
  }
  return Ft(e, t, n);
}
var _p, Os, Ep, $p;
_p = function(e, t) {
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
Os = function() {
};
Ep = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, xn(Ct.current);
    var i = null;
    switch (n) {
      case "input":
        o = ls(e, o), r = ls(e, r), i = [];
        break;
      case "select":
        o = ie({}, o, { value: void 0 }), r = ie({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = as(e, o), r = as(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xi);
    }
    ds(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var s = o[a];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Br.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Br.hasOwnProperty(a) ? (u != null && a === "onScroll" && J("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
$p = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!ne) switch (e.tailMode) {
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
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ly(e, t, n) {
  var r = t.pendingProps;
  switch (Eu(t), t.tag) {
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
      return ke(t), null;
    case 1:
      return De(t.type) && ki(), ke(t), null;
    case 3:
      return r = t.stateNode, nr(), ee(Ie), ee(Ce), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (No(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Qs(dt), dt = null))), Os(e, t), ke(t), null;
    case 5:
      zu(t);
      var o = xn(no.current);
      if (n = t.type, e !== null && t.stateNode != null) Ep(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (e = xn(Ct.current), No(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[kt] = t, r[eo] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Nr.length; o++) J(Nr[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Ea(r, i), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r);
              break;
            case "textarea":
              Ta(r, i), J("invalid", r);
          }
          ds(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && To(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && To(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Br.hasOwnProperty(l) && s != null && l === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              wo(r), $a(r, i, !0);
              break;
            case "textarea":
              wo(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = xi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = qd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[kt] = t, e[eo] = r, _p(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = fs(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Nr.length; o++) J(Nr[o], e);
                o = r;
                break;
              case "source":
                J("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), o = r;
                break;
              case "details":
                J("toggle", e), o = r;
                break;
              case "input":
                Ea(e, r), o = ls(e, r), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ie({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                Ta(e, r), o = as(e, r), J("invalid", e);
                break;
              default:
                o = r;
            }
            ds(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? nf(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ef(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hr(e, u) : typeof u == "number" && Hr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Br.hasOwnProperty(i) ? u != null && i === "onScroll" && J("scroll", e) : u != null && cu(e, i, u, l));
            }
            switch (n) {
              case "input":
                wo(e), $a(e, r, !1);
                break;
              case "textarea":
                wo(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Qn(e, !!r.multiple, i, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xi);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) $p(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (n = xn(no.current), xn(Ct.current), No(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (i = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
            case 3:
              To(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && To(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return ke(t), null;
    case 13:
      if (ee(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && Ke !== null && t.mode & 1 && !(t.flags & 128)) Bf(), er(), t.flags |= 98560, i = !1;
        else if (i = No(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(C(317));
            i[kt] = t;
          } else er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), i = !1;
        } else dt !== null && (Qs(dt), dt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? ce === 0 && (ce = 3) : Qu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return nr(), Os(e, t), e === null && Jr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Pu(t.type._context), ke(t), null;
    case 17:
      return De(t.type) && ki(), ke(t), null;
    case 19:
      if (ee(re), i = t.memoizedState, i === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) wr(i, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ni(e), l !== null) {
            for (t.flags |= 128, wr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return G(re, re.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && se() > or && (t.flags |= 128, r = !0, wr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ni(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ne) return ke(t), null;
        } else 2 * se() - i.renderingStartTime > or && n !== 1073741824 && (t.flags |= 128, r = !0, wr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = se(), t.sibling = null, n = re.current, G(re, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Hu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ve & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function sy(e, t) {
  switch (Eu(t), t.tag) {
    case 1:
      return De(t.type) && ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return nr(), ee(Ie), ee(Ce), Fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zu(t), null;
    case 13:
      if (ee(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        er();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(re), null;
    case 4:
      return nr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jo = !1, Se = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function bs(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var gc = !1;
function ay(e, t) {
  if (Ss = gi, e = jf(), Cu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, u = -1, a = 0, d = 0, p = e, m = null;
        t: for (; ; ) {
          for (var v; p !== n || o !== 0 && p.nodeType !== 3 || (s = l + o), p !== i || r !== 0 && p.nodeType !== 3 || (u = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (v = p.firstChild) !== null; )
            m = p, p = v;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++a === o && (s = l), m === i && ++d === r && (u = l), (v = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = v;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cs = { focusedElem: e, selectionRange: n }, gi = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, k = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : at(t.type, x), k);
            f.__reactInternalSnapshotBeforeUpdate = c;
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
    } catch (w) {
      le(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return g = gc, gc = !1, g;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && bs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function el(e, t) {
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
function As(e) {
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
function Tp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Tp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[eo], delete t[$s], delete t[H0], delete t[Q0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Np(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Np(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
}
function Ws(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ws(e, t, n), e = e.sibling; e !== null; ) Ws(e, t, n), e = e.sibling;
}
var pe = null, ct = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), n = n.sibling;
}
function Pp(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function") try {
    St.onCommitFiberUnmount(Qi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Bn(n, t);
    case 6:
      var r = pe, o = ct;
      pe = null, Ot(e, t, n), pe = r, ct = o, pe !== null && (ct ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null && (ct ? (e = pe, n = n.stateNode, e.nodeType === 8 ? jl(e.parentNode, n) : e.nodeType === 1 && jl(e, n), Kr(e)) : jl(pe, n.stateNode));
      break;
    case 4:
      r = pe, o = ct, pe = n.stateNode.containerInfo, ct = !0, Ot(e, t, n), pe = r, ct = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && bs(n, t, l), o = o.next;
        } while (o !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (!Se && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        le(n, t, s);
      }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Ot(e, t, n), Se = r) : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uy()), t.forEach(function(r) {
      var o = vy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            pe = s.stateNode, ct = !1;
            break e;
          case 3:
            pe = s.stateNode.containerInfo, ct = !0;
            break e;
          case 4:
            pe = s.stateNode.containerInfo, ct = !0;
            break e;
        }
        s = s.return;
      }
      if (pe === null) throw Error(C(160));
      Pp(i, l, o), pe = null, ct = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      le(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Mp(t, e), t = t.sibling;
}
function Mp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ut(t, e), yt(e), r & 4) {
        try {
          br(3, e, e.return), el(3, e);
        } catch (x) {
          le(e, e.return, x);
        }
        try {
          br(5, e, e.return);
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 1:
      ut(t, e), yt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (ut(t, e), yt(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Hr(o, "");
        } catch (x) {
          le(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Zd(o, i), fs(s, l);
          var a = fs(s, i);
          for (l = 0; l < u.length; l += 2) {
            var d = u[l], p = u[l + 1];
            d === "style" ? nf(o, p) : d === "dangerouslySetInnerHTML" ? ef(o, p) : d === "children" ? Hr(o, p) : cu(o, d, p, a);
          }
          switch (s) {
            case "input":
              ss(o, i);
              break;
            case "textarea":
              Jd(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? Qn(o, !!i.multiple, v, !1) : m !== !!i.multiple && (i.defaultValue != null ? Qn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Qn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[eo] = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ut(t, e), yt(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ut(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Kr(t.containerInfo);
      } catch (x) {
        le(e, e.return, x);
      }
      break;
    case 4:
      ut(t, e), yt(e);
      break;
    case 13:
      ut(t, e), yt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Vu = se())), r & 4 && wc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || d, ut(t, e), Se = a) : ut(t, e), yt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (P = e, d = e.child; d !== null; ) {
          for (p = P = d; P !== null; ) {
            switch (m = P, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                br(4, m, m.return);
                break;
              case 1:
                Bn(m, m.return);
                var g = m.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (x) {
                    le(r, n, x);
                  }
                }
                break;
              case 5:
                Bn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  kc(p);
                  continue;
                }
            }
            v !== null ? (v.return = m, P = v) : kc(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = tf("display", l));
              } catch (x) {
                le(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (x) {
              le(e, e.return, x);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return;
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      ut(t, e), yt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      ut(
        t,
        e
      ), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Np(n)) {
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
          r.flags & 32 && (Hr(o, ""), r.flags &= -33);
          var i = vc(e);
          Ws(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = vc(e);
          Us(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      le(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cy(e, t, n) {
  P = e, jp(e);
}
function jp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || jo;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
        s = jo;
        var a = Se;
        if (jo = l, (Se = u) && !a) for (P = o; P !== null; ) l = P, u = l.child, l.tag === 22 && l.memoizedState !== null ? Sc(o) : u !== null ? (u.return = l, P = u) : Sc(o);
        for (; i !== null; ) P = i, jp(i), i = i.sibling;
        P = o, jo = s, Se = a;
      }
      xc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, P = i) : xc(e);
  }
}
function xc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || el(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && oc(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              oc(t, l, n);
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
                var d = a.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && Kr(p);
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
        Se || t.flags & 512 && As(t);
      } catch (m) {
        le(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function kc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Sc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (u) {
            le(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              le(t, o, u);
            }
          }
          var i = t.return;
          try {
            As(t);
          } catch (u) {
            le(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            As(t);
          } catch (u) {
            le(t, l, u);
          }
      }
    } catch (u) {
      le(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, P = s;
      break;
    }
    P = t.return;
  }
}
var dy = Math.ceil, ji = Dt.ReactCurrentDispatcher, Uu = Dt.ReactCurrentOwner, ot = Dt.ReactCurrentBatchConfig, B = 0, fe = null, ue = null, me = 0, Ve = 0, Hn = un(0), ce = 0, lo = null, Nn = 0, tl = 0, Wu = 0, Ar = null, Fe = null, Vu = 0, or = 1 / 0, $t = null, Ri = !1, Vs = null, en = null, Ro = !1, Qt = null, zi = 0, Ur = 0, Bs = null, Jo = -1, qo = 0;
function Te() {
  return B & 6 ? se() : Jo !== -1 ? Jo : Jo = se();
}
function tn(e) {
  return e.mode & 1 ? B & 2 && me !== 0 ? me & -me : X0.transition !== null ? (qo === 0 && (qo = mf()), qo) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Sf(e.type)), e) : 1;
}
function ht(e, t, n, r) {
  if (50 < Ur) throw Ur = 0, Bs = null, Error(C(185));
  po(e, n, r), (!(B & 2) || e !== fe) && (e === fe && (!(B & 2) && (tl |= n), ce === 4 && Bt(e, me)), Oe(e, r), n === 1 && B === 0 && !(t.mode & 1) && (or = se() + 500, Zi && an()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Xm(e, t);
  var r = yi(e, e === fe ? me : 0);
  if (r === 0) n !== null && ja(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ja(n), t === 1) e.tag === 0 ? Y0(Cc.bind(null, e)) : Uf(Cc.bind(null, e)), V0(function() {
      !(B & 6) && an();
    }), n = null;
    else {
      switch (yf(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = pf;
          break;
        case 16:
          n = mi;
          break;
        case 536870912:
          n = hf;
          break;
        default:
          n = mi;
      }
      n = bp(n, Rp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Rp(e, t) {
  if (Jo = -1, qo = 0, B & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = yi(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fi(e, r);
  else {
    t = r;
    var o = B;
    B |= 2;
    var i = Fp();
    (fe !== e || me !== t) && ($t = null, or = se() + 500, Cn(e, t));
    do
      try {
        hy();
        break;
      } catch (s) {
        zp(e, s);
      }
    while (!0);
    Nu(), ji.current = i, B = o, ue !== null ? t = 0 : (fe = null, me = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (o = gs(e), o !== 0 && (r = o, t = Hs(e, o))), t === 1) throw n = lo, Cn(e, 0), Bt(e, r), Oe(e, se()), n;
    if (t === 6) Bt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !fy(o) && (t = Fi(e, r), t === 2 && (i = gs(e), i !== 0 && (r = i, t = Hs(e, i))), t === 1)) throw n = lo, Cn(e, 0), Bt(e, r), Oe(e, se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          pn(e, Fe, $t);
          break;
        case 3:
          if (Bt(e, r), (r & 130023424) === r && (t = Vu + 500 - se(), 10 < t)) {
            if (yi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Te(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Es(pn.bind(null, e, Fe, $t), t);
            break;
          }
          pn(e, Fe, $t);
          break;
        case 4:
          if (Bt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - pt(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Es(pn.bind(null, e, Fe, $t), r);
            break;
          }
          pn(e, Fe, $t);
          break;
        case 5:
          pn(e, Fe, $t);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Oe(e, se()), e.callbackNode === n ? Rp.bind(null, e) : null;
}
function Hs(e, t) {
  var n = Ar;
  return e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256), e = Fi(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Qs(t)), e;
}
function Qs(e) {
  Fe === null ? Fe = e : Fe.push.apply(Fe, e);
}
function fy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!mt(i(), o)) return !1;
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
function Bt(e, t) {
  for (t &= ~Wu, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Cc(e) {
  if (B & 6) throw Error(C(327));
  Zn();
  var t = yi(e, 0);
  if (!(t & 1)) return Oe(e, se()), null;
  var n = Fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gs(e);
    r !== 0 && (t = r, n = Hs(e, r));
  }
  if (n === 1) throw n = lo, Cn(e, 0), Bt(e, t), Oe(e, se()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Fe, $t), Oe(e, se()), null;
}
function Bu(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    B = n, B === 0 && (or = se() + 500, Zi && an());
  }
}
function Pn(e) {
  Qt !== null && Qt.tag === 0 && !(B & 6) && Zn();
  var t = B;
  B |= 1;
  var n = ot.transition, r = Q;
  try {
    if (ot.transition = null, Q = 1, e) return e();
  } finally {
    Q = r, ot.transition = n, B = t, !(B & 6) && an();
  }
}
function Hu() {
  Ve = Hn.current, ee(Hn);
}
function Cn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, W0(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Eu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ki();
        break;
      case 3:
        nr(), ee(Ie), ee(Ce), Fu();
        break;
      case 5:
        zu(r);
        break;
      case 4:
        nr();
        break;
      case 13:
        ee(re);
        break;
      case 19:
        ee(re);
        break;
      case 10:
        Pu(r.type._context);
        break;
      case 22:
      case 23:
        Hu();
    }
    n = n.return;
  }
  if (fe = e, ue = e = nn(e.current, null), me = Ve = t, ce = 0, lo = null, Wu = tl = Nn = 0, Fe = Ar = null, wn !== null) {
    for (t = 0; t < wn.length; t++) if (n = wn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    wn = null;
  }
  return e;
}
function zp(e, t) {
  do {
    var n = ue;
    try {
      if (Nu(), Ko.current = Mi, Pi) {
        for (var r = oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Pi = !1;
      }
      if (Tn = 0, de = ae = oe = null, Or = !1, ro = 0, Uu.current = null, n === null || n.return === null) {
        ce = 1, lo = t, ue = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = me, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = s, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = cc(l);
          if (v !== null) {
            v.flags &= -257, dc(v, l, s, i, t), v.mode & 1 && ac(i, a, t), t = v, u = a;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ac(i, a, t), Qu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (ne && s.mode & 1) {
          var k = cc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), dc(k, l, s, i, t), $u(rr(u, s));
            break e;
          }
        }
        i = u = rr(u, s), ce !== 4 && (ce = 2), Ar === null ? Ar = [i] : Ar.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = yp(i, u, t);
              rc(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (en === null || !en.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = gp(i, s, t);
                rc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ip(n);
    } catch (S) {
      t = S, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fp() {
  var e = ji.current;
  return ji.current = Mi, e === null ? Mi : e;
}
function Qu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), fe === null || !(Nn & 268435455) && !(tl & 268435455) || Bt(fe, me);
}
function Fi(e, t) {
  var n = B;
  B |= 2;
  var r = Fp();
  (fe !== e || me !== t) && ($t = null, Cn(e, t));
  do
    try {
      py();
      break;
    } catch (o) {
      zp(e, o);
    }
  while (!0);
  if (Nu(), B = n, ji.current = r, ue !== null) throw Error(C(261));
  return fe = null, me = 0, ce;
}
function py() {
  for (; ue !== null; ) Lp(ue);
}
function hy() {
  for (; ue !== null && !bm(); ) Lp(ue);
}
function Lp(e) {
  var t = Op(e.alternate, e, Ve);
  e.memoizedProps = e.pendingProps, t === null ? Ip(e) : ue = t, Uu.current = null;
}
function Ip(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = sy(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, ue = null;
        return;
      }
    } else if (n = ly(n, t, Ve), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function pn(e, t, n) {
  var r = Q, o = ot.transition;
  try {
    ot.transition = null, Q = 1, my(e, t, n, r);
  } finally {
    ot.transition = o, Q = r;
  }
  return null;
}
function my(e, t, n, r) {
  do
    Zn();
  while (Qt !== null);
  if (B & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Km(e, i), e === fe && (ue = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ro || (Ro = !0, bp(mi, function() {
    return Zn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ot.transition, ot.transition = null;
    var l = Q;
    Q = 1;
    var s = B;
    B |= 4, Uu.current = null, ay(e, n), Mp(n, e), L0(Cs), gi = !!Ss, Cs = Ss = null, e.current = n, cy(n), Am(), B = s, Q = l, ot.transition = i;
  } else e.current = n;
  if (Ro && (Ro = !1, Qt = e, zi = o), i = e.pendingLanes, i === 0 && (en = null), Vm(n.stateNode), Oe(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ri) throw Ri = !1, e = Vs, Vs = null, e;
  return zi & 1 && e.tag !== 0 && Zn(), i = e.pendingLanes, i & 1 ? e === Bs ? Ur++ : (Ur = 0, Bs = e) : Ur = 0, an(), null;
}
function Zn() {
  if (Qt !== null) {
    var e = yf(zi), t = ot.transition, n = Q;
    try {
      if (ot.transition = null, Q = 16 > e ? 16 : e, Qt === null) var r = !1;
      else {
        if (e = Qt, Qt = null, zi = 0, B & 6) throw Error(C(331));
        var o = B;
        for (B |= 4, P = e.current; P !== null; ) {
          var i = P, l = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var d = P;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, P = p;
                  else for (; P !== null; ) {
                    d = P;
                    var m = d.sibling, v = d.return;
                    if (Tp(d), d === a) {
                      P = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, P = m;
                      break;
                    }
                    P = v;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var k = x.sibling;
                    x.sibling = null, x = k;
                  } while (x !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, P = l;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                br(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, P = f;
              break e;
            }
            P = i.return;
          }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          l = P;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, P = h;
          else e: for (l = c; P !== null; ) {
            if (s = P, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  el(9, s);
              }
            } catch (S) {
              le(s, s.return, S);
            }
            if (s === l) {
              P = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, P = w;
              break e;
            }
            P = s.return;
          }
        }
        if (B = o, an(), St && typeof St.onPostCommitFiberRoot == "function") try {
          St.onPostCommitFiberRoot(Qi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Q = n, ot.transition = t;
    }
  }
  return !1;
}
function _c(e, t, n) {
  t = rr(n, t), t = yp(e, t, 1), e = qt(e, t, 1), t = Te(), e !== null && (po(e, 1, t), Oe(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) _c(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      _c(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
        e = rr(n, e), e = gp(t, e, 1), t = qt(t, e, 1), e = Te(), t !== null && (po(t, 1, e), Oe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function yy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Te(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ce === 4 || ce === 3 && (me & 130023424) === me && 500 > se() - Vu ? Cn(e, 0) : Wu |= n), Oe(e, t);
}
function Dp(e, t) {
  t === 0 && (e.mode & 1 ? (t = So, So <<= 1, !(So & 130023424) && (So = 4194304)) : t = 1);
  var n = Te();
  e = zt(e, t), e !== null && (po(e, t, n), Oe(e, n));
}
function gy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dp(e, n);
}
function vy(e, t) {
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
  r !== null && r.delete(t), Dp(e, n);
}
var Op;
Op = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, iy(e, t, n);
    Le = !!(e.flags & 131072);
  }
  else Le = !1, ne && t.flags & 1048576 && Wf(t, _i, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zo(e, t), e = t.pendingProps;
      var o = qn(t, Ce.current);
      Gn(t, n), o = Iu(null, t, r, e, o, n);
      var i = Du();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (i = !0, Si(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ju(t), o.updater = qi, t.stateNode = o, o._reactInternals = t, Rs(t, r, e, n), t = Ls(null, t, r, !0, i, n)) : (t.tag = 0, ne && i && _u(t), Ee(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = xy(r), e = at(r, e), o) {
          case 0:
            t = Fs(null, t, r, e, n);
            break e;
          case 1:
            t = hc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = pc(null, t, r, at(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), Fs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), hc(e, t, r, o, n);
    case 3:
      e: {
        if (kp(t), e === null) throw Error(C(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Xf(e, t), Ti(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = rr(Error(C(423)), t), t = mc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = rr(Error(C(424)), t), t = mc(e, t, r, n, o);
          break e;
        } else for (Ke = Jt(t.stateNode.containerInfo.firstChild), Ge = t, ne = !0, dt = null, n = Qf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (er(), r === o) {
            t = Ft(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Kf(t), e === null && Ps(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, _s(r, o) ? l = null : i !== null && _s(r, i) && (t.flags |= 32), xp(e, t), Ee(e, t, l, n), t.child;
    case 6:
      return e === null && Ps(t), null;
    case 13:
      return Sp(e, t, n);
    case 4:
      return Ru(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : Ee(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), fc(e, t, r, o, n);
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, G(Ei, r._currentValue), r._currentValue = l, i !== null) if (mt(i.value, l)) {
          if (i.children === o.children && !Ie.current) {
            t = Ft(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Mt(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ms(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(C(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ms(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Ee(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Gn(t, n), o = it(o), r = r(o), t.flags |= 1, Ee(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = at(r, t.pendingProps), o = at(r.type, o), pc(e, t, r, o, n);
    case 15:
      return vp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), Zo(e, t), t.tag = 1, De(r) ? (e = !0, Si(t)) : e = !1, Gn(t, n), mp(t, r, o), Rs(t, r, o, n), Ls(null, t, r, !0, e, n);
    case 19:
      return Cp(e, t, n);
    case 22:
      return wp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function bp(e, t) {
  return ff(e, t);
}
function wy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new wy(e, t, n, r);
}
function Yu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function xy(e) {
  if (typeof e == "function") return Yu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fu) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ei(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Yu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ln:
      return _n(n.children, o, i, t);
    case du:
      l = 8, o |= 8;
      break;
    case ns:
      return e = rt(12, n, t, o | 2), e.elementType = ns, e.lanes = i, e;
    case rs:
      return e = rt(13, n, t, o), e.elementType = rs, e.lanes = i, e;
    case os:
      return e = rt(19, n, t, o), e.elementType = os, e.lanes = i, e;
    case Xd:
      return nl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Qd:
          l = 10;
          break e;
        case Yd:
          l = 9;
          break e;
        case fu:
          l = 11;
          break e;
        case pu:
          l = 14;
          break e;
        case Ut:
          l = 16, r = null;
          break e;
      }
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = rt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function _n(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function nl(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = Xd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bl(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function Al(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ky(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xl(0), this.expirationTimes = xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Xu(e, t, n, r, o, i, l, s, u) {
  return e = new ky(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(i), e;
}
function Sy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ap(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
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
    if (De(n)) return Af(e, n, t);
  }
  return t;
}
function Up(e, t, n, r, o, i, l, s, u) {
  return e = Xu(n, r, !0, e, o, i, l, s, u), e.context = Ap(null), n = e.current, r = Te(), o = tn(n), i = Mt(r, o), i.callback = t ?? null, qt(n, i, o), e.current.lanes = o, po(e, o, r), Oe(e, r), e;
}
function rl(e, t, n, r) {
  var o = t.current, i = Te(), l = tn(o);
  return n = Ap(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(o, t, l), e !== null && (ht(e, o, l, i), Xo(e, o, l)), l;
}
function Li(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ec(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ku(e, t) {
  Ec(e, t), (e = e.alternate) && Ec(e, t);
}
function Cy() {
  return null;
}
var Wp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gu(e) {
  this._internalRoot = e;
}
ol.prototype.render = Gu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = Gu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function() {
      rl(null, e, null, null);
    }), t[Rt] = null;
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++) ;
    Vt.splice(n, 0, e), n === 0 && kf(e);
  }
};
function Zu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function $c() {
}
function _y(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Li(l);
        i.call(a);
      };
    }
    var l = Up(t, r, e, 0, null, !1, !1, "", $c);
    return e._reactRootContainer = l, e[Rt] = l.current, Jr(e.nodeType === 8 ? e.parentNode : e), Pn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = Li(u);
      s.call(a);
    };
  }
  var u = Xu(e, 0, !1, null, null, !1, !1, "", $c);
  return e._reactRootContainer = u, e[Rt] = u.current, Jr(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
    rl(t, u, n, r);
  }), u;
}
function ll(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = Li(l);
        s.call(u);
      };
    }
    rl(t, l, e, o);
  } else l = _y(n, t, e, o, r);
  return Li(l);
}
gf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 && (yu(t, n | 1), Oe(t, se()), !(B & 6) && (or = se() + 500, an()));
      }
      break;
    case 13:
      Pn(function() {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Te();
          ht(r, e, 1, o);
        }
      }), Ku(e, 1);
  }
};
gu = function(e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Te();
      ht(t, e, 134217728, n);
    }
    Ku(e, 134217728);
  }
};
vf = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = zt(e, t);
    if (n !== null) {
      var r = Te();
      ht(n, e, t, r);
    }
    Ku(e, t);
  }
};
wf = function() {
  return Q;
};
xf = function(e, t) {
  var n = Q;
  try {
    return Q = e, t();
  } finally {
    Q = n;
  }
};
hs = function(e, t, n) {
  switch (t) {
    case "input":
      if (ss(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Gi(r);
            if (!o) throw Error(C(90));
            Gd(r), ss(r, o);
          }
        }
      }
      break;
    case "textarea":
      Jd(e, n);
      break;
    case "select":
      t = n.value, t != null && Qn(e, !!n.multiple, t, !1);
  }
};
lf = Bu;
sf = Pn;
var Ey = { usingClientEntryPoint: !1, Events: [mo, bn, Gi, rf, of, Bu] }, xr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, $y = { bundleType: xr.bundleType, version: xr.version, rendererPackageName: xr.rendererPackageName, rendererConfig: xr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = cf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xr.findFiberByHostInstance || Cy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zo.isDisabled && zo.supportsFiber) try {
    Qi = zo.inject($y), St = zo;
  } catch {
  }
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey;
Je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zu(t)) throw Error(C(200));
  return Sy(e, t, null, n);
};
Je.createRoot = function(e, t) {
  if (!Zu(e)) throw Error(C(299));
  var n = !1, r = "", o = Wp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Xu(e, 1, !1, null, null, n, !1, r, o), e[Rt] = t.current, Jr(e.nodeType === 8 ? e.parentNode : e), new Gu(t);
};
Je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = cf(t), e = e === null ? null : e.stateNode, e;
};
Je.flushSync = function(e) {
  return Pn(e);
};
Je.hydrate = function(e, t, n) {
  if (!il(t)) throw Error(C(200));
  return ll(null, e, t, !0, n);
};
Je.hydrateRoot = function(e, t, n) {
  if (!Zu(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Wp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Up(t, null, e, 1, n ?? null, o, !1, i, l), e[Rt] = t.current, Jr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new ol(t);
};
Je.render = function(e, t, n) {
  if (!il(t)) throw Error(C(200));
  return ll(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function(e) {
  if (!il(e)) throw Error(C(40));
  return e._reactRootContainer ? (Pn(function() {
    ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Rt] = null;
    });
  }), !0) : !1;
};
Je.unstable_batchedUpdates = Bu;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!il(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return ll(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function Vp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp);
    } catch (e) {
      console.error(e);
    }
}
Vp(), Wd.exports = Je;
var Bp = Wd.exports, Ju, Tc = Bp;
Ju = Tc.createRoot, Tc.hydrateRoot;
var Ty = Object.defineProperty, Ny = (e, t, n) => t in e ? Ty(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fo = (e, t, n) => Ny(e, typeof t != "symbol" ? t + "" : t, n);
const Py = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, My = {
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
}, jy = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function Ry(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Hp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const zy = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Hp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, Fy = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Ly = {
  stringify: (e) => e,
  parse: (e) => e
}, Ul = {
  string: Ly,
  number: Fy,
  boolean: Py,
  function: My,
  method: zy,
  json: jy
}, kr = Symbol.for("r2wc.render"), Lo = Symbol.for("r2wc.connected"), cn = Symbol.for("r2wc.context"), Ae = Symbol.for("r2wc.props");
function Iy(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const l = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, d = {}, p = {};
  for (const v of l) {
    u[v] = Array.isArray(t.props) ? "string" : t.props[v];
    const g = Ry(v);
    d[v] = g, p[g] = v;
  }
  for (const v of s)
    a[v] = Array.isArray(t.events) ? {} : t.events[v];
  class m extends HTMLElement {
    constructor() {
      super(), Fo(this, i, !0), Fo(this, o), Fo(this, r, {}), Fo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[Ae].container = this.container;
      for (const g of l) {
        const x = d[g], k = this.getAttribute(x), f = u[g], c = f ? Ul[f] : null;
        if (f === "method") {
          const h = Hp(x);
          Object.defineProperty(this[Ae].container, h, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Ae][h];
            },
            set(w) {
              this[Ae][h] = w, this[kr]();
            }
          }), this[Ae][g] = c.parse(k, x, this);
        }
        c != null && c.parse && k && (this[Ae][g] = c.parse(k, x, this));
      }
      for (const g of s)
        this[Ae][g] = (x) => {
          const k = g.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(k, { detail: x, ...a[g] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(p);
    }
    connectedCallback() {
      this[Lo] = !0, this[kr]();
    }
    disconnectedCallback() {
      this[Lo] = !1, this[cn] && n.unmount(this[cn]), delete this[cn];
    }
    attributeChangedCallback(g, x, k) {
      const f = p[g], c = u[f], h = c ? Ul[c] : null;
      f in u && h != null && h.parse && k && (this[Ae][f] = h.parse(k, g, this), this[kr]());
    }
    [(i = Lo, o = cn, r = Ae, kr)]() {
      this[Lo] && (this[cn] ? n.update(this[cn], this[Ae]) : this[cn] = n.mount(
        this.container,
        e,
        this[Ae]
      ));
    }
  }
  for (const v of l) {
    const g = d[v], x = u[v];
    Object.defineProperty(m.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Ae][v];
      },
      set(k) {
        this[Ae][v] = k;
        const f = x ? Ul[x] : null;
        if (f != null && f.stringify) {
          const c = f.stringify(k, g, this);
          this.getAttribute(g) !== c && this.setAttribute(g, c);
        } else
          this[kr]();
      }
    });
  }
  return m;
}
function Dy(e, t, n) {
  const r = Ju(e), o = Xe.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Oy({ root: e, ReactComponent: t }, n) {
  const r = Xe.createElement(t, n);
  e.render(r);
}
function by({ root: e }) {
  e.unmount();
}
function Ay(e, t = {}) {
  return Iy(e, t, { mount: Dy, update: Oy, unmount: by });
}
var Qp = { exports: {} }, sl = {};
var Uy = M, Wy = Symbol.for("react.element"), Vy = Symbol.for("react.fragment"), By = Object.prototype.hasOwnProperty, Hy = Uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yp(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) By.call(t, r) && !Qy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Wy, type: e, key: i, ref: l, props: o, _owner: Hy.current };
}
sl.Fragment = Vy;
sl.jsx = Yp;
sl.jsxs = Yp;
Qp.exports = sl;
var y = Qp.exports;
var Yy = {
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
const Xy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Z = (e, t) => {
  const n = M.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: s = "",
      children: u,
      ...a
    }, d) => M.createElement(
      "svg",
      {
        ref: d,
        ...Yy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${Xy(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([p, m]) => M.createElement(p, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Xp = Z("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Ky = Z("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Gy = Z("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Zy = Z("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Jy = Z("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const qy = Z("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Wl = Z("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const eg = Z("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const tg = Z("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Kp = Z("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const ng = Z("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const rg = Z("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const og = Z("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const ig = Z("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const lg = Z("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const sg = Z("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const Nc = Z("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const Pc = Z("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const ug = Z("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const ag = Z("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const cg = Z("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const dg = Z("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const fg = Z("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const pg = Z("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const hg = Z("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Gp = Z("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function mg({ isOpen: e, onClick: t, config: n }) {
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
      children: e ? /* @__PURE__ */ y.jsx(Gp, { className: "h-6 w-6" }) : /* @__PURE__ */ y.jsx(Kp, { className: "h-6 w-6" })
    }
  );
}
const Io = 43200, Mc = 1440, jc = Symbol.for("constructDateFrom");
function qu(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && jc in e ? e[jc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ln(e, t) {
  return qu(e, e);
}
let yg = {};
function gg() {
  return yg;
}
function Rc(e) {
  const t = ln(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ea(e, ...t) {
  const n = qu.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ti(e, t) {
  const n = +ln(e) - +ln(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function vg(e) {
  return qu(e, Date.now());
}
function wg(e, t, n) {
  const [r, o] = ea(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), l = r.getMonth() - o.getMonth();
  return i * 12 + l;
}
function xg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function kg(e, t) {
  return +ln(e) - +ln(t);
}
function Sg(e, t) {
  const n = ln(e);
  return n.setHours(23, 59, 59, 999), n;
}
function Cg(e, t) {
  const n = ln(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function _g(e, t) {
  const n = ln(e);
  return +Sg(n) == +Cg(n);
}
function Eg(e, t, n) {
  const [r, o, i] = ea(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), l = ti(o, i), s = Math.abs(
    wg(o, i)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
  let u = ti(o, i) === -l;
  _g(r) && s === 1 && ti(r, i) === 1 && (u = !1);
  const a = l * (s - +u);
  return a === 0 ? 0 : a;
}
function $g(e, t, n) {
  const r = kg(e, t) / 1e3;
  return xg(n == null ? void 0 : n.roundingMethod)(r);
}
const Tg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ng = (e, t, n) => {
  let r;
  const o = Tg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Vl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Pg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Mg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, jg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rg = {
  date: Vl({
    formats: Pg,
    defaultWidth: "full"
  }),
  time: Vl({
    formats: Mg,
    defaultWidth: "full"
  }),
  dateTime: Vl({
    formats: jg,
    defaultWidth: "full"
  })
}, zg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Fg = (e, t, n, r) => zg[e];
function Sr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : l;
      o = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const Lg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ig = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Dg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Og = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, bg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ag = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ug = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Wg = {
  ordinalNumber: Ug,
  era: Sr({
    values: Lg,
    defaultWidth: "wide"
  }),
  quarter: Sr({
    values: Ig,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Sr({
    values: Dg,
    defaultWidth: "wide"
  }),
  day: Sr({
    values: Og,
    defaultWidth: "wide"
  }),
  dayPeriod: Sr({
    values: bg,
    defaultWidth: "wide",
    formattingValues: Ag,
    defaultFormattingWidth: "wide"
  })
};
function Cr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const l = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Bg(s, (p) => p.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      Vg(s, (p) => p.test(l))
    );
    let a;
    a = e.valueCallback ? e.valueCallback(u) : u, a = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(a)
    ) : a;
    const d = t.slice(l.length);
    return { value: a, rest: d };
  };
}
function Vg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Bg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Hg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = t.slice(o.length);
    return { value: l, rest: s };
  };
}
const Qg = /^(\d+)(th|st|nd|rd)?/i, Yg = /\d+/i, Xg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Kg = {
  any: [/^b/i, /^(a|c)/i]
}, Gg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Zg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Jg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qg = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, e1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, t1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, n1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, r1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, o1 = {
  ordinalNumber: Hg({
    matchPattern: Qg,
    parsePattern: Yg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Cr({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Kg,
    defaultParseWidth: "any"
  }),
  quarter: Cr({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: Zg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Cr({
    matchPatterns: Jg,
    defaultMatchWidth: "wide",
    parsePatterns: qg,
    defaultParseWidth: "any"
  }),
  day: Cr({
    matchPatterns: e1,
    defaultMatchWidth: "wide",
    parsePatterns: t1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Cr({
    matchPatterns: n1,
    defaultMatchWidth: "any",
    parsePatterns: r1,
    defaultParseWidth: "any"
  })
}, i1 = {
  code: "en-US",
  formatDistance: Ng,
  formatLong: Rg,
  formatRelative: Fg,
  localize: Wg,
  match: o1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function l1(e, t, n) {
  const r = gg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? i1, i = 2520, l = ti(e, t);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: l
  }), [u, a] = ea(
    n == null ? void 0 : n.in,
    ...l > 0 ? [t, e] : [e, t]
  ), d = $g(a, u), p = (Rc(a) - Rc(u)) / 1e3, m = Math.round((d - p) / 60);
  let v;
  if (m < 2)
    return n != null && n.includeSeconds ? d < 5 ? o.formatDistance("lessThanXSeconds", 5, s) : d < 10 ? o.formatDistance("lessThanXSeconds", 10, s) : d < 20 ? o.formatDistance("lessThanXSeconds", 20, s) : d < 40 ? o.formatDistance("halfAMinute", 0, s) : d < 60 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", 1, s) : m === 0 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", m, s);
  if (m < 45)
    return o.formatDistance("xMinutes", m, s);
  if (m < 90)
    return o.formatDistance("aboutXHours", 1, s);
  if (m < Mc) {
    const g = Math.round(m / 60);
    return o.formatDistance("aboutXHours", g, s);
  } else {
    if (m < i)
      return o.formatDistance("xDays", 1, s);
    if (m < Io) {
      const g = Math.round(m / Mc);
      return o.formatDistance("xDays", g, s);
    } else if (m < Io * 2)
      return v = Math.round(m / Io), o.formatDistance("aboutXMonths", v, s);
  }
  if (v = Eg(a, u), v < 12) {
    const g = Math.round(m / Io);
    return o.formatDistance("xMonths", g, s);
  } else {
    const g = v % 12, x = Math.trunc(v / 12);
    return g < 3 ? o.formatDistance("aboutXYears", x, s) : g < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function s1(e, t) {
  return l1(e, vg(e), t);
}
function u1({
  onClose: e,
  onToggleMaximize: t,
  isMaximized: n,
  chatState: r,
  currentView: o,
  onBackToChat: i,
  onStartNewChat: l,
  onEndChat: s,
  onViewRecentChats: u,
  config: a
}) {
  var k;
  const [d, p] = M.useState(!1), m = () => {
    switch (o) {
      case "recent-chats":
        return "Recent chats";
      default:
        return a.name;
    }
  }, v = () => {
    var f;
    return ((f = r.operators) == null ? void 0 : f.length) > 0 ? "Online" : r.lastActive ? `Last seen ${s1(r.lastActive, {
      addSuffix: !0
    })}` : "Offline";
  }, g = o !== "chat", x = o === "chat";
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      style: { backgroundColor: a.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ y.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-3", children: [
          g && /* @__PURE__ */ y.jsx(
            "button",
            {
              onClick: i,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ y.jsx(Ky, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("h3", { className: "font-semibold text-lg", children: m() }),
            x && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ y.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${((k = r.operators) == null ? void 0 : k.length) > 0 ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ y.jsx("p", { className: "text-sm opacity-90", children: v() })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ y.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ y.jsx(
            "button",
            {
              onClick: () => p(!d),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ y.jsx(lg, { className: "h-4 w-4" })
            }
          ),
          d && /* @__PURE__ */ y.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ y.jsxs(
              "button",
              {
                onClick: () => {
                  l(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ y.jsx(ug, { className: "h-4 w-4" }),
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
                  /* @__PURE__ */ y.jsx(ag, { className: "h-4 w-4" }),
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
                  /* @__PURE__ */ y.jsx(ng, { className: "h-4 w-4" }),
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
                  /* @__PURE__ */ y.jsx(ig, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
                  /* @__PURE__ */ y.jsx(tg, { className: "h-4 w-4" }),
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
                  /* @__PURE__ */ y.jsx(Gp, { className: "h-4 w-4" }),
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
function a1({
  status: e,
  timestamp: t,
  onRetry: n
}) {
  const r = (i) => new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(new Date(i)), o = () => {
    switch (e) {
      case "sent":
        return /* @__PURE__ */ y.jsx(qy, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ y.jsx(Jy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ y.jsx(Xp, { className: "w-3 h-3 text-red-500" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-end gap-1 text-xs text-gray-500", children: [
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
function Zp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((d, p) => (d[p] = "", d), {}), [r, o] = M.useState(n), [i, l] = M.useState(!1), s = (d, p) => {
    o((m) => ({ ...m, [d]: p }));
  }, u = async (d) => {
    d.preventDefault(), l(!0);
    try {
      e(r);
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ y.jsx("div", { className: "py-2", children: /* @__PURE__ */ y.jsxs("form", { onSubmit: u, className: "flex flex-col gap-3 w-full", children: [
    /* @__PURE__ */ y.jsx("div", { className: "flex flex-col gap-3 w-full", children: (a = t.fields) == null ? void 0 : a.map((d) => /* @__PURE__ */ y.jsx(
      "input",
      {
        type: d === "email" ? "email" : "text",
        value: r[d],
        onChange: (p) => s(d, p.target.value),
        placeholder: `Your ${d}`,
        className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50",
        style: { "--tw-ring-color": t.color },
        disabled: i,
        required: !0
      },
      d
    )) }),
    /* @__PURE__ */ y.jsxs(
      "button",
      {
        type: "submit",
        className: "self-start px-3 py-2 text-sm bg-white text-black rounded-lg border border-gray-300 hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center",
        children: [
          "Submit ",
          /* @__PURE__ */ y.jsx(Gy, { className: "ml-2 h-4 w-4" })
        ]
      }
    )
  ] }) });
}
function c1({
  messages: e,
  onFormSubmit: t,
  config: n,
  chatState: r,
  onSendMessage: o
}) {
  const i = M.useRef(null);
  M.useEffect(() => {
    var u;
    (u = i.current) == null || u.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const l = (u) => {
    const a = {
      from: "user",
      content: u.message || u.label,
      type: "text",
      timestamp: Date.now(),
      status: "sent"
    };
    o(a);
  }, s = (u) => {
    var a, d, p;
    if ((a = u.file) != null && a.url) {
      const m = (d = u.file.type) == null ? void 0 : d.startsWith("image/"), v = (p = u.file.type) == null ? void 0 : p.startsWith("audio/");
      return m ? /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(
        "img",
        {
          src: u.file.url,
          alt: u.file.name,
          className: "max-w-xs rounded-lg mb-2"
        }
      ) }) : v ? /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsxs("audio", { controls: !0, className: "max-w-xs mb-2 p-2 max-w-[200px]", children: [
        /* @__PURE__ */ y.jsx("source", { src: u.file.url, type: u.file.type }),
        "Your browser does not support the audio element."
      ] }) }) : /* @__PURE__ */ y.jsx("div", { children: /* @__PURE__ */ y.jsx(
        "a",
        {
          href: u.file.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-500 hover:text-blue-700 underline",
          download: !0,
          children: u.file.name
        }
      ) });
    } else if (u.type === "form")
      return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx("span", { children: u.content }),
        /* @__PURE__ */ y.jsx(Zp, { onSubmit: t, config: n })
      ] });
    return u.content;
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    n.suggestions && n.suggestions.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "flex flex-wrap gap-2", children: n.suggestions.map((u, a) => /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        className: "rounded-full border bg-white px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100",
        onClick: () => l(u),
        children: u.label
      },
      a
    )) }),
    e.map((u, a) => /* @__PURE__ */ y.jsx(
      "div",
      {
        className: `flex ${u.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col gap-1 overflow-hidden", children: [
          /* @__PURE__ */ y.jsx(
            "div",
            {
              className: `rounded-2xl ${u.type === "text" || u.type === "form" ? u.from === "user" ? "p-4 bg-gray-100 text-gray-800 rounded-bl-sm" : "p-4 text-white rounded-br-sm" : ""}`,
              style: u.from !== "user" ? { backgroundColor: n.color } : void 0,
              children: s(u)
            }
          ),
          /* @__PURE__ */ y.jsx("div", { className: "px-2", children: /* @__PURE__ */ y.jsx(
            a1,
            {
              status: u.from === "user" ? u.status : void 0,
              timestamp: u.timestamp,
              onRetry: u.status === "failed" ? () => o(u) : void 0
            }
          ) })
        ] })
      },
      u.id || a
    )),
    r.isTyping && /* @__PURE__ */ y.jsxs("div", { className: "inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-full", children: [
      /* @__PURE__ */ y.jsx(Wl, { className: "size-2 animate-bounce [animation-delay:-0.2s] stroke-none fill-current" }),
      /* @__PURE__ */ y.jsx(Wl, { className: "size-2 animate-bounce [animation-delay:-0.1s] stroke-none fill-current" }),
      /* @__PURE__ */ y.jsx(Wl, { className: "size-2 animate-bounce stroke-none fill-current" })
    ] }),
    /* @__PURE__ */ y.jsx("div", { ref: i })
  ] });
}
const d1 = [
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
function f1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ y.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ y.jsx("div", { className: "grid grid-cols-8 gap-1", children: d1.map((n, r) => /* @__PURE__ */ y.jsx(
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
function p1({ onAudioRecorded: e, config: t }) {
  const [n, r] = M.useState(!1), [o, i] = M.useState(!1), [l, s] = M.useState(0), [u, a] = M.useState(null), [d, p] = M.useState(!1), [m, v] = M.useState(null), g = M.useRef(null), x = M.useRef([]), k = M.useRef(null), f = M.useRef(null), c = M.useRef(null);
  M.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((H) => H.stop());
  }, []);
  const h = async () => {
    try {
      const H = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = H, v(!0), !0;
    } catch (H) {
      return console.error("Microphone permission denied:", H), v(!1), !1;
    }
  }, w = async () => {
    if (!(!await h() || !c.current))
      try {
        x.current = [];
        const we = new MediaRecorder(c.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        g.current = we, we.ondataavailable = (be) => {
          be.data.size > 0 && x.current.push(be.data);
        }, we.onstop = () => {
          const be = new Blob(x.current, {
            type: "audio/webm;codecs=opus"
          });
          a(be), c.current && (c.current.getTracks().forEach((cr) => cr.stop()), c.current = null);
        }, we.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((be) => be + 1);
        }, 1e3);
      } catch (we) {
        console.error("Error starting recording:", we);
      }
  }, S = () => {
    g.current && g.current.state === "recording" && (g.current.pause(), i(!0), k.current && clearInterval(k.current));
  }, _ = () => {
    g.current && g.current.state === "paused" && (g.current.resume(), i(!1), k.current = setInterval(() => {
      s((H) => H + 1);
    }, 1e3));
  }, E = () => {
    g.current && g.current.state !== "inactive" && (g.current.stop(), r(!1), i(!1), k.current && clearInterval(k.current));
  }, T = () => {
    if (u && !d) {
      const H = URL.createObjectURL(u);
      f.current = new Audio(H), f.current.onended = () => {
        p(!1), URL.revokeObjectURL(H);
      }, f.current.play(), p(!0);
    } else f.current && d && (f.current.pause(), p(!1));
  }, U = () => {
    if (u) {
      const H = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(H), a(null), s(0), p(!1);
    }
  }, z = () => {
    n && E(), a(null), s(0), p(!1), c.current && (c.current.getTracks().forEach((H) => H.stop()), c.current = null);
  }, Y = (H) => {
    const we = Math.floor(H / 60), be = H % 60;
    return `${we}:${be.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      onClick: h,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ y.jsx(rg, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ y.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ y.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: Y(l) })
    ] }),
    u && /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          onClick: T,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: d ? "Pause" : "Play",
          children: d ? /* @__PURE__ */ y.jsx(Nc, { className: "h-4 w-4" }) : /* @__PURE__ */ y.jsx(Pc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ y.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: Y(l) })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: o ? _ : S,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ y.jsx(Pc, { className: "h-4 w-4" }) : /* @__PURE__ */ y.jsx(Nc, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: E,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ y.jsx(fg, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: U,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: z,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ y.jsx(pg, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      onClick: w,
      className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
      title: "Record audio message",
      children: /* @__PURE__ */ y.jsx(og, { className: "h-5 w-5" })
    }
  );
}
function h1({
  ticketdeskId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r,
  onError: o
}) {
  const [, i] = e.split("_"), [l, s] = M.useState(""), [u, a] = M.useState(!1), d = M.useRef(null), [p, m] = M.useState(!1), v = typeof window < "u" ? window.location.hostname : "", g = (w) => {
    if (w.preventDefault(), l.trim()) {
      const S = {
        from: "user",
        content: l.trim(),
        type: "text",
        timestamp: Date.now(),
        status: "sent"
      };
      r(S), s("");
    }
  }, x = (w) => {
    s((S) => S + w);
  }, k = async (w) => {
    const S = new FormData();
    S.append("file", w);
    const _ = await fetch(
      `https://api.ticketdesk.ai/v1/public/upload?session_id=${t == null ? void 0 : t.session_id}&chatbot_id=${i}`,
      {
        method: "POST",
        body: S
      }
    ), E = await _.json();
    if (!_.ok)
      throw new Error(E.message);
    return E;
  }, f = async (w) => {
    m(!0);
    try {
      const S = await k(w);
      if (S && typeof S != "object") return;
      const _ = {
        from: "user",
        content: w.name,
        type: w.type === "audio/wav" ? "audio" : w.type.startsWith("image/") ? "image" : "file",
        timestamp: Date.now(),
        status: "sent",
        file: S
      };
      r(_);
    } catch (S) {
      o(`File upload failed: ${S}`);
    } finally {
      m(!1), d.current && (d.current.value = "");
    }
  }, c = (w) => {
    var _;
    const S = (_ = w.target.files) == null ? void 0 : _[0];
    S && f(S);
  }, h = async (w) => {
    const _ = Array.from(w.clipboardData.items)[0];
    if (_.type.indexOf("image") !== -1 || _.kind === "file") {
      w.preventDefault();
      const E = _.getAsFile();
      E && f(E);
    }
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ y.jsx("form", { onSubmit: g, className: "p-4 pb-2 relative", children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (w) => s(w.target.value),
          placeholder: "Send a message...",
          className: "flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
          style: { "--tw-ring-color": n.color },
          onPaste: h,
          disabled: p
        }
      ),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !l.trim(),
          children: /* @__PURE__ */ y.jsx(cg, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ y.jsxs("div", { className: "px-4 pb-1 flex items-center justify-between gap-2 relative", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ y.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var w;
              return (w = d.current) == null ? void 0 : w.click();
            },
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
            title: "Upload file",
            children: /* @__PURE__ */ y.jsx(sg, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ y.jsx(p1, { onAudioRecorded: f, config: n }),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            type: "button",
            onClick: () => a(!u),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ y.jsx(dg, { className: "h-4 w-4" })
          }
        ),
        u && /* @__PURE__ */ y.jsx(
          f1,
          {
            onEmojiSelect: x,
            onClose: () => a(!1)
          }
        ),
        p && /* @__PURE__ */ y.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ y.jsxs(
        "a",
        {
          href: `https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=${v}&utm_campaign=powered-by`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-gray-500",
          children: [
            "Powered by",
            " ",
            /* @__PURE__ */ y.jsx("span", { className: "font-semibold text-gray-700 hover:text-gray-800 transition-colors", children: "Ticketdesk AI" })
          ]
        }
      ) }),
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "file",
          ref: d,
          onChange: c,
          className: "hidden",
          accept: "image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        }
      )
    ] })
  ] });
}
function m1({
  sessions: e,
  onLoadSession: t
}) {
  const n = (o) => {
    const i = new Date(o), s = ((/* @__PURE__ */ new Date()).getTime() - i.getTime()) / (1e3 * 60 * 60);
    return s < 24 ? i.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : s < 168 ? i.toLocaleDateString("en-US", { weekday: "short" }) : i.toLocaleDateString("en-US", {
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
    /* @__PURE__ */ y.jsx(Kp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ y.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ y.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ y.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ y.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ y.jsx(hg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ y.jsx(Zy, { className: "h-8 w-8 text-indigo-500" }) }),
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
function y1({ onFormSubmit: e, config: t }) {
  const [n, r] = M.useState(!1);
  return /* @__PURE__ */ y.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ y.jsx(
    Zp,
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
        /* @__PURE__ */ y.jsx(eg, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ y.jsxs("span", { className: "text-sm flex-1", children: [
          /* @__PURE__ */ y.jsx("span", { className: "text-blue-600", children: "Click here" }),
          " to set your email to get notifications"
        ] })
      ]
    }
  ) });
}
function g1({
  ticketdeskId: e,
  isOpen: t,
  isMaximized: n,
  isConnected: r,
  config: o,
  messages: i,
  sessions: l,
  chatState: s,
  selectedSession: u,
  onStartNewChat: a,
  onEndChat: d,
  onLoadSession: p,
  onGetRecentChats: m,
  onUpdateProfile: v,
  errorMessage: g,
  setErrorMessage: x,
  onClose: k,
  onToggleMaximize: f,
  onSendMessage: c
}) {
  const [h, w] = M.useState(
    "chat"
  );
  if (!t) return null;
  const S = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", _ = () => {
    w("recent-chats"), m();
  }, E = () => {
    w("chat");
  }, T = (Y) => {
    p(Y), w("chat");
  }, U = (Y) => {
    v(Y), w("chat");
  }, z = u && !u.email && i.filter((Y) => Y.from === "user").length > 1;
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: `${S} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ y.jsx(
          u1,
          {
            onClose: k,
            onToggleMaximize: f,
            isMaximized: n,
            isConnected: r,
            chatState: s,
            currentView: h,
            onBackToChat: E,
            onStartNewChat: a,
            onEndChat: d,
            onViewRecentChats: _,
            config: o
          }
        ),
        h === "chat" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
          /* @__PURE__ */ y.jsx(
            c1,
            {
              messages: i,
              onFormSubmit: U,
              config: o,
              chatState: s,
              onSendMessage: c
            }
          ),
          z && /* @__PURE__ */ y.jsx(y1, { config: o, onFormSubmit: U }),
          g && /* @__PURE__ */ y.jsxs("div", { className: "px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ y.jsx(Xp, { className: "h-4 w-4 text-red-600" }),
            g
          ] }),
          /* @__PURE__ */ y.jsx(
            h1,
            {
              ticketdeskId: e,
              config: o,
              selectedSession: u,
              onSendMessage: c,
              onError: x
            }
          )
        ] }),
        h === "recent-chats" && /* @__PURE__ */ y.jsx(
          m1,
          {
            sessions: l,
            onLoadSession: T,
            config: o
          }
        )
      ]
    }
  );
}
const zc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, Ys = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, Do = () => "m_" + crypto.randomUUID(), Fc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const p = typeof a == "function" ? a(t) : a;
    if (!Object.is(p, t)) {
      const m = t;
      t = d ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((v) => v(t, m));
    }
  }, o = () => t, s = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, s);
  return s;
}, v1 = (e) => e ? Fc(e) : Fc, w1 = (e) => e;
function x1(e, t = w1) {
  const n = Xe.useSyncExternalStore(
    e.subscribe,
    Xe.useCallback(() => t(e.getState()), [e, t]),
    Xe.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Xe.useDebugValue(n), n;
}
const Lc = (e) => {
  const t = v1(e), n = (r) => x1(t, r);
  return Object.assign(n, t), n;
}, k1 = (e) => e ? Lc(e) : Lc;
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Jp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    V(this, "message");
    V(this, "error");
    this.message = t.message, this.error = t;
  }
}, qp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    V(this, "code");
    V(this, "reason");
    V(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Bl = {
  Event,
  ErrorEvent: Jp,
  CloseEvent: qp
};
function S1(e, t) {
  if (!e)
    throw new Error(t);
}
function C1(e) {
  return new e.constructor(e.type, e);
}
function _1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new qp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Jp(e.error, e) : new Event(e.type, e);
}
var Ic, E1 = typeof process < "u" && typeof ((Ic = process.versions) == null ? void 0 : Ic.node) < "u" && typeof document > "u", Oo = E1 ? _1 : C1, dn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, Dc = !1, $1 = class hn extends EventTarget {
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
      const { minUptime: r = dn.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), S1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
        var i;
        return (i = this._ws) == null ? void 0 : i.send(o);
      }), this._messageQueue = [], this.onopen && this.onopen(n), this.dispatchEvent(Oo(n));
    });
    V(this, "_handleMessage", (n) => {
      this._debug("message event"), this.onmessage && this.onmessage(n), this.dispatchEvent(Oo(n));
    });
    V(this, "_handleError", (n) => {
      this._debug("error event", n.message), this._disconnect(void 0, n.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(n), this._debug("exec error listeners"), this.dispatchEvent(Oo(n)), this._connect();
    });
    V(this, "_handleClose", (n) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(n), this.dispatchEvent(Oo(n));
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
    return hn.CONNECTING;
  }
  get OPEN() {
    return hn.OPEN;
  }
  get CLOSING() {
    return hn.CLOSING;
  }
  get CLOSED() {
    return hn.CLOSED;
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
    return this._ws ? this._ws.readyState : this._options.startClosed ? hn.CLOSED : hn.CONNECTING;
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
      const { maxEnqueuedMessages: r = dn.maxEnqueuedMessages } = this._options;
      this._messageQueue.length < r && (this._debug("enqueue", n), this._messageQueue.push(n));
    }
  }
  _debug(...n) {
    this._options.debug && this._debugLogger("RWS>", ...n);
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor: n = dn.reconnectionDelayGrowFactor,
      minReconnectionDelay: r = dn.minReconnectionDelay,
      maxReconnectionDelay: o = dn.maxReconnectionDelay
    } = this._options;
    let i = 0;
    return this._retryCount > 0 && (i = r * n ** (this._retryCount - 1), i > o && (i = o)), this._debug("next delay", i), i;
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
      maxRetries: n = dn.maxRetries,
      connectionTimeout: r = dn.connectionTimeout
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
    ).then(([o, i]) => {
      if (this._closeCalled) {
        this._connectLock = !1;
        return;
      }
      !this._options.WebSocket && typeof WebSocket > "u" && !Dc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), Dc = !0);
      const l = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: i }), this._ws = i ? new l(o, i) : new l(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Bl.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Bl.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Bl.CloseEvent(n, r, this));
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
var T1 = (e) => e[1] !== null && e[1] !== void 0;
function N1() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function eh(e, t, n = {}) {
  const {
    host: r,
    path: o,
    protocol: i,
    room: l,
    party: s,
    basePath: u,
    prefix: a,
    query: d
  } = e;
  let p = r.replace(/^(http|https|ws|wss):\/\//, "");
  if (p.endsWith("/") && (p = p.slice(0, -1)), o != null && o.startsWith("/"))
    throw new Error("path must not start with a slash");
  const m = s ?? "main", v = o ? `/${o}` : "", g = i || (p.startsWith("localhost:") || p.startsWith("127.0.0.1:") || p.startsWith("192.168.") || p.startsWith("10.") || p.startsWith("172.") && p.split(".")[1] >= "16" && p.split(".")[1] <= "31" || p.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), x = `${g}://${p}/${u || `${a || "parties"}/${m}/${l}`}${v}`, k = (c = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter(T1)
  ])}`, f = typeof d == "function" ? async () => k(await d()) : k(d);
  return {
    host: p,
    path: v,
    room: l,
    name: m,
    protocol: g,
    partyUrl: x,
    urlProvider: f
  };
}
var P1 = class extends $1 {
  constructor(t) {
    var n, r;
    const o = Oc(t);
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
    const n = Oc({
      ...this.partySocketOptions,
      ...t,
      host: t.host ?? this.host,
      room: t.room ?? this.room,
      path: t.path ?? this.path
    });
    this._url = n.urlProvider, this._protocols = n.protocols, this._options = n.socketOptions, this.setWSProperties(n);
  }
  setWSProperties(t) {
    const { _pk: n, _pkurl: r, name: o, room: i, host: l, path: s } = t;
    this._pk = n, this._pkurl = r, this.name = o, this.room = i, this.host = l, this.path = s;
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
    const r = eh(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function Oc(e) {
  const {
    id: t,
    host: n,
    path: r,
    party: o,
    room: i,
    protocol: l,
    query: s,
    protocols: u,
    ...a
  } = e, d = t || N1(), p = eh(e, "ws", { _pk: d });
  return {
    _pk: d,
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
const M1 = k1((e, t) => ({
  sockets: {},
  getSocket: (n, r) => {
    const o = `${r}_${n}`, i = t().sockets[o];
    if (i) return i;
    const l = new P1({
      host: "https://api.ticketdesk.ai",
      prefix: "ws",
      party: "chatroom",
      room: n,
      query: {
        chatbot_id: r,
        session_id: localStorage.getItem(`ti_${r}_session_id`)
      }
    });
    return e((s) => ({
      sockets: { ...s.sockets, [o]: l }
    })), l;
  }
}));
function j1({ ticketdeskId: e }) {
  var D;
  const [t, n] = e.split("_"), o = M1((R) => R.getSocket)(t, n), [i, l] = M.useState(null), [s, u] = M.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!",
    fields: ["email"],
    suggestions: []
  }), [a, d] = M.useState(!0), [p, m] = M.useState([]), [v, g] = M.useState(null), [x, k] = M.useState(null), [f, c] = M.useState([]), [h, w] = M.useState(
    null
  ), [S, _] = M.useState(null), [E, T] = M.useState({
    lastActive: void 0,
    isTyping: !1,
    operators: []
  }), [U, z] = M.useState(null), Y = M.useCallback(() => {
    i && (i.currentTime = 0, i.play().catch(() => {
    }));
  }, [i]), H = M.useCallback(
    (R) => {
      var st;
      const { type: L, data: W, error: et } = R;
      if (et) {
        _(et);
        return;
      }
      switch (L) {
        case "session:connected":
          u((te) => ({ ...te, ...W.config })), d(!1);
          break;
        case "session:joined": {
          W.session_id && (g(W.session_id), zc(`ti_${n}_session_id`, W.session_id)), W.client_id && (k(W.client_id), zc(`ti_${n}_client_id`, W.client_id));
          const te = [...W.messages || []];
          (st = s.suggestions) != null && st.length || te.unshift({
            id: Do(),
            from: "agent",
            content: s.welcome_message,
            type: "text",
            timestamp: Date.now()
          }), m(te), w(W.session), W.last_active && T((hl) => ({
            ...hl,
            lastActive: W.last_active
          })), W.operators && T((hl) => ({
            ...hl,
            operators: W.operators
          }));
          const _e = new Audio("https://ticketdesk.ai/sounds/pop-up-off.mp3");
          _e.volume = 0.25, l(_e);
          break;
        }
        case "session:list":
          c(W.sessions);
          break;
        case "message:typing": {
          T((_e) => ({ ..._e, isTyping: !0 })), U && clearTimeout(U);
          const te = setTimeout(() => {
            T((_e) => ({ ..._e, isTyping: !1 })), z(null);
          }, 1e4);
          z(te);
          break;
        }
        case "message:recieved": {
          m((te) => [...te, W.message]), T((te) => ({ ...te, isTyping: !1 })), U && (clearTimeout(U), z(null)), (document.hidden || !document.hasFocus()) && Y();
          break;
        }
        case "operator:list":
          W.operators && T((te) => ({
            ...te,
            operators: W.operators
          }));
          break;
        case "message:read":
          m(
            (te) => te.map(
              (_e) => _e.id === W.message_id ? { ..._e, status: W.status } : _e
            )
          );
          break;
        default:
          console.log("Unhandled message type:", L, W);
      }
    },
    [(D = s.suggestions) == null ? void 0 : D.length, s.welcome_message, n, U, Y]
  );
  M.useEffect(() => {
    const R = (L) => H(JSON.parse(L.data));
    return o.addEventListener("message", R), () => o.removeEventListener("message", R);
  }, [o, H]), M.useEffect(() => {
    const R = Ys(`ti_${n}_session_id`), L = Ys(`ti_${n}_client_id`);
    R && g(R), L && k(L);
  }, [n]);
  const we = (R) => {
    const L = (st) => st.charAt(0).toUpperCase() + st.slice(1), W = R.at(-1);
    return `Please provide your ${R.length === 1 ? L(R[0]) : `${R.slice(0, -1).map(L).join(", ")} and ${L(W)}`}.`;
  }, be = M.useCallback(
    (R) => {
      var L;
      !v || !x || (R.id = Do(), m((W) => [...W, R]), o.send(
        JSON.stringify({
          type: "message:new",
          session_id: v,
          client_id: x,
          chatbot_id: n,
          message: R
        })
      ), (L = s.fields) != null && L.length && setTimeout(() => {
        m((W) => {
          if (W.some((te) => te.type === "form")) return W;
          const st = {
            id: Do(),
            from: "agent",
            content: we(s.fields),
            type: "form",
            fields: s.fields,
            timestamp: Date.now()
          };
          return [...W, st];
        });
      }, 1e3));
    },
    [o, v, x, n, s.fields]
  ), cr = M.useCallback(() => {
    if (!o) return;
    const R = {
      type: "session:new",
      client_id: x,
      chatbot_id: n
    };
    if (o.send(JSON.stringify(R)), s.welcome_message) {
      const L = {
        id: Do(),
        from: "agent",
        content: s.welcome_message,
        type: "text",
        timestamp: Date.now()
      };
      m([L]);
    } else
      m([]);
  }, [o, x, n, s]), dr = M.useCallback(
    (R) => {
      if (!o) return;
      const L = {
        type: R ? "session:join" : "session:new",
        session_id: R,
        client_id: x,
        chatbot_id: n
      };
      o.send(JSON.stringify(L)), R && g(R);
    },
    [o, x, n]
  ), fr = M.useCallback(() => {
    if (!o || !v) return;
    const R = {
      type: "session:state",
      session_id: v,
      client_id: x,
      chatbot_id: n,
      state: "resolved"
    };
    o.send(JSON.stringify(R));
  }, [o, v, x, n]), N = M.useCallback(() => {
    if (o && x) {
      const R = {
        type: "session:list",
        client_id: x,
        chatbot_id: n
      };
      o.send(JSON.stringify(R));
    }
  }, [o, x, n]), F = M.useCallback(
    (R) => {
      if (o && x) {
        const L = {
          type: "session:update",
          client_id: x,
          session_id: v,
          chatbot_id: n,
          data: R
        };
        o.send(JSON.stringify(L));
      }
      w((L) => L && { ...L, ...R });
    },
    [o, x, n, v]
  );
  return {
    messages: p,
    sendMessage: be,
    startNewChat: cr,
    endCurrentChat: fr,
    getRecentChats: N,
    updateProfile: F,
    loadSession: dr,
    sessions: f,
    selectedSession: h,
    isConnected: o.readyState === WebSocket.OPEN,
    errorMessage: S,
    setErrorMessage: _,
    chatState: E,
    isLoading: a,
    config: s,
    sessionId: v,
    clientId: x
  };
}
var ur = {};
var th = M;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Re = Object.prototype.hasOwnProperty, R1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bc = {}, Ac = {};
function nh(e) {
  return Re.call(Ac, e) ? !0 : Re.call(bc, e) ? !1 : R1.test(e) ? Ac[e] = !0 : (bc[e] = !0, !1);
}
function Me(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ta,
    na
  );
  ge[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ta, na);
  ge[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ta, na);
  ge[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ni = {
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
}, z1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ni).forEach(function(e) {
  z1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ni[t] = ni[e];
  });
});
var F1 = /["'&<>]/;
function $e(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = F1.exec(e);
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
var L1 = /([A-Z])/g, I1 = /^ms-/, Xs = Array.isArray;
function _t(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function D1(e, t, n) {
  switch (t) {
    case "select":
      return _t(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return _t(2, null);
    case "math":
      return _t(3, null);
    case "foreignObject":
      return _t(1, null);
    case "table":
      return _t(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return _t(5, null);
    case "colgroup":
      return _t(7, null);
    case "tr":
      return _t(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? _t(1, null) : e;
}
var Uc = /* @__PURE__ */ new Map();
function rh(e, t, n) {
  if (typeof n != "object") throw Error(I(62));
  t = !0;
  for (var r in n) if (Re.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = $e(r);
        o = $e(("" + o).trim());
      } else {
        i = r;
        var l = Uc.get(i);
        l !== void 0 || (l = $e(i.replace(L1, "-$1").toLowerCase().replace(I1, "-ms-")), Uc.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || Re.call(ni, r) ? "" + o : o + "px" : $e(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', i, ":", o)) : e.push(";", i, ":", o);
    }
  }
  t || e.push('"');
}
function Ue(e, t, n, r) {
  switch (n) {
    case "style":
      rh(e, t, r);
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
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', $e(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', $e(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', $e(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', $e(r), '"');
      }
    } else if (nh(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", n, '="', $e(r), '"');
    }
  }
}
function ri(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(I(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function O1(e) {
  var t = "";
  return th.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Hl(e, t, n, r) {
  e.push(gt(n));
  var o = n = null, i;
  for (i in t) if (Re.call(t, i)) {
    var l = t[i];
    if (l != null) switch (i) {
      case "children":
        n = l;
        break;
      case "dangerouslySetInnerHTML":
        o = l;
        break;
      default:
        Ue(e, r, i, l);
    }
  }
  return e.push(">"), ri(e, o, n), typeof n == "string" ? (e.push($e(n)), null) : n;
}
var b1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Wc = /* @__PURE__ */ new Map();
function gt(e) {
  var t = Wc.get(e);
  if (t === void 0) {
    if (!b1.test(e)) throw Error(I(65, e));
    t = "<" + e, Wc.set(e, t);
  }
  return t;
}
function A1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(gt("select"));
      var i = null, l = null;
      for (d in n) if (Re.call(n, d)) {
        var s = n[d];
        if (s != null) switch (d) {
          case "children":
            i = s;
            break;
          case "dangerouslySetInnerHTML":
            l = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            Ue(e, r, d, s);
        }
      }
      return e.push(">"), ri(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(gt("option"));
      var u = s = null, a = null, d = null;
      for (i in n) if (Re.call(n, i)) {
        var p = n[i];
        if (p != null) switch (i) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            d = p;
            break;
          case "value":
            u = p;
          default:
            Ue(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : O1(s), Xs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + l === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), ri(e, d, s), s;
    case "textarea":
      e.push(gt("textarea")), d = l = i = null;
      for (s in n) if (Re.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          d = u;
          break;
        case "value":
          i = u;
          break;
        case "defaultValue":
          l = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(91));
        default:
          Ue(
            e,
            r,
            s,
            u
          );
      }
      if (i === null && l !== null && (i = l), e.push(">"), d != null) {
        if (i != null) throw Error(I(92));
        if (Xs(d) && 1 < d.length) throw Error(I(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(`
`), i !== null && e.push($e("" + i)), null;
    case "input":
      e.push(gt("input")), u = d = s = i = null;
      for (l in n) if (Re.call(n, l) && (a = n[l], a != null)) switch (l) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          d = a;
          break;
        case "value":
          i = a;
          break;
        default:
          Ue(e, r, l, a);
      }
      return d !== null ? Ue(e, r, "checked", d) : u !== null && Ue(e, r, "checked", u), i !== null ? Ue(e, r, "value", i) : s !== null && Ue(e, r, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(gt("menuitem"));
      for (var m in n) if (Re.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(400));
        default:
          Ue(e, r, m, i);
      }
      return e.push(">"), null;
    case "title":
      e.push(gt("title")), i = null;
      for (p in n) if (Re.call(n, p) && (l = n[p], l != null)) switch (p) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(434));
        default:
          Ue(e, r, p, l);
      }
      return e.push(">"), i;
    case "listing":
    case "pre":
      e.push(gt(t)), l = i = null;
      for (u in n) if (Re.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          Ue(e, r, u, s);
      }
      if (e.push(">"), l != null) {
        if (i != null) throw Error(I(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(I(61));
        n = l.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof i == "string" && i[0] === `
` && e.push(`
`), i;
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
      e.push(gt(t));
      for (var v in n) if (Re.call(n, v) && (i = n[v], i != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, t));
        default:
          Ue(e, r, v, i);
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
      return Hl(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Hl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Hl(e, n, t, r);
      e.push(gt(t)), l = i = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          rh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          nh(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', $e(s), '"');
      }
      return e.push(">"), ri(e, l, i), i;
  }
}
function Vc(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(I(395));
  return e.push(n), e.push('"></template>');
}
function U1(e, t, n, r) {
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
      throw Error(I(397));
  }
}
function W1(e, t) {
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
      throw Error(I(397));
  }
}
var V1 = /[<\u2028\u2029]/g;
function Ql(e) {
  return JSON.stringify(e).replace(V1, function(t) {
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
function B1(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Bc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push($e(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push($e(t)), e = !0), e);
}
var Wr = Object.assign, H1 = Symbol.for("react.element"), oh = Symbol.for("react.portal"), ih = Symbol.for("react.fragment"), lh = Symbol.for("react.strict_mode"), sh = Symbol.for("react.profiler"), uh = Symbol.for("react.provider"), ah = Symbol.for("react.context"), ch = Symbol.for("react.forward_ref"), dh = Symbol.for("react.suspense"), fh = Symbol.for("react.suspense_list"), ph = Symbol.for("react.memo"), ra = Symbol.for("react.lazy"), Q1 = Symbol.for("react.scope"), Y1 = Symbol.for("react.debug_trace_mode"), X1 = Symbol.for("react.legacy_hidden"), K1 = Symbol.for("react.default_value"), Hc = Symbol.iterator;
function Ks(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ih:
      return "Fragment";
    case oh:
      return "Portal";
    case sh:
      return "Profiler";
    case lh:
      return "StrictMode";
    case dh:
      return "Suspense";
    case fh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ah:
      return (e.displayName || "Context") + ".Consumer";
    case uh:
      return (e._context.displayName || "Context") + ".Provider";
    case ch:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ph:
      return t = e.displayName || null, t !== null ? t : Ks(e.type) || "Memo";
    case ra:
      t = e._payload, e = e._init;
      try {
        return Ks(e(t));
      } catch {
      }
  }
  return null;
}
var hh = {};
function Qc(e, t) {
  if (e = e.contextTypes, !e) return hh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var kn = null;
function ul(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      ul(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function mh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && mh(e);
}
function yh(e) {
  var t = e.parent;
  t !== null && yh(t), e.context._currentValue2 = e.value;
}
function gh(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(I(402));
  e.depth === t.depth ? ul(e, t) : gh(e, t);
}
function vh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  e.depth === n.depth ? ul(e, n) : vh(e, n), t.context._currentValue2 = t.value;
}
function Ii(e) {
  var t = kn;
  t !== e && (t === null ? yh(e) : e === null ? mh(t) : t.depth === e.depth ? ul(t, e) : t.depth > e.depth ? gh(t, e) : vh(t, e), kn = e);
}
var Yc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Xc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Yc, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Wr({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Yc.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = Wr({}, i, s)) : Wr(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var G1 = { id: 1, overflow: "" };
function Gs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - oi(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - oi(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - oi(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var oi = Math.clz32 ? Math.clz32 : q1, Z1 = Math.log, J1 = Math.LN2;
function q1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Z1(e) / J1 | 0) | 0;
}
function ev(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tv = typeof Object.is == "function" ? Object.is : ev, Lt = null, oa = null, ii = null, X = null, Pr = !1, Di = !1, so = 0, Yt = null, al = 0;
function mn() {
  if (Lt === null) throw Error(I(321));
  return Lt;
}
function Kc() {
  if (0 < al) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function ia() {
  return X === null ? ii === null ? (Pr = !1, ii = X = Kc()) : (Pr = !0, X = ii) : X.next === null ? (Pr = !1, X = X.next = Kc()) : (Pr = !0, X = X.next), X;
}
function la() {
  oa = Lt = null, Di = !1, ii = null, al = 0, X = Yt = null;
}
function wh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gc(e, t, n) {
  if (Lt = mn(), X = ia(), Pr) {
    var r = X.queue;
    if (t = r.dispatch, Yt !== null && (n = Yt.get(r), n !== void 0)) {
      Yt.delete(r), r = X.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return X.memoizedState = r, [r, t];
    }
    return [X.memoizedState, t];
  }
  return e = e === wh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, X.memoizedState = e, e = X.queue = { last: null, dispatch: null }, e = e.dispatch = nv.bind(null, Lt, e), [X.memoizedState, e];
}
function Zc(e, t) {
  if (Lt = mn(), X = ia(), t = t === void 0 ? null : t, X !== null) {
    var n = X.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!tv(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), X.memoizedState = [e, t], e;
}
function nv(e, t, n) {
  if (25 <= al) throw Error(I(301));
  if (e === Lt) if (Di = !0, e = { action: n, next: null }, Yt === null && (Yt = /* @__PURE__ */ new Map()), n = Yt.get(t), n === void 0) Yt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function rv() {
  throw Error(I(394));
}
function bo() {
}
var Jc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return mn(), e._currentValue2;
}, useMemo: Zc, useReducer: Gc, useRef: function(e) {
  Lt = mn(), X = ia();
  var t = X.memoizedState;
  return t === null ? (e = { current: e }, X.memoizedState = e) : t;
}, useState: function(e) {
  return Gc(wh, e);
}, useInsertionEffect: bo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Zc(function() {
    return e;
  }, t);
}, useImperativeHandle: bo, useEffect: bo, useDebugValue: bo, useDeferredValue: function(e) {
  return mn(), e;
}, useTransition: function() {
  return mn(), [
    !1,
    rv
  ];
}, useId: function() {
  var e = oa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - oi(e) - 1)).toString(32) + t;
  var n = li;
  if (n === null) throw Error(I(404));
  return t = so++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return mn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(I(407));
  return n();
} }, li = null, Yl = th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function ov(e) {
  return console.error(e), null;
}
function Mr() {
}
function iv(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? ov : o, onAllReady: Mr, onShellReady: l === void 0 ? Mr : l, onShellError: Mr, onFatalError: Mr }, n = Oi(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = sa(t, e, null, n, d, hh, null, G1), a.push(e), t;
}
function sa(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Sh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Oi(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function uo(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function bi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function qc(e, t, n, r, o) {
  for (Lt = {}, oa = t, so = 0, e = n(r, o); Di; ) Di = !1, so = 0, al += 1, X = null, e = n(r, o);
  return la(), e;
}
function ed(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(I(108, Ks(r) || "Unknown", s));
      r = Wr({}, l, n);
    }
    t.legacyContext = r, Be(e, t, o), t.legacyContext = l;
  } else Be(e, t, o);
}
function td(e, t) {
  if (e && e.defaultProps) {
    t = Wr({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zs(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Qc(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue2 : o), Xc(i, n, r, o), ed(e, t, i, n);
  } else {
    i = Qc(n, t.legacyContext), o = qc(e, t, n, r, i);
    var l = so !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Xc(o, n, r, i), ed(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = Gs(r, 1, 0);
      try {
        Be(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Be(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = A1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = D1(l, n, r), Js(e, t, i), o.formatContext = l, n) {
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
      case X1:
      case Y1:
      case lh:
      case sh:
      case ih:
        Be(e, t, r.children);
        return;
      case fh:
        Be(e, t, r.children);
        return;
      case Q1:
        throw Error(I(343));
      case dh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Oi(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Oi(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Js(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, Ai(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = uo(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = sa(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case ch:
        if (r = qc(e, t, n.render, r, o), so !== 0) {
          n = t.treeContext, t.treeContext = Gs(n, 1, 0);
          try {
            Be(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Be(e, t, r);
        return;
      case ph:
        n = n.type, r = td(n, r), Zs(e, t, n, r, o);
        return;
      case uh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue2, n._currentValue2 = r, l = kn, kn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Be(e, t, o), e = kn, e === null) throw Error(I(403));
        r = e.parentValue, e.context._currentValue2 = r === K1 ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case ah:
        r = r.children, r = r(n._currentValue2), Be(e, t, r);
        return;
      case ra:
        o = n._init, n = o(n._payload), r = td(n, r), Zs(
          e,
          t,
          n,
          r,
          void 0
        );
        return;
    }
    throw Error(I(130, n == null ? n : typeof n, ""));
  }
}
function Be(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case H1:
        Zs(e, t, n.type, n.props, n.ref);
        return;
      case oh:
        throw Error(I(257));
      case ra:
        var r = n._init;
        n = r(n._payload), Be(e, t, n);
        return;
    }
    if (Xs(n)) {
      nd(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Hc && n[Hc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        nd(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Bc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Bc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function nd(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = Gs(i, r, o);
    try {
      Js(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function Js(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Be(e, t, n);
  } catch (u) {
    if (la(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Oi(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = sa(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ii(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ii(i), u;
  }
}
function lv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, kh(this, t, e);
}
function xh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(I(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return xh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Ai(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Ai(e, n);
  } else e.completedSegments.push(t);
}
function kh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Mr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Ai(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(lv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Ai(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Sh(e) {
  if (e.status !== 2) {
    var t = kn, n = Yl.current;
    Yl.current = Jc;
    var r = li;
    li = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Ii(l.context);
          try {
            Be(s, l, l.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), l.abortSet.delete(l), u.status = 1, kh(s, l.blockedBoundary, u);
          } catch (g) {
            if (la(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, p = g, m = uo(s, p);
              if (d === null ? bi(s, p) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ua(e, e.destination);
    } catch (g) {
      uo(e, g), bi(e, g);
    } finally {
      li = r, Yl.current = n, n === Jc && Ii(t);
    }
  }
}
function Ao(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) t.push(r[i]);
        o = cl(e, t, o);
      }
      for (; i < r.length - 1; i++) t.push(r[i]);
      return i < r.length && (o = t.push(r[i])), o;
    default:
      throw Error(I(390));
  }
}
function cl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ao(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = $e(r), t.push(r), t.push('"')), t.push("></template>")), Ao(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    return o = o.boundaryPrefix + i.toString(16), r = r.id = o, Vc(t, e.responseState, r), Ao(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Vc(t, e.responseState, r.id), Ao(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(I(391));
  return cl(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function rd(e, t, n) {
  return U1(t, e.responseState, n.formatContext, n.id), cl(e, t, n), W1(t, n.formatContext);
}
function od(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Ch(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(I(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function Ch(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return rd(e, t, r);
  }
  return rd(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function ua(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      cl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, p = l.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(I(395));
      if (r.push(u), r.push('"'), a || d || p) {
        r.push(",");
        var m = Ql(a || "");
        r.push(m);
      }
      if (d || p) {
        r.push(",");
        var v = Ql(d || "");
        r.push(v);
      }
      if (p) {
        r.push(",");
        var g = Ql(p);
        r.push(g);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, i++, o.splice(0, i);
        return;
      }
    }
    o.splice(0, i);
    var x = e.completedBoundaries;
    for (i = 0; i < x.length; i++) if (!od(e, t, x[i])) {
      e.destination = null, i++, x.splice(0, i);
      return;
    }
    x.splice(0, i);
    var k = e.partialBoundaries;
    for (i = 0; i < k.length; i++) {
      var f = k[i];
      e: {
        o = e, l = t;
        var c = f.completedSegments;
        for (s = 0; s < c.length; s++) if (!Ch(o, l, f, c[s])) {
          s++, c.splice(0, s);
          var h = !1;
          break e;
        }
        c.splice(0, s), h = !0;
      }
      if (!h) {
        e.destination = null, i++, k.splice(0, i);
        return;
      }
    }
    k.splice(0, i);
    var w = e.completedBoundaries;
    for (i = 0; i < w.length; i++) if (!od(e, t, w[i])) {
      e.destination = null, i++, w.splice(0, i);
      return;
    }
    w.splice(0, i);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function sv(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return xh(r, e, t);
    }), n.clear(), e.destination !== null && ua(e, e.destination);
  } catch (r) {
    uo(e, r), bi(e, r);
  }
}
function uv() {
}
function _h(e, t, n, r) {
  var o = !1, i = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    o = !0, i = a;
  } }, u = !1;
  if (e = iv(e, B1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, uv, void 0, function() {
    u = !0;
  }), Sh(e), sv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      ua(e, s);
    } catch (a) {
      uo(e, a), bi(e, a);
    }
  }
  if (o) throw i;
  if (!u) throw Error(I(426));
  return l;
}
ur.renderToNodeStream = function() {
  throw Error(I(207));
};
ur.renderToStaticMarkup = function(e, t) {
  return _h(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.renderToStaticNodeStream = function() {
  throw Error(I(208));
};
ur.renderToString = function(e, t) {
  return _h(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.version = "18.3.1";
var aa = {};
var Eh = M;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var He = null, Qe = 0;
function j(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < Qe && (e.enqueue(new Uint8Array(He.buffer, 0, Qe)), He = new Uint8Array(512), Qe = 0), e.enqueue(t);
  else {
    var n = He.length - Qe;
    n < t.length && (n === 0 ? e.enqueue(He) : (He.set(t.subarray(0, n), Qe), e.enqueue(He), t = t.subarray(n)), He = new Uint8Array(512), Qe = 0), He.set(t, Qe), Qe += t.length;
  }
}
function q(e, t) {
  return j(e, t), !0;
}
function id(e) {
  He && 0 < Qe && (e.enqueue(new Uint8Array(He.buffer, 0, Qe)), He = null, Qe = 0);
}
var $h = new TextEncoder();
function b(e) {
  return $h.encode(e);
}
function $(e) {
  return $h.encode(e);
}
function Th(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var ze = Object.prototype.hasOwnProperty, av = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ld = {}, sd = {};
function Nh(e) {
  return ze.call(sd, e) ? !0 : ze.call(ld, e) ? !1 : av.test(e) ? sd[e] = !0 : (ld[e] = !0, !1);
}
function je(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new je(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ca = /[\-:]([a-z])/g;
function da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ca,
    da
  );
  ve[t] = new je(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ca, da);
  ve[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ca, da);
  ve[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var si = {
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
}, cv = ["Webkit", "ms", "Moz", "O"];
Object.keys(si).forEach(function(e) {
  cv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), si[t] = si[e];
  });
});
var dv = /["'&<>]/;
function he(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = dv.exec(e);
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
var fv = /([A-Z])/g, pv = /^ms-/, qs = Array.isArray, hv = $("<script>"), mv = $("<\/script>"), yv = $('<script src="'), gv = $('<script type="module" src="'), ud = $('" async=""><\/script>'), vv = /(<\/|<)(s)(cript)/gi;
function wv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function xv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? hv : $('<script nonce="' + he(t) + '">');
  var i = [];
  if (n !== void 0 && i.push(t, b(("" + n).replace(vv, wv)), mv), r !== void 0) for (n = 0; n < r.length; n++) i.push(yv, b(he(r[n])), ud);
  if (o !== void 0) for (r = 0; r < o.length; r++) i.push(gv, b(he(o[r])), ud);
  return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: $(e + "P:"), segmentPrefix: $(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function vt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function kv(e) {
  return vt(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function Sv(e, t, n) {
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
var fa = $("<!-- -->");
function ad(e, t, n, r) {
  return t === "" ? r : (r && e.push(fa), e.push(b(he(t))), !0);
}
var cd = /* @__PURE__ */ new Map(), Cv = $(' style="'), dd = $(":"), _v = $(";");
function Ph(e, t, n) {
  if (typeof n != "object") throw Error(O(62));
  t = !0;
  for (var r in n) if (ze.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = b(he(r));
        o = b(he(("" + o).trim()));
      } else {
        i = r;
        var l = cd.get(i);
        l !== void 0 || (l = $(he(i.replace(fv, "-$1").toLowerCase().replace(pv, "-ms-"))), cd.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || ze.call(si, r) ? b("" + o) : b(o + "px") : b(he(("" + o).trim()));
      }
      t ? (t = !1, e.push(Cv, i, dd, o)) : e.push(_v, i, dd, o);
    }
  }
  t || e.push(yn);
}
var bt = $(" "), zn = $('="'), yn = $('"'), fd = $('=""');
function We(e, t, n, r) {
  switch (n) {
    case "style":
      Ph(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ve.hasOwnProperty(n) ? ve[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = b(t.attributeName), t.type) {
        case 3:
          r && e.push(bt, n, fd);
          break;
        case 4:
          r === !0 ? e.push(bt, n, fd) : r !== !1 && e.push(bt, n, zn, b(he(r)), yn);
          break;
        case 5:
          isNaN(r) || e.push(bt, n, zn, b(he(r)), yn);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(bt, n, zn, b(he(r)), yn);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(bt, n, zn, b(he(r)), yn);
      }
    } else if (Nh(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(bt, b(n), zn, b(he(r)), yn);
    }
  }
}
var At = $(">"), pd = $("/>");
function ui(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(O(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(O(61));
    t = t.__html, t != null && e.push(b("" + t));
  }
}
function Ev(e) {
  var t = "";
  return Eh.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Xl = $(' selected=""');
function Kl(e, t, n, r) {
  e.push(wt(n));
  var o = n = null, i;
  for (i in t) if (ze.call(t, i)) {
    var l = t[i];
    if (l != null) switch (i) {
      case "children":
        n = l;
        break;
      case "dangerouslySetInnerHTML":
        o = l;
        break;
      default:
        We(e, r, i, l);
    }
  }
  return e.push(At), ui(e, o, n), typeof n == "string" ? (e.push(b(he(n))), null) : n;
}
var Gl = $(`
`), $v = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, hd = /* @__PURE__ */ new Map();
function wt(e) {
  var t = hd.get(e);
  if (t === void 0) {
    if (!$v.test(e)) throw Error(O(65, e));
    t = $("<" + e), hd.set(e, t);
  }
  return t;
}
var Tv = $("<!DOCTYPE html>");
function Nv(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(wt("select"));
      var i = null, l = null;
      for (d in n) if (ze.call(n, d)) {
        var s = n[d];
        if (s != null) switch (d) {
          case "children":
            i = s;
            break;
          case "dangerouslySetInnerHTML":
            l = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            We(e, r, d, s);
        }
      }
      return e.push(At), ui(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(wt("option"));
      var u = s = null, a = null, d = null;
      for (i in n) if (ze.call(n, i)) {
        var p = n[i];
        if (p != null) switch (i) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            d = p;
            break;
          case "value":
            u = p;
          default:
            We(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : Ev(s), qs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(Xl);
            break;
          }
      } else "" + l === n && e.push(Xl);
      else a && e.push(Xl);
      return e.push(At), ui(e, d, s), s;
    case "textarea":
      e.push(wt("textarea")), d = l = i = null;
      for (s in n) if (ze.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          d = u;
          break;
        case "value":
          i = u;
          break;
        case "defaultValue":
          l = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(O(91));
        default:
          We(e, r, s, u);
      }
      if (i === null && l !== null && (i = l), e.push(At), d != null) {
        if (i != null) throw Error(O(92));
        if (qs(d) && 1 < d.length) throw Error(O(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Gl), i !== null && e.push(b(he("" + i))), null;
    case "input":
      e.push(wt("input")), u = d = s = i = null;
      for (l in n) if (ze.call(n, l) && (a = n[l], a != null)) switch (l) {
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
          d = a;
          break;
        case "value":
          i = a;
          break;
        default:
          We(e, r, l, a);
      }
      return d !== null ? We(
        e,
        r,
        "checked",
        d
      ) : u !== null && We(e, r, "checked", u), i !== null ? We(e, r, "value", i) : s !== null && We(e, r, "value", s), e.push(pd), null;
    case "menuitem":
      e.push(wt("menuitem"));
      for (var m in n) if (ze.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O(400));
        default:
          We(e, r, m, i);
      }
      return e.push(At), null;
    case "title":
      e.push(wt("title")), i = null;
      for (p in n) if (ze.call(n, p) && (l = n[p], l != null)) switch (p) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(O(434));
        default:
          We(e, r, p, l);
      }
      return e.push(At), i;
    case "listing":
    case "pre":
      e.push(wt(t)), l = i = null;
      for (u in n) if (ze.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          We(e, r, u, s);
      }
      if (e.push(At), l != null) {
        if (i != null) throw Error(O(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(O(61));
        n = l.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Gl, b(n)) : e.push(b("" + n)));
      }
      return typeof i == "string" && i[0] === `
` && e.push(Gl), i;
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
      e.push(wt(t));
      for (var v in n) if (ze.call(n, v) && (i = n[v], i != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(O(399, t));
        default:
          We(e, r, v, i);
      }
      return e.push(pd), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Kl(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push(Tv), Kl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Kl(e, n, t, r);
      e.push(wt(t)), l = i = null;
      for (a in n) if (ze.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          Ph(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Nh(a) && typeof s != "function" && typeof s != "symbol" && e.push(bt, b(a), zn, b(he(s)), yn);
      }
      return e.push(At), ui(e, l, i), i;
  }
}
var Pv = $("</"), Mv = $(">"), jv = $('<template id="'), Rv = $('"></template>'), zv = $("<!--$-->"), Fv = $('<!--$?--><template id="'), Lv = $('"></template>'), Iv = $("<!--$!-->"), Dv = $("<!--/$-->"), Ov = $("<template"), bv = $('"'), Av = $(' data-dgst="');
$(' data-msg="');
$(' data-stck="');
var Uv = $("></template>");
function md(e, t, n) {
  if (j(e, Fv), n === null) throw Error(O(395));
  return j(e, n), q(e, Lv);
}
var Wv = $('<div hidden id="'), Vv = $('">'), Bv = $("</div>"), Hv = $('<svg aria-hidden="true" style="display:none" id="'), Qv = $('">'), Yv = $("</svg>"), Xv = $('<math aria-hidden="true" style="display:none" id="'), Kv = $('">'), Gv = $("</math>"), Zv = $('<table hidden id="'), Jv = $('">'), qv = $("</table>"), ew = $('<table hidden><tbody id="'), tw = $('">'), nw = $("</tbody></table>"), rw = $('<table hidden><tr id="'), ow = $('">'), iw = $("</tr></table>"), lw = $('<table hidden><colgroup id="'), sw = $('">'), uw = $("</colgroup></table>");
function aw(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return j(e, Wv), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, Vv);
    case 2:
      return j(e, Hv), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, Qv);
    case 3:
      return j(e, Xv), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, Kv);
    case 4:
      return j(e, Zv), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, Jv);
    case 5:
      return j(e, ew), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, tw);
    case 6:
      return j(e, rw), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, ow);
    case 7:
      return j(
        e,
        lw
      ), j(e, t.segmentPrefix), j(e, b(r.toString(16))), q(e, sw);
    default:
      throw Error(O(397));
  }
}
function cw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return q(e, Bv);
    case 2:
      return q(e, Yv);
    case 3:
      return q(e, Gv);
    case 4:
      return q(e, qv);
    case 5:
      return q(e, nw);
    case 6:
      return q(e, iw);
    case 7:
      return q(e, uw);
    default:
      throw Error(O(397));
  }
}
var dw = $('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), fw = $('$RS("'), pw = $('","'), hw = $('")<\/script>'), mw = $('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), yw = $('$RC("'), gw = $('","'), vw = $('")<\/script>'), ww = $('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), xw = $('$RX("'), kw = $('"'), Sw = $(")<\/script>"), Zl = $(","), Cw = /[<\u2028\u2029]/g;
function Jl(e) {
  return JSON.stringify(e).replace(Cw, function(t) {
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
var Vr = Object.assign, _w = Symbol.for("react.element"), Mh = Symbol.for("react.portal"), jh = Symbol.for("react.fragment"), Rh = Symbol.for("react.strict_mode"), zh = Symbol.for("react.profiler"), Fh = Symbol.for("react.provider"), Lh = Symbol.for("react.context"), Ih = Symbol.for("react.forward_ref"), Dh = Symbol.for("react.suspense"), Oh = Symbol.for("react.suspense_list"), bh = Symbol.for("react.memo"), pa = Symbol.for("react.lazy"), Ew = Symbol.for("react.scope"), $w = Symbol.for("react.debug_trace_mode"), Tw = Symbol.for("react.legacy_hidden"), Nw = Symbol.for("react.default_value"), yd = Symbol.iterator;
function eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jh:
      return "Fragment";
    case Mh:
      return "Portal";
    case zh:
      return "Profiler";
    case Rh:
      return "StrictMode";
    case Dh:
      return "Suspense";
    case Oh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Lh:
      return (e.displayName || "Context") + ".Consumer";
    case Fh:
      return (e._context.displayName || "Context") + ".Provider";
    case Ih:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bh:
      return t = e.displayName || null, t !== null ? t : eu(e.type) || "Memo";
    case pa:
      t = e._payload, e = e._init;
      try {
        return eu(e(t));
      } catch {
      }
  }
  return null;
}
var Ah = {};
function gd(e, t) {
  if (e = e.contextTypes, !e) return Ah;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var Sn = null;
function dl(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(O(401));
    } else {
      if (n === null) throw Error(O(401));
      dl(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Uh(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && Uh(e);
}
function Wh(e) {
  var t = e.parent;
  t !== null && Wh(t), e.context._currentValue = e.value;
}
function Vh(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(O(402));
  e.depth === t.depth ? dl(e, t) : Vh(e, t);
}
function Bh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(O(402));
  e.depth === n.depth ? dl(e, n) : Bh(e, n), t.context._currentValue = t.value;
}
function Ui(e) {
  var t = Sn;
  t !== e && (t === null ? Wh(e) : e === null ? Uh(t) : t.depth === e.depth ? dl(t, e) : t.depth > e.depth ? Vh(t, e) : Bh(t, e), Sn = e);
}
var vd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function wd(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = vd, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Vr({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && vd.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = Vr({}, i, s)) : Vr(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var Pw = { id: 1, overflow: "" };
function tu(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ai(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ai(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - ai(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var ai = Math.clz32 ? Math.clz32 : Rw, Mw = Math.log, jw = Math.LN2;
function Rw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mw(e) / jw | 0) | 0;
}
function zw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fw = typeof Object.is == "function" ? Object.is : zw, It = null, ha = null, ci = null, K = null, jr = !1, Wi = !1, ao = 0, Xt = null, fl = 0;
function gn() {
  if (It === null) throw Error(O(321));
  return It;
}
function xd() {
  if (0 < fl) throw Error(O(312));
  return { memoizedState: null, queue: null, next: null };
}
function ma() {
  return K === null ? ci === null ? (jr = !1, ci = K = xd()) : (jr = !0, K = ci) : K.next === null ? (jr = !1, K = K.next = xd()) : (jr = !0, K = K.next), K;
}
function ya() {
  ha = It = null, Wi = !1, ci = null, fl = 0, K = Xt = null;
}
function Hh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function kd(e, t, n) {
  if (It = gn(), K = ma(), jr) {
    var r = K.queue;
    if (t = r.dispatch, Xt !== null && (n = Xt.get(r), n !== void 0)) {
      Xt.delete(r), r = K.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return K.memoizedState = r, [r, t];
    }
    return [K.memoizedState, t];
  }
  return e = e === Hh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, K.memoizedState = e, e = K.queue = { last: null, dispatch: null }, e = e.dispatch = Lw.bind(null, It, e), [K.memoizedState, e];
}
function Sd(e, t) {
  if (It = gn(), K = ma(), t = t === void 0 ? null : t, K !== null) {
    var n = K.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Fw(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), K.memoizedState = [e, t], e;
}
function Lw(e, t, n) {
  if (25 <= fl) throw Error(O(301));
  if (e === It) if (Wi = !0, e = { action: n, next: null }, Xt === null && (Xt = /* @__PURE__ */ new Map()), n = Xt.get(t), n === void 0) Xt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Iw() {
  throw Error(O(394));
}
function Uo() {
}
var Cd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return gn(), e._currentValue;
}, useMemo: Sd, useReducer: kd, useRef: function(e) {
  It = gn(), K = ma();
  var t = K.memoizedState;
  return t === null ? (e = { current: e }, K.memoizedState = e) : t;
}, useState: function(e) {
  return kd(Hh, e);
}, useInsertionEffect: Uo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Sd(function() {
    return e;
  }, t);
}, useImperativeHandle: Uo, useEffect: Uo, useDebugValue: Uo, useDeferredValue: function(e) {
  return gn(), e;
}, useTransition: function() {
  return gn(), [!1, Iw];
}, useId: function() {
  var e = ha.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ai(e) - 1)).toString(32) + t;
  var n = di;
  if (n === null) throw Error(O(404));
  return t = ao++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return gn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(O(407));
  return n();
} }, di = null, ql = Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Dw(e) {
  return console.error(e), null;
}
function Rr() {
}
function Ow(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Dw : o, onAllReady: i === void 0 ? Rr : i, onShellReady: l === void 0 ? Rr : l, onShellError: s === void 0 ? Rr : s, onFatalError: u === void 0 ? Rr : u }, n = Vi(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ga(t, e, null, n, d, Ah, null, Pw), a.push(e), t;
}
function ga(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Xh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Vi(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function co(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Bi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, Th(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function _d(e, t, n, r, o) {
  for (It = {}, ha = t, ao = 0, e = n(r, o); Wi; ) Wi = !1, ao = 0, fl += 1, K = null, e = n(r, o);
  return ya(), e;
}
function Ed(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(O(108, eu(r) || "Unknown", s));
      r = Vr({}, l, n);
    }
    t.legacyContext = r, Ye(e, t, o), t.legacyContext = l;
  } else Ye(e, t, o);
}
function $d(e, t) {
  if (e && e.defaultProps) {
    t = Vr({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function nu(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = gd(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue : o), wd(i, n, r, o), Ed(e, t, i, n);
  } else {
    i = gd(n, t.legacyContext), o = _d(e, t, n, r, i);
    var l = ao !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) wd(o, n, r, i), Ed(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = tu(r, 1, 0);
      try {
        Ye(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ye(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = Nv(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = Sv(l, n, r), ru(e, t, i), o.formatContext = l, n) {
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
        o.chunks.push(Pv, b(n), Mv);
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case Tw:
      case $w:
      case Rh:
      case zh:
      case jh:
        Ye(e, t, r.children);
        return;
      case Oh:
        Ye(e, t, r.children);
        return;
      case Ew:
        throw Error(O(343));
      case Dh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Vi(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Vi(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (ru(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(fa), a.status = 1, Hi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = co(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ga(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case Ih:
        if (r = _d(e, t, n.render, r, o), ao !== 0) {
          n = t.treeContext, t.treeContext = tu(n, 1, 0);
          try {
            Ye(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ye(e, t, r);
        return;
      case bh:
        n = n.type, r = $d(n, r), nu(e, t, n, r, o);
        return;
      case Fh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue, n._currentValue = r, l = Sn, Sn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Ye(e, t, o), e = Sn, e === null) throw Error(O(403));
        r = e.parentValue, e.context._currentValue = r === Nw ? e.context._defaultValue : r, e = Sn = e.parent, t.context = e;
        return;
      case Lh:
        r = r.children, r = r(n._currentValue), Ye(e, t, r);
        return;
      case pa:
        o = n._init, n = o(n._payload), r = $d(n, r), nu(e, t, n, r, void 0);
        return;
    }
    throw Error(O(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function Ye(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case _w:
        nu(e, t, n.type, n.props, n.ref);
        return;
      case Mh:
        throw Error(O(257));
      case pa:
        var r = n._init;
        n = r(n._payload), Ye(e, t, n);
        return;
    }
    if (qs(n)) {
      Td(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = yd && n[yd] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Td(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = ad(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = ad(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Td(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = tu(i, r, o);
    try {
      ru(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function ru(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Ye(e, t, n);
  } catch (u) {
    if (ya(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Vi(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ga(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ui(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ui(i), u;
  }
}
function bw(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Yh(this, t, e);
}
function Qh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(O(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Qh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Hi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Hi(e, n);
  } else e.completedSegments.push(t);
}
function Yh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(O(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Rr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Hi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(bw, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Hi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Xh(e) {
  if (e.status !== 2) {
    var t = Sn, n = ql.current;
    ql.current = Cd;
    var r = di;
    di = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Ui(l.context);
          try {
            Ye(s, l, l.node), u.lastPushedText && u.textEmbedded && u.chunks.push(fa), l.abortSet.delete(l), u.status = 1, Yh(s, l.blockedBoundary, u);
          } catch (g) {
            if (ya(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, p = g, m = co(s, p);
              if (d === null ? Bi(s, p) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && va(e, e.destination);
    } catch (g) {
      co(e, g), Bi(e, g);
    } finally {
      di = r, ql.current = n, n === Cd && Ui(t);
    }
  }
}
function Wo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, j(t, jv), j(t, e.placeholderPrefix), e = b(r.toString(16)), j(t, e), q(t, Rv);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) j(t, r[i]);
        o = pl(e, t, o);
      }
      for (; i < r.length - 1; i++) j(t, r[i]);
      return i < r.length && (o = q(t, r[i])), o;
    default:
      throw Error(O(390));
  }
}
function pl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Wo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, q(t, Iv), j(t, Ov), r && (j(t, Av), j(t, b(he(r))), j(t, bv)), q(t, Uv), Wo(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    o = $(o.boundaryPrefix + i.toString(16)), r = r.id = o, md(t, e.responseState, r), Wo(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), md(t, e.responseState, r.id), Wo(e, t, n);
  else {
    if (q(t, zv), n = r.completedSegments, n.length !== 1) throw Error(O(391));
    pl(e, t, n[0]);
  }
  return q(t, Dv);
}
function Nd(e, t, n) {
  return aw(t, e.responseState, n.formatContext, n.id), pl(e, t, n), cw(t, n.formatContext);
}
function Pd(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Kh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, j(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? j(t, yw) : (e.sentCompleteBoundaryFunction = !0, j(t, mw)), r === null) throw Error(O(395));
  return n = b(n.toString(16)), j(t, r), j(t, gw), j(t, e.segmentPrefix), j(t, n), q(t, vw);
}
function Kh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(O(392));
    return Nd(e, t, r);
  }
  return Nd(e, t, r), e = e.responseState, j(t, e.startInlineScript), e.sentCompleteSegmentFunction ? j(t, fw) : (e.sentCompleteSegmentFunction = !0, j(t, dw)), j(t, e.segmentPrefix), o = b(o.toString(16)), j(t, o), j(t, pw), j(t, e.placeholderPrefix), j(t, o), q(t, hw);
}
function va(e, t) {
  He = new Uint8Array(512), Qe = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      pl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) j(t, r[n]);
      n < r.length && q(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, p = l.errorComponentStack;
      if (j(r, s.startInlineScript), s.sentClientRenderFunction ? j(r, xw) : (s.sentClientRenderFunction = !0, j(
        r,
        ww
      )), u === null) throw Error(O(395));
      j(r, u), j(r, kw), (a || d || p) && (j(r, Zl), j(r, b(Jl(a || "")))), (d || p) && (j(r, Zl), j(r, b(Jl(d || "")))), p && (j(r, Zl), j(r, b(Jl(p)))), q(r, Sw);
    }
    o.splice(0, i);
    var m = e.completedBoundaries;
    for (i = 0; i < m.length; i++) Pd(e, t, m[i]);
    m.splice(0, i), id(t), He = new Uint8Array(512), Qe = 0;
    var v = e.partialBoundaries;
    for (i = 0; i < v.length; i++) {
      var g = v[i];
      e: {
        o = e, l = t;
        var x = g.completedSegments;
        for (s = 0; s < x.length; s++) if (!Kh(
          o,
          l,
          g,
          x[s]
        )) {
          s++, x.splice(0, s);
          var k = !1;
          break e;
        }
        x.splice(0, s), k = !0;
      }
      if (!k) {
        e.destination = null, i++, v.splice(0, i);
        return;
      }
    }
    v.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++) Pd(e, t, f[i]);
    f.splice(0, i);
  } finally {
    id(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function Md(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Qh(r, e, t);
    }), n.clear(), e.destination !== null && va(e, e.destination);
  } catch (r) {
    co(e, r), Bi(e, r);
  }
}
aa.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, i, l = new Promise(function(d, p) {
      i = d, o = p;
    }), s = Ow(e, xv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), kv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
      var d = new ReadableStream({ type: "bytes", pull: function(p) {
        if (s.status === 1) s.status = 2, Th(p, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = p;
          try {
            va(s, p);
          } catch (m) {
            co(s, m), Bi(s, m);
          }
        }
      }, cancel: function() {
        Md(s);
      } }, { highWaterMark: 0 });
      d.allReady = l, n(d);
    }, function(d) {
      l.catch(function() {
      }), r(d);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        Md(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Xh(s);
  });
};
aa.version = "18.3.1";
var ar, Gh;
ar = ur, Gh = aa;
ar.version;
var Aw = ar.renderToString;
ar.renderToStaticMarkup;
ar.renderToNodeStream;
ar.renderToStaticNodeStream;
Gh.renderToReadableStream;
var Zh = { exports: {} }, Uw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Ww = Uw, Vw = Ww;
function Jh() {
}
function qh() {
}
qh.resetWarningCache = Jh;
var Bw = function() {
  function e(r, o, i, l, s, u) {
    if (u !== Vw) {
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
    checkPropTypes: qh,
    resetWarningCache: Jh
  };
  return n.PropTypes = n, n;
};
Zh.exports = Bw();
var Hw = Zh.exports;
const ft = /* @__PURE__ */ Rd(Hw);
var Qw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function em(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Yw = em(function(e) {
  (function(t) {
    var n = function(k, f, c) {
      if (!u(f) || d(f) || p(f) || m(f) || s(f)) return f;
      var h, w = 0, S = 0;
      if (a(f)) for (h = [], S = f.length; w < S; w++) h.push(n(k, f[w], c));
      else for (var _ in h = {}, f) Object.prototype.hasOwnProperty.call(f, _) && (h[k(_, c)] = n(k, f[_], c));
      return h;
    }, r = function(k) {
      return v(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(f, c) {
        return c ? c.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var f = r(k);
      return f.substr(0, 1).toUpperCase() + f.substr(1);
    }, i = function(k, f) {
      return function(c, h) {
        var w = (h = h || {}).separator || "_", S = h.split || /(?=[A-Z])/;
        return c.split(S).join(w);
      }(k, f).toLowerCase();
    }, l = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return l.call(k) == "[object Array]";
    }, d = function(k) {
      return l.call(k) == "[object Date]";
    }, p = function(k) {
      return l.call(k) == "[object RegExp]";
    }, m = function(k) {
      return l.call(k) == "[object Boolean]";
    }, v = function(k) {
      return (k -= 0) == k;
    }, g = function(k, f) {
      var c = f && "process" in f ? f.process : f;
      return typeof c != "function" ? k : function(h, w) {
        return c(h, k, w);
      };
    }, x = { camelize: r, decamelize: i, pascalize: o, depascalize: i, camelizeKeys: function(k, f) {
      return n(g(r, f), k);
    }, decamelizeKeys: function(k, f) {
      return n(g(i, f), k, f);
    }, pascalizeKeys: function(k, f) {
      return n(g(o, f), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = x : t.humps = x;
  })(Qw);
}).decamelize, Xw = function(e) {
  if (Array.isArray(e)) return e;
}, Kw = function(e, t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
    var n = [], r = !0, o = !1, i = void 0;
    try {
      for (var l, s = e[Symbol.iterator](); !(r = (l = s.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0) ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        r || s.return == null || s.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}, jd = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}, Gw = function(e, t) {
  if (e) {
    if (typeof e == "string") return jd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? jd(e, t) : void 0;
  }
}, Zw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Jw = function(e, t) {
  return Xw(e) || Kw(e, t) || Gw(e, t) || Zw();
}, tm = em(function(e) {
  function t() {
    return e.exports = t = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
      }
      return n;
    }, t.apply(this, arguments);
  }
  e.exports = t;
}), qw = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, nm = function(e, t) {
  if (e == null) return {};
  var n, r, o = qw(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, ex = M.createContext(null);
function rm(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = nm(e, ["children"]);
  return typeof n != "string" && (n = Aw(n)), Xe.createElement("template", tm({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function om(e) {
  var t = e.root, n = e.children;
  return Bp.createPortal(n === void 0 ? null : n, t);
}
function tx(e) {
  var t = M.forwardRef(function(n, r) {
    var o, i, l = n.mode, s = l === void 0 ? "open" : l, u = n.delegatesFocus, a = u !== void 0 && u, d = n.styleSheets, p = d === void 0 ? [] : d, m = n.ssr, v = m !== void 0 && m, g = n.children, x = nm(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (i = M.useRef((o = r) && o.current), M.useEffect(function() {
      o && (o.current = i.current);
    }, [o]), i), f = M.useState(null), c = Jw(f, 2), h = c[0], w = c[1], S = "node_".concat(s).concat(a);
    return M.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), v) {
          var _ = k.current.shadowRoot;
          return void w(_);
        }
        var E = k.current.attachShadow({ mode: s, delegatesFocus: a });
        p.length > 0 && (E.adoptedStyleSheets = p), w(E);
      } catch (T) {
        (function(U) {
          var z = U.error, Y = U.styleSheets, H = U.root;
          switch (z.name) {
            case "NotSupportedError":
              Y.length > 0 && (H.adoptedStyleSheets = Y);
              break;
            default:
              throw z;
          }
        })({ error: T, styleSheets: p, root: h });
      }
    }, [r, k, p]), Xe.createElement(Xe.Fragment, null, Xe.createElement(e.tag, tm({ key: S, ref: k }, x), (h || v) && Xe.createElement(ex.Provider, { value: h }, v ? Xe.createElement(rm, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: v, children: g })) : Xe.createElement(om, { root: h }, e.render({ root: h, ssr: v, children: g })))));
  });
  return t.propTypes = { mode: ft.oneOf(["open", "closed"]), delegatesFocus: ft.bool, styleSheets: ft.arrayOf(ft.instanceOf(globalThis.CSSStyleSheet)), ssr: ft.bool, children: ft.node }, t;
}
rm.propTypes = { children: ft.oneOfType([ft.string, ft.node]) }, om.propTypes = { root: ft.object.isRequired, children: ft.node };
var es = /* @__PURE__ */ new Map();
function nx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var i = Yw(o, { separator: "-" }), l = "".concat(t, "-").concat(i);
    return es.has(l) || es.set(l, tx({ tag: i, render: n })), es.get(l);
  } });
}
var rx = nx();
const ox = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.block{display:block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.size-2{width:.5rem;height:.5rem}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-bounce{animation:bounce 1s infinite}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.self-start{align-self:flex-start}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.fill-current{fill:currentColor}.stroke-none{stroke:none}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.\\[animation-delay\\:-0\\.1s\\]{animation-delay:-.1s}.\\[animation-delay\\:-0\\.2s\\]{animation-delay:-.2s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-red-900:hover{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}';
function ix(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function im({ ticketdeskId: e }) {
  const [, t] = e.split("_"), [n, r] = M.useState(!1), [o, i] = M.useState(!1), {
    messages: l,
    sendMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: d,
    getRecentChats: p,
    updateProfile: m,
    errorMessage: v,
    setErrorMessage: g,
    sessions: x,
    selectedSession: k,
    isConnected: f,
    isLoading: c,
    config: h,
    chatState: w
  } = j1({
    ticketdeskId: e
  }), S = (_) => {
    if (_) {
      const E = Ys(`ti_${t}_session_id`);
      d(E);
    }
    r(_);
  };
  return c === !0 || !h ? null : /* @__PURE__ */ y.jsxs(rx.div, { style: { display: "block" }, children: [
    /* @__PURE__ */ y.jsxs("style", { children: [
      `
        :host {
          all: initial;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: #111;
          display: block;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }
      `,
      ix(ox)
    ] }),
    /* @__PURE__ */ y.jsx(
      mg,
      {
        isOpen: n,
        onClick: () => S(!n),
        config: h
      }
    ),
    /* @__PURE__ */ y.jsx(
      g1,
      {
        ticketdeskId: e,
        isOpen: n,
        isMaximized: o,
        isConnected: f,
        config: h,
        chatState: w,
        messages: l,
        sessions: x,
        selectedSession: k,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: d,
        onGetRecentChats: p,
        onUpdateProfile: m,
        errorMessage: v,
        setErrorMessage: g,
        onClose: () => r(!1),
        onToggleMaximize: () => i(!o),
        onSendMessage: s
      }
    )
  ] });
}
let _r = null, Et = null;
function lx(e) {
  Et || (Et = document.createElement("div"), Et.id = "ticketdesk-ai", Et.setAttribute("style", "color-scheme: light;"), document.body.appendChild(Et));
  const t = () => {
    _r && (_r.unmount(), _r = null), Et && (Et.remove(), Et = null);
  };
  return _r = Ju(Et), _r.render(/* @__PURE__ */ y.jsx(im, { ticketdeskId: e })), { close: t };
}
const sx = Ay(im, {
  props: {
    ticketdeskId: "string"
  }
});
customElements.define("ticketdesk-chatbot", sx);
window.ticketdesk = {
  initChatbot: lx
};
window.TICKETDESK_ID && window.ticketdesk.initChatbot(window.TICKETDESK_ID);
