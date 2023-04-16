const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const input = document.getElementById("new-task-description");
  const inputValue = input.value;

  const taskElement = document.createElement("li");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
    <span class="description">${inputValue}</span>
    <button class="delete">Delete</button>
  `;

  const deleteButton = taskElement.querySelector(".delete");
  deleteButton.addEventListener("click", function() {
    taskElement.remove();
  });

  taskList.appendChild(taskElement);
  input.value = "";
});
