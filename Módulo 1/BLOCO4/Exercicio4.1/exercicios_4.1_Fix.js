// Exercicios de fixação 1.
const myName = "Ari";
const birthCity = "Miracema";
let birthYear = 2003;
console.log(myName, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);
birthCity = "Uberlândia"; // Dará erro porque uma constante não pode ser reatribuida!

// Exercicios  de fixação 2.
const base = 5;
let height = 8;
const area = base * height;
console.log(area);
const perimeter = base + base + height + height;
console.log(perimeter);

// Exercicios  de fixação 3.
const nota = 75;

if (nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}
else{
    console.log("Você foi reprovada(o)");
}

// Exercicios  de fixação 4.
const currentHour = 14;
let message = null;

if (currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour > 11 && currentHour < 14){
    message = "Hora do almoço!!!";
}
else {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

// Exercicios  de fixação 5.
let weekDay = "terça-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido UwU");
}

// Exercicios  de fixação 6.
let estado = 'aprovada';

switch (estado) {
    case 'aprovada':
        console.log('aprovada');
        break;

    case 'lista':
        console.log('lista');
        break;

    case 'reprovada':
        console.log('reprovada');
        break;

    default:
        console.log('não se aplica');
}