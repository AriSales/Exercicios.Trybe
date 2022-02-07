function createStates() {
    const states = document.getElementById('your-estado');
    const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let indexOption = 0; indexOption < stateOptions.length; indexOption += 1) {
        let option = document.createElement("option");
        option.innerText = stateOptions[indexOption];
        option.value = stateOptions[indexOption];
        states.appendChild(option);
    }
  }

createStates();

function verificaData() {
    var data = document.querySelector("#start").value
    var dia = [];
    dia.push(data[8]);
    dia.push(data[9]);
    dia = (dia[0] + dia[1]);

    var mes = [];
    mes.push(data[5]);
    mes.push(data[6]);
    mes = (mes[0] + mes[1]);

    if ((data.length < 10) || (dia > 31 || dia < 0) || (mes < 0 || mes > 12)){
        alert('Mês inválido, verifique novamente.');
    }
}
verificaData();

const botao = document.querySelector("#enviar");
botao.addEventListener('click', getElementById)

function getUserValue(event) {
    event.preventDefaut();
}