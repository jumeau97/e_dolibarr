"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_chapitre_controller_js"],{

/***/ "./assets/controllers/chapitre_controller.js":
/*!***************************************************!*\
  !*** ./assets/controllers/chapitre_controller.js ***!
  \***************************************************/
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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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
      var container = document.querySelector('#ressources-container');
      var addBtn = document.querySelector('.add-item');
      if (addBtn && container) {
        // console.log("nananana");
        addBtn.addEventListener('click', function () {
          var index = parseInt(container.dataset.index);
          var prototype = container.dataset.prototype;
          var newForm = prototype.replace(/__name__/g, index);
          var newItem = document.createElement('div');
          newItem.className = 'col-md-3 mb-4 collection-item';
          newItem.innerHTML = "\n                <div class=\"card h-100 border shadow-sm position-relative\">\n                    <button type=\"button\" class=\"btn btn-danger btn-xs position-absolute remove-item\"\n                            style=\"top: -10px; right: -10px; z-index: 10; border-radius: 50%;\">\n                        <i class=\"fas fa-times\"></i>\n                    </button>\n                    <div class=\"card-body p-2 text-center\">\n                        ".concat(newForm, "\n                    </div>\n                </div>\n            ");
          container.appendChild(newItem);
          container.dataset.index = index + 1;
        });
        container.addEventListener('click', function (e) {
          var deleteBtn = e.target.closest('.remove-item');
          if (deleteBtn) {
            deleteBtn.closest('.collection-item').remove();
          }
        });
      }
    }

    // show(event) {
    //     const file = event.currentTarget.files[0];
    //
    //     if (file && file.type.startsWith('image/')) {
    //         const reader = new FileReader();
    //
    //         reader.onload = (e) => {
    //             // Mise à jour de l'image
    //             this.outputTarget.src = e.target.result;
    //             this.outputTarget.style.display = 'block';
    //
    //             // Masquer l'icône placeholder si elle existe
    //             if (this.hasPlaceholderTarget) {
    //                 this.placeholderTarget.style.display = 'none';
    //             }
    //         };
    //
    //         reader.readAsDataURL(file);
    //     }
    // }
  }, {
    key: "show",
    value: function show(event) {
      var _this = this;
      // 'event.currentTarget' est l'input qui a déclenché l'upload
      var input = event.currentTarget;
      var file = input.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          // 'this.outputTarget' trouve l'image associée à CE contrôleur précis
          if (_this.hasOutputTarget) {
            _this.outputTarget.src = e.target.result;
            _this.outputTarget.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      } else {
        if (this.hasOutputTarget) {
          this.outputTarget.style.display = 'none';
        }
      }
    }
    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }
  }, {
    key: "add",
    value: function add(event) {
      var container = document.getElementById('ressources-container');
      var index = parseInt(container.dataset.index);
      var prototype = container.dataset.prototype;
      var newForm = prototype.replace(/__name__/g, index);
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newForm;
      var newElement = tempDiv.firstElementChild;
      container.appendChild(newElement);
      container.dataset.index = index + 1;
    }
  }, {
    key: "remove",
    value: function remove(event) {
      event.currentTarget.closest('.ressource-item').remove();
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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__.Controller);
_defineProperty(_default, "targets", ['output', 'placeholder']);


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX2NoYXBpdHJlX2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsU0FBQTtJQUFBRSxlQUFBLE9BQUFGLFFBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFFBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsUUFBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixRQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUdJLFNBQUFDLFVBQVVBLENBQUEsRUFBRztNQUNUOztNQUVBO01BQ0E7TUFDQTtJQUFBO0VBQ0g7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUUsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztNQUNqRSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztNQUVsRCxJQUFJQyxNQUFNLElBQUlILFNBQVMsRUFBRTtRQUNyQjtRQUNBRyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO1VBQ3pDLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDTixTQUFTLENBQUNPLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDO1VBQy9DLElBQU1HLFNBQVMsR0FBR1IsU0FBUyxDQUFDTyxPQUFPLENBQUNDLFNBQVM7VUFDN0MsSUFBTUMsT0FBTyxHQUFHRCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxXQUFXLEVBQUVMLEtBQUssQ0FBQztVQUVyRCxJQUFNTSxPQUFPLEdBQUdW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SyxDQUFDRyxhQUFhLENBQUNOLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUMzRDtFQUFDO0lBQUF6QixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBK0MsVUFBVUEsQ0FBQSxFQUFHO01BQ1Q7TUFDQTs7TUFFQTtNQUNBO0lBQUE7RUFDSDtBQUFBLEVBdEh3QnhELDJEQUFVO0FBQUF5RCxlQUFBLENBQUF4RCxRQUFBLGFBQ2xCLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7QUNUakM7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLDJGQUErQjs7QUFFdkQ7QUFDQTtBQUNBLElBQUksOENBQThDO0FBQ2xEO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jaGFwaXRyZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuKiBUaGUgZm9sbG93aW5nIGxpbmUgbWFrZXMgdGhpcyBjb250cm9sbGVyIFwibGF6eVwiOiBpdCB3b24ndCBiZSBkb3dubG9hZGVkIHVudGlsIG5lZWRlZFxuKiBTZWUgaHR0cHM6Ly9zeW1mb255LmNvbS9idW5kbGVzL1N0aW11bHVzQnVuZGxlL2N1cnJlbnQvaW5kZXguaHRtbCNsYXp5LXN0aW11bHVzLWNvbnRyb2xsZXJzXG4qL1xuXG4vKiBzdGltdWx1c0ZldGNoOiAnbGF6eScgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ291dHB1dCcsICdwbGFjZWhvbGRlciddXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8gQ2FsbGVkIG9uY2Ugd2hlbiB0aGUgY29udHJvbGxlciBpcyBmaXJzdCBpbnN0YW50aWF0ZWQgKHBlciBlbGVtZW50KVxuXG4gICAgICAgIC8vIEhlcmUgeW91IGNhbiBpbml0aWFsaXplIHZhcmlhYmxlcywgY3JlYXRlIHNjb3BlZCBjYWxsYWJsZXMgZm9yIGV2ZW50XG4gICAgICAgIC8vIGxpc3RlbmVycywgaW5zdGFudGlhdGUgZXh0ZXJuYWwgbGlicmFyaWVzLCBldGMuXG4gICAgICAgIC8vIHRoaXMuX2Zvb0JhciA9IHRoaXMuZm9vQmFyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzc291cmNlcy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XG5cbiAgICAgICAgaWYgKGFkZEJ0biAmJiBjb250YWluZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmFuYW5hbmFcIik7XG4gICAgICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjb250YWluZXIuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdG90eXBlID0gY29udGFpbmVyLmRhdGFzZXQucHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Zvcm0gPSBwcm90b3R5cGUucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NOYW1lID0gJ2NvbC1tZC0zIG1iLTQgY29sbGVjdGlvbi1pdGVtJztcbiAgICAgICAgICAgICAgICBuZXdJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMCBib3JkZXIgc2hhZG93LXNtIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzIHBvc2l0aW9uLWFic29sdXRlIHJlbW92ZS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInRvcDogLTEwcHg7IHJpZ2h0OiAtMTBweDsgei1pbmRleDogMTA7IGJvcmRlci1yYWRpdXM6IDUwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBwLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7bmV3Rm9ybX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1pdGVtJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUJ0bikge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdG4uY2xvc2VzdCgnLmNvbGxlY3Rpb24taXRlbScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2hvdyhldmVudCkge1xuICAgIC8vICAgICBjb25zdCBmaWxlID0gZXZlbnQuY3VycmVudFRhcmdldC5maWxlc1swXTtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIC8vIE1pc2Ugw6Agam91ciBkZSBsJ2ltYWdlXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMub3V0cHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAgLy8gTWFzcXVlciBsJ2ljw7RuZSBwbGFjZWhvbGRlciBzaSBlbGxlIGV4aXN0ZVxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmhhc1BsYWNlaG9sZGVyVGFyZ2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9O1xuICAgIC8vXG4gICAgLy8gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBzaG93KGV2ZW50KSB7XG4gICAgICAgIC8vICdldmVudC5jdXJyZW50VGFyZ2V0JyBlc3QgbCdpbnB1dCBxdWkgYSBkw6ljbGVuY2jDqSBsJ3VwbG9hZFxuICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcblxuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gJ3RoaXMub3V0cHV0VGFyZ2V0JyB0cm91dmUgbCdpbWFnZSBhc3NvY2nDqWUgw6AgQ0UgY29udHLDtGxldXIgcHLDqWNpc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc091dHB1dFRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dFRhcmdldC5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3V0cHV0VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgY3VzdG9tIGNvbnRyb2xsZXIgYWN0aW9ucyBoZXJlXG4gICAgLy8gZm9vQmFyKCkgeyB0aGlzLmZvb1RhcmdldC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuYmF6Q2xhc3MpIH1cblxuICAgIGFkZChldmVudCkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzc291cmNlcy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChjb250YWluZXIuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IGNvbnRhaW5lci5kYXRhc2V0LnByb3RvdHlwZTtcblxuICAgICAgICBjb25zdCBuZXdGb3JtID0gcHJvdG90eXBlLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcblxuICAgICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Rm9ybTtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHRlbXBEaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgICBjb250YWluZXIuZGF0YXNldC5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcucmVzc291cmNlLWl0ZW0nKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgLy8gQ2FsbGVkIGFueXRpbWUgaXRzIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGZyb20gdGhlIERPTVxuICAgICAgICAvLyAob24gcGFnZSBjaGFuZ2UsIHdoZW4gaXQncyByZW1vdmVkIGZyb20gb3IgbW92ZWQgaW4gdGhlIERPTSwgZXRjLilcblxuICAgICAgICAvLyBIZXJlIHlvdSBzaG91bGQgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYWRkZWQgaW4gXCJjb25uZWN0KClcIlxuICAgICAgICAvLyB0aGlzLmZvb1RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Zvb0JhcilcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT09ICRwYXJzZUludCB9LCB7XG4gIHBhcnNlSW50OiAkcGFyc2VJbnRcbn0pO1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5pdGlhbGl6ZSIsImNvbm5lY3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5kZXgiLCJwYXJzZUludCIsImRhdGFzZXQiLCJwcm90b3R5cGUiLCJuZXdGb3JtIiwicmVwbGFjZSIsIm5ld0l0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJlIiwiZGVsZXRlQnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsInJlbW92ZSIsInNob3ciLCJldmVudCIsIl90aGlzIiwiaW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImhhc091dHB1dFRhcmdldCIsIm91dHB1dFRhcmdldCIsInNyYyIsInJlc3VsdCIsInN0eWxlIiwiZGlzcGxheSIsInJlYWRBc0RhdGFVUkwiLCJhZGQiLCJnZXRFbGVtZW50QnlJZCIsInRlbXBEaXYiLCJuZXdFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkaXNjb25uZWN0IiwiX2RlZmluZVByb3BlcnR5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=