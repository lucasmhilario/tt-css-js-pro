// visualizar tudo no console do browser;

// var name = "José";
// var idade = 30;
// var possuiFaculdade = true;
// var comida;
// var time = null;
// var novoObjeto = {};

// console.log(comida);
// console.log(novoObjeto);

// var name;
// var idade;
// var possuiFaculdade;
// var comida;
// var time;
// var novoObjeto;

// console.log(name);
// name = 30;
// possuiFaculdade = true;

// console.log(name);

// console.log(typeof possuiFaculdade);
// // console.log(typeof );

// concatenação
// var nome = "Lucas";
// var sobreNome = "Martins";
// var nomeCompleto = nome + " " + sobreNome;
// console.log (">>>",nomeCompleto);

// var jogos = 30;
// var totalDeJogos = "Eu joguei mais de " + jogos + " jogos!";
// console.log (totalDeJogos)

// const template = `Eu joguei mais de ${jogos} jogos`;
// console.log(">>>", template)

// var nome = "Lucas"
// numero = 14

// if(numero >= 18){
//   console.log("Verdadeiro");
// } else if (nome == "Lucas") {
//   console.log ("verdadeiro if else");
// } else if (numero == 14){
//   console.log("verdadeiro if else")
// }else {
//   console.log("deu tudo errado");
// }


// var tipo = "baixoteste";

// // cada switch case recebe um parametro;
// switch (tipo) {
//   case "facebook":
//     console.log ("facebook");
//     break;
//   case "google":
//     console.log ("google");
//     break
//   case "email":
//     console.log("email");
//   default:
//     console.log("nenhum");
//     break;
// }

// console.log (10 == 10);
// console.log (10 == "10");
// console.log (10 === "10");
// console.log (10 !== "10");
// console.log (10 != "10");

// function calculaValor(lado){
//   return lado * lado;
// }
// console.log(">>>>>", calculaValor(10));

// function google(){
//   console.log("google");
// }
// function facebook(){
//   console.log("facebook");
// }
// function typeValue (type){
//   switch (type) {
//     case google:
//       google();
//       break;
//     case "facebook":
//       facebook();
//       break
//     default:
//       console.log("Esse é a resposta padrão!");
//       break;
//   }
// }
// typeValue("google");

// var data = {
//   aluno: {
//     nome: "Lucas",
//     sobreNome: "Martins",
//     idade: 27,
//     faculdade: false,
//     comida: "pizza",
//     time: "inter",
//     nomeCompleto: function (){
//       return this.nome + " " + this.sobreNome;
//     }
//   }
// };

// função só funciona quando possuí o ();
// pega o dado de dentro do objeto.

// console.log(data.aluno.nome);
// console.log(data.aluno.idade);
// console.log(data.aluno.nomeCompleto());



// console.log(data.alunos[0].nome);
// console.log(data.alunos[1].nome);

// var fruta = ["maça", "banana", "pera"];
// console.log(fruta[2]);
// console.log(fruta[0]);
// console.log(fruta.pop());
// console.log(fruta);
// fruta.push("uva");
// fruta.push("laranja");
// console.log(fruta);
// console.log(fruta.length);

// for (var i = 0; i < fruta.length; i++) {
//   const element = fruta[i];
//   console.log(">> ", element);
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// var fruta = ["maça", "banana", "pera"];
// var i = 0;

// enquanto
// while(i < fruta.length) {
//   console.log(fruta[i]);
//   i++;
// }

// do: faça(execute) / while: enquanto;
// do{
//   console.log("entrou no do");
//   i++;
// } while(i < fruta.length);
// vai bugar o browser se eu colocar qualquer outro valor.

// var fruta = ["maça", "banana", "pera"];
// var data = {
//   alunos: [
//     {
//       nome:"Lucas",
//       sobreNome: "Martins",
//       idade: 27,
//       faculdade: false,
//       comida: "pizza",
//       time: "inter",
//     },
//     {
//       nome:"Fernando",
//       sobreNome: "Martins",
//       idade: 56,
//       faculdade: true,
//       comida: "pizza",
//       time: "São Paulo",
//     }
//   ]
// };

// console.log(fruta);
// data.alunos.forEach(function(item){
//   console.log(item.nome);
//   console.log(item.sobreNome);
// });

// console.log(fruta);
// data.alunos.forEach(function(item,index){
//   console.log(`Meu nome é ${item.nome} e tenho ${item.idade}anos`);});

// window são todas as funções;
// console.log(window);

// notificação
// window.

// var titulo = document.querySelector("#title");
// var botao = document.querySelector("button");

// function callback(){
//   // alert ("chamou");
//   title.innerHTML = "Clicou no titulo";
//   botao.classList.toggle("botaoAtivo");
// };

// titulo.addEventListener("click", callback); //callback() - já executa a função.

// botao.addEventListener ("click", function() {
//   botao.innerHTML = "Clicou no botao";
//   botao.classList.add("botaoClick");
// });

// var main = document.querySelector(".main");
// var botao = document.createElement("button");

// botao.innerText = "Adicionar";
// botao.classList.add("botaoClick");
// main.appendChild(botao);

if (true) {
  var carro = "fiat";
  console.log(carro);
}
console.log(carro);
