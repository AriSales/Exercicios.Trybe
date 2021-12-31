git //Arrays (listas)

//Exercicio 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercicio 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercicio 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);

//For/of

//Exercicio 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let cont = 0; cont < groceryList.length; cont += 1) {
    console.log(groceryList[cont]);
}

//Exercicio 2
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nome of names) {
    console.log('Seu nome é: ' + nome);
}
