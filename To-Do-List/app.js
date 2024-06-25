document.getElementById("add-task").addEventListener("click", function () {
  const taskText = document.getElementById("new-task").value;
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.setAttribute("readonly", true);

  const editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  taskItem.appendChild(taskInput);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  document.getElementById("new-task").value = "";

  taskInput.addEventListener("click", function () {
    taskItem.classList.toggle("completed");
  });

  editButton.addEventListener("click", function () {
    if (editButton.textContent.toLowerCase() === "edit") {
      taskInput.removeAttribute("readonly");
      taskInput.focus();
      editButton.textContent = "Save";
    } else {
      taskInput.setAttribute("readonly", true);
      editButton.textContent = "Edit";
    }
  });

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });
});
