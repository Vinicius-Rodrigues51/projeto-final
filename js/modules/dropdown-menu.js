import outsideClick from './outsideclick.js';

export default class DropDownMenu {
    constructor(dropDownMenus) {
        this.dropDownMenus = document.querySelectorAll(dropDownMenus)
    }

    handleClick(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.toggle('active')
        outsideClick(element, ['toutchstart', 'click'], () => {
            element.classList.remove('active')
        });
    }

    addDropdownMenusEvent() {
        this.dropDownMenus.forEach(item => {
            ['click', 'touchstart'].forEach(userEvent => {
                item.addEventListener(userEvent, this.handleClick)
            })
        })
    }

    init() {
        if (this.dropDownMenus.length) {
            this.addDropdownMenusEvent()
        }
        return this;
    }
}