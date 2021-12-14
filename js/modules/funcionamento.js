export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diaSemana = funcionamento.dataset.semana.split(',').map(Number)
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

    const agora = new Date();
    const diaAgora = agora.getDay();
    const horarioAgora = agora.getHours();

    const aberto = diaSemana.indexOf(diaAgora) != -1
    const horario = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

    if (aberto && horario) {
        funcionamento.classList.add('aberto')
    }
}