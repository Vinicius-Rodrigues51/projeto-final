export default class Funcionamento {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = activeClass || 'aberto'
    }

    dadosFuncionamento() {
        this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number)
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
    }

    dadosAgora() {
        this.agora = new Date();
        this.diaAgora = this.agora.getDay();
        this.horarioAgora = this.agora.getUTCHours() - 3;
    }

    estaAberto() {
        const aberto = this.diaSemana.indexOf(this.diaAgora) != -1;
        const horario = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];

        return aberto && horario;
    };

    ativaAberto() {
        if (this.estaAberto()) {
            this.funcionamento.classList.add(this.activeClass);
        }
    }

    init() {
        if(this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        }
        return this;
    }

}