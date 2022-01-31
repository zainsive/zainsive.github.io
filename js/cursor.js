/*!
 * Kursor v0.1.0
 * Forged by Luis Daniel Rovira
 * Released under the MIT License.
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("kursor", [], t)
    : "object" == typeof exports
    ? (exports.kursor = t())
    : (e.kursor = t());
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    var t = {};
    function r(o) {
      if (t[o]) return t[o].exports;
      var s = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (r.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var s in e)
            r.d(
              o,
              s,
              function (t) {
                return e[t];
              }.bind(null, s)
            );
        return o;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = "/dist/"),
      r((r.s = 0))
    );
  })([
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r(1);
      var o = r(2);
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      var n = 1,
        u = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var r = { type: 1, ...t };
            (this.props = r),
              (this.key = 1 === n ? "" : n),
              n++,
              this.render(),
              this.hovers(),
              this.mousemove(),
              this.down();
          }
          var t, r, u;
          return (
            (t = e),
            (r = [
              {
                key: "color",
                value: function (e) {
                  (0, o.setColor)("color", e, this.kursor),
                    (0, o.setColor)("color", e, this.kursorChild);
                },
              },
              {
                key: "hidden",
                value: function () {
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0]
                    ? (this.addClass("kursor--hidden"),
                      this.addClass("kursorChild--hidden", !0))
                    : (this.removeClass("kursor--hidden"),
                      this.removeClass("kursorChild--hidden", !0));
                },
              },
              {
                key: "createWrapper",
                value: function () {
                  var e = document.createElement("div");
                  e.setAttribute("id", "kursorWrapper"),
                    document
                      .querySelector(this.props.el)
                      .insertBefore(
                        e,
                        document.querySelector(this.props.el).firstChild
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  this.createCursor("kursorChild"),
                    this.createCursor("kursor"),
                    this.props.hasOwnProperty("removeDefaultCursor") &&
                      this.props.removeDefaultCursor &&
                      document.body.classList.add("notCursor"),
                    this.props.hasOwnProperty("type") &&
                      this.addClass("kursor--".concat(this.props.type));
                },
              },
              {
                key: "down",
                value: function () {
                  var e = this;
                  document.addEventListener("mousedown", function (t) {
                    e.addClass("kursor--down");
                  }),
                    document.addEventListener("mouseup", function (t) {
                      e.removeClass("kursor--down");
                    });
                },
              },
              {
                key: "mousemove",
                value: function () {
                  var e = this,
                    t = this.props.hasOwnProperty("el"),
                    r = window;
                  t && (r = document.querySelector(this.props.el)),
                    r.addEventListener("mousemove", function (r) {
                      var o = document.querySelector(".kursor" + e.key),
                        s = document.querySelector(".kursorChild" + e.key);
                      if (t) {
                        var n = r.target !== document.querySelector(e.props.el),
                          u = r.target.closest(e.props.el);
                        n
                          ? ((o = u.querySelector(".kursor" + e.key)),
                            (s = u.querySelector(".kursorChild" + e.key)))
                          : ((o = r.target.querySelector(".kursor" + e.key)),
                            (s = r.target.querySelector(
                              ".kursorChild" + e.key
                            ))),
                          (o.style.left = "".concat(
                            n ? r.offsetX + r.target.offsetLeft : r.offsetX,
                            "px"
                          )),
                          (o.style.top = "".concat(
                            n ? r.offsetY + r.target.offsetTop : r.offsetY,
                            "px"
                          )),
                          (s.style.left = "".concat(
                            n ? r.offsetX + r.target.offsetLeft : r.offsetX,
                            "px"
                          )),
                          (s.style.top = "".concat(
                            n ? r.offsetY + r.target.offsetTop : r.offsetY,
                            "px"
                          ));
                      } else (o.style.left = "".concat(r.x, "px")), (o.style.top = "".concat(r.y, "px")), (s.style.left = "".concat(r.x, "px")), (s.style.top = "".concat(r.y, "px"));
                    });
                  var o = document;
                  t && (o = document.querySelector(this.props.el)),
                    o.addEventListener("mouseenter", function (t) {
                      e.removeClass("kursor--hidden"),
                        e.removeClass("kursorChild--hidden", !0);
                    }),
                    o.addEventListener("mouseleave", function (t) {
                      e.addClass("kursor--hidden"),
                        e.addClass("kursorChild--hidden", !0);
                    });
                },
              },
              {
                key: "hovers",
                value: function () {
                  var e = this,
                    t = document.querySelectorAll(".k-hover" + this.key);
                  console.log(t),
                    t.forEach(function (t) {
                      t.addEventListener("mouseenter", function () {
                        e.addClass("--hover");
                      }),
                        t.addEventListener("mouseleave", function () {
                          e.removeClass("--hover");
                        });
                    });
                },
              },
              {
                key: "createCursor",
                value: function (e) {
                  (this[e] = document.createElement("div")),
                    this[e].setAttribute("class", e),
                    this[e].classList.add(e + this.key),
                    // this[e].setAttribute("style", "--k-color: 0,0,0"),
                    this.props.hasOwnProperty("el")
                      ? (this[e].classList.add("".concat(e, "--hidden")),
                        this[e].classList.add("kursor--absolute"),
                        document
                          .querySelector(this.props.el)
                          .insertBefore(
                            this[e],
                            document.querySelector(this.props.el).firstChild
                          ))
                      : document.body.insertBefore(
                          this[e],
                          document.body.firstChild
                        ),
                    this.props.hasOwnProperty("color") &&
                      (0, o.setColor)("color", this.props.color, this[e]);
                },
              },
              {
                key: "addClass",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  document
                    .querySelector(
                      t ? ".kursorChild" + this.key : ".kursor" + this.key
                    )
                    .classList.add(e);
                },
              },
              {
                key: "removeClass",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  document
                    .querySelector(
                      t ? ".kursorChild" + this.key : ".kursor" + this.key
                    )
                    .classList.remove(e);
                },
              },
              {
                key: "name",
                get: function () {
                  return this._name;
                },
              },
            ]) && s(t.prototype, r),
            u && s(t, u),
            e
          );
        })();
      (t.default = u), (e.exports = t.default);
    },
    function (e, t, r) {},
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setColor = void 0);
      var o = function (e, t, r) {
        r
          ? r.style.setProperty("--k-".concat(e), t)
          : document.documentElement.style.setProperty("--k-".concat(e), t);
      };
      t.setColor = function (e, t, r) {
        var s,
          n = /^(rgb|rgba)/.test(t),
          u = /^(#)/.test(t);
        if (n) {
          var i = t.replace(/[rgba()]/g, "").split(",");
          (s = "".concat(i[0], ",").concat(i[1], ",").concat(i[2])), o(e, s, r);
        } else if (u) {
          var a = (function (e) {
            e = e.replace(
              /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              function (e, t, r, o) {
                return t + t + r + r + o + o;
              }
            );
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t
              ? {
                  r: parseInt(t[1], 16),
                  g: parseInt(t[2], 16),
                  b: parseInt(t[3], 16),
                }
              : null;
          })(t);
          (s = "".concat(a.r, ",").concat(a.g, ",").concat(a.b)), o(e, s, r);
        }
      };
    },
  ]);
});
