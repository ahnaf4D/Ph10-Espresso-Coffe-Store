function hp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Nn =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var pp = { exports: {} },
  Ua = {},
  mp = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ts = Symbol.for('react.element'),
  t0 = Symbol.for('react.portal'),
  n0 = Symbol.for('react.fragment'),
  r0 = Symbol.for('react.strict_mode'),
  i0 = Symbol.for('react.profiler'),
  o0 = Symbol.for('react.provider'),
  s0 = Symbol.for('react.context'),
  a0 = Symbol.for('react.forward_ref'),
  l0 = Symbol.for('react.suspense'),
  u0 = Symbol.for('react.memo'),
  c0 = Symbol.for('react.lazy'),
  af = Symbol.iterator;
function d0(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (af && e[af]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var gp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vp = Object.assign,
  wp = {};
function Fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wp),
    (this.updater = n || gp);
}
Fi.prototype.isReactComponent = {};
Fi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Fi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function yp() {}
yp.prototype = Fi.prototype;
function rc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wp),
    (this.updater = n || gp);
}
var ic = (rc.prototype = new yp());
ic.constructor = rc;
vp(ic, Fi.prototype);
ic.isPureReactComponent = !0;
var lf = Array.isArray,
  xp = Object.prototype.hasOwnProperty,
  oc = { current: null },
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sp(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      xp.call(t, r) && !Ep.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var c = Array(u), h = 0; h < u; h++) c[h] = arguments[h + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: ts,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: oc.current,
  };
}
function f0(e, t) {
  return {
    $$typeof: ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ts;
}
function h0(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var uf = /\/+/g;
function pl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? h0('' + e.key)
    : t.toString(36);
}
function Vs(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ts:
          case t0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + pl(a, 0) : r),
      lf(i)
        ? ((n = ''),
          e != null && (n = e.replace(uf, '$&/') + '/'),
          Vs(i, t, n, '', function (h) {
            return h;
          }))
        : i != null &&
          (sc(i) &&
            (i = f0(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(uf, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), lf(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var c = r + pl(o, u);
      a += Vs(o, t, n, c, i);
    }
  else if (((c = d0(e)), typeof c == 'function'))
    for (e = c.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (c = r + pl(o, u++)), (a += Vs(o, t, n, c, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function _s(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vs(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function p0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var lt = { current: null },
  Hs = { transition: null },
  m0 = {
    ReactCurrentDispatcher: lt,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: oc,
  };
ie.Children = {
  map: _s,
  forEach: function (e, t, n) {
    _s(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _s(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _s(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
ie.Component = Fi;
ie.Fragment = n0;
ie.Profiler = i0;
ie.PureComponent = rc;
ie.StrictMode = r0;
ie.Suspense = l0;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m0;
ie.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = vp({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = oc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (c in t)
      xp.call(t, c) &&
        !Ep.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    u = Array(c);
    for (var h = 0; h < c; h++) u[h] = arguments[h + 2];
    r.children = u;
  }
  return { $$typeof: ts, type: e.type, key: i, ref: o, props: r, _owner: a };
};
ie.createContext = function (e) {
  return (
    (e = {
      $$typeof: s0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: o0, _context: e }),
    (e.Consumer = e)
  );
};
ie.createElement = Sp;
ie.createFactory = function (e) {
  var t = Sp.bind(null, e);
  return (t.type = e), t;
};
ie.createRef = function () {
  return { current: null };
};
ie.forwardRef = function (e) {
  return { $$typeof: a0, render: e };
};
ie.isValidElement = sc;
ie.lazy = function (e) {
  return { $$typeof: c0, _payload: { _status: -1, _result: e }, _init: p0 };
};
ie.memo = function (e, t) {
  return { $$typeof: u0, type: e, compare: t === void 0 ? null : t };
};
ie.startTransition = function (e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
ie.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ie.useCallback = function (e, t) {
  return lt.current.useCallback(e, t);
};
ie.useContext = function (e) {
  return lt.current.useContext(e);
};
ie.useDebugValue = function () {};
ie.useDeferredValue = function (e) {
  return lt.current.useDeferredValue(e);
};
ie.useEffect = function (e, t) {
  return lt.current.useEffect(e, t);
};
ie.useId = function () {
  return lt.current.useId();
};
ie.useImperativeHandle = function (e, t, n) {
  return lt.current.useImperativeHandle(e, t, n);
};
ie.useInsertionEffect = function (e, t) {
  return lt.current.useInsertionEffect(e, t);
};
ie.useLayoutEffect = function (e, t) {
  return lt.current.useLayoutEffect(e, t);
};
ie.useMemo = function (e, t) {
  return lt.current.useMemo(e, t);
};
ie.useReducer = function (e, t, n) {
  return lt.current.useReducer(e, t, n);
};
ie.useRef = function (e) {
  return lt.current.useRef(e);
};
ie.useState = function (e) {
  return lt.current.useState(e);
};
ie.useSyncExternalStore = function (e, t, n) {
  return lt.current.useSyncExternalStore(e, t, n);
};
ie.useTransition = function () {
  return lt.current.useTransition();
};
ie.version = '18.2.0';
mp.exports = ie;
var D = mp.exports;
const vn = nc(D),
  g0 = hp({ __proto__: null, default: vn }, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v0 = D,
  w0 = Symbol.for('react.element'),
  y0 = Symbol.for('react.fragment'),
  x0 = Object.prototype.hasOwnProperty,
  E0 = v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  S0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function bp(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) x0.call(t, r) && !S0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: w0,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: E0.current,
  };
}
Ua.Fragment = y0;
Ua.jsx = bp;
Ua.jsxs = bp;
pp.exports = Ua;
var p = pp.exports,
  Yl = {},
  _p = { exports: {} },
  St = {},
  Cp = { exports: {} },
  kp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, q) {
    var J = N.length;
    N.push(q);
    e: for (; 0 < J; ) {
      var se = (J - 1) >>> 1,
        pe = N[se];
      if (0 < i(pe, q)) (N[se] = q), (N[J] = pe), (J = se);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var q = N[0],
      J = N.pop();
    if (J !== q) {
      N[0] = J;
      e: for (var se = 0, pe = N.length, C = pe >>> 1; se < C; ) {
        var Me = 2 * (se + 1) - 1,
          Ke = N[Me],
          ze = Me + 1,
          _t = N[ze];
        if (0 > i(Ke, J))
          ze < pe && 0 > i(_t, Ke)
            ? ((N[se] = _t), (N[ze] = J), (se = ze))
            : ((N[se] = Ke), (N[Me] = J), (se = Me));
        else if (ze < pe && 0 > i(_t, J)) (N[se] = _t), (N[ze] = J), (se = ze);
        else break e;
      }
    }
    return q;
  }
  function i(N, q) {
    var J = N.sortIndex - q.sortIndex;
    return J !== 0 ? J : N.id - q.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var c = [],
    h = [],
    m = 1,
    g = null,
    x = 3,
    I = !1,
    T = !1,
    k = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    v = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(N) {
    for (var q = n(h); q !== null; ) {
      if (q.callback === null) r(h);
      else if (q.startTime <= N)
        r(h), (q.sortIndex = q.expirationTime), t(c, q);
      else break;
      q = n(h);
    }
  }
  function R(N) {
    if (((k = !1), E(N), !T))
      if (n(c) !== null) (T = !0), Gt(M);
      else {
        var q = n(h);
        q !== null && ge(R, q.startTime - N);
      }
  }
  function M(N, q) {
    (T = !1), k && ((k = !1), y(B), (B = -1)), (I = !0);
    var J = x;
    try {
      for (
        E(q), g = n(c);
        g !== null && (!(g.expirationTime > q) || (N && !oe()));

      ) {
        var se = g.callback;
        if (typeof se == 'function') {
          (g.callback = null), (x = g.priorityLevel);
          var pe = se(g.expirationTime <= q);
          (q = e.unstable_now()),
            typeof pe == 'function' ? (g.callback = pe) : g === n(c) && r(c),
            E(q);
        } else r(c);
        g = n(c);
      }
      if (g !== null) var C = !0;
      else {
        var Me = n(h);
        Me !== null && ge(R, Me.startTime - q), (C = !1);
      }
      return C;
    } finally {
      (g = null), (x = J), (I = !1);
    }
  }
  var S = !1,
    O = null,
    B = -1,
    H = 5,
    Q = -1;
  function oe() {
    return !(e.unstable_now() - Q < H);
  }
  function Se() {
    if (O !== null) {
      var N = e.unstable_now();
      Q = N;
      var q = !0;
      try {
        q = O(!0, N);
      } finally {
        q ? ke() : ((S = !1), (O = null));
      }
    } else S = !1;
  }
  var ke;
  if (typeof v == 'function')
    ke = function () {
      v(Se);
    };
  else if (typeof MessageChannel < 'u') {
    var ct = new MessageChannel(),
      Tn = ct.port2;
    (ct.port1.onmessage = Se),
      (ke = function () {
        Tn.postMessage(null);
      });
  } else
    ke = function () {
      L(Se, 0);
    };
  function Gt(N) {
    (O = N), S || ((S = !0), ke());
  }
  function ge(N, q) {
    B = L(function () {
      N(e.unstable_now());
    }, q);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      T || I || ((T = !0), Gt(M));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (N) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = x;
      }
      var J = x;
      x = q;
      try {
        return N();
      } finally {
        x = J;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, q) {
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
      var J = x;
      x = N;
      try {
        return q();
      } finally {
        x = J;
      }
    }),
    (e.unstable_scheduleCallback = function (N, q, J) {
      var se = e.unstable_now();
      switch (
        (typeof J == 'object' && J !== null
          ? ((J = J.delay), (J = typeof J == 'number' && 0 < J ? se + J : se))
          : (J = se),
        N)
      ) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return (
        (pe = J + pe),
        (N = {
          id: m++,
          callback: q,
          priorityLevel: N,
          startTime: J,
          expirationTime: pe,
          sortIndex: -1,
        }),
        J > se
          ? ((N.sortIndex = J),
            t(h, N),
            n(c) === null &&
              N === n(h) &&
              (k ? (y(B), (B = -1)) : (k = !0), ge(R, J - se)))
          : ((N.sortIndex = pe), t(c, N), T || I || ((T = !0), Gt(M))),
        N
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (N) {
      var q = x;
      return function () {
        var J = x;
        x = q;
        try {
          return N.apply(this, arguments);
        } finally {
          x = J;
        }
      };
    });
})(kp);
Cp.exports = kp;
var b0 = Cp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = D,
  Et = b0;
function j(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Tp = new Set(),
  No = {};
function Mr(e, t) {
  Pi(e, t), Pi(e + 'Capture', t);
}
function Pi(e, t) {
  for (No[e] = t, e = 0; e < t.length; e++) Tp.add(t[e]);
}
var En = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Jl = Object.prototype.hasOwnProperty,
  _0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cf = {},
  df = {};
function C0(e) {
  return Jl.call(df, e)
    ? !0
    : Jl.call(cf, e)
    ? !1
    : _0.test(e)
    ? (df[e] = !0)
    : ((cf[e] = !0), !1);
}
function k0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function I0(e, t, n, r) {
  if (t === null || typeof t > 'u' || k0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ut(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Ge = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ge[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ge[e] = new ut(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ge[e] = new ut(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ge[e] = new ut(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ge[e] = new ut(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ge[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ac = /[\-:]([a-z])/g;
function lc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    Ge[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ac, lc);
    Ge[t] = new ut(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ac, lc);
  Ge[t] = new ut(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ge[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new ut(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ge[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uc(e, t, n, r) {
  var i = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (I0(t, n, i, r) && (n = null),
    r || i === null
      ? C0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var In = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cs = Symbol.for('react.element'),
  ii = Symbol.for('react.portal'),
  oi = Symbol.for('react.fragment'),
  cc = Symbol.for('react.strict_mode'),
  Xl = Symbol.for('react.profiler'),
  Pp = Symbol.for('react.provider'),
  Ap = Symbol.for('react.context'),
  dc = Symbol.for('react.forward_ref'),
  Zl = Symbol.for('react.suspense'),
  eu = Symbol.for('react.suspense_list'),
  fc = Symbol.for('react.memo'),
  Dn = Symbol.for('react.lazy'),
  Rp = Symbol.for('react.offscreen'),
  ff = Symbol.iterator;
function to(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ff && e[ff]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Ce = Object.assign,
  ml;
function mo(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || '';
    }
  return (
    `
` +
    ml +
    e
  );
}
var gl = !1;
function vl(e, t) {
  if (!e || gl) return '';
  gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        r = h;
      }
      e();
    }
  } catch (h) {
    if (h && r && typeof h.stack == 'string') {
      for (
        var i = h.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          u = o.length - 1;
        1 <= a && 0 <= u && i[a] !== o[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (i[a] !== o[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || i[a] !== o[u])) {
                var c =
                  `
` + i[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? mo(e) : '';
}
function T0(e) {
  switch (e.tag) {
    case 5:
      return mo(e.type);
    case 16:
      return mo('Lazy');
    case 13:
      return mo('Suspense');
    case 19:
      return mo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return '';
  }
}
function tu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case oi:
      return 'Fragment';
    case ii:
      return 'Portal';
    case Xl:
      return 'Profiler';
    case cc:
      return 'StrictMode';
    case Zl:
      return 'Suspense';
    case eu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ap:
        return (e.displayName || 'Context') + '.Consumer';
      case Pp:
        return (e._context.displayName || 'Context') + '.Provider';
      case dc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case fc:
        return (
          (t = e.displayName || null), t !== null ? t : tu(e.type) || 'Memo'
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return tu(e(t));
        } catch {}
    }
  return null;
}
function P0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return tu(t);
    case 8:
      return t === cc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function nr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Np(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function A0(e) {
  var t = Np(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = '' + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ks(e) {
  e._valueTracker || (e._valueTracker = A0(e));
}
function Op(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Np(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ia(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function nu(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Lp(e, t) {
  (t = t.checked), t != null && uc(e, 'checked', t, !1);
}
function ru(e, t) {
  Lp(e, t);
  var n = nr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? iu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && iu(e, t.type, nr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function iu(e, t, n) {
  (t !== 'number' || ia(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var go = Array.isArray;
function yi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + nr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ou(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function mf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (go(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: nr(n) };
}
function jp(e, t) {
  var n = nr(t.value),
    r = nr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function gf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Dp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function su(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Dp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Is,
  Mp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Is = Is || document.createElement('div'),
          Is.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Is.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Oo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Eo = {
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
    strokeWidth: !0,
  },
  R0 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Eo).forEach(function (e) {
  R0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Eo[t] = Eo[e]);
  });
});
function Up(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Eo.hasOwnProperty(e) && Eo[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Bp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Up(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var N0 = Ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function au(e, t) {
  if (t) {
    if (N0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function lu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var uu = null;
function hc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var cu = null,
  xi = null,
  Ei = null;
function vf(e) {
  if ((e = is(e))) {
    if (typeof cu != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Ha(t)), cu(e.stateNode, e.type, t));
  }
}
function Fp(e) {
  xi ? (Ei ? Ei.push(e) : (Ei = [e])) : (xi = e);
}
function zp() {
  if (xi) {
    var e = xi,
      t = Ei;
    if (((Ei = xi = null), vf(e), t)) for (e = 0; e < t.length; e++) vf(t[e]);
  }
}
function Vp(e, t) {
  return e(t);
}
function Hp() {}
var wl = !1;
function Wp(e, t, n) {
  if (wl) return e(t, n);
  wl = !0;
  try {
    return Vp(e, t, n);
  } finally {
    (wl = !1), (xi !== null || Ei !== null) && (Hp(), zp());
  }
}
function Lo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ha(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var du = !1;
if (En)
  try {
    var no = {};
    Object.defineProperty(no, 'passive', {
      get: function () {
        du = !0;
      },
    }),
      window.addEventListener('test', no, no),
      window.removeEventListener('test', no, no);
  } catch {
    du = !1;
  }
function O0(e, t, n, r, i, o, a, u, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (m) {
    this.onError(m);
  }
}
var So = !1,
  oa = null,
  sa = !1,
  fu = null,
  L0 = {
    onError: function (e) {
      (So = !0), (oa = e);
    },
  };
function j0(e, t, n, r, i, o, a, u, c) {
  (So = !1), (oa = null), O0.apply(L0, arguments);
}
function D0(e, t, n, r, i, o, a, u, c) {
  if ((j0.apply(this, arguments), So)) {
    if (So) {
      var h = oa;
      (So = !1), (oa = null);
    } else throw Error(j(198));
    sa || ((sa = !0), (fu = h));
  }
}
function Ur(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $p(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function wf(e) {
  if (Ur(e) !== e) throw Error(j(188));
}
function M0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ur(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wf(i), e;
        if (o === r) return wf(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (u === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = o.child; u; ) {
          if (u === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (u === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Gp(e) {
  return (e = M0(e)), e !== null ? Kp(e) : null;
}
function Kp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qp = Et.unstable_scheduleCallback,
  yf = Et.unstable_cancelCallback,
  U0 = Et.unstable_shouldYield,
  B0 = Et.unstable_requestPaint,
  Oe = Et.unstable_now,
  F0 = Et.unstable_getCurrentPriorityLevel,
  pc = Et.unstable_ImmediatePriority,
  qp = Et.unstable_UserBlockingPriority,
  aa = Et.unstable_NormalPriority,
  z0 = Et.unstable_LowPriority,
  Yp = Et.unstable_IdlePriority,
  Ba = null,
  Zt = null;
function V0(e) {
  if (Zt && typeof Zt.onCommitFiberRoot == 'function')
    try {
      Zt.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : $0,
  H0 = Math.log,
  W0 = Math.LN2;
function $0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((H0(e) / W0) | 0)) | 0;
}
var Ts = 64,
  Ps = 4194304;
function vo(e) {
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
function la(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~i;
    u !== 0 ? (r = vo(u)) : ((o &= a), o !== 0 && (r = vo(o)));
  } else (a = n & ~i), a !== 0 ? (r = vo(a)) : o !== 0 && (r = vo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function G0(e, t) {
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
function K0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Vt(o),
      u = 1 << a,
      c = i[a];
    c === -1
      ? (!(u & n) || u & r) && (i[a] = G0(u, t))
      : c <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function hu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jp() {
  var e = Ts;
  return (Ts <<= 1), !(Ts & 4194240) && (Ts = 64), e;
}
function yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ns(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function Q0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function mc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var he = 0;
function Xp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zp,
  gc,
  em,
  tm,
  nm,
  pu = !1,
  As = [],
  Gn = null,
  Kn = null,
  Qn = null,
  jo = new Map(),
  Do = new Map(),
  Un = [],
  q0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function xf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Gn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Kn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Qn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      jo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Do.delete(t.pointerId);
  }
}
function ro(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = is(t)), t !== null && gc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Y0(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Gn = ro(Gn, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Kn = ro(Kn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Qn = ro(Qn, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return jo.set(o, ro(jo.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Do.set(o, ro(Do.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function rm(e) {
  var t = Er(e.target);
  if (t !== null) {
    var n = Ur(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $p(n)), t !== null)) {
          (e.blockedOn = t),
            nm(e.priority, function () {
              em(n);
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
function Ws(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uu = r), n.target.dispatchEvent(r), (uu = null);
    } else return (t = is(n)), t !== null && gc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ef(e, t, n) {
  Ws(e) && n.delete(t);
}
function J0() {
  (pu = !1),
    Gn !== null && Ws(Gn) && (Gn = null),
    Kn !== null && Ws(Kn) && (Kn = null),
    Qn !== null && Ws(Qn) && (Qn = null),
    jo.forEach(Ef),
    Do.forEach(Ef);
}
function io(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pu ||
      ((pu = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, J0)));
}
function Mo(e) {
  function t(i) {
    return io(i, e);
  }
  if (0 < As.length) {
    io(As[0], e);
    for (var n = 1; n < As.length; n++) {
      var r = As[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gn !== null && io(Gn, e),
      Kn !== null && io(Kn, e),
      Qn !== null && io(Qn, e),
      jo.forEach(t),
      Do.forEach(t),
      n = 0;
    n < Un.length;
    n++
  )
    (r = Un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Un.length && ((n = Un[0]), n.blockedOn === null); )
    rm(n), n.blockedOn === null && Un.shift();
}
var Si = In.ReactCurrentBatchConfig,
  ua = !0;
function X0(e, t, n, r) {
  var i = he,
    o = Si.transition;
  Si.transition = null;
  try {
    (he = 1), vc(e, t, n, r);
  } finally {
    (he = i), (Si.transition = o);
  }
}
function Z0(e, t, n, r) {
  var i = he,
    o = Si.transition;
  Si.transition = null;
  try {
    (he = 4), vc(e, t, n, r);
  } finally {
    (he = i), (Si.transition = o);
  }
}
function vc(e, t, n, r) {
  if (ua) {
    var i = mu(e, t, n, r);
    if (i === null) Pl(e, t, r, ca, n), xf(e, r);
    else if (Y0(i, e, t, n, r)) r.stopPropagation();
    else if ((xf(e, r), t & 4 && -1 < q0.indexOf(e))) {
      for (; i !== null; ) {
        var o = is(i);
        if (
          (o !== null && Zp(o),
          (o = mu(e, t, n, r)),
          o === null && Pl(e, t, r, ca, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Pl(e, t, r, null, n);
  }
}
var ca = null;
function mu(e, t, n, r) {
  if (((ca = null), (e = hc(r)), (e = Er(e)), e !== null))
    if (((t = Ur(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $p(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ca = e), null;
}
function im(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (F0()) {
        case pc:
          return 1;
        case qp:
          return 4;
        case aa:
        case z0:
          return 16;
        case Yp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wn = null,
  wc = null,
  $s = null;
function om() {
  if ($s) return $s;
  var e,
    t = wc,
    n = t.length,
    r,
    i = 'value' in Wn ? Wn.value : Wn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return ($s = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rs() {
  return !0;
}
function Sf() {
  return !1;
}
function bt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Rs
        : Sf),
      (this.isPropagationStopped = Sf),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    t
  );
}
var zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yc = bt(zi),
  rs = Ce({}, zi, { view: 0, detail: 0 }),
  e1 = bt(rs),
  xl,
  El,
  oo,
  Fa = Ce({}, rs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== oo &&
            (oo && e.type === 'mousemove'
              ? ((xl = e.screenX - oo.screenX), (El = e.screenY - oo.screenY))
              : (El = xl = 0),
            (oo = e)),
          xl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : El;
    },
  }),
  bf = bt(Fa),
  t1 = Ce({}, Fa, { dataTransfer: 0 }),
  n1 = bt(t1),
  r1 = Ce({}, rs, { relatedTarget: 0 }),
  Sl = bt(r1),
  i1 = Ce({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o1 = bt(i1),
  s1 = Ce({}, zi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  a1 = bt(s1),
  l1 = Ce({}, zi, { data: 0 }),
  _f = bt(l1),
  u1 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  c1 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  d1 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function f1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = d1[e]) ? !!t[e] : !1;
}
function xc() {
  return f1;
}
var h1 = Ce({}, rs, {
    key: function (e) {
      if (e.key) {
        var t = u1[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Gs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? c1[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xc,
    charCode: function (e) {
      return e.type === 'keypress' ? Gs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Gs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  p1 = bt(h1),
  m1 = Ce({}, Fa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cf = bt(m1),
  g1 = Ce({}, rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xc,
  }),
  v1 = bt(g1),
  w1 = Ce({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  y1 = bt(w1),
  x1 = Ce({}, Fa, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  E1 = bt(x1),
  S1 = [9, 13, 27, 32],
  Ec = En && 'CompositionEvent' in window,
  bo = null;
En && 'documentMode' in document && (bo = document.documentMode);
var b1 = En && 'TextEvent' in window && !bo,
  sm = En && (!Ec || (bo && 8 < bo && 11 >= bo)),
  kf = ' ',
  If = !1;
function am(e, t) {
  switch (e) {
    case 'keyup':
      return S1.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function lm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var si = !1;
function _1(e, t) {
  switch (e) {
    case 'compositionend':
      return lm(t);
    case 'keypress':
      return t.which !== 32 ? null : ((If = !0), kf);
    case 'textInput':
      return (e = t.data), e === kf && If ? null : e;
    default:
      return null;
  }
}
function C1(e, t) {
  if (si)
    return e === 'compositionend' || (!Ec && am(e, t))
      ? ((e = om()), ($s = wc = Wn = null), (si = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return sm && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var k1 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!k1[e.type] : t === 'textarea';
}
function um(e, t, n, r) {
  Fp(r),
    (t = da(t, 'onChange')),
    0 < t.length &&
      ((n = new yc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _o = null,
  Uo = null;
function I1(e) {
  xm(e, 0);
}
function za(e) {
  var t = ui(e);
  if (Op(t)) return e;
}
function T1(e, t) {
  if (e === 'change') return t;
}
var cm = !1;
if (En) {
  var bl;
  if (En) {
    var _l = 'oninput' in document;
    if (!_l) {
      var Pf = document.createElement('div');
      Pf.setAttribute('oninput', 'return;'),
        (_l = typeof Pf.oninput == 'function');
    }
    bl = _l;
  } else bl = !1;
  cm = bl && (!document.documentMode || 9 < document.documentMode);
}
function Af() {
  _o && (_o.detachEvent('onpropertychange', dm), (Uo = _o = null));
}
function dm(e) {
  if (e.propertyName === 'value' && za(Uo)) {
    var t = [];
    um(t, Uo, e, hc(e)), Wp(I1, t);
  }
}
function P1(e, t, n) {
  e === 'focusin'
    ? (Af(), (_o = t), (Uo = n), _o.attachEvent('onpropertychange', dm))
    : e === 'focusout' && Af();
}
function A1(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return za(Uo);
}
function R1(e, t) {
  if (e === 'click') return za(t);
}
function N1(e, t) {
  if (e === 'input' || e === 'change') return za(t);
}
function O1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == 'function' ? Object.is : O1;
function Bo(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Jl.call(t, i) || !Wt(e[i], t[i])) return !1;
  }
  return !0;
}
function Rf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nf(e, t) {
  var n = Rf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Rf(n);
  }
}
function fm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fm(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hm() {
  for (var e = window, t = ia(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ia(e.document);
  }
  return t;
}
function Sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function L1(e) {
  var t = hm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Nf(n, o));
        var a = Nf(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var j1 = En && 'documentMode' in document && 11 >= document.documentMode,
  ai = null,
  gu = null,
  Co = null,
  vu = !1;
function Of(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vu ||
    ai == null ||
    ai !== ia(r) ||
    ((r = ai),
    'selectionStart' in r && Sc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Co && Bo(Co, r)) ||
      ((Co = r),
      (r = da(gu, 'onSelect')),
      0 < r.length &&
        ((t = new yc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ai))));
}
function Ns(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var li = {
    animationend: Ns('Animation', 'AnimationEnd'),
    animationiteration: Ns('Animation', 'AnimationIteration'),
    animationstart: Ns('Animation', 'AnimationStart'),
    transitionend: Ns('Transition', 'TransitionEnd'),
  },
  Cl = {},
  pm = {};
En &&
  ((pm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete li.animationend.animation,
    delete li.animationiteration.animation,
    delete li.animationstart.animation),
  'TransitionEvent' in window || delete li.transitionend.transition);
function Va(e) {
  if (Cl[e]) return Cl[e];
  if (!li[e]) return e;
  var t = li[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pm) return (Cl[e] = t[n]);
  return e;
}
var mm = Va('animationend'),
  gm = Va('animationiteration'),
  vm = Va('animationstart'),
  wm = Va('transitionend'),
  ym = new Map(),
  Lf =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function ir(e, t) {
  ym.set(e, t), Mr(t, [e]);
}
for (var kl = 0; kl < Lf.length; kl++) {
  var Il = Lf[kl],
    D1 = Il.toLowerCase(),
    M1 = Il[0].toUpperCase() + Il.slice(1);
  ir(D1, 'on' + M1);
}
ir(mm, 'onAnimationEnd');
ir(gm, 'onAnimationIteration');
ir(vm, 'onAnimationStart');
ir('dblclick', 'onDoubleClick');
ir('focusin', 'onFocus');
ir('focusout', 'onBlur');
ir(wm, 'onTransitionEnd');
Pi('onMouseEnter', ['mouseout', 'mouseover']);
Pi('onMouseLeave', ['mouseout', 'mouseover']);
Pi('onPointerEnter', ['pointerout', 'pointerover']);
Pi('onPointerLeave', ['pointerout', 'pointerover']);
Mr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Mr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Mr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Mr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Mr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Mr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var wo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  U1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(wo));
function jf(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), D0(r, t, void 0, e), (e.currentTarget = null);
}
function xm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            c = u.instance,
            h = u.currentTarget;
          if (((u = u.listener), c !== o && i.isPropagationStopped())) break e;
          jf(i, u, h), (o = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (c = u.instance),
            (h = u.currentTarget),
            (u = u.listener),
            c !== o && i.isPropagationStopped())
          )
            break e;
          jf(i, u, h), (o = c);
        }
    }
  }
  if (sa) throw ((e = fu), (sa = !1), (fu = null), e);
}
function ye(e, t) {
  var n = t[Su];
  n === void 0 && (n = t[Su] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Em(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), Em(n, e, r, t);
}
var Os = '_reactListening' + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[Os]) {
    (e[Os] = !0),
      Tp.forEach(function (n) {
        n !== 'selectionchange' && (U1.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Os] || ((t[Os] = !0), Tl('selectionchange', !1, t));
  }
}
function Em(e, t, n, r) {
  switch (im(t)) {
    case 1:
      var i = X0;
      break;
    case 4:
      i = Z0;
      break;
    default:
      i = vc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !du ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Pl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = Er(u)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = o = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Wp(function () {
    var h = o,
      m = hc(n),
      g = [];
    e: {
      var x = ym.get(e);
      if (x !== void 0) {
        var I = yc,
          T = e;
        switch (e) {
          case 'keypress':
            if (Gs(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            I = p1;
            break;
          case 'focusin':
            (T = 'focus'), (I = Sl);
            break;
          case 'focusout':
            (T = 'blur'), (I = Sl);
            break;
          case 'beforeblur':
          case 'afterblur':
            I = Sl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            I = bf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            I = n1;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            I = v1;
            break;
          case mm:
          case gm:
          case vm:
            I = o1;
            break;
          case wm:
            I = y1;
            break;
          case 'scroll':
            I = e1;
            break;
          case 'wheel':
            I = E1;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            I = a1;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            I = Cf;
        }
        var k = (t & 4) !== 0,
          L = !k && e === 'scroll',
          y = k ? (x !== null ? x + 'Capture' : null) : x;
        k = [];
        for (var v = h, E; v !== null; ) {
          E = v;
          var R = E.stateNode;
          if (
            (E.tag === 5 &&
              R !== null &&
              ((E = R),
              y !== null && ((R = Lo(v, y)), R != null && k.push(zo(v, R, E)))),
            L)
          )
            break;
          v = v.return;
        }
        0 < k.length &&
          ((x = new I(x, T, null, n, m)), g.push({ event: x, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === 'mouseover' || e === 'pointerover'),
          (I = e === 'mouseout' || e === 'pointerout'),
          x &&
            n !== uu &&
            (T = n.relatedTarget || n.fromElement) &&
            (Er(T) || T[Sn]))
        )
          break e;
        if (
          (I || x) &&
          ((x =
            m.window === m
              ? m
              : (x = m.ownerDocument)
              ? x.defaultView || x.parentWindow
              : window),
          I
            ? ((T = n.relatedTarget || n.toElement),
              (I = h),
              (T = T ? Er(T) : null),
              T !== null &&
                ((L = Ur(T)), T !== L || (T.tag !== 5 && T.tag !== 6)) &&
                (T = null))
            : ((I = null), (T = h)),
          I !== T)
        ) {
          if (
            ((k = bf),
            (R = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (v = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = Cf),
              (R = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (v = 'pointer')),
            (L = I == null ? x : ui(I)),
            (E = T == null ? x : ui(T)),
            (x = new k(R, v + 'leave', I, n, m)),
            (x.target = L),
            (x.relatedTarget = E),
            (R = null),
            Er(m) === h &&
              ((k = new k(y, v + 'enter', T, n, m)),
              (k.target = E),
              (k.relatedTarget = L),
              (R = k)),
            (L = R),
            I && T)
          )
            t: {
              for (k = I, y = T, v = 0, E = k; E; E = ri(E)) v++;
              for (E = 0, R = y; R; R = ri(R)) E++;
              for (; 0 < v - E; ) (k = ri(k)), v--;
              for (; 0 < E - v; ) (y = ri(y)), E--;
              for (; v--; ) {
                if (k === y || (y !== null && k === y.alternate)) break t;
                (k = ri(k)), (y = ri(y));
              }
              k = null;
            }
          else k = null;
          I !== null && Df(g, x, I, k, !1),
            T !== null && L !== null && Df(g, L, T, k, !0);
        }
      }
      e: {
        if (
          ((x = h ? ui(h) : window),
          (I = x.nodeName && x.nodeName.toLowerCase()),
          I === 'select' || (I === 'input' && x.type === 'file'))
        )
          var M = T1;
        else if (Tf(x))
          if (cm) M = N1;
          else {
            M = A1;
            var S = P1;
          }
        else
          (I = x.nodeName) &&
            I.toLowerCase() === 'input' &&
            (x.type === 'checkbox' || x.type === 'radio') &&
            (M = R1);
        if (M && (M = M(e, h))) {
          um(g, M, n, m);
          break e;
        }
        S && S(e, x, h),
          e === 'focusout' &&
            (S = x._wrapperState) &&
            S.controlled &&
            x.type === 'number' &&
            iu(x, 'number', x.value);
      }
      switch (((S = h ? ui(h) : window), e)) {
        case 'focusin':
          (Tf(S) || S.contentEditable === 'true') &&
            ((ai = S), (gu = h), (Co = null));
          break;
        case 'focusout':
          Co = gu = ai = null;
          break;
        case 'mousedown':
          vu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (vu = !1), Of(g, n, m);
          break;
        case 'selectionchange':
          if (j1) break;
        case 'keydown':
        case 'keyup':
          Of(g, n, m);
      }
      var O;
      if (Ec)
        e: {
          switch (e) {
            case 'compositionstart':
              var B = 'onCompositionStart';
              break e;
            case 'compositionend':
              B = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              B = 'onCompositionUpdate';
              break e;
          }
          B = void 0;
        }
      else
        si
          ? am(e, n) && (B = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (B = 'onCompositionStart');
      B &&
        (sm &&
          n.locale !== 'ko' &&
          (si || B !== 'onCompositionStart'
            ? B === 'onCompositionEnd' && si && (O = om())
            : ((Wn = m),
              (wc = 'value' in Wn ? Wn.value : Wn.textContent),
              (si = !0))),
        (S = da(h, B)),
        0 < S.length &&
          ((B = new _f(B, e, null, n, m)),
          g.push({ event: B, listeners: S }),
          O ? (B.data = O) : ((O = lm(n)), O !== null && (B.data = O)))),
        (O = b1 ? _1(e, n) : C1(e, n)) &&
          ((h = da(h, 'onBeforeInput')),
          0 < h.length &&
            ((m = new _f('onBeforeInput', 'beforeinput', null, n, m)),
            g.push({ event: m, listeners: h }),
            (m.data = O)));
    }
    xm(g, t);
  });
}
function zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function da(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Lo(e, n)),
      o != null && r.unshift(zo(e, o, i)),
      (o = Lo(e, t)),
      o != null && r.push(zo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function ri(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Df(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      c = u.alternate,
      h = u.stateNode;
    if (c !== null && c === r) break;
    u.tag === 5 &&
      h !== null &&
      ((u = h),
      i
        ? ((c = Lo(n, o)), c != null && a.unshift(zo(n, c, u)))
        : i || ((c = Lo(n, o)), c != null && a.push(zo(n, c, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var B1 = /\r\n?/g,
  F1 = /\u0000|\uFFFD/g;
function Mf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      B1,
      `
`
    )
    .replace(F1, '');
}
function Ls(e, t, n) {
  if (((t = Mf(t)), Mf(e) !== t && n)) throw Error(j(425));
}
function fa() {}
var wu = null,
  yu = null;
function xu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Eu = typeof setTimeout == 'function' ? setTimeout : void 0,
  z1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Uf = typeof Promise == 'function' ? Promise : void 0,
  V1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Uf < 'u'
      ? function (e) {
          return Uf.resolve(null).then(e).catch(H1);
        }
      : Eu;
function H1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Mo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Mo(t);
}
function qn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Bf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Vi = Math.random().toString(36).slice(2),
  Jt = '__reactFiber$' + Vi,
  Vo = '__reactProps$' + Vi,
  Sn = '__reactContainer$' + Vi,
  Su = '__reactEvents$' + Vi,
  W1 = '__reactListeners$' + Vi,
  $1 = '__reactHandles$' + Vi;
function Er(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Sn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bf(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = Bf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function is(e) {
  return (
    (e = e[Jt] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ui(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ha(e) {
  return e[Vo] || null;
}
var bu = [],
  ci = -1;
function or(e) {
  return { current: e };
}
function xe(e) {
  0 > ci || ((e.current = bu[ci]), (bu[ci] = null), ci--);
}
function we(e, t) {
  ci++, (bu[ci] = e.current), (e.current = t);
}
var rr = {},
  et = or(rr),
  pt = or(!1),
  Tr = rr;
function Ai(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function mt(e) {
  return (e = e.childContextTypes), e != null;
}
function ha() {
  xe(pt), xe(et);
}
function Ff(e, t, n) {
  if (et.current !== rr) throw Error(j(168));
  we(et, t), we(pt, n);
}
function Sm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, P0(e) || 'Unknown', i));
  return Ce({}, n, r);
}
function pa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rr),
    (Tr = et.current),
    we(et, e),
    we(pt, pt.current),
    !0
  );
}
function zf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Sm(e, t, Tr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      xe(pt),
      xe(et),
      we(et, e))
    : xe(pt),
    we(pt, n);
}
var dn = null,
  Wa = !1,
  Rl = !1;
function bm(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function G1(e) {
  (Wa = !0), bm(e);
}
function sr() {
  if (!Rl && dn !== null) {
    Rl = !0;
    var e = 0,
      t = he;
    try {
      var n = dn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dn = null), (Wa = !1);
    } catch (i) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Qp(pc, sr), i);
    } finally {
      (he = t), (Rl = !1);
    }
  }
  return null;
}
var di = [],
  fi = 0,
  ma = null,
  ga = 0,
  Pt = [],
  At = 0,
  Pr = null,
  fn = 1,
  hn = '';
function wr(e, t) {
  (di[fi++] = ga), (di[fi++] = ma), (ma = e), (ga = t);
}
function _m(e, t, n) {
  (Pt[At++] = fn), (Pt[At++] = hn), (Pt[At++] = Pr), (Pr = e);
  var r = fn;
  e = hn;
  var i = 32 - Vt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Vt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (fn = (1 << (32 - Vt(t) + i)) | (n << i) | r),
      (hn = o + e);
  } else (fn = (1 << o) | (n << i) | r), (hn = e);
}
function bc(e) {
  e.return !== null && (wr(e, 1), _m(e, 1, 0));
}
function _c(e) {
  for (; e === ma; )
    (ma = di[--fi]), (di[fi] = null), (ga = di[--fi]), (di[fi] = null);
  for (; e === Pr; )
    (Pr = Pt[--At]),
      (Pt[At] = null),
      (hn = Pt[--At]),
      (Pt[At] = null),
      (fn = Pt[--At]),
      (Pt[At] = null);
}
var xt = null,
  yt = null,
  Ee = !1,
  zt = null;
function Cm(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xt = e), (yt = qn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pr !== null ? { id: fn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _u(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cu(e) {
  if (Ee) {
    var t = yt;
    if (t) {
      var n = t;
      if (!Vf(e, t)) {
        if (_u(e)) throw Error(j(418));
        t = qn(n.nextSibling);
        var r = xt;
        t && Vf(e, t)
          ? Cm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ee = !1), (xt = e));
      }
    } else {
      if (_u(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (Ee = !1), (xt = e);
    }
  }
}
function Hf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xt = e;
}
function js(e) {
  if (e !== xt) return !1;
  if (!Ee) return Hf(e), (Ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !xu(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (_u(e)) throw (km(), Error(j(418)));
    for (; t; ) Cm(e, t), (t = qn(t.nextSibling));
  }
  if ((Hf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              yt = qn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = xt ? qn(e.stateNode.nextSibling) : null;
  return !0;
}
function km() {
  for (var e = yt; e; ) e = qn(e.nextSibling);
}
function Ri() {
  (yt = xt = null), (Ee = !1);
}
function Cc(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var K1 = In.ReactCurrentBatchConfig;
function Ut(e, t) {
  if (e && e.defaultProps) {
    (t = Ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var va = or(null),
  wa = null,
  hi = null,
  kc = null;
function Ic() {
  kc = hi = wa = null;
}
function Tc(e) {
  var t = va.current;
  xe(va), (e._currentValue = t);
}
function ku(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bi(e, t) {
  (wa = e),
    (kc = hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ht = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if (kc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
      if (wa === null) throw Error(j(308));
      (hi = e), (wa.dependencies = { lanes: 0, firstContext: e });
    } else hi = hi.next = e;
  return t;
}
var Sr = null;
function Pc(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function Im(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Pc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    bn(e, r)
  );
}
function bn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function Ac(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      bn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Pc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    bn(e, n)
  );
}
function Ks(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n);
  }
}
function Wf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ya(e, t, n, r) {
  var i = e.updateQueue;
  Mn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var c = u,
      h = c.next;
    (c.next = null), a === null ? (o = h) : (a.next = h), (a = c);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== a &&
        (u === null ? (m.firstBaseUpdate = h) : (u.next = h),
        (m.lastBaseUpdate = c)));
  }
  if (o !== null) {
    var g = i.baseState;
    (a = 0), (m = h = c = null), (u = o);
    do {
      var x = u.lane,
        I = u.eventTime;
      if ((r & x) === x) {
        m !== null &&
          (m = m.next =
            {
              eventTime: I,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var T = e,
            k = u;
          switch (((x = t), (I = n), k.tag)) {
            case 1:
              if (((T = k.payload), typeof T == 'function')) {
                g = T.call(I, g, x);
                break e;
              }
              g = T;
              break e;
            case 3:
              T.flags = (T.flags & -65537) | 128;
            case 0:
              if (
                ((T = k.payload),
                (x = typeof T == 'function' ? T.call(I, g, x) : T),
                x == null)
              )
                break e;
              g = Ce({}, g, x);
              break e;
            case 2:
              Mn = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (x = i.effects),
          x === null ? (i.effects = [u]) : x.push(u));
      } else
        (I = {
          eventTime: I,
          lane: x,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((h = m = I), (c = g)) : (m = m.next = I),
          (a |= x);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (x = u),
          (u = x.next),
          (x.next = null),
          (i.lastBaseUpdate = x),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (c = g),
      (i.baseState = c),
      (i.firstBaseUpdate = h),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Rr |= a), (e.lanes = a), (e.memoizedState = g);
  }
}
function $f(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var Pm = new Ip.Component().refs;
function Iu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $a = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ur(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = at(),
      i = Xn(e),
      o = wn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Yn(e, o, i)),
      t !== null && (Ht(t, e, i, r), Ks(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = at(),
      i = Xn(e),
      o = wn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Yn(e, o, i)),
      t !== null && (Ht(t, e, i, r), Ks(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = at(),
      r = Xn(e),
      i = wn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Yn(e, i, r)),
      t !== null && (Ht(t, e, r, n), Ks(t, e, r));
  },
};
function Gf(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bo(n, r) || !Bo(i, o)
      : !0
  );
}
function Am(e, t, n) {
  var r = !1,
    i = rr,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ot(o))
      : ((i = mt(t) ? Tr : et.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ai(e, i) : rr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $a),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Kf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $a.enqueueReplaceState(t, t.state, null);
}
function Tu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Pm), Ac(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Ot(o))
    : ((o = mt(t) ? Tr : et.current), (i.context = Ai(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Iu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && $a.enqueueReplaceState(i, i.state, null),
      ya(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function so(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var u = i.refs;
            u === Pm && (u = i.refs = {}),
              a === null ? delete u[o] : (u[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Ds(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Qf(e) {
  var t = e._init;
  return t(e._payload);
}
function Rm(e) {
  function t(y, v) {
    if (e) {
      var E = y.deletions;
      E === null ? ((y.deletions = [v]), (y.flags |= 16)) : E.push(v);
    }
  }
  function n(y, v) {
    if (!e) return null;
    for (; v !== null; ) t(y, v), (v = v.sibling);
    return null;
  }
  function r(y, v) {
    for (y = new Map(); v !== null; )
      v.key !== null ? y.set(v.key, v) : y.set(v.index, v), (v = v.sibling);
    return y;
  }
  function i(y, v) {
    return (y = Zn(y, v)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, v, E) {
    return (
      (y.index = E),
      e
        ? ((E = y.alternate),
          E !== null
            ? ((E = E.index), E < v ? ((y.flags |= 2), v) : E)
            : ((y.flags |= 2), v))
        : ((y.flags |= 1048576), v)
    );
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function u(y, v, E, R) {
    return v === null || v.tag !== 6
      ? ((v = Ul(E, y.mode, R)), (v.return = y), v)
      : ((v = i(v, E)), (v.return = y), v);
  }
  function c(y, v, E, R) {
    var M = E.type;
    return M === oi
      ? m(y, v, E.props.children, R, E.key)
      : v !== null &&
        (v.elementType === M ||
          (typeof M == 'object' &&
            M !== null &&
            M.$$typeof === Dn &&
            Qf(M) === v.type))
      ? ((R = i(v, E.props)), (R.ref = so(y, v, E)), (R.return = y), R)
      : ((R = Zs(E.type, E.key, E.props, null, y.mode, R)),
        (R.ref = so(y, v, E)),
        (R.return = y),
        R);
  }
  function h(y, v, E, R) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== E.containerInfo ||
      v.stateNode.implementation !== E.implementation
      ? ((v = Bl(E, y.mode, R)), (v.return = y), v)
      : ((v = i(v, E.children || [])), (v.return = y), v);
  }
  function m(y, v, E, R, M) {
    return v === null || v.tag !== 7
      ? ((v = Ir(E, y.mode, R, M)), (v.return = y), v)
      : ((v = i(v, E)), (v.return = y), v);
  }
  function g(y, v, E) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (v = Ul('' + v, y.mode, E)), (v.return = y), v;
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Cs:
          return (
            (E = Zs(v.type, v.key, v.props, null, y.mode, E)),
            (E.ref = so(y, null, v)),
            (E.return = y),
            E
          );
        case ii:
          return (v = Bl(v, y.mode, E)), (v.return = y), v;
        case Dn:
          var R = v._init;
          return g(y, R(v._payload), E);
      }
      if (go(v) || to(v))
        return (v = Ir(v, y.mode, E, null)), (v.return = y), v;
      Ds(y, v);
    }
    return null;
  }
  function x(y, v, E, R) {
    var M = v !== null ? v.key : null;
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return M !== null ? null : u(y, v, '' + E, R);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Cs:
          return E.key === M ? c(y, v, E, R) : null;
        case ii:
          return E.key === M ? h(y, v, E, R) : null;
        case Dn:
          return (M = E._init), x(y, v, M(E._payload), R);
      }
      if (go(E) || to(E)) return M !== null ? null : m(y, v, E, R, null);
      Ds(y, E);
    }
    return null;
  }
  function I(y, v, E, R, M) {
    if ((typeof R == 'string' && R !== '') || typeof R == 'number')
      return (y = y.get(E) || null), u(v, y, '' + R, M);
    if (typeof R == 'object' && R !== null) {
      switch (R.$$typeof) {
        case Cs:
          return (y = y.get(R.key === null ? E : R.key) || null), c(v, y, R, M);
        case ii:
          return (y = y.get(R.key === null ? E : R.key) || null), h(v, y, R, M);
        case Dn:
          var S = R._init;
          return I(y, v, E, S(R._payload), M);
      }
      if (go(R) || to(R)) return (y = y.get(E) || null), m(v, y, R, M, null);
      Ds(v, R);
    }
    return null;
  }
  function T(y, v, E, R) {
    for (
      var M = null, S = null, O = v, B = (v = 0), H = null;
      O !== null && B < E.length;
      B++
    ) {
      O.index > B ? ((H = O), (O = null)) : (H = O.sibling);
      var Q = x(y, O, E[B], R);
      if (Q === null) {
        O === null && (O = H);
        break;
      }
      e && O && Q.alternate === null && t(y, O),
        (v = o(Q, v, B)),
        S === null ? (M = Q) : (S.sibling = Q),
        (S = Q),
        (O = H);
    }
    if (B === E.length) return n(y, O), Ee && wr(y, B), M;
    if (O === null) {
      for (; B < E.length; B++)
        (O = g(y, E[B], R)),
          O !== null &&
            ((v = o(O, v, B)), S === null ? (M = O) : (S.sibling = O), (S = O));
      return Ee && wr(y, B), M;
    }
    for (O = r(y, O); B < E.length; B++)
      (H = I(O, y, B, E[B], R)),
        H !== null &&
          (e && H.alternate !== null && O.delete(H.key === null ? B : H.key),
          (v = o(H, v, B)),
          S === null ? (M = H) : (S.sibling = H),
          (S = H));
    return (
      e &&
        O.forEach(function (oe) {
          return t(y, oe);
        }),
      Ee && wr(y, B),
      M
    );
  }
  function k(y, v, E, R) {
    var M = to(E);
    if (typeof M != 'function') throw Error(j(150));
    if (((E = M.call(E)), E == null)) throw Error(j(151));
    for (
      var S = (M = null), O = v, B = (v = 0), H = null, Q = E.next();
      O !== null && !Q.done;
      B++, Q = E.next()
    ) {
      O.index > B ? ((H = O), (O = null)) : (H = O.sibling);
      var oe = x(y, O, Q.value, R);
      if (oe === null) {
        O === null && (O = H);
        break;
      }
      e && O && oe.alternate === null && t(y, O),
        (v = o(oe, v, B)),
        S === null ? (M = oe) : (S.sibling = oe),
        (S = oe),
        (O = H);
    }
    if (Q.done) return n(y, O), Ee && wr(y, B), M;
    if (O === null) {
      for (; !Q.done; B++, Q = E.next())
        (Q = g(y, Q.value, R)),
          Q !== null &&
            ((v = o(Q, v, B)), S === null ? (M = Q) : (S.sibling = Q), (S = Q));
      return Ee && wr(y, B), M;
    }
    for (O = r(y, O); !Q.done; B++, Q = E.next())
      (Q = I(O, y, B, Q.value, R)),
        Q !== null &&
          (e && Q.alternate !== null && O.delete(Q.key === null ? B : Q.key),
          (v = o(Q, v, B)),
          S === null ? (M = Q) : (S.sibling = Q),
          (S = Q));
    return (
      e &&
        O.forEach(function (Se) {
          return t(y, Se);
        }),
      Ee && wr(y, B),
      M
    );
  }
  function L(y, v, E, R) {
    if (
      (typeof E == 'object' &&
        E !== null &&
        E.type === oi &&
        E.key === null &&
        (E = E.props.children),
      typeof E == 'object' && E !== null)
    ) {
      switch (E.$$typeof) {
        case Cs:
          e: {
            for (var M = E.key, S = v; S !== null; ) {
              if (S.key === M) {
                if (((M = E.type), M === oi)) {
                  if (S.tag === 7) {
                    n(y, S.sibling),
                      (v = i(S, E.props.children)),
                      (v.return = y),
                      (y = v);
                    break e;
                  }
                } else if (
                  S.elementType === M ||
                  (typeof M == 'object' &&
                    M !== null &&
                    M.$$typeof === Dn &&
                    Qf(M) === S.type)
                ) {
                  n(y, S.sibling),
                    (v = i(S, E.props)),
                    (v.ref = so(y, S, E)),
                    (v.return = y),
                    (y = v);
                  break e;
                }
                n(y, S);
                break;
              } else t(y, S);
              S = S.sibling;
            }
            E.type === oi
              ? ((v = Ir(E.props.children, y.mode, R, E.key)),
                (v.return = y),
                (y = v))
              : ((R = Zs(E.type, E.key, E.props, null, y.mode, R)),
                (R.ref = so(y, v, E)),
                (R.return = y),
                (y = R));
          }
          return a(y);
        case ii:
          e: {
            for (S = E.key; v !== null; ) {
              if (v.key === S)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === E.containerInfo &&
                  v.stateNode.implementation === E.implementation
                ) {
                  n(y, v.sibling),
                    (v = i(v, E.children || [])),
                    (v.return = y),
                    (y = v);
                  break e;
                } else {
                  n(y, v);
                  break;
                }
              else t(y, v);
              v = v.sibling;
            }
            (v = Bl(E, y.mode, R)), (v.return = y), (y = v);
          }
          return a(y);
        case Dn:
          return (S = E._init), L(y, v, S(E._payload), R);
      }
      if (go(E)) return T(y, v, E, R);
      if (to(E)) return k(y, v, E, R);
      Ds(y, E);
    }
    return (typeof E == 'string' && E !== '') || typeof E == 'number'
      ? ((E = '' + E),
        v !== null && v.tag === 6
          ? (n(y, v.sibling), (v = i(v, E)), (v.return = y), (y = v))
          : (n(y, v), (v = Ul(E, y.mode, R)), (v.return = y), (y = v)),
        a(y))
      : n(y, v);
  }
  return L;
}
var Ni = Rm(!0),
  Nm = Rm(!1),
  os = {},
  en = or(os),
  Ho = or(os),
  Wo = or(os);
function br(e) {
  if (e === os) throw Error(j(174));
  return e;
}
function Rc(e, t) {
  switch ((we(Wo, t), we(Ho, e), we(en, os), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : su(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = su(t, e));
  }
  xe(en), we(en, t);
}
function Oi() {
  xe(en), xe(Ho), xe(Wo);
}
function Om(e) {
  br(Wo.current);
  var t = br(en.current),
    n = su(t, e.type);
  t !== n && (we(Ho, e), we(en, n));
}
function Nc(e) {
  Ho.current === e && (xe(en), xe(Ho));
}
var be = or(0);
function xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nl = [];
function Oc() {
  for (var e = 0; e < Nl.length; e++)
    Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var Qs = In.ReactCurrentDispatcher,
  Ol = In.ReactCurrentBatchConfig,
  Ar = 0,
  _e = null,
  Be = null,
  Ve = null,
  Ea = !1,
  ko = !1,
  $o = 0,
  Q1 = 0;
function Je() {
  throw Error(j(321));
}
function Lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function jc(e, t, n, r, i, o) {
  if (
    ((Ar = o),
    (_e = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? X1 : Z1),
    (e = n(r, i)),
    ko)
  ) {
    o = 0;
    do {
      if (((ko = !1), ($o = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (Ve = Be = null),
        (t.updateQueue = null),
        (Qs.current = e2),
        (e = n(r, i));
    } while (ko);
  }
  if (
    ((Qs.current = Sa),
    (t = Be !== null && Be.next !== null),
    (Ar = 0),
    (Ve = Be = _e = null),
    (Ea = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Dc() {
  var e = $o !== 0;
  return ($o = 0), e;
}
function Yt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ve === null ? (_e.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
}
function Lt() {
  if (Be === null) {
    var e = _e.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Be.next;
  var t = Ve === null ? _e.memoizedState : Ve.next;
  if (t !== null) (Ve = t), (Be = e);
  else {
    if (e === null) throw Error(j(310));
    (Be = e),
      (e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null,
      }),
      Ve === null ? (_e.memoizedState = Ve = e) : (Ve = Ve.next = e);
  }
  return Ve;
}
function Go(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ll(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Be,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var u = (a = null),
      c = null,
      h = o;
    do {
      var m = h.lane;
      if ((Ar & m) === m)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (r = h.hasEagerState ? h.eagerState : e(r, h.action));
      else {
        var g = {
          lane: m,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        c === null ? ((u = c = g), (a = r)) : (c = c.next = g),
          (_e.lanes |= m),
          (Rr |= m);
      }
      h = h.next;
    } while (h !== null && h !== o);
    c === null ? (a = r) : (c.next = u),
      Wt(r, t.memoizedState) || (ht = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (_e.lanes |= o), (Rr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jl(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    Wt(o, t.memoizedState) || (ht = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Lm() {}
function jm(e, t) {
  var n = _e,
    r = Lt(),
    i = t(),
    o = !Wt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ht = !0)),
    (r = r.queue),
    Mc(Um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ko(9, Mm.bind(null, n, r, i, t), void 0, null),
      He === null)
    )
      throw Error(j(349));
    Ar & 30 || Dm(n, t, i);
  }
  return i;
}
function Dm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Mm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bm(t) && Fm(e);
}
function Um(e, t, n) {
  return n(function () {
    Bm(t) && Fm(e);
  });
}
function Bm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function Fm(e) {
  var t = bn(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function qf(e) {
  var t = Yt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = J1.bind(null, _e, e)),
    [t.memoizedState, e]
  );
}
function Ko(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = _e.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (_e.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zm() {
  return Lt().memoizedState;
}
function qs(e, t, n, r) {
  var i = Yt();
  (_e.flags |= e),
    (i.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ga(e, t, n, r) {
  var i = Lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Be !== null) {
    var a = Be.memoizedState;
    if (((o = a.destroy), r !== null && Lc(r, a.deps))) {
      i.memoizedState = Ko(t, n, o, r);
      return;
    }
  }
  (_e.flags |= e), (i.memoizedState = Ko(1 | t, n, o, r));
}
function Yf(e, t) {
  return qs(8390656, 8, e, t);
}
function Mc(e, t) {
  return Ga(2048, 8, e, t);
}
function Vm(e, t) {
  return Ga(4, 2, e, t);
}
function Hm(e, t) {
  return Ga(4, 4, e, t);
}
function Wm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $m(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ga(4, 4, Wm.bind(null, t, e), n)
  );
}
function Uc() {}
function Gm(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Km(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qm(e, t, n) {
  return Ar & 21
    ? (Wt(n, t) || ((n = Jp()), (_e.lanes |= n), (Rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = n));
}
function q1(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ol.transition;
  Ol.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (Ol.transition = r);
  }
}
function qm() {
  return Lt().memoizedState;
}
function Y1(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ym(e))
  )
    Jm(t, n);
  else if (((n = Im(e, t, n, r)), n !== null)) {
    var i = at();
    Ht(n, e, r, i), Xm(n, t, r);
  }
}
function J1(e, t, n) {
  var r = Xn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ym(e)) Jm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), Wt(u, a))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), Pc(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Im(e, t, i, r)),
      n !== null && ((i = at()), Ht(n, e, r, i), Xm(n, t, r));
  }
}
function Ym(e) {
  var t = e.alternate;
  return e === _e || (t !== null && t === _e);
}
function Jm(e, t) {
  ko = Ea = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n);
  }
}
var Sa = {
    readContext: Ot,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  X1 = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Yf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qs(4194308, 4, Wm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Yt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Yt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Y1.bind(null, _e, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Yt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qf,
    useDebugValue: Uc,
    useDeferredValue: function (e) {
      return (Yt().memoizedState = e);
    },
    useTransition: function () {
      var e = qf(!1),
        t = e[0];
      return (e = q1.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = _e,
        i = Yt();
      if (Ee) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), He === null)) throw Error(j(349));
        Ar & 30 || Dm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Yf(Um.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ko(9, Mm.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Yt(),
        t = He.identifierPrefix;
      if (Ee) {
        var n = hn,
          r = fn;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = $o++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Q1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Z1 = {
    readContext: Ot,
    useCallback: Gm,
    useContext: Ot,
    useEffect: Mc,
    useImperativeHandle: $m,
    useInsertionEffect: Vm,
    useLayoutEffect: Hm,
    useMemo: Km,
    useReducer: Ll,
    useRef: zm,
    useState: function () {
      return Ll(Go);
    },
    useDebugValue: Uc,
    useDeferredValue: function (e) {
      var t = Lt();
      return Qm(t, Be.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Go)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lm,
    useSyncExternalStore: jm,
    useId: qm,
    unstable_isNewReconciler: !1,
  },
  e2 = {
    readContext: Ot,
    useCallback: Gm,
    useContext: Ot,
    useEffect: Mc,
    useImperativeHandle: $m,
    useInsertionEffect: Vm,
    useLayoutEffect: Hm,
    useMemo: Km,
    useReducer: jl,
    useRef: zm,
    useState: function () {
      return jl(Go);
    },
    useDebugValue: Uc,
    useDeferredValue: function (e) {
      var t = Lt();
      return Be === null ? (t.memoizedState = e) : Qm(t, Be.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Go)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Lm,
    useSyncExternalStore: jm,
    useId: qm,
    unstable_isNewReconciler: !1,
  };
function Li(e, t) {
  try {
    var n = '',
      r = t;
    do (n += T0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Dl(e, t, n) {
  return { value: e, source: null, stack: null, digest: t ?? null };
}
function Pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var t2 = typeof WeakMap == 'function' ? WeakMap : Map;
function Zm(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _a || ((_a = !0), (Bu = r)), Pu(e, t);
    }),
    n
  );
}
function eg(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pu(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Pu(e, t),
          typeof r != 'function' &&
            (Jn === null ? (Jn = new Set([this])) : Jn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Jf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new t2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = m2.bind(null, e, t, n)), t.then(e, e));
}
function Xf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wn(-1, 1)), (t.tag = 2), Yn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var n2 = In.ReactCurrentOwner,
  ht = !1;
function st(e, t, n, r) {
  t.child = e === null ? Nm(t, null, n, r) : Ni(t, e.child, n, r);
}
function eh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    bi(t, i),
    (r = jc(e, t, n, r, o, i)),
    (n = Dc()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _n(e, t, i))
      : (Ee && n && bc(t), (t.flags |= 1), st(e, t, r, i), t.child)
  );
}
function th(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Gc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), tg(e, t, o, r, i))
      : ((e = Zs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Bo), n(a, r) && e.ref === t.ref)
    )
      return _n(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Zn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tg(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Bo(o, r) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ht = !0);
      else return (t.lanes = e.lanes), _n(e, t, i);
  }
  return Au(e, t, n, r, i);
}
function ng(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(mi, wt),
        (wt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(mi, wt),
          (wt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        we(mi, wt),
        (wt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(mi, wt),
      (wt |= r);
  return st(e, t, i, n), t.child;
}
function rg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Au(e, t, n, r, i) {
  var o = mt(n) ? Tr : et.current;
  return (
    (o = Ai(t, o)),
    bi(t, i),
    (n = jc(e, t, n, r, o, i)),
    (r = Dc()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _n(e, t, i))
      : (Ee && r && bc(t), (t.flags |= 1), st(e, t, n, i), t.child)
  );
}
function nh(e, t, n, r, i) {
  if (mt(n)) {
    var o = !0;
    pa(t);
  } else o = !1;
  if ((bi(t, i), t.stateNode === null))
    Ys(e, t), Am(t, n, r), Tu(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var c = a.context,
      h = n.contextType;
    typeof h == 'object' && h !== null
      ? (h = Ot(h))
      : ((h = mt(n) ? Tr : et.current), (h = Ai(t, h)));
    var m = n.getDerivedStateFromProps,
      g =
        typeof m == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    g ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((u !== r || c !== h) && Kf(t, a, r, h)),
      (Mn = !1);
    var x = t.memoizedState;
    (a.state = x),
      ya(t, r, a, i),
      (c = t.memoizedState),
      u !== r || x !== c || pt.current || Mn
        ? (typeof m == 'function' && (Iu(t, n, m, r), (c = t.memoizedState)),
          (u = Mn || Gf(t, n, u, r, x, c, h))
            ? (g ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = h),
          (r = u))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Tm(e, t),
      (u = t.memoizedProps),
      (h = t.type === t.elementType ? u : Ut(t.type, u)),
      (a.props = h),
      (g = t.pendingProps),
      (x = a.context),
      (c = n.contextType),
      typeof c == 'object' && c !== null
        ? (c = Ot(c))
        : ((c = mt(n) ? Tr : et.current), (c = Ai(t, c)));
    var I = n.getDerivedStateFromProps;
    (m =
      typeof I == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((u !== g || x !== c) && Kf(t, a, r, c)),
      (Mn = !1),
      (x = t.memoizedState),
      (a.state = x),
      ya(t, r, a, i);
    var T = t.memoizedState;
    u !== g || x !== T || pt.current || Mn
      ? (typeof I == 'function' && (Iu(t, n, I, r), (T = t.memoizedState)),
        (h = Mn || Gf(t, n, h, r, x, T, c) || !1)
          ? (m ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, T, c),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, T, c)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = T)),
        (a.props = r),
        (a.state = T),
        (a.context = c),
        (r = h))
      : (typeof a.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ru(e, t, n, r, o, i);
}
function Ru(e, t, n, r, i, o) {
  rg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && zf(t, n, !1), _n(e, t, o);
  (r = t.stateNode), (n2.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Ni(t, e.child, null, o)), (t.child = Ni(t, null, u, o)))
      : st(e, t, u, o),
    (t.memoizedState = r.state),
    i && zf(t, n, !0),
    t.child
  );
}
function ig(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ff(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ff(e, t.context, !1),
    Rc(e, t.containerInfo);
}
function rh(e, t, n, r, i) {
  return Ri(), Cc(i), (t.flags |= 256), st(e, t, n, r), t.child;
}
var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ou(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function og(e, t, n) {
  var r = t.pendingProps,
    i = be.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    we(be, i & 1),
    e === null)
  )
    return (
      Cu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = qa(a, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ou(n)),
              (t.memoizedState = Nu),
              e)
            : Bc(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return r2(e, t, a, r, u, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (u = i.sibling);
    var c = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Zn(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = Zn(u, o)) : ((o = Ir(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ou(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Zn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bc(e, t) {
  return (
    (t = qa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ms(e, t, n, r) {
  return (
    r !== null && Cc(r),
    Ni(t, e.child, null, n),
    (e = Bc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function r2(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dl(Error(j(422)))), Ms(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = qa({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Ir(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ni(t, e.child, null, a),
        (t.child.memoizedState = Ou(a)),
        (t.memoizedState = Nu),
        o);
  if (!(t.mode & 1)) return Ms(e, t, a, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(j(419))), (r = Dl(o, r)), Ms(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), ht || u)) {
    if (((r = He), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), bn(e, i), Ht(r, e, i, -1));
    }
    return $c(), (r = Dl(Error(j(421)))), Ms(e, t, a, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (yt = qn(i.nextSibling)),
      (xt = t),
      (Ee = !0),
      (zt = null),
      e !== null &&
        ((Pt[At++] = fn),
        (Pt[At++] = hn),
        (Pt[At++] = Pr),
        (fn = e.id),
        (hn = e.overflow),
        (Pr = t)),
      (t = Bc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ih(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ku(e.return, t, n);
}
function Ml(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function sg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((st(e, t, r.children, n), (r = be.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ih(e, n, t);
        else if (e.tag === 19) ih(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(be, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ml(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ml(t, !0, n, null, o);
        break;
      case 'together':
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function i2(e, t, n) {
  switch (t.tag) {
    case 3:
      ig(t), Ri();
      break;
    case 5:
      Om(t);
      break;
    case 1:
      mt(t.type) && pa(t);
      break;
    case 4:
      Rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      we(va, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(be, be.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? og(e, t, n)
          : (we(be, be.current & 1),
            (e = _n(e, t, n)),
            e !== null ? e.sibling : null);
      we(be, be.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        we(be, be.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ng(e, t, n);
  }
  return _n(e, t, n);
}
var ag, Lu, lg, ug;
ag = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Lu = function () {};
lg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), br(en.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = nu(e, i)), (r = nu(e, r)), (o = []);
        break;
      case 'select':
        (i = Ce({}, i, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = ou(e, i)), (r = ou(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = fa);
    }
    au(n, r);
    var a;
    n = null;
    for (h in i)
      if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
        if (h === 'style') {
          var u = i[h];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          h !== 'dangerouslySetInnerHTML' &&
            h !== 'children' &&
            h !== 'suppressContentEditableWarning' &&
            h !== 'suppressHydrationWarning' &&
            h !== 'autoFocus' &&
            (No.hasOwnProperty(h)
              ? o || (o = [])
              : (o = o || []).push(h, null));
    for (h in r) {
      var c = r[h];
      if (
        ((u = i != null ? i[h] : void 0),
        r.hasOwnProperty(h) && c !== u && (c != null || u != null))
      )
        if (h === 'style')
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in c)
              c.hasOwnProperty(a) &&
                u[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (o || (o = []), o.push(h, n)), (n = c);
        else
          h === 'dangerouslySetInnerHTML'
            ? ((c = c ? c.__html : void 0),
              (u = u ? u.__html : void 0),
              c != null && u !== c && (o = o || []).push(h, c))
            : h === 'children'
            ? (typeof c != 'string' && typeof c != 'number') ||
              (o = o || []).push(h, '' + c)
            : h !== 'suppressContentEditableWarning' &&
              h !== 'suppressHydrationWarning' &&
              (No.hasOwnProperty(h)
                ? (c != null && h === 'onScroll' && ye('scroll', e),
                  o || u === c || (o = []))
                : (o = o || []).push(h, c));
    }
    n && (o = o || []).push('style', n);
    var h = o;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
ug = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ao(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function o2(e, t, n) {
  var r = t.pendingProps;
  switch ((_c(t), t.tag)) {
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
      return Xe(t), null;
    case 1:
      return mt(t.type) && ha(), Xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Oi(),
        xe(pt),
        xe(et),
        Oc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (js(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (Vu(zt), (zt = null)))),
        Lu(e, t),
        Xe(t),
        null
      );
    case 5:
      Nc(t);
      var i = br(Wo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Xe(t), null;
        }
        if (((e = br(en.current)), js(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Jt] = t), (r[Vo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ye('cancel', r), ye('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ye('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < wo.length; i++) ye(wo[i], r);
              break;
            case 'source':
              ye('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ye('error', r), ye('load', r);
              break;
            case 'details':
              ye('toggle', r);
              break;
            case 'input':
              hf(r, o), ye('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ye('invalid', r);
              break;
            case 'textarea':
              mf(r, o), ye('invalid', r);
          }
          au(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var u = o[a];
              a === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ls(r.textContent, u, e),
                    (i = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ls(r.textContent, u, e),
                    (i = ['children', '' + u]))
                : No.hasOwnProperty(a) &&
                  u != null &&
                  a === 'onScroll' &&
                  ye('scroll', r);
            }
          switch (n) {
            case 'input':
              ks(r), pf(r, o, !0);
              break;
            case 'textarea':
              ks(r), gf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = fa);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Dp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Jt] = t),
            (e[Vo] = r),
            ag(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = lu(n, r)), n)) {
              case 'dialog':
                ye('cancel', e), ye('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ye('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < wo.length; i++) ye(wo[i], e);
                i = r;
                break;
              case 'source':
                ye('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ye('error', e), ye('load', e), (i = r);
                break;
              case 'details':
                ye('toggle', e), (i = r);
                break;
              case 'input':
                hf(e, r), (i = nu(e, r)), ye('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ce({}, r, { value: void 0 })),
                  ye('invalid', e);
                break;
              case 'textarea':
                mf(e, r), (i = ou(e, r)), ye('invalid', e);
                break;
              default:
                i = r;
            }
            au(n, i), (u = i);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var c = u[o];
                o === 'style'
                  ? Bp(e, c)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((c = c ? c.__html : void 0), c != null && Mp(e, c))
                  : o === 'children'
                  ? typeof c == 'string'
                    ? (n !== 'textarea' || c !== '') && Oo(e, c)
                    : typeof c == 'number' && Oo(e, '' + c)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (No.hasOwnProperty(o)
                      ? c != null && o === 'onScroll' && ye('scroll', e)
                      : c != null && uc(e, o, c, a));
              }
            switch (n) {
              case 'input':
                ks(e), pf(e, r, !1);
                break;
              case 'textarea':
                ks(e), gf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + nr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = fa);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) ug(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = br(Wo.current)), br(en.current), js(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Jt] = t),
            (o = r.nodeValue !== n) && ((e = xt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ls(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ls(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Jt] = t),
            (t.stateNode = r);
      }
      return Xe(t), null;
    case 13:
      if (
        (xe(be),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ee && yt !== null && t.mode & 1 && !(t.flags & 128))
          km(), Ri(), (t.flags |= 98560), (o = !1);
        else if (((o = js(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Jt] = t;
          } else
            Ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Xe(t), (o = !1);
        } else zt !== null && (Vu(zt), (zt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || be.current & 1 ? Fe === 0 && (Fe = 3) : $c())),
          t.updateQueue !== null && (t.flags |= 4),
          Xe(t),
          null);
    case 4:
      return (
        Oi(), Lu(e, t), e === null && Fo(t.stateNode.containerInfo), Xe(t), null
      );
    case 10:
      return Tc(t.type._context), Xe(t), null;
    case 17:
      return mt(t.type) && ha(), Xe(t), null;
    case 19:
      if ((xe(be), (o = t.memoizedState), o === null)) return Xe(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) ao(o, !1);
        else {
          if (Fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = xa(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ao(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(be, (be.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Oe() > ji &&
            ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xa(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ao(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !Ee)
            )
              return Xe(t), null;
          } else
            2 * Oe() - o.renderingStartTime > ji &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Oe()),
          (t.sibling = null),
          (n = be.current),
          we(be, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xe(t), null);
    case 22:
    case 23:
      return (
        Wc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? wt & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function s2(e, t) {
  switch ((_c(t), t.tag)) {
    case 1:
      return (
        mt(t.type) && ha(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Oi(),
        xe(pt),
        xe(et),
        Oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nc(t), null;
    case 13:
      if (
        (xe(be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ri();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return xe(be), null;
    case 4:
      return Oi(), null;
    case 10:
      return Tc(t.type._context), null;
    case 22:
    case 23:
      return Wc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Us = !1,
  Ze = !1,
  a2 = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function pi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function ju(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var oh = !1;
function l2(e, t) {
  if (((wu = ua), (e = hm()), Sc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            u = -1,
            c = -1,
            h = 0,
            m = 0,
            g = e,
            x = null;
          t: for (;;) {
            for (
              var I;
              g !== n || (i !== 0 && g.nodeType !== 3) || (u = a + i),
                g !== o || (r !== 0 && g.nodeType !== 3) || (c = a + r),
                g.nodeType === 3 && (a += g.nodeValue.length),
                (I = g.firstChild) !== null;

            )
              (x = g), (g = I);
            for (;;) {
              if (g === e) break t;
              if (
                (x === n && ++h === i && (u = a),
                x === o && ++m === r && (c = a),
                (I = g.nextSibling) !== null)
              )
                break;
              (g = x), (x = g.parentNode);
            }
            g = I;
          }
          n = u === -1 || c === -1 ? null : { start: u, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yu = { focusedElem: e, selectionRange: n }, ua = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var T = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (T !== null) {
                  var k = T.memoizedProps,
                    L = T.memoizedState,
                    y = t.stateNode,
                    v = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ut(t.type, k),
                      L
                    );
                  y.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = '')
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (R) {
          Pe(t, t.return, R);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (T = oh), (oh = !1), T;
}
function Io(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ju(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ka(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Du(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function cg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[Vo], delete t[Su], delete t[W1], delete t[$1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mu(e, t, n), e = e.sibling; e !== null; ) Mu(e, t, n), (e = e.sibling);
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), (e = e.sibling);
}
var We = null,
  Bt = !1;
function On(e, t, n) {
  for (n = n.child; n !== null; ) fg(e, t, n), (n = n.sibling);
}
function fg(e, t, n) {
  if (Zt && typeof Zt.onCommitFiberUnmount == 'function')
    try {
      Zt.onCommitFiberUnmount(Ba, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || pi(n, t);
    case 6:
      var r = We,
        i = Bt;
      (We = null),
        On(e, t, n),
        (We = r),
        (Bt = i),
        We !== null &&
          (Bt
            ? ((e = We),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (Bt
          ? ((e = We),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Mo(e))
          : Al(We, n.stateNode));
      break;
    case 4:
      (r = We),
        (i = Bt),
        (We = n.stateNode.containerInfo),
        (Bt = !0),
        On(e, t, n),
        (We = r),
        (Bt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && ju(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      On(e, t, n);
      break;
    case 1:
      if (
        !Ze &&
        (pi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Pe(n, t, u);
        }
      On(e, t, n);
      break;
    case 21:
      On(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (r = Ze) || n.memoizedState !== null), On(e, t, n), (Ze = r))
        : On(e, t, n);
      break;
    default:
      On(e, t, n);
  }
}
function ah(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new a2()),
      t.forEach(function (r) {
        var i = v2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (We = u.stateNode), (Bt = !1);
              break e;
            case 3:
              (We = u.stateNode.containerInfo), (Bt = !0);
              break e;
            case 4:
              (We = u.stateNode.containerInfo), (Bt = !0);
              break e;
          }
          u = u.return;
        }
        if (We === null) throw Error(j(160));
        fg(o, a, i), (We = null), (Bt = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (h) {
        Pe(i, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hg(t, e), (t = t.sibling);
}
function hg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), qt(e), r & 4)) {
        try {
          Io(3, e, e.return), Ka(3, e);
        } catch (k) {
          Pe(e, e.return, k);
        }
        try {
          Io(5, e, e.return);
        } catch (k) {
          Pe(e, e.return, k);
        }
      }
      break;
    case 1:
      Mt(t, e), qt(e), r & 512 && n !== null && pi(n, n.return);
      break;
    case 5:
      if (
        (Mt(t, e),
        qt(e),
        r & 512 && n !== null && pi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Oo(i, '');
        } catch (k) {
          Pe(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          u = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Lp(i, o),
              lu(u, a);
            var h = lu(u, o);
            for (a = 0; a < c.length; a += 2) {
              var m = c[a],
                g = c[a + 1];
              m === 'style'
                ? Bp(i, g)
                : m === 'dangerouslySetInnerHTML'
                ? Mp(i, g)
                : m === 'children'
                ? Oo(i, g)
                : uc(i, m, g, h);
            }
            switch (u) {
              case 'input':
                ru(i, o);
                break;
              case 'textarea':
                jp(i, o);
                break;
              case 'select':
                var x = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var I = o.value;
                I != null
                  ? yi(i, !!o.multiple, I, !1)
                  : x !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yi(i, !!o.multiple, o.defaultValue, !0)
                      : yi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Vo] = o;
          } catch (k) {
            Pe(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Mt(t, e), qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          Pe(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Mt(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mo(t.containerInfo);
        } catch (k) {
          Pe(e, e.return, k);
        }
      break;
    case 4:
      Mt(t, e), qt(e);
      break;
    case 13:
      Mt(t, e),
        qt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Vc = Oe())),
        r & 4 && ah(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ze = (h = Ze) || m), Mt(t, e), (Ze = h)) : Mt(t, e),
        qt(e),
        r & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !m && e.mode & 1)
        )
          for (V = e, m = e.child; m !== null; ) {
            for (g = V = m; V !== null; ) {
              switch (((x = V), (I = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Io(4, x, x.return);
                  break;
                case 1:
                  pi(x, x.return);
                  var T = x.stateNode;
                  if (typeof T.componentWillUnmount == 'function') {
                    (r = x), (n = x.return);
                    try {
                      (t = r),
                        (T.props = t.memoizedProps),
                        (T.state = t.memoizedState),
                        T.componentWillUnmount();
                    } catch (k) {
                      Pe(r, n, k);
                    }
                  }
                  break;
                case 5:
                  pi(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    uh(g);
                    continue;
                  }
              }
              I !== null ? ((I.return = x), (V = I)) : uh(g);
            }
            m = m.sibling;
          }
        e: for (m = null, g = e; ; ) {
          if (g.tag === 5) {
            if (m === null) {
              m = g;
              try {
                (i = g.stateNode),
                  h
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = g.stateNode),
                      (c = g.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty('display')
                          ? c.display
                          : null),
                      (u.style.display = Up('display', a)));
              } catch (k) {
                Pe(e, e.return, k);
              }
            }
          } else if (g.tag === 6) {
            if (m === null)
              try {
                g.stateNode.nodeValue = h ? '' : g.memoizedProps;
              } catch (k) {
                Pe(e, e.return, k);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            m === g && (m = null), (g = g.return);
          }
          m === g && (m = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Mt(t, e), qt(e), r & 4 && ah(e);
      break;
    case 21:
      break;
    default:
      Mt(t, e), qt(e);
  }
}
function qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Oo(i, ''), (r.flags &= -33));
          var o = sh(e);
          Uu(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = sh(e);
          Mu(e, u, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (c) {
      Pe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function u2(e, t, n) {
  (V = e), pg(e);
}
function pg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Us;
      if (!a) {
        var u = i.alternate,
          c = (u !== null && u.memoizedState !== null) || Ze;
        u = Us;
        var h = Ze;
        if (((Us = a), (Ze = c) && !h))
          for (V = i; V !== null; )
            (a = V),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? ch(i)
                : c !== null
                ? ((c.return = a), (V = c))
                : ch(i);
        for (; o !== null; ) (V = o), pg(o), (o = o.sibling);
        (V = i), (Us = u), (Ze = h);
      }
      lh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : lh(e);
  }
}
function lh(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Ka(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $f(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $f(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var c = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    c.autoFocus && n.focus();
                    break;
                  case 'img':
                    c.src && (n.src = c.src);
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
                var h = t.alternate;
                if (h !== null) {
                  var m = h.memoizedState;
                  if (m !== null) {
                    var g = m.dehydrated;
                    g !== null && Mo(g);
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
              throw Error(j(163));
          }
        Ze || (t.flags & 512 && Du(t));
      } catch (x) {
        Pe(t, t.return, x);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function uh(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function ch(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ka(4, t);
          } catch (c) {
            Pe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Pe(t, i, c);
            }
          }
          var o = t.return;
          try {
            Du(t);
          } catch (c) {
            Pe(t, o, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Du(t);
          } catch (c) {
            Pe(t, a, c);
          }
      }
    } catch (c) {
      Pe(t, t.return, c);
    }
    if (t === e) {
      V = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (V = u);
      break;
    }
    V = t.return;
  }
}
var c2 = Math.ceil,
  ba = In.ReactCurrentDispatcher,
  Fc = In.ReactCurrentOwner,
  Nt = In.ReactCurrentBatchConfig,
  le = 0,
  He = null,
  De = null,
  $e = 0,
  wt = 0,
  mi = or(0),
  Fe = 0,
  Qo = null,
  Rr = 0,
  Qa = 0,
  zc = 0,
  To = null,
  ft = null,
  Vc = 0,
  ji = 1 / 0,
  cn = null,
  _a = !1,
  Bu = null,
  Jn = null,
  Bs = !1,
  $n = null,
  Ca = 0,
  Po = 0,
  Fu = null,
  Js = -1,
  Xs = 0;
function at() {
  return le & 6 ? Oe() : Js !== -1 ? Js : (Js = Oe());
}
function Xn(e) {
  return e.mode & 1
    ? le & 2 && $e !== 0
      ? $e & -$e
      : K1.transition !== null
      ? (Xs === 0 && (Xs = Jp()), Xs)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : im(e.type))),
        e)
    : 1;
}
function Ht(e, t, n, r) {
  if (50 < Po) throw ((Po = 0), (Fu = null), Error(j(185)));
  ns(e, n, r),
    (!(le & 2) || e !== He) &&
      (e === He && (!(le & 2) && (Qa |= n), Fe === 4 && Bn(e, $e)),
      gt(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((ji = Oe() + 500), Wa && sr()));
}
function gt(e, t) {
  var n = e.callbackNode;
  K0(e, t);
  var r = la(e, e === He ? $e : 0);
  if (r === 0)
    n !== null && yf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yf(n), t === 1))
      e.tag === 0 ? G1(dh.bind(null, e)) : bm(dh.bind(null, e)),
        V1(function () {
          !(le & 6) && sr();
        }),
        (n = null);
    else {
      switch (Xp(r)) {
        case 1:
          n = pc;
          break;
        case 4:
          n = qp;
          break;
        case 16:
          n = aa;
          break;
        case 536870912:
          n = Yp;
          break;
        default:
          n = aa;
      }
      n = Sg(n, mg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mg(e, t) {
  if (((Js = -1), (Xs = 0), le & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (_i() && e.callbackNode !== n) return null;
  var r = la(e, e === He ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ka(e, r);
  else {
    t = r;
    var i = le;
    le |= 2;
    var o = vg();
    (He !== e || $e !== t) && ((cn = null), (ji = Oe() + 500), kr(e, t));
    do
      try {
        h2();
        break;
      } catch (u) {
        gg(e, u);
      }
    while (!0);
    Ic(),
      (ba.current = o),
      (le = i),
      De !== null ? (t = 0) : ((He = null), ($e = 0), (t = Fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = hu(e)), i !== 0 && ((r = i), (t = zu(e, i)))), t === 1)
    )
      throw ((n = Qo), kr(e, 0), Bn(e, r), gt(e, Oe()), n);
    if (t === 6) Bn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !d2(i) &&
          ((t = ka(e, r)),
          t === 2 && ((o = hu(e)), o !== 0 && ((r = o), (t = zu(e, o)))),
          t === 1))
      )
        throw ((n = Qo), kr(e, 0), Bn(e, r), gt(e, Oe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          yr(e, ft, cn);
          break;
        case 3:
          if (
            (Bn(e, r), (r & 130023424) === r && ((t = Vc + 500 - Oe()), 10 < t))
          ) {
            if (la(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              at(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Eu(yr.bind(null, e, ft, cn), t);
            break;
          }
          yr(e, ft, cn);
          break;
        case 4:
          if ((Bn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Vt(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * c2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Eu(yr.bind(null, e, ft, cn), r);
            break;
          }
          yr(e, ft, cn);
          break;
        case 5:
          yr(e, ft, cn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return gt(e, Oe()), e.callbackNode === n ? mg.bind(null, e) : null;
}
function zu(e, t) {
  var n = To;
  return (
    e.current.memoizedState.isDehydrated && (kr(e, t).flags |= 256),
    (e = ka(e, t)),
    e !== 2 && ((t = ft), (ft = n), t !== null && Vu(t)),
    e
  );
}
function Vu(e) {
  ft === null ? (ft = e) : ft.push.apply(ft, e);
}
function d2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Wt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bn(e, t) {
  for (
    t &= ~zc,
      t &= ~Qa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dh(e) {
  if (le & 6) throw Error(j(327));
  _i();
  var t = la(e, 0);
  if (!(t & 1)) return gt(e, Oe()), null;
  var n = ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hu(e);
    r !== 0 && ((t = r), (n = zu(e, r)));
  }
  if (n === 1) throw ((n = Qo), kr(e, 0), Bn(e, t), gt(e, Oe()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yr(e, ft, cn),
    gt(e, Oe()),
    null
  );
}
function Hc(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((ji = Oe() + 500), Wa && sr());
  }
}
function Nr(e) {
  $n !== null && $n.tag === 0 && !(le & 6) && _i();
  var t = le;
  le |= 1;
  var n = Nt.transition,
    r = he;
  try {
    if (((Nt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Nt.transition = n), (le = t), !(le & 6) && sr();
  }
}
function Wc() {
  (wt = mi.current), xe(mi);
}
function kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), z1(n)), De !== null))
    for (n = De.return; n !== null; ) {
      var r = n;
      switch ((_c(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ha();
          break;
        case 3:
          Oi(), xe(pt), xe(et), Oc();
          break;
        case 5:
          Nc(r);
          break;
        case 4:
          Oi();
          break;
        case 13:
          xe(be);
          break;
        case 19:
          xe(be);
          break;
        case 10:
          Tc(r.type._context);
          break;
        case 22:
        case 23:
          Wc();
      }
      n = n.return;
    }
  if (
    ((He = e),
    (De = e = Zn(e.current, null)),
    ($e = wt = t),
    (Fe = 0),
    (Qo = null),
    (zc = Qa = Rr = 0),
    (ft = To = null),
    Sr !== null)
  ) {
    for (t = 0; t < Sr.length; t++)
      if (((n = Sr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Sr = null;
  }
  return e;
}
function gg(e, t) {
  do {
    var n = De;
    try {
      if ((Ic(), (Qs.current = Sa), Ea)) {
        for (var r = _e.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ea = !1;
      }
      if (
        ((Ar = 0),
        (Ve = Be = _e = null),
        (ko = !1),
        ($o = 0),
        (Fc.current = null),
        n === null || n.return === null)
      ) {
        (Fe = 1), (Qo = t), (De = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          u = n,
          c = t;
        if (
          ((t = $e),
          (u.flags |= 32768),
          c !== null && typeof c == 'object' && typeof c.then == 'function')
        ) {
          var h = c,
            m = u,
            g = m.tag;
          if (!(m.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var x = m.alternate;
            x
              ? ((m.updateQueue = x.updateQueue),
                (m.memoizedState = x.memoizedState),
                (m.lanes = x.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var I = Xf(a);
          if (I !== null) {
            (I.flags &= -257),
              Zf(I, a, u, o, t),
              I.mode & 1 && Jf(o, h, t),
              (t = I),
              (c = h);
            var T = t.updateQueue;
            if (T === null) {
              var k = new Set();
              k.add(c), (t.updateQueue = k);
            } else T.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Jf(o, h, t), $c();
              break e;
            }
            c = Error(j(426));
          }
        } else if (Ee && u.mode & 1) {
          var L = Xf(a);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Zf(L, a, u, o, t),
              Cc(Li(c, u));
            break e;
          }
        }
        (o = c = Li(c, u)),
          Fe !== 4 && (Fe = 2),
          To === null ? (To = [o]) : To.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = Zm(o, c, t);
              Wf(o, y);
              break e;
            case 1:
              u = c;
              var v = o.type,
                E = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof v.getDerivedStateFromError == 'function' ||
                  (E !== null &&
                    typeof E.componentDidCatch == 'function' &&
                    (Jn === null || !Jn.has(E))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var R = eg(o, u, t);
                Wf(o, R);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      yg(n);
    } catch (M) {
      (t = M), De === n && n !== null && (De = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vg() {
  var e = ba.current;
  return (ba.current = Sa), e === null ? Sa : e;
}
function $c() {
  (Fe === 0 || Fe === 3 || Fe === 2) && (Fe = 4),
    He === null || (!(Rr & 268435455) && !(Qa & 268435455)) || Bn(He, $e);
}
function ka(e, t) {
  var n = le;
  le |= 2;
  var r = vg();
  (He !== e || $e !== t) && ((cn = null), kr(e, t));
  do
    try {
      f2();
      break;
    } catch (i) {
      gg(e, i);
    }
  while (!0);
  if ((Ic(), (le = n), (ba.current = r), De !== null)) throw Error(j(261));
  return (He = null), ($e = 0), Fe;
}
function f2() {
  for (; De !== null; ) wg(De);
}
function h2() {
  for (; De !== null && !U0(); ) wg(De);
}
function wg(e) {
  var t = Eg(e.alternate, e, wt);
  (e.memoizedProps = e.pendingProps),
    t === null ? yg(e) : (De = t),
    (Fc.current = null);
}
function yg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = s2(n, t)), n !== null)) {
        (n.flags &= 32767), (De = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Fe = 6), (De = null);
        return;
      }
    } else if (((n = o2(n, t, wt)), n !== null)) {
      De = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      De = t;
      return;
    }
    De = t = e;
  } while (t !== null);
  Fe === 0 && (Fe = 5);
}
function yr(e, t, n) {
  var r = he,
    i = Nt.transition;
  try {
    (Nt.transition = null), (he = 1), p2(e, t, n, r);
  } finally {
    (Nt.transition = i), (he = r);
  }
  return null;
}
function p2(e, t, n, r) {
  do _i();
  while ($n !== null);
  if (le & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Q0(e, o),
    e === He && ((De = He = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      Sg(aa, function () {
        return _i(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Nt.transition), (Nt.transition = null);
    var a = he;
    he = 1;
    var u = le;
    (le |= 4),
      (Fc.current = null),
      l2(e, n),
      hg(n, e),
      L1(yu),
      (ua = !!wu),
      (yu = wu = null),
      (e.current = n),
      u2(n),
      B0(),
      (le = u),
      (he = a),
      (Nt.transition = o);
  } else e.current = n;
  if (
    (Bs && ((Bs = !1), ($n = e), (Ca = i)),
    (o = e.pendingLanes),
    o === 0 && (Jn = null),
    V0(n.stateNode),
    gt(e, Oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (_a) throw ((_a = !1), (e = Bu), (Bu = null), e);
  return (
    Ca & 1 && e.tag !== 0 && _i(),
    (o = e.pendingLanes),
    o & 1 ? (e === Fu ? Po++ : ((Po = 0), (Fu = e))) : (Po = 0),
    sr(),
    null
  );
}
function _i() {
  if ($n !== null) {
    var e = Xp(Ca),
      t = Nt.transition,
      n = he;
    try {
      if (((Nt.transition = null), (he = 16 > e ? 16 : e), $n === null))
        var r = !1;
      else {
        if (((e = $n), ($n = null), (Ca = 0), le & 6)) throw Error(j(331));
        var i = le;
        for (le |= 4, V = e.current; V !== null; ) {
          var o = V,
            a = o.child;
          if (V.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var c = 0; c < u.length; c++) {
                var h = u[c];
                for (V = h; V !== null; ) {
                  var m = V;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(8, m, o);
                  }
                  var g = m.child;
                  if (g !== null) (g.return = m), (V = g);
                  else
                    for (; V !== null; ) {
                      m = V;
                      var x = m.sibling,
                        I = m.return;
                      if ((cg(m), m === h)) {
                        V = null;
                        break;
                      }
                      if (x !== null) {
                        (x.return = I), (V = x);
                        break;
                      }
                      V = I;
                    }
                }
              }
              var T = o.alternate;
              if (T !== null) {
                var k = T.child;
                if (k !== null) {
                  T.child = null;
                  do {
                    var L = k.sibling;
                    (k.sibling = null), (k = L);
                  } while (k !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (V = a);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Io(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (V = y);
                break e;
              }
              V = o.return;
            }
        }
        var v = e.current;
        for (V = v; V !== null; ) {
          a = V;
          var E = a.child;
          if (a.subtreeFlags & 2064 && E !== null) (E.return = a), (V = E);
          else
            e: for (a = v; V !== null; ) {
              if (((u = V), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ka(9, u);
                  }
                } catch (M) {
                  Pe(u, u.return, M);
                }
              if (u === a) {
                V = null;
                break e;
              }
              var R = u.sibling;
              if (R !== null) {
                (R.return = u.return), (V = R);
                break e;
              }
              V = u.return;
            }
        }
        if (
          ((le = i), sr(), Zt && typeof Zt.onPostCommitFiberRoot == 'function')
        )
          try {
            Zt.onPostCommitFiberRoot(Ba, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Nt.transition = t);
    }
  }
  return !1;
}
function fh(e, t, n) {
  (t = Li(n, t)),
    (t = Zm(e, t, 1)),
    (e = Yn(e, t, 1)),
    (t = at()),
    e !== null && (ns(e, 1, t), gt(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) fh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Jn === null || !Jn.has(r)))
        ) {
          (e = Li(n, e)),
            (e = eg(t, e, 1)),
            (t = Yn(t, e, 1)),
            (e = at()),
            t !== null && (ns(t, 1, e), gt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function m2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = at()),
    (e.pingedLanes |= e.suspendedLanes & n),
    He === e &&
      ($e & n) === n &&
      (Fe === 4 || (Fe === 3 && ($e & 130023424) === $e && 500 > Oe() - Vc)
        ? kr(e, 0)
        : (zc |= n)),
    gt(e, t);
}
function xg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
      : (t = 1));
  var n = at();
  (e = bn(e, t)), e !== null && (ns(e, t, n), gt(e, n));
}
function g2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xg(e, n);
}
function v2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), xg(e, n);
}
var Eg;
Eg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pt.current) ht = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ht = !1), i2(e, t, n);
      ht = !!(e.flags & 131072);
    }
  else (ht = !1), Ee && t.flags & 1048576 && _m(t, ga, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ys(e, t), (e = t.pendingProps);
      var i = Ai(t, et.current);
      bi(t, n), (i = jc(null, t, r, e, i, n));
      var o = Dc();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mt(r) ? ((o = !0), pa(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ac(t),
            (i.updater = $a),
            (t.stateNode = i),
            (i._reactInternals = t),
            Tu(t, r, e, n),
            (t = Ru(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ee && o && bc(t), st(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ys(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = y2(r)),
          (e = Ut(r, e)),
          i)
        ) {
          case 0:
            t = Au(null, t, r, e, n);
            break e;
          case 1:
            t = nh(null, t, r, e, n);
            break e;
          case 11:
            t = eh(null, t, r, e, n);
            break e;
          case 14:
            t = th(null, t, r, Ut(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        Au(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        nh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ig(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Tm(e, t),
          ya(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Li(Error(j(423)), t)), (t = rh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Li(Error(j(424)), t)), (t = rh(e, t, r, n, i));
            break e;
          } else
            for (
              yt = qn(t.stateNode.containerInfo.firstChild),
                xt = t,
                Ee = !0,
                zt = null,
                n = Nm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ri(), r === i)) {
            t = _n(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Om(t),
        e === null && Cu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        xu(r, i) ? (a = null) : o !== null && xu(r, o) && (t.flags |= 32),
        rg(e, t),
        st(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Cu(t), null;
    case 13:
      return og(e, t, n);
    case 4:
      return (
        Rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ni(t, null, r, n)) : st(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        eh(e, t, r, i, n)
      );
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          we(va, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (Wt(o.value, a)) {
            if (o.children === i.children && !pt.current) {
              t = _n(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                a = o.child;
                for (var c = u.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      (c = wn(-1, n & -n)), (c.tag = 2);
                      var h = o.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var m = h.pending;
                        m === null
                          ? (c.next = c)
                          : ((c.next = m.next), (m.next = c)),
                          (h.pending = c);
                      }
                    }
                    (o.lanes |= n),
                      (c = o.alternate),
                      c !== null && (c.lanes |= n),
                      ku(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(j(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  ku(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        st(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        bi(t, n),
        (i = Ot(i)),
        (r = r(i)),
        (t.flags |= 1),
        st(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ut(r, t.pendingProps)),
        (i = Ut(r.type, i)),
        th(e, t, r, i, n)
      );
    case 15:
      return tg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ut(r, i)),
        Ys(e, t),
        (t.tag = 1),
        mt(r) ? ((e = !0), pa(t)) : (e = !1),
        bi(t, n),
        Am(t, r, i),
        Tu(t, r, i, n),
        Ru(null, t, r, !0, e, n)
      );
    case 19:
      return sg(e, t, n);
    case 22:
      return ng(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Sg(e, t) {
  return Qp(e, t);
}
function w2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, n, r) {
  return new w2(e, t, n, r);
}
function Gc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function y2(e) {
  if (typeof e == 'function') return Gc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dc)) return 11;
    if (e === fc) return 14;
  }
  return 2;
}
function Zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zs(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Gc(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case oi:
        return Ir(n.children, i, o, t);
      case cc:
        (a = 8), (i |= 8);
        break;
      case Xl:
        return (
          (e = Rt(12, n, t, i | 2)), (e.elementType = Xl), (e.lanes = o), e
        );
      case Zl:
        return (e = Rt(13, n, t, i)), (e.elementType = Zl), (e.lanes = o), e;
      case eu:
        return (e = Rt(19, n, t, i)), (e.elementType = eu), (e.lanes = o), e;
      case Rp:
        return qa(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Pp:
              a = 10;
              break e;
            case Ap:
              a = 9;
              break e;
            case dc:
              a = 11;
              break e;
            case fc:
              a = 14;
              break e;
            case Dn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Rt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ir(e, t, n, r) {
  return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function qa(e, t, n, r) {
  return (
    (e = Rt(22, e, r, t)),
    (e.elementType = Rp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ul(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function Bl(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function x2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yl(0)),
    (this.expirationTimes = yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Kc(e, t, n, r, i, o, a, u, c) {
  return (
    (e = new x2(e, t, n, u, c)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ac(o),
    e
  );
}
function E2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ii,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bg(e) {
  if (!e) return rr;
  e = e._reactInternals;
  e: {
    if (Ur(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mt(n)) return Sm(e, n, t);
  }
  return t;
}
function _g(e, t, n, r, i, o, a, u, c) {
  return (
    (e = Kc(n, r, !0, e, i, o, a, u, c)),
    (e.context = bg(null)),
    (n = e.current),
    (r = at()),
    (i = Xn(n)),
    (o = wn(r, i)),
    (o.callback = t ?? null),
    Yn(n, o, i),
    (e.current.lanes = i),
    ns(e, i, r),
    gt(e, r),
    e
  );
}
function Ya(e, t, n, r) {
  var i = t.current,
    o = at(),
    a = Xn(i);
  return (
    (n = bg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yn(i, t, a)),
    e !== null && (Ht(e, i, a, o), Ks(e, i, a)),
    a
  );
}
function Ia(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qc(e, t) {
  hh(e, t), (e = e.alternate) && hh(e, t);
}
function S2() {
  return null;
}
var Cg =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function qc(e) {
  this._internalRoot = e;
}
Ja.prototype.render = qc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Ya(e, t, null, null);
};
Ja.prototype.unmount = qc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nr(function () {
      Ya(null, e, null, null);
    }),
      (t[Sn] = null);
  }
};
function Ja(e) {
  this._internalRoot = e;
}
Ja.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++);
    Un.splice(n, 0, e), n === 0 && rm(e);
  }
};
function Yc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ph() {}
function b2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var h = Ia(a);
        o.call(h);
      };
    }
    var a = _g(t, r, e, 0, null, !1, !1, '', ph);
    return (
      (e._reactRootContainer = a),
      (e[Sn] = a.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      Nr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var h = Ia(c);
      u.call(h);
    };
  }
  var c = Kc(e, 0, !1, null, null, !1, !1, '', ph);
  return (
    (e._reactRootContainer = c),
    (e[Sn] = c.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    Nr(function () {
      Ya(t, c, n, r);
    }),
    c
  );
}
function Za(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == 'function') {
      var u = i;
      i = function () {
        var c = Ia(a);
        u.call(c);
      };
    }
    Ya(t, a, e, i);
  } else a = b2(n, t, e, i, r);
  return Ia(a);
}
Zp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vo(t.pendingLanes);
        n !== 0 &&
          (mc(t, n | 1), gt(t, Oe()), !(le & 6) && ((ji = Oe() + 500), sr()));
      }
      break;
    case 13:
      Nr(function () {
        var r = bn(e, 1);
        if (r !== null) {
          var i = at();
          Ht(r, e, 1, i);
        }
      }),
        Qc(e, 1);
  }
};
gc = function (e) {
  if (e.tag === 13) {
    var t = bn(e, 134217728);
    if (t !== null) {
      var n = at();
      Ht(t, e, 134217728, n);
    }
    Qc(e, 134217728);
  }
};
em = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = bn(e, t);
    if (n !== null) {
      var r = at();
      Ht(n, e, t, r);
    }
    Qc(e, t);
  }
};
tm = function () {
  return he;
};
nm = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
cu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ru(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ha(r);
            if (!i) throw Error(j(90));
            Op(r), ru(r, i);
          }
        }
      }
      break;
    case 'textarea':
      jp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yi(e, !!n.multiple, t, !1);
  }
};
Vp = Hc;
Hp = Nr;
var _2 = { usingClientEntryPoint: !1, Events: [is, ui, Ha, Fp, zp, Hc] },
  lo = {
    findFiberByHostInstance: Er,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  C2 = {
    bundleType: lo.bundleType,
    version: lo.version,
    rendererPackageName: lo.rendererPackageName,
    rendererConfig: lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: In.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lo.findFiberByHostInstance || S2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
    try {
      (Ba = Fs.inject(C2)), (Zt = Fs);
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _2;
St.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yc(t)) throw Error(j(200));
  return E2(e, t, null, n);
};
St.createRoot = function (e, t) {
  if (!Yc(e)) throw Error(j(299));
  var n = !1,
    r = '',
    i = Cg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Kc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Sn] = t.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    new qc(t)
  );
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = Gp(t)), (e = e === null ? null : e.stateNode), e;
};
St.flushSync = function (e) {
  return Nr(e);
};
St.hydrate = function (e, t, n) {
  if (!Xa(t)) throw Error(j(200));
  return Za(null, e, t, !0, n);
};
St.hydrateRoot = function (e, t, n) {
  if (!Yc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = Cg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = _g(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Sn] = t.current),
    Fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ja(t);
};
St.render = function (e, t, n) {
  if (!Xa(t)) throw Error(j(200));
  return Za(null, e, t, !1, n);
};
St.unmountComponentAtNode = function (e) {
  if (!Xa(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Nr(function () {
        Za(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sn] = null);
        });
      }),
      !0)
    : !1;
};
St.unstable_batchedUpdates = Hc;
St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xa(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Za(e, t, n, !1, r);
};
St.version = '18.2.0-next-9e3b772b8-20220608';
function kg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kg);
    } catch (e) {
      console.error(e);
    }
}
kg(), (_p.exports = St);
var Jc = _p.exports;
const k2 = nc(Jc),
  I2 = hp({ __proto__: null, default: k2 }, [Jc]);
var mh = Jc;
(Yl.createRoot = mh.createRoot), (Yl.hydrateRoot = mh.hydrateRoot);
var Ig = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  gh = vn.createContext && vn.createContext(Ig),
  T2 = ['attr', 'size', 'title'];
function P2(e, t) {
  if (e == null) return {};
  var n = A2(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function A2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ta() {
  return (
    (Ta = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ta.apply(this, arguments)
  );
}
function vh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vh(Object(n), !0).forEach(function (r) {
          R2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function R2(e, t, n) {
  return (
    (t = N2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function N2(e) {
  var t = O2(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function O2(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(e);
}
function Tg(e) {
  return (
    e &&
    e.map((t, n) =>
      vn.createElement(t.tag, Pa({ key: n }, t.attr), Tg(t.child))
    )
  );
}
function jt(e) {
  return (t) =>
    vn.createElement(L2, Ta({ attr: Pa({}, e.attr) }, t), Tg(e.child));
}
function L2(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      a = P2(e, T2),
      u = i || n.size || '1em',
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + ' ' : '') + e.className),
      vn.createElement(
        'svg',
        Ta(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: c,
            style: Pa(Pa({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && vn.createElement('title', null, o),
        e.children
      )
    );
  };
  return gh !== void 0
    ? vn.createElement(gh.Consumer, null, (n) => t(n))
    : t(Ig);
}
function j2(e) {
  return jt({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    child: [
      { tag: 'path', attr: { d: 'M17 8h1a4 4 0 1 1 0 8h-1' }, child: [] },
      {
        tag: 'path',
        attr: { d: 'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z' },
        child: [],
      },
      { tag: 'line', attr: { x1: '6', x2: '6', y1: '2', y2: '4' }, child: [] },
      {
        tag: 'line',
        attr: { x1: '10', x2: '10', y1: '2', y2: '4' },
        child: [],
      },
      {
        tag: 'line',
        attr: { x1: '14', x2: '14', y1: '2', y2: '4' },
        child: [],
      },
    ],
  })(e);
}
const D2 = '/assets/1-qTi3vhOj.png';
function M2(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      { tag: 'circle', attr: { cx: '256', cy: '256', r: '64' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z',
        },
        child: [],
      },
    ],
  })(e);
}
function U2(e) {
  return jt({
    tag: 'svg',
    attr: {
      fill: 'none',
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      'aria-hidden': 'true',
    },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
        },
        child: [],
      },
    ],
  })(e);
}
function Pg(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' }, child: [] },
      {
        tag: 'path',
        attr: {
          d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
        },
        child: [],
      },
    ],
  })(e);
}
var Ag = { exports: {} };
/*!
 * sweetalert2 v11.10.8
 * Released under the MIT License.
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Nn, function () {
    function n(f, s, l) {
      if (typeof f == 'function' ? f === s : f.has(s))
        return arguments.length < 3 ? s : l;
      throw new TypeError('Private element is not present on this object');
    }
    function r(f, s, l) {
      return (
        (s = L(s)),
        E(
          f,
          u() ? Reflect.construct(s, l || [], L(f).constructor) : s.apply(f, l)
        )
      );
    }
    function i(f, s) {
      return f.get(n(f, s));
    }
    function o(f, s, l) {
      return f.set(n(f, s), l), l;
    }
    function a(f, s, l) {
      if (u()) return Reflect.construct.apply(null, arguments);
      var d = [null];
      d.push.apply(d, s);
      var w = new (f.bind.apply(f, d))();
      return w;
    }
    function u() {
      try {
        var f = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch {}
      return (u = function () {
        return !!f;
      })();
    }
    function c(f, s) {
      var l =
        f == null
          ? null
          : (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
      if (l != null) {
        var d,
          w,
          P,
          z,
          ee = [],
          ne = !0,
          Ie = !1;
        try {
          if (((P = (l = l.call(f)).next), s !== 0))
            for (
              ;
              !(ne = (d = P.call(l)).done) &&
              (ee.push(d.value), ee.length !== s);
              ne = !0
            );
        } catch (eo) {
          (Ie = !0), (w = eo);
        } finally {
          try {
            if (!ne && l.return != null && ((z = l.return()), Object(z) !== z))
              return;
          } finally {
            if (Ie) throw w;
          }
        }
        return ee;
      }
    }
    function h(f, s) {
      if (typeof f != 'object' || !f) return f;
      var l = f[Symbol.toPrimitive];
      if (l !== void 0) {
        var d = l.call(f, s);
        if (typeof d != 'object') return d;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(f);
    }
    function m(f) {
      var s = h(f, 'string');
      return typeof s == 'symbol' ? s : s + '';
    }
    function g(f) {
      '@babel/helpers - typeof';
      return (
        (g =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (s) {
                return typeof s;
              }
            : function (s) {
                return s &&
                  typeof Symbol == 'function' &&
                  s.constructor === Symbol &&
                  s !== Symbol.prototype
                  ? 'symbol'
                  : typeof s;
              }),
        g(f)
      );
    }
    function x(f, s) {
      if (!(f instanceof s))
        throw new TypeError('Cannot call a class as a function');
    }
    function I(f, s) {
      for (var l = 0; l < s.length; l++) {
        var d = s[l];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          'value' in d && (d.writable = !0),
          Object.defineProperty(f, m(d.key), d);
      }
    }
    function T(f, s, l) {
      return (
        s && I(f.prototype, s),
        Object.defineProperty(f, 'prototype', { writable: !1 }),
        f
      );
    }
    function k(f, s) {
      if (typeof s != 'function' && s !== null)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (f.prototype = Object.create(s && s.prototype, {
        constructor: { value: f, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(f, 'prototype', { writable: !1 }),
        s && y(f, s);
    }
    function L(f) {
      return (
        (L = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (l) {
              return l.__proto__ || Object.getPrototypeOf(l);
            }),
        L(f)
      );
    }
    function y(f, s) {
      return (
        (y = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (d, w) {
              return (d.__proto__ = w), d;
            }),
        y(f, s)
      );
    }
    function v(f) {
      if (f === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return f;
    }
    function E(f, s) {
      if (s && (typeof s == 'object' || typeof s == 'function')) return s;
      if (s !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return v(f);
    }
    function R(f, s) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(f, s) && ((f = L(f)), f !== null);

      );
      return f;
    }
    function M() {
      return (
        typeof Reflect < 'u' && Reflect.get
          ? (M = Reflect.get.bind())
          : (M = function (s, l, d) {
              var w = R(s, l);
              if (w) {
                var P = Object.getOwnPropertyDescriptor(w, l);
                return P.get
                  ? P.get.call(arguments.length < 3 ? s : d)
                  : P.value;
              }
            }),
        M.apply(this, arguments)
      );
    }
    function S(f, s) {
      return H(f) || c(f, s) || oe(f, s) || ct();
    }
    function O(f) {
      return B(f) || Q(f) || oe(f) || ke();
    }
    function B(f) {
      if (Array.isArray(f)) return Se(f);
    }
    function H(f) {
      if (Array.isArray(f)) return f;
    }
    function Q(f) {
      if (
        (typeof Symbol < 'u' && f[Symbol.iterator] != null) ||
        f['@@iterator'] != null
      )
        return Array.from(f);
    }
    function oe(f, s) {
      if (f) {
        if (typeof f == 'string') return Se(f, s);
        var l = Object.prototype.toString.call(f).slice(8, -1);
        if (
          (l === 'Object' && f.constructor && (l = f.constructor.name),
          l === 'Map' || l === 'Set')
        )
          return Array.from(f);
        if (
          l === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
        )
          return Se(f, s);
      }
    }
    function Se(f, s) {
      (s == null || s > f.length) && (s = f.length);
      for (var l = 0, d = new Array(s); l < s; l++) d[l] = f[l];
      return d;
    }
    function ke() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ct() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Tn(f, s) {
      if (s.has(f))
        throw new TypeError(
          'Cannot initialize the same private elements twice on an object'
        );
    }
    function Gt(f, s, l) {
      Tn(f, s), s.set(f, l);
    }
    var ge = 100,
      N = {},
      q = function () {
        N.previousActiveElement instanceof HTMLElement
          ? (N.previousActiveElement.focus(), (N.previousActiveElement = null))
          : document.body && document.body.focus();
      },
      J = function (s) {
        return new Promise(function (l) {
          if (!s) return l();
          var d = window.scrollX,
            w = window.scrollY;
          (N.restoreFocusTimeout = setTimeout(function () {
            q(), l();
          }, ge)),
            window.scrollTo(d, w);
        });
      },
      se = 'swal2-',
      pe = [
        'container',
        'shown',
        'height-auto',
        'iosfix',
        'popup',
        'modal',
        'no-backdrop',
        'no-transition',
        'toast',
        'toast-shown',
        'show',
        'hide',
        'close',
        'title',
        'html-container',
        'actions',
        'confirm',
        'deny',
        'cancel',
        'default-outline',
        'footer',
        'icon',
        'icon-content',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'label',
        'textarea',
        'inputerror',
        'input-label',
        'validation-message',
        'progress-steps',
        'active-progress-step',
        'progress-step',
        'progress-step-line',
        'loader',
        'loading',
        'styled',
        'top',
        'top-start',
        'top-end',
        'top-left',
        'top-right',
        'center',
        'center-start',
        'center-end',
        'center-left',
        'center-right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'bottom-left',
        'bottom-right',
        'grow-row',
        'grow-column',
        'grow-fullscreen',
        'rtl',
        'timer-progress-bar',
        'timer-progress-bar-container',
        'scrollbar-measure',
        'icon-success',
        'icon-warning',
        'icon-info',
        'icon-question',
        'icon-error',
      ],
      C = pe.reduce(function (f, s) {
        return (f[s] = se + s), f;
      }, {}),
      Me = ['success', 'warning', 'info', 'question', 'error'],
      Ke = Me.reduce(function (f, s) {
        return (f[s] = se + s), f;
      }, {}),
      ze = 'SweetAlert2:',
      _t = function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
      Qe = function (s) {
        console.warn(
          ''.concat(ze, ' ').concat(g(s) === 'object' ? s.join(' ') : s)
        );
      },
      rn = function (s) {
        console.error(''.concat(ze, ' ').concat(s));
      },
      ps = [],
      nt = function (s) {
        ps.includes(s) || (ps.push(s), Qe(s));
      },
      dr = function (s, l) {
        nt(
          '"'
            .concat(
              s,
              '" is deprecated and will be removed in the next major release. Please use "'
            )
            .concat(l, '" instead.')
        );
      },
      fr = function (s) {
        return typeof s == 'function' ? s() : s;
      },
      $i = function (s) {
        return s && typeof s.toPromise == 'function';
      },
      vt = function (s) {
        return $i(s) ? s.toPromise() : Promise.resolve(s);
      },
      Gi = function (s) {
        return s && Promise.resolve(s) === s;
      },
      qe = function () {
        return document.body.querySelector('.'.concat(C.container));
      },
      hr = function (s) {
        var l = qe();
        return l ? l.querySelector(s) : null;
      },
      rt = function (s) {
        return hr('.'.concat(s));
      },
      ce = function () {
        return rt(C.popup);
      },
      Dt = function () {
        return rt(C.icon);
      },
      ms = function () {
        return rt(C['icon-content']);
      },
      Hr = function () {
        return rt(C.title);
      },
      Ct = function () {
        return rt(C['html-container']);
      },
      Pn = function () {
        return rt(C.image);
      },
      Wr = function () {
        return rt(C['progress-steps']);
      },
      on = function () {
        return rt(C['validation-message']);
      },
      kt = function () {
        return hr('.'.concat(C.actions, ' .').concat(C.confirm));
      },
      it = function () {
        return hr('.'.concat(C.actions, ' .').concat(C.cancel));
      },
      Kt = function () {
        return hr('.'.concat(C.actions, ' .').concat(C.deny));
      },
      gs = function () {
        return rt(C['input-label']);
      },
      sn = function () {
        return hr('.'.concat(C.loader));
      },
      pr = function () {
        return rt(C.actions);
      },
      Ki = function () {
        return rt(C.footer);
      },
      an = function () {
        return rt(C['timer-progress-bar']);
      },
      $r = function () {
        return rt(C.close);
      },
      Qi = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      qi = function () {
        var s = ce();
        if (!s) return [];
        var l = s.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          d = Array.from(l).sort(function (z, ee) {
            var ne = parseInt(z.getAttribute('tabindex') || '0'),
              Ie = parseInt(ee.getAttribute('tabindex') || '0');
            return ne > Ie ? 1 : ne < Ie ? -1 : 0;
          }),
          w = s.querySelectorAll(Qi),
          P = Array.from(w).filter(function (z) {
            return z.getAttribute('tabindex') !== '-1';
          });
        return O(new Set(d.concat(P))).filter(function (z) {
          return ue(z);
        });
      },
      Gr = function () {
        return (
          b(document.body, C.shown) &&
          !b(document.body, C['toast-shown']) &&
          !b(document.body, C['no-backdrop'])
        );
      },
      Kr = function () {
        var s = ce();
        return s ? b(s, C.toast) : !1;
      },
      vs = function () {
        var s = ce();
        return s ? s.hasAttribute('data-loading') : !1;
      },
      ot = function (s, l) {
        if (((s.textContent = ''), l)) {
          var d = new DOMParser(),
            w = d.parseFromString(l, 'text/html'),
            P = w.querySelector('head');
          P &&
            Array.from(P.childNodes).forEach(function (ee) {
              s.appendChild(ee);
            });
          var z = w.querySelector('body');
          z &&
            Array.from(z.childNodes).forEach(function (ee) {
              ee instanceof HTMLVideoElement || ee instanceof HTMLAudioElement
                ? s.appendChild(ee.cloneNode(!0))
                : s.appendChild(ee);
            });
        }
      },
      b = function (s, l) {
        if (!l) return !1;
        for (var d = l.split(/\s+/), w = 0; w < d.length; w++)
          if (!s.classList.contains(d[w])) return !1;
        return !0;
      },
      _ = function (s, l) {
        Array.from(s.classList).forEach(function (d) {
          !Object.values(C).includes(d) &&
            !Object.values(Ke).includes(d) &&
            !Object.values(l.showClass || {}).includes(d) &&
            s.classList.remove(d);
        });
      },
      A = function (s, l, d) {
        if ((_(s, l), l.customClass && l.customClass[d])) {
          if (
            typeof l.customClass[d] != 'string' &&
            !l.customClass[d].forEach
          ) {
            Qe(
              'Invalid type of customClass.'
                .concat(d, '! Expected string or iterable object, got "')
                .concat(g(l.customClass[d]), '"')
            );
            return;
          }
          F(s, l.customClass[d]);
        }
      },
      U = function (s, l) {
        if (!l) return null;
        switch (l) {
          case 'select':
          case 'textarea':
          case 'file':
            return s.querySelector('.'.concat(C.popup, ' > .').concat(C[l]));
          case 'checkbox':
            return s.querySelector(
              '.'.concat(C.popup, ' > .').concat(C.checkbox, ' input')
            );
          case 'radio':
            return (
              s.querySelector(
                '.'.concat(C.popup, ' > .').concat(C.radio, ' input:checked')
              ) ||
              s.querySelector(
                '.'
                  .concat(C.popup, ' > .')
                  .concat(C.radio, ' input:first-child')
              )
            );
          case 'range':
            return s.querySelector(
              '.'.concat(C.popup, ' > .').concat(C.range, ' input')
            );
          default:
            return s.querySelector('.'.concat(C.popup, ' > .').concat(C.input));
        }
      },
      W = function (s) {
        if ((s.focus(), s.type !== 'file')) {
          var l = s.value;
          (s.value = ''), (s.value = l);
        }
      },
      Z = function (s, l, d) {
        !s ||
          !l ||
          (typeof l == 'string' && (l = l.split(/\s+/).filter(Boolean)),
          l.forEach(function (w) {
            Array.isArray(s)
              ? s.forEach(function (P) {
                  d ? P.classList.add(w) : P.classList.remove(w);
                })
              : d
              ? s.classList.add(w)
              : s.classList.remove(w);
          }));
      },
      F = function (s, l) {
        Z(s, l, !0);
      },
      G = function (s, l) {
        Z(s, l, !1);
      },
      $ = function (s, l) {
        for (var d = Array.from(s.children), w = 0; w < d.length; w++) {
          var P = d[w];
          if (P instanceof HTMLElement && b(P, l)) return P;
        }
      },
      X = function (s, l, d) {
        d === ''.concat(parseInt(d)) && (d = parseInt(d)),
          d || parseInt(d) === 0
            ? s.style.setProperty(
                l,
                typeof d == 'number' ? ''.concat(d, 'px') : d
              )
            : s.style.removeProperty(l);
      },
      te = function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'flex';
        s && (s.style.display = l);
      },
      K = function (s) {
        s && (s.style.display = 'none');
      },
      de = function (s) {
        var l =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'block';
        s &&
          new MutationObserver(function () {
            Ue(s, s.innerHTML, l);
          }).observe(s, { childList: !0, subtree: !0 });
      },
      Le = function (s, l, d, w) {
        var P = s.querySelector(l);
        P && P.style.setProperty(d, w);
      },
      Ue = function (s, l) {
        var d =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : 'flex';
        l ? te(s, d) : K(s);
      },
      ue = function (s) {
        return !!(
          s &&
          (s.offsetWidth || s.offsetHeight || s.getClientRects().length)
        );
      },
      An = function () {
        return !ue(kt()) && !ue(Kt()) && !ue(it());
      },
      Qr = function (s) {
        return s.scrollHeight > s.clientHeight;
      },
      ln = function (s) {
        var l = window.getComputedStyle(s),
          d = parseFloat(l.getPropertyValue('animation-duration') || '0'),
          w = parseFloat(l.getPropertyValue('transition-duration') || '0');
        return d > 0 || w > 0;
      },
      It = function (s) {
        var l =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          d = an();
        d &&
          ue(d) &&
          (l && ((d.style.transition = 'none'), (d.style.width = '100%')),
          setTimeout(function () {
            (d.style.transition = 'width '.concat(s / 1e3, 's linear')),
              (d.style.width = '0%');
          }, 10));
      },
      un = function () {
        var s = an();
        if (s) {
          var l = parseInt(window.getComputedStyle(s).width);
          s.style.removeProperty('transition'), (s.style.width = '100%');
          var d = parseInt(window.getComputedStyle(s).width),
            w = (l / d) * 100;
          s.style.width = ''.concat(w, '%');
        }
      },
      qr = function () {
        return typeof window > 'u' || typeof document > 'u';
      },
      mr = `
 <div aria-labelledby="`
        .concat(C.title, '" aria-describedby="')
        .concat(C['html-container'], '" class="')
        .concat(
          C.popup,
          `" tabindex="-1">
   <button type="button" class="`
        )
        .concat(
          C.close,
          `"></button>
   <ul class="`
        )
        .concat(
          C['progress-steps'],
          `"></ul>
   <div class="`
        )
        .concat(
          C.icon,
          `"></div>
   <img class="`
        )
        .concat(
          C.image,
          `" />
   <h2 class="`
        )
        .concat(C.title, '" id="')
        .concat(
          C.title,
          `"></h2>
   <div class="`
        )
        .concat(C['html-container'], '" id="')
        .concat(
          C['html-container'],
          `"></div>
   <input class="`
        )
        .concat(C.input, '" id="')
        .concat(
          C.input,
          `" />
   <input type="file" class="`
        )
        .concat(
          C.file,
          `" />
   <div class="`
        )
        .concat(
          C.range,
          `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`
        )
        .concat(C.select, '" id="')
        .concat(
          C.select,
          `"></select>
   <div class="`
        )
        .concat(
          C.radio,
          `"></div>
   <label class="`
        )
        .concat(
          C.checkbox,
          `">
     <input type="checkbox" id="`
        )
        .concat(
          C.checkbox,
          `" />
     <span class="`
        )
        .concat(
          C.label,
          `"></span>
   </label>
   <textarea class="`
        )
        .concat(C.textarea, '" id="')
        .concat(
          C.textarea,
          `"></textarea>
   <div class="`
        )
        .concat(C['validation-message'], '" id="')
        .concat(
          C['validation-message'],
          `"></div>
   <div class="`
        )
        .concat(
          C.actions,
          `">
     <div class="`
        )
        .concat(
          C.loader,
          `"></div>
     <button type="button" class="`
        )
        .concat(
          C.confirm,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          C.deny,
          `"></button>
     <button type="button" class="`
        )
        .concat(
          C.cancel,
          `"></button>
   </div>
   <div class="`
        )
        .concat(
          C.footer,
          `"></div>
   <div class="`
        )
        .concat(
          C['timer-progress-bar-container'],
          `">
     <div class="`
        )
        .concat(
          C['timer-progress-bar'],
          `"></div>
   </div>
 </div>
`
        )
        .replace(/(^|\n)\s*/g, ''),
      Yi = function () {
        var s = qe();
        return s
          ? (s.remove(),
            G(
              [document.documentElement, document.body],
              [C['no-backdrop'], C['toast-shown'], C['has-column']]
            ),
            !0)
          : !1;
      },
      dt = function () {
        N.currentInstance.resetValidationMessage();
      },
      Yr = function () {
        var s = ce(),
          l = $(s, C.input),
          d = $(s, C.file),
          w = s.querySelector('.'.concat(C.range, ' input')),
          P = s.querySelector('.'.concat(C.range, ' output')),
          z = $(s, C.select),
          ee = s.querySelector('.'.concat(C.checkbox, ' input')),
          ne = $(s, C.textarea);
        (l.oninput = dt),
          (d.onchange = dt),
          (z.onchange = dt),
          (ee.onchange = dt),
          (ne.oninput = dt),
          (w.oninput = function () {
            dt(), (P.value = w.value);
          }),
          (w.onchange = function () {
            dt(), (P.value = w.value);
          });
      },
      ae = function (s) {
        return typeof s == 'string' ? document.querySelector(s) : s;
      },
      fe = function (s) {
        var l = ce();
        l.setAttribute('role', s.toast ? 'alert' : 'dialog'),
          l.setAttribute('aria-live', s.toast ? 'polite' : 'assertive'),
          s.toast || l.setAttribute('aria-modal', 'true');
      },
      Ye = function (s) {
        window.getComputedStyle(s).direction === 'rtl' && F(qe(), C.rtl);
      },
      Jr = function (s) {
        var l = Yi();
        if (qr()) {
          rn('SweetAlert2 requires document to initialize');
          return;
        }
        var d = document.createElement('div');
        (d.className = C.container), l && F(d, C['no-transition']), ot(d, mr);
        var w = ae(s.target);
        w.appendChild(d), fe(s), Ye(w), Yr();
      },
      Ji = function (s, l) {
        s instanceof HTMLElement
          ? l.appendChild(s)
          : g(s) === 'object'
          ? zv(s, l)
          : s && ot(l, s);
      },
      zv = function (s, l) {
        s.jquery ? Vv(l, s) : ot(l, s.toString());
      },
      Vv = function (s, l) {
        if (((s.textContent = ''), 0 in l))
          for (var d = 0; d in l; d++) s.appendChild(l[d].cloneNode(!0));
        else s.appendChild(l.cloneNode(!0));
      },
      gr = (function () {
        if (qr()) return !1;
        var f = document.createElement('div');
        return typeof f.style.webkitAnimation < 'u'
          ? 'webkitAnimationEnd'
          : typeof f.style.animation < 'u'
          ? 'animationend'
          : !1;
      })(),
      Hv = function (s, l) {
        var d = pr(),
          w = sn();
        !d ||
          !w ||
          (!l.showConfirmButton && !l.showDenyButton && !l.showCancelButton
            ? K(d)
            : te(d),
          A(d, l, 'actions'),
          Wv(d, w, l),
          ot(w, l.loaderHtml || ''),
          A(w, l, 'loader'));
      };
    function Wv(f, s, l) {
      var d = kt(),
        w = Kt(),
        P = it();
      !d ||
        !w ||
        !P ||
        (al(d, 'confirm', l),
        al(w, 'deny', l),
        al(P, 'cancel', l),
        $v(d, w, P, l),
        l.reverseButtons &&
          (l.toast
            ? (f.insertBefore(P, d), f.insertBefore(w, d))
            : (f.insertBefore(P, s),
              f.insertBefore(w, s),
              f.insertBefore(d, s))));
    }
    function $v(f, s, l, d) {
      if (!d.buttonsStyling) {
        G([f, s, l], C.styled);
        return;
      }
      F([f, s, l], C.styled),
        d.confirmButtonColor &&
          ((f.style.backgroundColor = d.confirmButtonColor),
          F(f, C['default-outline'])),
        d.denyButtonColor &&
          ((s.style.backgroundColor = d.denyButtonColor),
          F(s, C['default-outline'])),
        d.cancelButtonColor &&
          ((l.style.backgroundColor = d.cancelButtonColor),
          F(l, C['default-outline']));
    }
    function al(f, s, l) {
      var d = _t(s);
      Ue(f, l['show'.concat(d, 'Button')], 'inline-block'),
        ot(f, l[''.concat(s, 'ButtonText')] || ''),
        f.setAttribute('aria-label', l[''.concat(s, 'ButtonAriaLabel')] || ''),
        (f.className = C[s]),
        A(f, l, ''.concat(s, 'Button'));
    }
    var Gv = function (s, l) {
        var d = $r();
        d &&
          (ot(d, l.closeButtonHtml || ''),
          A(d, l, 'closeButton'),
          Ue(d, l.showCloseButton),
          d.setAttribute('aria-label', l.closeButtonAriaLabel || ''));
      },
      Kv = function (s, l) {
        var d = qe();
        d &&
          (Qv(d, l.backdrop),
          qv(d, l.position),
          Yv(d, l.grow),
          A(d, l, 'container'));
      };
    function Qv(f, s) {
      typeof s == 'string'
        ? (f.style.background = s)
        : s || F([document.documentElement, document.body], C['no-backdrop']);
    }
    function qv(f, s) {
      s &&
        (s in C
          ? F(f, C[s])
          : (Qe(
              'The "position" parameter is not valid, defaulting to "center"'
            ),
            F(f, C.center)));
    }
    function Yv(f, s) {
      s && F(f, C['grow-'.concat(s)]);
    }
    var ve = { innerParams: new WeakMap(), domCache: new WeakMap() },
      Jv = [
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea',
      ],
      Xv = function (s, l) {
        var d = ce();
        if (d) {
          var w = ve.innerParams.get(s),
            P = !w || l.input !== w.input;
          Jv.forEach(function (z) {
            var ee = $(d, C[z]);
            ee && (tw(z, l.inputAttributes), (ee.className = C[z]), P && K(ee));
          }),
            l.input && (P && Zv(l), nw(l));
        }
      },
      Zv = function (s) {
        if (s.input) {
          if (!Re[s.input]) {
            rn(
              'Unexpected type of input! Expected '
                .concat(Object.keys(Re).join(' | '), ', got "')
                .concat(s.input, '"')
            );
            return;
          }
          var l = wd(s.input),
            d = Re[s.input](l, s);
          te(l),
            s.inputAutoFocus &&
              setTimeout(function () {
                W(d);
              });
        }
      },
      ew = function (s) {
        for (var l = 0; l < s.attributes.length; l++) {
          var d = s.attributes[l].name;
          ['id', 'type', 'value', 'style'].includes(d) || s.removeAttribute(d);
        }
      },
      tw = function (s, l) {
        var d = U(ce(), s);
        if (d) {
          ew(d);
          for (var w in l) d.setAttribute(w, l[w]);
        }
      },
      nw = function (s) {
        var l = wd(s.input);
        g(s.customClass) === 'object' && F(l, s.customClass.input);
      },
      ll = function (s, l) {
        (!s.placeholder || l.inputPlaceholder) &&
          (s.placeholder = l.inputPlaceholder);
      },
      Xi = function (s, l, d) {
        if (d.inputLabel) {
          var w = document.createElement('label'),
            P = C['input-label'];
          w.setAttribute('for', s.id),
            (w.className = P),
            g(d.customClass) === 'object' && F(w, d.customClass.inputLabel),
            (w.innerText = d.inputLabel),
            l.insertAdjacentElement('beforebegin', w);
        }
      },
      wd = function (s) {
        return $(ce(), C[s] || C.input);
      },
      ws = function (s, l) {
        ['string', 'number'].includes(g(l))
          ? (s.value = ''.concat(l))
          : Gi(l) ||
            Qe(
              'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                g(l),
                '"'
              )
            );
      },
      Re = {};
    (Re.text =
      Re.email =
      Re.password =
      Re.number =
      Re.tel =
      Re.url =
      Re.search =
      Re.date =
      Re['datetime-local'] =
      Re.time =
      Re.week =
      Re.month =
        function (f, s) {
          return (
            ws(f, s.inputValue), Xi(f, f, s), ll(f, s), (f.type = s.input), f
          );
        }),
      (Re.file = function (f, s) {
        return Xi(f, f, s), ll(f, s), f;
      }),
      (Re.range = function (f, s) {
        var l = f.querySelector('input'),
          d = f.querySelector('output');
        return (
          ws(l, s.inputValue),
          (l.type = s.input),
          ws(d, s.inputValue),
          Xi(l, f, s),
          f
        );
      }),
      (Re.select = function (f, s) {
        if (((f.textContent = ''), s.inputPlaceholder)) {
          var l = document.createElement('option');
          ot(l, s.inputPlaceholder),
            (l.value = ''),
            (l.disabled = !0),
            (l.selected = !0),
            f.appendChild(l);
        }
        return Xi(f, f, s), f;
      }),
      (Re.radio = function (f) {
        return (f.textContent = ''), f;
      }),
      (Re.checkbox = function (f, s) {
        var l = U(ce(), 'checkbox');
        (l.value = '1'), (l.checked = !!s.inputValue);
        var d = f.querySelector('span');
        return ot(d, s.inputPlaceholder), l;
      }),
      (Re.textarea = function (f, s) {
        ws(f, s.inputValue), ll(f, s), Xi(f, f, s);
        var l = function (w) {
          return (
            parseInt(window.getComputedStyle(w).marginLeft) +
            parseInt(window.getComputedStyle(w).marginRight)
          );
        };
        return (
          setTimeout(function () {
            if ('MutationObserver' in window) {
              var d = parseInt(window.getComputedStyle(ce()).width),
                w = function () {
                  if (document.body.contains(f)) {
                    var z = f.offsetWidth + l(f);
                    z > d
                      ? (ce().style.width = ''.concat(z, 'px'))
                      : X(ce(), 'width', s.width);
                  }
                };
              new MutationObserver(w).observe(f, {
                attributes: !0,
                attributeFilter: ['style'],
              });
            }
          }),
          f
        );
      });
    var rw = function (s, l) {
        var d = Ct();
        d &&
          (de(d),
          A(d, l, 'htmlContainer'),
          l.html
            ? (Ji(l.html, d), te(d, 'block'))
            : l.text
            ? ((d.textContent = l.text), te(d, 'block'))
            : K(d),
          Xv(s, l));
      },
      iw = function (s, l) {
        var d = Ki();
        d &&
          (de(d),
          Ue(d, l.footer, 'block'),
          l.footer && Ji(l.footer, d),
          A(d, l, 'footer'));
      },
      ow = function (s, l) {
        var d = ve.innerParams.get(s),
          w = Dt();
        if (w) {
          if (d && l.icon === d.icon) {
            xd(w, l), yd(w, l);
            return;
          }
          if (!l.icon && !l.iconHtml) {
            K(w);
            return;
          }
          if (l.icon && Object.keys(Ke).indexOf(l.icon) === -1) {
            rn(
              'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                l.icon,
                '"'
              )
            ),
              K(w);
            return;
          }
          te(w), xd(w, l), yd(w, l), F(w, l.showClass && l.showClass.icon);
        }
      },
      yd = function (s, l) {
        for (var d = 0, w = Object.entries(Ke); d < w.length; d++) {
          var P = S(w[d], 2),
            z = P[0],
            ee = P[1];
          l.icon !== z && G(s, ee);
        }
        F(s, l.icon && Ke[l.icon]), uw(s, l), sw(), A(s, l, 'icon');
      },
      sw = function () {
        var s = ce();
        if (s)
          for (
            var l = window
                .getComputedStyle(s)
                .getPropertyValue('background-color'),
              d = s.querySelectorAll(
                '[class^=swal2-success-circular-line], .swal2-success-fix'
              ),
              w = 0;
            w < d.length;
            w++
          )
            d[w].style.backgroundColor = l;
      },
      aw = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      lw = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      xd = function (s, l) {
        if (!(!l.icon && !l.iconHtml)) {
          var d = s.innerHTML,
            w = '';
          if (l.iconHtml) w = Ed(l.iconHtml);
          else if (l.icon === 'success')
            (w = aw), (d = d.replace(/ style=".*?"/g, ''));
          else if (l.icon === 'error') w = lw;
          else if (l.icon) {
            var P = { question: '?', warning: '!', info: 'i' };
            w = Ed(P[l.icon]);
          }
          d.trim() !== w.trim() && ot(s, w);
        }
      },
      uw = function (s, l) {
        if (l.iconColor) {
          (s.style.color = l.iconColor), (s.style.borderColor = l.iconColor);
          for (
            var d = 0,
              w = [
                '.swal2-success-line-tip',
                '.swal2-success-line-long',
                '.swal2-x-mark-line-left',
                '.swal2-x-mark-line-right',
              ];
            d < w.length;
            d++
          ) {
            var P = w[d];
            Le(s, P, 'background-color', l.iconColor);
          }
          Le(s, '.swal2-success-ring', 'border-color', l.iconColor);
        }
      },
      Ed = function (s) {
        return '<div class="'
          .concat(C['icon-content'], '">')
          .concat(s, '</div>');
      },
      cw = function (s, l) {
        var d = Pn();
        if (d) {
          if (!l.imageUrl) {
            K(d);
            return;
          }
          te(d, ''),
            d.setAttribute('src', l.imageUrl),
            d.setAttribute('alt', l.imageAlt || ''),
            X(d, 'width', l.imageWidth),
            X(d, 'height', l.imageHeight),
            (d.className = C.image),
            A(d, l, 'image');
        }
      },
      dw = function (s, l) {
        var d = qe(),
          w = ce();
        if (!(!d || !w)) {
          if (l.toast) {
            X(d, 'width', l.width), (w.style.width = '100%');
            var P = sn();
            P && w.insertBefore(P, Dt());
          } else X(w, 'width', l.width);
          X(w, 'padding', l.padding),
            l.color && (w.style.color = l.color),
            l.background && (w.style.background = l.background),
            K(on()),
            fw(w, l);
        }
      },
      fw = function (s, l) {
        var d = l.showClass || {};
        (s.className = ''.concat(C.popup, ' ').concat(ue(s) ? d.popup : '')),
          l.toast
            ? (F([document.documentElement, document.body], C['toast-shown']),
              F(s, C.toast))
            : F(s, C.modal),
          A(s, l, 'popup'),
          typeof l.customClass == 'string' && F(s, l.customClass),
          l.icon && F(s, C['icon-'.concat(l.icon)]);
      },
      hw = function (s, l) {
        var d = Wr();
        if (d) {
          var w = l.progressSteps,
            P = l.currentProgressStep;
          if (!w || w.length === 0 || P === void 0) {
            K(d);
            return;
          }
          te(d),
            (d.textContent = ''),
            P >= w.length &&
              Qe(
                'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
              ),
            w.forEach(function (z, ee) {
              var ne = pw(z);
              if (
                (d.appendChild(ne),
                ee === P && F(ne, C['active-progress-step']),
                ee !== w.length - 1)
              ) {
                var Ie = mw(l);
                d.appendChild(Ie);
              }
            });
        }
      },
      pw = function (s) {
        var l = document.createElement('li');
        return F(l, C['progress-step']), ot(l, s), l;
      },
      mw = function (s) {
        var l = document.createElement('li');
        return (
          F(l, C['progress-step-line']),
          s.progressStepsDistance && X(l, 'width', s.progressStepsDistance),
          l
        );
      },
      gw = function (s, l) {
        var d = Hr();
        d &&
          (de(d),
          Ue(d, l.title || l.titleText, 'block'),
          l.title && Ji(l.title, d),
          l.titleText && (d.innerText = l.titleText),
          A(d, l, 'title'));
      },
      Sd = function (s, l) {
        dw(s, l),
          Kv(s, l),
          hw(s, l),
          ow(s, l),
          cw(s, l),
          gw(s, l),
          Gv(s, l),
          rw(s, l),
          Hv(s, l),
          iw(s, l);
        var d = ce();
        typeof l.didRender == 'function' && d && l.didRender(d);
      },
      vw = function () {
        return ue(ce());
      },
      bd = function () {
        var s;
        return (s = kt()) === null || s === void 0 ? void 0 : s.click();
      },
      ww = function () {
        var s;
        return (s = Kt()) === null || s === void 0 ? void 0 : s.click();
      },
      yw = function () {
        var s;
        return (s = it()) === null || s === void 0 ? void 0 : s.click();
      },
      Xr = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer',
      }),
      _d = function (s) {
        s.keydownTarget &&
          s.keydownHandlerAdded &&
          (s.keydownTarget.removeEventListener('keydown', s.keydownHandler, {
            capture: s.keydownListenerCapture,
          }),
          (s.keydownHandlerAdded = !1));
      },
      xw = function (s, l, d) {
        _d(s),
          l.toast ||
            ((s.keydownHandler = function (w) {
              return Sw(l, w, d);
            }),
            (s.keydownTarget = l.keydownListenerCapture ? window : ce()),
            (s.keydownListenerCapture = l.keydownListenerCapture),
            s.keydownTarget.addEventListener('keydown', s.keydownHandler, {
              capture: s.keydownListenerCapture,
            }),
            (s.keydownHandlerAdded = !0));
      },
      ul = function (s, l) {
        var d,
          w = qi();
        if (w.length) {
          (s = s + l),
            s === w.length ? (s = 0) : s === -1 && (s = w.length - 1),
            w[s].focus();
          return;
        }
        (d = ce()) === null || d === void 0 || d.focus();
      },
      Cd = ['ArrowRight', 'ArrowDown'],
      Ew = ['ArrowLeft', 'ArrowUp'],
      Sw = function (s, l, d) {
        s &&
          (l.isComposing ||
            l.keyCode === 229 ||
            (s.stopKeydownPropagation && l.stopPropagation(),
            l.key === 'Enter'
              ? bw(l, s)
              : l.key === 'Tab'
              ? _w(l)
              : [].concat(Cd, Ew).includes(l.key)
              ? Cw(l.key)
              : l.key === 'Escape' && kw(l, s, d)));
      },
      bw = function (s, l) {
        if (fr(l.allowEnterKey)) {
          var d = U(ce(), l.input);
          if (
            s.target &&
            d &&
            s.target instanceof HTMLElement &&
            s.target.outerHTML === d.outerHTML
          ) {
            if (['textarea', 'file'].includes(l.input)) return;
            bd(), s.preventDefault();
          }
        }
      },
      _w = function (s) {
        for (var l = s.target, d = qi(), w = -1, P = 0; P < d.length; P++)
          if (l === d[P]) {
            w = P;
            break;
          }
        s.shiftKey ? ul(w, -1) : ul(w, 1),
          s.stopPropagation(),
          s.preventDefault();
      },
      Cw = function (s) {
        var l = pr(),
          d = kt(),
          w = Kt(),
          P = it();
        if (!(!l || !d || !w || !P)) {
          var z = [d, w, P];
          if (
            !(
              document.activeElement instanceof HTMLElement &&
              !z.includes(document.activeElement)
            )
          ) {
            var ee = Cd.includes(s)
                ? 'nextElementSibling'
                : 'previousElementSibling',
              ne = document.activeElement;
            if (ne) {
              for (var Ie = 0; Ie < l.children.length; Ie++) {
                if (((ne = ne[ee]), !ne)) return;
                if (ne instanceof HTMLButtonElement && ue(ne)) break;
              }
              ne instanceof HTMLButtonElement && ne.focus();
            }
          }
        }
      },
      kw = function (s, l, d) {
        fr(l.allowEscapeKey) && (s.preventDefault(), d(Xr.esc));
      },
      Zr = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap(),
      },
      Iw = function () {
        var s = qe(),
          l = Array.from(document.body.children);
        l.forEach(function (d) {
          d.contains(s) ||
            (d.hasAttribute('aria-hidden') &&
              d.setAttribute(
                'data-previous-aria-hidden',
                d.getAttribute('aria-hidden') || ''
              ),
            d.setAttribute('aria-hidden', 'true'));
        });
      },
      kd = function () {
        var s = Array.from(document.body.children);
        s.forEach(function (l) {
          l.hasAttribute('data-previous-aria-hidden')
            ? (l.setAttribute(
                'aria-hidden',
                l.getAttribute('data-previous-aria-hidden') || ''
              ),
              l.removeAttribute('data-previous-aria-hidden'))
            : l.removeAttribute('aria-hidden');
        });
      },
      Id = typeof window < 'u' && !!window.GestureEvent,
      Tw = function () {
        if (Id && !b(document.body, C.iosfix)) {
          var s = document.body.scrollTop;
          (document.body.style.top = ''.concat(s * -1, 'px')),
            F(document.body, C.iosfix),
            Pw();
        }
      },
      Pw = function () {
        var s = qe();
        if (s) {
          var l;
          (s.ontouchstart = function (d) {
            l = Aw(d);
          }),
            (s.ontouchmove = function (d) {
              l && (d.preventDefault(), d.stopPropagation());
            });
        }
      },
      Aw = function (s) {
        var l = s.target,
          d = qe(),
          w = Ct();
        return !d || !w || Rw(s) || Nw(s)
          ? !1
          : l === d ||
              (!Qr(d) &&
                l instanceof HTMLElement &&
                l.tagName !== 'INPUT' &&
                l.tagName !== 'TEXTAREA' &&
                !(Qr(w) && w.contains(l)));
      },
      Rw = function (s) {
        return (
          s.touches && s.touches.length && s.touches[0].touchType === 'stylus'
        );
      },
      Nw = function (s) {
        return s.touches && s.touches.length > 1;
      },
      Ow = function () {
        if (b(document.body, C.iosfix)) {
          var s = parseInt(document.body.style.top, 10);
          G(document.body, C.iosfix),
            (document.body.style.top = ''),
            (document.body.scrollTop = s * -1);
        }
      },
      Lw = function () {
        var s = document.createElement('div');
        (s.className = C['scrollbar-measure']), document.body.appendChild(s);
        var l = s.getBoundingClientRect().width - s.clientWidth;
        return document.body.removeChild(s), l;
      },
      ei = null,
      jw = function (s) {
        ei === null &&
          (document.body.scrollHeight > window.innerHeight || s === 'scroll') &&
          ((ei = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue('padding-right')
          )),
          (document.body.style.paddingRight = ''.concat(ei + Lw(), 'px')));
      },
      Dw = function () {
        ei !== null &&
          ((document.body.style.paddingRight = ''.concat(ei, 'px')),
          (ei = null));
      };
    function Td(f, s, l, d) {
      Kr()
        ? Ad(f, d)
        : (J(l).then(function () {
            return Ad(f, d);
          }),
          _d(N)),
        Id
          ? (s.setAttribute('style', 'display:none !important'),
            s.removeAttribute('class'),
            (s.innerHTML = ''))
          : s.remove(),
        Gr() && (Dw(), Ow(), kd()),
        Mw();
    }
    function Mw() {
      G(
        [document.documentElement, document.body],
        [C.shown, C['height-auto'], C['no-backdrop'], C['toast-shown']]
      );
    }
    function Rn(f) {
      f = Bw(f);
      var s = Zr.swalPromiseResolve.get(this),
        l = Uw(this);
      this.isAwaitingPromise ? f.isDismissed || (Zi(this), s(f)) : l && s(f);
    }
    var Uw = function (s) {
      var l = ce();
      if (!l) return !1;
      var d = ve.innerParams.get(s);
      if (!d || b(l, d.hideClass.popup)) return !1;
      G(l, d.showClass.popup), F(l, d.hideClass.popup);
      var w = qe();
      return (
        G(w, d.showClass.backdrop), F(w, d.hideClass.backdrop), Fw(s, l, d), !0
      );
    };
    function Pd(f) {
      var s = Zr.swalPromiseReject.get(this);
      Zi(this), s && s(f);
    }
    var Zi = function (s) {
        s.isAwaitingPromise &&
          (delete s.isAwaitingPromise, ve.innerParams.get(s) || s._destroy());
      },
      Bw = function (s) {
        return typeof s > 'u'
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              s
            );
      },
      Fw = function (s, l, d) {
        var w = qe(),
          P = gr && ln(l);
        typeof d.willClose == 'function' && d.willClose(l),
          P
            ? zw(s, l, w, d.returnFocus, d.didClose)
            : Td(s, w, d.returnFocus, d.didClose);
      },
      zw = function (s, l, d, w, P) {
        gr &&
          ((N.swalCloseEventFinishedCallback = Td.bind(null, s, d, w, P)),
          l.addEventListener(gr, function (z) {
            z.target === l &&
              (N.swalCloseEventFinishedCallback(),
              delete N.swalCloseEventFinishedCallback);
          }));
      },
      Ad = function (s, l) {
        setTimeout(function () {
          typeof l == 'function' && l.bind(s.params)(),
            s._destroy && s._destroy();
        });
      },
      ti = function (s) {
        var l = ce();
        if ((l || new bs(), (l = ce()), !!l)) {
          var d = sn();
          Kr() ? K(Dt()) : Vw(l, s),
            te(d),
            l.setAttribute('data-loading', 'true'),
            l.setAttribute('aria-busy', 'true'),
            l.focus();
        }
      },
      Vw = function (s, l) {
        var d = pr(),
          w = sn();
        !d ||
          !w ||
          (!l && ue(kt()) && (l = kt()),
          te(d),
          l &&
            (K(l),
            w.setAttribute('data-button-to-replace', l.className),
            d.insertBefore(w, l)),
          F([s, d], C.loading));
      },
      Hw = function (s, l) {
        l.input === 'select' || l.input === 'radio'
          ? Qw(s, l)
          : ['text', 'email', 'number', 'tel', 'textarea'].some(function (d) {
              return d === l.input;
            }) &&
            ($i(l.inputValue) || Gi(l.inputValue)) &&
            (ti(kt()), qw(s, l));
      },
      Ww = function (s, l) {
        var d = s.getInput();
        if (!d) return null;
        switch (l.input) {
          case 'checkbox':
            return $w(d);
          case 'radio':
            return Gw(d);
          case 'file':
            return Kw(d);
          default:
            return l.inputAutoTrim ? d.value.trim() : d.value;
        }
      },
      $w = function (s) {
        return s.checked ? 1 : 0;
      },
      Gw = function (s) {
        return s.checked ? s.value : null;
      },
      Kw = function (s) {
        return s.files && s.files.length
          ? s.getAttribute('multiple') !== null
            ? s.files
            : s.files[0]
          : null;
      },
      Qw = function (s, l) {
        var d = ce();
        if (d) {
          var w = function (z) {
            l.input === 'select'
              ? Yw(d, Rd(z), l)
              : l.input === 'radio' && Jw(d, Rd(z), l);
          };
          $i(l.inputOptions) || Gi(l.inputOptions)
            ? (ti(kt()),
              vt(l.inputOptions).then(function (P) {
                s.hideLoading(), w(P);
              }))
            : g(l.inputOptions) === 'object'
            ? w(l.inputOptions)
            : rn(
                'Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(
                  g(l.inputOptions)
                )
              );
        }
      },
      qw = function (s, l) {
        var d = s.getInput();
        d &&
          (K(d),
          vt(l.inputValue)
            .then(function (w) {
              (d.value =
                l.input === 'number'
                  ? ''.concat(parseFloat(w) || 0)
                  : ''.concat(w)),
                te(d),
                d.focus(),
                s.hideLoading();
            })
            .catch(function (w) {
              rn('Error in inputValue promise: '.concat(w)),
                (d.value = ''),
                te(d),
                d.focus(),
                s.hideLoading();
            }));
      };
    function Yw(f, s, l) {
      var d = $(f, C.select);
      if (d) {
        var w = function (z, ee, ne) {
          var Ie = document.createElement('option');
          (Ie.value = ne),
            ot(Ie, ee),
            (Ie.selected = Nd(ne, l.inputValue)),
            z.appendChild(Ie);
        };
        s.forEach(function (P) {
          var z = P[0],
            ee = P[1];
          if (Array.isArray(ee)) {
            var ne = document.createElement('optgroup');
            (ne.label = z),
              (ne.disabled = !1),
              d.appendChild(ne),
              ee.forEach(function (Ie) {
                return w(ne, Ie[1], Ie[0]);
              });
          } else w(d, ee, z);
        }),
          d.focus();
      }
    }
    function Jw(f, s, l) {
      var d = $(f, C.radio);
      if (d) {
        s.forEach(function (P) {
          var z = P[0],
            ee = P[1],
            ne = document.createElement('input'),
            Ie = document.createElement('label');
          (ne.type = 'radio'),
            (ne.name = C.radio),
            (ne.value = z),
            Nd(z, l.inputValue) && (ne.checked = !0);
          var eo = document.createElement('span');
          ot(eo, ee),
            (eo.className = C.label),
            Ie.appendChild(ne),
            Ie.appendChild(eo),
            d.appendChild(Ie);
        });
        var w = d.querySelectorAll('input');
        w.length && w[0].focus();
      }
    }
    var Rd = function f(s) {
        var l = [];
        return (
          s instanceof Map
            ? s.forEach(function (d, w) {
                var P = d;
                g(P) === 'object' && (P = f(P)), l.push([w, P]);
              })
            : Object.keys(s).forEach(function (d) {
                var w = s[d];
                g(w) === 'object' && (w = f(w)), l.push([d, w]);
              }),
          l
        );
      },
      Nd = function (s, l) {
        return !!l && l.toString() === s.toString();
      },
      ys = void 0,
      Xw = function (s) {
        var l = ve.innerParams.get(s);
        s.disableButtons(), l.input ? Od(s, 'confirm') : dl(s, !0);
      },
      Zw = function (s) {
        var l = ve.innerParams.get(s);
        s.disableButtons(),
          l.returnInputValueOnDeny ? Od(s, 'deny') : cl(s, !1);
      },
      ey = function (s, l) {
        s.disableButtons(), l(Xr.cancel);
      },
      Od = function (s, l) {
        var d = ve.innerParams.get(s);
        if (!d.input) {
          rn(
            'The "input" parameter is needed to be set when using returnInputValueOn'.concat(
              _t(l)
            )
          );
          return;
        }
        var w = s.getInput(),
          P = Ww(s, d);
        d.inputValidator
          ? ty(s, P, l)
          : w && !w.checkValidity()
          ? (s.enableButtons(),
            s.showValidationMessage(d.validationMessage || w.validationMessage))
          : l === 'deny'
          ? cl(s, P)
          : dl(s, P);
      },
      ty = function (s, l, d) {
        var w = ve.innerParams.get(s);
        s.disableInput();
        var P = Promise.resolve().then(function () {
          return vt(w.inputValidator(l, w.validationMessage));
        });
        P.then(function (z) {
          s.enableButtons(),
            s.enableInput(),
            z ? s.showValidationMessage(z) : d === 'deny' ? cl(s, l) : dl(s, l);
        });
      },
      cl = function (s, l) {
        var d = ve.innerParams.get(s || ys);
        if ((d.showLoaderOnDeny && ti(Kt()), d.preDeny)) {
          s.isAwaitingPromise = !0;
          var w = Promise.resolve().then(function () {
            return vt(d.preDeny(l, d.validationMessage));
          });
          w.then(function (P) {
            P === !1
              ? (s.hideLoading(), Zi(s))
              : s.close({ isDenied: !0, value: typeof P > 'u' ? l : P });
          }).catch(function (P) {
            return jd(s || ys, P);
          });
        } else s.close({ isDenied: !0, value: l });
      },
      Ld = function (s, l) {
        s.close({ isConfirmed: !0, value: l });
      },
      jd = function (s, l) {
        s.rejectPromise(l);
      },
      dl = function (s, l) {
        var d = ve.innerParams.get(s || ys);
        if ((d.showLoaderOnConfirm && ti(), d.preConfirm)) {
          s.resetValidationMessage(), (s.isAwaitingPromise = !0);
          var w = Promise.resolve().then(function () {
            return vt(d.preConfirm(l, d.validationMessage));
          });
          w.then(function (P) {
            ue(on()) || P === !1
              ? (s.hideLoading(), Zi(s))
              : Ld(s, typeof P > 'u' ? l : P);
          }).catch(function (P) {
            return jd(s || ys, P);
          });
        } else Ld(s, l);
      };
    function xs() {
      var f = ve.innerParams.get(this);
      if (f) {
        var s = ve.domCache.get(this);
        K(s.loader),
          Kr() ? f.icon && te(Dt()) : ny(s),
          G([s.popup, s.actions], C.loading),
          s.popup.removeAttribute('aria-busy'),
          s.popup.removeAttribute('data-loading'),
          (s.confirmButton.disabled = !1),
          (s.denyButton.disabled = !1),
          (s.cancelButton.disabled = !1);
      }
    }
    var ny = function (s) {
      var l = s.popup.getElementsByClassName(
        s.loader.getAttribute('data-button-to-replace')
      );
      l.length ? te(l[0], 'inline-block') : An() && K(s.actions);
    };
    function Dd() {
      var f = ve.innerParams.get(this),
        s = ve.domCache.get(this);
      return s ? U(s.popup, f.input) : null;
    }
    function Md(f, s, l) {
      var d = ve.domCache.get(f);
      s.forEach(function (w) {
        d[w].disabled = l;
      });
    }
    function Ud(f, s) {
      var l = ce();
      if (!(!l || !f))
        if (f.type === 'radio')
          for (
            var d = l.querySelectorAll('[name="'.concat(C.radio, '"]')), w = 0;
            w < d.length;
            w++
          )
            d[w].disabled = s;
        else f.disabled = s;
    }
    function Bd() {
      Md(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
    }
    function Fd() {
      Md(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
    }
    function zd() {
      Ud(this.getInput(), !1);
    }
    function Vd() {
      Ud(this.getInput(), !0);
    }
    function Hd(f) {
      var s = ve.domCache.get(this),
        l = ve.innerParams.get(this);
      ot(s.validationMessage, f),
        (s.validationMessage.className = C['validation-message']),
        l.customClass &&
          l.customClass.validationMessage &&
          F(s.validationMessage, l.customClass.validationMessage),
        te(s.validationMessage);
      var d = this.getInput();
      d &&
        (d.setAttribute('aria-invalid', 'true'),
        d.setAttribute('aria-describedby', C['validation-message']),
        W(d),
        F(d, C.inputerror));
    }
    function Wd() {
      var f = ve.domCache.get(this);
      f.validationMessage && K(f.validationMessage);
      var s = this.getInput();
      s &&
        (s.removeAttribute('aria-invalid'),
        s.removeAttribute('aria-describedby'),
        G(s, C.inputerror));
    }
    var ni = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show',
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide',
        },
        customClass: {},
        target: 'body',
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: void 0,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: void 0,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: '',
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: 'center',
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      ry = [
        'allowEscapeKey',
        'allowOutsideClick',
        'background',
        'buttonsStyling',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonText',
        'closeButtonAriaLabel',
        'closeButtonHtml',
        'color',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonText',
        'currentProgressStep',
        'customClass',
        'denyButtonAriaLabel',
        'denyButtonColor',
        'denyButtonText',
        'didClose',
        'didDestroy',
        'footer',
        'hideClass',
        'html',
        'icon',
        'iconColor',
        'iconHtml',
        'imageAlt',
        'imageHeight',
        'imageUrl',
        'imageWidth',
        'preConfirm',
        'preDeny',
        'progressSteps',
        'returnFocus',
        'reverseButtons',
        'showCancelButton',
        'showCloseButton',
        'showConfirmButton',
        'showDenyButton',
        'text',
        'title',
        'titleText',
        'willClose',
      ],
      iy = {},
      oy = [
        'allowOutsideClick',
        'allowEnterKey',
        'backdrop',
        'focusConfirm',
        'focusDeny',
        'focusCancel',
        'returnFocus',
        'heightAuto',
        'keydownListenerCapture',
      ],
      $d = function (s) {
        return Object.prototype.hasOwnProperty.call(ni, s);
      },
      Gd = function (s) {
        return ry.indexOf(s) !== -1;
      },
      Kd = function (s) {
        return iy[s];
      },
      sy = function (s) {
        $d(s) || Qe('Unknown parameter "'.concat(s, '"'));
      },
      ay = function (s) {
        oy.includes(s) &&
          Qe('The parameter "'.concat(s, '" is incompatible with toasts'));
      },
      ly = function (s) {
        var l = Kd(s);
        l && dr(s, l);
      },
      uy = function (s) {
        s.backdrop === !1 &&
          s.allowOutsideClick &&
          Qe(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (var l in s) sy(l), s.toast && ay(l), ly(l);
      };
    function Qd(f) {
      var s = ce(),
        l = ve.innerParams.get(this);
      if (!s || b(s, l.hideClass.popup)) {
        Qe(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      var d = cy(f),
        w = Object.assign({}, l, d);
      Sd(this, w),
        ve.innerParams.set(this, w),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, f),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    var cy = function (s) {
      var l = {};
      return (
        Object.keys(s).forEach(function (d) {
          Gd(d) ? (l[d] = s[d]) : Qe('Invalid parameter to update: '.concat(d));
        }),
        l
      );
    };
    function qd() {
      var f = ve.domCache.get(this),
        s = ve.innerParams.get(this);
      if (!s) {
        Yd(this);
        return;
      }
      f.popup &&
        N.swalCloseEventFinishedCallback &&
        (N.swalCloseEventFinishedCallback(),
        delete N.swalCloseEventFinishedCallback),
        typeof s.didDestroy == 'function' && s.didDestroy(),
        dy(this);
    }
    var dy = function (s) {
        Yd(s),
          delete s.params,
          delete N.keydownHandler,
          delete N.keydownTarget,
          delete N.currentInstance;
      },
      Yd = function (s) {
        s.isAwaitingPromise
          ? (fl(ve, s), (s.isAwaitingPromise = !0))
          : (fl(Zr, s),
            fl(ve, s),
            delete s.isAwaitingPromise,
            delete s.disableButtons,
            delete s.enableButtons,
            delete s.getInput,
            delete s.disableInput,
            delete s.enableInput,
            delete s.hideLoading,
            delete s.disableLoading,
            delete s.showValidationMessage,
            delete s.resetValidationMessage,
            delete s.close,
            delete s.closePopup,
            delete s.closeModal,
            delete s.closeToast,
            delete s.rejectPromise,
            delete s.update,
            delete s._destroy);
      },
      fl = function (s, l) {
        for (var d in s) s[d].delete(l);
      },
      fy = Object.freeze({
        __proto__: null,
        _destroy: qd,
        close: Rn,
        closeModal: Rn,
        closePopup: Rn,
        closeToast: Rn,
        disableButtons: Fd,
        disableInput: Vd,
        disableLoading: xs,
        enableButtons: Bd,
        enableInput: zd,
        getInput: Dd,
        handleAwaitingPromise: Zi,
        hideLoading: xs,
        rejectPromise: Pd,
        resetValidationMessage: Wd,
        showValidationMessage: Hd,
        update: Qd,
      }),
      hy = function (s, l, d) {
        s.toast ? py(s, l, d) : (gy(l), vy(l), wy(s, l, d));
      },
      py = function (s, l, d) {
        l.popup.onclick = function () {
          (s && (my(s) || s.timer || s.input)) || d(Xr.close);
        };
      },
      my = function (s) {
        return !!(
          s.showConfirmButton ||
          s.showDenyButton ||
          s.showCancelButton ||
          s.showCloseButton
        );
      },
      Es = !1,
      gy = function (s) {
        s.popup.onmousedown = function () {
          s.container.onmouseup = function (l) {
            (s.container.onmouseup = function () {}),
              l.target === s.container && (Es = !0);
          };
        };
      },
      vy = function (s) {
        s.container.onmousedown = function (l) {
          l.target === s.container && l.preventDefault(),
            (s.popup.onmouseup = function (d) {
              (s.popup.onmouseup = function () {}),
                (d.target === s.popup ||
                  (d.target instanceof HTMLElement &&
                    s.popup.contains(d.target))) &&
                  (Es = !0);
            });
        };
      },
      wy = function (s, l, d) {
        l.container.onclick = function (w) {
          if (Es) {
            Es = !1;
            return;
          }
          w.target === l.container && fr(s.allowOutsideClick) && d(Xr.backdrop);
        };
      },
      yy = function (s) {
        return g(s) === 'object' && s.jquery;
      },
      Jd = function (s) {
        return s instanceof Element || yy(s);
      },
      xy = function (s) {
        var l = {};
        return (
          g(s[0]) === 'object' && !Jd(s[0])
            ? Object.assign(l, s[0])
            : ['title', 'html', 'icon'].forEach(function (d, w) {
                var P = s[w];
                typeof P == 'string' || Jd(P)
                  ? (l[d] = P)
                  : P !== void 0 &&
                    rn(
                      'Unexpected type of '
                        .concat(d, '! Expected "string" or "Element", got ')
                        .concat(g(P))
                    );
              }),
          l
        );
      };
    function Ey() {
      for (
        var f = this, s = arguments.length, l = new Array(s), d = 0;
        d < s;
        d++
      )
        l[d] = arguments[d];
      return a(f, l);
    }
    function Sy(f) {
      var s = (function (l) {
        function d() {
          return x(this, d), r(this, d, arguments);
        }
        return (
          k(d, l),
          T(d, [
            {
              key: '_main',
              value: function (P, z) {
                return M(L(d.prototype), '_main', this).call(
                  this,
                  P,
                  Object.assign({}, f, z)
                );
              },
            },
          ])
        );
      })(this);
      return s;
    }
    var by = function () {
        return N.timeout && N.timeout.getTimerLeft();
      },
      Xd = function () {
        if (N.timeout) return un(), N.timeout.stop();
      },
      Zd = function () {
        if (N.timeout) {
          var s = N.timeout.start();
          return It(s), s;
        }
      },
      _y = function () {
        var s = N.timeout;
        return s && (s.running ? Xd() : Zd());
      },
      Cy = function (s) {
        if (N.timeout) {
          var l = N.timeout.increase(s);
          return It(l, !0), l;
        }
      },
      ky = function () {
        return !!(N.timeout && N.timeout.isRunning());
      },
      ef = !1,
      hl = {};
    function Iy() {
      var f =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : 'data-swal-template';
      (hl[f] = this),
        ef || (document.body.addEventListener('click', Ty), (ef = !0));
    }
    var Ty = function (s) {
        for (var l = s.target; l && l !== document; l = l.parentNode)
          for (var d in hl) {
            var w = l.getAttribute(d);
            if (w) {
              hl[d].fire({ template: w });
              return;
            }
          }
      },
      Py = Object.freeze({
        __proto__: null,
        argsToParams: xy,
        bindClickHandler: Iy,
        clickCancel: yw,
        clickConfirm: bd,
        clickDeny: ww,
        enableLoading: ti,
        fire: Ey,
        getActions: pr,
        getCancelButton: it,
        getCloseButton: $r,
        getConfirmButton: kt,
        getContainer: qe,
        getDenyButton: Kt,
        getFocusableElements: qi,
        getFooter: Ki,
        getHtmlContainer: Ct,
        getIcon: Dt,
        getIconContent: ms,
        getImage: Pn,
        getInputLabel: gs,
        getLoader: sn,
        getPopup: ce,
        getProgressSteps: Wr,
        getTimerLeft: by,
        getTimerProgressBar: an,
        getTitle: Hr,
        getValidationMessage: on,
        increaseTimer: Cy,
        isDeprecatedParameter: Kd,
        isLoading: vs,
        isTimerRunning: ky,
        isUpdatableParameter: Gd,
        isValidParameter: $d,
        isVisible: vw,
        mixin: Sy,
        resumeTimer: Zd,
        showLoading: ti,
        stopTimer: Xd,
        toggleTimer: _y,
      }),
      Ay = (function () {
        function f(s, l) {
          x(this, f),
            (this.callback = s),
            (this.remaining = l),
            (this.running = !1),
            this.start();
        }
        return T(f, [
          {
            key: 'start',
            value: function () {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            },
          },
          {
            key: 'stop',
            value: function () {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -=
                    new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            },
          },
          {
            key: 'increase',
            value: function (l) {
              var d = this.running;
              return (
                d && this.stop(),
                (this.remaining += l),
                d && this.start(),
                this.remaining
              );
            },
          },
          {
            key: 'getTimerLeft',
            value: function () {
              return (
                this.running && (this.stop(), this.start()), this.remaining
              );
            },
          },
          {
            key: 'isRunning',
            value: function () {
              return this.running;
            },
          },
        ]);
      })(),
      tf = ['swal-title', 'swal-html', 'swal-footer'],
      Ry = function (s) {
        var l =
          typeof s.template == 'string'
            ? document.querySelector(s.template)
            : s.template;
        if (!l) return {};
        var d = l.content;
        By(d);
        var w = Object.assign(
          Ny(d),
          Oy(d),
          Ly(d),
          jy(d),
          Dy(d),
          My(d),
          Uy(d, tf)
        );
        return w;
      },
      Ny = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll('swal-param'));
        return (
          d.forEach(function (w) {
            vr(w, ['name', 'value']);
            var P = w.getAttribute('name'),
              z = w.getAttribute('value');
            typeof ni[P] == 'boolean'
              ? (l[P] = z !== 'false')
              : g(ni[P]) === 'object'
              ? (l[P] = JSON.parse(z))
              : (l[P] = z);
          }),
          l
        );
      },
      Oy = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll('swal-function-param'));
        return (
          d.forEach(function (w) {
            var P = w.getAttribute('name'),
              z = w.getAttribute('value');
            l[P] = new Function('return '.concat(z))();
          }),
          l
        );
      },
      Ly = function (s) {
        var l = {},
          d = Array.from(s.querySelectorAll('swal-button'));
        return (
          d.forEach(function (w) {
            vr(w, ['type', 'color', 'aria-label']);
            var P = w.getAttribute('type');
            (l[''.concat(P, 'ButtonText')] = w.innerHTML),
              (l['show'.concat(_t(P), 'Button')] = !0),
              w.hasAttribute('color') &&
                (l[''.concat(P, 'ButtonColor')] = w.getAttribute('color')),
              w.hasAttribute('aria-label') &&
                (l[''.concat(P, 'ButtonAriaLabel')] =
                  w.getAttribute('aria-label'));
          }),
          l
        );
      },
      jy = function (s) {
        var l = {},
          d = s.querySelector('swal-image');
        return (
          d &&
            (vr(d, ['src', 'width', 'height', 'alt']),
            d.hasAttribute('src') && (l.imageUrl = d.getAttribute('src')),
            d.hasAttribute('width') && (l.imageWidth = d.getAttribute('width')),
            d.hasAttribute('height') &&
              (l.imageHeight = d.getAttribute('height')),
            d.hasAttribute('alt') && (l.imageAlt = d.getAttribute('alt'))),
          l
        );
      },
      Dy = function (s) {
        var l = {},
          d = s.querySelector('swal-icon');
        return (
          d &&
            (vr(d, ['type', 'color']),
            d.hasAttribute('type') && (l.icon = d.getAttribute('type')),
            d.hasAttribute('color') && (l.iconColor = d.getAttribute('color')),
            (l.iconHtml = d.innerHTML)),
          l
        );
      },
      My = function (s) {
        var l = {},
          d = s.querySelector('swal-input');
        d &&
          (vr(d, ['type', 'label', 'placeholder', 'value']),
          (l.input = d.getAttribute('type') || 'text'),
          d.hasAttribute('label') && (l.inputLabel = d.getAttribute('label')),
          d.hasAttribute('placeholder') &&
            (l.inputPlaceholder = d.getAttribute('placeholder')),
          d.hasAttribute('value') && (l.inputValue = d.getAttribute('value')));
        var w = Array.from(s.querySelectorAll('swal-input-option'));
        return (
          w.length &&
            ((l.inputOptions = {}),
            w.forEach(function (P) {
              vr(P, ['value']);
              var z = P.getAttribute('value'),
                ee = P.innerHTML;
              l.inputOptions[z] = ee;
            })),
          l
        );
      },
      Uy = function (s, l) {
        var d = {};
        for (var w in l) {
          var P = l[w],
            z = s.querySelector(P);
          z && (vr(z, []), (d[P.replace(/^swal-/, '')] = z.innerHTML.trim()));
        }
        return d;
      },
      By = function (s) {
        var l = tf.concat([
          'swal-param',
          'swal-function-param',
          'swal-button',
          'swal-image',
          'swal-icon',
          'swal-input',
          'swal-input-option',
        ]);
        Array.from(s.children).forEach(function (d) {
          var w = d.tagName.toLowerCase();
          l.includes(w) || Qe('Unrecognized element <'.concat(w, '>'));
        });
      },
      vr = function (s, l) {
        Array.from(s.attributes).forEach(function (d) {
          l.indexOf(d.name) === -1 &&
            Qe([
              'Unrecognized attribute "'
                .concat(d.name, '" on <')
                .concat(s.tagName.toLowerCase(), '>.'),
              ''.concat(
                l.length
                  ? 'Allowed attributes are: '.concat(l.join(', '))
                  : 'To set the value, use HTML within the element.'
              ),
            ]);
        });
      },
      nf = 10,
      Fy = function (s) {
        var l = qe(),
          d = ce();
        typeof s.willOpen == 'function' && s.willOpen(d);
        var w = window.getComputedStyle(document.body),
          P = w.overflowY;
        Wy(l, d, s),
          setTimeout(function () {
            Vy(l, d);
          }, nf),
          Gr() && (Hy(l, s.scrollbarPadding, P), Iw()),
          !Kr() &&
            !N.previousActiveElement &&
            (N.previousActiveElement = document.activeElement),
          typeof s.didOpen == 'function' &&
            setTimeout(function () {
              return s.didOpen(d);
            }),
          G(l, C['no-transition']);
      },
      zy = function f(s) {
        var l = ce();
        if (!(s.target !== l || !gr)) {
          var d = qe();
          l.removeEventListener(gr, f), (d.style.overflowY = 'auto');
        }
      },
      Vy = function (s, l) {
        gr && ln(l)
          ? ((s.style.overflowY = 'hidden'), l.addEventListener(gr, zy))
          : (s.style.overflowY = 'auto');
      },
      Hy = function (s, l, d) {
        Tw(),
          l && d !== 'hidden' && jw(d),
          setTimeout(function () {
            s.scrollTop = 0;
          });
      },
      Wy = function (s, l, d) {
        F(s, d.showClass.backdrop),
          d.animation
            ? (l.style.setProperty('opacity', '0', 'important'),
              te(l, 'grid'),
              setTimeout(function () {
                F(l, d.showClass.popup), l.style.removeProperty('opacity');
              }, nf))
            : te(l, 'grid'),
          F([document.documentElement, document.body], C.shown),
          d.heightAuto &&
            d.backdrop &&
            !d.toast &&
            F([document.documentElement, document.body], C['height-auto']);
      },
      rf = {
        email: function (s, l) {
          return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(s)
            ? Promise.resolve()
            : Promise.resolve(l || 'Invalid email address');
        },
        url: function (s, l) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
            s
          )
            ? Promise.resolve()
            : Promise.resolve(l || 'Invalid URL');
        },
      };
    function $y(f) {
      f.inputValidator ||
        (f.input === 'email' && (f.inputValidator = rf.email),
        f.input === 'url' && (f.inputValidator = rf.url));
    }
    function Gy(f) {
      (!f.target ||
        (typeof f.target == 'string' && !document.querySelector(f.target)) ||
        (typeof f.target != 'string' && !f.target.appendChild)) &&
        (Qe('Target parameter is not valid, defaulting to "body"'),
        (f.target = 'body'));
    }
    function Ky(f) {
      $y(f),
        f.showLoaderOnConfirm &&
          !f.preConfirm &&
          Qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        Gy(f),
        typeof f.title == 'string' &&
          (f.title = f.title
            .split(
              `
`
            )
            .join('<br />')),
        Jr(f);
    }
    var Qt,
      Ss = new WeakMap(),
      Ne = (function () {
        function f() {
          if ((x(this, f), Gt(this, Ss, void 0), !(typeof window > 'u'))) {
            Qt = this;
            for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++)
              l[d] = arguments[d];
            var w = Object.freeze(this.constructor.argsToParams(l));
            (this.params = w),
              (this.isAwaitingPromise = !1),
              o(Ss, this, this._main(Qt.params));
          }
        }
        return T(f, [
          {
            key: '_main',
            value: function (l) {
              var d =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {};
              if ((uy(Object.assign({}, d, l)), N.currentInstance)) {
                var w = Zr.swalPromiseResolve.get(N.currentInstance),
                  P = N.currentInstance.isAwaitingPromise;
                N.currentInstance._destroy(),
                  P || w({ isDismissed: !0 }),
                  Gr() && kd();
              }
              N.currentInstance = Qt;
              var z = qy(l, d);
              Ky(z),
                Object.freeze(z),
                N.timeout && (N.timeout.stop(), delete N.timeout),
                clearTimeout(N.restoreFocusTimeout);
              var ee = Yy(Qt);
              return Sd(Qt, z), ve.innerParams.set(Qt, z), Qy(Qt, ee, z);
            },
          },
          {
            key: 'then',
            value: function (l) {
              return i(Ss, this).then(l);
            },
          },
          {
            key: 'finally',
            value: function (l) {
              return i(Ss, this).finally(l);
            },
          },
        ]);
      })(),
      Qy = function (s, l, d) {
        return new Promise(function (w, P) {
          var z = function (ne) {
            s.close({ isDismissed: !0, dismiss: ne });
          };
          Zr.swalPromiseResolve.set(s, w),
            Zr.swalPromiseReject.set(s, P),
            (l.confirmButton.onclick = function () {
              Xw(s);
            }),
            (l.denyButton.onclick = function () {
              Zw(s);
            }),
            (l.cancelButton.onclick = function () {
              ey(s, z);
            }),
            (l.closeButton.onclick = function () {
              z(Xr.close);
            }),
            hy(d, l, z),
            xw(N, d, z),
            Hw(s, d),
            Fy(d),
            Jy(N, d, z),
            Xy(l, d),
            setTimeout(function () {
              l.container.scrollTop = 0;
            });
        });
      },
      qy = function (s, l) {
        var d = Ry(s),
          w = Object.assign({}, ni, l, d, s);
        return (
          (w.showClass = Object.assign({}, ni.showClass, w.showClass)),
          (w.hideClass = Object.assign({}, ni.hideClass, w.hideClass)),
          w.animation === !1 &&
            ((w.showClass = { backdrop: 'swal2-noanimation' }),
            (w.hideClass = {})),
          w
        );
      },
      Yy = function (s) {
        var l = {
          popup: ce(),
          container: qe(),
          actions: pr(),
          confirmButton: kt(),
          denyButton: Kt(),
          cancelButton: it(),
          loader: sn(),
          closeButton: $r(),
          validationMessage: on(),
          progressSteps: Wr(),
        };
        return ve.domCache.set(s, l), l;
      },
      Jy = function (s, l, d) {
        var w = an();
        K(w),
          l.timer &&
            ((s.timeout = new Ay(function () {
              d('timer'), delete s.timeout;
            }, l.timer)),
            l.timerProgressBar &&
              (te(w),
              A(w, l, 'timerProgressBar'),
              setTimeout(function () {
                s.timeout && s.timeout.running && It(l.timer);
              })));
      },
      Xy = function (s, l) {
        if (!l.toast) {
          if (!fr(l.allowEnterKey)) {
            e0();
            return;
          }
          Zy(s, l) || ul(-1, 1);
        }
      },
      Zy = function (s, l) {
        return l.focusDeny && ue(s.denyButton)
          ? (s.denyButton.focus(), !0)
          : l.focusCancel && ue(s.cancelButton)
          ? (s.cancelButton.focus(), !0)
          : l.focusConfirm && ue(s.confirmButton)
          ? (s.confirmButton.focus(), !0)
          : !1;
      },
      e0 = function () {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == 'function' &&
          document.activeElement.blur();
      };
    if (
      typeof window < 'u' &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      var of = new Date(),
        sf = localStorage.getItem('swal-initiation');
      sf
        ? (of.getTime() - Date.parse(sf)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(function () {
            document.body.style.pointerEvents = 'none';
            var f = document.createElement('audio');
            (f.src =
              'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
              (f.loop = !0),
              document.body.appendChild(f),
              setTimeout(function () {
                f.play().catch(function () {});
              }, 2500);
          }, 500)
        : localStorage.setItem('swal-initiation', ''.concat(of));
    }
    (Ne.prototype.disableButtons = Fd),
      (Ne.prototype.enableButtons = Bd),
      (Ne.prototype.getInput = Dd),
      (Ne.prototype.disableInput = Vd),
      (Ne.prototype.enableInput = zd),
      (Ne.prototype.hideLoading = xs),
      (Ne.prototype.disableLoading = xs),
      (Ne.prototype.showValidationMessage = Hd),
      (Ne.prototype.resetValidationMessage = Wd),
      (Ne.prototype.close = Rn),
      (Ne.prototype.closePopup = Rn),
      (Ne.prototype.closeModal = Rn),
      (Ne.prototype.closeToast = Rn),
      (Ne.prototype.rejectPromise = Pd),
      (Ne.prototype.update = Qd),
      (Ne.prototype._destroy = qd),
      Object.assign(Ne, Py),
      Object.keys(fy).forEach(function (f) {
        Ne[f] = function () {
          if (Qt && Qt[f]) {
            var s;
            return (s = Qt)[f].apply(s, arguments);
          }
          return null;
        };
      }),
      (Ne.DismissReason = Xr),
      (Ne.version = '11.10.8');
    var bs = Ne;
    return (bs.default = bs), bs;
  }),
    typeof Nn < 'u' &&
      Nn.Sweetalert2 &&
      (Nn.swal = Nn.sweetAlert = Nn.Swal = Nn.SweetAlert = Nn.Sweetalert2),
    typeof document < 'u' &&
      (function (n, r) {
        var i = n.createElement('style');
        if ((n.getElementsByTagName('head')[0].appendChild(i), i.styleSheet))
          i.styleSheet.disabled || (i.styleSheet.cssText = r);
        else
          try {
            i.innerHTML = r;
          } catch {
            i.innerText = r;
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
      );
})(Ag);
var B2 = Ag.exports;
const Di = nc(B2);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ae() {
  return (
    (Ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ae.apply(this, arguments)
  );
}
var je;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(je || (je = {}));
const wh = 'popstate';
function F2(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: u } = r.location;
    return qo(
      '',
      { pathname: o, search: a, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Or(i);
  }
  return V2(t, n, null, e);
}
function re(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Mi(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function z2() {
  return Math.random().toString(36).substr(2, 8);
}
function yh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ae(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ar(t) : t,
      { state: n, key: (t && t.key) || r || z2() }
    )
  );
}
function Or(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ar(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function V2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    u = je.Pop,
    c = null,
    h = m();
  h == null && ((h = 0), a.replaceState(Ae({}, a.state, { idx: h }), ''));
  function m() {
    return (a.state || { idx: null }).idx;
  }
  function g() {
    u = je.Pop;
    let L = m(),
      y = L == null ? null : L - h;
    (h = L), c && c({ action: u, location: k.location, delta: y });
  }
  function x(L, y) {
    u = je.Push;
    let v = qo(k.location, L, y);
    h = m() + 1;
    let E = yh(v, h),
      R = k.createHref(v);
    try {
      a.pushState(E, '', R);
    } catch (M) {
      if (M instanceof DOMException && M.name === 'DataCloneError') throw M;
      i.location.assign(R);
    }
    o && c && c({ action: u, location: k.location, delta: 1 });
  }
  function I(L, y) {
    u = je.Replace;
    let v = qo(k.location, L, y);
    h = m();
    let E = yh(v, h),
      R = k.createHref(v);
    a.replaceState(E, '', R),
      o && c && c({ action: u, location: k.location, delta: 0 });
  }
  function T(L) {
    let y = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      v = typeof L == 'string' ? L : Or(L);
    return (
      (v = v.replace(/ $/, '%20')),
      re(
        y,
        'No window.location.(origin|href) available to create URL for href: ' +
          v
      ),
      new URL(v, y)
    );
  }
  let k = {
    get action() {
      return u;
    },
    get location() {
      return e(i, a);
    },
    listen(L) {
      if (c) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(wh, g),
        (c = L),
        () => {
          i.removeEventListener(wh, g), (c = null);
        }
      );
    },
    createHref(L) {
      return t(i, L);
    },
    createURL: T,
    encodeLocation(L) {
      let y = T(L);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: x,
    replace: I,
    go(L) {
      return a.go(L);
    },
  };
  return k;
}
var Te;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Te || (Te = {}));
const H2 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function W2(e) {
  return e.index === !0;
}
function Hu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        u = typeof i.id == 'string' ? i.id : a.join('-');
      if (
        (re(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        re(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        W2(i))
      ) {
        let c = Ae({}, i, t(i), { id: u });
        return (r[u] = c), c;
      } else {
        let c = Ae({}, i, t(i), { id: u, children: void 0 });
        return (
          (r[u] = c), i.children && (c.children = Hu(i.children, t, a, r)), c
        );
      }
    })
  );
}
function gi(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? ar(t) : t,
    i = Hi(r.pathname || '/', n);
  if (i == null) return null;
  let o = Rg(e);
  G2(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let c = ix(i);
    a = tx(o[u], c);
  }
  return a;
}
function $2(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Rg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (o, a, u) => {
    let c = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    c.relativePath.startsWith('/') &&
      (re(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let h = yn([r, c.relativePath]),
      m = n.concat(c);
    o.children &&
      o.children.length > 0 &&
      (re(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + h + '".')
      ),
      Rg(o.children, t, m, h)),
      !(o.path == null && !o.index) &&
        t.push({ path: h, score: Z2(h, o.index), routesMeta: m });
  };
  return (
    e.forEach((o, a) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) i(o, a);
      else for (let c of Ng(o.path)) i(o, a, c);
    }),
    t
  );
}
function Ng(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let a = Ng(r.join('/')),
    u = [];
  return (
    u.push(...a.map((c) => (c === '' ? o : [o, c].join('/')))),
    i && u.push(...a),
    u.map((c) => (e.startsWith('/') && c === '' ? '/' : c))
  );
}
function G2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : ex(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const K2 = /^:[\w-]+$/,
  Q2 = 3,
  q2 = 2,
  Y2 = 1,
  J2 = 10,
  X2 = -2,
  xh = (e) => e === '*';
function Z2(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(xh) && (r += X2),
    t && (r += q2),
    n
      .filter((i) => !xh(i))
      .reduce((i, o) => i + (K2.test(o) ? Q2 : o === '' ? Y2 : J2), r)
  );
}
function ex(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function tx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let u = n[a],
      c = a === n.length - 1,
      h = i === '/' ? t : t.slice(i.length) || '/',
      m = nx(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        h
      );
    if (!m) return null;
    Object.assign(r, m.params);
    let g = u.route;
    o.push({
      params: r,
      pathname: yn([i, m.pathname]),
      pathnameBase: ax(yn([i, m.pathnameBase])),
      route: g,
    }),
      m.pathnameBase !== '/' && (i = yn([i, m.pathnameBase]));
  }
  return o;
}
function nx(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = rx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    u = i.slice(1);
  return {
    params: r.reduce((h, m, g) => {
      let { paramName: x, isOptional: I } = m;
      if (x === '*') {
        let k = u[g] || '';
        a = o.slice(0, o.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const T = u[g];
      return (
        I && !T ? (h[x] = void 0) : (h[x] = (T || '').replace(/%2F/g, '/')), h
      );
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function rx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mi(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, u, c) => (
            r.push({ paramName: u, isOptional: c != null }),
            c ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function ix(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Mi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Hi(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function ox(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? ar(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : sx(n, t)) : t,
    search: lx(r),
    hash: ux(i),
  };
}
function sx(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Fl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Og(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Xc(e, t) {
  let n = Og(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Zc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string'
    ? (i = ar(e))
    : ((i = Ae({}, e)),
      re(
        !i.pathname || !i.pathname.includes('?'),
        Fl('?', 'pathname', 'search', i)
      ),
      re(
        !i.pathname || !i.pathname.includes('#'),
        Fl('#', 'pathname', 'hash', i)
      ),
      re(!i.search || !i.search.includes('#'), Fl('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    a = o ? '/' : i.pathname,
    u;
  if (a == null) u = n;
  else {
    let g = t.length - 1;
    if (!r && a.startsWith('..')) {
      let x = a.split('/');
      for (; x[0] === '..'; ) x.shift(), (g -= 1);
      i.pathname = x.join('/');
    }
    u = g >= 0 ? t[g] : '/';
  }
  let c = ox(i, u),
    h = a && a !== '/' && a.endsWith('/'),
    m = (o || a === '.') && n.endsWith('/');
  return !c.pathname.endsWith('/') && (h || m) && (c.pathname += '/'), c;
}
const yn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  ax = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  lx = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  ux = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class ed {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Lg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const jg = ['post', 'put', 'patch', 'delete'],
  cx = new Set(jg),
  dx = ['get', ...jg],
  fx = new Set(dx),
  hx = new Set([301, 302, 303, 307, 308]),
  px = new Set([307, 308]),
  zl = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  mx = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  uo = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Dg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gx = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Mg = 'remix-router-transitions';
function vx(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  re(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let b = e.detectErrorBoundary;
    i = (_) => ({ hasErrorBoundary: b(_) });
  } else i = gx;
  let o = {},
    a = Hu(e.routes, i, void 0, o),
    u,
    c = e.basename || '/',
    h = Ae(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    m = null,
    g = new Set(),
    x = null,
    I = null,
    T = null,
    k = e.hydrationData != null,
    L = gi(a, e.history.location, c),
    y = null;
  if (L == null) {
    let b = Tt(404, { pathname: e.history.location.pathname }),
      { matches: _, route: A } = Th(a);
    (L = _), (y = { [A.id]: b });
  }
  let v,
    E = L.some((b) => b.route.lazy),
    R = L.some((b) => b.route.loader);
  if (E) v = !1;
  else if (!R) v = !0;
  else if (h.v7_partialHydration) {
    let b = e.hydrationData ? e.hydrationData.loaderData : null,
      _ = e.hydrationData ? e.hydrationData.errors : null,
      A = (U) =>
        U.route.loader
          ? U.route.loader.hydrate === !0
            ? !1
            : (b && b[U.route.id] !== void 0) || (_ && _[U.route.id] !== void 0)
          : !0;
    if (_) {
      let U = L.findIndex((W) => _[W.route.id] !== void 0);
      v = L.slice(0, U + 1).every(A);
    } else v = L.every(A);
  } else v = e.hydrationData != null;
  let M,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: L,
      initialized: v,
      navigation: zl,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = je.Pop,
    B = !1,
    H,
    Q = !1,
    oe = new Map(),
    Se = null,
    ke = !1,
    ct = !1,
    Tn = [],
    Gt = [],
    ge = new Map(),
    N = 0,
    q = -1,
    J = new Map(),
    se = new Set(),
    pe = new Map(),
    C = new Map(),
    Me = new Set(),
    Ke = new Map(),
    ze = new Map(),
    _t = !1;
  function Qe() {
    if (
      ((m = e.history.listen((b) => {
        let { action: _, location: A, delta: U } = b;
        if (_t) {
          _t = !1;
          return;
        }
        Mi(
          ze.size === 0 || U != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let W = $r({
          currentLocation: S.location,
          nextLocation: A,
          historyAction: _,
        });
        if (W && U != null) {
          (_t = !0),
            e.history.go(U * -1),
            an(W, {
              state: 'blocked',
              location: A,
              proceed() {
                an(W, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: A,
                }),
                  e.history.go(U);
              },
              reset() {
                let Z = new Map(S.blockers);
                Z.set(W, uo), nt({ blockers: Z });
              },
            });
          return;
        }
        return vt(_, A);
      })),
      n)
    ) {
      Tx(t, oe);
      let b = () => Px(t, oe);
      t.addEventListener('pagehide', b),
        (Se = () => t.removeEventListener('pagehide', b));
    }
    return S.initialized || vt(je.Pop, S.location, { initialHydration: !0 }), M;
  }
  function rn() {
    m && m(),
      Se && Se(),
      g.clear(),
      H && H.abort(),
      S.fetchers.forEach((b, _) => on(_)),
      S.blockers.forEach((b, _) => Ki(_));
  }
  function ps(b) {
    return g.add(b), () => g.delete(b);
  }
  function nt(b, _) {
    _ === void 0 && (_ = {}), (S = Ae({}, S, b));
    let A = [],
      U = [];
    h.v7_fetcherPersist &&
      S.fetchers.forEach((W, Z) => {
        W.state === 'idle' && (Me.has(Z) ? U.push(Z) : A.push(Z));
      }),
      [...g].forEach((W) =>
        W(S, {
          deletedFetchers: U,
          unstable_viewTransitionOpts: _.viewTransitionOpts,
          unstable_flushSync: _.flushSync === !0,
        })
      ),
      h.v7_fetcherPersist &&
        (A.forEach((W) => S.fetchers.delete(W)), U.forEach((W) => on(W)));
  }
  function dr(b, _, A) {
    var U, W;
    let { flushSync: Z } = A === void 0 ? {} : A,
      F =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        Ft(S.navigation.formMethod) &&
        S.navigation.state === 'loading' &&
        ((U = b.state) == null ? void 0 : U._isRedirect) !== !0,
      G;
    _.actionData
      ? Object.keys(_.actionData).length > 0
        ? (G = _.actionData)
        : (G = null)
      : F
      ? (G = S.actionData)
      : (G = null);
    let $ = _.loaderData
        ? Ih(S.loaderData, _.loaderData, _.matches || [], _.errors)
        : S.loaderData,
      X = S.blockers;
    X.size > 0 && ((X = new Map(X)), X.forEach((de, Le) => X.set(Le, uo)));
    let te =
      B === !0 ||
      (S.navigation.formMethod != null &&
        Ft(S.navigation.formMethod) &&
        ((W = b.state) == null ? void 0 : W._isRedirect) !== !0);
    u && ((a = u), (u = void 0)),
      ke ||
        O === je.Pop ||
        (O === je.Push
          ? e.history.push(b, b.state)
          : O === je.Replace && e.history.replace(b, b.state));
    let K;
    if (O === je.Pop) {
      let de = oe.get(S.location.pathname);
      de && de.has(b.pathname)
        ? (K = { currentLocation: S.location, nextLocation: b })
        : oe.has(b.pathname) &&
          (K = { currentLocation: b, nextLocation: S.location });
    } else if (Q) {
      let de = oe.get(S.location.pathname);
      de
        ? de.add(b.pathname)
        : ((de = new Set([b.pathname])), oe.set(S.location.pathname, de)),
        (K = { currentLocation: S.location, nextLocation: b });
    }
    nt(
      Ae({}, _, {
        actionData: G,
        loaderData: $,
        historyAction: O,
        location: b,
        initialized: !0,
        navigation: zl,
        revalidation: 'idle',
        restoreScrollPosition: vs(b, _.matches || S.matches),
        preventScrollReset: te,
        blockers: X,
      }),
      { viewTransitionOpts: K, flushSync: Z === !0 }
    ),
      (O = je.Pop),
      (B = !1),
      (Q = !1),
      (ke = !1),
      (ct = !1),
      (Tn = []),
      (Gt = []);
  }
  async function fr(b, _) {
    if (typeof b == 'number') {
      e.history.go(b);
      return;
    }
    let A = Wu(
        S.location,
        S.matches,
        c,
        h.v7_prependBasename,
        b,
        h.v7_relativeSplatPath,
        _ == null ? void 0 : _.fromRouteId,
        _ == null ? void 0 : _.relative
      ),
      {
        path: U,
        submission: W,
        error: Z,
      } = Eh(h.v7_normalizeFormMethod, !1, A, _),
      F = S.location,
      G = qo(S.location, U, _ && _.state);
    G = Ae({}, G, e.history.encodeLocation(G));
    let $ = _ && _.replace != null ? _.replace : void 0,
      X = je.Push;
    $ === !0
      ? (X = je.Replace)
      : $ === !1 ||
        (W != null &&
          Ft(W.formMethod) &&
          W.formAction === S.location.pathname + S.location.search &&
          (X = je.Replace));
    let te =
        _ && 'preventScrollReset' in _ ? _.preventScrollReset === !0 : void 0,
      K = (_ && _.unstable_flushSync) === !0,
      de = $r({ currentLocation: F, nextLocation: G, historyAction: X });
    if (de) {
      an(de, {
        state: 'blocked',
        location: G,
        proceed() {
          an(de, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: G,
          }),
            fr(b, _);
        },
        reset() {
          let Le = new Map(S.blockers);
          Le.set(de, uo), nt({ blockers: Le });
        },
      });
      return;
    }
    return await vt(X, G, {
      submission: W,
      pendingError: Z,
      preventScrollReset: te,
      replace: _ && _.replace,
      enableViewTransition: _ && _.unstable_viewTransition,
      flushSync: K,
    });
  }
  function $i() {
    if (
      (Hr(),
      nt({ revalidation: 'loading' }),
      S.navigation.state !== 'submitting')
    ) {
      if (S.navigation.state === 'idle') {
        vt(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      vt(O || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
      });
    }
  }
  async function vt(b, _, A) {
    H && H.abort(),
      (H = null),
      (O = b),
      (ke = (A && A.startUninterruptedRevalidation) === !0),
      Kr(S.location, S.matches),
      (B = (A && A.preventScrollReset) === !0),
      (Q = (A && A.enableViewTransition) === !0);
    let U = u || a,
      W = A && A.overrideNavigation,
      Z = gi(U, _, c),
      F = (A && A.flushSync) === !0;
    if (!Z) {
      let Le = Tt(404, { pathname: _.pathname }),
        { matches: Ue, route: ue } = Th(U);
      Qi(),
        dr(
          _,
          { matches: Ue, loaderData: {}, errors: { [ue.id]: Le } },
          { flushSync: F }
        );
      return;
    }
    if (
      S.initialized &&
      !ct &&
      Sx(S.location, _) &&
      !(A && A.submission && Ft(A.submission.formMethod))
    ) {
      dr(_, { matches: Z }, { flushSync: F });
      return;
    }
    H = new AbortController();
    let G = fo(e.history, _, H.signal, A && A.submission),
      $,
      X;
    if (A && A.pendingError) X = { [Ao(Z).route.id]: A.pendingError };
    else if (A && A.submission && Ft(A.submission.formMethod)) {
      let Le = await Gi(G, _, A.submission, Z, {
        replace: A.replace,
        flushSync: F,
      });
      if (Le.shortCircuited) return;
      ($ = Le.pendingActionData),
        (X = Le.pendingActionError),
        (W = Vl(_, A.submission)),
        (F = !1),
        (G = new Request(G.url, { signal: G.signal }));
    }
    let {
      shortCircuited: te,
      loaderData: K,
      errors: de,
    } = await qe(
      G,
      _,
      Z,
      W,
      A && A.submission,
      A && A.fetcherSubmission,
      A && A.replace,
      A && A.initialHydration === !0,
      F,
      $,
      X
    );
    te ||
      ((H = null),
      dr(
        _,
        Ae({ matches: Z }, $ ? { actionData: $ } : {}, {
          loaderData: K,
          errors: de,
        })
      ));
  }
  async function Gi(b, _, A, U, W) {
    W === void 0 && (W = {}), Hr();
    let Z = kx(_, A);
    nt({ navigation: Z }, { flushSync: W.flushSync === !0 });
    let F,
      G = Gu(U, _);
    if (!G.route.action && !G.route.lazy)
      F = {
        type: Te.error,
        error: Tt(405, {
          method: b.method,
          pathname: _.pathname,
          routeId: G.route.id,
        }),
      };
    else if (
      ((F = await co('action', b, G, U, o, i, c, h.v7_relativeSplatPath)),
      b.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Cr(F)) {
      let $;
      return (
        W && W.replace != null
          ? ($ = W.replace)
          : ($ = F.location === S.location.pathname + S.location.search),
        await Dt(S, F, { submission: A, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (vi(F)) {
      let $ = Ao(U, G.route.id);
      return (
        (W && W.replace) !== !0 && (O = je.Push),
        { pendingActionData: {}, pendingActionError: { [$.route.id]: F.error } }
      );
    }
    if (_r(F)) throw Tt(400, { type: 'defer-action' });
    return { pendingActionData: { [G.route.id]: F.data } };
  }
  async function qe(b, _, A, U, W, Z, F, G, $, X, te) {
    let K = U || Vl(_, W),
      de = W || Z || Rh(K),
      Le = u || a,
      [Ue, ue] = Sh(
        e.history,
        S,
        A,
        de,
        _,
        h.v7_partialHydration && G === !0,
        ct,
        Tn,
        Gt,
        Me,
        pe,
        se,
        Le,
        c,
        X,
        te
      );
    if (
      (Qi(
        (ae) =>
          !(A && A.some((fe) => fe.route.id === ae)) ||
          (Ue && Ue.some((fe) => fe.route.id === ae))
      ),
      (q = ++N),
      Ue.length === 0 && ue.length === 0)
    ) {
      let ae = gs();
      return (
        dr(
          _,
          Ae(
            { matches: A, loaderData: {}, errors: te || null },
            X ? { actionData: X } : {},
            ae ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ke && (!h.v7_partialHydration || !G)) {
      ue.forEach((fe) => {
        let Ye = S.fetchers.get(fe.key),
          Jr = ho(void 0, Ye ? Ye.data : void 0);
        S.fetchers.set(fe.key, Jr);
      });
      let ae = X || S.actionData;
      nt(
        Ae(
          { navigation: K },
          ae
            ? Object.keys(ae).length === 0
              ? { actionData: null }
              : { actionData: ae }
            : {},
          ue.length > 0 ? { fetchers: new Map(S.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    ue.forEach((ae) => {
      ge.has(ae.key) && it(ae.key),
        ae.controller && ge.set(ae.key, ae.controller);
    });
    let An = () => ue.forEach((ae) => it(ae.key));
    H && H.signal.addEventListener('abort', An);
    let {
      results: Qr,
      loaderResults: ln,
      fetcherResults: It,
    } = await ms(S.matches, A, Ue, ue, b);
    if (b.signal.aborted) return { shortCircuited: !0 };
    H && H.signal.removeEventListener('abort', An),
      ue.forEach((ae) => ge.delete(ae.key));
    let un = Ph(Qr);
    if (un) {
      if (un.idx >= Ue.length) {
        let ae = ue[un.idx - Ue.length].key;
        se.add(ae);
      }
      return await Dt(S, un.result, { replace: F }), { shortCircuited: !0 };
    }
    let { loaderData: qr, errors: mr } = kh(S, A, Ue, ln, te, ue, It, Ke);
    Ke.forEach((ae, fe) => {
      ae.subscribe((Ye) => {
        (Ye || ae.done) && Ke.delete(fe);
      });
    }),
      h.v7_partialHydration &&
        G &&
        S.errors &&
        Object.entries(S.errors)
          .filter((ae) => {
            let [fe] = ae;
            return !Ue.some((Ye) => Ye.route.id === fe);
          })
          .forEach((ae) => {
            let [fe, Ye] = ae;
            mr = Object.assign(mr || {}, { [fe]: Ye });
          });
    let Yi = gs(),
      dt = sn(q),
      Yr = Yi || dt || ue.length > 0;
    return Ae(
      { loaderData: qr, errors: mr },
      Yr ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function hr(b, _, A, U) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ge.has(b) && it(b);
    let W = (U && U.unstable_flushSync) === !0,
      Z = u || a,
      F = Wu(
        S.location,
        S.matches,
        c,
        h.v7_prependBasename,
        A,
        h.v7_relativeSplatPath,
        _,
        U == null ? void 0 : U.relative
      ),
      G = gi(Z, F, c);
    if (!G) {
      Pn(b, _, Tt(404, { pathname: F }), { flushSync: W });
      return;
    }
    let {
      path: $,
      submission: X,
      error: te,
    } = Eh(h.v7_normalizeFormMethod, !0, F, U);
    if (te) {
      Pn(b, _, te, { flushSync: W });
      return;
    }
    let K = Gu(G, $);
    if (((B = (U && U.preventScrollReset) === !0), X && Ft(X.formMethod))) {
      rt(b, _, $, K, G, W, X);
      return;
    }
    pe.set(b, { routeId: _, path: $ }), ce(b, _, $, K, G, W, X);
  }
  async function rt(b, _, A, U, W, Z, F) {
    if ((Hr(), pe.delete(b), !U.route.action && !U.route.lazy)) {
      let fe = Tt(405, { method: F.formMethod, pathname: A, routeId: _ });
      Pn(b, _, fe, { flushSync: Z });
      return;
    }
    let G = S.fetchers.get(b);
    Ct(b, Ix(F, G), { flushSync: Z });
    let $ = new AbortController(),
      X = fo(e.history, A, $.signal, F);
    ge.set(b, $);
    let te = N,
      K = await co('action', X, U, W, o, i, c, h.v7_relativeSplatPath);
    if (X.signal.aborted) {
      ge.get(b) === $ && ge.delete(b);
      return;
    }
    if (h.v7_fetcherPersist && Me.has(b)) {
      if (Cr(K) || vi(K)) {
        Ct(b, jn(void 0));
        return;
      }
    } else {
      if (Cr(K))
        if ((ge.delete(b), q > te)) {
          Ct(b, jn(void 0));
          return;
        } else
          return se.add(b), Ct(b, ho(F)), Dt(S, K, { fetcherSubmission: F });
      if (vi(K)) {
        Pn(b, _, K.error);
        return;
      }
    }
    if (_r(K)) throw Tt(400, { type: 'defer-action' });
    let de = S.navigation.location || S.location,
      Le = fo(e.history, de, $.signal),
      Ue = u || a,
      ue =
        S.navigation.state !== 'idle'
          ? gi(Ue, S.navigation.location, c)
          : S.matches;
    re(ue, "Didn't find any matches after fetcher action");
    let An = ++N;
    J.set(b, An);
    let Qr = ho(F, K.data);
    S.fetchers.set(b, Qr);
    let [ln, It] = Sh(
      e.history,
      S,
      ue,
      F,
      de,
      !1,
      ct,
      Tn,
      Gt,
      Me,
      pe,
      se,
      Ue,
      c,
      { [U.route.id]: K.data },
      void 0
    );
    It.filter((fe) => fe.key !== b).forEach((fe) => {
      let Ye = fe.key,
        Jr = S.fetchers.get(Ye),
        Ji = ho(void 0, Jr ? Jr.data : void 0);
      S.fetchers.set(Ye, Ji),
        ge.has(Ye) && it(Ye),
        fe.controller && ge.set(Ye, fe.controller);
    }),
      nt({ fetchers: new Map(S.fetchers) });
    let un = () => It.forEach((fe) => it(fe.key));
    $.signal.addEventListener('abort', un);
    let {
      results: qr,
      loaderResults: mr,
      fetcherResults: Yi,
    } = await ms(S.matches, ue, ln, It, Le);
    if ($.signal.aborted) return;
    $.signal.removeEventListener('abort', un),
      J.delete(b),
      ge.delete(b),
      It.forEach((fe) => ge.delete(fe.key));
    let dt = Ph(qr);
    if (dt) {
      if (dt.idx >= ln.length) {
        let fe = It[dt.idx - ln.length].key;
        se.add(fe);
      }
      return Dt(S, dt.result);
    }
    let { loaderData: Yr, errors: ae } = kh(
      S,
      S.matches,
      ln,
      mr,
      void 0,
      It,
      Yi,
      Ke
    );
    if (S.fetchers.has(b)) {
      let fe = jn(K.data);
      S.fetchers.set(b, fe);
    }
    sn(An),
      S.navigation.state === 'loading' && An > q
        ? (re(O, 'Expected pending action'),
          H && H.abort(),
          dr(S.navigation.location, {
            matches: ue,
            loaderData: Yr,
            errors: ae,
            fetchers: new Map(S.fetchers),
          }))
        : (nt({
            errors: ae,
            loaderData: Ih(S.loaderData, Yr, ue, ae),
            fetchers: new Map(S.fetchers),
          }),
          (ct = !1));
  }
  async function ce(b, _, A, U, W, Z, F) {
    let G = S.fetchers.get(b);
    Ct(b, ho(F, G ? G.data : void 0), { flushSync: Z });
    let $ = new AbortController(),
      X = fo(e.history, A, $.signal);
    ge.set(b, $);
    let te = N,
      K = await co('loader', X, U, W, o, i, c, h.v7_relativeSplatPath);
    if (
      (_r(K) && (K = (await Fg(K, X.signal, !0)) || K),
      ge.get(b) === $ && ge.delete(b),
      !X.signal.aborted)
    ) {
      if (Me.has(b)) {
        Ct(b, jn(void 0));
        return;
      }
      if (Cr(K))
        if (q > te) {
          Ct(b, jn(void 0));
          return;
        } else {
          se.add(b), await Dt(S, K);
          return;
        }
      if (vi(K)) {
        Pn(b, _, K.error);
        return;
      }
      re(!_r(K), 'Unhandled fetcher deferred data'), Ct(b, jn(K.data));
    }
  }
  async function Dt(b, _, A) {
    let {
      submission: U,
      fetcherSubmission: W,
      replace: Z,
    } = A === void 0 ? {} : A;
    _.revalidate && (ct = !0);
    let F = qo(b.location, _.location, { _isRedirect: !0 });
    if ((re(F, 'Expected a location on the redirect navigation'), n)) {
      let de = !1;
      if (_.reloadDocument) de = !0;
      else if (Dg.test(_.location)) {
        const Le = e.history.createURL(_.location);
        de = Le.origin !== t.location.origin || Hi(Le.pathname, c) == null;
      }
      if (de) {
        Z ? t.location.replace(_.location) : t.location.assign(_.location);
        return;
      }
    }
    H = null;
    let G = Z === !0 ? je.Replace : je.Push,
      { formMethod: $, formAction: X, formEncType: te } = b.navigation;
    !U && !W && $ && X && te && (U = Rh(b.navigation));
    let K = U || W;
    if (px.has(_.status) && K && Ft(K.formMethod))
      await vt(G, F, {
        submission: Ae({}, K, { formAction: _.location }),
        preventScrollReset: B,
      });
    else {
      let de = Vl(F, U);
      await vt(G, F, {
        overrideNavigation: de,
        fetcherSubmission: W,
        preventScrollReset: B,
      });
    }
  }
  async function ms(b, _, A, U, W) {
    let Z = await Promise.all([
        ...A.map(($) => co('loader', W, $, _, o, i, c, h.v7_relativeSplatPath)),
        ...U.map(($) =>
          $.matches && $.match && $.controller
            ? co(
                'loader',
                fo(e.history, $.path, $.controller.signal),
                $.match,
                $.matches,
                o,
                i,
                c,
                h.v7_relativeSplatPath
              )
            : { type: Te.error, error: Tt(404, { pathname: $.path }) }
        ),
      ]),
      F = Z.slice(0, A.length),
      G = Z.slice(A.length);
    return (
      await Promise.all([
        Ah(
          b,
          A,
          F,
          F.map(() => W.signal),
          !1,
          S.loaderData
        ),
        Ah(
          b,
          U.map(($) => $.match),
          G,
          U.map(($) => ($.controller ? $.controller.signal : null)),
          !0
        ),
      ]),
      { results: Z, loaderResults: F, fetcherResults: G }
    );
  }
  function Hr() {
    (ct = !0),
      Tn.push(...Qi()),
      pe.forEach((b, _) => {
        ge.has(_) && (Gt.push(_), it(_));
      });
  }
  function Ct(b, _, A) {
    A === void 0 && (A = {}),
      S.fetchers.set(b, _),
      nt(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (A && A.flushSync) === !0 }
      );
  }
  function Pn(b, _, A, U) {
    U === void 0 && (U = {});
    let W = Ao(S.matches, _);
    on(b),
      nt(
        { errors: { [W.route.id]: A }, fetchers: new Map(S.fetchers) },
        { flushSync: (U && U.flushSync) === !0 }
      );
  }
  function Wr(b) {
    return (
      h.v7_fetcherPersist &&
        (C.set(b, (C.get(b) || 0) + 1), Me.has(b) && Me.delete(b)),
      S.fetchers.get(b) || mx
    );
  }
  function on(b) {
    let _ = S.fetchers.get(b);
    ge.has(b) && !(_ && _.state === 'loading' && J.has(b)) && it(b),
      pe.delete(b),
      J.delete(b),
      se.delete(b),
      Me.delete(b),
      S.fetchers.delete(b);
  }
  function kt(b) {
    if (h.v7_fetcherPersist) {
      let _ = (C.get(b) || 0) - 1;
      _ <= 0 ? (C.delete(b), Me.add(b)) : C.set(b, _);
    } else on(b);
    nt({ fetchers: new Map(S.fetchers) });
  }
  function it(b) {
    let _ = ge.get(b);
    re(_, 'Expected fetch controller: ' + b), _.abort(), ge.delete(b);
  }
  function Kt(b) {
    for (let _ of b) {
      let A = Wr(_),
        U = jn(A.data);
      S.fetchers.set(_, U);
    }
  }
  function gs() {
    let b = [],
      _ = !1;
    for (let A of se) {
      let U = S.fetchers.get(A);
      re(U, 'Expected fetcher: ' + A),
        U.state === 'loading' && (se.delete(A), b.push(A), (_ = !0));
    }
    return Kt(b), _;
  }
  function sn(b) {
    let _ = [];
    for (let [A, U] of J)
      if (U < b) {
        let W = S.fetchers.get(A);
        re(W, 'Expected fetcher: ' + A),
          W.state === 'loading' && (it(A), J.delete(A), _.push(A));
      }
    return Kt(_), _.length > 0;
  }
  function pr(b, _) {
    let A = S.blockers.get(b) || uo;
    return ze.get(b) !== _ && ze.set(b, _), A;
  }
  function Ki(b) {
    S.blockers.delete(b), ze.delete(b);
  }
  function an(b, _) {
    let A = S.blockers.get(b) || uo;
    re(
      (A.state === 'unblocked' && _.state === 'blocked') ||
        (A.state === 'blocked' && _.state === 'blocked') ||
        (A.state === 'blocked' && _.state === 'proceeding') ||
        (A.state === 'blocked' && _.state === 'unblocked') ||
        (A.state === 'proceeding' && _.state === 'unblocked'),
      'Invalid blocker state transition: ' + A.state + ' -> ' + _.state
    );
    let U = new Map(S.blockers);
    U.set(b, _), nt({ blockers: U });
  }
  function $r(b) {
    let { currentLocation: _, nextLocation: A, historyAction: U } = b;
    if (ze.size === 0) return;
    ze.size > 1 && Mi(!1, 'A router only supports one blocker at a time');
    let W = Array.from(ze.entries()),
      [Z, F] = W[W.length - 1],
      G = S.blockers.get(Z);
    if (
      !(G && G.state === 'proceeding') &&
      F({ currentLocation: _, nextLocation: A, historyAction: U })
    )
      return Z;
  }
  function Qi(b) {
    let _ = [];
    return (
      Ke.forEach((A, U) => {
        (!b || b(U)) && (A.cancel(), _.push(U), Ke.delete(U));
      }),
      _
    );
  }
  function qi(b, _, A) {
    if (((x = b), (T = _), (I = A || null), !k && S.navigation === zl)) {
      k = !0;
      let U = vs(S.location, S.matches);
      U != null && nt({ restoreScrollPosition: U });
    }
    return () => {
      (x = null), (T = null), (I = null);
    };
  }
  function Gr(b, _) {
    return (
      (I &&
        I(
          b,
          _.map((U) => $2(U, S.loaderData))
        )) ||
      b.key
    );
  }
  function Kr(b, _) {
    if (x && T) {
      let A = Gr(b, _);
      x[A] = T();
    }
  }
  function vs(b, _) {
    if (x) {
      let A = Gr(b, _),
        U = x[A];
      if (typeof U == 'number') return U;
    }
    return null;
  }
  function ot(b) {
    (o = {}), (u = Hu(b, i, void 0, o));
  }
  return (
    (M = {
      get basename() {
        return c;
      },
      get future() {
        return h;
      },
      get state() {
        return S;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Qe,
      subscribe: ps,
      enableScrollRestoration: qi,
      navigate: fr,
      fetch: hr,
      revalidate: $i,
      createHref: (b) => e.history.createHref(b),
      encodeLocation: (b) => e.history.encodeLocation(b),
      getFetcher: Wr,
      deleteFetcher: kt,
      dispose: rn,
      getBlocker: pr,
      deleteBlocker: Ki,
      _internalFetchControllers: ge,
      _internalActiveDeferreds: Ke,
      _internalSetRoutes: ot,
    }),
    M
  );
}
function wx(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Wu(e, t, n, r, i, o, a, u) {
  let c, h;
  if (a) {
    c = [];
    for (let g of t)
      if ((c.push(g), g.route.id === a)) {
        h = g;
        break;
      }
  } else (c = t), (h = t[t.length - 1]);
  let m = Zc(i || '.', Xc(c, o), Hi(e.pathname, n) || e.pathname, u === 'path');
  return (
    i == null && ((m.search = e.search), (m.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      h &&
      h.route.index &&
      !td(m.search) &&
      (m.search = m.search ? m.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (m.pathname = m.pathname === '/' ? n : yn([n, m.pathname])),
    Or(m)
  );
}
function Eh(e, t, n, r) {
  if (!r || !wx(r)) return { path: n };
  if (r.formMethod && !Cx(r.formMethod))
    return { path: n, error: Tt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Tt(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    a = e ? o.toUpperCase() : o.toLowerCase(),
    u = Bg(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!Ft(a)) return i();
      let x =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((I, T) => {
              let [k, L] = T;
              return (
                '' +
                I +
                k +
                '=' +
                L +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: x,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!Ft(a)) return i();
      try {
        let x = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: x,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  re(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let c, h;
  if (r.formData) (c = $u(r.formData)), (h = r.formData);
  else if (r.body instanceof FormData) (c = $u(r.body)), (h = r.body);
  else if (r.body instanceof URLSearchParams) (c = r.body), (h = Ch(c));
  else if (r.body == null) (c = new URLSearchParams()), (h = new FormData());
  else
    try {
      (c = new URLSearchParams(r.body)), (h = Ch(c));
    } catch {
      return i();
    }
  let m = {
    formMethod: a,
    formAction: u,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: h,
    json: void 0,
    text: void 0,
  };
  if (Ft(m.formMethod)) return { path: n, submission: m };
  let g = ar(n);
  return (
    t && g.search && td(g.search) && c.append('index', ''),
    (g.search = '?' + c),
    { path: Or(g), submission: m }
  );
}
function yx(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Sh(e, t, n, r, i, o, a, u, c, h, m, g, x, I, T, k) {
  let L = k ? Object.values(k)[0] : T ? Object.values(T)[0] : void 0,
    y = e.createURL(t.location),
    v = e.createURL(i),
    E = k ? Object.keys(k)[0] : void 0,
    M = yx(n, E).filter((O, B) => {
      let { route: H } = O;
      if (H.lazy) return !0;
      if (H.loader == null) return !1;
      if (o)
        return H.loader.hydrate
          ? !0
          : t.loaderData[H.id] === void 0 &&
              (!t.errors || t.errors[H.id] === void 0);
      if (
        xx(t.loaderData, t.matches[B], O) ||
        u.some((Se) => Se === O.route.id)
      )
        return !0;
      let Q = t.matches[B],
        oe = O;
      return bh(
        O,
        Ae(
          {
            currentUrl: y,
            currentParams: Q.params,
            nextUrl: v,
            nextParams: oe.params,
          },
          r,
          {
            actionResult: L,
            defaultShouldRevalidate:
              a ||
              y.pathname + y.search === v.pathname + v.search ||
              y.search !== v.search ||
              Ug(Q, oe),
          }
        )
      );
    }),
    S = [];
  return (
    m.forEach((O, B) => {
      if (o || !n.some((ke) => ke.route.id === O.routeId) || h.has(B)) return;
      let H = gi(x, O.path, I);
      if (!H) {
        S.push({
          key: B,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Q = t.fetchers.get(B),
        oe = Gu(H, O.path),
        Se = !1;
      g.has(B)
        ? (Se = !1)
        : c.includes(B)
        ? (Se = !0)
        : Q && Q.state !== 'idle' && Q.data === void 0
        ? (Se = a)
        : (Se = bh(
            oe,
            Ae(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: v,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: L, defaultShouldRevalidate: a }
            )
          )),
        Se &&
          S.push({
            key: B,
            routeId: O.routeId,
            path: O.path,
            matches: H,
            match: oe,
            controller: new AbortController(),
          });
    }),
    [M, S]
  );
}
function xx(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Ug(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function bh(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function _h(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  re(i, 'No route found in manifest');
  let o = {};
  for (let a in r) {
    let c = i[a] !== void 0 && a !== 'hasErrorBoundary';
    Mi(
      !c,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !c && !H2.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Ae({}, t(i), { lazy: void 0 }));
}
async function co(e, t, n, r, i, o, a, u, c) {
  c === void 0 && (c = {});
  let h,
    m,
    g,
    x = (k) => {
      let L,
        y = new Promise((v, E) => (L = E));
      return (
        (g = () => L()),
        t.signal.addEventListener('abort', g),
        Promise.race([
          k({ request: t, params: n.params, context: c.requestContext }),
          y,
        ])
      );
    };
  try {
    let k = n.route[e];
    if (n.route.lazy)
      if (k) {
        let L,
          y = await Promise.all([
            x(k).catch((v) => {
              L = v;
            }),
            _h(n.route, o, i),
          ]);
        if (L) throw L;
        m = y[0];
      } else if ((await _h(n.route, o, i), (k = n.route[e]), k)) m = await x(k);
      else if (e === 'action') {
        let L = new URL(t.url),
          y = L.pathname + L.search;
        throw Tt(405, { method: t.method, pathname: y, routeId: n.route.id });
      } else return { type: Te.data, data: void 0 };
    else if (k) m = await x(k);
    else {
      let L = new URL(t.url),
        y = L.pathname + L.search;
      throw Tt(404, { pathname: y });
    }
    re(
      m !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (k) {
    (h = Te.error), (m = k);
  } finally {
    g && t.signal.removeEventListener('abort', g);
  }
  if (_x(m)) {
    let k = m.status;
    if (hx.has(k)) {
      let y = m.headers.get('Location');
      if (
        (re(
          y,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !Dg.test(y))
      )
        y = Wu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, y, u);
      else if (!c.isStaticRequest) {
        let v = new URL(t.url),
          E = y.startsWith('//') ? new URL(v.protocol + y) : new URL(y),
          R = Hi(E.pathname, a) != null;
        E.origin === v.origin && R && (y = E.pathname + E.search + E.hash);
      }
      if (c.isStaticRequest) throw (m.headers.set('Location', y), m);
      return {
        type: Te.redirect,
        status: k,
        location: y,
        revalidate: m.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: m.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (c.isRouteRequest)
      throw { type: h === Te.error ? Te.error : Te.data, response: m };
    let L;
    try {
      let y = m.headers.get('Content-Type');
      y && /\bapplication\/json\b/.test(y)
        ? m.body == null
          ? (L = null)
          : (L = await m.json())
        : (L = await m.text());
    } catch (y) {
      return { type: Te.error, error: y };
    }
    return h === Te.error
      ? { type: h, error: new ed(k, m.statusText, L), headers: m.headers }
      : { type: Te.data, data: L, statusCode: m.status, headers: m.headers };
  }
  if (h === Te.error) return { type: h, error: m };
  if (bx(m)) {
    var I, T;
    return {
      type: Te.deferred,
      deferredData: m,
      statusCode: (I = m.init) == null ? void 0 : I.status,
      headers:
        ((T = m.init) == null ? void 0 : T.headers) &&
        new Headers(m.init.headers),
    };
  }
  return { type: Te.data, data: m };
}
function fo(e, t, n, r) {
  let i = e.createURL(Bg(t)).toString(),
    o = { signal: n };
  if (r && Ft(r.formMethod)) {
    let { formMethod: a, formEncType: u } = r;
    (o.method = a.toUpperCase()),
      u === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': u })),
          (o.body = JSON.stringify(r.json)))
        : u === 'text/plain'
        ? (o.body = r.text)
        : u === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = $u(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function $u(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Ch(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Ex(e, t, n, r, i) {
  let o = {},
    a = null,
    u,
    c = !1,
    h = {};
  return (
    n.forEach((m, g) => {
      let x = t[g].route.id;
      if (
        (re(!Cr(m), 'Cannot handle redirect results in processLoaderData'),
        vi(m))
      ) {
        let I = Ao(e, x),
          T = m.error;
        r && ((T = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[I.route.id] == null && (a[I.route.id] = T),
          (o[x] = void 0),
          c || ((c = !0), (u = Lg(m.error) ? m.error.status : 500)),
          m.headers && (h[x] = m.headers);
      } else
        _r(m)
          ? (i.set(x, m.deferredData), (o[x] = m.deferredData.data))
          : (o[x] = m.data),
          m.statusCode != null &&
            m.statusCode !== 200 &&
            !c &&
            (u = m.statusCode),
          m.headers && (h[x] = m.headers);
    }),
    r && ((a = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: h }
  );
}
function kh(e, t, n, r, i, o, a, u) {
  let { loaderData: c, errors: h } = Ex(t, n, r, i, u);
  for (let m = 0; m < o.length; m++) {
    let { key: g, match: x, controller: I } = o[m];
    re(
      a !== void 0 && a[m] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let T = a[m];
    if (!(I && I.signal.aborted))
      if (vi(T)) {
        let k = Ao(e.matches, x == null ? void 0 : x.route.id);
        (h && h[k.route.id]) || (h = Ae({}, h, { [k.route.id]: T.error })),
          e.fetchers.delete(g);
      } else if (Cr(T)) re(!1, 'Unhandled fetcher revalidation redirect');
      else if (_r(T)) re(!1, 'Unhandled fetcher deferred data');
      else {
        let k = jn(T.data);
        e.fetchers.set(g, k);
      }
  }
  return { loaderData: c, errors: h };
}
function Ih(e, t, n, r) {
  let i = Ae({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function Ao(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Th(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function Tt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        i && n && r
          ? (u =
              'You made a ' +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (u = 'defer() is not supported in actions')
          : o === 'invalid-body' && (u = 'Unable to encode submission body'))
      : e === 403
      ? ((a = 'Forbidden'),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        i && n && r
          ? (u =
              'You made a ' +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i && (u = 'Invalid request method "' + i.toUpperCase() + '"')),
    new ed(e || 500, a, new Error(u), !0)
  );
}
function Ph(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Cr(n)) return { result: n, idx: t };
  }
}
function Bg(e) {
  let t = typeof e == 'string' ? ar(e) : e;
  return Or(Ae({}, t, { hash: '' }));
}
function Sx(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function _r(e) {
  return e.type === Te.deferred;
}
function vi(e) {
  return e.type === Te.error;
}
function Cr(e) {
  return (e && e.type) === Te.redirect;
}
function bx(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function _x(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Cx(e) {
  return fx.has(e.toLowerCase());
}
function Ft(e) {
  return cx.has(e.toLowerCase());
}
async function Ah(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let u = n[a],
      c = t[a];
    if (!c) continue;
    let h = e.find((g) => g.route.id === c.route.id),
      m = h != null && !Ug(h, c) && (o && o[c.route.id]) !== void 0;
    if (_r(u) && (i || m)) {
      let g = r[a];
      re(g, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Fg(u, g, i).then((x) => {
          x && (n[a] = x || n[a]);
        });
    }
  }
}
async function Fg(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Te.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Te.error, error: i };
      }
    return { type: Te.data, data: e.deferredData.data };
  }
}
function td(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Gu(e, t) {
  let n = typeof t == 'string' ? ar(t).search : t.search;
  if (e[e.length - 1].route.index && td(n || '')) return e[e.length - 1];
  let r = Og(e);
  return r[r.length - 1];
}
function Rh(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function Vl(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function kx(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ho(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Ix(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function jn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Tx(e, t) {
  try {
    let n = e.sessionStorage.getItem(Mg);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Px(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Mg, JSON.stringify(n));
    } catch (r) {
      Mi(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Aa() {
  return (
    (Aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Aa.apply(this, arguments)
  );
}
const el = D.createContext(null),
  zg = D.createContext(null),
  Br = D.createContext(null),
  nd = D.createContext(null),
  Fr = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vg = D.createContext(null);
function Ax(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ss() || re(!1);
  let { basename: r, navigator: i } = D.useContext(Br),
    { hash: o, pathname: a, search: u } = $g(e, { relative: n }),
    c = a;
  return (
    r !== '/' && (c = a === '/' ? r : yn([r, a])),
    i.createHref({ pathname: c, search: u, hash: o })
  );
}
function ss() {
  return D.useContext(nd) != null;
}
function tl() {
  return ss() || re(!1), D.useContext(nd).location;
}
function Hg(e) {
  D.useContext(Br).static || D.useLayoutEffect(e);
}
function Wg() {
  let { isDataRoute: e } = D.useContext(Fr);
  return e ? zx() : Rx();
}
function Rx() {
  ss() || re(!1);
  let e = D.useContext(el),
    { basename: t, future: n, navigator: r } = D.useContext(Br),
    { matches: i } = D.useContext(Fr),
    { pathname: o } = tl(),
    a = JSON.stringify(Xc(i, n.v7_relativeSplatPath)),
    u = D.useRef(!1);
  return (
    Hg(() => {
      u.current = !0;
    }),
    D.useCallback(
      function (h, m) {
        if ((m === void 0 && (m = {}), !u.current)) return;
        if (typeof h == 'number') {
          r.go(h);
          return;
        }
        let g = Zc(h, JSON.parse(a), o, m.relative === 'path');
        e == null &&
          t !== '/' &&
          (g.pathname = g.pathname === '/' ? t : yn([t, g.pathname])),
          (m.replace ? r.replace : r.push)(g, m.state, m);
      },
      [t, r, a, o, e]
    )
  );
}
function $g(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = D.useContext(Br),
    { matches: i } = D.useContext(Fr),
    { pathname: o } = tl(),
    a = JSON.stringify(Xc(i, r.v7_relativeSplatPath));
  return D.useMemo(() => Zc(e, JSON.parse(a), o, n === 'path'), [e, a, o, n]);
}
function Nx(e, t, n, r) {
  ss() || re(!1);
  let { navigator: i } = D.useContext(Br),
    { matches: o } = D.useContext(Fr),
    a = o[o.length - 1],
    u = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : '/';
  a && a.route;
  let h = tl(),
    m;
  m = h;
  let g = m.pathname || '/',
    x = g;
  if (c !== '/') {
    let k = c.replace(/^\//, '').split('/');
    x = '/' + g.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let I = gi(e, { pathname: x });
  return Mx(
    I &&
      I.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, u, k.params),
          pathname: yn([
            c,
            i.encodeLocation
              ? i.encodeLocation(k.pathname).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === '/'
              ? c
              : yn([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(k.pathnameBase).pathname
                    : k.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Ox() {
  let e = Fx(),
    t = Lg(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return D.createElement(
    D.Fragment,
    null,
    D.createElement('h2', null, 'Unexpected Application Error!'),
    D.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? D.createElement('pre', { style: i }, n) : null,
    null
  );
}
const Lx = D.createElement(Ox, null);
class jx extends D.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? D.createElement(
          Fr.Provider,
          { value: this.props.routeContext },
          D.createElement(Vg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Dx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = D.useContext(el);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    D.createElement(Fr.Provider, { value: t }, r)
  );
}
function Mx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let a = e,
    u = (i = n) == null ? void 0 : i.errors;
  if (u != null) {
    let m = a.findIndex(
      (g) => g.route.id && (u == null ? void 0 : u[g.route.id])
    );
    m >= 0 || re(!1), (a = a.slice(0, Math.min(a.length, m + 1)));
  }
  let c = !1,
    h = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < a.length; m++) {
      let g = a[m];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (h = m),
        g.route.id)
      ) {
        let { loaderData: x, errors: I } = n,
          T =
            g.route.loader &&
            x[g.route.id] === void 0 &&
            (!I || I[g.route.id] === void 0);
        if (g.route.lazy || T) {
          (c = !0), h >= 0 ? (a = a.slice(0, h + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((m, g, x) => {
    let I,
      T = !1,
      k = null,
      L = null;
    n &&
      ((I = u && g.route.id ? u[g.route.id] : void 0),
      (k = g.route.errorElement || Lx),
      c &&
        (h < 0 && x === 0
          ? (Vx('route-fallback'), (T = !0), (L = null))
          : h === x &&
            ((T = !0), (L = g.route.hydrateFallbackElement || null))));
    let y = t.concat(a.slice(0, x + 1)),
      v = () => {
        let E;
        return (
          I
            ? (E = k)
            : T
            ? (E = L)
            : g.route.Component
            ? (E = D.createElement(g.route.Component, null))
            : g.route.element
            ? (E = g.route.element)
            : (E = m),
          D.createElement(Dx, {
            match: g,
            routeContext: { outlet: m, matches: y, isDataRoute: n != null },
            children: E,
          })
        );
      };
    return n && (g.route.ErrorBoundary || g.route.errorElement || x === 0)
      ? D.createElement(jx, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: I,
          children: v(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var Gg = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Gg || {}),
  Ui = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ui || {});
function Ux(e) {
  let t = D.useContext(el);
  return t || re(!1), t;
}
function Kg(e) {
  let t = D.useContext(zg);
  return t || re(!1), t;
}
function Bx(e) {
  let t = D.useContext(Fr);
  return t || re(!1), t;
}
function rd(e) {
  let t = Bx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || re(!1), n.route.id;
}
function id() {
  let e = Kg(Ui.UseLoaderData),
    t = rd(Ui.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function Fx() {
  var e;
  let t = D.useContext(Vg),
    n = Kg(Ui.UseRouteError),
    r = rd(Ui.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function zx() {
  let { router: e } = Ux(Gg.UseNavigateStable),
    t = rd(Ui.UseNavigateStable),
    n = D.useRef(!1);
  return (
    Hg(() => {
      n.current = !0;
    }),
    D.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Aa({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Nh = {};
function Vx(e, t, n) {
  Nh[e] || (Nh[e] = !0);
}
function Hx(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = je.Pop,
    navigator: o,
    static: a = !1,
    future: u,
  } = e;
  ss() && re(!1);
  let c = t.replace(/^\/*/, '/'),
    h = D.useMemo(
      () => ({
        basename: c,
        navigator: o,
        static: a,
        future: Aa({ v7_relativeSplatPath: !1 }, u),
      }),
      [c, u, o, a]
    );
  typeof r == 'string' && (r = ar(r));
  let {
      pathname: m = '/',
      search: g = '',
      hash: x = '',
      state: I = null,
      key: T = 'default',
    } = r,
    k = D.useMemo(() => {
      let L = Hi(m, c);
      return L == null
        ? null
        : {
            location: { pathname: L, search: g, hash: x, state: I, key: T },
            navigationType: i,
          };
    }, [c, m, g, x, I, T, i]);
  return k == null
    ? null
    : D.createElement(
        Br.Provider,
        { value: h },
        D.createElement(nd.Provider, { children: n, value: k })
      );
}
new Promise(() => {});
function Wx(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: D.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: D.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: D.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yo() {
  return (
    (Yo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yo.apply(this, arguments)
  );
}
function $x(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Gx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Kx(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Gx(e);
}
const Qx = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  qx = '6';
try {
  window.__reactRouterVersion = qx;
} catch {}
function Yx(e, t) {
  return vx({
    basename: void 0,
    future: Yo({}, void 0, { v7_prependBasename: !0 }),
    history: F2({ window: void 0 }),
    hydrationData: Jx(),
    routes: e,
    mapRouteProperties: Wx,
    window: void 0,
  }).initialize();
}
function Jx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Yo({}, t, { errors: Xx(t.errors) })), t;
}
function Xx(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new ed(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == 'function')
          try {
            let a = new o(i.message);
            (a.stack = ''), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Zx = D.createContext({ isTransitioning: !1 }),
  eE = D.createContext(new Map()),
  tE = 'startTransition',
  Oh = g0[tE],
  nE = 'flushSync',
  Lh = I2[nE];
function rE(e) {
  Oh ? Oh(e) : e();
}
function po(e) {
  Lh ? Lh(e) : e();
}
let iE = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function oE(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = D.useState(n.state),
    [a, u] = D.useState(),
    [c, h] = D.useState({ isTransitioning: !1 }),
    [m, g] = D.useState(),
    [x, I] = D.useState(),
    [T, k] = D.useState(),
    L = D.useRef(new Map()),
    { v7_startTransition: y } = r || {},
    v = D.useCallback(
      (O) => {
        y ? rE(O) : O();
      },
      [y]
    ),
    E = D.useCallback(
      (O, B) => {
        let {
          deletedFetchers: H,
          unstable_flushSync: Q,
          unstable_viewTransitionOpts: oe,
        } = B;
        H.forEach((ke) => L.current.delete(ke)),
          O.fetchers.forEach((ke, ct) => {
            ke.data !== void 0 && L.current.set(ct, ke.data);
          });
        let Se =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!oe || Se) {
          Q ? po(() => o(O)) : v(() => o(O));
          return;
        }
        if (Q) {
          po(() => {
            x && (m && m.resolve(), x.skipTransition()),
              h({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: oe.currentLocation,
                nextLocation: oe.nextLocation,
              });
          });
          let ke = n.window.document.startViewTransition(() => {
            po(() => o(O));
          });
          ke.finished.finally(() => {
            po(() => {
              g(void 0), I(void 0), u(void 0), h({ isTransitioning: !1 });
            });
          }),
            po(() => I(ke));
          return;
        }
        x
          ? (m && m.resolve(),
            x.skipTransition(),
            k({
              state: O,
              currentLocation: oe.currentLocation,
              nextLocation: oe.nextLocation,
            }))
          : (u(O),
            h({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: oe.currentLocation,
              nextLocation: oe.nextLocation,
            }));
      },
      [n.window, x, m, L, v]
    );
  D.useLayoutEffect(() => n.subscribe(E), [n, E]),
    D.useEffect(() => {
      c.isTransitioning && !c.flushSync && g(new iE());
    }, [c]),
    D.useEffect(() => {
      if (m && a && n.window) {
        let O = a,
          B = m.promise,
          H = n.window.document.startViewTransition(async () => {
            v(() => o(O)), await B;
          });
        H.finished.finally(() => {
          g(void 0), I(void 0), u(void 0), h({ isTransitioning: !1 });
        }),
          I(H);
      }
    }, [v, a, m, n.window]),
    D.useEffect(() => {
      m && a && i.location.key === a.location.key && m.resolve();
    }, [m, x, i.location, a]),
    D.useEffect(() => {
      !c.isTransitioning &&
        T &&
        (u(T.state),
        h({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: T.currentLocation,
          nextLocation: T.nextLocation,
        }),
        k(void 0));
    }, [c.isTransitioning, T]),
    D.useEffect(() => {}, []);
  let R = D.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (O) => n.navigate(O),
        push: (O, B, H) =>
          n.navigate(O, {
            state: B,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
        replace: (O, B, H) =>
          n.navigate(O, {
            replace: !0,
            state: B,
            preventScrollReset: H == null ? void 0 : H.preventScrollReset,
          }),
      }),
      [n]
    ),
    M = n.basename || '/',
    S = D.useMemo(
      () => ({ router: n, navigator: R, static: !1, basename: M }),
      [n, R, M]
    );
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      el.Provider,
      { value: S },
      D.createElement(
        zg.Provider,
        { value: i },
        D.createElement(
          eE.Provider,
          { value: L.current },
          D.createElement(
            Zx.Provider,
            { value: c },
            D.createElement(
              Hx,
              {
                basename: M,
                location: i.location,
                navigationType: i.historyAction,
                navigator: R,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              i.initialized || n.future.v7_partialHydration
                ? D.createElement(sE, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function sE(e) {
  let { routes: t, future: n, state: r } = e;
  return Nx(t, void 0, r, n);
}
const aE =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  lE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cn = D.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: u,
        target: c,
        to: h,
        preventScrollReset: m,
        unstable_viewTransition: g,
      } = t,
      x = $x(t, Qx),
      { basename: I } = D.useContext(Br),
      T,
      k = !1;
    if (typeof h == 'string' && lE.test(h) && ((T = h), aE))
      try {
        let E = new URL(window.location.href),
          R = h.startsWith('//') ? new URL(E.protocol + h) : new URL(h),
          M = Hi(R.pathname, I);
        R.origin === E.origin && M != null
          ? (h = M + R.search + R.hash)
          : (k = !0);
      } catch {}
    let L = Ax(h, { relative: i }),
      y = uE(h, {
        replace: a,
        state: u,
        target: c,
        preventScrollReset: m,
        relative: i,
        unstable_viewTransition: g,
      });
    function v(E) {
      r && r(E), E.defaultPrevented || y(E);
    }
    return D.createElement(
      'a',
      Yo({}, x, { href: T || L, onClick: k || o ? r : v, ref: n, target: c })
    );
  });
var jh;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(jh || (jh = {}));
var Dh;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Dh || (Dh = {}));
function uE(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    c = Wg(),
    h = tl(),
    m = $g(e, { relative: a });
  return D.useCallback(
    (g) => {
      if (Kx(g, n)) {
        g.preventDefault();
        let x = r !== void 0 ? r : Or(h) === Or(m);
        c(e, {
          replace: x,
          state: i,
          preventScrollReset: o,
          relative: a,
          unstable_viewTransition: u,
        });
      }
    },
    [h, c, m, r, i, n, e, o, a, u]
  );
}
function cE({ coffee: e, handleDeleteCoffee: t }) {
  const { photo: n, name: r, chef: i, _id: o } = e;
  return p.jsx('div', {
    children: p.jsxs('div', {
      className: 'card card-side bg-[#F5F4F1] p-2 border-2 border-gray-200',
      children: [
        p.jsx('figure', {
          children: p.jsx('img', {
            src: n,
            className: 'size-60',
            alt: 'Movie',
          }),
        }),
        p.jsxs('div', {
          className: 'flex items-center',
          children: [
            p.jsxs('div', {
              className: 'card-body',
              children: [
                p.jsx('h2', { className: 'card-title', children: r }),
                p.jsxs('p', { children: ['Chef : ', i] }),
                p.jsxs('p', { children: ['Price : $', 36] }),
              ],
            }),
            p.jsxs('div', {
              className: 'join join-vertical ',
              children: [
                p.jsx(Cn, {
                  to: `/coffees/${o}`,
                  children: p.jsx('button', {
                    className: 'btn join-item bg-[#D2B48C]',
                    children: p.jsx(M2, { className: 'text-white text-2xl' }),
                  }),
                }),
                p.jsx(Cn, {
                  to: `/update-coffee/${o}`,
                  children: p.jsx('button', {
                    className: 'btn join-item bg-[#3C393B]',
                    children: p.jsx(U2, { className: 'text-white text-2xl' }),
                  }),
                }),
                p.jsx('button', {
                  className: 'btn join-item bg-[#EA4744]',
                  onClick: () => t(o),
                  children: p.jsx(Pg, { className: 'text-white text-2xl' }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function dE() {
  const [e, t] = D.useState([]);
  D.useEffect(() => {
    fetch('http://localhost:5000/coffees')
      .then((r) => r.json())
      .then((r) => t(r));
  }, []);
  const n = (r) => {
    Di.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: !0,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((i) => {
      i.isConfirmed &&
        fetch(`http://localhost:5000/coffees/${r}`, { method: 'DELETE' })
          .then((o) => o.json())
          .then((o) => {
            console.log(o),
              Di.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            const a = e.filter((u) => u._id !== r);
            t(a);
          });
    });
  };
  return p.jsx(p.Fragment, {
    children: p.jsxs('div', {
      style: { backgroundImage: `url(${D2})` },
      className: 'bg-no-repeat bg-cover h-[800px]',
      children: [
        p.jsxs('article', {
          className: 'text-center py-6',
          children: [
            p.jsx('p', {
              className: 'text-xl raleway text-[#1B1A1A]',
              children: '--- Sip & Savor ---',
            }),
            p.jsx('h1', {
              className:
                'my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl',
              children: 'Our Popular Products',
            }),
            p.jsx(Cn, {
              to: '/add-coffee',
              children: p.jsxs('button', {
                className:
                  'bg-[#E3B577] text-[#242222] px-4 text-2xl rounded btn rancho py-2',
                children: ['Add Coffee ', p.jsx(j2, {})],
              }),
            }),
          ],
        }),
        p.jsx('div', {
          className:
            'grid mb-24 gap-4 container mx-auto grid-cols-1 lg:grid-cols-2 ',
          children: e.map((r) =>
            p.jsx(cE, { handleDeleteCoffee: n, coffee: r }, r._id)
          ),
        }),
      ],
    }),
  });
}
function od(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z',
        },
        child: [],
      },
    ],
  })(e);
}
function fE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
        },
        child: [],
      },
    ],
  })(e);
}
const Qg = '/assets/logo1-BZpF6Q2Q.png';
function hE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z',
        },
        child: [],
      },
    ],
  })(e);
}
function pE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
        },
        child: [],
      },
    ],
  })(e);
}
function mE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
        child: [],
      },
    ],
  })(e);
}
function gE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
        },
        child: [],
      },
    ],
  })(e);
}
function vE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
        },
        child: [],
      },
    ],
  })(e);
}
function wE(e) {
  return jt({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z',
        },
        child: [],
      },
    ],
  })(e);
}
function nl() {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsxs('div', {
        className:
          'flex justify-center my-14 gap-24 flex-col items-center md:flex-row',
        children: [
          p.jsxs('div', {
            className: 'text-center',
            children: [
              p.jsx('img', {
                src: Qg,
                alt: '',
                className: 'w-16 mx-auto mb-4',
              }),
              p.jsx('h1', {
                className:
                  'text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mb-2',
                children: 'Espresso Emporium',
              }),
              p.jsx('p', {
                className: 'text-xl raleway text-[#1B1A1A] max-w-md mx-auto',
                children:
                  'Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.',
              }),
              p.jsxs('div', {
                className: 'flex justify-center mt-4',
                children: [
                  p.jsx(hE, { className: 'text-3xl mx-2' }),
                  p.jsx(gE, { className: 'text-3xl mx-2' }),
                  p.jsx(pE, { className: 'text-3xl mx-2' }),
                  p.jsx(mE, { className: 'text-3xl mx-2' }),
                ],
              }),
              p.jsx('h1', {
                className:
                  'text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mt-8',
                children: 'Get in Touch',
              }),
              p.jsxs('div', {
                className: 'mx-auto',
                children: [
                  p.jsxs('div', {
                    className:
                      'flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A] mt-4',
                    children: [
                      p.jsx(wE, {}),
                      p.jsx('span', { children: '+88 01533 333 333' }),
                    ],
                  }),
                  p.jsxs('div', {
                    className:
                      'flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A]',
                    children: [
                      p.jsx(vE, {}),
                      p.jsx('span', { children: 'coffee@emporium.com' }),
                    ],
                  }),
                  p.jsxs('div', {
                    className:
                      'flex items-center justify-center gap-2 text-xl raleway text-[#1B1A1A]',
                    children: [
                      p.jsx(fE, {}),
                      p.jsx('span', {
                        children: '72, Wall street, King Road, Dhaka',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          p.jsxs('div', {
            className: 'text-center',
            children: [
              p.jsx('h1', {
                className:
                  'text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl mb-4',
                children: 'Contact With Us',
              }),
              p.jsxs('form', {
                className: 'flex flex-col gap-6',
                children: [
                  p.jsx('input', {
                    type: 'text',
                    placeholder: 'Name',
                    className: 'w-96 p-4 border rounded',
                  }),
                  p.jsx('input', {
                    type: 'email',
                    placeholder: 'Email',
                    className: 'w-96 p-4 border rounded',
                  }),
                  p.jsx('textarea', {
                    name: 'message',
                    placeholder: 'Message',
                    rows: '4',
                    className: 'w-96 p-4 border rounded',
                  }),
                  p.jsx('button', {
                    className:
                      'bg-[#E3B577] text-[#242222] px-4 py-2 rounded btn rancho text-3xl',
                    children: 'Submit',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      p.jsx('footer', {
        className: 'footer footer-center p-4 bg-[#1B0B0B] text-white',
        children: p.jsx('aside', {
          children: p.jsx('p', {
            className: 'raleway',
            children:
              'Copyright © 2024 - All right reserved by Espresso Espresso',
          }),
        }),
      }),
    ],
  });
}
const yE = '/assets/3-DhOv5f0_.png';
function xE() {
  return p.jsxs('div', {
    className:
      'flex justify-between items-center h-[550px] bg-no-repeat bg-cover flex-col md:flex-row',
    style: { backgroundImage: `url(${yE})` },
    children: [
      p.jsx('div', {}),
      p.jsxs('article', {
        className: 'navbar-start ',
        children: [
          p.jsx('h1', {
            className: 'rancho text-5xl text-white',
            children: 'Would you like a Cup of Delicious Coffee?',
          }),
          p.jsxs('p', {
            className: 'raleway text-xl font-regular text-white my-4',
            children: [
              'It',
              p.jsx(p.Fragment, { children: '’' }),
              's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.',
            ],
          }),
          p.jsx(Cn, {
            to: '/login',
            children: p.jsx('button', {
              className:
                'bg-[#E3B577] text-[#242222] px-4 text-2xl rounded btn rancho',
              children: 'Login',
            }),
          }),
        ],
      }),
    ],
  });
}
function EE() {
  return p.jsxs('nav', {
    className: 'rancho flex items-center  justify-center bg-[#382828]',
    children: [
      p.jsx('img', { src: Qg, alt: 'Logo', className: 'w-16' }),
      p.jsx('span', {
        className: 'text-3xl font-medium text-white',
        children: 'Espresso Emporium',
      }),
    ],
  });
}
const SE = '/assets/Rectangle%209-CEO845hR.png',
  bE = '/assets/Rectangle%2010-g-SnOdB8.png',
  _E = '/assets/Rectangle%2011-D1pOs66-.png',
  CE = '/assets/Rectangle%2012-EVefrur3.png',
  kE = '/assets/Rectangle%2013-BeTgQ2tC.png',
  IE = '/assets/Rectangle%2014-BxDOLYVu.png',
  TE = '/assets/Rectangle%2015-Ca9fakYA.png',
  PE = '/assets/Rectangle%2016-zoGX0GvH.png';
function AE() {
  return p.jsxs('div', {
    children: [
      p.jsxs('article', {
        className: 'text-center',
        children: [
          p.jsx('p', {
            className: 'text-xl raleway text-[#1B1A1A]',
            children: 'Follow us Now',
          }),
          p.jsx('h1', {
            className:
              'my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl',
            children: 'Follow on Instagram',
          }),
        ],
      }),
      p.jsxs('div', {
        className:
          'grid  gap-6 w-full container mx-auto grid-cols-1  md:grid-cols-3 lg:grid-cols-4',
        children: [
          p.jsx('img', { src: SE, alt: '' }),
          p.jsx('img', { src: bE, alt: '' }),
          p.jsx('img', { src: _E, alt: '' }),
          p.jsx('img', { src: CE, alt: '' }),
          p.jsx('img', { src: kE, alt: '' }),
          p.jsx('img', { src: IE, alt: '' }),
          p.jsx('img', { src: TE, alt: '' }),
          p.jsx('img', { src: PE, alt: '' }),
        ],
      }),
    ],
  });
}
const RE =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAKlBMVEVHcEwzGhUyGRQzGRQzGRQyGRQzGRQyGRQyGRQzGRQzGRQyGRQyGRQ1GhVeQwD0AAAADXRSTlMA+qgTxW/bTjXtmINegXEnSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAqNJREFUWMO1V4uSwyAILOLb+P+/eyia58VGcrdz006vzQYWhM3nc48I7vMeLmf1BzQ651fReJ3oFUPW9SPqKA0D6WrIfLnK2cs16dH4nC0KaGK7u+Z3k/MiyUnlUO++cBhJlhNFA76Lomo0ooJRFKwt2hIISaUlNKRtU4MIU9UoCcNhdYhQ1VJJ1eH7M01RRwnTsq1lIpc+4IuaxyZSEhaLa+66RtKa1yxKvZdDX88ecSitgrr3T5BpQ51iyuWuK5UloyId+3Zto2ma4I+DQzYFnR99/FfghvtvrjgLYTfo+qWzid+G0MdM8x6O6wvIVR8inWiC7ojI+8Xw2wAWTjQgmm0+/xWNVRsWMQ3sdQIhDXU2hA6ALE8qosfyh6jeRGN2sxJeROMr3tI0LEwzvRNxTwNl9UiiMXUSEo1OKcXqgSQ0NO03iXGlaZttgsYyTaL0/EpjJ2lsjb5Fs9FMLtZtrbv1hNKO3UzR475L2wLk7VzynLR2bZ1zDpRTqAKp1TXMrOXmUl2oCpnyilOl8mx1KDUby5RV1dqVoTvlnhXnFNu4iaxPXA3eY49gm7ekeaMc16yWumSFj5Wp7UJ3Vt5369NWc3xcK9POse46+KKP2cbz05Tq5cUpl1Fj6iozO93MQ7+c+DwADWIoYyJbv78L4CNhFHdg3wqgl4EvuvWV/cEIVCSkxV+O7ZOiO2zFNgPxRtVCvWqgR5Evecjj1m/V+FkvjXkim43CEvyXCfBVH3LKX6eTIX30sO5lMNxlhK7B00jNwbhbUEIAxu/+c2yq3kyEoU27/CDeeL8pHDYcHZBkJEiwf+aLUiu/HLr58Zg4+QE674faa9kDqT5tlDJG9OzDhbOXFirn8mBPv6OM9Muh8FpQbvVLOztlAzxHsOpU3R9iJy2MwzDKiwAAAABJRU5ErkJggg==',
  NE =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAKlBMVEVHcEwzGRQzGRQyGRQyGRQyGRQyGRQzGRQyGRQyGRQyGRQyGRQzGRQ0GhX6hnhOAAAADXRSTlMA8peBQ63I3xlXLAprXCoRlAAAAAlwSFlzAAALEgAACxIB0t1+/AAAA8NJREFUWMOdWFeirCAMHVooYfa/3QeB0ASc+/xSkZSTk4Kfz/FyCsTXqoAY0p0A5T7/cUXxLZe19Uaov0uReR9AlVXvzF+lqLQpe+G8BDAx3+VX8k9Cgklb/PpWZ3sC/ijDGwIjlqdxlyeoTPxBUoCCq94tantZXA2/Kaym+rsUl+IB4QfgwluYH0GVxv3w1WKMxYHGCsnNjHaUoeMNd3PSlsZUJwVhgCZ7GSjYjeF3dFRfpqDYttHlAIrY1d2ICF/hOovtmIzobWexs6PzG2NMzyjpNgnS1+Utj0K7ixvoBO924ihHNVrpE8GCYPH6lKd9L9qNLa59FCjTtNirgroXB4j6ZYgJ41rKU9jaC42Dwj2kMKOSNt3ePVPUN0fUwMFBSn3rqzk47JjF+JU82hqsUqxiOZaX9VPdYE3yznTQAUmKCDkBaJtiX7bWBMbOjzFNL12RgplyAgcj5A6b5gtro8qbQi+qFOaeq9biPiF4uyzMICnEtyqF+Za2QzV/xz9OflOsgkKLYBcpGWM4IlytwSYmPQqfnoNapHzu1jA21SlKck/1bpbCTu2xaZFqAZU1yWYpnRDyymLffGZ75myumNxYjBP9qpylJjQj7izOIIVBjporVIdkz+KW4XHQIonJclYnLxmeieKfhUKuVc5yoU0+2Wv1m8qWEqNHfe1U/VqAqYiqpXp2lwpw+jx7Se4Mx5KuuaTnzmBeB4G4bzC+AXUfBlplo862FGSUzRG8ds2hh0caYMfmG4fm+9LDB2LSKCBM1C5dwUt69L2oxB/nG1RlJhbW1uG4N/WX+WZu8Wna/7bLyrAZGS6znxkUhSiNASOjxj/MfqVwf8F43C9/0tAu3idRcvs8+gZefR3R81Q8jr7YJnXkoRn2xXxJ4FTYyX29S15IIO1mhUeXMdMJBn3CWPp8gom1flGay7dAlSmIz1N2d55Cu61YI21ULzR8qOPTXV/bj0hDkxmH9GwQyJQN+aw58wluMYcxVWYI4kxc/T2n+GJqso0Dgg/98hj0FTiTbcNR/xwMEW4zOvZ98FmlskY8pucqf0Vx8PEW9KItHZjjDtNibUFcSx+e1nbfNQWWCMhE3GCHeYxLRIBdCQSa8jLbCNjnEQWzgUAK+cNnasWylrTQQJGJ6A79OTtnyteP1FLE2JyCkAXA/iBEpIM817oCwBosjDE0YgV9yJkUBoX9cOGP/2JoiJJwyODcOfhIge8n+mPlVwTu678FrsYHolPQr3131CjOtdZ/xY8/g/RVH9z77vTlpQ0FsSHU5x+W+TjOjBRmXQAAAABJRU5ErkJggg==',
  OE =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAMFBMVEVHcEwzGRQzGRQyGRUyGRQyGRQyGRQzGRQyGRQyGRQzGRQzGhUyGRQyGRQ1GxUzGhVVJxNzAAAADnRSTlMA0vPkvR0zXEYNq3eLnMWQBLcAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAN3SURBVFjDrVjZtoMgDDTsm+H///Ym1iqLgvZcnqqnhkyWycCyPFzeRSUFCgjR+eXHpZPM+F1ZruYXIz4JzDmjBADyiC0p99qKk5gJTvQMxhu7smc56HdWbGZPyBd7eGcVvRH2jZVIFoJjWLgWtslDTC98If8jB3klB1SRI34Oj1MkMsY9RPRT1WAf21F4QtGyxsF214eQMhyBXYzIuUy0wcPV8YL6O8IBRTktjnL4oBJdiz4g2iaNMDcTMNfVahDrz9QDWF4i9IZNbTdLP8eU+jKqd084rcLYRGKroyZaVFgzd1YUXR46nKnfq6u9fqPuHUVdTaoG4YFpQKH/wQzVjn1tpn/nZoxxERstu0hQ8tSkiKV+sPWV03XCu8a7CgQ5PWqFq/Kj3tS902Lojelp6aqUyPQ1cxobaVnXt+a1mQtvDA3ZfULSdGqI4q6wO9ZUHxPbbOK1djvraaYsbD6oZJ0xziZFD7ppxC55bd0Y+or6zOoBm3R805WSZSQfreBP/mvcuSjZVAWQag3B9KWTVRPPFhWUUSeSzelyxNQoCFVolELxgoPprvk4oxmMLpoN5zP5Isytoqga1NbPtiC/eG+Ftsi1HdoSfMHoR6x4hrrF304rslNs4gkW6OP3kW3632j0sQDIpbTSLOLs1woUNRaG5IWSpcwJTAMVB4lIIwu8BG9E7YQYPJUYivRFsniWWgikb86orTiCxNrIshpl0bgeypqesVJx4+nJ6MPeOSxjpVpTjCkAS0oRq0F974zmrPg90ACnUqclk66a5D4y9owh9eS6uKTkRkV0dLD+4ZRxLKK/FfKVEp6IyBnda/AOk9ea2DgBRyP4o3qGqjM1dEtUTMcL8aFQcOWUSIsfDNgyNPaMYpbB1gQxGviyIB3DVEwnLxXWNbopCZdLnE0ROQcVFd9xXL9Ohcosqu52nGmqwxuykuMbNXkZGz42uUFPTJTZnimTc3bDU9X4rLLXzTYA/KBBJ0eMz8yz7TjqnJkcwPQmPtS4KoyUs3MucaTTeaIC/fQigFCpOBXsT46T1Il4jympRwd3s90b3Hpt8OF5O+FIIPsA5imsaixWyuTNjQhgvrpxMOrdPYQnf3Lb3S68uT44bhzIUDQ7Cu0+VAwvb1cWB5/ho0IIiscq0Sj8UkxWlcOMqNj9WIgmBr50EhJUencP9ge4FixMKB72swAAAABJRU5ErkJggg==',
  LE =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAMFBMVEVHcEwyGRQzGRQyGRUzGhUzGRQzGRQzGRQzGhUzGRQyGRQzGRUyGRQyGRQyGRQ1GhXx96MPAAAAD3RSTlMAA98Zhcmn+T4M7LdXLnB29KgPAAAACXBIWXMAAAsSAAALEgHS3X78AAADJklEQVRYw7VYi5bjIAgNGmM0Mfz/3y6Yl6YGzO7ZOzOn7dQiwuWCHQYBMGzoPfLfNPwDbMQDfiajXwBwO7MiGkcwiGNhBj56MyEmfgwR3TdfhtXd8Oj3J/F8krHpdmhjjxqSci4YZvTRiIgeN9XMiLgOQQAkj4saG4MmKGscRqueiZgGGifJYXgnDIT9TCBiSHkrABAd1slFi14PHraR4NGMKhy5w4+2feJcPNiBfZH/jSJnustCaWtpm9nS/AHxzUz6Un3hzQzOSqqrtNv/7I13yxe8hfgzWmaSiSQBikhcYsFyEluVRRWV6LjBdgA4HyG8lC6pRJ/kwoTevkuAQ7O+842lM1nejheGN60A7gQSVpKjaA+3QVJQsa42blzsU5N6VZVPpBdb82dcyY11zVn1gkbmLrn2hHiuu2hDiUehLbDMBpZamhCkHpM6+RdzGUvldqpb87cQP7FxuqpXvyLKnQoWrZOduxmQOtnEogPVv/isUA81QS6aUwKrcK2TM27Zbu4T++Qh7tlX6clqjrCayzzxwgu0Ofi3FdtCLjLjjMfb/mNVy0yqJgGKOL2eSVcSOXUGX5sF9tGzqDnyJc65L/P4dh6kFcEn/+4cZN8j522LO+dclU+NEeGemPKmU27Xc/GONFHsG138y85wWjk+PDss12dF0bqOvfPviMAZHyj8tEYZ/qokLGgsv+b4HIJ3pNMrg11FCdo+XxrmLOLj+QbIojU8l7CZcX+Z+V8GbVPMXA7nDFEpcCeAITi8aaOybyhDwLQ5OJfIioOfNAgokulY5ugDiQZLDjdc7NNF6aIHHZAavj/q0tl7f6cO8iXRIZ8lI46FbAW901dlx91tMaxZthQ/sWW2RCBnbFdQqJI5qmYyKf6+ZRbCZaZlKlC9IDidNgPTVR/P1ds0UB58FOGfTehNuMS5L/S0xEK43lbILbMY3FKZ8cZtVL2xFvyDdSKvtumJRROtYuKiZZbpkZqJGjvMnOyCxdOF3PlfqLf5Wri4jOEnUWMP+87Ky1em5iW5R7SOLiR/GdM1SXFPnAR0fPvQM/FT6fZ9D0RFI6DZXf4AbphEhZalYKUAAAAASUVORK5CYII=';
function jE() {
  return p.jsxs('div', {
    className: 'flex justify-center py-6 bg-[#ECEAE3] gap-8',
    children: [
      p.jsxs('div', {
        children: [
          p.jsx('img', { src: RE, alt: '' }),
          p.jsx('h2', {
            className: 'text-2xl rancho',
            children: 'Awesome Aroma',
          }),
          p.jsx('p', {
            className: 'raleway font-normal text-[#1B1A1A] w-60',
            children:
              'You will definitely be a fan of the design & aroma of your coffee',
          }),
        ],
      }),
      p.jsxs('div', {
        children: [
          p.jsx('img', { src: NE, alt: '' }),
          p.jsx('h2', {
            className: 'text-2xl rancho',
            children: 'High Quality',
          }),
          p.jsx('p', {
            className: 'raleway font-normal text-[#1B1A1A] w-60',
            children:
              'We served the coffee to you maintaining the best quality',
          }),
        ],
      }),
      p.jsxs('div', {
        children: [
          p.jsx('img', { src: OE, alt: '' }),
          p.jsx('h2', {
            className: 'text-2xl rancho',
            children: 'Pure Grades',
          }),
          p.jsx('p', {
            className: 'raleway font-normal text-[#1B1A1A] w-60',
            children:
              'The coffee is made of the green coffee beans which you will love',
          }),
        ],
      }),
      p.jsxs('div', {
        children: [
          p.jsx('img', { src: LE, alt: '' }),
          p.jsx('h2', {
            className: 'text-2xl rancho',
            children: 'Proper Roasting',
          }),
          p.jsxs('p', {
            className: 'raleway font-normal text-[#1B1A1A] w-60',
            children: [
              'Your coffee is brewed by first roasting the green coffee beans',
              ' ',
            ],
          }),
        ],
      }),
    ],
  });
}
function DE() {
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(EE, {}),
      p.jsx(xE, {}),
      p.jsx(jE, {}),
      p.jsx(dE, {}),
      p.jsx(AE, {}),
      p.jsx(nl, {}),
    ],
  });
}
function ME() {
  const e = (t) => {
    t.preventDefault();
    const n = t.target,
      r = n.name.value,
      i = n.chef.value,
      o = n.supplier.value,
      a = n.taste.value,
      u = n.category.value,
      c = n.details.value,
      h = n.photo.value;
    fetch('http://localhost:5000/add-coffee', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: r,
        chef: i,
        supplier: o,
        taste: a,
        category: u,
        details: c,
        photo: h,
      }),
    })
      .then((g) => g.json())
      .then((g) => {
        console.log(g),
          Di.fire({ title: 'Success!', text: 'Coffee Added', icon: 'success' }),
          n.reset();
      });
  };
  return p.jsxs('div', {
    className: 'container mx-auto px-4 py-8',
    children: [
      p.jsx('div', {
        className: 'mb-8',
        children: p.jsxs(Cn, {
          to: '/',
          className: 'flex items-center gap-2 rancho text-3xl font-medium',
          children: [p.jsx(od, {}), ' Back to home'],
        }),
      }),
      p.jsxs('div', {
        className: 'bg-[#F4F3F0] p-12 rounded-xl',
        children: [
          p.jsx('h1', {
            className:
              'my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl text-center',
            children: 'Add New Coffee',
          }),
          p.jsx('p', {
            className: 'text-xl raleway text-[#1B1A1A] mb-8 text-center',
            children:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
          }),
          p.jsxs('form', {
            className: 'space-y-4',
            onSubmit: e,
            children: [
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Name ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'name',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Name',
                        required: !0,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Chef ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'chef',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Chef',
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Supplier ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'supplier',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Supplier',
                        required: !0,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Taste ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'taste',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Taste',
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Category ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'category',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Category',
                        required: !0,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Details ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'details',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Details',
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx('div', {
                children: p.jsxs('label', {
                  children: [
                    'Photo URL ',
                    p.jsx('br', {}),
                    p.jsx('input', {
                      type: 'url',
                      name: 'photo',
                      className: 'input input-primary block w-full',
                      placeholder: 'Enter Photo URL',
                      required: !0,
                    }),
                  ],
                }),
              }),
              p.jsx('div', {
                className: 'flex justify-center',
                children: p.jsx('input', {
                  type: 'submit',
                  value: 'Add Coffee',
                  className:
                    'bg-[#E3B577] text-[#242222] px-6 py-2 text-2xl rounded btn rancho hover:bg-yellow-500 transition-colors duration-300',
                }),
              }),
            ],
          }),
        ],
      }),
      p.jsx(nl, {}),
    ],
  });
}
function UE() {
  const e = id();
  console.log(e);
  const { photo: t, name: n, supplier: r, details: i } = e;
  return p.jsxs('div', {
    children: [
      p.jsx('div', {
        className: 'mb-8',
        children: p.jsxs(Cn, {
          to: '/',
          className: 'flex items-center gap-2 rancho text-3xl font-medium',
          children: [p.jsx(od, {}), ' Back to home'],
        }),
      }),
      p.jsx('div', {
        className: 'hero bg-base-200',
        children: p.jsxs('div', {
          className: 'hero-content flex-col lg:flex-row-reverse',
          children: [
            p.jsx('img', {
              src: t,
              className: 'max-w-sm rounded-lg shadow-2xl',
            }),
            p.jsxs('div', {
              children: [
                p.jsx('h1', { className: 'text-5xl font-bold', children: n }),
                p.jsx('p', { className: '', children: i }),
                p.jsxs('p', {
                  children: [
                    p.jsx('span', { className: 'font-bold', children: n }),
                    ' Supplied By the',
                    p.jsx(p.Fragment, { children: ' ' }),
                    ' ',
                    p.jsx('span', {
                      className: 'underline font-bold',
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      p.jsx(nl, {}),
    ],
  });
}
function BE() {
  const e = Wg(),
    t = id(),
    n = (r) => {
      r.preventDefault();
      const i = r.target,
        o = i.name.value,
        a = i.chef.value,
        u = i.supplier.value,
        c = i.taste.value,
        h = i.category.value,
        m = i.details.value,
        g = i.photo.value,
        x = {
          name: o,
          chef: a,
          supplier: u,
          taste: c,
          category: h,
          details: m,
          photo: g,
        };
      fetch(`http://localhost:5000/update-coffee/${t._id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(x),
      })
        .then((I) => I.json())
        .then((I) => {
          console.log(I),
            Di.fire({
              title: 'Success!',
              text: 'Coffee Data Updated',
              icon: 'success',
            }),
            i.reset(),
            e('/');
        });
    };
  return p.jsxs('div', {
    children: [
      p.jsx('div', {
        className: 'mb-8',
        children: p.jsxs(Cn, {
          to: '/',
          className: 'flex items-center gap-2 rancho text-3xl font-medium',
          children: [p.jsx(od, {}), ' Back to home'],
        }),
      }),
      p.jsxs('div', {
        className: 'bg-[#F4F3F0] p-12 rounded-xl',
        children: [
          p.jsxs('h1', {
            className:
              'my-2 text-[#331A15] rancho text-4xl font-bold drop-shadow-4xl text-center',
            children: ['Update ', t.name],
          }),
          p.jsx('p', {
            className: 'text-xl raleway text-[#1B1A1A] mb-8 text-center',
            children:
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.',
          }),
          p.jsxs('form', {
            className: 'space-y-4',
            onSubmit: n,
            children: [
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Name ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'name',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Name',
                        required: !0,
                        defaultValue: t.name,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Chef ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'chef',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Chef',
                        required: !0,
                        defaultValue: t.chef,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Supplier ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'supplier',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Supplier',
                        required: !0,
                        defaultValue: t.supplier,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Taste ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'taste',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Taste',
                        defaultValue: t.taste,
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                children: [
                  p.jsxs('label', {
                    children: [
                      'Category ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'category',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Category',
                        required: !0,
                        defaultValue: t.category,
                      }),
                    ],
                  }),
                  p.jsxs('label', {
                    children: [
                      'Details ',
                      p.jsx('br', {}),
                      p.jsx('input', {
                        type: 'text',
                        name: 'details',
                        className: 'input input-primary block w-full',
                        placeholder: 'Enter Coffee Details',
                        required: !0,
                        defaultValue: t.details,
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx('div', {
                children: p.jsxs('label', {
                  children: [
                    'Photo URL ',
                    p.jsx('br', {}),
                    p.jsx('input', {
                      type: 'url',
                      name: 'photo',
                      className: 'input input-primary block w-full',
                      placeholder: 'Enter Photo URL',
                      required: !0,
                      defaultValue: t.photo,
                    }),
                  ],
                }),
              }),
              p.jsx('div', {
                className: 'flex justify-center',
                children: p.jsx('input', {
                  type: 'submit',
                  value: 'Update Coffee Data',
                  className:
                    'bg-[#E3B577] text-[#242222] px-6 py-2 text-2xl rounded btn rancho hover:bg-yellow-500 transition-colors duration-300',
                }),
              }),
            ],
          }),
        ],
      }),
      p.jsx(nl, {}),
    ],
  });
}
var Mh = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qg = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  FE = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const o = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63));
      } else if (i > 239 && i < 365) {
        const o = e[n++],
          a = e[n++],
          u = e[n++],
          c =
            (((i & 7) << 18) | ((o & 63) << 12) | ((a & 63) << 6) | (u & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (c >> 10))),
          (t[r++] = String.fromCharCode(56320 + (c & 1023)));
      } else {
        const o = e[n++],
          a = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((o & 63) << 6) | (a & 63)
        );
      }
    }
    return t.join('');
  },
  Yg = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const o = e[i],
          a = i + 1 < e.length,
          u = a ? e[i + 1] : 0,
          c = i + 2 < e.length,
          h = c ? e[i + 2] : 0,
          m = o >> 2,
          g = ((o & 3) << 4) | (u >> 4);
        let x = ((u & 15) << 2) | (h >> 6),
          I = h & 63;
        c || ((I = 64), a || (x = 64)), r.push(n[m], n[g], n[x], n[I]);
      }
      return r.join('');
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(qg(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : FE(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const o = n[e.charAt(i++)],
          u = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const h = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const g = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, o == null || u == null || h == null || g == null))
          throw new zE();
        const x = (o << 2) | (u >> 4);
        if ((r.push(x), h !== 64)) {
          const I = ((u << 4) & 240) | (h >> 2);
          if ((r.push(I), g !== 64)) {
            const T = ((h << 6) & 192) | g;
            r.push(T);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class zE extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const VE = function (e) {
    const t = qg(e);
    return Yg.encodeByteArray(t, !0);
  },
  Jg = function (e) {
    return VE(e).replace(/\./g, '');
  },
  Xg = function (e) {
    try {
      return Yg.decodeString(e, !0);
    } catch (t) {
      console.error('base64Decode failed: ', t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function HE() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WE = () => HE().__FIREBASE_DEFAULTS__,
  $E = () => {
    if (typeof process > 'u' || typeof Mh > 'u') return;
    const e = Mh.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  GE = () => {
    if (typeof document > 'u') return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Xg(e[1]);
    return t && JSON.parse(t);
  },
  sd = () => {
    try {
      return WE() || $E() || GE();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  KE = (e) => {
    var t, n;
    return (n =
      (t = sd()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  Zg = () => {
    var e;
    return (e = sd()) === null || e === void 0 ? void 0 : e.config;
  },
  ev = (e) => {
    var t;
    return (t = sd()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QE {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == 'function' &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tt() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function qE() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())
  );
}
function YE() {
  const e =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
      ? browser.runtime
      : void 0;
  return typeof e == 'object' && e.id !== void 0;
}
function JE() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function XE() {
  const e = tt();
  return e.indexOf('MSIE ') >= 0 || e.indexOf('Trident/') >= 0;
}
function ZE() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function eS() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var o;
          t(
            ((o = i.error) === null || o === void 0 ? void 0 : o.message) || ''
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tS = 'FirebaseError';
class lr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = tS),
      Object.setPrototypeOf(this, lr.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, as.prototype.create);
  }
}
class as {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      o = this.errors[t],
      a = o ? nS(o, r) : 'Error',
      u = `${this.serviceName}: ${a} (${i}).`;
    return new lr(i, u, r);
  }
}
function nS(e, t) {
  return e.replace(rS, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const rS = /\{\$([^}]+)}/g;
function iS(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Ra(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const o = e[i],
      a = t[i];
    if (Uh(o) && Uh(a)) {
      if (!Ra(o, a)) return !1;
    } else if (o !== a) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Uh(e) {
  return e !== null && typeof e == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ls(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + '=' + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + '=' + encodeURIComponent(r));
  return t.length ? '&' + t.join('&') : '';
}
function yo(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, '')
      .split('&')
      .forEach((r) => {
        if (r) {
          const [i, o] = r.split('=');
          t[decodeURIComponent(i)] = decodeURIComponent(o);
        }
      }),
    t
  );
}
function xo(e) {
  const t = e.indexOf('?');
  if (!t) return '';
  const n = e.indexOf('#', t);
  return e.substring(t, n > 0 ? n : void 0);
}
function oS(e, t) {
  const n = new sS(e, t);
  return n.subscribe.bind(n);
}
class sS {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    aS(t, ['next', 'error', 'complete'])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = Hl),
      i.error === void 0 && (i.error = Hl),
      i.complete === void 0 && (i.complete = Hl);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      o
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function aS(e, t) {
  if (typeof e != 'object' || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == 'function') return !0;
  return !1;
}
function Hl() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zr(e) {
  return e && e._delegate ? e._delegate : e;
}
class Bi {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xr = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lS {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new QE();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (i) return null;
        throw o;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (cS(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: xr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(t = xr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => '_delete' in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = xr) {
    return this.instances.has(t);
  }
  getOptions(t = xr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [o, a] of this.instancesDeferred.entries()) {
      const u = this.normalizeInstanceIdentifier(o);
      r === u && a.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    o.add(t), this.onInitCallbacks.set(i, o);
    const a = this.instances.get(i);
    return (
      a && t(a, i),
      () => {
        o.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: uS(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = xr) {
    return this.component ? (this.component.multipleInstances ? t : xr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function uS(e) {
  return e === xr ? void 0 : e;
}
function cS(e) {
  return e.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dS {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new lS(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var me;
(function (e) {
  (e[(e.DEBUG = 0)] = 'DEBUG'),
    (e[(e.VERBOSE = 1)] = 'VERBOSE'),
    (e[(e.INFO = 2)] = 'INFO'),
    (e[(e.WARN = 3)] = 'WARN'),
    (e[(e.ERROR = 4)] = 'ERROR'),
    (e[(e.SILENT = 5)] = 'SILENT');
})(me || (me = {}));
const fS = {
    debug: me.DEBUG,
    verbose: me.VERBOSE,
    info: me.INFO,
    warn: me.WARN,
    error: me.ERROR,
    silent: me.SILENT,
  },
  hS = me.INFO,
  pS = {
    [me.DEBUG]: 'log',
    [me.VERBOSE]: 'log',
    [me.INFO]: 'info',
    [me.WARN]: 'warn',
    [me.ERROR]: 'error',
  },
  mS = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = pS[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class tv {
  constructor(t) {
    (this.name = t),
      (this._logLevel = hS),
      (this._logHandler = mS),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in me))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == 'string' ? fS[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, me.DEBUG, ...t),
      this._logHandler(this, me.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, me.VERBOSE, ...t),
      this._logHandler(this, me.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, me.INFO, ...t),
      this._logHandler(this, me.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, me.WARN, ...t),
      this._logHandler(this, me.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, me.ERROR, ...t),
      this._logHandler(this, me.ERROR, ...t);
  }
}
const gS = (e, t) => t.some((n) => e instanceof n);
let Bh, Fh;
function vS() {
  return (
    Bh ||
    (Bh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function wS() {
  return (
    Fh ||
    (Fh = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const nv = new WeakMap(),
  Ku = new WeakMap(),
  rv = new WeakMap(),
  Wl = new WeakMap(),
  ad = new WeakMap();
function yS(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('success', o), e.removeEventListener('error', a);
      },
      o = () => {
        n(er(e.result)), i();
      },
      a = () => {
        r(e.error), i();
      };
    e.addEventListener('success', o), e.addEventListener('error', a);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && nv.set(n, e);
      })
      .catch(() => {}),
    ad.set(t, e),
    t
  );
}
function xS(e) {
  if (Ku.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener('complete', o),
          e.removeEventListener('error', a),
          e.removeEventListener('abort', a);
      },
      o = () => {
        n(), i();
      },
      a = () => {
        r(e.error || new DOMException('AbortError', 'AbortError')), i();
      };
    e.addEventListener('complete', o),
      e.addEventListener('error', a),
      e.addEventListener('abort', a);
  });
  Ku.set(e, t);
}
let Qu = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === 'done') return Ku.get(e);
      if (t === 'objectStoreNames') return e.objectStoreNames || rv.get(e);
      if (t === 'store')
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return er(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === 'done' || t === 'store')
      ? !0
      : t in e;
  },
};
function ES(e) {
  Qu = e(Qu);
}
function SS(e) {
  return e === IDBDatabase.prototype.transaction &&
    !('objectStoreNames' in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call($l(this), t, ...n);
        return rv.set(r, t.sort ? t.sort() : [t]), er(r);
      }
    : wS().includes(e)
    ? function (...t) {
        return e.apply($l(this), t), er(nv.get(this));
      }
    : function (...t) {
        return er(e.apply($l(this), t));
      };
}
function bS(e) {
  return typeof e == 'function'
    ? SS(e)
    : (e instanceof IDBTransaction && xS(e),
      gS(e, vS()) ? new Proxy(e, Qu) : e);
}
function er(e) {
  if (e instanceof IDBRequest) return yS(e);
  if (Wl.has(e)) return Wl.get(e);
  const t = bS(e);
  return t !== e && (Wl.set(e, t), ad.set(t, e)), t;
}
const $l = (e) => ad.get(e);
function _S(e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
  const a = indexedDB.open(e, t),
    u = er(a);
  return (
    r &&
      a.addEventListener('upgradeneeded', (c) => {
        r(er(a.result), c.oldVersion, c.newVersion, er(a.transaction), c);
      }),
    n && a.addEventListener('blocked', (c) => n(c.oldVersion, c.newVersion, c)),
    u
      .then((c) => {
        o && c.addEventListener('close', () => o()),
          i &&
            c.addEventListener('versionchange', (h) =>
              i(h.oldVersion, h.newVersion, h)
            );
      })
      .catch(() => {}),
    u
  );
}
const CS = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
  kS = ['put', 'add', 'delete', 'clear'],
  Gl = new Map();
function zh(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return;
  if (Gl.get(t)) return Gl.get(t);
  const n = t.replace(/FromIndex$/, ''),
    r = t !== n,
    i = kS.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || CS.includes(n))
  )
    return;
  const o = async function (a, ...u) {
    const c = this.transaction(a, i ? 'readwrite' : 'readonly');
    let h = c.store;
    return (
      r && (h = h.index(u.shift())),
      (await Promise.all([h[n](...u), i && c.done]))[0]
    );
  };
  return Gl.set(t, o), o;
}
ES((e) => ({
  ...e,
  get: (t, n, r) => zh(t, n) || e.get(t, n, r),
  has: (t, n) => !!zh(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IS {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (TS(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(' ');
  }
}
function TS(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === 'VERSION';
}
const qu = '@firebase/app',
  Vh = '0.10.1';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lr = new tv('@firebase/app'),
  PS = '@firebase/app-compat',
  AS = '@firebase/analytics-compat',
  RS = '@firebase/analytics',
  NS = '@firebase/app-check-compat',
  OS = '@firebase/app-check',
  LS = '@firebase/auth',
  jS = '@firebase/auth-compat',
  DS = '@firebase/database',
  MS = '@firebase/database-compat',
  US = '@firebase/functions',
  BS = '@firebase/functions-compat',
  FS = '@firebase/installations',
  zS = '@firebase/installations-compat',
  VS = '@firebase/messaging',
  HS = '@firebase/messaging-compat',
  WS = '@firebase/performance',
  $S = '@firebase/performance-compat',
  GS = '@firebase/remote-config',
  KS = '@firebase/remote-config-compat',
  QS = '@firebase/storage',
  qS = '@firebase/storage-compat',
  YS = '@firebase/firestore',
  JS = '@firebase/firestore-compat',
  XS = 'firebase',
  ZS = '10.11.0';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yu = '[DEFAULT]',
  eb = {
    [qu]: 'fire-core',
    [PS]: 'fire-core-compat',
    [RS]: 'fire-analytics',
    [AS]: 'fire-analytics-compat',
    [OS]: 'fire-app-check',
    [NS]: 'fire-app-check-compat',
    [LS]: 'fire-auth',
    [jS]: 'fire-auth-compat',
    [DS]: 'fire-rtdb',
    [MS]: 'fire-rtdb-compat',
    [US]: 'fire-fn',
    [BS]: 'fire-fn-compat',
    [FS]: 'fire-iid',
    [zS]: 'fire-iid-compat',
    [VS]: 'fire-fcm',
    [HS]: 'fire-fcm-compat',
    [WS]: 'fire-perf',
    [$S]: 'fire-perf-compat',
    [GS]: 'fire-rc',
    [KS]: 'fire-rc-compat',
    [QS]: 'fire-gcs',
    [qS]: 'fire-gcs-compat',
    [YS]: 'fire-fst',
    [JS]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [XS]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Na = new Map(),
  tb = new Map(),
  Ju = new Map();
function Hh(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Lr.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Jo(e) {
  const t = e.name;
  if (Ju.has(t))
    return (
      Lr.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Ju.set(t, e);
  for (const n of Na.values()) Hh(n, e);
  for (const n of tb.values()) Hh(n, e);
  return !0;
}
function iv(e, t) {
  const n = e.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function Xt(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nb = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  tr = new as('app', 'Firebase', nb);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rb {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Bi('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw tr.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const us = ZS;
function ov(e, t = {}) {
  let n = e;
  typeof t != 'object' && (t = { name: t });
  const r = Object.assign({ name: Yu, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != 'string' || !i)
    throw tr.create('bad-app-name', { appName: String(i) });
  if ((n || (n = Zg()), !n)) throw tr.create('no-options');
  const o = Na.get(i);
  if (o) {
    if (Ra(n, o.options) && Ra(r, o.config)) return o;
    throw tr.create('duplicate-app', { appName: i });
  }
  const a = new dS(i);
  for (const c of Ju.values()) a.addComponent(c);
  const u = new rb(n, r, a);
  return Na.set(i, u), u;
}
function ib(e = Yu) {
  const t = Na.get(e);
  if (!t && e === Yu && Zg()) return ov();
  if (!t) throw tr.create('no-app', { appName: e });
  return t;
}
function Ci(e, t, n) {
  var r;
  let i = (r = eb[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const o = i.match(/\s|\//),
    a = t.match(/\s|\//);
  if (o || a) {
    const u = [`Unable to register library "${i}" with version "${t}":`];
    o &&
      u.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      o && a && u.push('and'),
      a &&
        u.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Lr.warn(u.join(' '));
    return;
  }
  Jo(new Bi(`${i}-version`, () => ({ library: i, version: t }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ob = 'firebase-heartbeat-database',
  sb = 1,
  Xo = 'firebase-heartbeat-store';
let Kl = null;
function sv() {
  return (
    Kl ||
      (Kl = _S(ob, sb, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Xo);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw tr.create('idb-open', { originalErrorMessage: e.message });
      })),
    Kl
  );
}
async function ab(e) {
  try {
    const n = (await sv()).transaction(Xo),
      r = await n.objectStore(Xo).get(av(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof lr) Lr.warn(t.message);
    else {
      const n = tr.create('idb-get', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Lr.warn(n.message);
    }
  }
}
async function Wh(e, t) {
  try {
    const r = (await sv()).transaction(Xo, 'readwrite');
    await r.objectStore(Xo).put(t, av(e)), await r.done;
  } catch (n) {
    if (n instanceof lr) Lr.warn(n.message);
    else {
      const r = tr.create('idb-set', {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Lr.warn(r.message);
    }
  }
}
function av(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lb = 1024,
  ub = 30 * 24 * 60 * 60 * 1e3;
class cb {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider('app').getImmediate();
    (this._storage = new fb(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider('platform-logger')
        .getImmediate()
        .getPlatformInfoString(),
      o = $h();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((a) => a.date === o)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: o, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((a) => {
            const u = new Date(a.date).valueOf();
            return Date.now() - u <= ub;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return '';
    const n = $h(),
      { heartbeatsToSend: r, unsentEntries: i } = db(
        this._heartbeatsCache.heartbeats
      ),
      o = Jg(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      o
    );
  }
}
function $h() {
  return new Date().toISOString().substring(0, 10);
}
function db(e, t = lb) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const o = n.find((a) => a.agent === i.agent);
    if (o) {
      if ((o.dates.push(i.date), Gh(n) > t)) {
        o.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Gh(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class fb {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return ZE()
      ? eS()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await ab(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Wh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Wh(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Gh(e) {
  return Jg(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hb(e) {
  Jo(new Bi('platform-logger', (t) => new IS(t), 'PRIVATE')),
    Jo(new Bi('heartbeat', (t) => new cb(t), 'PRIVATE')),
    Ci(qu, Vh, e),
    Ci(qu, Vh, 'esm2017'),
    Ci('fire-js', '');
}
hb('');
function ld(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function lv() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const pb = lv,
  uv = new as('auth', 'Firebase', lv());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oa = new tv('@firebase/auth');
function mb(e, ...t) {
  Oa.logLevel <= me.WARN && Oa.warn(`Auth (${us}): ${e}`, ...t);
}
function ea(e, ...t) {
  Oa.logLevel <= me.ERROR && Oa.error(`Auth (${us}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $t(e, ...t) {
  throw ud(e, ...t);
}
function tn(e, ...t) {
  return ud(e, ...t);
}
function cv(e, t, n) {
  const r = Object.assign(Object.assign({}, pb()), { [t]: n });
  return new as('auth', 'Firebase', r).create(t, { appName: e.name });
}
function xn(e) {
  return cv(
    e,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
  );
}
function ud(e, ...t) {
  if (typeof e != 'string') {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return uv.create(e, ...t);
}
function Y(e, t, ...n) {
  if (!e) throw ud(t, ...n);
}
function pn(e) {
  const t = 'INTERNAL ASSERTION FAILED: ' + e;
  throw (ea(t), new Error(t));
}
function kn(e, t) {
  e || pn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xu() {
  var e;
  return (
    (typeof self < 'u' &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ''
  );
}
function gb() {
  return Kh() === 'http:' || Kh() === 'https:';
}
function Kh() {
  var e;
  return (
    (typeof self < 'u' &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vb() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (gb() || YE() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function wb() {
  if (typeof navigator > 'u') return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cs {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      kn(n > t, 'Short delay should be less than long delay!'),
      (this.isMobile = qE() || JE());
  }
  get() {
    return vb()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cd(e, t) {
  kn(e.emulator, 'Emulator should always be set here');
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith('/') ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dv {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    pn(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    pn(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    pn(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yb = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xb = new cs(3e4, 6e4);
function ur(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function cr(e, t, n, r, i = {}) {
  return fv(e, i, async () => {
    let o = {},
      a = {};
    r && (t === 'GET' ? (a = r) : (o = { body: JSON.stringify(r) }));
    const u = ls(Object.assign({ key: e.config.apiKey }, a)).slice(1),
      c = await e._getAdditionalHeaders();
    return (
      (c['Content-Type'] = 'application/json'),
      e.languageCode && (c['X-Firebase-Locale'] = e.languageCode),
      dv.fetch()(
        hv(e, e.config.apiHost, n, u),
        Object.assign(
          { method: t, headers: c, referrerPolicy: 'no-referrer' },
          o
        )
      )
    );
  });
}
async function fv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, yb), t);
  try {
    const i = new Sb(e),
      o = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const a = await o.json();
    if ('needConfirmation' in a)
      throw zs(e, 'account-exists-with-different-credential', a);
    if (o.ok && !('errorMessage' in a)) return a;
    {
      const u = o.ok ? a.errorMessage : a.error.message,
        [c, h] = u.split(' : ');
      if (c === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw zs(e, 'credential-already-in-use', a);
      if (c === 'EMAIL_EXISTS') throw zs(e, 'email-already-in-use', a);
      if (c === 'USER_DISABLED') throw zs(e, 'user-disabled', a);
      const m = r[c] || c.toLowerCase().replace(/[_\s]+/g, '-');
      if (h) throw cv(e, m, h);
      $t(e, m);
    }
  } catch (i) {
    if (i instanceof lr) throw i;
    $t(e, 'network-request-failed', { message: String(i) });
  }
}
async function ds(e, t, n, r, i = {}) {
  const o = await cr(e, t, n, r, i);
  return (
    'mfaPendingCredential' in o &&
      $t(e, 'multi-factor-auth-required', { _serverResponse: o }),
    o
  );
}
function hv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? cd(e.config, i) : `${e.config.apiScheme}://${i}`;
}
function Eb(e) {
  switch (e) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class Sb {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(tn(this.auth, 'network-request-failed')),
          xb.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function zs(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = tn(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
function Qh(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class bb {
  constructor(t) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    (this.siteKey = t.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return Eb(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === 'ENFORCE' ||
      this.getProviderEnforcementState(t) === 'AUDIT'
    );
  }
}
async function _b(e, t) {
  return cr(e, 'GET', '/v2/recaptchaConfig', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cb(e, t) {
  return cr(e, 'POST', '/v1/accounts:delete', t);
}
async function pv(e, t) {
  return cr(e, 'POST', '/v1/accounts:lookup', t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ro(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function kb(e, t = !1) {
  const n = zr(e),
    r = await n.getIdToken(t),
    i = dd(r);
  Y(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error');
  const o = typeof i.firebase == 'object' ? i.firebase : void 0,
    a = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Ro(Ql(i.auth_time)),
    issuedAtTime: Ro(Ql(i.iat)),
    expirationTime: Ro(Ql(i.exp)),
    signInProvider: a || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
  };
}
function Ql(e) {
  return Number(e) * 1e3;
}
function dd(e) {
  const [t, n, r] = e.split('.');
  if (t === void 0 || n === void 0 || r === void 0)
    return ea('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = Xg(n);
    return i
      ? JSON.parse(i)
      : (ea('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return (
      ea(
        'Caught error parsing JWT payload as JSON',
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function qh(e) {
  const t = dd(e);
  return (
    Y(t, 'internal-error'),
    Y(typeof t.exp < 'u', 'internal-error'),
    Y(typeof t.iat < 'u', 'internal-error'),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Zo(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof lr &&
        Ib(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function Ib({ code: e }) {
  return e === 'auth/user-disabled' || e === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tb {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zu {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ro(this.lastLoginAt)),
      (this.creationTime = Ro(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function La(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Zo(e, pv(n, { idToken: r }));
  Y(i == null ? void 0 : i.users.length, n, 'internal-error');
  const o = i.users[0];
  e._notifyReloadListener(o);
  const a =
      !((t = o.providerUserInfo) === null || t === void 0) && t.length
        ? mv(o.providerUserInfo)
        : [],
    u = Ab(e.providerData, a),
    c = e.isAnonymous,
    h = !(e.email && o.passwordHash) && !(u != null && u.length),
    m = c ? h : !1,
    g = {
      uid: o.localId,
      displayName: o.displayName || null,
      photoURL: o.photoUrl || null,
      email: o.email || null,
      emailVerified: o.emailVerified || !1,
      phoneNumber: o.phoneNumber || null,
      tenantId: o.tenantId || null,
      providerData: u,
      metadata: new Zu(o.createdAt, o.lastLoginAt),
      isAnonymous: m,
    };
  Object.assign(e, g);
}
async function Pb(e) {
  const t = zr(e);
  await La(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function Ab(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function mv(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = ld(t, ['providerId']);
    return {
      providerId: n,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Rb(e, t) {
  const n = await fv(e, {}, async () => {
    const r = ls({ grant_type: 'refresh_token', refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: o } = e.config,
      a = hv(e, i, '/v1/token', `key=${o}`),
      u = await e._getAdditionalHeaders();
    return (
      (u['Content-Type'] = 'application/x-www-form-urlencoded'),
      dv.fetch()(a, { method: 'POST', headers: u, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function Nb(e, t) {
  return cr(e, 'POST', '/v2/accounts:revokeToken', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ki {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    Y(t.idToken, 'internal-error'),
      Y(typeof t.idToken < 'u', 'internal-error'),
      Y(typeof t.refreshToken < 'u', 'internal-error');
    const n =
      'expiresIn' in t && typeof t.expiresIn < 'u'
        ? Number(t.expiresIn)
        : qh(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    Y(t.length !== 0, 'internal-error');
    const n = qh(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (Y(this.refreshToken, t, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: o } = await Rb(t, n);
    this.updateTokensAndExpiration(r, i, Number(o));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: o } = n,
      a = new ki();
    return (
      r &&
        (Y(typeof r == 'string', 'internal-error', { appName: t }),
        (a.refreshToken = r)),
      i &&
        (Y(typeof i == 'string', 'internal-error', { appName: t }),
        (a.accessToken = i)),
      o &&
        (Y(typeof o == 'number', 'internal-error', { appName: t }),
        (a.expirationTime = o)),
      a
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new ki(), this.toJSON());
  }
  _performRefresh() {
    return pn('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ln(e, t) {
  Y(typeof e == 'string' || typeof e > 'u', 'internal-error', { appName: t });
}
class mn {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      o = ld(t, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new Tb(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = o.displayName || null),
      (this.email = o.email || null),
      (this.emailVerified = o.emailVerified || !1),
      (this.phoneNumber = o.phoneNumber || null),
      (this.photoURL = o.photoURL || null),
      (this.isAnonymous = o.isAnonymous || !1),
      (this.tenantId = o.tenantId || null),
      (this.providerData = o.providerData ? [...o.providerData] : []),
      (this.metadata = new Zu(o.createdAt || void 0, o.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Zo(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      Y(n, this.auth, 'internal-error'),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return kb(this, t);
  }
  reload() {
    return Pb(this);
  }
  _assign(t) {
    this !== t &&
      (Y(this.uid === t.uid, this.auth, 'internal-error'),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new mn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    Y(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await La(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Xt(this.auth.app)) return Promise.reject(xn(this.auth));
    const t = await this.getIdToken();
    return (
      await Zo(this, Cb(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(t, n) {
    var r, i, o, a, u, c, h, m;
    const g = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      x = (i = n.email) !== null && i !== void 0 ? i : void 0,
      I = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0,
      T = (a = n.photoURL) !== null && a !== void 0 ? a : void 0,
      k = (u = n.tenantId) !== null && u !== void 0 ? u : void 0,
      L = (c = n._redirectEventId) !== null && c !== void 0 ? c : void 0,
      y = (h = n.createdAt) !== null && h !== void 0 ? h : void 0,
      v = (m = n.lastLoginAt) !== null && m !== void 0 ? m : void 0,
      {
        uid: E,
        emailVerified: R,
        isAnonymous: M,
        providerData: S,
        stsTokenManager: O,
      } = n;
    Y(E && O, t, 'internal-error');
    const B = ki.fromJSON(this.name, O);
    Y(typeof E == 'string', t, 'internal-error'),
      Ln(g, t.name),
      Ln(x, t.name),
      Y(typeof R == 'boolean', t, 'internal-error'),
      Y(typeof M == 'boolean', t, 'internal-error'),
      Ln(I, t.name),
      Ln(T, t.name),
      Ln(k, t.name),
      Ln(L, t.name),
      Ln(y, t.name),
      Ln(v, t.name);
    const H = new mn({
      uid: E,
      auth: t,
      email: x,
      emailVerified: R,
      displayName: g,
      isAnonymous: M,
      photoURL: T,
      phoneNumber: I,
      tenantId: k,
      stsTokenManager: B,
      createdAt: y,
      lastLoginAt: v,
    });
    return (
      S &&
        Array.isArray(S) &&
        (H.providerData = S.map((Q) => Object.assign({}, Q))),
      L && (H._redirectEventId = L),
      H
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new ki();
    i.updateFromServerResponse(n);
    const o = new mn({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await La(o), o;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    Y(i.localId !== void 0, 'internal-error');
    const o = i.providerUserInfo !== void 0 ? mv(i.providerUserInfo) : [],
      a = !(i.email && i.passwordHash) && !(o != null && o.length),
      u = new ki();
    u.updateFromIdToken(r);
    const c = new mn({
        uid: i.localId,
        auth: t,
        stsTokenManager: u,
        isAnonymous: a,
      }),
      h = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: o,
        metadata: new Zu(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(o != null && o.length),
      };
    return Object.assign(c, h), c;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yh = new Map();
function gn(e) {
  kn(e instanceof Function, 'Expected a class definition');
  let t = Yh.get(e);
  return t
    ? (kn(t instanceof e, 'Instance stored in cache mismatched with class'), t)
    : ((t = new e()), Yh.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gv {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
gv.type = 'NONE';
const Jh = gv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ta(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Ii {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: o } = this.auth;
    (this.fullUserKey = ta(this.userKey, i.apiKey, o)),
      (this.fullPersistenceKey = ta('persistence', i.apiKey, o)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? mn._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = 'authUser') {
    if (!n.length) return new Ii(gn(Jh), t, r);
    const i = (
      await Promise.all(
        n.map(async (h) => {
          if (await h._isAvailable()) return h;
        })
      )
    ).filter((h) => h);
    let o = i[0] || gn(Jh);
    const a = ta(r, t.config.apiKey, t.name);
    let u = null;
    for (const h of n)
      try {
        const m = await h._get(a);
        if (m) {
          const g = mn._fromJSON(t, m);
          h !== o && (u = g), (o = h);
          break;
        }
      } catch {}
    const c = i.filter((h) => h._shouldAllowMigration);
    return !o._shouldAllowMigration || !c.length
      ? new Ii(o, t, r)
      : ((o = c[0]),
        u && (await o._set(a, u.toJSON())),
        await Promise.all(
          n.map(async (h) => {
            if (h !== o)
              try {
                await h._remove(a);
              } catch {}
          })
        ),
        new Ii(o, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xh(e) {
  const t = e.toLowerCase();
  if (t.includes('opera/') || t.includes('opr/') || t.includes('opios/'))
    return 'Opera';
  if (yv(t)) return 'IEMobile';
  if (t.includes('msie') || t.includes('trident/')) return 'IE';
  if (t.includes('edge/')) return 'Edge';
  if (vv(t)) return 'Firefox';
  if (t.includes('silk/')) return 'Silk';
  if (Ev(t)) return 'Blackberry';
  if (Sv(t)) return 'Webos';
  if (fd(t)) return 'Safari';
  if ((t.includes('chrome/') || wv(t)) && !t.includes('edge/')) return 'Chrome';
  if (xv(t)) return 'Android';
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function vv(e = tt()) {
  return /firefox\//i.test(e);
}
function fd(e = tt()) {
  const t = e.toLowerCase();
  return (
    t.includes('safari/') &&
    !t.includes('chrome/') &&
    !t.includes('crios/') &&
    !t.includes('android')
  );
}
function wv(e = tt()) {
  return /crios\//i.test(e);
}
function yv(e = tt()) {
  return /iemobile/i.test(e);
}
function xv(e = tt()) {
  return /android/i.test(e);
}
function Ev(e = tt()) {
  return /blackberry/i.test(e);
}
function Sv(e = tt()) {
  return /webos/i.test(e);
}
function rl(e = tt()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function Ob(e = tt()) {
  var t;
  return (
    rl(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function Lb() {
  return XE() && document.documentMode === 10;
}
function bv(e = tt()) {
  return rl(e) || xv(e) || Sv(e) || Ev(e) || /windows phone/i.test(e) || yv(e);
}
function jb() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _v(e, t = []) {
  let n;
  switch (e) {
    case 'Browser':
      n = Xh(tt());
      break;
    case 'Worker':
      n = `${Xh(tt())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(',') : 'FirebaseCore-web';
  return `${n}/JsCore/${us}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Db {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (o) =>
      new Promise((a, u) => {
        try {
          const c = t(o);
          a(c);
        } catch (c) {
          u(c);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Mb(e, t = {}) {
  return cr(e, 'GET', '/v2/passwordPolicy', ur(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ub = 6;
class Bb {
  constructor(t) {
    var n, r, i, o;
    const a = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = a.minPasswordLength) !== null && n !== void 0 ? n : Ub),
      a.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength),
      a.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          a.containsLowercaseCharacter),
      a.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          a.containsUppercaseCharacter),
      a.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          a.containsNumericCharacter),
      a.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          a.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && i !== void 0
          ? i
          : ''),
      (this.forceUpgradeOnSignin =
        (o = t.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, o, a, u;
    const c = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, c),
      this.validatePasswordCharacterOptions(t, c),
      c.isValid &&
        (c.isValid =
          (n = c.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      c.isValid &&
        (c.isValid =
          (r = c.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      c.isValid &&
        (c.isValid =
          (i = c.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      c.isValid &&
        (c.isValid =
          (o = c.containsUppercaseLetter) !== null && o !== void 0 ? o : !0),
      c.isValid &&
        (c.isValid =
          (a = c.containsNumericCharacter) !== null && a !== void 0 ? a : !0),
      c.isValid &&
        (c.isValid =
          (u = c.containsNonAlphanumericCharacter) !== null && u !== void 0
            ? u
            : !0),
      c
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, o) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fb {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Zh(this)),
      (this.idTokenSubscription = new Zh(this)),
      (this.beforeStateQueue = new Db(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = uv),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = gn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ii.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await pv(this, { idToken: t }),
        r = await mn._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (Xt(this.app)) {
      const a = this.app.settings.authIdToken;
      return a
        ? new Promise((u) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(a).then(u, u)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      o = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        u = i == null ? void 0 : i._redirectEventId,
        c = await this.tryRedirectSignIn(t);
      (!a || a === u) && c != null && c.user && ((i = c.user), (o = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (a) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(a)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      Y(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await La(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = wb();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (Xt(this.app)) return Promise.reject(xn(this));
    const n = t ? zr(t) : null;
    return (
      n &&
        Y(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token'
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && Y(this.tenantId === t.tenantId, this, 'tenant-id-mismatch'),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Xt(this.app)
      ? Promise.reject(xn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return Xt(this.app)
      ? Promise.reject(xn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(gn(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await Mb(this),
      n = new Bb(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new as('auth', 'Firebase', t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await Nb(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && gn(t)) || this._popupRedirectResolver;
      Y(n, this, 'argument-error'),
        (this.redirectPersistenceManager = await Ii.create(
          this,
          [gn(n._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const o = typeof n == 'function' ? n : n.next.bind(n);
    let a = !1;
    const u = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (Y(u, this, 'internal-error'),
      u.then(() => {
        a || o(this.currentUser);
      }),
      typeof n == 'function')
    ) {
      const c = t.addObserver(n, r, i);
      return () => {
        (a = !0), c();
      };
    } else {
      const c = t.addObserver(n);
      return () => {
        (a = !0), c();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      Y(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = _v(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n['X-Firebase-Client'] = r);
    const i = await this._getAppCheckToken();
    return i && (n['X-Firebase-AppCheck'] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        mb(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function Vr(e) {
  return zr(e);
}
class Zh {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = oS((n) => (this.observer = n)));
  }
  get next() {
    return (
      Y(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let il = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function zb(e) {
  il = e;
}
function Cv(e) {
  return il.loadJS(e);
}
function Vb() {
  return il.recaptchaEnterpriseScript;
}
function Hb() {
  return il.gapiScript;
}
function Wb(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const $b = 'recaptcha-enterprise',
  Gb = 'NO_RECAPTCHA';
class Kb {
  constructor(t) {
    (this.type = $b), (this.auth = Vr(t));
  }
  async verify(t = 'verify', n = !1) {
    async function r(o) {
      if (!n) {
        if (o.tenantId == null && o._agentRecaptchaConfig != null)
          return o._agentRecaptchaConfig.siteKey;
        if (
          o.tenantId != null &&
          o._tenantRecaptchaConfigs[o.tenantId] !== void 0
        )
          return o._tenantRecaptchaConfigs[o.tenantId].siteKey;
      }
      return new Promise(async (a, u) => {
        _b(o, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((c) => {
            if (c.recaptchaKey === void 0)
              u(new Error('recaptcha Enterprise site key undefined'));
            else {
              const h = new bb(c);
              return (
                o.tenantId == null
                  ? (o._agentRecaptchaConfig = h)
                  : (o._tenantRecaptchaConfigs[o.tenantId] = h),
                a(h.siteKey)
              );
            }
          })
          .catch((c) => {
            u(c);
          });
      });
    }
    function i(o, a, u) {
      const c = window.grecaptcha;
      Qh(c)
        ? c.enterprise.ready(() => {
            c.enterprise
              .execute(o, { action: t })
              .then((h) => {
                a(h);
              })
              .catch(() => {
                a(Gb);
              });
          })
        : u(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return new Promise((o, a) => {
      r(this.auth)
        .then((u) => {
          if (!n && Qh(window.grecaptcha)) i(u, o, a);
          else {
            if (typeof window > 'u') {
              a(new Error('RecaptchaVerifier is only supported in browser'));
              return;
            }
            let c = Vb();
            c.length !== 0 && (c += u),
              Cv(c)
                .then(() => {
                  i(u, o, a);
                })
                .catch((h) => {
                  a(h);
                });
          }
        })
        .catch((u) => {
          a(u);
        });
    });
  }
}
async function ep(e, t, n, r = !1) {
  const i = new Kb(e);
  let o;
  try {
    o = await i.verify(n);
  } catch {
    o = await i.verify(n, !0);
  }
  const a = Object.assign({}, t);
  return (
    r
      ? Object.assign(a, { captchaResp: o })
      : Object.assign(a, { captchaResponse: o }),
    Object.assign(a, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(a, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    a
  );
}
async function ec(e, t, n, r) {
  var i;
  if (
    !((i = e._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const o = await ep(e, t, n, n === 'getOobCode');
    return r(e, o);
  } else
    return r(e, t).catch(async (o) => {
      if (o.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const a = await ep(e, t, n, n === 'getOobCode');
        return r(e, a);
      } else return Promise.reject(o);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qb(e, t) {
  const n = iv(e, 'auth');
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      o = n.getOptions();
    if (Ra(o, t ?? {})) return i;
    $t(i, 'already-initialized');
  }
  return n.initialize({ options: t });
}
function qb(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(gn);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function Yb(e, t, n) {
  const r = Vr(e);
  Y(r._canInitEmulator, r, 'emulator-config-failed'),
    Y(/^https?:\/\//.test(t), r, 'invalid-emulator-scheme');
  const i = !1,
    o = kv(t),
    { host: a, port: u } = Jb(t),
    c = u === null ? '' : `:${u}`;
  (r.config.emulator = { url: `${o}//${a}${c}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: a,
      port: u,
      protocol: o.replace(':', ''),
      options: Object.freeze({ disableWarnings: i }),
    })),
    Xb();
}
function kv(e) {
  const t = e.indexOf(':');
  return t < 0 ? '' : e.substr(0, t + 1);
}
function Jb(e) {
  const t = kv(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: '', port: null };
  const r = n[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const o = i[1];
    return { host: o, port: tp(r.substr(o.length + 1)) };
  } else {
    const [o, a] = r.split(':');
    return { host: o, port: tp(a) };
  }
}
function tp(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function Xb() {
  function e() {
    const t = document.createElement('p'),
      n = t.style;
    (t.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (n.position = 'fixed'),
      (n.width = '100%'),
      (n.backgroundColor = '#ffffff'),
      (n.border = '.1em solid #000000'),
      (n.color = '#b50000'),
      (n.bottom = '0px'),
      (n.left = '0px'),
      (n.margin = '0px'),
      (n.zIndex = '10000'),
      (n.textAlign = 'center'),
      t.classList.add('firebase-emulator-warning'),
      document.body.appendChild(t);
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hd {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return pn('not implemented');
  }
  _getIdTokenResponse(t) {
    return pn('not implemented');
  }
  _linkToIdToken(t, n) {
    return pn('not implemented');
  }
  _getReauthenticationResolver(t) {
    return pn('not implemented');
  }
}
async function Zb(e, t) {
  return cr(e, 'POST', '/v1/accounts:signUp', t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e_(e, t) {
  return ds(e, 'POST', '/v1/accounts:signInWithPassword', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function t_(e, t) {
  return ds(e, 'POST', '/v1/accounts:signInWithEmailLink', ur(e, t));
}
async function n_(e, t) {
  return ds(e, 'POST', '/v1/accounts:signInWithEmailLink', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es extends hd {
  constructor(t, n, r, i = null) {
    super('password', r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(t, n) {
    return new es(t, n, 'password');
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new es(t, n, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const n = typeof t == 'string' ? JSON.parse(t) : t;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === 'password')
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === 'emailLink')
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case 'password':
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return ec(t, n, 'signInWithPassword', e_);
      case 'emailLink':
        return t_(t, { email: this._email, oobCode: this._password });
      default:
        $t(t, 'internal-error');
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return ec(t, r, 'signUpPassword', Zb);
      case 'emailLink':
        return n_(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        $t(t, 'internal-error');
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ti(e, t) {
  return ds(e, 'POST', '/v1/accounts:signInWithIdp', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const r_ = 'http://localhost';
class jr extends hd {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new jr(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : $t('argument-error'),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == 'string' ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      o = ld(n, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const a = new jr(r, i);
    return (
      (a.idToken = o.idToken || void 0),
      (a.accessToken = o.accessToken || void 0),
      (a.secret = o.secret),
      (a.nonce = o.nonce),
      (a.pendingToken = o.pendingToken || null),
      a
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Ti(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Ti(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Ti(t, n);
  }
  buildRequest() {
    const t = { requestUri: r_, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = ls(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i_(e) {
  switch (e) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function o_(e) {
  const t = yo(xo(e)).link,
    n = t ? yo(xo(t)).deep_link_id : null,
    r = yo(xo(e)).deep_link_id;
  return (r ? yo(xo(r)).link : null) || r || n || t || e;
}
class pd {
  constructor(t) {
    var n, r, i, o, a, u;
    const c = yo(xo(t)),
      h = (n = c.apiKey) !== null && n !== void 0 ? n : null,
      m = (r = c.oobCode) !== null && r !== void 0 ? r : null,
      g = i_((i = c.mode) !== null && i !== void 0 ? i : null);
    Y(h && m && g, 'argument-error'),
      (this.apiKey = h),
      (this.operation = g),
      (this.code = m),
      (this.continueUrl =
        (o = c.continueUrl) !== null && o !== void 0 ? o : null),
      (this.languageCode =
        (a = c.languageCode) !== null && a !== void 0 ? a : null),
      (this.tenantId = (u = c.tenantId) !== null && u !== void 0 ? u : null);
  }
  static parseLink(t) {
    const n = o_(t);
    try {
      return new pd(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wi {
  constructor() {
    this.providerId = Wi.PROVIDER_ID;
  }
  static credential(t, n) {
    return es._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = pd.parseLink(n);
    return Y(r, 'argument-error'), es._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
Wi.PROVIDER_ID = 'password';
Wi.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
Wi.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Iv {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fs extends Iv {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fn extends fs {
  constructor() {
    super('facebook.com');
  }
  static credential(t) {
    return jr._fromParams({
      providerId: Fn.PROVIDER_ID,
      signInMethod: Fn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Fn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Fn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null;
    try {
      return Fn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Fn.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
Fn.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zn extends fs {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(t, n) {
    return jr._fromParams({
      providerId: zn.PROVIDER_ID,
      signInMethod: zn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return zn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return zn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return zn.credential(n, r);
    } catch {
      return null;
    }
  }
}
zn.GOOGLE_SIGN_IN_METHOD = 'google.com';
zn.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vn extends fs {
  constructor() {
    super('github.com');
  }
  static credential(t) {
    return jr._fromParams({
      providerId: Vn.PROVIDER_ID,
      signInMethod: Vn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Vn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Vn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null;
    try {
      return Vn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Vn.GITHUB_SIGN_IN_METHOD = 'github.com';
Vn.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hn extends fs {
  constructor() {
    super('twitter.com');
  }
  static credential(t, n) {
    return jr._fromParams({
      providerId: Hn.PROVIDER_ID,
      signInMethod: Hn.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Hn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Hn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Hn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Hn.TWITTER_SIGN_IN_METHOD = 'twitter.com';
Hn.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function s_(e, t) {
  return ds(e, 'POST', '/v1/accounts:signUp', ur(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dr {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const o = await mn._fromIdTokenResponse(t, r, i),
      a = np(r);
    return new Dr({
      user: o,
      providerId: a,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = np(r);
    return new Dr({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function np(e) {
  return e.providerId ? e.providerId : 'phoneNumber' in e ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ja extends lr {
  constructor(t, n, r, i) {
    var o;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, ja.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new ja(t, n, r, i);
  }
}
function Tv(e, t, n, r) {
  return (
    t === 'reauthenticate'
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((o) => {
    throw o.code === 'auth/multi-factor-auth-required'
      ? ja._fromErrorAndOperation(e, o, t, r)
      : o;
  });
}
async function a_(e, t, n = !1) {
  const r = await Zo(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Dr._forOperation(e, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function l_(e, t, n = !1) {
  const { auth: r } = e;
  if (Xt(r.app)) return Promise.reject(xn(r));
  const i = 'reauthenticate';
  try {
    const o = await Zo(e, Tv(r, i, t, e), n);
    Y(o.idToken, r, 'internal-error');
    const a = dd(o.idToken);
    Y(a, r, 'internal-error');
    const { sub: u } = a;
    return Y(e.uid === u, r, 'user-mismatch'), Dr._forOperation(e, i, o);
  } catch (o) {
    throw (
      ((o == null ? void 0 : o.code) === 'auth/user-not-found' &&
        $t(r, 'user-mismatch'),
      o)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Pv(e, t, n = !1) {
  if (Xt(e.app)) return Promise.reject(xn(e));
  const r = 'signIn',
    i = await Tv(e, r, t),
    o = await Dr._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(o.user)), o;
}
async function u_(e, t) {
  return Pv(Vr(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Av(e) {
  const t = Vr(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function c_(e, t, n) {
  if (Xt(e.app)) return Promise.reject(xn(e));
  const r = Vr(e),
    a = await ec(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      s_
    ).catch((c) => {
      throw (c.code === 'auth/password-does-not-meet-requirements' && Av(e), c);
    }),
    u = await Dr._fromIdTokenResponse(r, 'signIn', a);
  return await r._updateCurrentUser(u.user), u;
}
function d_(e, t, n) {
  return Xt(e.app)
    ? Promise.reject(xn(e))
    : u_(zr(e), Wi.credential(t, n)).catch(async (r) => {
        throw (
          (r.code === 'auth/password-does-not-meet-requirements' && Av(e), r)
        );
      });
}
function f_(e, t, n, r) {
  return zr(e).onIdTokenChanged(t, n, r);
}
function h_(e, t, n) {
  return zr(e).beforeAuthStateChanged(t, n);
}
const Da = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Da, '1'),
          this.storage.removeItem(Da),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function p_() {
  const e = tt();
  return fd(e) || rl(e);
}
const m_ = 1e3,
  g_ = 10;
class Nv extends Rv {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = p_() && jb()),
      (this.fallbackToPolling = bv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((a, u, c) => {
        this.notifyListeners(a, c);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const a = this.storage.getItem(r);
      if (t.newValue !== a)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const a = this.storage.getItem(r);
        (!n && this.localCache[r] === a) || this.notifyListeners(r, a);
      },
      o = this.storage.getItem(r);
    Lb() && o !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, g_)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, m_));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
Nv.type = 'LOCAL';
const v_ = Nv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ov extends Rv {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Ov.type = 'SESSION';
const Lv = Ov;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w_(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ol {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new ol(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: o } = n.data,
      a = this.handlersMap[i];
    if (!(a != null && a.size)) return;
    n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
    const u = Array.from(a).map(async (h) => h(n.origin, o)),
      c = await w_(u);
    n.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: i,
      response: c,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
ol.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function md(e = '', t = 10) {
  let n = '';
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y_ {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener('message', t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!i) throw new Error('connection_unavailable');
    let o, a;
    return new Promise((u, c) => {
      const h = md('', 20);
      i.port1.start();
      const m = setTimeout(() => {
        c(new Error('unsupported_event'));
      }, r);
      (a = {
        messageChannel: i,
        onMessage(g) {
          const x = g;
          if (x.data.eventId === h)
            switch (x.data.status) {
              case 'ack':
                clearTimeout(m),
                  (o = setTimeout(() => {
                    c(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(o), u(x.data.response);
                break;
              default:
                clearTimeout(m),
                  clearTimeout(o),
                  c(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(a),
        i.port1.addEventListener('message', a.onMessage),
        this.target.postMessage({ eventType: t, eventId: h, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nn() {
  return window;
}
function x_(e) {
  nn().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jv() {
  return (
    typeof nn().WorkerGlobalScope < 'u' &&
    typeof nn().importScripts == 'function'
  );
}
async function E_() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function S_() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function b_() {
  return jv() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dv = 'firebaseLocalStorageDb',
  __ = 1,
  Ma = 'firebaseLocalStorage',
  Mv = 'fbase_key';
class hs {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener('success', () => {
        t(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          n(this.request.error);
        });
    });
  }
}
function sl(e, t) {
  return e.transaction([Ma], t ? 'readwrite' : 'readonly').objectStore(Ma);
}
function C_() {
  const e = indexedDB.deleteDatabase(Dv);
  return new hs(e).toPromise();
}
function tc() {
  const e = indexedDB.open(Dv, __);
  return new Promise((t, n) => {
    e.addEventListener('error', () => {
      n(e.error);
    }),
      e.addEventListener('upgradeneeded', () => {
        const r = e.result;
        try {
          r.createObjectStore(Ma, { keyPath: Mv });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener('success', async () => {
        const r = e.result;
        r.objectStoreNames.contains(Ma)
          ? t(r)
          : (r.close(), await C_(), t(await tc()));
      });
  });
}
async function rp(e, t, n) {
  const r = sl(e, !0).put({ [Mv]: t, value: n });
  return new hs(r).toPromise();
}
async function k_(e, t) {
  const n = sl(e, !1).get(t),
    r = await new hs(n).toPromise();
  return r === void 0 ? null : r.value;
}
function ip(e, t) {
  const n = sl(e, !0).delete(t);
  return new hs(n).toPromise();
}
const I_ = 800,
  T_ = 3;
class Uv {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await tc()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > T_) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return jv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ol._getInstance(b_())),
      this.receiver._subscribe('keyChanged', async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe('ping', async (t, n) => ['keyChanged']);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await E_()), !this.activeServiceWorker))
      return;
    this.sender = new y_(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        S_() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await tc();
      return await rp(t, Da, '1'), await ip(t, Da), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => rp(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => k_(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => ip(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const o = sl(i, !1).getAll();
      return new hs(o).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: o } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(o) &&
            (this.notifyListeners(i, o), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), I_));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Uv.type = 'LOCAL';
const P_ = Uv;
new cs(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A_(e, t) {
  return t
    ? gn(t)
    : (Y(e._popupRedirectResolver, e, 'argument-error'),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gd extends hd {
  constructor(t) {
    super('custom', 'custom'), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Ti(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Ti(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Ti(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function R_(e) {
  return Pv(e.auth, new gd(e), e.bypassAuthState);
}
function N_(e) {
  const { auth: t, user: n } = e;
  return Y(n, t, 'internal-error'), l_(n, new gd(e), e.bypassAuthState);
}
async function O_(e) {
  const { auth: t, user: n } = e;
  return Y(n, t, 'internal-error'), a_(n, new gd(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bv {
  constructor(t, n, r, i, o = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = o),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: o,
      error: a,
      type: u,
    } = t;
    if (a) {
      this.reject(a);
      return;
    }
    const c = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: o || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(u)(c));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return R_;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return O_;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return N_;
      default:
        $t(this.auth, 'internal-error');
    }
  }
  resolve(t) {
    kn(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    kn(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const L_ = new cs(2e3, 1e4);
class wi extends Bv {
  constructor(t, n, r, i, o) {
    super(t, n, i, o),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      wi.currentPopupAction && wi.currentPopupAction.cancel(),
      (wi.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return Y(t, this.auth, 'internal-error'), t;
  }
  async onExecution() {
    kn(this.filter.length === 1, 'Popup operations only handle one event');
    const t = md();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(tn(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(tn(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (wi.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(tn(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, L_.get());
    };
    t();
  }
}
wi.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const j_ = 'pendingRedirect',
  na = new Map();
class D_ extends Bv {
  constructor(t, n, r = !1) {
    super(
      t,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = na.get(this.auth._key());
    if (!t) {
      try {
        const r = (await M_(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      na.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        na.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === 'signInViaRedirect') return super.onAuthEvent(t);
    if (t.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function M_(e, t) {
  const n = F_(t),
    r = B_(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === 'true';
  return await r._remove(n), i;
}
function U_(e, t) {
  na.set(e._key(), t);
}
function B_(e) {
  return gn(e._redirectPersistence);
}
function F_(e) {
  return ta(j_, e.config.apiKey, e.name);
}
async function z_(e, t, n = !1) {
  if (Xt(e.app)) return Promise.reject(xn(e));
  const r = Vr(e),
    i = A_(r, t),
    a = await new D_(r, i, n).execute();
  return (
    a &&
      !n &&
      (delete a.user._redirectEventId,
      await r._persistUserIfCurrent(a.user),
      await r._setRedirectUser(null, t)),
    a
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const V_ = 10 * 60 * 1e3;
class H_ {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !W_(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Fv(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error';
      n.onError(tn(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= V_ &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(op(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(op(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function op(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join('-');
}
function Fv({ type: e, error: t }) {
  return (
    e === 'unknown' && (t == null ? void 0 : t.code) === 'auth/no-auth-event'
  );
}
function W_(e) {
  switch (e.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return Fv(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $_(e, t = {}) {
  return cr(e, 'GET', '/v1/projects', t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const G_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  K_ = /^https?/;
async function Q_(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await $_(e);
  for (const n of t)
    try {
      if (q_(n)) return;
    } catch {}
  $t(e, 'unauthorized-domain');
}
function q_(e) {
  const t = Xu(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith('chrome-extension://')) {
    const a = new URL(e);
    return a.hostname === '' && r === ''
      ? n === 'chrome-extension:' &&
          e.replace('chrome-extension://', '') ===
            t.replace('chrome-extension://', '')
      : n === 'chrome-extension:' && a.hostname === r;
  }
  if (!K_.test(n)) return !1;
  if (G_.test(e)) return r === e;
  const i = e.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Y_ = new cs(3e4, 6e4);
function sp() {
  const e = nn().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function J_(e) {
  return new Promise((t, n) => {
    var r, i, o;
    function a() {
      sp(),
        gapi.load('gapi.iframes', {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            sp(), n(tn(e, 'network-request-failed'));
          },
          timeout: Y_.get(),
        });
    }
    if (
      !(
        (i = (r = nn().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((o = nn().gapi) === null || o === void 0) && o.load) a();
    else {
      const u = Wb('iframefcb');
      return (
        (nn()[u] = () => {
          gapi.load ? a() : n(tn(e, 'network-request-failed'));
        }),
        Cv(`${Hb()}?onload=${u}`).catch((c) => n(c))
      );
    }
  }).catch((t) => {
    throw ((ra = null), t);
  });
}
let ra = null;
function X_(e) {
  return (ra = ra || J_(e)), ra;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Z_ = new cs(5e3, 15e3),
  eC = '__/auth/iframe',
  tC = 'emulator/auth/iframe',
  nC = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  rC = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function iC(e) {
  const t = e.config;
  Y(t.authDomain, e, 'auth-domain-config-required');
  const n = t.emulator ? cd(t, tC) : `https://${e.config.authDomain}/${eC}`,
    r = { apiKey: t.apiKey, appName: e.name, v: us },
    i = rC.get(e.config.apiHost);
  i && (r.eid = i);
  const o = e._getFrameworks();
  return o.length && (r.fw = o.join(',')), `${n}?${ls(r).slice(1)}`;
}
async function oC(e) {
  const t = await X_(e),
    n = nn().gapi;
  return (
    Y(n, e, 'internal-error'),
    t.open(
      {
        where: document.body,
        url: iC(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: nC,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, o) => {
          await r.restyle({ setHideOnLeave: !1 });
          const a = tn(e, 'network-request-failed'),
            u = nn().setTimeout(() => {
              o(a);
            }, Z_.get());
          function c() {
            nn().clearTimeout(u), i(r);
          }
          r.ping(c).then(c, () => {
            o(a);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sC = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  aC = 500,
  lC = 600,
  uC = '_blank',
  cC = 'http://localhost';
class ap {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function dC(e, t, n, r = aC, i = lC) {
  const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    a = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let u = '';
  const c = Object.assign(Object.assign({}, sC), {
      width: r.toString(),
      height: i.toString(),
      top: o,
      left: a,
    }),
    h = tt().toLowerCase();
  n && (u = wv(h) ? uC : n), vv(h) && ((t = t || cC), (c.scrollbars = 'yes'));
  const m = Object.entries(c).reduce((x, [I, T]) => `${x}${I}=${T},`, '');
  if (Ob(h) && u !== '_self') return fC(t || '', u), new ap(null);
  const g = window.open(t || '', u, m);
  Y(g, e, 'popup-blocked');
  try {
    g.focus();
  } catch {}
  return new ap(g);
}
function fC(e, t) {
  const n = document.createElement('a');
  (n.href = e), (n.target = t);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hC = '__/auth/handler',
  pC = 'emulator/auth/handler',
  mC = encodeURIComponent('fac');
async function lp(e, t, n, r, i, o) {
  Y(e.config.authDomain, e, 'auth-domain-config-required'),
    Y(e.config.apiKey, e, 'invalid-api-key');
  const a = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: us,
    eventId: i,
  };
  if (t instanceof Iv) {
    t.setDefaultLanguage(e.languageCode),
      (a.providerId = t.providerId || ''),
      iS(t.getCustomParameters()) ||
        (a.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [m, g] of Object.entries({})) a[m] = g;
  }
  if (t instanceof fs) {
    const m = t.getScopes().filter((g) => g !== '');
    m.length > 0 && (a.scopes = m.join(','));
  }
  e.tenantId && (a.tid = e.tenantId);
  const u = a;
  for (const m of Object.keys(u)) u[m] === void 0 && delete u[m];
  const c = await e._getAppCheckToken(),
    h = c ? `#${mC}=${encodeURIComponent(c)}` : '';
  return `${gC(e)}?${ls(u).slice(1)}${h}`;
}
function gC({ config: e }) {
  return e.emulator ? cd(e, pC) : `https://${e.authDomain}/${hC}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ql = 'webStorageSupport';
class vC {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Lv),
      (this._completeRedirectFn = z_),
      (this._overrideRedirectResult = U_);
  }
  async _openPopup(t, n, r, i) {
    var o;
    kn(
      (o = this.eventManagers[t._key()]) === null || o === void 0
        ? void 0
        : o.manager,
      '_initialize() not called before _openPopup()'
    );
    const a = await lp(t, n, r, Xu(), i);
    return dC(t, a, md());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const o = await lp(t, n, r, Xu(), i);
    return x_(o), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: o } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (kn(o, 'If manager is not set, promise should be'), o);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await oC(t),
      r = new H_(t);
    return (
      n.register(
        'authEvent',
        (i) => (
          Y(i == null ? void 0 : i.authEvent, t, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      ql,
      { type: ql },
      (i) => {
        var o;
        const a =
          (o = i == null ? void 0 : i[0]) === null || o === void 0
            ? void 0
            : o[ql];
        a !== void 0 && n(!!a), $t(t, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = Q_(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return bv() || fd() || rl();
  }
}
const wC = vC;
var up = '@firebase/auth',
  cp = '1.7.1';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yC {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    Y(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth'
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xC(e) {
  switch (e) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function EC(e) {
  Jo(
    new Bi(
      'auth',
      (t, { options: n }) => {
        const r = t.getProvider('app').getImmediate(),
          i = t.getProvider('heartbeat'),
          o = t.getProvider('app-check-internal'),
          { apiKey: a, authDomain: u } = r.options;
        Y(a && !a.includes(':'), 'invalid-api-key', { appName: r.name });
        const c = {
            apiKey: a,
            authDomain: u,
            clientPlatform: e,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: _v(e),
          },
          h = new Fb(r, i, o, c);
        return qb(h, n), h;
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider('auth-internal').initialize();
      })
  ),
    Jo(
      new Bi(
        'auth-internal',
        (t) => {
          const n = Vr(t.getProvider('auth').getImmediate());
          return ((r) => new yC(r))(n);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    Ci(up, cp, xC(e)),
    Ci(up, cp, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SC = 5 * 60,
  bC = ev('authIdTokenMaxAge') || SC;
let dp = null;
const _C = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > bC) return;
  const i = n == null ? void 0 : n.token;
  dp !== i &&
    ((dp = i),
    await fetch(e, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function CC(e = ib()) {
  const t = iv(e, 'auth');
  if (t.isInitialized()) return t.getImmediate();
  const n = Qb(e, { popupRedirectResolver: wC, persistence: [P_, v_, Lv] }),
    r = ev('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const o = new URL(r, location.origin);
    if (location.origin === o.origin) {
      const a = _C(o.toString());
      h_(n, a, () => a(n.currentUser)), f_(n, (u) => a(u));
    }
  }
  const i = KE('auth');
  return i && Yb(n, `http://${i}`), n;
}
function kC() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName('head')) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
zb({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement('script');
      r.setAttribute('src', e),
        (r.onload = t),
        (r.onerror = (i) => {
          const o = tn('internal-error');
          (o.customData = i), n(o);
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        kC().appendChild(r);
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
EC('Browser');
var IC = 'firebase',
  TC = '10.11.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Ci(IC, TC, 'app');
const PC = {
    apiKey: 'AIzaSyCcLQjjS3GIqroqITi61IKnda-V5zuhlNo',
    authDomain: 'phb9-coffee-store.firebaseapp.com',
    projectId: 'phb9-coffee-store',
    storageBucket: 'phb9-coffee-store.appspot.com',
    messagingSenderId: '703155949538',
    appId: '1:703155949538:web:2a4c3569d8af437db433bb',
  },
  AC = ov(PC),
  fp = CC(AC),
  vd = D.createContext(null);
function RC({ children: e }) {
  const [t, n] = D.useState(null),
    [r, i] = D.useState(!0),
    u = {
      user: t,
      loading: r,
      createUser: (c, h) => (i(!0), c_(fp, c, h)),
      signInUser: (c, h) => (i(!0), d_(fp, c, h)),
    };
  return p.jsx(vd.Provider, { value: u, children: e });
}
function NC() {
  const { signInUser: e } = D.useContext(vd),
    t = (n) => {
      n.preventDefault();
      const r = n.target,
        i = r.email.value,
        o = r.password.value;
      e(i, o)
        .then((a) => {
          var c, h;
          console.log(a.user);
          const u = {
            email: i,
            lastLoggedAt:
              (h = (c = a.user) == null ? void 0 : c.metadata) == null
                ? void 0
                : h.lastSignInTime,
          };
          fetch('http://localhost:5000/users', {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(u),
          })
            .then((m) => m.json())
            .then((m) => console.log(m));
        })
        .catch((a) => {
          console.log(a);
        });
    };
  return p.jsx('div', {
    children: p.jsxs('div', {
      className:
        'min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8',
      children: [
        p.jsxs('div', {
          className: 'sm:mx-auto sm:w-full sm:max-w-md',
          children: [
            p.jsx('h2', {
              className:
                'mt-6 text-center text-3xl font-extrabold text-gray-900',
              children: 'Sign in to your account',
            }),
            p.jsxs('p', {
              className: 'mt-2 text-center text-sm text-gray-600 max-w',
              children: [
                'Or ',
                p.jsx(p.Fragment, { children: ' ' }),
                p.jsx(Cn, {
                  to: '/register',
                  className: 'font-medium text-blue-600 hover:text-blue-500',
                  children: 'create an account',
                }),
              ],
            }),
          ],
        }),
        p.jsx('div', {
          className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md',
          children: p.jsxs('div', {
            className: 'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10',
            children: [
              p.jsxs('form', {
                className: 'space-y-6',
                onSubmit: t,
                children: [
                  p.jsxs('div', {
                    children: [
                      p.jsx('label', {
                        htmlFor: 'email',
                        className: 'block text-sm font-medium text-gray-700',
                        children: 'Email address',
                      }),
                      p.jsx('div', {
                        className: 'mt-1',
                        children: p.jsx('input', {
                          id: 'email',
                          name: 'email',
                          type: 'email',
                          autoComplete: 'email',
                          required: '',
                          className:
                            'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                          placeholder: 'Enter your email address',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    children: [
                      p.jsx('label', {
                        htmlFor: 'password',
                        className: 'block text-sm font-medium text-gray-700',
                        children: 'Password',
                      }),
                      p.jsx('div', {
                        className: 'mt-1',
                        children: p.jsx('input', {
                          id: 'password',
                          name: 'password',
                          type: 'password',
                          autoComplete: 'current-password',
                          required: '',
                          className:
                            'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                          placeholder: 'Enter your password',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      p.jsxs('div', {
                        className: 'flex items-center',
                        children: [
                          p.jsx('input', {
                            id: 'remember_me',
                            name: 'remember_me',
                            type: 'checkbox',
                            className:
                              'h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded',
                          }),
                          p.jsx('label', {
                            htmlFor: 'remember_me',
                            className: 'ml-2 block text-sm text-gray-900',
                            children: 'Remember me',
                          }),
                        ],
                      }),
                      p.jsx('div', {
                        className: 'text-sm',
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'font-medium text-blue-600 hover:text-blue-500',
                          children: 'Forgot your password?',
                        }),
                      }),
                    ],
                  }),
                  p.jsx('div', {
                    children: p.jsx('button', {
                      type: 'submit',
                      className:
                        'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                      children: 'Sign in',
                    }),
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'mt-6',
                children: [
                  p.jsxs('div', {
                    className: 'relative',
                    children: [
                      p.jsx('div', {
                        className: 'absolute inset-0 flex items-center',
                        children: p.jsx('div', {
                          className: 'w-full border-t border-gray-300',
                        }),
                      }),
                      p.jsx('div', {
                        className: 'relative flex justify-center text-sm',
                        children: p.jsx('span', {
                          className: 'px-2 bg-gray-100 text-gray-500',
                          children: 'Or continue with',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'mt-6 grid grid-cols-3 gap-3',
                    children: [
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-5 w-5',
                            src: 'https://www.svgrepo.com/show/512120/facebook-176.svg',
                            alt: '',
                          }),
                        }),
                      }),
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-5 w-5',
                            src: 'https://www.svgrepo.com/show/513008/twitter-154.svg',
                            alt: '',
                          }),
                        }),
                      }),
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-6 w-6',
                            src: 'https://www.svgrepo.com/show/506498/google.svg',
                            alt: '',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function OC() {
  const { createUser: e } = D.useContext(vd),
    t = (n) => {
      n.preventDefault();
      const r = n.target,
        i = r.name.value,
        o = r.email.value,
        a = r.password.value;
      console.log(i, o, a),
        e(o, a)
          .then((u) => {
            var m, g;
            console.log(u.user);
            const c =
              (g = (m = u.user) == null ? void 0 : m.metadata) == null
                ? void 0
                : g.creationTime;
            fetch('http://localhost:5000/add-user', {
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify({ email: o, creationTime: c }),
            })
              .then((x) => x.json())
              .then((x) => {
                console.log(x),
                  x.insertedId &&
                    (Di.fire({
                      title: 'Success!',
                      text: 'User Added',
                      icon: 'success',
                    }),
                    r.reset());
              });
          })
          .catch((u) => {
            console.log(u);
          });
    };
  return p.jsx('div', {
    children: p.jsxs('div', {
      className:
        'min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8',
      children: [
        p.jsxs('div', {
          className: 'sm:mx-auto sm:w-full sm:max-w-md',
          children: [
            p.jsx('h2', {
              className:
                'mt-6 text-center text-3xl font-extrabold text-gray-900',
              children: 'Sign up to your account',
            }),
            p.jsxs('p', {
              className: 'mt-2 text-center text-sm text-gray-600 max-w',
              children: [
                'Or ',
                p.jsx(p.Fragment, { children: ' ' }),
                p.jsx(Cn, {
                  to: '/login',
                  className: 'font-medium text-blue-600 hover:text-blue-500',
                  children: 'log in to account',
                }),
              ],
            }),
          ],
        }),
        p.jsx('div', {
          className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md',
          children: p.jsxs('div', {
            className: 'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10',
            children: [
              p.jsxs('form', {
                className: 'space-y-6',
                onSubmit: t,
                children: [
                  p.jsxs('div', {
                    children: [
                      p.jsx('label', {
                        htmlFor: 'name',
                        className: 'block text-sm font-medium text-gray-700',
                        children: 'Full Name',
                      }),
                      p.jsx('div', {
                        className: 'mt-1',
                        children: p.jsx('input', {
                          name: 'name',
                          type: 'text',
                          required: !0,
                          className:
                            'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                          placeholder: 'Enter your email address',
                        }),
                      }),
                      p.jsx('label', {
                        htmlFor: 'email',
                        className: 'block text-sm font-medium text-gray-700',
                        children: 'Email address',
                      }),
                      p.jsx('div', {
                        className: 'mt-1',
                        children: p.jsx('input', {
                          id: 'email',
                          name: 'email',
                          type: 'email',
                          autoComplete: 'email',
                          required: '',
                          className:
                            'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                          placeholder: 'Enter your email address',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    children: [
                      p.jsx('label', {
                        htmlFor: 'password',
                        className: 'block text-sm font-medium text-gray-700',
                        children: 'Password',
                      }),
                      p.jsx('div', {
                        className: 'mt-1',
                        children: p.jsx('input', {
                          id: 'password',
                          name: 'password',
                          type: 'password',
                          autoComplete: 'current-password',
                          required: '',
                          className:
                            'appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
                          placeholder: 'Enter your password',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      p.jsxs('div', {
                        className: 'flex items-center',
                        children: [
                          p.jsx('input', {
                            id: 'remember_me',
                            name: 'remember_me',
                            type: 'checkbox',
                            className:
                              'h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded',
                          }),
                          p.jsx('label', {
                            htmlFor: 'remember_me',
                            className: 'ml-2 block text-sm text-gray-900',
                            children: 'Remember me',
                          }),
                        ],
                      }),
                      p.jsx('div', {
                        className: 'text-sm',
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'font-medium text-blue-600 hover:text-blue-500',
                          children: 'Forgot your password?',
                        }),
                      }),
                    ],
                  }),
                  p.jsx('div', {
                    children: p.jsx('button', {
                      type: 'submit',
                      className:
                        'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                      children: 'Sign up',
                    }),
                  }),
                ],
              }),
              p.jsxs('div', {
                className: 'mt-6',
                children: [
                  p.jsxs('div', {
                    className: 'relative',
                    children: [
                      p.jsx('div', {
                        className: 'absolute inset-0 flex items-center',
                        children: p.jsx('div', {
                          className: 'w-full border-t border-gray-300',
                        }),
                      }),
                      p.jsx('div', {
                        className: 'relative flex justify-center text-sm',
                        children: p.jsx('span', {
                          className: 'px-2 bg-gray-100 text-gray-500',
                          children: 'Or continue with',
                        }),
                      }),
                    ],
                  }),
                  p.jsxs('div', {
                    className: 'mt-6 grid grid-cols-3 gap-3',
                    children: [
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-5 w-5',
                            src: 'https://www.svgrepo.com/show/512120/facebook-176.svg',
                            alt: '',
                          }),
                        }),
                      }),
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-5 w-5',
                            src: 'https://www.svgrepo.com/show/513008/twitter-154.svg',
                            alt: '',
                          }),
                        }),
                      }),
                      p.jsx('div', {
                        children: p.jsx('a', {
                          href: '#',
                          className:
                            'w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50',
                          children: p.jsx('img', {
                            className: 'h-6 w-6',
                            src: 'https://www.svgrepo.com/show/506498/google.svg',
                            alt: '',
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function LC() {
  const e = id(),
    [t, n] = D.useState(e),
    r = (i) => {
      fetch(`http://localhost:5000/users/${i}`, { method: 'DELETE' })
        .then((o) => o.json())
        .then((o) => {
          if ((console.log(o), o.deletedCount > 0)) {
            Di.fire('Success!', 'User Deleted', 'success');
            const a = t.filter((u) => u._id !== i);
            n(a);
          }
        });
    };
  return p.jsxs('div', {
    children: [
      p.jsxs('h2', {
        className: 'text-4xl font-bold text-center my-6',
        children: ['Users : ', t.length],
      }),
      p.jsx('div', {
        className: 'overflow-x-auto',
        children: p.jsxs('table', {
          className: 'table',
          children: [
            p.jsx('thead', {
              children: p.jsxs('tr', {
                children: [
                  p.jsx('th', { children: 'Email' }),
                  p.jsx('th', { children: 'Creation' }),
                ],
              }),
            }),
            p.jsx('tbody', {
              children: t.map((i) =>
                p.jsxs(
                  'tr',
                  {
                    children: [
                      p.jsx('td', { children: i.email }),
                      p.jsx('td', { children: i.creationTime }),
                      p.jsx('td', {
                        children: p.jsx('button', {
                          className: 'btn btn-ghost text-2xl',
                          onClick: () => r(i._id),
                          children: p.jsx(Pg, {}),
                        }),
                      }),
                    ],
                  },
                  i._id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
const jC = Yx([
  { path: '/', element: p.jsx(DE, {}) },
  { path: '/add-coffee', element: p.jsx(ME, {}) },
  {
    path: '/coffees/:id',
    element: p.jsx(UE, {}),
    loader: ({ params: e }) => fetch(`http://localhost:5000/coffees/${e.id}`),
  },
  {
    path: '/update-coffee/:id',
    element: p.jsx(BE, {}),
    loader: ({ params: e }) => fetch(`http://localhost:5000/coffees/${e.id}`),
  },
  { path: '/login', element: p.jsx(NC, {}) },
  { path: '/register', element: p.jsx(OC, {}) },
  {
    path: '/users',
    element: p.jsx(LC, {}),
    loader: () => fetch('http://localhost:5000/users'),
  },
]);
Yl.createRoot(document.getElementById('root')).render(
  p.jsx(vn.StrictMode, {
    children: p.jsx(RC, { children: p.jsx(oE, { router: jC }) }),
  })
);
