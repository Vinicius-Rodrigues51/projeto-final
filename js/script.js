import LinkScroll from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordions from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/initMenuMobile.js';
import Funcionamento from './modules/funcionamento.js';
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

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();


initFetchAnimais();
fetchBTC()