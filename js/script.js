import LinkScroll from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordions from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import dropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/initMenuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import fetchBTC from './modules/fetchBtc.js';
import AnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new LinkScroll('.js-menu a[href^="#"]')
scrollSuave.init()

const accordion = new Accordions('.js-accordion dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

const animacaoScroll = new AnimacaoScroll('.js-scroll');
animacaoScroll.init();

dropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
fetchBTC()