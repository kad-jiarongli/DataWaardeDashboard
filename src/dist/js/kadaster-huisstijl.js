(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

if ((0, _utils.default)('js-input-group-password')) {
  (function () {
    // Get all password elements from document by class names.
    var allPasswordElements = document.getElementsByClassName('js-input-group-password'); // Loop through all objects retrieved from document and add eventListeners to each one.

    var _iterator = _createForOfIteratorHelper(allPasswordElements),
        _step;

    try {
      var _loop = function _loop() {
        var element = _step.value;
        var passwordBtn = element.querySelector('.js-btn-form-password');
        passwordBtn.addEventListener('click', function () {
          var inputField = element.querySelector('.js-form-control-password');
          var iconVisible = element.querySelector('.js-btn-form-password-icon-visible');
          var iconHidden = element.querySelector('.js-btn-form-password-icon-hidden'); // Switch input types from/to password/text according to current type & switch button icons accordingly

          if (inputField.type === 'password') {
            inputField.type = 'text';
            hideElement(iconVisible);
            showElement(iconHidden);
          } else {
            inputField.type = 'password';
            hideElement(iconHidden);
            showElement(iconVisible);
          }
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    function showElement(ele) {
      ele.classList.remove('d-none');
      ele.classList.add('d-inline');
    }

    function hideElement(ele) {
      ele.classList.remove('d-inline');
      ele.classList.add('d-none');
    }
  })();
}

},{"./utils":7}],2:[function(require,module,exports){
"use strict";

require("./input-group-password");

require("./myk-menu-mobile-profile");

var _menu = _interopRequireDefault(require("./menu"));

require("./menu-mobile");

var _menuMobileSearch = _interopRequireDefault(require("./menu-mobile-search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* MENU */
(0, _menu.default)();
$(function () {
  /* MOBILE MENU */
  var mobileMenu = document.querySelector('.header-mobile .menu');

  if (mobileMenu) {
    new _menuMobileSearch.default(mobileMenu);
  }

  $('#menu-mobile-dropdown-menu-container').menuMobile();
  /* TOGGLETIP */
  // Function to get a sibling element if it matches a given selector
  // Return first next sibling if no selector is provided

  function getNextSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling; // If there's no selector, return the first sibling

    if (!selector) return sibling; // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop

    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  }

  ; // Get all the toggletip buttons (focusable elements)

  var toggletips = document.querySelectorAll('.js-toggletip-button'); // Iterate over them

  Array.prototype.forEach.call(toggletips, function (toggletip) {
    var caret = toggletip.getElementsByClassName('js-toggletip-caret')[0];
    var toggletipBubble = getNextSibling(toggletip, '.js-toggletip-bubble');
    var closeButton = toggletipBubble.querySelector('.js-toggletip-close-button');
    var previousActiveElement;

    var toggleToggletip = function toggleToggletip() {
      toggletipBubble.classList.toggle('d-block');
      caret.classList.toggle('d-block');
    };

    var toggleToggleTipWithFocusRestored = function toggleToggleTipWithFocusRestored() {
      toggleToggletip();
      previousActiveElement.focus();
    };

    var getAllFocusableElementsInToggletip = function getAllFocusableElementsInToggletip() {
      return _toConsumableArray(toggletipBubble.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')).filter(function (el) {
        return !el.hasAttribute('disabled');
      });
    }; // search for focusable elements within a context


    var getFirstFocusableElement = function getFirstFocusableElement() {
      var focusable = getAllFocusableElementsInToggletip();
      return focusable[0];
    }; // Open on click, save clicked element & focus on toggleTipBubble


    toggletip.addEventListener('click', function () {
      window.setTimeout(function () {
        previousActiveElement = document.activeElement;
        toggleToggletip();
        getFirstFocusableElement().focus();
      }, 100);
    }); // Close on outside click (EventListener is only added on pages with toggletips), restore focus to last clicked element

    document.addEventListener('click', function (e) {
      if (toggletipBubble !== e.target && toggletipBubble.classList.contains('d-block')) {
        toggleToggleTipWithFocusRestored();
      }
    }); // Close toggletip on close button click, restore focus to last clicked element

    closeButton.addEventListener('click', function (e) {
      if (toggletipBubble !== e.target && toggletipBubble.classList.contains('d-block')) {
        toggleToggleTipWithFocusRestored();
      }
    }); // Close on ESC., restore focus to last clicked element

    toggletip.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggletipBubble.classList.contains('d-block')) {
        toggleToggleTipWithFocusRestored();
      }
    }); // code to trap focus inside toggletip and close toggletip on ESC keypress

    var focusableElementsInToggletip = getAllFocusableElementsInToggletip();
    var firstFocusableElement = getFirstFocusableElement();
    var lastFocusableElement = focusableElementsInToggletip[focusableElementsInToggletip.length - 1];

    var handleKeyDownInToggletip = function handleKeyDownInToggletip(event) {
      // code to trap focus inside toggletip
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      } else if (event.key === 'Escape') {
        // close toggletip on ESC keypress
        toggleToggleTipWithFocusRestored();
      }
    };

    toggletipBubble.addEventListener('keydown', handleKeyDownInToggletip);
  });
});

},{"./input-group-password":1,"./menu":5,"./menu-mobile":4,"./menu-mobile-search":3,"./myk-menu-mobile-profile":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenuMobileSearch = /*#__PURE__*/function () {
  function MenuMobileSearch(mobileMenu) {
    _classCallCheck(this, MenuMobileSearch);

    this.mobileMenu = mobileMenu;
    this.searchBar = this.mobileMenu.querySelector('.js-search-bar');
    this.isSearchBarTransitioning = false;
    var showSearchBarButton = this.getShowSearchBarButton();

    if (showSearchBarButton) {
      showSearchBarButton.addEventListener('click', this.showSearchBar.bind(this));
    }

    var hideSearchBarButton = this.getHideSearchBarButton();

    if (hideSearchBarButton) {
      hideSearchBarButton.addEventListener('click', this.hideSearchBar.bind(this));
    }
  }

  _createClass(MenuMobileSearch, [{
    key: "showSearchBar",
    value: function showSearchBar(clickEvent) {
      var _this = this;

      clickEvent.preventDefault();

      if (this.isSearchBarTransitioning || this.isSearchBarVisible()) {
        return;
      }

      this.searchBar.classList.add('active');
      this.setAriaExpanded(true);
      this.fadeOutNonSearchControls();
      this.isSearchBarTransitioning = true;
      this.resetTransitioningFlagOnTransitionEnd(function () {
        return _this.getSearchBarInput().focus();
      });
    }
  }, {
    key: "hideSearchBar",
    value: function hideSearchBar(clickEvent) {
      var _this2 = this;

      clickEvent.preventDefault();

      if (this.isSearchBarTransitioning || !this.isSearchBarVisible()) {
        return;
      }

      this.searchBar.classList.remove('active');
      this.setAriaExpanded(false);
      this.fadeInNonSearchControls();
      this.isSearchBarTransitioning = true;
      this.resetTransitioningFlagOnTransitionEnd(function () {
        return _this2.getShowSearchBarButton().focus();
      });
    }
  }, {
    key: "fadeOutNonSearchControls",
    value: function fadeOutNonSearchControls() {
      // `transparent` controls the opacity (for the fade effect) and `invisible` is a bootstrap utility to let screen readers ignore the element.
      var _iterator = _createForOfIteratorHelper(this.getNonSearchControls()),
          _step;

      try {
        var _loop = function _loop() {
          var control = _step.value;
          control.classList.add('transparent');
          control.addEventListener('transitionend', function () {
            return control.classList.add('invisible');
          }, {
            once: true
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "fadeInNonSearchControls",
    value: function fadeInNonSearchControls() {
      var _iterator2 = _createForOfIteratorHelper(this.getNonSearchControls()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var control = _step2.value;
          control.classList.remove('invisible');
          control.classList.remove('transparent');
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "setAriaExpanded",
    value: function setAriaExpanded(expanded) {
      this.getShowSearchBarButton().setAttribute('aria-expanded', expanded ? 'true' : 'false');
      this.getHideSearchBarButton().setAttribute('aria-expanded', expanded ? 'true' : 'false');
    }
  }, {
    key: "resetTransitioningFlagOnTransitionEnd",
    value: function resetTransitioningFlagOnTransitionEnd() {
      var _this3 = this;

      var additionalHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var resetFlagHandler = function resetFlagHandler(event) {
        if (event.propertyName !== 'transform') {
          // Focusing (and blurring) the input field runs a transition on box-shadow.
          // We're only interested in the end of the `transform` transition, so ignore everything else.
          return;
        }

        _this3.isSearchBarTransitioning = false;

        if (typeof additionalHandler === 'function') {
          additionalHandler();
        }

        _this3.searchBar.removeEventListener('transitionend', resetFlagHandler);
      };

      this.searchBar.addEventListener('transitionend', resetFlagHandler);
    }
  }, {
    key: "isSearchBarVisible",
    value: function isSearchBarVisible() {
      return this.searchBar.classList.contains('active');
    }
  }, {
    key: "getNonSearchControls",
    value: function getNonSearchControls() {
      return Array.from(this.mobileMenu.querySelectorAll('.js-menu-bottom-item'));
    }
  }, {
    key: "getShowSearchBarButton",
    value: function getShowSearchBarButton() {
      return this.mobileMenu.querySelector('.js-navbar-toggler-search');
    }
  }, {
    key: "getHideSearchBarButton",
    value: function getHideSearchBarButton() {
      return this.mobileMenu.querySelector('.js-form-search-close-btn');
    }
  }, {
    key: "getSearchBarInput",
    value: function getSearchBarInput() {
      return this.mobileMenu.querySelector('.js-form-search-input');
    }
  }]);

  return MenuMobileSearch;
}();

exports.default = MenuMobileSearch;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

if ((0, _utils.default)('js-navbar-toggler-dropdown')) {
  $('body').on('click', '.js-navbar-toggler-dropdown', function () {
    noscrollToggle(this);
  });

  function noscrollToggle(e) {
    var html = $('html');
    var element = $(e).hasClass('collapsed');

    if (element) {
      hideChatButton();
      html.addClass("noscroll");
    } else {
      showChatButton();
      html.removeClass("noscroll");
      html.removeAttr("class");
    }
  }
  /*
  -----------------------------------------------------------
  HIDING CHAT BUTTON
  -----------------------------------------------------------
  * These functions hide the chat button
  */

  /* function for hiding the cobrowser chat button on mobile */


  function hideChatButton() {
    $('.__cb_plugin_standard_button').css('display', 'none');
  }
  /* function for showing the cobrowser chat button on mobile */


  function showChatButton() {
    $('.__cb_plugin_standard_button').css('display', 'block');
  }
}
/*
-----------------------------------------------------------
 MOBILE FLYOUT FUNCTIONALITY
-----------------------------------------------------------
*/

/*
 * Slinky (Modified by Kadaster)
 *
 * @author Ali Zahid <ali.zahid@live.com>
 * @author Kadaster
 *
 * MIT License
 *
 * Copyright (c) 2019 Ali Zahid
 * Copyright (c) 2020 Kadaster
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


var MenuMobile = /*#__PURE__*/function () {
  function MenuMobile(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, MenuMobile);

    this.settings = _objectSpread(_objectSpread({}, this.options), options);

    this._init(element);
  } // default options


  _createClass(MenuMobile, [{
    key: "options",
    get: function get() {
      return {
        resize: true,
        speed: 300,
        theme: '',
        title: false
      };
    }
  }, {
    key: "_init",
    value: function _init(element) {
      this.menu = jQuery(element);
      this.base = this.menu.children().first();
      var menu = this.menu,
          settings = this.settings;

      this._transition(settings.speed);

      jQuery('li > a', menu).wrapInner('<span class="menu-dropdown-link-text">'); // create next arrows

      jQuery('a + ul', menu).prev().addClass('next').attr('aria-expanded', 'false').append('<span class="far fa-angle-right icon-suffix menu-dropdown-link-icon"></span>'); //create .header for back buttons

      var header = jQuery('<li>').addClass('header');
      jQuery('li > ul', menu).prepend(header); // add back buttons to .header

      var back = jQuery('<a>').prop('href', '#').addClass('back').addClass('dropdown-menu-link').append('<span><span class="far fa-angle-left icon-prefix"></span>Terug</span>');
      jQuery('.header', menu).prepend(back); // set menu title when true in settings

      if (settings.title) {
        jQuery('li > ul', menu).each(function (index, element) {
          var label = jQuery(element).parent().find('a').first().text();

          if (label) {
            var title = jQuery('<header>').addClass('title').text(label);
            jQuery('> .header', element).append(title);
          }
        });
      } // called when specified MenuMobile is delivered to the window


      this._addListeners();

      this._jumpToInitial();
    }
  }, {
    key: "_addListeners",
    value: function _addListeners() {
      var _this = this;

      var menu = this.menu,
          settings = this.settings;
      jQuery('a', menu).on('click', function (e) {
        if (_this._clicked + settings.speed > Date.now()) {
          return false;
        }

        _this._clicked = Date.now();
        var link = jQuery(e.currentTarget); // Removed the following if because a link in the mobile menu may refer to an id on the same page
        // link.attr('href').indexOf('#') === 0 ||

        if (link.hasClass('next') || link.hasClass('back')) {
          e.preventDefault();
        }

        if (link.hasClass('next')) {
          menu.find('.active').removeClass('active');
          link.attr('aria-expanded', 'true');
          link.next().show().addClass('active');

          _this._move(1);

          if (settings.resize) {
            _this._resize(link.next());
          }
        } else if (link.hasClass('back')) {
          _this._move(-1, function () {
            menu.find('.active').removeClass('active');
            link.parent().parent().prev().attr('aria-expanded', 'false');
            link.parent().parent().hide().parentsUntil(menu, 'ul').first().addClass('active');
          });

          if (settings.resize) {
            _this._resize(link.parent().parent().parentsUntil(menu, 'ul'));
          }
        }
      });
    } //makes sure menu is on initial state on page load

  }, {
    key: "_jumpToInitial",
    value: function _jumpToInitial() {
      var menu = this.menu,
          settings = this.settings; // get initial active

      var active = menu.find('.active');

      if (active.length > 0) {
        // remove initial active
        active.removeClass('active'); // jump without animation

        this.jump(active, false);
      } // set initial height on the menu
      // to fix the first transition resize bug


      setTimeout(function () {
        return menu.height('calc(100% - 130px)');
      }, settings.speed);
    } // slide the menu

  }, {
    key: "_move",
    value: function _move() {
      var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      // don't bother packing if we're not going anywhere
      if (depth === 0) {
        return;
      }

      var settings = this.settings,
          base = this.base; // get current position from the left

      var left = Math.round(parseInt(base.get(0).style.left)) || 0; // set the new position from the left

      base.css('left', "".concat(left - depth * 100, "%")); // callback after the animation

      if (typeof callback === 'function') {
        setTimeout(callback, settings.speed);
      }
    } // resize the menu
    // to match content height

  }, {
    key: "_resize",
    value: function _resize(content) {
      var menu = this.menu;
      menu.height('calc(100% - 130px)');
    } // set the transition speed

  }, {
    key: "_transition",
    value: function _transition() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      var menu = this.menu,
          base = this.base;
      menu.css('transition-duration', "".concat(speed, "ms"));
      base.css('transition-duration', "".concat(speed, "ms"));
    } // jump to an element

  }, {
    key: "jump",
    value: function jump(target) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!target) {
        return;
      }

      var menu = this.menu,
          settings = this.settings;
      var to = jQuery(target); // get all current active

      var active = menu.find('.active'); // how many moves must we jump?

      var count = 0; // this many
      // until we reach the parent list

      if (active.length > 0) {
        count = active.parentsUntil(menu, 'ul').length;
      } // remove current active
      // hide all lists


      menu.find('ul').removeClass('active').hide(); // get parent list

      var menus = to.parentsUntil(menu, 'ul'); // show parent list

      menus.show(); // show target

      to.show().addClass('active'); // set transition speed to 0 if no animation

      if (!animate) {
        this._transition(0);
      } // make the checkers move


      this._move(menus.length - count); // resize menu if need be


      if (settings.resize) {
        this._resize(to);
      } // set transition speed to default after transition


      if (!animate) {
        this._transition(settings.speed);
      }
    } // go big or go home
    // just go home

  }, {
    key: "home",
    value: function home() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var base = this.base,
          menu = this.menu,
          settings = this.settings; // set transition speed to 0 if no animation

      if (!animate) {
        this._transition(0);
      } // get current active


      var active = menu.find('.active'); // get all parent lists

      var parents = active.parentsUntil(menu, 'ul'); // make the move

      this._move(-parents.length, function () {
        // remove the current active
        active.removeClass('active').hide(); // hide all parents except base

        parents.not(base).hide();
      }); // resize if need be


      if (settings.resize) {
        this._resize(base);
      } // set transition speed back to default


      if (animate === false) {
        this._transition(settings.speed);
      }
    } // crush, kill, destroy

  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      var base = this.base,
          menu = this.menu; // remove all headers

      jQuery('.header', menu).remove(); // remove MobileMenu links
      // and click listeners

      jQuery('a', menu).removeClass('next').off('click'); // remove inline styles

      menu.css({
        height: '',
        'transition-duration': ''
      });
      base.css({
        left: '',
        'transition-duration': ''
      }); // remove MobileMenu HTML

      jQuery('li > a > span', menu).contents().unwrap(); // remove any current active

      menu.find('.active').removeClass('active'); // remove any MobileMenu style classes

      var styles = menu.attr('class').split(' ');
      styles.forEach(function (style) {
        if (style.indexOf('slinky') === 0) {
          menu.removeClass(style);
        }
      }); // reset fields

      var fields = ['settings', 'menu', 'base'];
      fields.forEach(function (field) {
        return delete _this2[field];
      });
    }
  }]);

  return MenuMobile;
}(); // jQuery plugin


exports.default = MenuMobile;

(function ($) {
  $.fn.menuMobile = function (options) {
    return new MenuMobile(this, options);
  };
})(jQuery);

},{"./utils":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  if (!(0, _utils.default)('js-dropdown')) {
    return;
  }

  setAriaAttributesOnInit();
  $(function () {
    /* Prevent dropdown menu from closing when clicking inside of dropdown or on a menu-link.
    *  (Bootstrap natively closes dropdown on click outside of dropdown element.) */
    document.body.addEventListener('click', function (event) {
      // Early return means letting the event bubble up, closing the menu
      var dropdownMenu = event.target.closest('.js-dropdown');

      if (!dropdownMenu) {
        // Clicked outside the menu
        return;
      }

      var closeButton = event.target.closest('.close');

      if (closeButton) {
        // Close button clicked
        return;
      }

      var arrowLink = event.target.closest('.dropdown-menu-link');

      if (arrowLink) {
        // Link with arrow clicked - prevent navigating to #
        event.preventDefault();
      }

      event.stopPropagation();
    });
    $('.js-dropdown-link').on('click', function () {
      deactivateFlyouts(this);
      activateFlyout(this);
      resetDropdownMenuHeight();
      handleMenuLinkStyling(this);
      setDropdownMenuHeight();
      handleFlyoutAriaLabels(this);
    });
    $('.dropdown').on('hidden.bs.dropdown', function () {
      resetDropdown();
    });
  });
  /*
  -----------------------------------------------------------
  FLYOUT FUNCTIONALITY
  -----------------------------------------------------------
  * These functions drive the flyout functionality and styling of the dropdown menu
  */

  /* Set the dropdown height to the height of the longest flyout */

  function setDropdownMenuHeight() {
    var dropdown = $('.js-dropdown');
    var activeFlyoutsClass = $('.js-dropdown-flyout:not(.d-none)');
    /* Map all flyout heights and fetch the heighest value to set to .dropdown-menu-container */

    var activeFlyouts = dropdown.find(activeFlyoutsClass).map(function () {
      return this.clientHeight;
    }).get();
    var heighestFltoutHeight = Math.max.apply(Math, activeFlyouts);
    $('.js-dropdown-container').css('height', heighestFltoutHeight);
  }

  function resetDropdownMenuHeight() {
    $('.js-dropdown-container').css('height', 'auto');
  }

  function deactivateFlyouts(e) {
    var dropdown = $('.js-dropdown');
    var parentMenuListItem = $(e).closest('li', dropdown);
    var activeFlyouts = $('.js-dropdown-flyout-next:not(.d-none)');
    var nextActiveFlyouts = parentMenuListItem.siblings().find(activeFlyouts);
    nextActiveFlyouts.addClass('d-none');
  }

  function activateFlyout(e) {
    var nextFlyout = $(e).siblings('.js-dropdown-flyout-next');
    nextFlyout.removeClass('d-none');
  }

  function handleMenuLinkStyling(e) {
    activateMenuItem(e);
    deactivateMenuItems(e);
  }

  function activateMenuItem(e) {
    $(e).addClass('active');
  }

  function deactivateMenuItems(e) {
    var dropdown = $('.js-dropdown');
    var parentMenuListItem = $(e).closest('li', dropdown);
    /* click is registered on <a> element, need to target parent <li> to access sibling elements */

    var siblings = parentMenuListItem.siblings();
    var menuLinks = siblings.children('.js-dropdown-link');
    menuLinks.removeClass('active');
    siblings.find('.active').removeClass('active');
  }

  function handleFlyoutAriaLabels(e) {
    /* only set aria-expanded = true to elements with a sibling flyout menu */
    if ($(e).hasClass('active') && $(e).siblings('.js-dropdown-flyout').length > 0) {
      e.setAttribute('aria-expanded', 'true');
    }

    var parentMenuLi = $(e).parent();
    var siblingMenusLinks = parentMenuLi.siblings().find('.js-dropdown-link');

    if (siblingMenusLinks.attr('aria-expanded') === 'true') {
      siblingMenusLinks.attr('aria-expanded', 'false');
    }
  }

  function resetAriaLabels() {
    var dropdownMenuLinks = $('body').find('.js-dropdown-container [aria-expanded]');
    $.each(dropdownMenuLinks, function (index, element) {
      element.setAttribute('aria-expanded', 'false');
    });
  }

  function resetDropdown() {
    var dropdown = $('.js-dropdown');
    dropdown.find('.js-dropdown-flyout-next').addClass('d-none');
    dropdown.find('.active').removeClass('active');
    resetDropdownMenuHeight();
    resetAriaLabels();
  }

  function setAriaAttributesOnInit() {
    var dropdownContainer = $('.menu-dropdown-container');
    var allDropdownLinks = dropdownContainer.find('.js-dropdown-link');
    allDropdownLinks.attr('aria-expanded', 'false');
    allDropdownLinks.attr('aria-haspopup', 'true');
  }
}

},{"./utils":7}],6:[function(require,module,exports){
"use strict";

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _utils.default)('js-myk-user-menu-dropdown')) {
  $('.js-myk-user-menu-dropdown-toggle').each(function () {
    $(this).parent().on('show.bs.dropdown', function () {
      $('body').addClass('noscroll');
    });
    $(this).parent().on('hide.bs.dropdown', function () {
      $('body').removeClass('noscroll');
    });
  });
}

},{"./utils":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(elementClass) {
  // When an element with a given class exists on the page (on load), return true
  return document.getElementsByClassName(elementClass).length > 0;
}

},{}],8:[function(require,module,exports){
"use strict";

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () {
  'use strict';

  var OFI = 'bfred-it:object-fit-images';
  var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
  var testImg = typeof Image === 'undefined' ? {
    style: {
      'object-position': 1
    }
  } : new Image();
  var supportsObjectFit = ('object-fit' in testImg.style);
  var supportsObjectPosition = ('object-position' in testImg.style);
  var supportsOFI = ('background-size' in testImg.style);
  var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
  var nativeGetAttribute = testImg.getAttribute;
  var nativeSetAttribute = testImg.setAttribute;
  var autoModeEnabled = false;

  function createPlaceholder(w, h) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
  }

  function polyfillCurrentSrc(el) {
    if (el.srcset && !supportsCurrentSrc && window.picturefill) {
      var pf = window.picturefill._; // parse srcset with picturefill where currentSrc isn't available

      if (!el[pf.ns] || !el[pf.ns].evaled) {
        // force synchronous srcset parsing
        pf.fillImg(el, {
          reselect: true
        });
      }

      if (!el[pf.ns].curSrc) {
        // force picturefill to parse srcset
        el[pf.ns].supported = false;
        pf.fillImg(el, {
          reselect: true
        });
      } // retrieve parsed currentSrc, if any


      el.currentSrc = el[pf.ns].curSrc || el.src;
    }
  }

  function getStyle(el) {
    var style = getComputedStyle(el).fontFamily;
    var parsed;
    var props = {};

    while ((parsed = propRegex.exec(style)) !== null) {
      props[parsed[1]] = parsed[2];
    }

    return props;
  }

  function setPlaceholder(img, width, height) {
    // Default: fill width, no height
    var placeholder = createPlaceholder(width || 1, height || 0); // Only set placeholder if it's different

    if (nativeGetAttribute.call(img, 'src') !== placeholder) {
      nativeSetAttribute.call(img, 'src', placeholder);
    }
  }

  function onImageReady(img, callback) {
    // naturalWidth is only available when the image headers are loaded,
    // this loop will poll it every 100ms.
    if (img.naturalWidth) {
      callback(img);
    } else {
      setTimeout(onImageReady, 100, img, callback);
    }
  }

  function fixOne(el) {
    var style = getStyle(el);
    var ofi = el[OFI];
    style['object-fit'] = style['object-fit'] || 'fill'; // default value
    // Avoid running where unnecessary, unless OFI had already done its deed

    if (!ofi.img) {
      // fill is the default behavior so no action is necessary
      if (style['object-fit'] === 'fill') {
        return;
      } // Where object-fit is supported and object-position isn't (Safari < 10)


      if (!ofi.skipTest && // unless user wants to apply regardless of browser support
      supportsObjectFit && // if browser already supports object-fit
      !style['object-position'] // unless object-position is used
      ) {
        return;
      }
    } // keep a clone in memory while resetting the original to a blank


    if (!ofi.img) {
      ofi.img = new Image(el.width, el.height);
      ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
      ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src; // preserve for any future cloneNode calls
      // https://github.com/bfred-it/object-fit-images/issues/53

      nativeSetAttribute.call(el, "data-ofi-src", el.src);

      if (el.srcset) {
        nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
      }

      setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height); // remove srcset because it overrides src

      if (el.srcset) {
        el.srcset = '';
      }

      try {
        keepSrcUsable(el);
      } catch (err) {
        if (window.console) {
          console.warn('https://bit.ly/ofi-old-browser');
        }
      }
    }

    polyfillCurrentSrc(ofi.img);
    el.style.backgroundImage = "url(\"" + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + "\")";
    el.style.backgroundPosition = style['object-position'] || 'center';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundOrigin = 'content-box';

    if (/scale-down/.test(style['object-fit'])) {
      onImageReady(ofi.img, function () {
        if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
          el.style.backgroundSize = 'contain';
        } else {
          el.style.backgroundSize = 'auto';
        }
      });
    } else {
      el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
    }

    onImageReady(ofi.img, function (img) {
      setPlaceholder(el, img.naturalWidth, img.naturalHeight);
    });
  }

  function keepSrcUsable(el) {
    var descriptors = {
      get: function get(prop) {
        return el[OFI].img[prop ? prop : 'src'];
      },
      set: function set(value, prop) {
        el[OFI].img[prop ? prop : 'src'] = value;
        nativeSetAttribute.call(el, "data-ofi-" + prop, value); // preserve for any future cloneNode

        fixOne(el);
        return value;
      }
    };
    Object.defineProperty(el, 'src', descriptors);
    Object.defineProperty(el, 'currentSrc', {
      get: function get() {
        return descriptors.get('currentSrc');
      }
    });
    Object.defineProperty(el, 'srcset', {
      get: function get() {
        return descriptors.get('srcset');
      },
      set: function set(ss) {
        return descriptors.set(ss, 'srcset');
      }
    });
  }

  function hijackAttributes() {
    function getOfiImageMaybe(el, name) {
      return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
    }

    if (!supportsObjectPosition) {
      HTMLImageElement.prototype.getAttribute = function (name) {
        return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
      };

      HTMLImageElement.prototype.setAttribute = function (name, value) {
        return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
      };
    }
  }

  function fix(imgs, opts) {
    var startAutoMode = !autoModeEnabled && !imgs;
    opts = opts || {};
    imgs = imgs || 'img';

    if (supportsObjectPosition && !opts.skipTest || !supportsOFI) {
      return false;
    } // use imgs as a selector or just select all images


    if (imgs === 'img') {
      imgs = document.getElementsByTagName('img');
    } else if (typeof imgs === 'string') {
      imgs = document.querySelectorAll(imgs);
    } else if (!('length' in imgs)) {
      imgs = [imgs];
    } // apply fix to all


    for (var i = 0; i < imgs.length; i++) {
      imgs[i][OFI] = imgs[i][OFI] || {
        skipTest: opts.skipTest
      };
      fixOne(imgs[i]);
    }

    if (startAutoMode) {
      document.body.addEventListener('load', function (e) {
        if (e.target.tagName === 'IMG') {
          fix(e.target, {
            skipTest: opts.skipTest
          });
        }
      }, true);
      autoModeEnabled = true;
      imgs = 'img'; // reset to a generic selector for watchMQ
    } // if requested, watch media queries for object-fit change


    if (opts.watchMQ) {
      window.addEventListener('resize', fix.bind(null, imgs, {
        skipTest: opts.skipTest
      }));
    }
  }

  fix.supportsObjectFit = supportsObjectFit;
  fix.supportsObjectPosition = supportsObjectPosition;
  hijackAttributes();
  return fix;
}();

},{}]},{},[8,2]);

//# sourceMappingURL=kadaster-huisstijl.js.map
