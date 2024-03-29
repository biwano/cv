(function () {
  var a, b, c, d, e, f, g, h, i, j, k, l;
  $(function () {
    return $("body").on(
      "click",
      ".checklist:not([readonly]) li:not([readonly])",
      function () {
        return (
          "true" === $(this).attr("aria-checked") ||
          "true" === $(this).attr("data-checked") ||
          "checked" === $(this).attr("checked") ||
          $(this).hasClass("checked") ||
          $(this).hasClass("completed")
            ? $(this).attr("aria-checked", "false")
            : $(this).attr("aria-checked", "true"),
          $(this)
            .removeClass("checked completed")
            .removeAttr("data-checked checked")
        );
      }
    );
  }),
    $(function () {
      return $("body").on("click", ".dismissible", function () {
        var a = this;
        return (
          $(this).addClass("dismiss animated"),
          setTimeout(function () {
            return $(a).hide(250, function () {
              return $(this).remove();
            });
          }, 1e3)
        );
      });
    }),
    $(window).on("load resize", function () {
      return h();
    }),
    (h = function () {
      return $(".row.equalize").each(function () {
        var a, b, c;
        return (
          (a = $(this)),
          (c = 0),
          (b = !1),
          a.children().each(function () {
            var d;
            return (
              (d = $(this)),
              d.css("minHeight", "1px"),
              (b = d.outerWidth() === a.outerWidth()),
              !b &&
              (d.hasClass("equal") || d.addClass("equal"), d.outerHeight() > c)
                ? (c = d.outerHeight())
                : void 0
            );
          }),
          b ? void 0 : a.children().css("min-height", c)
        );
      });
    }),
    $(function () {
      var a, b;
      return (
        (a = $("body")),
        (b = [
          ".error input",
          ".error textarea",
          ".invalid input",
          ".invalid textarea",
          "input.error",
          "textarea.error",
          "input.invalid",
          "textarea.invalid",
          'input[aria-invalid="true"]',
          'textarea[aria-invalid="true"]',
        ].join(",")),
        a.on("click", b, function () {
          return $(this).focus(), $(this).select();
        })
      );
    }),
    $(function () {
      var a;
      return (
        (a = $("body")),
        $(".dropdown").each(function () {
          return "true" !== $(this).attr("aria-pressed")
            ? ($(this).attr("aria-pressed", "false"),
              $(this).children("ul").attr({
                "aria-expanded": "false",
                "aria-hidden": "true",
                role: "menu",
              }))
            : void 0;
        }),
        a.on("dropdown", function (a) {
          var b, c;
          return (
            (b = $(a.target)),
            $(".dropdown").not(b).attr("aria-pressed", "false"),
            $(".dropdown")
              .children("ul")
              .attr({ "aria-expanded": "false", "aria-hidden": "true" }),
            (c = "true" === b.attr("aria-pressed") ? "false" : "true"),
            b.attr("aria-pressed", c),
            b.children("ul").attr({ "aria-expanded": !c, "aria-hidden": c })
          );
        }),
        a.on("click", ".dropdown", function (a) {
          var b;
          return (
            (b = $(a.currentTarget)),
            b.is("a") || b.is("button") || a.stopPropagation(),
            b.hasClass("focused")
              ? b.removeClass("focused")
              : b.trigger("dropdown")
          );
        }),
        a.on("click", function () {
          var a;
          return (
            (a = $('.dropdown[aria-pressed="true"]')),
            a.length ? a.attr("aria-pressed", "false") : void 0
          );
        }),
        a.on(
          "focusout",
          ".dropdown li:last-child a,                        .dropdown li:last-child button",
          function () {
            return $('.dropdown[aria-pressed="true"]').attr(
              "aria-pressed",
              "false"
            );
          }
        )
      );
    }),
    (i = 0),
    (window.delayMenuClose = ""),
    (window.delayNavigationClose = ""),
    (a = (function () {
      function a(a) {
        (this.index = i++), (this.el = $(a)), this.init();
      }
      return (
        (a.prototype.init = function () {
          return (
            this.defaultLabel(),
            this.setupMarkers(),
            this.el.hasClass("nocollapse") ? void 0 : this.hamburgerHelper()
          );
        }),
        (a.prototype.defaultLabel = function () {
          return this.el.hasClass("nocollapse") ||
            void 0 !== this.el.attr("title")
            ? void 0
            : this.el.attr("title", "Menu");
        }),
        (a.prototype.setupMarkers = function () {
          return (
            this.el.find("ul").each(function () {
              return $(this).find("li").length
                ? $(this).attr("role", "menu")
                : void 0;
            }),
            $(this.el).hasClass("vertical") ||
              this.el.find("> ul").attr("role", "menubar"),
            this.el.find("li").each(function () {
              return $(this).find("ul").length
                ? $(this).attr("role", "menu")
                : void 0;
            })
          );
        }),
        (a.prototype.hamburgerHelper = function () {
          return this.el.prepend('<button class="hamburger"></button>');
        }),
        a
      );
    })()),
    $(function () {
      var b, c, d;
      return (
        (b = function () {
          return (
            $("body").on(
              "mouseenter",
              '.nav:not(.vertical) li[role="menu"]',
              function (a) {
                var b, c;
                return (
                  $(".nav:not(.vertical)")
                    .not(this)
                    .each(function () {
                      return $(this).find("button.hamburger").is(":visible")
                        ? void 0
                        : $(this)
                            .find('ul[aria-expanded="true"]')
                            .attr("aria-expanded", "false");
                    }),
                  $(this)
                    .parents(".nav")
                    .find("button.hamburger")
                    .is(":visible")
                    ? void 0
                    : (clearTimeout(window.delayMenuClose),
                      (b = $(this).siblings().find('ul[aria-expanded="true"]')),
                      b.attr("aria-expanded", "false"),
                      (c = $(a.target)
                        .parents('li[role="menu"]')
                        .children("ul")),
                      c.attr("aria-expanded", "true"))
                );
              }
            ),
            $("body").on(
              "mouseleave",
              '.nav:not(.vertical) li[role="menu"]',
              function () {
                var a = this;
                return $(this)
                  .parents(".nav")
                  .find("button.hamburger")
                  .is(":visible")
                  ? void 0
                  : (window.delayMenuClose = setTimeout(function () {
                      return $(a)
                        .find('ul[aria-expanded="true"]')
                        .attr("aria-expanded", "false");
                    }, 500));
              }
            )
          );
        }),
        (d = function () {
          return (
            $("body").on(
              "click",
              '.nav li[role="menu"] > a,                           .nav li[role="menu"] > button',
              function (a) {
                var b, c;
                return (
                  (b = $(this).siblings("ul")),
                  (c = $(this).parent('[role="menu"]')),
                  "true" !== b.attr("aria-expanded")
                    ? b.attr("aria-expanded", "true")
                    : (b.attr("aria-expanded", "false"),
                      b
                        .find('[aria-expanded="true"]')
                        .attr("aria-expanded", "false")),
                  "true" !== c.attr("aria-pressed")
                    ? c.attr("aria-pressed", "true")
                    : (c.attr("aria-pressed", "false"),
                      c
                        .find('[aria-pressed="true"]')
                        .attr("aria-pressed", "false"),
                      c
                        .find('[aria-expanded="true"]')
                        .attr("aria-expanded", "false")),
                  a.preventDefault()
                );
              }
            ),
            $("body").on("click", ".nav button.hamburger", function (a) {
              var b;
              return (
                (b = $(this).siblings("ul")),
                "true" !== b.attr("aria-expanded")
                  ? b.attr("aria-expanded", "true")
                  : (b.attr("aria-expanded", "false"),
                    b
                      .find('[aria-pressed="true"]')
                      .attr("aria-pressed", "false"),
                    b
                      .find('[aria-expanded="true"]')
                      .attr("aria-expanded", "false")),
                a.preventDefault()
              );
            })
          );
        }),
        (c = []),
        $(".nav").each(function () {
          return c.push(new a(this));
        }),
        d(),
        Modernizr.touch ? void 0 : b()
      );
    }),
    $(function () {
      var a, b, c, d;
      return (
        $(".tabs").each(function () {
          var a, b;
          return (
            (a = $(this).children("ul").children("li.active")),
            a.length
              ? ((b = a.parents(".tabs")),
                b.find(a.attr("aria-controls")).addClass("active"))
              : ($(this)
                  .children("ul")
                  .children("li")
                  .first()
                  .addClass("active"),
                $(this).children("div").first().addClass("active"))
          );
        }),
        $("body").on("click", ".tabs > ul li", function (a) {
          var b, c;
          return (
            (b = $(this).addClass("active")),
            (c = b.parents(".tabs")),
            b.siblings("li").removeClass("active"),
            c.find("> div, > ul > div").hide(),
            c.find(b.attr("aria-controls")).show(),
            a.preventDefault()
          );
        }),
        (d = function () {
          var a, d, e, f, g, h, i, j, k;
          return (
            (k = $(window).width()),
            (a = ".tabs.accordion"),
            (e = ".tabs.accordion.mobile"),
            (j = ".tabs.accordion.small-tablet"),
            (d = ".tabs.accordion.ipad"),
            (f = ".tabs:not(.accordion)"),
            (h = ":not(.mobile)"),
            (i = ":not(.small-tablet)"),
            (g = ":not(.ipad)"),
            480 >= k
              ? (c(e), b(f + h))
              : 768 > k
              ? (c(e + ", " + j), b(f + h + i))
              : 1024 >= k
              ? (c(e + ", " + j + ", " + d), b(f + h + i + g))
              : k > 1024
              ? c(a)
              : void 0
          );
        }),
        (b = function (a) {
          return (
            (a = $(a)),
            a.each(function () {
              var a;
              return (
                (a = $(this)),
                a.addClass("accordion"),
                a.find("> div").each(function () {
                  var b, c;
                  return (
                    (c = $(this).clone()),
                    (b = 'li[aria-controls="#' + c.attr("id") + '"]'),
                    a.find(b).after(c),
                    $(this).remove()
                  );
                })
              );
            })
          );
        }),
        (c = function (b) {
          return $(b).each(function () {
            var b;
            return (
              (b = $(this)),
              b.removeClass("accordion"),
              b.hasClass("vertical") && a(b),
              b
                .children("ul")
                .children("div")
                .each(function () {
                  var a;
                  return (a = $(this).clone()), b.append(a), $(this).remove();
                })
            );
          });
        }),
        (a = function (a) {
          return (
            (a = $(a)),
            a.length || (a = $(".tabs.vertical")),
            a.each(function () {
              return $(this).hasClass("vertical") &&
                ($(this).children("ul").css({ "min-height": "0px" }),
                !$(this).hasClass("accordion"))
                ? ($(this)
                    .children('[role="tabpanel"]')
                    .css({
                      "padding-left":
                        $(this).children("ul").width() + 10 + "px",
                    }),
                  $(this)
                    .children("ul")
                    .css({ "min-height": $(this).height() + "px" }))
                : void 0;
            })
          );
        }),
        $(window).resize(function () {
          return (
            clearTimeout(window.delayedAdjustTabs),
            (window.delayedAdjustTabs = setTimeout(function () {
              return d(), a();
            }, 50))
          );
        }),
        $(window).load(function () {
          return d(), a();
        })
      );
    }),
    (function (a) {
      return (a.fn.placeholderText = function (b) {
        var c, d, e;
        return (
          (a.fn.placeholderText.defaults = {
            type: "paragraphs",
            amount: "1",
            html: !0,
            punctuation: !0,
          }),
          (d = a.extend({}, a.fn.placeholderText.defaults, b)),
          (e = new Array(10)),
          (e[0] =
            "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat."),
          (e[1] =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar."),
          (e[2] =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna."),
          (e[3] =
            "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat. Maecenas lorem. Pellentesque pretium lectus id turpis. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Fusce wisi. Phasellus faucibus molestie nisl. Fusce eget urna. Curabitur vitae diam non enim vestibulum interdum. Nulla quis diam. Ut tempus purus at lorem."),
          (e[4] =
            "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu, urna. Nullam at arcu a est sollicitudin euismod. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nam sed tellus id magna elementum tincidunt."),
          (e[5] =
            "Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat."),
          (e[6] =
            "Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Aenean fermentum risus id tortor. Integer imperdiet lectus quis justo. Integer tempor. Vivamus ac urna vel leo pretium faucibus. Mauris elementum mauris vitae tortor. In dapibus augue non sapien. Aliquam ante. Curabitur bibendum justo non orci."),
          (e[7] =
            "Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo."),
          (e[8] =
            "Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus."),
          (e[9] =
            "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu."),
          (c = function (c) {
            var f, g, h, i, j, k, l, m, n, o, p, q;
            for (
              b = {},
                "undefined" !== a(c).data("placeholderType") &&
                  (b.type = a(c).data("placeholderType")),
                "undefined" !== a(c).data("placeholderAmount") &&
                  (b.amount = a(c).data("placeholderAmount")),
                "undefined" !== a(c).data("placeholderHtml") &&
                  (b.html = a(c).data("placeholderHtml")),
                "undefined" !== a(c).data("placeholderPunctuation") &&
                  (b.punctuation = a(c).data("placeholderPunctuation")),
                d = a.extend({}, a.fn.placeholderText.defaults, b),
                f = d.amount,
                n = "",
                g = 0;
              f > g;

            )
              (o = Math.floor(10 * Math.random())),
                d.html && (n += "<p>"),
                (n += e[o]),
                d.html && (n += "</p>"),
                (n += "\n\n"),
                g++;
            switch (d.type) {
              case "words":
                for (
                  l = d.amount,
                    l = parseInt(l),
                    j = new Array(),
                    q = new Array(),
                    q = n.split(" "),
                    h = 0,
                    i = 0;
                  j.length < l;

                )
                  i > q.length &&
                    ((i = 0),
                    h++,
                    h + 1 > e.length && (h = 0),
                    (q = e[h].split(" ")),
                    (q[0] = "\n\n" + q[0])),
                    j.push(q[i]),
                    i++;
                n = j.join(" ");
                break;
              case "characters":
                for (
                  m = "", k = d.amount, k = parseInt(k), p = e.join("\n\n");
                  m.length < k;

                )
                  m += p;
                n = m.substring(0, k);
                break;
              case "paragraphs":
            }
            return (
              d.punctuation || (n = n.replace(",", "").replace(".", "")), n
            );
          }),
          this.each(function () {
            var b, d;
            return (b = a(this)), (d = c(this)), b.html(d);
          })
        );
      });
    })(jQuery),
    $(function () {
      return $(".placeholderText").placeholderText();
    }),
    (e = []),
    (j = 0),
    (b = (function () {
      function a(a) {
        (this.index = j++),
          (this.el = a),
          (this.compression = $(this.el).data("compression") || 5),
          (this.minFontSize = $(this.el).data("min") || 10),
          (this.maxFontSize =
            $(this.el).data("max") || Number.POSITIVE_INFINITY),
          (this.width = $(this.el).data("width") || "100%"),
          (this.height = $(this.el).data("height") || "auto"),
          (this.adjustParents = $(this.el).data("adjust-parents") || !0),
          (this.styled = $(this.el).data("styled") || !0),
          (this.columns = $("tbody tr", $(this.el))
            .first()
            .find("th, td").length),
          (this.rows = $("tbody tr", $(this.el)).length),
          this.init();
      }
      return (
        (a.prototype.init = function () {
          return this.setupTable(), this.adjustOnLoad(), this.adjustOnResize();
        }),
        (a.prototype.fontSize = function () {
          var a;
          return (
            (a =
              "auto" === this.height
                ? $("tbody td", $(this.el)).first().width() / this.compression
                : $(this.el).height() / this.rows / this.compression),
            Math.min(this.maxFontSize, Math.max(a, this.minFontSize))
          );
        }),
        (a.prototype.setupTable = function () {
          return (
            $(this.el).css("width", this.width),
            "auto" !== this.height && $(this.el).css("height", this.height),
            $("th, td", $(this.el)).css("width", 100 / this.columns + "%"),
            this.styled && $(this.el).addClass("responsiveTable"),
            "auto" !== this.height &&
              ($("th, td", $(this.el)).css("height", 100 / this.rows + "%"),
              this.adjustParents &&
                $(this.el)
                  .parents()
                  .each(function () {
                    return $(this).css("height", "100%");
                  })),
            $(this.el).css("font-size", this.fontSize())
          );
        }),
        (a.prototype.resizeTable = function () {
          return $(this.el)
            .css("font-size", this.minFontSize)
            .css("font-size", this.fontSize());
        }),
        (a.prototype.adjustOnLoad = function () {
          var a = this;
          return $(window).on("load", function () {
            return a.resizeTable();
          });
        }),
        (a.prototype.adjustOnResize = function () {
          var a = this;
          return $(window).on("resize", function () {
            return (
              clearTimeout(e[a.index]),
              (e[a.index] = setTimeout(function () {
                return a.resizeTable();
              }, 20))
            );
          });
        }),
        a
      );
    })()),
    (function (a) {
      var c;
      return (
        (c = []),
        (a.fn.responsiveTables = function () {
          return this.each(function () {
            return c.push(new b(this));
          });
        })
      );
    })(jQuery),
    $(document).ready(function () {
      return $("table.responsive").responsiveTables();
    }),
    (f = []),
    (k = 0),
    (c = (function () {
      function a(a) {
        (this.index = k++),
          (this.el = a),
          (this.compression = $(this.el).data("compression") || 10),
          (this.minFontSize =
            $(this.el).data("min") || Number.NEGATIVE_INFINITY),
          (this.maxFontSize =
            $(this.el).data("max") || Number.POSITIVE_INFINITY),
          (this.scrollable = $(this.el).data("scrollable") || !1),
          (this.scrollSpeed = $(this.el).data("scrollspeed") || 650),
          (this.scrollReset = $(this.el).data("scrollreset") || 200),
          this.init();
      }
      return (
        (a.prototype.init = function () {
          return (
            $(this.el).wrapInner('<span class="responsiveText-wrapper" />'),
            this.adjustOnLoad(),
            this.adjustOnResize(),
            this.scrollable ? this.scrollOnHover() : void 0
          );
        }),
        (a.prototype.resizeText = function () {
          var a, b;
          return (
            (a = $(this.el).width() / this.compression),
            (b = Math.max(Math.min(a, this.maxFontSize), this.minFontSize)),
            $(this.el).css({ "font-size": Math.floor(b) })
          );
        }),
        (a.prototype.adjustOnLoad = function () {
          var a = this;
          return $(window).on("load", function () {
            return a.resizeText();
          });
        }),
        (a.prototype.adjustOnResize = function () {
          var a = this;
          return $(window).on("resize", function () {
            return (
              clearTimeout(f[a.index]),
              (f[a.index] = setTimeout(function () {
                return a.resizeText();
              }, 20))
            );
          });
        }),
        (a.prototype.scrollOnHover = function () {
          var a = this;
          return (
            $(this.el).css({
              overflow: "hidden",
              "text-overflow": "ellipsis",
              "white-space": "nowrap",
            }),
            $(this.el).hover(
              function () {
                return (
                  (a.difference = a.el.scrollWidth - $(a.el).width()),
                  a.difference > a.scrollSpeed &&
                    (a.scrollSpeed = a.difference),
                  a.difference > 0
                    ? ($(a.el).css("cursor", "e-resize"),
                      $(a.el)
                        .stop()
                        .animate(
                          { "text-indent": -a.difference },
                          a.scrollSpeed,
                          function () {
                            return $(a.el).css("cursor", "text");
                          }
                        ))
                    : void 0
                );
              },
              function () {
                return $(a.el)
                  .stop()
                  .animate({ "text-indent": 0 }, a.scrollReset);
              }
            )
          );
        }),
        a
      );
    })()),
    (function (a) {
      var b;
      return (
        (b = []),
        (a.fn.responsiveText = function () {
          return this.each(function () {
            return b.push(new c(this));
          });
        })
      );
    })(jQuery),
    $(document).ready(function () {
      return $(".responsive").not("table").responsiveText();
    }),
    (g = []),
    (l = 0),
    (d = (function () {
      function a(a) {
        (this.el = a),
          (this.index = l++),
          (this.text = $(this.el).text()),
          $(this.el).attr("data-text", this.text),
          (this.words = this.text.trim().split(" ")),
          (this.lines = parseInt($(this.el).attr("data-truncate"))),
          this.truncate(),
          this.adjustOnResize();
      }
      return (
        (a.prototype.truncate = function () {
          return this.measure(), this.setContent();
        }),
        (a.prototype.reset = function () {
          return $(this.el)
            .text(this.text)
            .css("max-height", "none")
            .attr("data-truncated", "false");
        }),
        (a.prototype.measure = function () {
          var a;
          for (
            this.reset(),
              $(this.el).html("."),
              this.singleLineHeight = $(this.el).outerHeight(),
              a = 1;
            a++ < this.lines;

          )
            $(this.el).append("<br>.");
          return (this.maxLinesHeight = $(this.el).outerHeight());
        }),
        (a.prototype.empty = function () {
          return $(this.el).html("");
        }),
        (a.prototype.setContent = function () {
          var a;
          return (
            this.reset(),
            (a = !1),
            this.addWords(this.words.length),
            this.tooBig()
              ? (this.addNumberWordsThatFit(),
                $(this.el).css("max-height", this.maxLinesHeight + "px"),
                $(this.el).attr("data-truncated", !0))
              : void 0
          );
        }),
        (a.prototype.addNumberWordsThatFit = function () {
          var a, b, c;
          for (
            b = this.words.length, a = 0, c = Math.floor(this.words.length / 2);
            a + 1 !== b;

          )
            this.addWords(a + c),
              this.tooBig() ? (b = a + c) : (a += c),
              (c = Math.floor(c / 2) || 1);
          return (
            this.addWords(a),
            $(this.el).html(this.trimTrailingPunctuation($(this.el).html()))
          );
        }),
        (a.prototype.addWords = function (a) {
          return $(this.el).html(this.words.slice(0, a).join(" "));
        }),
        (a.prototype.tooBig = function () {
          return $(this.el).outerHeight() > this.maxLinesHeight;
        }),
        (a.prototype.adjustOnResize = function () {
          var a = this;
          return $(window).on("resize", function () {
            return (
              clearTimeout(g[a.index]),
              (g[a.index] = setTimeout(function () {
                return a.truncate();
              }, 20))
            );
          });
        }),
        (a.prototype.trimTrailingPunctuation = function (a) {
          return a.replace(/(,$)|(\.$)|(\:$)|(\;$)|(\?$)|(\!$)/g, "");
        }),
        a
      );
    })()),
    (function (a) {
      var b, c;
      return (
        (b = !1),
        (c = []),
        (a.fn.truncateLines = function () {
          return (
            b ||
              a("head").append(
                '<style type="text/css">  [data-truncated="true"] { overflow: hidden; }  [data-truncated="true"]:after { content: "..."; position: absolute; }</style>'
              ),
            this.each(function () {
              return c.push(new d(this));
            })
          );
        })
      );
    })(jQuery),
    $(window).load(function () {
      return $("[data-truncate]").truncateLines();
    });
}.call(this));
