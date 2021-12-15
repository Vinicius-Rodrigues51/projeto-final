import LinkScroll from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordions from './modules/accordion.js';
import initTabMenu from './modules/tabnav.js';
import initModal from './modules/modal.js';
import dropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/initMenuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import fetchBTC from './modules/fetchBtc.js';

const scrollSuave = new LinkScroll('.js-menu a[href^="#"]')
scrollSuave.init()

const accordion = new Accordions('.js-accordion dt')
accordion.init();

initTabMenu();
initAnimacaoScroll();
initModal();
dropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
fetchBTC()