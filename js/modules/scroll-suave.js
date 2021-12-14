export default function linkScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })



        // const top = section.offsetTop;
        // window.scrollTo({
        //     top: top,
        //     behavior: 'smooth',
        // })
    }

    linksInternos.forEach(item => {
        item.addEventListener('click', scrollToSection);
    })
}