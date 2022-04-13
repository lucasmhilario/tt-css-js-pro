const pegaCep = document.querySelector("#busca-cep");
const botaoBuscaCep = document.querySelector("#btn-busca-cep");

botaoBuscaCep.addEventListener("click", (event) => {
  event.preventDefault();
  const cep = pegaCep.value;

  const teste = fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    console.log(response);
    return response.json();
  }).then ((response) => {
    console.log("local", response);
    document.querySelector(".endereco").innerHTML = `
    <div>
      <h1>${response.logradouro}</h1>
      <h1>${response.localidade}</h1>
      <h1>${response.cep}</h1>
      <h1>${response.bairro}</h1>
    </div>`
  });

});