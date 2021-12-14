export default function dropDownMenu() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown]')

    dropDownMenus.forEach(item => {
        ['click', 'touchstart'].forEach(userEvent => {
            item.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active')
        outsideClick(this, () => {
            this.classList.remove('active')
        });
    }

    function outsideClick(element, callback) {
        const html = document.documentElement;
        html.addEventListener('click', handleClickOutside);

        function handleClickOutside(event) {
            if (!element.contains(event.target)) {
                html.removeEventListener('click', handleClickOutside);
                callback();
            }
        }
    }
}