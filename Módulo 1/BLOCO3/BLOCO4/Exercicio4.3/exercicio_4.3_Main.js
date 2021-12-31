//Exercicio 1.
let array = [];     

for (let index = 10; index > 0; index -= 1){
    array.push(index);
}

let fator = 1

for (let fatorial of array) {
    fator *= fatorial
}
console.log(fator);
//Exercicio feito com ajuda de: https://pt.stackoverflow.com/questions/363601/como-fa%C3%A7o-a-multiplica%C3%A7%C3%A3o-de-um-array-dentro-de-uma-fun%C3%A7%C3%A3o-em-js

//Exercicio 2.
let word = 'tryber';
let palavraReverse = '';

for (let index = word.length - 1; index >= 0; index -= 1){
    palavraReverse = palavraReverse.concat(word[index])
}
console.log(palavraReverse);
//Exercicio feito com ajuda de: https://www.delftstack.com/pt/howto/javascript/javascript-add-to-string/#:~:text=Para%20adicionar%20um%20caractere%20a,Veja%20o%20c%C3%B3digo%20abaixo.&text=Na%20sa%C3%ADda%2C%20voc%C3%AA%20ver%C3%A1%20que%20o%20caractere%20%C3%A9%20adicionado%20%C3%A0%20string.

//Exercicio 3.
let array = ['java', 'python', 'html', 'css', 'javascript'];
let maior = array[0].length;
let menor = array[0].length;
let maiorRetorno;
let menorRetorno;

for (let maiorPalavra of array) {
    if (maiorPalavra.length > maior) {
        maior = maiorPalavra.length;
    }
    if (maiorPalavra.length === maior) { 
        maiorRetorno = maiorPalavra;
    }
}
console.log(maiorRetorno);

for (let menorPalavra of array) {
    if (menorPalavra.length < menor){
        menor = menorPalavra.length
    }
    if (menor === menorPalavra.length) {
        menorRetorno = menorPalavra
    }
}
console.log(menorRetorno);

//Exercicio 4.
let limite = 50;
let arrayPrimos = [];

for(let index = 2; index <= limite; index += 1){
    let primo = true;

    for(let divisor = 2; divisor < index; divisor += 1){
        if(index % divisor === 0){
            primo = false;
            break;
        } 
    }
    if(primo == true){
        arrayPrimos.push(index);
    } 
}
const maiorPrimo = arrayPrimos[arrayPrimos.length - 1]

console.log('O maior número primo entre 1 e '+ limite + ' é: ' + maiorPrimo);
//Exercício feito com ajuda do vídeo no youtube: 'Javascript Aula 32 - (Numeros Primos)' de: Dev Aprender