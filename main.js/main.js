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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n    constructor(numeros, observerTarget, observerClass) {\r\n      this.numeros = document.querySelectorAll(numeros);\r\n      this.observerTarget = document.querySelector(observerTarget);\r\n      this.observerClass = observerClass;\r\n  \r\n      // bind o this do objeto ao callback da mutação\r\n      this.handleMutation = this.handleMutation.bind(this);\r\n    }\r\n  \r\n    // Recebe um elemento do dom, com número em seu texto\r\n    // incrementa a partir de 0 até o número final\r\n    static incrementarNumero(numero) {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    }\r\n  \r\n    // Ativa incrementar número para cada\r\n    // número selecionado do dom\r\n    animaNumeros() {\r\n      this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));\r\n    }\r\n  \r\n    // Função que ocorre quando a mutações ocorrer\r\n    handleMutation(mutation) {\r\n      if (mutation[0].target.classList.contains(this.observerClass)) {\r\n        this.observer.disconnect();\r\n        this.animaNumeros();\r\n      }\r\n    }\r\n  \r\n    // Adiciona o MutationObserver para verificar\r\n    // quanto a classe ativo é adiciona ao element target\r\n    addMutationObserver() {\r\n      this.observer = new MutationObserver(this.handleMutation);\r\n      this.observer.observe(this.observerTarget, { attributes: true });\r\n    }\r\n  \r\n    init() {\r\n      if (this.numeros.length && this.observerTarget) {\r\n        this.addMutationObserver();\r\n      }\r\n      return this;\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack://projeto-final/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n    let timer;\r\n\r\n    return (...args) => {\r\n        if (timer) {\r\n            clearTimeout(timer)\r\n        }\r\n        timer = setTimeout(() => {\r\n            callback(...args)\r\n            timer = null;\r\n        }, delay);\r\n    };\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass DropDownMenu {\r\n    constructor(dropDownMenus) {\r\n        this.dropDownMenus = document.querySelectorAll(dropDownMenus)\r\n    }\r\n\r\n    handleClick(event) {\r\n        event.preventDefault();\r\n        const element = event.currentTarget;\r\n        element.classList.toggle('active')\r\n        ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, ['toutchstart', 'click'], () => {\r\n            element.classList.remove('active')\r\n        });\r\n    }\r\n\r\n    addDropdownMenusEvent() {\r\n        this.dropDownMenus.forEach(item => {\r\n            ['touchstart', 'click'].forEach(userEvent => {\r\n                item.addEventListener(userEvent, this.handleClick)\r\n            })\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if (this.dropDownMenus.length) {\r\n            this.addDropdownMenusEvent()\r\n        }\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  // Cria a div contendo informações\r\n  // com o total de animais\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  // Preenche cada animal no DOM\r\n  const numerosGrid = document.querySelector(target);\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n  // Anima os números de cada animal\r\n  function animaAnimaisNumeros() {\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\r\n    animaNumeros.init();\r\n  }\r\n\r\n  // Puxa os animais através de um arquivo json\r\n  // e cria cada animal utilizando createAnimal\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch, espera a resposta e transforma em json\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n\r\n      // Após a transformação de json, ativa as funções\r\n      // para preencher e animar os números\r\n      animaisJSON.forEach(animal => preencherAnimais(animal));\r\n      animaAnimaisNumeros();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://projeto-final/./js/modules/fetch-animais.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n    constructor(funcionamento, activeClass) {\r\n        this.funcionamento = document.querySelector(funcionamento);\r\n        this.activeClass = activeClass || 'aberto'\r\n    }\r\n\r\n    dadosFuncionamento() {\r\n        this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number)\r\n        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)\r\n    }\r\n\r\n    dadosAgora() {\r\n        this.agora = new Date();\r\n        this.diaAgora = this.agora.getDay();\r\n        this.horarioAgora = this.agora.getUTCHours() - 3;\r\n    }\r\n\r\n    estaAberto() {\r\n        const aberto = this.diaSemana.indexOf(this.diaAgora) != -1;\r\n        const horario = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];\r\n\r\n        return aberto && horario;\r\n    };\r\n\r\n    ativaAberto() {\r\n        if (this.estaAberto()) {\r\n            this.funcionamento.classList.add(this.activeClass);\r\n        }\r\n    }\r\n\r\n    init() {\r\n        if(this.funcionamento) {\r\n            this.dadosFuncionamento();\r\n            this.dadosAgora();\r\n            this.ativaAberto();\r\n        }\r\n        return this;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/initMenuMobile.js":
/*!**************************************!*\
  !*** ./js/modules/initMenuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\nclass MenuMobile {\r\n    constructor(menuButton, menuList) {\r\n        this.menuButton = document.querySelector(menuButton);\r\n        this.menuList = document.querySelector(menuList);\r\n        this.events = ['click', 'touchstart']\r\n\r\n        this.openMenu = this.openMenu.bind(this)\r\n    }\r\n\r\n    openMenu(event) {\r\n        event.preventDefault();\r\n        this.menuList.classList.toggle('active')\r\n        this.menuButton.classList.toggle('active')\r\n        ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n            this.menuList.classList.remove('active')\r\n            this.menuButton.classList.remove('active')\r\n        })\r\n    }\r\n\r\n    addMenuEvent() {\r\n       this.events.forEach( evento => this.menuButton.addEventListener(evento, this.openMenu));\r\n    }\r\n\r\n    init() {\r\n        this.addMenuEvent();\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/initMenuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n    constructor(botaoAbrir, botaoFechar, containerModal) {\r\n        this.botaoAbrir = document.querySelector(botaoAbrir);\r\n        this.botaoFechar = document.querySelector(botaoFechar);\r\n        this.containerModal = document.querySelector(containerModal);\r\n\r\n        this.eventToggleModal = this.eventToggleModal.bind(this);\r\n        this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n    }\r\n\r\n    toggleModal() {\r\n        this.containerModal.classList.toggle('ativo')\r\n    }\r\n\r\n    eventToggleModal(event) {\r\n        event.preventDefault();\r\n        this.toggleModal();\r\n    }\r\n\r\n    cliqueForaModal(event) {\r\n        if (event.target === this.containerModal) {\r\n            this.toggleModal()\r\n        }\r\n    }\r\n\r\n    addModalEvents() {\r\n        this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n        this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n        this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n    }\r\n\r\n    init() {\r\n        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n            this.addModalEvents()\r\n        }\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-final/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass AnimacaoScroll {\r\n    constructor(sections) {\r\n        this.sections = document.querySelectorAll(sections);\r\n        this.windowHeight = window.innerHeight * 0.6;\r\n\r\n        this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 10);\r\n    }\r\n\r\n    getDistance() {\r\n        this.distance = [...this.sections].map( section => {\r\n            const offset = section.offsetTop;\r\n            return {\r\n                element: section,\r\n                offset: Math.floor(offset - this.windowHeight),\r\n            };\r\n        })\r\n    }\r\n\r\n    checkDistance() {\r\n        this.distance.forEach( item => {\r\n            if (window.pageYOffset > item.offset) {\r\n                item.element.classList.add('ativo')\r\n            }\r\n        })\r\n    }\r\n\r\n    init() {\r\n        if(this.sections.length) {\r\n            this.getDistance();\r\n            this.checkDistance();\r\n            window.addEventListener('scroll', this.checkDistance);\r\n        }\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkScroll)\n/* harmony export */ });\nclass LinkScroll {\r\n    constructor(links, options) {\r\n        this.linksInternos = document.querySelectorAll(links);\r\n        if (options === undefined) {\r\n            this.options = { behavior: 'smooth', block: 'start' }\r\n        }else {\r\n            this.options = options;\r\n        }\r\n\r\n        this.scrollToSection = this.scrollToSection.bind(this);\r\n    }\r\n\r\n    scrollToSection(e) {\r\n        e.preventDefault();\r\n        const href = e.currentTarget.getAttribute('href')\r\n        const section = document.querySelector(href)\r\n        \r\n        section.scrollIntoView(this.options)\r\n    }\r\n\r\n    addLinkEvent() {\r\n        this.linksInternos.forEach(item => {\r\n            item.addEventListener('click', this.scrollToSection);\r\n        })\r\n    }\r\n\r\n    init() {\r\n        this.addLinkEvent()\r\n        return this;\r\n    }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide)\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = {\r\n      finalPosition: 0,\r\n      startX: 0,\r\n      movement: 0\r\n    }\r\n\r\n    this.activeClass = 'ativo';\r\n    this.changeEvent = new Event('changeEvent');\r\n  }\r\n\r\n  transition(active) {\r\n    this.slide.style.transition = active ? 'transform .3s' : '';\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n    if (event.type === 'mousedown') {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = 'mousemove';\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = 'touchmove';\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener('mousedown', this.onStart);\r\n    this.wrapper.addEventListener('touchstart', this.onStart);\r\n    this.wrapper.addEventListener('mouseup', this.onEnd);\r\n    this.wrapper.addEventListener('touchend', this.onEnd);\r\n  }\r\n\r\n  // Slides config\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return {\r\n        position,\r\n        element\r\n      };\r\n    });\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    }\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach(item => item.element.classList.remove(this.activeClass));\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 500);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener('resize', this.onResize)\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.addResizeEvent();\r\n    this.changeSlide(0);\r\n\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener('click', this.activePrevSlide);\r\n    this.nextElement.addEventListener('click', this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement('ul')\r\n    control.dataset.control = 'slide';\r\n\r\n    this.slideArray.forEach( (item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index  + 1}\">${index + 1}</a></li>`\r\n    });\r\n    this.wrapper.appendChild(control);\r\n\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem)\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach( item => {\r\n      item.classList.remove(this.activeClass);\r\n    })\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control = document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\n\n//# sourceURL=webpack://projeto-final/./js/modules/slide.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/initMenuMobile.js */ \"./js/modules/initMenuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.js-menu a[href^=\"#\"]')\r\nscrollSuave.init()\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.js-accordion dt')\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]')\r\nmodal.init()\r\n\r\nconst animacaoScroll = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('.js-scroll');\r\nanimacaoScroll.init();\r\n\r\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-dropdown]');\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modules_initMenuMobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]')\r\nmenuMobile.init()\r\n\r\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-semana]');\r\nfuncionamento.init();\r\n\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('./animalsAPI.json', '.numeros-grid');\r\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n\r\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('.slide', '.slide-wrapper');\r\nslide.init();\r\nslide.addControl('.custom-controls');\n\n//# sourceURL=webpack://projeto-final/./js/script.js?");

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