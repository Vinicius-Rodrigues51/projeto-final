export default class AnimaNumeros {
    constructor(numeros, obeserverTarget, obeserverClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.obeserverTarget = document.querySelector(obeserverTarget)
        this.obeserverClass = obeserverClass || 'ativo';

        this.handleMutation = this.handleMutation.bind(this)
    }

    static incrementoNumero(numero) {
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
    }

    animaNumero() {
        this.numeros.forEach(numero => this.constructor.incrementoNumero(numero));
    }

    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.obeserverClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation)
        this.observer.observe(this.observerTarget, { attributes: true })
    }

    init() {
        if(this.numeros.length && this.obeserverTarget) {
            this.addMutationObserver();
            return this;
        }
    }
}