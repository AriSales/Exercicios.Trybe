//Exercicios Parte I - Objetos e For/In
//1.
function exercicio1(){
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  return console.log('bom dia, ' + info.personagem)
}
exercicio1();

//2.
function exercicio2(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };
    info['recorrente'] = 'sim'
    
    return console.log(info);
}
exercicio2();

//3.
function exercicio3(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };
    info['recorrente'] = 'sim'

    for (keys in info){
        console.log(keys);
    }
}
exercicio3();

//4.
function exercicio4(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      };
    info['recorrente'] = 'sim'

    for (keys in info){
        console.log(info[keys]);
    }
}
exercicio4();

//5. Resolvido com ajuda do gabarito;
function exercicio5(){
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'sim',
      };
    let info2 = {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
        recorrente: 'não',
    }

    for (keys in info){
        if(keys === 'recorrente' && info[keys] === 'sim' && info2[keys] === 'sim') {
            console.log('Ambos recorrentes');
        } else {
            console.log(info[keys] + ' e ' + info2[keys])
        }

    }
}
exercicio5();

//6. Resolvido com ajuda do gabarito;
function exercicio6(){
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor['livrosFavoritos'][0]['titulo']);
}
exercicio6();

//7.
function exercicio7(){
    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },
        ],
      };
      leitor['livrosFavoritos'][1] = {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editor: 'Rocco',
      }
      console.log(leitor)
    }
exercicio7();

//8.
function exercicio8(){
        let leitor = {
            nome: 'Julia',
            sobrenome: 'Pessoa',
            idade: 21,
            livrosFavoritos: [
              {
                titulo: 'O Pior Dia de Todos',
                autor: 'Daniela Kopsch',
                editora: 'Tordesilhas',
              },
            ],
          };
          leitor['livrosFavoritos'][1] = {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
          }
          if (leitor['livrosFavoritos'][0] !== undefined && leitor['livrosFavoritos'][1] !== undefined){
          console.log(leitor.nome + ' tem 2 livros favoridos :)')
        } else {
            console.log(leitor.nome + 'Não tem livros preferidos :/')
        }
    }
exercicio8();

//Exercicios Parte II - Funções -> Consulta de https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

//1.
function palindromo(string){
    let split = string.split("");
    let reverseArray = split.reverse();
    let join = reverseArray.join("");

    if (join === string) {
        return true
    } else {
        return false
    }
}
palindromo('arara');

//2.
function maior(arrayNumeros){
    let maior = arrayNumeros[0];
    
    for (m in arrayNumeros){
        if (arrayNumeros[m] > maior){
            maior = m;
        }
    }
    return maior
}
maior([2, 3, 6, 7, 10, 1]);

//3.
function menor(arrayNumeros2){
    let menor = arrayNumeros2[0];
    
    for (mn in arrayNumeros2){
        if (arrayNumeros2[mn] < menor){
            menor = mn;
        }
    }
    return menor
}
menor([2, 4, 6, 7, 10, 0, -3]);

//4.
function maiorString(arrayNomes){
  let maiorNome = arrayNomes[0];

  for (index in arrayNomes){
    let tamanhoNome = arrayNomes[index]

    if(arrayNomes[index].length > maiorNome.length){
      maiorNome = arrayNomes[index];
    }
  }
  return maiorNome;
}
maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

//5.
//6. 
function somatorio(N){
  let result = 0;

  for (let cont = 1; cont <= N; cont += 1){
    result += cont;
  }
  return result;
}
somatorio(5);

//7.
function verifyEnd(word, end){
  word = word.split('');
  end = end.split('');
  boolean = true;

  for (let cont = word.length - 1; cont > end.length; cont -= 1) {
    end2Reverse = word[cont].join("");
    end2 = end2Reverse.reverse;
  }
  return end2
}
verifyEnd('trybe','be');
