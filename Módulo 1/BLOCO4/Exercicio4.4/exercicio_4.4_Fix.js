//Exercicios Fixação. Objetos e Funções
//1.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
//2. 

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player['age'] + ' anos de idade');

//3.
player.bestInTheWord = [2006, 2007, 2008, 2009, 2010, 2018];
let numero = player.bestInTheWord.length;
//4.
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'foi eleita a melhor do mundo por ' + numero + ' vezes');

//5.
console.log('Ajogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

//Exercicios Fixação. For/in
//1.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let name in names){
      console.log('olá ' + names[name]);
  }

//2.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car){
      console.log(key + ' ' + car[key]);
  }