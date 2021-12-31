//Exercicios 1.
const a =5;
const b =2;

const adicao = (a + b);
const subtracao = (a - b);
const multiplicacao = (a * b);
const divisao = (a / b);
const modulo = (a % b);

console.log(adicao, subtracao, multiplicacao, divisao, modulo);

//Exercicios 2.
const n1 = 55;
const n2 = 23;

if (n1 > n2){
    console.log(n1 + " é o maior número!")
}
else {
    console.log(n2 + " é o maior número!")
}

//Exercicio 3.
const n1 = 15;
const n2 = 1;
const n3 = 99999;

if ((n1 > n2) && (n1 > n3)){
    console.log(n1 + " é o maior número!");
}
else if ((n2 > n1) && (n2 > n3)){
    console.log(n2 + " é o maior número!");
}
else {
    console.log(n3 + " é o maior número!");
}

//Exercicio 4.
const n = true;

if (n === true) {
    console.log('positive')
}
else if (n === false) {
    console.log('negative')
}
else {
    console.log('zero')
}

//Exercicio 5.
const angulo1 = 50;
const angulo2 = 50;
const angulo3 = 80;

if ((angulo1 > 0) && (angulo2 > 0) && (angulo3 > 0)){
    if ((angulo1 + angulo2 + angulo3) === 180){
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Error 404!')
}

//Exercicio 6.
const peça = 'RaInhA';
const lower = peça.toLocaleLowerCase();

switch (lower) {
    case 'cavalo':
        console.log("Anda em L");
        break;

    case 'bispo':
        console.log("Anda sobre as diagonais");
        break;

    case 'rainha':
        console.log("Tem a movimentação de todas as peças");
        break;
        
    case 'rei':
        console.log("Anda 1 bloco para qualquer direção");
        break;

    case 'torre':
        console.log("Anda em linha");
        break;

    case 'peão':
        console.log("Anda 1 bloco para frente");
        break;
    
    default:
        console.log('Error 404');
}

//Exercicio 7.
const nota = 90;

if ((nota > 100) || (nota < 0)){
    console.log('Error 404');
}
else {
    if (nota >= 90) {
        console.log('A');
    }
    else if (nota >= 80) {
        console.log('B')
    }
    else if (nota >= 70) {
        console.log('C')
    }
    else if (nota >= 60) {
        console.log('D')
    }
    else if (nota >= 50) {
        console.log('E')
    }
    else if (nota < 50) {
        console.log('F')
    }
}

//Exercicio 8.
const n1 = 51;
const n2 = 3;
const n3 = 1;

if ((n1 % 2 === 0) || (n2 % 2 === 0) || (n3 % 2 === 0)) {
    console.log(true);
}
else {
    console.log(false);
}

//Exercicio 9.
const n1 = 2;
const n2 = 4;
const n3 = 6;

if ((n1 % 2 !== 0) || (n2 % 2 !== 0) || (n3 % 2 !== 0)) {
    console.log(true);
}
else {
    console.log(false);
}

//Exercicio 10.
const custo = 1000.00;
const venda = 1250.00;
const custoTotal = custo + ((custo * 20)/100);
const lucro = venda - custoTotal;
const lucroTotal = lucro * 1000.00

if ((custo < 0) || (venda < 0)) {
    console.log('Error 404');
}
else {
    console.log('Ao vender 1000 desse produto, você terá: ' + lucroTotal + ' reais' + ' de lucro!');
}

//Exercicio 11.
const salarioBruto = 3000;
let INSS;
let IR;
let reajuste;
let reajuste2;

if (salarioBruto <= 1556.94){
    INSS = (salarioBruto * 8) / 100;
    reajuste = salarioBruto - INSS;
    
    console.log('INSS (Instituto Nacional do Seguro Social): ' + INSS + ' ----- 8%');
    console.log('Reajuste: ' + reajuste +' (' + salarioBruto + '-' + INSS + ')');
}
else if ((salarioBruto >= 1556.95) && (salarioBruto <= 2594.92)){
    INSS = (salarioBruto * 9) / 100;
    reajuste = salarioBruto - INSS;
    
    console.log('INSS (Instituto Nacional do Seguro Social): ' + INSS + ' ----- 9%');
    console.log('Reajuste: ' + reajuste +' (' + salarioBruto + '-' + INSS + ')');
}
else if ((salarioBruto >=  2594.93) && (salarioBruto <= 5189.82)){
    INSS = (salarioBruto * 11) / 100;
    reajuste = salarioBruto - INSS;
    
    console.log('INSS (Instituto Nacional do Seguro Social): ' + INSS + ' ----- 11%');
    console.log('Reajuste: ' + reajuste +' (' + salarioBruto + '-' + INSS + ')');
}
else {
    INSS = 570.88;
    reajuste = salarioBruto - INSS;
    
    console.log('INSS (Instituto Nacional do Seguro Social): ' + INSS + ' ----- Alíquota máxima');
    console.log('Reajuste: ' + reajuste +' (' + salarioBruto + '-' + INSS + ')');
}

if (reajuste <= 1903.98) {
    IR = 0;
    reajuste2 = reajuste - IR;
    
    console.log('IR (Imposto de Renda): ' + IR + ' ----- Insento');
    console.log('Salario Líquido: ' + reajuste2 +' (' + reajuste + '-' + IR + ')');
}
else if ((reajuste >= 1903.99) && (reajuste <= 2826.65)) {
    IR = ((reajuste * 7.5) / 100) - 142.80;
    reajuste2 = reajuste - IR;

    console.log('IR (Imposto de Renda): ' + IR + ' ----- 7.5% + parcela de 142.80');
    console.log('Salario Líquido: ' + reajuste2 +' (' + reajuste + '-' + IR + ')');
}
else if ((reajuste >= 2826.66) && (reajuste <= 3751.05)) {
    IR = ((reajuste * 15) / 100) - 354.80;
    reajuste2 = reajuste - IR;

    console.log('IR (Imposto de Renda): ' + IR + ' ----- 15% + parcela de 354.80');
    console.log('Salario Líquido: ' + reajuste2 +' (' + reajuste + '-' + IR + ')');
}
else if ((reajuste >= 3751.06) && (reajuste <= 4664.68)) {
    IR = ((reajuste * 22.5) / 100) - 636.13;
    reajuste2 = reajuste - IR;

    console.log('IR (Imposto de Renda): ' + IR + ' ----- 22.5% + parcela de 636.13');
    console.log('Salario Líquido: ' + reajuste2 +' (' + reajuste + '-' + IR + ')');
}
else {
    IR = ((reajuste * 27.5) / 100) - 869.36;
    reajuste2 = reajuste - IR;

    console.log('IR (Imposto de Renda): ' + IR + ' ----- 27.5% + parcela de 869.36');
    console.log('Salario Líquido: ' + reajuste2 +' (' + reajuste + '-' + IR + ')');
}
