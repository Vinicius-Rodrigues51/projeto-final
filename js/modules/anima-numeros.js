export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]')

        numeros.forEach(item => {
            const total = +item.innerText;
            let start = 0
            let incremento = Math.floor(total / 50)
            const timer = setInterval(() => {
                start = start + incremento
                item.innerText = start

                if (start > total) {
                    item.innerText = total
                    clearInterval(timer)
                }
            }, 30)
        })
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }

    const observerTarget = document.querySelector('.numeros')
    const observer = new MutationObserver(handleMutation)

    observer.observe(observerTarget, { attributes: true })
}