import A from "jquery";
function B(e, n, o) {
  const i = `${n}=${o}`;
  let r = `?${i}`;
  if (e) {
    const t = new RegExp(`([?&])${n}=[^&]*`);
    t.exec(e) !== null ? r = e.replace(t, `$1${i}`) : r = `${e}&${i}`;
  }
  return r;
}
function K(e) {
  const n = new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(
    document.location.search
  );
  if ((n == null ? void 0 : n[2]) !== void 0)
    return decodeURIComponent(n[2].replace(/\+/g, " "));
}
function j(e, n) {
  let o = e;
  if (o) {
    const i = new RegExp(`\\?${n}=[^&]*`), r = new RegExp(`&${n}=[^&]*`);
    o = o.replace(i, "?"), o = o.replace(r, "");
  }
  return o;
}
var y = /* @__PURE__ */ ((e) => (e[e.Left = 1] = "Left", e[e.None = 0] = "None", e[e.Right = -1] = "Right", e))(y || {});
function U() {
  let e = j(
    document.location.search,
    "imageLightboxIndex"
  );
  e = j(e, "imageLightboxSet"), window.history.pushState({}, "", document.location.pathname + e);
}
function W(e, n, o) {
  const i = o[e].dataset.ilb2Id ?? e.toString();
  let r = B(
    document.location.search,
    "imageLightboxIndex",
    i
  );
  const t = {
    imageLightboxIndex: i,
    imageLightboxSet: ""
  };
  n !== void 0 && (t.imageLightboxSet = n, r = B(r, "imageLightboxSet", n)), window.history.pushState(
    t,
    "",
    document.location.pathname + r
  );
}
function G(e, n, o) {
  if (K("imageLightboxSet") !== e)
    return;
  const i = K("imageLightboxIndex");
  if (i === void 0)
    return;
  let r = n.findIndex((t) => t.dataset.ilb2Id === i);
  r < 0 && (r = parseInt(i, 10)), o(r, !0);
}
function Y(e, n, o, i, r, t, s) {
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
  let m = o.findIndex(
    (h) => h.dataset.ilb2Id === u
  );
  if (m < 0 && (m = parseInt(u, 10)), i === null) {
    r(m, !0);
    return;
  }
  s(
    m,
    m > i ? y.Right : y.Left,
    !0
  );
}
const v = document.createElement("div");
v.setAttribute("id", "ilb-container");
let P = null;
function Z(e, n, o) {
  v.classList.remove("ilb-overlay"), document.body.classList.add("ilb-body"), document.body.appendChild(v), n && (P = (i) => {
    i.stopPropagation(), o();
  }, v.addEventListener("click", P), v.addEventListener("touchend", P)), v.style.transition = `opacity ${e.toString()}ms ease`, setTimeout(() => {
    v.style.opacity = "1";
  }, 50);
}
function _() {
  v.classList.add("ilb-overlay");
}
function ee() {
  v.style.opacity = "0";
}
function te() {
  P !== null && (v.removeEventListener("click", P), v.removeEventListener("touchend", P)), v.remove(), v.textContent = "", document.body.classList.remove("ilb-body");
}
function E() {
  return v;
}
const V = document.createElement("div");
V.setAttribute("id", "ilb-activity-indicator");
V.appendChild(document.createElement("div"));
function Q() {
  E().appendChild(V);
}
function X() {
  V.remove();
}
const I = document.createElement("div");
I.classList.add("ilb-button", "ilb-arrow");
I.setAttribute("id", "ilb-arrow-left");
const O = document.createElement("div");
O.classList.add("ilb-button", "ilb-arrow");
O.setAttribute("id", "ilb-arrow-right");
let k = null, C = null;
function ne(e, n) {
  k = (o) => {
    o.stopPropagation(), e();
  }, C = (o) => {
    o.stopPropagation(), n();
  }, I.addEventListener("click", k), I.addEventListener("touchend", k), O.addEventListener("click", C), O.addEventListener("touchend", C), E().append(I, O);
}
function ie() {
  I.remove(), k !== null && (I.removeEventListener("click", k), I.removeEventListener("touchend", k)), C !== null && (O.removeEventListener("click", C), O.removeEventListener("touchend", C)), k = null, C = null;
}
const L = document.createElement("caption");
L.setAttribute("id", "ilb-caption");
L.textContent = "&nbsp;";
L.addEventListener("click", (e) => {
  e.stopPropagation();
});
function oe(e, n) {
  e !== "" ? (E().appendChild(L), L.style.transition = `opacity ${n.toString()}ms ease`, setTimeout(() => {
    L.style.opacity = "1";
  }, 1), L.textContent = e) : (L.style.opacity = "0", setTimeout(() => {
    L.remove();
  }, n));
}
const R = document.createElement("button");
R.classList.add("ilb-button");
R.setAttribute("id", "ilb-close-button");
let H = null;
function re(e) {
  H = (n) => {
    n.stopPropagation(), e();
  }, R.addEventListener("click", H), E().appendChild(R);
}
function ae() {
  H !== null && R.removeEventListener("click", H), R.remove();
}
const le = (
  // eslint-disable-next-line compat/compat -- The prefixed version fixes the incompatibility
  document.fullscreenEnabled || (document.webkitFullscreenEnabled ?? !1)
);
function se() {
  return (
    // eslint-disable-next-line compat/compat -- The prefixed version fixes the incompatibility
    document.fullscreenElement ?? document.webkitFullscreenElement ?? null
  );
}
const de = (e) => {
  (e.requestFullscreen || e.webkitRequestFullScreen).call(e);
}, ce = () => {
  (document.exitFullscreen || document.webkitExitFullscreen).call(document);
};
function ue() {
  se() === null ? de(E()) : ce();
}
const M = document.createElement("button");
M.classList.add("ilb-button");
M.setAttribute("id", "ilb-fullscreen-button");
M.innerHTML = "&#x26F6;";
M.addEventListener("click", (e) => {
  e.stopPropagation(), ue();
});
function fe() {
  E().appendChild(M);
}
function me() {
  M.remove();
}
function ge(e, n, o) {
  let i = 0, r = 0, t = document.createElement("img");
  t.setAttribute("id", "ilb-image"), t.setAttribute("src", e.getAttribute("href") ?? "");
  const s = document.createElement("div");
  s.classList.add("ilb-image-container");
  let f;
  const u = e.dataset.ilb2VideoId;
  let m = e.dataset.ilb2Video !== void 0 && u !== void 0;
  if (m) {
    const c = o.get(u);
    c !== void 0 ? [t, f] = c.element() : m = !1;
  }
  s.appendChild(t);
  function h(c, g, b, N) {
    if (m) {
      const a = o.get(u);
      if ((a == null ? void 0 : a.shouldAutoplay()) === !0) {
        const [l, d] = a.element();
        d ? l.play() : l.autoplay = !0;
      }
    } else
      t.addEventListener("click", (a) => {
        if (a.stopPropagation(), n.quitOnImgClick) {
          N();
          return;
        }
        (a.pageX - t.offsetLeft) / t.width <= 1 / 3 ? g() : b();
      });
    t.addEventListener("touchstart", (a) => {
      i = a.touches[0].pageX, t.style.transitionProperty = "opacity";
    }), t.addEventListener("touchmove", (a) => {
      r = a.touches[0].pageX - i, t.style.left = `${r.toString()}px`;
    }), t.addEventListener("touchend", (a) => {
      a.stopPropagation(), t.style.transitionProperty = "left, opacity", r > 50 && g(), r < -50 && b(), t.style.left = "0";
    }), t.addEventListener("touchcancel", (a) => {
      a.stopPropagation(), t.style.transitionProperty = "left, opacity", t.style.left = "0";
    }), c();
  }
  function w(c, g) {
    E().appendChild(s);
    const b = Math.abs(100 - n.gutter);
    t.style.maxHeight = `${b.toString()}%`, t.style.maxWidth = `${b.toString()}%`, t.style.left = `${(-100 * c).toString()}px`, t.style.transition = `all ease ${n.animationSpeed.toString()}ms`, setTimeout(g, 50);
  }
  function $(c, g) {
    t.addEventListener("error", g), f === !0 ? c() : (t.addEventListener("load", c), t.addEventListener("loadedmetadata", c));
  }
  function p(c, g, b, N) {
    t.style.left = "0", t.style.opacity = "1", setTimeout(() => {
      h(c, g, b, N);
    }, n.animationSpeed);
  }
  function S(c, g) {
    if (c !== y.None) {
      const b = parseInt(t.style.left, 10) || 0;
      t.style.left = `${(b + 100 * c).toString()}px`;
    }
    t.style.opacity = "0", setTimeout(() => {
      g();
    }, n.animationSpeed);
  }
  function F() {
    s.remove();
  }
  return {
    addToDOM: w,
    removeFromDOM: F,
    startLoading: $,
    transitionIn: p,
    transitionOut: S
  };
}
let q = null;
function ve(e, n, o, i) {
  e.enableKeyboard && (q = (r) => {
    r.key === "Escape" && (r.preventDefault(), n()), r.key === "ArrowLeft" && (r.preventDefault(), o()), r.key === "ArrowRight" && (r.preventDefault(), i());
  }, document.addEventListener("keyup", q));
}
function pe() {
  q !== null && document.removeEventListener("keyup", q);
}
const x = document.createElement("div");
x.classList.add("ilb-navigation");
function z(e, n, o, i) {
  for (let r = 0; r < e.length; r++) {
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
      o(u, m);
    };
    t.addEventListener("click", s), t.addEventListener("touchend", s), x.appendChild(t);
  }
}
function J(e) {
  var n, o;
  for (let i = 0; i < x.children.length; i++)
    (n = x.children.item(i)) == null || n.classList.remove("ilb-navigation-active");
  (o = x.children.item(e)) == null || o.classList.add("ilb-navigation-active");
}
function be(e, n, o, i) {
  x.textContent = "", z(e, n, o, i);
  const r = n();
  r !== null && J(r), E().appendChild(x), x.addEventListener("click", (t) => {
    t.stopPropagation();
  }), x.addEventListener("touchend", (t) => {
    t.stopPropagation();
  });
}
function he(e, n) {
  let o = e.dataset.ilb2Id;
  o === void 0 && (o = `a${((1 + Math.random()) * 65536 | 0).toString(16)}`), e.dataset.ilb2VideoId = o;
  const i = o, r = document.createElement("video");
  r.setAttribute("id", "ilb-image"), r.preload = "metadata", r.dataset.ilb2VideoId = i;
  let t = !1, s = !1;
  for (const [h, w] of Object.entries(n))
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
        r.setAttribute(h, w.toString());
        break;
    }
  if (n.sources)
    for (const h of n.sources) {
      const w = document.createElement("source");
      for (const [$, p] of Object.entries(h))
        w.setAttribute($, p);
      r.appendChild(w);
    }
  r.addEventListener("loadedmetadata", () => {
    t = !0;
  });
  function f() {
    return i;
  }
  function u() {
    return [r, t];
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
function ye() {
  const e = [];
  function n(i) {
    for (const r of i) {
      const t = r.dataset.ilb2Video;
      t !== void 0 && e.push(
        he(r, JSON.parse(t))
      );
    }
  }
  function o(i) {
    return e.find((r) => r.id() === i);
  }
  return {
    add: n,
    get: o
  };
}
function Ee(e, n, o) {
  const i = [], r = ye();
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
      X,
      /* eslint-disable @typescript-eslint/no-use-before-define -- Cyclical dependencies */
      F,
      c,
      p
    );
  }
  function w(a) {
    s == null || s.addToDOM(a, () => {
      var d;
      if (t === null)
        return;
      const l = i[t];
      if (e.caption && oe(
        l.dataset.ilb2Caption ?? ((d = l.getElementsByTagName("img").item(0)) == null ? void 0 : d.alt) ?? "",
        e.animationSpeed
      ), h(), e.preloadNext && t + 1 < i.length) {
        const D = i[t + 1];
        document.createElement("img").setAttribute(
          "src",
          D.getAttribute("href") ?? ""
        );
      }
      E().dispatchEvent(new Event("ilb:loaded", { bubbles: !0 }));
    });
  }
  function $(a, l) {
    const d = ge(i[a], e, r);
    t = a, s = d, d.startLoading(
      () => {
        w(l);
      },
      () => {
        X();
      }
    );
  }
  function p(a = !1) {
    t !== null && (e.activity && Q(), pe(), e.history && !a && U(), E().dispatchEvent(new Event("ilb:quit", { bubbles: !0 })), ee(), m(y.None, () => {
      t = null, s = null, ie(), ae(), me(), te();
    }));
  }
  function S(a, l, d = !1) {
    t !== null && (e.history && !d && W(a, f(), u()), e.activity && Q(), J(a), m(l), $(a, l));
  }
  function F() {
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
  function g(a, l = !1) {
    t === null && (Z(e.animationSpeed, e.quitOnDocClick, p), e.activity && Q(), ve(e, p, F, c), e.arrows && ne(F, c), e.button && re(p), e.fullscreen && le && fe(), e.overlay && _(), e.history && !l && W(a, f(), u()), i[a].dispatchEvent(
      new Event("ilb:start", { bubbles: !0 })
    ), $(a, y.None), e.navigation && be(
      u(),
      () => t,
      S,
      e.animationSpeed
    ));
  }
  function b(a) {
    const l = i.indexOf(a);
    l < 0 || g(l);
  }
  function N(a) {
    const l = a.filter((d) => !i.includes(d)).filter(
      (d) => d.tagName.toLowerCase() === "a" && (new RegExp(`.(${e.allowedTypes})$`, "i").test(d.href) || d.dataset.ilb2Video !== void 0)
    );
    r.add(l), i.push(...l);
    for (const d of l)
      d.addEventListener("click", (D) => {
        D.preventDefault(), D.stopPropagation(), b(d);
      });
    z(
      l,
      () => t,
      S,
      e.animationSpeed
    );
  }
  return N(o), e.history && window.addEventListener("popstate", (a) => {
    Y(a, f(), u(), t, g, p, S);
  }), {
    addImages: N,
    close: p,
    images: u,
    next: c,
    open: g,
    openWithImage: b,
    previous: F,
    set: f
  };
}
class Le {
  constructor(n, o) {
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
      ...o
    };
    this.s = Ee(
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
    G(
      this.s.set(),
      this.s.images(),
      (n, o) => {
        this.s.open(n, o);
      }
    );
  }
  previous() {
    this.s.previous();
  }
}
A.fn.imageLightbox = function(e) {
  const n = new Le(
    this.get(),
    e
  );
  return this.addToImageLightbox = (o) => {
    n.addImages(o.get());
  }, this.openHistory = () => {
    n.openHistory();
  }, this.loadPreviousImage = () => {
    n.previous();
  }, this.loadNextImage = () => {
    n.next();
  }, this.quitImageLightbox = function() {
    return n.close(), this;
  }, this.startImageLightbox = (o) => {
    n.open(o == null ? void 0 : o.get(0));
  }, this;
};
const T = A(document);
T.on("ilb:start", (e) => {
  A("#ilb-container").trigger("start.ilb2", e.target);
});
T.on("ilb:quit", () => {
  A("#ilb-container").trigger("quit.ilb2");
});
T.on("ilb:loaded", () => {
  A("#ilb-container").trigger("loaded.ilb2");
});
T.on("ilb:previous", (e) => {
  A("#ilb-container").trigger("previous.ilb2", e.target);
});
T.on("ilb:next", (e) => {
  A("#ilb-container").trigger("next.ilb2", e.target);
});
//# sourceMappingURL=imagelightbox.jquery.js.map
