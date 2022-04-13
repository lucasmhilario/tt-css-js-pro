const button = document.querySelector("#button");
const numeroItens = document.querySelector("#number");
const escola = {
  alunos: [
    {
      nome: "João",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Paulo",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Carlos",
      idade: "20",
      sexo: "masculino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Maria",
      idade: "20",
      sexo: "Feminino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      nome: "Joana",
      idade: "20",
      sexo: "Feminino",
      curso: "Informática",
      turma: "A",
      nota: "8.5",
      faltas: "10",
      foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
  ]
};

const itemNumber = (value) =>  {
  value.map((item) => {
    document.querySelector(".listItens").innerHTML += 
      `<div class="itemList">
         <div class="div-principal">
            <p class="text">Nome:${item.nome}</p>
            <p class="text">Idade:${item.idade}</p>
         </div>
         <div class="div-principal">
            <p class="text">Curso:${item.curso}</p>
            <p class="text">Nota:${item.nota}</p>
         </div>
         <p class="text">Faltas:${item.faltas}</p>
      </div>
      `;
  });
}




//   for (let i = 0; i < value; i++) {
//     document.querySelector(".listItens").innerHTML += 
//       `<div class="itemList">
//          <div class="div-principal">
//             <p class="text">Nome:${value[i].nome}</p>
//             <p class="text">Idade:${value[i].idade}</p>
//          </div>
//          <div class="div-principal">
//             <p class="text">Curso:${value[i].curso}</p>
//             <p class="text">Nota:${value[i].nota}</p>
//          </div>
//          <p class="text">Faltas:${value[i].faltas}</p>
//       </div>
//       `;
//   }
// };

button.addEventListener("click", function(event) {
  event.preventDefault();
  // preventDefault pausa a atualização de página.
   const quantidadeAdicionada = numeroItens.value;
   console.log(quantidadeAdicionada);
   itemNumber(escola.alunos);
});

// const carros =["Ford","Fiat","Renault","Chevrolet"];
// const newCar = carros.map((carro, index, array) => {
//   console.log("index", index);
//   console.log("array", array);
//   return "Carro: " + carro ;
// });

// console.log (newCar);


// const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeroX3 = numero.map((n) => n * 3);

// console.log("numeroX3 >>", numero);
// console.log("numeroX3 >>", numeroX3);


// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15
//   },
//   {
//     nome: "HTML 2",
//     min: 10
//   }
// ];

// const tempoAulas = aulas.map((aula) =>aula.min);

// console.log ("tempoAulas >>", tempoAulas);

// reduce = ifTERNARIO 
// const numeroReduce = [110, 22, 48, 4, 96, 9, 8, 30, 10];
// const maiorValor = numeroReduce.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// });

// console.log("maiorValor >>", maiorValor);

//find e finde index
// const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
// const buscaFruta = frutas.findIndex ((fruta) => {
//   return fruta === "Banana";
// });
// buscaFruta >= 0
// ? console.log("Fruta encontrada")
// : console.log("Fruta não encontrada");

// const buscaGenero = escola.alunos.filter((aluno) => aluno.sexo === "masculino");

// console.log("buscaGenero >>", buscaGenero);