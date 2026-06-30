"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_module_controller_js"],{

/***/ "./assets/controllers/module_controller.js":
/*!*************************************************!*\
  !*** ./assets/controllers/module_controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://symfony.com/bundles/StimulusBundle/current/index.html#lazy-stimulus-controllers
*/

/* stimulusFetch: 'lazy' */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "photoInput", null);
    _defineProperty(_this, "preview", null);
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {
      // ----------------------------

      // document.addEventListener('', function () {
      var realPriceInput = document.querySelector('.js-real-price');
      var promoPriceInput = document.querySelector('.js-promo-price');
      var discountBadge = document.getElementById('js-discount-badge');
      function updateDiscount() {
        // console.log("execute");
        var real = parseFloat(realPriceInput.value);
        var promo = parseFloat(promoPriceInput.value);

        // console.log("real", real);

        if (real > 0 && promo > 0 && promo < 80) {
          var discount = real * promo / 100;
          discountBadge.textContent = 'Prix promotionnel ' + discount + ' Fcfa';
          discountBadge.style.display = 'block';
        } else {
          discountBadge.style.display = 'none';
        }
      }

      // Écouter la saisie sur les deux prix
      realPriceInput.addEventListener('input', updateDiscount);
      promoPriceInput.addEventListener('input', updateDiscount);

      // Initialisation au chargement
      updateDiscount();
      // });
    }
  }, {
    key: "show2",
    value: function show2(event) {
      var _this2 = this;
      var file = event.currentTarget.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          _this2.outputTarget.src = e.target.result;
          _this2.outputTarget.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    }
  }, {
    key: "show",
    value: function show(event) {
      // console.log("event preview", event);
      this.photoInput = document.querySelector('.js-photo-input');
      var preview = document.getElementById('image-preview');
      if (this.photoInput) {
        this.photoInput.addEventListener('change', function () {
          var file = this.files[0];
          if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
              // On injecte la source de l'image (base64)
              preview.src = e.target.result;
              preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
          } else {
            preview.src = "#";
            preview.style.display = 'none';
          }
        });
      }
    }
  }, {
    key: "checkbox",
    value: function checkbox(event) {
      var promoCheckbox = document.querySelector('.js-promotion-checkbox');
      var promoContainer = document.getElementById('promo-price-container');
      var promoInput = document.querySelector('.js-promo-price');
      function togglePromoPrice() {
        if (promoCheckbox.checked) {
          promoContainer.style.display = 'block';
          promoInput.required = true;
        } else {
          promoContainer.style.display = 'none';
          promoInput.required = false;
          promoInput.value = ''; // Optionnel : vide le champ si on décoche
        }
      }

      // Écouter le changement
      promoCheckbox.addEventListener('change', togglePromoPrice);

      // Vérifier l'état au chargement (utile en mode édition)
      togglePromoPrice();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // Called anytime its element is disconnected from the DOM
      // (on page change, when it's removed from or moved in the DOM, etc.)

      // Here you should remove all event listeners added in "connect()"
      // this.fooTarget.removeEventListener('click', this._fooBar)
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
_defineProperty(_default, "targets", ['output', 'input', 'label']);


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat !== $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX21vZHVsZV9jb250cm9sbGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUEsSUFBQUMsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQSxJQUFBRSxLQUFBO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUFBLFNBQUFJLElBQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLEVBQUFDLElBQUEsT0FBQUMsS0FBQSxDQUFBSixJQUFBLEdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7TUFBQUYsSUFBQSxDQUFBRSxJQUFBLElBQUFKLFNBQUEsQ0FBQUksSUFBQTtJQUFBO0lBQUFQLEtBQUEsR0FBQVEsVUFBQSxPQUFBVixRQUFBLEtBQUFXLE1BQUEsQ0FBQUosSUFBQTtJQUFBSyxlQUFBLENBQUFWLEtBQUEsZ0JBR2lCLElBQUk7SUFBQVUsZUFBQSxDQUFBVixLQUFBLGFBQ1AsSUFBSTtJQUFBLE9BQUFBLEtBQUE7RUFBQTtFQUFBVyxTQUFBLENBQUFiLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFhLFlBQUEsQ0FBQWQsUUFBQTtJQUFBZSxHQUFBO0lBQUFDLEtBQUEsRUFFZCxTQUFBQyxVQUFVQSxDQUFBLEVBQUcsQ0FDYjtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFFLE9BQU9BLENBQUEsRUFBRztNQUVOOztNQUVBO01BQ0EsSUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUMvRCxJQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQ2pFLElBQU1FLGFBQWEsR0FB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cGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tb2R1bGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiogVGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHRoaXMgY29udHJvbGxlciBcImxhenlcIjogaXQgd29uJ3QgYmUgZG93bmxvYWRlZCB1bnRpbCBuZWVkZWRcbiogU2VlIGh0dHBzOi8vc3ltZm9ueS5jb20vYnVuZGxlcy9TdGltdWx1c0J1bmRsZS9jdXJyZW50L2luZGV4Lmh0bWwjbGF6eS1zdGltdWx1cy1jb250cm9sbGVyc1xuKi9cblxuLyogc3RpbXVsdXNGZXRjaDogJ2xhenknICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydvdXRwdXQnLCAnaW5wdXQnLCAnbGFiZWwnXTtcbiAgICBwaG90b0lucHV0ID0gbnVsbDtcbiAgICBwcmV2aWV3ID0gbnVsbDtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZWFsUHJpY2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWFsLXByaWNlJyk7XG4gICAgICAgIGNvbnN0IHByb21vUHJpY2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9tby1wcmljZScpO1xuICAgICAgICBjb25zdCBkaXNjb3VudEJhZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWRpc2NvdW50LWJhZGdlJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlzY291bnQoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4ZWN1dGVcIik7XG4gICAgICAgICAgICBjb25zdCByZWFsID0gcGFyc2VGbG9hdChyZWFsUHJpY2VJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBwcm9tbyA9IHBhcnNlRmxvYXQocHJvbW9QcmljZUlucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZWFsXCIsIHJlYWwpO1xuXG4gICAgICAgICAgICBpZiAocmVhbCA+IDAgJiYgcHJvbW8gPiAwICYmIHByb21vIDwgODApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNjb3VudCA9IChyZWFsICogcHJvbW8pIC8gMTAwO1xuICAgICAgICAgICAgICAgIGRpc2NvdW50QmFkZ2UudGV4dENvbnRlbnQgPSAnUHJpeCBwcm9tb3Rpb25uZWwgJyArIGRpc2NvdW50ICsgJyBGY2ZhJztcbiAgICAgICAgICAgICAgICBkaXNjb3VudEJhZGdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNjb3VudEJhZGdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDDiWNvdXRlciBsYSBzYWlzaWUgc3VyIGxlcyBkZXV4IHByaXhcbiAgICAgICAgcmVhbFByaWNlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVEaXNjb3VudCk7XG4gICAgICAgIHByb21vUHJpY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZURpc2NvdW50KTtcblxuICAgICAgICAvLyBJbml0aWFsaXNhdGlvbiBhdSBjaGFyZ2VtZW50XG4gICAgICAgIHVwZGF0ZURpc2NvdW50KCk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuXG4gICAgc2hvdzIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBzaG93KGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXZlbnQgcHJldmlld1wiLCBldmVudCk7XG4gICAgICAgIHRoaXMucGhvdG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1waG90by1pbnB1dCcpO1xuICAgICAgICBjb25zdCBwcmV2aWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLXByZXZpZXcnKTtcblxuICAgICAgICBpZiAodGhpcy5waG90b0lucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnBob3RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIGluamVjdGUgbGEgc291cmNlIGRlIGwnaW1hZ2UgKGJhc2U2NClcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlldy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcuc3JjID0gXCIjXCI7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjaGVja2JveChldmVudCkge1xuICAgICAgICBjb25zdCBwcm9tb0NoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByb21vdGlvbi1jaGVja2JveCcpO1xuICAgICAgICBjb25zdCBwcm9tb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9tby1wcmljZS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvbW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9tby1wcmljZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVByb21vUHJpY2UoKSB7XG4gICAgICAgICAgICBpZiAocHJvbW9DaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcHJvbW9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgcHJvbW9JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21vQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcHJvbW9JbnB1dC5yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByb21vSW5wdXQudmFsdWUgPSAnJzsgLy8gT3B0aW9ubmVsIDogdmlkZSBsZSBjaGFtcCBzaSBvbiBkw6ljb2NoZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gw4ljb3V0ZXIgbGUgY2hhbmdlbWVudFxuICAgICAgICBwcm9tb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZ2dsZVByb21vUHJpY2UpO1xuXG4gICAgICAgIC8vIFbDqXJpZmllciBsJ8OpdGF0IGF1IGNoYXJnZW1lbnQgKHV0aWxlIGVuIG1vZGUgw6lkaXRpb24pXG4gICAgICAgIHRvZ2dsZVByb21vUHJpY2UoKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICAvLyBDYWxsZWQgYW55dGltZSBpdHMgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgRE9NXG4gICAgICAgIC8vIChvbiBwYWdlIGNoYW5nZSwgd2hlbiBpdCdzIHJlbW92ZWQgZnJvbSBvciBtb3ZlZCBpbiB0aGUgRE9NLCBldGMuKVxuXG4gICAgICAgIC8vIEhlcmUgeW91IHNob3VsZCByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBhZGRlZCBpbiBcImNvbm5lY3QoKVwiXG4gICAgICAgIC8vIHRoaXMuZm9vVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZm9vQmFyKVxuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT09ICRwYXJzZUZsb2F0IH0sIHtcbiAgcGFyc2VGbG9hdDogJHBhcnNlRmxvYXRcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXRpYWxpemUiLCJjb25uZWN0IiwicmVhbFByaWNlSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9tb1ByaWNlSW5wdXQiLCJkaXNjb3VudEJhZGdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVEaXNjb3VudCIsInJlYWwiLCJwYXJzZUZsb2F0IiwicHJvbW8iLCJkaXNjb3VudCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3cyIiwiZXZlbnQiLCJfdGhpczIiLCJmaWxlIiwiY3VycmVudFRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJvdXRwdXRUYXJnZXQiLCJzcmMiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwic2hvdyIsInBob3RvSW5wdXQiLCJwcmV2aWV3IiwiY2hlY2tib3giLCJwcm9tb0NoZWNrYm94IiwicHJvbW9Db250YWluZXIiLCJwcm9tb0lucHV0IiwidG9nZ2xlUHJvbW9QcmljZSIsImNoZWNrZWQiLCJyZXF1aXJlZCIsImRpc2Nvbm5lY3QiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==