// Função para adicionar tarefa à lista
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        newTaskItem.innerText = taskText;
        taskList.appendChild(newTaskItem);
        taskInput.value = "";
    }
}

// Função para marcar ou desmarcar tarefa como concluída
document.getElementById("taskList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
