export default class Accordions {
    constructor(list, className) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = className || 'ativo' // da a opção do usuario escolher o nome da classe usada, se n for declarada, por padrao usa 'ativo'
    }

    // cria a funcionalidade de dar toggle aos itens 
    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // adiciona a funcionalidade de toggle para todos os itens da lista
    addAccordionEvent() {
        this.accordionList.forEach(item => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        })
    }

    // inicia a funcionalidade da classe
    init() {
        if (this.accordionList.length) { // verifica se existe item na lista para iniciar o código
            this.toggleAccordion(this.accordionList[0]) // ativa o primeiro item da lista para quando site for aberto
            this.addAccordionEvent();
        }
        return this;
    }
}