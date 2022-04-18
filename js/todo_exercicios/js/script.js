const inputTask = document.querySelector("#todo");
const btnAdd = document.querySelector("#registro");
const list_Task = document.querySelector(".listTasks")

const addTask = (task) => {
  fetch('https://61d3bc23b4c10c001712ba53.mockapi.io/tasks', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  }).then((response) => response.json())
    .then((data) =>{
      clearHtml();
      list_Task();
  }).catch((error) => {
    alert("Não quero este erro", error);
  })
};


//json = const data = {
// title:"teste",
// description:"teste",
// done: false
//};

const clearHtml = () => {
  list_Task.innerHTML = "";
};

const removeTask = (id) => {
  fetch (`https://61d3bc23b4c10c001712ba53.mockapi.io/tasks/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"  
    }
  }).then((response) => response.json())
  .then(response => {
    clearHtml();
    listTask();
  })
  .catch((error) => {
    alert("Não existe!", error);
  });
  
}

const listTask = () =>{
  fetch ("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks")
  .then((response) => response.json())
  .then((data) => {
    clearHtml();
    data.map((task) => {
      list_Task.innerHTML += `<div id="list-task-item">
      <div>
        <h1>${task.task}</h1>
        <p>${task.done ? "Feito" : "Pendente"}</p>
      </div>
      <div>
      <button onclick="removeTask(${task.id})">
        <img src="img/lixeira.png" alt="Lixeira">
      </button>
      </div>
    </div>`;
    });
  }).catch((error) => {
    alert("Erro ao cadastrar a tarefa(2)", error);
  })
};

listTask();

btnAdd.addEventListener("click", (event) =>{
  event.preventDefault();
  const task = inputTask.value;
  const payload = {
    task: task,
    done: false,
    email:"lucashilariomartins@gmail.com"
  };
  addTask(payload);
});
