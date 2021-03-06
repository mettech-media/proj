if (
  ((function () {
    for (
      var t,
        e = function () {},
        n = [
          "assert",
          "clear",
          "count",
          "debug",
          "dir",
          "dirxml",
          "error",
          "exception",
          "group",
          "groupCollapsed",
          "groupEnd",
          "info",
          "log",
          "markTimeline",
          "profile",
          "profileEnd",
          "table",
          "time",
          "timeEnd",
          "timeline",
          "timelineEnd",
          "timeStamp",
          "trace",
          "warn",
        ],
        i = n.length,
        o = (window.console = window.console || {});
      i--;

    )
      (t = n[i]), o[t] || (o[t] = e);
  })(),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] > 2
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in e) if (void 0 !== t.style[n]) return { end: e[n] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var n = !1,
        i = this;
      t(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      var o = function () {
        n || t(i).trigger(t.support.transition.end);
      };
      return setTimeout(o, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.alert");
        o || n.data("bs.alert", (o = new i(this))),
          "string" == typeof e && o[e].call(n);
      });
    }
    var n = '[data-dismiss="alert"]',
      i = function (e) {
        t(e).on("click", n, this.close);
      };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function (e) {
        function n() {
          s.detach().trigger("closed.bs.alert").remove();
        }
        var o = t(this),
          r = o.attr("data-target");
        r || ((r = o.attr("href")), (r = r && r.replace(/.*(?=#[^\s]*$)/, "")));
        var s = t(r);
        e && e.preventDefault(),
          s.length || (s = o.closest(".alert")),
          s.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n());
      });
    var o = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = i),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = o), this;
      }),
      t(document).on("click.bs.alert.data-api", n, i.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.button"),
          r = "object" == typeof e && e;
        o || i.data("bs.button", (o = new n(this, r))),
          "toggle" == e ? o.toggle() : e && o.setState(e);
      });
    }
    var n = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.3.6"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (e) {
        var n = "disabled",
          i = this.$element,
          o = i.is("input") ? "val" : "html",
          r = i.data();
        (e += "Text"),
          null == r.resetText && i.data("resetText", i[o]()),
          setTimeout(
            t.proxy(function () {
              i[o](null == r[e] ? this.options[e] : r[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), i.addClass(n).attr(n, n))
                  : this.isLoading &&
                    ((this.isLoading = !1), i.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var i = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = n),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = i), this;
      }),
      t(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function (
          n
        ) {
          var i = t(n.target);
          i.hasClass("btn") || (i = i.closest(".btn")),
            e.call(i, "toggle"),
            t(n.target).is('input[type="radio"]') ||
              t(n.target).is('input[type="checkbox"]') ||
              n.preventDefault();
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.carousel"),
          r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
          s = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", (o = new n(this, r))),
          "number" == typeof e
            ? o.to(e)
            : s
            ? o[s]()
            : r.interval && o.pause().cycle();
      });
    }
    var n = function (e, n) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (n.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
          i =
            ("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1);
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
          r = (n + o) % this.$items.length;
        return this.$items.eq(r);
      }),
      (n.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : n == t
          ? this.pause().cycle()
          : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
      }),
      (n.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"),
          r = i || this.getItemForDirection(e, o),
          s = this.interval,
          a = "next" == e ? "left" : "right",
          u = this;
        if (r.hasClass("active")) return (this.sliding = !1);
        var l = r[0],
          c = t.Event("slide.bs.carousel", { relatedTarget: l, direction: a });
        if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), s && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var f = t(this.$indicators.children()[this.getItemIndex(r)]);
            f && f.addClass("active");
          }
          var h = t.Event("slid.bs.carousel", {
            relatedTarget: l,
            direction: a,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (r.addClass(e),
                r[0].offsetWidth,
                o.addClass(a),
                r.addClass(a),
                o
                  .one("bsTransitionEnd", function () {
                    r.removeClass([e, a].join(" ")).addClass("active"),
                      o.removeClass(["active", a].join(" ")),
                      (u.sliding = !1),
                      setTimeout(function () {
                        u.$element.trigger(h);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (o.removeClass("active"),
                r.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(h)),
            s && this.cycle(),
            this
          );
        }
      });
    var i = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = n),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = i), this;
      });
    var o = function (n) {
      var i,
        o = t(this),
        r = t(
          o.attr("data-target") ||
            ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (r.hasClass("carousel")) {
        var s = t.extend({}, r.data(), o.data()),
          a = o.attr("data-slide-to");
        a && (s.interval = !1),
          e.call(r, s),
          a && r.data("bs.carousel").to(a),
          n.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", o)
      .on("click.bs.carousel.data-api", "[data-slide-to]", o),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var n = t(this);
          e.call(n, n.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var n,
        i =
          e.attr("data-target") ||
          ((n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return t(i);
    }
    function n(e) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.collapse"),
          r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
          o || n.data("bs.collapse", (o = new i(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var i = function (e, n) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, n)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.6"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            o =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              o &&
              o.length &&
              ((e = o.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var r = t.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              o &&
                o.length &&
                (n.call(o, "hide"), e || o.data("bs.collapse", null));
              var s = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [s](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var a = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [s](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return a.call(this);
              var u = t.camelCase(["scroll", s].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(a, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [s](this.$element[0][u]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var o = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", t.proxy(o, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : o.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (n, i) {
              var o = t(i);
              this.addAriaAndCollapsedClass(e(o), o);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var o = t.fn.collapse;
    (t.fn.collapse = n),
      (t.fn.collapse.Constructor = i),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = o), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var o = t(this);
          o.attr("data-target") || i.preventDefault();
          var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
          n.call(r, a);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var n = e.attr("data-target");
      n ||
        ((n = e.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var i = n && t(n);
      return i && i.length ? i : e.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (t(o).remove(),
        t(r).each(function () {
          var i = t(this),
            o = e(i),
            r = { relatedTarget: this };
          o.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              t.contains(o[0], n.target)) ||
              (o.trigger((n = t.Event("hide.bs.dropdown", r))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                o
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", r)))));
        }));
    }
    function i(e) {
      return this.each(function () {
        var n = t(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new s(this))),
          "string" == typeof e && i[e].call(n);
      });
    }
    var o = ".dropdown-backdrop",
      r = '[data-toggle="dropdown"]',
      s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (s.VERSION = "3.3.6"),
      (s.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
          var r = e(o),
            s = r.hasClass("open");
          if ((n(), !s)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", n);
            var a = { relatedTarget: this };
            if (
              (r.trigger((i = t.Event("show.bs.dropdown", a))),
              i.isDefaultPrevented())
            )
              return;
            o.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
          }
          return !1;
        }
      }),
      (s.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = t(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var o = e(i),
              s = o.hasClass("open");
            if ((!s && 27 != n.which) || (s && 27 == n.which))
              return (
                27 == n.which && o.find(r).trigger("focus"), i.trigger("click")
              );
            var a = " li:not(.disabled):visible a",
              u = o.find(".dropdown-menu" + a);
            if (u.length) {
              var l = u.index(n.target);
              38 == n.which && l > 0 && l--,
                40 == n.which && l < u.length - 1 && l++,
                ~l || (l = 0),
                u.eq(l).trigger("focus");
            }
          }
        }
      });
    var a = t.fn.dropdown;
    (t.fn.dropdown = i),
      (t.fn.dropdown.Constructor = s),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = a), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", r, s.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", r, s.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          s.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, i) {
      return this.each(function () {
        var o = t(this),
          r = o.data("bs.modal"),
          s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", (r = new n(this, s))),
          "string" == typeof e ? r[e](i) : s.show && r.show(i);
      });
    }
    var n = function (e, n) {
      (this.options = n),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (n.prototype.show = function (e) {
        var i = this,
          o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o),
          this.isShown ||
            o.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var o = t.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                o && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var r = t.Event("shown.bs.modal", { relatedTarget: e });
              o
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(r);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(r);
            }));
      }),
      (n.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (e) {
        var i = this,
          o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = t.support.transition && o;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + o)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          r
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var s = function () {
            i.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", s)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : s();
        } else e && e();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var i = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = n),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = i), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = t(this),
            o = i.attr("href"),
            r = t(
              i.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = r.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
          i.is("a") && n.preventDefault(),
            r.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            e.call(r, s, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tooltip"),
          r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) &&
          (o || i.data("bs.tooltip", (o = new n(this, r))),
          "string" == typeof e && o[e]());
      });
    }
    var n = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 150),
      (n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (n.prototype.init = function (e, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
          var s = o[r];
          if ("click" == s)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
              u = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                u + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (n.prototype.getDelegateOptions = function () {
        var e = {},
          n = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, i) {
              n[t] != i && (e[t] = i);
            }),
          e
        );
      }),
      (n.prototype.enter = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          e instanceof t.Event &&
            (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState
            ? void (n.hoverState = "in")
            : (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              n.options.delay && n.options.delay.show
                ? void (n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show();
                  }, n.options.delay.show))
                : n.show())
        );
      }),
      (n.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (n.prototype.leave = function (e) {
        var n =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n)),
          e instanceof t.Event &&
            (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          n.isInStateTrue()
            ? void 0
            : (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              n.options.delay && n.options.delay.hide
                ? void (n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide();
                  }, n.options.delay.hide))
                : n.hide())
        );
      }),
      (n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !i) return;
          var o = this,
            r = this.tip(),
            s = this.getUID(this.type);
          this.setContent(),
            r.attr("id", s),
            this.$element.attr("aria-describedby", s),
            this.options.animation && r.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            u = /\s?auto?\s?/i,
            l = u.test(a);
          l && (a = a.replace(u, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var c = this.getPosition(),
            f = r[0].offsetWidth,
            h = r[0].offsetHeight;
          if (l) {
            var d = a,
              p = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && c.bottom + h > p.bottom
                ? "top"
                : "top" == a && c.top - h < p.top
                ? "bottom"
                : "right" == a && c.right + f > p.width
                ? "left"
                : "left" == a && c.left - f < p.left
                ? "right"
                : a),
              r.removeClass(d).addClass(a);
          }
          var g = this.getCalculatedOffset(a, c, f, h);
          this.applyPlacement(g, a);
          var m = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type),
              (o.hoverState = null),
              "out" == t && o.leave(o);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : m();
        }
      }),
      (n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
          o = i[0].offsetWidth,
          r = i[0].offsetHeight,
          s = parseInt(i.css("margin-top"), 10),
          a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (e.top += s),
          (e.left += a),
          t.offset.setOffset(
            i[0],
            t.extend(
              {
                using: function (t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          i.addClass("in");
        var u = i[0].offsetWidth,
          l = i[0].offsetHeight;
        "top" == n && l != r && (e.top = e.top + r - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? (e.left += c.left) : (e.top += c.top);
        var f = /top|bottom/.test(n),
          h = f ? 2 * c.left - o + u : 2 * c.top - r + l,
          d = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][d], f);
      }),
      (n.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (n.prototype.hide = function (e) {
        function i() {
          "in" != o.hoverState && r.detach(),
            o.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + o.type),
            e && e();
        }
        var o = this,
          r = t(this.$tip),
          s = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(s),
          s.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              t.support.transition && r.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
          i = "BODY" == n.tagName,
          o = n.getBoundingClientRect();
        null == o.width &&
          (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top,
          }));
        var r = i ? { top: 0, left: 0 } : e.offset(),
          s = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          a = i
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, o, s, a, r);
      }),
      (n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = (this.options.viewport && this.options.viewport.padding) || 0,
          s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var a = e.top - r - s.scroll,
            u = e.top + r - s.scroll + i;
          a < s.top
            ? (o.top = s.top - a)
            : u > s.top + s.height && (o.top = s.top + s.height - u);
        } else {
          var l = e.left - r,
            c = e.left + r + n;
          l < s.left
            ? (o.left = s.left - l)
            : c > s.right && (o.left = s.left + s.width - c);
        }
        return o;
      }),
      (n.prototype.getTitle = function () {
        var t,
          e = this.$element,
          n = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof n.title ? n.title.call(e[0]) : n.title));
      }),
      (n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (n.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (n.prototype.enable = function () {
        this.enabled = !0;
      }),
      (n.prototype.disable = function () {
        this.enabled = !1;
      }),
      (n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (n.prototype.toggle = function (e) {
        var n = this;
        e &&
          ((n = t(e.currentTarget).data("bs." + this.type)),
          n ||
            ((n = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, n))),
          e
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null);
          });
      });
    var i = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = n),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = i), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.popover"),
          r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) &&
          (o || i.data("bs.popover", (o = new n(this, r))),
          "string" == typeof e && o[e]());
      });
    }
    var n = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.3.6"),
      (n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = n),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = i), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(n, i) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(n).is(document.body) ? window : n)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.scrollspy"),
          r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", (o = new e(this, r))),
          "string" == typeof n && o[n]();
      });
    }
    (e.VERSION = "3.3.6"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          n = "offset",
          i = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((n = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
              return (
                (r && r.length && r.is(":visible") && [[r[n]().top + i, o]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          o = this.offsets,
          r = this.targets,
          s = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), e >= i))
          return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return (this.activeTarget = null), this.clear();
        for (t = o.length; t--; )
          s != r[t] &&
            e >= o[t] &&
            (void 0 === o[t + 1] || e < o[t + 1]) &&
            this.activate(r[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var i = t.fn.scrollspy;
    (t.fn.scrollspy = n),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = i), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          n.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.tab");
        o || i.data("bs.tab", (o = new n(this))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e) {
      this.element = t(e);
    };
    (n.VERSION = "3.3.6"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var e = this.element,
          n = e.closest("ul:not(.dropdown-menu)"),
          i = e.data("target");
        if (
          (i ||
            ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var o = n.find(".active:last a"),
            r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            s = t.Event("show.bs.tab", { relatedTarget: o[0] });
          if (
            (o.trigger(r),
            e.trigger(s),
            !s.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var a = t(i);
            this.activate(e.closest("li"), n),
              this.activate(a, a.parent(), function () {
                o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (e, i, o) {
        function r() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            o && o();
        }
        var s = i.find("> .active"),
          a =
            o &&
            t.support.transition &&
            ((s.length && s.hasClass("fade")) || !!i.find("> .fade").length);
        s.length && a
          ? s
              .one("bsTransitionEnd", r)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : r(),
          s.removeClass("in");
      });
    var i = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = n),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = i), this;
      });
    var o = function (n) {
      n.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', o)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.affix"),
          r = "object" == typeof e && e;
        o || i.data("bs.affix", (o = new n(this, r))),
          "string" == typeof e && o[e]();
      });
    }
    var n = function (e, i) {
      (this.options = t.extend({}, n.DEFAULTS, i)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (n.VERSION = "3.3.6"),
      (n.RESET = "affix affix-top affix-bottom"),
      (n.DEFAULTS = { offset: 0, target: window }),
      (n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(),
          r = this.$element.offset(),
          s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > o ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != n
            ? o + this.unpin <= r.top
              ? !1
              : "bottom"
            : t - i >= o + s
            ? !1
            : "bottom";
        var a = null == this.affixed,
          u = a ? o : r.top,
          l = a ? s : e;
        return null != n && n >= o
          ? "top"
          : null != i && u + l >= t - i
          ? "bottom"
          : !1;
      }),
      (n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            r = i.bottom,
            s = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof i && (r = o = i),
            "function" == typeof o && (o = i.top(this.$element)),
            "function" == typeof r && (r = i.bottom(this.$element));
          var a = this.getState(s, e, o, r);
          if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var u = "affix" + (a ? "-" + a : ""),
              l = t.Event(u + ".bs.affix");
            if ((this.$element.trigger(l), l.isDefaultPrevented())) return;
            (this.affixed = a),
              (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(n.RESET)
                .addClass(u)
                .trigger(u.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == a && this.$element.offset({ top: s - e - r });
        }
      });
    var i = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = n),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = i), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var n = t(this),
            i = n.data();
          (i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(n, i);
        });
      });
  })(jQuery),
  (function (t, e) {
    var n = e(t, t.document);
    (t.lazySizes = n),
      "object" == typeof module && module.exports
        ? (module.exports = n)
        : "function" == typeof define && define.amd && define(n);
  })(window, function (t, e) {
    "use strict";
    if (e.getElementsByClassName) {
      var n,
        i = e.documentElement,
        o = t.HTMLPictureElement && "sizes" in e.createElement("img"),
        r = "addEventListener",
        s = "getAttribute",
        a = t[r],
        u = t.setTimeout,
        l = t.requestAnimationFrame || u,
        c = /^picture$/i,
        f = ["load", "error", "lazyincluded", "_lazyloaded"],
        h = {},
        d = Array.prototype.forEach,
        p = function (t, e) {
          return (
            h[e] || (h[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            h[e].test(t[s]("class") || "") && h[e]
          );
        },
        g = function (t, e) {
          p(t, e) ||
            t.setAttribute("class", (t[s]("class") || "").trim() + " " + e);
        },
        m = function (t, e) {
          var n;
          (n = p(t, e)) &&
            t.setAttribute("class", (t[s]("class") || "").replace(n, " "));
        },
        v = function (t, e, n) {
          var i = n ? r : "removeEventListener";
          n && v(t, e),
            f.forEach(function (n) {
              t[i](n, e);
            });
        },
        y = function (t, n, i, o, r) {
          var s = e.createEvent("CustomEvent");
          return s.initCustomEvent(n, !o, !r, i || {}), t.dispatchEvent(s), s;
        },
        b = function (e, i) {
          var r;
          !o && (r = t.picturefill || n.pf)
            ? r({ reevaluate: !0, elements: [e] })
            : i && i.src && (e.src = i.src);
        },
        w = function (t, e) {
          return (getComputedStyle(t, null) || {})[e];
        },
        x = function (t, e, i) {
          for (
            i = i || t.offsetWidth;
            i < n.minSize && e && !t._lazysizesWidth;

          )
            (i = e.offsetWidth), (e = e.parentNode);
          return i;
        },
        E = function (e) {
          var n,
            i = 0,
            o = t.Date,
            r = function () {
              (n = !1), (i = o.now()), e();
            },
            s = function () {
              u(r);
            },
            a = function () {
              l(s);
            };
          return function () {
            if (!n) {
              var t = 125 - (o.now() - i);
              (n = !0), 6 > t && (t = 6), u(a, t);
            }
          };
        },
        C = (function () {
          var o,
            f,
            h,
            x,
            C,
            $,
            S,
            k,
            L,
            I,
            O,
            A,
            N,
            j,
            D,
            _ = /^img$/i,
            R = /^iframe$/i,
            P = "onscroll" in t && !/glebot/.test(navigator.userAgent),
            M = 0,
            z = 0,
            W = 0,
            q = 0,
            B = function (t) {
              W--,
                t && t.target && v(t.target, B),
                (!t || 0 > W || !t.target) && (W = 0);
            },
            H = function (t, n) {
              var o,
                r = t,
                s =
                  "hidden" == w(e.body, "visibility") ||
                  "hidden" != w(t, "visibility");
              for (
                L -= n, A += n, I -= n, O += n;
                s && (r = r.offsetParent) && r != e.body && r != i;

              )
                (s = (w(r, "opacity") || 1) > 0),
                  s &&
                    "visible" != w(r, "overflow") &&
                    ((o = r.getBoundingClientRect()),
                    (s =
                      O > o.left &&
                      I < o.right &&
                      A > o.top - 1 &&
                      L < o.bottom + 1));
              return s;
            },
            F = function () {
              var t, e, r, a, u, l, c, d, p;
              if ((C = n.loadMode) && 8 > W && (t = o.length)) {
                (e = 0),
                  q++,
                  null == j &&
                    ("expand" in n ||
                      (n.expand =
                        i.clientHeight > 600
                          ? i.clientWidth > 860
                            ? 500
                            : 410
                          : 359),
                    (N = n.expand),
                    (j = N * n.expFactor)),
                  j > z && 1 > W && q > 3 && C > 2
                    ? ((z = j), (q = 0))
                    : (z = C > 1 && q > 2 && 6 > W ? N : M);
                for (; t > e; e++)
                  if (o[e] && !o[e]._lazyRace)
                    if (P)
                      if (
                        (((d = o[e][s]("data-expand")) && (l = 1 * d)) ||
                          (l = z),
                        p !== l &&
                          ((S = innerWidth + l * D),
                          (k = innerHeight + l),
                          (c = -1 * l),
                          (p = l)),
                        (r = o[e].getBoundingClientRect()),
                        (A = r.bottom) >= c &&
                          (L = r.top) <= k &&
                          (O = r.right) >= c * D &&
                          (I = r.left) <= S &&
                          (A || O || I || L) &&
                          ((h && 3 > W && !d && (3 > C || 4 > q)) ||
                            H(o[e], l)))
                      ) {
                        if ((G(o[e]), (u = !0), W > 9)) break;
                      } else
                        !u &&
                          h &&
                          !a &&
                          4 > W &&
                          4 > q &&
                          C > 2 &&
                          (f[0] || n.preloadAfterLoad) &&
                          (f[0] ||
                            (!d &&
                              (A ||
                                O ||
                                I ||
                                L ||
                                "auto" != o[e][s](n.sizesAttr)))) &&
                          (a = f[0] || o[e]);
                    else G(o[e]);
                a && !u && G(a);
              }
            },
            Q = E(F),
            U = function (t) {
              g(t.target, n.loadedClass),
                m(t.target, n.loadingClass),
                v(t.target, U);
            },
            V = function (t, e) {
              try {
                t.contentWindow.location.replace(e);
              } catch (n) {
                t.src = e;
              }
            },
            X = function (t) {
              var e,
                i,
                o = t[s](n.srcsetAttr);
              (e = n.customMedia[t[s]("data-media") || t[s]("media")]) &&
                t.setAttribute("media", e),
                o && t.setAttribute("srcset", o),
                e &&
                  ((i = t.parentNode),
                  i.insertBefore(t.cloneNode(), t),
                  i.removeChild(t));
            },
            Y = (function () {
              var t,
                e = [],
                n = function () {
                  for (; e.length; ) e.shift()();
                  t = !1;
                };
              return function (i) {
                e.push(i), t || ((t = !0), l(n));
              };
            })(),
            G = function (t) {
              var e,
                i,
                o,
                r,
                a,
                l,
                f,
                w = _.test(t.nodeName),
                E = w && (t[s](n.sizesAttr) || t[s]("sizes")),
                C = "auto" == E;
              ((!C && h) ||
                !w ||
                (!t.src && !t.srcset) ||
                t.complete ||
                p(t, n.errorClass)) &&
                (C && (f = t.offsetWidth),
                (t._lazyRace = !0),
                W++,
                Y(function () {
                  t._lazyRace && delete t._lazyRace,
                    (a = y(t, "lazybeforeunveil")).defaultPrevented ||
                      (E &&
                        (C
                          ? (T.updateElem(t, !0, f), g(t, n.autosizesClass))
                          : t.setAttribute("sizes", E)),
                      (i = t[s](n.srcsetAttr)),
                      (e = t[s](n.srcAttr)),
                      w &&
                        ((o = t.parentNode),
                        (r = o && c.test(o.nodeName || ""))),
                      (l = a.detail.firesLoad || ("src" in t && (i || e || r))),
                      (a = { target: t }),
                      l &&
                        (v(t, B, !0),
                        clearTimeout(x),
                        (x = u(B, 2500)),
                        g(t, n.loadingClass),
                        v(t, U, !0)),
                      r && d.call(o.getElementsByTagName("source"), X),
                      i
                        ? t.setAttribute("srcset", i)
                        : e &&
                          !r &&
                          (R.test(t.nodeName) ? V(t, e) : (t.src = e)),
                      (i || r) && b(t, { src: e })),
                    m(t, n.lazyClass),
                    (!l || t.complete) && (l ? B(a) : W--, U(a));
                }));
            },
            J = function () {
              if (!h) {
                if (Date.now() - $ < 999) return void u(J, 999);
                var t,
                  e = function () {
                    (n.loadMode = 3), Q();
                  };
                (h = !0),
                  (n.loadMode = 3),
                  W || (q ? Q() : u(F)),
                  a(
                    "scroll",
                    function () {
                      3 == n.loadMode && (n.loadMode = 2),
                        clearTimeout(t),
                        (t = u(e, 99));
                    },
                    !0
                  );
              }
            };
          return {
            _: function () {
              ($ = Date.now()),
                (o = e.getElementsByClassName(n.lazyClass)),
                (f = e.getElementsByClassName(
                  n.lazyClass + " " + n.preloadClass
                )),
                (D = n.hFac),
                a("scroll", Q, !0),
                a("resize", Q, !0),
                t.MutationObserver
                  ? new MutationObserver(Q).observe(i, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    })
                  : (i[r]("DOMNodeInserted", Q, !0),
                    i[r]("DOMAttrModified", Q, !0),
                    setInterval(Q, 999)),
                a("hashchange", Q, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                  "webkitAnimationEnd",
                ].forEach(function (t) {
                  e[r](t, Q, !0);
                }),
                /d$|^c/.test(e.readyState)
                  ? J()
                  : (a("load", J), e[r]("DOMContentLoaded", Q), u(J, 2e4)),
                Q(o.length > 0);
            },
            checkElems: Q,
            unveil: G,
          };
        })(),
        T = (function () {
          var t,
            i = function (t, e, n) {
              var i,
                o,
                r,
                s,
                a = t.parentNode;
              if (
                a &&
                ((n = x(t, a, n)),
                (s = y(t, "lazybeforesizes", { width: n, dataAttr: !!e })),
                !s.defaultPrevented &&
                  ((n = s.detail.width), n && n !== t._lazysizesWidth))
              ) {
                if (
                  ((t._lazysizesWidth = n),
                  (n += "px"),
                  t.setAttribute("sizes", n),
                  c.test(a.nodeName || ""))
                )
                  for (
                    i = a.getElementsByTagName("source"), o = 0, r = i.length;
                    r > o;
                    o++
                  )
                    i[o].setAttribute("sizes", n);
                s.detail.dataAttr || b(t, s.detail);
              }
            },
            o = function () {
              var e,
                n = t.length;
              if (n) for (e = 0; n > e; e++) i(t[e]);
            },
            r = E(o);
          return {
            _: function () {
              (t = e.getElementsByClassName(n.autosizesClass)), a("resize", r);
            },
            checkElems: r,
            updateElem: i,
          };
        })(),
        $ = function () {
          $.i || (($.i = !0), T._(), C._());
        };
      return (
        (function () {
          var e,
            i = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.7,
              hFac: 0.8,
              loadMode: 2,
            };
          n = t.lazySizesConfig || t.lazysizesConfig || {};
          for (e in i) e in n || (n[e] = i[e]);
          (t.lazySizesConfig = n),
            u(function () {
              n.init && $();
            });
        })(),
        {
          cfg: n,
          autoSizer: T,
          loader: C,
          init: $,
          uP: b,
          aC: g,
          rC: m,
          hC: p,
          fire: y,
          gW: x,
        }
      );
    }
  }),
  (window.Stencil = window.Stencil || {}),
  (Stencil.verticalAlign = function () {
    var t = $(window).width();
    $("[data-valign]").each(function () {
      var e = $(this),
        n = $(this).attr("data-valign"),
        i = $(this).attr("data-valign-to"),
        o = $(this).attr("data-valign-from"),
        r = $(this).attr("data-valign-property");
      if (
        (void 0 == n && (n = window),
        void 0 == i && (i = $(window).width()),
        void 0 == o && (o = 0),
        void 0 == r && (r = "margin-top"),
        t <= parseInt(i) && t >= parseInt(o))
      ) {
        var s = $(n).outerHeight(),
          a = $(e).outerHeight();
        if (s > a) return $(e).css(r, (s - a) / 2);
      }
      return $(e).css(r, 0);
    });
  });
