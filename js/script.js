// Função
function addTask() {

    // Resgatando o título da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    // Valida a tarefa 
    if (taskTitle) {

        // Clona o template da <li>
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true); 

        // Cria título no campo de título <span> vazio do template usando o textcontent
        newTask.querySelector(".task-title").textContent = taskTitle;

        // Remove classe que deixa sem display e template, para que a nova tarefa possa ser adicionada na lista
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //  Adiciona a tarefa na lista 
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // Evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        // Evento de concluído
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // Limpar texto após adicionar tarefa
        document.querySelector("#task-title").value="";

    } else {
        alert('Você deve escrever o nome da tarefa.');
    }

    // Função de remover tarefa
    function removeTask(task) {
        task.parentNode.parentNode.remove(true);
    }

    // função concluir tarefa
    function completeTask(task) {
        const taskToComplete = task.parentNode.parentNode.parentNode;
        taskToComplete.classList.toggle("done");
    }
}

// Evento adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addTask();
});

// Data e hora

const agora = new Date();
  const optionsData = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dataFormatada = agora.toLocaleDateString('pt-BR', optionsData);
  const optionsHora = { hour: 'numeric', minute: 'numeric' };
  const horaFormatada = agora.toLocaleTimeString('pt-BR', optionsHora);

const horario = document.querySelector('#horario');

horario.textContent = (horaFormatada)

const datacontent = document.querySelector('#dia-data-ano');

datacontent.textContent = (dataFormatada);

function atualizarHorario() {
    const agora = new Date();
    const optionsData = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', optionsData);
    const optionsHora = { hour: 'numeric', minute: 'numeric' };
    const horaFormatada = agora.toLocaleTimeString('pt-BR', optionsHora);

    const horario = document.querySelector('#horario');
    horario.textContent = horaFormatada;

    const datacontent = document.querySelector('#dia-data-ano');
    datacontent.textContent = dataFormatada;
  }

  // Atualiza o horário e a data a cada minuto
  setInterval(atualizarHorario, 60000);
