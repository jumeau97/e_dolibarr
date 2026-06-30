"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_product_controller_js"],{

/***/ "./assets/controllers/product_controller.js":
/*!**************************************************!*\
  !*** ./assets/controllers/product_controller.js ***!
  \**************************************************/
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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {
      // Called once when the controller is first instantiated (per element)

      // Here you can initialize variables, create scoped callables for event
      // listeners, instantiate external libraries, etc.
      // this._fooBar = this.fooBar.bind(this)
    }
  }, {
    key: "connect",
    value: function connect() {
      // Called every time the controller is connected to the DOM
      // (on page load, when it's added to the DOM, moved in the DOM, etc.)

      // Here you can add event listeners on the element or target elements,
      // add or remove classes, attributes, dispatch custom events, etc.
      // this.fooTarget.addEventListener('click', this._fooBar)
    }

    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }
  }, {
    key: "disconnect",
    value: function disconnect() {
      // Called anytime its element is disconnected from the DOM
      // (on page change, when it's removed from or moved in the DOM, etc.)

      // Here you should remove all event listeners added in "connect()" 
      // this.fooTarget.removeEventListener('click', this._fooBar)
    }

    // Déclaration des éléments cibles dans la modal
  }, {
    key: "open",
    value: function open(event) {
      var id = event.params.id;
      console.log("id", id);
      var name = event.params.name;

      // Sélection directe dans tout le document si le target est hors de portée
      var display = document.getElementById('transfert-produit-nom');
      console.log("display", display);
      var input = document.getElementById('transfert-produit-id');
      console.log("id", input);
      if (display) display.textContent = name;
      if (input) input.value = id;

      // $('#modal-transfert').modal('show');
    }
  }, {
    key: "openning",
    value: function openning(event) {
      var id = event.params.id;
      console.log("id", id);
      var name = event.params.name;

      // Sélection directe dans tout le document si le target est hors de portée
      var display = document.getElementById('correct-produit-nom');
      console.log("display", display);
      var input = document.getElementById('correct-produit-id');
      if (display) display.textContent = name;
      if (input) input.value = id;

      // $('#modal-transfert').modal('show');
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['productIdInput', 'productNameDisplay']);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX3Byb2R1Y3RfY29udHJvbGxlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBLElBQUFDLFFBQUEsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUFFLGVBQUEsT0FBQUYsUUFBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBR0ksU0FBQUMsVUFBVUEsQ0FBQSxFQUFHO01BQ1Q7O01BRUE7TUFDQTtNQUNBO0lBQUE7RUFDSDtJQUFBRixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBRSxPQUFPQSxDQUFBLEVBQUc7TUFDTjtNQUNBOztNQUVBO01BQ0E7TUFDQTtJQUFBOztJQUdKO0lBQ0E7RUFBQTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFFQSxTQUFBRyxVQUFVQSxDQUFBLEVBQUc7TUFDVDtNQUNBOztNQUVBO01BQ0E7SUFBQTs7SUFJSjtFQUFBO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUdBLFNBQUFJLElBQUlBLENBQUNDLEtBQUssRUFBRTtNQUNSLElBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNELEVBQUU7TUFDMUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUgsRUFBRSxDQUFDO01BQ3JCLElBQU1JLElBQUksR0FBR0wsS0FBSyxDQUFDRSxNQUFNLENBQUNHLElBQUk7O01BRTlCO01BQ0EsSUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQztNQUNoRUwsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRSxPQUFPLENBQUM7TUFDL0IsSUFBTUcsS0FBSyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztNQUM3REwsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFDSyxLQUFLLENBQUM7TUFFdkIsSUFBSUgsT0FBTyxFQUFFQSxPQUFPLENBQUNJLFdBQVcsR0FBR0wsSUFBSTtNQUN2QyxJQUFJSSxLQUFLLEVBQUVBLEtBQUssQ0FBQ2QsS0FBSyxHQUFHTSxFQUFFOztNQUUzQjtJQUVKO0VBQUM7SUFBQVAsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWdCLFFBQVFBLENBQUNYLEtBQUssRUFBRTtNQUNaLElBQU1DLEVBQUUsR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNELEVBQUU7TUFDMUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRUgsRUFBRSxDQUFDO01BQ3JCLElBQU1JLElBQUksR0FBR0wsS0FBSyxDQUFDRSxNQUFNLENBQUNHLElBQUk7O01BRTlCO01BQ0EsSUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztNQUM5REwsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRSxPQUFPLENBQUM7TUFDL0IsSUFBTUcsS0FBSyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztNQUUzRCxJQUFJRixPQUFPLEVBQUVBLE9BQU8sQ0FBQ0ksV0FBVyxHQUFHTCxJQUFJO01BQ3ZDLElBQUlJLEtBQUssRUFBRUEsS0FBSyxDQUFDZCxLQUFLLEdBQUdNLEVBQUU7O01BRTNCO0lBRUo7RUFBQztBQUFBLEVBbkV3QmYsMkRBQVU7QUFBQTBCLGVBQUEsQ0FBQXpCLFFBQUEsYUFnQ2xCLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcHJvZHVjdF9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiogVGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHRoaXMgY29udHJvbGxlciBcImxhenlcIjogaXQgd29uJ3QgYmUgZG93bmxvYWRlZCB1bnRpbCBuZWVkZWRcbiogU2VlIGh0dHBzOi8vc3ltZm9ueS5jb20vYnVuZGxlcy9TdGltdWx1c0J1bmRsZS9jdXJyZW50L2luZGV4Lmh0bWwjbGF6eS1zdGltdWx1cy1jb250cm9sbGVyc1xuKi9cblxuLyogc3RpbXVsdXNGZXRjaDogJ2xhenknICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8gQ2FsbGVkIG9uY2Ugd2hlbiB0aGUgY29udHJvbGxlciBpcyBmaXJzdCBpbnN0YW50aWF0ZWQgKHBlciBlbGVtZW50KVxuXG4gICAgICAgIC8vIEhlcmUgeW91IGNhbiBpbml0aWFsaXplIHZhcmlhYmxlcywgY3JlYXRlIHNjb3BlZCBjYWxsYWJsZXMgZm9yIGV2ZW50XG4gICAgICAgIC8vIGxpc3RlbmVycywgaW5zdGFudGlhdGUgZXh0ZXJuYWwgbGlicmFyaWVzLCBldGMuXG4gICAgICAgIC8vIHRoaXMuX2Zvb0JhciA9IHRoaXMuZm9vQmFyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICAvLyBDYWxsZWQgZXZlcnkgdGltZSB0aGUgY29udHJvbGxlciBpcyBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgICAgICAvLyAob24gcGFnZSBsb2FkLCB3aGVuIGl0J3MgYWRkZWQgdG8gdGhlIERPTSwgbW92ZWQgaW4gdGhlIERPTSwgZXRjLilcblxuICAgICAgICAvLyBIZXJlIHlvdSBjYW4gYWRkIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgZWxlbWVudCBvciB0YXJnZXQgZWxlbWVudHMsXG4gICAgICAgIC8vIGFkZCBvciByZW1vdmUgY2xhc3NlcywgYXR0cmlidXRlcywgZGlzcGF0Y2ggY3VzdG9tIGV2ZW50cywgZXRjLlxuICAgICAgICAvLyB0aGlzLmZvb1RhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Zvb0JhcilcbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tIGNvbnRyb2xsZXIgYWN0aW9ucyBoZXJlXG4gICAgLy8gZm9vQmFyKCkgeyB0aGlzLmZvb1RhcmdldC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuYmF6Q2xhc3MpIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIC8vIENhbGxlZCBhbnl0aW1lIGl0cyBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBET01cbiAgICAgICAgLy8gKG9uIHBhZ2UgY2hhbmdlLCB3aGVuIGl0J3MgcmVtb3ZlZCBmcm9tIG9yIG1vdmVkIGluIHRoZSBET00sIGV0Yy4pXG5cbiAgICAgICAgLy8gSGVyZSB5b3Ugc2hvdWxkIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIGluIFwiY29ubmVjdCgpXCIgXG4gICAgICAgIC8vIHRoaXMuZm9vVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZm9vQmFyKVxuICAgIH1cblxuXG4gICAgLy8gRMOpY2xhcmF0aW9uIGRlcyDDqWzDqW1lbnRzIGNpYmxlcyBkYW5zIGxhIG1vZGFsXG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ3Byb2R1Y3RJZElucHV0JywgJ3Byb2R1Y3ROYW1lRGlzcGxheSddXG5cbiAgICBvcGVuKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGlkID0gZXZlbnQucGFyYW1zLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlkXCIsIGlkKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnBhcmFtcy5uYW1lO1xuXG4gICAgICAgIC8vIFPDqWxlY3Rpb24gZGlyZWN0ZSBkYW5zIHRvdXQgbGUgZG9jdW1lbnQgc2kgbGUgdGFyZ2V0IGVzdCBob3JzIGRlIHBvcnTDqWVcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2ZlcnQtcHJvZHVpdC1ub20nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNwbGF5XCIsIGRpc3BsYXkpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2ZlcnQtcHJvZHVpdC1pZCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImlkXCIsaW5wdXQpO1xuXG4gICAgICAgIGlmIChkaXNwbGF5KSBkaXNwbGF5LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgaWYgKGlucHV0KSBpbnB1dC52YWx1ZSA9IGlkO1xuXG4gICAgICAgIC8vICQoJyNtb2RhbC10cmFuc2ZlcnQnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgfVxuXG4gICAgb3Blbm5pbmcoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgaWQgPSBldmVudC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWRcIiwgaWQpO1xuICAgICAgICBjb25zdCBuYW1lID0gZXZlbnQucGFyYW1zLm5hbWU7XG5cbiAgICAgICAgLy8gU8OpbGVjdGlvbiBkaXJlY3RlIGRhbnMgdG91dCBsZSBkb2N1bWVudCBzaSBsZSB0YXJnZXQgZXN0IGhvcnMgZGUgcG9ydMOpZVxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcnJlY3QtcHJvZHVpdC1ub20nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXNwbGF5XCIsIGRpc3BsYXkpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JyZWN0LXByb2R1aXQtaWQnKTtcblxuICAgICAgICBpZiAoZGlzcGxheSkgZGlzcGxheS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGlmIChpbnB1dCkgaW5wdXQudmFsdWUgPSBpZDtcblxuICAgICAgICAvLyAkKCcjbW9kYWwtdHJhbnNmZXJ0JykubW9kYWwoJ3Nob3cnKTtcblxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXRpYWxpemUiLCJjb25uZWN0IiwiZGlzY29ubmVjdCIsIm9wZW4iLCJldmVudCIsImlkIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJkaXNwbGF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlucHV0IiwidGV4dENvbnRlbnQiLCJvcGVubmluZyIsIl9kZWZpbmVQcm9wZXJ0eSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9