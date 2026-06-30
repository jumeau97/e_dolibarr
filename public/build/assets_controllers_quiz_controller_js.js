"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_quiz_controller_js"],{

/***/ "./assets/controllers/quiz_controller.js":
/*!***********************************************!*\
  !*** ./assets/controllers/quiz_controller.js ***!
  \***********************************************/
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


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
      this.updateStates();
    }
  }, {
    key: "validateForm",
    value: function validateForm(event) {
      var checkboxes = Array.from(this.element.querySelectorAll('input[type="checkbox"]'));
      var checkedCount = checkboxes.filter(function (c) {
        return c.checked;
      }).length;
      if (checkedCount < 1) {
        // Empêche l'envoi du formulaire au serveur
        event.preventDefault();

        // Notification utilisateur
        alert("Erreur : Vous devez cocher au moins une réponse comme étant correcte.");

        // Optionnel : ajouter un style visuel d'erreur
        this.element.querySelector('#reponses-wrapper').style.border = "1px solid red";
      }
    }

    // Add custom controller actions here
    // fooBar() { this.fooTarget.classList.toggle(this.bazClass) }
    // quiz-options_controller.js
  }, {
    key: "add",
    value: function add(e) {
      var container = document.getElementById('reponses-wrapper'); // l'ID de votre div
      var index = container.dataset.index;

      // Récupère le prototype
      var proto = container.dataset.prototype;

      // REMPLACEMENT CRUCIAL :
      // On remplace le placeholder du prototype par l'index actuel
      proto = proto.replace(/__reponse_name__/g, index);

      // Insertion dans le DOM
      container.insertAdjacentHTML('beforeend', proto);

      // Incrémentation de l'index pour le prochain clic
      container.dataset.index = parseInt(index) + 1;
    }
  }, {
    key: "remove",
    value: function remove(event) {
      // Supprime la ligne de réponse parente
      event.target.closest('.option-row').remove();
    }
  }, {
    key: "toggleCheck",
    value: function toggleCheck(event) {
      var checkboxes = this.element.querySelectorAll('input[type="checkbox"]');
      var totalOptions = checkboxes.length;
      var checkedCount = Array.from(checkboxes).filter(function (c) {
        return c.checked;
      }).length;
      if (totalOptions <= 1 && event.target.checked) {
        event.target.checked = false;
        alert("Vous devez avoir au minimum deux options.");
        return;
      }
      if (checkedCount >= totalOptions && event.target.checked) {
        event.target.checked = false; // On annule le cochage
        alert("Attention : au moins une des options doit être fausse.");
        return;
      }
      this.updateStates();
    }
  }, {
    key: "updateStates",
    value: function updateStates() {
      this.element.querySelectorAll('.option-row').forEach(function (row) {
        var checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
          row.classList.add('is-correct-row');
        } else {
          row.classList.remove('is-correct-row');
        }
      });

      // const rows = this.element.querySelectorAll('.option-row');
      // rows.forEach(row => {
      //     const checkbox = row.querySelector('input[type="checkbox"]');
      //     if (checkbox.checked) {
      //         row.classList.add('bg-light-success'); // Ajoute un fond vert clair
      //         row.style.border = "1px solid #28a745";
      //     } else {
      //         row.classList.remove('bg-light-success');
      //         row.style.border = "1px solid #ced4da";
      //     }
      // });
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
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_29__.Controller);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX3F1aXpfY29udHJvbGxlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUEsSUFBQUMsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQUUsZUFBQSxPQUFBRixRQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxRQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sUUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFHSSxTQUFBQyxVQUFVQSxDQUFBLEVBQUc7TUFDVDs7TUFFQTtNQUNBO01BQ0E7SUFBQTtFQUNIO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFFLE9BQU9BLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDdkI7RUFBQztJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSSxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7TUFDaEIsSUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztNQUN0RixJQUFNQyxZQUFZLEdBQUdMLFVBQVUsQ0FBQ00sTUFBTSxDQUFDLFVBQUFDLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNDLE9BQU87TUFBQSxFQUFDLENBQUNDLE1BQU07TUFFN0QsSUFBSUosWUFBWSxHQUFHLENBQUMsRUFBRTtRQUNsQjtRQUNBTixLQUFLLENBQUNXLGNBQWMsQ0FBQyxDQUFDOztRQUV0QjtRQUNBQyxL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TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNKO0VBQUM7SUFBQWxDLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUEwQyxVQUFVQSxDQUFBLEVBQUc7TUFDVDtNQUNBOztNQUVBO01BQ0E7SUFBQTtFQUNIO0FBQUEsRUE3R3dCbkQsMkRBQVU7Ozs7Ozs7Ozs7O0FDUjFCO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXZEO0FBQ0E7QUFDQSxJQUFJLDhDQUE4QztBQUNsRDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcXVpel9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiogVGhlIGZvbGxvd2luZyBsaW5lIG1ha2VzIHRoaXMgY29udHJvbGxlciBcImxhenlcIjogaXQgd29uJ3QgYmUgZG93bmxvYWRlZCB1bnRpbCBuZWVkZWRcbiogU2VlIGh0dHBzOi8vc3ltZm9ueS5jb20vYnVuZGxlcy9TdGltdWx1c0J1bmRsZS9jdXJyZW50L2luZGV4Lmh0bWwjbGF6eS1zdGltdWx1cy1jb250cm9sbGVyc1xuKi9cblxuLyogc3RpbXVsdXNGZXRjaDogJ2xhenknICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8gQ2FsbGVkIG9uY2Ugd2hlbiB0aGUgY29udHJvbGxlciBpcyBmaXJzdCBpbnN0YW50aWF0ZWQgKHBlciBlbGVtZW50KVxuXG4gICAgICAgIC8vIEhlcmUgeW91IGNhbiBpbml0aWFsaXplIHZhcmlhYmxlcywgY3JlYXRlIHNjb3BlZCBjYWxsYWJsZXMgZm9yIGV2ZW50XG4gICAgICAgIC8vIGxpc3RlbmVycywgaW5zdGFudGlhdGUgZXh0ZXJuYWwgbGlicmFyaWVzLCBldGMuXG4gICAgICAgIC8vIHRoaXMuX2Zvb0JhciA9IHRoaXMuZm9vQmFyLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlcygpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlRm9ybShldmVudCkge1xuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykpO1xuICAgICAgICBjb25zdCBjaGVja2VkQ291bnQgPSBjaGVja2JveGVzLmZpbHRlcihjID0+IGMuY2hlY2tlZCkubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjaGVja2VkQ291bnQgPCAxKSB7XG4gICAgICAgICAgICAvLyBFbXDDqmNoZSBsJ2Vudm9pIGR1IGZvcm11bGFpcmUgYXUgc2VydmV1clxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gTm90aWZpY2F0aW9uIHV0aWxpc2F0ZXVyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1ciA6IFZvdXMgZGV2ZXogY29jaGVyIGF1IG1vaW5zIHVuZSByw6lwb25zZSBjb21tZSDDqXRhbnQgY29ycmVjdGUuXCIpO1xuXG4gICAgICAgICAgICAvLyBPcHRpb25uZWwgOiBham91dGVyIHVuIHN0eWxlIHZpc3VlbCBkJ2VycmV1clxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXBvbnNlcy13cmFwcGVyJykuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tIGNvbnRyb2xsZXIgYWN0aW9ucyBoZXJlXG4gICAgLy8gZm9vQmFyKCkgeyB0aGlzLmZvb1RhcmdldC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuYmF6Q2xhc3MpIH1cbiAgICAvLyBxdWl6LW9wdGlvbnNfY29udHJvbGxlci5qc1xuICAgIGFkZChlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBvbnNlcy13cmFwcGVyJyk7IC8vIGwnSUQgZGUgdm90cmUgZGl2XG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29udGFpbmVyLmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgICAgLy8gUsOpY3Vww6hyZSBsZSBwcm90b3R5cGVcbiAgICAgICAgbGV0IHByb3RvID0gY29udGFpbmVyLmRhdGFzZXQucHJvdG90eXBlO1xuXG4gICAgICAgIC8vIFJFTVBMQUNFTUVOVCBDUlVDSUFMIDpcbiAgICAgICAgLy8gT24gcmVtcGxhY2UgbGUgcGxhY2Vob2xkZXIgZHUgcHJvdG90eXBlIHBhciBsJ2luZGV4IGFjdHVlbFxuICAgICAgICBwcm90byA9IHByb3RvLnJlcGxhY2UoL19fcmVwb25zZV9uYW1lX18vZywgaW5kZXgpO1xuXG4gICAgICAgIC8vIEluc2VydGlvbiBkYW5zIGxlIERPTVxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm90byk7XG5cbiAgICAgICAgLy8gSW5jcsOpbWVudGF0aW9uIGRlIGwnaW5kZXggcG91ciBsZSBwcm9jaGFpbiBjbGljXG4gICAgICAgIGNvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcGFyc2VJbnQoaW5kZXgpICsgMTtcbiAgICB9XG5cbiAgICByZW1vdmUoZXZlbnQpIHtcbiAgICAgICAgLy8gU3VwcHJpbWUgbGEgbGlnbmUgZGUgcsOpcG9uc2UgcGFyZW50ZVxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLm9wdGlvbi1yb3cnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVDaGVjayhldmVudCkge1xuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICBjb25zdCB0b3RhbE9wdGlvbnMgPSBjaGVja2JveGVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY2hlY2tlZENvdW50ID0gQXJyYXkuZnJvbShjaGVja2JveGVzKS5maWx0ZXIoYyA9PiBjLmNoZWNrZWQpLmxlbmd0aDtcblxuXG4gICAgICAgIGlmICh0b3RhbE9wdGlvbnMgPD0gMSAmJiBldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsZXJ0KFwiVm91cyBkZXZleiBhdm9pciBhdSBtaW5pbXVtIGRldXggb3B0aW9ucy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2tlZENvdW50ID49IHRvdGFsT3B0aW9ucyAmJiBldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNoZWNrZWQgPSBmYWxzZTsgLy8gT24gYW5udWxlIGxlIGNvY2hhZ2VcbiAgICAgICAgICAgIGFsZXJ0KFwiQXR0ZW50aW9uIDogYXUgbW9pbnMgdW5lIGRlcyBvcHRpb25zIGRvaXQgw6p0cmUgZmF1c3NlLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZXMoKSB7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24tcm93JykuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSByb3cucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdpcy1jb3JyZWN0LXJvdycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29ycmVjdC1yb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBjb25zdCByb3dzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb24tcm93Jyk7XG4gICAgICAgIC8vIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgY2hlY2tib3ggPSByb3cucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIC8vICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAvLyAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdiZy1saWdodC1zdWNjZXNzJyk7IC8vIEFqb3V0ZSB1biBmb25kIHZlcnQgY2xhaXJcbiAgICAgICAgLy8gICAgICAgICByb3cuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzI4YTc0NVwiO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQtc3VjY2VzcycpO1xuICAgICAgICAvLyAgICAgICAgIHJvdy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjY2VkNGRhXCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIC8vIENhbGxlZCBhbnl0aW1lIGl0cyBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCBmcm9tIHRoZSBET01cbiAgICAgICAgLy8gKG9uIHBhZ2UgY2hhbmdlLCB3aGVuIGl0J3MgcmVtb3ZlZCBmcm9tIG9yIG1vdmVkIGluIHRoZSBET00sIGV0Yy4pXG5cbiAgICAgICAgLy8gSGVyZSB5b3Ugc2hvdWxkIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIGluIFwiY29ubmVjdCgpXCJcbiAgICAgICAgLy8gdGhpcy5mb29UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9mb29CYXIpXG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9PSAkcGFyc2VJbnQgfSwge1xuICBwYXJzZUludDogJHBhcnNlSW50XG59KTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluaXRpYWxpemUiLCJjb25uZWN0IiwidXBkYXRlU3RhdGVzIiwidmFsaWRhdGVGb3JtIiwiZXZlbnQiLCJjaGVja2JveGVzIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2VkQ291bnQiLCJmaWx0ZXIiLCJjIiwiY2hlY2tlZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJib3JkZXIiLCJhZGQiLCJlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluZGV4IiwiZGF0YXNldCIsInByb3RvIiwicHJvdG90eXBlIiwicmVwbGFjZSIsImluc2VydEFkamFjZW50SFRNTCIsInBhcnNlSW50IiwicmVtb3ZlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRvZ2dsZUNoZWNrIiwidG90YWxPcHRpb25zIiwiZm9yRWFjaCIsInJvdyIsImNoZWNrYm94IiwiY2xhc3NMaXN0IiwiZGlzY29ubmVjdCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9