let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (number of numbers) {
    console.log(number);
}

//2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index of numbers){
    soma += index
}
console.log(soma);

//3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let index of numbers){
    soma += index
}

media = soma/numbers.length
console.log(media);

//4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;

for (let index of numbers){
    soma += index
}

media = soma/numbers.length

if (media > 20){
    console.log('Valor maior que 20');
}
else {
    console.log("valor menor ou igual a 20");
}

//5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let index of numbers){
    if (index > maior){
        maior = index;
    }
}
console.log(maior);

//6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let index of numbers){
    if (index%2 != 0){
        impar.push(index);
    }
}
if (impar.length === 0){
    console.log("nenhum valor ímpar encontrado");
}
else {
    console.log(impar.length);
}

//7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index of numbers){
    if (index < menor){
        menor = index;
    }
}
console.log(menor);

//8
let array25 = [];

for (index = 1; index <= 25; index += 1){
    array25.push(index);
}
console.log(array25);

//9 
let array25 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index of array25){
    divisao = index / 2
    console.log(index + ' dividido por 2 é : ' + divisao)
}