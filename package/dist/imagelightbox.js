function q(e, n, r) {
  const i = `${n}=${r}`;
  let o = `?${i}`;
  if (e) {
    const t = new RegExp(`([?&])${n}=[^&]*`);
    t.exec(e) !== null ? o = e.replace(t, `$1${i}`) : o = `${e}&${i}`;
  }
  return o;
}
function Q(e) {
  const n = new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(
    document.location.search
  );
  if ((n == null ? void 0 : n[2]) !== void 0)
    return decodeURIComponent(n[2].replace(/\+/g, " "));
}
function B(e, n) {
  let r = e;
  if (r) {
    const i = new RegExp(`\\?${n}=[^&]*`), o = new RegExp(`&${n}=[^&]*`);
    r = r.replace(i, "?"), r = r.replace(o, "");
  }
  return r;
}
var y = /* @__PURE__ */ ((e) => (e[e.Left = 1] = "Left", e[e.None = 0] = "None", e[e.Right = -1] = "Right", e))(y || {});
function z() {
  let e = B(
    document.location.search,
    "imageLightboxIndex"
  );
  e = B(e, "imageLightboxSet"), window.history.pushState({}, "", document.location.pathname + e);
}
function K(e, n, r) {
  const i = r[e].dataset.ilb2Id ?? e.toString();
  let o = q(
    document.location.search,
    "imageLightboxIndex",
    i
  );
  const t = {
    imageLightboxIndex: i,
    imageLightboxSet: ""
  };
  n !== void 0 && (t.imageLightboxSet = n, o = q(o, "imageLightboxSet", n)), window.history.pushState(
    t,
    "",
    document.location.pathname + o
  );
}
function J(e, n, r) {
  if (Q("imageLightboxSet") !== e)
    return;
  const i = Q("imageLightboxIndex");
  if (i === void 0)
    return;
  let o = n.findIndex((t) => t.dataset.ilb2Id === i);
  o < 0 && (o = parseInt(i, 10)), r(o, !0);
}
function U(e, n, r, i, o, t, s) {
  const f = e.state;
  if (!f || Object.keys(f).length === 0) {
    t(!0);
    return;
  }
  if (f.imageLightboxSet !== n)
    return;
  const u = f.imageLightboxIndex;
  if (u === void 0) {
    t(!0);
    return;
  }
  let m = r.findIndex(
    (h) => h.dataset.ilb2Id === u
  );
  if (m < 0 && (m = parseInt(u, 10)), i === null) {
    o(m, !0);
    return;
  }
  s(
    m,
    m > i ? y.Right : y.Left,
    !0
  );
}
const g = document.createElement("div");
g.setAttribute("id", "ilb-container");
let N = null;
function G(e, n, r) {
  g.classList.remove("ilb-overlay"), document.body.classList.add("ilb-body"), document.body.appendChild(g), n && (N = (i) => {
    i.stopPropagation(), r();
  }, g.addEventListener("click", N), g.addEventListener("touchend", N)), g.style.transition = `opacity ${e.toString()}ms ease`, setTimeout(() => {
    g.style.opacity = "1";
  }, 50);
}
function Y() {
  g.classList.add("ilb-overlay");
}
function Z() {
  g.style.opacity = "0";
}
function _() {
  N !== null && (g.removeEventListener("click", N), g.removeEventListener("touchend", N)), g.remove(), g.textContent = "", document.body.classList.remove("ilb-body");
}
function E() {
  return g;
}
const H = document.createElement("div");
H.setAttribute("id", "ilb-activity-indicator");
H.appendChild(document.createElement("div"));
function V() {
  E().appendChild(H);
}
function j() {
  H.remove();
}
const I = document.createElement("div");
I.classList.add("ilb-button", "ilb-arrow");
I.setAttribute("id", "ilb-arrow-left");
const O = document.createElement("div");
O.classList.add("ilb-button", "ilb-arrow");
O.setAttribute("id", "ilb-arrow-right");
let k = null, C = null;
function ee(e, n) {
  k = (r) => {
    r.stopPropagation(), e();
  }, C = (r) => {
    r.stopPropagation(), n();
  }, I.addEventListener("click", k), I.addEventListener("touchend", k), O.addEventListener("click", C), O.addEventListener("touchend", C), E().append(I, O);
}
function te() {
  I.remove(), k !== null && (I.removeEventListener("click", k), I.removeEventListener("touchend", k)), C !== null && (O.removeEventListener("click", C), O.removeEventListener("touchend", C)), k = null, C = null;
}
const L = document.createElement("caption");
L.setAttribute("id", "ilb-caption");
L.textContent = "&nbsp;";
L.addEventListener("click", (e) => {
  e.stopPropagation();
});
function ne(e, n) {
  e !== "" ? (E().appendChild(L), L.style.transition = `opacity ${n.toString()}ms ease`, setTimeout(() => {
    L.style.opacity = "1";
  }, 1), L.textContent = e) : (L.style.opacity = "0", setTimeout(() => {
    L.remove();
  }, n));
}
const R = document.createElement("button");
R.classList.add("ilb-button");
R.setAttribute("id", "ilb-close-button");
let D = null;
function ie(e) {
  D = (n) => {
    n.stopPropagation(), e();
  }, R.addEventListener("click", D), E().appendChild(R);
}
function oe() {
  D !== null && R.removeEventListener("click", D), R.remove();
}
const ae = (
  // eslint-disable-next-line compat/compat -- The prefixed version fixes the incompatibility
  document.fullscreenEnabled || (document.webkitFullscreenEnabled ?? !1)
);
function re() {
  return (
    // eslint-disable-next-line compat/compat -- The prefixed version fixes the incompatibility
    document.fullscreenElement ?? document.webkitFullscreenElement ?? null
  );
}
const le = (e) => {
  (e.requestFullscreen || e.webkitRequestFullScreen).call(e);
}, se = () => {
  (document.exitFullscreen || document.webkitExitFullscreen).call(document);
};
function de() {
  re() === null ? le(E()) : se();
}
const M = document.createElement("button");
M.classList.add("ilb-button");
M.setAttribute("id", "ilb-fullscreen-button");
M.innerHTML = "&#x26F6;";
M.addEventListener("click", (e) => {
  e.stopPropagation(), de();
});
function ce() {
  E().appendChild(M);
}
function ue() {
  M.remove();
}
function fe(e, n, r) {
  let i = 0, o = 0, t = document.createElement("img");
  t.setAttribute("id", "ilb-image"), t.setAttribute("src", e.getAttribute("href") ?? "");
  const s = document.createElement("div");
  s.classList.add("ilb-image-container");
  let f;
  const u = e.dataset.ilb2VideoId;
  let m = e.dataset.ilb2Video !== void 0 && u !== void 0;
  if (m) {
    const c = r.get(u);
    c !== void 0 ? [t, f] = c.element() : m = !1;
  }
  s.appendChild(t);
  function h(c, v, b, F) {
    if (m) {
      const a = r.get(u);
      if ((a == null ? void 0 : a.shouldAutoplay()) === !0) {
        const [l, d] = a.element();
        d ? l.play() : l.autoplay = !0;
      }
    } else
      t.addEventListener("click", (a) => {
        if (a.stopPropagation(), n.quitOnImgClick) {
          F();
          return;
        }
        (a.pageX - t.offsetLeft) / t.width <= 1 / 3 ? v() : b();
      });
    t.addEventListener("touchstart", (a) => {
      i = a.touches[0].pageX, t.style.transitionProperty = "opacity";
    }), t.addEventListener("touchmove", (a) => {
      o = a.touches[0].pageX - i, t.style.left = `${o.toString()}px`;
    }), t.addEventListener("touchend", (a) => {
      a.stopPropagation(), t.style.transitionProperty = "left, opacity", o > 50 && v(), o < -50 && b(), t.style.left = "0";
    }), t.addEventListener("touchcancel", (a) => {
      a.stopPropagation(), t.style.transitionProperty = "left, opacity", t.style.left = "0";
    }), c();
  }
  function x(c, v) {
    E().appendChild(s);
    const b = Math.abs(100 - n.gutter);
    t.style.maxHeight = `${b.toString()}%`, t.style.maxWidth = `${b.toString()}%`, t.style.left = `${(-100 * c).toString()}px`, t.style.transition = `all ease ${n.animationSpeed.toString()}ms`, setTimeout(v, 50);
  }
  function A(c, v) {
    t.addEventListener("error", v), f === !0 ? c() : (t.addEventListener("load", c), t.addEventListener("loadedmetadata", c));
  }
  function p(c, v, b, F) {
    t.style.left = "0", t.style.opacity = "1", setTimeout(() => {
      h(c, v, b, F);
    }, n.animationSpeed);
  }
  function S(c, v) {
    if (c !== y.None) {
      const b = parseInt(t.style.left, 10) || 0;
      t.style.left = `${(b + 100 * c).toString()}px`;
    }
    t.style.opacity = "0", setTimeout(() => {
      v();
    }, n.animationSpeed);
  }
  function $() {
    s.remove();
  }
  return {
    addToDOM: x,
    removeFromDOM: $,
    startLoading: A,
    transitionIn: p,
    transitionOut: S
  };
}
let T = null;
function me(e, n, r, i) {
  e.enableKeyboard && (T = (o) => {
    o.key === "Escape" && (o.preventDefault(), n()), o.key === "ArrowLeft" && (o.preventDefault(), r()), o.key === "ArrowRight" && (o.preventDefault(), i());
  }, document.addEventListener("keyup", T));
}
function ve() {
  T !== null && document.removeEventListener("keyup", T);
}
const w = document.createElement("div");
w.classList.add("ilb-navigation");
function W(e, n, r, i) {
  for (let o = 0; o < e.length; o++) {
    const t = document.createElement("button");
    t.style.transition = `background-color ${i.toString()}ms ease`;
    const s = () => {
      const f = n();
      if (t.classList.contains("ilb-navigation-active") || f === null || t.parentNode === null)
        return;
      const u = Array.prototype.indexOf.call(
        t.parentNode.childNodes,
        t
      ), m = u < f ? y.Left : y.Right;
      r(u, m);
    };
    t.addEventListener("click", s), t.addEventListener("touchend", s), w.appendChild(t);
  }
}
function X(e) {
  var n, r;
  for (let i = 0; i < w.children.length; i++)
    (n = w.children.item(i)) == null || n.classList.remove("ilb-navigation-active");
  (r = w.children.item(e)) == null || r.classList.add("ilb-navigation-active");
}
function ge(e, n, r, i) {
  w.textContent = "", W(e, n, r, i);
  const o = n();
  o !== null && X(o), E().appendChild(w), w.addEventListener("click", (t) => {
    t.stopPropagation();
  }), w.addEventListener("touchend", (t) => {
    t.stopPropagation();
  });
}
function pe(e, n) {
  let r = e.dataset.ilb2Id;
  r === void 0 && (r = `a${((1 + Math.random()) * 65536 | 0).toString(16)}`), e.dataset.ilb2VideoId = r;
  const i = r, o = document.createElement("video");
  o.setAttribute("id", "ilb-image"), o.preload = "metadata", o.dataset.ilb2VideoId = i;
  let t = !1, s = !1;
  for (const [h, x] of Object.entries(n))
    switch (h) {
      case "autoplay":
        s = !0;
        break;
      case "controls":
      case "loop":
      case "muted":
      case "poster":
      case "preload":
      case "src":
        o.setAttribute(h, x.toString());
        break;
    }
  if (n.sources)
    for (const h of n.sources) {
      const x = document.createElement("source");
      for (const [A, p] of Object.entries(h))
        x.setAttribute(A, p);
      o.appendChild(x);
    }
  o.addEventListener("loadedmetadata", () => {
    t = !0;
  });
  function f() {
    return i;
  }
  function u() {
    return [o, t];
  }
  function m() {
    return s;
  }
  return {
    element: u,
    id: f,
    shouldAutoplay: m
  };
}
function be() {
  const e = [];
  function n(i) {
    for (const o of i) {
      const t = o.dataset.ilb2Video;
      t !== void 0 && e.push(
        pe(o, JSON.parse(t))
      );
    }
  }
  function r(i) {
    return e.find((o) => o.id() === i);
  }
  return {
    add: n,
    get: r
  };
}
function he(e, n, r) {
  const i = [], o = be();
  let t = null, s = null;
  function f() {
    return n;
  }
  function u() {
    return i;
  }
  function m(a, l) {
    if (s === null)
      return;
    const d = s;
    d.transitionOut(a, () => {
      d.removeFromDOM(), l == null || l();
    });
  }
  function h() {
    s == null || s.transitionIn(
      j,
      /* eslint-disable @typescript-eslint/no-use-before-define -- Cyclical dependencies */
      $,
      c,
      p
    );
  }
  function x(a) {
    s == null || s.addToDOM(a, () => {
      var d;
      if (t === null)
        return;
      const l = i[t];
      if (e.caption && ne(
        l.dataset.ilb2Caption ?? ((d = l.getElementsByTagName("img").item(0)) == null ? void 0 : d.alt) ?? "",
        e.animationSpeed
      ), h(), e.preloadNext && t + 1 < i.length) {
        const P = i[t + 1];
        document.createElement("img").setAttribute(
          "src",
          P.getAttribute("href") ?? ""
        );
      }
      E().dispatchEvent(new Event("ilb:loaded", { bubbles: !0 }));
    });
  }
  function A(a, l) {
    const d = fe(i[a], e, o);
    t = a, s = d, d.startLoading(
      () => {
        x(l);
      },
      () => {
        j();
      }
    );
  }
  function p(a = !1) {
    t !== null && (e.activity && V(), ve(), e.history && !a && z(), E().dispatchEvent(new Event("ilb:quit", { bubbles: !0 })), Z(), m(y.None, () => {
      t = null, s = null, te(), oe(), ue(), _();
    }));
  }
  function S(a, l, d = !1) {
    t !== null && (e.history && !d && K(a, f(), u()), e.activity && V(), X(a), m(l), A(a, l));
  }
  function $() {
    if (t === null)
      return;
    let a = t - 1;
    if (t === 0) {
      if (e.quitOnEnd) {
        p();
        return;
      }
      a = i.length - 1;
    }
    i[a].dispatchEvent(
      new Event("ilb:previous", { bubbles: !0 })
    ), S(a, y.Left);
  }
  function c() {
    if (t === null)
      return;
    let a = t + 1;
    if (t === i.length - 1) {
      if (e.quitOnEnd) {
        p();
        return;
      }
      a = 0;
    }
    i[a].dispatchEvent(
      new Event("ilb:next", { bubbles: !0 })
    ), S(a, y.Right);
  }
  function v(a, l = !1) {
    t === null && (G(e.animationSpeed, e.quitOnDocClick, p), e.activity && V(), me(e, p, $, c), e.arrows && ee($, c), e.button && ie(p), e.fullscreen && ae && ce(), e.overlay && Y(), e.history && !l && K(a, f(), u()), i[a].dispatchEvent(
      new Event("ilb:start", { bubbles: !0 })
    ), A(a, y.None), e.navigation && ge(
      u(),
      () => t,
      S,
      e.animationSpeed
    ));
  }
  function b(a) {
    const l = i.indexOf(a);
    l < 0 || v(l);
  }
  function F(a) {
    const l = a.filter((d) => !i.includes(d)).filter(
      (d) => d.tagName.toLowerCase() === "a" && (new RegExp(`.(${e.allowedTypes})$`, "i").test(d.href) || d.dataset.ilb2Video !== void 0)
    );
    o.add(l), i.push(...l);
    for (const d of l)
      d.addEventListener("click", (P) => {
        P.preventDefault(), P.stopPropagation(), b(d);
      });
    W(
      l,
      () => t,
      S,
      e.animationSpeed
    );
  }
  return F(r), e.history && window.addEventListener("popstate", (a) => {
    U(a, f(), u(), t, v, p, S);
  }), {
    addImages: F,
    close: p,
    images: u,
    next: c,
    open: v,
    openWithImage: b,
    previous: $,
    set: f
  };
}
class Ee {
  constructor(n, r) {
    const i = {
      activity: !0,
      allowedTypes: "",
      animationSpeed: 250,
      arrows: !0,
      button: !0,
      caption: !1,
      enableKeyboard: !0,
      fullscreen: !0,
      gutter: 10,
      history: !1,
      navigation: !1,
      overlay: !0,
      preloadNext: !0,
      quitOnDocClick: !0,
      quitOnEnd: !0,
      quitOnImgClick: !1,
      ...r
    };
    this.s = he(
      i,
      n.length > 0 ? n[0].dataset.imagelightbox ?? "" : "",
      Array.from(n)
    ), i.history && this.openHistory();
  }
  addImages(n) {
    this.s.addImages(Array.from(n));
  }
  close() {
    this.s.close();
  }
  next() {
    this.s.next();
  }
  open(n) {
    n !== void 0 ? this.s.openWithImage(n) : this.s.open(0);
  }
  openHistory() {
    J(
      this.s.set(),
      this.s.images(),
      (n, r) => {
        this.s.open(n, r);
      }
    );
  }
  previous() {
    this.s.previous();
  }
}
export {
  Ee as ImageLightbox
};
//# sourceMappingURL=imagelightbox.js.map
