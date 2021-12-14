export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowHeight = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach(item => {
                const sectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHeight) < 0;
                if (isSectionVisible) {
                    item.classList.add('ativo');
                // } else if(item.classList.contains('ativo')) {
                //     item.classList.remove('ativo');   if para fazer com q a animação seja removida caso o scroll volte para cima
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll)
    }
}