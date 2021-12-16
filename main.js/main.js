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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordions)\n/* harmony export */ });\nclass Accordions {\r\n    constructor(list, className) {\r\n        this.accordionList = document.querySelectorAll(list);\r\n        this.activeClass = className || 'ativo' // da a opção do usuario escolher o nome da classe usada, se n for declarada, por padrao usa 'ativo'\r\n    }\r\n\r\n    // cria a funcionalidade de dar toggle aos itens \r\n    toggleAccordion(item) {\r\n        item.classList.toggle(this.activeClass);\r\n        item.nextElementSibling.classList.toggle(this.activeClass);\r\n    }\r\n\r\n    // adiciona a funcionalidade de toggle para todos os itens da lista\r\n    addAccordionEvent() {\r\n        this.accordionList.forEach(item => {\r\n            item.addEventListener('click', () => this.toggleAccordion(item));\r\n        })\r\n    }\r\n\r\n    // inicia a funcionalidade da classe\r\n    init() {\r\n        if (this.accordionList.length) { // verifica se existe item na lista para iniciar o código\r\n            this.toggleAccordion(this.accordionList[0]) // ativa o primeiro item da lista para quando site for aberto\r\n            this.addAccordionEvent();\r\n        }\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n    constructor(numeros, obeserverTarget, obeserverClass) {\r\n        this.numeros = document.querySelectorAll(numeros);\r\n        this.obeserverTarget = document.querySelector(obeserverTarget)\r\n        this.obeserverClass = obeserverClass || 'ativo';\r\n\r\n        this.handleMutation = this.handleMutation.bind(this)\r\n    }\r\n\r\n    static incrementoNumero(numero) {\r\n        const total = +item.innerText;\r\n        let start = 0\r\n        let incremento = Math.floor(total / 50)\r\n        const timer = setInterval(() => {\r\n            start = start + incremento\r\n            item.innerText = start\r\n\r\n            if (start > total) {\r\n                item.innerText = total\r\n                clearInterval(timer)\r\n            }\r\n        }, 30)\r\n    }\r\n\r\n    animaNumero() {\r\n        this.numeros.forEach(numero => this.constructor.incrementoNumero(numero));\r\n    }\r\n\r\n    handleMutation(mutation) {\r\n        if (mutation[0].target.classList.contains(this.obeserverClass)) {\r\n            this.observer.disconnect();\r\n            this.animaNumeros();\r\n        }\r\n    }\r\n\r\n    addMutationObserver() {\r\n        this.observer = new MutationObserver(this.handleMutation)\r\n        this.observer.observe(this.observerTarget, { attributes: true })\r\n    }\r\n\r\n    init() {\r\n        if(this.numeros.length && this.obeserverTarget) {\r\n            this.addMutationObserver();\r\n            return this;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/anima-numeros.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\nfunction initFetchAnimais() {\r\n    async function fetchAnimais(url) {\r\n        const animaisResponse = await fetch(url)\r\n        const animaisJson = await animaisResponse.json()\r\n        const numerosGrid = document.querySelector('.numeros-grid')\r\n\r\n\r\n        animaisJson.forEach(animais => {\r\n            const divAnimal = createAnimal(animais);\r\n            numerosGrid.appendChild(divAnimal)\r\n        });\r\n        \r\n        const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]');\r\n        animaNumeros.init()\r\n    }\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement('div')\r\n        div.classList.add('numero-animal')\r\n\r\n        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`\r\n\r\n        return div;\r\n    }\r\n    fetchAnimais('./animalsAPI.json')\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/fetch-animais.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n    constructor(botaoAbrir, botaoFechar, containerModal) {\r\n        this.botaoAbrir = document.querySelector(botaoAbrir);\r\n        this.botaoFechar = document.querySelector(botaoFechar);\r\n        this.containerModal = document.querySelector(containerModal);\r\n\r\n        this.eventToggleModal = this.eventToggleModal.bind(this);\r\n        this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n    }\r\n\r\n    toggleModal() {\r\n        this.containerModal.classList.toggle('ativo')\r\n    }\r\n\r\n    eventToggleModal(event) {\r\n        event.preventDefault();\r\n        this.toggleModal();\r\n    }\r\n\r\n    cliqueForaModal(event) {\r\n        if (event.target === this.containerModal) {\r\n            this.toggleModal()\r\n        }\r\n    }\r\n\r\n    addModalEvents() {\r\n        this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n        this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n        this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n    }\r\n\r\n    init() {\r\n        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n            this.addModalEvents()\r\n        }\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\nclass AnimacaoScroll {\r\n    constructor(sections) {\r\n        this.sections = document.querySelectorAll(sections);\r\n        this.windowHeight = window.innerHeight * 0.6;\r\n\r\n        this.checkDistance = this.checkDistance.bind(this)\r\n    }\r\n\r\n    getDistance() {\r\n        this.distance = [...this.sections].map( section => {\r\n            const offset = section.offsetTop;\r\n            return {\r\n                element: section,\r\n                offset: Math.floor(offset - this.windowHeight),\r\n            };\r\n        })\r\n    }\r\n\r\n    checkDistance() {\r\n        this.distance.forEach( item => {\r\n            if (window.pageYOffset > item.offset) {\r\n                item.element.classList.add('ativo')\r\n            }\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if(this.sections.length) {\r\n            this.getDistance();\r\n            this.checkDistance();\r\n            window.addEventListener('scroll', this.checkDistance);\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkScroll)\n/* harmony export */ });\nclass LinkScroll {\r\n    constructor(links, options) {\r\n        this.linksInternos = document.querySelectorAll(links);\r\n        if (options === undefined) {\r\n            this.options = { behavior: 'smooth', block: 'start' }\r\n        }else {\r\n            this.options = options;\r\n        }\r\n\r\n        this.scrollToSection = this.scrollToSection.bind(this);\r\n    }\r\n\r\n    scrollToSection(e) {\r\n        e.preventDefault();\r\n        const href = e.currentTarget.getAttribute('href')\r\n        const section = document.querySelector(href)\r\n        \r\n        section.scrollIntoView(this.options)\r\n    }\r\n\r\n    addLinkEvent() {\r\n        this.linksInternos.forEach(item => {\r\n            item.addEventListener('click', this.scrollToSection);\r\n        })\r\n    }\r\n\r\n    init() {\r\n        this.addLinkEvent()\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n    constructor(menu, content) {\r\n        this.tabMenu = document.querySelectorAll(menu);\r\n        this.tabContent = document.querySelectorAll(content);\r\n        this.activeClass = 'ativo'\r\n    }\r\n\r\n    activeTab(index) {\r\n        this.tabContent.forEach(section => {\r\n            section.classList.remove(this.activeClass);\r\n        });\r\n        const direcao = this.tabContent[index].dataset.anime\r\n        this.tabContent[index].classList.add(this.activeClass, direcao);\r\n    }\r\n\r\n    addTabNavEvent() {\r\n        this.tabMenu.forEach((item, index) => {\r\n            item.addEventListener('click', () => {\r\n                this.activeTab(index)\r\n            })\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if (this.tabContent.length && this.tabMenu.length){\r\n            this.activeTab(0);\r\n            this.addTabNavEvent();\r\n        }\r\n        return this;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/initMenuMobile.js */ \"./js/modules/initMenuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.js-menu a[href^=\"#\"]')\r\nscrollSuave.init()\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.js-accordion dt')\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]')\r\nmodal.init()\r\n\r\nconst animacaoScroll = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.js-scroll');\r\nanimacaoScroll.init();\r\n\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://projeto-final/./js/script.js?");

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