var screensizeCheck = function (t, e, n, i, o) {
  var r = t,
    s = e,
    a = n,
    u = i,
    u = o,
    l = function () {
      $(window).innerWidth() <= r &&
        ($("body").addClass("screen-xs"),
        $("body").removeClass("screen-sm screen-md screen-lg screen-xl")),
        $(window).innerWidth() > r &&
          $(window).innerWidth() < s &&
          ($("body").addClass("screen-sm"),
          $("body").removeClass("screen-xs screen-md screen-lg screen-xl")),
        $(window).innerWidth() >= s &&
          $(window).innerWidth() < a &&
          ($("body").addClass("screen-md"),
          $("body").removeClass("screen-xs screen-sm screen-lg screen-xl")),
        $(window).innerWidth() >= a &&
          $(window).innerWidth() < u &&
          ($("body").addClass("screen-lg"),
          $("body").removeClass("screen-xs screen-sm screen-md screen-xl")),
        $(window).innerWidth() >= u &&
          ($("body").addClass("screen-xl"),
          $("body").removeClass("screen-xs screen-sm screen-md screen-lg"));
    };
  l(),
    $(window).resize(function () {
      l();
    });
};
!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  function n(t) {
    var e = "length" in t && t.length,
      n = Z.type(t);
    return "function" === n || Z.isWindow(t)
      ? !1
      : 1 === t.nodeType && e
      ? !0
      : "array" === n ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t);
  }
  function i(t, e, n) {
    if (Z.isFunction(e))
      return Z.grep(t, function (t, i) {
        return !!e.call(t, i, t) !== n;
      });
    if (e.nodeType)
      return Z.grep(t, function (t) {
        return (t === e) !== n;
      });
    if ("string" == typeof e) {
      if (at.test(e)) return Z.filter(e, t, n);
      e = Z.filter(e, t);
    }
    return Z.grep(t, function (t) {
      return U.call(e, t) >= 0 !== n;
    });
  }
  function o(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function r(t) {
    var e = (pt[t] = {});
    return (
      Z.each(t.match(dt) || [], function (t, n) {
        e[n] = !0;
      }),
      e
    );
  }
  function s() {
    J.removeEventListener("DOMContentLoaded", s, !1),
      t.removeEventListener("load", s, !1),
      Z.ready();
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = Z.expando + a.uid++);
  }
  function u(t, e, n) {
    var i;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((i = "data-" + e.replace(wt, "-$1").toLowerCase()),
        (n = t.getAttribute(i)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n
              ? !0
              : "false" === n
              ? !1
              : "null" === n
              ? null
              : +n + "" === n
              ? +n
              : bt.test(n)
              ? Z.parseJSON(n)
              : n;
        } catch (o) {}
        yt.set(t, e, n);
      } else n = void 0;
    return n;
  }
  function l() {
    return !0;
  }
  function c() {
    return !1;
  }
  function f() {
    try {
      return J.activeElement;
    } catch (t) {}
  }
  function h(t, e) {
    return Z.nodeName(t, "table") &&
      Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function d(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function p(t) {
    var e = Rt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function g(t, e) {
    for (var n = 0, i = t.length; i > n; n++)
      vt.set(t[n], "globalEval", !e || vt.get(e[n], "globalEval"));
  }
  function m(t, e) {
    var n, i, o, r, s, a, u, l;
    if (1 === e.nodeType) {
      if (
        vt.hasData(t) &&
        ((r = vt.access(t)), (s = vt.set(e, r)), (l = r.events))
      ) {
        delete s.handle, (s.events = {});
        for (o in l)
          for (n = 0, i = l[o].length; i > n; n++) Z.event.add(e, o, l[o][n]);
      }
      yt.hasData(t) &&
        ((a = yt.access(t)), (u = Z.extend({}, a)), yt.set(e, u));
    }
  }
  function v(t, e) {
    var n = t.getElementsByTagName
      ? t.getElementsByTagName(e || "*")
      : t.querySelectorAll
      ? t.querySelectorAll(e || "*")
      : [];
    return void 0 === e || (e && Z.nodeName(t, e)) ? Z.merge([t], n) : n;
  }
  function y(t, e) {
    var n = e.nodeName.toLowerCase();
    "input" === n && Tt.test(t.type)
      ? (e.checked = t.checked)
      : ("input" === n || "textarea" === n) &&
        (e.defaultValue = t.defaultValue);
  }
  function b(e, n) {
    var i,
      o = Z(n.createElement(e)).appendTo(n.body),
      r =
        t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0]))
          ? i.display
          : Z.css(o[0], "display");
    return o.detach(), r;
  }
  function w(t) {
    var e = J,
      n = Wt[t];
    return (
      n ||
        ((n = b(t, e)),
        ("none" !== n && n) ||
          ((zt = (
            zt || Z("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement)),
          (e = zt[0].contentDocument),
          e.write(),
          e.close(),
          (n = b(t, e)),
          zt.detach()),
        (Wt[t] = n)),
      n
    );
  }
  function x(t, e, n) {
    var i,
      o,
      r,
      s,
      a = t.style;
    return (
      (n = n || Ht(t)),
      n && (s = n.getPropertyValue(e) || n[e]),
      n &&
        ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)),
        Bt.test(s) &&
          qt.test(e) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function E(t, e) {
    return {
      get: function () {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      },
    };
  }
  function C(t, e) {
    if (e in t) return e;
    for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Yt.length; o--; )
      if (((e = Yt[o] + n), e in t)) return e;
    return i;
  }
  function T(t, e, n) {
    var i = Qt.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
  }
  function $(t, e, n, i, o) {
    for (
      var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        s = 0;
      4 > r;
      r += 2
    )
      "margin" === n && (s += Z.css(t, n + Et[r], !0, o)),
        i
          ? ("content" === n && (s -= Z.css(t, "padding" + Et[r], !0, o)),
            "margin" !== n &&
              (s -= Z.css(t, "border" + Et[r] + "Width", !0, o)))
          : ((s += Z.css(t, "padding" + Et[r], !0, o)),
            "padding" !== n &&
              (s += Z.css(t, "border" + Et[r] + "Width", !0, o)));
    return s;
  }
  function S(t, e, n) {
    var i = !0,
      o = "width" === e ? t.offsetWidth : t.offsetHeight,
      r = Ht(t),
      s = "border-box" === Z.css(t, "boxSizing", !1, r);
    if (0 >= o || null == o) {
      if (
        ((o = x(t, e, r)), (0 > o || null == o) && (o = t.style[e]), Bt.test(o))
      )
        return o;
      (i = s && (G.boxSizingReliable() || o === t.style[e])),
        (o = parseFloat(o) || 0);
    }
    return o + $(t, e, n || (s ? "border" : "content"), i, r) + "px";
  }
  function k(t, e) {
    for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
      (i = t[s]),
        i.style &&
          ((r[s] = vt.get(i, "olddisplay")),
          (n = i.style.display),
          e
            ? (r[s] || "none" !== n || (i.style.display = ""),
              "" === i.style.display &&
                Ct(i) &&
                (r[s] = vt.access(i, "olddisplay", w(i.nodeName))))
            : ((o = Ct(i)),
              ("none" === n && o) ||
                vt.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
    for (s = 0; a > s; s++)
      (i = t[s]),
        i.style &&
          ((e && "none" !== i.style.display && "" !== i.style.display) ||
            (i.style.display = e ? r[s] || "" : "none"));
    return t;
  }
  function L(t, e, n, i, o) {
    return new L.prototype.init(t, e, n, i, o);
  }
  function I() {
    return (
      setTimeout(function () {
        Gt = void 0;
      }),
      (Gt = Z.now())
    );
  }
  function O(t, e) {
    var n,
      i = 0,
      o = { height: t };
    for (e = e ? 1 : 0; 4 > i; i += 2 - e)
      (n = Et[i]), (o["margin" + n] = o["padding" + n] = t);
    return e && (o.opacity = o.width = t), o;
  }
  function A(t, e, n) {
    for (
      var i, o = (ne[e] || []).concat(ne["*"]), r = 0, s = o.length;
      s > r;
      r++
    )
      if ((i = o[r].call(n, e, t))) return i;
  }
  function N(t, e, n) {
    var i,
      o,
      r,
      s,
      a,
      u,
      l,
      c,
      f = this,
      h = {},
      d = t.style,
      p = t.nodeType && Ct(t),
      g = vt.get(t, "fxshow");
    n.queue ||
      ((a = Z._queueHooks(t, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (u = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || u();
        })),
      a.unqueued++,
      f.always(function () {
        f.always(function () {
          a.unqueued--, Z.queue(t, "fx").length || a.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ("height" in e || "width" in e) &&
        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
        (l = Z.css(t, "display")),
        (c = "none" === l ? vt.get(t, "olddisplay") || w(t.nodeName) : l),
        "inline" === c &&
          "none" === Z.css(t, "float") &&
          (d.display = "inline-block")),
      n.overflow &&
        ((d.overflow = "hidden"),
        f.always(function () {
          (d.overflow = n.overflow[0]),
            (d.overflowX = n.overflow[1]),
            (d.overflowY = n.overflow[2]);
        }));
    for (i in e)
      if (((o = e[i]), Kt.exec(o))) {
        if (
          (delete e[i], (r = r || "toggle" === o), o === (p ? "hide" : "show"))
        ) {
          if ("show" !== o || !g || void 0 === g[i]) continue;
          p = !0;
        }
        h[i] = (g && g[i]) || Z.style(t, i);
      } else l = void 0;
    if (Z.isEmptyObject(h))
      "inline" === ("none" === l ? w(t.nodeName) : l) && (d.display = l);
    else {
      g ? "hidden" in g && (p = g.hidden) : (g = vt.access(t, "fxshow", {})),
        r && (g.hidden = !p),
        p
          ? Z(t).show()
          : f.done(function () {
              Z(t).hide();
            }),
        f.done(function () {
          var e;
          vt.remove(t, "fxshow");
          for (e in h) Z.style(t, e, h[e]);
        });
      for (i in h)
        (s = A(p ? g[i] : 0, i, f)),
          i in g ||
            ((g[i] = s.start),
            p &&
              ((s.end = s.start),
              (s.start = "width" === i || "height" === i ? 1 : 0)));
    }
  }
  function j(t, e) {
    var n, i, o, r, s;
    for (n in t)
      if (
        ((i = Z.camelCase(n)),
        (o = e[i]),
        (r = t[n]),
        Z.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
        n !== i && ((t[i] = r), delete t[n]),
        (s = Z.cssHooks[i]),
        s && "expand" in s)
      ) {
        (r = s.expand(r)), delete t[i];
        for (n in r) n in t || ((t[n] = r[n]), (e[n] = o));
      } else e[i] = o;
  }
  function D(t, e, n) {
    var i,
      o,
      r = 0,
      s = ee.length,
      a = Z.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (o) return !1;
        for (
          var e = Gt || I(),
            n = Math.max(0, l.startTime + l.duration - e),
            i = n / l.duration || 0,
            r = 1 - i,
            s = 0,
            u = l.tweens.length;
          u > s;
          s++
        )
          l.tweens[s].run(r);
        return (
          a.notifyWith(t, [l, r, n]),
          1 > r && u ? n : (a.resolveWith(t, [l]), !1)
        );
      },
      l = a.promise({
        elem: t,
        props: Z.extend({}, e),
        opts: Z.extend(!0, { specialEasing: {} }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: Gt || I(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, n) {
          var i = Z.Tween(
            t,
            l.opts,
            e,
            n,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(i), i;
        },
        stop: function (e) {
          var n = 0,
            i = e ? l.tweens.length : 0;
          if (o) return this;
          for (o = !0; i > n; n++) l.tweens[n].run(1);
          return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this;
        },
      }),
      c = l.props;
    for (j(c, l.opts.specialEasing); s > r; r++)
      if ((i = ee[r].call(l, t, c, l.opts))) return i;
    return (
      Z.map(c, A, l),
      Z.isFunction(l.opts.start) && l.opts.start.call(t, l),
      Z.fx.timer(Z.extend(u, { elem: t, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function _(t) {
    return function (e, n) {
      "string" != typeof e && ((n = e), (e = "*"));
      var i,
        o = 0,
        r = e.toLowerCase().match(dt) || [];
      if (Z.isFunction(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
            : (t[i] = t[i] || []).push(n);
    };
  }
  function R(t, e, n, i) {
    function o(a) {
      var u;
      return (
        (r[a] = !0),
        Z.each(t[a] || [], function (t, a) {
          var l = a(e, n, i);
          return "string" != typeof l || s || r[l]
            ? s
              ? !(u = l)
              : void 0
            : (e.dataTypes.unshift(l), o(l), !1);
        }),
        u
      );
    }
    var r = {},
      s = t === be;
    return o(e.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function P(t, e) {
    var n,
      i,
      o = Z.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
    return i && Z.extend(!0, t, i), t;
  }
  function M(t, e, n) {
    for (var i, o, r, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          u.unshift(o);
          break;
        }
    if (u[0] in n) r = u[0];
    else {
      for (o in n) {
        if (!u[0] || t.converters[o + " " + u[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    return r ? (r !== u[0] && u.unshift(r), n[r]) : void 0;
  }
  function z(t, e, n, i) {
    var o,
      r,
      s,
      a,
      u,
      l = {},
      c = t.dataTypes.slice();
    if (c[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
    for (r = c.shift(); r; )
      if (
        (t.responseFields[r] && (n[t.responseFields[r]] = e),
        !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (u = r),
        (r = c.shift()))
      )
        if ("*" === r) r = u;
        else if ("*" !== u && u !== r) {
          if (((s = l[u + " " + r] || l["* " + r]), !s))
            for (o in l)
              if (
                ((a = o.split(" ")),
                a[1] === r && (s = l[u + " " + a[0]] || l["* " + a[0]]))
              ) {
                s === !0
                  ? (s = l[o])
                  : l[o] !== !0 && ((r = a[0]), c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && t["throws"]) e = s(e);
            else
              try {
                e = s(e);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: s ? f : "No conversion from " + u + " to " + r,
                };
              }
        }
    return { state: "success", data: e };
  }
  function W(t, e, n, i) {
    var o;
    if (Z.isArray(e))
      Z.each(e, function (e, o) {
        n || Te.test(t)
          ? i(t, o)
          : W(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
      });
    else if (n || "object" !== Z.type(e)) i(t, e);
    else for (o in e) W(t + "[" + o + "]", e[o], n, i);
  }
  function q(t) {
    return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  var B = [],
    H = B.slice,
    F = B.concat,
    Q = B.push,
    U = B.indexOf,
    V = {},
    X = V.toString,
    Y = V.hasOwnProperty,
    G = {},
    J = t.document,
    K = "2.1.4",
    Z = function (t, e) {
      return new Z.fn.init(t, e);
    },
    tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    et = /^-ms-/,
    nt = /-([\da-z])/gi,
    it = function (t, e) {
      return e.toUpperCase();
    };
  (Z.fn = Z.prototype = {
    jquery: K,
    constructor: Z,
    selector: "",
    length: 0,
    toArray: function () {
      return H.call(this);
    },
    get: function (t) {
      return null != t
        ? 0 > t
          ? this[t + this.length]
          : this[t]
        : H.call(this);
    },
    pushStack: function (t) {
      var e = Z.merge(this.constructor(), t);
      return (e.prevObject = this), (e.context = this.context), e;
    },
    each: function (t, e) {
      return Z.each(this, t, e);
    },
    map: function (t) {
      return this.pushStack(
        Z.map(this, function (e, n) {
          return t.call(e, n, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(H.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (t) {
      var e = this.length,
        n = +t + (0 > t ? e : 0);
      return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: Q,
    sort: B.sort,
    splice: B.splice,
  }),
    (Z.extend = Z.fn.extend = function () {
      var t,
        e,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
      for (
        "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || Z.isFunction(s) || (s = {}),
          a === u && ((s = this), a--);
        u > a;
        a++
      )
        if (null != (t = arguments[a]))
          for (e in t)
            (n = s[e]),
              (i = t[e]),
              s !== i &&
                (l && i && (Z.isPlainObject(i) || (o = Z.isArray(i)))
                  ? (o
                      ? ((o = !1), (r = n && Z.isArray(n) ? n : []))
                      : (r = n && Z.isPlainObject(n) ? n : {}),
                    (s[e] = Z.extend(l, r, i)))
                  : void 0 !== i && (s[e] = i));
      return s;
    }),
    Z.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === Z.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0;
      },
      isPlainObject: function (t) {
        return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t)
          ? !1
          : t.constructor && !Y.call(t.constructor.prototype, "isPrototypeOf")
          ? !1
          : !0;
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? V[X.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        var e,
          n = eval;
        (t = Z.trim(t)),
          t &&
            (1 === t.indexOf("use strict")
              ? ((e = J.createElement("script")),
                (e.text = t),
                J.head.appendChild(e).parentNode.removeChild(e))
              : n(t));
      },
      camelCase: function (t) {
        return t.replace(et, "ms-").replace(nt, it);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, i) {
        var o,
          r = 0,
          s = t.length,
          a = n(t);
        if (i) {
          if (a) for (; s > r && ((o = e.apply(t[r], i)), o !== !1); r++);
          else for (r in t) if (((o = e.apply(t[r], i)), o === !1)) break;
        } else if (a)
          for (; s > r && ((o = e.call(t[r], r, t[r])), o !== !1); r++);
        else for (r in t) if (((o = e.call(t[r], r, t[r])), o === !1)) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(tt, "");
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (n(Object(t))
              ? Z.merge(i, "string" == typeof t ? [t] : t)
              : Q.call(i, t)),
          i
        );
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : U.call(e, t, n);
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
        return (t.length = o), t;
      },
      grep: function (t, e, n) {
        for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)
          (i = !e(t[r], r)), i !== a && o.push(t[r]);
        return o;
      },
      map: function (t, e, i) {
        var o,
          r = 0,
          s = t.length,
          a = n(t),
          u = [];
        if (a) for (; s > r; r++) (o = e(t[r], r, i)), null != o && u.push(o);
        else for (r in t) (o = e(t[r], r, i)), null != o && u.push(o);
        return F.apply([], u);
      },
      guid: 1,
      proxy: function (t, e) {
        var n, i, o;
        return (
          "string" == typeof e && ((n = t[e]), (e = t), (t = n)),
          Z.isFunction(t)
            ? ((i = H.call(arguments, 2)),
              (o = function () {
                return t.apply(e || this, i.concat(H.call(arguments)));
              }),
              (o.guid = t.guid = t.guid || Z.guid++),
              o)
            : void 0
        );
      },
      now: Date.now,
      support: G,
    }),
    Z.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        V["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var ot = (function (t) {
    function e(t, e, n, i) {
      var o, r, s, a, u, l, f, d, p, g;
      if (
        ((e ? e.ownerDocument || e : W) !== N && A(e),
        (e = e || N),
        (n = n || []),
        (a = e.nodeType),
        "string" != typeof t || !t || (1 !== a && 9 !== a && 11 !== a))
      )
        return n;
      if (!i && D) {
        if (11 !== a && (o = yt.exec(t)))
          if ((s = o[1])) {
            if (9 === a) {
              if (((r = e.getElementById(s)), !r || !r.parentNode)) return n;
              if (r.id === s) return n.push(r), n;
            } else if (
              e.ownerDocument &&
              (r = e.ownerDocument.getElementById(s)) &&
              M(e, r) &&
              r.id === s
            )
              return n.push(r), n;
          } else {
            if (o[2]) return K.apply(n, e.getElementsByTagName(t)), n;
            if ((s = o[3]) && x.getElementsByClassName)
              return K.apply(n, e.getElementsByClassName(s)), n;
          }
        if (x.qsa && (!_ || !_.test(t))) {
          if (
            ((d = f = z),
            (p = e),
            (g = 1 !== a && t),
            1 === a && "object" !== e.nodeName.toLowerCase())
          ) {
            for (
              l = $(t),
                (f = e.getAttribute("id"))
                  ? (d = f.replace(wt, "\\$&"))
                  : e.setAttribute("id", d),
                d = "[id='" + d + "'] ",
                u = l.length;
              u--;

            )
              l[u] = d + h(l[u]);
            (p = (bt.test(t) && c(e.parentNode)) || e), (g = l.join(","));
          }
          if (g)
            try {
              return K.apply(n, p.querySelectorAll(g)), n;
            } catch (m) {
            } finally {
              f || e.removeAttribute("id");
            }
        }
      }
      return k(t.replace(ut, "$1"), e, n, i);
    }
    function n() {
      function t(n, i) {
        return (
          e.push(n + " ") > E.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      var e = [];
      return t;
    }
    function i(t) {
      return (t[z] = !0), t;
    }
    function o(t) {
      var e = N.createElement("div");
      try {
        return !!t(e);
      } catch (n) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function r(t, e) {
      for (var n = t.split("|"), i = t.length; i--; ) E.attrHandle[n[i]] = e;
    }
    function s(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || V) - (~t.sourceIndex || V);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function a(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return "input" === n && e.type === t;
      };
    }
    function u(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && e.type === t;
      };
    }
    function l(t) {
      return i(function (e) {
        return (
          (e = +e),
          i(function (n, i) {
            for (var o, r = t([], n.length, e), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function c(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t;
    }
    function f() {}
    function h(t) {
      for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
      return i;
    }
    function d(t, e, n) {
      var i = e.dir,
        o = n && "parentNode" === i,
        r = B++;
      return e.first
        ? function (e, n, r) {
            for (; (e = e[i]); ) if (1 === e.nodeType || o) return t(e, n, r);
          }
        : function (e, n, s) {
            var a,
              u,
              l = [q, r];
            if (s) {
              for (; (e = e[i]); )
                if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || o) {
                  if (
                    ((u = e[z] || (e[z] = {})),
                    (a = u[i]) && a[0] === q && a[1] === r)
                  )
                    return (l[2] = a[2]);
                  if (((u[i] = l), (l[2] = t(e, n, s)))) return !0;
                }
          };
    }
    function p(t) {
      return t.length > 1
        ? function (e, n, i) {
            for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
            return !0;
          }
        : t[0];
    }
    function g(t, n, i) {
      for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
      return i;
    }
    function m(t, e, n, i, o) {
      for (var r, s = [], a = 0, u = t.length, l = null != e; u > a; a++)
        (r = t[a]) && (!n || n(r, i, o)) && (s.push(r), l && e.push(a));
      return s;
    }
    function v(t, e, n, o, r, s) {
      return (
        o && !o[z] && (o = v(o)),
        r && !r[z] && (r = v(r, s)),
        i(function (i, s, a, u) {
          var l,
            c,
            f,
            h = [],
            d = [],
            p = s.length,
            v = i || g(e || "*", a.nodeType ? [a] : a, []),
            y = !t || (!i && e) ? v : m(v, h, t, a, u),
            b = n ? (r || (i ? t : p || o) ? [] : s) : y;
          if ((n && n(y, b, a, u), o))
            for (l = m(b, d), o(l, [], a, u), c = l.length; c--; )
              (f = l[c]) && (b[d[c]] = !(y[d[c]] = f));
          if (i) {
            if (r || t) {
              if (r) {
                for (l = [], c = b.length; c--; )
                  (f = b[c]) && l.push((y[c] = f));
                r(null, (b = []), l, u);
              }
              for (c = b.length; c--; )
                (f = b[c]) &&
                  (l = r ? tt(i, f) : h[c]) > -1 &&
                  (i[l] = !(s[l] = f));
            }
          } else (b = m(b === s ? b.splice(p, b.length) : b)), r ? r(null, s, b, u) : K.apply(s, b);
        })
      );
    }
    function y(t) {
      for (
        var e,
          n,
          i,
          o = t.length,
          r = E.relative[t[0].type],
          s = r || E.relative[" "],
          a = r ? 1 : 0,
          u = d(
            function (t) {
              return t === e;
            },
            s,
            !0
          ),
          l = d(
            function (t) {
              return tt(e, t) > -1;
            },
            s,
            !0
          ),
          c = [
            function (t, n, i) {
              var o =
                (!r && (i || n !== L)) ||
                ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
              return (e = null), o;
            },
          ];
        o > a;
        a++
      )
        if ((n = E.relative[t[a].type])) c = [d(p(c), n)];
        else {
          if (((n = E.filter[t[a].type].apply(null, t[a].matches)), n[z])) {
            for (i = ++a; o > i && !E.relative[t[i].type]; i++);
            return v(
              a > 1 && p(c),
              a > 1 &&
                h(
                  t
                    .slice(0, a - 1)
                    .concat({ value: " " === t[a - 2].type ? "*" : "" })
                ).replace(ut, "$1"),
              n,
              i > a && y(t.slice(a, i)),
              o > i && y((t = t.slice(i))),
              o > i && h(t)
            );
          }
          c.push(n);
        }
      return p(c);
    }
    function b(t, n) {
      var o = n.length > 0,
        r = t.length > 0,
        s = function (i, s, a, u, l) {
          var c,
            f,
            h,
            d = 0,
            p = "0",
            g = i && [],
            v = [],
            y = L,
            b = i || (r && E.find.TAG("*", l)),
            w = (q += null == y ? 1 : Math.random() || 0.1),
            x = b.length;
          for (l && (L = s !== N && s); p !== x && null != (c = b[p]); p++) {
            if (r && c) {
              for (f = 0; (h = t[f++]); )
                if (h(c, s, a)) {
                  u.push(c);
                  break;
                }
              l && (q = w);
            }
            o && ((c = !h && c) && d--, i && g.push(c));
          }
          if (((d += p), o && p !== d)) {
            for (f = 0; (h = n[f++]); ) h(g, v, s, a);
            if (i) {
              if (d > 0) for (; p--; ) g[p] || v[p] || (v[p] = G.call(u));
              v = m(v);
            }
            K.apply(u, v),
              l && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(u);
          }
          return l && ((q = w), (L = y)), g;
        };
      return o ? i(s) : s;
    }
    var w,
      x,
      E,
      C,
      T,
      $,
      S,
      k,
      L,
      I,
      O,
      A,
      N,
      j,
      D,
      _,
      R,
      P,
      M,
      z = "sizzle" + 1 * new Date(),
      W = t.document,
      q = 0,
      B = 0,
      H = n(),
      F = n(),
      Q = n(),
      U = function (t, e) {
        return t === e && (O = !0), 0;
      },
      V = 1 << 31,
      X = {}.hasOwnProperty,
      Y = [],
      G = Y.pop,
      J = Y.push,
      K = Y.push,
      Z = Y.slice,
      tt = function (t, e) {
        for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
        return -1;
      },
      et =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      nt = "[\\x20\\t\\r\\n\\f]",
      it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ot = it.replace("w", "w#"),
      rt =
        "\\[" +
        nt +
        "*(" +
        it +
        ")(?:" +
        nt +
        "*([*^$|!~]?=)" +
        nt +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ot +
        "))|)" +
        nt +
        "*\\]",
      st =
        ":(" +
        it +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        rt +
        ")*)|.*)\\)|)",
      at = new RegExp(nt + "+", "g"),
      ut = new RegExp(
        "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
        "g"
      ),
      lt = new RegExp("^" + nt + "*," + nt + "*"),
      ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
      ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
      ht = new RegExp(st),
      dt = new RegExp("^" + ot + "$"),
      pt = {
        ID: new RegExp("^#(" + it + ")"),
        CLASS: new RegExp("^\\.(" + it + ")"),
        TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + rt),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            nt +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            nt +
            "*(?:([+-]|)" +
            nt +
            "*(\\d+)|))" +
            nt +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + et + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            nt +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            nt +
            "*((?:-\\d)?\\d*)" +
            nt +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      gt = /^(?:input|select|textarea|button)$/i,
      mt = /^h\d$/i,
      vt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      bt = /[+~]/,
      wt = /'|\\/g,
      xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
      Et = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i !== i || n
          ? e
          : 0 > i
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      Ct = function () {
        A();
      };
    try {
      K.apply((Y = Z.call(W.childNodes)), W.childNodes),
        Y[W.childNodes.length].nodeType;
    } catch (Tt) {
      K = {
        apply: Y.length
          ? function (t, e) {
              J.apply(t, Z.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    (x = e.support = {}),
      (T = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return e ? "HTML" !== e.nodeName : !1;
      }),
      (A = e.setDocument = function (t) {
        var e,
          n,
          i = t ? t.ownerDocument || t : W;
        return i !== N && 9 === i.nodeType && i.documentElement
          ? ((N = i),
            (j = i.documentElement),
            (n = i.defaultView),
            n &&
              n !== n.top &&
              (n.addEventListener
                ? n.addEventListener("unload", Ct, !1)
                : n.attachEvent && n.attachEvent("onunload", Ct)),
            (D = !T(i)),
            (x.attributes = o(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (x.getElementsByTagName = o(function (t) {
              return (
                t.appendChild(i.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (x.getElementsByClassName = vt.test(i.getElementsByClassName)),
            (x.getById = o(function (t) {
              return (
                (j.appendChild(t).id = z),
                !i.getElementsByName || !i.getElementsByName(z).length
              );
            })),
            x.getById
              ? ((E.find.ID = function (t, e) {
                  if ("undefined" != typeof e.getElementById && D) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : [];
                  }
                }),
                (E.filter.ID = function (t) {
                  var e = t.replace(xt, Et);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete E.find.ID,
                (E.filter.ID = function (t) {
                  var e = t.replace(xt, Et);
                  return function (t) {
                    var n =
                      "undefined" != typeof t.getAttributeNode &&
                      t.getAttributeNode("id");
                    return n && n.value === e;
                  };
                })),
            (E.find.TAG = x.getElementsByTagName
              ? function (t, e) {
                  return "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : x.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (E.find.CLASS =
              x.getElementsByClassName &&
              function (t, e) {
                return D ? e.getElementsByClassName(t) : void 0;
              }),
            (R = []),
            (_ = []),
            (x.qsa = vt.test(i.querySelectorAll)) &&
              (o(function (t) {
                (j.appendChild(t).innerHTML =
                  "<a id='" +
                  z +
                  "'></a><select id='" +
                  z +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    _.push("[*^$]=" + nt + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    _.push("\\[" + nt + "*(?:value|" + et + ")"),
                  t.querySelectorAll("[id~=" + z + "-]").length || _.push("~="),
                  t.querySelectorAll(":checked").length || _.push(":checked"),
                  t.querySelectorAll("a#" + z + "+*").length ||
                    _.push(".#.+[+~]");
              }),
              o(function (t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    _.push("name" + nt + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length ||
                    _.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  _.push(",.*:");
              })),
            (x.matchesSelector = vt.test(
              (P =
                j.matches ||
                j.webkitMatchesSelector ||
                j.mozMatchesSelector ||
                j.oMatchesSelector ||
                j.msMatchesSelector)
            )) &&
              o(function (t) {
                (x.disconnectedMatch = P.call(t, "div")),
                  P.call(t, "[s!='']:x"),
                  R.push("!=", st);
              }),
            (_ = _.length && new RegExp(_.join("|"))),
            (R = R.length && new RegExp(R.join("|"))),
            (e = vt.test(j.compareDocumentPosition)),
            (M =
              e || vt.test(j.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (U = e
              ? function (t, e) {
                  if (t === e) return (O = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return n
                    ? n
                    : ((n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1),
                      1 & n ||
                      (!x.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t === i || (t.ownerDocument === W && M(W, t))
                          ? -1
                          : e === i || (e.ownerDocument === W && M(W, e))
                          ? 1
                          : I
                          ? tt(I, t) - tt(I, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1);
                }
              : function (t, e) {
                  if (t === e) return (O = !0), 0;
                  var n,
                    o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    u = [t],
                    l = [e];
                  if (!r || !a)
                    return t === i
                      ? -1
                      : e === i
                      ? 1
                      : r
                      ? -1
                      : a
                      ? 1
                      : I
                      ? tt(I, t) - tt(I, e)
                      : 0;
                  if (r === a) return s(t, e);
                  for (n = t; (n = n.parentNode); ) u.unshift(n);
                  for (n = e; (n = n.parentNode); ) l.unshift(n);
                  for (; u[o] === l[o]; ) o++;
                  return o
                    ? s(u[o], l[o])
                    : u[o] === W
                    ? -1
                    : l[o] === W
                    ? 1
                    : 0;
                }),
            i)
          : N;
      }),
      (e.matches = function (t, n) {
        return e(t, null, null, n);
      }),
      (e.matchesSelector = function (t, n) {
        if (
          ((t.ownerDocument || t) !== N && A(t),
          (n = n.replace(ft, "='$1']")),
          x.matchesSelector && D && (!R || !R.test(n)) && (!_ || !_.test(n)))
        )
          try {
            var i = P.call(t, n);
            if (
              i ||
              x.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return i;
          } catch (o) {}
        return e(n, N, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) !== N && A(t), M(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) !== N && A(t);
        var n = E.attrHandle[e.toLowerCase()],
          i = n && X.call(E.attrHandle, e.toLowerCase()) ? n(t, e, !D) : void 0;
        return void 0 !== i
          ? i
          : x.attributes || !D
          ? t.getAttribute(e)
          : (i = t.getAttributeNode(e)) && i.specified
          ? i.value
          : null;
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          n = [],
          i = 0,
          o = 0;
        if (
          ((O = !x.detectDuplicates),
          (I = !x.sortStable && t.slice(0)),
          t.sort(U),
          O)
        ) {
          for (; (e = t[o++]); ) e === t[o] && (i = n.push(o));
          for (; i--; ) t.splice(n[i], 1);
        }
        return (I = null), t;
      }),
      (C = e.getText = function (t) {
        var e,
          n = "",
          i = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += C(e);
        return n;
      }),
      (E = e.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: pt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(xt, Et)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Et)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || e.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && e.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              n = !t[6] && t[2];
            return pt.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : n &&
                    ht.test(n) &&
                    (e = $(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(xt, Et).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = H[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                H(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      ("undefined" != typeof t.getAttribute &&
                        t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, n, i) {
            return function (o) {
              var r = e.attr(o, t);
              return null == r
                ? "!=" === n
                : n
                ? ((r += ""),
                  "=" === n
                    ? r === i
                    : "!=" === n
                    ? r !== i
                    : "^=" === n
                    ? i && 0 === r.indexOf(i)
                    : "*=" === n
                    ? i && r.indexOf(i) > -1
                    : "$=" === n
                    ? i && r.slice(-i.length) === i
                    : "~=" === n
                    ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1
                    : "|=" === n
                    ? r === i || r.slice(0, i.length + 1) === i + "-"
                    : !1)
                : !0;
            };
          },
          CHILD: function (t, e, n, i, o) {
            var r = "nth" !== t.slice(0, 3),
              s = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === i && 0 === o
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, n, u) {
                  var l,
                    c,
                    f,
                    h,
                    d,
                    p,
                    g = r !== s ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !u && !a;
                  if (m) {
                    if (r) {
                      for (; g; ) {
                        for (f = e; (f = f[g]); )
                          if (
                            a
                              ? f.nodeName.toLowerCase() === v
                              : 1 === f.nodeType
                          )
                            return !1;
                        p = g = "only" === t && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                      for (
                        c = m[z] || (m[z] = {}),
                          l = c[t] || [],
                          d = l[0] === q && l[1],
                          h = l[0] === q && l[2],
                          f = d && m.childNodes[d];
                        (f = (++d && f && f[g]) || (h = d = 0) || p.pop());

                      )
                        if (1 === f.nodeType && ++h && f === e) {
                          c[t] = [q, d, h];
                          break;
                        }
                    } else if (
                      y &&
                      (l = (e[z] || (e[z] = {}))[t]) &&
                      l[0] === q
                    )
                      h = l[1];
                    else
                      for (
                        ;
                        (f = (++d && f && f[g]) || (h = d = 0) || p.pop()) &&
                        ((a
                          ? f.nodeName.toLowerCase() !== v
                          : 1 !== f.nodeType) ||
                          !++h ||
                          (y && ((f[z] || (f[z] = {}))[t] = [q, h]), f !== e));

                      );
                    return (h -= o), h === i || (h % i === 0 && h / i >= 0);
                  }
                };
          },
          PSEUDO: function (t, n) {
            var o,
              r =
                E.pseudos[t] ||
                E.setFilters[t.toLowerCase()] ||
                e.error("unsupported pseudo: " + t);
            return r[z]
              ? r(n)
              : r.length > 1
              ? ((o = [t, t, "", n]),
                E.setFilters.hasOwnProperty(t.toLowerCase())
                  ? i(function (t, e) {
                      for (var i, o = r(t, n), s = o.length; s--; )
                        (i = tt(t, o[s])), (t[i] = !(e[i] = o[s]));
                    })
                  : function (t) {
                      return r(t, 0, o);
                    })
              : r;
          },
        },
        pseudos: {
          not: i(function (t) {
            var e = [],
              n = [],
              o = S(t.replace(ut, "$1"));
            return o[z]
              ? i(function (t, e, n, i) {
                  for (var r, s = o(t, null, i, []), a = t.length; a--; )
                    (r = s[a]) && (t[a] = !(e[a] = r));
                })
              : function (t, i, r) {
                  return (e[0] = t), o(e, null, r, n), (e[0] = null), !n.pop();
                };
          }),
          has: i(function (t) {
            return function (n) {
              return e(t, n).length > 0;
            };
          }),
          contains: i(function (t) {
            return (
              (t = t.replace(xt, Et)),
              function (e) {
                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: i(function (t) {
            return (
              dt.test(t || "") || e.error("unsupported lang: " + t),
              (t = t.replace(xt, Et).toLowerCase()),
              function (e) {
                var n;
                do
                  if (
                    (n = D
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()), n === t || 0 === n.indexOf(t + "-")
                    );
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id;
          },
          root: function (t) {
            return t === j;
          },
          focus: function (t) {
            return (
              t === N.activeElement &&
              (!N.hasFocus || N.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return t.disabled === !1;
          },
          disabled: function (t) {
            return t.disabled === !0;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, t.selected === !0
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !E.pseudos.empty(t);
          },
          header: function (t) {
            return mt.test(t.nodeName);
          },
          input: function (t) {
            return gt.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (t, e) {
            return [e - 1];
          }),
          eq: l(function (t, e, n) {
            return [0 > n ? n + e : n];
          }),
          even: l(function (t, e) {
            for (var n = 0; e > n; n += 2) t.push(n);
            return t;
          }),
          odd: l(function (t, e) {
            for (var n = 1; e > n; n += 2) t.push(n);
            return t;
          }),
          lt: l(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
            return t;
          }),
          gt: l(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }),
      (E.pseudos.nth = E.pseudos.eq);
    for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      E.pseudos[w] = a(w);
    for (w in { submit: !0, reset: !0 }) E.pseudos[w] = u(w);
    return (
      (f.prototype = E.filters = E.pseudos),
      (E.setFilters = new f()),
      ($ = e.tokenize = function (t, n) {
        var i,
          o,
          r,
          s,
          a,
          u,
          l,
          c = F[t + " "];
        if (c) return n ? 0 : c.slice(0);
        for (a = t, u = [], l = E.preFilter; a; ) {
          (!i || (o = lt.exec(a))) &&
            (o && (a = a.slice(o[0].length) || a), u.push((r = []))),
            (i = !1),
            (o = ct.exec(a)) &&
              ((i = o.shift()),
              r.push({ value: i, type: o[0].replace(ut, " ") }),
              (a = a.slice(i.length)));
          for (s in E.filter)
            !(o = pt[s].exec(a)) ||
              (l[s] && !(o = l[s](o))) ||
              ((i = o.shift()),
              r.push({ value: i, type: s, matches: o }),
              (a = a.slice(i.length)));
          if (!i) break;
        }
        return n ? a.length : a ? e.error(t) : F(t, u).slice(0);
      }),
      (S = e.compile = function (t, e) {
        var n,
          i = [],
          o = [],
          r = Q[t + " "];
        if (!r) {
          for (e || (e = $(t)), n = e.length; n--; )
            (r = y(e[n])), r[z] ? i.push(r) : o.push(r);
          (r = Q(t, b(o, i))), (r.selector = t);
        }
        return r;
      }),
      (k = e.select = function (t, e, n, i) {
        var o,
          r,
          s,
          a,
          u,
          l = "function" == typeof t && t,
          f = !i && $((t = l.selector || t));
        if (((n = n || []), 1 === f.length)) {
          if (
            ((r = f[0] = f[0].slice(0)),
            r.length > 2 &&
              "ID" === (s = r[0]).type &&
              x.getById &&
              9 === e.nodeType &&
              D &&
              E.relative[r[1].type])
          ) {
            if (
              ((e = (E.find.ID(s.matches[0].replace(xt, Et), e) || [])[0]), !e)
            )
              return n;
            l && (e = e.parentNode), (t = t.slice(r.shift().value.length));
          }
          for (
            o = pt.needsContext.test(t) ? 0 : r.length;
            o-- && ((s = r[o]), !E.relative[(a = s.type)]);

          )
            if (
              (u = E.find[a]) &&
              (i = u(
                s.matches[0].replace(xt, Et),
                (bt.test(r[0].type) && c(e.parentNode)) || e
              ))
            ) {
              if ((r.splice(o, 1), (t = i.length && h(r)), !t))
                return K.apply(n, i), n;
              break;
            }
        }
        return (
          (l || S(t, f))(i, e, !D, n, (bt.test(t) && c(e.parentNode)) || e), n
        );
      }),
      (x.sortStable = z.split("").sort(U).join("") === z),
      (x.detectDuplicates = !!O),
      A(),
      (x.sortDetached = o(function (t) {
        return 1 & t.compareDocumentPosition(N.createElement("div"));
      })),
      o(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        r("type|href|height|width", function (t, e, n) {
          return n
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (x.attributes &&
        o(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        r("value", function (t, e, n) {
          return n || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      o(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        r(et, function (t, e, n) {
          var i;
          return n
            ? void 0
            : t[e] === !0
            ? e.toLowerCase()
            : (i = t.getAttributeNode(e)) && i.specified
            ? i.value
            : null;
        }),
      e
    );
  })(t);
  (Z.find = ot),
    (Z.expr = ot.selectors),
    (Z.expr[":"] = Z.expr.pseudos),
    (Z.unique = ot.uniqueSort),
    (Z.text = ot.getText),
    (Z.isXMLDoc = ot.isXML),
    (Z.contains = ot.contains);
  var rt = Z.expr.match.needsContext,
    st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    at = /^.[^:#\[\.,]*$/;
  (Z.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? Z.find.matchesSelector(i, t)
          ? [i]
          : []
        : Z.find.matches(
            t,
            Z.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    Z.fn.extend({
      find: function (t) {
        var e,
          n = this.length,
          i = [],
          o = this;
        if ("string" != typeof t)
          return this.pushStack(
            Z(t).filter(function () {
              for (e = 0; n > e; e++) if (Z.contains(o[e], this)) return !0;
            })
          );
        for (e = 0; n > e; e++) Z.find(t, o[e], i);
        return (
          (i = this.pushStack(n > 1 ? Z.unique(i) : i)),
          (i.selector = this.selector ? this.selector + " " + t : t),
          i
        );
      },
      filter: function (t) {
        return this.pushStack(i(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(i(this, t || [], !0));
      },
      is: function (t) {
        return !!i(
          this,
          "string" == typeof t && rt.test(t) ? Z(t) : t || [],
          !1
        ).length;
      },
    });
  var ut,
    lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ct = (Z.fn.init = function (t, e) {
      var n, i;
      if (!t) return this;
      if ("string" == typeof t) {
        if (
          ((n =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : lt.exec(t)),
          !n || (!n[1] && e))
        )
          return !e || e.jquery
            ? (e || ut).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof Z ? e[0] : e),
            Z.merge(
              this,
              Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)
            ),
            st.test(n[1]) && Z.isPlainObject(e))
          )
            for (n in e)
              Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (i = J.getElementById(n[2])),
          i && i.parentNode && ((this.length = 1), (this[0] = i)),
          (this.context = J),
          (this.selector = t),
          this
        );
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : Z.isFunction(t)
        ? "undefined" != typeof ut.ready
          ? ut.ready(t)
          : t(Z)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          Z.makeArray(t, this));
    });
  (ct.prototype = Z.fn), (ut = Z(J));
  var ft = /^(?:parents|prev(?:Until|All))/,
    ht = { children: !0, contents: !0, next: !0, prev: !0 };
  Z.extend({
    dir: function (t, e, n) {
      for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && Z(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    sibling: function (t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
  }),
    Z.fn.extend({
      has: function (t) {
        var e = Z(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; n > t; t++) if (Z.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var n,
            i = 0,
            o = this.length,
            r = [],
            s =
              rt.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0;
          o > i;
          i++
        )
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && Z.find.matchesSelector(n, t))
            ) {
              r.push(n);
              break;
            }
        return this.pushStack(r.length > 1 ? Z.unique(r) : r);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? U.call(Z(t), this[0])
            : U.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
    Z.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return Z.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return Z.dir(t, "parentNode", n);
        },
        next: function (t) {
          return o(t, "nextSibling");
        },
        prev: function (t) {
          return o(t, "previousSibling");
        },
        nextAll: function (t) {
          return Z.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return Z.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return Z.dir(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return Z.dir(t, "previousSibling", n);
        },
        siblings: function (t) {
          return Z.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return Z.sibling(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || Z.merge([], t.childNodes);
        },
      },
      function (t, e) {
        Z.fn[t] = function (n, i) {
          var o = Z.map(this, e, n);
          return (
            "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = Z.filter(i, o)),
            this.length > 1 &&
              (ht[t] || Z.unique(o), ft.test(t) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var dt = /\S+/g,
    pt = {};
  (Z.Callbacks = function (t) {
    t = "string" == typeof t ? pt[t] || r(t) : Z.extend({}, t);
    var e,
      n,
      i,
      o,
      s,
      a,
      u = [],
      l = !t.once && [],
      c = function (r) {
        for (
          e = t.memory && r, n = !0, a = o || 0, o = 0, s = u.length, i = !0;
          u && s > a;
          a++
        )
          if (u[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
            e = !1;
            break;
          }
        (i = !1),
          u && (l ? l.length && c(l.shift()) : e ? (u = []) : f.disable());
      },
      f = {
        add: function () {
          if (u) {
            var n = u.length;
            !(function r(e) {
              Z.each(e, function (e, n) {
                var i = Z.type(n);
                "function" === i
                  ? (t.unique && f.has(n)) || u.push(n)
                  : n && n.length && "string" !== i && r(n);
              });
            })(arguments),
              i ? (s = u.length) : e && ((o = n), c(e));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              Z.each(arguments, function (t, e) {
                for (var n; (n = Z.inArray(e, u, n)) > -1; )
                  u.splice(n, 1), i && (s >= n && s--, a >= n && a--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? Z.inArray(t, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (s = 0), this;
        },
        disable: function () {
          return (u = l = e = void 0), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (l = void 0), e || f.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (t, e) {
          return (
            !u ||
              (n && !l) ||
              ((e = e || []),
              (e = [t, e.slice ? e.slice() : e]),
              i ? l.push(e) : c(e)),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return f;
  }),
    Z.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
            ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
            ["notify", "progress", Z.Callbacks("memory")],
          ],
          n = "pending",
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return Z.Deferred(function (n) {
                Z.each(e, function (e, r) {
                  var s = Z.isFunction(t[e]) && t[e];
                  o[r[1]](function () {
                    var t = s && s.apply(this, arguments);
                    t && Z.isFunction(t.promise)
                      ? t
                          .promise()
                          .done(n.resolve)
                          .fail(n.reject)
                          .progress(n.notify)
                      : n[r[0] + "With"](
                          this === i ? n.promise() : this,
                          s ? [t] : arguments
                        );
                  });
                }),
                  (t = null);
              }).promise();
            },
            promise: function (t) {
              return null != t ? Z.extend(t, i) : i;
            },
          },
          o = {};
        return (
          (i.pipe = i.then),
          Z.each(e, function (t, r) {
            var s = r[2],
              a = r[3];
            (i[r[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (o[r[0]] = function () {
                return o[r[0] + "With"](this === o ? i : this, arguments), this;
              }),
              (o[r[0] + "With"] = s.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (t) {
        var e,
          n,
          i,
          o = 0,
          r = H.call(arguments),
          s = r.length,
          a = 1 !== s || (t && Z.isFunction(t.promise)) ? s : 0,
          u = 1 === a ? t : Z.Deferred(),
          l = function (t, n, i) {
            return function (o) {
              (n[t] = this),
                (i[t] = arguments.length > 1 ? H.call(arguments) : o),
                i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i);
            };
          };
        if (s > 1)
          for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)
            r[o] && Z.isFunction(r[o].promise)
              ? r[o]
                  .promise()
                  .done(l(o, i, r))
                  .fail(u.reject)
                  .progress(l(o, n, e))
              : --a;
        return a || u.resolveWith(i, r), u.promise();
      },
    });
  var gt;
  (Z.fn.ready = function (t) {
    return Z.ready.promise().done(t), this;
  }),
    Z.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? Z.readyWait++ : Z.ready(!0);
      },
      ready: function (t) {
        (t === !0 ? --Z.readyWait : Z.isReady) ||
          ((Z.isReady = !0),
          (t !== !0 && --Z.readyWait > 0) ||
            (gt.resolveWith(J, [Z]),
            Z.fn.triggerHandler &&
              (Z(J).triggerHandler("ready"), Z(J).off("ready"))));
      },
    }),
    (Z.ready.promise = function (e) {
      return (
        gt ||
          ((gt = Z.Deferred()),
          "complete" === J.readyState
            ? setTimeout(Z.ready)
            : (J.addEventListener("DOMContentLoaded", s, !1),
              t.addEventListener("load", s, !1))),
        gt.promise(e)
      );
    }),
    Z.ready.promise();
  var mt = (Z.access = function (t, e, n, i, o, r, s) {
    var a = 0,
      u = t.length,
      l = null == n;
    if ("object" === Z.type(n)) {
      o = !0;
      for (a in n) Z.access(t, e, a, n[a], !0, r, s);
    } else if (
      void 0 !== i &&
      ((o = !0),
      Z.isFunction(i) || (s = !0),
      l &&
        (s
          ? (e.call(t, i), (e = null))
          : ((l = e),
            (e = function (t, e, n) {
              return l.call(Z(t), n);
            }))),
      e)
    )
      for (; u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
    return o ? t : l ? e.call(t) : u ? e(t[0], n) : r;
  });
  (Z.acceptData = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  }),
    (a.uid = 1),
    (a.accepts = Z.acceptData),
    (a.prototype = {
      key: function (t) {
        if (!a.accepts(t)) return 0;
        var e = {},
          n = t[this.expando];
        if (!n) {
          n = a.uid++;
          try {
            (e[this.expando] = { value: n }), Object.defineProperties(t, e);
          } catch (i) {
            (e[this.expando] = n), Z.extend(t, e);
          }
        }
        return this.cache[n] || (this.cache[n] = {}), n;
      },
      set: function (t, e, n) {
        var i,
          o = this.key(t),
          r = this.cache[o];
        if ("string" == typeof e) r[e] = n;
        else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], e);
        else for (i in e) r[i] = e[i];
        return r;
      },
      get: function (t, e) {
        var n = this.cache[this.key(t)];
        return void 0 === e ? n : n[e];
      },
      access: function (t, e, n) {
        var i;
        return void 0 === e || (e && "string" == typeof e && void 0 === n)
          ? ((i = this.get(t, e)),
            void 0 !== i ? i : this.get(t, Z.camelCase(e)))
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function (t, e) {
        var n,
          i,
          o,
          r = this.key(t),
          s = this.cache[r];
        if (void 0 === e) this.cache[r] = {};
        else {
          Z.isArray(e)
            ? (i = e.concat(e.map(Z.camelCase)))
            : ((o = Z.camelCase(e)),
              e in s
                ? (i = [e, o])
                : ((i = o), (i = i in s ? [i] : i.match(dt) || []))),
            (n = i.length);
          for (; n--; ) delete s[i[n]];
        }
      },
      hasData: function (t) {
        return !Z.isEmptyObject(this.cache[t[this.expando]] || {});
      },
      discard: function (t) {
        t[this.expando] && delete this.cache[t[this.expando]];
      },
    });
  var vt = new a(),
    yt = new a(),
    bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    wt = /([A-Z])/g;
  Z.extend({
    hasData: function (t) {
      return yt.hasData(t) || vt.hasData(t);
    },
    data: function (t, e, n) {
      return yt.access(t, e, n);
    },
    removeData: function (t, e) {
      yt.remove(t, e);
    },
    _data: function (t, e, n) {
      return vt.access(t, e, n);
    },
    _removeData: function (t, e) {
      vt.remove(t, e);
    },
  }),
    Z.fn.extend({
      data: function (t, e) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((o = yt.get(r)), 1 === r.nodeType && !vt.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                ((i = s[n].name),
                0 === i.indexOf("data-") &&
                  ((i = Z.camelCase(i.slice(5))), u(r, i, o[i])));
            vt.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof t
          ? this.each(function () {
              yt.set(this, t);
            })
          : mt(
              this,
              function (e) {
                var n,
                  i = Z.camelCase(t);
                if (r && void 0 === e) {
                  if (((n = yt.get(r, t)), void 0 !== n)) return n;
                  if (((n = yt.get(r, i)), void 0 !== n)) return n;
                  if (((n = u(r, i, void 0)), void 0 !== n)) return n;
                } else
                  this.each(function () {
                    var n = yt.get(this, i);
                    yt.set(this, i, e),
                      -1 !== t.indexOf("-") &&
                        void 0 !== n &&
                        yt.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          yt.remove(this, t);
        });
      },
    }),
    Z.extend({
      queue: function (t, e, n) {
        var i;
        return t
          ? ((e = (e || "fx") + "queue"),
            (i = vt.get(t, e)),
            n &&
              (!i || Z.isArray(n)
                ? (i = vt.access(t, e, Z.makeArray(n)))
                : i.push(n)),
            i || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = Z.queue(t, e),
          i = n.length,
          o = n.shift(),
          r = Z._queueHooks(t, e),
          s = function () {
            Z.dequeue(t, e);
          };
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          vt.get(t, n) ||
          vt.access(t, n, {
            empty: Z.Callbacks("once memory").add(function () {
              vt.remove(t, [e + "queue", n]);
            }),
          })
        );
      },
    }),
    Z.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), n--),
          arguments.length < n
            ? Z.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var n = Z.queue(this, t, e);
                Z._queueHooks(this, t),
                  "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          Z.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var n,
          i = 1,
          o = Z.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          s--;

        )
          (n = vt.get(r[s], t + "queueHooks")),
            n && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(e);
      },
    });
  var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Et = ["Top", "Right", "Bottom", "Left"],
    Ct = function (t, e) {
      return (
        (t = e || t),
        "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
      );
    },
    Tt = /^(?:checkbox|radio)$/i;
  !(function () {
    var t = J.createDocumentFragment(),
      e = t.appendChild(J.createElement("div")),
      n = J.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      e.appendChild(n),
      (G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var $t = "undefined";
  G.focusinBubbles = "onfocusin" in t;
  var St = /^key/,
    kt = /^(?:mouse|pointer|contextmenu)|click/,
    Lt = /^(?:focusinfocus|focusoutblur)$/,
    It = /^([^.]*)(?:\.(.+)|)$/;
  (Z.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var r,
        s,
        a,
        u,
        l,
        c,
        f,
        h,
        d,
        p,
        g,
        m = vt.get(t);
      if (m)
        for (
          n.handler && ((r = n), (n = r.handler), (o = r.selector)),
            n.guid || (n.guid = Z.guid++),
            (u = m.events) || (u = m.events = {}),
            (s = m.handle) ||
              (s = m.handle = function (e) {
                return typeof Z !== $t && Z.event.triggered !== e.type
                  ? Z.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            e = (e || "").match(dt) || [""],
            l = e.length;
          l--;

        )
          (a = It.exec(e[l]) || []),
            (d = g = a[1]),
            (p = (a[2] || "").split(".").sort()),
            d &&
              ((f = Z.event.special[d] || {}),
              (d = (o ? f.delegateType : f.bindType) || d),
              (f = Z.event.special[d] || {}),
              (c = Z.extend(
                {
                  type: d,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && Z.expr.match.needsContext.test(o),
                  namespace: p.join("."),
                },
                r
              )),
              (h = u[d]) ||
                ((h = u[d] = []),
                (h.delegateCount = 0),
                (f.setup && f.setup.call(t, i, p, s) !== !1) ||
                  (t.addEventListener && t.addEventListener(d, s, !1))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (Z.event.global[d] = !0));
    },
    remove: function (t, e, n, i, o) {
      var r,
        s,
        a,
        u,
        l,
        c,
        f,
        h,
        d,
        p,
        g,
        m = vt.hasData(t) && vt.get(t);
      if (m && (u = m.events)) {
        for (e = (e || "").match(dt) || [""], l = e.length; l--; )
          if (
            ((a = It.exec(e[l]) || []),
            (d = g = a[1]),
            (p = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = Z.event.special[d] || {},
                d = (i ? f.delegateType : f.bindType) || d,
                h = u[d] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = h.length;
              r--;

            )
              (c = h[r]),
                (!o && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (h.splice(r, 1),
                  c.selector && h.delegateCount--,
                  f.remove && f.remove.call(t, c));
            s &&
              !h.length &&
              ((f.teardown && f.teardown.call(t, p, m.handle) !== !1) ||
                Z.removeEvent(t, d, m.handle),
              delete u[d]);
          } else for (d in u) Z.event.remove(t, d + e[l], n, i, !0);
        Z.isEmptyObject(u) && (delete m.handle, vt.remove(t, "events"));
      }
    },
    trigger: function (e, n, i, o) {
      var r,
        s,
        a,
        u,
        l,
        c,
        f,
        h = [i || J],
        d = Y.call(e, "type") ? e.type : e,
        p = Y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((s = a = i = i || J),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Lt.test(d + Z.event.triggered) &&
          (d.indexOf(".") >= 0 &&
            ((p = d.split(".")), (d = p.shift()), p.sort()),
          (l = d.indexOf(":") < 0 && "on" + d),
          (e = e[Z.expando] ? e : new Z.Event(d, "object" == typeof e && e)),
          (e.isTrigger = o ? 2 : 3),
          (e.namespace = p.join(".")),
          (e.namespace_re = e.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = i),
          (n = null == n ? [e] : Z.makeArray(n, [e])),
          (f = Z.event.special[d] || {}),
          o || !f.trigger || f.trigger.apply(i, n) !== !1))
      ) {
        if (!o && !f.noBubble && !Z.isWindow(i)) {
          for (
            u = f.delegateType || d, Lt.test(u + d) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            h.push(s), (a = s);
          a === (i.ownerDocument || J) &&
            h.push(a.defaultView || a.parentWindow || t);
        }
        for (r = 0; (s = h[r++]) && !e.isPropagationStopped(); )
          (e.type = r > 1 ? u : f.bindType || d),
            (c = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle")),
            c && c.apply(s, n),
            (c = l && s[l]),
            c &&
              c.apply &&
              Z.acceptData(s) &&
              ((e.result = c.apply(s, n)),
              e.result === !1 && e.preventDefault());
        return (
          (e.type = d),
          o ||
            e.isDefaultPrevented() ||
            (f._default && f._default.apply(h.pop(), n) !== !1) ||
            !Z.acceptData(i) ||
            (l &&
              Z.isFunction(i[d]) &&
              !Z.isWindow(i) &&
              ((a = i[l]),
              a && (i[l] = null),
              (Z.event.triggered = d),
              i[d](),
              (Z.event.triggered = void 0),
              a && (i[l] = a))),
          e.result
        );
      }
    },
    dispatch: function (t) {
      t = Z.event.fix(t);
      var e,
        n,
        i,
        o,
        r,
        s = [],
        a = H.call(arguments),
        u = (vt.get(this, "events") || {})[t.type] || [],
        l = Z.event.special[t.type] || {};
      if (
        ((a[0] = t),
        (t.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, t) !== !1)
      ) {
        for (
          s = Z.event.handlers.call(this, t, u), e = 0;
          (o = s[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(r.namespace)) &&
              ((t.handleObj = r),
              (t.data = r.data),
              (i = (
                (Z.event.special[r.origType] || {}).handle || r.handler
              ).apply(o.elem, a)),
              void 0 !== i &&
                (t.result = i) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        o,
        r,
        s = [],
        a = e.delegateCount,
        u = t.target;
      if (a && u.nodeType && (!t.button || "click" !== t.type))
        for (; u !== this; u = u.parentNode || this)
          if (u.disabled !== !0 || "click" !== t.type) {
            for (i = [], n = 0; a > n; n++)
              (r = e[n]),
                (o = r.selector + " "),
                void 0 === i[o] &&
                  (i[o] = r.needsContext
                    ? Z(o, this).index(u) >= 0
                    : Z.find(o, this, null, [u]).length),
                i[o] && i.push(r);
            i.length && s.push({ elem: u, handlers: i });
          }
      return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (t, e) {
        var n,
          i,
          o,
          r = e.button;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((n = t.target.ownerDocument || J),
            (i = n.documentElement),
            (o = n.body),
            (t.pageX =
              e.clientX +
              ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
              ((i && i.clientTop) || (o && o.clientTop) || 0))),
          t.which ||
            void 0 === r ||
            (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[Z.expando]) return t;
      var e,
        n,
        i,
        o = t.type,
        r = t,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s = kt.test(o)
            ? this.mouseHooks
            : St.test(o)
            ? this.keyHooks
            : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          t = new Z.Event(r),
          e = i.length;
        e--;

      )
        (n = i[e]), (t[n] = r[n]);
      return (
        t.target || (t.target = J),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        s.filter ? s.filter(t, r) : t
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== f() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === f() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            Z.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return Z.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, n, i) {
      var o = Z.extend(new Z.Event(), n, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? Z.event.trigger(o, null, e) : Z.event.dispatch.call(e, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (Z.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n, !1);
    }),
    (Z.Event = function (t, e) {
      return this instanceof Z.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && t.returnValue === !1)
                  ? l
                  : c))
            : (this.type = t),
          e && Z.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || Z.now()),
          void (this[Z.expando] = !0))
        : new Z.Event(t, e);
    }),
    (Z.Event.prototype = {
      isDefaultPrevented: c,
      isPropagationStopped: c,
      isImmediatePropagationStopped: c,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = l),
          t && t.preventDefault && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = l),
          t && t.stopPropagation && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = l),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Z.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        Z.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n,
              i = this,
              o = t.relatedTarget,
              r = t.handleObj;
            return (
              (!o || (o !== i && !Z.contains(i, o))) &&
                ((t.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (t.type = e)),
              n
            );
          },
        };
      }
    ),
    G.focusinBubbles ||
      Z.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var n = function (t) {
          Z.event.simulate(e, t.target, Z.event.fix(t), !0);
        };
        Z.event.special[e] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = vt.access(i, e);
            o || i.addEventListener(t, n, !0), vt.access(i, e, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = vt.access(i, e) - 1;
            o
              ? vt.access(i, e, o)
              : (i.removeEventListener(t, n, !0), vt.remove(i, e));
          },
        };
      }),
    Z.fn.extend({
      on: function (t, e, n, i, o) {
        var r, s;
        if ("object" == typeof t) {
          "string" != typeof e && ((n = n || e), (e = void 0));
          for (s in t) this.on(s, e, n, t[s], o);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = e), (n = e = void 0))
            : null == i &&
              ("string" == typeof e
                ? ((i = n), (n = void 0))
                : ((i = n), (n = e), (e = void 0))),
          i === !1)
        )
          i = c;
        else if (!i) return this;
        return (
          1 === o &&
            ((r = i),
            (i = function (t) {
              return Z().off(t), r.apply(this, arguments);
            }),
            (i.guid = r.guid || (r.guid = Z.guid++))),
          this.each(function () {
            Z.event.add(this, t, i, n, e);
          })
        );
      },
      one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1);
      },
      off: function (t, e, n) {
        var i, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            Z(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (o in t) this.off(o, e, t[o]);
          return this;
        }
        return (
          (e === !1 || "function" == typeof e) && ((n = e), (e = void 0)),
          n === !1 && (n = c),
          this.each(function () {
            Z.event.remove(this, t, n, e);
          })
        );
      },
      trigger: function (t, e) {
        return this.each(function () {
          Z.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        return n ? Z.event.trigger(t, e, n, !0) : void 0;
      },
    });
  var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    At = /<([\w:]+)/,
    Nt = /<|&#?\w+;/,
    jt = /<(?:script|style|link)/i,
    Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _t = /^$|\/(?:java|ecma)script/i,
    Rt = /^true\/(.*)/,
    Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Mt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Mt.optgroup = Mt.option),
    (Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead),
    (Mt.th = Mt.td),
    Z.extend({
      clone: function (t, e, n) {
        var i,
          o,
          r,
          s,
          a = t.cloneNode(!0),
          u = Z.contains(t.ownerDocument, t);
        if (
          !(
            G.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            Z.isXMLDoc(t)
          )
        )
          for (s = v(a), r = v(t), i = 0, o = r.length; o > i; i++)
            y(r[i], s[i]);
        if (e)
          if (n)
            for (r = r || v(t), s = s || v(a), i = 0, o = r.length; o > i; i++)
              m(r[i], s[i]);
          else m(t, a);
        return (
          (s = v(a, "script")), s.length > 0 && g(s, !u && v(t, "script")), a
        );
      },
      buildFragment: function (t, e, n, i) {
        for (
          var o,
            r,
            s,
            a,
            u,
            l,
            c = e.createDocumentFragment(),
            f = [],
            h = 0,
            d = t.length;
          d > h;
          h++
        )
          if (((o = t[h]), o || 0 === o))
            if ("object" === Z.type(o)) Z.merge(f, o.nodeType ? [o] : o);
            else if (Nt.test(o)) {
              for (
                r = r || c.appendChild(e.createElement("div")),
                  s = (At.exec(o) || ["", ""])[1].toLowerCase(),
                  a = Mt[s] || Mt._default,
                  r.innerHTML = a[1] + o.replace(Ot, "<$1></$2>") + a[2],
                  l = a[0];
                l--;

              )
                r = r.lastChild;
              Z.merge(f, r.childNodes),
                (r = c.firstChild),
                (r.textContent = "");
            } else f.push(e.createTextNode(o));
        for (c.textContent = "", h = 0; (o = f[h++]); )
          if (
            (!i || -1 === Z.inArray(o, i)) &&
            ((u = Z.contains(o.ownerDocument, o)),
            (r = v(c.appendChild(o), "script")),
            u && g(r),
            n)
          )
            for (l = 0; (o = r[l++]); ) _t.test(o.type || "") && n.push(o);
        return c;
      },
      cleanData: function (t) {
        for (
          var e, n, i, o, r = Z.event.special, s = 0;
          void 0 !== (n = t[s]);
          s++
        ) {
          if (
            Z.acceptData(n) &&
            ((o = n[vt.expando]), o && (e = vt.cache[o]))
          ) {
            if (e.events)
              for (i in e.events)
                r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, e.handle);
            vt.cache[o] && delete vt.cache[o];
          }
          delete yt.cache[n[yt.expando]];
        }
      },
    }),
    Z.fn.extend({
      text: function (t) {
        return mt(
          this,
          function (t) {
            return void 0 === t
              ? Z.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = h(this, t);
            e.appendChild(t);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = h(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var n, i = t ? Z.filter(t, this) : this, o = 0;
          null != (n = i[o]);
          o++
        )
          e || 1 !== n.nodeType || Z.cleanData(v(n)),
            n.parentNode &&
              (e && Z.contains(n.ownerDocument, n) && g(v(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (Z.cleanData(v(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null == t ? !1 : t),
          (e = null == e ? t : e),
          this.map(function () {
            return Z.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return mt(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !jt.test(t) &&
              !Mt[(At.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = t.replace(Ot, "<$1></$2>");
              try {
                for (; i > n; n++)
                  (e = this[n] || {}),
                    1 === e.nodeType &&
                      (Z.cleanData(v(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (o) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              Z.cleanData(v(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, e) {
        t = F.apply([], t);
        var n,
          i,
          o,
          r,
          s,
          a,
          u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          h = t[0],
          g = Z.isFunction(h);
        if (g || (l > 1 && "string" == typeof h && !G.checkClone && Dt.test(h)))
          return this.each(function (n) {
            var i = c.eq(n);
            g && (t[0] = h.call(this, n, i.html())), i.domManip(t, e);
          });
        if (
          l &&
          ((n = Z.buildFragment(t, this[0].ownerDocument, !1, this)),
          (i = n.firstChild),
          1 === n.childNodes.length && (n = i),
          i)
        ) {
          for (o = Z.map(v(n, "script"), d), r = o.length; l > u; u++)
            (s = n),
              u !== f &&
                ((s = Z.clone(s, !0, !0)), r && Z.merge(o, v(s, "script"))),
              e.call(this[u], s, u);
          if (r)
            for (
              a = o[o.length - 1].ownerDocument, Z.map(o, p), u = 0;
              r > u;
              u++
            )
              (s = o[u]),
                _t.test(s.type || "") &&
                  !vt.access(s, "globalEval") &&
                  Z.contains(a, s) &&
                  (s.src
                    ? Z._evalUrl && Z._evalUrl(s.src)
                    : Z.globalEval(s.textContent.replace(Pt, "")));
        }
        return this;
      },
    }),
    Z.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        Z.fn[t] = function (t) {
          for (var n, i = [], o = Z(t), r = o.length - 1, s = 0; r >= s; s++)
            (n = s === r ? this : this.clone(!0)),
              Z(o[s])[e](n),
              Q.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var zt,
    Wt = {},
    qt = /^margin/,
    Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
    Ht = function (e) {
      return e.ownerDocument.defaultView.opener
        ? e.ownerDocument.defaultView.getComputedStyle(e, null)
        : t.getComputedStyle(e, null);
    };
  !(function () {
    function e() {
      (s.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
        (s.innerHTML = ""),
        o.appendChild(r);
      var e = t.getComputedStyle(s, null);
      (n = "1%" !== e.top), (i = "4px" === e.width), o.removeChild(r);
    }
    var n,
      i,
      o = J.documentElement,
      r = J.createElement("div"),
      s = J.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (G.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (r.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      r.appendChild(s),
      t.getComputedStyle &&
        Z.extend(G, {
          pixelPosition: function () {
            return e(), n;
          },
          boxSizingReliable: function () {
            return null == i && e(), i;
          },
          reliableMarginRight: function () {
            var e,
              n = s.appendChild(J.createElement("div"));
            return (
              (n.style.cssText = s.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (n.style.marginRight = n.style.width = "0"),
              (s.style.width = "1px"),
              o.appendChild(r),
              (e = !parseFloat(t.getComputedStyle(n, null).marginRight)),
              o.removeChild(r),
              s.removeChild(n),
              e
            );
          },
        }));
  })(),
    (Z.swap = function (t, e, n, i) {
      var o,
        r,
        s = {};
      for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
      o = n.apply(t, i || []);
      for (r in e) t.style[r] = s[r];
      return o;
    });
  var Ft = /^(none|table(?!-c[ea]).+)/,
    Qt = new RegExp("^(" + xt + ")(.*)$", "i"),
    Ut = new RegExp("^([+-])=(" + xt + ")", "i"),
    Vt = { position: "absolute", visibility: "hidden", display: "block" },
    Xt = { letterSpacing: "0", fontWeight: "400" },
    Yt = ["Webkit", "O", "Moz", "ms"];
  Z.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = x(t, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          r,
          s,
          a = Z.camelCase(e),
          u = t.style;
        return (
          (e = Z.cssProps[a] || (Z.cssProps[a] = C(u, a))),
          (s = Z.cssHooks[e] || Z.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (o = s.get(t, !1, i))
              ? o
              : u[e]
            : ((r = typeof n),
              "string" === r &&
                (o = Ut.exec(n)) &&
                ((n = (o[1] + 1) * o[2] + parseFloat(Z.css(t, e))),
                (r = "number")),
              null != n &&
                n === n &&
                ("number" !== r || Z.cssNumber[a] || (n += "px"),
                G.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (u[e] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                  (u[e] = n)),
              void 0)
        );
      }
    },
    css: function (t, e, n, i) {
      var o,
        r,
        s,
        a = Z.camelCase(e);
      return (
        (e = Z.cssProps[a] || (Z.cssProps[a] = C(t.style, a))),
        (s = Z.cssHooks[e] || Z.cssHooks[a]),
        s && "get" in s && (o = s.get(t, !0, n)),
        void 0 === o && (o = x(t, e, i)),
        "normal" === o && e in Xt && (o = Xt[e]),
        "" === n || n
          ? ((r = parseFloat(o)), n === !0 || Z.isNumeric(r) ? r || 0 : o)
          : o
      );
    },
  }),
    Z.each(["height", "width"], function (t, e) {
      Z.cssHooks[e] = {
        get: function (t, n, i) {
          return n
            ? Ft.test(Z.css(t, "display")) && 0 === t.offsetWidth
              ? Z.swap(t, Vt, function () {
                  return S(t, e, i);
                })
              : S(t, e, i)
            : void 0;
        },
        set: function (t, n, i) {
          var o = i && Ht(t);
          return T(
            t,
            n,
            i ? $(t, e, i, "border-box" === Z.css(t, "boxSizing", !1, o), o) : 0
          );
        },
      };
    }),
    (Z.cssHooks.marginRight = E(G.reliableMarginRight, function (t, e) {
      return e
        ? Z.swap(t, { display: "inline-block" }, x, [t, "marginRight"])
        : void 0;
    })),
    Z.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (Z.cssHooks[t + e] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            4 > i;
            i++
          )
            o[t + Et[i] + e] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        qt.test(t) || (Z.cssHooks[t + e].set = T);
    }),
    Z.fn.extend({
      css: function (t, e) {
        return mt(
          this,
          function (t, e, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Z.isArray(e)) {
              for (i = Ht(t), o = e.length; o > s; s++)
                r[e[s]] = Z.css(t, e[s], !1, i);
              return r;
            }
            return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return k(this, !0);
      },
      hide: function () {
        return k(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Ct(this) ? Z(this).show() : Z(this).hide();
            });
      },
    }),
    (Z.Tween = L),
    (L.prototype = {
      constructor: L,
      init: function (t, e, n, i, o, r) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = o || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (Z.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = L.propHooks[this.prop];
        return t && t.get ? t.get(this) : L.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = L.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e = Z.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : L.propHooks._default.set(this),
          this
        );
      },
    }),
    (L.prototype.init.prototype = L.prototype),
    (L.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? ((e = Z.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
            : t.elem[t.prop];
        },
        set: function (t) {
          Z.fx.step[t.prop]
            ? Z.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop])
            ? Z.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (L.propHooks.scrollTop = L.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      },
    }),
    (Z.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (Z.fx = L.prototype.init),
    (Z.fx.step = {});
  var Gt,
    Jt,
    Kt = /^(?:toggle|show|hide)$/,
    Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
    te = /queueHooks$/,
    ee = [N],
    ne = {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e),
            i = n.cur(),
            o = Zt.exec(e),
            r = (o && o[3]) || (Z.cssNumber[t] ? "" : "px"),
            s =
              (Z.cssNumber[t] || ("px" !== r && +i)) &&
              Zt.exec(Z.css(n.elem, t)),
            a = 1,
            u = 20;
          if (s && s[3] !== r) {
            (r = r || s[3]), (o = o || []), (s = +i || 1);
            do (a = a || ".5"), (s /= a), Z.style(n.elem, t, s + r);
            while (a !== (a = n.cur() / i) && 1 !== a && --u);
          }
          return (
            o &&
              ((s = n.start = +s || +i || 0),
              (n.unit = r),
              (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
            n
          );
        },
      ],
    };
  (Z.Animation = Z.extend(D, {
    tweener: function (t, e) {
      Z.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var n, i = 0, o = t.length; o > i; i++)
        (n = t[i]), (ne[n] = ne[n] || []), ne[n].unshift(e);
    },
    prefilter: function (t, e) {
      e ? ee.unshift(t) : ee.push(t);
    },
  })),
    (Z.speed = function (t, e, n) {
      var i =
        t && "object" == typeof t
          ? Z.extend({}, t)
          : {
              complete: n || (!n && e) || (Z.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !Z.isFunction(e) && e),
            };
      return (
        (i.duration = Z.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in Z.fx.speeds
          ? Z.fx.speeds[i.duration]
          : Z.fx.speeds._default),
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          Z.isFunction(i.old) && i.old.call(this),
            i.queue && Z.dequeue(this, i.queue);
        }),
        i
      );
    }),
    Z.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(Ct)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function (t, e, n, i) {
        var o = Z.isEmptyObject(t),
          r = Z.speed(e, n, i),
          s = function () {
            var e = D(this, Z.extend({}, t), r);
            (o || vt.get(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (t, e, n) {
        var i = function (t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          "string" != typeof t && ((n = e), (e = t), (t = void 0)),
          e && t !== !1 && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              o = null != t && t + "queueHooks",
              r = Z.timers,
              s = vt.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && te.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != t && r[o].queue !== t) ||
                (r[o].anim.stop(n), (e = !1), r.splice(o, 1));
            (e || !n) && Z.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          t !== !1 && (t = t || "fx"),
          this.each(function () {
            var e,
              n = vt.get(this),
              i = n[t + "queue"],
              o = n[t + "queueHooks"],
              r = Z.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                Z.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length;
              e--;

            )
              r[e].elem === this &&
                r[e].queue === t &&
                (r[e].anim.stop(!0), r.splice(e, 1));
            for (e = 0; s > e; e++)
              i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Z.each(["toggle", "show", "hide"], function (t, e) {
      var n = Z.fn[e];
      Z.fn[e] = function (t, i, o) {
        return null == t || "boolean" == typeof t
          ? n.apply(this, arguments)
          : this.animate(O(e, !0), t, i, o);
      };
    }),
    Z.each(
      {
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        Z.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (Z.timers = []),
    (Z.fx.tick = function () {
      var t,
        e = 0,
        n = Z.timers;
      for (Gt = Z.now(); e < n.length; e++)
        (t = n[e]), t() || n[e] !== t || n.splice(e--, 1);
      n.length || Z.fx.stop(), (Gt = void 0);
    }),
    (Z.fx.timer = function (t) {
      Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop();
    }),
    (Z.fx.interval = 13),
    (Z.fx.start = function () {
      Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval));
    }),
    (Z.fx.stop = function () {
      clearInterval(Jt), (Jt = null);
    }),
    (Z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Z.fn.delay = function (t, e) {
      return (
        (t = Z.fx ? Z.fx.speeds[t] || t : t),
        (e = e || "fx"),
        this.queue(e, function (e, n) {
          var i = setTimeout(e, t);
          n.stop = function () {
            clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var t = J.createElement("input"),
        e = J.createElement("select"),
        n = e.appendChild(J.createElement("option"));
      (t.type = "checkbox"),
        (G.checkOn = "" !== t.value),
        (G.optSelected = n.selected),
        (e.disabled = !0),
        (G.optDisabled = !n.disabled),
        (t = J.createElement("input")),
        (t.value = "t"),
        (t.type = "radio"),
        (G.radioValue = "t" === t.value);
    })();
  var ie,
    oe,
    re = Z.expr.attrHandle;
  Z.fn.extend({
    attr: function (t, e) {
      return mt(this, Z.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        Z.removeAttr(this, t);
      });
    },
  }),
    Z.extend({
      attr: function (t, e, n) {
        var i,
          o,
          r = t.nodeType;
        if (t && 3 !== r && 8 !== r && 2 !== r)
          return typeof t.getAttribute === $t
            ? Z.prop(t, e, n)
            : ((1 === r && Z.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? oe : ie))),
              void 0 === n
                ? i && "get" in i && null !== (o = i.get(t, e))
                  ? o
                  : ((o = Z.find.attr(t, e)), null == o ? void 0 : o)
                : null !== n
                ? i && "set" in i && void 0 !== (o = i.set(t, n, e))
                  ? o
                  : (t.setAttribute(e, n + ""), n)
                : void Z.removeAttr(t, e));
      },
      removeAttr: function (t, e) {
        var n,
          i,
          o = 0,
          r = e && e.match(dt);
        if (r && 1 === t.nodeType)
          for (; (n = r[o++]); )
            (i = Z.propFix[n] || n),
              Z.expr.match.bool.test(n) && (t[i] = !1),
              t.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!G.radioValue && "radio" === e && Z.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
    }),
    (oe = {
      set: function (t, e, n) {
        return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n;
      },
    }),
    Z.each(Z.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = re[e] || Z.find.attr;
      re[e] = function (t, e, i) {
        var o, r;
        return (
          i ||
            ((r = re[e]),
            (re[e] = o),
            (o = null != n(t, e, i) ? e.toLowerCase() : null),
            (re[e] = r)),
          o
        );
      };
    });
  var se = /^(?:input|select|textarea|button)$/i;
  Z.fn.extend({
    prop: function (t, e) {
      return mt(this, Z.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[Z.propFix[t] || t];
      });
    },
  }),
    Z.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, e, n) {
        var i,
          o,
          r,
          s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)
          return (
            (r = 1 !== s || !Z.isXMLDoc(t)),
            r && ((e = Z.propFix[e] || e), (o = Z.propHooks[e])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(t, n, e))
                ? i
                : (t[e] = n)
              : o && "get" in o && null !== (i = o.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href
              ? t.tabIndex
              : -1;
          },
        },
      },
    }),
    G.optSelected ||
      (Z.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
      }),
    Z.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Z.propFix[this.toLowerCase()] = this;
      }
    );
  var ae = /[\t\r\n\f]/g;
  Z.fn.extend({
    addClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a = "string" == typeof t && t,
        u = 0,
        l = this.length;
      if (Z.isFunction(t))
        return this.each(function (e) {
          Z(this).addClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(dt) || []; l > u; u++)
          if (
            ((n = this[u]),
            (i =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")))
          ) {
            for (r = 0; (o = e[r++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            (s = Z.trim(i)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        s,
        a = 0 === arguments.length || ("string" == typeof t && t),
        u = 0,
        l = this.length;
      if (Z.isFunction(t))
        return this.each(function (e) {
          Z(this).removeClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(dt) || []; l > u; u++)
          if (
            ((n = this[u]),
            (i =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(ae, " ") : "")))
          ) {
            for (r = 0; (o = e[r++]); )
              for (; i.indexOf(" " + o + " ") >= 0; )
                i = i.replace(" " + o + " ", " ");
            (s = t ? Z.trim(i) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var n = typeof t;
      return "boolean" == typeof e && "string" === n
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : Z.isFunction(t)
        ? this.each(function (n) {
            Z(this).toggleClass(t.call(this, n, this.className, e), e);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var e, i = 0, o = Z(this), r = t.match(dt) || [];
                (e = r[i++]);

              )
                o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
            else
              (n === $t || "boolean" === n) &&
                (this.className &&
                  vt.set(this, "__className__", this.className),
                (this.className =
                  this.className || t === !1
                    ? ""
                    : vt.get(this, "__className__") || ""));
          });
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0
        )
          return !0;
      return !1;
    },
  });
  var ue = /\r/g;
  Z.fn.extend({
    val: function (t) {
      var e,
        n,
        i,
        o = this[0];
      {
        if (arguments.length)
          return (
            (i = Z.isFunction(t)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                ((o = i ? t.call(this, n, Z(this).val()) : t),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : Z.isArray(o) &&
                    (o = Z.map(o, function (t) {
                      return null == t ? "" : t + "";
                    })),
                (e =
                  Z.valHooks[this.type] ||
                  Z.valHooks[this.nodeName.toLowerCase()]),
                (e && "set" in e && void 0 !== e.set(this, o, "value")) ||
                  (this.value = o));
            })
          );
        if (o)
          return (
            (e = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()]),
            e && "get" in e && void 0 !== (n = e.get(o, "value"))
              ? n
              : ((n = o.value),
                "string" == typeof n ? n.replace(ue, "") : null == n ? "" : n)
          );
      }
    },
  }),
    Z.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = Z.find.attr(t, "value");
            return null != e ? e : Z.trim(Z.text(t));
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                n,
                i = t.options,
                o = t.selectedIndex,
                r = "select-one" === t.type || 0 > o,
                s = r ? null : [],
                a = r ? o + 1 : i.length,
                u = 0 > o ? a : r ? o : 0;
              a > u;
              u++
            )
              if (
                ((n = i[u]),
                (n.selected || u === o) &&
                  (G.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !Z.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((e = Z(n).val()), r)) return e;
                s.push(e);
              }
            return s;
          },
          set: function (t, e) {
            for (
              var n, i, o = t.options, r = Z.makeArray(e), s = o.length;
              s--;

            )
              (i = o[s]), (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
            return n || (t.selectedIndex = -1), r;
          },
        },
      },
    }),
    Z.each(["radio", "checkbox"], function () {
      (Z.valHooks[this] = {
        set: function (t, e) {
          return Z.isArray(e)
            ? (t.checked = Z.inArray(Z(t).val(), e) >= 0)
            : void 0;
        },
      }),
        G.checkOn ||
          (Z.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    Z.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        Z.fn[e] = function (t, n) {
          return arguments.length > 0
            ? this.on(e, null, t, n)
            : this.trigger(e);
        };
      }
    ),
    Z.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
    });
  var le = Z.now(),
    ce = /\?/;
  (Z.parseJSON = function (t) {
    return JSON.parse(t + "");
  }),
    (Z.parseXML = function (t) {
      var e, n;
      if (!t || "string" != typeof t) return null;
      try {
        (n = new DOMParser()), (e = n.parseFromString(t, "text/xml"));
      } catch (i) {
        e = void 0;
      }
      return (
        (!e || e.getElementsByTagName("parsererror").length) &&
          Z.error("Invalid XML: " + t),
        e
      );
    });
  var fe = /#.*$/,
    he = /([?&])_=[^&]*/,
    de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ge = /^(?:GET|HEAD)$/,
    me = /^\/\//,
    ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ye = {},
    be = {},
    we = "*/".concat("*"),
    xe = t.location.href,
    Ee = ve.exec(xe.toLowerCase()) || [];
  Z.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: xe,
      type: "GET",
      isLocal: pe.test(Ee[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": we,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": Z.parseJSON,
        "text xml": Z.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (t, e) {
      return e ? P(P(t, Z.ajaxSettings), e) : P(Z.ajaxSettings, t);
    },
    ajaxPrefilter: _(ye),
    ajaxTransport: _(be),
    ajax: function (t, e) {
      function n(t, e, n, s) {
        var u,
          c,
          v,
          y,
          w,
          E = e;
        2 !== b &&
          ((b = 2),
          a && clearTimeout(a),
          (i = void 0),
          (r = s || ""),
          (x.readyState = t > 0 ? 4 : 0),
          (u = (t >= 200 && 300 > t) || 304 === t),
          n && (y = M(f, x, n)),
          (y = z(f, y, x, u)),
          u
            ? (f.ifModified &&
                ((w = x.getResponseHeader("Last-Modified")),
                w && (Z.lastModified[o] = w),
                (w = x.getResponseHeader("etag")),
                w && (Z.etag[o] = w)),
              204 === t || "HEAD" === f.type
                ? (E = "nocontent")
                : 304 === t
                ? (E = "notmodified")
                : ((E = y.state), (c = y.data), (v = y.error), (u = !v)))
            : ((v = E), (t || !E) && ((E = "error"), 0 > t && (t = 0))),
          (x.status = t),
          (x.statusText = (e || E) + ""),
          u ? p.resolveWith(h, [c, E, x]) : p.rejectWith(h, [x, E, v]),
          x.statusCode(m),
          (m = void 0),
          l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? c : v]),
          g.fireWith(h, [x, E]),
          l &&
            (d.trigger("ajaxComplete", [x, f]),
            --Z.active || Z.event.trigger("ajaxStop")));
      }
      "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
      var i,
        o,
        r,
        s,
        a,
        u,
        l,
        c,
        f = Z.ajaxSetup({}, e),
        h = f.context || f,
        d = f.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
        p = Z.Deferred(),
        g = Z.Callbacks("once memory"),
        m = f.statusCode || {},
        v = {},
        y = {},
        b = 0,
        w = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (t) {
            var e;
            if (2 === b) {
              if (!s)
                for (s = {}; (e = de.exec(r)); ) s[e[1].toLowerCase()] = e[2];
              e = s[t.toLowerCase()];
            }
            return null == e ? null : e;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? r : null;
          },
          setRequestHeader: function (t, e) {
            var n = t.toLowerCase();
            return b || ((t = y[n] = y[n] || t), (v[t] = e)), this;
          },
          overrideMimeType: function (t) {
            return b || (f.mimeType = t), this;
          },
          statusCode: function (t) {
            var e;
            if (t)
              if (2 > b) for (e in t) m[e] = [m[e], t[e]];
              else x.always(t[x.status]);
            return this;
          },
          abort: function (t) {
            var e = t || w;
            return i && i.abort(e), n(0, e), this;
          },
        };
      if (
        ((p.promise(x).complete = g.add),
        (x.success = x.done),
        (x.error = x.fail),
        (f.url = ((t || f.url || xe) + "")
          .replace(fe, "")
          .replace(me, Ee[1] + "//")),
        (f.type = e.method || e.type || f.method || f.type),
        (f.dataTypes = Z.trim(f.dataType || "*")
          .toLowerCase()
          .match(dt) || [""]),
        null == f.crossDomain &&
          ((u = ve.exec(f.url.toLowerCase())),
          (f.crossDomain = !(
            !u ||
            (u[1] === Ee[1] &&
              u[2] === Ee[2] &&
              (u[3] || ("http:" === u[1] ? "80" : "443")) ===
                (Ee[3] || ("http:" === Ee[1] ? "80" : "443")))
          ))),
        f.data &&
          f.processData &&
          "string" != typeof f.data &&
          (f.data = Z.param(f.data, f.traditional)),
        R(ye, f, e, x),
        2 === b)
      )
        return x;
      (l = Z.event && f.global),
        l && 0 === Z.active++ && Z.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !ge.test(f.type)),
        (o = f.url),
        f.hasContent ||
          (f.data &&
            ((o = f.url += (ce.test(o) ? "&" : "?") + f.data), delete f.data),
          f.cache === !1 &&
            (f.url = he.test(o)
              ? o.replace(he, "$1_=" + le++)
              : o + (ce.test(o) ? "&" : "?") + "_=" + le++)),
        f.ifModified &&
          (Z.lastModified[o] &&
            x.setRequestHeader("If-Modified-Since", Z.lastModified[o]),
          Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])),
        ((f.data && f.hasContent && f.contentType !== !1) || e.contentType) &&
          x.setRequestHeader("Content-Type", f.contentType),
        x.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + we + "; q=0.01" : "")
            : f.accepts["*"]
        );
      for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(h, x, f) === !1 || 2 === b))
        return x.abort();
      w = "abort";
      for (c in { success: 1, error: 1, complete: 1 }) x[c](f[c]);
      if ((i = R(be, f, e, x))) {
        (x.readyState = 1),
          l && d.trigger("ajaxSend", [x, f]),
          f.async &&
            f.timeout > 0 &&
            (a = setTimeout(function () {
              x.abort("timeout");
            }, f.timeout));
        try {
          (b = 1), i.send(v, n);
        } catch (E) {
          if (!(2 > b)) throw E;
          n(-1, E);
        }
      } else n(-1, "No Transport");
      return x;
    },
    getJSON: function (t, e, n) {
      return Z.get(t, e, n, "json");
    },
    getScript: function (t, e) {
      return Z.get(t, void 0, e, "script");
    },
  }),
    Z.each(["get", "post"], function (t, e) {
      Z[e] = function (t, n, i, o) {
        return (
          Z.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
          Z.ajax({ url: t, type: e, dataType: o, data: n, success: i })
        );
      };
    }),
    (Z._evalUrl = function (t) {
      return Z.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    Z.fn.extend({
      wrapAll: function (t) {
        var e;
        return Z.isFunction(t)
          ? this.each(function (e) {
              Z(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = Z(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this);
      },
      wrapInner: function (t) {
        return Z.isFunction(t)
          ? this.each(function (e) {
              Z(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = Z(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = Z.isFunction(t);
        return this.each(function (n) {
          Z(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (Z.expr.filters.hidden = function (t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0;
    }),
    (Z.expr.filters.visible = function (t) {
      return !Z.expr.filters.hidden(t);
    });
  var Ce = /%20/g,
    Te = /\[\]$/,
    $e = /\r?\n/g,
    Se = /^(?:submit|button|image|reset|file)$/i,
    ke = /^(?:input|select|textarea|keygen)/i;
  (Z.param = function (t, e) {
    var n,
      i = [],
      o = function (t, e) {
        (e = Z.isFunction(e) ? e() : null == e ? "" : e),
          (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional),
      Z.isArray(t) || (t.jquery && !Z.isPlainObject(t)))
    )
      Z.each(t, function () {
        o(this.name, this.value);
      });
    else for (n in t) W(n, t[n], e, o);
    return i.join("&").replace(Ce, "+");
  }),
    Z.fn.extend({
      serialize: function () {
        return Z.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = Z.prop(this, "elements");
          return t ? Z.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !Z(this).is(":disabled") &&
              ke.test(this.nodeName) &&
              !Se.test(t) &&
              (this.checked || !Tt.test(t))
            );
          })
          .map(function (t, e) {
            var n = Z(this).val();
            return null == n
              ? null
              : Z.isArray(n)
              ? Z.map(n, function (t) {
                  return { name: e.name, value: t.replace($e, "\r\n") };
                })
              : { name: e.name, value: n.replace($e, "\r\n") };
          })
          .get();
      },
    }),
    (Z.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (t) {}
    });
  var Le = 0,
    Ie = {},
    Oe = { 0: 200, 1223: 204 },
    Ae = Z.ajaxSettings.xhr();
  t.attachEvent &&
    t.attachEvent("onunload", function () {
      for (var t in Ie) Ie[t]();
    }),
    (G.cors = !!Ae && "withCredentials" in Ae),
    (G.ajax = Ae = !!Ae),
    Z.ajaxTransport(function (t) {
      var e;
      return G.cors || (Ae && !t.crossDomain)
        ? {
            send: function (n, i) {
              var o,
                r = t.xhr(),
                s = ++Le;
              if (
                (r.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) r[o] = t.xhrFields[o];
              t.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest");
              for (o in n) r.setRequestHeader(o, n[o]);
              (e = function (t) {
                return function () {
                  e &&
                    (delete Ie[s],
                    (e = r.onload = r.onerror = null),
                    "abort" === t
                      ? r.abort()
                      : "error" === t
                      ? i(r.status, r.statusText)
                      : i(
                          Oe[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = e()),
                (r.onerror = e("error")),
                (e = Ie[s] = e("abort"));
              try {
                r.send((t.hasContent && t.data) || null);
              } catch (a) {
                if (e) throw a;
              }
            },
            abort: function () {
              e && e();
            },
          }
        : void 0;
    }),
    Z.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return Z.globalEval(t), t;
        },
      },
    }),
    Z.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    Z.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, n;
        return {
          send: function (i, o) {
            (e = Z("<script>")
              .prop({ async: !0, charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (n = function (t) {
                  e.remove(),
                    (n = null),
                    t && o("error" === t.type ? 404 : 200, t.type);
                })
              )),
              J.head.appendChild(e[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Ne = [],
    je = /(=)\?(?=&|$)|\?\?/;
  Z.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ne.pop() || Z.expando + "_" + le++;
      return (this[t] = !0), t;
    },
  }),
    Z.ajaxPrefilter("json jsonp", function (e, n, i) {
      var o,
        r,
        s,
        a =
          e.jsonp !== !1 &&
          (je.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              je.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((o = e.jsonpCallback = Z.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(je, "$1" + o))
            : e.jsonp !== !1 &&
              (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
          (e.converters["script json"] = function () {
            return s || Z.error(o + " was not called"), s[0];
          }),
          (e.dataTypes[0] = "json"),
          (r = t[o]),
          (t[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            (t[o] = r),
              e[o] && ((e.jsonpCallback = n.jsonpCallback), Ne.push(o)),
              s && Z.isFunction(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script")
        : void 0;
    }),
    (Z.parseHTML = function (t, e, n) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((n = e), (e = !1)), (e = e || J);
      var i = st.exec(t),
        o = !n && [];
      return i
        ? [e.createElement(i[1])]
        : ((i = Z.buildFragment([t], e, o)),
          o && o.length && Z(o).remove(),
          Z.merge([], i.childNodes));
    });
  var De = Z.fn.load;
  (Z.fn.load = function (t, e, n) {
    if ("string" != typeof t && De) return De.apply(this, arguments);
    var i,
      o,
      r,
      s = this,
      a = t.indexOf(" ");
    return (
      a >= 0 && ((i = Z.trim(t.slice(a))), (t = t.slice(0, a))),
      Z.isFunction(e)
        ? ((n = e), (e = void 0))
        : e && "object" == typeof e && (o = "POST"),
      s.length > 0 &&
        Z.ajax({ url: t, type: o, dataType: "html", data: e })
          .done(function (t) {
            (r = arguments),
              s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t);
          })
          .complete(
            n &&
              function (t, e) {
                s.each(n, r || [t.responseText, e, t]);
              }
          ),
      this
    );
  }),
    Z.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        Z.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (Z.expr.filters.animated = function (t) {
      return Z.grep(Z.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var _e = t.document.documentElement;
  (Z.offset = {
    setOffset: function (t, e, n) {
      var i,
        o,
        r,
        s,
        a,
        u,
        l,
        c = Z.css(t, "position"),
        f = Z(t),
        h = {};
      "static" === c && (t.style.position = "relative"),
        (a = f.offset()),
        (r = Z.css(t, "top")),
        (u = Z.css(t, "left")),
        (l =
          ("absolute" === c || "fixed" === c) && (r + u).indexOf("auto") > -1),
        l
          ? ((i = f.position()), (s = i.top), (o = i.left))
          : ((s = parseFloat(r) || 0), (o = parseFloat(u) || 0)),
        Z.isFunction(e) && (e = e.call(t, n, a)),
        null != e.top && (h.top = e.top - a.top + s),
        null != e.left && (h.left = e.left - a.left + o),
        "using" in e ? e.using.call(t, h) : f.css(h);
    },
  }),
    Z.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                Z.offset.setOffset(this, t, e);
              });
        var e,
          n,
          i = this[0],
          o = { top: 0, left: 0 },
          r = i && i.ownerDocument;
        if (r)
          return (
            (e = r.documentElement),
            Z.contains(e, i)
              ? (typeof i.getBoundingClientRect !== $t &&
                  (o = i.getBoundingClientRect()),
                (n = q(r)),
                {
                  top: o.top + n.pageYOffset - e.clientTop,
                  left: o.left + n.pageXOffset - e.clientLeft,
                })
              : o
          );
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === Z.css(n, "position")
              ? (e = n.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                Z.nodeName(t[0], "html") || (i = t.offset()),
                (i.top += Z.css(t[0], "borderTopWidth", !0)),
                (i.left += Z.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - i.top - Z.css(n, "marginTop", !0),
              left: e.left - i.left - Z.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || _e;
            t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");

          )
            t = t.offsetParent;
          return t || _e;
        });
      },
    }),
    Z.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      e,
      n
    ) {
      var i = "pageYOffset" === n;
      Z.fn[e] = function (o) {
        return mt(
          this,
          function (e, o, r) {
            var s = q(e);
            return void 0 === r
              ? s
                ? s[n]
                : e[o]
              : void (s
                  ? s.scrollTo(i ? t.pageXOffset : r, i ? r : t.pageYOffset)
                  : (e[o] = r));
          },
          e,
          o,
          arguments.length,
          null
        );
      };
    }),
    Z.each(["top", "left"], function (t, e) {
      Z.cssHooks[e] = E(G.pixelPosition, function (t, n) {
        return n
          ? ((n = x(t, e)), Bt.test(n) ? Z(t).position()[e] + "px" : n)
          : void 0;
      });
    }),
    Z.each({ Height: "height", Width: "width" }, function (t, e) {
      Z.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (
        n,
        i
      ) {
        Z.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            s = n || (i === !0 || o === !0 ? "margin" : "border");
          return mt(
            this,
            function (e, n, i) {
              var o;
              return Z.isWindow(e)
                ? e.document.documentElement["client" + t]
                : 9 === e.nodeType
                ? ((o = e.documentElement),
                  Math.max(
                    e.body["scroll" + t],
                    o["scroll" + t],
                    e.body["offset" + t],
                    o["offset" + t],
                    o["client" + t]
                  ))
                : void 0 === i
                ? Z.css(e, n, s)
                : Z.style(e, n, i, s);
            },
            e,
            r ? i : void 0,
            r,
            null
          );
        };
      });
    }),
    (Z.fn.size = function () {
      return this.length;
    }),
    (Z.fn.andSelf = Z.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Z;
      });
  var Re = t.jQuery,
    Pe = t.$;
  return (
    (Z.noConflict = function (e) {
      return t.$ === Z && (t.$ = Pe), e && t.jQuery === Z && (t.jQuery = Re), Z;
    }),
    typeof e === $t && (t.jQuery = t.$ = Z),
    Z
  );
}),
  function () {
    "use strict";
    function t() {}
    function e(t, e) {
      for (var n = t.length; n--; ) if (t[n].listener === e) return n;
      return -1;
    }
    function n(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var i = t.prototype,
      o = this,
      r = o.EventEmitter;
    (i.getListeners = function (t) {
      var e,
        n,
        i = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]);
      } else e = i[t] || (i[t] = []);
      return e;
    }),
      (i.flattenListeners = function (t) {
        var e,
          n = [];
        for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
        return n;
      }),
      (i.getListenersAsObject = function (t) {
        var e,
          n = this.getListeners(t);
        return n instanceof Array && ((e = {}), (e[t] = n)), e || n;
      }),
      (i.addListener = function (t, n) {
        var i,
          o = this.getListenersAsObject(t),
          r = "object" == typeof n;
        for (i in o)
          o.hasOwnProperty(i) &&
            -1 === e(o[i], n) &&
            o[i].push(r ? n : { listener: n, once: !1 });
        return this;
      }),
      (i.on = n("addListener")),
      (i.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (i.once = n("addOnceListener")),
      (i.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (i.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (i.removeListener = function (t, n) {
        var i,
          o,
          r = this.getListenersAsObject(t);
        for (o in r)
          r.hasOwnProperty(o) &&
            ((i = e(r[o], n)), -1 !== i && r[o].splice(i, 1));
        return this;
      }),
      (i.off = n("removeListener")),
      (i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (i.manipulateListeners = function (t, e, n) {
        var i,
          o,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (i = n.length; i--; ) r.call(this, e, n[i]);
        else
          for (i in e)
            e.hasOwnProperty(i) &&
              (o = e[i]) &&
              ("function" == typeof o
                ? r.call(this, i, o)
                : s.call(this, i, o));
        return this;
      }),
      (i.removeEvent = function (t) {
        var e,
          n = typeof t,
          i = this._getEvents();
        if ("string" === n) delete i[t];
        else if (t instanceof RegExp)
          for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this;
      }),
      (i.removeAllListeners = n("removeEvent")),
      (i.emitEvent = function (t, e) {
        var n,
          i,
          o,
          r,
          s,
          a = this.getListenersAsObject(t);
        for (r in a)
          if (a.hasOwnProperty(r))
            for (n = a[r].slice(0), o = n.length; o--; )
              (i = n[o]),
                i.once === !0 && this.removeListener(t, i.listener),
                (s = i.listener.apply(this, e || [])),
                s === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (i.trigger = n("emitEvent")),
      (i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (i.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (i._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (o.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (o.EventEmitter = t);
  }.call(this),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["eventEmitter/EventEmitter"], function (n) {
          return e(t, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("wolfy87-eventemitter")))
      : (t.imagesLoaded = e(t, t.EventEmitter));
  })(window, function (t, e) {
    function n(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function i(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ("number" == typeof t.length)
        for (var n = 0; n < t.length; n++) e.push(t[n]);
      else e.push(t);
      return e;
    }
    function o(t, e, r) {
      return this instanceof o
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = i(t)),
          (this.options = n({}, this.options)),
          "function" == typeof e ? (r = e) : n(this.options, e),
          r && this.on("always", r),
          this.getImages(),
          a && (this.jqDeferred = new a.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(t, e, r);
    }
    function r(t) {
      this.img = t;
    }
    function s(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var a = t.jQuery,
      u = t.console;
    (o.prototype = Object.create(e.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
          for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var o = n[i];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = t.querySelectorAll(this.options.background);
            for (i = 0; i < r.length; i++) {
              var s = r[i];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage);
            null !== i;

          ) {
            var o = i && i[2];
            o && this.addBackground(o, t), (i = n.exec(e.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e);
      }),
      (o.prototype.addBackground = function (t, e) {
        var n = new s(t, e);
        this.images.push(n);
      }),
      (o.prototype.check = function () {
        function t(t, n, i) {
          setTimeout(function () {
            e.progress(t, n, i);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (t, e, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emit("progress", this, t, e),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && u && u.log("progress: " + n, t, e);
      }),
      (o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emit(t, this),
          this.emit("always", this),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (r.prototype = Object.create(e.prototype)),
      (r.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emit("progress", this, this.img, e);
      }),
      (r.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
      }),
      (s.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emit("progress", this, this.element, e);
      }),
      (o.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery),
          e &&
            ((a = e),
            (a.fn.imagesLoaded = function (t, e) {
              var n = new o(this, t, e);
              return n.jqDeferred.promise(a(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
var freezeframe = (function (t) {
  function e(t) {
    var e;
    if (
      ((this.options = {
        selector: ".freezeframe",
        animation_play_duration: 5e3,
        non_touch_device_trigger_event: "hover",
      }),
      (e = "string" == typeof t ? { selector: t } : t))
    )
      for (attribute in e)
        attribute in this.options
          ? (this.options[attribute] = e[attribute])
          : n(attribute + "not a valid option");
    this.is_touch_device =
      "ontouchstart" in window || "onmsgesturechange" in window;
  }
  var n = function (t) {
      console.warn("\u2728 freezeframe.js \u2728 : " + t);
    },
    o = function () {
      return 0 == this.images.length ? !1 : !0;
    },
    r = function (e, i) {
      var o;
      if (void 0 != e && i.length > 1) {
        if (((o = i.filter(t(e))), 0 == o.length))
          return n("no images found for selector '" + e + "'"), !1;
      } else o = i;
      return o;
    },
    s = function (e) {
      var n = e.siblings("canvas"),
        i = "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
        o = e[0].clientWidth,
        r = e[0].clientHeight;
      n.attr({ width: o, height: r }),
        (context = n[0].getContext("2d")),
        context.drawImage(e[0], 0, 0, o, r),
        n.addClass("ff-canvas-ready").on(i, function () {
          t(this).off(i), e.addClass("ff-image-ready");
        });
    };
  return (
    (e.prototype.capture = function (e) {
      var o;
      if (void 0 !== e) o = e;
      else {
        if (void 0 === this.options.selector)
          return (
            n("no selector passed to capture function or set in options"), !1
          );
        o = this.options.selector;
      }
      for (
        void 0 == this.images && (this.images = t()),
          this.images = this.images.add(t("img" + o)),
          i = 0;
        i < this.images.length;
        i++
      )
        "gif" !==
          this.images[i].src.split(".").pop().toLowerCase().substring(0, 3) &&
          this.images.splice(i, 1);
      return 0 == this.images.length
        ? (console.warn('freezeframe : no gifs found for selector "' + o + '"'),
          !1)
        : this;
    }),
    (e.prototype.setup = function (e) {
      var i = this,
        a = this.images.not(".ff-setup"),
        u = ["ff-container"];
      return o.call(i)
        ? 0 == a.length
          ? (n("unable to run setup(), no images require setup"), !1)
          : (r.call(i, e, a).each(function (e) {
              var n = t(this);
              n.addClass("ff-setup ff-image"),
                n.hasClass("freezeframe-responsive") && u.push("ff-responsive"),
                ($canvas = t("<canvas />", { class: "ff-canvas" })
                  .attr({ width: 0, height: 0 })
                  .insertBefore(n)),
                n.add($canvas).wrapAll(t("<div />", { class: u.join(" ") }));
            }),
            imagesLoaded(a).on("progress", function (e, n) {
              s.call(i, t(n.img));
            }),
            this)
        : (n("unable to run setup(), no images captured"), !1);
    }),
    (e.prototype.attach = function (e) {
      var i = this;
      return o.call(i)
        ? (r.call(i, e, i.images).each(function (e) {
            var n = t(this),
              o = t(this).siblings("canvas");
            if (
              (((!i.is_touch_device &&
                "hover" == i.options.non_touch_device_trigger_event) ||
                i.is_touch_device) &&
                (n.mouseenter(function () {
                  !(function () {
                    n.hasClass("ff-image-ready") &&
                      (n.attr("src", n[0].src),
                      o
                        .removeClass("ff-canvas-ready")
                        .addClass("ff-canvas-active"));
                  })();
                }),
                n.mouseleave(function () {
                  !(function () {
                    n.hasClass("ff-image-ready") &&
                      o
                        .removeClass("ff-canvas-active")
                        .addClass("ff-canvas-ready");
                  })();
                })),
              (!i.is_touch_device &&
                "click" == i.options.non_touch_device_trigger_event) ||
                i.is_touch_device)
            ) {
              var r;
              n.click(function () {
                !(function () {
                  var t = o.hasClass("ff-canvas-active");
                  n.hasClass("ff-image-ready") &&
                    (t
                      ? (i.options.animation_play_duration != 1 / 0 &&
                          clearTimeout(r),
                        o
                          .removeClass("ff-canvas-active")
                          .addClass("ff-canvas-ready"))
                      : (n.attr("src", n[0].src),
                        o
                          .removeClass("ff-canvas-ready")
                          .addClass("ff-canvas-active"),
                        i.options.animation_play_duration != 1 / 0 &&
                          (r = setTimeout(function () {
                            o.removeClass("ff-canvas-active").addClass(
                              "ff-canvas-ready"
                            );
                          }, i.options.animation_play_duration))));
                })();
              });
            }
          }),
          this)
        : (n("unable to run attach(), no images captured"), !1);
    }),
    (e.prototype.trigger = function (e) {
      var i = this,
        o = 0;
      return (
        r.call(i, e, i.images).each(function (e) {
          t(this).hasClass("ff-image-ready")
            ? (t(this).attr("src", t(this)[0].src),
              t(this)
                .siblings("canvas")
                .removeClass("ff-canvas-ready")
                .addClass("ff-canvas-active"))
            : (n("image not done processing ! " + t(this).attr("src")), o++);
        }),
        0 == o ? !0 : !1
      );
    }),
    (e.prototype.release = function (e) {
      var i = this,
        o = 0;
      return (
        r.call(i, e, i.images).each(function (e) {
          t(this).hasClass("ff-image-ready")
            ? t(this)
                .siblings("canvas")
                .removeClass("ff-canvas-active")
                .addClass("ff-canvas-ready")
            : (n("image not done processing ! " + t(this).attr("src")), o++);
        }),
        0 == o ? !0 : !1
      );
    }),
    (e.prototype.freeze = function () {
      return this.capture().setup().attach(), this;
    }),
    e
  );
})(jQuery);
($.fn.freezeframe = function (t) {
  if (0 == this.length)
    return (
      console.warn(
        "\u2728 freezeframe.js \u2728 : no images found for selector " +
          this.selector
      ),
      !1
    );
  var e = new freezeframe(t);
  (e.images = this), e.setup().attach();
  var n = this,
    i = ["trigger", "release"];
  return (
    i.forEach(function (t) {
      n[t] = function () {
        return e[t](n.selector), n;
      };
    }),
    this
  );
}),
  (jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (t, e, n, i, o) {
      return jQuery.easing[jQuery.easing.def](t, e, n, i, o);
    },
    easeInQuad: function (t, e, n, i, o) {
      return i * (e /= o) * e + n;
    },
    easeOutQuad: function (t, e, n, i, o) {
      return -i * (e /= o) * (e - 2) + n;
    },
    easeInOutQuad: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e + n
        : (-i / 2) * (--e * (e - 2) - 1) + n;
    },
    easeInCubic: function (t, e, n, i, o) {
      return i * (e /= o) * e * e + n;
    },
    easeOutCubic: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e + 1) + n;
    },
    easeInOutCubic: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e + 2) + n;
    },
    easeInQuart: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e + n;
    },
    easeOutQuart: function (t, e, n, i, o) {
      return -i * ((e = e / o - 1) * e * e * e - 1) + n;
    },
    easeInOutQuart: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e + n
        : (-i / 2) * ((e -= 2) * e * e * e - 2) + n;
    },
    easeInQuint: function (t, e, n, i, o) {
      return i * (e /= o) * e * e * e * e + n;
    },
    easeOutQuint: function (t, e, n, i, o) {
      return i * ((e = e / o - 1) * e * e * e * e + 1) + n;
    },
    easeInOutQuint: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (i / 2) * e * e * e * e * e + n
        : (i / 2) * ((e -= 2) * e * e * e * e + 2) + n;
    },
    easeInSine: function (t, e, n, i, o) {
      return -i * Math.cos((e / o) * (Math.PI / 2)) + i + n;
    },
    easeOutSine: function (t, e, n, i, o) {
      return i * Math.sin((e / o) * (Math.PI / 2)) + n;
    },
    easeInOutSine: function (t, e, n, i, o) {
      return (-i / 2) * (Math.cos((Math.PI * e) / o) - 1) + n;
    },
    easeInExpo: function (t, e, n, i, o) {
      return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n;
    },
    easeOutExpo: function (t, e, n, i, o) {
      return e == o ? n + i : i * (-Math.pow(2, (-10 * e) / o) + 1) + n;
    },
    easeInOutExpo: function (t, e, n, i, o) {
      return 0 == e
        ? n
        : e == o
        ? n + i
        : (e /= o / 2) < 1
        ? (i / 2) * Math.pow(2, 10 * (e - 1)) + n
        : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
    },
    easeInCirc: function (t, e, n, i, o) {
      return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n;
    },
    easeOutCirc: function (t, e, n, i, o) {
      return i * Math.sqrt(1 - (e = e / o - 1) * e) + n;
    },
    easeInOutCirc: function (t, e, n, i, o) {
      return (e /= o / 2) < 1
        ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + n
        : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
    },
    easeInElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((s || (s = 0.3 * o), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return (
        -(
          a *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e * o - r) * (2 * Math.PI)) / s)
        ) + n
      );
    },
    easeOutElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (1 == (e /= o)) return n + i;
      if ((s || (s = 0.3 * o), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return (
        a * Math.pow(2, -10 * e) * Math.sin(((e * o - r) * (2 * Math.PI)) / s) +
        i +
        n
      );
    },
    easeInOutElastic: function (t, e, n, i, o) {
      var r = 1.70158,
        s = 0,
        a = i;
      if (0 == e) return n;
      if (2 == (e /= o / 2)) return n + i;
      if ((s || (s = o * (0.3 * 1.5)), a < Math.abs(i))) {
        a = i;
        var r = s / 4;
      } else var r = (s / (2 * Math.PI)) * Math.asin(i / a);
      return 1 > e
        ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e * o - r) * (2 * Math.PI)) / s)) +
            n
        : a *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e * o - r) * (2 * Math.PI)) / s) *
            0.5 +
            i +
            n;
    },
    easeInBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
      );
    },
    easeOutBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158),
        i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
      );
    },
    easeInOutBack: function (t, e, n, i, o, r) {
      return (
        void 0 == r && (r = 1.70158),
        (e /= o / 2) < 1
          ? (i / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + n
          : (i / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n
      );
    },
    easeInBounce: function (t, e, n, i, o) {
      return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n;
    },
    easeOutBounce: function (t, e, n, i, o) {
      return (e /= o) < 1 / 2.75
        ? i * (7.5625 * e * e) + n
        : 2 / 2.75 > e
        ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
        : 2.5 / 2.75 > e
        ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
        : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
    },
    easeInOutBounce: function (t, e, n, i, o) {
      return o / 2 > e
        ? 0.5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n
        : 0.5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) +
            0.5 * i +
            n;
    },
  }),
  jQuery.extend(jQuery.easing, {
    easeIn: function (t, e, n, i, o) {
      return jQuery.easing.easeInQuad(t, e, n, i, o);
    },
    easeOut: function (t, e, n, i, o) {
      return jQuery.easing.easeOutQuad(t, e, n, i, o);
    },
    easeInOut: function (t, e, n, i, o) {
      return jQuery.easing.easeInOutQuad(t, e, n, i, o);
    },
    expoin: function (t, e, n, i, o) {
      return jQuery.easing.easeInExpo(t, e, n, i, o);
    },
    expoout: function (t, e, n, i, o) {
      return jQuery.easing.easeOutExpo(t, e, n, i, o);
    },
    expoinout: function (t, e, n, i, o) {
      return jQuery.easing.easeInOutExpo(t, e, n, i, o);
    },
    bouncein: function (t, e, n, i, o) {
      return jQuery.easing.easeInBounce(t, e, n, i, o);
    },
    bounceout: function (t, e, n, i, o) {
      return jQuery.easing.easeOutBounce(t, e, n, i, o);
    },
    bounceinout: function (t, e, n, i, o) {
      return jQuery.easing.easeInOutBounce(t, e, n, i, o);
    },
    elasin: function (t, e, n, i, o) {
      return jQuery.easing.easeInElastic(t, e, n, i, o);
    },
    elasout: function (t, e, n, i, o) {
      return jQuery.easing.easeOutElastic(t, e, n, i, o);
    },
    elasinout: function (t, e, n, i, o) {
      return jQuery.easing.easeInOutElastic(t, e, n, i, o);
    },
    backin: function (t, e, n, i, o) {
      return jQuery.easing.easeInBack(t, e, n, i, o);
    },
    backout: function (t, e, n, i, o) {
      return jQuery.easing.easeOutBack(t, e, n, i, o);
    },
    backinout: function (t, e, n, i, o) {
      return jQuery.easing.easeInOutBack(t, e, n, i, o);
    },
  }),
  (function (t) {
    function e() {}
    function n(t) {
      function n(e) {
        e.prototype.option ||
          (e.prototype.option = function (e) {
            t.isPlainObject(e) &&
              (this.options = t.extend(!0, this.options, e));
          });
      }
      function o(e, n) {
        t.fn[e] = function (o) {
          if ("string" == typeof o) {
            for (
              var s = i.call(arguments, 1), a = 0, u = this.length;
              u > a;
              a++
            ) {
              var l = this[a],
                c = t.data(l, e);
              if (c)
                if (t.isFunction(c[o]) && "_" !== o.charAt(0)) {
                  var f = c[o].apply(c, s);
                  if (void 0 !== f) return f;
                } else r("no such method '" + o + "' for " + e + " instance");
              else
                r(
                  "cannot call methods on " +
                    e +
                    " prior to initialization; attempted to call '" +
                    o +
                    "'"
                );
            }
            return this;
          }
          return this.each(function () {
            var i = t.data(this, e);
            i
              ? (i.option(o), i._init())
              : ((i = new n(this, o)), t.data(this, e, i));
          });
        };
      }
      if (t) {
        var r =
          "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
              };
        return (
          (t.bridget = function (t, e) {
            n(e), o(t, e);
          }),
          t.bridget
        );
      }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery.bridget", ["jquery"], n)
      : n(t.jQuery);
  })(window),
  (function (t) {
    function e(e) {
      var n = t.event;
      return (n.target = n.target || n.srcElement || e), n;
    }
    var n = document.documentElement,
      i = function () {};
    n.addEventListener
      ? (i = function (t, e, n) {
          t.addEventListener(e, n, !1);
        })
      : n.attachEvent &&
        (i = function (t, n, i) {
          (t[n + i] = i.handleEvent
            ? function () {
                var n = e(t);
                i.handleEvent.call(i, n);
              }
            : function () {
                var n = e(t);
                i.call(t, n);
              }),
            t.attachEvent("on" + n, t[n + i]);
        });
    var o = function () {};
    n.removeEventListener
      ? (o = function (t, e, n) {
          t.removeEventListener(e, n, !1);
        })
      : n.detachEvent &&
        (o = function (t, e, n) {
          t.detachEvent("on" + e, t[e + n]);
          try {
            delete t[e + n];
          } catch (i) {
            t[e + n] = void 0;
          }
        });
    var r = { bind: i, unbind: o };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : "object" == typeof exports
      ? (module.exports = r)
      : (t.eventie = r);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : r.push(t));
    }
    function n(t) {
      var n = "readystatechange" === t.type && "complete" !== o.readyState;
      if (!e.isReady && !n) {
        e.isReady = !0;
        for (var i = 0, s = r.length; s > i; i++) {
          var a = r[i];
          a();
        }
      }
    }
    function i(i) {
      return (
        i.bind(o, "DOMContentLoaded", n),
        i.bind(o, "readystatechange", n),
        i.bind(t, "load", n),
        e
      );
    }
    var o = t.document,
      r = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? ((e.isReady = "function" == typeof requirejs),
          define("doc-ready/doc-ready", ["eventie/eventie"], i))
        : (t.docReady = i(t.eventie));
  })(this),
  function () {
    function t() {}
    function e(t, e) {
      for (var n = t.length; n--; ) if (t[n].listener === e) return n;
      return -1;
    }
    function n(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var i = t.prototype,
      o = this,
      r = o.EventEmitter;
    (i.getListeners = function (t) {
      var e,
        n,
        i = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]);
      } else e = i[t] || (i[t] = []);
      return e;
    }),
      (i.flattenListeners = function (t) {
        var e,
          n = [];
        for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
        return n;
      }),
      (i.getListenersAsObject = function (t) {
        var e,
          n = this.getListeners(t);
        return n instanceof Array && ((e = {}), (e[t] = n)), e || n;
      }),
      (i.addListener = function (t, n) {
        var i,
          o = this.getListenersAsObject(t),
          r = "object" == typeof n;
        for (i in o)
          o.hasOwnProperty(i) &&
            -1 === e(o[i], n) &&
            o[i].push(r ? n : { listener: n, once: !1 });
        return this;
      }),
      (i.on = n("addListener")),
      (i.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (i.once = n("addOnceListener")),
      (i.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (i.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (i.removeListener = function (t, n) {
        var i,
          o,
          r = this.getListenersAsObject(t);
        for (o in r)
          r.hasOwnProperty(o) &&
            ((i = e(r[o], n)), -1 !== i && r[o].splice(i, 1));
        return this;
      }),
      (i.off = n("removeListener")),
      (i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (i.manipulateListeners = function (t, e, n) {
        var i,
          o,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (i = n.length; i--; ) r.call(this, e, n[i]);
        else
          for (i in e)
            e.hasOwnProperty(i) &&
              (o = e[i]) &&
              ("function" == typeof o
                ? r.call(this, i, o)
                : s.call(this, i, o));
        return this;
      }),
      (i.removeEvent = function (t) {
        var e,
          n = typeof t,
          i = this._getEvents();
        if ("string" === n) delete i[t];
        else if (t instanceof RegExp)
          for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this;
      }),
      (i.removeAllListeners = n("removeEvent")),
      (i.emitEvent = function (t, e) {
        var n,
          i,
          o,
          r,
          s = this.getListenersAsObject(t);
        for (o in s)
          if (s.hasOwnProperty(o))
            for (i = s[o].length; i--; )
              (n = s[o][i]),
                n.once === !0 && this.removeListener(t, n.listener),
                (r = n.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, n.listener);
        return this;
      }),
      (i.trigger = n("emitEvent")),
      (i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (i.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (i._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (o.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (this.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof i[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, o = 0, r = n.length; r > o; o++)
          if (((e = n[o] + t), "string" == typeof i[e])) return e;
      }
    }
    var n = "Webkit Moz ms Ms O".split(" "),
      i = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e);
  })(window),
  (function (t) {
    function e(t) {
      var e = parseFloat(t),
        n = -1 === t.indexOf("%") && !isNaN(e);
      return n && e;
    }
    function n() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          n = s.length;
        n > e;
        e++
      ) {
        var i = s[e];
        t[i] = 0;
      }
      return t;
    }
    function i(t) {
      function i(t) {
        if (
          ("string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var i = r(t);
          if ("none" === i.display) return n();
          var o = {};
          (o.width = t.offsetWidth), (o.height = t.offsetHeight);
          for (
            var c = (o.isBorderBox = !(!l || !i[l] || "border-box" !== i[l])),
              f = 0,
              h = s.length;
            h > f;
            f++
          ) {
            var d = s[f],
              p = i[d];
            p = a(t, p);
            var g = parseFloat(p);
            o[d] = isNaN(g) ? 0 : g;
          }
          var m = o.paddingLeft + o.paddingRight,
            v = o.paddingTop + o.paddingBottom,
            y = o.marginLeft + o.marginRight,
            b = o.marginTop + o.marginBottom,
            w = o.borderLeftWidth + o.borderRightWidth,
            x = o.borderTopWidth + o.borderBottomWidth,
            E = c && u,
            C = e(i.width);
          C !== !1 && (o.width = C + (E ? 0 : m + w));
          var T = e(i.height);
          return (
            T !== !1 && (o.height = T + (E ? 0 : v + x)),
            (o.innerWidth = o.width - (m + w)),
            (o.innerHeight = o.height - (v + x)),
            (o.outerWidth = o.width + y),
            (o.outerHeight = o.height + b),
            o
          );
        }
      }
      function a(t, e) {
        if (o || -1 === e.indexOf("%")) return e;
        var n = t.style,
          i = n.left,
          r = t.runtimeStyle,
          s = r && r.left;
        return (
          s && (r.left = t.currentStyle.left),
          (n.left = e),
          (e = n.pixelLeft),
          (n.left = i),
          s && (r.left = s),
          e
        );
      }
      var u,
        l = t("boxSizing");
      return (
        (function () {
          if (l) {
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style[l] = "border-box");
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var i = r(t);
            (u = 200 === e(i.width)), n.removeChild(t);
          }
        })(),
        i
      );
    }
    var o = t.getComputedStyle,
      r = o
        ? function (t) {
            return o(t, null);
          }
        : function (t) {
            return t.currentStyle;
          },
      s = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [
          "get-style-property/get-style-property",
        ], i)
      : "object" == typeof exports
      ? (module.exports = i(require("get-style-property")))
      : (t.getSize = i(t.getStyleProperty));
  })(window),
  (function (t, e) {
    function n(t, e) {
      return t[a](e);
    }
    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function o(t, e) {
      i(t);
      for (
        var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length;
        r > o;
        o++
      )
        if (n[o] === t) return !0;
      return !1;
    }
    function r(t, e) {
      return i(t), n(t, e);
    }
    var s,
      a = (function () {
        if (e.matchesSelector) return "matchesSelector";
        for (
          var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length;
          i > n;
          n++
        ) {
          var o = t[n],
            r = o + "MatchesSelector";
          if (e[r]) return r;
        }
      })();
    if (a) {
      var u = document.createElement("div"),
        l = n(u, "div");
      s = l ? n : r;
    } else s = o;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return s;
        })
      : (window.matchesSelector = s);
  })(this, Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function n(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function i(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function o(t, o, r) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var u = r("transition"),
        l = r("transform"),
        c = u && l,
        f = !!r("perspective"),
        h = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[u],
        d = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        p = (function () {
          for (var t = {}, e = 0, n = d.length; n > e; e++) {
            var i = d[e],
              o = r(i);
            o && o !== i && (t[i] = o);
          }
          return t;
        })();
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (a.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.getSize = function () {
          this.size = o(this.element);
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style;
          for (var n in t) {
            var i = p[n] || n;
            e[i] = t[n];
          }
        }),
        (a.prototype.getPosition = function () {
          var t = s(this.element),
            e = this.layout.options,
            n = e.isOriginLeft,
            i = e.isOriginTop,
            o = parseInt(t[n ? "left" : "right"], 10),
            r = parseInt(t[i ? "top" : "bottom"], 10);
          (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
          var a = this.layout.size;
          (o -= n ? a.paddingLeft : a.paddingRight),
            (r -= i ? a.paddingTop : a.paddingBottom),
            (this.position.x = o),
            (this.position.y = r);
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            n = {};
          e.isOriginLeft
            ? ((n.left = this.position.x + t.paddingLeft + "px"),
              (n.right = ""))
            : ((n.right = this.position.x + t.paddingRight + "px"),
              (n.left = "")),
            e.isOriginTop
              ? ((n.top = this.position.y + t.paddingTop + "px"),
                (n.bottom = ""))
              : ((n.bottom = this.position.y + t.paddingBottom + "px"),
                (n.top = "")),
            this.css(n),
            this.emitEvent("layout", [this]);
        });
      var g = f
        ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)";
          }
        : function (t, e) {
            return "translate(" + t + "px, " + e + "px)";
          };
      (a.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - n,
          u = e - i,
          l = {},
          c = this.layout.options;
        (a = c.isOriginLeft ? a : -a),
          (u = c.isOriginTop ? u : -u),
          (l.transform = g(a, u)),
          this.transition({
            to: l,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
          var e = this._transn;
          for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
          for (n in t.to)
            (e.ingProperties[n] = !0), t.isCleaning && (e.clean[n] = !0);
          if (t.from) {
            this.css(t.from);
            var i = this.element.offsetHeight;
            i = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var m = l && i(l) + ",opacity";
      (a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: m,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(h, this, !1));
      }),
        (a.prototype.transition =
          a.prototype[u ? "_transition" : "_nonTransition"]),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var v = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            i = v[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[i],
            n(e.ingProperties) && this.disableTransition(),
            i in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
            i in e.onEnd)
          ) {
            var o = e.onEnd[i];
            o.call(this), delete e.onEnd[i];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(h, this, !1),
            (this.isTransitioning = !1);
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {};
          for (var n in t) e[n] = "";
          this.css(e);
        });
      var y = { transitionProperty: "", transitionDuration: "" };
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(y);
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (a.prototype.remove = function () {
          if (!u || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (a.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        a
      );
    }
    var r = document.defaultView,
      s =
        r && r.getComputedStyle
          ? function (t) {
              return r.getComputedStyle(t, null);
            }
          : function (t) {
              return t.currentStyle;
            };
    "function" == typeof define && define.amd
      ? define("outlayer/item", [
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "get-style-property/get-style-property",
        ], o)
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function n(t) {
      return "[object Array]" === f.call(t);
    }
    function i(t) {
      var e = [];
      if (n(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function o(t, e) {
      var n = d(e, t);
      -1 !== n && e.splice(n, 1);
    }
    function r(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, n) {
          return e + "-" + n;
        })
        .toLowerCase();
    }
    function s(n, s, f, d, p, g) {
      function m(t, n) {
        if (("string" == typeof t && (t = a.querySelector(t)), !t || !h(t)))
          return void (
            u && u.error("Bad " + this.constructor.namespace + " element: " + t)
          );
        (this.element = t),
          (this.options = e({}, this.options)),
          this.option(n);
        var i = ++y;
        (this.element.outlayerGUID = i),
          (b[i] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      function v(t, n) {
        t.prototype[n] = e({}, m.prototype[n]);
      }
      var y = 0,
        b = {};
      return (
        (m.namespace = "outlayer"),
        (m.Item = g),
        (m.prototype.options = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          transitionDuration: "0.4s",
          hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
          visibleStyle: { opacity: 1, transform: "scale(1)" },
        }),
        e(m.prototype, f.prototype),
        (m.prototype.option = function (t) {
          e(this.options, t);
        }),
        (m.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (m.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (m.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              n = this.constructor.Item,
              i = [],
              o = 0,
              r = e.length;
            r > o;
            o++
          ) {
            var s = e[o],
              a = new n(s, this);
            i.push(a);
          }
          return i;
        }),
        (m.prototype._filterFindItemElements = function (t) {
          t = i(t);
          for (
            var e = this.options.itemSelector, n = [], o = 0, r = t.length;
            r > o;
            o++
          ) {
            var s = t[o];
            if (h(s))
              if (e) {
                p(s, e) && n.push(s);
                for (
                  var a = s.querySelectorAll(e), u = 0, l = a.length;
                  l > u;
                  u++
                )
                  n.push(a[u]);
              } else n.push(s);
          }
          return n;
        }),
        (m.prototype.getItemElements = function () {
          for (var t = [], e = 0, n = this.items.length; n > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (m.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (m.prototype._init = m.prototype.layout),
        (m.prototype._resetLayout = function () {
          this.getSize();
        }),
        (m.prototype.getSize = function () {
          this.size = d(this.element);
        }),
        (m.prototype._getMeasurement = function (t, e) {
          var n,
            i = this.options[t];
          i
            ? ("string" == typeof i
                ? (n = this.element.querySelector(i))
                : h(i) && (n = i),
              (this[t] = n ? d(n)[e] : i))
            : (this[t] = 0);
        }),
        (m.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (m.prototype._getItemsForLayout = function (t) {
          for (var e = [], n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            o.isIgnored || e.push(o);
          }
          return e;
        }),
        (m.prototype._layoutItems = function (t, e) {
          function n() {
            i.emitEvent("layoutComplete", [i, t]);
          }
          var i = this;
          if (!t || !t.length) return void n();
          this._itemsOn(t, "layout", n);
          for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              u = this._getItemLayoutPosition(a);
            (u.item = a), (u.isInstant = e || a.isLayoutInstant), o.push(u);
          }
          this._processLayoutQueue(o);
        }),
        (m.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (m.prototype._processLayoutQueue = function (t) {
          for (var e = 0, n = t.length; n > e; e++) {
            var i = t[e];
            this._positionItem(i.item, i.x, i.y, i.isInstant);
          }
        }),
        (m.prototype._positionItem = function (t, e, n, i) {
          i ? t.goTo(e, n) : t.moveTo(e, n);
        }),
        (m.prototype._postLayout = function () {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }),
        (m.prototype._getContainerSize = c),
        (m.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var n = this.size;
            n.isBorderBox &&
              (t += e
                ? n.paddingLeft +
                  n.paddingRight +
                  n.borderLeftWidth +
                  n.borderRightWidth
                : n.paddingBottom +
                  n.paddingTop +
                  n.borderTopWidth +
                  n.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (m.prototype._itemsOn = function (t, e, n) {
          function i() {
            return o++, o === r && n.call(s), !0;
          }
          for (
            var o = 0, r = t.length, s = this, a = 0, u = t.length;
            u > a;
            a++
          ) {
            var l = t[a];
            l.on(e, i);
          }
        }),
        (m.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (m.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (m.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, n = t.length; n > e; e++) {
              var i = t[e];
              this.ignore(i);
            }
          }
        }),
        (m.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, n = t.length; n > e; e++) {
              var i = t[e];
              o(i, this.stamps), this.unignore(i);
            }
        }),
        (m.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = i(t)))
            : void 0;
        }),
        (m.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var n = this.stamps[t];
              this._manageStamp(n);
            }
          }
        }),
        (m.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (m.prototype._manageStamp = c),
        (m.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            i = d(t),
            o = {
              left: e.left - n.left - i.marginLeft,
              top: e.top - n.top - i.marginTop,
              right: n.right - e.right - i.marginRight,
              bottom: n.bottom - e.bottom - i.marginBottom,
            };
          return o;
        }),
        (m.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (m.prototype.bindResize = function () {
          this.isResizeBound ||
            (n.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (m.prototype.unbindResize = function () {
          n.unbind(t, "resize", this), (this.isResizeBound = !1);
        }),
        (m.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout;
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var e = this;
          this.resizeTimeout = setTimeout(t, 100);
        }),
        (m.prototype.resize = function () {
          var t = d(this.element),
            e = this.size && t;
          (e && t.innerWidth === this.size.innerWidth) || this.layout();
        }),
        (m.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (m.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (m.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var n = this.items.slice(0);
            (this.items = e.concat(n)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(n);
          }
        }),
        (m.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e)
            for (var n = 0; e > n; n++) {
              var i = t[n];
              i.reveal();
            }
        }),
        (m.prototype.hide = function (t) {
          var e = t && t.length;
          if (e)
            for (var n = 0; e > n; n++) {
              var i = t[n];
              i.hide();
            }
        }),
        (m.prototype.getItem = function (t) {
          for (var e = 0, n = this.items.length; n > e; e++) {
            var i = this.items[e];
            if (i.element === t) return i;
          }
        }),
        (m.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
              var o = t[n],
                r = this.getItem(o);
              r && e.push(r);
            }
            return e;
          }
        }),
        (m.prototype.remove = function (t) {
          t = i(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var n = 0, r = e.length; r > n; n++) {
              var s = e[n];
              s.remove(), o(s, this.items);
            }
          }
        }),
        (m.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, n = this.items.length; n > e; e++) {
            var i = this.items[e];
            i.destroy();
          }
          this.unbindResize(),
            delete this.element.outlayerGUID,
            l && l.removeData(this.element, this.constructor.namespace);
        }),
        (m.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && b[e];
        }),
        (m.create = function (t, n) {
          function i() {
            m.apply(this, arguments);
          }
          return (
            Object.create
              ? (i.prototype = Object.create(m.prototype))
              : e(i.prototype, m.prototype),
            (i.prototype.constructor = i),
            v(i, "options"),
            e(i.prototype.options, n),
            (i.namespace = t),
            (i.data = m.data),
            (i.Item = function () {
              g.apply(this, arguments);
            }),
            (i.Item.prototype = new g()),
            s(function () {
              for (
                var e = r(t),
                  n = a.querySelectorAll(".js-" + e),
                  o = "data-" + e + "-options",
                  s = 0,
                  c = n.length;
                c > s;
                s++
              ) {
                var f,
                  h = n[s],
                  d = h.getAttribute(o);
                try {
                  f = d && JSON.parse(d);
                } catch (p) {
                  u &&
                    u.error(
                      "Error parsing " +
                        o +
                        " on " +
                        h.nodeName.toLowerCase() +
                        (h.id ? "#" + h.id : "") +
                        ": " +
                        p
                    );
                  continue;
                }
                var g = new i(h, f);
                l && l.data(h, t, g);
              }
            }),
            l && l.bridget && l.bridget(t, i),
            i
          );
        }),
        (m.Item = g),
        m
      );
    }
    var a = t.document,
      u = t.console,
      l = t.jQuery,
      c = function () {},
      f = Object.prototype.toString,
      h =
        "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      d = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define("outlayer/outlayer", [
          "eventie/eventie",
          "doc-ready/doc-ready",
          "eventEmitter/EventEmitter",
          "get-size/get-size",
          "matches-selector/matches-selector",
          "./item",
        ], s)
      : (t.Outlayer = s(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ));
  })(window),
  (function (t) {
    function e(t, e) {
      var i = t.create("masonry");
      return (
        (i.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
          var t = this.cols;
          for (this.colYs = []; t--; ) this.colYs.push(0);
          this.maxY = 0;
        }),
        (i.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              n = t && t.element;
            this.columnWidth = (n && e(n).outerWidth) || this.containerWidth;
          }
          (this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1));
        }),
        (i.prototype.getContainerWidth = function () {
          var t = this.options.isFitWidth
              ? this.element.parentNode
              : this.element,
            n = e(t);
          this.containerWidth = n && n.innerWidth;
        }),
        (i.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);
          o = Math.min(o, this.cols);
          for (
            var r = this._getColGroup(o),
              s = Math.min.apply(Math, r),
              a = n(r, s),
              u = { x: this.columnWidth * a, y: s },
              l = s + t.size.outerHeight,
              c = this.cols + 1 - r.length,
              f = 0;
            c > f;
            f++
          )
            this.colYs[a + f] = l;
          return u;
        }),
        (i.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
            var o = this.colYs.slice(i, i + t);
            e[i] = Math.max.apply(Math, o);
          }
          return e;
        }),
        (i.prototype._manageStamp = function (t) {
          var n = e(t),
            i = this._getElementOffset(t),
            o = this.options.isOriginLeft ? i.left : i.right,
            r = o + n.outerWidth,
            s = Math.floor(o / this.columnWidth);
          s = Math.max(0, s);
          var a = Math.floor(r / this.columnWidth);
          (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
          for (
            var u =
                (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight,
              l = s;
            a >= l;
            l++
          )
            this.colYs[l] = Math.max(u, this.colYs[l]);
        }),
        (i.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = { height: this.maxY };
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (i.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (i.prototype.resize = function () {
          var t = this.containerWidth;
          this.getContainerWidth(), t !== this.containerWidth && this.layout();
        }),
        i
      );
    }
    var n = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          for (var n = 0, i = t.length; i > n; n++) {
            var o = t[n];
            if (o === e) return n;
          }
          return -1;
        };
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window),
  function () {
    function t() {}
    function e(t, e) {
      for (var n = t.length; n--; ) if (t[n].listener === e) return n;
      return -1;
    }
    function n(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var i = t.prototype,
      o = this,
      r = o.EventEmitter;
    (i.getListeners = function (t) {
      var e,
        n,
        i = this._getEvents();
      if ("object" == typeof t) {
        e = {};
        for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]);
      } else e = i[t] || (i[t] = []);
      return e;
    }),
      (i.flattenListeners = function (t) {
        var e,
          n = [];
        for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
        return n;
      }),
      (i.getListenersAsObject = function (t) {
        var e,
          n = this.getListeners(t);
        return n instanceof Array && ((e = {}), (e[t] = n)), e || n;
      }),
      (i.addListener = function (t, n) {
        var i,
          o = this.getListenersAsObject(t),
          r = "object" == typeof n;
        for (i in o)
          o.hasOwnProperty(i) &&
            -1 === e(o[i], n) &&
            o[i].push(r ? n : { listener: n, once: !1 });
        return this;
      }),
      (i.on = n("addListener")),
      (i.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (i.once = n("addOnceListener")),
      (i.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (i.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (i.removeListener = function (t, n) {
        var i,
          o,
          r = this.getListenersAsObject(t);
        for (o in r)
          r.hasOwnProperty(o) &&
            ((i = e(r[o], n)), -1 !== i && r[o].splice(i, 1));
        return this;
      }),
      (i.off = n("removeListener")),
      (i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (i.manipulateListeners = function (t, e, n) {
        var i,
          o,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (i = n.length; i--; ) r.call(this, e, n[i]);
        else
          for (i in e)
            e.hasOwnProperty(i) &&
              (o = e[i]) &&
              ("function" == typeof o
                ? r.call(this, i, o)
                : s.call(this, i, o));
        return this;
      }),
      (i.removeEvent = function (t) {
        var e,
          n = typeof t,
          i = this._getEvents();
        if ("string" === n) delete i[t];
        else if ("object" === n)
          for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this;
      }),
      (i.removeAllListeners = n("removeEvent")),
      (i.emitEvent = function (t, e) {
        var n,
          i,
          o,
          r,
          s = this.getListenersAsObject(t);
        for (o in s)
          if (s.hasOwnProperty(o))
            for (i = s[o].length; i--; )
              (n = s[o][i]),
                n.once === !0 && this.removeListener(t, n.listener),
                (r = n.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, n.listener);
        return this;
      }),
      (i.trigger = n("emitEvent")),
      (i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (i.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (i._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (o.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (this.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(e) {
      var n = t.event;
      return (n.target = n.target || n.srcElement || e), n;
    }
    var n = document.documentElement,
      i = function () {};
    n.addEventListener
      ? (i = function (t, e, n) {
          t.addEventListener(e, n, !1);
        })
      : n.attachEvent &&
        (i = function (t, n, i) {
          (t[n + i] = i.handleEvent
            ? function () {
                var n = e(t);
                i.handleEvent.call(i, n);
              }
            : function () {
                var n = e(t);
                i.call(t, n);
              }),
            t.attachEvent("on" + n, t[n + i]);
        });
    var o = function () {};
    n.removeEventListener
      ? (o = function (t, e, n) {
          t.removeEventListener(e, n, !1);
        })
      : n.detachEvent &&
        (o = function (t, e, n) {
          t.detachEvent("on" + e, t[e + n]);
          try {
            delete t[e + n];
          } catch (i) {
            t[e + n] = void 0;
          }
        });
    var r = { bind: i, unbind: o };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : (t.eventie = r);
  })(this),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (
          n,
          i
        ) {
          return e(t, n, i);
        })
      : "object" == typeof exports
      ? (module.exports = e(t, require("eventEmitter"), require("eventie")))
      : (t.imagesLoaded = e(t, t.EventEmitter, t.eventie));
  })(this, function (t, e, n) {
    function i(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function o(t) {
      return "[object Array]" === h.call(t);
    }
    function r(t) {
      var e = [];
      if (o(t)) e = t;
      else if ("number" == typeof t.length)
        for (var n = 0, i = t.length; i > n; n++) e.push(t[n]);
      else e.push(t);
      return e;
    }
    function s(t, e, n) {
      if (!(this instanceof s)) return new s(t, e);
      "string" == typeof t && (t = document.querySelectorAll(t)),
        (this.elements = r(t)),
        (this.options = i({}, this.options)),
        "function" == typeof e ? (n = e) : i(this.options, e),
        n && this.on("always", n),
        this.getImages(),
        l && (this.jqDeferred = new l.Deferred());
      var o = this;
      setTimeout(function () {
        o.check();
      });
    }
    function a(t) {
      this.img = t;
    }
    function u(t) {
      (this.src = t), (d[t] = this);
    }
    var l = t.jQuery,
      c = t.console,
      f = void 0 !== c,
      h = Object.prototype.toString;
    (s.prototype = new e()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
          var n = this.elements[t];
          "IMG" === n.nodeName && this.addImage(n);
          for (
            var i = n.querySelectorAll("img"), o = 0, r = i.length;
            r > o;
            o++
          ) {
            var s = i[o];
            this.addImage(s);
          }
        }
      }),
      (s.prototype.addImage = function (t) {
        var e = new a(t);
        this.images.push(e);
      }),
      (s.prototype.check = function () {
        function t(t, o) {
          return (
            e.options.debug && f && c.log("confirm", t, o),
            e.progress(t),
            n++,
            n === i && e.complete(),
            !0
          );
        }
        var e = this,
          n = 0,
          i = this.images.length;
        if (((this.hasAnyBroken = !1), !i)) return void this.complete();
        for (var o = 0; i > o; o++) {
          var r = this.images[o];
          r.on("confirm", t), r.check();
        }
      }),
      (s.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
          e.emit("progress", e, t),
            e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t);
        });
      }),
      (s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
          if ((e.emit(t, e), e.emit("always", e), e.jqDeferred)) {
            var n = e.hasAnyBroken ? "reject" : "resolve";
            e.jqDeferred[n](e);
          }
        });
      }),
      l &&
        (l.fn.imagesLoaded = function (t, e) {
          var n = new s(this, t, e);
          return n.jqDeferred.promise(l(this));
        }),
      (a.prototype = new e()),
      (a.prototype.check = function () {
        var t = d[this.img.src] || new u(this.img.src);
        if (t.isConfirmed)
          return void this.confirm(t.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var e = this;
        t.on("confirm", function (t, n) {
          return e.confirm(t.isLoaded, n), !0;
        }),
          t.check();
      }),
      (a.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emit("confirm", this, e);
      });
    var d = {};
    return (
      (u.prototype = new e()),
      (u.prototype.check = function () {
        if (!this.isChecked) {
          var t = new Image();
          n.bind(t, "load", this),
            n.bind(t, "error", this),
            (t.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (u.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t);
      }),
      (u.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t);
      }),
      (u.prototype.confirm = function (t, e) {
        (this.isConfirmed = !0),
          (this.isLoaded = t),
          this.emit("confirm", this, e);
      }),
      (u.prototype.unbindProxyEvents = function (t) {
        n.unbind(t.target, "load", this), n.unbind(t.target, "error", this);
      }),
      s
    );
  });
var setupMasonry = function () {
  var t = $(".js-masonry");
  t.length && t.masonry({ itemSelector: ".js-masonry-select", columnWidth: 1 });
};
$(window).load(function () {
  Stencil.verticalAlign(), $("body").removeClass("preload"), setupMasonry();
}),
  $(window).resize(function () {
    Stencil.verticalAlign(), setupMasonry();
  }),
  $(document).ready(function () {
    if (
      (setupMasonry(),
      $(".nav-menu a").each(function () {
        var t = $(this).attr("href");
        t == window.location.pathname && $(this).addClass("is-active");
      }),
      $("#index").length)
    ) {
      $("html, body").scrollTop(0), screensizeCheck(480, 768, 1200, 1400, 1600);
      var t = $(".content-module-index"),
        e = function () {
          var t = 0,
            e = window.innerHeight || $(window).height(),
            n = $(".side-nav").width();
          $(".content-module-index").each(function () {
            var i = 0;
            if ($(window).width() < 1024) {
              if (((o = 30), $(window).width() < 500)) var o = 10;
              else if ($(window).width() < 600) var o = 20;
              i = Math.floor(Math.random() * o) + "%";
            } else {
              var o = n,
                r = Math.ceil(Math.random() * o);
              i = -($(this).width() / 2) + r;
            }
            $(this).css({ marginLeft: i });
            var s = 100,
              a = 0.2 * e,
              u = Math.floor(Math.random() * a) + s;
            $(this).css({ paddingTop: u }),
              $(this).attr(
                "data-offset",
                t + parseInt($(this).css("padding-top"))
              );
            var l = $(this).outerHeight(!1);
            $(this).attr("data-height", l), (t += l);
            var c = t;
            $("body").css("min-height", c);
          });
        },
        n = $(window).width();
      $(window).resize(function () {
        var t = $(window).width();
        n != t && ((n = t), e());
      });
      var i = function () {
        $(t).each(function (t) {
          var e = 100 + -t;
          $(this).css("z-index", e);
        });
      };
      i();
      var o = void 0,
        r = function (t) {
          (o = t), $(o).addClass("is-released");
          var e = $(o).attr("id");
          ($link = $(".side-nav a[href=#" + e + "]")),
            $link.length &&
              ($(".side-nav a").removeClass("is-active"),
              $link.addClass("is-active"));
        };
      (o = $("#what")), r(o);
      var s = void 0,
        a = function () {
          var t = $(o).offset().top,
            e = $(o).outerHeight(!1),
            n = t + e,
            i = window.innerHeight || $(window).height(),
            a = $(window).scrollTop();
          if (a > n) {
            var u = $(o).next(".content-module-index");
            u.length && r(u);
          }
          if (t > a) {
            var l = $(o).prev();
            l.length && ($(o).removeClass("is-released"), r(l));
          }
          a + i >= $(document).height() - 10
            ? (s.trigger(), $("body").addClass("reached-bottom"))
            : $("body").removeClass("reached-bottom");
        };
      $(window).scroll(function () {
        a();
      }),
        $(".side-nav a").click(function (t) {
          t.preventDefault(), t.stopPropagation();
          var e = $(this).attr("href"),
            n = parseInt($(e).attr("data-offset")) - $(".nav").height();
          console.log(n),
            $("html, body").animate({ scrollTop: n }, 600, "easeOutQuad");
        }),
        $(window).on("load", function () {
          e(),
            (s = new freezeframe("#signup-image").capture().setup()),
            window.setTimeout(function () {
              $("html, body").scrollTop(0);
            }, 100);
        });
    }
  });
