import outsideClick from "./outsideclick.js";
export default class MenuMobile {
    constructor(menuButton, menuList) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.events = ['click', 'touchstart']

        this.openMenu = this.openMenu.bind(this)
    }

    openMenu(event) {
        event.preventDefault();
        this.menuList.classList.toggle('active')
        this.menuButton.classList.toggle('active')
        outsideClick(this.menuList, this.events, () => {
            this.menuList.classList.remove('active')
            this.menuButton.classList.remove('active')
        })
    }

    addMenuEvent() {
       this.events.forEach( evento => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init() {
        this.addMenuEvent();
        return this;
    }
}