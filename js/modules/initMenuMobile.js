export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')

    function openMenu(event) {
        menuList.classList.toggle('active')
        menuButton.classList.toggle('active')
        outsideClick(this, () => {
            menuList.classList.remove('active')
            menuButton.classList.remove('active')
        })
    }

    function outsideClick(element, callback) {
        const html = document.documentElement;
        html.addEventListener('click', handleClickOutside)

        function handleClickOutside(event) {
            if (!element.contains(event.target)) {
                html.removeEventListener('click', handleClickOutside);
                callback()
            }
        }
    }

    menuButton.addEventListener('click', openMenu)
}