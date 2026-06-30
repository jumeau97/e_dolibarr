(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");

// const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
// require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

// $(document).ready(function() {
//     //Initialize Select2 Elements
//     $('.select2').select2()
//
//     //Initialize Select2 Elements
//     $('.select2bs4').select2({
//         theme: 'bootstrap4'
//     })
//
//     //Datemask dd/mm/yyyy
//     $('#datemask').inputmask('dd/mm/yyyy', {'placeholder': 'dd/mm/yyyy'})
//     //Datemask2 mm/dd/yyyy
//     $('#datemask2').inputmask('mm/dd/yyyy', {'placeholder': 'mm/dd/yyyy'})
//     //Money Euro
//     $('[data-mask]').inputmask()
//
//     //Date picker
//     $('#reservationdate').datetimepicker({
//         format: 'L'
//     });
//
//     //Date and time picker
//     $('#reservationdatetime').datetimepicker({icons: {time: 'far fa-clock'}});
//
//     //Date range picker
//     $('#reservation').daterangepicker()
//     //Date range picker with time picker
//     $('#reservationtime').daterangepicker({
//         timePicker: true,
//         timePickerIncrement: 30,
//         locale: {
//             format: 'MM/DD/YYYY hh:mm A'
//         }
//     })
//     //Date range as a button
//     $('#daterange-btn').daterangepicker(
//         {
//             ranges: {
//                 'Today': [moment(), moment()],
//                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//                 'This Month': [moment().startOf('month'), moment().endOf('month')],
//                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//             },
//             startDate: moment().subtract(29, 'days'),
//             endDate: moment()
//         },
//         function (start, end) {
//             $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
//         }
//     )
//
//     //Timepicker
//     $('#timepicker').datetimepicker({
//         format: 'LT'
//     })
//
//     //Bootstrap Duallistbox
//     $('.duallistbox').bootstrapDualListbox()
//
//     //Colorpicker
//     $('.my-colorpicker1').colorpicker()
//
//     $('.my-colorpicker2').on('colorpickerChange', function (event) {
//         $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
//     })
//
//     $("input[data-bootstrap-switch]").each(function () {
//         $(this).bootstrapSwitch('state', $(this).prop('checked'));
//     })
//
// })
// // BS-Stepper Init
// document.addEventListener('DOMContentLoaded', function () {
//     window.stepper = new Stepper(document.querySelector('.bs-stepper'))
// })
//
// // DropzoneJS Demo Code Start
// Dropzone.autoDiscover = false
//
// // Get the template HTML and remove it from the doumenthe template HTML and remove it from the doument
// var previewNode = document.querySelector("#template")
// previewNode.id = ""
// var previewTemplate = previewNode.parentNode.innerHTML
// previewNode.parentNode.removeChild(previewNode)
//
// var myDropzone = new Dropzone(document.body, { // Make the whole body a dropzone
//     url: "/target-url", // Set the url
//     thumbnailWidth: 80,
//     thumbnailHeight: 80,
//     parallelUploads: 20,
//     previewTemplate: previewTemplate,
//     autoQueue: false, // Make sure the files aren't queued until manually added
//     previewsContainer: "#previews", // Define the container to display the previews
//     clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
// })
//
// myDropzone.on("addedfile", function (file) {
//     // Hookup the start button
//     file.previewElement.querySelector(".start").onclick = function () {
//         myDropzone.enqueueFile(file)
//     }
// })
//
// // Update the total progress bar
// myDropzone.on("totaluploadprogress", function (progress) {
//     document.querySelector("#total-progress .progress-bar").style.width = progress + "%"
// })
//
// myDropzone.on("sending", function (file) {
//     // Show the total progress bar when upload starts
//     document.querySelector("#total-progress").style.opacity = "1"
//     // And disable the start button
//     file.previewElement.querySelector(".start").setAttribute("disabled", "disabled")
// })
//
// // Hide the total progress bar when nothing's uploading anymore
// myDropzone.on("queuecomplete", function (progress) {
//     document.querySelector("#total-progress").style.opacity = "0"
// })
//
// // Setup the buttons for all transfers
// // The "add files" button doesn't need to be setup because the config
// // `clickable` has already been specified.
// document.querySelector("#actions .start").onclick = function () {
//     myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED))
// }
// document.querySelector("#actions .cancel").onclick = function () {
//     myDropzone.removeAllFiles(true)
// }
// DropzoneJS Demo Code End

// const headerCart = document.getElementById('header-cart');
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     console.log("loren header", event.target);
//     // if (event.target === headerCart) {
//         headerCart.classList.remove('isVisible');
//     // }
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//     const promoCheckbox = document.getElementById('Product_isPromotion');
//     const promoPriceField = document.getElementById('Product_offPercent');
//
//
//     // Cible le parent du champ pour cacher tout le bloc du formulaire
//     const promoPriceFieldContainer = promoPriceField.closest('.promotion');
//
//     // Fonction de bascule
//     function togglePromoField() {
//         if (promoCheckbox.checked) {
//             promoPriceFieldContainer.style.display = 'block';
//         } else {
//             promoPriceFieldContainer.style.display = 'none';
//         }
//     }
//
//     // Appel initial au chargement de la page
//     togglePromoField();
//
//     // Écouteur d'événement sur le changement de la checkbox
//     promoCheckbox.addEventListener('change', togglePromoField);
// });

// import '/assets/js/shopus.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
// assets/bootstrap.js


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

/***/ }),

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./chapitre_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/chapitre_controller.js",
	"./csrf_protection_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js",
	"./details_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./modal_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js",
	"./modal_helper_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_helper_controller.js",
	"./module_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/module_controller.js",
	"./product_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js",
	"./quiz_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/quiz_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-chartjs/dist/controller.js */ "./vendor/symfony/ux-chartjs/assets/dist/controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live_controller.js */ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js");
/* harmony import */ var _symfony_ux_live_component_dist_live_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-live-component/dist/live.min.css */ "./vendor/symfony/ux-live-component/assets/dist/live.min.css");
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-chartjs--chart': _symfony_ux_chartjs_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'live': _symfony_ux_live_component_dist_live_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_3__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/chapitre_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/chapitre_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        __webpack_require__.e(/*! import() */ "assets_controllers_chapitre_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/chapitre_controller.js */ "./assets/controllers/chapitre_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/csrf_protection_controller.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_array-buffer_constructor_js-node_modules_core-js_modu-cebe39"), __webpack_require__.e("assets_controllers_csrf_protection_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/csrf_protection_controller.js */ "./assets/controllers/csrf_protection_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/details_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "next",
    value: function next(event) {
      console.log("lorem");
    }
  }, {
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello details';
      window.addEventListener('toggle:status', function (event) {
        console.log("ooohps");
      });
    }
  }, {
    key: "toggleState",
    value: function toggleState(event) {
      // console.log("changement d'etat");
      console.log(event);
      // const id = event.currentTarget.dataset.orderdetailId
      // const response = await fetch(`/admin/orderdetail/${id}/toggle-state`, { method: 'POST' })
      // if (response.ok) {
      //     location.reload()
      // }
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
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
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "component", null);
    _defineProperty(_this, "alertBox", null);
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "connect",
    value: function connect() {
      // window.addEventListener('modal:open', (event) => {
      //     // -----------------------
      //     if (window.innerWidth < 992) {
      //          this.alertBox = document.getElementById('mobile-cart-popup');
      //
      //         // On affiche le bandeau
      //         this.alertBox.classList.add('active');
      //         console.log("event", this.element);
      //         // On le cache automatiquement après 3 secondes
      //         setTimeout(() => {
      //             this.alertBox.classList.remove('active');
      //         }, 3000);
      //     }
      //     // ----------------
      //     this.component = document.getElementById('header-cart');
      //     this.component.addEventListener('click', this.openModal());
      //     // console.log("component",component);
      //     console.log("event", this.element);
      //     setTimeout(() => {
      //         this.component.classList.remove('isVisible');
      //     }, 5000);
      // });
    }
  }, {
    key: "openModal",
    value: function openModal() {
      // this.modal.style.display = "block";
      // window.alert("lorem ipsum")
      // console.log(this.component.style.visibility)
      // this.component.style.visibility = 'visible';
      // this.component.classList.add('isVisible');
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.hide();
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_20__.Controller);
_defineProperty(_default, "targets", ['modalElement']);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_helper_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/modal_helper_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        __webpack_require__.e(/*! import() */ "assets_controllers_modal_helper_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/modal_helper_controller.js */ "./assets/controllers/modal_helper_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/module_controller.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/module_controller.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        __webpack_require__.e(/*! import() */ "assets_controllers_module_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/module_controller.js */ "./assets/controllers/module_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/product_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        __webpack_require__.e(/*! import() */ "assets_controllers_product_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/product_controller.js */ "./assets/controllers/product_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/quiz_controller.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/quiz_controller.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(context) {
        super(context);
        this.__stimulusLazyController = true;
    }
    initialize() {
        if (this.application.controllers.find((controller) => {
            return controller.identifier === this.identifier && controller.__stimulusLazyController;
        })) {
            return;
        }
        __webpack_require__.e(/*! import() */ "assets_controllers_quiz_controller_js").then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/quiz_controller.js */ "./assets/controllers/quiz_controller.js")).then((controller) => {
            this.application.register(this.identifier, controller.default);
        });
    }
};


/***/ }),

/***/ "./vendor/symfony/ux-chartjs/assets/dist/controller.js":
/*!*************************************************************!*\
  !*** ./vendor/symfony/ux-chartjs/assets/dist/controller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _Class)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


if (chart_js__WEBPACK_IMPORTED_MODULE_30__.registerables) chart_js__WEBPACK_IMPORTED_MODULE_30__.Chart.register.apply(chart_js__WEBPACK_IMPORTED_MODULE_30__.Chart, _toConsumableArray(chart_js__WEBPACK_IMPORTED_MODULE_30__.registerables));
var isChartInitialized = false;
var _Class = /*#__PURE__*/function (_Controller) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _Class, [].concat(_args));
    _this.chart = null;
    return _this;
  }
  _inherits(_Class, _Controller);
  return _createClass(_Class, [{
    key: "connect",
    value: function connect() {
      if (!isChartInitialized) {
        isChartInitialized = true;
        this.dispatchEvent("init", {
          Chart: chart_js__WEBPACK_IMPORTED_MODULE_30__.Chart
        });
      }
      if (!(this.element instanceof HTMLCanvasElement)) throw new Error("Invalid element");
      var payload = this.viewValue;
      if (Array.isArray(payload.options) && 0 === payload.options.length) payload.options = {};
      this.dispatchEvent("pre-connect", {
        options: payload.options,
        config: payload
      });
      var canvasContext = this.element.getContext("2d");
      if (!canvasContext) throw new Error("Could not getContext() from Element");
      this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_30__.Chart(canvasContext, payload);
      this.dispatchEvent("connect", {
        chart: this.chart
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.dispatchEvent("disconnect", {
        chart: this.chart
      });
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
  }, {
    key: "viewValueChanged",
    value: function viewValueChanged() {
      if (this.chart) {
        var viewValue = {
          data: this.viewValue.data,
          options: this.viewValue.options
        };
        if (Array.isArray(viewValue.options) && 0 === viewValue.options.length) viewValue.options = {};
        this.dispatchEvent("view-value-change", viewValue);
        this.chart.data = viewValue.data;
        this.chart.options = viewValue.options;
        this.chart.update();
        var parentElement = this.element.parentElement;
        if (parentElement && this.chart.options.responsive) {
          var originalWidth = parentElement.style.width;
          parentElement.style.width = "".concat(parentElement.offsetWidth + 1, "px");
          setTimeout(function () {
            parentElement.style.width = originalWidth;
          }, 0);
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: "chartjs"
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_29__.Controller);
_Class.values = {
  view: Object
};


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live.min.css":
/*!*******************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/symfony/ux-live-component/assets/dist/live_controller.js":
/*!*************************************************************************!*\
  !*** ./vendor/symfony/ux-live-component/assets/dist/live_controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ LiveControllerDefault),
/* harmony export */   getComponent: () => (/* binding */ getComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_reduce_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/esnext.iterator.reduce.js */ "./node_modules/core-js/modules/esnext.iterator.reduce.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
















































































function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var BackendRequest_default = /*#__PURE__*/function () {
  function BackendRequest_default(promise, actions, updateModels) {
    var _this = this;
    _classCallCheck(this, BackendRequest_default);
    this.isResolved = false;
    this.promise = promise;
    this.promise.then(function (response) {
      _this.isResolved = true;
      return response;
    });
    this.actions = actions;
    this.updatedModels = updateModels;
  }
  return _createClass(BackendRequest_default, [{
    key: "containsOneOfActions",
    value: function containsOneOfActions(targetedActions) {
      return this.actions.filter(function (action) {
        return targetedActions.includes(action);
      }).length > 0;
    }
  }, {
    key: "areAnyModelsUpdated",
    value: function areAnyModelsUpdated(targetedModels) {
      return this.updatedModels.filter(function (model) {
        return targetedModels.includes(model);
      }).length > 0;
    }
  }]);
}();
var RequestBuilder_default = /*#__PURE__*/function () {
  function RequestBuilder_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    var credentials = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "same-origin";
    _classCallCheck(this, RequestBuilder_default);
    this.url = url;
    this.method = method;
    this.credentials = credentials;
  }
  return _createClass(RequestBuilder_default, [{
    key: "buildRequest",
    value: function buildRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var splitUrl = this.url.split("?");
      var _splitUrl = _slicedToArray(splitUrl, 1),
        url = _splitUrl[0];
      var _splitUrl2 = _slicedToArray(splitUrl, 2),
        queryString = _splitUrl2[1];
      var params = new URLSearchParams(queryString || "");
      var fetchOptions = {};
      fetchOptions.credentials = this.credentials;
      fetchOptions.headers = {
        Accept: "application/vnd.live-component+html",
        "X-Requested-With": "XMLHttpRequest",
        "X-Live-Url": window.location.pathname + window.location.search
      };
      var totalFiles = Object.entries(files).reduce(function (total, current) {
        return total + current.length;
      }, 0);
      var hasFingerprints = Object.keys(children).length > 0;
      if (actions.length === 0 && totalFiles === 0 && this.method === "get" && this.willDataFitInUrl(JSON.stringify(props), JSON.stringify(updated), params, JSON.stringify(children), JSON.stringify(updatedPropsFromParent))) {
        params.set("props", JSON.stringify(props));
        params.set("updated", JSON.stringify(updated));
        if (Object.keys(updatedPropsFromParent).length > 0) params.set("propsFromParent", JSON.stringify(updatedPropsFromParent));
        if (hasFingerprints) params.set("children", JSON.stringify(children));
        fetchOptions.method = "GET";
      } else {
        fetchOptions.method = "POST";
        var requestData = {
          props: props,
          updated: updated
        };
        if (Object.keys(updatedPropsFromParent).length > 0) requestData.propsFromParent = updatedPropsFromParent;
        if (hasFingerprints) requestData.children = children;
        if (actions.length > 0) if (actions.length === 1) {
          requestData.args = actions[0].args;
          url += "/".concat(encodeURIComponent(actions[0].name));
        } else {
          url += "/_batch";
          requestData.actions = actions;
        }
        var formData = new FormData();
        formData.append("data", JSON.stringify(requestData));
        for (var _i = 0, _Object$entries = Object.entries(files); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          var length = value.length;
          for (var i = 0; i < length; ++i) formData.append(key, value[i]);
        }
        fetchOptions.body = formData;
      }
      var paramsString = params.toString();
      return {
        url: "".concat(url).concat(paramsString.length > 0 ? "?".concat(paramsString) : ""),
        fetchOptions: fetchOptions
      };
    }
  }, {
    key: "willDataFitInUrl",
    value: function willDataFitInUrl(propsJson, updatedJson, params, childrenJson, propsFromParentJson) {
      return (new URLSearchParams(propsJson + updatedJson + childrenJson + propsFromParentJson).toString() + params.toString()).length < 1500;
    }
  }]);
}();
var Backend_default = /*#__PURE__*/function () {
  function Backend_default(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";
    var credentials = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "same-origin";
    _classCallCheck(this, Backend_default);
    this.requestBuilder = new RequestBuilder_default(url, method, credentials);
  }
  return _createClass(Backend_default, [{
    key: "makeRequest",
    value: function makeRequest(props, actions, updated, children, updatedPropsFromParent, files) {
      var _this$requestBuilder$ = this.requestBuilder.buildRequest(props, actions, updated, children, updatedPropsFromParent, files),
        url = _this$requestBuilder$.url,
        fetchOptions = _this$requestBuilder$.fetchOptions;
      return new BackendRequest_default(fetch(url, fetchOptions), actions.map(function (backendAction) {
        return backendAction.name;
      }), Object.keys(updated));
    }
  }]);
}();
var BackendResponse_default = /*#__PURE__*/function () {
  function BackendResponse_default(response) {
    _classCallCheck(this, BackendResponse_default);
    this.response = response;
  }
  return _createClass(BackendResponse_default, [{
    key: "getBody",
    value: function () {
      var _getBody = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (this.body) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return this.response.text();
            case 1:
              this.body = _context.v;
            case 2:
              return _context.a(2, this.body);
          }
        }, _callee, this);
      }));
      function getBody() {
        return _getBody.apply(this, arguments);
      }
      return getBody;
    }()
  }, {
    key: "getLiveUrl",
    value: function getLiveUrl() {
      if (void 0 === this.liveUrl) this.liveUrl = this.response.headers.get("X-Live-Url");
      return this.liveUrl;
    }
  }]);
}();
function getElementAsTagText(element) {
  return element.innerHTML ? element.outerHTML.slice(0, element.outerHTML.indexOf(element.innerHTML)) : element.outerHTML;
}
var componentMapByElement = /* @__PURE__ */new WeakMap();
var componentMapByComponent = /* @__PURE__ */new Map();
var registerComponent = function registerComponent(component) {
  componentMapByElement.set(component.element, component);
  componentMapByComponent.set(component, component.name);
};
var unregisterComponent = function unregisterComponent(component) {
  componentMapByElement["delete"](component.element);
  componentMapByComponent["delete"](component);
};
var getComponent = function getComponent(element) {
  return new Promise(function (resolve, reject) {
    var count = 0;
    var maxCount = 10;
    var interval = setInterval(function () {
      var component = componentMapByElement.get(element);
      if (component) {
        clearInterval(interval);
        resolve(component);
      }
      count++;
      if (count > maxCount) {
        clearInterval(interval);
        reject(/* @__PURE__ */new Error("Component not found for element ".concat(getElementAsTagText(element))));
      }
    }, 5);
  });
};
var findComponents = function findComponents(currentComponent, onlyParents, onlyMatchName) {
  var components = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (onlyParents && (currentComponent === component || !component.element.contains(currentComponent.element))) return;
    if (onlyMatchName && componentName !== onlyMatchName) return;
    components.push(component);
  });
  return components;
};
var findChildren = function findChildren(currentComponent) {
  var children = [];
  componentMapByComponent.forEach(function (componentName, component) {
    if (currentComponent === component) return;
    if (!currentComponent.element.contains(component.element)) return;
    var foundChildComponent = false;
    componentMapByComponent.forEach(function (childComponentName, childComponent) {
      if (foundChildComponent) return;
      if (childComponent === component) return;
      if (childComponent.element.contains(component.element)) foundChildComponent = true;
    });
    children.push(component);
  });
  return children;
};
var findParent = function findParent(currentComponent) {
  var parentElement = currentComponent.element.parentElement;
  while (parentElement) {
    var component = componentMapByElement.get(parentElement);
    if (component) return component;
    parentElement = parentElement.parentElement;
  }
  return null;
};
function parseDirectives(content) {
  var directives = [];
  if (!content) return directives;
  var currentActionName = "";
  var currentArgumentValue = "";
  var currentArguments = [];
  var currentModifiers = [];
  var state = "action";
  var getLastActionName = function getLastActionName() {
    if (currentActionName) return currentActionName;
    if (directives.length === 0) throw new Error("Could not find any directives");
    return directives[directives.length - 1].action;
  };
  var pushInstruction = function pushInstruction() {
    directives.push({
      action: currentActionName,
      args: currentArguments,
      modifiers: currentModifiers,
      getString: function getString() {
        return content;
      }
    });
    currentActionName = "";
    currentArgumentValue = "";
    currentArguments = [];
    currentModifiers = [];
    state = "action";
  };
  var pushArgument = function pushArgument() {
    currentArguments.push(currentArgumentValue.trim());
    currentArgumentValue = "";
  };
  var pushModifier = function pushModifier() {
    if (currentArguments.length > 1) throw new Error("The modifier \"".concat(currentActionName, "()\" does not support multiple arguments."));
    currentModifiers.push({
      name: currentActionName,
      value: currentArguments.length > 0 ? currentArguments[0] : null
    });
    currentActionName = "";
    currentArguments = [];
    state = "action";
  };
  for (var i = 0; i < content.length; i++) {
    var _char = content[i];
    switch (state) {
      case "action":
        if (_char === "(") {
          state = "arguments";
          break;
        }
        if (_char === " ") {
          if (currentActionName) pushInstruction();
          break;
        }
        if (_char === "|") {
          pushModifier();
          break;
        }
        currentActionName += _char;
        break;
      case "arguments":
        if (_char === ")") {
          pushArgument();
          state = "after_arguments";
          break;
        }
        if (_char === ",") {
          pushArgument();
          break;
        }
        currentArgumentValue += _char;
        break;
      case "after_arguments":
        if (_char === "|") {
          pushModifier();
          break;
        }
        if (_char !== " ") throw new Error("Missing space after ".concat(getLastActionName(), "()"));
        pushInstruction();
        break;
    }
  }
  switch (state) {
    case "action":
    case "after_arguments":
      if (currentActionName) pushInstruction();
      break;
    default:
      throw new Error("Did you forget to add a closing \")\" after \"".concat(currentActionName, "\"?"));
  }
  return directives;
}
function combineSpacedArray(parts) {
  var finalParts = [];
  parts.forEach(function (part) {
    finalParts.push.apply(finalParts, _toConsumableArray(trimAll(part).split(" ")));
  });
  return finalParts;
}
function trimAll(str) {
  return str.replace(/[\s]+/g, " ").trim();
}
function normalizeModelName(model) {
  return model.replace(/\[]$/, "").split("[").map(function (s) {
    return s.replace("]", "");
  }).join(".");
}
function getValueFromElement(element, valueStore) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") {
      var modelNameData = getModelDirectiveFromElement(element, false);
      if (modelNameData !== null) {
        var modelValue = valueStore.get(modelNameData.action);
        if (Array.isArray(modelValue)) return getMultipleCheckboxValue(element, modelValue);
        if (Object(modelValue) === modelValue) return getMultipleCheckboxValue(element, Object.values(modelValue));
      }
      if (element.hasAttribute("value")) return element.checked ? element.getAttribute("value") : null;
      return element.checked;
    }
    return inputValue(element);
  }
  if (element instanceof HTMLSelectElement) {
    if (element.multiple) return Array.from(element.selectedOptions).map(function (el) {
      return el.value;
    });
    return element.value;
  }
  if (element.hasAttribute("data-value")) return element.dataset.value;
  if ("value" in element) return element.value;
  if (element.hasAttribute("value")) return element.getAttribute("value");
  return null;
}
function setValueOnElement(element, value) {
  if (element instanceof HTMLInputElement) {
    if (element.type === "file") return;
    if (element.type === "radio") {
      element.checked = element.value == value;
      return;
    }
    if (element.type === "checkbox") {
      if (Array.isArray(value)) element.checked = value.some(function (val) {
        return val == element.value;
      });else if (element.hasAttribute("value")) element.checked = element.value == value;else element.checked = value;
      return;
    }
  }
  if (element instanceof HTMLSelectElement) {
    var arrayWrappedValue = [].concat(value).map(function (value) {
      return "".concat(value);
    });
    Array.from(element.options).forEach(function (option) {
      option.selected = arrayWrappedValue.includes(option.value);
    });
    return;
  }
  value = value === void 0 ? "" : value;
  element.value = value;
}
function getAllModelDirectiveFromElements(element) {
  if (!element.dataset.model) return [];
  var directives = parseDirectives(element.dataset.model);
  directives.forEach(function (directive) {
    if (directive.args.length > 0) throw new Error("The data-model=\"".concat(element.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
    directive.action = normalizeModelName(directive.action);
  });
  return directives;
}
function getModelDirectiveFromElement(element) {
  var throwOnMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dataModelDirectives = getAllModelDirectiveFromElements(element);
  if (dataModelDirectives.length > 0) return dataModelDirectives[0];
  if (element.getAttribute("name")) {
    var formElement = element.closest("form");
    if (formElement && "model" in formElement.dataset) {
      var directive = parseDirectives(formElement.dataset.model || "*")[0];
      if (directive.args.length > 0) throw new Error("The data-model=\"".concat(formElement.dataset.model, "\" format is invalid: it does not support passing arguments to the model."));
      directive.action = normalizeModelName(element.getAttribute("name"));
      return directive;
    }
  }
  if (!throwOnMissing) return null;
  throw new Error("Cannot determine the model name for \"".concat(getElementAsTagText(element), "\": the element must either have a \"data-model\" (or \"name\" attribute living inside a <form data-model=\"*\">)."));
}
function elementBelongsToThisComponent(element, component) {
  if (component.element === element) return true;
  if (!component.element.contains(element)) return false;
  return element.closest("[data-controller~=\"live\"]") === component.element;
}
function cloneHTMLElement(element) {
  var newElement = element.cloneNode(true);
  if (!(newElement instanceof HTMLElement)) throw new Error("Could not clone element");
  return newElement;
}
function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  if (template.content.childElementCount > 1) throw new Error("Component HTML contains ".concat(template.content.childElementCount, " elements, but only 1 root element is allowed."));
  var child = template.content.firstElementChild;
  if (!child) throw new Error("Child not found");
  if (!(child instanceof HTMLElement)) throw new Error("Created element is not an HTMLElement: ".concat(html.trim()));
  return child;
}
var getMultipleCheckboxValue = function getMultipleCheckboxValue(element, currentValues) {
  var finalValues = _toConsumableArray(currentValues);
  var value = inputValue(element);
  var index = currentValues.indexOf(value);
  if (element.checked) {
    if (index === -1) finalValues.push(value);
    return finalValues;
  }
  if (index > -1) finalValues.splice(index, 1);
  return finalValues;
};
var inputValue = function inputValue(element) {
  return element.dataset.value ? element.dataset.value : element.value;
};
function isTextualInputElement(el) {
  return el instanceof HTMLInputElement && ["text", "email", "password", "search", "tel", "url"].includes(el.type);
}
function isTextareaElement(el) {
  return el instanceof HTMLTextAreaElement;
}
function isNumericalInputElement(element) {
  return element instanceof HTMLInputElement && ["number", "range"].includes(element.type);
}
var HookManager_default = /*#__PURE__*/function () {
  function HookManager_default() {
    _classCallCheck(this, HookManager_default);
    this.hooks = /* @__PURE__ */new Map();
  }
  return _createClass(HookManager_default, [{
    key: "register",
    value: function register(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      hooks.push(callback);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "unregister",
    value: function unregister(hookName, callback) {
      var hooks = this.hooks.get(hookName) || [];
      var index = hooks.indexOf(callback);
      if (index === -1) return;
      hooks.splice(index, 1);
      this.hooks.set(hookName, hooks);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(hookName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (this.hooks.get(hookName) || []).forEach(function (callback) {
        callback.apply(void 0, args);
      });
    }
  }]);
}();
var Idiomorph = function () {
  "use strict";

  var EMPTY_SET = /* @__PURE__ */new Set();
  var defaults = {
    morphStyle: "outerHTML",
    callbacks: {
      beforeNodeAdded: noOp,
      afterNodeAdded: noOp,
      beforeNodeMorphed: noOp,
      afterNodeMorphed: noOp,
      beforeNodeRemoved: noOp,
      afterNodeRemoved: noOp,
      beforeAttributeUpdated: noOp
    },
    head: {
      style: "merge",
      shouldPreserve: function shouldPreserve(elt) {
        return elt.getAttribute("im-preserve") === "true";
      },
      shouldReAppend: function shouldReAppend(elt) {
        return elt.getAttribute("im-re-append") === "true";
      },
      shouldRemove: noOp,
      afterHeadMorphed: noOp
    }
  };
  function morph(oldNode, newContent) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (oldNode instanceof Document) oldNode = oldNode.documentElement;
    if (typeof newContent === "string") newContent = parseContent(newContent);
    var normalizedContent = normalizeContent(newContent);
    var ctx = createMorphContext(oldNode, normalizedContent, config);
    return morphNormalizedContent(oldNode, normalizedContent, ctx);
  }
  function morphNormalizedContent(oldNode, normalizedNewContent, ctx) {
    if (ctx.head.block) {
      var oldHead = oldNode.querySelector("head");
      var newHead = normalizedNewContent.querySelector("head");
      if (oldHead && newHead) {
        var promises = handleHeadElement(newHead, oldHead, ctx);
        Promise.all(promises).then(function () {
          morphNormalizedContent(oldNode, normalizedNewContent, Object.assign(ctx, {
            head: {
              block: false,
              ignore: true
            }
          }));
        });
        return;
      }
    }
    if (ctx.morphStyle === "innerHTML") {
      morphChildren(normalizedNewContent, oldNode, ctx);
      return oldNode.children;
    } else if (ctx.morphStyle === "outerHTML" || ctx.morphStyle == null) {
      var bestMatch = findBestNodeMatch(normalizedNewContent, oldNode, ctx);
      var previousSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.previousSibling;
      var nextSibling = bestMatch === null || bestMatch === void 0 ? void 0 : bestMatch.nextSibling;
      var morphedNode = morphOldNodeTo(oldNode, bestMatch, ctx);
      if (bestMatch) return insertSiblings(previousSibling, morphedNode, nextSibling);else return [];
    } else throw "Do not understand how to morph style " + ctx.morphStyle;
  }
  function ignoreValueOfActiveElement(possibleActiveElement, ctx) {
    return ctx.ignoreActiveValue && possibleActiveElement === document.activeElement;
  }
  function morphOldNodeTo(oldNode, newContent, ctx) {
    if (ctx.ignoreActive && oldNode === document.activeElement) {} else if (newContent == null) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      oldNode.remove();
      ctx.callbacks.afterNodeRemoved(oldNode);
      return null;
    } else if (!isSoftMatch(oldNode, newContent)) {
      if (ctx.callbacks.beforeNodeRemoved(oldNode) === false) return oldNode;
      if (ctx.callbacks.beforeNodeAdded(newContent) === false) return oldNode;
      oldNode.parentElement.replaceChild(newContent, oldNode);
      ctx.callbacks.afterNodeAdded(newContent);
      ctx.callbacks.afterNodeRemoved(oldNode);
      return newContent;
    } else {
      if (ctx.callbacks.beforeNodeMorphed(oldNode, newContent) === false) return oldNode;
      if (oldNode instanceof HTMLHeadElement && ctx.head.ignore) {} else if (oldNode instanceof HTMLHeadElement && ctx.head.style !== "morph") handleHeadElement(newContent, oldNode, ctx);else {
        syncNodeFrom(newContent, oldNode, ctx);
        if (!ignoreValueOfActiveElement(oldNode, ctx)) morphChildren(newContent, oldNode, ctx);
      }
      ctx.callbacks.afterNodeMorphed(oldNode, newContent);
      return oldNode;
    }
  }
  function morphChildren(newParent, oldParent, ctx) {
    var nextNewChild = newParent.firstChild;
    var insertionPoint = oldParent.firstChild;
    var newChild;
    while (nextNewChild) {
      newChild = nextNewChild;
      nextNewChild = newChild.nextSibling;
      if (insertionPoint == null) {
        if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
        oldParent.appendChild(newChild);
        ctx.callbacks.afterNodeAdded(newChild);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (isIdSetMatch(newChild, insertionPoint, ctx)) {
        morphOldNodeTo(insertionPoint, newChild, ctx);
        insertionPoint = insertionPoint.nextSibling;
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var idSetMatch = findIdSetMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (idSetMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, idSetMatch, ctx);
        morphOldNodeTo(idSetMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      var softMatch = findSoftMatch(newParent, oldParent, newChild, insertionPoint, ctx);
      if (softMatch) {
        insertionPoint = removeNodesBetween(insertionPoint, softMatch, ctx);
        morphOldNodeTo(softMatch, newChild, ctx);
        removeIdsFromConsideration(ctx, newChild);
        continue;
      }
      if (ctx.callbacks.beforeNodeAdded(newChild) === false) return;
      oldParent.insertBefore(newChild, insertionPoint);
      ctx.callbacks.afterNodeAdded(newChild);
      removeIdsFromConsideration(ctx, newChild);
    }
    while (insertionPoint !== null) {
      var tempNode = insertionPoint;
      insertionPoint = insertionPoint.nextSibling;
      removeNode(tempNode, ctx);
    }
  }
  function ignoreAttribute(attr, to, updateType, ctx) {
    if (attr === "value" && ctx.ignoreActiveValue && to === document.activeElement) return true;
    return ctx.callbacks.beforeAttributeUpdated(attr, to, updateType) === false;
  }
  function syncNodeFrom(from, to, ctx) {
    var type = from.nodeType;
    if (type === 1) {
      var fromAttributes = from.attributes;
      var toAttributes = to.attributes;
      var _iterator = _createForOfIteratorHelper(fromAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fromAttribute = _step.value;
          if (ignoreAttribute(fromAttribute.name, to, "update", ctx)) continue;
          if (to.getAttribute(fromAttribute.name) !== fromAttribute.value) to.setAttribute(fromAttribute.name, fromAttribute.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = toAttributes.length - 1; 0 <= i; i--) {
        var toAttribute = toAttributes[i];
        if (ignoreAttribute(toAttribute.name, to, "remove", ctx)) continue;
        if (!from.hasAttribute(toAttribute.name)) to.removeAttribute(toAttribute.name);
      }
    }
    if (type === 8 || type === 3) {
      if (to.nodeValue !== from.nodeValue) to.nodeValue = from.nodeValue;
    }
    if (!ignoreValueOfActiveElement(to, ctx)) syncInputValue(from, to, ctx);
  }
  function syncBooleanAttribute(from, to, attributeName, ctx) {
    if (from[attributeName] !== to[attributeName]) {
      var ignoreUpdate = ignoreAttribute(attributeName, to, "update", ctx);
      if (!ignoreUpdate) to[attributeName] = from[attributeName];
      if (from[attributeName]) {
        if (!ignoreUpdate) to.setAttribute(attributeName, from[attributeName]);
      } else if (!ignoreAttribute(attributeName, to, "remove", ctx)) to.removeAttribute(attributeName);
    }
  }
  function syncInputValue(from, to, ctx) {
    if (from instanceof HTMLInputElement && to instanceof HTMLInputElement && from.type !== "file") {
      var fromValue = from.value;
      var toValue = to.value;
      syncBooleanAttribute(from, to, "checked", ctx);
      syncBooleanAttribute(from, to, "disabled", ctx);
      if (!from.hasAttribute("value")) {
        if (!ignoreAttribute("value", to, "remove", ctx)) {
          to.value = "";
          to.removeAttribute("value");
        }
      } else if (fromValue !== toValue) {
        if (!ignoreAttribute("value", to, "update", ctx)) {
          to.setAttribute("value", fromValue);
          to.value = fromValue;
        }
      }
    } else if (from instanceof HTMLOptionElement) syncBooleanAttribute(from, to, "selected", ctx);else if (from instanceof HTMLTextAreaElement && to instanceof HTMLTextAreaElement) {
      var _fromValue = from.value;
      var _toValue = to.value;
      if (ignoreAttribute("value", to, "update", ctx)) return;
      if (_fromValue !== _toValue) to.value = _fromValue;
      if (to.firstChild && to.firstChild.nodeValue !== _fromValue) to.firstChild.nodeValue = _fromValue;
    }
  }
  function handleHeadElement(newHeadTag, currentHead, ctx) {
    var added = [];
    var removed = [];
    var preserved = [];
    var nodesToAppend = [];
    var headMergeStyle = ctx.head.style;
    var srcToNewHeadNodes = /* @__PURE__ */new Map();
    var _iterator2 = _createForOfIteratorHelper(newHeadTag.children),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var newHeadChild = _step2.value;
        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(currentHead.children),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentHeadElt = _step3.value;
        var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
        var isReAppended = ctx.head.shouldReAppend(currentHeadElt);
        var isPreserved = ctx.head.shouldPreserve(currentHeadElt);
        if (inNewContent || isPreserved) {
          if (isReAppended) removed.push(currentHeadElt);else {
            srcToNewHeadNodes["delete"](currentHeadElt.outerHTML);
            preserved.push(currentHeadElt);
          }
        } else if (headMergeStyle === "append") {
          if (isReAppended) {
            removed.push(currentHeadElt);
            nodesToAppend.push(currentHeadElt);
          }
        } else if (ctx.head.shouldRemove(currentHeadElt) !== false) removed.push(currentHeadElt);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    nodesToAppend.push.apply(nodesToAppend, _toConsumableArray(srcToNewHeadNodes.values()));
    log("to append: ", nodesToAppend);
    var promises = [];
    var _loop = function _loop() {
      var newNode = _nodesToAppend[_i2];
      log("adding: ", newNode);
      var newElt = document.createRange().createContextualFragment(newNode.outerHTML).firstChild;
      log(newElt);
      if (ctx.callbacks.beforeNodeAdded(newElt) !== false) {
        if (newElt.href || newElt.src) {
          var resolve = null;
          var promise = new Promise(function (_resolve) {
            resolve = _resolve;
          });
          newElt.addEventListener("load", function () {
            resolve();
          });
          promises.push(promise);
        }
        currentHead.appendChild(newElt);
        ctx.callbacks.afterNodeAdded(newElt);
        added.push(newElt);
      }
    };
    for (var _i2 = 0, _nodesToAppend = nodesToAppend; _i2 < _nodesToAppend.length; _i2++) {
      _loop();
    }
    for (var _i3 = 0, _removed = removed; _i3 < _removed.length; _i3++) {
      var removedElement = _removed[_i3];
      if (ctx.callbacks.beforeNodeRemoved(removedElement) !== false) {
        currentHead.removeChild(removedElement);
        ctx.callbacks.afterNodeRemoved(removedElement);
      }
    }
    ctx.head.afterHeadMorphed(currentHead, {
      added: added,
      kept: preserved,
      removed: removed
    });
    return promises;
  }
  function log() {}
  function noOp() {}
  function mergeDefaults(config) {
    var finalConfig = {};
    Object.assign(finalConfig, defaults);
    Object.assign(finalConfig, config);
    finalConfig.callbacks = {};
    Object.assign(finalConfig.callbacks, defaults.callbacks);
    Object.assign(finalConfig.callbacks, config.callbacks);
    finalConfig.head = {};
    Object.assign(finalConfig.head, defaults.head);
    Object.assign(finalConfig.head, config.head);
    return finalConfig;
  }
  function createMorphContext(oldNode, newContent, config) {
    config = mergeDefaults(config);
    return {
      target: oldNode,
      newContent: newContent,
      config: config,
      morphStyle: config.morphStyle,
      ignoreActive: config.ignoreActive,
      ignoreActiveValue: config.ignoreActiveValue,
      idMap: createIdMap(oldNode, newContent),
      deadIds: /* @__PURE__ */new Set(),
      callbacks: config.callbacks,
      head: config.head
    };
  }
  function isIdSetMatch(node1, node2, ctx) {
    if (node1 == null || node2 == null) return false;
    if (node1.nodeType === node2.nodeType && node1.tagName === node2.tagName) if (node1.id !== "" && node1.id === node2.id) return true;else return getIdIntersectionCount(ctx, node1, node2) > 0;
    return false;
  }
  function isSoftMatch(node1, node2) {
    if (node1 == null || node2 == null) return false;
    return node1.nodeType === node2.nodeType && node1.tagName === node2.tagName;
  }
  function removeNodesBetween(startInclusive, endExclusive, ctx) {
    while (startInclusive !== endExclusive) {
      var tempNode = startInclusive;
      startInclusive = startInclusive.nextSibling;
      removeNode(tempNode, ctx);
    }
    removeIdsFromConsideration(ctx, endExclusive);
    return endExclusive.nextSibling;
  }
  function findIdSetMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var newChildPotentialIdCount = getIdIntersectionCount(ctx, newChild, oldParent);
    var potentialMatch = null;
    if (newChildPotentialIdCount > 0) {
      var _potentialMatch = insertionPoint;
      var otherMatchCount = 0;
      while (_potentialMatch != null) {
        if (isIdSetMatch(newChild, _potentialMatch, ctx)) return _potentialMatch;
        otherMatchCount += getIdIntersectionCount(ctx, _potentialMatch, newContent);
        if (otherMatchCount > newChildPotentialIdCount) return null;
        _potentialMatch = _potentialMatch.nextSibling;
      }
    }
    return potentialMatch;
  }
  function findSoftMatch(newContent, oldParent, newChild, insertionPoint, ctx) {
    var potentialSoftMatch = insertionPoint;
    var nextSibling = newChild.nextSibling;
    var siblingSoftMatchCount = 0;
    while (potentialSoftMatch != null) {
      if (getIdIntersectionCount(ctx, potentialSoftMatch, newContent) > 0) return null;
      if (isSoftMatch(newChild, potentialSoftMatch)) return potentialSoftMatch;
      if (isSoftMatch(nextSibling, potentialSoftMatch)) {
        siblingSoftMatchCount++;
        nextSibling = nextSibling.nextSibling;
        if (siblingSoftMatchCount >= 2) return null;
      }
      potentialSoftMatch = potentialSoftMatch.nextSibling;
    }
    return potentialSoftMatch;
  }
  function parseContent(newContent) {
    var parser = new DOMParser();
    var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
    if (contentWithSvgsRemoved.match(/<\/html>/) || contentWithSvgsRemoved.match(/<\/head>/) || contentWithSvgsRemoved.match(/<\/body>/)) {
      var content = parser.parseFromString(newContent, "text/html");
      if (contentWithSvgsRemoved.match(/<\/html>/)) {
        content.generatedByIdiomorph = true;
        return content;
      } else {
        var htmlElement = content.firstChild;
        if (htmlElement) {
          htmlElement.generatedByIdiomorph = true;
          return htmlElement;
        } else return null;
      }
    } else {
      var _content = parser.parseFromString("<body><template>" + newContent + "</template></body>", "text/html").body.querySelector("template").content;
      _content.generatedByIdiomorph = true;
      return _content;
    }
  }
  function normalizeContent(newContent) {
    if (newContent == null) return document.createElement("div");else if (newContent.generatedByIdiomorph) return newContent;else if (newContent instanceof Node) {
      var dummyParent = document.createElement("div");
      dummyParent.append(newContent);
      return dummyParent;
    } else {
      var _dummyParent = document.createElement("div");
      for (var _i4 = 0, _arr = _toConsumableArray(newContent); _i4 < _arr.length; _i4++) {
        var elt = _arr[_i4];
        _dummyParent.append(elt);
      }
      return _dummyParent;
    }
  }
  function insertSiblings(previousSibling, morphedNode, nextSibling) {
    var stack = [];
    var added = [];
    while (previousSibling != null) {
      stack.push(previousSibling);
      previousSibling = previousSibling.previousSibling;
    }
    while (stack.length > 0) {
      var node = stack.pop();
      added.push(node);
      morphedNode.parentElement.insertBefore(node, morphedNode);
    }
    added.push(morphedNode);
    while (nextSibling != null) {
      stack.push(nextSibling);
      added.push(nextSibling);
      nextSibling = nextSibling.nextSibling;
    }
    while (stack.length > 0) morphedNode.parentElement.insertBefore(stack.pop(), morphedNode.nextSibling);
    return added;
  }
  function findBestNodeMatch(newContent, oldNode, ctx) {
    var currentElement;
    currentElement = newContent.firstChild;
    var bestElement = currentElement;
    var score = 0;
    while (currentElement) {
      var newScore = scoreElement(currentElement, oldNode, ctx);
      if (newScore > score) {
        bestElement = currentElement;
        score = newScore;
      }
      currentElement = currentElement.nextSibling;
    }
    return bestElement;
  }
  function scoreElement(node1, node2, ctx) {
    if (isSoftMatch(node1, node2)) return .5 + getIdIntersectionCount(ctx, node1, node2);
    return 0;
  }
  function removeNode(tempNode, ctx) {
    removeIdsFromConsideration(ctx, tempNode);
    if (ctx.callbacks.beforeNodeRemoved(tempNode) === false) return;
    tempNode.remove();
    ctx.callbacks.afterNodeRemoved(tempNode);
  }
  function isIdInConsideration(ctx, id) {
    return !ctx.deadIds.has(id);
  }
  function idIsWithinNode(ctx, id, targetNode) {
    return (ctx.idMap.get(targetNode) || EMPTY_SET).has(id);
  }
  function removeIdsFromConsideration(ctx, node) {
    var idSet = ctx.idMap.get(node) || EMPTY_SET;
    var _iterator4 = _createForOfIteratorHelper(idSet),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var id = _step4.value;
        ctx.deadIds.add(id);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  function getIdIntersectionCount(ctx, node1, node2) {
    var sourceSet = ctx.idMap.get(node1) || EMPTY_SET;
    var matchCount = 0;
    var _iterator5 = _createForOfIteratorHelper(sourceSet),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var id = _step5.value;
        if (isIdInConsideration(ctx, id) && idIsWithinNode(ctx, id, node2)) ++matchCount;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return matchCount;
  }
  function populateIdMapForNode(node, idMap) {
    var nodeParent = node.parentElement;
    var idElements = node.querySelectorAll("[id]");
    var _iterator6 = _createForOfIteratorHelper(idElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var elt = _step6.value;
        var current = elt;
        while (current !== nodeParent && current != null) {
          var idSet = idMap.get(current);
          if (idSet == null) {
            idSet = /* @__PURE__ */new Set();
            idMap.set(current, idSet);
          }
          idSet.add(elt.id);
          current = current.parentElement;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  function createIdMap(oldContent, newContent) {
    var idMap = /* @__PURE__ */new Map();
    populateIdMapForNode(oldContent, idMap);
    populateIdMapForNode(newContent, idMap);
    return idMap;
  }
  return {
    morph: morph,
    defaults: defaults
  };
}();
function normalizeAttributesForComparison(element) {
  if (!(element instanceof HTMLInputElement && element.type === "file")) {
    if ("value" in element) element.setAttribute("value", element.value);else if (element.hasAttribute("value")) element.setAttribute("value", "");
  }
  Array.from(element.children).forEach(function (child) {
    normalizeAttributesForComparison(child);
  });
}
var syncAttributes = function syncAttributes(fromEl, toEl) {
  for (var i = 0; i < fromEl.attributes.length; i++) {
    var attr = fromEl.attributes[i];
    toEl.setAttribute(attr.name, attr.value);
  }
};
function executeMorphdom(rootFromElement, rootToElement, modifiedFieldElements, getElementValue, externalMutationTracker) {
  var originalElementIdsToSwapAfter = [];
  var originalElementsToPreserve = /* @__PURE__ */new Map();
  var markElementAsNeedingPostMorphSwap = function markElementAsNeedingPostMorphSwap(id, replaceWithClone) {
    var oldElement = originalElementsToPreserve.get(id);
    if (!(oldElement instanceof HTMLElement)) throw new Error("Original element with id ".concat(id, " not found"));
    originalElementIdsToSwapAfter.push(id);
    if (!replaceWithClone) return null;
    var clonedOldElement = cloneHTMLElement(oldElement);
    oldElement.replaceWith(clonedOldElement);
    return clonedOldElement;
  };
  rootToElement.querySelectorAll("[data-live-preserve]").forEach(function (newElement) {
    var id = newElement.id;
    if (!id) throw new Error("The data-live-preserve attribute requires an id attribute to be set on the element");
    var oldElement = rootFromElement.querySelector("#".concat(id));
    if (!(oldElement instanceof HTMLElement)) throw new Error("The element with id \"".concat(id, "\" was not found in the original HTML"));
    newElement.removeAttribute("data-live-preserve");
    originalElementsToPreserve.set(id, oldElement);
    syncAttributes(newElement, oldElement);
  });
  Idiomorph.morph(rootFromElement, rootToElement, {
    callbacks: {
      beforeNodeMorphed: function beforeNodeMorphed(fromEl, toEl) {
        var _fromEl$parentElement;
        if (!(fromEl instanceof Element) || !(toEl instanceof Element)) return true;
        if (fromEl === rootFromElement) return true;
        if (fromEl.id && originalElementsToPreserve.has(fromEl.id)) {
          if (fromEl.id === toEl.id) return false;
          var clonedFromEl = markElementAsNeedingPostMorphSwap(fromEl.id, true);
          if (!clonedFromEl) throw new Error("missing clone");
          Idiomorph.morph(clonedFromEl, toEl);
          return false;
        }
        if (fromEl instanceof HTMLElement && toEl instanceof HTMLElement) {
          if (typeof fromEl.__x !== "undefined") {
            if (!window.Alpine) throw new Error("Unable to access Alpine.js though the global window.Alpine variable. Please make sure Alpine.js is loaded before Symfony UX LiveComponent.");
            if (typeof window.Alpine.morph !== "function") throw new Error("Unable to access Alpine.js morph function. Please make sure the Alpine.js Morph plugin is installed and loaded, see https://alpinejs.dev/plugins/morph for more information.");
            window.Alpine.morph(fromEl.__x, toEl);
          }
          if (externalMutationTracker.wasElementAdded(fromEl)) {
            fromEl.insertAdjacentElement("afterend", toEl);
            return false;
          }
          if (modifiedFieldElements.includes(fromEl)) setValueOnElement(toEl, getElementValue(fromEl));
          if (fromEl === document.activeElement && fromEl !== document.body && null !== getModelDirectiveFromElement(fromEl, false)) setValueOnElement(toEl, getElementValue(fromEl));
          var elementChanges = externalMutationTracker.getChangedElement(fromEl);
          if (elementChanges) elementChanges.applyToElement(toEl);
          if (fromEl.nodeName.toUpperCase() !== "OPTION" && fromEl.isEqualNode(toEl)) {
            var normalizedFromEl = cloneHTMLElement(fromEl);
            normalizeAttributesForComparison(normalizedFromEl);
            var normalizedToEl = cloneHTMLElement(toEl);
            normalizeAttributesForComparison(normalizedToEl);
            if (normalizedFromEl.isEqualNode(normalizedToEl)) return false;
          }
        }
        if (fromEl.hasAttribute("data-skip-morph") || fromEl.id && fromEl.id !== toEl.id) {
          fromEl.innerHTML = toEl.innerHTML;
          return true;
        }
        if ((_fromEl$parentElement = fromEl.parentElement) !== null && _fromEl$parentElement !== void 0 && _fromEl$parentElement.hasAttribute("data-skip-morph")) return false;
        return !fromEl.hasAttribute("data-live-ignore");
      },
      beforeNodeRemoved: function beforeNodeRemoved(node) {
        if (!(node instanceof HTMLElement)) return true;
        if (node.id && originalElementsToPreserve.has(node.id)) {
          markElementAsNeedingPostMorphSwap(node.id, false);
          return true;
        }
        if (externalMutationTracker.wasElementAdded(node)) return false;
        return !node.hasAttribute("data-live-ignore");
      }
    }
  });
  originalElementIdsToSwapAfter.forEach(function (id) {
    var newElement = rootFromElement.querySelector("#".concat(id));
    var originalElement = originalElementsToPreserve.get(id);
    if (!(newElement instanceof HTMLElement) || !(originalElement instanceof HTMLElement)) throw new Error("Missing elements.");
    newElement.replaceWith(originalElement);
  });
}
var ChangingItemsTracker_default = /*#__PURE__*/function () {
  function ChangingItemsTracker_default() {
    _classCallCheck(this, ChangingItemsTracker_default);
    this.changedItems = /* @__PURE__ */new Map();
    this.removedItems = /* @__PURE__ */new Map();
  }
  return _createClass(ChangingItemsTracker_default, [{
    key: "setItem",
    value: function setItem(itemName, newValue, previousValue) {
      if (this.removedItems.has(itemName)) {
        var removedRecord = this.removedItems.get(itemName);
        this.removedItems["delete"](itemName);
        if (removedRecord.original === newValue) return;
      }
      if (this.changedItems.has(itemName)) {
        var originalRecord = this.changedItems.get(itemName);
        if (originalRecord.original === newValue) {
          this.changedItems["delete"](itemName);
          return;
        }
        this.changedItems.set(itemName, {
          original: originalRecord.original,
          "new": newValue
        });
        return;
      }
      this.changedItems.set(itemName, {
        original: previousValue,
        "new": newValue
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(itemName, currentValue) {
      var trueOriginalValue = currentValue;
      if (this.changedItems.has(itemName)) {
        trueOriginalValue = this.changedItems.get(itemName).original;
        this.changedItems["delete"](itemName);
        if (trueOriginalValue === null) return;
      }
      if (!this.removedItems.has(itemName)) this.removedItems.set(itemName, {
        original: trueOriginalValue
      });
    }
  }, {
    key: "getChangedItems",
    value: function getChangedItems() {
      return Array.from(this.changedItems, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1]["new"];
        return {
          name: name,
          value: value
        };
      });
    }
  }, {
    key: "getRemovedItems",
    value: function getRemovedItems() {
      return Array.from(this.removedItems.keys());
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.changedItems.size === 0 && this.removedItems.size === 0;
    }
  }]);
}();
var ElementChanges = /*#__PURE__*/function () {
  function ElementChanges() {
    _classCallCheck(this, ElementChanges);
    this.addedClasses = /* @__PURE__ */new Set();
    this.removedClasses = /* @__PURE__ */new Set();
    this.styleChanges = new ChangingItemsTracker_default();
    this.attributeChanges = new ChangingItemsTracker_default();
  }
  return _createClass(ElementChanges, [{
    key: "addClass",
    value: function addClass(className) {
      if (!this.removedClasses["delete"](className)) this.addedClasses.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      if (!this.addedClasses["delete"](className)) this.removedClasses.add(className);
    }
  }, {
    key: "addStyle",
    value: function addStyle(styleName, newValue, originalValue) {
      this.styleChanges.setItem(styleName, newValue, originalValue);
    }
  }, {
    key: "removeStyle",
    value: function removeStyle(styleName, originalValue) {
      this.styleChanges.removeItem(styleName, originalValue);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(attributeName, newValue, originalValue) {
      this.attributeChanges.setItem(attributeName, newValue, originalValue);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attributeName, originalValue) {
      this.attributeChanges.removeItem(attributeName, originalValue);
    }
  }, {
    key: "getAddedClasses",
    value: function getAddedClasses() {
      return _toConsumableArray(this.addedClasses);
    }
  }, {
    key: "getRemovedClasses",
    value: function getRemovedClasses() {
      return _toConsumableArray(this.removedClasses);
    }
  }, {
    key: "getChangedStyles",
    value: function getChangedStyles() {
      return this.styleChanges.getChangedItems();
    }
  }, {
    key: "getRemovedStyles",
    value: function getRemovedStyles() {
      return this.styleChanges.getRemovedItems();
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return this.attributeChanges.getChangedItems();
    }
  }, {
    key: "getRemovedAttributes",
    value: function getRemovedAttributes() {
      return this.attributeChanges.getRemovedItems();
    }
  }, {
    key: "applyToElement",
    value: function applyToElement(element) {
      var _element$classList, _element$classList2;
      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(this.addedClasses));
      (_element$classList2 = element.classList).remove.apply(_element$classList2, _toConsumableArray(this.removedClasses));
      this.styleChanges.getChangedItems().forEach(function (change) {
        if (/!\s*important/i.test(change.value)) element.style.setProperty(change.name, change.value.replace(/!\s*important/i, "").trim(), "important");else element.style.setProperty(change.name, change.value);
      });
      this.styleChanges.getRemovedItems().forEach(function (styleName) {
        element.style.removeProperty(styleName);
      });
      this.attributeChanges.getChangedItems().forEach(function (change) {
        element.setAttribute(change.name, change.value);
      });
      this.attributeChanges.getRemovedItems().forEach(function (attributeName) {
        element.removeAttribute(attributeName);
      });
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.addedClasses.size === 0 && this.removedClasses.size === 0 && this.styleChanges.isEmpty() && this.attributeChanges.isEmpty();
    }
  }]);
}();
var ExternalMutationTracker_default = /*#__PURE__*/function () {
  function ExternalMutationTracker_default(element, shouldTrackChangeCallback) {
    _classCallCheck(this, ExternalMutationTracker_default);
    this.changedElements = /* @__PURE__ */new WeakMap();
    this.changedElementsCount = 0;
    this.addedElements = [];
    this.removedElements = [];
    this.isStarted = false;
    this.element = element;
    this.shouldTrackChangeCallback = shouldTrackChangeCallback;
    this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
  }
  return _createClass(ExternalMutationTracker_default, [{
    key: "start",
    value: function start() {
      if (this.isStarted) return;
      this.mutationObserver.observe(this.element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true
      });
      this.isStarted = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isStarted) {
        this.mutationObserver.disconnect();
        this.isStarted = false;
      }
    }
  }, {
    key: "getChangedElement",
    value: function getChangedElement(element) {
      return this.changedElements.has(element) ? this.changedElements.get(element) : null;
    }
  }, {
    key: "getAddedElements",
    value: function getAddedElements() {
      return this.addedElements;
    }
  }, {
    key: "wasElementAdded",
    value: function wasElementAdded(element) {
      return this.addedElements.includes(element);
    }
  }, {
    key: "handlePendingChanges",
    value: function handlePendingChanges() {
      this.onMutations(this.mutationObserver.takeRecords());
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var handledAttributeMutations = /* @__PURE__ */new WeakMap();
      var _iterator7 = _createForOfIteratorHelper(mutations),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var mutation = _step7.value;
          var element = mutation.target;
          if (!this.shouldTrackChangeCallback(element)) continue;
          if (this.isElementAddedByTranslation(element)) continue;
          var isChangeInAddedElement = false;
          var _iterator8 = _createForOfIteratorHelper(this.addedElements),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var addedElement = _step8.value;
              if (addedElement.contains(element)) {
                isChangeInAddedElement = true;
                break;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (isChangeInAddedElement) continue;
          switch (mutation.type) {
            case "childList":
              this.handleChildListMutation(mutation);
              break;
            case "attributes":
              if (!handledAttributeMutations.has(element)) handledAttributeMutations.set(element, []);
              if (!handledAttributeMutations.get(element).includes(mutation.attributeName)) {
                this.handleAttributeMutation(mutation);
                handledAttributeMutations.set(element, [].concat(_toConsumableArray(handledAttributeMutations.get(element)), [mutation.attributeName]));
              }
              break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "handleChildListMutation",
    value: function handleChildListMutation(mutation) {
      var _this2 = this;
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        if (_this2.removedElements.includes(node)) {
          _this2.removedElements.splice(_this2.removedElements.indexOf(node), 1);
          return;
        }
        if (_this2.isElementAddedByTranslation(node)) return;
        _this2.addedElements.push(node);
      });
      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        if (_this2.addedElements.includes(node)) {
          _this2.addedElements.splice(_this2.addedElements.indexOf(node), 1);
          return;
        }
        _this2.removedElements.push(node);
      });
    }
  }, {
    key: "handleAttributeMutation",
    value: function handleAttributeMutation(mutation) {
      var element = mutation.target;
      if (!this.changedElements.has(element)) {
        this.changedElements.set(element, new ElementChanges());
        this.changedElementsCount++;
      }
      var changedElement = this.changedElements.get(element);
      switch (mutation.attributeName) {
        case "class":
          this.handleClassAttributeMutation(mutation, changedElement);
          break;
        case "style":
          this.handleStyleAttributeMutation(mutation, changedElement);
          break;
        default:
          this.handleGenericAttributeMutation(mutation, changedElement);
      }
      if (changedElement.isEmpty()) {
        this.changedElements["delete"](element);
        this.changedElementsCount--;
      }
    }
  }, {
    key: "handleClassAttributeMutation",
    value: function handleClassAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValues = (mutation.oldValue || "").match(/((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)/g) || [];
      var newValues = [].slice.call(element.classList);
      var addedValues = newValues.filter(function (value) {
        return !previousValues.includes(value);
      });
      var removedValues = previousValues.filter(function (value) {
        return !newValues.includes(value);
      });
      addedValues.forEach(function (value) {
        elementChanges.addClass(value);
      });
      removedValues.forEach(function (value) {
        elementChanges.removeClass(value);
      });
    }
  }, {
    key: "handleStyleAttributeMutation",
    value: function handleStyleAttributeMutation(mutation, elementChanges) {
      var element = mutation.target;
      var previousValue = mutation.oldValue || "";
      var previousStyles = this.extractStyles(previousValue);
      var newValue = element.getAttribute("style") || "";
      var newStyles = this.extractStyles(newValue);
      var addedOrChangedStyles = Object.keys(newStyles).filter(function (key) {
        return previousStyles[key] === void 0 || previousStyles[key] !== newStyles[key];
      });
      var removedStyles = Object.keys(previousStyles).filter(function (key) {
        return !newStyles[key];
      });
      addedOrChangedStyles.forEach(function (style) {
        elementChanges.addStyle(style, newStyles[style], previousStyles[style] === void 0 ? null : previousStyles[style]);
      });
      removedStyles.forEach(function (style) {
        elementChanges.removeStyle(style, previousStyles[style]);
      });
    }
  }, {
    key: "handleGenericAttributeMutation",
    value: function handleGenericAttributeMutation(mutation, elementChanges) {
      var attributeName = mutation.attributeName;
      var element = mutation.target;
      var oldValue = mutation.oldValue;
      var newValue = element.getAttribute(attributeName);
      if (oldValue === attributeName) oldValue = "";
      if (newValue === attributeName) newValue = "";
      if (!element.hasAttribute(attributeName)) {
        if (oldValue === null) return;
        elementChanges.removeAttribute(attributeName, mutation.oldValue);
        return;
      }
      if (newValue === oldValue) return;
      elementChanges.addAttribute(attributeName, element.getAttribute(attributeName), mutation.oldValue);
    }
  }, {
    key: "extractStyles",
    value: function extractStyles(styles) {
      var styleObject = {};
      styles.split(";").forEach(function (style) {
        var parts = style.split(":");
        if (parts.length === 1) return;
        var property = parts[0].trim();
        styleObject[property] = parts.slice(1).join(":").trim();
      });
      return styleObject;
    }
  }, {
    key: "isElementAddedByTranslation",
    value: function isElementAddedByTranslation(element) {
      return element.tagName === "FONT" && element.getAttribute("style") === "vertical-align: inherit;";
    }
  }]);
}();
var UnsyncedInputsTracker_default = /*#__PURE__*/function () {
  function UnsyncedInputsTracker_default(component, modelElementResolver) {
    var _this3 = this;
    _classCallCheck(this, UnsyncedInputsTracker_default);
    this.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this3.handleInputEvent(event);
      }
    }];
    this.component = component;
    this.modelElementResolver = modelElementResolver;
    this.unsyncedInputs = new UnsyncedInputContainer();
  }
  return _createClass(UnsyncedInputsTracker_default, [{
    key: "activate",
    value: function activate() {
      var _this4 = this;
      this.elementEventListeners.forEach(function (_ref3) {
        var event = _ref3.event,
          callback = _ref3.callback;
        _this4.component.element.addEventListener(event, callback);
      });
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this5 = this;
      this.elementEventListeners.forEach(function (_ref4) {
        var event = _ref4.event,
          callback = _ref4.callback;
        _this5.component.element.removeEventListener(event, callback);
      });
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      this.unsyncedInputs.markModelAsSynced(modelName);
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElement(target);
    }
  }, {
    key: "updateModelFromElement",
    value: function updateModelFromElement(element) {
      if (!elementBelongsToThisComponent(element, this.component)) return;
      if (!(element instanceof HTMLElement)) throw new Error("Could not update model for non HTMLElement");
      var modelName = this.modelElementResolver.getModelName(element);
      this.unsyncedInputs.add(element, modelName);
    }
  }, {
    key: "getUnsyncedInputs",
    value: function getUnsyncedInputs() {
      return this.unsyncedInputs.allUnsyncedInputs();
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return Array.from(this.unsyncedInputs.getUnsyncedModelNames());
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      this.unsyncedInputs.resetUnsyncedFields();
    }
  }]);
}();
var UnsyncedInputContainer = /*#__PURE__*/function () {
  function UnsyncedInputContainer() {
    _classCallCheck(this, UnsyncedInputContainer);
    this.unsyncedNonModelFields = [];
    this.unsyncedModelNames = [];
    this.unsyncedModelFields = /* @__PURE__ */new Map();
  }
  return _createClass(UnsyncedInputContainer, [{
    key: "add",
    value: function add(element) {
      var modelName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (modelName) {
        this.unsyncedModelFields.set(modelName, element);
        if (!this.unsyncedModelNames.includes(modelName)) this.unsyncedModelNames.push(modelName);
        return;
      }
      this.unsyncedNonModelFields.push(element);
    }
  }, {
    key: "resetUnsyncedFields",
    value: function resetUnsyncedFields() {
      var _this6 = this;
      this.unsyncedModelFields.forEach(function (value, key) {
        if (!_this6.unsyncedModelNames.includes(key)) _this6.unsyncedModelFields["delete"](key);
      });
    }
  }, {
    key: "allUnsyncedInputs",
    value: function allUnsyncedInputs() {
      return [].concat(_toConsumableArray(this.unsyncedNonModelFields), _toConsumableArray(this.unsyncedModelFields.values()));
    }
  }, {
    key: "markModelAsSynced",
    value: function markModelAsSynced(modelName) {
      var index = this.unsyncedModelNames.indexOf(modelName);
      if (index !== -1) this.unsyncedModelNames.splice(index, 1);
    }
  }, {
    key: "getUnsyncedModelNames",
    value: function getUnsyncedModelNames() {
      return this.unsyncedModelNames;
    }
  }]);
}();
function getDeepData(data, propertyPath) {
  var _parseDeepData = parseDeepData(data, propertyPath),
    currentLevelData = _parseDeepData.currentLevelData,
    finalKey = _parseDeepData.finalKey;
  if (currentLevelData === void 0) return;
  return currentLevelData[finalKey];
}
var parseDeepData = function parseDeepData(data, propertyPath) {
  var finalData = JSON.parse(JSON.stringify(data));
  var currentLevelData = finalData;
  var parts = propertyPath.split(".");
  for (var i = 0; i < parts.length - 1; i++) currentLevelData = currentLevelData[parts[i]];
  var finalKey = parts[parts.length - 1];
  return {
    currentLevelData: currentLevelData,
    finalData: finalData,
    finalKey: finalKey,
    parts: parts
  };
};
var ValueStore_default = /*#__PURE__*/function () {
  function ValueStore_default(props) {
    _classCallCheck(this, ValueStore_default);
    this.props = {};
    this.dirtyProps = {};
    this.pendingProps = {};
    this.updatedPropsFromParent = {};
    this.props = props;
  }
  return _createClass(ValueStore_default, [{
    key: "get",
    value: function get(name) {
      var normalizedName = normalizeModelName(name);
      if (this.dirtyProps[normalizedName] !== void 0) return this.dirtyProps[normalizedName];
      if (this.pendingProps[normalizedName] !== void 0) return this.pendingProps[normalizedName];
      if (this.props[normalizedName] !== void 0) return this.props[normalizedName];
      return getDeepData(this.props, normalizedName);
    }
  }, {
    key: "has",
    value: function has(name) {
      return this.get(name) !== void 0;
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var normalizedName = normalizeModelName(name);
      if (this.get(normalizedName) === value) return false;
      this.dirtyProps[normalizedName] = value;
      return true;
    }
  }, {
    key: "getOriginalProps",
    value: function getOriginalProps() {
      return _objectSpread({}, this.props);
    }
  }, {
    key: "getDirtyProps",
    value: function getDirtyProps() {
      return _objectSpread({}, this.dirtyProps);
    }
  }, {
    key: "getUpdatedPropsFromParent",
    value: function getUpdatedPropsFromParent() {
      return _objectSpread({}, this.updatedPropsFromParent);
    }
  }, {
    key: "flushDirtyPropsToPending",
    value: function flushDirtyPropsToPending() {
      this.pendingProps = _objectSpread({}, this.dirtyProps);
      this.dirtyProps = {};
    }
  }, {
    key: "reinitializeAllProps",
    value: function reinitializeAllProps(props) {
      this.props = props;
      this.updatedPropsFromParent = {};
      this.pendingProps = {};
    }
  }, {
    key: "pushPendingPropsBackToDirty",
    value: function pushPendingPropsBackToDirty() {
      this.dirtyProps = _objectSpread(_objectSpread({}, this.pendingProps), this.dirtyProps);
      this.pendingProps = {};
    }
  }, {
    key: "storeNewPropsFromParent",
    value: function storeNewPropsFromParent(props) {
      var changed = false;
      for (var _i5 = 0, _Object$entries2 = Object.entries(props); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i5], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (this.get(key) !== value) changed = true;
      }
      if (changed) this.updatedPropsFromParent = props;
      return changed;
    }
  }]);
}();
var Component = /*#__PURE__*/function () {
  function Component(element, name, props, listeners, id, backend, elementDriver) {
    var _this7 = this;
    _classCallCheck(this, Component);
    this.fingerprint = "";
    this.defaultDebounce = 150;
    this.backendRequest = null;
    this.pendingActions = [];
    this.pendingFiles = {};
    this.isRequestPending = false;
    this.requestDebounceTimeout = null;
    this.element = element;
    this.name = name;
    this.backend = backend;
    this.elementDriver = elementDriver;
    this.id = id;
    this.listeners = /* @__PURE__ */new Map();
    listeners.forEach(function (listener) {
      var _this7$listeners$get;
      if (!_this7.listeners.has(listener.event)) _this7.listeners.set(listener.event, []);
      (_this7$listeners$get = _this7.listeners.get(listener.event)) === null || _this7$listeners$get === void 0 || _this7$listeners$get.push(listener.action);
    });
    this.valueStore = new ValueStore_default(props);
    this.unsyncedInputsTracker = new UnsyncedInputsTracker_default(this, elementDriver);
    this.hooks = new HookManager_default();
    this.resetPromise();
    this.externalMutationTracker = new ExternalMutationTracker_default(this.element, function (element) {
      return elementBelongsToThisComponent(element, _this7);
    });
    this.externalMutationTracker.start();
  }
  return _createClass(Component, [{
    key: "addPlugin",
    value: function addPlugin(plugin) {
      plugin.attachToComponent(this);
    }
  }, {
    key: "connect",
    value: function connect() {
      registerComponent(this);
      this.hooks.triggerHook("connect", this);
      this.unsyncedInputsTracker.activate();
      this.externalMutationTracker.start();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      unregisterComponent(this);
      this.hooks.triggerHook("disconnect", this);
      this.clearRequestDebounceTimeout();
      this.unsyncedInputsTracker.deactivate();
      this.externalMutationTracker.stop();
    }
  }, {
    key: "on",
    value: function on(hookName, callback) {
      this.hooks.register(hookName, callback);
    }
  }, {
    key: "off",
    value: function off(hookName, callback) {
      this.hooks.unregister(hookName, callback);
    }
  }, {
    key: "set",
    value: function set(model, value) {
      var reRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var promise = this.nextRequestPromise;
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) throw new Error("Invalid model name \"".concat(model, "\"."));
      var isChanged = this.valueStore.set(modelName, value);
      this.hooks.triggerHook("model:set", model, value, this);
      this.unsyncedInputsTracker.markModelAsSynced(modelName);
      if (reRender && isChanged) this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "getData",
    value: function getData(model) {
      var modelName = normalizeModelName(model);
      if (!this.valueStore.has(modelName)) throw new Error("Invalid model \"".concat(model, "\"."));
      return this.valueStore.get(modelName);
    }
  }, {
    key: "action",
    value: function action(name) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var debounce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var promise = this.nextRequestPromise;
      this.pendingActions.push({
        name: name,
        args: args
      });
      this.debouncedStartRequest(debounce);
      return promise;
    }
  }, {
    key: "files",
    value: function files(key, input) {
      this.pendingFiles[key] = input;
    }
  }, {
    key: "render",
    value: function render() {
      var promise = this.nextRequestPromise;
      this.tryStartingRequest();
      return promise;
    }
  }, {
    key: "getUnsyncedModels",
    value: function getUnsyncedModels() {
      return this.unsyncedInputsTracker.getUnsyncedModels();
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, false, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitUp",
    value: function emitUp(name, data) {
      var onlyMatchingComponentsNamed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.performEmit(name, data, true, onlyMatchingComponentsNamed);
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(name, data) {
      this.doEmit(name, data);
    }
  }, {
    key: "performEmit",
    value: function performEmit(name, data, emitUp, matchingName) {
      findComponents(this, emitUp, matchingName).forEach(function (component) {
        component.doEmit(name, data);
      });
    }
  }, {
    key: "doEmit",
    value: function doEmit(name, data) {
      var _this8 = this;
      if (!this.listeners.has(name)) return;
      (this.listeners.get(name) || []).forEach(function (action) {
        _this8.action(action, data, 1);
      });
    }
  }, {
    key: "isTurboEnabled",
    value: function isTurboEnabled() {
      return typeof Turbo !== "undefined" && !this.element.closest("[data-turbo=\"false\"]");
    }
  }, {
    key: "tryStartingRequest",
    value: function tryStartingRequest() {
      if (!this.backendRequest) {
        this.performRequest();
        return;
      }
      this.isRequestPending = true;
    }
  }, {
    key: "performRequest",
    value: function performRequest() {
      var _this9 = this;
      var thisPromiseResolve = this.nextRequestPromiseResolve;
      this.resetPromise();
      this.unsyncedInputsTracker.resetUnsyncedFields();
      var filesToSend = {};
      for (var _i6 = 0, _Object$entries3 = Object.entries(this.pendingFiles); _i6 < _Object$entries3.length; _i6++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i6], 2),
          key = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        if (value.files) filesToSend[key] = value.files;
      }
      var requestConfig = {
        props: this.valueStore.getOriginalProps(),
        actions: this.pendingActions,
        updated: this.valueStore.getDirtyProps(),
        children: {},
        updatedPropsFromParent: this.valueStore.getUpdatedPropsFromParent(),
        files: filesToSend
      };
      this.hooks.triggerHook("request:started", requestConfig);
      this.backendRequest = this.backend.makeRequest(requestConfig.props, requestConfig.actions, requestConfig.updated, requestConfig.children, requestConfig.updatedPropsFromParent, requestConfig.files);
      this.hooks.triggerHook("loading.state:started", this.element, this.backendRequest);
      this.pendingActions = [];
      this.valueStore.flushDirtyPropsToPending();
      this.isRequestPending = false;
      this.backendRequest.promise.then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(response) {
          var _headers$get;
          var backendResponse, html, _i7, _Object$values, input, headers, controls, liveUrl;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                backendResponse = new BackendResponse_default(response);
                _context2.n = 1;
                return backendResponse.getBody();
              case 1:
                html = _context2.v;
                for (_i7 = 0, _Object$values = Object.values(_this9.pendingFiles); _i7 < _Object$values.length; _i7++) {
                  input = _Object$values[_i7];
                  input.value = "";
                }
                headers = backendResponse.response.headers;
                if (!(!((_headers$get = headers.get("Content-Type")) !== null && _headers$get !== void 0 && _headers$get.includes("application/vnd.live-component+html")) && !headers.get("X-Live-Redirect"))) {
                  _context2.n = 2;
                  break;
                }
                controls = {
                  displayError: true
                };
                _this9.valueStore.pushPendingPropsBackToDirty();
                _this9.hooks.triggerHook("response:error", backendResponse, controls);
                if (controls.displayError) _this9.renderError(html);
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                return _context2.a(2, response);
              case 2:
                liveUrl = backendResponse.getLiveUrl();
                if (liveUrl) history.replaceState(history.state, "", new URL(liveUrl + window.location.hash, window.location.origin));
                _this9.processRerender(html, backendResponse);
                _this9.backendRequest = null;
                thisPromiseResolve(backendResponse);
                if (_this9.isRequestPending) {
                  _this9.isRequestPending = false;
                  _this9.performRequest();
                }
                return _context2.a(2, response);
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "processRerender",
    value: function processRerender(html, backendResponse) {
      var _this0 = this;
      var controls = {
        shouldRender: true
      };
      this.hooks.triggerHook("render:started", html, backendResponse, controls);
      if (!controls.shouldRender) return;
      if (backendResponse.response.headers.get("Location")) {
        if (this.isTurboEnabled()) Turbo.visit(backendResponse.response.headers.get("Location"));else window.location.href = backendResponse.response.headers.get("Location") || "";
        return;
      }
      this.hooks.triggerHook("loading.state:finished", this.element);
      var modifiedModelValues = {};
      Object.keys(this.valueStore.getDirtyProps()).forEach(function (modelName) {
        modifiedModelValues[modelName] = _this0.valueStore.get(modelName);
      });
      var newElement;
      try {
        newElement = htmlToElement(html);
        if (!newElement.matches("[data-controller~=live]")) throw new Error("A live component template must contain a single root controller element.");
      } catch (error) {
        console.error("There was a problem with the '".concat(this.name, "' component HTML returned:"), {
          id: this.id
        });
        throw error;
      }
      this.externalMutationTracker.handlePendingChanges();
      this.externalMutationTracker.stop();
      executeMorphdom(this.element, newElement, this.unsyncedInputsTracker.getUnsyncedInputs(), function (element) {
        return getValueFromElement(element, _this0.valueStore);
      }, this.externalMutationTracker);
      this.externalMutationTracker.start();
      var newProps = this.elementDriver.getComponentProps();
      this.valueStore.reinitializeAllProps(newProps);
      var eventsToEmit = this.elementDriver.getEventsToEmit();
      var browserEventsToDispatch = this.elementDriver.getBrowserEventsToDispatch();
      Object.keys(modifiedModelValues).forEach(function (modelName) {
        _this0.valueStore.set(modelName, modifiedModelValues[modelName]);
      });
      eventsToEmit.forEach(function (_ref6) {
        var event = _ref6.event,
          data = _ref6.data,
          target = _ref6.target,
          componentName = _ref6.componentName;
        if (target === "up") {
          _this0.emitUp(event, data, componentName);
          return;
        }
        if (target === "self") {
          _this0.emitSelf(event, data);
          return;
        }
        _this0.emit(event, data, componentName);
      });
      browserEventsToDispatch.forEach(function (_ref7) {
        var event = _ref7.event,
          payload = _ref7.payload;
        _this0.element.dispatchEvent(new CustomEvent(event, {
          detail: payload,
          bubbles: true
        }));
      });
      this.hooks.triggerHook("render:finished", this);
    }
  }, {
    key: "calculateDebounce",
    value: function calculateDebounce(debounce) {
      if (debounce === true) return this.defaultDebounce;
      if (debounce === false) return 0;
      return debounce;
    }
  }, {
    key: "clearRequestDebounceTimeout",
    value: function clearRequestDebounceTimeout() {
      if (this.requestDebounceTimeout) {
        clearTimeout(this.requestDebounceTimeout);
        this.requestDebounceTimeout = null;
      }
    }
  }, {
    key: "debouncedStartRequest",
    value: function debouncedStartRequest(debounce) {
      var _this1 = this;
      this.clearRequestDebounceTimeout();
      this.requestDebounceTimeout = window.setTimeout(function () {
        _this1.render();
      }, this.calculateDebounce(debounce));
    }
  }, {
    key: "renderError",
    value: function renderError(html) {
      var modal = document.getElementById("live-component-error");
      if (modal) modal.innerHTML = "";else {
        modal = document.createElement("div");
        modal.id = "live-component-error";
        modal.style.padding = "50px";
        modal.style.backgroundColor = "rgba(0, 0, 0, .5)";
        modal.style.zIndex = "100000";
        modal.style.position = "fixed";
        modal.style.top = "0px";
        modal.style.bottom = "0px";
        modal.style.left = "0px";
        modal.style.right = "0px";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
      }
      var iframe = document.createElement("iframe");
      iframe.style.borderRadius = "5px";
      iframe.style.flexGrow = "1";
      modal.appendChild(iframe);
      document.body.prepend(modal);
      document.body.style.overflow = "hidden";
      if (iframe.contentWindow) {
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
      }
      var closeModal = function closeModal(modal) {
        if (modal) modal.outerHTML = "";
        document.body.style.overflow = "visible";
      };
      modal.addEventListener("click", function () {
        return closeModal(modal);
      });
      modal.setAttribute("tabindex", "0");
      modal.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeModal(modal);
      });
      modal.focus();
    }
  }, {
    key: "resetPromise",
    value: function resetPromise() {
      var _this10 = this;
      this.nextRequestPromise = new Promise(function (resolve) {
        _this10.nextRequestPromiseResolve = resolve;
      });
    }
  }, {
    key: "_updateFromParentProps",
    value: function _updateFromParentProps(props) {
      if (this.valueStore.storeNewPropsFromParent(props)) this.render();
    }
  }]);
}();
function proxifyComponent(component) {
  return new Proxy(component, {
    get: function get(component, prop) {
      if (prop in component || typeof prop !== "string") {
        if (typeof component[prop] === "function") {
          var callable = component[prop];
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return callable.apply(component, args);
          };
        }
        return Reflect.get(component, prop);
      }
      if (component.valueStore.has(prop)) return component.getData(prop);
      return function (args) {
        return component.action.apply(component, [prop, args]);
      };
    },
    set: function set(target, property, value) {
      if (property in target) {
        target[property] = value;
        return true;
      }
      target.set(property, value);
      return true;
    }
  });
}
var StimulusElementDriver = /*#__PURE__*/function () {
  function StimulusElementDriver(controller) {
    _classCallCheck(this, StimulusElementDriver);
    this.controller = controller;
  }
  return _createClass(StimulusElementDriver, [{
    key: "getModelName",
    value: function getModelName(element) {
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) return null;
      return modelDirective.action;
    }
  }, {
    key: "getComponentProps",
    value: function getComponentProps() {
      return this.controller.propsValue;
    }
  }, {
    key: "getEventsToEmit",
    value: function getEventsToEmit() {
      return this.controller.eventsToEmitValue;
    }
  }, {
    key: "getBrowserEventsToDispatch",
    value: function getBrowserEventsToDispatch() {
      return this.controller.eventsToDispatchValue;
    }
  }]);
}();
function get_model_binding_default(modelDirective) {
  var shouldRender = true;
  var targetEventName = null;
  var debounce = false;
  var minLength = null;
  var maxLength = null;
  var minValue = null;
  var maxValue = null;
  modelDirective.modifiers.forEach(function (modifier) {
    switch (modifier.name) {
      case "on":
        if (!modifier.value) throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " requires a value - e.g. on(change)."));
        if (!["input", "change"].includes(modifier.value)) throw new Error("The \"on\" modifier in ".concat(modelDirective.getString(), " only accepts the arguments \"input\" or \"change\"."));
        targetEventName = modifier.value;
        break;
      case "norender":
        shouldRender = false;
        break;
      case "debounce":
        debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        break;
      case "min_length":
        minLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "max_length":
        maxLength = modifier.value ? Number.parseInt(modifier.value) : null;
        break;
      case "min_value":
        minValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      case "max_value":
        maxValue = modifier.value ? Number.parseFloat(modifier.value) : null;
        break;
      default:
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" in data-model=\"").concat(modelDirective.getString(), "\"."));
    }
  });
  var _modelDirective$actio = modelDirective.action.split(":"),
    _modelDirective$actio2 = _slicedToArray(_modelDirective$actio, 2),
    modelName = _modelDirective$actio2[0],
    innerModelName = _modelDirective$actio2[1];
  return {
    modelName: modelName,
    innerModelName: innerModelName || null,
    shouldRender: shouldRender,
    debounce: debounce,
    targetEventName: targetEventName,
    minLength: minLength,
    maxLength: maxLength,
    minValue: minValue,
    maxValue: maxValue
  };
}
var ChildComponentPlugin_default = /*#__PURE__*/function () {
  function ChildComponentPlugin_default(component) {
    _classCallCheck(this, ChildComponentPlugin_default);
    this.parentModelBindings = [];
    this.component = component;
    this.parentModelBindings = getAllModelDirectiveFromElements(this.component.element).map(get_model_binding_default);
  }
  return _createClass(ChildComponentPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this11 = this;
      component.on("request:started", function (requestData) {
        requestData.children = _this11.getChildrenFingerprints();
      });
      component.on("model:set", function (model, value) {
        _this11.notifyParentModelChange(model, value);
      });
    }
  }, {
    key: "getChildrenFingerprints",
    value: function getChildrenFingerprints() {
      var fingerprints = {};
      this.getChildren().forEach(function (child) {
        if (!child.id) throw new Error("missing id");
        fingerprints[child.id] = {
          fingerprint: child.fingerprint,
          tag: child.element.tagName.toLowerCase()
        };
      });
      return fingerprints;
    }
  }, {
    key: "notifyParentModelChange",
    value: function notifyParentModelChange(modelName, value) {
      var parentComponent = findParent(this.component);
      if (!parentComponent) return;
      this.parentModelBindings.forEach(function (modelBinding) {
        if ((modelBinding.innerModelName || "value") !== modelName) return;
        parentComponent.set(modelBinding.modelName, value, modelBinding.shouldRender, modelBinding.debounce);
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return findChildren(this.component);
    }
  }]);
}();
var LazyPlugin_default = /*#__PURE__*/function () {
  function LazyPlugin_default() {
    _classCallCheck(this, LazyPlugin_default);
    this.intersectionObserver = null;
  }
  return _createClass(LazyPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _component$element$at,
        _this12 = this;
      if ("lazy" !== ((_component$element$at = component.element.attributes.getNamedItem("loading")) === null || _component$element$at === void 0 ? void 0 : _component$element$at.value)) return;
      component.on("connect", function () {
        _this12.getObserver().observe(component.element);
      });
      component.on("disconnect", function () {
        var _this12$intersectionO;
        (_this12$intersectionO = _this12.intersectionObserver) === null || _this12$intersectionO === void 0 || _this12$intersectionO.unobserve(component.element);
      });
    }
  }, {
    key: "getObserver",
    value: function getObserver() {
      if (!this.intersectionObserver) this.intersectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new CustomEvent("live:appear"));
            observer.unobserve(entry.target);
          }
        });
      });
      return this.intersectionObserver;
    }
  }]);
}();
var LoadingPlugin_default = /*#__PURE__*/function () {
  function LoadingPlugin_default() {
    _classCallCheck(this, LoadingPlugin_default);
  }
  return _createClass(LoadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this13 = this;
      component.on("loading.state:started", function (element, request) {
        _this13.startLoading(component, element, request);
      });
      component.on("loading.state:finished", function (element) {
        _this13.finishLoading(component, element);
      });
      this.finishLoading(component, component.element);
    }
  }, {
    key: "startLoading",
    value: function startLoading(component, targetElement, backendRequest) {
      this.handleLoadingToggle(component, true, targetElement, backendRequest);
    }
  }, {
    key: "finishLoading",
    value: function finishLoading(component, targetElement) {
      this.handleLoadingToggle(component, false, targetElement, null);
    }
  }, {
    key: "handleLoadingToggle",
    value: function handleLoadingToggle(component, isLoading, targetElement, backendRequest) {
      var _this14 = this;
      if (isLoading) this.addAttributes(targetElement, ["busy"]);else this.removeAttributes(targetElement, ["busy"]);
      this.getLoadingDirectives(component, targetElement).forEach(function (_ref8) {
        var element = _ref8.element,
          directives = _ref8.directives;
        if (isLoading) _this14.addAttributes(element, ["data-live-is-loading"]);else _this14.removeAttributes(element, ["data-live-is-loading"]);
        directives.forEach(function (directive) {
          _this14.handleLoadingDirective(element, isLoading, directive, backendRequest);
        });
      });
    }
  }, {
    key: "handleLoadingDirective",
    value: function handleLoadingDirective(element, isLoading, directive, backendRequest) {
      var _this15 = this;
      var finalAction = parseLoadingAction(directive.action, isLoading);
      var targetedActions = [];
      var targetedModels = [];
      var delay = 0;
      var validModifiers = /* @__PURE__ */new Map();
      validModifiers.set("delay", function (modifier) {
        if (!isLoading) return;
        delay = modifier.value ? Number.parseInt(modifier.value) : 200;
      });
      validModifiers.set("action", function (modifier) {
        if (!modifier.value) throw new Error("The \"action\" in data-loading must have an action name - e.g. action(foo). It's missing for \"".concat(directive.getString(), "\""));
        targetedActions.push(modifier.value);
      });
      validModifiers.set("model", function (modifier) {
        if (!modifier.value) throw new Error("The \"model\" in data-loading must have an action name - e.g. model(foo). It's missing for \"".concat(directive.getString(), "\""));
        targetedModels.push(modifier.value);
      });
      directive.modifiers.forEach(function (modifier) {
        if (validModifiers.has(modifier.name)) {
          var _validModifiers$get;
          ((_validModifiers$get = validModifiers.get(modifier.name)) !== null && _validModifiers$get !== void 0 ? _validModifiers$get : function () {})(modifier);
          return;
        }
        throw new Error("Unknown modifier \"".concat(modifier.name, "\" used in data-loading=\"").concat(directive.getString(), "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
      });
      if (isLoading && targetedActions.length > 0 && backendRequest && !backendRequest.containsOneOfActions(targetedActions)) return;
      if (isLoading && targetedModels.length > 0 && backendRequest && !backendRequest.areAnyModelsUpdated(targetedModels)) return;
      var loadingDirective;
      switch (finalAction) {
        case "show":
          loadingDirective = function loadingDirective() {
            return _this15.showElement(element);
          };
          break;
        case "hide":
          loadingDirective = function loadingDirective() {
            return _this15.hideElement(element);
          };
          break;
        case "addClass":
          loadingDirective = function loadingDirective() {
            return _this15.addClass(element, directive.args);
          };
          break;
        case "removeClass":
          loadingDirective = function loadingDirective() {
            return _this15.removeClass(element, directive.args);
          };
          break;
        case "addAttribute":
          loadingDirective = function loadingDirective() {
            return _this15.addAttributes(element, directive.args);
          };
          break;
        case "removeAttribute":
          loadingDirective = function loadingDirective() {
            return _this15.removeAttributes(element, directive.args);
          };
          break;
        default:
          throw new Error("Unknown data-loading action \"".concat(finalAction, "\""));
      }
      if (delay) {
        window.setTimeout(function () {
          if (backendRequest && !backendRequest.isResolved) loadingDirective();
        }, delay);
        return;
      }
      loadingDirective();
    }
  }, {
    key: "getLoadingDirectives",
    value: function getLoadingDirectives(component, element) {
      var loadingDirectives = [];
      var matchingElements = Array.from(element.querySelectorAll("[data-loading]"));
      matchingElements = matchingElements.filter(function (elt) {
        return elementBelongsToThisComponent(elt, component);
      });
      if (element.hasAttribute("data-loading")) matchingElements = [element].concat(_toConsumableArray(matchingElements));
      matchingElements.forEach(function (element) {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) throw new Error("Invalid Element Type");
        var directives = parseDirectives(element.dataset.loading || "show");
        loadingDirectives.push({
          element: element,
          directives: directives
        });
      });
      return loadingDirectives;
    }
  }, {
    key: "showElement",
    value: function showElement(element) {
      element.style.display = "revert";
    }
  }, {
    key: "hideElement",
    value: function hideElement(element) {
      element.style.display = "none";
    }
  }, {
    key: "addClass",
    value: function addClass(element, classes) {
      var _element$classList3;
      (_element$classList3 = element.classList).add.apply(_element$classList3, _toConsumableArray(combineSpacedArray(classes)));
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, classes) {
      var _element$classList4;
      (_element$classList4 = element.classList).remove.apply(_element$classList4, _toConsumableArray(combineSpacedArray(classes)));
      if (element.classList.length === 0) element.removeAttribute("class");
    }
  }, {
    key: "addAttributes",
    value: function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute, "");
      });
    }
  }, {
    key: "removeAttributes",
    value: function removeAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    }
  }]);
}();
var parseLoadingAction = function parseLoadingAction(action, isLoading) {
  switch (action) {
    case "show":
      return isLoading ? "show" : "hide";
    case "hide":
      return isLoading ? "hide" : "show";
    case "addClass":
      return isLoading ? "addClass" : "removeClass";
    case "removeClass":
      return isLoading ? "removeClass" : "addClass";
    case "addAttribute":
      return isLoading ? "addAttribute" : "removeAttribute";
    case "removeAttribute":
      return isLoading ? "removeAttribute" : "addAttribute";
  }
  throw new Error("Unknown data-loading action \"".concat(action, "\""));
};
var PageUnloadingPlugin_default = /*#__PURE__*/function () {
  function PageUnloadingPlugin_default() {
    _classCallCheck(this, PageUnloadingPlugin_default);
    this.isConnected = false;
  }
  return _createClass(PageUnloadingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this16 = this;
      component.on("render:started", function (html, response, controls) {
        if (!_this16.isConnected) controls.shouldRender = false;
      });
      component.on("connect", function () {
        _this16.isConnected = true;
      });
      component.on("disconnect", function () {
        _this16.isConnected = false;
      });
    }
  }]);
}();
var PollingDirector_default = /*#__PURE__*/function () {
  function PollingDirector_default(component) {
    _classCallCheck(this, PollingDirector_default);
    this.isPollingActive = true;
    this.pollingIntervals = [];
    this.component = component;
  }
  return _createClass(PollingDirector_default, [{
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.polls.push({
        actionName: actionName,
        duration: duration
      });
      if (this.isPollingActive) this.initiatePoll(actionName, duration);
    }
  }, {
    key: "startAllPolling",
    value: function startAllPolling() {
      var _this17 = this;
      if (this.isPollingActive) return;
      this.isPollingActive = true;
      this.polls.forEach(function (_ref9) {
        var actionName = _ref9.actionName,
          duration = _ref9.duration;
        _this17.initiatePoll(actionName, duration);
      });
    }
  }, {
    key: "stopAllPolling",
    value: function stopAllPolling() {
      this.isPollingActive = false;
      this.pollingIntervals.forEach(function (interval) {
        clearInterval(interval);
      });
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.stopAllPolling();
      this.polls = [];
      this.startAllPolling();
    }
  }, {
    key: "initiatePoll",
    value: function initiatePoll(actionName, duration) {
      var _this18 = this;
      var callback;
      if (actionName === "$render") callback = function callback() {
        _this18.component.render();
      };else callback = function callback() {
        _this18.component.action(actionName, {}, 0);
      };
      var timer = window.setInterval(function () {
        callback();
      }, duration);
      this.pollingIntervals.push(timer);
    }
  }]);
}();
var PollingPlugin_default = /*#__PURE__*/function () {
  function PollingPlugin_default() {
    _classCallCheck(this, PollingPlugin_default);
  }
  return _createClass(PollingPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this19 = this;
      this.element = component.element;
      this.pollingDirector = new PollingDirector_default(component);
      this.initializePolling();
      component.on("connect", function () {
        _this19.pollingDirector.startAllPolling();
      });
      component.on("disconnect", function () {
        _this19.pollingDirector.stopAllPolling();
      });
      component.on("render:finished", function () {
        _this19.initializePolling();
      });
    }
  }, {
    key: "addPoll",
    value: function addPoll(actionName, duration) {
      this.pollingDirector.addPoll(actionName, duration);
    }
  }, {
    key: "clearPolling",
    value: function clearPolling() {
      this.pollingDirector.clearPolling();
    }
  }, {
    key: "initializePolling",
    value: function initializePolling() {
      var _this20 = this;
      this.clearPolling();
      if (this.element.dataset.poll === void 0) return;
      var rawPollConfig = this.element.dataset.poll;
      parseDirectives(rawPollConfig || "$render").forEach(function (directive) {
        var duration = 2e3;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "delay":
              if (modifier.value) duration = Number.parseInt(modifier.value);
              break;
            default:
              console.warn("Unknown modifier \"".concat(modifier.name, "\" in data-poll \"").concat(rawPollConfig, "\"."));
          }
        });
        _this20.addPoll(directive.action, duration);
      });
    }
  }]);
}();
var SetValueOntoModelFieldsPlugin_default = /*#__PURE__*/function () {
  function SetValueOntoModelFieldsPlugin_default() {
    _classCallCheck(this, SetValueOntoModelFieldsPlugin_default);
  }
  return _createClass(SetValueOntoModelFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this21 = this;
      this.synchronizeValueOfModelFields(component);
      component.on("render:finished", function () {
        _this21.synchronizeValueOfModelFields(component);
      });
    }
  }, {
    key: "synchronizeValueOfModelFields",
    value: function synchronizeValueOfModelFields(component) {
      component.element.querySelectorAll("[data-model]").forEach(function (element) {
        if (!(element instanceof HTMLElement)) throw new Error("Invalid element using data-model.");
        if (element instanceof HTMLFormElement) return;
        if (!elementBelongsToThisComponent(element, component)) return;
        var modelDirective = getModelDirectiveFromElement(element);
        if (!modelDirective) return;
        var modelName = modelDirective.action;
        if (component.getUnsyncedModels().includes(modelName)) return;
        if (component.valueStore.has(modelName)) setValueOnElement(element, component.valueStore.get(modelName));
        if (element instanceof HTMLSelectElement && !element.multiple) component.valueStore.set(modelName, getValueFromElement(element, component.valueStore));
      });
    }
  }]);
}();
var ValidatedFieldsPlugin_default = /*#__PURE__*/function () {
  function ValidatedFieldsPlugin_default() {
    _classCallCheck(this, ValidatedFieldsPlugin_default);
  }
  return _createClass(ValidatedFieldsPlugin_default, [{
    key: "attachToComponent",
    value: function attachToComponent(component) {
      var _this22 = this;
      component.on("model:set", function (modelName) {
        _this22.handleModelSet(modelName, component.valueStore);
      });
    }
  }, {
    key: "handleModelSet",
    value: function handleModelSet(modelName, valueStore) {
      if (valueStore.has("validatedFields")) {
        var validatedFields = _toConsumableArray(valueStore.get("validatedFields"));
        if (!validatedFields.includes(modelName)) validatedFields.push(modelName);
        valueStore.set("validatedFields", validatedFields);
      }
    }
  }]);
}();
var LiveControllerDefault = /*#__PURE__*/function (_Controller) {
  function LiveControllerDefault() {
    var _this23;
    _classCallCheck(this, LiveControllerDefault);
    for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _args[_key3] = arguments[_key3];
    }
    _this23 = _callSuper(this, LiveControllerDefault, [].concat(_args));
    _this23.pendingActionTriggerModelElement = null;
    _this23.elementEventListeners = [{
      event: "input",
      callback: function callback(event) {
        return _this23.handleInputEvent(event);
      }
    }, {
      event: "change",
      callback: function callback(event) {
        return _this23.handleChangeEvent(event);
      }
    }];
    _this23.pendingFiles = {};
    return _this23;
  }
  _inherits(LiveControllerDefault, _Controller);
  return _createClass(LiveControllerDefault, [{
    key: "initialize",
    value: function initialize() {
      this.mutationObserver = new MutationObserver(this.onMutations.bind(this));
      this.createComponent();
    }
  }, {
    key: "connect",
    value: function connect() {
      this.connectComponent();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.disconnectComponent();
      this.mutationObserver.disconnect();
    }
  }, {
    key: "update",
    value: function update(event) {
      if (event.type === "input" || event.type === "change") throw new Error("Since LiveComponents 2.3, you no longer need data-action=\"live#update\" on form elements. Found on element: ".concat(getElementAsTagText(event.currentTarget)));
      this.updateModelFromElementEvent(event.currentTarget, null);
    }
  }, {
    key: "action",
    value: function action(event) {
      var _this24 = this;
      var params = event.params;
      if (!params.action) throw new Error("No action name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-action-param\" attribute?"));
      var rawAction = params.action;
      var actionArgs = _objectSpread({}, params);
      delete actionArgs.action;
      var directives = parseDirectives(rawAction);
      var debounce = false;
      directives.forEach(function (directive) {
        var pendingFiles = {};
        var validModifiers = /* @__PURE__ */new Map();
        validModifiers.set("stop", function () {
          event.stopPropagation();
        });
        validModifiers.set("self", function () {
          if (event.target !== event.currentTarget) return;
        });
        validModifiers.set("debounce", function (modifier) {
          debounce = modifier.value ? Number.parseInt(modifier.value) : true;
        });
        validModifiers.set("files", function (modifier) {
          if (!modifier.value) pendingFiles = _this24.pendingFiles;else if (_this24.pendingFiles[modifier.value]) pendingFiles[modifier.value] = _this24.pendingFiles[modifier.value];
        });
        directive.modifiers.forEach(function (modifier) {
          if (validModifiers.has(modifier.name)) {
            var _validModifiers$get2;
            ((_validModifiers$get2 = validModifiers.get(modifier.name)) !== null && _validModifiers$get2 !== void 0 ? _validModifiers$get2 : function () {})(modifier);
            return;
          }
          console.warn("Unknown modifier ".concat(modifier.name, " in action \"").concat(rawAction, "\". Available modifiers are: ").concat(Array.from(validModifiers.keys()).join(", "), "."));
        });
        for (var _i8 = 0, _Object$entries4 = Object.entries(pendingFiles); _i8 < _Object$entries4.length; _i8++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i8], 2),
            key = _Object$entries4$_i[0],
            input = _Object$entries4$_i[1];
          if (input.files) _this24.component.files(key, input);
          delete _this24.pendingFiles[key];
        }
        _this24.component.action(directive.action, actionArgs, debounce);
        if (getModelDirectiveFromElement(event.currentTarget, false)) _this24.pendingActionTriggerModelElement = event.currentTarget;
      });
    }
  }, {
    key: "$render",
    value: function $render() {
      return this.component.render();
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var _this25 = this;
      this.getEmitDirectives(event).forEach(function (_ref0) {
        var name = _ref0.name,
          data = _ref0.data,
          nameMatch = _ref0.nameMatch;
        _this25.component.emit(name, data, nameMatch);
      });
    }
  }, {
    key: "emitUp",
    value: function emitUp(event) {
      var _this26 = this;
      this.getEmitDirectives(event).forEach(function (_ref1) {
        var name = _ref1.name,
          data = _ref1.data,
          nameMatch = _ref1.nameMatch;
        _this26.component.emitUp(name, data, nameMatch);
      });
    }
  }, {
    key: "emitSelf",
    value: function emitSelf(event) {
      var _this27 = this;
      this.getEmitDirectives(event).forEach(function (_ref10) {
        var name = _ref10.name,
          data = _ref10.data;
        _this27.component.emitSelf(name, data);
      });
    }
  }, {
    key: "$updateModel",
    value: function $updateModel(model, value) {
      var shouldRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var debounce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.component.set(model, value, shouldRender, debounce);
    }
  }, {
    key: "propsUpdatedFromParentValueChanged",
    value: function propsUpdatedFromParentValueChanged() {
      this.component._updateFromParentProps(this.propsUpdatedFromParentValue);
    }
  }, {
    key: "fingerprintValueChanged",
    value: function fingerprintValueChanged() {
      this.component.fingerprint = this.fingerprintValue;
    }
  }, {
    key: "getEmitDirectives",
    value: function getEmitDirectives(event) {
      var params = event.params;
      if (!params.event) throw new Error("No event name provided on element: ".concat(getElementAsTagText(event.currentTarget), ". Did you forget to add the \"data-live-event-param\" attribute?"));
      var eventInfo = params.event;
      var eventArgs = _objectSpread({}, params);
      delete eventArgs.event;
      var directives = parseDirectives(eventInfo);
      var emits = [];
      directives.forEach(function (directive) {
        var nameMatch = null;
        directive.modifiers.forEach(function (modifier) {
          switch (modifier.name) {
            case "name":
              nameMatch = modifier.value;
              break;
            default:
              throw new Error("Unknown modifier ".concat(modifier.name, " in event \"").concat(eventInfo, "\"."));
          }
        });
        emits.push({
          name: directive.action,
          data: eventArgs,
          nameMatch: nameMatch
        });
      });
      return emits;
    }
  }, {
    key: "createComponent",
    value: function createComponent() {
      var _this28 = this;
      var id = this.element.id || null;
      this.component = new Component(this.element, this.nameValue, this.propsValue, this.listenersValue, id, LiveControllerDefault.backendFactory(this), new StimulusElementDriver(this));
      this.proxiedComponent = proxifyComponent(this.component);
      Object.defineProperty(this.element, "__component", {
        value: this.proxiedComponent,
        writable: true
      });
      if (this.hasDebounceValue) this.component.defaultDebounce = this.debounceValue;
      [new LoadingPlugin_default(), new LazyPlugin_default(), new ValidatedFieldsPlugin_default(), new PageUnloadingPlugin_default(), new PollingPlugin_default(), new SetValueOntoModelFieldsPlugin_default(), new ChildComponentPlugin_default(this.component)].forEach(function (plugin) {
        _this28.component.addPlugin(plugin);
      });
    }
  }, {
    key: "connectComponent",
    value: function connectComponent() {
      var _this29 = this;
      this.component.connect();
      this.mutationObserver.observe(this.element, {
        attributes: true
      });
      this.elementEventListeners.forEach(function (_ref11) {
        var event = _ref11.event,
          callback = _ref11.callback;
        _this29.component.element.addEventListener(event, callback);
      });
      this.dispatchEvent("connect");
    }
  }, {
    key: "disconnectComponent",
    value: function disconnectComponent() {
      var _this30 = this;
      this.component.disconnect();
      this.elementEventListeners.forEach(function (_ref12) {
        var event = _ref12.event,
          callback = _ref12.callback;
        _this30.component.element.removeEventListener(event, callback);
      });
      this.dispatchEvent("disconnect");
    }
  }, {
    key: "handleInputEvent",
    value: function handleInputEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElementEvent(target, "input");
    }
  }, {
    key: "handleChangeEvent",
    value: function handleChangeEvent(event) {
      var target = event.target;
      if (!target) return;
      this.updateModelFromElementEvent(target, "change");
    }
  }, {
    key: "updateModelFromElementEvent",
    value: function updateModelFromElementEvent(element, eventName) {
      if (!elementBelongsToThisComponent(element, this.component)) return;
      if (!(element instanceof HTMLElement)) throw new Error("Could not update model for non HTMLElement");
      if (element instanceof HTMLInputElement && element.type === "file") {
        var _element$files;
        var key = element.name;
        if ((_element$files = element.files) !== null && _element$files !== void 0 && _element$files.length) this.pendingFiles[key] = element;else if (this.pendingFiles[key]) delete this.pendingFiles[key];
      }
      var modelDirective = getModelDirectiveFromElement(element, false);
      if (!modelDirective) return;
      var modelBinding = get_model_binding_default(modelDirective);
      if (!modelBinding.targetEventName) modelBinding.targetEventName = "input";
      if (this.pendingActionTriggerModelElement === element) modelBinding.shouldRender = false;
      if (eventName === "change" && modelBinding.targetEventName === "input") modelBinding.targetEventName = "change";
      if (eventName && modelBinding.targetEventName !== eventName) return;
      if (false === modelBinding.debounce) if (modelBinding.targetEventName === "input") modelBinding.debounce = true;else modelBinding.debounce = 0;
      var finalValue = getValueFromElement(element, this.component.valueStore);
      var finalValueIsEmpty = finalValue === "" || finalValue === null || finalValue === void 0;
      if (isTextualInputElement(element) || isTextareaElement(element)) {
        if (!finalValueIsEmpty && modelBinding.minLength !== null && typeof finalValue === "string" && finalValue.length < modelBinding.minLength) return;
        if (!finalValueIsEmpty && modelBinding.maxLength !== null && typeof finalValue === "string" && finalValue.length > modelBinding.maxLength) return;
      }
      if (isNumericalInputElement(element)) {
        if (!finalValueIsEmpty) {
          var numericValue = Number(finalValue);
          if (modelBinding.minValue !== null && numericValue < modelBinding.minValue) return;
          if (modelBinding.maxValue !== null && numericValue > modelBinding.maxValue) return;
        }
      }
      this.component.set(modelBinding.modelName, finalValue, modelBinding.shouldRender, modelBinding.debounce);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      detail.controller = this;
      detail.component = this.proxiedComponent;
      this.dispatch(name, {
        detail: detail,
        prefix: "live",
        cancelable: cancelable,
        bubbles: canBubble
      });
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this31 = this;
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes" && mutation.attributeName === "id" && _this31.element.id !== _this31.component.id) {
          _this31.disconnectComponent();
          _this31.createComponent();
          _this31.connectComponent();
        }
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_80__.Controller);
LiveControllerDefault.values = {
  name: String,
  url: String,
  props: {
    type: Object,
    "default": {}
  },
  propsUpdatedFromParent: {
    type: Object,
    "default": {}
  },
  listeners: {
    type: Array,
    "default": []
  },
  eventsToEmit: {
    type: Array,
    "default": []
  },
  eventsToDispatch: {
    type: Array,
    "default": []
  },
  debounce: {
    type: Number,
    "default": 150
  },
  fingerprint: {
    type: String,
    "default": ""
  },
  requestMethod: {
    type: String,
    "default": "post"
  },
  fetchCredentials: {
    type: String,
    "default": "same-origin"
  }
};
LiveControllerDefault.backendFactory = function (controller) {
  return new Backend_default(controller.urlValue, controller.requestMethodValue, controller.fetchCredentialsValue);
};


/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller_default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller_default = /*#__PURE__*/function (_Controller) {
  function turbo_controller_default() {
    _classCallCheck(this, turbo_controller_default);
    return _callSuper(this, turbo_controller_default, arguments);
  }
  _inherits(turbo_controller_default, _Controller);
  return _createClass(turbo_controller_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-3dc843"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LDBCQUFBcjlCLFdBQUE7RUFBQSxTQUFBcTlCLHlCQUFBO0lBQUFwOUIsZUFBQSxPQUFBbzlCLHdCQUFBO0lBQUEsT0FBQW45QixVQUFBLE9BQUFtOUIsd0JBQUEsRUFBQWw5QixTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBaTlCLHdCQUFBLEVBQUFyOUIsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQWc5Qix3QkFBQTtBQUFBLEVBQWlCdjlCLDJEQUFVLENBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2NoYXBpdHJlX2NvbnRyb2xsZXIuanM/MWU0ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanM/NWIwMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZGV0YWlsc19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tb2RhbF9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tb2RhbF9oZWxwZXJfY29udHJvbGxlci5qcz9mMTk3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tb2R1bGVfY29udHJvbGxlci5qcz9lMWFlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9wcm9kdWN0X2NvbnRyb2xsZXIuanM/MTVjMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcXVpel9jb250cm9sbGVyLmpzPzVhNjkiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtY2hhcnRqcy9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmUubWluLmNzcz9kZTlhIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Fzc2V0cy9kaXN0L2xpdmVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC10dXJiby9hc3NldHMvZGlzdC90dXJib19jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxuLy8gdGhlIGJvb3RzdHJhcCBtb2R1bGUgZG9lc24ndCBleHBvcnQvcmV0dXJuIGFueXRoaW5nXG4vLyByZXF1aXJlKCdib290c3RyYXAnKTtcblxuLy8gb3IgeW91IGNhbiBpbmNsdWRlIHNwZWNpZmljIHBpZWNlc1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCcpO1xuLy8gcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xuLy8gfSk7XG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICAgIC8vSW5pdGlhbGl6ZSBTZWxlY3QyIEVsZW1lbnRzXG4vLyAgICAgJCgnLnNlbGVjdDInKS5zZWxlY3QyKClcbi8vXG4vLyAgICAgLy9Jbml0aWFsaXplIFNlbGVjdDIgRWxlbWVudHNcbi8vICAgICAkKCcuc2VsZWN0MmJzNCcpLnNlbGVjdDIoe1xuLy8gICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXG4vLyAgICAgfSlcbi8vXG4vLyAgICAgLy9EYXRlbWFzayBkZC9tbS95eXl5XG4vLyAgICAgJCgnI2RhdGVtYXNrJykuaW5wdXRtYXNrKCdkZC9tbS95eXl5JywgeydwbGFjZWhvbGRlcic6ICdkZC9tbS95eXl5J30pXG4vLyAgICAgLy9EYXRlbWFzazIgbW0vZGQveXl5eVxuLy8gICAgICQoJyNkYXRlbWFzazInKS5pbnB1dG1hc2soJ21tL2RkL3l5eXknLCB7J3BsYWNlaG9sZGVyJzogJ21tL2RkL3l5eXknfSlcbi8vICAgICAvL01vbmV5IEV1cm9cbi8vICAgICAkKCdbZGF0YS1tYXNrXScpLmlucHV0bWFzaygpXG4vL1xuLy8gICAgIC8vRGF0ZSBwaWNrZXJcbi8vICAgICAkKCcjcmVzZXJ2YXRpb25kYXRlJykuZGF0ZXRpbWVwaWNrZXIoe1xuLy8gICAgICAgICBmb3JtYXQ6ICdMJ1xuLy8gICAgIH0pO1xuLy9cbi8vICAgICAvL0RhdGUgYW5kIHRpbWUgcGlja2VyXG4vLyAgICAgJCgnI3Jlc2VydmF0aW9uZGF0ZXRpbWUnKS5kYXRldGltZXBpY2tlcih7aWNvbnM6IHt0aW1lOiAnZmFyIGZhLWNsb2NrJ319KTtcbi8vXG4vLyAgICAgLy9EYXRlIHJhbmdlIHBpY2tlclxuLy8gICAgICQoJyNyZXNlcnZhdGlvbicpLmRhdGVyYW5nZXBpY2tlcigpXG4vLyAgICAgLy9EYXRlIHJhbmdlIHBpY2tlciB3aXRoIHRpbWUgcGlja2VyXG4vLyAgICAgJCgnI3Jlc2VydmF0aW9udGltZScpLmRhdGVyYW5nZXBpY2tlcih7XG4vLyAgICAgICAgIHRpbWVQaWNrZXI6IHRydWUsXG4vLyAgICAgICAgIHRpbWVQaWNrZXJJbmNyZW1lbnQ6IDMwLFxuLy8gICAgICAgICBsb2NhbGU6IHtcbi8vICAgICAgICAgICAgIGZvcm1hdDogJ01NL0REL1lZWVkgaGg6bW0gQSdcbi8vICAgICAgICAgfVxuLy8gICAgIH0pXG4vLyAgICAgLy9EYXRlIHJhbmdlIGFzIGEgYnV0dG9uXG4vLyAgICAgJCgnI2RhdGVyYW5nZS1idG4nKS5kYXRlcmFuZ2VwaWNrZXIoXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICAgIHJhbmdlczoge1xuLy8gICAgICAgICAgICAgICAgICdUb2RheSc6IFttb21lbnQoKSwgbW9tZW50KCldLFxuLy8gICAgICAgICAgICAgICAgICdZZXN0ZXJkYXknOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKV0sXG4vLyAgICAgICAgICAgICAgICAgJ0xhc3QgNyBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJyksIG1vbWVudCgpXSxcbi8vICAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXG4vLyAgICAgICAgICAgICAgICAgJ1RoaXMgTW9udGgnOiBbbW9tZW50KCkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuZW5kT2YoJ21vbnRoJyldLFxuLy8gICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXVxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyksXG4vLyAgICAgICAgICAgICBlbmREYXRlOiBtb21lbnQoKVxuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuLy8gICAgICAgICAgICAgJCgnI3JlcG9ydHJhbmdlIHNwYW4nKS5odG1sKHN0YXJ0LmZvcm1hdCgnTU1NTSBELCBZWVlZJykgKyAnIC0gJyArIGVuZC5mb3JtYXQoJ01NTU0gRCwgWVlZWScpKVxuLy8gICAgICAgICB9XG4vLyAgICAgKVxuLy9cbi8vICAgICAvL1RpbWVwaWNrZXJcbi8vICAgICAkKCcjdGltZXBpY2tlcicpLmRhdGV0aW1lcGlja2VyKHtcbi8vICAgICAgICAgZm9ybWF0OiAnTFQnXG4vLyAgICAgfSlcbi8vXG4vLyAgICAgLy9Cb290c3RyYXAgRHVhbGxpc3Rib3hcbi8vICAgICAkKCcuZHVhbGxpc3Rib3gnKS5ib290c3RyYXBEdWFsTGlzdGJveCgpXG4vL1xuLy8gICAgIC8vQ29sb3JwaWNrZXJcbi8vICAgICAkKCcubXktY29sb3JwaWNrZXIxJykuY29sb3JwaWNrZXIoKVxuLy9cbi8vICAgICAkKCcubXktY29sb3JwaWNrZXIyJykub24oJ2NvbG9ycGlja2VyQ2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgICAgICQoJy5teS1jb2xvcnBpY2tlcjIgLmZhLXNxdWFyZScpLmNzcygnY29sb3InLCBldmVudC5jb2xvci50b1N0cmluZygpKTtcbi8vICAgICB9KVxuLy9cbi8vICAgICAkKFwiaW5wdXRbZGF0YS1ib290c3RyYXAtc3dpdGNoXVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgJCh0aGlzKS5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJywgJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpO1xuLy8gICAgIH0pXG4vL1xuLy8gfSlcbi8vIC8vIEJTLVN0ZXBwZXIgSW5pdFxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICB3aW5kb3cuc3RlcHBlciA9IG5ldyBTdGVwcGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icy1zdGVwcGVyJykpXG4vLyB9KVxuLy9cbi8vIC8vIERyb3B6b25lSlMgRGVtbyBDb2RlIFN0YXJ0XG4vLyBEcm9wem9uZS5hdXRvRGlzY292ZXIgPSBmYWxzZVxuLy9cbi8vIC8vIEdldCB0aGUgdGVtcGxhdGUgSFRNTCBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIGRvdW1lbnRoZSB0ZW1wbGF0ZSBIVE1MIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgZG91bWVudFxuLy8gdmFyIHByZXZpZXdOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wbGF0ZVwiKVxuLy8gcHJldmlld05vZGUuaWQgPSBcIlwiXG4vLyB2YXIgcHJldmlld1RlbXBsYXRlID0gcHJldmlld05vZGUucGFyZW50Tm9kZS5pbm5lckhUTUxcbi8vIHByZXZpZXdOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJldmlld05vZGUpXG4vL1xuLy8gdmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoZG9jdW1lbnQuYm9keSwgeyAvLyBNYWtlIHRoZSB3aG9sZSBib2R5IGEgZHJvcHpvbmVcbi8vICAgICB1cmw6IFwiL3RhcmdldC11cmxcIiwgLy8gU2V0IHRoZSB1cmxcbi8vICAgICB0aHVtYm5haWxXaWR0aDogODAsXG4vLyAgICAgdGh1bWJuYWlsSGVpZ2h0OiA4MCxcbi8vICAgICBwYXJhbGxlbFVwbG9hZHM6IDIwLFxuLy8gICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxuLy8gICAgIGF1dG9RdWV1ZTogZmFsc2UsIC8vIE1ha2Ugc3VyZSB0aGUgZmlsZXMgYXJlbid0IHF1ZXVlZCB1bnRpbCBtYW51YWxseSBhZGRlZFxuLy8gICAgIHByZXZpZXdzQ29udGFpbmVyOiBcIiNwcmV2aWV3c1wiLCAvLyBEZWZpbmUgdGhlIGNvbnRhaW5lciB0byBkaXNwbGF5IHRoZSBwcmV2aWV3c1xuLy8gICAgIGNsaWNrYWJsZTogXCIuZmlsZWlucHV0LWJ1dHRvblwiIC8vIERlZmluZSB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGNsaWNrIHRyaWdnZXIgdG8gc2VsZWN0IGZpbGVzLlxuLy8gfSlcbi8vXG4vLyBteURyb3B6b25lLm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uIChmaWxlKSB7XG4vLyAgICAgLy8gSG9va3VwIHRoZSBzdGFydCBidXR0b25cbi8vICAgICBmaWxlLnByZXZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgbXlEcm9wem9uZS5lbnF1ZXVlRmlsZShmaWxlKVxuLy8gICAgIH1cbi8vIH0pXG4vL1xuLy8gLy8gVXBkYXRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXJcbi8vIG15RHJvcHpvbmUub24oXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90YWwtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhclwiKS5zdHlsZS53aWR0aCA9IHByb2dyZXNzICsgXCIlXCJcbi8vIH0pXG4vL1xuLy8gbXlEcm9wem9uZS5vbihcInNlbmRpbmdcIiwgZnVuY3Rpb24gKGZpbGUpIHtcbi8vICAgICAvLyBTaG93IHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiB1cGxvYWQgc3RhcnRzXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3RhbC1wcm9ncmVzc1wiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbi8vICAgICAvLyBBbmQgZGlzYWJsZSB0aGUgc3RhcnQgYnV0dG9uXG4vLyAgICAgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIilcbi8vIH0pXG4vL1xuLy8gLy8gSGlkZSB0aGUgdG90YWwgcHJvZ3Jlc3MgYmFyIHdoZW4gbm90aGluZydzIHVwbG9hZGluZyBhbnltb3JlXG4vLyBteURyb3B6b25lLm9uKFwicXVldWVjb21wbGV0ZVwiLCBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFsLXByb2dyZXNzXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuLy8gfSlcbi8vXG4vLyAvLyBTZXR1cCB0aGUgYnV0dG9ucyBmb3IgYWxsIHRyYW5zZmVyc1xuLy8gLy8gVGhlIFwiYWRkIGZpbGVzXCIgYnV0dG9uIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXR1cCBiZWNhdXNlIHRoZSBjb25maWdcbi8vIC8vIGBjbGlja2FibGVgIGhhcyBhbHJlYWR5IGJlZW4gc3BlY2lmaWVkLlxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3Rpb25zIC5zdGFydFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIG15RHJvcHpvbmUuZW5xdWV1ZUZpbGVzKG15RHJvcHpvbmUuZ2V0RmlsZXNXaXRoU3RhdHVzKERyb3B6b25lLkFEREVEKSlcbi8vIH1cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWN0aW9ucyAuY2FuY2VsXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgbXlEcm9wem9uZS5yZW1vdmVBbGxGaWxlcyh0cnVlKVxuLy8gfVxuLy8gRHJvcHpvbmVKUyBEZW1vIENvZGUgRW5kXG5cblxuLy8gY29uc3QgaGVhZGVyQ2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY2FydCcpO1xuLy8gLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4vLyB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwibG9yZW4gaGVhZGVyXCIsIGV2ZW50LnRhcmdldCk7XG4vLyAgICAgLy8gaWYgKGV2ZW50LnRhcmdldCA9PT0gaGVhZGVyQ2FydCkge1xuLy8gICAgICAgICBoZWFkZXJDYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzVmlzaWJsZScpO1xuLy8gICAgIC8vIH1cbi8vIH1cbi8vXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnN0IHByb21vQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJvZHVjdF9pc1Byb21vdGlvbicpO1xuLy8gICAgIGNvbnN0IHByb21vUHJpY2VGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcm9kdWN0X29mZlBlcmNlbnQnKTtcbi8vXG4vL1xuLy8gICAgIC8vIENpYmxlIGxlIHBhcmVudCBkdSBjaGFtcCBwb3VyIGNhY2hlciB0b3V0IGxlIGJsb2MgZHUgZm9ybXVsYWlyZVxuLy8gICAgIGNvbnN0IHByb21vUHJpY2VGaWVsZENvbnRhaW5lciA9IHByb21vUHJpY2VGaWVsZC5jbG9zZXN0KCcucHJvbW90aW9uJyk7XG4vL1xuLy8gICAgIC8vIEZvbmN0aW9uIGRlIGJhc2N1bGVcbi8vICAgICBmdW5jdGlvbiB0b2dnbGVQcm9tb0ZpZWxkKCkge1xuLy8gICAgICAgICBpZiAocHJvbW9DaGVja2JveC5jaGVja2VkKSB7XG4vLyAgICAgICAgICAgICBwcm9tb1ByaWNlRmllbGRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBwcm9tb1ByaWNlRmllbGRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgICAgLy8gQXBwZWwgaW5pdGlhbCBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2Vcbi8vICAgICB0b2dnbGVQcm9tb0ZpZWxkKCk7XG4vL1xuLy8gICAgIC8vIMOJY291dGV1ciBkJ8OpdsOpbmVtZW50IHN1ciBsZSBjaGFuZ2VtZW50IGRlIGxhIGNoZWNrYm94XG4vLyAgICAgcHJvbW9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0b2dnbGVQcm9tb0ZpZWxkKTtcbi8vIH0pO1xuXG4vLyBpbXBvcnQgJy9hc3NldHMvanMvc2hvcHVzLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuXG4iLCIvLyBhc3NldHMvYm9vdHN0cmFwLmpzXG5pbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2hhcGl0cmVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2NoYXBpdHJlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2RldGFpbHNfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2RldGFpbHNfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL21vZGFsX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9tb2RhbF9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tb2RhbF9oZWxwZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21vZGFsX2hlbHBlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tb2R1bGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL21vZHVsZV9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9wcm9kdWN0X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9wcm9kdWN0X2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3F1aXpfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3F1aXpfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtY2hhcnRqcy9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGNvbnRyb2xsZXJfMSBmcm9tICdAc3ltZm9ueS91eC1saXZlLWNvbXBvbmVudC9kaXN0L2xpdmVfY29udHJvbGxlci5qcyc7XG5pbXBvcnQgJ0BzeW1mb255L3V4LWxpdmUtY29tcG9uZW50L2Rpc3QvbGl2ZS5taW4uY3NzJztcbmltcG9ydCBjb250cm9sbGVyXzIgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LWNoYXJ0anMtLWNoYXJ0JzogY29udHJvbGxlcl8wLFxuICAnbGl2ZSc6IGNvbnRyb2xsZXJfMSxcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8yLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydCgnL1VzZXJzL2FsYXNzYW5lc2Fub2dvL01lc19wcm9qZXRzL2dyb3VwZV9zYWxlbi9lX2RvbGliYXJyL2Fzc2V0cy9jb250cm9sbGVycy9jaGFwaXRyZV9jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydCgnL1VzZXJzL2FsYXNzYW5lc2Fub2dvL01lc19wcm9qZXRzL2dyb3VwZV9zYWxlbi9lX2RvbGliYXJyL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgbmV4dChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvcmVtXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBkZXRhaWxzJztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZTpzdGF0dXMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib29vaHBzXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICB0b2dnbGVTdGF0ZShldmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYW5nZW1lbnQgZCdldGF0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIC8vIGNvbnN0IGlkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9yZGVyZGV0YWlsSWRcbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FkbWluL29yZGVyZGV0YWlsLyR7aWR9L3RvZ2dsZS1zdGF0ZWAsIHsgbWV0aG9kOiAnUE9TVCcgfSlcbiAgICAgICAgLy8gaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyB0YXJnZXRzID0gWydtb2RhbEVsZW1lbnQnXTtcbiAgICBjb21wb25lbnQgPSBudWxsO1xuICAgIGFsZXJ0Qm94ID0gbnVsbDtcblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICB9XG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb2RhbDpvcGVuJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XG4gICAgICAgIC8vICAgICAgICAgIHRoaXMuYWxlcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLWNhcnQtcG9wdXAnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAvLyBPbiBhZmZpY2hlIGxlIGJhbmRlYXVcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRcIiwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgLy8gICAgICAgICAvLyBPbiBsZSBjYWNoZSBhdXRvbWF0aXF1ZW1lbnQgYXByw6hzIDMgc2Vjb25kZXNcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hbGVydEJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIC8vIC0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gICAgIHRoaXMuY29tcG9uZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1jYXJ0Jyk7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk1vZGFsKCkpO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJjb21wb25lbnRcIixjb21wb25lbnQpO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJldmVudFwiLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb21wb25lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXNWaXNpYmxlJyk7XG4gICAgICAgIC8vICAgICB9LCA1MDAwKTtcbiAgICAgICAgLy8gfSk7XG5cblxuICAgIH1cblxuXG4gICAgb3Blbk1vZGFsKCkge1xuICAgICAgICAvLyB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vIHdpbmRvdy5hbGVydChcImxvcmVtIGlwc3VtXCIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50LnN0eWxlLnZpc2liaWxpdHkpXG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50LmNsYXNzTGlzdC5hZGQoJ2lzVmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmNvbnN0IGNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICB9KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydCgnL1VzZXJzL2FsYXNzYW5lc2Fub2dvL01lc19wcm9qZXRzL2dyb3VwZV9zYWxlbi9lX2RvbGliYXJyL2Fzc2V0cy9jb250cm9sbGVycy9tb2RhbF9oZWxwZXJfY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbXBvcnQoJy9Vc2Vycy9hbGFzc2FuZXNhbm9nby9NZXNfcHJvamV0cy9ncm91cGVfc2FsZW4vZV9kb2xpYmFyci9hc3NldHMvY29udHJvbGxlcnMvbW9kdWxlX2NvbnRyb2xsZXIuanMnKS50aGVuKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnJlZ2lzdGVyKHRoaXMuaWRlbnRpZmllciwgY29udHJvbGxlci5kZWZhdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNvbnRyb2xsZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuY29uc3QgY29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXIgPSB0cnVlO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5jb250cm9sbGVycy5maW5kKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5pZGVudGlmaWVyID09PSB0aGlzLmlkZW50aWZpZXIgJiYgY29udHJvbGxlci5fX3N0aW11bHVzTGF6eUNvbnRyb2xsZXI7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW1wb3J0KCcvVXNlcnMvYWxhc3NhbmVzYW5vZ28vTWVzX3Byb2pldHMvZ3JvdXBlX3NhbGVuL2VfZG9saWJhcnIvYXNzZXRzL2NvbnRyb2xsZXJzL3Byb2R1Y3RfY29udHJvbGxlci5qcycpLnRoZW4oKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbXBvcnQoJy9Vc2Vycy9hbGFzc2FuZXNhbm9nby9NZXNfcHJvamV0cy9ncm91cGVfc2FsZW4vZV9kb2xpYmFyci9hc3NldHMvY29udHJvbGxlcnMvcXVpel9jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5yZWdpc3Rlcih0aGlzLmlkZW50aWZpZXIsIGNvbnRyb2xsZXIuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBjb250cm9sbGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuaW1wb3J0IHsgQ2hhcnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tIFwiY2hhcnQuanNcIjtcbmlmIChyZWdpc3RlcmFibGVzKSBDaGFydC5yZWdpc3RlciguLi5yZWdpc3RlcmFibGVzKTtcbmxldCBpc0NoYXJ0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbnZhciBfQ2xhc3MgPSBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvciguLi5fYXJncykge1xuXHRcdHN1cGVyKC4uLl9hcmdzKTtcblx0XHR0aGlzLmNoYXJ0ID0gbnVsbDtcblx0fVxuXHRjb25uZWN0KCkge1xuXHRcdGlmICghaXNDaGFydEluaXRpYWxpemVkKSB7XG5cdFx0XHRpc0NoYXJ0SW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiaW5pdFwiLCB7IENoYXJ0IH0pO1xuXHRcdH1cblx0XHRpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZWxlbWVudFwiKTtcblx0XHRjb25zdCBwYXlsb2FkID0gdGhpcy52aWV3VmFsdWU7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5vcHRpb25zKSAmJiAwID09PSBwYXlsb2FkLm9wdGlvbnMubGVuZ3RoKSBwYXlsb2FkLm9wdGlvbnMgPSB7fTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXCJwcmUtY29ubmVjdFwiLCB7XG5cdFx0XHRvcHRpb25zOiBwYXlsb2FkLm9wdGlvbnMsXG5cdFx0XHRjb25maWc6IHBheWxvYWRcblx0XHR9KTtcblx0XHRjb25zdCBjYW52YXNDb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRpZiAoIWNhbnZhc0NvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBnZXRDb250ZXh0KCkgZnJvbSBFbGVtZW50XCIpO1xuXHRcdHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY2FudmFzQ29udGV4dCwgcGF5bG9hZCk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiY29ubmVjdFwiLCB7IGNoYXJ0OiB0aGlzLmNoYXJ0IH0pO1xuXHR9XG5cdGRpc2Nvbm5lY3QoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiZGlzY29ubmVjdFwiLCB7IGNoYXJ0OiB0aGlzLmNoYXJ0IH0pO1xuXHRcdGlmICh0aGlzLmNoYXJ0KSB7XG5cdFx0XHR0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMuY2hhcnQgPSBudWxsO1xuXHRcdH1cblx0fVxuXHR2aWV3VmFsdWVDaGFuZ2VkKCkge1xuXHRcdGlmICh0aGlzLmNoYXJ0KSB7XG5cdFx0XHRjb25zdCB2aWV3VmFsdWUgPSB7XG5cdFx0XHRcdGRhdGE6IHRoaXMudmlld1ZhbHVlLmRhdGEsXG5cdFx0XHRcdG9wdGlvbnM6IHRoaXMudmlld1ZhbHVlLm9wdGlvbnNcblx0XHRcdH07XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2aWV3VmFsdWUub3B0aW9ucykgJiYgMCA9PT0gdmlld1ZhbHVlLm9wdGlvbnMubGVuZ3RoKSB2aWV3VmFsdWUub3B0aW9ucyA9IHt9O1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwidmlldy12YWx1ZS1jaGFuZ2VcIiwgdmlld1ZhbHVlKTtcblx0XHRcdHRoaXMuY2hhcnQuZGF0YSA9IHZpZXdWYWx1ZS5kYXRhO1xuXHRcdFx0dGhpcy5jaGFydC5vcHRpb25zID0gdmlld1ZhbHVlLm9wdGlvbnM7XG5cdFx0XHR0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuXHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKHBhcmVudEVsZW1lbnQgJiYgdGhpcy5jaGFydC5vcHRpb25zLnJlc3BvbnNpdmUpIHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxXaWR0aCA9IHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGg7XG5cdFx0XHRcdHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtwYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgMX1weGA7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHBhcmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBvcmlnaW5hbFdpZHRoO1xuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG5cdFx0dGhpcy5kaXNwYXRjaChuYW1lLCB7XG5cdFx0XHRkZXRhaWw6IHBheWxvYWQsXG5cdFx0XHRwcmVmaXg6IFwiY2hhcnRqc1wiXG5cdFx0fSk7XG5cdH1cbn07XG5fQ2xhc3MudmFsdWVzID0geyB2aWV3OiBPYmplY3QgfTtcbmV4cG9ydCB7IF9DbGFzcyBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xudmFyIEJhY2tlbmRSZXF1ZXN0X2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb21pc2UsIGFjdGlvbnMsIHVwZGF0ZU1vZGVscykge1xuXHRcdHRoaXMuaXNSZXNvbHZlZCA9IGZhbHNlO1xuXHRcdHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG5cdFx0dGhpcy5wcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHR0aGlzLmlzUmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdH0pO1xuXHRcdHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG5cdFx0dGhpcy51cGRhdGVkTW9kZWxzID0gdXBkYXRlTW9kZWxzO1xuXHR9XG5cdGNvbnRhaW5zT25lT2ZBY3Rpb25zKHRhcmdldGVkQWN0aW9ucykge1xuXHRcdHJldHVybiB0aGlzLmFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+IHRhcmdldGVkQWN0aW9ucy5pbmNsdWRlcyhhY3Rpb24pKS5sZW5ndGggPiAwO1xuXHR9XG5cdGFyZUFueU1vZGVsc1VwZGF0ZWQodGFyZ2V0ZWRNb2RlbHMpIHtcblx0XHRyZXR1cm4gdGhpcy51cGRhdGVkTW9kZWxzLmZpbHRlcigobW9kZWwpID0+IHRhcmdldGVkTW9kZWxzLmluY2x1ZGVzKG1vZGVsKSkubGVuZ3RoID4gMDtcblx0fVxufTtcbnZhciBSZXF1ZXN0QnVpbGRlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih1cmwsIG1ldGhvZCA9IFwicG9zdFwiLCBjcmVkZW50aWFscyA9IFwic2FtZS1vcmlnaW5cIikge1xuXHRcdHRoaXMudXJsID0gdXJsO1xuXHRcdHRoaXMubWV0aG9kID0gbWV0aG9kO1xuXHRcdHRoaXMuY3JlZGVudGlhbHMgPSBjcmVkZW50aWFscztcblx0fVxuXHRidWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcykge1xuXHRcdGNvbnN0IHNwbGl0VXJsID0gdGhpcy51cmwuc3BsaXQoXCI/XCIpO1xuXHRcdGxldCBbdXJsXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IFssIHF1ZXJ5U3RyaW5nXSA9IHNwbGl0VXJsO1xuXHRcdGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcgfHwgXCJcIik7XG5cdFx0Y29uc3QgZmV0Y2hPcHRpb25zID0ge307XG5cdFx0ZmV0Y2hPcHRpb25zLmNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscztcblx0XHRmZXRjaE9wdGlvbnMuaGVhZGVycyA9IHtcblx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQubGl2ZS1jb21wb25lbnQraHRtbFwiLFxuXHRcdFx0XCJYLVJlcXVlc3RlZC1XaXRoXCI6IFwiWE1MSHR0cFJlcXVlc3RcIixcblx0XHRcdFwiWC1MaXZlLVVybFwiOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG5cdFx0fTtcblx0XHRjb25zdCB0b3RhbEZpbGVzID0gT2JqZWN0LmVudHJpZXMoZmlsZXMpLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsICsgY3VycmVudC5sZW5ndGgsIDApO1xuXHRcdGNvbnN0IGhhc0ZpbmdlcnByaW50cyA9IE9iamVjdC5rZXlzKGNoaWxkcmVuKS5sZW5ndGggPiAwO1xuXHRcdGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCAmJiB0b3RhbEZpbGVzID09PSAwICYmIHRoaXMubWV0aG9kID09PSBcImdldFwiICYmIHRoaXMud2lsbERhdGFGaXRJblVybChKU09OLnN0cmluZ2lmeShwcm9wcyksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpLCBwYXJhbXMsIEpTT04uc3RyaW5naWZ5KGNoaWxkcmVuKSwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFByb3BzRnJvbVBhcmVudCkpKSB7XG5cdFx0XHRwYXJhbXMuc2V0KFwicHJvcHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvcHMpKTtcblx0XHRcdHBhcmFtcy5zZXQoXCJ1cGRhdGVkXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWQpKTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSBwYXJhbXMuc2V0KFwicHJvcHNGcm9tUGFyZW50XCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQpKTtcblx0XHRcdGlmIChoYXNGaW5nZXJwcmludHMpIHBhcmFtcy5zZXQoXCJjaGlsZHJlblwiLCBKU09OLnN0cmluZ2lmeShjaGlsZHJlbikpO1xuXHRcdFx0ZmV0Y2hPcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZldGNoT3B0aW9ucy5tZXRob2QgPSBcIlBPU1RcIjtcblx0XHRcdGNvbnN0IHJlcXVlc3REYXRhID0ge1xuXHRcdFx0XHRwcm9wcyxcblx0XHRcdFx0dXBkYXRlZFxuXHRcdFx0fTtcblx0XHRcdGlmIChPYmplY3Qua2V5cyh1cGRhdGVkUHJvcHNGcm9tUGFyZW50KS5sZW5ndGggPiAwKSByZXF1ZXN0RGF0YS5wcm9wc0Zyb21QYXJlbnQgPSB1cGRhdGVkUHJvcHNGcm9tUGFyZW50O1xuXHRcdFx0aWYgKGhhc0ZpbmdlcnByaW50cykgcmVxdWVzdERhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHRcdGlmIChhY3Rpb25zLmxlbmd0aCA+IDApIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXF1ZXN0RGF0YS5hcmdzID0gYWN0aW9uc1swXS5hcmdzO1xuXHRcdFx0XHR1cmwgKz0gYC8ke2VuY29kZVVSSUNvbXBvbmVudChhY3Rpb25zWzBdLm5hbWUpfWA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1cmwgKz0gXCIvX2JhdGNoXCI7XG5cdFx0XHRcdHJlcXVlc3REYXRhLmFjdGlvbnMgPSBhY3Rpb25zO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZChcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdERhdGEpKTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZpbGVzKSkge1xuXHRcdFx0XHRjb25zdCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdGZldGNoT3B0aW9ucy5ib2R5ID0gZm9ybURhdGE7XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy50b1N0cmluZygpO1xuXHRcdHJldHVybiB7XG5cdFx0XHR1cmw6IGAke3VybH0ke3BhcmFtc1N0cmluZy5sZW5ndGggPiAwID8gYD8ke3BhcmFtc1N0cmluZ31gIDogXCJcIn1gLFxuXHRcdFx0ZmV0Y2hPcHRpb25zXG5cdFx0fTtcblx0fVxuXHR3aWxsRGF0YUZpdEluVXJsKHByb3BzSnNvbiwgdXBkYXRlZEpzb24sIHBhcmFtcywgY2hpbGRyZW5Kc29uLCBwcm9wc0Zyb21QYXJlbnRKc29uKSB7XG5cdFx0cmV0dXJuIChuZXcgVVJMU2VhcmNoUGFyYW1zKHByb3BzSnNvbiArIHVwZGF0ZWRKc29uICsgY2hpbGRyZW5Kc29uICsgcHJvcHNGcm9tUGFyZW50SnNvbikudG9TdHJpbmcoKSArIHBhcmFtcy50b1N0cmluZygpKS5sZW5ndGggPCAxNTAwO1xuXHR9XG59O1xudmFyIEJhY2tlbmRfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IodXJsLCBtZXRob2QgPSBcInBvc3RcIiwgY3JlZGVudGlhbHMgPSBcInNhbWUtb3JpZ2luXCIpIHtcblx0XHR0aGlzLnJlcXVlc3RCdWlsZGVyID0gbmV3IFJlcXVlc3RCdWlsZGVyX2RlZmF1bHQodXJsLCBtZXRob2QsIGNyZWRlbnRpYWxzKTtcblx0fVxuXHRtYWtlUmVxdWVzdChwcm9wcywgYWN0aW9ucywgdXBkYXRlZCwgY2hpbGRyZW4sIHVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQsIGZpbGVzKSB7XG5cdFx0Y29uc3QgeyB1cmwsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5yZXF1ZXN0QnVpbGRlci5idWlsZFJlcXVlc3QocHJvcHMsIGFjdGlvbnMsIHVwZGF0ZWQsIGNoaWxkcmVuLCB1cGRhdGVkUHJvcHNGcm9tUGFyZW50LCBmaWxlcyk7XG5cdFx0cmV0dXJuIG5ldyBCYWNrZW5kUmVxdWVzdF9kZWZhdWx0KGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKSwgYWN0aW9ucy5tYXAoKGJhY2tlbmRBY3Rpb24pID0+IGJhY2tlbmRBY3Rpb24ubmFtZSksIE9iamVjdC5rZXlzKHVwZGF0ZWQpKTtcblx0fVxufTtcbnZhciBCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocmVzcG9uc2UpIHtcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdH1cblx0YXN5bmMgZ2V0Qm9keSgpIHtcblx0XHRpZiAoIXRoaXMuYm9keSkgdGhpcy5ib2R5ID0gYXdhaXQgdGhpcy5yZXNwb25zZS50ZXh0KCk7XG5cdFx0cmV0dXJuIHRoaXMuYm9keTtcblx0fVxuXHRnZXRMaXZlVXJsKCkge1xuXHRcdGlmICh2b2lkIDAgPT09IHRoaXMubGl2ZVVybCkgdGhpcy5saXZlVXJsID0gdGhpcy5yZXNwb25zZS5oZWFkZXJzLmdldChcIlgtTGl2ZS1VcmxcIik7XG5cdFx0cmV0dXJuIHRoaXMubGl2ZVVybDtcblx0fVxufTtcbmZ1bmN0aW9uIGdldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCkge1xuXHRyZXR1cm4gZWxlbWVudC5pbm5lckhUTUwgPyBlbGVtZW50Lm91dGVySFRNTC5zbGljZSgwLCBlbGVtZW50Lm91dGVySFRNTC5pbmRleE9mKGVsZW1lbnQuaW5uZXJIVE1MKSkgOiBlbGVtZW50Lm91dGVySFRNTDtcbn1cbmxldCBjb21wb25lbnRNYXBCeUVsZW1lbnQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmxldCBjb21wb25lbnRNYXBCeUNvbXBvbmVudCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCByZWdpc3RlckNvbXBvbmVudCA9IChjb21wb25lbnQpID0+IHtcblx0Y29tcG9uZW50TWFwQnlFbGVtZW50LnNldChjb21wb25lbnQuZWxlbWVudCwgY29tcG9uZW50KTtcblx0Y29tcG9uZW50TWFwQnlDb21wb25lbnQuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50Lm5hbWUpO1xufTtcbmNvbnN0IHVucmVnaXN0ZXJDb21wb25lbnQgPSAoY29tcG9uZW50KSA9PiB7XG5cdGNvbXBvbmVudE1hcEJ5RWxlbWVudC5kZWxldGUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5kZWxldGUoY29tcG9uZW50KTtcbn07XG5jb25zdCBnZXRDb21wb25lbnQgPSAoZWxlbWVudCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRsZXQgY291bnQgPSAwO1xuXHRjb25zdCBtYXhDb3VudCA9IDEwO1xuXHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRNYXBCeUVsZW1lbnQuZ2V0KGVsZW1lbnQpO1xuXHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdFx0cmVzb2x2ZShjb21wb25lbnQpO1xuXHRcdH1cblx0XHRjb3VudCsrO1xuXHRcdGlmIChjb3VudCA+IG1heENvdW50KSB7XG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHRcdHJlamVjdCgvKiBAX19QVVJFX18gKi8gbmV3IEVycm9yKGBDb21wb25lbnQgbm90IGZvdW5kIGZvciBlbGVtZW50ICR7Z2V0RWxlbWVudEFzVGFnVGV4dChlbGVtZW50KX1gKSk7XG5cdFx0fVxuXHR9LCA1KTtcbn0pO1xuY29uc3QgZmluZENvbXBvbmVudHMgPSAoY3VycmVudENvbXBvbmVudCwgb25seVBhcmVudHMsIG9ubHlNYXRjaE5hbWUpID0+IHtcblx0Y29uc3QgY29tcG9uZW50cyA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAob25seVBhcmVudHMgJiYgKGN1cnJlbnRDb21wb25lbnQgPT09IGNvbXBvbmVudCB8fCAhY29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY3VycmVudENvbXBvbmVudC5lbGVtZW50KSkpIHJldHVybjtcblx0XHRpZiAob25seU1hdGNoTmFtZSAmJiBjb21wb25lbnROYW1lICE9PSBvbmx5TWF0Y2hOYW1lKSByZXR1cm47XG5cdFx0Y29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cdH0pO1xuXHRyZXR1cm4gY29tcG9uZW50cztcbn07XG5jb25zdCBmaW5kQ2hpbGRyZW4gPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRjb25zdCBjaGlsZHJlbiA9IFtdO1xuXHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjb21wb25lbnROYW1lLCBjb21wb25lbnQpID0+IHtcblx0XHRpZiAoY3VycmVudENvbXBvbmVudCA9PT0gY29tcG9uZW50KSByZXR1cm47XG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmVsZW1lbnQuY29udGFpbnMoY29tcG9uZW50LmVsZW1lbnQpKSByZXR1cm47XG5cdFx0bGV0IGZvdW5kQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcblx0XHRjb21wb25lbnRNYXBCeUNvbXBvbmVudC5mb3JFYWNoKChjaGlsZENvbXBvbmVudE5hbWUsIGNoaWxkQ29tcG9uZW50KSA9PiB7XG5cdFx0XHRpZiAoZm91bmRDaGlsZENvbXBvbmVudCkgcmV0dXJuO1xuXHRcdFx0aWYgKGNoaWxkQ29tcG9uZW50ID09PSBjb21wb25lbnQpIHJldHVybjtcblx0XHRcdGlmIChjaGlsZENvbXBvbmVudC5lbGVtZW50LmNvbnRhaW5zKGNvbXBvbmVudC5lbGVtZW50KSkgZm91bmRDaGlsZENvbXBvbmVudCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuXHR9KTtcblx0cmV0dXJuIGNoaWxkcmVuO1xufTtcbmNvbnN0IGZpbmRQYXJlbnQgPSAoY3VycmVudENvbXBvbmVudCkgPT4ge1xuXHRsZXQgcGFyZW50RWxlbWVudCA9IGN1cnJlbnRDb21wb25lbnQuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR3aGlsZSAocGFyZW50RWxlbWVudCkge1xuXHRcdGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudE1hcEJ5RWxlbWVudC5nZXQocGFyZW50RWxlbWVudCk7XG5cdFx0aWYgKGNvbXBvbmVudCkgcmV0dXJuIGNvbXBvbmVudDtcblx0XHRwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlcyhjb250ZW50KSB7XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBbXTtcblx0aWYgKCFjb250ZW50KSByZXR1cm4gZGlyZWN0aXZlcztcblx0bGV0IGN1cnJlbnRBY3Rpb25OYW1lID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudFZhbHVlID0gXCJcIjtcblx0bGV0IGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0bGV0IGN1cnJlbnRNb2RpZmllcnMgPSBbXTtcblx0bGV0IHN0YXRlID0gXCJhY3Rpb25cIjtcblx0Y29uc3QgZ2V0TGFzdEFjdGlvbk5hbWUgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBY3Rpb25OYW1lKSByZXR1cm4gY3VycmVudEFjdGlvbk5hbWU7XG5cdFx0aWYgKGRpcmVjdGl2ZXMubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBhbnkgZGlyZWN0aXZlc1wiKTtcblx0XHRyZXR1cm4gZGlyZWN0aXZlc1tkaXJlY3RpdmVzLmxlbmd0aCAtIDFdLmFjdGlvbjtcblx0fTtcblx0Y29uc3QgcHVzaEluc3RydWN0aW9uID0gKCkgPT4ge1xuXHRcdGRpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRhY3Rpb246IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0YXJnczogY3VycmVudEFyZ3VtZW50cyxcblx0XHRcdG1vZGlmaWVyczogY3VycmVudE1vZGlmaWVycyxcblx0XHRcdGdldFN0cmluZzogKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjdXJyZW50QWN0aW9uTmFtZSA9IFwiXCI7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRjdXJyZW50TW9kaWZpZXJzID0gW107XG5cdFx0c3RhdGUgPSBcImFjdGlvblwiO1xuXHR9O1xuXHRjb25zdCBwdXNoQXJndW1lbnQgPSAoKSA9PiB7XG5cdFx0Y3VycmVudEFyZ3VtZW50cy5wdXNoKGN1cnJlbnRBcmd1bWVudFZhbHVlLnRyaW0oKSk7XG5cdFx0Y3VycmVudEFyZ3VtZW50VmFsdWUgPSBcIlwiO1xuXHR9O1xuXHRjb25zdCBwdXNoTW9kaWZpZXIgPSAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMSkgdGhyb3cgbmV3IEVycm9yKGBUaGUgbW9kaWZpZXIgXCIke2N1cnJlbnRBY3Rpb25OYW1lfSgpXCIgZG9lcyBub3Qgc3VwcG9ydCBtdWx0aXBsZSBhcmd1bWVudHMuYCk7XG5cdFx0Y3VycmVudE1vZGlmaWVycy5wdXNoKHtcblx0XHRcdG5hbWU6IGN1cnJlbnRBY3Rpb25OYW1lLFxuXHRcdFx0dmFsdWU6IGN1cnJlbnRBcmd1bWVudHMubGVuZ3RoID4gMCA/IGN1cnJlbnRBcmd1bWVudHNbMF0gOiBudWxsXG5cdFx0fSk7XG5cdFx0Y3VycmVudEFjdGlvbk5hbWUgPSBcIlwiO1xuXHRcdGN1cnJlbnRBcmd1bWVudHMgPSBbXTtcblx0XHRzdGF0ZSA9IFwiYWN0aW9uXCI7XG5cdH07XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNoYXIgPSBjb250ZW50W2ldO1xuXHRcdHN3aXRjaCAoc3RhdGUpIHtcblx0XHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwiKFwiKSB7XG5cdFx0XHRcdFx0c3RhdGUgPSBcImFyZ3VtZW50c1wiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIiBcIikge1xuXHRcdFx0XHRcdGlmIChjdXJyZW50QWN0aW9uTmFtZSkgcHVzaEluc3RydWN0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEFjdGlvbk5hbWUgKz0gY2hhcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYXJndW1lbnRzXCI6XG5cdFx0XHRcdGlmIChjaGFyID09PSBcIilcIikge1xuXHRcdFx0XHRcdHB1c2hBcmd1bWVudCgpO1xuXHRcdFx0XHRcdHN0YXRlID0gXCJhZnRlcl9hcmd1bWVudHNcIjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhciA9PT0gXCIsXCIpIHtcblx0XHRcdFx0XHRwdXNoQXJndW1lbnQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50QXJndW1lbnRWYWx1ZSArPSBjaGFyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZnRlcl9hcmd1bWVudHNcIjpcblx0XHRcdFx0aWYgKGNoYXIgPT09IFwifFwiKSB7XG5cdFx0XHRcdFx0cHVzaE1vZGlmaWVyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYXIgIT09IFwiIFwiKSB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc3BhY2UgYWZ0ZXIgJHtnZXRMYXN0QWN0aW9uTmFtZSgpfSgpYCk7XG5cdFx0XHRcdHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0c3dpdGNoIChzdGF0ZSkge1xuXHRcdGNhc2UgXCJhY3Rpb25cIjpcblx0XHRjYXNlIFwiYWZ0ZXJfYXJndW1lbnRzXCI6XG5cdFx0XHRpZiAoY3VycmVudEFjdGlvbk5hbWUpIHB1c2hJbnN0cnVjdGlvbigpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBjbG9zaW5nIFwiKVwiIGFmdGVyIFwiJHtjdXJyZW50QWN0aW9uTmFtZX1cIj9gKTtcblx0fVxuXHRyZXR1cm4gZGlyZWN0aXZlcztcbn1cbmZ1bmN0aW9uIGNvbWJpbmVTcGFjZWRBcnJheShwYXJ0cykge1xuXHRjb25zdCBmaW5hbFBhcnRzID0gW107XG5cdHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcblx0XHRmaW5hbFBhcnRzLnB1c2goLi4udHJpbUFsbChwYXJ0KS5zcGxpdChcIiBcIikpO1xuXHR9KTtcblx0cmV0dXJuIGZpbmFsUGFydHM7XG59XG5mdW5jdGlvbiB0cmltQWxsKHN0cikge1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1tcXHNdKy9nLCBcIiBcIikudHJpbSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKSB7XG5cdHJldHVybiBtb2RlbC5yZXBsYWNlKC9cXFtdJC8sIFwiXCIpLnNwbGl0KFwiW1wiKS5tYXAoKHMpID0+IHMucmVwbGFjZShcIl1cIiwgXCJcIikpLmpvaW4oXCIuXCIpO1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB2YWx1ZVN0b3JlKSB7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lRGF0YSA9IGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXHRcdFx0aWYgKG1vZGVsTmFtZURhdGEgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgbW9kZWxWYWx1ZSA9IHZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZURhdGEuYWN0aW9uKTtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkobW9kZWxWYWx1ZSkpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChPYmplY3QobW9kZWxWYWx1ZSkgPT09IG1vZGVsVmFsdWUpIHJldHVybiBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUoZWxlbWVudCwgT2JqZWN0LnZhbHVlcyhtb2RlbFZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgcmV0dXJuIGVsZW1lbnQuY2hlY2tlZCA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgOiBudWxsO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuY2hlY2tlZDtcblx0XHR9XG5cdFx0cmV0dXJuIGlucHV0VmFsdWUoZWxlbWVudCk7XG5cdH1cblx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50Lm11bHRpcGxlKSByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LnNlbGVjdGVkT3B0aW9ucykubWFwKChlbCkgPT4gZWwudmFsdWUpO1xuXHRcdHJldHVybiBlbGVtZW50LnZhbHVlO1xuXHR9XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpIHJldHVybiBlbGVtZW50LmRhdGFzZXQudmFsdWU7XG5cdGlmIChcInZhbHVlXCIgaW4gZWxlbWVudCkgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG5cdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInZhbHVlXCIpKSByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0cmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRWYWx1ZU9uRWxlbWVudChlbGVtZW50LCB2YWx1ZSkge1xuXHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcImZpbGVcIikgcmV0dXJuO1xuXHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xuXHRcdFx0ZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlLnNvbWUoKHZhbCkgPT4gdmFsID09IGVsZW1lbnQudmFsdWUpO1xuXHRcdFx0ZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSkgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC52YWx1ZSA9PSB2YWx1ZTtcblx0XHRcdGVsc2UgZWxlbWVudC5jaGVja2VkID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZSkgPT4ge1xuXHRcdFx0cmV0dXJuIGAke3ZhbHVlfWA7XG5cdFx0fSk7XG5cdFx0QXJyYXkuZnJvbShlbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuXHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcblx0XHR9KTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFsdWUgPSB2YWx1ZSA9PT0gdm9pZCAwID8gXCJcIiA6IHZhbHVlO1xuXHRlbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5mdW5jdGlvbiBnZXRBbGxNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50cyhlbGVtZW50KSB7XG5cdGlmICghZWxlbWVudC5kYXRhc2V0Lm1vZGVsKSByZXR1cm4gW107XG5cdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0Lm1vZGVsKTtcblx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRpZiAoZGlyZWN0aXZlLmFyZ3MubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGF0YS1tb2RlbD1cIiR7ZWxlbWVudC5kYXRhc2V0Lm1vZGVsfVwiIGZvcm1hdCBpcyBpbnZhbGlkOiBpdCBkb2VzIG5vdCBzdXBwb3J0IHBhc3NpbmcgYXJndW1lbnRzIHRvIHRoZSBtb2RlbC5gKTtcblx0XHRkaXJlY3RpdmUuYWN0aW9uID0gbm9ybWFsaXplTW9kZWxOYW1lKGRpcmVjdGl2ZS5hY3Rpb24pO1xuXHR9KTtcblx0cmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5mdW5jdGlvbiBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRocm93T25NaXNzaW5nID0gdHJ1ZSkge1xuXHRjb25zdCBkYXRhTW9kZWxEaXJlY3RpdmVzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMoZWxlbWVudCk7XG5cdGlmIChkYXRhTW9kZWxEaXJlY3RpdmVzLmxlbmd0aCA+IDApIHJldHVybiBkYXRhTW9kZWxEaXJlY3RpdmVzWzBdO1xuXHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpKSB7XG5cdFx0Y29uc3QgZm9ybUVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoXCJmb3JtXCIpO1xuXHRcdGlmIChmb3JtRWxlbWVudCAmJiBcIm1vZGVsXCIgaW4gZm9ybUVsZW1lbnQuZGF0YXNldCkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aXZlID0gcGFyc2VEaXJlY3RpdmVzKGZvcm1FbGVtZW50LmRhdGFzZXQubW9kZWwgfHwgXCIqXCIpWzBdO1xuXHRcdFx0aWYgKGRpcmVjdGl2ZS5hcmdzLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihgVGhlIGRhdGEtbW9kZWw9XCIke2Zvcm1FbGVtZW50LmRhdGFzZXQubW9kZWx9XCIgZm9ybWF0IGlzIGludmFsaWQ6IGl0IGRvZXMgbm90IHN1cHBvcnQgcGFzc2luZyBhcmd1bWVudHMgdG8gdGhlIG1vZGVsLmApO1xuXHRcdFx0ZGlyZWN0aXZlLmFjdGlvbiA9IG5vcm1hbGl6ZU1vZGVsTmFtZShlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIikpO1xuXHRcdFx0cmV0dXJuIGRpcmVjdGl2ZTtcblx0XHR9XG5cdH1cblx0aWYgKCF0aHJvd09uTWlzc2luZykgcmV0dXJuIG51bGw7XG5cdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRldGVybWluZSB0aGUgbW9kZWwgbmFtZSBmb3IgXCIke2dldEVsZW1lbnRBc1RhZ1RleHQoZWxlbWVudCl9XCI6IHRoZSBlbGVtZW50IG11c3QgZWl0aGVyIGhhdmUgYSBcImRhdGEtbW9kZWxcIiAob3IgXCJuYW1lXCIgYXR0cmlidXRlIGxpdmluZyBpbnNpZGUgYSA8Zm9ybSBkYXRhLW1vZGVsPVwiKlwiPikuYCk7XG59XG5mdW5jdGlvbiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCBjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5lbGVtZW50ID09PSBlbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0aWYgKCFjb21wb25lbnQuZWxlbWVudC5jb250YWlucyhlbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuXHRyZXR1cm4gZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtY29udHJvbGxlcn49XFxcImxpdmVcXFwiXVwiKSA9PT0gY29tcG9uZW50LmVsZW1lbnQ7XG59XG5mdW5jdGlvbiBjbG9uZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcblx0Y29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRpZiAoIShuZXdFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY2xvbmUgZWxlbWVudFwiKTtcblx0cmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBodG1sVG9FbGVtZW50KGh0bWwpIHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdGh0bWwgPSBodG1sLnRyaW0oKTtcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcblx0aWYgKHRlbXBsYXRlLmNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBIVE1MIGNvbnRhaW5zICR7dGVtcGxhdGUuY29udGVudC5jaGlsZEVsZW1lbnRDb3VudH0gZWxlbWVudHMsIGJ1dCBvbmx5IDEgcm9vdCBlbGVtZW50IGlzIGFsbG93ZWQuYCk7XG5cdGNvbnN0IGNoaWxkID0gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblx0aWYgKCFjaGlsZCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm90IGZvdW5kXCIpO1xuXHRpZiAoIShjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBDcmVhdGVkIGVsZW1lbnQgaXMgbm90IGFuIEhUTUxFbGVtZW50OiAke2h0bWwudHJpbSgpfWApO1xuXHRyZXR1cm4gY2hpbGQ7XG59XG5jb25zdCBnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUgPSAoZWxlbWVudCwgY3VycmVudFZhbHVlcykgPT4ge1xuXHRjb25zdCBmaW5hbFZhbHVlcyA9IFsuLi5jdXJyZW50VmFsdWVzXTtcblx0Y29uc3QgdmFsdWUgPSBpbnB1dFZhbHVlKGVsZW1lbnQpO1xuXHRjb25zdCBpbmRleCA9IGN1cnJlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG5cdGlmIChlbGVtZW50LmNoZWNrZWQpIHtcblx0XHRpZiAoaW5kZXggPT09IC0xKSBmaW5hbFZhbHVlcy5wdXNoKHZhbHVlKTtcblx0XHRyZXR1cm4gZmluYWxWYWx1ZXM7XG5cdH1cblx0aWYgKGluZGV4ID4gLTEpIGZpbmFsVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdHJldHVybiBmaW5hbFZhbHVlcztcbn07XG5jb25zdCBpbnB1dFZhbHVlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA/IGVsZW1lbnQuZGF0YXNldC52YWx1ZSA6IGVsZW1lbnQudmFsdWU7XG5mdW5jdGlvbiBpc1RleHR1YWxJbnB1dEVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBbXG5cdFx0XCJ0ZXh0XCIsXG5cdFx0XCJlbWFpbFwiLFxuXHRcdFwicGFzc3dvcmRcIixcblx0XHRcInNlYXJjaFwiLFxuXHRcdFwidGVsXCIsXG5cdFx0XCJ1cmxcIlxuXHRdLmluY2x1ZGVzKGVsLnR5cGUpO1xufVxuZnVuY3Rpb24gaXNUZXh0YXJlYUVsZW1lbnQoZWwpIHtcblx0cmV0dXJuIGVsIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzTnVtZXJpY2FsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHtcblx0cmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIFtcIm51bWJlclwiLCBcInJhbmdlXCJdLmluY2x1ZGVzKGVsZW1lbnQudHlwZSk7XG59XG52YXIgSG9va01hbmFnZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ob29rcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5cdH1cblx0cmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW107XG5cdFx0aG9va3MucHVzaChjYWxsYmFjayk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR1bnJlZ2lzdGVyKGhvb2tOYW1lLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGhvb2tzID0gdGhpcy5ob29rcy5nZXQoaG9va05hbWUpIHx8IFtdO1xuXHRcdGNvbnN0IGluZGV4ID0gaG9va3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkgcmV0dXJuO1xuXHRcdGhvb2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0dGhpcy5ob29rcy5zZXQoaG9va05hbWUsIGhvb2tzKTtcblx0fVxuXHR0cmlnZ2VySG9vayhob29rTmFtZSwgLi4uYXJncykge1xuXHRcdCh0aGlzLmhvb2tzLmdldChob29rTmFtZSkgfHwgW10pLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG5cdFx0XHRjYWxsYmFjayguLi5hcmdzKTtcblx0XHR9KTtcblx0fVxufTtcbnZhciBJZGlvbW9ycGggPSAoZnVuY3Rpb24oKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRsZXQgRU1QVFlfU0VUID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcblx0bGV0IGRlZmF1bHRzID0ge1xuXHRcdG1vcnBoU3R5bGU6IFwib3V0ZXJIVE1MXCIsXG5cdFx0Y2FsbGJhY2tzOiB7XG5cdFx0XHRiZWZvcmVOb2RlQWRkZWQ6IG5vT3AsXG5cdFx0XHRhZnRlck5vZGVBZGRlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVNb3JwaGVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlTW9ycGhlZDogbm9PcCxcblx0XHRcdGJlZm9yZU5vZGVSZW1vdmVkOiBub09wLFxuXHRcdFx0YWZ0ZXJOb2RlUmVtb3ZlZDogbm9PcCxcblx0XHRcdGJlZm9yZUF0dHJpYnV0ZVVwZGF0ZWQ6IG5vT3Bcblx0XHR9LFxuXHRcdGhlYWQ6IHtcblx0XHRcdHN0eWxlOiBcIm1lcmdlXCIsXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZTogZnVuY3Rpb24oZWx0KSB7XG5cdFx0XHRcdHJldHVybiBlbHQuZ2V0QXR0cmlidXRlKFwiaW0tcHJlc2VydmVcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlQXBwZW5kOiBmdW5jdGlvbihlbHQpIHtcblx0XHRcdFx0cmV0dXJuIGVsdC5nZXRBdHRyaWJ1dGUoXCJpbS1yZS1hcHBlbmRcIikgPT09IFwidHJ1ZVwiO1xuXHRcdFx0fSxcblx0XHRcdHNob3VsZFJlbW92ZTogbm9PcCxcblx0XHRcdGFmdGVySGVhZE1vcnBoZWQ6IG5vT3Bcblx0XHR9XG5cdH07XG5cdGZ1bmN0aW9uIG1vcnBoKG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBEb2N1bWVudCkgb2xkTm9kZSA9IG9sZE5vZGUuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gXCJzdHJpbmdcIikgbmV3Q29udGVudCA9IHBhcnNlQ29udGVudChuZXdDb250ZW50KTtcblx0XHRsZXQgbm9ybWFsaXplZENvbnRlbnQgPSBub3JtYWxpemVDb250ZW50KG5ld0NvbnRlbnQpO1xuXHRcdGxldCBjdHggPSBjcmVhdGVNb3JwaENvbnRleHQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGNvbmZpZyk7XG5cdFx0cmV0dXJuIG1vcnBoTm9ybWFsaXplZENvbnRlbnQob2xkTm9kZSwgbm9ybWFsaXplZENvbnRlbnQsIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhOb3JtYWxpemVkQ29udGVudChvbGROb2RlLCBub3JtYWxpemVkTmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5oZWFkLmJsb2NrKSB7XG5cdFx0XHRsZXQgb2xkSGVhZCA9IG9sZE5vZGUucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG5cdFx0XHRsZXQgbmV3SGVhZCA9IG5vcm1hbGl6ZWROZXdDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuXHRcdFx0aWYgKG9sZEhlYWQgJiYgbmV3SGVhZCkge1xuXHRcdFx0XHRsZXQgcHJvbWlzZXMgPSBoYW5kbGVIZWFkRWxlbWVudChuZXdIZWFkLCBvbGRIZWFkLCBjdHgpO1xuXHRcdFx0XHRQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtb3JwaE5vcm1hbGl6ZWRDb250ZW50KG9sZE5vZGUsIG5vcm1hbGl6ZWROZXdDb250ZW50LCBPYmplY3QuYXNzaWduKGN0eCwgeyBoZWFkOiB7XG5cdFx0XHRcdFx0XHRibG9jazogZmFsc2UsXG5cdFx0XHRcdFx0XHRpZ25vcmU6IHRydWVcblx0XHRcdFx0XHR9IH0pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGN0eC5tb3JwaFN0eWxlID09PSBcImlubmVySFRNTFwiKSB7XG5cdFx0XHRtb3JwaENoaWxkcmVuKG5vcm1hbGl6ZWROZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGUuY2hpbGRyZW47XG5cdFx0fSBlbHNlIGlmIChjdHgubW9ycGhTdHlsZSA9PT0gXCJvdXRlckhUTUxcIiB8fCBjdHgubW9ycGhTdHlsZSA9PSBudWxsKSB7XG5cdFx0XHRsZXQgYmVzdE1hdGNoID0gZmluZEJlc3ROb2RlTWF0Y2gobm9ybWFsaXplZE5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRsZXQgcHJldmlvdXNTaWJsaW5nID0gYmVzdE1hdGNoPy5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRsZXQgbmV4dFNpYmxpbmcgPSBiZXN0TWF0Y2g/Lm5leHRTaWJsaW5nO1xuXHRcdFx0bGV0IG1vcnBoZWROb2RlID0gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgYmVzdE1hdGNoLCBjdHgpO1xuXHRcdFx0aWYgKGJlc3RNYXRjaCkgcmV0dXJuIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKTtcblx0XHRcdGVsc2UgcmV0dXJuIFtdO1xuXHRcdH0gZWxzZSB0aHJvdyBcIkRvIG5vdCB1bmRlcnN0YW5kIGhvdyB0byBtb3JwaCBzdHlsZSBcIiArIGN0eC5tb3JwaFN0eWxlO1xuXHR9XG5cdGZ1bmN0aW9uIGlnbm9yZVZhbHVlT2ZBY3RpdmVFbGVtZW50KHBvc3NpYmxlQWN0aXZlRWxlbWVudCwgY3R4KSB7XG5cdFx0cmV0dXJuIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiBwb3NzaWJsZUFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH1cblx0ZnVuY3Rpb24gbW9ycGhPbGROb2RlVG8ob2xkTm9kZSwgbmV3Q29udGVudCwgY3R4KSB7XG5cdFx0aWYgKGN0eC5pZ25vcmVBY3RpdmUgJiYgb2xkTm9kZSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge30gZWxzZSBpZiAobmV3Q29udGVudCA9PSBudWxsKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0b2xkTm9kZS5yZW1vdmUoKTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0gZWxzZSBpZiAoIWlzU29mdE1hdGNoKG9sZE5vZGUsIG5ld0NvbnRlbnQpKSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlUmVtb3ZlZChvbGROb2RlKSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NvbnRlbnQpID09PSBmYWxzZSkgcmV0dXJuIG9sZE5vZGU7XG5cdFx0XHRvbGROb2RlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKG5ld0NvbnRlbnQsIG9sZE5vZGUpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdDb250ZW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZChvbGROb2RlKTtcblx0XHRcdHJldHVybiBuZXdDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY3R4LmNhbGxiYWNrcy5iZWZvcmVOb2RlTW9ycGhlZChvbGROb2RlLCBuZXdDb250ZW50KSA9PT0gZmFsc2UpIHJldHVybiBvbGROb2RlO1xuXHRcdFx0aWYgKG9sZE5vZGUgaW5zdGFuY2VvZiBIVE1MSGVhZEVsZW1lbnQgJiYgY3R4LmhlYWQuaWdub3JlKSB7fSBlbHNlIGlmIChvbGROb2RlIGluc3RhbmNlb2YgSFRNTEhlYWRFbGVtZW50ICYmIGN0eC5oZWFkLnN0eWxlICE9PSBcIm1vcnBoXCIpIGhhbmRsZUhlYWRFbGVtZW50KG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3luY05vZGVGcm9tKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCk7XG5cdFx0XHRcdGlmICghaWdub3JlVmFsdWVPZkFjdGl2ZUVsZW1lbnQob2xkTm9kZSwgY3R4KSkgbW9ycGhDaGlsZHJlbihuZXdDb250ZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVNb3JwaGVkKG9sZE5vZGUsIG5ld0NvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIG9sZE5vZGU7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG1vcnBoQ2hpbGRyZW4obmV3UGFyZW50LCBvbGRQYXJlbnQsIGN0eCkge1xuXHRcdGxldCBuZXh0TmV3Q2hpbGQgPSBuZXdQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgaW5zZXJ0aW9uUG9pbnQgPSBvbGRQYXJlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgbmV3Q2hpbGQ7XG5cdFx0d2hpbGUgKG5leHROZXdDaGlsZCkge1xuXHRcdFx0bmV3Q2hpbGQgPSBuZXh0TmV3Q2hpbGQ7XG5cdFx0XHRuZXh0TmV3Q2hpbGQgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRcdGlmIChpbnNlcnRpb25Qb2ludCA9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdDaGlsZCkgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHRcdG9sZFBhcmVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG5cdFx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0XHRyZW1vdmVJZHNGcm9tQ29uc2lkZXJhdGlvbihjdHgsIG5ld0NoaWxkKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNJZFNldE1hdGNoKG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KSkge1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpbnNlcnRpb25Qb2ludCwgbmV3Q2hpbGQsIGN0eCk7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG5cdFx0XHRcdHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbmV3Q2hpbGQpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBpZFNldE1hdGNoID0gZmluZElkU2V0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChpZFNldE1hdGNoKSB7XG5cdFx0XHRcdGluc2VydGlvblBvaW50ID0gcmVtb3ZlTm9kZXNCZXR3ZWVuKGluc2VydGlvblBvaW50LCBpZFNldE1hdGNoLCBjdHgpO1xuXHRcdFx0XHRtb3JwaE9sZE5vZGVUbyhpZFNldE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHNvZnRNYXRjaCA9IGZpbmRTb2Z0TWF0Y2gobmV3UGFyZW50LCBvbGRQYXJlbnQsIG5ld0NoaWxkLCBpbnNlcnRpb25Qb2ludCwgY3R4KTtcblx0XHRcdGlmIChzb2Z0TWF0Y2gpIHtcblx0XHRcdFx0aW5zZXJ0aW9uUG9pbnQgPSByZW1vdmVOb2Rlc0JldHdlZW4oaW5zZXJ0aW9uUG9pbnQsIHNvZnRNYXRjaCwgY3R4KTtcblx0XHRcdFx0bW9ycGhPbGROb2RlVG8oc29mdE1hdGNoLCBuZXdDaGlsZCwgY3R4KTtcblx0XHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZUFkZGVkKG5ld0NoaWxkKSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdG9sZFBhcmVudC5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGluc2VydGlvblBvaW50KTtcblx0XHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlQWRkZWQobmV3Q2hpbGQpO1xuXHRcdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBuZXdDaGlsZCk7XG5cdFx0fVxuXHRcdHdoaWxlIChpbnNlcnRpb25Qb2ludCAhPT0gbnVsbCkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRpbnNlcnRpb25Qb2ludCA9IGluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaWdub3JlQXR0cmlidXRlKGF0dHIsIHRvLCB1cGRhdGVUeXBlLCBjdHgpIHtcblx0XHRpZiAoYXR0ciA9PT0gXCJ2YWx1ZVwiICYmIGN0eC5pZ25vcmVBY3RpdmVWYWx1ZSAmJiB0byA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgcmV0dXJuIHRydWU7XG5cdFx0cmV0dXJuIGN0eC5jYWxsYmFja3MuYmVmb3JlQXR0cmlidXRlVXBkYXRlZChhdHRyLCB0bywgdXBkYXRlVHlwZSkgPT09IGZhbHNlO1xuXHR9XG5cdGZ1bmN0aW9uIHN5bmNOb2RlRnJvbShmcm9tLCB0bywgY3R4KSB7XG5cdFx0bGV0IHR5cGUgPSBmcm9tLm5vZGVUeXBlO1xuXHRcdGlmICh0eXBlID09PSAxKSB7XG5cdFx0XHRjb25zdCBmcm9tQXR0cmlidXRlcyA9IGZyb20uYXR0cmlidXRlcztcblx0XHRcdGNvbnN0IHRvQXR0cmlidXRlcyA9IHRvLmF0dHJpYnV0ZXM7XG5cdFx0XHRmb3IgKGNvbnN0IGZyb21BdHRyaWJ1dGUgb2YgZnJvbUF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKGlnbm9yZUF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUsIHRvLCBcInVwZGF0ZVwiLCBjdHgpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHRvLmdldEF0dHJpYnV0ZShmcm9tQXR0cmlidXRlLm5hbWUpICE9PSBmcm9tQXR0cmlidXRlLnZhbHVlKSB0by5zZXRBdHRyaWJ1dGUoZnJvbUF0dHJpYnV0ZS5uYW1lLCBmcm9tQXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSB0b0F0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgMCA8PSBpOyBpLS0pIHtcblx0XHRcdFx0Y29uc3QgdG9BdHRyaWJ1dGUgPSB0b0F0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSwgdG8sIFwicmVtb3ZlXCIsIGN0eCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKHRvQXR0cmlidXRlLm5hbWUpKSB0by5yZW1vdmVBdHRyaWJ1dGUodG9BdHRyaWJ1dGUubmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSA4IHx8IHR5cGUgPT09IDMpIHtcblx0XHRcdGlmICh0by5ub2RlVmFsdWUgIT09IGZyb20ubm9kZVZhbHVlKSB0by5ub2RlVmFsdWUgPSBmcm9tLm5vZGVWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKCFpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCh0bywgY3R4KSkgc3luY0lucHV0VmFsdWUoZnJvbSwgdG8sIGN0eCk7XG5cdH1cblx0ZnVuY3Rpb24gc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIGF0dHJpYnV0ZU5hbWUsIGN0eCkge1xuXHRcdGlmIChmcm9tW2F0dHJpYnV0ZU5hbWVdICE9PSB0b1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0bGV0IGlnbm9yZVVwZGF0ZSA9IGlnbm9yZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0bywgXCJ1cGRhdGVcIiwgY3R4KTtcblx0XHRcdGlmICghaWdub3JlVXBkYXRlKSB0b1thdHRyaWJ1dGVOYW1lXSA9IGZyb21bYXR0cmlidXRlTmFtZV07XG5cdFx0XHRpZiAoZnJvbVthdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRpZiAoIWlnbm9yZVVwZGF0ZSkgdG8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGZyb21bYXR0cmlidXRlTmFtZV0pO1xuXHRcdFx0fSBlbHNlIGlmICghaWdub3JlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHRvLCBcInJlbW92ZVwiLCBjdHgpKSB0by5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHN5bmNJbnB1dFZhbHVlKGZyb20sIHRvLCBjdHgpIHtcblx0XHRpZiAoZnJvbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdG8gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGZyb20udHlwZSAhPT0gXCJmaWxlXCIpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImNoZWNrZWRcIiwgY3R4KTtcblx0XHRcdHN5bmNCb29sZWFuQXR0cmlidXRlKGZyb20sIHRvLCBcImRpc2FibGVkXCIsIGN0eCk7XG5cdFx0XHRpZiAoIWZyb20uaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJyZW1vdmVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnZhbHVlID0gXCJcIjtcblx0XHRcdFx0XHR0by5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChmcm9tVmFsdWUgIT09IHRvVmFsdWUpIHtcblx0XHRcdFx0aWYgKCFpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkge1xuXHRcdFx0XHRcdHRvLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZyb21WYWx1ZSk7XG5cdFx0XHRcdFx0dG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZyb20gaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkgc3luY0Jvb2xlYW5BdHRyaWJ1dGUoZnJvbSwgdG8sIFwic2VsZWN0ZWRcIiwgY3R4KTtcblx0XHRlbHNlIGlmIChmcm9tIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCAmJiB0byBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdGxldCBmcm9tVmFsdWUgPSBmcm9tLnZhbHVlO1xuXHRcdFx0bGV0IHRvVmFsdWUgPSB0by52YWx1ZTtcblx0XHRcdGlmIChpZ25vcmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0bywgXCJ1cGRhdGVcIiwgY3R4KSkgcmV0dXJuO1xuXHRcdFx0aWYgKGZyb21WYWx1ZSAhPT0gdG9WYWx1ZSkgdG8udmFsdWUgPSBmcm9tVmFsdWU7XG5cdFx0XHRpZiAodG8uZmlyc3RDaGlsZCAmJiB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSAhPT0gZnJvbVZhbHVlKSB0by5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGZyb21WYWx1ZTtcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gaGFuZGxlSGVhZEVsZW1lbnQobmV3SGVhZFRhZywgY3VycmVudEhlYWQsIGN0eCkge1xuXHRcdGxldCBhZGRlZCA9IFtdO1xuXHRcdGxldCByZW1vdmVkID0gW107XG5cdFx0bGV0IHByZXNlcnZlZCA9IFtdO1xuXHRcdGxldCBub2Rlc1RvQXBwZW5kID0gW107XG5cdFx0bGV0IGhlYWRNZXJnZVN0eWxlID0gY3R4LmhlYWQuc3R5bGU7XG5cdFx0bGV0IHNyY1RvTmV3SGVhZE5vZGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRmb3IgKGNvbnN0IG5ld0hlYWRDaGlsZCBvZiBuZXdIZWFkVGFnLmNoaWxkcmVuKSBzcmNUb05ld0hlYWROb2Rlcy5zZXQobmV3SGVhZENoaWxkLm91dGVySFRNTCwgbmV3SGVhZENoaWxkKTtcblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRIZWFkRWx0IG9mIGN1cnJlbnRIZWFkLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgaW5OZXdDb250ZW50ID0gc3JjVG9OZXdIZWFkTm9kZXMuaGFzKGN1cnJlbnRIZWFkRWx0Lm91dGVySFRNTCk7XG5cdFx0XHRsZXQgaXNSZUFwcGVuZGVkID0gY3R4LmhlYWQuc2hvdWxkUmVBcHBlbmQoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0bGV0IGlzUHJlc2VydmVkID0gY3R4LmhlYWQuc2hvdWxkUHJlc2VydmUoY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0aWYgKGluTmV3Q29udGVudCB8fCBpc1ByZXNlcnZlZCkgaWYgKGlzUmVBcHBlbmRlZCkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzcmNUb05ld0hlYWROb2Rlcy5kZWxldGUoY3VycmVudEhlYWRFbHQub3V0ZXJIVE1MKTtcblx0XHRcdFx0cHJlc2VydmVkLnB1c2goY3VycmVudEhlYWRFbHQpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaGVhZE1lcmdlU3R5bGUgPT09IFwiYXBwZW5kXCIpIHtcblx0XHRcdFx0aWYgKGlzUmVBcHBlbmRlZCkge1xuXHRcdFx0XHRcdHJlbW92ZWQucHVzaChjdXJyZW50SGVhZEVsdCk7XG5cdFx0XHRcdFx0bm9kZXNUb0FwcGVuZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguaGVhZC5zaG91bGRSZW1vdmUoY3VycmVudEhlYWRFbHQpICE9PSBmYWxzZSkgcmVtb3ZlZC5wdXNoKGN1cnJlbnRIZWFkRWx0KTtcblx0XHR9XG5cdFx0bm9kZXNUb0FwcGVuZC5wdXNoKC4uLnNyY1RvTmV3SGVhZE5vZGVzLnZhbHVlcygpKTtcblx0XHRsb2coXCJ0byBhcHBlbmQ6IFwiLCBub2Rlc1RvQXBwZW5kKTtcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IG5ld05vZGUgb2Ygbm9kZXNUb0FwcGVuZCkge1xuXHRcdFx0bG9nKFwiYWRkaW5nOiBcIiwgbmV3Tm9kZSk7XG5cdFx0XHRsZXQgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQobmV3Tm9kZS5vdXRlckhUTUwpLmZpcnN0Q2hpbGQ7XG5cdFx0XHRsb2cobmV3RWx0KTtcblx0XHRcdGlmIChjdHguY2FsbGJhY2tzLmJlZm9yZU5vZGVBZGRlZChuZXdFbHQpICE9PSBmYWxzZSkge1xuXHRcdFx0XHRpZiAobmV3RWx0LmhyZWYgfHwgbmV3RWx0LnNyYykge1xuXHRcdFx0XHRcdGxldCByZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlID0gX3Jlc29sdmU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bmV3RWx0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VycmVudEhlYWQuYXBwZW5kQ2hpbGQobmV3RWx0KTtcblx0XHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVBZGRlZChuZXdFbHQpO1xuXHRcdFx0XHRhZGRlZC5wdXNoKG5ld0VsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcmVtb3ZlZEVsZW1lbnQgb2YgcmVtb3ZlZCkgaWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQocmVtb3ZlZEVsZW1lbnQpICE9PSBmYWxzZSkge1xuXHRcdFx0Y3VycmVudEhlYWQucmVtb3ZlQ2hpbGQocmVtb3ZlZEVsZW1lbnQpO1xuXHRcdFx0Y3R4LmNhbGxiYWNrcy5hZnRlck5vZGVSZW1vdmVkKHJlbW92ZWRFbGVtZW50KTtcblx0XHR9XG5cdFx0Y3R4LmhlYWQuYWZ0ZXJIZWFkTW9ycGhlZChjdXJyZW50SGVhZCwge1xuXHRcdFx0YWRkZWQsXG5cdFx0XHRrZXB0OiBwcmVzZXJ2ZWQsXG5cdFx0XHRyZW1vdmVkXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9XG5cdGZ1bmN0aW9uIGxvZygpIHt9XG5cdGZ1bmN0aW9uIG5vT3AoKSB7fVxuXHRmdW5jdGlvbiBtZXJnZURlZmF1bHRzKGNvbmZpZykge1xuXHRcdGxldCBmaW5hbENvbmZpZyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcsIGRlZmF1bHRzKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLCBjb25maWcpO1xuXHRcdGZpbmFsQ29uZmlnLmNhbGxiYWNrcyA9IHt9O1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBkZWZhdWx0cy5jYWxsYmFja3MpO1xuXHRcdE9iamVjdC5hc3NpZ24oZmluYWxDb25maWcuY2FsbGJhY2tzLCBjb25maWcuY2FsbGJhY2tzKTtcblx0XHRmaW5hbENvbmZpZy5oZWFkID0ge307XG5cdFx0T2JqZWN0LmFzc2lnbihmaW5hbENvbmZpZy5oZWFkLCBkZWZhdWx0cy5oZWFkKTtcblx0XHRPYmplY3QuYXNzaWduKGZpbmFsQ29uZmlnLmhlYWQsIGNvbmZpZy5oZWFkKTtcblx0XHRyZXR1cm4gZmluYWxDb25maWc7XG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlTW9ycGhDb250ZXh0KG9sZE5vZGUsIG5ld0NvbnRlbnQsIGNvbmZpZykge1xuXHRcdGNvbmZpZyA9IG1lcmdlRGVmYXVsdHMoY29uZmlnKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFyZ2V0OiBvbGROb2RlLFxuXHRcdFx0bmV3Q29udGVudCxcblx0XHRcdGNvbmZpZyxcblx0XHRcdG1vcnBoU3R5bGU6IGNvbmZpZy5tb3JwaFN0eWxlLFxuXHRcdFx0aWdub3JlQWN0aXZlOiBjb25maWcuaWdub3JlQWN0aXZlLFxuXHRcdFx0aWdub3JlQWN0aXZlVmFsdWU6IGNvbmZpZy5pZ25vcmVBY3RpdmVWYWx1ZSxcblx0XHRcdGlkTWFwOiBjcmVhdGVJZE1hcChvbGROb2RlLCBuZXdDb250ZW50KSxcblx0XHRcdGRlYWRJZHM6IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCksXG5cdFx0XHRjYWxsYmFja3M6IGNvbmZpZy5jYWxsYmFja3MsXG5cdFx0XHRoZWFkOiBjb25maWcuaGVhZFxuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gaXNJZFNldE1hdGNoKG5vZGUxLCBub2RlMiwgY3R4KSB7XG5cdFx0aWYgKG5vZGUxID09IG51bGwgfHwgbm9kZTIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmIChub2RlMS5ub2RlVHlwZSA9PT0gbm9kZTIubm9kZVR5cGUgJiYgbm9kZTEudGFnTmFtZSA9PT0gbm9kZTIudGFnTmFtZSkgaWYgKG5vZGUxLmlkICE9PSBcIlwiICYmIG5vZGUxLmlkID09PSBub2RlMi5pZCkgcmV0dXJuIHRydWU7XG5cdFx0ZWxzZSByZXR1cm4gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikgPiAwO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRmdW5jdGlvbiBpc1NvZnRNYXRjaChub2RlMSwgbm9kZTIpIHtcblx0XHRpZiAobm9kZTEgPT0gbnVsbCB8fCBub2RlMiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5vZGUxLm5vZGVUeXBlID09PSBub2RlMi5ub2RlVHlwZSAmJiBub2RlMS50YWdOYW1lID09PSBub2RlMi50YWdOYW1lO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGVzQmV0d2VlbihzdGFydEluY2x1c2l2ZSwgZW5kRXhjbHVzaXZlLCBjdHgpIHtcblx0XHR3aGlsZSAoc3RhcnRJbmNsdXNpdmUgIT09IGVuZEV4Y2x1c2l2ZSkge1xuXHRcdFx0bGV0IHRlbXBOb2RlID0gc3RhcnRJbmNsdXNpdmU7XG5cdFx0XHRzdGFydEluY2x1c2l2ZSA9IHN0YXJ0SW5jbHVzaXZlLm5leHRTaWJsaW5nO1xuXHRcdFx0cmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KTtcblx0XHR9XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCBlbmRFeGNsdXNpdmUpO1xuXHRcdHJldHVybiBlbmRFeGNsdXNpdmUubmV4dFNpYmxpbmc7XG5cdH1cblx0ZnVuY3Rpb24gZmluZElkU2V0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBuZXdDaGlsZFBvdGVudGlhbElkQ291bnQgPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgbmV3Q2hpbGQsIG9sZFBhcmVudCk7XG5cdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gbnVsbDtcblx0XHRpZiAobmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50ID4gMCkge1xuXHRcdFx0bGV0IHBvdGVudGlhbE1hdGNoID0gaW5zZXJ0aW9uUG9pbnQ7XG5cdFx0XHRsZXQgb3RoZXJNYXRjaENvdW50ID0gMDtcblx0XHRcdHdoaWxlIChwb3RlbnRpYWxNYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChpc0lkU2V0TWF0Y2gobmV3Q2hpbGQsIHBvdGVudGlhbE1hdGNoLCBjdHgpKSByZXR1cm4gcG90ZW50aWFsTWF0Y2g7XG5cdFx0XHRcdG90aGVyTWF0Y2hDb3VudCArPSBnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsTWF0Y2gsIG5ld0NvbnRlbnQpO1xuXHRcdFx0XHRpZiAob3RoZXJNYXRjaENvdW50ID4gbmV3Q2hpbGRQb3RlbnRpYWxJZENvdW50KSByZXR1cm4gbnVsbDtcblx0XHRcdFx0cG90ZW50aWFsTWF0Y2ggPSBwb3RlbnRpYWxNYXRjaC5uZXh0U2libGluZztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBvdGVudGlhbE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRTb2Z0TWF0Y2gobmV3Q29udGVudCwgb2xkUGFyZW50LCBuZXdDaGlsZCwgaW5zZXJ0aW9uUG9pbnQsIGN0eCkge1xuXHRcdGxldCBwb3RlbnRpYWxTb2Z0TWF0Y2ggPSBpbnNlcnRpb25Qb2ludDtcblx0XHRsZXQgbmV4dFNpYmxpbmcgPSBuZXdDaGlsZC5uZXh0U2libGluZztcblx0XHRsZXQgc2libGluZ1NvZnRNYXRjaENvdW50ID0gMDtcblx0XHR3aGlsZSAocG90ZW50aWFsU29mdE1hdGNoICE9IG51bGwpIHtcblx0XHRcdGlmIChnZXRJZEludGVyc2VjdGlvbkNvdW50KGN0eCwgcG90ZW50aWFsU29mdE1hdGNoLCBuZXdDb250ZW50KSA+IDApIHJldHVybiBudWxsO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5ld0NoaWxkLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSByZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHRcdFx0aWYgKGlzU29mdE1hdGNoKG5leHRTaWJsaW5nLCBwb3RlbnRpYWxTb2Z0TWF0Y2gpKSB7XG5cdFx0XHRcdHNpYmxpbmdTb2Z0TWF0Y2hDb3VudCsrO1xuXHRcdFx0XHRuZXh0U2libGluZyA9IG5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAoc2libGluZ1NvZnRNYXRjaENvdW50ID49IDIpIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cG90ZW50aWFsU29mdE1hdGNoID0gcG90ZW50aWFsU29mdE1hdGNoLm5leHRTaWJsaW5nO1xuXHRcdH1cblx0XHRyZXR1cm4gcG90ZW50aWFsU29mdE1hdGNoO1xuXHR9XG5cdGZ1bmN0aW9uIHBhcnNlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0bGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblx0XHRsZXQgY29udGVudFdpdGhTdmdzUmVtb3ZlZCA9IG5ld0NvbnRlbnQucmVwbGFjZSgvPHN2ZyhcXHNbXj5dKj58PikoW1xcc1xcU10qPyk8XFwvc3ZnPi9naW0sIFwiXCIpO1xuXHRcdGlmIChjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaHRtbD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvaGVhZD4vKSB8fCBjb250ZW50V2l0aFN2Z3NSZW1vdmVkLm1hdGNoKC88XFwvYm9keT4vKSkge1xuXHRcdFx0bGV0IGNvbnRlbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG5ld0NvbnRlbnQsIFwidGV4dC9odG1sXCIpO1xuXHRcdFx0aWYgKGNvbnRlbnRXaXRoU3Znc1JlbW92ZWQubWF0Y2goLzxcXC9odG1sPi8pKSB7XG5cdFx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBodG1sRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRcdFx0aWYgKGh0bWxFbGVtZW50KSB7XG5cdFx0XHRcdFx0aHRtbEVsZW1lbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiBodG1sRWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgY29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoXCI8Ym9keT48dGVtcGxhdGU+XCIgKyBuZXdDb250ZW50ICsgXCI8L3RlbXBsYXRlPjwvYm9keT5cIiwgXCJ0ZXh0L2h0bWxcIikuYm9keS5xdWVyeVNlbGVjdG9yKFwidGVtcGxhdGVcIikuY29udGVudDtcblx0XHRcdGNvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGggPSB0cnVlO1xuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbnRlbnQobmV3Q29udGVudCkge1xuXHRcdGlmIChuZXdDb250ZW50ID09IG51bGwpIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQuZ2VuZXJhdGVkQnlJZGlvbW9ycGgpIHJldHVybiBuZXdDb250ZW50O1xuXHRcdGVsc2UgaWYgKG5ld0NvbnRlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRjb25zdCBkdW1teVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkdW1teVBhcmVudC5hcHBlbmQobmV3Q29udGVudCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGR1bW15UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGZvciAoY29uc3QgZWx0IG9mIFsuLi5uZXdDb250ZW50XSkgZHVtbXlQYXJlbnQuYXBwZW5kKGVsdCk7XG5cdFx0XHRyZXR1cm4gZHVtbXlQYXJlbnQ7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGluc2VydFNpYmxpbmdzKHByZXZpb3VzU2libGluZywgbW9ycGhlZE5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0bGV0IHN0YWNrID0gW107XG5cdFx0bGV0IGFkZGVkID0gW107XG5cdFx0d2hpbGUgKHByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKHByZXZpb3VzU2libGluZyk7XG5cdFx0XHRwcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nO1xuXHRcdH1cblx0XHR3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuXHRcdFx0bGV0IG5vZGUgPSBzdGFjay5wb3AoKTtcblx0XHRcdGFkZGVkLnB1c2gobm9kZSk7XG5cdFx0XHRtb3JwaGVkTm9kZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBtb3JwaGVkTm9kZSk7XG5cdFx0fVxuXHRcdGFkZGVkLnB1c2gobW9ycGhlZE5vZGUpO1xuXHRcdHdoaWxlIChuZXh0U2libGluZyAhPSBudWxsKSB7XG5cdFx0XHRzdGFjay5wdXNoKG5leHRTaWJsaW5nKTtcblx0XHRcdGFkZGVkLnB1c2gobmV4dFNpYmxpbmcpO1xuXHRcdFx0bmV4dFNpYmxpbmcgPSBuZXh0U2libGluZy5uZXh0U2libGluZztcblx0XHR9XG5cdFx0d2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApIG1vcnBoZWROb2RlLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YWNrLnBvcCgpLCBtb3JwaGVkTm9kZS5uZXh0U2libGluZyk7XG5cdFx0cmV0dXJuIGFkZGVkO1xuXHR9XG5cdGZ1bmN0aW9uIGZpbmRCZXN0Tm9kZU1hdGNoKG5ld0NvbnRlbnQsIG9sZE5vZGUsIGN0eCkge1xuXHRcdGxldCBjdXJyZW50RWxlbWVudDtcblx0XHRjdXJyZW50RWxlbWVudCA9IG5ld0NvbnRlbnQuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRsZXQgc2NvcmUgPSAwO1xuXHRcdHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuXHRcdFx0bGV0IG5ld1Njb3JlID0gc2NvcmVFbGVtZW50KGN1cnJlbnRFbGVtZW50LCBvbGROb2RlLCBjdHgpO1xuXHRcdFx0aWYgKG5ld1Njb3JlID4gc2NvcmUpIHtcblx0XHRcdFx0YmVzdEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudDtcblx0XHRcdFx0c2NvcmUgPSBuZXdTY29yZTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQubmV4dFNpYmxpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBiZXN0RWxlbWVudDtcblx0fVxuXHRmdW5jdGlvbiBzY29yZUVsZW1lbnQobm9kZTEsIG5vZGUyLCBjdHgpIHtcblx0XHRpZiAoaXNTb2Z0TWF0Y2gobm9kZTEsIG5vZGUyKSkgcmV0dXJuIC41ICsgZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMik7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZSh0ZW1wTm9kZSwgY3R4KSB7XG5cdFx0cmVtb3ZlSWRzRnJvbUNvbnNpZGVyYXRpb24oY3R4LCB0ZW1wTm9kZSk7XG5cdFx0aWYgKGN0eC5jYWxsYmFja3MuYmVmb3JlTm9kZVJlbW92ZWQodGVtcE5vZGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdHRlbXBOb2RlLnJlbW92ZSgpO1xuXHRcdGN0eC5jYWxsYmFja3MuYWZ0ZXJOb2RlUmVtb3ZlZCh0ZW1wTm9kZSk7XG5cdH1cblx0ZnVuY3Rpb24gaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSB7XG5cdFx0cmV0dXJuICFjdHguZGVhZElkcy5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIGlkSXNXaXRoaW5Ob2RlKGN0eCwgaWQsIHRhcmdldE5vZGUpIHtcblx0XHRyZXR1cm4gKGN0eC5pZE1hcC5nZXQodGFyZ2V0Tm9kZSkgfHwgRU1QVFlfU0VUKS5oYXMoaWQpO1xuXHR9XG5cdGZ1bmN0aW9uIHJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uKGN0eCwgbm9kZSkge1xuXHRcdGxldCBpZFNldCA9IGN0eC5pZE1hcC5nZXQobm9kZSkgfHwgRU1QVFlfU0VUO1xuXHRcdGZvciAoY29uc3QgaWQgb2YgaWRTZXQpIGN0eC5kZWFkSWRzLmFkZChpZCk7XG5cdH1cblx0ZnVuY3Rpb24gZ2V0SWRJbnRlcnNlY3Rpb25Db3VudChjdHgsIG5vZGUxLCBub2RlMikge1xuXHRcdGxldCBzb3VyY2VTZXQgPSBjdHguaWRNYXAuZ2V0KG5vZGUxKSB8fCBFTVBUWV9TRVQ7XG5cdFx0bGV0IG1hdGNoQ291bnQgPSAwO1xuXHRcdGZvciAoY29uc3QgaWQgb2Ygc291cmNlU2V0KSBpZiAoaXNJZEluQ29uc2lkZXJhdGlvbihjdHgsIGlkKSAmJiBpZElzV2l0aGluTm9kZShjdHgsIGlkLCBub2RlMikpICsrbWF0Y2hDb3VudDtcblx0XHRyZXR1cm4gbWF0Y2hDb3VudDtcblx0fVxuXHRmdW5jdGlvbiBwb3B1bGF0ZUlkTWFwRm9yTm9kZShub2RlLCBpZE1hcCkge1xuXHRcdGxldCBub2RlUGFyZW50ID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXHRcdGxldCBpZEVsZW1lbnRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkXVwiKTtcblx0XHRmb3IgKGNvbnN0IGVsdCBvZiBpZEVsZW1lbnRzKSB7XG5cdFx0XHRsZXQgY3VycmVudCA9IGVsdDtcblx0XHRcdHdoaWxlIChjdXJyZW50ICE9PSBub2RlUGFyZW50ICYmIGN1cnJlbnQgIT0gbnVsbCkge1xuXHRcdFx0XHRsZXQgaWRTZXQgPSBpZE1hcC5nZXQoY3VycmVudCk7XG5cdFx0XHRcdGlmIChpZFNldCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWRTZXQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdFx0XHRcdGlkTWFwLnNldChjdXJyZW50LCBpZFNldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWRTZXQuYWRkKGVsdC5pZCk7XG5cdFx0XHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUlkTWFwKG9sZENvbnRlbnQsIG5ld0NvbnRlbnQpIHtcblx0XHRsZXQgaWRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHBvcHVsYXRlSWRNYXBGb3JOb2RlKG9sZENvbnRlbnQsIGlkTWFwKTtcblx0XHRwb3B1bGF0ZUlkTWFwRm9yTm9kZShuZXdDb250ZW50LCBpZE1hcCk7XG5cdFx0cmV0dXJuIGlkTWFwO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0bW9ycGgsXG5cdFx0ZGVmYXVsdHNcblx0fTtcbn0pKCk7XG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihlbGVtZW50KSB7XG5cdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gXCJmaWxlXCIpKSB7XG5cdFx0aWYgKFwidmFsdWVcIiBpbiBlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQudmFsdWUpO1xuXHRcdGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwidmFsdWVcIikpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG5cdH1cblx0QXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuXHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKGNoaWxkKTtcblx0fSk7XG59XG5jb25zdCBzeW5jQXR0cmlidXRlcyA9IChmcm9tRWwsIHRvRWwpID0+IHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tRWwuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGF0dHIgPSBmcm9tRWwuYXR0cmlidXRlc1tpXTtcblx0XHR0b0VsLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuXHR9XG59O1xuZnVuY3Rpb24gZXhlY3V0ZU1vcnBoZG9tKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgbW9kaWZpZWRGaWVsZEVsZW1lbnRzLCBnZXRFbGVtZW50VmFsdWUsIGV4dGVybmFsTXV0YXRpb25UcmFja2VyKSB7XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyID0gW107XG5cdGNvbnN0IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0Y29uc3QgbWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwID0gKGlkLCByZXBsYWNlV2l0aENsb25lKSA9PiB7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlLmdldChpZCk7XG5cdFx0aWYgKCEob2xkRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKGBPcmlnaW5hbCBlbGVtZW50IHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYCk7XG5cdFx0b3JpZ2luYWxFbGVtZW50SWRzVG9Td2FwQWZ0ZXIucHVzaChpZCk7XG5cdFx0aWYgKCFyZXBsYWNlV2l0aENsb25lKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCBjbG9uZWRPbGRFbGVtZW50ID0gY2xvbmVIVE1MRWxlbWVudChvbGRFbGVtZW50KTtcblx0XHRvbGRFbGVtZW50LnJlcGxhY2VXaXRoKGNsb25lZE9sZEVsZW1lbnQpO1xuXHRcdHJldHVybiBjbG9uZWRPbGRFbGVtZW50O1xuXHR9O1xuXHRyb290VG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1saXZlLXByZXNlcnZlXVwiKS5mb3JFYWNoKChuZXdFbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgaWQgPSBuZXdFbGVtZW50LmlkO1xuXHRcdGlmICghaWQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBkYXRhLWxpdmUtcHJlc2VydmUgYXR0cmlidXRlIHJlcXVpcmVzIGFuIGlkIGF0dHJpYnV0ZSB0byBiZSBzZXQgb24gdGhlIGVsZW1lbnRcIik7XG5cdFx0Y29uc3Qgb2xkRWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRpZiAoIShvbGRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbGVtZW50IHdpdGggaWQgXCIke2lkfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIG9yaWdpbmFsIEhUTUxgKTtcblx0XHRuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtbGl2ZS1wcmVzZXJ2ZVwiKTtcblx0XHRvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5zZXQoaWQsIG9sZEVsZW1lbnQpO1xuXHRcdHN5bmNBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuXHR9KTtcblx0SWRpb21vcnBoLm1vcnBoKHJvb3RGcm9tRWxlbWVudCwgcm9vdFRvRWxlbWVudCwgeyBjYWxsYmFja3M6IHtcblx0XHRiZWZvcmVOb2RlTW9ycGhlZDogKGZyb21FbCwgdG9FbCkgPT4ge1xuXHRcdFx0aWYgKCEoZnJvbUVsIGluc3RhbmNlb2YgRWxlbWVudCkgfHwgISh0b0VsIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiB0cnVlO1xuXHRcdFx0aWYgKGZyb21FbCA9PT0gcm9vdEZyb21FbGVtZW50KSByZXR1cm4gdHJ1ZTtcblx0XHRcdGlmIChmcm9tRWwuaWQgJiYgb3JpZ2luYWxFbGVtZW50c1RvUHJlc2VydmUuaGFzKGZyb21FbC5pZCkpIHtcblx0XHRcdFx0aWYgKGZyb21FbC5pZCA9PT0gdG9FbC5pZCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRjb25zdCBjbG9uZWRGcm9tRWwgPSBtYXJrRWxlbWVudEFzTmVlZGluZ1Bvc3RNb3JwaFN3YXAoZnJvbUVsLmlkLCB0cnVlKTtcblx0XHRcdFx0aWYgKCFjbG9uZWRGcm9tRWwpIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgY2xvbmVcIik7XG5cdFx0XHRcdElkaW9tb3JwaC5tb3JwaChjbG9uZWRGcm9tRWwsIHRvRWwpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZnJvbUVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9FbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZnJvbUVsLl9feCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdGlmICghd2luZG93LkFscGluZSkgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyBBbHBpbmUuanMgdGhvdWdoIHRoZSBnbG9iYWwgd2luZG93LkFscGluZSB2YXJpYWJsZS4gUGxlYXNlIG1ha2Ugc3VyZSBBbHBpbmUuanMgaXMgbG9hZGVkIGJlZm9yZSBTeW1mb255IFVYIExpdmVDb21wb25lbnQuXCIpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93LkFscGluZS5tb3JwaCAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gYWNjZXNzIEFscGluZS5qcyBtb3JwaCBmdW5jdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgQWxwaW5lLmpzIE1vcnBoIHBsdWdpbiBpcyBpbnN0YWxsZWQgYW5kIGxvYWRlZCwgc2VlIGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvbW9ycGggZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpO1xuXHRcdFx0XHRcdHdpbmRvdy5BbHBpbmUubW9ycGgoZnJvbUVsLl9feCwgdG9FbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGV4dGVybmFsTXV0YXRpb25UcmFja2VyLndhc0VsZW1lbnRBZGRlZChmcm9tRWwpKSB7XG5cdFx0XHRcdFx0ZnJvbUVsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHRvRWwpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobW9kaWZpZWRGaWVsZEVsZW1lbnRzLmluY2x1ZGVzKGZyb21FbCkpIHNldFZhbHVlT25FbGVtZW50KHRvRWwsIGdldEVsZW1lbnRWYWx1ZShmcm9tRWwpKTtcblx0XHRcdFx0aWYgKGZyb21FbCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBmcm9tRWwgIT09IGRvY3VtZW50LmJvZHkgJiYgbnVsbCAhPT0gZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudChmcm9tRWwsIGZhbHNlKSkgc2V0VmFsdWVPbkVsZW1lbnQodG9FbCwgZ2V0RWxlbWVudFZhbHVlKGZyb21FbCkpO1xuXHRcdFx0XHRjb25zdCBlbGVtZW50Q2hhbmdlcyA9IGV4dGVybmFsTXV0YXRpb25UcmFja2VyLmdldENoYW5nZWRFbGVtZW50KGZyb21FbCk7XG5cdFx0XHRcdGlmIChlbGVtZW50Q2hhbmdlcykgZWxlbWVudENoYW5nZXMuYXBwbHlUb0VsZW1lbnQodG9FbCk7XG5cdFx0XHRcdGlmIChmcm9tRWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gXCJPUFRJT05cIiAmJiBmcm9tRWwuaXNFcXVhbE5vZGUodG9FbCkpIHtcblx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVkRnJvbUVsID0gY2xvbmVIVE1MRWxlbWVudChmcm9tRWwpO1xuXHRcdFx0XHRcdG5vcm1hbGl6ZUF0dHJpYnV0ZXNGb3JDb21wYXJpc29uKG5vcm1hbGl6ZWRGcm9tRWwpO1xuXHRcdFx0XHRcdGNvbnN0IG5vcm1hbGl6ZWRUb0VsID0gY2xvbmVIVE1MRWxlbWVudCh0b0VsKTtcblx0XHRcdFx0XHRub3JtYWxpemVBdHRyaWJ1dGVzRm9yQ29tcGFyaXNvbihub3JtYWxpemVkVG9FbCk7XG5cdFx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRGcm9tRWwuaXNFcXVhbE5vZGUobm9ybWFsaXplZFRvRWwpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwuaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpIHx8IGZyb21FbC5pZCAmJiBmcm9tRWwuaWQgIT09IHRvRWwuaWQpIHtcblx0XHRcdFx0ZnJvbUVsLmlubmVySFRNTCA9IHRvRWwuaW5uZXJIVE1MO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChmcm9tRWwucGFyZW50RWxlbWVudD8uaGFzQXR0cmlidXRlKFwiZGF0YS1za2lwLW1vcnBoXCIpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIWZyb21FbC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxpdmUtaWdub3JlXCIpO1xuXHRcdH0sXG5cdFx0YmVmb3JlTm9kZVJlbW92ZWQobm9kZSkge1xuXHRcdFx0aWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIHRydWU7XG5cdFx0XHRpZiAobm9kZS5pZCAmJiBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5oYXMobm9kZS5pZCkpIHtcblx0XHRcdFx0bWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwKG5vZGUuaWQsIGZhbHNlKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIud2FzRWxlbWVudEFkZGVkKG5vZGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gIW5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1saXZlLWlnbm9yZVwiKTtcblx0XHR9XG5cdH0gfSk7XG5cdG9yaWdpbmFsRWxlbWVudElkc1RvU3dhcEFmdGVyLmZvckVhY2goKGlkKSA9PiB7XG5cdFx0Y29uc3QgbmV3RWxlbWVudCA9IHJvb3RGcm9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcblx0XHRjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnRzVG9QcmVzZXJ2ZS5nZXQoaWQpO1xuXHRcdGlmICghKG5ld0VsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIShvcmlnaW5hbEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgZWxlbWVudHMuXCIpO1xuXHRcdG5ld0VsZW1lbnQucmVwbGFjZVdpdGgob3JpZ2luYWxFbGVtZW50KTtcblx0fSk7XG59XG52YXIgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jaGFuZ2VkSXRlbXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdHRoaXMucmVtb3ZlZEl0ZW1zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRzZXRJdGVtKGl0ZW1OYW1lLCBuZXdWYWx1ZSwgcHJldmlvdXNWYWx1ZSkge1xuXHRcdGlmICh0aGlzLnJlbW92ZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHRjb25zdCByZW1vdmVkUmVjb3JkID0gdGhpcy5yZW1vdmVkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdHRoaXMucmVtb3ZlZEl0ZW1zLmRlbGV0ZShpdGVtTmFtZSk7XG5cdFx0XHRpZiAocmVtb3ZlZFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY2hhbmdlZEl0ZW1zLmhhcyhpdGVtTmFtZSkpIHtcblx0XHRcdGNvbnN0IG9yaWdpbmFsUmVjb3JkID0gdGhpcy5jaGFuZ2VkSXRlbXMuZ2V0KGl0ZW1OYW1lKTtcblx0XHRcdGlmIChvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCA9PT0gbmV3VmFsdWUpIHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuZGVsZXRlKGl0ZW1OYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jaGFuZ2VkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7XG5cdFx0XHRcdG9yaWdpbmFsOiBvcmlnaW5hbFJlY29yZC5vcmlnaW5hbCxcblx0XHRcdFx0bmV3OiBuZXdWYWx1ZVxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuY2hhbmdlZEl0ZW1zLnNldChpdGVtTmFtZSwge1xuXHRcdFx0b3JpZ2luYWw6IHByZXZpb3VzVmFsdWUsXG5cdFx0XHRuZXc6IG5ld1ZhbHVlXG5cdFx0fSk7XG5cdH1cblx0cmVtb3ZlSXRlbShpdGVtTmFtZSwgY3VycmVudFZhbHVlKSB7XG5cdFx0bGV0IHRydWVPcmlnaW5hbFZhbHVlID0gY3VycmVudFZhbHVlO1xuXHRcdGlmICh0aGlzLmNoYW5nZWRJdGVtcy5oYXMoaXRlbU5hbWUpKSB7XG5cdFx0XHR0cnVlT3JpZ2luYWxWYWx1ZSA9IHRoaXMuY2hhbmdlZEl0ZW1zLmdldChpdGVtTmFtZSkub3JpZ2luYWw7XG5cdFx0XHR0aGlzLmNoYW5nZWRJdGVtcy5kZWxldGUoaXRlbU5hbWUpO1xuXHRcdFx0aWYgKHRydWVPcmlnaW5hbFZhbHVlID09PSBudWxsKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5yZW1vdmVkSXRlbXMuaGFzKGl0ZW1OYW1lKSkgdGhpcy5yZW1vdmVkSXRlbXMuc2V0KGl0ZW1OYW1lLCB7IG9yaWdpbmFsOiB0cnVlT3JpZ2luYWxWYWx1ZSB9KTtcblx0fVxuXHRnZXRDaGFuZ2VkSXRlbXMoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5jaGFuZ2VkSXRlbXMsIChbbmFtZSwgeyBuZXc6IHZhbHVlIH1dKSA9PiAoe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlXG5cdFx0fSkpO1xuXHR9XG5cdGdldFJlbW92ZWRJdGVtcygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnJlbW92ZWRJdGVtcy5rZXlzKCkpO1xuXHR9XG5cdGlzRW1wdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbmdlZEl0ZW1zLnNpemUgPT09IDAgJiYgdGhpcy5yZW1vdmVkSXRlbXMuc2l6ZSA9PT0gMDtcblx0fVxufTtcbnZhciBFbGVtZW50Q2hhbmdlcyA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5hZGRlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMucmVtb3ZlZENsYXNzZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzID0gbmV3IENoYW5naW5nSXRlbXNUcmFja2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLmF0dHJpYnV0ZUNoYW5nZXMgPSBuZXcgQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCgpO1xuXHR9XG5cdGFkZENsYXNzKGNsYXNzTmFtZSkge1xuXHRcdGlmICghdGhpcy5yZW1vdmVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5hZGRlZENsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cdH1cblx0cmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0aWYgKCF0aGlzLmFkZGVkQ2xhc3Nlcy5kZWxldGUoY2xhc3NOYW1lKSkgdGhpcy5yZW1vdmVkQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblx0fVxuXHRhZGRTdHlsZShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5zdHlsZUNoYW5nZXMuc2V0SXRlbShzdHlsZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKTtcblx0fVxuXHRyZW1vdmVTdHlsZShzdHlsZU5hbWUsIG9yaWdpbmFsVmFsdWUpIHtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5yZW1vdmVJdGVtKHN0eWxlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0YWRkQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIG5ld1ZhbHVlLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnNldEl0ZW0oYXR0cmlidXRlTmFtZSwgbmV3VmFsdWUsIG9yaWdpbmFsVmFsdWUpO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBvcmlnaW5hbFZhbHVlKSB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLnJlbW92ZUl0ZW0oYXR0cmlidXRlTmFtZSwgb3JpZ2luYWxWYWx1ZSk7XG5cdH1cblx0Z2V0QWRkZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5hZGRlZENsYXNzZXNdO1xuXHR9XG5cdGdldFJlbW92ZWRDbGFzc2VzKCkge1xuXHRcdHJldHVybiBbLi4udGhpcy5yZW1vdmVkQ2xhc3Nlc107XG5cdH1cblx0Z2V0Q2hhbmdlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0Q2hhbmdlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0UmVtb3ZlZFN0eWxlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHlsZUNoYW5nZXMuZ2V0UmVtb3ZlZEl0ZW1zKCk7XG5cdH1cblx0Z2V0Q2hhbmdlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKTtcblx0fVxuXHRnZXRSZW1vdmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpO1xuXHR9XG5cdGFwcGx5VG9FbGVtZW50KGVsZW1lbnQpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4udGhpcy5hZGRlZENsYXNzZXMpO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi50aGlzLnJlbW92ZWRDbGFzc2VzKTtcblx0XHR0aGlzLnN0eWxlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGlmICgvIVxccyppbXBvcnRhbnQvaS50ZXN0KGNoYW5nZS52YWx1ZSkpIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY2hhbmdlLm5hbWUsIGNoYW5nZS52YWx1ZS5yZXBsYWNlKC8hXFxzKmltcG9ydGFudC9pLCBcIlwiKS50cmltKCksIFwiaW1wb3J0YW50XCIpO1xuXHRcdFx0ZWxzZSBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuc3R5bGVDaGFuZ2VzLmdldFJlbW92ZWRJdGVtcygpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZU5hbWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRDaGFuZ2VkSXRlbXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGNoYW5nZS5uYW1lLCBjaGFuZ2UudmFsdWUpO1xuXHRcdH0pO1xuXHRcdHRoaXMuYXR0cmlidXRlQ2hhbmdlcy5nZXRSZW1vdmVkSXRlbXMoKS5mb3JFYWNoKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHR9KTtcblx0fVxuXHRpc0VtcHR5KCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkQ2xhc3Nlcy5zaXplID09PSAwICYmIHRoaXMucmVtb3ZlZENsYXNzZXMuc2l6ZSA9PT0gMCAmJiB0aGlzLnN0eWxlQ2hhbmdlcy5pc0VtcHR5KCkgJiYgdGhpcy5hdHRyaWJ1dGVDaGFuZ2VzLmlzRW1wdHkoKTtcblx0fVxufTtcbnZhciBFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrKSB7XG5cdFx0dGhpcy5jaGFuZ2VkRWxlbWVudHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcblx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50ID0gMDtcblx0XHR0aGlzLmFkZGVkRWxlbWVudHMgPSBbXTtcblx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2sgPSBzaG91bGRUcmFja0NoYW5nZUNhbGxiYWNrO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMub25NdXRhdGlvbnMuYmluZCh0aGlzKSk7XG5cdH1cblx0c3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSByZXR1cm47XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRcdGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXG5cdFx0fSk7XG5cdFx0dGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cdHN0b3AoKSB7XG5cdFx0aWYgKHRoaXMuaXNTdGFydGVkKSB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0Z2V0Q2hhbmdlZEVsZW1lbnQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkgPyB0aGlzLmNoYW5nZWRFbGVtZW50cy5nZXQoZWxlbWVudCkgOiBudWxsO1xuXHR9XG5cdGdldEFkZGVkRWxlbWVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkZWRFbGVtZW50cztcblx0fVxuXHR3YXNFbGVtZW50QWRkZWQoZWxlbWVudCkge1xuXHRcdHJldHVybiB0aGlzLmFkZGVkRWxlbWVudHMuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH1cblx0aGFuZGxlUGVuZGluZ0NoYW5nZXMoKSB7XG5cdFx0dGhpcy5vbk11dGF0aW9ucyh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG5cdH1cblx0b25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG5cdFx0Y29uc3QgaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuXHRcdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50ID0gbXV0YXRpb24udGFyZ2V0O1xuXHRcdFx0aWYgKCF0aGlzLnNob3VsZFRyYWNrQ2hhbmdlQ2FsbGJhY2soZWxlbWVudCkpIGNvbnRpbnVlO1xuXHRcdFx0aWYgKHRoaXMuaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpKSBjb250aW51ZTtcblx0XHRcdGxldCBpc0NoYW5nZUluQWRkZWRFbGVtZW50ID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGFkZGVkRWxlbWVudCBvZiB0aGlzLmFkZGVkRWxlbWVudHMpIGlmIChhZGRlZEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcblx0XHRcdFx0aXNDaGFuZ2VJbkFkZGVkRWxlbWVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzQ2hhbmdlSW5BZGRlZEVsZW1lbnQpIGNvbnRpbnVlO1xuXHRcdFx0c3dpdGNoIChtdXRhdGlvbi50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJjaGlsZExpc3RcIjpcblx0XHRcdFx0XHR0aGlzLmhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImF0dHJpYnV0ZXNcIjpcblx0XHRcdFx0XHRpZiAoIWhhbmRsZWRBdHRyaWJ1dGVNdXRhdGlvbnMuaGFzKGVsZW1lbnQpKSBoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbXSk7XG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLmdldChlbGVtZW50KS5pbmNsdWRlcyhtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbik7XG5cdFx0XHRcdFx0XHRoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zLnNldChlbGVtZW50LCBbLi4uaGFuZGxlZEF0dHJpYnV0ZU11dGF0aW9ucy5nZXQoZWxlbWVudCksIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNoaWxkTGlzdE11dGF0aW9uKG11dGF0aW9uKSB7XG5cdFx0bXV0YXRpb24uYWRkZWROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG5cdFx0XHRpZiAoIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybjtcblx0XHRcdGlmICh0aGlzLnJlbW92ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZWRFbGVtZW50cy5zcGxpY2UodGhpcy5yZW1vdmVkRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmlzRWxlbWVudEFkZGVkQnlUcmFuc2xhdGlvbihub2RlKSkgcmV0dXJuO1xuXHRcdFx0dGhpcy5hZGRlZEVsZW1lbnRzLnB1c2gobm9kZSk7XG5cdFx0fSk7XG5cdFx0bXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcblx0XHRcdGlmICghKG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMuYWRkZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuXHRcdFx0XHR0aGlzLmFkZGVkRWxlbWVudHMuc3BsaWNlKHRoaXMuYWRkZWRFbGVtZW50cy5pbmRleE9mKG5vZGUpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW1vdmVkRWxlbWVudHMucHVzaChub2RlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi50YXJnZXQ7XG5cdFx0aWYgKCF0aGlzLmNoYW5nZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcblx0XHRcdHRoaXMuY2hhbmdlZEVsZW1lbnRzLnNldChlbGVtZW50LCBuZXcgRWxlbWVudENoYW5nZXMoKSk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50Kys7XG5cdFx0fVxuXHRcdGNvbnN0IGNoYW5nZWRFbGVtZW50ID0gdGhpcy5jaGFuZ2VkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuXHRcdHN3aXRjaCAobXV0YXRpb24uYXR0cmlidXRlTmFtZSkge1xuXHRcdFx0Y2FzZSBcImNsYXNzXCI6XG5cdFx0XHRcdHRoaXMuaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJzdHlsZVwiOlxuXHRcdFx0XHR0aGlzLmhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGNoYW5nZWRFbGVtZW50KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aGlzLmhhbmRsZUdlbmVyaWNBdHRyaWJ1dGVNdXRhdGlvbihtdXRhdGlvbiwgY2hhbmdlZEVsZW1lbnQpO1xuXHRcdH1cblx0XHRpZiAoY2hhbmdlZEVsZW1lbnQuaXNFbXB0eSgpKSB7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG5cdFx0XHR0aGlzLmNoYW5nZWRFbGVtZW50c0NvdW50LS07XG5cdFx0fVxuXHR9XG5cdGhhbmRsZUNsYXNzQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlcyA9IChtdXRhdGlvbi5vbGRWYWx1ZSB8fCBcIlwiKS5tYXRjaCgvKFxcUyspL2d1KSB8fCBbXTtcblx0XHRjb25zdCBuZXdWYWx1ZXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2xhc3NMaXN0KTtcblx0XHRjb25zdCBhZGRlZFZhbHVlcyA9IG5ld1ZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiAhcHJldmlvdXNWYWx1ZXMuaW5jbHVkZXModmFsdWUpKTtcblx0XHRjb25zdCByZW1vdmVkVmFsdWVzID0gcHJldmlvdXNWYWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gIW5ld1ZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpO1xuXHRcdGFkZGVkVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRDbGFzcyh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0cmVtb3ZlZFZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuXHRcdFx0ZWxlbWVudENoYW5nZXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cdGhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRjb25zdCBwcmV2aW91c1ZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWUgfHwgXCJcIjtcblx0XHRjb25zdCBwcmV2aW91c1N0eWxlcyA9IHRoaXMuZXh0cmFjdFN0eWxlcyhwcmV2aW91c1ZhbHVlKTtcblx0XHRjb25zdCBuZXdWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcblx0XHRjb25zdCBuZXdTdHlsZXMgPSB0aGlzLmV4dHJhY3RTdHlsZXMobmV3VmFsdWUpO1xuXHRcdGNvbnN0IGFkZGVkT3JDaGFuZ2VkU3R5bGVzID0gT2JqZWN0LmtleXMobmV3U3R5bGVzKS5maWx0ZXIoKGtleSkgPT4gcHJldmlvdXNTdHlsZXNba2V5XSA9PT0gdm9pZCAwIHx8IHByZXZpb3VzU3R5bGVzW2tleV0gIT09IG5ld1N0eWxlc1trZXldKTtcblx0XHRjb25zdCByZW1vdmVkU3R5bGVzID0gT2JqZWN0LmtleXMocHJldmlvdXNTdHlsZXMpLmZpbHRlcigoa2V5KSA9PiAhbmV3U3R5bGVzW2tleV0pO1xuXHRcdGFkZGVkT3JDaGFuZ2VkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5hZGRTdHlsZShzdHlsZSwgbmV3U3R5bGVzW3N0eWxlXSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdID09PSB2b2lkIDAgPyBudWxsIDogcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0XHRyZW1vdmVkU3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG5cdFx0XHRlbGVtZW50Q2hhbmdlcy5yZW1vdmVTdHlsZShzdHlsZSwgcHJldmlvdXNTdHlsZXNbc3R5bGVdKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24obXV0YXRpb24sIGVsZW1lbnRDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgYXR0cmlidXRlTmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWU7XG5cdFx0Y29uc3QgZWxlbWVudCA9IG11dGF0aW9uLnRhcmdldDtcblx0XHRsZXQgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZTtcblx0XHRsZXQgbmV3VmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcblx0XHRpZiAob2xkVmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG9sZFZhbHVlID0gXCJcIjtcblx0XHRpZiAobmV3VmFsdWUgPT09IGF0dHJpYnV0ZU5hbWUpIG5ld1ZhbHVlID0gXCJcIjtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpKSB7XG5cdFx0XHRpZiAob2xkVmFsdWUgPT09IG51bGwpIHJldHVybjtcblx0XHRcdGVsZW1lbnRDaGFuZ2VzLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBtdXRhdGlvbi5vbGRWYWx1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChuZXdWYWx1ZSA9PT0gb2xkVmFsdWUpIHJldHVybjtcblx0XHRlbGVtZW50Q2hhbmdlcy5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSksIG11dGF0aW9uLm9sZFZhbHVlKTtcblx0fVxuXHRleHRyYWN0U3R5bGVzKHN0eWxlcykge1xuXHRcdGNvbnN0IHN0eWxlT2JqZWN0ID0ge307XG5cdFx0c3R5bGVzLnNwbGl0KFwiO1wiKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xuXHRcdFx0Y29uc3QgcGFydHMgPSBzdHlsZS5zcGxpdChcIjpcIik7XG5cdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSAxKSByZXR1cm47XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHBhcnRzWzBdLnRyaW0oKTtcblx0XHRcdHN0eWxlT2JqZWN0W3Byb3BlcnR5XSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oXCI6XCIpLnRyaW0oKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gc3R5bGVPYmplY3Q7XG5cdH1cblx0aXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSBcIkZPTlRcIiAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpID09PSBcInZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1wiO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQsIG1vZGVsRWxlbWVudFJlc29sdmVyKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMgPSBbe1xuXHRcdFx0ZXZlbnQ6IFwiaW5wdXRcIixcblx0XHRcdGNhbGxiYWNrOiAoZXZlbnQpID0+IHRoaXMuaGFuZGxlSW5wdXRFdmVudChldmVudClcblx0XHR9XTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0XHR0aGlzLm1vZGVsRWxlbWVudFJlc29sdmVyID0gbW9kZWxFbGVtZW50UmVzb2x2ZXI7XG5cdFx0dGhpcy51bnN5bmNlZElucHV0cyA9IG5ldyBVbnN5bmNlZElucHV0Q29udGFpbmVyKCk7XG5cdH1cblx0YWN0aXZhdGUoKSB7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdH1cblx0ZGVhY3RpdmF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzLm1hcmtNb2RlbEFzU3luY2VkKG1vZGVsTmFtZSk7XG5cdH1cblx0aGFuZGxlSW5wdXRFdmVudChldmVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRpZiAoIXRhcmdldCkgcmV0dXJuO1xuXHRcdHRoaXMudXBkYXRlTW9kZWxGcm9tRWxlbWVudCh0YXJnZXQpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgdGhpcy5jb21wb25lbnQpKSByZXR1cm47XG5cdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHVwZGF0ZSBtb2RlbCBmb3Igbm9uIEhUTUxFbGVtZW50XCIpO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IHRoaXMubW9kZWxFbGVtZW50UmVzb2x2ZXIuZ2V0TW9kZWxOYW1lKGVsZW1lbnQpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMuYWRkKGVsZW1lbnQsIG1vZGVsTmFtZSk7XG5cdH1cblx0Z2V0VW5zeW5jZWRJbnB1dHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMudW5zeW5jZWRJbnB1dHMuYWxsVW5zeW5jZWRJbnB1dHMoKTtcblx0fVxuXHRnZXRVbnN5bmNlZE1vZGVscygpIHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnVuc3luY2VkSW5wdXRzLmdldFVuc3luY2VkTW9kZWxOYW1lcygpKTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHMucmVzZXRVbnN5bmNlZEZpZWxkcygpO1xuXHR9XG59O1xudmFyIFVuc3luY2VkSW5wdXRDb250YWluZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcyA9IFtdO1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzID0gW107XG5cdFx0dGhpcy51bnN5bmNlZE1vZGVsRmllbGRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0fVxuXHRhZGQoZWxlbWVudCwgbW9kZWxOYW1lID0gbnVsbCkge1xuXHRcdGlmIChtb2RlbE5hbWUpIHtcblx0XHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5zZXQobW9kZWxOYW1lLCBlbGVtZW50KTtcblx0XHRcdGlmICghdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMuaW5jbHVkZXMobW9kZWxOYW1lKSkgdGhpcy51bnN5bmNlZE1vZGVsTmFtZXMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnVuc3luY2VkTm9uTW9kZWxGaWVsZHMucHVzaChlbGVtZW50KTtcblx0fVxuXHRyZXNldFVuc3luY2VkRmllbGRzKCkge1xuXHRcdHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluY2x1ZGVzKGtleSkpIHRoaXMudW5zeW5jZWRNb2RlbEZpZWxkcy5kZWxldGUoa2V5KTtcblx0XHR9KTtcblx0fVxuXHRhbGxVbnN5bmNlZElucHV0cygpIHtcblx0XHRyZXR1cm4gWy4uLnRoaXMudW5zeW5jZWROb25Nb2RlbEZpZWxkcywgLi4udGhpcy51bnN5bmNlZE1vZGVsRmllbGRzLnZhbHVlcygpXTtcblx0fVxuXHRtYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpIHtcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudW5zeW5jZWRNb2RlbE5hbWVzLmluZGV4T2YobW9kZWxOYW1lKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB0aGlzLnVuc3luY2VkTW9kZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxOYW1lcygpIHtcblx0XHRyZXR1cm4gdGhpcy51bnN5bmNlZE1vZGVsTmFtZXM7XG5cdH1cbn07XG5mdW5jdGlvbiBnZXREZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpIHtcblx0Y29uc3QgeyBjdXJyZW50TGV2ZWxEYXRhLCBmaW5hbEtleSB9ID0gcGFyc2VEZWVwRGF0YShkYXRhLCBwcm9wZXJ0eVBhdGgpO1xuXHRpZiAoY3VycmVudExldmVsRGF0YSA9PT0gdm9pZCAwKSByZXR1cm47XG5cdHJldHVybiBjdXJyZW50TGV2ZWxEYXRhW2ZpbmFsS2V5XTtcbn1cbmNvbnN0IHBhcnNlRGVlcERhdGEgPSAoZGF0YSwgcHJvcGVydHlQYXRoKSA9PiB7XG5cdGNvbnN0IGZpbmFsRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRsZXQgY3VycmVudExldmVsRGF0YSA9IGZpbmFsRGF0YTtcblx0Y29uc3QgcGFydHMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoXCIuXCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykgY3VycmVudExldmVsRGF0YSA9IGN1cnJlbnRMZXZlbERhdGFbcGFydHNbaV1dO1xuXHRjb25zdCBmaW5hbEtleSA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdGN1cnJlbnRMZXZlbERhdGEsXG5cdFx0ZmluYWxEYXRhLFxuXHRcdGZpbmFsS2V5LFxuXHRcdHBhcnRzXG5cdH07XG59O1xudmFyIFZhbHVlU3RvcmVfZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0ge307XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0XHR0aGlzLnVwZGF0ZWRQcm9wc0Zyb21QYXJlbnQgPSB7fTtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdH1cblx0Z2V0KG5hbWUpIHtcblx0XHRjb25zdCBub3JtYWxpemVkTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShuYW1lKTtcblx0XHRpZiAodGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXSAhPT0gdm9pZCAwKSByZXR1cm4gdGhpcy5kaXJ0eVByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRpZiAodGhpcy5wZW5kaW5nUHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnBlbmRpbmdQcm9wc1tub3JtYWxpemVkTmFtZV07XG5cdFx0aWYgKHRoaXMucHJvcHNbbm9ybWFsaXplZE5hbWVdICE9PSB2b2lkIDApIHJldHVybiB0aGlzLnByb3BzW25vcm1hbGl6ZWROYW1lXTtcblx0XHRyZXR1cm4gZ2V0RGVlcERhdGEodGhpcy5wcm9wcywgbm9ybWFsaXplZE5hbWUpO1xuXHR9XG5cdGhhcyhuYW1lKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0KG5hbWUpICE9PSB2b2lkIDA7XG5cdH1cblx0c2V0KG5hbWUsIHZhbHVlKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemVNb2RlbE5hbWUobmFtZSk7XG5cdFx0aWYgKHRoaXMuZ2V0KG5vcm1hbGl6ZWROYW1lKSA9PT0gdmFsdWUpIHJldHVybiBmYWxzZTtcblx0XHR0aGlzLmRpcnR5UHJvcHNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Z2V0T3JpZ2luYWxQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLnByb3BzIH07XG5cdH1cblx0Z2V0RGlydHlQcm9wcygpIHtcblx0XHRyZXR1cm4geyAuLi50aGlzLmRpcnR5UHJvcHMgfTtcblx0fVxuXHRnZXRVcGRhdGVkUHJvcHNGcm9tUGFyZW50KCkge1xuXHRcdHJldHVybiB7IC4uLnRoaXMudXBkYXRlZFByb3BzRnJvbVBhcmVudCB9O1xuXHR9XG5cdGZsdXNoRGlydHlQcm9wc1RvUGVuZGluZygpIHtcblx0XHR0aGlzLnBlbmRpbmdQcm9wcyA9IHsgLi4udGhpcy5kaXJ0eVByb3BzIH07XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge307XG5cdH1cblx0cmVpbml0aWFsaXplQWxsUHJvcHMocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0ge307XG5cdFx0dGhpcy5wZW5kaW5nUHJvcHMgPSB7fTtcblx0fVxuXHRwdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKSB7XG5cdFx0dGhpcy5kaXJ0eVByb3BzID0ge1xuXHRcdFx0Li4udGhpcy5wZW5kaW5nUHJvcHMsXG5cdFx0XHQuLi50aGlzLmRpcnR5UHJvcHNcblx0XHR9O1xuXHRcdHRoaXMucGVuZGluZ1Byb3BzID0ge307XG5cdH1cblx0c3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQocHJvcHMpIHtcblx0XHRsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkgaWYgKHRoaXMuZ2V0KGtleSkgIT09IHZhbHVlKSBjaGFuZ2VkID0gdHJ1ZTtcblx0XHRpZiAoY2hhbmdlZCkgdGhpcy51cGRhdGVkUHJvcHNGcm9tUGFyZW50ID0gcHJvcHM7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cbn07XG52YXIgQ29tcG9uZW50ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBwcm9wcywgbGlzdGVuZXJzLCBpZCwgYmFja2VuZCwgZWxlbWVudERyaXZlcikge1xuXHRcdHRoaXMuZmluZ2VycHJpbnQgPSBcIlwiO1xuXHRcdHRoaXMuZGVmYXVsdERlYm91bmNlID0gMTUwO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSBudWxsO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnBlbmRpbmdGaWxlcyA9IHt9O1xuXHRcdHRoaXMuaXNSZXF1ZXN0UGVuZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG5cdFx0dGhpcy5lbGVtZW50RHJpdmVyID0gZWxlbWVudERyaXZlcjtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuXHRcdGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIuZXZlbnQpKSB0aGlzLmxpc3RlbmVycy5zZXQobGlzdGVuZXIuZXZlbnQsIFtdKTtcblx0XHRcdHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lci5ldmVudCk/LnB1c2gobGlzdGVuZXIuYWN0aW9uKTtcblx0XHR9KTtcblx0XHR0aGlzLnZhbHVlU3RvcmUgPSBuZXcgVmFsdWVTdG9yZV9kZWZhdWx0KHByb3BzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlciA9IG5ldyBVbnN5bmNlZElucHV0c1RyYWNrZXJfZGVmYXVsdCh0aGlzLCBlbGVtZW50RHJpdmVyKTtcblx0XHR0aGlzLmhvb2tzID0gbmV3IEhvb2tNYW5hZ2VyX2RlZmF1bHQoKTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIgPSBuZXcgRXh0ZXJuYWxNdXRhdGlvblRyYWNrZXJfZGVmYXVsdCh0aGlzLmVsZW1lbnQsIChlbGVtZW50KSA9PiBlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudChlbGVtZW50LCB0aGlzKSk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdGFydCgpO1xuXHR9XG5cdGFkZFBsdWdpbihwbHVnaW4pIHtcblx0XHRwbHVnaW4uYXR0YWNoVG9Db21wb25lbnQodGhpcyk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHRyZWdpc3RlckNvbXBvbmVudCh0aGlzKTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwiY29ubmVjdFwiLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5hY3RpdmF0ZSgpO1xuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuc3RhcnQoKTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHVucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImRpc2Nvbm5lY3RcIiwgdGhpcyk7XG5cdFx0dGhpcy5jbGVhclJlcXVlc3REZWJvdW5jZVRpbWVvdXQoKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5kZWFjdGl2YXRlKCk7XG5cdFx0dGhpcy5leHRlcm5hbE11dGF0aW9uVHJhY2tlci5zdG9wKCk7XG5cdH1cblx0b24oaG9va05hbWUsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5ob29rcy5yZWdpc3Rlcihob29rTmFtZSwgY2FsbGJhY2spO1xuXHR9XG5cdG9mZihob29rTmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmhvb2tzLnVucmVnaXN0ZXIoaG9va05hbWUsIGNhbGxiYWNrKTtcblx0fVxuXHRzZXQobW9kZWwsIHZhbHVlLCByZVJlbmRlciA9IGZhbHNlLCBkZWJvdW5jZSA9IGZhbHNlKSB7XG5cdFx0Y29uc3QgcHJvbWlzZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlO1xuXHRcdGNvbnN0IG1vZGVsTmFtZSA9IG5vcm1hbGl6ZU1vZGVsTmFtZShtb2RlbCk7XG5cdFx0aWYgKCF0aGlzLnZhbHVlU3RvcmUuaGFzKG1vZGVsTmFtZSkpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb2RlbCBuYW1lIFwiJHttb2RlbH1cIi5gKTtcblx0XHRjb25zdCBpc0NoYW5nZWQgPSB0aGlzLnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgdmFsdWUpO1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJtb2RlbDpzZXRcIiwgbW9kZWwsIHZhbHVlLCB0aGlzKTtcblx0XHR0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5tYXJrTW9kZWxBc1N5bmNlZChtb2RlbE5hbWUpO1xuXHRcdGlmIChyZVJlbmRlciAmJiBpc0NoYW5nZWQpIHRoaXMuZGVib3VuY2VkU3RhcnRSZXF1ZXN0KGRlYm91bmNlKTtcblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRnZXREYXRhKG1vZGVsKSB7XG5cdFx0Y29uc3QgbW9kZWxOYW1lID0gbm9ybWFsaXplTW9kZWxOYW1lKG1vZGVsKTtcblx0XHRpZiAoIXRoaXMudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vZGVsIFwiJHttb2RlbH1cIi5gKTtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHR9XG5cdGFjdGlvbihuYW1lLCBhcmdzID0ge30sIGRlYm91bmNlID0gZmFsc2UpIHtcblx0XHRjb25zdCBwcm9taXNlID0gdGhpcy5uZXh0UmVxdWVzdFByb21pc2U7XG5cdFx0dGhpcy5wZW5kaW5nQWN0aW9ucy5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHRhcmdzXG5cdFx0fSk7XG5cdFx0dGhpcy5kZWJvdW5jZWRTdGFydFJlcXVlc3QoZGVib3VuY2UpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGZpbGVzKGtleSwgaW5wdXQpIHtcblx0XHR0aGlzLnBlbmRpbmdGaWxlc1trZXldID0gaW5wdXQ7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHByb21pc2UgPSB0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZTtcblx0XHR0aGlzLnRyeVN0YXJ0aW5nUmVxdWVzdCgpO1xuXHRcdHJldHVybiBwcm9taXNlO1xuXHR9XG5cdGdldFVuc3luY2VkTW9kZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZE1vZGVscygpO1xuXHR9XG5cdGVtaXQobmFtZSwgZGF0YSwgb25seU1hdGNoaW5nQ29tcG9uZW50c05hbWVkID0gbnVsbCkge1xuXHRcdHRoaXMucGVyZm9ybUVtaXQobmFtZSwgZGF0YSwgZmFsc2UsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFVwKG5hbWUsIGRhdGEsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCA9IG51bGwpIHtcblx0XHR0aGlzLnBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIHRydWUsIG9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCk7XG5cdH1cblx0ZW1pdFNlbGYobmFtZSwgZGF0YSkge1xuXHRcdHRoaXMuZG9FbWl0KG5hbWUsIGRhdGEpO1xuXHR9XG5cdHBlcmZvcm1FbWl0KG5hbWUsIGRhdGEsIGVtaXRVcCwgbWF0Y2hpbmdOYW1lKSB7XG5cdFx0ZmluZENvbXBvbmVudHModGhpcywgZW1pdFVwLCBtYXRjaGluZ05hbWUpLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuXHRcdFx0Y29tcG9uZW50LmRvRW1pdChuYW1lLCBkYXRhKTtcblx0XHR9KTtcblx0fVxuXHRkb0VtaXQobmFtZSwgZGF0YSkge1xuXHRcdGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKG5hbWUpKSByZXR1cm47XG5cdFx0KHRoaXMubGlzdGVuZXJzLmdldChuYW1lKSB8fCBbXSkuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGlvbihhY3Rpb24sIGRhdGEsIDEpO1xuXHRcdH0pO1xuXHR9XG5cdGlzVHVyYm9FbmFibGVkKCkge1xuXHRcdHJldHVybiB0eXBlb2YgVHVyYm8gIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudC5jbG9zZXN0KFwiW2RhdGEtdHVyYm89XFxcImZhbHNlXFxcIl1cIik7XG5cdH1cblx0dHJ5U3RhcnRpbmdSZXF1ZXN0KCkge1xuXHRcdGlmICghdGhpcy5iYWNrZW5kUmVxdWVzdCkge1xuXHRcdFx0dGhpcy5wZXJmb3JtUmVxdWVzdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlzUmVxdWVzdFBlbmRpbmcgPSB0cnVlO1xuXHR9XG5cdHBlcmZvcm1SZXF1ZXN0KCkge1xuXHRcdGNvbnN0IHRoaXNQcm9taXNlUmVzb2x2ZSA9IHRoaXMubmV4dFJlcXVlc3RQcm9taXNlUmVzb2x2ZTtcblx0XHR0aGlzLnJlc2V0UHJvbWlzZSgpO1xuXHRcdHRoaXMudW5zeW5jZWRJbnB1dHNUcmFja2VyLnJlc2V0VW5zeW5jZWRGaWVsZHMoKTtcblx0XHRjb25zdCBmaWxlc1RvU2VuZCA9IHt9O1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucGVuZGluZ0ZpbGVzKSkgaWYgKHZhbHVlLmZpbGVzKSBmaWxlc1RvU2VuZFtrZXldID0gdmFsdWUuZmlsZXM7XG5cdFx0Y29uc3QgcmVxdWVzdENvbmZpZyA9IHtcblx0XHRcdHByb3BzOiB0aGlzLnZhbHVlU3RvcmUuZ2V0T3JpZ2luYWxQcm9wcygpLFxuXHRcdFx0YWN0aW9uczogdGhpcy5wZW5kaW5nQWN0aW9ucyxcblx0XHRcdHVwZGF0ZWQ6IHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCksXG5cdFx0XHRjaGlsZHJlbjoge30sXG5cdFx0XHR1cGRhdGVkUHJvcHNGcm9tUGFyZW50OiB0aGlzLnZhbHVlU3RvcmUuZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCgpLFxuXHRcdFx0ZmlsZXM6IGZpbGVzVG9TZW5kXG5cdFx0fTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVxdWVzdDpzdGFydGVkXCIsIHJlcXVlc3RDb25maWcpO1xuXHRcdHRoaXMuYmFja2VuZFJlcXVlc3QgPSB0aGlzLmJhY2tlbmQubWFrZVJlcXVlc3QocmVxdWVzdENvbmZpZy5wcm9wcywgcmVxdWVzdENvbmZpZy5hY3Rpb25zLCByZXF1ZXN0Q29uZmlnLnVwZGF0ZWQsIHJlcXVlc3RDb25maWcuY2hpbGRyZW4sIHJlcXVlc3RDb25maWcudXBkYXRlZFByb3BzRnJvbVBhcmVudCwgcmVxdWVzdENvbmZpZy5maWxlcyk7XG5cdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCB0aGlzLmVsZW1lbnQsIHRoaXMuYmFja2VuZFJlcXVlc3QpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvbnMgPSBbXTtcblx0XHR0aGlzLnZhbHVlU3RvcmUuZmx1c2hEaXJ0eVByb3BzVG9QZW5kaW5nKCk7XG5cdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5iYWNrZW5kUmVxdWVzdC5wcm9taXNlLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zdCBiYWNrZW5kUmVzcG9uc2UgPSBuZXcgQmFja2VuZFJlc3BvbnNlX2RlZmF1bHQocmVzcG9uc2UpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IGJhY2tlbmRSZXNwb25zZS5nZXRCb2R5KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGlucHV0IG9mIE9iamVjdC52YWx1ZXModGhpcy5wZW5kaW5nRmlsZXMpKSBpbnB1dC52YWx1ZSA9IFwiXCI7XG5cdFx0XHRjb25zdCBoZWFkZXJzID0gYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnM7XG5cdFx0XHRpZiAoIWhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPy5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL3ZuZC5saXZlLWNvbXBvbmVudCtodG1sXCIpICYmICFoZWFkZXJzLmdldChcIlgtTGl2ZS1SZWRpcmVjdFwiKSkge1xuXHRcdFx0XHRjb25zdCBjb250cm9scyA9IHsgZGlzcGxheUVycm9yOiB0cnVlIH07XG5cdFx0XHRcdHRoaXMudmFsdWVTdG9yZS5wdXNoUGVuZGluZ1Byb3BzQmFja1RvRGlydHkoKTtcblx0XHRcdFx0dGhpcy5ob29rcy50cmlnZ2VySG9vayhcInJlc3BvbnNlOmVycm9yXCIsIGJhY2tlbmRSZXNwb25zZSwgY29udHJvbHMpO1xuXHRcdFx0XHRpZiAoY29udHJvbHMuZGlzcGxheUVycm9yKSB0aGlzLnJlbmRlckVycm9yKGh0bWwpO1xuXHRcdFx0XHR0aGlzLmJhY2tlbmRSZXF1ZXN0ID0gbnVsbDtcblx0XHRcdFx0dGhpc1Byb21pc2VSZXNvbHZlKGJhY2tlbmRSZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpdmVVcmwgPSBiYWNrZW5kUmVzcG9uc2UuZ2V0TGl2ZVVybCgpO1xuXHRcdFx0aWYgKGxpdmVVcmwpIGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3Rvcnkuc3RhdGUsIFwiXCIsIG5ldyBVUkwobGl2ZVVybCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSk7XG5cdFx0XHR0aGlzLnByb2Nlc3NSZXJlbmRlcihodG1sLCBiYWNrZW5kUmVzcG9uc2UpO1xuXHRcdFx0dGhpcy5iYWNrZW5kUmVxdWVzdCA9IG51bGw7XG5cdFx0XHR0aGlzUHJvbWlzZVJlc29sdmUoYmFja2VuZFJlc3BvbnNlKTtcblx0XHRcdGlmICh0aGlzLmlzUmVxdWVzdFBlbmRpbmcpIHtcblx0XHRcdFx0dGhpcy5pc1JlcXVlc3RQZW5kaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMucGVyZm9ybVJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9KTtcblx0fVxuXHRwcm9jZXNzUmVyZW5kZXIoaHRtbCwgYmFja2VuZFJlc3BvbnNlKSB7XG5cdFx0Y29uc3QgY29udHJvbHMgPSB7IHNob3VsZFJlbmRlcjogdHJ1ZSB9O1xuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJyZW5kZXI6c3RhcnRlZFwiLCBodG1sLCBiYWNrZW5kUmVzcG9uc2UsIGNvbnRyb2xzKTtcblx0XHRpZiAoIWNvbnRyb2xzLnNob3VsZFJlbmRlcikgcmV0dXJuO1xuXHRcdGlmIChiYWNrZW5kUmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKSkge1xuXHRcdFx0aWYgKHRoaXMuaXNUdXJib0VuYWJsZWQoKSkgVHVyYm8udmlzaXQoYmFja2VuZFJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIikpO1xuXHRcdFx0ZWxzZSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGJhY2tlbmRSZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpIHx8IFwiXCI7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaG9va3MudHJpZ2dlckhvb2soXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIHRoaXMuZWxlbWVudCk7XG5cdFx0Y29uc3QgbW9kaWZpZWRNb2RlbFZhbHVlcyA9IHt9O1xuXHRcdE9iamVjdC5rZXlzKHRoaXMudmFsdWVTdG9yZS5nZXREaXJ0eVByb3BzKCkpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0bW9kaWZpZWRNb2RlbFZhbHVlc1ttb2RlbE5hbWVdID0gdGhpcy52YWx1ZVN0b3JlLmdldChtb2RlbE5hbWUpO1xuXHRcdH0pO1xuXHRcdGxldCBuZXdFbGVtZW50O1xuXHRcdHRyeSB7XG5cdFx0XHRuZXdFbGVtZW50ID0gaHRtbFRvRWxlbWVudChodG1sKTtcblx0XHRcdGlmICghbmV3RWxlbWVudC5tYXRjaGVzKFwiW2RhdGEtY29udHJvbGxlcn49bGl2ZV1cIikpIHRocm93IG5ldyBFcnJvcihcIkEgbGl2ZSBjb21wb25lbnQgdGVtcGxhdGUgbXVzdCBjb250YWluIGEgc2luZ2xlIHJvb3QgY29udHJvbGxlciBlbGVtZW50LlwiKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSAnJHt0aGlzLm5hbWV9JyBjb21wb25lbnQgSFRNTCByZXR1cm5lZDpgLCB7IGlkOiB0aGlzLmlkIH0pO1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXHRcdHRoaXMuZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIuaGFuZGxlUGVuZGluZ0NoYW5nZXMoKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0b3AoKTtcblx0XHRleGVjdXRlTW9ycGhkb20odGhpcy5lbGVtZW50LCBuZXdFbGVtZW50LCB0aGlzLnVuc3luY2VkSW5wdXRzVHJhY2tlci5nZXRVbnN5bmNlZElucHV0cygpLCAoZWxlbWVudCkgPT4gZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCB0aGlzLnZhbHVlU3RvcmUpLCB0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyKTtcblx0XHR0aGlzLmV4dGVybmFsTXV0YXRpb25UcmFja2VyLnN0YXJ0KCk7XG5cdFx0Y29uc3QgbmV3UHJvcHMgPSB0aGlzLmVsZW1lbnREcml2ZXIuZ2V0Q29tcG9uZW50UHJvcHMoKTtcblx0XHR0aGlzLnZhbHVlU3RvcmUucmVpbml0aWFsaXplQWxsUHJvcHMobmV3UHJvcHMpO1xuXHRcdGNvbnN0IGV2ZW50c1RvRW1pdCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRFdmVudHNUb0VtaXQoKTtcblx0XHRjb25zdCBicm93c2VyRXZlbnRzVG9EaXNwYXRjaCA9IHRoaXMuZWxlbWVudERyaXZlci5nZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpO1xuXHRcdE9iamVjdC5rZXlzKG1vZGlmaWVkTW9kZWxWYWx1ZXMpLmZvckVhY2goKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZVN0b3JlLnNldChtb2RlbE5hbWUsIG1vZGlmaWVkTW9kZWxWYWx1ZXNbbW9kZWxOYW1lXSk7XG5cdFx0fSk7XG5cdFx0ZXZlbnRzVG9FbWl0LmZvckVhY2goKHsgZXZlbnQsIGRhdGEsIHRhcmdldCwgY29tcG9uZW50TmFtZSB9KSA9PiB7XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInVwXCIpIHtcblx0XHRcdFx0dGhpcy5lbWl0VXAoZXZlbnQsIGRhdGEsIGNvbXBvbmVudE5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGFyZ2V0ID09PSBcInNlbGZcIikge1xuXHRcdFx0XHR0aGlzLmVtaXRTZWxmKGV2ZW50LCBkYXRhKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbWl0KGV2ZW50LCBkYXRhLCBjb21wb25lbnROYW1lKTtcblx0XHR9KTtcblx0XHRicm93c2VyRXZlbnRzVG9EaXNwYXRjaC5mb3JFYWNoKCh7IGV2ZW50LCBwYXlsb2FkIH0pID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudCwge1xuXHRcdFx0XHRkZXRhaWw6IHBheWxvYWQsXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9KTtcblx0XHR0aGlzLmhvb2tzLnRyaWdnZXJIb29rKFwicmVuZGVyOmZpbmlzaGVkXCIsIHRoaXMpO1xuXHR9XG5cdGNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSB7XG5cdFx0aWYgKGRlYm91bmNlID09PSB0cnVlKSByZXR1cm4gdGhpcy5kZWZhdWx0RGVib3VuY2U7XG5cdFx0aWYgKGRlYm91bmNlID09PSBmYWxzZSkgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIGRlYm91bmNlO1xuXHR9XG5cdGNsZWFyUmVxdWVzdERlYm91bmNlVGltZW91dCgpIHtcblx0XHRpZiAodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0KTtcblx0XHRcdHRoaXMucmVxdWVzdERlYm91bmNlVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGRlYm91bmNlZFN0YXJ0UmVxdWVzdChkZWJvdW5jZSkge1xuXHRcdHRoaXMuY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0KCk7XG5cdFx0dGhpcy5yZXF1ZXN0RGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LCB0aGlzLmNhbGN1bGF0ZURlYm91bmNlKGRlYm91bmNlKSk7XG5cdH1cblx0cmVuZGVyRXJyb3IoaHRtbCkge1xuXHRcdGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS1jb21wb25lbnQtZXJyb3JcIik7XG5cdFx0aWYgKG1vZGFsKSBtb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGVsc2Uge1xuXHRcdFx0bW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bW9kYWwuaWQgPSBcImxpdmUtY29tcG9uZW50LWVycm9yXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5wYWRkaW5nID0gXCI1MHB4XCI7XG5cdFx0XHRtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgLjUpXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS56SW5kZXggPSBcIjEwMDAwMFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5cdFx0XHRtb2RhbC5zdHlsZS50b3AgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcblx0XHRcdG1vZGFsLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUucmlnaHQgPSBcIjBweFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0bW9kYWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG5cdFx0fVxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdFx0aWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG5cdFx0aWZyYW1lLnN0eWxlLmZsZXhHcm93ID0gXCIxXCI7XG5cdFx0bW9kYWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcblx0XHRkb2N1bWVudC5ib2R5LnByZXBlbmQobW9kYWwpO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGlmIChpZnJhbWUuY29udGVudFdpbmRvdykge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub3BlbigpO1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5jbG9zZSgpO1xuXHRcdH1cblx0XHRjb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG5cdFx0XHRpZiAobW9kYWwpIG1vZGFsLm91dGVySFRNTCA9IFwiXCI7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG5cdFx0fTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChtb2RhbCkpO1xuXHRcdG1vZGFsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcblx0XHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBjbG9zZU1vZGFsKG1vZGFsKTtcblx0XHR9KTtcblx0XHRtb2RhbC5mb2N1cygpO1xuXHR9XG5cdHJlc2V0UHJvbWlzZSgpIHtcblx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHR0aGlzLm5leHRSZXF1ZXN0UHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuXHRcdH0pO1xuXHR9XG5cdF91cGRhdGVGcm9tUGFyZW50UHJvcHMocHJvcHMpIHtcblx0XHRpZiAodGhpcy52YWx1ZVN0b3JlLnN0b3JlTmV3UHJvcHNGcm9tUGFyZW50KHByb3BzKSkgdGhpcy5yZW5kZXIoKTtcblx0fVxufTtcbmZ1bmN0aW9uIHByb3hpZnlDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdHJldHVybiBuZXcgUHJveHkoY29tcG9uZW50LCB7XG5cdFx0Z2V0KGNvbXBvbmVudCwgcHJvcCkge1xuXHRcdFx0aWYgKHByb3AgaW4gY29tcG9uZW50IHx8IHR5cGVvZiBwcm9wICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgY29tcG9uZW50W3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRjb25zdCBjYWxsYWJsZSA9IGNvbXBvbmVudFtwcm9wXTtcblx0XHRcdFx0XHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBjYWxsYWJsZS5hcHBseShjb21wb25lbnQsIGFyZ3MpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuZ2V0KGNvbXBvbmVudCwgcHJvcCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcG9uZW50LnZhbHVlU3RvcmUuaGFzKHByb3ApKSByZXR1cm4gY29tcG9uZW50LmdldERhdGEocHJvcCk7XG5cdFx0XHRyZXR1cm4gKGFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5hY3Rpb24uYXBwbHkoY29tcG9uZW50LCBbcHJvcCwgYXJnc10pO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0aWYgKHByb3BlcnR5IGluIHRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0LnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9KTtcbn1cbnZhciBTdGltdWx1c0VsZW1lbnREcml2ZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcblx0XHR0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuXHR9XG5cdGdldE1vZGVsTmFtZShlbGVtZW50KSB7XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm4gbnVsbDtcblx0XHRyZXR1cm4gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHR9XG5cdGdldENvbXBvbmVudFByb3BzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRyb2xsZXIucHJvcHNWYWx1ZTtcblx0fVxuXHRnZXRFdmVudHNUb0VtaXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udHJvbGxlci5ldmVudHNUb0VtaXRWYWx1ZTtcblx0fVxuXHRnZXRCcm93c2VyRXZlbnRzVG9EaXNwYXRjaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb250cm9sbGVyLmV2ZW50c1RvRGlzcGF0Y2hWYWx1ZTtcblx0fVxufTtcbmZ1bmN0aW9uIGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQobW9kZWxEaXJlY3RpdmUpIHtcblx0bGV0IHNob3VsZFJlbmRlciA9IHRydWU7XG5cdGxldCB0YXJnZXRFdmVudE5hbWUgPSBudWxsO1xuXHRsZXQgZGVib3VuY2UgPSBmYWxzZTtcblx0bGV0IG1pbkxlbmd0aCA9IG51bGw7XG5cdGxldCBtYXhMZW5ndGggPSBudWxsO1xuXHRsZXQgbWluVmFsdWUgPSBudWxsO1xuXHRsZXQgbWF4VmFsdWUgPSBudWxsO1xuXHRtb2RlbERpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdGNhc2UgXCJvblwiOlxuXHRcdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm9uXCIgbW9kaWZpZXIgaW4gJHttb2RlbERpcmVjdGl2ZS5nZXRTdHJpbmcoKX0gcmVxdWlyZXMgYSB2YWx1ZSAtIGUuZy4gb24oY2hhbmdlKS5gKTtcblx0XHRcdFx0aWYgKCFbXCJpbnB1dFwiLCBcImNoYW5nZVwiXS5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpIHRocm93IG5ldyBFcnJvcihgVGhlIFwib25cIiBtb2RpZmllciBpbiAke21vZGVsRGlyZWN0aXZlLmdldFN0cmluZygpfSBvbmx5IGFjY2VwdHMgdGhlIGFyZ3VtZW50cyBcImlucHV0XCIgb3IgXCJjaGFuZ2VcIi5gKTtcblx0XHRcdFx0dGFyZ2V0RXZlbnROYW1lID0gbW9kaWZpZXIudmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm5vcmVuZGVyXCI6XG5cdFx0XHRcdHNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJkZWJvdW5jZVwiOlxuXHRcdFx0XHRkZWJvdW5jZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1pbl9sZW5ndGhcIjpcblx0XHRcdFx0bWluTGVuZ3RoID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibWF4X2xlbmd0aFwiOlxuXHRcdFx0XHRtYXhMZW5ndGggPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUludChtb2RpZmllci52YWx1ZSkgOiBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJtaW5fdmFsdWVcIjpcblx0XHRcdFx0bWluVmFsdWUgPSBtb2RpZmllci52YWx1ZSA/IE51bWJlci5wYXJzZUZsb2F0KG1vZGlmaWVyLnZhbHVlKSA6IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm1heF92YWx1ZVwiOlxuXHRcdFx0XHRtYXhWYWx1ZSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlRmxvYXQobW9kaWZpZXIudmFsdWUpIDogbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbW9kaWZpZXIgXCIke21vZGlmaWVyLm5hbWV9XCIgaW4gZGF0YS1tb2RlbD1cIiR7bW9kZWxEaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCIuYCk7XG5cdFx0fVxuXHR9KTtcblx0Y29uc3QgW21vZGVsTmFtZSwgaW5uZXJNb2RlbE5hbWVdID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uLnNwbGl0KFwiOlwiKTtcblx0cmV0dXJuIHtcblx0XHRtb2RlbE5hbWUsXG5cdFx0aW5uZXJNb2RlbE5hbWU6IGlubmVyTW9kZWxOYW1lIHx8IG51bGwsXG5cdFx0c2hvdWxkUmVuZGVyLFxuXHRcdGRlYm91bmNlLFxuXHRcdHRhcmdldEV2ZW50TmFtZSxcblx0XHRtaW5MZW5ndGgsXG5cdFx0bWF4TGVuZ3RoLFxuXHRcdG1pblZhbHVlLFxuXHRcdG1heFZhbHVlXG5cdH07XG59XG52YXIgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoY29tcG9uZW50KSB7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gW107XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzID0gZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHModGhpcy5jb21wb25lbnQuZWxlbWVudCkubWFwKGdldF9tb2RlbF9iaW5kaW5nX2RlZmF1bHQpO1xuXHR9XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcInJlcXVlc3Q6c3RhcnRlZFwiLCAocmVxdWVzdERhdGEpID0+IHtcblx0XHRcdHJlcXVlc3REYXRhLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbkZpbmdlcnByaW50cygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcIm1vZGVsOnNldFwiLCAobW9kZWwsIHZhbHVlKSA9PiB7XG5cdFx0XHR0aGlzLm5vdGlmeVBhcmVudE1vZGVsQ2hhbmdlKG1vZGVsLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0Q2hpbGRyZW5GaW5nZXJwcmludHMoKSB7XG5cdFx0Y29uc3QgZmluZ2VycHJpbnRzID0ge307XG5cdFx0dGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goKGNoaWxkKSA9PiB7XG5cdFx0XHRpZiAoIWNoaWxkLmlkKSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nIGlkXCIpO1xuXHRcdFx0ZmluZ2VycHJpbnRzW2NoaWxkLmlkXSA9IHtcblx0XHRcdFx0ZmluZ2VycHJpbnQ6IGNoaWxkLmZpbmdlcnByaW50LFxuXHRcdFx0XHR0YWc6IGNoaWxkLmVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHJldHVybiBmaW5nZXJwcmludHM7XG5cdH1cblx0bm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UobW9kZWxOYW1lLCB2YWx1ZSkge1xuXHRcdGNvbnN0IHBhcmVudENvbXBvbmVudCA9IGZpbmRQYXJlbnQodGhpcy5jb21wb25lbnQpO1xuXHRcdGlmICghcGFyZW50Q29tcG9uZW50KSByZXR1cm47XG5cdFx0dGhpcy5wYXJlbnRNb2RlbEJpbmRpbmdzLmZvckVhY2goKG1vZGVsQmluZGluZykgPT4ge1xuXHRcdFx0aWYgKChtb2RlbEJpbmRpbmcuaW5uZXJNb2RlbE5hbWUgfHwgXCJ2YWx1ZVwiKSAhPT0gbW9kZWxOYW1lKSByZXR1cm47XG5cdFx0XHRwYXJlbnRDb21wb25lbnQuc2V0KG1vZGVsQmluZGluZy5tb2RlbE5hbWUsIHZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHRcdH0pO1xuXHR9XG5cdGdldENoaWxkcmVuKCkge1xuXHRcdHJldHVybiBmaW5kQ2hpbGRyZW4odGhpcy5jb21wb25lbnQpO1xuXHR9XG59O1xudmFyIExhenlQbHVnaW5fZGVmYXVsdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG51bGw7XG5cdH1cblx0YXR0YWNoVG9Db21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0aWYgKFwibGF6eVwiICE9PSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImxvYWRpbmdcIik/LnZhbHVlKSByZXR1cm47XG5cdFx0Y29tcG9uZW50Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmdldE9ic2VydmVyKCkub2JzZXJ2ZShjb21wb25lbnQuZWxlbWVudCk7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyPy51bm9ic2VydmUoY29tcG9uZW50LmVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdGdldE9ic2VydmVyKCkge1xuXHRcdGlmICghdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcblx0XHRcdGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcblx0XHRcdFx0aWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRcdFx0ZW50cnkudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibGl2ZTphcHBlYXJcIikpO1xuXHRcdFx0XHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcjtcblx0fVxufTtcbnZhciBMb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5vbihcImxvYWRpbmcuc3RhdGU6c3RhcnRlZFwiLCAoZWxlbWVudCwgcmVxdWVzdCkgPT4ge1xuXHRcdFx0dGhpcy5zdGFydExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50LCByZXF1ZXN0KTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJsb2FkaW5nLnN0YXRlOmZpbmlzaGVkXCIsIChlbGVtZW50KSA9PiB7XG5cdFx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBlbGVtZW50KTtcblx0XHR9KTtcblx0XHR0aGlzLmZpbmlzaExvYWRpbmcoY29tcG9uZW50LCBjb21wb25lbnQuZWxlbWVudCk7XG5cdH1cblx0c3RhcnRMb2FkaW5nKGNvbXBvbmVudCwgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCB0cnVlLCB0YXJnZXRFbGVtZW50LCBiYWNrZW5kUmVxdWVzdCk7XG5cdH1cblx0ZmluaXNoTG9hZGluZyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpIHtcblx0XHR0aGlzLmhhbmRsZUxvYWRpbmdUb2dnbGUoY29tcG9uZW50LCBmYWxzZSwgdGFyZ2V0RWxlbWVudCwgbnVsbCk7XG5cdH1cblx0aGFuZGxlTG9hZGluZ1RvZ2dsZShjb21wb25lbnQsIGlzTG9hZGluZywgdGFyZ2V0RWxlbWVudCwgYmFja2VuZFJlcXVlc3QpIHtcblx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXModGFyZ2V0RWxlbWVudCwgW1wiYnVzeVwiXSk7XG5cdFx0dGhpcy5nZXRMb2FkaW5nRGlyZWN0aXZlcyhjb21wb25lbnQsIHRhcmdldEVsZW1lbnQpLmZvckVhY2goKHsgZWxlbWVudCwgZGlyZWN0aXZlcyB9KSA9PiB7XG5cdFx0XHRpZiAoaXNMb2FkaW5nKSB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZWxzZSB0aGlzLnJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgW1wiZGF0YS1saXZlLWlzLWxvYWRpbmdcIl0pO1xuXHRcdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdFx0dGhpcy5oYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVMb2FkaW5nRGlyZWN0aXZlKGVsZW1lbnQsIGlzTG9hZGluZywgZGlyZWN0aXZlLCBiYWNrZW5kUmVxdWVzdCkge1xuXHRcdGNvbnN0IGZpbmFsQWN0aW9uID0gcGFyc2VMb2FkaW5nQWN0aW9uKGRpcmVjdGl2ZS5hY3Rpb24sIGlzTG9hZGluZyk7XG5cdFx0Y29uc3QgdGFyZ2V0ZWRBY3Rpb25zID0gW107XG5cdFx0Y29uc3QgdGFyZ2V0ZWRNb2RlbHMgPSBbXTtcblx0XHRsZXQgZGVsYXkgPSAwO1xuXHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJkZWxheVwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRkZWxheSA9IG1vZGlmaWVyLnZhbHVlID8gTnVtYmVyLnBhcnNlSW50KG1vZGlmaWVyLnZhbHVlKSA6IDIwMDtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJhY3Rpb25cIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRpZiAoIW1vZGlmaWVyLnZhbHVlKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImFjdGlvblwiIGluIGRhdGEtbG9hZGluZyBtdXN0IGhhdmUgYW4gYWN0aW9uIG5hbWUgLSBlLmcuIGFjdGlvbihmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkQWN0aW9ucy5wdXNoKG1vZGlmaWVyLnZhbHVlKTtcblx0XHR9KTtcblx0XHR2YWxpZE1vZGlmaWVycy5zZXQoXCJtb2RlbFwiLCAobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHRocm93IG5ldyBFcnJvcihgVGhlIFwibW9kZWxcIiBpbiBkYXRhLWxvYWRpbmcgbXVzdCBoYXZlIGFuIGFjdGlvbiBuYW1lIC0gZS5nLiBtb2RlbChmb28pLiBJdCdzIG1pc3NpbmcgZm9yIFwiJHtkaXJlY3RpdmUuZ2V0U3RyaW5nKCl9XCJgKTtcblx0XHRcdHRhcmdldGVkTW9kZWxzLnB1c2gobW9kaWZpZXIudmFsdWUpO1xuXHRcdH0pO1xuXHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdGlmICh2YWxpZE1vZGlmaWVycy5oYXMobW9kaWZpZXIubmFtZSkpIHtcblx0XHRcdFx0KHZhbGlkTW9kaWZpZXJzLmdldChtb2RpZmllci5uYW1lKSA/PyAoKCkgPT4ge30pKShtb2RpZmllcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb2RpZmllciBcIiR7bW9kaWZpZXIubmFtZX1cIiB1c2VkIGluIGRhdGEtbG9hZGluZz1cIiR7ZGlyZWN0aXZlLmdldFN0cmluZygpfVwiLiBBdmFpbGFibGUgbW9kaWZpZXJzIGFyZTogJHtBcnJheS5mcm9tKHZhbGlkTW9kaWZpZXJzLmtleXMoKSkuam9pbihcIiwgXCIpfS5gKTtcblx0XHR9KTtcblx0XHRpZiAoaXNMb2FkaW5nICYmIHRhcmdldGVkQWN0aW9ucy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5jb250YWluc09uZU9mQWN0aW9ucyh0YXJnZXRlZEFjdGlvbnMpKSByZXR1cm47XG5cdFx0aWYgKGlzTG9hZGluZyAmJiB0YXJnZXRlZE1vZGVscy5sZW5ndGggPiAwICYmIGJhY2tlbmRSZXF1ZXN0ICYmICFiYWNrZW5kUmVxdWVzdC5hcmVBbnlNb2RlbHNVcGRhdGVkKHRhcmdldGVkTW9kZWxzKSkgcmV0dXJuO1xuXHRcdGxldCBsb2FkaW5nRGlyZWN0aXZlO1xuXHRcdHN3aXRjaCAoZmluYWxBY3Rpb24pIHtcblx0XHRcdGNhc2UgXCJzaG93XCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnNob3dFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJoaWRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmhpZGVFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhZGRDbGFzc1wiOlxuXHRcdFx0XHRsb2FkaW5nRGlyZWN0aXZlID0gKCkgPT4gdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGRpcmVjdGl2ZS5hcmdzKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWRkQXR0cmlidXRlXCI6XG5cdFx0XHRcdGxvYWRpbmdEaXJlY3RpdmUgPSAoKSA9PiB0aGlzLmFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgZGlyZWN0aXZlLmFyZ3MpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyZW1vdmVBdHRyaWJ1dGVcIjpcblx0XHRcdFx0bG9hZGluZ0RpcmVjdGl2ZSA9ICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlcyhlbGVtZW50LCBkaXJlY3RpdmUuYXJncyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2ZpbmFsQWN0aW9ufVwiYCk7XG5cdFx0fVxuXHRcdGlmIChkZWxheSkge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRpZiAoYmFja2VuZFJlcXVlc3QgJiYgIWJhY2tlbmRSZXF1ZXN0LmlzUmVzb2x2ZWQpIGxvYWRpbmdEaXJlY3RpdmUoKTtcblx0XHRcdH0sIGRlbGF5KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bG9hZGluZ0RpcmVjdGl2ZSgpO1xuXHR9XG5cdGdldExvYWRpbmdEaXJlY3RpdmVzKGNvbXBvbmVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IGxvYWRpbmdEaXJlY3RpdmVzID0gW107XG5cdFx0bGV0IG1hdGNoaW5nRWxlbWVudHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWxvYWRpbmddXCIpKTtcblx0XHRtYXRjaGluZ0VsZW1lbnRzID0gbWF0Y2hpbmdFbGVtZW50cy5maWx0ZXIoKGVsdCkgPT4gZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWx0LCBjb21wb25lbnQpKTtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxvYWRpbmdcIikpIG1hdGNoaW5nRWxlbWVudHMgPSBbZWxlbWVudCwgLi4ubWF0Y2hpbmdFbGVtZW50c107XG5cdFx0bWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEVsZW1lbnQgVHlwZVwiKTtcblx0XHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZWxlbWVudC5kYXRhc2V0LmxvYWRpbmcgfHwgXCJzaG93XCIpO1xuXHRcdFx0bG9hZGluZ0RpcmVjdGl2ZXMucHVzaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGRpcmVjdGl2ZXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBsb2FkaW5nRGlyZWN0aXZlcztcblx0fVxuXHRzaG93RWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJyZXZlcnRcIjtcblx0fVxuXHRoaWRlRWxlbWVudChlbGVtZW50KSB7XG5cdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cblx0YWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcykge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jb21iaW5lU3BhY2VkQXJyYXkoY2xhc3NlcykpO1xuXHR9XG5cdHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzZXMpIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uY29tYmluZVNwYWNlZEFycmF5KGNsYXNzZXMpKTtcblx0XHRpZiAoZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuXHR9XG5cdGFkZEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIFwiXCIpO1xuXHRcdH0pO1xuXHR9XG5cdHJlbW92ZUF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuXHRcdGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdH0pO1xuXHR9XG59O1xuY29uc3QgcGFyc2VMb2FkaW5nQWN0aW9uID0gKGFjdGlvbiwgaXNMb2FkaW5nKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uKSB7XG5cdFx0Y2FzZSBcInNob3dcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwic2hvd1wiIDogXCJoaWRlXCI7XG5cdFx0Y2FzZSBcImhpZGVcIjogcmV0dXJuIGlzTG9hZGluZyA/IFwiaGlkZVwiIDogXCJzaG93XCI7XG5cdFx0Y2FzZSBcImFkZENsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcImFkZENsYXNzXCIgOiBcInJlbW92ZUNsYXNzXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUNsYXNzXCI6IHJldHVybiBpc0xvYWRpbmcgPyBcInJlbW92ZUNsYXNzXCIgOiBcImFkZENsYXNzXCI7XG5cdFx0Y2FzZSBcImFkZEF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJhZGRBdHRyaWJ1dGVcIiA6IFwicmVtb3ZlQXR0cmlidXRlXCI7XG5cdFx0Y2FzZSBcInJlbW92ZUF0dHJpYnV0ZVwiOiByZXR1cm4gaXNMb2FkaW5nID8gXCJyZW1vdmVBdHRyaWJ1dGVcIiA6IFwiYWRkQXR0cmlidXRlXCI7XG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGRhdGEtbG9hZGluZyBhY3Rpb24gXCIke2FjdGlvbn1cImApO1xufTtcbnZhciBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblx0fVxuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6c3RhcnRlZFwiLCAoaHRtbCwgcmVzcG9uc2UsIGNvbnRyb2xzKSA9PiB7XG5cdFx0XHRpZiAoIXRoaXMuaXNDb25uZWN0ZWQpIGNvbnRyb2xzLnNob3VsZFJlbmRlciA9IGZhbHNlO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG5cdFx0fSk7XG5cdFx0Y29tcG9uZW50Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cbn07XG52YXIgUG9sbGluZ0RpcmVjdG9yX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuXHRcdHRoaXMuaXNQb2xsaW5nQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMgPSBbXTtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblx0fVxuXHRhZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKSB7XG5cdFx0dGhpcy5wb2xscy5wdXNoKHtcblx0XHRcdGFjdGlvbk5hbWUsXG5cdFx0XHRkdXJhdGlvblxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmlzUG9sbGluZ0FjdGl2ZSkgdGhpcy5pbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pO1xuXHR9XG5cdHN0YXJ0QWxsUG9sbGluZygpIHtcblx0XHRpZiAodGhpcy5pc1BvbGxpbmdBY3RpdmUpIHJldHVybjtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5wb2xscy5mb3JFYWNoKCh7IGFjdGlvbk5hbWUsIGR1cmF0aW9uIH0pID0+IHtcblx0XHRcdHRoaXMuaW5pdGlhdGVQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0XHR9KTtcblx0fVxuXHRzdG9wQWxsUG9sbGluZygpIHtcblx0XHR0aGlzLmlzUG9sbGluZ0FjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMucG9sbGluZ0ludGVydmFscy5mb3JFYWNoKChpbnRlcnZhbCkgPT4ge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fSk7XG5cdH1cblx0Y2xlYXJQb2xsaW5nKCkge1xuXHRcdHRoaXMuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR0aGlzLnBvbGxzID0gW107XG5cdFx0dGhpcy5zdGFydEFsbFBvbGxpbmcoKTtcblx0fVxuXHRpbml0aWF0ZVBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHRsZXQgY2FsbGJhY2s7XG5cdFx0aWYgKGFjdGlvbk5hbWUgPT09IFwiJHJlbmRlclwiKSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LnJlbmRlcigpO1xuXHRcdH07XG5cdFx0ZWxzZSBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmFjdGlvbihhY3Rpb25OYW1lLCB7fSwgMCk7XG5cdFx0fTtcblx0XHRjb25zdCB0aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0sIGR1cmF0aW9uKTtcblx0XHR0aGlzLnBvbGxpbmdJbnRlcnZhbHMucHVzaCh0aW1lcik7XG5cdH1cbn07XG52YXIgUG9sbGluZ1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3RvciA9IG5ldyBQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdChjb21wb25lbnQpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZVBvbGxpbmcoKTtcblx0XHRjb21wb25lbnQub24oXCJjb25uZWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMucG9sbGluZ0RpcmVjdG9yLnN0YXJ0QWxsUG9sbGluZygpO1xuXHRcdH0pO1xuXHRcdGNvbXBvbmVudC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3Iuc3RvcEFsbFBvbGxpbmcoKTtcblx0XHR9KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplUG9sbGluZygpO1xuXHRcdH0pO1xuXHR9XG5cdGFkZFBvbGwoYWN0aW9uTmFtZSwgZHVyYXRpb24pIHtcblx0XHR0aGlzLnBvbGxpbmdEaXJlY3Rvci5hZGRQb2xsKGFjdGlvbk5hbWUsIGR1cmF0aW9uKTtcblx0fVxuXHRjbGVhclBvbGxpbmcoKSB7XG5cdFx0dGhpcy5wb2xsaW5nRGlyZWN0b3IuY2xlYXJQb2xsaW5nKCk7XG5cdH1cblx0aW5pdGlhbGl6ZVBvbGxpbmcoKSB7XG5cdFx0dGhpcy5jbGVhclBvbGxpbmcoKTtcblx0XHRpZiAodGhpcy5lbGVtZW50LmRhdGFzZXQucG9sbCA9PT0gdm9pZCAwKSByZXR1cm47XG5cdFx0Y29uc3QgcmF3UG9sbENvbmZpZyA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LnBvbGw7XG5cdFx0cGFyc2VEaXJlY3RpdmVzKHJhd1BvbGxDb25maWcgfHwgXCIkcmVuZGVyXCIpLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuXHRcdFx0bGV0IGR1cmF0aW9uID0gMmUzO1xuXHRcdFx0ZGlyZWN0aXZlLm1vZGlmaWVycy5mb3JFYWNoKChtb2RpZmllcikgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKG1vZGlmaWVyLm5hbWUpIHtcblx0XHRcdFx0XHRjYXNlIFwiZGVsYXlcIjpcblx0XHRcdFx0XHRcdGlmIChtb2RpZmllci52YWx1ZSkgZHVyYXRpb24gPSBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogY29uc29sZS53YXJuKGBVbmtub3duIG1vZGlmaWVyIFwiJHttb2RpZmllci5uYW1lfVwiIGluIGRhdGEtcG9sbCBcIiR7cmF3UG9sbENvbmZpZ31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmFkZFBvbGwoZGlyZWN0aXZlLmFjdGlvbiwgZHVyYXRpb24pO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFNldFZhbHVlT250b01vZGVsRmllbGRzUGx1Z2luX2RlZmF1bHQgPSBjbGFzcyB7XG5cdGF0dGFjaFRvQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuc3luY2hyb25pemVWYWx1ZU9mTW9kZWxGaWVsZHMoY29tcG9uZW50KTtcblx0XHRjb21wb25lbnQub24oXCJyZW5kZXI6ZmluaXNoZWRcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5zeW5jaHJvbml6ZVZhbHVlT2ZNb2RlbEZpZWxkcyhjb21wb25lbnQpO1xuXHRcdH0pO1xuXHR9XG5cdHN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzKGNvbXBvbmVudCkge1xuXHRcdGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1tb2RlbF1cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbGVtZW50IHVzaW5nIGRhdGEtbW9kZWwuXCIpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHJldHVybjtcblx0XHRcdGlmICghZWxlbWVudEJlbG9uZ3NUb1RoaXNDb21wb25lbnQoZWxlbWVudCwgY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0aWYgKCFtb2RlbERpcmVjdGl2ZSkgcmV0dXJuO1xuXHRcdFx0Y29uc3QgbW9kZWxOYW1lID0gbW9kZWxEaXJlY3RpdmUuYWN0aW9uO1xuXHRcdFx0aWYgKGNvbXBvbmVudC5nZXRVbnN5bmNlZE1vZGVscygpLmluY2x1ZGVzKG1vZGVsTmFtZSkpIHJldHVybjtcblx0XHRcdGlmIChjb21wb25lbnQudmFsdWVTdG9yZS5oYXMobW9kZWxOYW1lKSkgc2V0VmFsdWVPbkVsZW1lbnQoZWxlbWVudCwgY29tcG9uZW50LnZhbHVlU3RvcmUuZ2V0KG1vZGVsTmFtZSkpO1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCAmJiAhZWxlbWVudC5tdWx0aXBsZSkgY29tcG9uZW50LnZhbHVlU3RvcmUuc2V0KG1vZGVsTmFtZSwgZ2V0VmFsdWVGcm9tRWxlbWVudChlbGVtZW50LCBjb21wb25lbnQudmFsdWVTdG9yZSkpO1xuXHRcdH0pO1xuXHR9XG59O1xudmFyIFZhbGlkYXRlZEZpZWxkc1BsdWdpbl9kZWZhdWx0ID0gY2xhc3Mge1xuXHRhdHRhY2hUb0NvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQub24oXCJtb2RlbDpzZXRcIiwgKG1vZGVsTmFtZSkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIGNvbXBvbmVudC52YWx1ZVN0b3JlKTtcblx0XHR9KTtcblx0fVxuXHRoYW5kbGVNb2RlbFNldChtb2RlbE5hbWUsIHZhbHVlU3RvcmUpIHtcblx0XHRpZiAodmFsdWVTdG9yZS5oYXMoXCJ2YWxpZGF0ZWRGaWVsZHNcIikpIHtcblx0XHRcdGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IFsuLi52YWx1ZVN0b3JlLmdldChcInZhbGlkYXRlZEZpZWxkc1wiKV07XG5cdFx0XHRpZiAoIXZhbGlkYXRlZEZpZWxkcy5pbmNsdWRlcyhtb2RlbE5hbWUpKSB2YWxpZGF0ZWRGaWVsZHMucHVzaChtb2RlbE5hbWUpO1xuXHRcdFx0dmFsdWVTdG9yZS5zZXQoXCJ2YWxpZGF0ZWRGaWVsZHNcIiwgdmFsaWRhdGVkRmllbGRzKTtcblx0XHR9XG5cdH1cbn07XG52YXIgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0ID0gY2xhc3MgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0IGV4dGVuZHMgQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKC4uLl9hcmdzKSB7XG5cdFx0c3VwZXIoLi4uX2FyZ3MpO1xuXHRcdHRoaXMucGVuZGluZ0FjdGlvblRyaWdnZXJNb2RlbEVsZW1lbnQgPSBudWxsO1xuXHRcdHRoaXMuZWxlbWVudEV2ZW50TGlzdGVuZXJzID0gW3tcblx0XHRcdGV2ZW50OiBcImlucHV0XCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUlucHV0RXZlbnQoZXZlbnQpXG5cdFx0fSwge1xuXHRcdFx0ZXZlbnQ6IFwiY2hhbmdlXCIsXG5cdFx0XHRjYWxsYmFjazogKGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZUV2ZW50KGV2ZW50KVxuXHRcdH1dO1xuXHRcdHRoaXMucGVuZGluZ0ZpbGVzID0ge307XG5cdH1cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm9uTXV0YXRpb25zLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XG5cdH1cblx0Y29ubmVjdCgpIHtcblx0XHR0aGlzLmNvbm5lY3RDb21wb25lbnQoKTtcblx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblx0fVxuXHRkaXNjb25uZWN0KCkge1xuXHRcdHRoaXMuZGlzY29ubmVjdENvbXBvbmVudCgpO1xuXHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH1cblx0dXBkYXRlKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09IFwiaW5wdXRcIiB8fCBldmVudC50eXBlID09PSBcImNoYW5nZVwiKSB0aHJvdyBuZXcgRXJyb3IoYFNpbmNlIExpdmVDb21wb25lbnRzIDIuMywgeW91IG5vIGxvbmdlciBuZWVkIGRhdGEtYWN0aW9uPVwibGl2ZSN1cGRhdGVcIiBvbiBmb3JtIGVsZW1lbnRzLiBGb3VuZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9YCk7XG5cdFx0dGhpcy51cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQoZXZlbnQuY3VycmVudFRhcmdldCwgbnVsbCk7XG5cdH1cblx0YWN0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmFjdGlvbikgdGhyb3cgbmV3IEVycm9yKGBObyBhY3Rpb24gbmFtZSBwcm92aWRlZCBvbiBlbGVtZW50OiAke2dldEVsZW1lbnRBc1RhZ1RleHQoZXZlbnQuY3VycmVudFRhcmdldCl9LiBEaWQgeW91IGZvcmdldCB0byBhZGQgdGhlIFwiZGF0YS1saXZlLWFjdGlvbi1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCByYXdBY3Rpb24gPSBwYXJhbXMuYWN0aW9uO1xuXHRcdGNvbnN0IGFjdGlvbkFyZ3MgPSB7IC4uLnBhcmFtcyB9O1xuXHRcdGRlbGV0ZSBhY3Rpb25BcmdzLmFjdGlvbjtcblx0XHRjb25zdCBkaXJlY3RpdmVzID0gcGFyc2VEaXJlY3RpdmVzKHJhd0FjdGlvbik7XG5cdFx0bGV0IGRlYm91bmNlID0gZmFsc2U7XG5cdFx0ZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcblx0XHRcdGxldCBwZW5kaW5nRmlsZXMgPSB7fTtcblx0XHRcdGNvbnN0IHZhbGlkTW9kaWZpZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcblx0XHRcdHZhbGlkTW9kaWZpZXJzLnNldChcInN0b3BcIiwgKCkgPT4ge1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwic2VsZlwiLCAoKSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybjtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZGVib3VuY2VcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGRlYm91bmNlID0gbW9kaWZpZXIudmFsdWUgPyBOdW1iZXIucGFyc2VJbnQobW9kaWZpZXIudmFsdWUpIDogdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdFx0dmFsaWRNb2RpZmllcnMuc2V0KFwiZmlsZXNcIiwgKG1vZGlmaWVyKSA9PiB7XG5cdFx0XHRcdGlmICghbW9kaWZpZXIudmFsdWUpIHBlbmRpbmdGaWxlcyA9IHRoaXMucGVuZGluZ0ZpbGVzO1xuXHRcdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0pIHBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV0gPSB0aGlzLnBlbmRpbmdGaWxlc1ttb2RpZmllci52YWx1ZV07XG5cdFx0XHR9KTtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0aWYgKHZhbGlkTW9kaWZpZXJzLmhhcyhtb2RpZmllci5uYW1lKSkge1xuXHRcdFx0XHRcdCh2YWxpZE1vZGlmaWVycy5nZXQobW9kaWZpZXIubmFtZSkgPz8gKCgpID0+IHt9KSkobW9kaWZpZXIpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zb2xlLndhcm4oYFVua25vd24gbW9kaWZpZXIgJHttb2RpZmllci5uYW1lfSBpbiBhY3Rpb24gXCIke3Jhd0FjdGlvbn1cIi4gQXZhaWxhYmxlIG1vZGlmaWVycyBhcmU6ICR7QXJyYXkuZnJvbSh2YWxpZE1vZGlmaWVycy5rZXlzKCkpLmpvaW4oXCIsIFwiKX0uYCk7XG5cdFx0XHR9KTtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgaW5wdXRdIG9mIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdGaWxlcykpIHtcblx0XHRcdFx0aWYgKGlucHV0LmZpbGVzKSB0aGlzLmNvbXBvbmVudC5maWxlcyhrZXksIGlucHV0KTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMucGVuZGluZ0ZpbGVzW2tleV07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5hY3Rpb24oZGlyZWN0aXZlLmFjdGlvbiwgYWN0aW9uQXJncywgZGVib3VuY2UpO1xuXHRcdFx0aWYgKGdldE1vZGVsRGlyZWN0aXZlRnJvbUVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldCwgZmFsc2UpKSB0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblx0XHR9KTtcblx0fVxuXHQkcmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5yZW5kZXIoKTtcblx0fVxuXHRlbWl0KGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhLCBuYW1lTWF0Y2ggfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZW1pdChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRVcChldmVudCkge1xuXHRcdHRoaXMuZ2V0RW1pdERpcmVjdGl2ZXMoZXZlbnQpLmZvckVhY2goKHsgbmFtZSwgZGF0YSwgbmFtZU1hdGNoIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRVcChuYW1lLCBkYXRhLCBuYW1lTWF0Y2gpO1xuXHRcdH0pO1xuXHR9XG5cdGVtaXRTZWxmKGV2ZW50KSB7XG5cdFx0dGhpcy5nZXRFbWl0RGlyZWN0aXZlcyhldmVudCkuZm9yRWFjaCgoeyBuYW1lLCBkYXRhIH0pID0+IHtcblx0XHRcdHRoaXMuY29tcG9uZW50LmVtaXRTZWxmKG5hbWUsIGRhdGEpO1xuXHRcdH0pO1xuXHR9XG5cdCR1cGRhdGVNb2RlbChtb2RlbCwgdmFsdWUsIHNob3VsZFJlbmRlciA9IHRydWUsIGRlYm91bmNlID0gdHJ1ZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5zZXQobW9kZWwsIHZhbHVlLCBzaG91bGRSZW5kZXIsIGRlYm91bmNlKTtcblx0fVxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50Ll91cGRhdGVGcm9tUGFyZW50UHJvcHModGhpcy5wcm9wc1VwZGF0ZWRGcm9tUGFyZW50VmFsdWUpO1xuXHR9XG5cdGZpbmdlcnByaW50VmFsdWVDaGFuZ2VkKCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmZpbmdlcnByaW50ID0gdGhpcy5maW5nZXJwcmludFZhbHVlO1xuXHR9XG5cdGdldEVtaXREaXJlY3RpdmVzKGV2ZW50KSB7XG5cdFx0Y29uc3QgcGFyYW1zID0gZXZlbnQucGFyYW1zO1xuXHRcdGlmICghcGFyYW1zLmV2ZW50KSB0aHJvdyBuZXcgRXJyb3IoYE5vIGV2ZW50IG5hbWUgcHJvdmlkZWQgb24gZWxlbWVudDogJHtnZXRFbGVtZW50QXNUYWdUZXh0KGV2ZW50LmN1cnJlbnRUYXJnZXQpfS4gRGlkIHlvdSBmb3JnZXQgdG8gYWRkIHRoZSBcImRhdGEtbGl2ZS1ldmVudC1wYXJhbVwiIGF0dHJpYnV0ZT9gKTtcblx0XHRjb25zdCBldmVudEluZm8gPSBwYXJhbXMuZXZlbnQ7XG5cdFx0Y29uc3QgZXZlbnRBcmdzID0geyAuLi5wYXJhbXMgfTtcblx0XHRkZWxldGUgZXZlbnRBcmdzLmV2ZW50O1xuXHRcdGNvbnN0IGRpcmVjdGl2ZXMgPSBwYXJzZURpcmVjdGl2ZXMoZXZlbnRJbmZvKTtcblx0XHRjb25zdCBlbWl0cyA9IFtdO1xuXHRcdGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlKSA9PiB7XG5cdFx0XHRsZXQgbmFtZU1hdGNoID0gbnVsbDtcblx0XHRcdGRpcmVjdGl2ZS5tb2RpZmllcnMuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcblx0XHRcdFx0c3dpdGNoIChtb2RpZmllci5uYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIm5hbWVcIjpcblx0XHRcdFx0XHRcdG5hbWVNYXRjaCA9IG1vZGlmaWVyLnZhbHVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vZGlmaWVyICR7bW9kaWZpZXIubmFtZX0gaW4gZXZlbnQgXCIke2V2ZW50SW5mb31cIi5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRlbWl0cy5wdXNoKHtcblx0XHRcdFx0bmFtZTogZGlyZWN0aXZlLmFjdGlvbixcblx0XHRcdFx0ZGF0YTogZXZlbnRBcmdzLFxuXHRcdFx0XHRuYW1lTWF0Y2hcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBlbWl0cztcblx0fVxuXHRjcmVhdGVDb21wb25lbnQoKSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLmVsZW1lbnQuaWQgfHwgbnVsbDtcblx0XHR0aGlzLmNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQodGhpcy5lbGVtZW50LCB0aGlzLm5hbWVWYWx1ZSwgdGhpcy5wcm9wc1ZhbHVlLCB0aGlzLmxpc3RlbmVyc1ZhbHVlLCBpZCwgTGl2ZUNvbnRyb2xsZXJEZWZhdWx0LmJhY2tlbmRGYWN0b3J5KHRoaXMpLCBuZXcgU3RpbXVsdXNFbGVtZW50RHJpdmVyKHRoaXMpKTtcblx0XHR0aGlzLnByb3hpZWRDb21wb25lbnQgPSBwcm94aWZ5Q29tcG9uZW50KHRoaXMuY29tcG9uZW50KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbGVtZW50LCBcIl9fY29tcG9uZW50XCIsIHtcblx0XHRcdHZhbHVlOiB0aGlzLnByb3hpZWRDb21wb25lbnQsXG5cdFx0XHR3cml0YWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmhhc0RlYm91bmNlVmFsdWUpIHRoaXMuY29tcG9uZW50LmRlZmF1bHREZWJvdW5jZSA9IHRoaXMuZGVib3VuY2VWYWx1ZTtcblx0XHRbXG5cdFx0XHRuZXcgTG9hZGluZ1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgTGF6eVBsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBQb2xsaW5nUGx1Z2luX2RlZmF1bHQoKSxcblx0XHRcdG5ldyBTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0KCksXG5cdFx0XHRuZXcgQ2hpbGRDb21wb25lbnRQbHVnaW5fZGVmYXVsdCh0aGlzLmNvbXBvbmVudClcblx0XHRdLmZvckVhY2goKHBsdWdpbikgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuYWRkUGx1Z2luKHBsdWdpbik7XG5cdFx0fSk7XG5cdH1cblx0Y29ubmVjdENvbXBvbmVudCgpIHtcblx0XHR0aGlzLmNvbXBvbmVudC5jb25uZWN0KCk7XG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cdFx0dGhpcy5lbGVtZW50RXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoeyBldmVudCwgY2FsbGJhY2sgfSkgPT4ge1xuXHRcdFx0dGhpcy5jb21wb25lbnQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KFwiY29ubmVjdFwiKTtcblx0fVxuXHRkaXNjb25uZWN0Q29tcG9uZW50KCkge1xuXHRcdHRoaXMuY29tcG9uZW50LmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLmVsZW1lbnRFdmVudExpc3RlbmVycy5mb3JFYWNoKCh7IGV2ZW50LCBjYWxsYmFjayB9KSA9PiB7XG5cdFx0XHR0aGlzLmNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcblx0XHR9KTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoXCJkaXNjb25uZWN0XCIpO1xuXHR9XG5cdGhhbmRsZUlucHV0RXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiaW5wdXRcIik7XG5cdH1cblx0aGFuZGxlQ2hhbmdlRXZlbnQoZXZlbnQpIHtcblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudCh0YXJnZXQsIFwiY2hhbmdlXCIpO1xuXHR9XG5cdHVwZGF0ZU1vZGVsRnJvbUVsZW1lbnRFdmVudChlbGVtZW50LCBldmVudE5hbWUpIHtcblx0XHRpZiAoIWVsZW1lbnRCZWxvbmdzVG9UaGlzQ29tcG9uZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50KSkgcmV0dXJuO1xuXHRcdGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCB1cGRhdGUgbW9kZWwgZm9yIG5vbiBIVE1MRWxlbWVudFwiKTtcblx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSBcImZpbGVcIikge1xuXHRcdFx0Y29uc3Qga2V5ID0gZWxlbWVudC5uYW1lO1xuXHRcdFx0aWYgKGVsZW1lbnQuZmlsZXM/Lmxlbmd0aCkgdGhpcy5wZW5kaW5nRmlsZXNba2V5XSA9IGVsZW1lbnQ7XG5cdFx0XHRlbHNlIGlmICh0aGlzLnBlbmRpbmdGaWxlc1trZXldKSBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZXNba2V5XTtcblx0XHR9XG5cdFx0Y29uc3QgbW9kZWxEaXJlY3RpdmUgPSBnZXRNb2RlbERpcmVjdGl2ZUZyb21FbGVtZW50KGVsZW1lbnQsIGZhbHNlKTtcblx0XHRpZiAoIW1vZGVsRGlyZWN0aXZlKSByZXR1cm47XG5cdFx0Y29uc3QgbW9kZWxCaW5kaW5nID0gZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdChtb2RlbERpcmVjdGl2ZSk7XG5cdFx0aWYgKCFtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lKSBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID0gXCJpbnB1dFwiO1xuXHRcdGlmICh0aGlzLnBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50ID09PSBlbGVtZW50KSBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyID0gZmFsc2U7XG5cdFx0aWYgKGV2ZW50TmFtZSA9PT0gXCJjaGFuZ2VcIiAmJiBtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy50YXJnZXRFdmVudE5hbWUgPSBcImNoYW5nZVwiO1xuXHRcdGlmIChldmVudE5hbWUgJiYgbW9kZWxCaW5kaW5nLnRhcmdldEV2ZW50TmFtZSAhPT0gZXZlbnROYW1lKSByZXR1cm47XG5cdFx0aWYgKGZhbHNlID09PSBtb2RlbEJpbmRpbmcuZGVib3VuY2UpIGlmIChtb2RlbEJpbmRpbmcudGFyZ2V0RXZlbnROYW1lID09PSBcImlucHV0XCIpIG1vZGVsQmluZGluZy5kZWJvdW5jZSA9IHRydWU7XG5cdFx0ZWxzZSBtb2RlbEJpbmRpbmcuZGVib3VuY2UgPSAwO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWUgPSBnZXRWYWx1ZUZyb21FbGVtZW50KGVsZW1lbnQsIHRoaXMuY29tcG9uZW50LnZhbHVlU3RvcmUpO1xuXHRcdGNvbnN0IGZpbmFsVmFsdWVJc0VtcHR5ID0gZmluYWxWYWx1ZSA9PT0gXCJcIiB8fCBmaW5hbFZhbHVlID09PSBudWxsIHx8IGZpbmFsVmFsdWUgPT09IHZvaWQgMDtcblx0XHRpZiAoaXNUZXh0dWFsSW5wdXRFbGVtZW50KGVsZW1lbnQpIHx8IGlzVGV4dGFyZWFFbGVtZW50KGVsZW1lbnQpKSB7XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5taW5MZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPCBtb2RlbEJpbmRpbmcubWluTGVuZ3RoKSByZXR1cm47XG5cdFx0XHRpZiAoIWZpbmFsVmFsdWVJc0VtcHR5ICYmIG1vZGVsQmluZGluZy5tYXhMZW5ndGggIT09IG51bGwgJiYgdHlwZW9mIGZpbmFsVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgZmluYWxWYWx1ZS5sZW5ndGggPiBtb2RlbEJpbmRpbmcubWF4TGVuZ3RoKSByZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpc051bWVyaWNhbElucHV0RWxlbWVudChlbGVtZW50KSkge1xuXHRcdFx0aWYgKCFmaW5hbFZhbHVlSXNFbXB0eSkge1xuXHRcdFx0XHRjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIoZmluYWxWYWx1ZSk7XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWluVmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlIDwgbW9kZWxCaW5kaW5nLm1pblZhbHVlKSByZXR1cm47XG5cdFx0XHRcdGlmIChtb2RlbEJpbmRpbmcubWF4VmFsdWUgIT09IG51bGwgJiYgbnVtZXJpY1ZhbHVlID4gbW9kZWxCaW5kaW5nLm1heFZhbHVlKSByZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuY29tcG9uZW50LnNldChtb2RlbEJpbmRpbmcubW9kZWxOYW1lLCBmaW5hbFZhbHVlLCBtb2RlbEJpbmRpbmcuc2hvdWxkUmVuZGVyLCBtb2RlbEJpbmRpbmcuZGVib3VuY2UpO1xuXHR9XG5cdGRpc3BhdGNoRXZlbnQobmFtZSwgZGV0YWlsID0ge30sIGNhbkJ1YmJsZSA9IHRydWUsIGNhbmNlbGFibGUgPSBmYWxzZSkge1xuXHRcdGRldGFpbC5jb250cm9sbGVyID0gdGhpcztcblx0XHRkZXRhaWwuY29tcG9uZW50ID0gdGhpcy5wcm94aWVkQ29tcG9uZW50O1xuXHRcdHRoaXMuZGlzcGF0Y2gobmFtZSwge1xuXHRcdFx0ZGV0YWlsLFxuXHRcdFx0cHJlZml4OiBcImxpdmVcIixcblx0XHRcdGNhbmNlbGFibGUsXG5cdFx0XHRidWJibGVzOiBjYW5CdWJibGVcblx0XHR9KTtcblx0fVxuXHRvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcblx0XHRtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcblx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSBcImlkXCIgJiYgdGhpcy5lbGVtZW50LmlkICE9PSB0aGlzLmNvbXBvbmVudC5pZCkge1xuXHRcdFx0XHR0aGlzLmRpc2Nvbm5lY3RDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jcmVhdGVDb21wb25lbnQoKTtcblx0XHRcdFx0dGhpcy5jb25uZWN0Q29tcG9uZW50KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQudmFsdWVzID0ge1xuXHRuYW1lOiBTdHJpbmcsXG5cdHVybDogU3RyaW5nLFxuXHRwcm9wczoge1xuXHRcdHR5cGU6IE9iamVjdCxcblx0XHRkZWZhdWx0OiB7fVxuXHR9LFxuXHRwcm9wc1VwZGF0ZWRGcm9tUGFyZW50OiB7XG5cdFx0dHlwZTogT2JqZWN0LFxuXHRcdGRlZmF1bHQ6IHt9XG5cdH0sXG5cdGxpc3RlbmVyczoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRW1pdDoge1xuXHRcdHR5cGU6IEFycmF5LFxuXHRcdGRlZmF1bHQ6IFtdXG5cdH0sXG5cdGV2ZW50c1RvRGlzcGF0Y2g6IHtcblx0XHR0eXBlOiBBcnJheSxcblx0XHRkZWZhdWx0OiBbXVxuXHR9LFxuXHRkZWJvdW5jZToge1xuXHRcdHR5cGU6IE51bWJlcixcblx0XHRkZWZhdWx0OiAxNTBcblx0fSxcblx0ZmluZ2VycHJpbnQ6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJcIlxuXHR9LFxuXHRyZXF1ZXN0TWV0aG9kOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdGRlZmF1bHQ6IFwicG9zdFwiXG5cdH0sXG5cdGZldGNoQ3JlZGVudGlhbHM6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0ZGVmYXVsdDogXCJzYW1lLW9yaWdpblwiXG5cdH1cbn07XG5MaXZlQ29udHJvbGxlckRlZmF1bHQuYmFja2VuZEZhY3RvcnkgPSAoY29udHJvbGxlcikgPT4gbmV3IEJhY2tlbmRfZGVmYXVsdChjb250cm9sbGVyLnVybFZhbHVlLCBjb250cm9sbGVyLnJlcXVlc3RNZXRob2RWYWx1ZSwgY29udHJvbGxlci5mZXRjaENyZWRlbnRpYWxzVmFsdWUpO1xuZXhwb3J0IHsgQ29tcG9uZW50LCBMaXZlQ29udHJvbGxlckRlZmF1bHQgYXMgZGVmYXVsdCwgZ2V0Q29tcG9uZW50IH07XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIkBob3R3aXJlZC9zdGltdWx1c1wiO1xuaW1wb3J0IFwiQGhvdHdpcmVkL3R1cmJvXCI7XG52YXIgdHVyYm9fY29udHJvbGxlcl9kZWZhdWx0ID0gY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHt9O1xuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlcl9kZWZhdWx0IGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0IiwiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJuZXh0IiwiZXZlbnQiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVN0YXRlIiwiZGVmYXVsdCIsIl90aGlzIiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJpbml0aWFsaXplIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsIm1vZGFsIiwiaGlkZSIsIkNoYXJ0IiwicmVnaXN0ZXJhYmxlcyIsInJlZ2lzdGVyIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpc0NoYXJ0SW5pdGlhbGl6ZWQiLCJfQ2xhc3MiLCJfYXJncyIsImNoYXJ0IiwiZGlzcGF0Y2hFdmVudCIsIkhUTUxDYW52YXNFbGVtZW50IiwiRXJyb3IiLCJwYXlsb2FkIiwidmlld1ZhbHVlIiwiaXNBcnJheSIsIm9wdGlvbnMiLCJjb25maWciLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImRpc2Nvbm5lY3QiLCJkZXN0cm95Iiwidmlld1ZhbHVlQ2hhbmdlZCIsImRhdGEiLCJ1cGRhdGUiLCJwYXJlbnRFbGVtZW50IiwicmVzcG9uc2l2ZSIsIm9yaWdpbmFsV2lkdGgiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJzZXRUaW1lb3V0IiwibmFtZSIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwidmlldyIsIk9iamVjdCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJfc2xpY2VkVG9BcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwicHVzaCIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJCYWNrZW5kUmVxdWVzdF9kZWZhdWx0IiwicHJvbWlzZSIsImFjdGlvbnMiLCJ1cGRhdGVNb2RlbHMiLCJpc1Jlc29sdmVkIiwicmVzcG9uc2UiLCJ1cGRhdGVkTW9kZWxzIiwiY29udGFpbnNPbmVPZkFjdGlvbnMiLCJ0YXJnZXRlZEFjdGlvbnMiLCJmaWx0ZXIiLCJhY3Rpb24iLCJpbmNsdWRlcyIsImFyZUFueU1vZGVsc1VwZGF0ZWQiLCJ0YXJnZXRlZE1vZGVscyIsIm1vZGVsIiwiUmVxdWVzdEJ1aWxkZXJfZGVmYXVsdCIsInVybCIsIm1ldGhvZCIsInVuZGVmaW5lZCIsImNyZWRlbnRpYWxzIiwiYnVpbGRSZXF1ZXN0IiwicHJvcHMiLCJ1cGRhdGVkIiwiY2hpbGRyZW4iLCJ1cGRhdGVkUHJvcHNGcm9tUGFyZW50IiwiZmlsZXMiLCJzcGxpdFVybCIsInNwbGl0IiwiX3NwbGl0VXJsIiwiX3NwbGl0VXJsMiIsInF1ZXJ5U3RyaW5nIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZmV0Y2hPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJ0b3RhbEZpbGVzIiwiZW50cmllcyIsInJlZHVjZSIsInRvdGFsIiwiY3VycmVudCIsImhhc0ZpbmdlcnByaW50cyIsImtleXMiLCJ3aWxsRGF0YUZpdEluVXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldCIsInJlcXVlc3REYXRhIiwicHJvcHNGcm9tUGFyZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiYm9keSIsInBhcmFtc1N0cmluZyIsInByb3BzSnNvbiIsInVwZGF0ZWRKc29uIiwiY2hpbGRyZW5Kc29uIiwicHJvcHNGcm9tUGFyZW50SnNvbiIsIkJhY2tlbmRfZGVmYXVsdCIsInJlcXVlc3RCdWlsZGVyIiwibWFrZVJlcXVlc3QiLCJfdGhpcyRyZXF1ZXN0QnVpbGRlciQiLCJmZXRjaCIsIm1hcCIsImJhY2tlbmRBY3Rpb24iLCJCYWNrZW5kUmVzcG9uc2VfZGVmYXVsdCIsIl9nZXRCb2R5IiwiX2NhbGxlZSIsIl9jb250ZXh0IiwidGV4dCIsImdldEJvZHkiLCJnZXRMaXZlVXJsIiwibGl2ZVVybCIsImdldCIsImdldEVsZW1lbnRBc1RhZ1RleHQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJpbmRleE9mIiwiY29tcG9uZW50TWFwQnlFbGVtZW50IiwiV2Vha01hcCIsImNvbXBvbmVudE1hcEJ5Q29tcG9uZW50IiwiTWFwIiwicmVnaXN0ZXJDb21wb25lbnQiLCJjb21wb25lbnQiLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwicmVqZWN0IiwiY291bnQiLCJtYXhDb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZmluZENvbXBvbmVudHMiLCJjdXJyZW50Q29tcG9uZW50Iiwib25seVBhcmVudHMiLCJvbmx5TWF0Y2hOYW1lIiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnROYW1lIiwiY29udGFpbnMiLCJmaW5kQ2hpbGRyZW4iLCJmb3VuZENoaWxkQ29tcG9uZW50IiwiY2hpbGRDb21wb25lbnROYW1lIiwiY2hpbGRDb21wb25lbnQiLCJmaW5kUGFyZW50IiwicGFyc2VEaXJlY3RpdmVzIiwiY29udGVudCIsImRpcmVjdGl2ZXMiLCJjdXJyZW50QWN0aW9uTmFtZSIsImN1cnJlbnRBcmd1bWVudFZhbHVlIiwiY3VycmVudEFyZ3VtZW50cyIsImN1cnJlbnRNb2RpZmllcnMiLCJzdGF0ZSIsImdldExhc3RBY3Rpb25OYW1lIiwicHVzaEluc3RydWN0aW9uIiwibW9kaWZpZXJzIiwiZ2V0U3RyaW5nIiwicHVzaEFyZ3VtZW50IiwidHJpbSIsInB1c2hNb2RpZmllciIsImNoYXIiLCJjb21iaW5lU3BhY2VkQXJyYXkiLCJwYXJ0cyIsImZpbmFsUGFydHMiLCJwYXJ0IiwidHJpbUFsbCIsInN0ciIsInJlcGxhY2UiLCJub3JtYWxpemVNb2RlbE5hbWUiLCJzIiwiam9pbiIsImdldFZhbHVlRnJvbUVsZW1lbnQiLCJ2YWx1ZVN0b3JlIiwiSFRNTElucHV0RWxlbWVudCIsInR5cGUiLCJtb2RlbE5hbWVEYXRhIiwiZ2V0TW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudCIsIm1vZGVsVmFsdWUiLCJnZXRNdWx0aXBsZUNoZWNrYm94VmFsdWUiLCJoYXNBdHRyaWJ1dGUiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaW5wdXRWYWx1ZSIsIkhUTUxTZWxlY3RFbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZE9wdGlvbnMiLCJlbCIsImRhdGFzZXQiLCJzZXRWYWx1ZU9uRWxlbWVudCIsInNvbWUiLCJ2YWwiLCJhcnJheVdyYXBwZWRWYWx1ZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwiZ2V0QWxsTW9kZWxEaXJlY3RpdmVGcm9tRWxlbWVudHMiLCJkaXJlY3RpdmUiLCJ0aHJvd09uTWlzc2luZyIsImRhdGFNb2RlbERpcmVjdGl2ZXMiLCJmb3JtRWxlbWVudCIsImNsb3Nlc3QiLCJlbGVtZW50QmVsb25nc1RvVGhpc0NvbXBvbmVudCIsImNsb25lSFRNTEVsZW1lbnQiLCJuZXdFbGVtZW50IiwiY2xvbmVOb2RlIiwiSFRNTEVsZW1lbnQiLCJodG1sVG9FbGVtZW50IiwiaHRtbCIsInRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiY3VycmVudFZhbHVlcyIsImZpbmFsVmFsdWVzIiwiaW5kZXgiLCJzcGxpY2UiLCJpc1RleHR1YWxJbnB1dEVsZW1lbnQiLCJpc1RleHRhcmVhRWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJpc051bWVyaWNhbElucHV0RWxlbWVudCIsIkhvb2tNYW5hZ2VyX2RlZmF1bHQiLCJob29rcyIsImhvb2tOYW1lIiwiY2FsbGJhY2siLCJ1bnJlZ2lzdGVyIiwidHJpZ2dlckhvb2siLCJJZGlvbW9ycGgiLCJFTVBUWV9TRVQiLCJTZXQiLCJkZWZhdWx0cyIsIm1vcnBoU3R5bGUiLCJjYWxsYmFja3MiLCJiZWZvcmVOb2RlQWRkZWQiLCJub09wIiwiYWZ0ZXJOb2RlQWRkZWQiLCJiZWZvcmVOb2RlTW9ycGhlZCIsImFmdGVyTm9kZU1vcnBoZWQiLCJiZWZvcmVOb2RlUmVtb3ZlZCIsImFmdGVyTm9kZVJlbW92ZWQiLCJiZWZvcmVBdHRyaWJ1dGVVcGRhdGVkIiwiaGVhZCIsInNob3VsZFByZXNlcnZlIiwiZWx0Iiwic2hvdWxkUmVBcHBlbmQiLCJzaG91bGRSZW1vdmUiLCJhZnRlckhlYWRNb3JwaGVkIiwibW9ycGgiLCJvbGROb2RlIiwibmV3Q29udGVudCIsIkRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyc2VDb250ZW50Iiwibm9ybWFsaXplZENvbnRlbnQiLCJub3JtYWxpemVDb250ZW50IiwiY3R4IiwiY3JlYXRlTW9ycGhDb250ZXh0IiwibW9ycGhOb3JtYWxpemVkQ29udGVudCIsIm5vcm1hbGl6ZWROZXdDb250ZW50IiwiYmxvY2siLCJvbGRIZWFkIiwicXVlcnlTZWxlY3RvciIsIm5ld0hlYWQiLCJwcm9taXNlcyIsImhhbmRsZUhlYWRFbGVtZW50IiwiYWxsIiwiYXNzaWduIiwiaWdub3JlIiwibW9ycGhDaGlsZHJlbiIsImJlc3RNYXRjaCIsImZpbmRCZXN0Tm9kZU1hdGNoIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJtb3JwaGVkTm9kZSIsIm1vcnBoT2xkTm9kZVRvIiwiaW5zZXJ0U2libGluZ3MiLCJpZ25vcmVWYWx1ZU9mQWN0aXZlRWxlbWVudCIsInBvc3NpYmxlQWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZVZhbHVlIiwiYWN0aXZlRWxlbWVudCIsImlnbm9yZUFjdGl2ZSIsInJlbW92ZSIsImlzU29mdE1hdGNoIiwicmVwbGFjZUNoaWxkIiwiSFRNTEhlYWRFbGVtZW50Iiwic3luY05vZGVGcm9tIiwibmV3UGFyZW50Iiwib2xkUGFyZW50IiwibmV4dE5ld0NoaWxkIiwiZmlyc3RDaGlsZCIsImluc2VydGlvblBvaW50IiwibmV3Q2hpbGQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUlkc0Zyb21Db25zaWRlcmF0aW9uIiwiaXNJZFNldE1hdGNoIiwiaWRTZXRNYXRjaCIsImZpbmRJZFNldE1hdGNoIiwicmVtb3ZlTm9kZXNCZXR3ZWVuIiwic29mdE1hdGNoIiwiZmluZFNvZnRNYXRjaCIsImluc2VydEJlZm9yZSIsInRlbXBOb2RlIiwicmVtb3ZlTm9kZSIsImlnbm9yZUF0dHJpYnV0ZSIsImF0dHIiLCJ0byIsInVwZGF0ZVR5cGUiLCJub2RlVHlwZSIsImZyb21BdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInRvQXR0cmlidXRlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJmcm9tQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXJyIiwidG9BdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzeW5jSW5wdXRWYWx1ZSIsInN5bmNCb29sZWFuQXR0cmlidXRlIiwiYXR0cmlidXRlTmFtZSIsImlnbm9yZVVwZGF0ZSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJIVE1MT3B0aW9uRWxlbWVudCIsIm5ld0hlYWRUYWciLCJjdXJyZW50SGVhZCIsImFkZGVkIiwicmVtb3ZlZCIsInByZXNlcnZlZCIsIm5vZGVzVG9BcHBlbmQiLCJoZWFkTWVyZ2VTdHlsZSIsInNyY1RvTmV3SGVhZE5vZGVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIm5ld0hlYWRDaGlsZCIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJjdXJyZW50SGVhZEVsdCIsImluTmV3Q29udGVudCIsImhhcyIsImlzUmVBcHBlbmRlZCIsImlzUHJlc2VydmVkIiwiX2xvb3AiLCJuZXdOb2RlIiwiX25vZGVzVG9BcHBlbmQiLCJfaTIiLCJuZXdFbHQiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImhyZWYiLCJzcmMiLCJfcmVzb2x2ZSIsIl9pMyIsIl9yZW1vdmVkIiwicmVtb3ZlZEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImtlcHQiLCJtZXJnZURlZmF1bHRzIiwiZmluYWxDb25maWciLCJ0YXJnZXQiLCJpZE1hcCIsImNyZWF0ZUlkTWFwIiwiZGVhZElkcyIsIm5vZGUxIiwibm9kZTIiLCJ0YWdOYW1lIiwiaWQiLCJnZXRJZEludGVyc2VjdGlvbkNvdW50Iiwic3RhcnRJbmNsdXNpdmUiLCJlbmRFeGNsdXNpdmUiLCJuZXdDaGlsZFBvdGVudGlhbElkQ291bnQiLCJwb3RlbnRpYWxNYXRjaCIsIm90aGVyTWF0Y2hDb3VudCIsInBvdGVudGlhbFNvZnRNYXRjaCIsInNpYmxpbmdTb2Z0TWF0Y2hDb3VudCIsInBhcnNlciIsIkRPTVBhcnNlciIsImNvbnRlbnRXaXRoU3Znc1JlbW92ZWQiLCJtYXRjaCIsInBhcnNlRnJvbVN0cmluZyIsImdlbmVyYXRlZEJ5SWRpb21vcnBoIiwiaHRtbEVsZW1lbnQiLCJOb2RlIiwiZHVtbXlQYXJlbnQiLCJfaTQiLCJfYXJyIiwic3RhY2siLCJub2RlIiwicG9wIiwiY3VycmVudEVsZW1lbnQiLCJiZXN0RWxlbWVudCIsInNjb3JlIiwibmV3U2NvcmUiLCJzY29yZUVsZW1lbnQiLCJpc0lkSW5Db25zaWRlcmF0aW9uIiwiaWRJc1dpdGhpbk5vZGUiLCJ0YXJnZXROb2RlIiwiaWRTZXQiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiYWRkIiwic291cmNlU2V0IiwibWF0Y2hDb3VudCIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJwb3B1bGF0ZUlkTWFwRm9yTm9kZSIsIm5vZGVQYXJlbnQiLCJpZEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvcjYiLCJfc3RlcDYiLCJvbGRDb250ZW50Iiwibm9ybWFsaXplQXR0cmlidXRlc0ZvckNvbXBhcmlzb24iLCJzeW5jQXR0cmlidXRlcyIsImZyb21FbCIsInRvRWwiLCJleGVjdXRlTW9ycGhkb20iLCJyb290RnJvbUVsZW1lbnQiLCJyb290VG9FbGVtZW50IiwibW9kaWZpZWRGaWVsZEVsZW1lbnRzIiwiZ2V0RWxlbWVudFZhbHVlIiwiZXh0ZXJuYWxNdXRhdGlvblRyYWNrZXIiLCJvcmlnaW5hbEVsZW1lbnRJZHNUb1N3YXBBZnRlciIsIm9yaWdpbmFsRWxlbWVudHNUb1ByZXNlcnZlIiwibWFya0VsZW1lbnRBc05lZWRpbmdQb3N0TW9ycGhTd2FwIiwicmVwbGFjZVdpdGhDbG9uZSIsIm9sZEVsZW1lbnQiLCJjbG9uZWRPbGRFbGVtZW50IiwicmVwbGFjZVdpdGgiLCJfZnJvbUVsJHBhcmVudEVsZW1lbnQiLCJFbGVtZW50IiwiY2xvbmVkRnJvbUVsIiwiX194IiwiQWxwaW5lIiwid2FzRWxlbWVudEFkZGVkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiZWxlbWVudENoYW5nZXMiLCJnZXRDaGFuZ2VkRWxlbWVudCIsImFwcGx5VG9FbGVtZW50Iiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzRXF1YWxOb2RlIiwibm9ybWFsaXplZEZyb21FbCIsIm5vcm1hbGl6ZWRUb0VsIiwib3JpZ2luYWxFbGVtZW50IiwiQ2hhbmdpbmdJdGVtc1RyYWNrZXJfZGVmYXVsdCIsImNoYW5nZWRJdGVtcyIsInJlbW92ZWRJdGVtcyIsInNldEl0ZW0iLCJpdGVtTmFtZSIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZWRSZWNvcmQiLCJvcmlnaW5hbCIsIm9yaWdpbmFsUmVjb3JkIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRWYWx1ZSIsInRydWVPcmlnaW5hbFZhbHVlIiwiZ2V0Q2hhbmdlZEl0ZW1zIiwiX3JlZiIsIl9yZWYyIiwiZ2V0UmVtb3ZlZEl0ZW1zIiwiaXNFbXB0eSIsInNpemUiLCJFbGVtZW50Q2hhbmdlcyIsImFkZGVkQ2xhc3NlcyIsInJlbW92ZWRDbGFzc2VzIiwic3R5bGVDaGFuZ2VzIiwiYXR0cmlidXRlQ2hhbmdlcyIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJhZGRTdHlsZSIsInN0eWxlTmFtZSIsIm9yaWdpbmFsVmFsdWUiLCJyZW1vdmVTdHlsZSIsImFkZEF0dHJpYnV0ZSIsImdldEFkZGVkQ2xhc3NlcyIsImdldFJlbW92ZWRDbGFzc2VzIiwiZ2V0Q2hhbmdlZFN0eWxlcyIsImdldFJlbW92ZWRTdHlsZXMiLCJnZXRDaGFuZ2VkQXR0cmlidXRlcyIsImdldFJlbW92ZWRBdHRyaWJ1dGVzIiwiX2VsZW1lbnQkY2xhc3NMaXN0IiwiX2VsZW1lbnQkY2xhc3NMaXN0MiIsImNsYXNzTGlzdCIsImNoYW5nZSIsInNldFByb3BlcnR5IiwicmVtb3ZlUHJvcGVydHkiLCJFeHRlcm5hbE11dGF0aW9uVHJhY2tlcl9kZWZhdWx0Iiwic2hvdWxkVHJhY2tDaGFuZ2VDYWxsYmFjayIsImNoYW5nZWRFbGVtZW50cyIsImNoYW5nZWRFbGVtZW50c0NvdW50IiwiYWRkZWRFbGVtZW50cyIsInJlbW92ZWRFbGVtZW50cyIsImlzU3RhcnRlZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib25NdXRhdGlvbnMiLCJzdGFydCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJzdG9wIiwiZ2V0QWRkZWRFbGVtZW50cyIsImhhbmRsZVBlbmRpbmdDaGFuZ2VzIiwidGFrZVJlY29yZHMiLCJtdXRhdGlvbnMiLCJoYW5kbGVkQXR0cmlidXRlTXV0YXRpb25zIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIm11dGF0aW9uIiwiaXNFbGVtZW50QWRkZWRCeVRyYW5zbGF0aW9uIiwiaXNDaGFuZ2VJbkFkZGVkRWxlbWVudCIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJhZGRlZEVsZW1lbnQiLCJoYW5kbGVDaGlsZExpc3RNdXRhdGlvbiIsImhhbmRsZUF0dHJpYnV0ZU11dGF0aW9uIiwiX3RoaXMyIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImNoYW5nZWRFbGVtZW50IiwiaGFuZGxlQ2xhc3NBdHRyaWJ1dGVNdXRhdGlvbiIsImhhbmRsZVN0eWxlQXR0cmlidXRlTXV0YXRpb24iLCJoYW5kbGVHZW5lcmljQXR0cmlidXRlTXV0YXRpb24iLCJwcmV2aW91c1ZhbHVlcyIsIm9sZFZhbHVlIiwibmV3VmFsdWVzIiwiYWRkZWRWYWx1ZXMiLCJyZW1vdmVkVmFsdWVzIiwicHJldmlvdXNTdHlsZXMiLCJleHRyYWN0U3R5bGVzIiwibmV3U3R5bGVzIiwiYWRkZWRPckNoYW5nZWRTdHlsZXMiLCJyZW1vdmVkU3R5bGVzIiwic3R5bGVzIiwic3R5bGVPYmplY3QiLCJwcm9wZXJ0eSIsIlVuc3luY2VkSW5wdXRzVHJhY2tlcl9kZWZhdWx0IiwibW9kZWxFbGVtZW50UmVzb2x2ZXIiLCJfdGhpczMiLCJlbGVtZW50RXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVJbnB1dEV2ZW50IiwidW5zeW5jZWRJbnB1dHMiLCJVbnN5bmNlZElucHV0Q29udGFpbmVyIiwiYWN0aXZhdGUiLCJfdGhpczQiLCJfcmVmMyIsImRlYWN0aXZhdGUiLCJfdGhpczUiLCJfcmVmNCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXJrTW9kZWxBc1N5bmNlZCIsIm1vZGVsTmFtZSIsInVwZGF0ZU1vZGVsRnJvbUVsZW1lbnQiLCJnZXRNb2RlbE5hbWUiLCJnZXRVbnN5bmNlZElucHV0cyIsImFsbFVuc3luY2VkSW5wdXRzIiwiZ2V0VW5zeW5jZWRNb2RlbHMiLCJnZXRVbnN5bmNlZE1vZGVsTmFtZXMiLCJyZXNldFVuc3luY2VkRmllbGRzIiwidW5zeW5jZWROb25Nb2RlbEZpZWxkcyIsInVuc3luY2VkTW9kZWxOYW1lcyIsInVuc3luY2VkTW9kZWxGaWVsZHMiLCJfdGhpczYiLCJnZXREZWVwRGF0YSIsInByb3BlcnR5UGF0aCIsIl9wYXJzZURlZXBEYXRhIiwicGFyc2VEZWVwRGF0YSIsImN1cnJlbnRMZXZlbERhdGEiLCJmaW5hbEtleSIsImZpbmFsRGF0YSIsInBhcnNlIiwiVmFsdWVTdG9yZV9kZWZhdWx0IiwiZGlydHlQcm9wcyIsInBlbmRpbmdQcm9wcyIsIm5vcm1hbGl6ZWROYW1lIiwiZ2V0T3JpZ2luYWxQcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJnZXREaXJ0eVByb3BzIiwiZ2V0VXBkYXRlZFByb3BzRnJvbVBhcmVudCIsImZsdXNoRGlydHlQcm9wc1RvUGVuZGluZyIsInJlaW5pdGlhbGl6ZUFsbFByb3BzIiwicHVzaFBlbmRpbmdQcm9wc0JhY2tUb0RpcnR5Iiwic3RvcmVOZXdQcm9wc0Zyb21QYXJlbnQiLCJjaGFuZ2VkIiwiX2k1IiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJDb21wb25lbnQiLCJsaXN0ZW5lcnMiLCJiYWNrZW5kIiwiZWxlbWVudERyaXZlciIsIl90aGlzNyIsImZpbmdlcnByaW50IiwiZGVmYXVsdERlYm91bmNlIiwiYmFja2VuZFJlcXVlc3QiLCJwZW5kaW5nQWN0aW9ucyIsInBlbmRpbmdGaWxlcyIsImlzUmVxdWVzdFBlbmRpbmciLCJyZXF1ZXN0RGVib3VuY2VUaW1lb3V0IiwibGlzdGVuZXIiLCJfdGhpczckbGlzdGVuZXJzJGdldCIsInVuc3luY2VkSW5wdXRzVHJhY2tlciIsInJlc2V0UHJvbWlzZSIsImFkZFBsdWdpbiIsInBsdWdpbiIsImF0dGFjaFRvQ29tcG9uZW50IiwiY2xlYXJSZXF1ZXN0RGVib3VuY2VUaW1lb3V0Iiwib24iLCJvZmYiLCJyZVJlbmRlciIsImRlYm91bmNlIiwibmV4dFJlcXVlc3RQcm9taXNlIiwiaXNDaGFuZ2VkIiwiZGVib3VuY2VkU3RhcnRSZXF1ZXN0IiwiZ2V0RGF0YSIsImlucHV0IiwicmVuZGVyIiwidHJ5U3RhcnRpbmdSZXF1ZXN0IiwiZW1pdCIsIm9ubHlNYXRjaGluZ0NvbXBvbmVudHNOYW1lZCIsInBlcmZvcm1FbWl0IiwiZW1pdFVwIiwiZW1pdFNlbGYiLCJkb0VtaXQiLCJtYXRjaGluZ05hbWUiLCJfdGhpczgiLCJpc1R1cmJvRW5hYmxlZCIsIlR1cmJvIiwicGVyZm9ybVJlcXVlc3QiLCJfdGhpczkiLCJ0aGlzUHJvbWlzZVJlc29sdmUiLCJuZXh0UmVxdWVzdFByb21pc2VSZXNvbHZlIiwiZmlsZXNUb1NlbmQiLCJfaTYiLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsInJlcXVlc3RDb25maWciLCJfcmVmNSIsIl9jYWxsZWUyIiwiX2hlYWRlcnMkZ2V0IiwiYmFja2VuZFJlc3BvbnNlIiwiX2k3IiwiX09iamVjdCR2YWx1ZXMiLCJjb250cm9scyIsIl9jb250ZXh0MiIsImRpc3BsYXlFcnJvciIsInJlbmRlckVycm9yIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsIlVSTCIsImhhc2giLCJvcmlnaW4iLCJwcm9jZXNzUmVyZW5kZXIiLCJfeCIsIl90aGlzMCIsInNob3VsZFJlbmRlciIsInZpc2l0IiwibW9kaWZpZWRNb2RlbFZhbHVlcyIsIm1hdGNoZXMiLCJlcnJvciIsIm5ld1Byb3BzIiwiZ2V0Q29tcG9uZW50UHJvcHMiLCJldmVudHNUb0VtaXQiLCJnZXRFdmVudHNUb0VtaXQiLCJicm93c2VyRXZlbnRzVG9EaXNwYXRjaCIsImdldEJyb3dzZXJFdmVudHNUb0Rpc3BhdGNoIiwiX3JlZjYiLCJfcmVmNyIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNhbGN1bGF0ZURlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiX3RoaXMxIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImlmcmFtZSIsImJvcmRlclJhZGl1cyIsImZsZXhHcm93IiwicHJlcGVuZCIsIm92ZXJmbG93IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiZm9jdXMiLCJfdGhpczEwIiwiX3VwZGF0ZUZyb21QYXJlbnRQcm9wcyIsInByb3hpZnlDb21wb25lbnQiLCJQcm94eSIsInByb3AiLCJjYWxsYWJsZSIsIl9sZW4yIiwiX2tleTIiLCJSZWZsZWN0IiwiU3RpbXVsdXNFbGVtZW50RHJpdmVyIiwiY29udHJvbGxlciIsIm1vZGVsRGlyZWN0aXZlIiwicHJvcHNWYWx1ZSIsImV2ZW50c1RvRW1pdFZhbHVlIiwiZXZlbnRzVG9EaXNwYXRjaFZhbHVlIiwiZ2V0X21vZGVsX2JpbmRpbmdfZGVmYXVsdCIsInRhcmdldEV2ZW50TmFtZSIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtb2RpZmllciIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbyIsIl9tb2RlbERpcmVjdGl2ZSRhY3RpbzIiLCJpbm5lck1vZGVsTmFtZSIsIkNoaWxkQ29tcG9uZW50UGx1Z2luX2RlZmF1bHQiLCJwYXJlbnRNb2RlbEJpbmRpbmdzIiwiX3RoaXMxMSIsImdldENoaWxkcmVuRmluZ2VycHJpbnRzIiwibm90aWZ5UGFyZW50TW9kZWxDaGFuZ2UiLCJmaW5nZXJwcmludHMiLCJnZXRDaGlsZHJlbiIsInRhZyIsInRvTG93ZXJDYXNlIiwicGFyZW50Q29tcG9uZW50IiwibW9kZWxCaW5kaW5nIiwiTGF6eVBsdWdpbl9kZWZhdWx0IiwiaW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfY29tcG9uZW50JGVsZW1lbnQkYXQiLCJfdGhpczEyIiwiZ2V0TmFtZWRJdGVtIiwiZ2V0T2JzZXJ2ZXIiLCJfdGhpczEyJGludGVyc2VjdGlvbk8iLCJ1bm9ic2VydmUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkxvYWRpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMTMiLCJyZXF1ZXN0Iiwic3RhcnRMb2FkaW5nIiwiZmluaXNoTG9hZGluZyIsInRhcmdldEVsZW1lbnQiLCJoYW5kbGVMb2FkaW5nVG9nZ2xlIiwiaXNMb2FkaW5nIiwiX3RoaXMxNCIsImFkZEF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGVzIiwiZ2V0TG9hZGluZ0RpcmVjdGl2ZXMiLCJfcmVmOCIsImhhbmRsZUxvYWRpbmdEaXJlY3RpdmUiLCJfdGhpczE1IiwiZmluYWxBY3Rpb24iLCJwYXJzZUxvYWRpbmdBY3Rpb24iLCJkZWxheSIsInZhbGlkTW9kaWZpZXJzIiwiX3ZhbGlkTW9kaWZpZXJzJGdldCIsImxvYWRpbmdEaXJlY3RpdmUiLCJzaG93RWxlbWVudCIsImhpZGVFbGVtZW50IiwibG9hZGluZ0RpcmVjdGl2ZXMiLCJtYXRjaGluZ0VsZW1lbnRzIiwiU1ZHRWxlbWVudCIsImxvYWRpbmciLCJjbGFzc2VzIiwiX2VsZW1lbnQkY2xhc3NMaXN0MyIsIl9lbGVtZW50JGNsYXNzTGlzdDQiLCJhdHRyaWJ1dGUiLCJQYWdlVW5sb2FkaW5nUGx1Z2luX2RlZmF1bHQiLCJpc0Nvbm5lY3RlZCIsIl90aGlzMTYiLCJQb2xsaW5nRGlyZWN0b3JfZGVmYXVsdCIsImlzUG9sbGluZ0FjdGl2ZSIsInBvbGxpbmdJbnRlcnZhbHMiLCJhZGRQb2xsIiwiYWN0aW9uTmFtZSIsImR1cmF0aW9uIiwicG9sbHMiLCJpbml0aWF0ZVBvbGwiLCJzdGFydEFsbFBvbGxpbmciLCJfdGhpczE3IiwiX3JlZjkiLCJzdG9wQWxsUG9sbGluZyIsImNsZWFyUG9sbGluZyIsIl90aGlzMTgiLCJ0aW1lciIsIlBvbGxpbmdQbHVnaW5fZGVmYXVsdCIsIl90aGlzMTkiLCJwb2xsaW5nRGlyZWN0b3IiLCJpbml0aWFsaXplUG9sbGluZyIsIl90aGlzMjAiLCJwb2xsIiwicmF3UG9sbENvbmZpZyIsIndhcm4iLCJTZXRWYWx1ZU9udG9Nb2RlbEZpZWxkc1BsdWdpbl9kZWZhdWx0IiwiX3RoaXMyMSIsInN5bmNocm9uaXplVmFsdWVPZk1vZGVsRmllbGRzIiwiSFRNTEZvcm1FbGVtZW50IiwiVmFsaWRhdGVkRmllbGRzUGx1Z2luX2RlZmF1bHQiLCJfdGhpczIyIiwiaGFuZGxlTW9kZWxTZXQiLCJ2YWxpZGF0ZWRGaWVsZHMiLCJMaXZlQ29udHJvbGxlckRlZmF1bHQiLCJfdGhpczIzIiwiX2xlbjMiLCJfa2V5MyIsInBlbmRpbmdBY3Rpb25UcmlnZ2VyTW9kZWxFbGVtZW50IiwiaGFuZGxlQ2hhbmdlRXZlbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25uZWN0Q29tcG9uZW50IiwiZGlzY29ubmVjdENvbXBvbmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVNb2RlbEZyb21FbGVtZW50RXZlbnQiLCJfdGhpczI0IiwicmF3QWN0aW9uIiwiYWN0aW9uQXJncyIsInN0b3BQcm9wYWdhdGlvbiIsIl92YWxpZE1vZGlmaWVycyRnZXQyIiwiX2k4IiwiX09iamVjdCRlbnRyaWVzNCIsIl9PYmplY3QkZW50cmllczQkX2kiLCIkcmVuZGVyIiwiX3RoaXMyNSIsImdldEVtaXREaXJlY3RpdmVzIiwiX3JlZjAiLCJuYW1lTWF0Y2giLCJfdGhpczI2IiwiX3JlZjEiLCJfdGhpczI3IiwiX3JlZjEwIiwiJHVwZGF0ZU1vZGVsIiwicHJvcHNVcGRhdGVkRnJvbVBhcmVudFZhbHVlQ2hhbmdlZCIsInByb3BzVXBkYXRlZEZyb21QYXJlbnRWYWx1ZSIsImZpbmdlcnByaW50VmFsdWVDaGFuZ2VkIiwiZmluZ2VycHJpbnRWYWx1ZSIsImV2ZW50SW5mbyIsImV2ZW50QXJncyIsImVtaXRzIiwiX3RoaXMyOCIsIm5hbWVWYWx1ZSIsImxpc3RlbmVyc1ZhbHVlIiwiYmFja2VuZEZhY3RvcnkiLCJwcm94aWVkQ29tcG9uZW50IiwiaGFzRGVib3VuY2VWYWx1ZSIsImRlYm91bmNlVmFsdWUiLCJfdGhpczI5IiwiX3JlZjExIiwiX3RoaXMzMCIsIl9yZWYxMiIsImV2ZW50TmFtZSIsIl9lbGVtZW50JGZpbGVzIiwiZmluYWxWYWx1ZSIsImZpbmFsVmFsdWVJc0VtcHR5IiwibnVtZXJpY1ZhbHVlIiwiY2FuQnViYmxlIiwiY2FuY2VsYWJsZSIsIl90aGlzMzEiLCJwcm9wc1VwZGF0ZWRGcm9tUGFyZW50IiwiZXZlbnRzVG9EaXNwYXRjaCIsInJlcXVlc3RNZXRob2QiLCJmZXRjaENyZWRlbnRpYWxzIiwidXJsVmFsdWUiLCJyZXF1ZXN0TWV0aG9kVmFsdWUiLCJmZXRjaENyZWRlbnRpYWxzVmFsdWUiLCJ0dXJib19jb250cm9sbGVyX2RlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9