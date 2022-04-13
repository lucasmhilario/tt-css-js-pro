const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  // if(condicao){
  //   resolve("Resolvido");
  // } else {
  //   reject("Rejeitado");
  // }

  setTimeout(() => {
    resolve("Etapa 1");
  },2000)

})
// then só responde qunado a função da resolve/true!
promessa.then((response) => {
  console.log(response);
  return "Etapa 2";
}).then((response) => {
  console.log(response);
  return "Etapa 3";
  //alert ("Usuário não encontrado")
})
.then((response) =>response + 4)
.then((response) => {
  console.log(response);
})
.catch((error) => {
  alert("erro:" + error);
});
//quando false/reject ele chama o catch e da o erro.
