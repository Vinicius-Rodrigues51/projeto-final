/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabFaq)\n/* harmony export */ });\nfunction initTabFaq() {\r\n    const accordionList = document.querySelectorAll('.js-accordion dt')\r\n    if(accordionList.length) {\r\n        accordionList[0].classList.add('ativo')\r\n        accordionList[0].nextElementSibling.classList.add('ativo')\r\n\r\n        function activeAccordion() {\r\n            this.classList.toggle('ativo')\r\n            this.nextElementSibling.classList.toggle('ativo');\r\n        }\r\n\r\n        accordionList.forEach(item => {\r\n            item.addEventListener('click', activeAccordion);\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n    function animaNumeros() {\r\n        const numeros = document.querySelectorAll('[data-numero]')\r\n\r\n        numeros.forEach(item => {\r\n            const total = +item.innerText;\r\n            let start = 0\r\n            let incremento = Math.floor(total / 50)\r\n            const timer = setInterval(() => {\r\n                start = start + incremento\r\n                item.innerText = start\r\n\r\n                if (start > total) {\r\n                    item.innerText = total\r\n                    clearInterval(timer)\r\n                }\r\n            }, 30)\r\n        })\r\n    }\r\n\r\n    function handleMutation(mutation) {\r\n        if (mutation[0].target.classList.contains('ativo')) {\r\n            observer.disconnect();\r\n            animaNumeros();\r\n        }\r\n    }\r\n\r\n    const observerTarget = document.querySelector('.numeros')\r\n    const observer = new MutationObserver(handleMutation)\r\n\r\n    observer.observe(observerTarget, { attributes: true })\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropDownMenu)\n/* harmony export */ });\nfunction dropDownMenu() {\r\n    const dropDownMenus = document.querySelectorAll('[data-dropdown]')\r\n\r\n    dropDownMenus.forEach(item => {\r\n        ['click', 'touchstart'].forEach(userEvent => {\r\n            item.addEventListener(userEvent, handleClick)\r\n        })\r\n    })\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault();\r\n        this.classList.toggle('active')\r\n        outsideClick(this, () => {\r\n            this.classList.remove('active')\r\n        });\r\n    }\r\n\r\n    function outsideClick(element, callback) {\r\n        const html = document.documentElement;\r\n        html.addEventListener('click', handleClickOutside);\r\n\r\n        function handleClickOutside(event) {\r\n            if (!element.contains(event.target)) {\r\n                html.removeEventListener('click', handleClickOutside);\r\n                callback();\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\nfunction initFetchAnimais() {\r\n    async function fetchAnimais(url) {\r\n        const animaisResponse = await fetch(url)\r\n        const animaisJson = await animaisResponse.json()\r\n        const numerosGrid = document.querySelector('.numeros-grid')\r\n\r\n\r\n        animaisJson.forEach(animais => {\r\n            const divAnimal = createAnimal(animais);\r\n            numerosGrid.appendChild(divAnimal)\r\n        });\r\n        (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement('div')\r\n        div.classList.add('numero-animal')\r\n\r\n        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\r\n\r\n        return div;\r\n    }\r\n    fetchAnimais('./animalsAPI.json')\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetchBtc.js":
/*!********************************!*\
  !*** ./js/modules/fetchBtc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBTC)\n/* harmony export */ });\nfunction fetchBTC() {\r\n    \r\n}\r\n\r\nfetch('https://blockchain.info/ticker')\r\n.then(response => response.json())\r\n.then(json => {\r\n    const btcPreco = document.querySelector('.btc-preco')\r\n    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4) + '₿ = 1.000R$'\r\n})\n\n//# sourceURL=webpack://projeto-final/./js/modules/fetchBtc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n    const funcionamento = document.querySelector('[data-semana]')\r\n    const diaSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n\r\n    const agora = new Date();\r\n    const diaAgora = agora.getDay();\r\n    const horarioAgora = agora.getHours();\r\n\r\n    const aberto = diaSemana.indexOf(diaAgora) != -1\r\n    const horario = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\n\r\n    if (aberto && horario) {\r\n        funcionamento.classList.add('aberto')\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/initMenuMobile.js":
/*!**************************************!*\
  !*** ./js/modules/initMenuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction initMenuMobile() {\r\n    const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n    const menuList = document.querySelector('[data-menu=\"list\"]')\r\n\r\n    function openMenu(event) {\r\n        menuList.classList.toggle('active')\r\n        menuButton.classList.toggle('active')\r\n        outsideClick(this, () => {\r\n            menuList.classList.remove('active')\r\n            menuButton.classList.remove('active')\r\n        })\r\n    }\r\n\r\n    function outsideClick(element, callback) {\r\n        const html = document.documentElement;\r\n        html.addEventListener('click', handleClickOutside)\r\n\r\n        function handleClickOutside(event) {\r\n            if (!element.contains(event.target)) {\r\n                html.removeEventListener('click', handleClickOutside);\r\n                callback()\r\n            }\r\n        }\r\n    }\r\n\r\n    menuButton.addEventListener('click', openMenu)\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/initMenuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n    const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n    const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n    const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n    if (botaoAbrir && botaoFechar && containerModal) {\r\n\r\n        function toggleModal(event) {\r\n            event.preventDefault();\r\n            containerModal.classList.toggle('ativo')\r\n        }\r\n\r\n        function cliqueForaModal(event) {\r\n            if (event.target === this) {\r\n                toggleModal(event)\r\n            }\r\n        }\r\n\r\n        botaoAbrir.addEventListener('click', toggleModal);\r\n        botaoFechar.addEventListener('click', toggleModal);\r\n        containerModal.addEventListener('click', cliqueForaModal);\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n    const sections = document.querySelectorAll('.js-scroll');\r\n    if (sections.length) {\r\n        const windowHeight = window.innerHeight * 0.6;\r\n\r\n        function animaScroll() {\r\n            sections.forEach(item => {\r\n                const sectionTop = item.getBoundingClientRect().top;\r\n                const isSectionVisible = (sectionTop - windowHeight) < 0;\r\n                if (isSectionVisible) {\r\n                    item.classList.add('ativo');\r\n                // } else if(item.classList.contains('ativo')) {\r\n                //     item.classList.remove('ativo');   if para fazer com q a animação seja removida caso o scroll volte para cima\r\n                }\r\n            })\r\n        }\r\n\r\n        animaScroll();\r\n\r\n        window.addEventListener('scroll', animaScroll)\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ linkScroll)\n/* harmony export */ });\nfunction linkScroll() {\r\n    const linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\r\n\r\n    function scrollToSection(e) {\r\n        e.preventDefault();\r\n        const href = e.currentTarget.getAttribute('href')\r\n        const section = document.querySelector(href)\r\n        \r\n        section.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n        })\r\n\r\n\r\n\r\n        // const top = section.offsetTop;\r\n        // window.scrollTo({\r\n        //     top: top,\r\n        //     behavior: 'smooth',\r\n        // })\r\n    }\r\n\r\n    linksInternos.forEach(item => {\r\n        item.addEventListener('click', scrollToSection);\r\n    })\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabMenu)\n/* harmony export */ });\nfunction initTabMenu() {\r\n    const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n    const tabContent = document.querySelectorAll('[data-tab=\"content\"] section')\r\n\r\n    if(tabContent.length && tabMenu.length) {\r\n        tabContent[0].classList.add('ativo')\r\n        function activeTab(index) {\r\n            tabContent.forEach(section => {\r\n                section.classList.remove('ativo');\r\n            });\r\n            const direcao = tabContent[index].dataset.anime\r\n            tabContent[index].classList.add('ativo', direcao);\r\n        }\r\n\r\n        tabMenu.forEach((item, index) => {\r\n            item.addEventListener('click', () => {\r\n                activeTab(index)\r\n            })\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/initMenuMobile.js */ \"./js/modules/initMenuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://projeto-final/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;